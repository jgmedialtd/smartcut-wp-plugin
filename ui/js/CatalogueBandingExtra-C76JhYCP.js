import { e as de, l as ue, a as C } from "./NestingShape-JAVnw-aP.js";
import { t as fe } from "./i18n-DGE8ywV5.js";
import { E as A, I as G, L as pe } from "./EcommerceCalculator-CTmE4c2O.js";
import { d as ve, k as ge, o as r, c as l, a as c, t as k, b, F as z, f as H, m as p, u as I, g as be, j as me, C as W, D as he, x as s, s as x } from "./vendor-vue-CrNGqS0k.js";
import { _ as ke } from "./Launch-9LoYYNsk.js";
const xe = { class: "catalogue-banding-extra" }, ye = { class: "cbe-header" }, Se = {
  key: 0,
  class: "cbe-sku-badge"
}, Le = {
  key: 0,
  class: "cbe-perside"
}, Pe = { class: "extras-location-label side-label" }, Ce = {
  key: 0,
  class: "price"
}, Ie = {
  key: 1,
  class: "cbe-cols"
}, we = { class: "cbe-col cbe-col--picker" }, Ne = { class: "cbe-col cbe-col--sides" }, Fe = { class: "c-field-action extras-field-group" }, $e = ["for"], Be = { class: "c-field-action extras-field-group" }, Ue = ["for"], qe = {
  key: 0,
  class: "price"
}, Te = {
  key: 0,
  class: "cbe-sides-hint"
}, Re = /* @__PURE__ */ ve({
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
    const Y = W(() => import("./ObjectViewer-IjOsrd1T.js")), w = W({
      loader: () => import("./CatalogueBandingPicker-DorDxeO0.js"),
      loadingComponent: () => he(pe, { size: "small", label: "Loading decor picker…" }),
      delay: 200
    }), i = n, N = s(() => {
      const e = (u().material || "").trim();
      return i.debug && console.log("[CatalogueBandingExtra] stockName resolved", {
        shapeIndex: i.shapeIndex,
        catalogueKey: i.catalogueKey,
        resolved: e
      }), e;
    }), F = s(() => String(u().stock?.code || "").trim()), $ = s(() => {
      const e = u();
      return String(e.stock?.material || e.material || "").trim();
    }), B = s(() => {
      const e = u().color;
      return typeof e == "string" ? e.trim() : e && typeof e == "object" && typeof e.name == "string" ? e.name.trim() : "";
    }), U = s(() => {
      const e = u().t;
      if (typeof e == "number" && Number.isFinite(e)) return e;
      if (typeof e == "string") {
        const t = e.split(",").map((a) => Number(a.trim())).filter((a) => Number.isFinite(a));
        if (t.length > 0) return Math.max(...t);
      }
    }), d = s(() => i.locations && i.locations.length > 0 ? i.locations : ["side.l1", "side.l2", "side.w1", "side.w2"]), u = () => i.shape, J = s(() => de(i.extraType)), q = s(() => i.extraType === "banding"), y = x({}), o = x(null), Q = s(() => ae()), m = s(() => {
      const e = o.value;
      if (e) {
        const t = i.pricing?.[e];
        if (typeof t == "number" && Number.isFinite(t)) return t;
      }
      if (typeof i.pricePerLength == "number" && Number.isFinite(i.pricePerLength)) return i.pricePerLength;
    }), X = s(() => i.pricing ? Object.keys(i.pricing).length : 0), Z = s(() => !!o.value && !!i.pricing && Object.prototype.hasOwnProperty.call(i.pricing, o.value)), _ = s(() => {
      const e = o.value;
      if (!e || !i.pricing) return;
      const t = i.pricing[e];
      return typeof t == "number" ? t : void 0;
    }), ee = s(() => {
      const e = [];
      return m.value === void 0 && e.push("effectivePrice is undefined"), o.value || e.push("resolvedCode is null"), E.value <= 0 && e.push("totalSideLength is 0"), e.length === 0 ? "YES — block should render" : `NO — ${e.join("; ")}`;
    });
    function T(e) {
      return e.startsWith("face.") ? "faces" : "sides";
    }
    function R(e) {
      return e.replace(/^(face|side)\./, "");
    }
    function te() {
      const e = u(), t = e.extras ?? (e.extras = {}), a = t[i.extraType] ?? (t[i.extraType] = {}), f = a.faces ?? (a.faces = {}), ce = a.sides ?? (a.sides = {});
      return { faces: f, sides: ce };
    }
    function S(e) {
      return u().extras?.[i.extraType]?.[T(e)]?.[R(e)];
    }
    function L(e, t) {
      const a = te();
      a[T(e)][R(e)] = t;
    }
    function ae() {
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
    function K(e) {
      const t = u(), a = Number(t.w) > Number(t.l);
      return fe(ue(e, i.orientationModel, a));
    }
    function P(e) {
      return C(i.shape, e).unit;
    }
    function V(e) {
      return i.priceLabel || `/${P(e)}`;
    }
    const E = s(() => {
      let e = 0;
      for (const t of d.value)
        v(t) && (e += C(i.shape, t).quantity || 0);
      return e;
    });
    function ie(e) {
      y.value = { ...e };
    }
    function ne(e) {
      o.value = e;
      for (const t of d.value)
        v(t) && L(t, e || "");
    }
    function M(e, t) {
      L(e, t && o.value ? o.value : !1);
    }
    function j(e) {
      return C(i.shape, e).quantity;
    }
    const oe = s(() => !o.value || d.value.length === 0 ? !1 : d.value.every((e) => v(e)));
    function se(e) {
      if (o.value)
        for (const t of d.value) M(t, e);
    }
    const h = x({}), g = x({});
    function O(e) {
      const t = S(e);
      return typeof t == "string" && t ? t : "";
    }
    function re(e, t) {
      h.value = { ...h.value, [e]: { ...t } };
    }
    function le(e, t) {
      g.value = { ...g.value, [e]: t }, L(e, t || !1);
    }
    function D(e) {
      const t = g.value[e] || O(e);
      if (t) {
        const a = i.pricing?.[t];
        if (typeof a == "number" && Number.isFinite(a)) return a;
      }
      if (typeof i.pricePerLength == "number" && Number.isFinite(i.pricePerLength)) return i.pricePerLength;
    }
    return ge(() => i.shape, () => {
      y.value = {}, o.value = null, h.value = {}, g.value = {};
    }), (e, t) => (r(), l("div", xe, [
      c("div", ye, [
        c("h6", null, k(n.extraName || J.value), 1),
        o.value ? (r(), l("span", Se, "SKU " + k(o.value), 1)) : b("", !0)
      ]),
      n.perSide ? (r(), l("div", Le, [
        (r(!0), l(z, null, H(d.value, (a) => (r(), l("div", {
          key: a,
          class: "cbe-perside-row"
        }, [
          c("label", Pe, k(K(a)), 1),
          p(I(w), {
            "extra-id": n.extraId,
            "tid-prefix": `catalogue-${n.extraType}`,
            "show-decor": q.value,
            "stock-name": N.value,
            "stock-code": F.value,
            "stock-material": $.value,
            "stock-color": B.value,
            "stock-thickness": U.value,
            "max-gap": n.maxGap,
            "model-value": h.value[a] || {},
            "initial-code": O(a),
            id: `cbe-picker-${n.shapeIndex}-${a}`,
            "part-index": n.shapeIndex,
            scope: `${n.shapeIndex}-${a.replace(/^(face|side)\./, "")}`,
            debug: n.debug,
            "onUpdate:modelValue": (f) => re(a, f),
            "onUpdate:resolvedCode": (f) => le(a, f)
          }, null, 8, ["extra-id", "tid-prefix", "show-decor", "stock-name", "stock-code", "stock-material", "stock-color", "stock-thickness", "max-gap", "model-value", "initial-code", "id", "part-index", "scope", "debug", "onUpdate:modelValue", "onUpdate:resolvedCode"]),
          g.value[a] && D(a) !== void 0 ? (r(), l("div", Ce, [
            p(A, {
              "price-per-unit": D(a),
              quantity: j(a),
              "quantity-unit": P(a),
              "price-label": V(a),
              "format-price": n.formatPrice
            }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])
          ])) : b("", !0)
        ]))), 128))
      ])) : (r(), l("div", Ie, [
        c("div", we, [
          p(I(w), {
            "extra-id": n.extraId,
            "tid-prefix": `catalogue-${n.extraType}`,
            "show-decor": q.value,
            "stock-name": N.value,
            "stock-code": F.value,
            "stock-material": $.value,
            "stock-color": B.value,
            "stock-thickness": U.value,
            "max-gap": n.maxGap,
            "model-value": y.value,
            "initial-code": Q.value,
            id: `cbe-picker-${n.shapeIndex}`,
            "part-index": n.shapeIndex,
            scope: n.shapeIndex,
            debug: n.debug,
            "onUpdate:modelValue": ie,
            "onUpdate:resolvedCode": ne
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
              p(G, {
                id: `cbe-all-${n.shapeIndex}`,
                type: "checkbox",
                "enable-label": !1,
                value: oe.value,
                disabled: !o.value,
                "onUpdate:value": t[0] || (t[0] = (a) => se(!!a))
              }, null, 8, ["id", "value", "disabled"])
            ]),
            (r(!0), l(z, null, H(d.value, (a) => (r(), l("div", {
              key: a,
              class: "cbe-side-row"
            }, [
              c("div", Be, [
                c("label", {
                  class: "extras-location-label side-label",
                  for: `cbe-${a}-${n.shapeIndex}`
                }, k(K(a)), 9, Ue),
                p(G, {
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
                  quantity: j(a),
                  "quantity-unit": P(a),
                  "price-label": V(a),
                  "format-price": n.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])
              ])) : b("", !0)
            ]))), 128))
          ], 2),
          o.value ? b("", !0) : (r(), l("p", Te, " Pick a banding spec on the left before selecting sides. "))
        ])
      ])),
      n.debug ? (r(), me(I(Y), {
        key: 2,
        title: "catalogue picker — pricing debug",
        data: [{
          resolvedCode: o.value,
          totalSideLengthMetres: E.value,
          pricePerLengthFallback: n.pricePerLength,
          pricingKeyCount: X.value,
          pricingHasResolvedSku: Z.value,
          priceForResolvedSku: _.value,
          effectivePrice: m.value,
          priceBlockReady: ee.value
        }],
        paths: ["cbe"],
        root: !1
      }, null, 8, ["data"])) : b("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ ke(Re, [["__scopeId", "data-v-31012641"]]);
export {
  Oe as default
};
