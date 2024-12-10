var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as defineComponent, P as mergeModels, C as computed, Q as useModel, r as ref, f as reactive, w as watch, o as onMounted, n as nextTick, G as resolveComponent, j as openBlock, k as createElementBlock, I as createVNode, u as unref, A as createCommentVNode, t as createBaseVNode, v as toDisplayString, p as normalizeClass, H as createBlock, q as normalizeStyle, F as Fragment, l as renderList, x as withDirectives, y as vShow, K as defineAsyncComponent } from "./main-BuWv0poc.js";
import { e as d3, f as convertUnit, h as mainSides, v as valueSet, i as hasMachining, j as getOptions, k as extrasValidation, r as removeSingleExtra, u as userFriendlyFieldMap, l as _sfc_main$1, I as InputField, s as setExtrasOption, n as setAllExtrasOptions } from "./Launch-CIMl3I9R.js";
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
    __publicField(this, "bandingStrokeWidth", 4);
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
    text = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
    this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px");
    this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2));
    text = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
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
    for (const side of mainSides) {
      if (!banding[side]) continue;
      switch (side) {
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
    this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]);
    this.HTMLElement.style.height = this.h + "px";
    this.create();
  }
}
const _hoisted_1 = { id: "machining" };
const _hoisted_2 = {
  key: 0,
  class: "debug"
};
const _hoisted_3 = { class: "inputs" };
const _hoisted_4 = {
  key: 0,
  class: "shape-name"
};
const _hoisted_5 = { class: "shape-dimensions" };
const _hoisted_6 = {
  key: 1,
  class: "sides-wrapper"
};
const _hoisted_7 = { class: "menu" };
const _hoisted_8 = { class: "button-wrapper" };
const _hoisted_9 = { class: "row table-heading" };
const _hoisted_10 = {
  key: 0,
  class: "id"
};
const _hoisted_11 = {
  key: 0,
  class: "cell"
};
const _hoisted_12 = { class: "id" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "remove" };
const _hoisted_15 = { key: 5 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Machining",
  props: /* @__PURE__ */ mergeModels({
    env: { default: "production" },
    translate: { type: Boolean, default: false },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      units: "decimal",
      faces: { enabled: true },
      holes: {
        enabled: true,
        defaultDiameter: 10,
        diameters: [],
        minDiameter: 0,
        maxDiameter: 100,
        enableDepth: true,
        depths: [],
        defaultDepth: 0,
        minDepth: 0,
        maxDepth: 100
      },
      hingeHoles: {
        enabled: true,
        minimumHoleDistance: 0,
        defaultDistanceFromEdge: 22,
        defaultOuterSpacing: 10,
        defaultHingeLength: 50
      },
      shelfHoles: {
        enabled: false,
        diameters: [],
        depths: []
      },
      corners: {
        enabled: true,
        minValue: 0,
        types: ["bevel", "radius"]
      },
      banding: {
        enabled: false,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: false
      }
    }) }
  }, {
    "shape": {
      required: true
    },
    "shapeModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:shape", "close"], ["update:shape"]),
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const ObjectViewer = defineAsyncComponent(() => import("./ObjectViewer-BiwJbooS.js"));
    const props = __props;
    const emit = __emit;
    const hasMachining$1 = computed(() => hasMachining(shape.value));
    const units = computed(() => getOptions.call({ options: props.options }, ["units"]));
    const columns = computed(() => {
      var _a2;
      if (!((_a2 = currentFieldKeys.value) == null ? void 0 : _a2.length)) return 0;
      if (currentType.value === "banding") return 1;
      let number = Object.values(currentFields.value).filter((f) => f.enabled).length;
      number += 2;
      return number;
    });
    const columnsStyle = computed(() => {
      if (!currentFieldKeys.value.length) return;
      if (currentType.value === "banding") return;
      const widthValues = {
        id: "34px",
        del: "30px"
      };
      const widths = [];
      currentFieldKeys.value.forEach((key) => {
        const field = currentFields.value[key];
        if (field.enabled) widths.push(field.w ?? "1fr");
      });
      widths.unshift(widthValues.id);
      widths.push(widthValues.del);
      return widths.join(" ");
    });
    const currentFields = computed(() => {
      if (!currentType.value || currentType.value === "banding") return null;
      return fieldDefinitions[currentType.value];
    });
    const currentFieldKeys = computed(() => {
      if (!currentType.value || currentType.value === "banding") return [];
      return Object.keys(fieldDefinitions[currentType.value]).filter((f) => fieldDefinitions[currentType.value][f].enabled);
    });
    const currentShapeFields = computed(() => {
      if (!currentType.value) return [];
      return getCurrentShapeFields();
    });
    const availableBandingSides = computed(() => {
      var _a2, _b2, _c2, _d2;
      const corners = ((_d2 = (_c2 = (_b2 = (_a2 = shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.corners) == null ? void 0 : _c2.map((corner) => {
        var _a3;
        return ((_a3 = corner == null ? void 0 : corner.isPresent) == null ? void 0 : _a3.call(corner)) ? corner.getCorner() : null;
      })) == null ? void 0 : _d2.filter((c) => c)) ?? [];
      return [...mainSides, ...corners];
    });
    const suppressWatchers = (on = true) => {
      if (on) {
        disableWatchers.value = on;
      } else {
        nextTick(() => disableWatchers.value = false);
      }
    };
    const deleteAll = () => {
      deleteHoles();
      deleteHingeHoles();
      deleteCorners();
      deleteBanding();
    };
    const updateField = (field, key, value) => {
      nextTick(() => {
        field[key] = value;
      });
    };
    const getIndex = (index) => {
      if (currentType.value === "corners") {
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
    };
    const shouldShowId = () => currentType.value !== "banding";
    const getSelectOptions = (values, type = null) => {
      if (!(values == null ? void 0 : values.length)) return [];
      let nullOptionKey = "None";
      if (type === "depth") nullOptionKey = "Through";
      const options = [{ label: nullOptionKey, value: null }];
      values.forEach((value) => {
        const label = value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
        options.push({ label, value });
      });
      return options;
    };
    const getCurrentShapeFields = () => {
      if (!currentType.value) return [];
      if (currentType.value === "banding") return [];
      const shapeFields = shape.value.machining[currentType.value];
      return Array.isArray(shapeFields) ? shapeFields : [shapeFields];
    };
    let vis = null;
    const initVis = () => {
      if (!shape.value) return;
      vis = new Vis({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: shape.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      });
      vis.init();
      visInit.value = true;
      setTimeout(() => {
        vis.updateSize();
      }, 100);
    };
    const flip = () => {
      currentFace.value = currentFace.value === 0 ? 1 : 0;
      vis.flip();
    };
    const create = () => {
      switch (currentType.value) {
        case "holes":
          createHole();
          break;
        case "hingeHoles":
          createHingeHoles();
          break;
      }
    };
    const createHole = () => {
      shape.value.machining.createHole(
        convertUnit(shape.value.getLongSide()) / 2,
        convertUnit(shape.value.getShortSide()) / 2,
        props.options.holes.defaultDiameter ?? 1,
        props.options.holes.defaultDepth ?? 0,
        currentFace.value
      );
      vis.createHoles();
    };
    const createHingeHoles = () => {
      shape.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: props.options.holes.defaultDiameter ?? 0,
        depth: props.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: currentFace.value,
        distanceFromEdge: props.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: props.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: props.options.hingeHoles.minimumHoleDistance,
        hingeLength: props.options.hingeHoles.defaultHingeLength
      });
      vis.createHingeHoles();
    };
    const deleteHoles = () => {
      shape.value.machining.holes.length = 0;
    };
    const deleteHingeHoles = () => {
      shape.value.machining.hingeHoles.length = 0;
    };
    const deleteCorners = () => {
      shape.value.machining.corners.forEach((c) => {
        c.size = null;
        c.type = null;
      });
      shape.value.banding.a = false;
      shape.value.banding.b = false;
      shape.value.banding.c = false;
      shape.value.banding.d = false;
    };
    const deleteBanding = () => {
      shape.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    };
    const remove = (itemIndex) => {
      switch (currentType.value) {
        case "holes":
          return shape.value.machining.holes.splice(itemIndex, 1);
        case "hingeHoles":
          return shape.value.machining.hingeHoles.splice(itemIndex, 1);
        case "corners":
          shape.value.machining.corners[itemIndex].size = null;
          shape.value.machining.corners[itemIndex].type = null;
          return;
      }
    };
    const removeAll = () => {
      switch (currentType.value) {
        case "holes":
          return deleteHoles();
        case "hingeHoles":
          return deleteHingeHoles();
        case "corners":
          return deleteCorners();
      }
    };
    const validateBanding = () => {
      var _a2;
      validationIssues.value = [];
      if (!props.options.banding.enabled) return;
      suppressWatchers();
      for (const key in shape.value.banding) {
        const active = shape.value.banding[key];
        if (active) {
          if (props.options.banding.enableTypes && ((_a2 = props.options.banding.types) == null ? void 0 : _a2.length)) {
            if (!shape.value.banding[key]) {
              validationIssues.value.push({
                index: key,
                message: "Please select a type"
              });
            }
          }
        } else {
          shape.value.banding[key] = "";
        }
      }
      suppressWatchers(false);
    };
    const getValidationIssues = (index) => {
      const issues = validationIssues.value.filter((i) => i.index === index);
      return issues.length ? issues.map((i) => i.message) : [];
    };
    const getValidationIssueFields = (index) => {
      const issues = validationIssues.value.filter((i) => i.index === index && (i == null ? void 0 : i.fields));
      const fields = issues.map((m) => m.fields).flat();
      return issues.length ? fields : [];
    };
    const isInvalid = (index, key) => {
      const fields = getValidationIssueFields(index);
      if (!(fields == null ? void 0 : fields.length)) return false;
      return fields.includes(key);
    };
    const close = () => {
      emit("close");
    };
    const isFieldDisabled = (fieldDefinition) => {
      if (typeof fieldDefinition.disabled === "function") {
        return fieldDefinition.disabled();
      }
      return false;
    };
    const setExtrasOption$1 = (shape2, extrasKey, option, key, value) => {
      setExtrasOption(shape2, extrasKey, option, key, value, props.findExtrasPrice);
    };
    const setAllExtrasOptions$1 = (shape2, extraType, option, value) => {
      setAllExtrasOptions(
        shape2,
        extraType,
        option,
        value,
        [],
        props.findExtrasPrice
      );
    };
    const shape = useModel(__props, "shape");
    if (!((_a = shape.value) == null ? void 0 : _a.machining)) {
      throw new Error("Machining component requires a shape with machining initialized");
    }
    const visWrapperResizeObserver = ref(null);
    const visWrapperResizeTimer = ref(null);
    const showDevInfo = ref(false);
    const loaded = ref(false);
    const visInit = ref(false);
    const disableWatchers = ref(false);
    const suppressResizeObserver = ref(false);
    const currentFace = ref(0);
    const currentType = ref(null);
    const visWrapperWidth = ref(0);
    const validationIssues = ref([]);
    const fieldDefinitions = reactive({
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
          type: ((_b = props.options.holes.diameters) == null ? void 0 : _b.length) ? "select" : "unitDependent",
          label: "Diameter",
          output: ((_c = props.options.holes.diameters) == null ? void 0 : _c.length) ? "float" : void 0,
          options: ((_d = props.options.holes.diameters) == null ? void 0 : _d.length) ? getSelectOptions(props.options.holes.diameters) : void 0
        },
        depth: {
          enabled: props.options.holes.enableDepth && typeof shape.value.t !== "undefined" && convertUnit(shape.value.t) > 0,
          //[]
          allowBlank: true,
          type: ((_e = props.options.holes.depths) == null ? void 0 : _e.length) ? "select" : "unitDependent",
          output: ((_f = props.options.holes.depths) == null ? void 0 : _f.length) ? "float" : void 0,
          options: ((_g = props.options.holes.depths) == null ? void 0 : _g.length) ? getSelectOptions(props.options.holes.depths) : void 0
        },
        face: {
          enabled: props.options.faces.enabled,
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
          enabled: props.options.holes.enableDepth && typeof shape.value.t !== "undefined" && convertUnit(shape.value.t) > 0,
          allowBlank: true,
          type: ((_h = props.options.holes.depths) == null ? void 0 : _h.length) ? "select" : "unitDependent",
          output: ((_i = props.options.holes.depths) == null ? void 0 : _i.length) ? "float" : void 0,
          options: ((_j = props.options.holes.depths) == null ? void 0 : _j.length) ? getSelectOptions(props.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: true,
          type: ((_k = props.options.holes.diameters) == null ? void 0 : _k.length) ? "select" : "unitDependent",
          label: "Diameter",
          output: ((_l = props.options.holes.diameters) == null ? void 0 : _l.length) ? "float" : void 0,
          options: ((_m = props.options.holes.diameters) == null ? void 0 : _m.length) ? getSelectOptions(props.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: true,
          type: "integer",
          label: "Num holes",
          min: 2
        },
        face: {
          enabled: props.options.faces.enabled,
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
          options: getSelectOptions(props.options.corners.types)
        },
        size: {
          enabled: true,
          label: "Size",
          type: "unitDependent",
          min: () => typeof props.options.corners.minValue !== "undefined" ? convertUnit(props.options.corners.minValue) : 0,
          max: () => typeof props.options.corners.maxValue !== "undefined" ? convertUnit(props.options.corners.maxValue) : convertUnit(shape.value.getShortSide() / 2)
        }
      }
    });
    const extraValidation = reactive({
      holes: {
        diameter: {
          min: props.options.holes.minDiameter,
          max: props.options.holes.maxDiameter
        },
        depth: {
          min: props.options.holes.minDepth,
          max: props.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: props.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: props.options.corners.minValue,
          max: props.options.corners.maxValue
        }
      }
    });
    const checkShape = () => {
      var _a2;
      if (!((_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) || !loaded.value || disableWatchers.value) return false;
      return true;
    };
    watch(() => {
      var _a2;
      return (_a2 = shape.value) == null ? void 0 : _a2.listId;
    }, () => {
      if (!checkShape()) return;
      initVis();
    });
    watch(() => {
      var _a2;
      return (_a2 = shape.value) == null ? void 0 : _a2.id;
    }, () => {
      if (!checkShape()) return;
      initVis();
    });
    watch(currentType, (type) => {
      if (!checkShape()) return;
      if (type === "banding") {
        suppressWatchers();
        validateBanding();
        suppressWatchers(false);
        return;
      }
      if (!type) {
        validationIssues.value = [];
        return;
      }
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        type,
        extraValidation == null ? void 0 : extraValidation[type]
      );
      if (type === "hingeHoles") {
        shape.value.machining.hingeHoles.forEach((hole, index) => {
          extrasValidation(hole, extraValidation == null ? void 0 : extraValidation.holes, validationIssues.value, index);
        });
      }
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.holes;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "holes",
        extraValidation == null ? void 0 : extraValidation.holes
      );
      vis.createHoles();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.hingeHoles;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      shape.value.machining.updateHingeHoles(shape.value);
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "hingeHoles",
        extraValidation == null ? void 0 : extraValidation.hingeHoles
      );
      shape.value.machining.hingeHoles.forEach((hole, index) => {
        extrasValidation(hole, extraValidation == null ? void 0 : extraValidation.holes, validationIssues.value, index);
      });
      vis.createHingeHoles();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.corners;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "corners",
        extraValidation == null ? void 0 : extraValidation.corners
      );
      shape.value.machining.validate(shape.value, "holes");
      shape.value.machining.validate(shape.value, "hingeHoles");
      vis.createShape();
      vis.createHoles();
      vis.createHingeHoles();
      for (const corner of shape.value.machining.corners) {
        if (!corner.isPresent()) {
          removeSingleExtra(shape.value, "banding", corner.getCorner(), true);
        }
      }
      vis.createBanding();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2;
      return (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.banding;
    }, () => {
      if (!checkShape()) return;
      validateBanding();
      vis.createBanding();
    }, { deep: true, immediate: true });
    onMounted(() => {
      var _a2;
      (_a2 = document.getElementById("machining")) == null ? void 0 : _a2.requestFullscreen();
      if (!shape.value || !shape.value.l || !shape.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      nextTick(() => initVis());
      const visWrapper = document.querySelector("#smartcut-app #machining .diagram");
      if (!visWrapperResizeObserver.value) {
        visWrapperResizeObserver.value = new ResizeObserver((entries) => {
          clearTimeout(visWrapperResizeTimer.value ?? void 0);
          if (!visInit.value) return;
          visWrapperResizeTimer.value = window.setTimeout(() => {
            if (suppressResizeObserver.value) {
              suppressResizeObserver.value = false;
              return;
            }
            const newWidth = entries[0].contentRect.width;
            if (newWidth !== visWrapperWidth.value) {
              visWrapperWidth.value = entries[0].contentRect.width;
              if (visWrapperWidth.value) vis.updateSize();
            }
          }, 10);
        });
        visWrapperResizeObserver.value.observe(visWrapper);
      }
      loaded.value = true;
    });
    return (_ctx, _cache) => {
      var _a2, _b2, _c2, _d2, _e2;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.env === "development" && showDevInfo.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(unref(ObjectViewer), {
            data: [shape.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              type: "button",
              class: "close",
              onClick: close
            }, [
              createVNode(_component_font_awesome_icon, { icon: ["fass", "xmark"] })
            ]),
            ((_a2 = shape.value) == null ? void 0 : _a2.name) ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(shape.value.name), 1)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5, toDisplayString((_b2 = shape.value) == null ? void 0 : _b2.l) + " x " + toDisplayString((_c2 = shape.value) == null ? void 0 : _c2.w) + " " + toDisplayString(((_d2 = shape.value) == null ? void 0 : _d2.t) ? "x " + ((_e2 = shape.value) == null ? void 0 : _e2.t) : null), 1),
            _ctx.options.faces.enabled ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", {
                ref: "sides",
                class: normalizeClass(["sides", { flipped: currentFace.value === 1 }]),
                onClick: flip
              }, _cache[4] || (_cache[4] = [
                createBaseVNode("div", { class: "side-a" }, " A ", -1),
                createBaseVNode("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : createCommentVNode("", true),
            hasMachining$1.value ? (openBlock(), createElementBlock("button", {
              key: 2,
              onClick: deleteAll
            }, " Delete all machining ")) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_7, [
              _ctx.options.holes.enabled ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({ selected: currentType.value === "holes" }),
                onClick: _cache[0] || (_cache[0] = ($event) => currentType.value = "holes")
              }, " Holes ", 2)) : createCommentVNode("", true),
              _ctx.options.hingeHoles.enabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass({ selected: currentType.value === "hingeHoles" }),
                onClick: _cache[1] || (_cache[1] = ($event) => currentType.value = "hingeHoles")
              }, " Hinge holes ", 2)) : createCommentVNode("", true),
              _ctx.options.corners.enabled ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass({ selected: currentType.value === "corners" }),
                onClick: _cache[2] || (_cache[2] = ($event) => currentType.value = "corners")
              }, " Corners ", 2)) : createCommentVNode("", true),
              _ctx.options.banding.enabled ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass({ selected: currentType.value === "banding" }),
                onClick: _cache[3] || (_cache[3] = ($event) => currentType.value = "banding")
              }, " Banding ", 2)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_8, [
              currentType.value === "holes" || currentType.value === "hingeHoles" ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                onClick: create
              }, " Create ")) : createCommentVNode("", true),
              currentType.value && currentType.value !== "banding" ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                onClick: removeAll
              }, " Delete all ")) : createCommentVNode("", true)
            ]),
            currentType.value === "banding" && shape.value ? (openBlock(), createBlock(_sfc_main$1, {
              key: 3,
              shape: shape.value,
              env: _ctx.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": availableBandingSides.value,
              labels: _ctx.options.banding.labels,
              "all-options": _ctx.options.banding.options,
              pricing: _ctx.options.banding.pricing,
              "user-friendly-field-map": unref(userFriendlyFieldMap),
              "part-columns": 1,
              translate: _ctx.translate,
              "orientation-model": 0,
              "get-price": _ctx.getExtrasPrice,
              "format-price": _ctx.formatPrice,
              "get-available-pricing-options": _ctx.getAvailablePricingOptions,
              onSet: setExtrasOption$1,
              onUpdateAll: setAllExtrasOptions$1
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : createCommentVNode("", true),
            currentType.value !== "banding" && currentShapeFields.value.length ? (openBlock(), createElementBlock("div", {
              key: 4,
              class: normalizeClass(["grid-table", currentType.value]),
              style: normalizeStyle({ "grid-template-columns": columnsStyle.value })
            }, [
              createBaseVNode("div", _hoisted_9, [
                shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(currentFields.value, (value, key, index) => {
                  return withDirectives((openBlock(), createElementBlock("div", {
                    key: index,
                    class: "cell"
                  }, toDisplayString(value.label ?? key), 1)), [
                    [vShow, value.enabled]
                  ]);
                }), 128)),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "del" }, null, -1))
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentShapeFields.value, (shapeField, shapeFieldIndex) => {
                return openBlock(), createElementBlock("div", {
                  key: shapeFieldIndex,
                  class: "row"
                }, [
                  shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, toDisplayString(getIndex(shapeFieldIndex)), 1)
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(currentFieldKeys.value, (key, fieldIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: fieldIndex,
                      class: "cell"
                    }, [
                      currentFields.value[key].type !== "select" && currentFields.value[key].type !== "checkbox" ? (openBlock(), createBlock(InputField, {
                        key: 0,
                        id: key + "-" + fieldIndex,
                        warning: isInvalid(shapeFieldIndex, key),
                        type: currentFields.value[key].output ?? "unitDependent",
                        "enable-label": false,
                        placeholder: currentFields.value[key].label ?? key,
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        units: units.value,
                        output: currentFields.value[key].output,
                        onUpdate: (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate"])) : currentFields.value[key].type === "checkbox" ? (openBlock(), createBlock(InputField, {
                        key: 1,
                        id: key + "-" + fieldIndex,
                        type: "checkbox",
                        warning: isInvalid(shapeFieldIndex, key),
                        "enable-label": false,
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        output: currentFields.value[key].output,
                        onUpdate: (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate"])) : currentFields.value[key].type === "select" ? (openBlock(), createBlock(InputField, {
                        key: 2,
                        id: key + "-" + fieldIndex,
                        type: "select",
                        "enable-label": false,
                        warning: isInvalid(shapeFieldIndex, key),
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        options: currentFields.value[key].options,
                        output: currentFields.value[key].output,
                        onUpdate: (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate"])) : createCommentVNode("", true)
                    ]);
                  }), 128)),
                  createBaseVNode("div", {
                    class: "cell",
                    onClick: ($event) => remove(shapeFieldIndex)
                  }, [
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                    ])
                  ], 8, _hoisted_13),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getValidationIssues(shapeFieldIndex), (message, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "group validation",
                      style: normalizeStyle({ "grid-column-end": "span " + columns.value })
                    }, toDisplayString(message), 5);
                  }), 128))
                ]);
              }), 128))
            ], 6)) : currentType.value !== "banding" ? (openBlock(), createElementBlock("div", _hoisted_15, " Please select from the menu above ")) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            id: "machining-diagram",
            class: normalizeClass(["diagram", { flipped: currentFace.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=Machining-_k9j8LAh.js.map
