import { M as je, r as u, w as Be, c as _, d as Me, N as Ve, o as $e, K as qe, a as me, b as V, g as Oe, j as ge, u as ne, h as le, F as Re, e as ie, m as We, f as _e, t as Ie, v as Je, n as he, L as Qe } from "./vendor-vue-DyIrsOEK.js";
import { I as Te, i as He, f as s, g as A, b as $ } from "./result.zod-DtmPQoSB.js";
import { e as Ue, d as Ke, m as ze } from "./EcommerceCalculator-Baq5iGGk.js";
import { l as Ge, o as W, h as T, i, j as Y, k as Se, u as Xe, m as ye, n as B, q as G, t as q, v as be } from "./vendor-CFKbllLs.js";
import { _ as Ye } from "./Launch-DG6yieBM.js";
function Ze() {
  const b = u(!1);
  let d = null;
  function C(O, m) {
    d || !m || !O || (d = Ge(`${O}/ecommerce`, {
      withCredentials: !0,
      autoConnect: !1
    }), d.on("connect", () => {
      d?.emit("join", m);
    }), d.on("inventory-changed", () => {
      b.value = !0;
    }), d.connect());
  }
  function F() {
    d && (d.disconnect(), d = null);
  }
  function Z() {
    b.value = !1;
  }
  return je(F), {
    inventoryChanged: b,
    start: C,
    stop: F,
    acknowledge: Z
  };
}
function X(b) {
  return b.db_id ? b.db_id : `${b.material}-${b.l}-${b.w}-${b.t}`;
}
function gt(b) {
  const {
    stockOptions: d,
    config: C,
    initialState: F,
    numberFormat: Z = u("decimal"),
    serverPagination: O
  } = b, m = u(F?.activeFilters || []), S = u(F?.searchQuery || ""), N = u(F?.sortBy || C?.value?.defaultSort.field || "cost"), R = u(F?.sortOrder || C?.value?.defaultSort.order || "asc"), ue = u(F?.displayMode || C?.value?.displayMode || "grid"), p = u(F?.currentPage || 1), f = u([]), c = O?.enabled || !1, J = u(!1), v = u([]), P = u(1), j = u(0), l = u(null);
  let x = null;
  function I() {
    if (!O) return "";
    const { apiUrl: t, orgSlug: a, isCustomDomain: e } = O;
    return e ? `${t}ecommerce/stock` : `${t}ecommerce/${a}/stock`;
  }
  async function Q() {
    if (!(!c || !O)) {
      J.value = !0;
      try {
        const t = new URL(I());
        t.searchParams.set("page", String(p.value)), t.searchParams.set("limit", String(C?.value?.itemsPerPage || 20)), t.searchParams.set("sortBy", N.value), t.searchParams.set("sortOrder", R.value), t.searchParams.set("groupByThickness", "true"), S.value.trim() && t.searchParams.set("search", S.value.trim());
        const a = {};
        for (const o of m.value)
          if (o.type === "select" || o.type === "multiselect")
            a[o.field] = o.value;
          else if (o.type === "range" && o.value) {
            const { min: n, max: h } = o.value;
            let y;
            o.field === "l" ? y = "Length" : o.field === "w" ? y = "Width" : y = o.field.charAt(0).toUpperCase() + o.field.slice(1), n !== void 0 && (a[`min${y}`] = n), h !== void 0 && (a[`max${y}`] = h);
          } else if (o.type === "boolean" && o.field.startsWith("hasExtras.")) {
            const n = o.field.replace("hasExtras.", "");
            a.hasExtras || (a.hasExtras = {}), a.hasExtras[n] = o.value;
          }
        Object.keys(a).length > 0 && t.searchParams.set("filters", JSON.stringify(a));
        const e = await fetch(t.toString(), {
          credentials: "include"
        });
        if (!e.ok)
          throw new Error(`Server returned ${e.status}`);
        const r = await e.json();
        v.value = r.items || [], P.value = r.pagination?.totalPages || 1, j.value = r.pagination?.total || 0, r.filterOptions && p.value === 1 && (l.value = r.filterOptions);
      } catch (t) {
        console.error("[useStockFilter] Server fetch error:", t), v.value = [], P.value = 1, j.value = 0;
      } finally {
        J.value = !1;
      }
    }
  }
  function D() {
    c && (v.value = [], j.value = 0, J.value = !0, x && clearTimeout(x), x = setTimeout(() => {
      Q();
    }, O?.debounceMs || 300));
  }
  c && (Be([S, m, N, R], () => {
    p.value = 1, D();
  }, { deep: !0 }), Q());
  function k(t, a) {
    return a.split(".").reduce((e, r) => e?.[r], t);
  }
  function H(t, a) {
    return typeof t == "object" && t !== null && typeof a == "object" && a !== null && "hex" in t && "hex" in a ? t.hex === a.hex : t === a;
  }
  function ee(t, a) {
    const e = k(t, a.field);
    switch (a.type) {
      case "select":
        return H(e, a.value);
      case "multiselect":
        return Array.isArray(a.value) ? a.value.some((r) => H(e, r)) : H(e, a.value);
      case "range":
        if (a.value && typeof a.value == "object") {
          const { min: r, max: o } = a.value, n = Number(e);
          return !(isNaN(n) || r !== void 0 && n < r || o !== void 0 && n > o);
        }
        return !1;
      case "boolean":
        return !!e == !!a.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function K(t, a) {
    if (!a.trim()) return !0;
    const e = a.toLowerCase().split(/\s+/).filter(Boolean), o = [
      t.name,
      t.material,
      t.code,
      t.description,
      t.category,
      t.variant,
      t.finish,
      t.grain,
      typeof t.color == "object" ? t.color?.name : t.color,
      ...t.tags || []
    ].filter(Boolean).map((n) => String(n).toLowerCase()).join(" ");
    return e.every((n) => o.includes(n));
  }
  const U = _(() => {
    let t = [...d.value];
    S.value && (t = t.filter((a) => K(a, S.value)));
    for (const a of m.value)
      t = t.filter((e) => ee(e, a));
    return t;
  }), M = _(() => {
    const t = [...U.value];
    return t.sort((a, e) => {
      const r = k(a, N.value), o = k(e, N.value);
      if (r == null && o == null) return 0;
      if (r == null) return 1;
      if (o == null) return -1;
      let n = 0;
      return typeof r == "string" && typeof o == "string" ? n = r.localeCompare(o) : typeof r == "number" && typeof o == "number" ? n = r - o : n = String(r).localeCompare(String(o)), R.value === "asc" ? n : -n;
    }), t;
  }), E = _(() => {
    if (c)
      return v.value;
    const t = C?.value?.itemsPerPage || 20, a = (p.value - 1) * t, e = a + t;
    return M.value.slice(a, e);
  }), te = _(() => {
    if (c)
      return P.value;
    const t = C?.value?.itemsPerPage || 20;
    return Math.ceil(M.value.length / t);
  }), g = _(() => c ? j.value : M.value.length);
  function se(t, a, e = "select") {
    ce(t), m.value.push({ field: t, value: a, type: e }), p.value = 1;
  }
  function ce(t) {
    m.value = m.value.filter((a) => a.field !== t);
  }
  function ke() {
    m.value = [], S.value = "", p.value = 1;
  }
  function we(t, a) {
    N.value = t, a ? R.value = a : R.value = R.value === "asc" ? "desc" : "asc", p.value = 1;
  }
  function Ce(t) {
    S.value = t, p.value = 1;
  }
  function Pe(t) {
    t >= 1 && t <= te.value && (p.value = t, c && (v.value = [], J.value = !0, Q()));
  }
  function xe(t) {
    const a = X(t), e = f.value.indexOf(a);
    return e === -1 ? C?.value?.maxSelection && f.value.length >= C.value.maxSelection ? !1 : (f.value.push(a), ae(t, !0), !0) : (f.value.splice(e, 1), ae(t, !1), !1);
  }
  function w(t) {
    return f.value.includes(X(t));
  }
  const L = u(/* @__PURE__ */ new Map());
  function ae(t, a) {
    const e = X(t);
    a ? L.value.set(e, t) : L.value.delete(e);
  }
  const fe = _(() => c ? f.value.map((t) => L.value.get(t)).filter((t) => t !== void 0) : d.value.filter((t) => w(t)));
  function re() {
    f.value = [], L.value.clear();
  }
  function z(t) {
    const a = d.value.find((e) => e.db_id === t) || v.value.find((e) => e.db_id === t);
    return a ? (re(), f.value.push(X(a)), ae(a, !0), a) : null;
  }
  function de(t) {
    const {
      ...a
    } = t;
    return new Te(a, Z.value);
  }
  function Ee(t) {
    if (c && l.value) {
      if (t === "material" && l.value.materials)
        return l.value.materials;
      if (t === "category" && l.value.categories)
        return l.value.categories;
      if (t === "finish" && l.value.finishes)
        return l.value.finishes;
      if (t === "grain" && l.value.grains)
        return l.value.grains;
      if (t === "color" && l.value.colors)
        return l.value.colors;
      if (t === "t" && l.value.thicknesses)
        return l.value.thicknesses;
      if (t === "variant" && l.value.variants)
        return l.value.variants;
      if (t === "type" && l.value.types)
        return l.value.types;
    }
    const a = c ? v.value : d.value;
    if (t === "color") {
      const r = /* @__PURE__ */ new Map();
      return a.forEach((o) => {
        const n = k(o, t);
        n != null && (typeof n == "object" && "hex" in n ? n.hex && !r.has(n.hex) && r.set(n.hex, n) : typeof n == "string" && n.trim() !== "" && (r.has(n) || r.set(n, n)));
      }), Array.from(r.values()).sort((o, n) => {
        const h = typeof o == "object" && "name" in o ? o.name : String(o), y = typeof n == "object" && "name" in n ? n.name : String(n);
        return h.localeCompare(y);
      });
    }
    const e = /* @__PURE__ */ new Set();
    return a.forEach((r) => {
      const o = k(r, t);
      o != null && !(typeof o == "string" && o.trim() === "") && e.add(o);
    }), Array.from(e).sort();
  }
  function Fe(t) {
    if (c && l.value) {
      if (t === "t" && l.value.thicknessRange)
        return l.value.thicknessRange;
      if (t === "cost" && l.value.priceRange)
        return l.value.priceRange;
      if (t === "l" && l.value.dimensionRange?.length)
        return l.value.dimensionRange.length;
      if (t === "w" && l.value.dimensionRange?.width)
        return l.value.dimensionRange.width;
      if (t === "weight" && l.value.weightRange)
        return l.value.weightRange;
    }
    const e = (c ? v.value : d.value).map((r) => Number(k(r, t))).filter((r) => !isNaN(r));
    return e.length === 0 ? null : {
      min: Math.min(...e),
      max: Math.max(...e)
    };
  }
  function De() {
    if (c && l.value?.hasExtras)
      return l.value.hasExtras;
    const t = c ? v.value : d.value, a = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const e of t)
      if (e.extras?.banding && (a.banding = !0), e.extras?.finish && (a.finish = !0), e.extras?.planing && (a.planing = !0), e.extras?.machining && (a.machining = !0), a.banding && a.finish && a.planing && a.machining) break;
    return a;
  }
  function pe(t) {
    const a = /* @__PURE__ */ new Map();
    if (c && l.value?.counts) {
      const r = l.value.counts[t];
      if (r) {
        for (const [o, n] of Object.entries(r))
          a.set(o, n);
        return a;
      }
      return a;
    }
    let e = [...d.value];
    S.value && (e = e.filter((r) => K(r, S.value)));
    for (const r of m.value)
      r.field !== t && (e = e.filter((o) => ee(o, r)));
    for (const r of e) {
      const o = k(r, t);
      if (o != null && !(typeof o == "string" && o.trim() === "")) {
        const n = typeof o == "object" && o !== null && "hex" in o ? o.hex : String(o);
        a.set(n, (a.get(n) || 0) + 1);
      }
    }
    return a;
  }
  const ve = _(() => ({
    activeFilters: m.value,
    searchQuery: S.value,
    sortBy: N.value,
    sortOrder: R.value,
    displayMode: ue.value,
    currentPage: p.value,
    selectedStockIds: f.value
  }));
  return {
    // State
    activeFilters: m,
    searchQuery: S,
    sortBy: N,
    sortOrder: R,
    displayMode: ue,
    currentPage: p,
    selectedStockIds: f,
    // Server pagination state
    isLoading: J,
    serverMode: c,
    serverFilterOptions: l,
    // Computed
    filteredStock: U,
    sortedStock: M,
    paginatedStock: E,
    selectedStock: fe,
    totalPages: te,
    totalItems: g,
    currentState: ve,
    // Methods
    applyFilter: se,
    removeFilter: ce,
    clearFilters: ke,
    updateSort: we,
    updateSearch: Ce,
    goToPage: Pe,
    toggleStockSelection: xe,
    isStockSelected: w,
    clearSelection: re,
    selectById: z,
    createInputStock: de,
    getUniqueValues: Ee,
    getFieldRange: Fe,
    getFilterOptionCounts: pe,
    getHasExtrasOptions: De,
    fetchServerStock: Q
  };
}
const et = W({
  name: i().trim(),
  price: i().trim().default("0"),
  options: T(i(), Y(i()))
}), tt = T(i(), et), at = W({
  name: i().trim(),
  options: T(
    i(),
    Xe([i(), Y(i())])
  ).optional(),
  variations: tt.optional(),
  price: i().trim().default("0"),
  type: Se(["simple", "variable"]).optional()
}), Ae = T(i(), at);
W({
  env: i().default("production"),
  showDevInfo: B().default(!1),
  debug: B().default(!1),
  el: T(i(), G()).default({}),
  inputType: Se(["manual", "formula"]).default("manual"),
  settings: T(i(), G()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: T(i(), G()).default({}),
  formatting: T(i(), G()).default({}),
  product: T(i(), G()).default({}),
  stock: Y(He).default([]),
  variations: Y(G()).default([]),
  selectedVariation: T(i(), G()).default({}),
  machiningPricing: ye().optional(),
  quantityPricing: B().default(!1),
  extrasData: W({
    banding: Ae,
    finish: Ae
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: i().url().optional().or(i().default("")),
  formulaSpec: i().default(""),
  hardwareResult: T(i(), ye()).default({}),
  // HardwareResult type from formula.ts
  metadata: ye().optional()
  // Metadata from optimize/main
});
const rt = W({
  source: s(Se(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: s(i().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: ye().optional()
  // The formula specification object
}), ot = W({
  price: s(q().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  discount: s(q().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 2
  }),
  code: s(i().optional(), {
    label: "Code/SKU",
    placeholder: "PROD-001",
    info: "Internal material or product code",
    order: 3
  }),
  trackInventory: s(B().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: s(q().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: s(B().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: s(q().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: s(B().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), nt = Se(["formula", "simple", "bundle"]), Ne = W({
  _id: i().optional(),
  // Basic info
  name: s(i().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: s(i().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: s(i().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: s(i().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: s(i().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: s(Y(i()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: s(i().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: s(Y(i()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: s(q().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: s(q().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: s(nt, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: rt.optional(),
  simpleConfig: ot.optional(),
  // Visibility & Status
  published: s(B().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  ecommerce: s(B().default(!1), {
    label: "Available in Checkout",
    info: "Visible in customer checkout",
    type: "checkbox",
    order: 13
  }),
  featured: s(B().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: s(q().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Timestamps (read-only)
  createdAt: be().optional(),
  updatedAt: be().optional()
}), Le = W({
  _id: i().optional(),
  name: s(i().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: s(i().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: s(i().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: s(i().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: s(q().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: s(B().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: be().optional(),
  updatedAt: be().optional()
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
Le.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
Le.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
const lt = {
  key: 2,
  class: "selected-product-header"
}, it = { class: "selected-product-info" }, ut = { key: 0 }, st = /* @__PURE__ */ Me({
  __name: "Vanilla",
  emits: ["ready"],
  setup(b, { expose: d, emit: C }) {
    const F = le(() => import("./StockFilter-Bdptd2hP.js")), Z = le(() => import("./FormulaPricing-CCmfc81X.js")), O = le(() => import("./ProductBrowser-DNeJeMYw.js")), m = le(() => import("./Notices-rqVMklDh.js")), S = le(() => import("./OrderLookup-CAvD2OIu.js")), N = C, R = "production", ue = "4.1.19", p = u(!1), f = u([]), c = u({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), J = _(() => f.value.map((e) => {
      if (e instanceof Te) return e;
      const { issues: r, ...o } = e, n = Array.isArray(r) ? r : [];
      return new Te({ ...o, issues: n });
    })), v = u("USD"), P = u("en-US"), j = u("metric"), l = u("manual"), x = u(""), I = qe(null), Q = u(null), D = u(), k = u(!1), H = u([]), ee = u(Ue()), K = u(!1), U = u(!1), M = u(!0), E = u(null), te = u("calculator"), g = u(null), se = u(null), { inventoryChanged: ce, start: ke, acknowledge: we } = Ze(), Ce = _(() => U.value && !E.value || U.value && E.value?.type === "simple" || !(l.value === "manual" || l.value === "formula" && (x.value || I.value)) ? !1 : k.value ? f.value.length > 0 : !0), Pe = _(() => {
      if (!(!K.value || !g.value))
        return {
          enabled: !0,
          apiUrl: g.value.baseUrl,
          orgSlug: g.value.orgSlug,
          isCustomDomain: g.value.isCustomDomain
        };
    }), xe = _(() => g.value ? {
      apiUrl: g.value.baseUrl,
      orgSlug: g.value.orgSlug,
      isCustomDomain: g.value.isCustomDomain
    } : null);
    Qe("calculator", () => D.value);
    const w = (e) => {
      p.value && console.log("SmartCut -", ...e);
    }, L = (e) => {
      console.error(`SmartCut - ${e}`);
    }, ae = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, fe = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, re = (e) => {
      Q.value = e;
    }, z = (e = 0, r = P.value) => {
      if (e === !0) return "";
      try {
        r = r.replace("_", "-");
        const o = Number(e);
        return !o && o !== 0 ? "" : isNaN(o) ? (console.error("formatPrice - invalid price:", e), "") : o.toLocaleString(r, {
          style: "currency",
          currency: v.value
        });
      } catch (o) {
        return console.error("Error formatting price:", o), "";
      }
    }, de = (e, r) => {
      if (!c.value?.[e]) return null;
      const n = r.filter((y) => y && y.trim() !== "").join("|"), h = A(c.value, [e, n]);
      return typeof h == "number" ? h : parseFloat(h);
    }, Ee = (e) => {
      if (e.length === 0) return;
      const r = e.map((y) => {
        const oe = y.toData();
        return oe.autoAdd = !0, oe;
      }), o = [...f.value, ...r], n = [], h = /* @__PURE__ */ new Set();
      for (const y of o) {
        const oe = X(y);
        h.has(oe) || (h.add(oe), n.push(y));
      }
      f.value = n, w(["Stock added. Total stocks:", f.value.length]), D.value && he(() => {
        D.value.initMaterialsThicknesses({ stock: f.value });
      });
    }, Fe = () => {
      const e = new CustomEvent("smartcut/selection-confirmed");
      window.dispatchEvent(e), he(() => {
        const r = D.value?.$el;
        r && r.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, De = (e) => {
      const r = X(e);
      f.value = f.value.filter((o) => X(o) !== r), w(["Stock removed. Total stocks:", f.value.length]), D.value && he(() => {
        D.value.initMaterialsThicknesses({ stock: f.value });
      });
    }, pe = (e) => {
      if (E.value = e, w(["Product selected:", e.name, e.type]), e.type === "formula" && e.formulaSpec)
        l.value = "formula", x.value = e.formulaSpec.url ?? "", I.value = e.formulaSpec.spec ?? null, w(["Formula product - loading spec"]);
      else if (e.type === "simple") {
        l.value = "manual", w(["Simple product selected"]);
        const r = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(e)),
            type: "simple"
          }
        });
        window.dispatchEvent(r);
      }
    }, ve = () => {
      E.value = null, l.value === "formula" && (x.value = "", I.value = null, l.value = "manual");
    }, t = (e) => {
      ze(e), e.api && (g.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (k.value = !0, K.value = e.stockFilter.serverMode || !1, H.value = K.value ? [] : (e.stock || []).map((r) => ({ ...r })), ee.value = e.stockFilter.config || Ue(), f.value = [], w(["Stock filter enabled", K.value ? "(server mode)" : `with ${H.value.length} available options`])) : (k.value = !1, f.value = e.stock), e.products?.enabled ? (U.value = !0, M.value = e.products.showCategories !== !1, w(["Product browser enabled", M.value ? "with categories" : "without categories"])) : U.value = !1, c.value.banding = A(e, ["banding", "pricing"]), c.value.finish = A(e, ["finish", "pricing"]), c.value.planing = A(e, ["planing", "pricing"]), c.value.machining = A(e, ["machining", "pricing"]), $(e, ["options", "currency"]) && (v.value = A(e, ["options", "currency"])), $(e, ["options", "locale"]) && (P.value = A(e, ["options", "locale"]).replace("_", "-")), $(e, ["options", "unitSystem"]) && (j.value = A(e, ["options", "unitSystem"])), $(e, ["config", "formulaPricing", "enabled"]) && e.config.formulaPricing.enabled ? (l.value = "formula", x.value = e.config.formulaPricing.url ?? null, I.value = e.config.formulaPricing.spec ?? null) : ($(e, ["options", "formula", "url"]) || $(e, ["options", "formula", "spec"])) && (l.value = "formula", x.value = A(e, ["options", "formula", "url"]) ?? null, I.value = A(e, ["options", "formula", "spec"]) ?? null), e.api?.wsServer && e.api?.orgId && ke(e.api.wsServer, e.api.orgId), he(() => {
        if (D.value) {
          const r = {
            ...e,
            stock: f.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: k.value
          };
          D.value.init(r);
        }
      });
    }, a = (e) => {
      const r = e;
      if (r.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (r.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        P.value,
        {
          style: "currency",
          currency: v.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [n, h] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!$(c.value, ["banding", n])) {
            L(`Banding price ${n} not found`);
            continue;
          }
          r.checkout.formattedBandingCost[n] = (h / 1e3 * c.value.banding[n]).toLocaleString(P.value, { style: "currency", currency: v.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [n, h] of Object.entries(e.metadata.finishAreaByType)) {
          if (!$(c.value, ["finish", n])) {
            L(`Finish price ${n} not found`);
            continue;
          }
          r.checkout.formattedFinishCost[n] = (h / 1e6 * c.value.finish[n]).toLocaleString(P.value, { style: "currency", currency: v.value });
        }
      const o = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(r))
      });
      window.dispatchEvent(o);
    };
    return Be(ce, (e) => {
      e && (window.dispatchEvent(new CustomEvent("smartcut/inventoryUpdated")), we());
    }), Ve(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + ue} [${R}]`);
      const e = new URLSearchParams(window.location.search);
      p.value = !!e.has("debug");
      const r = e.get("view");
      (r === "track-order" || r === "order-lookup") && (te.value = "order-lookup");
      const o = e.get("product");
      o && (se.value = o, w(["Deep link to product:", o])), p.value && console.log("Smartcut - debug enabled");
    }), $e(() => {
      window.smartcutCheckout = { init: t }, N("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), d({
      init: t,
      debug: p,
      stock: f,
      pricing: c,
      currency: v,
      locale: P,
      unitSystem: j,
      inputType: l,
      formulaURL: x,
      formulaSpec: I,
      hardWareResult: Q,
      // Product state
      productsEnabled: U,
      selectedProduct: E,
      selectProduct: pe,
      clearProduct: ve,
      // Methods
      log: w,
      error: L,
      calculating: fe,
      result: a,
      formatPrice: z,
      findExtrasPrice: de,
      setHardwareResult: re
    }), (e, r) => (V(), me(Re, null, [
      Oe(ne(m), { position: "top-left" }),
      te.value === "order-lookup" && g.value ? (V(), ge(ne(S), {
        key: 0,
        "api-base-url": g.value.baseUrl,
        "org-slug": g.value.orgSlug,
        "is-custom-domain": g.value.isCustomDomain,
        "format-price": z,
        locale: P.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (V(), me(Re, { key: 1 }, [
        U.value && !E.value ? (V(), ge(ne(O), {
          key: 0,
          config: xe.value,
          "show-categories": M.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: pe
        }, null, 8, ["config", "show-categories"])) : ie("", !0),
        k.value && !U.value ? (V(), ge(ne(F), {
          key: 1,
          "stock-options": H.value,
          config: ee.value,
          "format-price": z,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: P.value,
          "unit-system": j.value,
          "initial-product-id": se.value,
          "server-pagination": Pe.value,
          "show-selection-bar": !1,
          onStockAdded: Ee,
          onStockRemoved: De,
          onSelectionConfirmed: Fe
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination"])) : ie("", !0),
        E.value ? (V(), me("div", lt, [
          _e("div", it, [
            _e("h3", null, Ie(E.value.name), 1),
            E.value.shortDescription ? (V(), me("p", ut, Ie(E.value.shortDescription), 1)) : ie("", !0)
          ]),
          _e("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: ve
          }, " Change Product ")
        ])) : ie("", !0),
        l.value === "formula" && (x.value || I.value) ? (V(), ge(ne(Z), {
          key: 3,
          ref: "formulapricing",
          "format-price": z,
          url: x.value,
          spec: I.value,
          debug: p.value,
          onHardwareResult: re
        }, null, 8, ["url", "spec", "debug"])) : ie("", !0),
        We(Oe(Ke, {
          ref_key: "calculator",
          ref: D,
          readonly: l.value === "formula",
          "input-stock": J.value,
          "input-type": l.value,
          "find-extras-price": de,
          "format-price": z,
          onLog: w,
          onError: L,
          onCalculating: fe,
          onValidationError: ae,
          onResult: a
        }, null, 8, ["readonly", "input-stock", "input-type"]), [
          [Je, Ce.value]
        ])
      ], 64))
    ], 64));
  }
}), ct = /* @__PURE__ */ Ye(st, [["__scopeId", "data-v-2dd2e94a"]]), ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ct }, Symbol.toStringTag, { value: "Module" }));
export {
  ht as V,
  X as g,
  gt as u
};
