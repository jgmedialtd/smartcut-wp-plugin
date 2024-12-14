var Je = Object.defineProperty;
var Ze = (T, a, n) => a in T ? Je(T, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : T[a] = n;
var u = (T, a, n) => Ze(T, typeof a != "symbol" ? a + "" : a, n);
import { B as et, Q as Ye, C as E, R as tt, r as Y, f as ze, w as M, o as st, n as se, G as at, j as c, k as g, I as ae, u as Te, A as x, t as b, v as P, p as O, H as j, q as Ae, F as q, l as N, x as it, y as nt, L as lt } from "./main-B-GGlwIm.js";
import { e as z, f as S, h as Ee, v as V, i as rt, j as ht, k as Be, r as ot, u as dt, l as ut, I as ie, s as ct, n as pt } from "./Launch-DYmZbvEp.js";
class gt {
  constructor({
    HTMLElement: a,
    vueComponent: n,
    shape: t,
    units: v = "decimal",
    decimalPlaces: o = 2
  }) {
    u(this, "HTMLElement");
    u(this, "HTMLElementWidth");
    u(this, "el");
    u(this, "units");
    u(this, "decimalPlaces");
    u(this, "vueComponent");
    u(this, "shape");
    u(this, "h");
    u(this, "w");
    u(this, "shapeL");
    u(this, "shapeW");
    u(this, "padding", 40);
    u(this, "xScale", z.scaleLinear());
    u(this, "yScale", z.scaleLinear());
    u(this, "yScaleFlipped", z.scaleLinear());
    u(this, "measurementScale", z.scaleLinear());
    u(this, "xAxis");
    u(this, "yAxis");
    u(this, "formatDp");
    u(this, "svgCanvas");
    u(this, "currentSide", 0);
    u(this, "bandingStrokeWidth", 4);
    u(this, "shapeGroup");
    u(this, "bandingGroup");
    u(this, "holeGroup");
    u(this, "hingeHoleGroup");
    u(this, "cornerGroup");
    u(this, "legendGroup");
    u(this, "pointGroup");
    u(this, "loaded", !1);
    this.HTMLElement = a, this.units = v, this.decimalPlaces = o, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = n, this.shape = t, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = z.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = z.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const a = this.el.append("svg").attr("class", "vis");
        if (a === null) return;
        this.svgCanvas = a;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x"), this.xAxis.call(
      z.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      z.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(a, n) {
    this.pointGroup.append("circle").attr("cx", this.xScale(a)).attr("cy", this.getYScale()(n)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const a = z.path(), n = this.shape.machining.corners, t = [], v = [];
    [0, 1, 2, 3].forEach((L) => {
      const f = n[L];
      f && f.type ? (t.push(f.size ? S(f.size) : 0), v.push(f.type)) : (t.push(0), v.push(null));
    });
    const o = (L, f, k, h, B) => {
      v[L] === "radius" ? a.arcTo(
        this.xScale(f),
        this.getYScale()(k),
        this.xScale(h),
        this.getYScale()(B),
        this.measurementScale(t[L])
      ) : v[L] === "bevel" ? a.lineTo(this.xScale(h), this.getYScale()(B)) : (a.lineTo(this.xScale(f), this.getYScale()(k)), a.lineTo(this.xScale(h), this.getYScale()(B)));
    };
    a.moveTo(this.xScale(0), this.getYScale()(t[0])), o(0, 0, 0, t[0], 0), (v[0] === "bevel" || v[1] === "bevel") && a.lineTo(this.xScale(this.shapeL - t[1]), this.getYScale()(0)), o(1, this.shapeL, 0, this.shapeL, t[1]), (v[1] === "bevel" || v[2] === "bevel") && a.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - t[2])
    ), o(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - t[2],
      this.shapeW
    ), (v[2] === "bevel" || v[3] === "bevel") && a.lineTo(this.xScale(t[3]), this.getYScale()(this.shapeW)), o(3, 0, this.shapeW, 0, this.shapeW - t[3]), a.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", a.toString());
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
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((a) => a.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (a) => a.valid === !1).classed("partial", (a) => !a.isThroughShape(this.shape)).attr("cx", (a) => this.xScale(a.x)).attr("cy", (a) => {
      const n = a.getYDrawPosition(this.shape, this.currentSide);
      return this.yScale(n);
    }).attr("r", (a) => this.measurementScale(a.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const n = this.shape.machining.getAllHingeHoles(this.shape).filter((t) => t.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(n).join("circle").attr("class", "hole").classed("invalid", (t) => t.valid === !1).classed("partial", (t) => !t.isThroughShape(this.shape)).attr("cx", (t) => this.xScale(t.x)).attr("cy", (t) => this.yScale(t.getYDrawPosition(this.shape, this.currentSide))).attr("r", (t) => this.measurementScale(t.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const a = this.shape.banding, n = -1, t = [];
    for (const o of Ee)
      if (a[o])
        switch (o) {
          case "x1":
            t.push({
              x1: this.padding - n,
              x2: this.padding - n,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            t.push({
              x1: this.w - this.padding + n,
              x2: this.w - this.padding + n,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            t.push({
              x1: this.padding + this.getCornerBandingSize(0),
              x2: this.w - this.padding - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? n : -n),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
            });
            break;
          case "y2":
            t.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? -n : n)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(t).join("line").attr("class", "banding").attr("x1", (o) => o.x1).attr("x2", (o) => o.x2).attr("y1", (o) => o.y1).attr("y2", (o) => o.y2).attr("stroke-width", this.bandingStrokeWidth);
    const v = z.path();
    this.shape.machining.corners.forEach((o, L) => {
      if (!o.type) return;
      let f, k, h;
      switch (L) {
        case 0:
          if (!V(a.a) || a.a === !1) return;
          f = {
            x: this.xScale(0) - n,
            y: this.getYScale()(S(o.size ?? 0))
          }, k = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(S(o.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          };
          break;
        case 1:
          if (!V(a.b) || a.b === !1) return;
          f = {
            x: this.xScale(this.shapeL - S(o.size ?? 0)),
            y: this.getYScale()(0) + (this.currentSide === 0 ? n : -n)
          }, k = {
            x: this.xScale(this.shapeL) - n,
            y: this.getYScale()(0)
          }, h = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(S(o.size ?? 0))
          };
          break;
        case 2:
          if (!V(a.c) || a.c === !1) return;
          f = {
            x: this.xScale(this.shapeL) + n,
            y: this.getYScale()(this.shapeW - S(o.size ?? 0))
          }, k = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(this.shapeL - S(o.size ?? 0)) - n,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          };
          break;
        case 3:
          if (!V(a.d) || a.d === !1) return;
          f = {
            x: this.xScale(S(o.size ?? 0)),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? n : -n)
          }, k = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, h = {
            x: this.xScale(0) - n,
            y: this.getYScale()(this.shapeW - S(o.size ?? 0)) + n
          };
          break;
        default:
          return;
      }
      if (v.moveTo(f.x, f.y), o.type === "radius")
        switch (v.arcTo(
          k.x,
          k.y,
          h.x,
          h.y,
          this.measurementScale(o.size ?? 0)
        ), L) {
          case 0:
          case 2:
            v.lineTo(h.x + n, h.y);
            break;
          case 1:
          case 3:
            v.lineTo(h.x, h.y - (this.currentSide === 0 ? n : -1));
            break;
        }
      else o.type === "bevel" && v.lineTo(h.x, h.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][L]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", v.toString());
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
      z.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.xAxis.selectAll("text").attr("dx", "5px"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(a) {
    return this.shape.machining.corners[a].type ? this.measurementScale(this.shape.machining.corners[a].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let a = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let n = window.innerHeight - this.padding * 2 - 20;
    n > 600 && (n = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), a > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (a = 0.3, this.h = this.w * a), this.h > n && (this.h = n, this.w = this.h / a, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
const vt = { id: "machining" }, mt = {
  key: 0,
  class: "debug"
}, ft = { class: "inputs" }, bt = {
  key: 0,
  class: "shape-name"
}, St = { class: "shape-dimensions" }, xt = {
  key: 1,
  class: "sides-wrapper"
}, yt = { class: "menu" }, Ht = { class: "button-wrapper" }, wt = { class: "row table-heading" }, Ct = {
  key: 0,
  class: "id"
}, Lt = {
  key: 0,
  class: "cell"
}, kt = { class: "id" }, Dt = ["onClick"], Wt = { class: "remove" }, Yt = { key: 5 }, Bt = /* @__PURE__ */ et({
  __name: "Machining",
  props: /* @__PURE__ */ Ye({
    env: { default: "production" },
    translate: { type: Boolean, default: !1 },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      units: "decimal",
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
    shape: {
      required: !0
    },
    shapeModifiers: {}
  }),
  emits: /* @__PURE__ */ Ye(["update:shape", "close"], ["update:shape"]),
  setup(T, { emit: a }) {
    var ve, me, fe, be, Se, xe, ye, He, we, Ce, Le, ke, De;
    const n = lt(() => import("./ObjectViewer-DJIhLOPP.js")), t = T, v = a, o = E(() => rt(s.value)), L = E(() => ht.call({ options: t.options }, ["units"])), f = E(() => {
      var i;
      if (!((i = B.value) != null && i.length)) return 0;
      if (l.value === "banding") return 1;
      let e = Object.values(h.value).filter((r) => r.enabled).length;
      return e += 2, e;
    }), k = E(() => {
      if (!B.value.length || l.value === "banding") return;
      const e = {
        id: "34px",
        del: "30px"
      }, i = [];
      return B.value.forEach((r) => {
        const p = h.value[r];
        p.enabled && i.push(p.w ?? "1fr");
      }), i.unshift(e.id), i.push(e.del), i.join(" ");
    }), h = E(() => !l.value || l.value === "banding" ? null : te[l.value]), B = E(() => !l.value || l.value === "banding" ? [] : Object.keys(te[l.value]).filter((e) => te[l.value][e].enabled)), ne = E(() => l.value ? Oe() : []), Ge = E(() => {
      var i, r, p, W;
      const e = ((W = (p = (r = (i = s.value) == null ? void 0 : i.machining) == null ? void 0 : r.corners) == null ? void 0 : p.map((H) => {
        var _;
        return (_ = H == null ? void 0 : H.isPresent) != null && _.call(H) ? H.getCorner() : null;
      })) == null ? void 0 : W.filter((H) => H)) ?? [];
      return [...Ee, ...e];
    }), C = (e = !0) => {
      e ? Z.value = e : se(() => Z.value = !1);
    }, Me = () => {
      re(), he(), oe(), Ue();
    }, K = (e, i, r) => {
      se(() => {
        e[i] = r;
      });
    }, Pe = (e) => {
      if (l.value === "corners")
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
    }, le = () => l.value !== "banding", R = (e, i = null) => {
      if (!(e != null && e.length)) return [];
      let r = "None";
      i === "depth" && (r = "Through");
      const p = [{ label: r, value: null }];
      return e.forEach((W) => {
        const H = W.toString().charAt(0).toUpperCase() + W.toString().slice(1);
        p.push({ label: H, value: W });
      }), p;
    }, Oe = () => {
      if (!l.value) return [];
      if (l.value === "banding") return [];
      const e = s.value.machining[l.value];
      return Array.isArray(e) ? e : [e];
    };
    let y = null;
    const I = () => {
      s.value && (y = new gt({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: s.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), y.init(), pe.value = !0, setTimeout(() => {
        y.updateSize();
      }, 100));
    }, Fe = () => {
      F.value = F.value === 0 ? 1 : 0, y.flip();
    }, $e = () => {
      switch (l.value) {
        case "holes":
          Re();
          break;
        case "hingeHoles":
          _e();
          break;
      }
    }, Re = () => {
      s.value.machining.createHole(
        S(s.value.getLongSide()) / 2,
        S(s.value.getShortSide()) / 2,
        t.options.holes.defaultDiameter ?? 1,
        t.options.holes.defaultDepth ?? 0,
        F.value
      ), y.createHoles();
    }, _e = () => {
      s.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: t.options.holes.defaultDiameter ?? 0,
        depth: t.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: F.value,
        distanceFromEdge: t.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: t.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: t.options.hingeHoles.minimumHoleDistance,
        hingeLength: t.options.hingeHoles.defaultHingeLength
      }), y.createHingeHoles();
    }, re = () => {
      s.value.machining.holes.length = 0;
    }, he = () => {
      s.value.machining.hingeHoles.length = 0;
    }, oe = () => {
      s.value.machining.corners.forEach((e) => {
        e.size = null, e.type = null;
      }), s.value.banding.a = !1, s.value.banding.b = !1, s.value.banding.c = !1, s.value.banding.d = !1;
    }, Ue = () => {
      s.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, je = (e) => {
      switch (l.value) {
        case "holes":
          return s.value.machining.holes.splice(e, 1);
        case "hingeHoles":
          return s.value.machining.hingeHoles.splice(e, 1);
        case "corners":
          s.value.machining.corners[e].size = null, s.value.machining.corners[e].type = null;
          return;
      }
    }, qe = () => {
      switch (l.value) {
        case "holes":
          return re();
        case "hingeHoles":
          return he();
        case "corners":
          return oe();
      }
    }, de = () => {
      var e;
      if (D.value = [], !!t.options.banding.enabled) {
        C();
        for (const i in s.value.banding)
          s.value.banding[i] ? t.options.banding.enableTypes && ((e = t.options.banding.types) != null && e.length) && (s.value.banding[i] || D.value.push({
            index: i,
            message: "Please select a type"
          })) : s.value.banding[i] = "";
        C(!1);
      }
    }, Ne = (e) => {
      const i = D.value.filter((r) => r.index === e);
      return i.length ? i.map((r) => r.message) : [];
    }, Ve = (e) => {
      const i = D.value.filter((p) => p.index === e && (p == null ? void 0 : p.fields)), r = i.map((p) => p.fields).flat();
      return i.length ? r : [];
    }, Q = (e, i) => {
      const r = Ve(e);
      return r != null && r.length ? r.includes(i) : !1;
    }, Ke = () => {
      v("close");
    }, X = (e) => typeof e.disabled == "function" ? e.disabled() : !1, Ie = (e, i, r, p, W) => {
      ct(e, i, r, p, W, t.findExtrasPrice);
    }, Qe = (e, i, r, p) => {
      pt(
        e,
        i,
        r,
        p,
        [],
        t.findExtrasPrice
      );
    }, s = tt(T, "shape");
    if (!((ve = s.value) != null && ve.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const J = Y(null), ue = Y(null), Xe = Y(!1), ce = Y(!1), pe = Y(!1), Z = Y(!1), ge = Y(!1), F = Y(0), l = Y(null), ee = Y(0), D = Y([]), te = ze({
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
          type: (me = t.options.holes.diameters) != null && me.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (fe = t.options.holes.diameters) != null && fe.length ? "float" : void 0,
          options: (be = t.options.holes.diameters) != null && be.length ? R(t.options.holes.diameters) : void 0
        },
        depth: {
          enabled: t.options.holes.enableDepth && typeof s.value.t < "u" && S(s.value.t) > 0,
          //[]
          allowBlank: !0,
          type: (Se = t.options.holes.depths) != null && Se.length ? "select" : "unitDependent",
          output: (xe = t.options.holes.depths) != null && xe.length ? "float" : void 0,
          options: (ye = t.options.holes.depths) != null && ye.length ? R(t.options.holes.depths) : void 0
        },
        face: {
          enabled: t.options.faces.enabled,
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
          enabled: t.options.holes.enableDepth && typeof s.value.t < "u" && S(s.value.t) > 0,
          allowBlank: !0,
          type: (He = t.options.holes.depths) != null && He.length ? "select" : "unitDependent",
          output: (we = t.options.holes.depths) != null && we.length ? "float" : void 0,
          options: (Ce = t.options.holes.depths) != null && Ce.length ? R(t.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          type: (Le = t.options.holes.diameters) != null && Le.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (ke = t.options.holes.diameters) != null && ke.length ? "float" : void 0,
          options: (De = t.options.holes.diameters) != null && De.length ? R(t.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          type: "integer",
          label: "Num holes",
          min: 2
        },
        face: {
          enabled: t.options.faces.enabled,
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
          options: R(t.options.corners.types)
        },
        size: {
          enabled: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof t.options.corners.minValue < "u" ? S(t.options.corners.minValue) : 0,
          max: () => typeof t.options.corners.maxValue < "u" ? S(t.options.corners.maxValue) : S(s.value.getShortSide() / 2)
        }
      }
    }), m = ze({
      holes: {
        diameter: {
          min: t.options.holes.minDiameter,
          max: t.options.holes.maxDiameter
        },
        depth: {
          min: t.options.holes.minDepth,
          max: t.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: t.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: t.options.corners.minValue,
          max: t.options.corners.maxValue
        }
      }
    }), G = () => {
      var e;
      return !(!((e = s == null ? void 0 : s.value) != null && e.machining) || !ce.value || Z.value);
    };
    return M(() => {
      var e;
      return (e = s.value) == null ? void 0 : e.listId;
    }, () => {
      G() && I();
    }), M(() => {
      var e;
      return (e = s.value) == null ? void 0 : e.id;
    }, () => {
      G() && I();
    }), M(l, (e) => {
      if (G()) {
        if (e === "banding") {
          C(), de(), C(!1);
          return;
        }
        if (!e) {
          D.value = [];
          return;
        }
        C(), D.value = s.value.machining.validate(
          s.value,
          e,
          m == null ? void 0 : m[e]
        ), e === "hingeHoles" && s.value.machining.hingeHoles.forEach((i, r) => {
          Be(i, m == null ? void 0 : m.holes, D.value, r);
        }), C(!1);
      }
    }, { deep: !0, immediate: !0 }), M(() => {
      var e, i;
      return (i = (e = s == null ? void 0 : s.value) == null ? void 0 : e.machining) == null ? void 0 : i.holes;
    }, () => {
      G() && (C(), D.value = s.value.machining.validate(
        s.value,
        "holes",
        m == null ? void 0 : m.holes
      ), y.createHoles(), C(!1));
    }, { deep: !0, immediate: !0 }), M(() => {
      var e, i;
      return (i = (e = s == null ? void 0 : s.value) == null ? void 0 : e.machining) == null ? void 0 : i.hingeHoles;
    }, () => {
      G() && (C(), s.value.machining.updateHingeHoles(s.value), D.value = s.value.machining.validate(
        s.value,
        "hingeHoles",
        m == null ? void 0 : m.hingeHoles
      ), s.value.machining.hingeHoles.forEach((e, i) => {
        Be(e, m == null ? void 0 : m.holes, D.value, i);
      }), y.createHingeHoles(), C(!1));
    }, { deep: !0, immediate: !0 }), M(() => {
      var e, i;
      return (i = (e = s == null ? void 0 : s.value) == null ? void 0 : e.machining) == null ? void 0 : i.corners;
    }, () => {
      if (G()) {
        C(), D.value = s.value.machining.validate(
          s.value,
          "corners",
          m == null ? void 0 : m.corners
        ), s.value.machining.validate(s.value, "holes"), s.value.machining.validate(s.value, "hingeHoles"), y.createShape(), y.createHoles(), y.createHingeHoles();
        for (const e of s.value.machining.corners)
          e.isPresent() || ot(s.value, "banding", e.getCorner(), !0);
        y.createBanding(), C(!1);
      }
    }, { deep: !0, immediate: !0 }), M(() => {
      var e;
      return (e = s == null ? void 0 : s.value) == null ? void 0 : e.banding;
    }, () => {
      G() && (de(), y.createBanding());
    }, { deep: !0, immediate: !0 }), st(() => {
      var i;
      if ((i = document.getElementById("machining")) == null || i.requestFullscreen(), !s.value || !s.value.l || !s.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      se(() => I());
      const e = document.querySelector("#smartcut-app #machining .diagram");
      J.value || (J.value = new ResizeObserver((r) => {
        clearTimeout(ue.value ?? void 0), pe.value && (ue.value = window.setTimeout(() => {
          if (ge.value) {
            ge.value = !1;
            return;
          }
          r[0].contentRect.width !== ee.value && (ee.value = r[0].contentRect.width, ee.value && y.updateSize());
        }, 10));
      }), J.value.observe(e)), ce.value = !0;
    }), (e, i) => {
      var p, W, H, _, We;
      const r = at("font-awesome-icon");
      return c(), g("div", vt, [
        e.env === "development" && Xe.value ? (c(), g("div", mt, [
          ae(Te(n), {
            data: [s.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : x("", !0),
        b("div", null, [
          b("div", ft, [
            b("button", {
              type: "button",
              class: "close",
              onClick: Ke
            }, [
              ae(r, { icon: ["fass", "xmark"] })
            ]),
            (p = s.value) != null && p.name ? (c(), g("div", bt, P(s.value.name), 1)) : x("", !0),
            b("div", St, P((W = s.value) == null ? void 0 : W.l) + " x " + P((H = s.value) == null ? void 0 : H.w) + " " + P((_ = s.value) != null && _.t ? "x " + ((We = s.value) == null ? void 0 : We.t) : null), 1),
            e.options.faces.enabled ? (c(), g("div", xt, [
              b("div", {
                ref: "sides",
                class: O(["sides", { flipped: F.value === 1 }]),
                onClick: Fe
              }, i[4] || (i[4] = [
                b("div", { class: "side-a" }, " A ", -1),
                b("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              i[5] || (i[5] = b("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : x("", !0),
            o.value ? (c(), g("button", {
              key: 2,
              onClick: Me
            }, " Delete all machining ")) : x("", !0),
            b("div", yt, [
              e.options.holes.enabled ? (c(), g("div", {
                key: 0,
                class: O({ selected: l.value === "holes" }),
                onClick: i[0] || (i[0] = (w) => l.value = "holes")
              }, " Holes ", 2)) : x("", !0),
              e.options.hingeHoles.enabled ? (c(), g("div", {
                key: 1,
                class: O({ selected: l.value === "hingeHoles" }),
                onClick: i[1] || (i[1] = (w) => l.value = "hingeHoles")
              }, " Hinge holes ", 2)) : x("", !0),
              e.options.corners.enabled ? (c(), g("div", {
                key: 2,
                class: O({ selected: l.value === "corners" }),
                onClick: i[2] || (i[2] = (w) => l.value = "corners")
              }, " Corners ", 2)) : x("", !0),
              e.options.banding.enabled ? (c(), g("div", {
                key: 3,
                class: O({ selected: l.value === "banding" }),
                onClick: i[3] || (i[3] = (w) => l.value = "banding")
              }, " Banding ", 2)) : x("", !0)
            ]),
            b("div", Ht, [
              l.value === "holes" || l.value === "hingeHoles" ? (c(), g("button", {
                key: 0,
                type: "button",
                onClick: $e
              }, " Create ")) : x("", !0),
              l.value && l.value !== "banding" ? (c(), g("button", {
                key: 1,
                type: "button",
                onClick: qe
              }, " Delete all ")) : x("", !0)
            ]),
            l.value === "banding" && s.value ? (c(), j(ut, {
              key: 3,
              shape: s.value,
              env: e.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": Ge.value,
              labels: e.options.banding.labels,
              "all-options": e.options.banding.options,
              pricing: e.options.banding.pricing,
              "user-friendly-field-map": Te(dt),
              "part-columns": 1,
              translate: e.translate,
              "orientation-model": 0,
              "get-price": e.getExtrasPrice,
              "format-price": e.formatPrice,
              "get-available-pricing-options": e.getAvailablePricingOptions,
              onSet: Ie,
              onUpdateAll: Qe
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : x("", !0),
            l.value !== "banding" && ne.value.length ? (c(), g("div", {
              key: 4,
              class: O(["grid-table", l.value]),
              style: Ae({ "grid-template-columns": k.value })
            }, [
              b("div", wt, [
                le() ? (c(), g("div", Ct)) : x("", !0),
                (c(!0), g(q, null, N(h.value, (w, A, d) => it((c(), g("div", {
                  key: d,
                  class: "cell"
                }, P(w.label ?? A), 1)), [
                  [nt, w.enabled]
                ])), 128)),
                i[6] || (i[6] = b("div", { class: "del" }, null, -1))
              ]),
              (c(!0), g(q, null, N(ne.value, (w, A) => (c(), g("div", {
                key: A,
                class: "row"
              }, [
                le() ? (c(), g("div", Lt, [
                  b("div", kt, P(Pe(A)), 1)
                ])) : x("", !0),
                (c(!0), g(q, null, N(B.value, (d, $) => (c(), g("div", {
                  key: $,
                  class: "cell"
                }, [
                  h.value[d].type !== "select" && h.value[d].type !== "checkbox" ? (c(), j(ie, {
                    key: 0,
                    id: d + "-" + $,
                    warning: Q(A, d),
                    type: h.value[d].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: h.value[d].label ?? d,
                    disabled: X(h.value[d]),
                    value: w[d],
                    units: L.value,
                    output: h.value[d].output,
                    onUpdate: (U) => K(w, d, U)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate"])) : h.value[d].type === "checkbox" ? (c(), j(ie, {
                    key: 1,
                    id: d + "-" + $,
                    type: "checkbox",
                    warning: Q(A, d),
                    "enable-label": !1,
                    disabled: X(h.value[d]),
                    value: w[d],
                    output: h.value[d].output,
                    onUpdate: (U) => K(w, d, U)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate"])) : h.value[d].type === "select" ? (c(), j(ie, {
                    key: 2,
                    id: d + "-" + $,
                    type: "select",
                    "enable-label": !1,
                    warning: Q(A, d),
                    disabled: X(h.value[d]),
                    value: w[d],
                    options: h.value[d].options,
                    output: h.value[d].output,
                    onUpdate: (U) => K(w, d, U)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate"])) : x("", !0)
                ]))), 128)),
                b("div", {
                  class: "cell",
                  onClick: (d) => je(A)
                }, [
                  b("div", Wt, [
                    ae(r, { icon: ["fass", "trash"] })
                  ])
                ], 8, Dt),
                (c(!0), g(q, null, N(Ne(A), (d, $) => (c(), g("div", {
                  key: $,
                  class: "group validation",
                  style: Ae({ "grid-column-end": "span " + f.value })
                }, P(d), 5))), 128))
              ]))), 128))
            ], 6)) : l.value !== "banding" ? (c(), g("div", Yt, " Please select from the menu above ")) : x("", !0)
          ]),
          b("div", {
            id: "machining-diagram",
            class: O(["diagram", { flipped: F.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
});
export {
  Bt as default
};
