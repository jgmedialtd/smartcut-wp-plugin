import { cw as le, cH as ce, bQ as C } from "./result.zod-B0BoTcpc.js";
import { t as de } from "./i18n-Dj6izb6_.js";
import { n as A, I as D, O as ue, L as fe } from "./EcommerceCalculator-ClNeqZHE.js";
import { d as pe, w as ve, o as r, e as l, j as c, t as k, f as g, F as G, C as H, i as p, u as z, y as be, b as ge, a as me, O as he, c as s, g as x } from "./vendor-vue-QD0FJS8o.js";
import { _ as ke } from "./Launch-NSW_K3VG.js";
const xe = { class: "catalogue-banding-extra" }, ye = { class: "cbe-header" }, Se = {
  key: 0,
  class: "cbe-sku-badge"
}, Le = {
  key: 0,
  class: "cbe-perside"
}, Pe = { class: "extras-location-label side-label" }, Ce = {
  key: 0,
  class: "price"
}, we = {
  key: 1,
  class: "cbe-cols"
}, Ie = { class: "cbe-col cbe-col--picker" }, Ne = { class: "cbe-col cbe-col--sides" }, Fe = { class: "c-field-action extras-field-group" }, $e = ["for"], Be = { class: "c-field-action extras-field-group" }, Ue = ["for"], qe = {
  key: 0,
  class: "price"
}, Te = {
  key: 0,
  class: "cbe-sides-hint"
}, Re = /* @__PURE__ */ pe({
  __name: "CatalogueBandingExtra",
  props: {
    shape: {},
    shapeIndex: {},
    extraType: { default: "banding" },
    catalogueKey: { default: "" },
    extraId: { default: "" },
    extraName: { default: "" },
    locations: { default: () => ["side.l1", "side.l2", "side.w1", "side.w2"] },
    pricePerLength: { default: void 0 },
    pricing: { default: () => ({}) },
    priceLabel: { default: "" },
    formatPrice: { type: Function, default: void 0 },
    maxGap: { default: void 0 },
    perSide: { type: Boolean, default: !1 },
    orientationModel: { default: 0 },
    debug: { type: Boolean, default: !1 }
  },
  setup(n) {
    const w = me({
      loader: () => import("./CatalogueBandingPicker-BQ6qI-SI.js"),
      loadingComponent: () => he(fe, { size: "small", label: "Loading decor picker…" }),
      delay: 200
    }), i = n, I = s(() => {
      const e = (u().material || "").trim();
      return i.debug && console.log("[CatalogueBandingExtra] stockName resolved", {
        shapeIndex: i.shapeIndex,
        catalogueKey: i.catalogueKey,
        resolved: e
      }), e;
    }), N = s(() => String(u().stock?.code || "").trim()), F = s(() => {
      const e = u();
      return String(e.stock?.material || e.material || "").trim();
    }), $ = s(() => {
      const e = u().color;
      return typeof e == "string" ? e.trim() : e && typeof e == "object" && typeof e.name == "string" ? e.name.trim() : "";
    }), B = s(() => {
      const e = u().t;
      if (typeof e == "number" && Number.isFinite(e)) return e;
      if (typeof e == "string") {
        const t = e.split(",").map((a) => Number(a.trim())).filter((a) => Number.isFinite(a));
        if (t.length > 0) return Math.max(...t);
      }
    }), d = s(() => i.locations && i.locations.length > 0 ? i.locations : ["side.l1", "side.l2", "side.w1", "side.w2"]), u = () => i.shape, W = s(() => le(i.extraType)), U = s(() => i.extraType === "banding"), y = x({}), o = x(null), Q = s(() => ee()), m = s(() => {
      const e = o.value;
      if (e) {
        const t = i.pricing?.[e];
        if (typeof t == "number" && Number.isFinite(t)) return t;
      }
      if (typeof i.pricePerLength == "number" && Number.isFinite(i.pricePerLength)) return i.pricePerLength;
    }), Y = s(() => i.pricing ? Object.keys(i.pricing).length : 0), J = s(() => !!o.value && !!i.pricing && Object.prototype.hasOwnProperty.call(i.pricing, o.value)), X = s(() => {
      const e = o.value;
      if (!e || !i.pricing) return;
      const t = i.pricing[e];
      return typeof t == "number" ? t : void 0;
    }), Z = s(() => {
      const e = [];
      return m.value === void 0 && e.push("effectivePrice is undefined"), o.value || e.push("resolvedCode is null"), V.value <= 0 && e.push("totalSideLength is 0"), e.length === 0 ? "YES — block should render" : `NO — ${e.join("; ")}`;
    });
    function q(e) {
      return e.startsWith("face.") ? "faces" : "sides";
    }
    function T(e) {
      return e.replace(/^(face|side)\./, "");
    }
    function _() {
      const e = u(), t = e.extras ?? (e.extras = {}), a = t[i.extraType] ?? (t[i.extraType] = {}), f = a.faces ?? (a.faces = {}), re = a.sides ?? (a.sides = {});
      return { faces: f, sides: re };
    }
    function S(e) {
      return u().extras?.[i.extraType]?.[q(e)]?.[T(e)];
    }
    function L(e, t) {
      const a = _();
      a[q(e)][T(e)] = t;
    }
    function ee() {
      for (const e of d.value) {
        const t = S(e);
        if (typeof t == "string" && t) return t;
      }
      return "";
    }
    function v(e) {
      const t = S(e);
      return !!t && t !== !1 && t !== "";
    }
    function R(e) {
      const t = u(), a = Number(t.w) > Number(t.l);
      return de(ce(e, i.orientationModel, a));
    }
    function P(e) {
      return C(i.shape, e).unit;
    }
    function K(e) {
      return i.priceLabel || `/${P(e)}`;
    }
    const V = s(() => {
      let e = 0;
      for (const t of d.value)
        v(t) && (e += C(i.shape, t).quantity || 0);
      return e;
    });
    function te(e) {
      y.value = { ...e };
    }
    function ae(e) {
      o.value = e;
      for (const t of d.value)
        v(t) && L(t, e || "");
    }
    function M(e, t) {
      L(e, t && o.value ? o.value : !1);
    }
    function O(e) {
      return C(i.shape, e).quantity;
    }
    const ie = s(() => !o.value || d.value.length === 0 ? !1 : d.value.every((e) => v(e)));
    function ne(e) {
      if (o.value)
        for (const t of d.value) M(t, e);
    }
    const h = x({}), b = x({});
    function j(e) {
      const t = S(e);
      return typeof t == "string" && t ? t : "";
    }
    function oe(e, t) {
      h.value = { ...h.value, [e]: { ...t } };
    }
    function se(e, t) {
      b.value = { ...b.value, [e]: t }, L(e, t || !1);
    }
    function E(e) {
      const t = b.value[e] || j(e);
      if (t) {
        const a = i.pricing?.[t];
        if (typeof a == "number" && Number.isFinite(a)) return a;
      }
      if (typeof i.pricePerLength == "number" && Number.isFinite(i.pricePerLength)) return i.pricePerLength;
    }
    return ve(() => i.shape, () => {
      y.value = {}, o.value = null, h.value = {}, b.value = {};
    }), (e, t) => (r(), l("div", xe, [
      c("div", ye, [
        c("h6", null, k(n.extraName || W.value), 1),
        o.value ? (r(), l("span", Se, "SKU " + k(o.value), 1)) : g("", !0)
      ]),
      n.perSide ? (r(), l("div", Le, [
        (r(!0), l(G, null, H(d.value, (a) => (r(), l("div", {
          key: a,
          class: "cbe-perside-row"
        }, [
          c("label", Pe, k(R(a)), 1),
          p(z(w), {
            "extra-id": n.extraId,
            "tid-prefix": `catalogue-${n.extraType}`,
            "show-decor": U.value,
            "stock-name": I.value,
            "stock-code": N.value,
            "stock-material": F.value,
            "stock-color": $.value,
            "stock-thickness": B.value,
            "max-gap": n.maxGap,
            "model-value": h.value[a] || {},
            "initial-code": j(a),
            id: `cbe-picker-${n.shapeIndex}-${a}`,
            "part-index": n.shapeIndex,
            scope: `${n.shapeIndex}-${a.replace(/^(face|side)\./, "")}`,
            debug: n.debug,
            "onUpdate:modelValue": (f) => oe(a, f),
            "onUpdate:resolvedCode": (f) => se(a, f)
          }, null, 8, ["extra-id", "tid-prefix", "show-decor", "stock-name", "stock-code", "stock-material", "stock-color", "stock-thickness", "max-gap", "model-value", "initial-code", "id", "part-index", "scope", "debug", "onUpdate:modelValue", "onUpdate:resolvedCode"]),
          b.value[a] && E(a) !== void 0 ? (r(), l("div", Ce, [
            p(A, {
              "price-per-unit": E(a),
              quantity: O(a),
              "quantity-unit": P(a),
              "price-label": K(a),
              "format-price": n.formatPrice
            }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])
          ])) : g("", !0)
        ]))), 128))
      ])) : (r(), l("div", we, [
        c("div", Ie, [
          p(z(w), {
            "extra-id": n.extraId,
            "tid-prefix": `catalogue-${n.extraType}`,
            "show-decor": U.value,
            "stock-name": I.value,
            "stock-code": N.value,
            "stock-material": F.value,
            "stock-color": $.value,
            "stock-thickness": B.value,
            "max-gap": n.maxGap,
            "model-value": y.value,
            "initial-code": Q.value,
            id: `cbe-picker-${n.shapeIndex}`,
            "part-index": n.shapeIndex,
            scope: n.shapeIndex,
            debug: n.debug,
            "onUpdate:modelValue": te,
            "onUpdate:resolvedCode": ae
          }, null, 8, ["extra-id", "tid-prefix", "show-decor", "stock-name", "stock-code", "stock-material", "stock-color", "stock-thickness", "max-gap", "model-value", "initial-code", "id", "part-index", "scope", "debug"])
        ]),
        c("div", Ne, [
          c("div", {
            class: be(["cbe-side-grid", { "is-disabled": !o.value }])
          }, [
            c("div", Fe, [
              c("label", {
                class: "extras-location-label group-label",
                for: `cbe-all-${n.shapeIndex}`
              }, "All", 8, $e),
              p(D, {
                id: `cbe-all-${n.shapeIndex}`,
                type: "checkbox",
                "enable-label": !1,
                value: ie.value,
                disabled: !o.value,
                "onUpdate:value": t[0] || (t[0] = (a) => ne(!!a))
              }, null, 8, ["id", "value", "disabled"])
            ]),
            (r(!0), l(G, null, H(d.value, (a) => (r(), l("div", {
              key: a,
              class: "cbe-side-row"
            }, [
              c("div", Be, [
                c("label", {
                  class: "extras-location-label side-label",
                  for: `cbe-${a}-${n.shapeIndex}`
                }, k(R(a)), 9, Ue),
                p(D, {
                  id: `cbe-${a}-${n.shapeIndex}`,
                  type: "checkbox",
                  "enable-label": !1,
                  value: v(a),
                  disabled: !o.value,
                  "onUpdate:value": (f) => M(a, !!f)
                }, null, 8, ["id", "value", "disabled", "onUpdate:value"])
              ]),
              v(a) && m.value !== void 0 ? (r(), l("div", qe, [
                p(A, {
                  "price-per-unit": m.value,
                  quantity: O(a),
                  "quantity-unit": P(a),
                  "price-label": K(a),
                  "format-price": n.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])
              ])) : g("", !0)
            ]))), 128))
          ], 2),
          o.value ? g("", !0) : (r(), l("p", Te, " Pick a banding spec on the left before selecting sides. "))
        ])
      ])),
      n.debug ? (r(), ge(ue, {
        key: 2,
        title: "catalogue picker — pricing debug",
        data: [{
          resolvedCode: o.value,
          totalSideLengthMetres: V.value,
          pricePerLengthFallback: n.pricePerLength,
          pricingKeyCount: Y.value,
          pricingHasResolvedSku: J.value,
          priceForResolvedSku: X.value,
          effectivePrice: m.value,
          priceBlockReady: Z.value
        }],
        paths: ["cbe"],
        root: !1
      }, null, 8, ["data"])) : g("", !0)
    ]));
  }
}), Ee = /* @__PURE__ */ ke(Re, [["__scopeId", "data-v-19d8b205"]]);
export {
  Ee as default
};
