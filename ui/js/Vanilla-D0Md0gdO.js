import { r as s, w as Be, c as O, d as je, M as Le, o as Me, D as Ve, a as he, b as V, g as De, j as ye, u as re, h as ne, F as Oe, e as le, y as $e, f as Te, t as Re, L as qe, n as be, E as We } from "./vendor-vue-XczpOw2V.js";
import { I as _e, i as He, f as c, a as U, b as $ } from "./result.zod-P7rQl8ib.js";
import { c as Ae, E as Je, m as Qe } from "./EcommerceCalculator-5LWTyQpi.js";
import { o as H, h as R, i as u, j as te, k as we, u as Ge, l as Se, m as N, n as Y, q, t as ke } from "./vendor-BwVe8GCL.js";
import { _ as Ke } from "./Launch-Xe82f4hD.js";
function W(_) {
  return _.db_id ? _.db_id : `${_.material}-${_.l}-${_.w}-${_.t}`;
}
const ze = ["finish", "variant", "grain", "category", "color"];
function pt(_) {
  const P = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  for (const S of _) {
    const B = (S.material || "").toUpperCase();
    y.has(B) || y.set(B, []), y.get(B).push(S);
  }
  for (const [, S] of y) {
    const B = ze.filter((k) => new Set(S.map((m) => {
      const p = m[k];
      return typeof p == "object" && p !== null && "name" in p ? p.name : p;
    }).filter(Boolean)).size > 1);
    for (const k of S) {
      const g = [k.material || k.name || ""];
      for (const m of B) {
        const p = k[m];
        if (p) {
          const w = typeof p == "object" && p !== null && "name" in p ? p.name : String(p);
          w && g.push(w);
        }
      }
      P.set(W(k), g.join(" - "));
    }
  }
  return P;
}
function vt(_) {
  const {
    stockOptions: P,
    config: y,
    initialState: S,
    numberFormat: B = s("decimal"),
    serverPagination: k
  } = _, g = s(S?.activeFilters || []), m = s(S?.searchQuery || ""), p = s(S?.sortBy || y?.value?.defaultSort.field || "cost"), w = s(S?.sortOrder || y?.value?.defaultSort.order || "asc"), ie = s(S?.displayMode || y?.value?.displayMode || "grid"), v = s(S?.currentPage || 1), d = s([]), f = k?.enabled || !1, J = s(!1), h = s([]), x = s(1), L = s(0), l = s(null);
  let E = null;
  function A() {
    if (!k) return "";
    const { apiUrl: e, orgSlug: t, isCustomDomain: o, mode: n = "stock" } = k, r = n === "material" ? "materials" : "stock";
    return o ? `${e}ecommerce/${r}` : `${e}ecommerce/${t}/${r}`;
  }
  async function Q() {
    if (!(!f || !k)) {
      J.value = !0;
      try {
        const e = new URL(A());
        e.searchParams.set("page", String(v.value)), e.searchParams.set("limit", String(y?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", p.value), e.searchParams.set("sortOrder", w.value), m.value.trim() && e.searchParams.set("search", m.value.trim());
        const t = {};
        for (const r of g.value)
          if (r.type === "select" || r.type === "multiselect")
            t[r.field] = r.value;
          else if (r.type === "range" && r.value) {
            const { min: i, max: ge } = r.value;
            let X;
            r.field === "l" ? X = "Length" : r.field === "w" ? X = "Width" : X = r.field.charAt(0).toUpperCase() + r.field.slice(1), i !== void 0 && (t[`min${X}`] = i), ge !== void 0 && (t[`max${X}`] = ge);
          } else if (r.type === "boolean" && r.field.startsWith("hasExtras.")) {
            const i = r.field.replace("hasExtras.", "");
            t.hasExtras || (t.hasExtras = {}), t.hasExtras[i] = r.value;
          }
        Object.keys(t).length > 0 && e.searchParams.set("filters", JSON.stringify(t));
        const o = await fetch(e.toString(), {
          credentials: "include"
        });
        if (!o.ok)
          throw new Error(`Server returned ${o.status}`);
        const n = await o.json();
        h.value = n.items || [], x.value = n.pagination?.totalPages || 1, L.value = n.pagination?.total || 0, n.filterOptions && v.value === 1 && (l.value = n.filterOptions);
      } catch (e) {
        console.error("[useStockFilter] Server fetch error:", e), h.value = [], x.value = 1, L.value = 0;
      } finally {
        J.value = !1;
      }
    }
  }
  function D() {
    f && (h.value = [], L.value = 0, J.value = !0, E && clearTimeout(E), E = setTimeout(() => {
      Q();
    }, k?.debounceMs || 300));
  }
  f && (Be([m, g, p, w], () => {
    v.value = 1, D();
  }, { deep: !0 }), Q());
  function C(e, t) {
    return t.split(".").reduce((o, n) => o?.[n], e);
  }
  function G(e, t) {
    return typeof e == "object" && e !== null && typeof t == "object" && t !== null && "hex" in e && "hex" in t ? e.hex === t.hex : e === t;
  }
  function Z(e, t) {
    const o = C(e, t.field);
    switch (t.type) {
      case "select":
        return G(o, t.value);
      case "multiselect":
        return Array.isArray(t.value) ? t.value.some((n) => G(o, n)) : G(o, t.value);
      case "range":
        if (t.value && typeof t.value == "object") {
          const { min: n, max: r } = t.value, i = Number(o);
          return !(isNaN(i) || n !== void 0 && i < n || r !== void 0 && i > r);
        }
        return !1;
      case "boolean":
        return !!o == !!t.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function K(e, t) {
    if (!t.trim()) return !0;
    const o = t.toLowerCase().split(/\s+/).filter(Boolean), r = [
      e.name,
      e.material,
      e.description,
      e.category,
      e.variant,
      e.finish,
      e.grain,
      typeof e.color == "object" ? e.color?.name : e.color,
      ...e.tags || []
    ].filter(Boolean).map((i) => String(i).toLowerCase()).join(" ");
    return o.every((i) => r.includes(i));
  }
  const I = O(() => {
    let e = [...P.value];
    m.value && (e = e.filter((t) => K(t, m.value)));
    for (const t of g.value)
      e = e.filter((o) => Z(o, t));
    return e;
  }), M = O(() => {
    const e = [...I.value];
    return e.sort((t, o) => {
      const n = C(t, p.value), r = C(o, p.value);
      if (n == null && r == null) return 0;
      if (n == null) return 1;
      if (r == null) return -1;
      let i = 0;
      return typeof n == "string" && typeof r == "string" ? i = n.localeCompare(r) : typeof n == "number" && typeof r == "number" ? i = n - r : i = String(n).localeCompare(String(r)), w.value === "asc" ? i : -i;
    }), e;
  }), F = O(() => {
    if (f)
      return h.value;
    const e = y?.value?.itemsPerPage || 20, t = (v.value - 1) * e, o = t + e;
    return M.value.slice(t, o);
  }), ae = O(() => {
    if (f)
      return x.value;
    const e = y?.value?.itemsPerPage || 20;
    return Math.ceil(M.value.length / e);
  }), b = O(() => f ? L.value : M.value.length);
  function ue(e, t, o = "select") {
    se(e), g.value.push({ field: e, value: t, type: o }), v.value = 1;
  }
  function se(e) {
    g.value = g.value.filter((t) => t.field !== e);
  }
  function Ce() {
    g.value = [], m.value = "", v.value = 1;
  }
  function Pe(e, t) {
    p.value = e, t ? w.value = t : w.value = w.value === "asc" ? "desc" : "asc", v.value = 1;
  }
  function T(e) {
    m.value = e, v.value = 1;
  }
  function ee(e) {
    e >= 1 && e <= ae.value && (v.value = e, f && (h.value = [], J.value = !0, Q()));
  }
  function xe(e) {
    const t = W(e), o = d.value.indexOf(t);
    return o === -1 ? y?.value?.maxSelection && d.value.length >= y.value.maxSelection ? !1 : (d.value.push(t), j(e, !0), !0) : (d.value.splice(o, 1), j(e, !1), !1);
  }
  function oe(e) {
    return d.value.includes(W(e));
  }
  const z = s(/* @__PURE__ */ new Map());
  function j(e, t) {
    const o = W(e);
    t ? z.value.set(o, e) : z.value.delete(o);
  }
  const ce = O(() => f ? d.value.map((e) => z.value.get(e)).filter((e) => e !== void 0) : P.value.filter((e) => oe(e)));
  function fe() {
    d.value = [], z.value.clear();
  }
  function Ee(e) {
    const t = P.value.find((o) => o.db_id === e) || h.value.find((o) => o.db_id === e);
    return t ? (fe(), d.value.push(W(t)), j(t, !0), t) : null;
  }
  function Fe(e) {
    const {
      ...t
    } = e;
    return new _e(t, B.value);
  }
  function de(e) {
    if (f && l.value) {
      if (e === "material" && l.value.materials)
        return l.value.materials;
      if (e === "category" && l.value.categories)
        return l.value.categories;
      if (e === "finish" && l.value.finishes)
        return l.value.finishes;
      if (e === "grain" && l.value.grains)
        return l.value.grains;
      if (e === "color" && l.value.colors)
        return l.value.colors;
      if (e === "t" && l.value.thicknesses)
        return l.value.thicknesses;
      if (e === "variant" && l.value.variants)
        return l.value.variants;
      if (e === "type" && l.value.types)
        return l.value.types;
    }
    const t = f ? h.value : P.value;
    if (e === "color") {
      const n = /* @__PURE__ */ new Map();
      return t.forEach((r) => {
        const i = C(r, e);
        i != null && (typeof i == "object" && "hex" in i ? i.hex && !n.has(i.hex) && n.set(i.hex, i) : typeof i == "string" && i.trim() !== "" && (n.has(i) || n.set(i, i)));
      }), Array.from(n.values()).sort((r, i) => {
        const ge = typeof r == "object" && "name" in r ? r.name : String(r), X = typeof i == "object" && "name" in i ? i.name : String(i);
        return ge.localeCompare(X);
      });
    }
    const o = /* @__PURE__ */ new Set();
    return t.forEach((n) => {
      const r = C(n, e);
      r != null && !(typeof r == "string" && r.trim() === "") && o.add(r);
    }), Array.from(o).sort();
  }
  function pe(e) {
    if (f && l.value) {
      if (e === "t" && l.value.thicknessRange)
        return l.value.thicknessRange;
      if (e === "cost" && l.value.priceRange)
        return l.value.priceRange;
      if (e === "l" && l.value.dimensionRange?.length)
        return l.value.dimensionRange.length;
      if (e === "w" && l.value.dimensionRange?.width)
        return l.value.dimensionRange.width;
      if (e === "weight" && l.value.weightRange)
        return l.value.weightRange;
    }
    const o = (f ? h.value : P.value).map((n) => Number(C(n, e))).filter((n) => !isNaN(n));
    return o.length === 0 ? null : {
      min: Math.min(...o),
      max: Math.max(...o)
    };
  }
  function ve() {
    if (f && l.value?.hasExtras)
      return l.value.hasExtras;
    const e = f ? h.value : P.value, t = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const o of e)
      if (o.extras?.banding?.length && (t.banding = !0), o.extras?.finish?.length && (t.finish = !0), o.extras?.planing?.length && (t.planing = !0), o.extras?.machining?.length && (t.machining = !0), t.banding && t.finish && t.planing && t.machining) break;
    return t;
  }
  function me(e) {
    const t = /* @__PURE__ */ new Map();
    if (f && l.value?.counts) {
      const n = l.value.counts[e];
      if (n) {
        for (const [r, i] of Object.entries(n))
          t.set(r, i);
        return t;
      }
      return t;
    }
    let o = [...P.value];
    m.value && (o = o.filter((n) => K(n, m.value)));
    for (const n of g.value)
      n.field !== e && (o = o.filter((r) => Z(r, n)));
    for (const n of o) {
      const r = C(n, e);
      if (r != null && !(typeof r == "string" && r.trim() === "")) {
        const i = typeof r == "object" && r !== null && "hex" in r ? r.hex : String(r);
        t.set(i, (t.get(i) || 0) + 1);
      }
    }
    return t;
  }
  const a = O(() => ({
    activeFilters: g.value,
    searchQuery: m.value,
    sortBy: p.value,
    sortOrder: w.value,
    displayMode: ie.value,
    currentPage: v.value,
    selectedStockIds: d.value
  }));
  return {
    // State
    activeFilters: g,
    searchQuery: m,
    sortBy: p,
    sortOrder: w,
    displayMode: ie,
    currentPage: v,
    selectedStockIds: d,
    // Server pagination state
    isLoading: J,
    serverMode: f,
    serverFilterOptions: l,
    // Computed
    filteredStock: I,
    sortedStock: M,
    paginatedStock: F,
    selectedStock: ce,
    totalPages: ae,
    totalItems: b,
    currentState: a,
    // Methods
    applyFilter: ue,
    removeFilter: se,
    clearFilters: Ce,
    updateSort: Pe,
    updateSearch: T,
    goToPage: ee,
    toggleStockSelection: xe,
    isStockSelected: oe,
    clearSelection: fe,
    selectById: Ee,
    createInputStock: Fe,
    getUniqueValues: de,
    getFieldRange: pe,
    getFilterOptionCounts: me,
    getHasExtrasOptions: ve,
    fetchServerStock: Q
  };
}
const Xe = H({
  name: u().trim(),
  price: u().trim().default("0"),
  options: R(u(), te(u()))
}), Ye = R(u(), Xe), Ze = H({
  name: u().trim(),
  options: R(
    u(),
    Ge([u(), te(u())])
  ).optional(),
  variations: Ye.optional(),
  price: u().trim().default("0"),
  type: we(["simple", "variable"]).optional()
}), Ie = R(u(), Ze);
H({
  env: u().default("production"),
  showDevInfo: N().default(!1),
  debug: N().default(!1),
  el: R(u(), Y()).default({}),
  inputType: we(["manual", "formula"]).default("manual"),
  settings: R(u(), Y()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: R(u(), Y()).default({}),
  formatting: R(u(), Y()).default({}),
  product: R(u(), Y()).default({}),
  stock: te(He).default([]),
  variations: te(Y()).default([]),
  selectedVariation: R(u(), Y()).default({}),
  machiningPricing: Se().optional(),
  quantityPricing: N().default(!1),
  extrasData: H({
    banding: Ie,
    finish: Ie
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: u().url().optional().or(u().default("")),
  formulaSpec: u().default(""),
  hardwareResult: R(u(), Se()).default({}),
  // HardwareResult type from formula.ts
  metadata: Se().optional()
  // Metadata from optimize/main
});
const et = H({
  source: c(we(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: c(u().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: Se().optional()
  // The formula specification object
}), tt = H({
  price: c(q().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  compareAtPrice: c(q().min(0).optional(), {
    label: "Compare at Price",
    info: "Original price (for showing discounts)",
    type: "float",
    order: 2
  }),
  code: c(u().optional(), {
    label: "Code/SKU",
    placeholder: "PROD-001",
    info: "Internal material or product code",
    order: 3
  }),
  trackInventory: c(N().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: c(q().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: c(N().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: c(q().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: c(N().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), at = we(["formula", "simple", "bundle"]), Ue = H({
  _id: u().optional(),
  // Basic info
  name: c(u().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: c(u().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: c(u().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: c(u().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: c(u().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: c(te(u()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: c(u().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: c(te(u()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: c(q().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: c(q().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: c(at, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: et.optional(),
  simpleConfig: tt.optional(),
  // Visibility & Status
  published: c(N().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  ecommerce: c(N().default(!1), {
    label: "Available in Checkout",
    info: "Visible in customer checkout",
    type: "checkbox",
    order: 13
  }),
  featured: c(N().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: c(q().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
}), Ne = H({
  _id: u().optional(),
  name: c(u().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: c(u().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: c(u().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: c(u().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: c(q().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: c(N().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
});
Ue.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Ue.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Ne.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Ne.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
const ot = {
  key: 2,
  class: "selected-product-header"
}, rt = { class: "selected-product-info" }, nt = { key: 0 }, lt = /* @__PURE__ */ je({
  __name: "Vanilla",
  emits: ["ready"],
  setup(_, { expose: P, emit: y }) {
    const S = ne(() => import("./StockFilter-CHq2JoCG.js")), B = ne(() => import("./FormulaPricing-EqdUi8JJ.js")), k = ne(() => import("./ProductBrowser-BAsdRna6.js")), g = ne(() => import("./Notices-CJT9Dpvh.js")), m = ne(() => import("./OrderLookup-CSqP-wRP.js")), p = y, w = "production", ie = "4.1.5", v = s(!1), d = s([]), f = s({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), J = O(() => d.value.map((a) => {
      if (a instanceof _e) return a;
      const { issues: e, ...t } = a, o = Array.isArray(e) ? e : [];
      return new _e({ ...t, issues: o });
    })), h = s("USD"), x = s("en-US"), L = s("metric"), l = s("manual"), E = s(""), A = Ve(null), Q = s(null), D = s(), C = s(!1), G = s([]), Z = s(Ae()), K = s(!1), I = s(!1), M = s(!0), F = s(null), ae = s("calculator"), b = s(null), ue = s(null), se = O(() => I.value && !F.value || I.value && F.value?.type === "simple" || !(l.value === "manual" || l.value === "formula" && (E.value || A.value)) ? !1 : C.value ? d.value.length > 0 : !0), Ce = O(() => {
      if (!(!K.value || !b.value))
        return {
          enabled: !0,
          apiUrl: b.value.baseUrl,
          orgSlug: b.value.orgSlug,
          isCustomDomain: b.value.isCustomDomain
        };
    }), Pe = O(() => b.value ? {
      apiUrl: b.value.baseUrl,
      orgSlug: b.value.orgSlug,
      isCustomDomain: b.value.isCustomDomain
    } : null);
    We("calculator", () => D.value);
    const T = (a) => {
      v.value && console.log("SmartCut -", ...a);
    }, ee = (a) => {
      console.error(`SmartCut - ${a}`);
    }, xe = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, oe = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, z = (a) => {
      Q.value = a;
    }, j = (a = 0, e = x.value) => {
      if (a === !0) return "";
      try {
        e = e.replace("_", "-");
        const t = Number(a);
        return !t && t !== 0 ? "" : isNaN(t) ? (console.error("formatPrice - invalid price:", a), "") : t.toLocaleString(e, {
          style: "currency",
          currency: h.value
        });
      } catch (t) {
        return console.error("Error formatting price:", t), "";
      }
    }, ce = (a, e) => {
      if (!f.value?.[a]) return null;
      const o = e.filter((r) => r && r.trim() !== "").join("|"), n = U(f.value, [a, o]);
      return typeof n == "number" ? n : parseFloat(n);
    }, fe = (a) => {
      if (a.length === 0) return;
      const e = a.map((r) => {
        const i = r.toData();
        return i.autoAdd = !0, i;
      }), t = [...d.value, ...e], o = [], n = /* @__PURE__ */ new Set();
      for (const r of t) {
        const i = W(r);
        n.has(i) || (n.add(i), o.push(r));
      }
      d.value = o, T(["Stock added. Total stocks:", d.value.length]), D.value && be(() => {
        D.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, Ee = () => {
      const a = new CustomEvent("smartcut/selection-confirmed");
      window.dispatchEvent(a), be(() => {
        const e = D.value?.$el;
        e && e.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, Fe = (a) => {
      const e = W(a);
      d.value = d.value.filter((t) => W(t) !== e), T(["Stock removed. Total stocks:", d.value.length]), D.value && be(() => {
        D.value.initMaterialsThicknesses({ stock: d.value });
      });
    }, de = (a) => {
      if (F.value = a, T(["Product selected:", a.name, a.type]), a.type === "formula" && a.formulaSpec)
        l.value = "formula", E.value = a.formulaSpec.url ?? "", A.value = a.formulaSpec.spec ?? null, T(["Formula product - loading spec"]);
      else if (a.type === "simple") {
        l.value = "manual", T(["Simple product selected"]);
        const e = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(a)),
            type: "simple"
          }
        });
        window.dispatchEvent(e);
      }
    }, pe = () => {
      F.value = null, l.value === "formula" && (E.value = "", A.value = null, l.value = "manual");
    }, ve = (a) => {
      Qe(a), a.api && (b.value = {
        baseUrl: a.api.baseUrl,
        orgSlug: a.api.orgSlug,
        isCustomDomain: a.api.isCustomDomain
      }), a.stockFilter?.enabled ? (C.value = !0, K.value = a.stockFilter.serverMode || !1, G.value = K.value ? [] : (a.stock || []).map((e) => ({ ...e })), Z.value = a.stockFilter.config || Ae(), d.value = [], T(["Stock filter enabled", K.value ? "(server mode)" : `with ${G.value.length} available options`])) : (C.value = !1, d.value = a.stock), a.products?.enabled ? (I.value = !0, M.value = a.products.showCategories !== !1, T(["Product browser enabled", M.value ? "with categories" : "without categories"])) : I.value = !1, f.value.banding = U(a, ["banding", "pricing"]), f.value.finish = U(a, ["finish", "pricing"]), f.value.planing = U(a, ["planing", "pricing"]), f.value.machining = U(a, ["machining", "pricing"]), $(a, ["options", "currency"]) && (h.value = U(a, ["options", "currency"])), $(a, ["options", "locale"]) && (x.value = U(a, ["options", "locale"]).replace("_", "-")), $(a, ["options", "unitSystem"]) && (L.value = U(a, ["options", "unitSystem"])), $(a, ["config", "formulaPricing", "enabled"]) && a.config.formulaPricing.enabled ? (l.value = "formula", E.value = a.config.formulaPricing.url ?? null, A.value = a.config.formulaPricing.spec ?? null) : ($(a, ["options", "formula", "url"]) || $(a, ["options", "formula", "spec"])) && (l.value = "formula", E.value = U(a, ["options", "formula", "url"]) ?? null, A.value = U(a, ["options", "formula", "spec"]) ?? null), be(() => {
        if (D.value) {
          const e = {
            ...a,
            stock: d.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: C.value
          };
          D.value.init(e);
        }
      });
    }, me = (a) => {
      const e = a;
      if (e.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, a?.metadata?.totalStockCost && (e.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        x.value,
        {
          style: "currency",
          currency: h.value
        }
      )), a?.metadata?.bandingLengthByType)
        for (const [o, n] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!$(f.value, ["banding", o])) {
            ee(`Banding price ${o} not found`);
            continue;
          }
          e.checkout.formattedBandingCost[o] = (n / 1e3 * f.value.banding[o]).toLocaleString(x.value, { style: "currency", currency: h.value });
        }
      if (a?.metadata?.finishAreaByType)
        for (const [o, n] of Object.entries(a.metadata.finishAreaByType)) {
          if (!$(f.value, ["finish", o])) {
            ee(`Finish price ${o} not found`);
            continue;
          }
          e.checkout.formattedFinishCost[o] = (n / 1e6 * f.value.finish[o]).toLocaleString(x.value, { style: "currency", currency: h.value });
        }
      const t = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(e))
      });
      window.dispatchEvent(t);
    };
    return Le(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ie} [${w}]`);
      const a = new URLSearchParams(window.location.search);
      v.value = !!a.has("debug");
      const e = a.get("view");
      (e === "track-order" || e === "order-lookup") && (ae.value = "order-lookup");
      const t = a.get("product");
      t && (ue.value = t, T(["Deep link to product:", t])), v.value && console.log("Smartcut - debug enabled");
    }), Me(() => {
      window.smartcutCheckout = { init: ve }, p("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), P({
      init: ve,
      debug: v,
      stock: d,
      pricing: f,
      currency: h,
      locale: x,
      unitSystem: L,
      inputType: l,
      formulaURL: E,
      formulaSpec: A,
      hardWareResult: Q,
      // Product state
      productsEnabled: I,
      selectedProduct: F,
      selectProduct: de,
      clearProduct: pe,
      // Methods
      log: T,
      error: ee,
      calculating: oe,
      result: me,
      formatPrice: j,
      findExtrasPrice: ce,
      setHardwareResult: z
    }), (a, e) => (V(), he(Oe, null, [
      De(re(g), { position: "top-left" }),
      ae.value === "order-lookup" && b.value ? (V(), ye(re(m), {
        key: 0,
        "api-base-url": b.value.baseUrl,
        "org-slug": b.value.orgSlug,
        "is-custom-domain": b.value.isCustomDomain,
        "format-price": j,
        locale: x.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (V(), he(Oe, { key: 1 }, [
        I.value && !F.value ? (V(), ye(re(k), {
          key: 0,
          config: Pe.value,
          "show-categories": M.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: de
        }, null, 8, ["config", "show-categories"])) : le("", !0),
        C.value && !I.value ? (V(), ye(re(S), {
          key: 1,
          "stock-options": G.value,
          config: Z.value,
          "format-price": j,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: x.value,
          "unit-system": L.value,
          "initial-product-id": ue.value,
          "server-pagination": Ce.value,
          mode: Z.value.mode || "stock",
          "show-selection-bar": !1,
          onStockAdded: fe,
          onStockRemoved: Fe,
          onSelectionConfirmed: Ee
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "mode"])) : le("", !0),
        F.value ? (V(), he("div", ot, [
          Te("div", rt, [
            Te("h3", null, Re(F.value.name), 1),
            F.value.shortDescription ? (V(), he("p", nt, Re(F.value.shortDescription), 1)) : le("", !0)
          ]),
          Te("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: pe
          }, " Change Product ")
        ])) : le("", !0),
        l.value === "formula" && (E.value || A.value) ? (V(), ye(re(B), {
          key: 3,
          ref: "formulapricing",
          "format-price": j,
          url: E.value,
          spec: A.value,
          debug: v.value,
          onHardwareResult: z
        }, null, 8, ["url", "spec", "debug"])) : le("", !0),
        $e(De(Je, {
          ref_key: "calculator",
          ref: D,
          readonly: l.value === "formula",
          debug: v.value,
          "input-stock": J.value,
          "input-type": l.value,
          "find-extras-price": ce,
          "format-price": j,
          onLog: T,
          onError: ee,
          onCalculating: oe,
          onValidationError: xe,
          onResult: me
        }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
          [qe, se.value]
        ])
      ], 64))
    ], 64));
  }
}), it = /* @__PURE__ */ Ke(lt, [["__scopeId", "data-v-74a46f95"]]), mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: it }, Symbol.toStringTag, { value: "Module" }));
export {
  mt as V,
  pt as b,
  W as g,
  vt as u
};
