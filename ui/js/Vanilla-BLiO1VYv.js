import { r as s, w as Be, c as O, d as je, M as Le, o as Me, D as Ve, a as ye, b as $, g as De, j as be, u as ne, h as le, F as Oe, e as ie, y as $e, f as Fe, t as Re, L as qe, n as Te, E as We } from "./vendor-vue-9U543O5d.js";
import { I as _e, i as He, f, a as N, b as q } from "./result.zod-CDxo7LoF.js";
import { c as Ae, E as Je, m as Qe } from "./EcommerceCalculator-CNt9J5Wx.js";
import { o as J, h as R, i as u, j as ae, k as we, u as Ge, l as Se, m as B, n as Z, q as W, t as ke } from "./vendor-BwVe8GCL.js";
import { _ as Ke } from "./Launch-f21ynuad.js";
function H(D) {
  return D.db_id ? D.db_id : `${D.material}-${D.l}-${D.w}-${D.t}`;
}
const ze = ["finish", "variant", "grain", "category", "color"];
function pt(D) {
  const x = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  for (const k of D) {
    const j = (k.material || "").toUpperCase();
    b.has(j) || b.set(j, []), b.get(j).push(k);
  }
  for (const [, k] of b) {
    const j = ze.filter((w) => new Set(k.map((g) => {
      const v = g[w];
      return typeof v == "object" && v !== null && "name" in v ? v.name : v;
    }).filter(Boolean)).size > 1);
    for (const w of k) {
      const h = [w.material || w.name || ""];
      for (const g of j) {
        const v = w[g];
        if (v) {
          const P = typeof v == "object" && v !== null && "name" in v ? v.name : String(v);
          P && h.push(P);
        }
      }
      x.set(H(w), h.join(" - "));
    }
  }
  return x;
}
function vt(D) {
  const {
    stockOptions: x,
    config: b,
    initialState: k,
    numberFormat: j = s("decimal"),
    serverPagination: w
  } = D, h = s(k?.activeFilters || []), g = s(k?.searchQuery || ""), v = s(k?.sortBy || b?.value?.defaultSort.field || "cost"), P = s(k?.sortOrder || b?.value?.defaultSort.order || "asc"), ue = s(k?.displayMode || b?.value?.displayMode || "grid"), m = s(k?.currentPage || 1), p = s([]), d = w?.enabled || !1, Q = s(!1), y = s([]), E = s(1), M = s(0), l = s(null);
  let F = null;
  function A() {
    if (!w) return "";
    const { apiUrl: e, orgSlug: t, isCustomDomain: r, mode: n = "stock" } = w, o = n === "material" ? "materials" : "stock";
    return r ? `${e}ecommerce/${o}` : `${e}ecommerce/${t}/${o}`;
  }
  async function G() {
    if (!(!d || !w)) {
      Q.value = !0;
      try {
        const e = new URL(A());
        e.searchParams.set("page", String(m.value)), e.searchParams.set("limit", String(b?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", v.value), e.searchParams.set("sortOrder", P.value), g.value.trim() && e.searchParams.set("search", g.value.trim());
        const t = {};
        for (const o of h.value)
          if (o.type === "select" || o.type === "multiselect")
            t[o.field] = o.value;
          else if (o.type === "range" && o.value) {
            const { min: i, max: he } = o.value;
            let Y;
            o.field === "l" ? Y = "Length" : o.field === "w" ? Y = "Width" : Y = o.field.charAt(0).toUpperCase() + o.field.slice(1), i !== void 0 && (t[`min${Y}`] = i), he !== void 0 && (t[`max${Y}`] = he);
          } else if (o.type === "boolean" && o.field.startsWith("hasExtras.")) {
            const i = o.field.replace("hasExtras.", "");
            t.hasExtras || (t.hasExtras = {}), t.hasExtras[i] = o.value;
          }
        Object.keys(t).length > 0 && e.searchParams.set("filters", JSON.stringify(t));
        const r = await fetch(e.toString(), {
          credentials: "include"
        });
        if (!r.ok)
          throw new Error(`Server returned ${r.status}`);
        const n = await r.json();
        y.value = n.items || [], E.value = n.pagination?.totalPages || 1, M.value = n.pagination?.total || 0, n.filterOptions && m.value === 1 && (l.value = n.filterOptions);
      } catch (e) {
        console.error("[useStockFilter] Server fetch error:", e), y.value = [], E.value = 1, M.value = 0;
      } finally {
        Q.value = !1;
      }
    }
  }
  function U() {
    d && (y.value = [], M.value = 0, Q.value = !0, F && clearTimeout(F), F = setTimeout(() => {
      G();
    }, w?.debounceMs || 300));
  }
  d && (Be([g, h, v, P], () => {
    m.value = 1, U();
  }, { deep: !0 }), G());
  function C(e, t) {
    return t.split(".").reduce((r, n) => r?.[n], e);
  }
  function K(e, t) {
    return typeof e == "object" && e !== null && typeof t == "object" && t !== null && "hex" in e && "hex" in t ? e.hex === t.hex : e === t;
  }
  function ee(e, t) {
    const r = C(e, t.field);
    switch (t.type) {
      case "select":
        return K(r, t.value);
      case "multiselect":
        return Array.isArray(t.value) ? t.value.some((n) => K(r, n)) : K(r, t.value);
      case "range":
        if (t.value && typeof t.value == "object") {
          const { min: n, max: o } = t.value, i = Number(r);
          return !(isNaN(i) || n !== void 0 && i < n || o !== void 0 && i > o);
        }
        return !1;
      case "boolean":
        return !!r == !!t.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function z(e, t) {
    if (!t.trim()) return !0;
    const r = t.toLowerCase().split(/\s+/).filter(Boolean), o = [
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
    return r.every((i) => o.includes(i));
  }
  const I = O(() => {
    let e = [...x.value];
    g.value && (e = e.filter((t) => z(t, g.value)));
    for (const t of h.value)
      e = e.filter((r) => ee(r, t));
    return e;
  }), V = O(() => {
    const e = [...I.value];
    return e.sort((t, r) => {
      const n = C(t, v.value), o = C(r, v.value);
      if (n == null && o == null) return 0;
      if (n == null) return 1;
      if (o == null) return -1;
      let i = 0;
      return typeof n == "string" && typeof o == "string" ? i = n.localeCompare(o) : typeof n == "number" && typeof o == "number" ? i = n - o : i = String(n).localeCompare(String(o)), P.value === "asc" ? i : -i;
    }), e;
  }), T = O(() => {
    if (d)
      return y.value;
    const e = b?.value?.itemsPerPage || 20, t = (m.value - 1) * e, r = t + e;
    return V.value.slice(t, r);
  }), re = O(() => {
    if (d)
      return E.value;
    const e = b?.value?.itemsPerPage || 20;
    return Math.ceil(V.value.length / e);
  }), S = O(() => d ? M.value : V.value.length);
  function se(e, t, r = "select") {
    ce(e), h.value.push({ field: e, value: t, type: r }), m.value = 1;
  }
  function ce(e) {
    h.value = h.value.filter((t) => t.field !== e);
  }
  function Pe() {
    h.value = [], g.value = "", m.value = 1;
  }
  function Ce(e, t) {
    v.value = e, t ? P.value = t : P.value = P.value === "asc" ? "desc" : "asc", m.value = 1;
  }
  function _(e) {
    g.value = e, m.value = 1;
  }
  function te(e) {
    e >= 1 && e <= re.value && (m.value = e, d && (y.value = [], Q.value = !0, G()));
  }
  function xe(e) {
    const t = H(e), r = p.value.indexOf(t);
    return r === -1 ? b?.value?.maxSelection && p.value.length >= b.value.maxSelection ? !1 : (p.value.push(t), L(e, !0), !0) : (p.value.splice(r, 1), L(e, !1), !1);
  }
  function oe(e) {
    return p.value.includes(H(e));
  }
  const X = s(/* @__PURE__ */ new Map());
  function L(e, t) {
    const r = H(e);
    t ? X.value.set(r, e) : X.value.delete(r);
  }
  const fe = O(() => d ? p.value.map((e) => X.value.get(e)).filter((e) => e !== void 0) : x.value.filter((e) => oe(e)));
  function de() {
    p.value = [], X.value.clear();
  }
  function Ee(e) {
    const t = x.value.find((r) => r.db_id === e) || y.value.find((r) => r.db_id === e);
    return t ? (de(), p.value.push(H(t)), L(t, !0), t) : null;
  }
  function pe(e) {
    const {
      ...t
    } = e;
    return new _e(t, j.value);
  }
  function ve(e) {
    if (d && l.value) {
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
    const t = d ? y.value : x.value;
    if (e === "color") {
      const n = /* @__PURE__ */ new Map();
      return t.forEach((o) => {
        const i = C(o, e);
        i != null && (typeof i == "object" && "hex" in i ? i.hex && !n.has(i.hex) && n.set(i.hex, i) : typeof i == "string" && i.trim() !== "" && (n.has(i) || n.set(i, i)));
      }), Array.from(n.values()).sort((o, i) => {
        const he = typeof o == "object" && "name" in o ? o.name : String(o), Y = typeof i == "object" && "name" in i ? i.name : String(i);
        return he.localeCompare(Y);
      });
    }
    const r = /* @__PURE__ */ new Set();
    return t.forEach((n) => {
      const o = C(n, e);
      o != null && !(typeof o == "string" && o.trim() === "") && r.add(o);
    }), Array.from(r).sort();
  }
  function me(e) {
    if (d && l.value) {
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
    const r = (d ? y.value : x.value).map((n) => Number(C(n, e))).filter((n) => !isNaN(n));
    return r.length === 0 ? null : {
      min: Math.min(...r),
      max: Math.max(...r)
    };
  }
  function ge() {
    if (d && l.value?.hasExtras)
      return l.value.hasExtras;
    const e = d ? y.value : x.value, t = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const r of e)
      if (r.extras?.banding?.length && (t.banding = !0), r.extras?.finish?.length && (t.finish = !0), r.extras?.planing?.length && (t.planing = !0), r.extras?.machining?.length && (t.machining = !0), t.banding && t.finish && t.planing && t.machining) break;
    return t;
  }
  function a(e) {
    const t = /* @__PURE__ */ new Map();
    if (d && l.value?.counts) {
      const n = l.value.counts[e];
      if (n) {
        for (const [o, i] of Object.entries(n))
          t.set(o, i);
        return t;
      }
      return t;
    }
    let r = [...x.value];
    g.value && (r = r.filter((n) => z(n, g.value)));
    for (const n of h.value)
      n.field !== e && (r = r.filter((o) => ee(o, n)));
    for (const n of r) {
      const o = C(n, e);
      if (o != null && !(typeof o == "string" && o.trim() === "")) {
        const i = typeof o == "object" && o !== null && "hex" in o ? o.hex : String(o);
        t.set(i, (t.get(i) || 0) + 1);
      }
    }
    return t;
  }
  const c = O(() => ({
    activeFilters: h.value,
    searchQuery: g.value,
    sortBy: v.value,
    sortOrder: P.value,
    displayMode: ue.value,
    currentPage: m.value,
    selectedStockIds: p.value
  }));
  return {
    // State
    activeFilters: h,
    searchQuery: g,
    sortBy: v,
    sortOrder: P,
    displayMode: ue,
    currentPage: m,
    selectedStockIds: p,
    // Server pagination state
    isLoading: Q,
    serverMode: d,
    serverFilterOptions: l,
    // Computed
    filteredStock: I,
    sortedStock: V,
    paginatedStock: T,
    selectedStock: fe,
    totalPages: re,
    totalItems: S,
    currentState: c,
    // Methods
    applyFilter: se,
    removeFilter: ce,
    clearFilters: Pe,
    updateSort: Ce,
    updateSearch: _,
    goToPage: te,
    toggleStockSelection: xe,
    isStockSelected: oe,
    clearSelection: de,
    selectById: Ee,
    createInputStock: pe,
    getUniqueValues: ve,
    getFieldRange: me,
    getFilterOptionCounts: a,
    getHasExtrasOptions: ge,
    fetchServerStock: G
  };
}
const Xe = J({
  name: u().trim(),
  price: u().trim().default("0"),
  options: R(u(), ae(u()))
}), Ye = R(u(), Xe), Ze = J({
  name: u().trim(),
  options: R(
    u(),
    Ge([u(), ae(u())])
  ).optional(),
  variations: Ye.optional(),
  price: u().trim().default("0"),
  type: we(["simple", "variable"]).optional()
}), Ue = R(u(), Ze);
J({
  env: u().default("production"),
  showDevInfo: B().default(!1),
  debug: B().default(!1),
  el: R(u(), Z()).default({}),
  inputType: we(["manual", "formula"]).default("manual"),
  settings: R(u(), Z()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: R(u(), Z()).default({}),
  formatting: R(u(), Z()).default({}),
  product: R(u(), Z()).default({}),
  stock: ae(He).default([]),
  variations: ae(Z()).default([]),
  selectedVariation: R(u(), Z()).default({}),
  machiningPricing: Se().optional(),
  quantityPricing: B().default(!1),
  extrasData: J({
    banding: Ue,
    finish: Ue
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
const et = J({
  source: f(we(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: f(u().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: Se().optional()
  // The formula specification object
}), tt = J({
  price: f(W().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  compareAtPrice: f(W().min(0).optional(), {
    label: "Compare at Price",
    info: "Original price (for showing discounts)",
    type: "float",
    order: 2
  }),
  code: f(u().optional(), {
    label: "Code/SKU",
    placeholder: "PROD-001",
    info: "Internal material or product code",
    order: 3
  }),
  trackInventory: f(B().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: f(W().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: f(B().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: f(W().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: f(B().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), at = we(["formula", "simple", "bundle"]), Ie = J({
  _id: u().optional(),
  // Basic info
  name: f(u().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: f(u().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: f(u().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: f(u().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: f(u().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: f(ae(u()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: f(u().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: f(ae(u()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: f(W().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: f(W().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: f(at, {
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
  published: f(B().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  ecommerce: f(B().default(!1), {
    label: "Available in Checkout",
    info: "Visible in customer checkout",
    type: "checkbox",
    order: 13
  }),
  featured: f(B().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: f(W().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
}), Ne = J({
  _id: u().optional(),
  name: f(u().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: f(u().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: f(u().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: f(u().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: f(W().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: f(B().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
});
Ie.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Ie.partial().omit({
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
const rt = {
  key: 2,
  class: "selected-product-header"
}, ot = { class: "selected-product-info" }, nt = { key: 0 }, lt = /* @__PURE__ */ je({
  __name: "Vanilla",
  emits: ["ready"],
  setup(D, { expose: x, emit: b }) {
    const k = le(() => import("./StockFilter-B8MNEuWC.js")), j = le(() => import("./FormulaPricing-C8rwB74x.js")), w = le(() => import("./ProductBrowser-BKHJLJ8S.js")), h = le(() => import("./Notices-DcRVL7s5.js")), g = le(() => import("./OrderLookup-WDopKPFB.js")), v = b, P = "production", ue = "4.1.2", m = s(!1), p = s([]), d = s({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), Q = O(() => p.value.map((a) => {
      if (a instanceof _e) return a;
      const { issues: c, ...e } = a, t = Array.isArray(c) ? c : [];
      return new _e({ ...e, issues: t });
    })), y = s("USD"), E = s("en-US"), M = s("metric"), l = s("manual"), F = s(""), A = Ve(null), G = s(null), U = s(), C = s(!1), K = s([]), ee = s(Ae()), z = s(!1), I = s(!1), V = s(!0), T = s(null), re = s("calculator"), S = s(null), se = s(null), ce = O(() => I.value && !T.value || I.value && T.value?.type === "simple" || !(l.value === "manual" || l.value === "formula" && (F.value || A.value)) ? !1 : C.value ? p.value.length > 0 : !0), Pe = O(() => {
      if (!(!z.value || !S.value))
        return {
          enabled: !0,
          apiUrl: S.value.baseUrl,
          orgSlug: S.value.orgSlug,
          isCustomDomain: S.value.isCustomDomain
        };
    }), Ce = O(() => S.value ? {
      apiUrl: S.value.baseUrl,
      orgSlug: S.value.orgSlug,
      isCustomDomain: S.value.isCustomDomain
    } : null);
    We("calculator", () => U.value);
    const _ = (a) => {
      m.value && console.log("SmartCut -", ...a);
    }, te = (a) => {
      console.error(`SmartCut - ${a}`);
    }, xe = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, oe = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, X = (a) => {
      G.value = a;
    }, L = (a = 0, c = E.value) => {
      if (a === !0) return "";
      try {
        c = c.replace("_", "-");
        const e = Number(a);
        return !e && e !== 0 ? "" : isNaN(e) ? (console.error("formatPrice - invalid price:", a), "") : e.toLocaleString(c, {
          style: "currency",
          currency: y.value
        });
      } catch (e) {
        return console.error("Error formatting price:", e), "";
      }
    }, fe = (a, c) => {
      if (!d.value?.[a]) return null;
      const t = c.filter((n) => n && n.trim() !== "").join("|"), r = N(d.value, [a, t]);
      return typeof r == "number" ? r : parseFloat(r);
    }, de = (a) => {
      if (a.length === 0) return;
      const c = a.map((n) => {
        const o = n.toData();
        return o.autoAdd = !0, o;
      }), e = [...p.value, ...c], t = [], r = /* @__PURE__ */ new Set();
      for (const n of e) {
        const o = H(n);
        r.has(o) || (r.add(o), t.push(n));
      }
      p.value = t, _(["Stock added. Total stocks:", p.value.length]), U.value && Te(() => {
        U.value.initMaterialsThicknesses({ stock: p.value });
      });
    }, Ee = (a) => {
      const c = H(a);
      p.value = p.value.filter((e) => H(e) !== c), _(["Stock removed. Total stocks:", p.value.length]), U.value && Te(() => {
        U.value.initMaterialsThicknesses({ stock: p.value });
      });
    }, pe = (a) => {
      if (T.value = a, _(["Product selected:", a.name, a.type]), a.type === "formula" && a.formulaSpec)
        l.value = "formula", F.value = a.formulaSpec.url ?? "", A.value = a.formulaSpec.spec ?? null, _(["Formula product - loading spec"]);
      else if (a.type === "simple") {
        l.value = "manual", _(["Simple product selected"]);
        const c = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(a)),
            type: "simple"
          }
        });
        window.dispatchEvent(c);
      }
    }, ve = () => {
      T.value = null, l.value === "formula" && (F.value = "", A.value = null, l.value = "manual");
    }, me = (a) => {
      Qe(a), a.api && (S.value = {
        baseUrl: a.api.baseUrl,
        orgSlug: a.api.orgSlug,
        isCustomDomain: a.api.isCustomDomain
      }), a.stockFilter?.enabled ? (C.value = !0, z.value = a.stockFilter.serverMode || !1, K.value = z.value ? [] : (a.stock || []).map((c) => ({ ...c })), ee.value = a.stockFilter.config || Ae(), p.value = [], _(["Stock filter enabled", z.value ? "(server mode)" : `with ${K.value.length} available options`])) : (C.value = !1, p.value = a.stock), a.products?.enabled ? (I.value = !0, V.value = a.products.showCategories !== !1, _(["Product browser enabled", V.value ? "with categories" : "without categories"])) : I.value = !1, d.value.banding = N(a, ["banding", "pricing"]), d.value.finish = N(a, ["finish", "pricing"]), d.value.planing = N(a, ["planing", "pricing"]), d.value.machining = N(a, ["machining", "pricing"]), q(a, ["options", "currency"]) && (y.value = N(a, ["options", "currency"])), q(a, ["options", "locale"]) && (E.value = N(a, ["options", "locale"]).replace("_", "-")), q(a, ["options", "unitSystem"]) && (M.value = N(a, ["options", "unitSystem"])), q(a, ["config", "formulaPricing", "enabled"]) && a.config.formulaPricing.enabled ? (l.value = "formula", F.value = a.config.formulaPricing.url ?? null, A.value = a.config.formulaPricing.spec ?? null) : (q(a, ["options", "formula", "url"]) || q(a, ["options", "formula", "spec"])) && (l.value = "formula", F.value = N(a, ["options", "formula", "url"]) ?? null, A.value = N(a, ["options", "formula", "spec"]) ?? null), Te(() => {
        if (U.value) {
          const c = {
            ...a,
            stock: p.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: C.value
          };
          U.value.init(c);
        }
      });
    }, ge = (a) => {
      const c = a;
      if (c.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, a?.metadata?.totalStockCost && (c.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        E.value,
        {
          style: "currency",
          currency: y.value
        }
      )), a?.metadata?.bandingLengthByType)
        for (const [t, r] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!q(d.value, ["banding", t])) {
            te(`Banding price ${t} not found`);
            continue;
          }
          c.checkout.formattedBandingCost[t] = (r / 1e3 * d.value.banding[t]).toLocaleString(E.value, { style: "currency", currency: y.value });
        }
      if (a?.metadata?.finishAreaByType)
        for (const [t, r] of Object.entries(a.metadata.finishAreaByType)) {
          if (!q(d.value, ["finish", t])) {
            te(`Finish price ${t} not found`);
            continue;
          }
          c.checkout.formattedFinishCost[t] = (r / 1e6 * d.value.finish[t]).toLocaleString(E.value, { style: "currency", currency: y.value });
        }
      const e = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(c))
      });
      window.dispatchEvent(e);
    };
    return Le(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ue} [${P}]`);
      const a = new URLSearchParams(window.location.search);
      m.value = !!a.has("debug");
      const c = a.get("view");
      (c === "track-order" || c === "order-lookup") && (re.value = "order-lookup");
      const e = a.get("product");
      e && (se.value = e, _(["Deep link to product:", e])), m.value && console.log("Smartcut - debug enabled");
    }), Me(() => {
      window.smartcutCheckout = { init: me }, v("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), x({
      init: me,
      debug: m,
      stock: p,
      pricing: d,
      currency: y,
      locale: E,
      unitSystem: M,
      inputType: l,
      formulaURL: F,
      formulaSpec: A,
      hardWareResult: G,
      // Product state
      productsEnabled: I,
      selectedProduct: T,
      selectProduct: pe,
      clearProduct: ve,
      // Methods
      log: _,
      error: te,
      calculating: oe,
      result: ge,
      formatPrice: L,
      findExtrasPrice: fe,
      setHardwareResult: X
    }), (a, c) => ($(), ye(Oe, null, [
      De(ne(h), { position: "top-left" }),
      re.value === "order-lookup" && S.value ? ($(), be(ne(g), {
        key: 0,
        "api-base-url": S.value.baseUrl,
        "org-slug": S.value.orgSlug,
        "is-custom-domain": S.value.isCustomDomain,
        "format-price": L,
        locale: E.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : ($(), ye(Oe, { key: 1 }, [
        I.value && !T.value ? ($(), be(ne(w), {
          key: 0,
          config: Ce.value,
          "show-categories": V.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: pe
        }, null, 8, ["config", "show-categories"])) : ie("", !0),
        C.value && !I.value ? ($(), be(ne(k), {
          key: 1,
          "stock-options": K.value,
          config: ee.value,
          "format-price": L,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: E.value,
          "unit-system": M.value,
          "initial-product-id": se.value,
          "server-pagination": Pe.value,
          mode: ee.value.mode || "stock",
          onStockAdded: de,
          onStockRemoved: Ee
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "mode"])) : ie("", !0),
        T.value ? ($(), ye("div", rt, [
          Fe("div", ot, [
            Fe("h3", null, Re(T.value.name), 1),
            T.value.shortDescription ? ($(), ye("p", nt, Re(T.value.shortDescription), 1)) : ie("", !0)
          ]),
          Fe("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: ve
          }, " Change Product ")
        ])) : ie("", !0),
        l.value === "formula" && (F.value || A.value) ? ($(), be(ne(j), {
          key: 3,
          ref: "formulapricing",
          "format-price": L,
          url: F.value,
          spec: A.value,
          debug: m.value,
          onHardwareResult: X
        }, null, 8, ["url", "spec", "debug"])) : ie("", !0),
        $e(De(Je, {
          ref_key: "calculator",
          ref: U,
          readonly: l.value === "formula",
          debug: m.value,
          "input-stock": Q.value,
          "input-type": l.value,
          "find-extras-price": fe,
          "format-price": L,
          onLog: _,
          onError: te,
          onCalculating: oe,
          onValidationError: xe,
          onResult: ge
        }, null, 8, ["readonly", "debug", "input-stock", "input-type"]), [
          [qe, ce.value]
        ])
      ], 64))
    ], 64));
  }
}), it = /* @__PURE__ */ Ke(lt, [["__scopeId", "data-v-fe2dfb30"]]), mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: it }, Symbol.toStringTag, { value: "Module" }));
export {
  mt as V,
  pt as b,
  H as g,
  vt as u
};
