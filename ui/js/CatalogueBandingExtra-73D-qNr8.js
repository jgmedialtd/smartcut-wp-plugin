import { I as N, E as T, O as Y, L as J } from "./EcommerceCalculator-D8U1LupG.js";
import { d as Q, w as W, r as B, c as f, o as u, b as r, h as X, a as b, t as S, i as m, m as o, u as Z, y as ee, l as te, F as ae, k as se, B as ie } from "./vendor-vue-Tt3m9hlc.js";
import { _ as ne } from "./Launch-Br9fQuik.js";
const oe = { class: "catalogue-banding-extra" }, le = { class: "cbe-header" }, re = {
  key: 0,
  class: "cbe-sku-badge"
}, ce = { class: "cbe-cols" }, de = { class: "cbe-col cbe-col--picker" }, ue = { class: "cbe-col cbe-col--sides" }, fe = { class: "c-field-action extras-field-group" }, pe = ["for"], ge = { class: "c-field-action extras-field-group" }, ve = ["for"], be = {
  key: 0,
  class: "price"
}, me = {
  key: 0,
  class: "cbe-sides-hint"
}, he = /* @__PURE__ */ Q({
  __name: "CatalogueBandingExtra",
  props: {
    shape: {},
    shapeIndex: {},
    catalogueKey: {},
    extraName: { default: "" },
    locations: { default: () => ["side.l1", "side.l2", "side.w1", "side.w2"] },
    pricePerLength: { default: void 0 },
    pricing: { default: () => ({}) },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 },
    maxGap: { default: void 0 },
    debug: { type: Boolean, default: !1 }
  },
  setup(n) {
    const P = ee({
      loader: () => import("./CatalogueBandingPicker-BHQyLEX0.js"),
      loadingComponent: () => ie(J, { size: "small", label: "Loading decor picker…" }),
      delay: 200
    }), F = {
      "side.l1": "Long side 1",
      "side.l2": "Long side 2",
      "side.w1": "Short side 1",
      "side.w2": "Short side 2",
      "side.a": "Side A",
      "side.b": "Side B",
      "side.c": "Side C",
      "side.d": "Side D"
    }, s = n, I = o(() => {
      const e = s.shape?.stock?.name, a = s.shape?.material, t = (e || a || "").trim();
      return s.debug && console.log("[CatalogueBandingExtra] stockName resolved", {
        shapeIndex: s.shapeIndex,
        catalogueKey: s.catalogueKey,
        stockName: e ?? null,
        materialName: a ?? null,
        source: e ? "stock.name" : a ? "material" : "none",
        resolved: t
      }), t;
    }), E = o(() => String(s.shape?.stock?.code || "").trim()), K = o(() => String(s.shape?.stock?.material || s.shape?.material || "").trim()), O = o(() => {
      const e = s.shape?.stock?.color;
      return typeof e == "string" ? e.trim() : e && typeof e == "object" && typeof e.name == "string" ? e.name.trim() : "";
    }), _ = o(() => {
      const e = s.shape?.t;
      if (typeof e == "number" && Number.isFinite(e)) return e;
      if (typeof e == "string") {
        const a = e.split(",").map((t) => Number(t.trim())).filter((t) => Number.isFinite(t));
        if (a.length > 0) return Math.max(...a);
      }
    }), p = o(() => s.locations && s.locations.length > 0 ? s.locations : ["side.l1", "side.l2", "side.w1", "side.w2"]), h = B({}), i = B(null), $ = o(() => A()), g = o(() => {
      const e = i.value;
      if (e) {
        const a = s.pricing?.[e];
        if (typeof a == "number" && Number.isFinite(a)) return a;
      }
      if (typeof s.pricePerLength == "number" && Number.isFinite(s.pricePerLength)) return s.pricePerLength;
    }), j = o(() => s.pricing ? Object.keys(s.pricing).length : 0), M = o(() => !!i.value && !!s.pricing && Object.prototype.hasOwnProperty.call(s.pricing, i.value)), R = o(() => {
      const e = i.value;
      if (!e || !s.pricing) return;
      const a = s.pricing[e];
      return typeof a == "number" ? a : void 0;
    }), U = o(() => {
      const e = [];
      return g.value === void 0 && e.push("effectivePrice is undefined"), i.value || e.push("resolvedCode is null"), w.value <= 0 && e.push("totalSideLength is 0"), e.length === 0 ? "YES — block should render" : `NO — ${e.join("; ")}`;
    });
    function k() {
      const e = s.shape.extras;
      return !e || !e.banding || !e.banding.sides ? {} : e.banding.sides;
    }
    function C() {
      const e = s.shape;
      return e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides || (e.extras.banding.sides = {}), { sides: e.extras.banding.sides };
    }
    function A() {
      const e = k();
      for (const a of Object.keys(e)) {
        const t = e[a];
        if (typeof t == "string" && t) return t;
      }
      return "";
    }
    function y(e) {
      const a = e.replace(/^side\./, ""), t = k()[a];
      return !!t && t !== !1 && t !== "";
    }
    function V(e) {
      return F[e] || e;
    }
    const w = o(() => {
      const e = s.shape, a = Number(e?.l) || 0, t = Number(e?.w) || 0, l = (v) => {
        const c = v.replace(/^side\./, "");
        return c === "l1" || c === "l2" ? a : c === "w1" || c === "w2" ? t : 0;
      };
      let d = 0;
      const x = k();
      for (const v of p.value) {
        const c = v.replace(/^side\./, "");
        x[c] && x[c] !== !1 && x[c] !== "" && (d += l(v));
      }
      return d / 1e3;
    });
    function D(e) {
      h.value = { ...e };
    }
    function q(e) {
      i.value = e;
      const { sides: a } = C();
      for (const t of Object.keys(a))
        a[t] && a[t] !== !1 && a[t] !== "" && (a[t] = e || "");
    }
    function L(e, a) {
      const { sides: t } = C(), l = e.replace(/^side\./, "");
      a && i.value ? t[l] = i.value : t[l] = !1;
    }
    function z(e) {
      const a = s.shape, t = Number(a?.l), l = Number(a?.w), d = e.replace(/^side\./, "");
      if ((d === "l1" || d === "l2") && Number.isFinite(t) && t > 0) return t / 1e3;
      if ((d === "w1" || d === "w2") && Number.isFinite(l) && l > 0) return l / 1e3;
    }
    const G = o(() => !i.value || p.value.length === 0 ? !1 : p.value.every((e) => y(e)));
    function H(e) {
      if (i.value)
        for (const a of p.value) L(a, e);
    }
    return W(() => s.shape, () => {
      h.value = {}, i.value = null;
    }), (e, a) => (u(), f("div", oe, [
      r("div", le, [
        r("h6", null, S(n.extraName || "Banding"), 1),
        i.value ? (u(), f("span", re, "SKU " + S(i.value), 1)) : b("", !0)
      ]),
      r("div", ce, [
        r("div", de, [
          m(Z(P), {
            "catalogue-key": n.catalogueKey,
            "stock-name": I.value,
            "stock-code": E.value,
            "stock-material": K.value,
            "stock-color": O.value,
            "stock-thickness": _.value,
            "max-gap": n.maxGap,
            "model-value": h.value,
            "initial-code": $.value,
            id: `cbe-picker-${n.shapeIndex}`,
            debug: n.debug,
            "onUpdate:modelValue": D,
            "onUpdate:resolvedCode": q
          }, null, 8, ["catalogue-key", "stock-name", "stock-code", "stock-material", "stock-color", "stock-thickness", "max-gap", "model-value", "initial-code", "id", "debug"])
        ]),
        r("div", ue, [
          r("div", {
            class: te(["cbe-side-grid", { "is-disabled": !i.value }])
          }, [
            r("div", fe, [
              r("label", {
                class: "extras-location-label group-label",
                for: `cbe-all-${n.shapeIndex}`
              }, "All", 8, pe),
              m(N, {
                id: `cbe-all-${n.shapeIndex}`,
                type: "checkbox",
                "enable-label": !1,
                value: G.value,
                disabled: !i.value,
                "onUpdate:value": a[0] || (a[0] = (t) => H(!!t))
              }, null, 8, ["id", "value", "disabled"])
            ]),
            (u(!0), f(ae, null, se(p.value, (t) => (u(), f("div", {
              key: t,
              class: "cbe-side-row"
            }, [
              r("div", ge, [
                r("label", {
                  class: "extras-location-label side-label",
                  for: `cbe-${t}-${n.shapeIndex}`
                }, S(V(t)), 9, ve),
                m(N, {
                  id: `cbe-${t}-${n.shapeIndex}`,
                  type: "checkbox",
                  "enable-label": !1,
                  value: y(t),
                  disabled: !i.value,
                  "onUpdate:value": (l) => L(t, !!l)
                }, null, 8, ["id", "value", "disabled", "onUpdate:value"])
              ]),
              y(t) && g.value !== void 0 ? (u(), f("div", be, [
                m(T, {
                  "price-per-unit": g.value,
                  quantity: z(t),
                  "quantity-unit": "m",
                  "price-label": n.priceLabel || "/m",
                  "format-price": n.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "price-label", "format-price"])
              ])) : b("", !0)
            ]))), 128))
          ], 2),
          i.value ? b("", !0) : (u(), f("p", me, " Pick a banding spec on the left before selecting sides. "))
        ])
      ]),
      n.debug ? (u(), X(Y, {
        key: 0,
        title: "catalogue picker — pricing debug",
        data: [{
          resolvedCode: i.value,
          totalSideLengthMetres: w.value,
          pricePerLengthFallback: n.pricePerLength,
          pricingKeyCount: j.value,
          pricingHasResolvedSku: M.value,
          priceForResolvedSku: R.value,
          effectivePrice: g.value,
          priceBlockReady: U.value
        }],
        paths: ["cbe"],
        root: !1
      }, null, 8, ["data"])) : b("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ ne(he, [["__scopeId", "data-v-218f6479"]]);
export {
  Se as default
};
