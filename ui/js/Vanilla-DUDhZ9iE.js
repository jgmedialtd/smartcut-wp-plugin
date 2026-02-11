import { d as Fe, r as l, R as Re, h as Le, s as Be, b as I, o as w, i as ie, a as V, u as L, g as B, F as ue, e as N, y as Ne, c as j, j as z, t as se, z as Oe, n as G, p as $e } from "./vendor-vue-h1I-4LEU.js";
import { j as Ie, bB as o, aW as ce, b1 as v, b2 as C } from "./result.zod-B50712hY.js";
import { c as de, E as Ve, m as je } from "./EcommerceCalculator-ROHa1p5B.js";
import { o as D, C as d, k as t, l as T, i as W, D as qe, j as q, h, W as _, n as P, a3 as M } from "./vendor-C048ug3t.js";
import { _ as Me } from "./Launch-C8DaHa5j.js";
const We = D({
  name: t().trim(),
  price: t().trim().default("0"),
  options: d(t(), T(t()))
}), Je = d(t(), We), He = D({
  name: t().trim(),
  options: d(
    t(),
    qe([t(), T(t())])
  ).optional(),
  variations: Je.optional(),
  price: t().trim().default("0"),
  type: W(["simple", "variable"]).optional()
}), pe = d(t(), He);
D({
  env: t().default("production"),
  showDevInfo: h().default(!1),
  debug: h().default(!1),
  el: d(t(), _()).default({}),
  inputType: W(["manual", "formula"]).default("manual"),
  settings: d(t(), _()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: d(t(), _()).default({}),
  formatting: d(t(), _()).default({}),
  product: d(t(), _()).default({}),
  stock: T(Ie).default([]),
  variations: T(_()).default([]),
  selectedVariation: d(t(), _()).default({}),
  machiningPricing: q().optional(),
  quantityPricing: h().default(!1),
  extrasData: D({
    banding: pe,
    finish: pe
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: t().url().optional().or(t().default("")),
  formulaSpec: t().default(""),
  hardwareResult: d(t(), q()).default({}),
  // HardwareResult type from formula.ts
  metadata: q().optional()
  // Metadata from optimize/main
});
const Ke = D({
  source: o(W(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: o(t().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: q().optional()
  // The formula specification object
}), Qe = D({
  price: o(P().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  compareAtPrice: o(P().min(0).optional(), {
    label: "Compare at Price",
    info: "Original price (for showing discounts)",
    type: "float",
    order: 2
  }),
  sku: o(t().optional(), {
    label: "SKU",
    placeholder: "PROD-001",
    info: "Stock keeping unit for inventory tracking",
    order: 3
  }),
  trackInventory: o(h().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: o(P().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: o(h().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: o(P().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: o(h().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), ze = W(["formula", "simple", "bundle"]), fe = D({
  _id: t().optional(),
  // Basic info
  name: o(t().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: o(t().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: o(t().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: o(t().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: o(t().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: o(T(t()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: o(t().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: o(T(t()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: o(P().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: o(P().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: o(ze, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: Ke.optional(),
  simpleConfig: Qe.optional(),
  // Visibility & Status
  published: o(h().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  ecommerce: o(h().default(!1), {
    label: "Available in Checkout",
    info: "Visible in customer checkout",
    type: "checkbox",
    order: 13
  }),
  featured: o(h().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: o(P().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Timestamps (read-only)
  createdAt: M().optional(),
  updatedAt: M().optional()
}), me = D({
  _id: t().optional(),
  name: o(t().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: o(t().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: o(t().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: o(t().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: o(P().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: o(h().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: M().optional(),
  updatedAt: M().optional()
});
fe.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
fe.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
me.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
me.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
const Ge = {
  key: 2,
  class: "selected-product-header"
}, Xe = { class: "selected-product-info" }, Ye = { key: 0 }, Ze = /* @__PURE__ */ Fe({
  __name: "Vanilla",
  emits: ["ready"],
  setup(et, { expose: ge, emit: ve }) {
    const he = B(() => import("./StockFilter-Bd7Zws9Z.js")), ye = B(() => import("./FormulaPricing-Bgz-iARr.js")), be = B(() => import("./ProductBrowser-BsRguQPW.js")), ke = B(() => import("./Notices-CWXopAGb.js")), Se = B(() => import("./OrderLookup-DBbcN5pM.js")), we = ve, Ce = "production", Pe = "4.1.0", E = l(!1), i = l([]), c = l({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), De = j(() => i.value.map((e) => {
      if (e instanceof ce) return e;
      const { issues: a, ...r } = e, n = Array.isArray(a) ? a : [];
      return new ce({ ...r, issues: n });
    })), A = l("USD"), y = l("en-US"), J = l("metric"), s = l("manual"), b = l(""), k = Be(null), X = l(null), S = l(), U = l(!1), H = l([]), K = l(de()), O = l(!1), x = l(!1), Q = l(!0), p = l(null), Y = l("calculator"), u = l(null), Z = l(null), xe = j(() => x.value && !p.value || x.value && p.value?.type === "simple" || !(s.value === "manual" || s.value === "formula" && (b.value || k.value)) ? !1 : U.value ? i.value.length > 0 : !0), _e = j(() => {
      if (!(!O.value || !u.value))
        return {
          enabled: !0,
          apiUrl: u.value.baseUrl,
          orgSlug: u.value.orgSlug,
          isCustomDomain: u.value.isCustomDomain
        };
    }), Ee = j(() => u.value ? {
      apiUrl: u.value.baseUrl,
      orgSlug: u.value.orgSlug,
      isCustomDomain: u.value.isCustomDomain
    } : null);
    $e("calculator", () => S.value);
    const f = (e) => {
      E.value && console.log("SmartCut -", ...e);
    }, $ = (e) => {
      console.error(`SmartCut - ${e}`);
    }, Ae = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, ee = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, te = (e) => {
      X.value = e;
    }, F = (e = 0, a = y.value) => {
      if (e === !0) return "";
      try {
        a = a.replace("_", "-");
        const r = Number(e);
        return !r && r !== 0 ? "" : isNaN(r) ? (console.error("formatPrice - invalid price:", e), "") : r.toLocaleString(a, {
          style: "currency",
          currency: A.value
        });
      } catch (r) {
        return console.error("Error formatting price:", r), "";
      }
    }, oe = (e, a) => {
      if (!c.value?.[e]) return null;
      const n = a.filter((g) => g && g.trim() !== "").join("|"), m = v(c.value, [e, n]);
      return typeof m == "number" ? m : parseFloat(m);
    }, Te = (e) => {
      if (e.length === 0) return;
      const a = e.map((g) => {
        const R = g.toData();
        return R.autoAdd = !0, R;
      }), r = [...i.value, ...a], n = [], m = /* @__PURE__ */ new Set();
      for (const g of r) {
        const R = `${g.material}-${g.l}-${g.w}-${g.t}`;
        m.has(R) || (m.add(R), n.push(g));
      }
      i.value = n, f(["Stock added. Total stocks:", i.value.length]), S.value && G(() => {
        S.value.initMaterialsThicknesses({ stock: i.value });
      });
    }, Ue = (e) => {
      const a = `${e.material}-${e.l}-${e.w}-${e.t}`;
      i.value = i.value.filter((r) => `${r.material}-${r.l}-${r.w}-${r.t}` !== a), f(["Stock removed. Total stocks:", i.value.length]), S.value && G(() => {
        S.value.initMaterialsThicknesses({ stock: i.value });
      });
    }, ae = (e) => {
      if (p.value = e, f(["Product selected:", e.name, e.type]), e.type === "formula" && e.formulaSpec)
        s.value = "formula", b.value = e.formulaSpec.url ?? "", k.value = e.formulaSpec.spec ?? null, f(["Formula product - loading spec"]);
      else if (e.type === "simple") {
        s.value = "manual", f(["Simple product selected"]);
        const a = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(e)),
            type: "simple"
          }
        });
        window.dispatchEvent(a);
      }
    }, re = () => {
      p.value = null, s.value === "formula" && (b.value = "", k.value = null, s.value = "manual");
    }, le = (e) => {
      je(e), e.api && (u.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (U.value = !0, O.value = e.stockFilter.serverMode || !1, H.value = O.value ? [] : (e.stock || []).map((a) => ({ ...a })), K.value = e.stockFilter.config || de(), i.value = [], f(["Stock filter enabled", O.value ? "(server mode)" : `with ${H.value.length} available options`])) : (U.value = !1, i.value = e.stock), e.products?.enabled ? (x.value = !0, Q.value = e.products.showCategories !== !1, f(["Product browser enabled", Q.value ? "with categories" : "without categories"])) : x.value = !1, c.value.banding = v(e, ["banding", "pricing"]), c.value.finish = v(e, ["finish", "pricing"]), c.value.planing = v(e, ["planing", "pricing"]), c.value.machining = v(e, ["machining", "pricing"]), C(e, ["options", "currency"]) && (A.value = v(e, ["options", "currency"])), C(e, ["options", "locale"]) && (y.value = v(e, ["options", "locale"]).replace("_", "-")), C(e, ["options", "unitSystem"]) && (J.value = v(e, ["options", "unitSystem"])), C(e, ["config", "formulaPricing", "enabled"]) && e.config.formulaPricing.enabled ? (s.value = "formula", b.value = e.config.formulaPricing.url ?? null, k.value = e.config.formulaPricing.spec ?? null) : (C(e, ["options", "formula", "url"]) || C(e, ["options", "formula", "spec"])) && (s.value = "formula", b.value = v(e, ["options", "formula", "url"]) ?? null, k.value = v(e, ["options", "formula", "spec"]) ?? null), G(() => {
        if (S.value) {
          const a = {
            ...e,
            stock: i.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: U.value
          };
          S.value.init(a);
        }
      });
    }, ne = (e) => {
      const a = e;
      if (a.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (a.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        y.value,
        {
          style: "currency",
          currency: A.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [n, m] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!C(c.value, ["banding", n])) {
            $(`Banding price ${n} not found`);
            continue;
          }
          a.checkout.formattedBandingCost[n] = (m / 1e3 * c.value.banding[n]).toLocaleString(y.value, { style: "currency", currency: A.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [n, m] of Object.entries(e.metadata.finishAreaByType)) {
          if (!C(c.value, ["finish", n])) {
            $(`Finish price ${n} not found`);
            continue;
          }
          a.checkout.formattedFinishCost[n] = (m / 1e6 * c.value.finish[n]).toLocaleString(y.value, { style: "currency", currency: A.value });
        }
      const r = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(a))
      });
      window.dispatchEvent(r);
    };
    return Re(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + Pe} [${Ce}]`);
      const e = new URLSearchParams(window.location.search);
      E.value = !!e.has("debug");
      const a = e.get("view");
      (a === "track-order" || a === "order-lookup") && (Y.value = "order-lookup");
      const r = e.get("product");
      r && (Z.value = r, f(["Deep link to product:", r])), E.value && console.log("Smartcut - debug enabled");
    }), Le(() => {
      window.smartcutCheckout = { init: le }, we("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), ge({
      init: le,
      debug: E,
      stock: i,
      pricing: c,
      currency: A,
      locale: y,
      unitSystem: J,
      inputType: s,
      formulaURL: b,
      formulaSpec: k,
      hardWareResult: X,
      // Product state
      productsEnabled: x,
      selectedProduct: p,
      selectProduct: ae,
      clearProduct: re,
      // Methods
      log: f,
      error: $,
      calculating: ee,
      result: ne,
      formatPrice: F,
      findExtrasPrice: oe,
      setHardwareResult: te
    }), (e, a) => (w(), I(ue, null, [
      ie(L(ke), { position: "top-left" }),
      Y.value === "order-lookup" && u.value ? (w(), V(L(Se), {
        key: 0,
        "api-base-url": u.value.baseUrl,
        "org-slug": u.value.orgSlug,
        "is-custom-domain": u.value.isCustomDomain,
        "format-price": F,
        locale: y.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (w(), I(ue, { key: 1 }, [
        x.value && !p.value ? (w(), V(L(be), {
          key: 0,
          config: Ee.value,
          "show-categories": Q.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: ae
        }, null, 8, ["config", "show-categories"])) : N("", !0),
        U.value && !x.value ? (w(), V(L(he), {
          key: 1,
          "stock-options": H.value,
          config: K.value,
          "format-price": F,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: y.value,
          "unit-system": J.value,
          "initial-product-id": Z.value,
          "server-pagination": _e.value,
          mode: K.value.mode || "stock",
          onStockAdded: Te,
          onStockRemoved: Ue
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "mode"])) : N("", !0),
        p.value ? (w(), I("div", Ge, [
          z("div", Xe, [
            z("h3", null, se(p.value.name), 1),
            p.value.shortDescription ? (w(), I("p", Ye, se(p.value.shortDescription), 1)) : N("", !0)
          ]),
          z("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: re
          }, " Change Product ")
        ])) : N("", !0),
        s.value === "formula" && (b.value || k.value) ? (w(), V(L(ye), {
          key: 3,
          ref: "formulapricing",
          "format-price": F,
          url: b.value,
          spec: k.value,
          debug: E.value,
          onHardwareResult: te
        }, null, 8, ["url", "spec", "debug"])) : N("", !0),
        Ne(ie(Ve, {
          ref_key: "calculator",
          ref: S,
          readonly: s.value === "formula",
          debug: E.value,
          "input-stock": De.value,
          "input-type": s.value,
          "find-extras-price": oe,
          "format-price": F,
          onLog: f,
          onError: $,
          onCalculating: ee,
          onValidationError: Ae,
          onResult: ne
        }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
          [Oe, xe.value]
        ])
      ], 64))
    ], 64));
  }
}), nt = /* @__PURE__ */ Me(Ze, [["__scopeId", "data-v-c467e04d"]]);
export {
  nt as default
};
