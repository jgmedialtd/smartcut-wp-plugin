var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as d3, a as convertUnit, v as valueSet, b as defineComponent, m as markRaw, e as getOptions, h as hasMachining, f as extrasValidation, i as getMinValue, j as getMaxValue, k as isFieldEnabled, l as isFieldPresent, s as setFieldEnabled, n as getInputMode, p as getInputType, _ as _export_sfc, r as resolveComponent, o as openBlock, q as createElementBlock, t as createBaseVNode, u as createVNode, w as toDisplayString, x as createCommentVNode, y as normalizeClass, z as normalizeStyle, F as Fragment, A as renderList, B as withDirectives, D as vShow, c as createBlock } from "./main-DC0vZSqL.js";
import InputField from "./InputField-xEsDa5i1.js";
class Vis {
  constructor({
    HTMLElement: el,
    vueComponent,
    shape,
    units = "decimal",
    decimalPlaces = 2
  }) {
    __publicField(this, "HTMLElement");
    __publicField(this, "HTMLElementWidth");
    __publicField(this, "el");
    __publicField(this, "units");
    __publicField(this, "decimalPlaces");
    __publicField(this, "vueComponent");
    __publicField(this, "shape");
    __publicField(this, "h");
    __publicField(this, "w");
    __publicField(this, "shapeL");
    __publicField(this, "shapeW");
    __publicField(this, "padding", 40);
    __publicField(this, "xScale", d3.scaleLinear());
    __publicField(this, "yScale", d3.scaleLinear());
    __publicField(this, "yScaleFlipped", d3.scaleLinear());
    __publicField(this, "measurementScale", d3.scaleLinear());
    __publicField(this, "xAxis");
    __publicField(this, "yAxis");
    __publicField(this, "formatDp");
    __publicField(this, "svgCanvas");
    __publicField(this, "currentSide", 0);
    __publicField(this, "bandingStrokeWidth", 2);
    __publicField(this, "shapeGroup");
    __publicField(this, "bandingGroup");
    __publicField(this, "holeGroup");
    __publicField(this, "hingeHoleGroup");
    __publicField(this, "cornerGroup");
    __publicField(this, "legendGroup");
    __publicField(this, "pointGroup");
    __publicField(this, "loaded", false);
    this.HTMLElement = el;
    this.units = units;
    this.decimalPlaces = decimalPlaces;
    this.HTMLElementWidth = this.HTMLElement.offsetWidth;
    this.vueComponent = vueComponent;
    this.shape = shape;
    this.w = 0;
    this.h = 0;
  }
  init() {
    if (this.loaded) return;
    if (!this.HTMLElement) return false;
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w) return false;
    this.el = d3.select(this.HTMLElement);
    if (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces))
      this.decimalPlaces = 2;
    this.formatDp = d3.format(`.${this.decimalPlaces}f`);
    this.shapeL = this.shape.getLongSide();
    this.shapeW = this.shape.getShortSide();
    if (!this.svgCanvas) {
      this.svgCanvas = this.HTMLElement.querySelector("svg");
      if (this.svgCanvas === null) {
        const svg = this.el.append("svg").attr("class", "vis");
        if (svg === null) return;
        this.svgCanvas = svg;
      }
    }
    this.loaded = true;
  }
  create() {
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return false;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2");
    this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group");
    this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group");
    this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group");
    this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group");
    this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group");
    this.createShape();
    this.createHoles();
    this.createHingeHoles();
    this.createBanding();
    this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x");
    this.xAxis.call(
      d3.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    );
    this.xAxis.selectAll("text").attr("dy", "-5px");
    this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y");
    this.yAxis.call(
      d3.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    );
    this.xAxis.selectAll("text").attr("dx", "5px");
    this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group");
    this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group");
    this.createLegend();
  }
  addPoint(x, y) {
    this.pointGroup.append("circle").attr("cx", this.xScale(x)).attr("cy", this.getYScale()(y)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    this.svgCanvas.selectAll(".shape-group > *").remove();
    this.svgCanvas.selectAll(".point-group > *").remove();
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h) return false;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2);
    this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const path = d3.path();
    const corners = this.shape.machining.corners;
    const sizes = [];
    const types = [];
    [0, 1, 2, 3].forEach((i) => {
      const corner = corners[i];
      if (corner && corner.type) {
        sizes.push(!corner.size ? 0 : convertUnit(corner.size));
        types.push(corner.type);
      } else {
        sizes.push(0);
        types.push(null);
      }
    });
    const drawCorner = (index, x1, y1, x2, y2) => {
      if (types[index] === "radius") {
        path.arcTo(
          this.xScale(x1),
          this.getYScale()(y1),
          this.xScale(x2),
          this.getYScale()(y2),
          this.measurementScale(sizes[index])
        );
      } else if (types[index] === "bevel") {
        path.lineTo(this.xScale(x2), this.getYScale()(y2));
      } else {
        path.lineTo(this.xScale(x1), this.getYScale()(y1));
        path.lineTo(this.xScale(x2), this.getYScale()(y2));
      }
    };
    path.moveTo(this.xScale(0), this.getYScale()(sizes[0]));
    drawCorner(0, 0, 0, sizes[0], 0);
    if (types[0] === "bevel" || types[1] === "bevel") {
      path.lineTo(this.xScale(this.shapeL - sizes[1]), this.getYScale()(0));
    }
    drawCorner(1, this.shapeL, 0, this.shapeL, sizes[1]);
    if (types[1] === "bevel" || types[2] === "bevel") {
      path.lineTo(
        this.xScale(this.shapeL),
        this.getYScale()(this.shapeW - sizes[2])
      );
    }
    drawCorner(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - sizes[2],
      this.shapeW
    );
    if (types[2] === "bevel" || types[3] === "bevel") {
      path.lineTo(this.xScale(sizes[3]), this.getYScale()(this.shapeW));
    }
    drawCorner(3, 0, this.shapeW, 0, this.shapeW - sizes[3]);
    path.closePath();
    this.shapeGroup.append("path").attr("id", "shape").attr("d", path.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let text;
    text = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    );
    text = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "bottom").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    );
    this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px");
    this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2));
    text = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "bottom").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    );
    text = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1) + "px"
    );
    text = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    );
    text = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove();
    this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((h) => h.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (h) => h.valid === false).classed("partial", (h) => !h.isThroughShape(this.shape)).attr("cx", (h) => this.xScale(h.x)).attr("cy", (h) => {
      const drawYPosition = h.getYDrawPosition(this.shape, this.currentSide);
      const scaledYposition = this.yScale(drawYPosition);
      return scaledYposition;
    }).attr("r", (h) => this.measurementScale(h.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const allHingeHoles = this.shape.machining.getAllHingeHoles(this.shape);
    const visibleHingeHoles = allHingeHoles.filter((h) => {
      const show = h.shouldShow(this.shape, this.currentSide);
      return show;
    });
    this.hingeHoleGroup.selectAll("g").data(visibleHingeHoles).join("circle").attr("class", "hole").classed("invalid", (h) => h.valid === false).classed("partial", (h) => !h.isThroughShape(this.shape)).attr("cx", (h) => this.xScale(h.x)).attr("cy", (h) => this.yScale(h.getYDrawPosition(this.shape, this.currentSide))).attr("r", (h) => this.measurementScale(h.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const banding = this.shape.banding;
    const offset = -1;
    const bandingData = [];
    for (const [key, value] of Object.entries(banding)) {
      if (!value) continue;
      switch (key) {
        case "x1":
          bandingData.push({
            x1: this.padding - offset,
            x2: this.padding - offset,
            y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
            y2: this.getYScale()(
              this.shapeW - (this.shape.machining.corners[3].size ?? 0)
            )
          });
          break;
        case "x2":
          bandingData.push({
            x1: this.w - this.padding + offset,
            x2: this.w - this.padding + offset,
            y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
            y2: this.getYScale()(
              this.shapeW - (this.shape.machining.corners[2].size ?? 0)
            )
          });
          break;
        case "y1":
          bandingData.push({
            x1: this.padding + this.getCornerBandingSize(0),
            x2: this.w - this.padding - this.getCornerBandingSize(1),
            y1: this.getYScale()(0) + (this.currentSide === 0 ? offset : -offset),
            y2: this.getYScale()(0) + (this.currentSide === 0 ? offset : -offset)
          });
          break;
        case "y2":
          bandingData.push({
            x1: this.padding + this.getCornerBandingSize(3),
            x2: this.w - this.padding - this.getCornerBandingSize(2),
            y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -offset : offset),
            y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -offset : offset)
          });
          break;
      }
    }
    this.bandingGroup.selectAll("g").data(bandingData).join("line").attr("class", "banding").attr("x1", (d) => d.x1).attr("x2", (d) => d.x2).attr("y1", (d) => d.y1).attr("y2", (d) => d.y2).attr("stroke-width", this.bandingStrokeWidth);
    const path = d3.path();
    this.shape.machining.corners.forEach((corner, i) => {
      if (!corner.type) return;
      let start, middle, end;
      switch (i) {
        case 0:
          if (!valueSet(banding.a) || banding.a === false) return;
          start = {
            x: this.xScale(0) - offset,
            y: this.getYScale()(convertUnit(corner.size ?? 0))
          };
          middle = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          };
          end = {
            x: this.xScale(convertUnit(corner.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? offset : -offset)
          };
          break;
        case 1:
          if (!valueSet(banding.b) || banding.b === false) return;
          start = {
            x: this.xScale(this.shapeL - convertUnit(corner.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? offset : -offset)
          };
          middle = {
            x: this.xScale(this.shapeL) - offset,
            y: this.getYScale()(0)
          };
          end = {
            x: this.xScale(this.shapeL) + offset,
            y: this.getYScale()(convertUnit(corner.size ?? 0))
          };
          break;
        case 2:
          if (!valueSet(banding.c) || banding.c === false) return;
          start = {
            x: this.xScale(this.shapeL) + offset,
            y: this.getYScale()(this.shapeW - convertUnit(corner.size ?? 0))
          };
          middle = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          };
          end = {
            x: this.xScale(this.shapeL - convertUnit(corner.size ?? 0)) - offset,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? offset : -offset)
          };
          break;
        case 3:
          if (!valueSet(banding.d) || banding.d === false) return;
          start = {
            x: this.xScale(convertUnit(corner.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? offset : -offset)
          };
          middle = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          };
          end = {
            x: this.xScale(0) - offset,
            y: this.getYScale()(this.shapeW - convertUnit(corner.size ?? 0)) + offset
          };
          break;
        default:
          return;
      }
      path.moveTo(start.x, start.y);
      if (corner.type === "radius") {
        path.arcTo(
          middle.x,
          middle.y,
          end.x,
          end.y,
          this.measurementScale(corner.size ?? 0)
        );
        switch (i) {
          case 0:
          case 2:
            path.lineTo(end.x + offset, end.y);
            break;
          case 1:
          case 3:
            path.lineTo(end.x, end.y - (this.currentSide === 0 ? offset : -1));
            break;
        }
      } else if (corner.type === "bevel") {
        path.lineTo(end.x, end.y);
      }
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][i]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", path.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    if (this.svgCanvas) this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    this.yAxis.call(
      d3.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    );
    this.xAxis.selectAll("text").attr("dx", "5px");
    this.createShape();
    this.createHoles();
    this.createHingeHoles();
    this.createLegend();
    this.createBanding();
  }
  getCornerBandingSize(index) {
    if (!this.shape.machining.corners[index].type) return 0;
    return this.measurementScale(this.shape.machining.corners[index].size ?? 0);
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent) {
      this.vueComponent.suppressResizeObserver = true;
    }
    this.HTMLElementWidth = this.HTMLElement.offsetWidth;
    if (this.HTMLElementWidth === 0) return;
    this.reset();
    let aspectRatio = this.shape.getShortSide() / this.shape.getLongSide();
    this.w = this.HTMLElementWidth;
    if (this.w - this.padding * 2 < 0) return;
    let availableHeight = window.innerHeight - this.padding * 2 - 20;
    if (availableHeight > 600) availableHeight = 600;
    this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]);
    if (aspectRatio > 0.3) {
      this.h = this.xScale(this.shape.getShortSide()) + this.padding;
    } else {
      aspectRatio = 0.3;
      this.h = this.w * aspectRatio;
    }
    if (this.h > availableHeight) {
      this.h = availableHeight;
      this.w = this.h / aspectRatio;
      this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]);
    }
    this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]);
    this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]);
    console.assert(this.xScale(0) === this.yScaleFlipped(0));
    console.assert(this.xScale(100) === this.yScaleFlipped(100));
    this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]);
    this.HTMLElement.style.height = this.h + "px";
    this.create();
  }
}
const _sfc_main = defineComponent({
  name: "Machining",
  components: { InputField },
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
      default: () => {
        return {
          units: "decimal",
          sides: {
            enabled: true
          },
          //[] set defaults here based on units
          holes: {
            enabled: true,
            //[x]
            defaultDiameter: 10,
            //[x]
            diameters: [],
            //[x]
            minDiameter: 0,
            //[x]
            maxDiameter: 100,
            //[x]
            enableDepth: true,
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
            enabled: true,
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
            enabled: false,
            //[]
            diameters: [],
            //[]
            depths: []
            //[]
          },
          corners: {
            //default value set based on part size
            enabled: true,
            //[x]
            minValue: 0,
            //[x]
            // maxValue: 200, //[x]
            types: ["bevel", "radius"]
            //[x]
          },
          banding: {
            enabled: true,
            //[x]
            enableTypes: false,
            //[x]
            types: ["type a", "type b", "type c"],
            //[x]
            enableCorners: true
            //[x]
          }
        };
      }
    }
  },
  emits: ["update:shape", "close"],
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return {
      loaded: false,
      vis: markRaw({}),
      visInit: false,
      disableWatchers: false,
      listeners: {},
      suppressResizeObserver: false,
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
              enabled: true,
              type: "unitDependent",
              label: "X position"
            },
            y: {
              enabled: true,
              type: "unitDependent",
              label: "Y position"
            },
            diameter: {
              enabled: true,
              type: ((_a = this.options.holes.diameters) == null ? void 0 : _a.length) ? "select" : "unitDependent",
              label: "Diameter",
              output: ((_b = this.options.holes.diameters) == null ? void 0 : _b.length) ? "float" : void 0,
              options: ((_c = this.options.holes.diameters) == null ? void 0 : _c.length) ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t !== "undefined" && convertUnit(this.shape.t) > 0,
              //[]
              allowBlank: true,
              type: ((_d = this.options.holes.depths) == null ? void 0 : _d.length) ? "select" : "unitDependent",
              output: ((_e = this.options.holes.depths) == null ? void 0 : _e.length) ? "float" : void 0,
              options: ((_f = this.options.holes.depths) == null ? void 0 : _f.length) ? this.getSelectOptions(this.options.holes.depths) : void 0
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
              enabled: true,
              type: "unitDependent",
              min: 0
            },
            hingeLength: {
              enabled: true,
              type: "unitDependent",
              label: "Hinge length",
              min: 0
            },
            outerSpacing: {
              enabled: true,
              type: "unitDependent",
              label: "Outer spacing",
              min: 0
            },
            distanceFromEdge: {
              enabled: true,
              type: "unitDependent",
              label: "Distance from edge",
              min: 0
            },
            //[] separate option for hinges
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t !== "undefined" && convertUnit(this.shape.t) > 0,
              allowBlank: true,
              type: ((_g = this.options.holes.depths) == null ? void 0 : _g.length) ? "select" : "unitDependent",
              output: ((_h = this.options.holes.depths) == null ? void 0 : _h.length) ? "float" : void 0,
              options: ((_i = this.options.holes.depths) == null ? void 0 : _i.length) ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            //[] separate option for hinges
            diameter: {
              enabled: true,
              type: ((_j = this.options.holes.diameters) == null ? void 0 : _j.length) ? "select" : "unitDependent",
              label: "Diameter",
              output: ((_k = this.options.holes.diameters) == null ? void 0 : _k.length) ? "float" : void 0,
              options: ((_l = this.options.holes.diameters) == null ? void 0 : _l.length) ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            numHoles: {
              enabled: true,
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
              enabled: true,
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
              enabled: true,
              type: "unitDependent"
            },
            y: {
              enabled: true,
              type: "unitDependent"
            },
            depth: {
              allowBlank: true,
              enabled: true,
              type: "unitDependent"
            }
          },
          corners: {
            type: {
              enabled: true,
              label: "Type",
              type: "select",
              output: "string",
              options: this.getSelectOptions(this.options.corners.types)
            },
            size: {
              enabled: true,
              label: "Size",
              type: "unitDependent",
              min: () => typeof this.options.corners.minValue !== "undefined" ? convertUnit(this.options.corners.minValue) : 0,
              max: () => typeof this.options.corners.maxValue !== "undefined" ? convertUnit(this.options.corners.maxValue) : convertUnit(this.shape.getShortSide() / 2)
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
            enabled: true,
            type: "checkbox",
            label: "L1"
          },
          y2: {
            enabled: true,
            type: "checkbox",
            label: "L2"
          },
          x1: {
            enabled: true,
            type: "checkbox",
            label: "W1"
          },
          x2: {
            enabled: true,
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
            enabled: true,
            type: "select",
            label: "L1",
            options: this.getSelectOptions(this.options.banding.types)
          },
          y2: {
            enabled: true,
            type: "select",
            label: "L2",
            options: this.getSelectOptions(this.options.banding.types)
          },
          x1: {
            enabled: true,
            type: "select",
            label: "W1",
            options: this.getSelectOptions(this.options.banding.types)
          },
          x2: {
            enabled: true,
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
      return getOptions.call(this, ["units"]);
    },
    localShape: {
      get() {
        return this.shape;
      },
      set(value) {
        this.$emit("update:shape", value);
      }
    },
    hasMachining() {
      return hasMachining(this.localShape);
    },
    columns() {
      var _a;
      if (this.currentPrimary === "banding") {
        return this.options.banding.enableTypes ? 4 : 3;
      }
      if (!((_a = this.currentFieldKeys) == null ? void 0 : _a.length)) return 0;
      let number = Object.values(this.currentFields).filter((f) => f.enabled).length;
      number += 1;
      if (this.currentPrimary === "machining") {
        number += 1;
      }
      return number;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length) return;
      const widthValues = {
        id: "34px",
        del: "30px"
      };
      if (this.currentPrimary === "banding") {
        return [
          widthValues.id,
          "1fr",
          this.options.banding.enableTypes ? "1fr" : void 0,
          widthValues.del
        ].join(" ");
      }
      const widths = [];
      this.currentFieldKeys.forEach((key) => {
        const field = this.currentFields[key];
        if (field.enabled) widths.push(field.w ?? "1fr");
      });
      if (this.currentPrimary === "machining") {
        widths.unshift(widthValues.id);
      }
      widths.push(widthValues.del);
      const style = widths.join(" ");
      return style;
    },
    currentFields() {
      if (this.currentPrimary && this.currentSecondary) {
        return this.fieldDefinitions[this.currentPrimary][this.currentSecondary];
      } else if (this.currentPrimary) {
        return this.fieldDefinitions[this.currentPrimary];
      } else {
        return null;
      }
    },
    /**
     * @remarks these form the columns & the table headings
     */
    currentFieldKeys() {
      if (this.currentPrimary && this.currentSecondary) {
        return Object.keys(this.fieldDefinitions[this.currentPrimary][this.currentSecondary]).filter((f) => this.fieldDefinitions[this.currentPrimary][this.currentSecondary][f].enabled);
      } else if (this.currentPrimary) {
        return Object.keys(this.fieldDefinitions[this.currentPrimary]).filter((f) => this.fieldDefinitions[this.currentPrimary][f].enabled);
      } else {
        return [];
      }
    },
    /**
     * @remarks these are the individual line items in the table
     */
    currentShapeFields() {
      if (!this.currentPrimary) return [];
      if (this.currentPrimary === "machining" && !this.currentSecondary)
        return [];
      const shapeFields = this.getCurrentShapeFields();
      return shapeFields;
    }
  },
  watch: {
    "shape.listId": {
      handler() {
        this.initVis();
      },
      immediate: false
    },
    "shape.id": {
      handler() {
        this.initVis();
      },
      immediate: false
    },
    currentPrimary: {
      handler(type) {
        if (type === "banding") {
          this.suppressWatchers();
          this.validateBanding();
          this.suppressWatchers(false);
        }
      },
      deep: true,
      immediate: true
    },
    currentSecondary: {
      handler(type) {
        var _a;
        if (this.currentPrimary === "banding") return;
        if (!type) return this.validationIssues = [];
        this.suppressWatchers();
        this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          type,
          (_a = this.extraValidation) == null ? void 0 : _a[type]
        );
        if (type === "hingeHoles") {
          this.localShape.machining.hingeHoles.forEach((hole, index) => {
            var _a2;
            extrasValidation(hole, (_a2 = this.extraValidation) == null ? void 0 : _a2.holes, this.validationIssues, index);
          });
        }
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: true
    },
    "shape.machining.holes": {
      handler() {
        var _a;
        if (!this.loaded) return;
        if (this.disableWatchers) return;
        this.suppressWatchers();
        this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "holes",
          (_a = this.extraValidation) == null ? void 0 : _a.holes
        );
        this.vis.createHoles();
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: false
    },
    "shape.machining.hingeHoles": {
      handler() {
        var _a;
        if (!this.loaded) return;
        if (this.disableWatchers) return;
        this.suppressWatchers();
        this.localShape.machining.updateHingeHoles(this.localShape);
        this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "hingeHoles",
          (_a = this.extraValidation) == null ? void 0 : _a.hingeHoles
        );
        this.localShape.machining.hingeHoles.forEach((hole, index) => {
          var _a2;
          extrasValidation(hole, (_a2 = this.extraValidation) == null ? void 0 : _a2.holes, this.validationIssues, index);
        });
        this.vis.createHingeHoles();
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: false
    },
    "shape.machining.corners": {
      handler() {
        var _a;
        if (!this.loaded) return;
        if (this.disableWatchers) return;
        this.suppressWatchers();
        this.validationIssues = this.localShape.machining.validate(
          this.localShape,
          "corners",
          (_a = this.extraValidation) == null ? void 0 : _a.corners
        );
        this.localShape.machining.validate(this.localShape, "holes");
        this.localShape.machining.validate(this.localShape, "hingeHoles");
        this.vis.createShape();
        this.vis.createHoles();
        this.vis.createHingeHoles();
        this.vis.createBanding();
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: false
    },
    "shape.banding": {
      handler() {
        this.validateBanding();
        this.vis.createBanding();
      },
      deep: true,
      immediate: false
    },
    "shape.bandingType": {
      handler() {
        this.validateBanding();
        this.vis.createBanding();
      },
      deep: true,
      immediate: false
    }
  },
  mounted() {
    document.getElementById("machining").requestFullscreen();
    if (!this.shape || !this.shape.l || !this.shape.w)
      return console.warn("no part provided to machining");
    this.$nextTick(() => this.initVis());
    const visWrapper = document.querySelector("#smartcut-app #machining .diagram");
    if (!this.visWrapperResizeObserver) {
      this.visWrapperResizeObserver = new ResizeObserver((e) => {
        clearTimeout(this == null ? void 0 : this.visWrapperResizeTimer);
        if (!this.visInit) return;
        this.visWrapperResizeTimer = setTimeout(() => {
          if (this.suppressResizeObserver) {
            this.suppressResizeObserver = false;
            return;
          }
          const newWidth = e[0].contentRect.width;
          if (newWidth !== this.visWrapperWidth) {
            this.visWrapperWidth = e[0].contentRect.width;
            if (this.visWrapperWidth) this.vis.updateSize();
          }
        }, 10);
      }).observe(visWrapper);
    }
    this.bandingTypes = this.options.banding.types ?? [];
    if (Array.isArray(this.bandingTypes) && this.bandingTypes.length) {
      for (const key of Object.keys(this.localShape.bandingType)) {
        if (this.localShape.bandingType[key] && !this.bandingTypes.includes(this.localShape.bandingType[key])) {
          this.bandingTypes.push(this.localShape.bandingType[key]);
        }
      }
    }
    this.loaded = true;
  },
  methods: {
    suppressWatchers(on = true) {
      if (on) {
        this.disableWatchers = on;
      } else {
        this.$nextTick(() => this.disableWatchers = false);
      }
    },
    deleteAll() {
      this.deleteHoles();
      this.deleteHingeHoles();
      this.deleteCorners();
      this.deleteBanding();
    },
    updateField(field, key, value) {
      this.$nextTick(() => {
        field[key] = value;
      });
    },
    getIndex(index) {
      if (this.currentSecondary === "corners") {
        switch (index) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return index;
        }
      }
      return index + 1;
    },
    shouldShowId() {
      return this.currentPrimary !== "banding";
    },
    getMinValue(fieldDef) {
      return getMinValue(fieldDef);
    },
    getMaxValue(fieldDef) {
      return getMaxValue(fieldDef);
    },
    getMaxHoleDepth() {
      const shapeThickness = typeof this.shape.t !== "undefined" ? convertUnit(this.shape.t) : null;
      const maxDepth = typeof this.options.holes.maxDepth !== "undefined" ? convertUnit(this.options.holes.maxDepth) : null;
      if (maxDepth === null) {
        if (!shapeThickness) return null;
        return shapeThickness;
      } else if (shapeThickness) {
        return maxDepth < shapeThickness ? maxDepth : shapeThickness;
      }
      return null;
    },
    getMaxHoleDiameter() {
      const maxDiameter = typeof this.options.holes.maxDiameter !== "undefined" ? convertUnit(this.options.holes.maxDiameter) : null;
      if (maxDiameter !== null) {
        return maxDiameter < this.shape.getLongSide() ? maxDiameter : this.shape.getLongSide();
      }
      return null;
    },
    getSelectOptions(values, type = null) {
      if (!(values == null ? void 0 : values.length)) return [];
      let nullOptionKey = "None";
      switch (type) {
        case "depth":
          nullOptionKey = "Through";
          break;
      }
      const options = [
        {
          label: nullOptionKey,
          value: null
        }
      ];
      values.forEach((value) => {
        const label = value.charAt(0).toUpperCase() + value.slice(1);
        const option = {
          label,
          value
        };
        options.push(option);
      });
      return options;
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
      let shapeFields = null;
      if (this.currentPrimary && this.currentSecondary) {
        shapeFields = this.localShape[this.currentPrimary][this.currentSecondary];
      } else if (this.currentPrimary) {
        shapeFields = this.localShape[this.currentPrimary];
      }
      if (Array.isArray(shapeFields)) return shapeFields;
      return [shapeFields];
    },
    initVis() {
      if (!this.shape) return;
      this.vis = markRaw(new Vis({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.localShape,
        vueComponent: this
      }));
      this.vis.init();
      this.visInit = true;
      setTimeout(() => {
        this.vis.updateSize();
      }, 100);
    },
    isFieldEnabled(type, field) {
      return isFieldEnabled(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field
      );
    },
    isFieldPresent(type, field) {
      return isFieldPresent(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field
      );
    },
    setFieldEnabled(type, field, enabled = true) {
      return setFieldEnabled(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field,
        enabled
      );
    },
    close() {
      this.$emit("close");
    },
    flip() {
      this.currentSide = this.currentSide === 0 ? 1 : 0;
      this.vis.flip();
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
        convertUnit(this.shape.l) / 2,
        convertUnit(this.shape.w) / 2,
        this.options.holes.defaultDiameter ?? 1,
        this.options.holes.defaultDepth ?? 0,
        this.currentSide
      );
      this.vis.createHoles();
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
      });
      this.vis.createHingeHoles();
    },
    deleteHingeHoles() {
      this.localShape.machining.hingeHoles.length = 0;
    },
    deleteHoles() {
      this.localShape.machining.holes.length = 0;
    },
    deleteCorners() {
      this.localShape.machining.corners.forEach((c) => {
        c.size = null;
        c.type = null;
      });
      this.localShape.banding.a = false;
      this.localShape.banding.b = false;
      this.localShape.banding.c = false;
      this.localShape.banding.d = false;
    },
    deleteBanding() {
      this.localShape.banding = {
        a: false,
        b: false,
        c: false,
        d: false,
        y1: false,
        y2: false,
        x1: false,
        x2: false
      };
      this.localShape.bandingType = {
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
    remove(itemIndex) {
      switch (this.currentSecondary) {
        case "holes":
          return this.localShape.machining.holes.splice(itemIndex, 1);
        case "hingeHoles":
          return this.localShape.machining.hingeHoles.splice(itemIndex, 1);
        case "corners":
          this.localShape.machining.corners[itemIndex].size = null;
          this.localShape.machining.corners[itemIndex].type = null;
          return;
      }
      switch (this.currentPrimary) {
        case "banding":
          this.localShape.banding[itemIndex] = false;
          this.localShape.bandingType[itemIndex] = "";
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
      if (this.shape.constructor.name === "InputShape") {
        return this.shape.listId;
      } else if (this.shape.constructor.name === "Shape") {
        return this.shape.id;
      }
    },
    getInputMode(fieldDefinition) {
      return getInputMode(fieldDefinition.type, this.units);
    },
    getInputType(fieldDefinition) {
      return getInputType(fieldDefinition.type, this.units);
    },
    isFieldDisabled(fieldDefinition, shapeFieldIndex) {
      if (typeof fieldDefinition.disabled === "function") {
        return fieldDefinition.disabled(shapeFieldIndex);
      }
      return false;
    },
    validateBanding() {
      var _a;
      this.validationIssues = [];
      if (!this.options.banding.enabled) return;
      this.suppressWatchers();
      for (const key in this.localShape.banding) {
        const active = this.localShape.banding[key];
        if (active) {
          if (this.options.banding.enableTypes && ((_a = this.options.banding.types) == null ? void 0 : _a.length)) {
            if (!this.localShape.bandingType[key]) {
              this.validationIssues.push({
                index: key,
                message: "Please select a type"
              });
            }
          }
        } else {
          this.localShape.bandingType[key] = "";
        }
      }
      this.suppressWatchers(false);
    },
    getValidationIssues(index) {
      const issues = this.validationIssues.filter((i) => i.index === index);
      if (issues.length) return issues.map((i) => i.message);
      return [];
    },
    getValidationIssueFields(index) {
      const issues = this.validationIssues.filter((i) => i.index === index && (i == null ? void 0 : i.fields));
      const fields = issues.map((m) => m.fields).flat();
      if (issues.length) return fields;
      return [];
    },
    isInvalid(index, key) {
      const fields = this.getValidationIssueFields(index);
      if (!(fields == null ? void 0 : fields.length)) return false;
      if (fields.includes(key)) return true;
      return false;
    }
  }
});
const _hoisted_1 = { id: "machining" };
const _hoisted_2 = { class: "inputs" };
const _hoisted_3 = {
  key: 0,
  class: "shape-name"
};
const _hoisted_4 = { class: "shape-dimensions" };
const _hoisted_5 = {
  key: 1,
  class: "sides-wrapper"
};
const _hoisted_6 = { class: "menu" };
const _hoisted_7 = { class: "button-wrapper" };
const _hoisted_8 = { class: "cell" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "remove" };
const _hoisted_11 = { class: "row table-heading" };
const _hoisted_12 = {
  key: 0,
  class: "cell"
};
const _hoisted_13 = { class: "cell" };
const _hoisted_14 = { class: "id" };
const _hoisted_15 = { class: "cell" };
const _hoisted_16 = {
  key: 0,
  class: "cell"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = { class: "remove" };
const _hoisted_19 = { class: "row table-heading" };
const _hoisted_20 = {
  key: 0,
  class: "id"
};
const _hoisted_21 = {
  key: 0,
  class: "cell"
};
const _hoisted_22 = { class: "id" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "remove" };
const _hoisted_25 = { key: 6 };
const _hoisted_26 = { key: 7 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_InputField = resolveComponent("InputField");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("button", {
          type: "button",
          class: "close",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.close())
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "xmark"] })
        ]),
        _ctx.shape.name ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.shape.name), 1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.shape.l) + " x " + toDisplayString(_ctx.shape.w) + " " + toDisplayString(_ctx.shape.t ? "x " + _ctx.shape.t : null), 1),
        _ctx.options.sides.enabled ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", {
            ref: "sides",
            class: normalizeClass(["sides", { flipped: _ctx.currentSide === 1 }]),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.flip())
          }, _cache[10] || (_cache[10] = [
            createBaseVNode("div", { class: "side-a" }, " A ", -1),
            createBaseVNode("div", { class: "side-b" }, " B ", -1)
          ]), 2),
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text" }, " [Click to flip] ", -1))
        ])) : createCommentVNode("", true),
        _ctx.hasMachining ? (openBlock(), createElementBlock("button", {
          key: 2,
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.deleteAll && _ctx.deleteAll(...args))
        }, " Delete all machining ")) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6, [
          _ctx.options.holes.enabled ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass({ selected: _ctx.currentSecondary === "holes" }),
            onClick: _cache[3] || (_cache[3] = ($event) => {
              _ctx.currentPrimary = "machining";
              _ctx.currentSecondary = "holes";
            })
          }, " Holes ", 2)) : createCommentVNode("", true),
          _ctx.options.hingeHoles.enabled ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass({ selected: _ctx.currentSecondary === "hingeHoles" }),
            onClick: _cache[4] || (_cache[4] = ($event) => {
              _ctx.currentPrimary = "machining";
              _ctx.currentSecondary = "hingeHoles";
            })
          }, " Hinge holes ", 2)) : createCommentVNode("", true),
          _ctx.options.corners.enabled ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass({ selected: _ctx.currentSecondary === "corners" }),
            onClick: _cache[5] || (_cache[5] = ($event) => {
              _ctx.currentPrimary = "machining";
              _ctx.currentSecondary = "corners";
            })
          }, " Corners ", 2)) : createCommentVNode("", true),
          _ctx.options.banding.enabled ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass({ selected: _ctx.currentPrimary === "banding" }),
            onClick: _cache[6] || (_cache[6] = ($event) => {
              _ctx.currentPrimary = "banding";
              _ctx.currentSecondary = null;
            })
          }, " Banding ", 2)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_7, [
          _ctx.currentSecondary === "holes" || _ctx.currentSecondary === "hingeHoles" ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            onClick: _cache[7] || (_cache[7] = ($event) => _ctx.create())
          }, " Create ")) : createCommentVNode("", true),
          _ctx.currentPrimary ? (openBlock(), createElementBlock("button", {
            key: 1,
            type: "button",
            onClick: _cache[8] || (_cache[8] = ($event) => _ctx.removeAll())
          }, " Delete all ")) : createCommentVNode("", true),
          _ctx.currentPrimary === "banding" && _ctx.options.banding.enableTypes && _ctx.options.banding.types === null ? (openBlock(), createElementBlock("button", {
            key: 2,
            type: "button",
            onClick: _cache[9] || (_cache[9] = ($event) => _ctx.bandingTypes.push(""))
          }, " Add banding type ")) : createCommentVNode("", true)
        ]),
        _ctx.currentPrimary === "banding" && _ctx.options.banding.enableTypes && _ctx.options.banding.types === null ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "grid-table banding-types",
          style: normalizeStyle({
            "grid-template-columns": _ctx.columnsStyle
          })
        }, [
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "row table-heading" }, [
            createBaseVNode("div", { class: "cell" }, " Type definition "),
            createBaseVNode("div", { class: "cell" })
          ], -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.bandingTypes, (_bandingType, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "row"
            }, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_InputField, {
                  id: _bandingType + "-" + index,
                  type: "text",
                  "enable-label": false,
                  value: _ctx.bandingTypes[index],
                  onUpdate: (value) => _ctx.bandingTypes[index] = value
                }, null, 8, ["id", "value", "onUpdate"])
              ]),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => _ctx.bandingTypes.splice(index, 1)
              }, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_9)
            ]);
          }), 128))
        ], 4)) : createCommentVNode("", true),
        _ctx.currentPrimary === "banding" ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: "grid-table banding",
          style: normalizeStyle({
            "grid-template-columns": _ctx.columnsStyle
          })
        }, [
          createBaseVNode("div", _hoisted_11, [
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "cell id" }, null, -1)),
            _cache[14] || (_cache[14] = createBaseVNode("div", { class: "cell" }, " Add ", -1)),
            _ctx.options.banding.enableTypes ? (openBlock(), createElementBlock("div", _hoisted_12, " Type ")) : createCommentVNode("", true),
            _cache[15] || (_cache[15] = createBaseVNode("div", { class: "cell del" }, null, -1))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentFieldKeys, (bandingKey) => {
            return openBlock(), createElementBlock("div", {
              key: bandingKey,
              class: "row"
            }, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.currentFields[bandingKey].label.toUpperCase()), 1)
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(_component_InputField, {
                  id: "banding-" + bandingKey,
                  type: "checkbox",
                  "enable-label": false,
                  disabled: _ctx.isFieldDisabled(_ctx.currentFields[bandingKey], void 0),
                  value: _ctx.shape.banding[bandingKey],
                  onUpdate: (value) => _ctx.localShape.banding[bandingKey] = value
                }, null, 8, ["id", "disabled", "value", "onUpdate"])
              ]),
              _ctx.options.banding.enableTypes ? (openBlock(), createElementBlock("div", _hoisted_16, [
                createVNode(_component_InputField, {
                  id: "banding-type-" + bandingKey,
                  type: "select",
                  "enable-label": false,
                  disabled: _ctx.isFieldDisabled(_ctx.currentFields[bandingKey], void 0),
                  options: _ctx.bandingTypes.map((type) => ({
                    label: type.toUpperCase(),
                    value: type,
                    disabled: _ctx.isFieldDisabled(
                      _ctx.currentFields[bandingKey],
                      void 0
                    )
                  })),
                  value: _ctx.shape.bandingType[bandingKey],
                  onUpdate: (value) => _ctx.localShape.bandingType[bandingKey] = value
                }, null, 8, ["id", "disabled", "options", "value", "onUpdate"])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => _ctx.remove(bandingKey)
              }, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_17),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getValidationIssues(
                bandingKey
              ), (message, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "group validation",
                  style: normalizeStyle({
                    "grid-column-end": "span " + _ctx.columns
                  })
                }, toDisplayString(message), 5);
              }), 128))
            ]);
          }), 128))
        ], 4)) : createCommentVNode("", true),
        _ctx.currentPrimary !== "banding" && _ctx.currentShapeFields.length ? (openBlock(), createElementBlock("div", {
          key: 5,
          class: normalizeClass(["grid-table", _ctx.currentPrimary]),
          style: normalizeStyle({
            "grid-template-columns": _ctx.columnsStyle
          })
        }, [
          createBaseVNode("div", _hoisted_19, [
            _ctx.shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_20)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentFields, (value, key, index) => {
              return withDirectives((openBlock(), createElementBlock("div", {
                key: index,
                class: "cell"
              }, toDisplayString(value.label ?? key), 1)), [
                [vShow, value.enabled]
              ]);
            }), 128)),
            _cache[16] || (_cache[16] = createBaseVNode("div", { class: "del" }, null, -1))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentShapeFields, (shapeField, shapeFieldIndex) => {
            return openBlock(), createElementBlock("div", {
              key: shapeFieldIndex,
              class: "row"
            }, [
              _ctx.shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, toDisplayString(_ctx.getIndex(shapeFieldIndex)), 1)
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentFieldKeys, (key, fieldIndex) => {
                return openBlock(), createElementBlock("div", {
                  key: fieldIndex,
                  class: normalizeClass(["cell", { invalid: _ctx.isInvalid(shapeFieldIndex, key) }])
                }, [
                  _ctx.currentFields[key].type !== "select" && _ctx.currentFields[key].type !== "checkbox" ? (openBlock(), createBlock(_component_InputField, {
                    key: 0,
                    id: key + "-" + fieldIndex,
                    type: _ctx.currentFields[key].output ?? "unitDependent",
                    "enable-label": false,
                    placeholder: _ctx.currentFields[key].label ?? key,
                    disabled: _ctx.isFieldDisabled(_ctx.currentFields[key], shapeFieldIndex),
                    value: shapeField[key],
                    units: _ctx.units,
                    output: _ctx.currentFields[key].output,
                    onUpdate: (value) => _ctx.updateField(shapeField, key, value)
                  }, null, 8, ["id", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate"])) : _ctx.currentFields[key].type === "checkbox" ? (openBlock(), createBlock(_component_InputField, {
                    key: 1,
                    id: key + "-" + fieldIndex,
                    type: "checkbox",
                    "enable-label": false,
                    disabled: _ctx.isFieldDisabled(_ctx.currentFields[key], shapeFieldIndex),
                    value: shapeField[key],
                    output: _ctx.currentFields[key].output,
                    onUpdate: (value) => _ctx.updateField(shapeField, key, value)
                  }, null, 8, ["id", "disabled", "value", "output", "onUpdate"])) : _ctx.currentFields[key].type === "select" ? (openBlock(), createBlock(_component_InputField, {
                    key: 2,
                    id: key + "-" + fieldIndex,
                    type: "select",
                    "enable-label": false,
                    disabled: _ctx.isFieldDisabled(_ctx.currentFields[key], shapeFieldIndex),
                    value: shapeField[key],
                    options: _ctx.currentFields[key].options,
                    output: _ctx.currentFields[key].output,
                    onUpdate: (value) => _ctx.updateField(shapeField, key, value)
                  }, null, 8, ["id", "disabled", "value", "options", "output", "onUpdate"])) : createCommentVNode("", true)
                ], 2);
              }), 128)),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => _ctx.remove(shapeFieldIndex)
              }, [
                createBaseVNode("div", _hoisted_24, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_23),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getValidationIssues(
                shapeFieldIndex
              ), (message, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "group validation",
                  style: normalizeStyle({
                    "grid-column-end": "span " + _ctx.columns
                  })
                }, toDisplayString(message), 5);
              }), 128))
            ]);
          }), 128))
        ], 6)) : _ctx.currentSecondary ? (openBlock(), createElementBlock("div", _hoisted_25, " Nothing yet... ")) : _ctx.currentPrimary !== "banding" ? (openBlock(), createElementBlock("div", _hoisted_26, " Please select from the menu above ")) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", {
        id: "machining-diagram",
        class: normalizeClass(["diagram", { flipped: _ctx.currentSide === 1 }])
      }, null, 2)
    ])
  ]);
}
const Machining = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Machining as default
};
