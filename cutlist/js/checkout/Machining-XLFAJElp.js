var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { d as d3, a as convertUnit, v as valueSet, m as markRaw, g as getOptions, b as getMinValue, e as getMaxValue, i as isFieldEnabled, f as isFieldPresent, s as setFieldEnabled, h as getInputMode, j as getInputType, _ as _export_sfc, r as resolveComponent, o as openBlock, k as createElementBlock, l as createBaseVNode, n as createVNode, t as toDisplayString, p as createCommentVNode, q as normalizeClass, F as Fragment, u as renderList, w as withDirectives, x as vModelText, y as normalizeStyle, z as vModelCheckbox, A as vModelSelect, B as vShow, D as vModelDynamic } from "./main-abPiIdzx.js";
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
    if (this.loaded)
      return;
    if (!this.HTMLElement)
      return false;
    if (!this.shape)
      return false;
    if (!this.shape.l || !this.shape.w)
      return false;
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
        if (svg === null)
          return;
        this.svgCanvas = svg;
      }
    }
    this.loaded = true;
  }
  create() {
    if (!this.shape)
      return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return false;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2");
    this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group");
    this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x").call(
      d3.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ).selectAll("text").attr("dy", "-5px");
    this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y").call(
      d3.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ).selectAll("text").attr("dx", "5px");
    this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group");
    this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group");
    this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group");
    this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group");
    this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group");
    this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group");
    this.createShape();
    this.createLegend();
    this.createHoles();
    this.createHingeHoles();
    this.createBanding();
  }
  addPoint(x, y) {
    this.pointGroup.append("circle").attr("cx", this.xScale(x)).attr("cy", this.getYScale()(y)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    this.svgCanvas.selectAll(".shape-group > *").remove();
    this.svgCanvas.selectAll(".point-group > *").remove();
    if (!this.shape)
      return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h)
      return false;
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
    this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "-5px");
    this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.getYScale()(0)).attr("dx", -this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 0 ? 1 : -1) + "px"
    );
    this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.getYScale()(0)).attr("dx", this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 0 ? 1 : -1) + "px"
    );
    this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("y", this.getYScale()(this.shapeW)).attr("dx", this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 1 ? 1 : -1) + "px"
    );
    this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.getYScale()(this.shapeW)).attr("dx", -this.padding / 1.5 + "px").attr(
      "dy",
      this.padding / 1.5 * (this.currentSide === 1 ? 1 : -1) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove();
    this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter(
        (h) => h.shouldShow(this.shape, this.currentSide)
      )
    ).join("circle").attr("class", (h) => h.valid === false ? "hole invalid" : "hole valid").attr("cx", (h) => this.xScale(h.x)).attr(
      "cy",
      (h) => this.yScale(h.getYDrawPosition(this.shape, this.currentSide))
    ).attr("r", (h) => this.measurementScale(h.diameter / 2));
  }
  createHingeHoles() {
    this.vueComponent.suppressWatchers();
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const allHingeHoles = this.shape.machining.getAllHingeHoles(this.shape).filter((h) => h.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(allHingeHoles).join("circle").attr(
      "class",
      (h) => h.valid === false ? "hole hinge invalid" : "hole hinge valid"
    ).attr("cx", (h) => this.xScale(h.x)).attr(
      "cy",
      (h) => this.yScale(h.getYDrawPosition(this.shape, this.currentSide))
    ).attr("r", (h) => this.measurementScale(h.diameter / 2));
    this.vueComponent.suppressWatchers(false);
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const banding = this.shape.banding;
    const offset = -1;
    const bandingData = [];
    for (const [key, value] of Object.entries(banding)) {
      if (!value)
        continue;
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
      if (!corner.type)
        return;
      let start, middle, end;
      switch (i) {
        case 0:
          if (!valueSet(banding.a) || banding.a === false)
            return;
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
          if (!valueSet(banding.b) || banding.b === false)
            return;
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
          if (!valueSet(banding.c) || banding.c === false)
            return;
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
          if (!valueSet(banding.d) || banding.d === false)
            return;
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
    if (this.svgCanvas)
      this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    this.createShape();
    this.createHoles();
    this.createHingeHoles();
    this.createLegend();
    this.createBanding();
  }
  getCornerBandingSize(index) {
    if (!this.shape.machining.corners[index].type)
      return 0;
    return this.measurementScale(this.shape.machining.corners[index].size ?? 0);
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent) {
      this.vueComponent.suppressResizeObserver = true;
    }
    this.HTMLElementWidth = this.HTMLElement.offsetWidth;
    if (this.HTMLElementWidth === 0)
      return;
    this.reset();
    let aspectRatio = this.shape.getShortSide() / this.shape.getLongSide();
    this.w = this.HTMLElementWidth;
    if (this.w - this.padding * 2 < 0)
      return;
    let availableHeight = window.innerHeight - this.padding * 2 - 20;
    if (availableHeight > 600)
      availableHeight = 600;
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
const _sfc_main = {
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
            defaultDiameter: 0,
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
            minDepth: 2,
            //[x]
            maxDepth: 100
            //[x]
          },
          hingeHoles: {
            enabled: true,
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
            minValue: 5,
            //[x]
            maxValue: 200,
            //[x]
            types: ["bevel", "radius"]
            //[x]
          },
          banding: {
            enabled: true,
            //[x]
            enableTypes: true,
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
      validationMessages: [],
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
              min: () => typeof this.options.holes.minDiameter !== "undefined" ? convertUnit(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              childType: ((_b = this.options.holes.diameters) == null ? void 0 : _b.length) ? "number" : void 0,
              options: ((_c = this.options.holes.diameters) == null ? void 0 : _c.length) ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t !== "undefined" && convertUnit(this.shape.t) > 0,
              //[]
              type: ((_d = this.options.holes.depths) == null ? void 0 : _d.length) ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth !== "undefined" ? convertUnit(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              childType: ((_e = this.options.holes.depths) == null ? void 0 : _e.length) ? "number" : void 0,
              options: ((_f = this.options.holes.depths) == null ? void 0 : _f.length) ? this.getSelectOptions(this.options.holes.depths) : void 0
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
            //[] separate option for hinges
            depth: {
              enabled: this.options.holes.enableDepth && typeof this.shape.t !== "undefined" && convertUnit(this.shape.t) > 0,
              type: ((_g = this.options.holes.depths) == null ? void 0 : _g.length) ? "select" : "unitDependent",
              min: () => typeof this.options.holes.minDepth !== "undefined" ? convertUnit(this.options.holes.minDepth) : 0,
              max: this.getMaxHoleDepth(),
              childType: ((_h = this.options.holes.depths) == null ? void 0 : _h.length) ? "number" : void 0,
              options: ((_i = this.options.holes.depths) == null ? void 0 : _i.length) ? this.getSelectOptions(this.options.holes.depths) : void 0
            },
            //[] separate option for hinges
            diameter: {
              enabled: true,
              type: ((_j = this.options.holes.diameters) == null ? void 0 : _j.length) ? "select" : "unitDependent",
              label: "Diameter",
              min: () => typeof this.options.holes.minDiameter !== "undefined" ? convertUnit(this.options.holes.minDiameter) : 0,
              max: this.getMaxHoleDiameter(),
              childType: ((_k = this.options.holes.diameters) == null ? void 0 : _k.length) ? "number" : void 0,
              options: ((_l = this.options.holes.diameters) == null ? void 0 : _l.length) ? this.getSelectOptions(this.options.holes.diameters) : void 0
            },
            numHoles: {
              enabled: true,
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
              enabled: true,
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
              enabled: true,
              type: "unitDependent"
            },
            y: {
              enabled: true,
              type: "unitDependent"
            },
            depth: {
              enabled: true,
              type: "unitDependent"
            }
          },
          corners: {
            type: {
              enabled: true,
              label: "Type",
              type: "select",
              childType: "string",
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
            enabled: true,
            type: "boolean",
            label: "L1"
          },
          y2: {
            enabled: true,
            type: "boolean",
            label: "L2"
          },
          x1: {
            enabled: true,
            type: "boolean",
            label: "W1"
          },
          x2: {
            enabled: true,
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
      }
    };
  },
  computed: {
    units() {
      return getOptions.call(this, ["units"]);
    },
    localShape() {
      return this.shape;
    },
    columns() {
      var _a;
      if (this.currentPrimary === "banding") {
        return this.options.banding.enableTypes ? 4 : 3;
      }
      if (!((_a = this.currentFieldKeys) == null ? void 0 : _a.length))
        return 0;
      let number = Object.values(this.currentFields).filter(
        (f) => f.enabled
      ).length;
      number += 1;
      if (this.currentPrimary === "machining") {
        number += 1;
      }
      return number;
    },
    columnsStyle() {
      if (!this.currentFieldKeys.length)
        return;
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
        if (field.enabled)
          widths.push(field.w ?? "1fr");
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
        return Object.keys(
          this.fieldDefinitions[this.currentPrimary][this.currentSecondary]
        ).filter(
          (f) => this.fieldDefinitions[this.currentPrimary][this.currentSecondary][f].enabled
        );
      } else if (this.currentPrimary) {
        return Object.keys(this.fieldDefinitions[this.currentPrimary]).filter(
          (f) => this.fieldDefinitions[this.currentPrimary][f].enabled
        );
      } else {
        return [];
      }
    },
    currentShapeFieldsType() {
      if (!this.currentPrimary)
        return null;
      if (this.currentPrimary === "machining" && !this.currentSecondary)
        return null;
      const shapeFields = this.getCurrentShapeFields();
      if (Array.isArray(shapeFields))
        return "array";
      return "object";
    },
    /**
     * @remarks these are the individual line items in the table
     */
    currentShapeFields() {
      if (!this.currentPrimary)
        return [];
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
    "shape.machining.holes": {
      handler() {
        if (!this.loaded)
          return;
        if (this.disableWatchers)
          return;
        this.validationMessages = this.shape.machining.validate(
          this.shape,
          "holes"
        );
        this.vis.createHoles();
      },
      deep: true,
      immediate: false
    },
    "shape.machining.hingeHoles": {
      handler() {
        if (!this.loaded)
          return;
        if (this.disableWatchers)
          return;
        this.suppressWatchers();
        this.shape.machining.updateHingeHoles(this.shape);
        this.validationMessages = this.shape.machining.validate(
          this.shape,
          "hingeHoles"
        );
        this.vis.createHingeHoles();
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: false
    },
    "shape.machining.corners": {
      handler() {
        if (!this.loaded)
          return;
        if (this.disableWatchers)
          return;
        this.validationMessages = this.shape.machining.validate(
          this.shape,
          "corners"
        );
        this.shape.machining.validate(this.shape, "holes");
        this.shape.machining.validate(this.shape, "hingeHoles");
        this.vis.createShape();
        this.vis.createHoles();
        this.vis.createHingeHoles();
        this.vis.createBanding();
      },
      deep: true,
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
        if (this.currentPrimary === "banding")
          return;
        if (!type)
          return this.validationMessages = [];
        this.suppressWatchers();
        this.validationMessages = this.shape.machining.validate(
          this.shape,
          type
        );
        this.suppressWatchers(false);
      },
      deep: true,
      immediate: true
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
    const visWrapper = document.querySelector(
      "#smartcut-app #machining .diagram"
    );
    if (!this.visWrapperResizeObserver) {
      this.visWrapperResizeObserver = new ResizeObserver((e) => {
        clearTimeout(this == null ? void 0 : this.visWrapperResizeTimer);
        if (!this.visInit)
          return;
        this.visWrapperResizeTimer = setTimeout(() => {
          if (this.suppressResizeObserver) {
            this.suppressResizeObserver = false;
            return;
          }
          const newWidth = e[0].contentRect.width;
          if (newWidth !== this.visWrapperWidth) {
            this.visWrapperWidth = e[0].contentRect.width;
            if (this.visWrapperWidth)
              this.vis.updateSize();
          }
        }, 10);
      }).observe(visWrapper);
    }
    this.bandingTypes = this.options.banding.types ?? [];
    if (Array.isArray(this.bandingTypes) && this.bandingTypes.length) {
      for (const key of Object.keys(this.shape.bandingType)) {
        if (this.shape.bandingType[key] && !this.bandingTypes.includes(this.shape.bandingType[key])) {
          this.bandingTypes.push(this.shape.bandingType[key]);
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
        this.$nextTick(() => {
          this.disableWatchers = false;
        });
      }
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
        if (!shapeThickness)
          return null;
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
      if (!(values == null ? void 0 : values.length))
        return [];
      let nullOptionKey = "None";
      switch (type) {
        case "depth":
          nullOptionKey = "Through";
          break;
      }
      const options = [
        {
          key: nullOptionKey,
          value: null
        }
      ];
      values.forEach((value) => {
        const key = value.charAt(0).toUpperCase() + value.slice(1);
        options.push({
          key,
          value
        });
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
      if (Array.isArray(shapeFields))
        return shapeFields;
      return [shapeFields];
    },
    initVis() {
      if (!this.shape)
        return;
      this.vis = new Vis({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: this.shape,
        vueComponent: this
      });
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
        this.options.holes.defaultDiameter ?? 0,
        this.options.holes.defaultDepth ?? 0,
        this.currentSide
      );
      this.focus();
      this.vis.createHoles();
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
          return this.localShape.machining.hingeHoles.splice(
            itemIndex,
            1
          );
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
    focus() {
      this.$nextTick(() => {
        var _a, _b, _c;
        if ((_a = this == null ? void 0 : this.$refs) == null ? void 0 : _a.inputFocus) {
          if (Array.isArray((_b = this == null ? void 0 : this.$refs) == null ? void 0 : _b.inputFocus)) {
            (_c = this.$refs) == null ? void 0 : _c.inputFocus.pop().focus();
          } else
            this.$refs.inputFocus.focus();
        }
      });
    },
    getShapeId() {
      if (this.shape.constructor.name === "InputShape") {
        return this.shape.listId;
      } else if (this.shape.constructor.name === "Shape") {
        return this.shape.id;
      }
    },
    getInputMode(fieldDefinition) {
      return getInputMode(fieldDefinition, this.units);
    },
    getInputType(fieldDefinition) {
      return getInputType(fieldDefinition, this.units);
    },
    isFieldDisabled(fieldDefinition, shapeFieldIndex) {
      if (typeof fieldDefinition.disabled === "function") {
        return fieldDefinition.disabled(shapeFieldIndex);
      }
      return false;
    },
    validateBanding() {
      var _a;
      this.validationMessages = [];
      if (!this.options.banding.enabled)
        return;
      this.suppressWatchers();
      for (const key in this.shape.banding) {
        const active = this.localShape.banding[key];
        if (active) {
          if (this.options.banding.enableTypes && ((_a = this.options.banding.types) == null ? void 0 : _a.length)) {
            if (!this.localShape.bandingType[key]) {
              this.validationMessages.push({
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
    getValidationMessages(index) {
      const messages = this.validationMessages.filter((m) => m.index === index);
      if (messages.length)
        return messages.map((m) => m.message);
      return [];
    }
  }
};
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
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "side-a" }, " A ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "side-b" }, " B ", -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text" }, " [Click to flip] ", -1);
const _hoisted_10 = { class: "menu" };
const _hoisted_11 = { class: "button-wrapper" };
const _hoisted_12 = {
  key: 2,
  class: "grid-table banding-types"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "row table-heading" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "cell" }, " Type definition "),
  /* @__PURE__ */ createBaseVNode("div", { class: "cell" })
], -1);
const _hoisted_14 = { class: "cell" };
const _hoisted_15 = ["onUpdate:modelValue"];
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "remove" };
const _hoisted_18 = {
  key: 3,
  class: "grid-table banding"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "cell id" }, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "cell" }, " Add ", -1);
const _hoisted_21 = {
  key: 0,
  class: "cell"
};
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "cell del" }, null, -1);
const _hoisted_23 = { class: "cell" };
const _hoisted_24 = { class: "id" };
const _hoisted_25 = { class: "cell" };
const _hoisted_26 = ["id", "onUpdate:modelValue", "disabled"];
const _hoisted_27 = {
  key: 0,
  class: "cell"
};
const _hoisted_28 = ["id", "onUpdate:modelValue"];
const _hoisted_29 = { value: "" };
const _hoisted_30 = ["value", "disabled"];
const _hoisted_31 = ["onClick"];
const _hoisted_32 = { class: "remove" };
const _hoisted_33 = {
  key: 0,
  class: "id"
};
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "del" }, null, -1);
const _hoisted_35 = {
  key: 0,
  class: "cell"
};
const _hoisted_36 = { class: "id" };
const _hoisted_37 = ["id", "onUpdate:modelValue", "type", "inputmode", "disabled", "placeholder", "min", "max"];
const _hoisted_38 = ["id", "onUpdate:modelValue", "disabled"];
const _hoisted_39 = ["id", "onUpdate:modelValue", "aria-label"];
const _hoisted_40 = ["value", "disabled"];
const _hoisted_41 = ["onClick"];
const _hoisted_42 = { class: "remove" };
const _hoisted_43 = { key: 5 };
const _hoisted_44 = { key: 6 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("button", {
          type: "button",
          class: "close",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.close())
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "xmark"] })
        ]),
        $props.shape.name ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString($props.shape.name), 1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, toDisplayString($props.shape.l) + " x " + toDisplayString($props.shape.w) + " " + toDisplayString($props.shape.t ? "x " + $props.shape.t : null), 1),
        $props.options.sides.enabled ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createBaseVNode("div", {
            ref: "sides",
            class: normalizeClass(["sides", { flipped: $data.currentSide === 1 }]),
            onClick: _cache[1] || (_cache[1] = ($event) => $options.flip())
          }, _hoisted_8, 2),
          _hoisted_9
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_10, [
          $props.options.holes.enabled ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass({ selected: $data.currentSecondary === "holes" }),
            onClick: _cache[2] || (_cache[2] = ($event) => {
              $data.currentPrimary = "machining";
              $data.currentSecondary = "holes";
            })
          }, " Holes ", 2)) : createCommentVNode("", true),
          $props.options.hingeHoles.enabled ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass({ selected: $data.currentSecondary === "hingeHoles" }),
            onClick: _cache[3] || (_cache[3] = ($event) => {
              $data.currentPrimary = "machining";
              $data.currentSecondary = "hingeHoles";
            })
          }, " Hinge holes ", 2)) : createCommentVNode("", true),
          $props.options.corners.enabled ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass({ selected: $data.currentSecondary === "corners" }),
            onClick: _cache[4] || (_cache[4] = ($event) => {
              $data.currentPrimary = "machining";
              $data.currentSecondary = "corners";
            })
          }, " Corners ", 2)) : createCommentVNode("", true),
          $props.options.banding.enabled ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass({ selected: $data.currentPrimary === "banding" }),
            onClick: _cache[5] || (_cache[5] = ($event) => {
              $data.currentPrimary = "banding";
              $data.currentSecondary = null;
            })
          }, " Banding ", 2)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_11, [
          $data.currentSecondary === "holes" || $data.currentSecondary === "hingeHoles" ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.create())
          }, " Create ")) : createCommentVNode("", true),
          $data.currentPrimary ? (openBlock(), createElementBlock("button", {
            key: 1,
            type: "button",
            onClick: _cache[7] || (_cache[7] = ($event) => $options.removeAll())
          }, " Delete all ")) : createCommentVNode("", true),
          $data.currentPrimary === "banding" && $props.options.banding.enableTypes && $props.options.banding.types === null ? (openBlock(), createElementBlock("button", {
            key: 2,
            type: "button",
            onClick: _cache[8] || (_cache[8] = ($event) => $data.bandingTypes.push(""))
          }, " Add banding type ")) : createCommentVNode("", true)
        ]),
        $data.currentPrimary === "banding" && $props.options.banding.enableTypes && $props.options.banding.types === null ? (openBlock(), createElementBlock("div", _hoisted_12, [
          _hoisted_13,
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.bandingTypes, (_bandingType, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "row"
            }, [
              createBaseVNode("div", _hoisted_14, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.bandingTypes[index] = $event,
                  type: "text"
                }, null, 8, _hoisted_15), [
                  [
                    vModelText,
                    $data.bandingTypes[index],
                    void 0,
                    { trim: true }
                  ]
                ])
              ]),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => $data.bandingTypes.splice(index, 1)
              }, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_16)
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        $data.currentPrimary === "banding" ? (openBlock(), createElementBlock("div", _hoisted_18, [
          createBaseVNode("div", {
            class: "row table-heading",
            style: normalizeStyle({ "grid-template-columns": $options.columnsStyle })
          }, [
            _hoisted_19,
            _hoisted_20,
            $props.options.banding.enableTypes ? (openBlock(), createElementBlock("div", _hoisted_21, " Type ")) : createCommentVNode("", true),
            _hoisted_22
          ], 4),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.currentFieldKeys, (bandingKey) => {
            return openBlock(), createElementBlock("div", {
              key: bandingKey,
              class: "row",
              style: normalizeStyle({ "grid-template-columns": $options.columnsStyle })
            }, [
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, toDisplayString($options.currentFields[bandingKey].label.toUpperCase()), 1)
              ]),
              createBaseVNode("div", _hoisted_25, [
                withDirectives(createBaseVNode("input", {
                  id: "banding-" + bandingKey,
                  "onUpdate:modelValue": ($event) => $options.localShape.banding[bandingKey] = $event,
                  type: "checkbox",
                  disabled: $options.isFieldDisabled($options.currentFields[bandingKey], void 0)
                }, null, 8, _hoisted_26), [
                  [
                    vModelCheckbox,
                    $options.localShape.banding[bandingKey],
                    void 0,
                    {
                      lazy: true,
                      trim: true
                    }
                  ]
                ])
              ]),
              $props.options.banding.enableTypes ? (openBlock(), createElementBlock("div", _hoisted_27, [
                withDirectives(createBaseVNode("select", {
                  id: "banding-type-" + bandingKey,
                  "onUpdate:modelValue": ($event) => $options.localShape.bandingType[bandingKey] = $event,
                  "aria-label": "Banding type"
                }, [
                  createBaseVNode("option", _hoisted_29, toDisplayString($options.isFieldDisabled($options.currentFields[bandingKey], void 0) ? "N/A" : "Select type"), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.bandingTypes, (option) => {
                    return openBlock(), createElementBlock("option", {
                      key: option,
                      value: option.toLowerCase(),
                      disabled: $options.isFieldDisabled($options.currentFields[bandingKey], void 0)
                    }, toDisplayString(option.toUpperCase()), 9, _hoisted_30);
                  }), 128))
                ], 8, _hoisted_28), [
                  [
                    vModelSelect,
                    $options.localShape.bandingType[bandingKey],
                    void 0,
                    {
                      lazy: true,
                      trim: true
                    }
                  ]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => $options.remove(bandingKey)
              }, [
                createBaseVNode("div", _hoisted_32, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_31),
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.getValidationMessages(bandingKey), (message, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "group validation",
                  style: normalizeStyle({
                    "grid-column-end": "span " + $options.columns
                  })
                }, toDisplayString(message), 5);
              }), 128))
            ], 4);
          }), 128))
        ])) : createCommentVNode("", true),
        $data.currentPrimary !== "banding" && $options.currentShapeFields.length ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: normalizeClass(["grid-table", $data.currentPrimary])
        }, [
          createBaseVNode("div", {
            class: "row table-heading",
            style: normalizeStyle({ "grid-template-columns": $options.columnsStyle })
          }, [
            $options.shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_33)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.currentFields, (value, key, index) => {
              return withDirectives((openBlock(), createElementBlock("div", {
                key: index,
                class: "cell"
              }, toDisplayString(value.label ?? key), 1)), [
                [vShow, value.enabled]
              ]);
            }), 128)),
            _hoisted_34
          ], 4),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.currentShapeFields, (shapeField, shapeFieldIndex) => {
            return openBlock(), createElementBlock("div", {
              key: shapeFieldIndex,
              class: "row",
              style: normalizeStyle({ "grid-template-columns": $options.columnsStyle })
            }, [
              $options.shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, toDisplayString($options.getIndex(shapeFieldIndex)), 1)
              ])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.currentFieldKeys, (key, fieldIndex) => {
                return openBlock(), createElementBlock("div", {
                  key: fieldIndex,
                  class: "cell"
                }, [
                  $options.currentFields[key].type !== "select" && $options.currentFields[key].type !== "boolean" ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 0,
                    id: key + "-" + fieldIndex,
                    ref_for: true,
                    ref: fieldIndex === 0 && fieldIndex === $options.currentShapeFields.length - 1 ? "inputFocus" : "",
                    "onUpdate:modelValue": ($event) => shapeField[key] = $event,
                    type: $options.getInputType($options.currentFields[key]),
                    inputmode: $options.getInputMode($options.currentFields[key]),
                    disabled: $options.isFieldDisabled($options.currentFields[key], shapeFieldIndex),
                    placeholder: $options.currentFields[key].label ?? key,
                    min: $options.getMinValue($options.currentFields[key]),
                    max: $options.getMaxValue($options.currentFields[key])
                  }, null, 8, _hoisted_37)), [
                    [
                      vModelDynamic,
                      shapeField[key],
                      void 0,
                      {
                        lazy: true,
                        trim: true
                      }
                    ]
                  ]) : $options.currentFields[key].type === "boolean" ? withDirectives((openBlock(), createElementBlock("input", {
                    key: 1,
                    id: key + "-" + fieldIndex,
                    "onUpdate:modelValue": ($event) => shapeField[key] = $event,
                    type: "checkbox",
                    disabled: $options.isFieldDisabled($options.currentFields[key], shapeFieldIndex)
                  }, null, 8, _hoisted_38)), [
                    [vModelCheckbox, shapeField[key]]
                  ]) : $options.currentFields[key].type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                    key: 2,
                    id: key + "-" + fieldIndex,
                    ref_for: true,
                    ref: fieldIndex === 0 && fieldIndex === $options.currentShapeFields.length - 1 ? "inputFocus" : "",
                    "onUpdate:modelValue": ($event) => shapeField[key] = $event,
                    "aria-label": $options.currentFields[key].label
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($options.currentFields[key].options, (option) => {
                      return openBlock(), createElementBlock("option", {
                        key: option.key,
                        value: option.value,
                        disabled: $options.isFieldDisabled(option, shapeFieldIndex)
                      }, toDisplayString(option.key), 9, _hoisted_40);
                    }), 128))
                  ], 8, _hoisted_39)), [
                    [
                      vModelSelect,
                      shapeField[key],
                      void 0,
                      {
                        lazy: true,
                        trim: true
                      }
                    ]
                  ]) : createCommentVNode("", true)
                ]);
              }), 128)),
              createBaseVNode("div", {
                class: "cell",
                onClick: ($event) => $options.remove(shapeFieldIndex)
              }, [
                createBaseVNode("div", _hoisted_42, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ])
              ], 8, _hoisted_41),
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.getValidationMessages(shapeFieldIndex), (message, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "group validation",
                  style: normalizeStyle({
                    "grid-column-end": "span " + $options.columns
                  })
                }, toDisplayString(message), 5);
              }), 128))
            ], 4);
          }), 128))
        ], 2)) : $data.currentSecondary ? (openBlock(), createElementBlock("div", _hoisted_43, " Nothing yet... ")) : $data.currentPrimary !== "banding" ? (openBlock(), createElementBlock("div", _hoisted_44, " Please select from the menu above ")) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", {
        id: "machining-diagram",
        class: normalizeClass(["diagram", { flipped: $data.currentSide === 1 }])
      }, null, 2)
    ])
  ]);
}
const Machining = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Machining as default
};
