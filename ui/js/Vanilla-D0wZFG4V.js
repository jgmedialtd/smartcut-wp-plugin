import { M as We, r as u, w as Le, m as A, d as Je, Q as Ke, f as Qe, O as He, c as ye, o as $, i as Re, h as be, u as ne, y as le, F as Ue, a as ie, z as ze, b as Te, t as Ae, A as Ge, H as Se, P as Ye } from "./vendor-vue-BgOQH8dC.js";
import { p as _e, w as Xe, x as s, j as T, q } from "./result.zod-n9AiX9Qf.js";
import { i as Ie, g as Ze, m as et } from "./EcommerceCalculator-CIJmnT15.js";
import { l as tt, j as B, k as _, n as i, q as G, t as ue, v as at, w as te, x, y as H, A as C, B as ke } from "./vendor-CN6j6kBQ.js";
import { _ as ot } from "./Launch-BRH4wqOZ.js";
function rt() {
  const S = u(!1);
  let p = null;
  function P(E, g) {
    p || !g || !E || (p = tt(`${E}/ecommerce`, {
      withCredentials: !0,
      autoConnect: !1
    }), p.on("connect", () => {
      p?.emit("join", g);
    }), p.on("inventory-changed", () => {
      S.value = !0;
    }), p.connect());
  }
  function R() {
    p && (p.disconnect(), p = null);
  }
  function ae() {
    S.value = !1;
  }
  return We(R), {
    inventoryChanged: S,
    start: P,
    stop: R,
    acknowledge: ae
  };
}
function z(S) {
  return S.db_id ? S.db_id : `${S.material}-${S.l}-${S.w}-${S.t}`;
}
const yt = "stock-filter-selections";
function bt(S) {
  const {
    stockOptions: p,
    config: P,
    initialState: R,
    numberFormat: ae = u("decimal"),
    serverPagination: E
  } = S, g = u(R?.activeFilters || []), k = u(R?.searchQuery || ""), j = u(R?.sortBy || P?.value?.defaultSort.field || "cost"), I = u(R?.sortOrder || P?.value?.defaultSort.order || "asc"), se = u(R?.displayMode || P?.value?.displayMode || "grid"), d = u(R?.currentPage || 1), f = u([]), c = E?.enabled || !1, W = u(!1), v = u([]), D = u(1), M = u(0), l = u(null);
  let F = null, w = null;
  function ce() {
    if (!E) return "";
    const { apiUrl: t, orgSlug: e, isCustomDomain: a } = E;
    return a ? `${t}ecommerce/stock` : `${t}ecommerce/${e}/stock`;
  }
  async function y() {
    if (!c || !E) return;
    w?.abort();
    const t = new AbortController();
    w = t, W.value = !0;
    try {
      const e = new URL(ce());
      e.searchParams.set("page", String(d.value)), e.searchParams.set("limit", String(P?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", j.value), e.searchParams.set("sortOrder", I.value), e.searchParams.set("groupByThickness", "true"), k.value.trim() && e.searchParams.set("search", k.value.trim());
      const a = {};
      for (const r of g.value)
        if (r.type === "select" || r.type === "multiselect")
          a[r.field] = r.value;
        else if (r.type === "range" && r.value) {
          const { min: b, max: L } = r.value;
          let re;
          r.field === "l" ? re = "Length" : r.field === "w" ? re = "Width" : re = r.field.charAt(0).toUpperCase() + r.field.slice(1), b !== void 0 && (a[`min${re}`] = b), L !== void 0 && (a[`max${re}`] = L);
        } else if (r.type === "boolean" && r.field.startsWith("hasExtras.")) {
          const b = r.field.replace("hasExtras.", "");
          a.hasExtras || (a.hasExtras = {}), a.hasExtras[b] = r.value;
        }
      Object.keys(a).length > 0 && e.searchParams.set("filters", JSON.stringify(a)), E?.rule?.predicates?.length && e.searchParams.set("rule", JSON.stringify(E.rule));
      const o = await fetch(e.toString(), {
        credentials: "include",
        signal: t.signal
      });
      if (!o.ok)
        throw new Error(`Server returned ${o.status}`);
      const n = await o.json();
      if (t.signal.aborted) return;
      v.value = n.items || [], D.value = n.pagination?.totalPages || 1, M.value = n.pagination?.total || 0, n.filterOptions && d.value === 1 && (l.value = n.filterOptions);
    } catch (e) {
      if (e?.name === "AbortError") return;
      console.error("[useStockFilter] Server fetch error:", e), v.value = [], D.value = 1, M.value = 0;
    } finally {
      w === t && (w = null, W.value = !1);
    }
  }
  function J() {
    c && (v.value = [], M.value = 0, W.value = !0, F && clearTimeout(F), F = setTimeout(() => {
      y();
    }, E?.debounceMs || 300));
  }
  c && (Le([k, g, j, I], () => {
    d.value = 1, J();
  }, { deep: !0 }), y());
  function U(t, e) {
    return e.split(".").reduce((a, o) => a?.[o], t);
  }
  function Y(t, e) {
    return typeof t == "object" && t !== null && typeof e == "object" && e !== null && "hex" in t && "hex" in e ? t.hex === e.hex : t === e;
  }
  function K(t, e) {
    const a = U(t, e.field);
    switch (e.type) {
      case "select":
        return Y(a, e.value);
      case "multiselect":
        return Array.isArray(e.value) ? e.value.some((o) => Y(a, o)) : Y(a, e.value);
      case "range":
        if (e.value && typeof e.value == "object") {
          const { min: o, max: n } = e.value, r = Number(a);
          return !(isNaN(r) || o !== void 0 && r < o || n !== void 0 && r > n);
        }
        return !1;
      case "boolean":
        return !!a == !!e.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function N(t, e) {
    if (!e.trim()) return !0;
    const a = e.toLowerCase().split(/\s+/).filter(Boolean), n = [
      t.name,
      t.material,
      t.code,
      t.description,
      t.category,
      t.variant,
      t.brand,
      t.finish,
      t.grain,
      typeof t.color == "object" ? t.color?.name : t.color,
      ...t.tags || []
    ].filter(Boolean).map((r) => String(r).toLowerCase()).join(" ");
    return a.every((r) => n.includes(r));
  }
  const X = A(() => {
    let t = [...p.value];
    k.value && (t = t.filter((e) => N(e, k.value)));
    for (const e of g.value)
      t = t.filter((a) => K(a, e));
    return t;
  }), h = A(() => {
    const t = [...X.value];
    return t.sort((e, a) => {
      const o = U(e, j.value), n = U(a, j.value);
      if (o == null && n == null) return 0;
      if (o == null) return 1;
      if (n == null) return -1;
      let r = 0;
      return typeof o == "string" && typeof n == "string" ? r = o.localeCompare(n) : typeof o == "number" && typeof n == "number" ? r = o - n : r = String(o).localeCompare(String(n)), I.value === "asc" ? r : -r;
    }), t;
  }), fe = A(() => {
    if (c)
      return v.value;
    const t = P?.value?.itemsPerPage || 20, e = (d.value - 1) * t, a = e + t;
    return h.value.slice(e, a);
  }), m = A(() => {
    if (c)
      return D.value;
    const t = P?.value?.itemsPerPage || 20;
    return Math.ceil(h.value.length / t);
  }), oe = A(() => c ? M.value : h.value.length);
  function we(t, e, a = "select") {
    de(t), g.value.push({ field: t, value: e, type: a }), d.value = 1;
  }
  function de(t) {
    g.value = g.value.filter((e) => e.field !== t);
  }
  function Ce() {
    g.value = [], k.value = "", d.value = 1;
  }
  function xe(t, e) {
    j.value = t, e ? I.value = e : I.value = I.value === "asc" ? "desc" : "asc", d.value = 1;
  }
  function Pe(t) {
    k.value = t, d.value = 1;
  }
  function Ee(t) {
    t >= 1 && t <= m.value && (d.value = t, c && (v.value = [], W.value = !0, y()));
  }
  function O(t) {
    const e = z(t), a = f.value.indexOf(e);
    return a === -1 ? P?.value?.maxSelection && f.value.length >= P.value.maxSelection ? !1 : (f.value.push(e), ee(t, !0), !0) : (f.value.splice(a, 1), ee(t, !1), !1);
  }
  function Q(t) {
    return f.value.includes(z(t));
  }
  const Z = u(/* @__PURE__ */ new Map());
  function ee(t, e) {
    const a = z(t);
    e ? Z.value.set(a, t) : Z.value.delete(a);
  }
  const pe = A(() => c ? f.value.map((t) => Z.value.get(t)).filter((t) => t !== void 0) : p.value.filter((t) => Q(t)));
  function V() {
    f.value = [], Z.value.clear();
  }
  function ve(t) {
    const e = p.value.find((a) => a.db_id === t) || v.value.find((a) => a.db_id === t);
    return e ? (V(), f.value.push(z(e)), ee(e, !0), e) : null;
  }
  function De(t) {
    const {
      ...e
    } = t;
    return new _e(e, ae.value);
  }
  function Fe(t) {
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
      if (t === "brand" && l.value.brands)
        return l.value.brands;
      if (t === "type" && l.value.types)
        return l.value.types;
    }
    const e = c ? v.value : p.value;
    if (t === "color") {
      const o = /* @__PURE__ */ new Map();
      return e.forEach((n) => {
        const r = U(n, t);
        r != null && (typeof r == "object" && "hex" in r ? r.hex && !o.has(r.hex) && o.set(r.hex, r) : typeof r == "string" && r.trim() !== "" && (o.has(r) || o.set(r, r)));
      }), Array.from(o.values()).sort((n, r) => {
        const b = typeof n == "object" && "name" in n ? n.name : String(n), L = typeof r == "object" && "name" in r ? r.name : String(r);
        return b.localeCompare(L);
      });
    }
    const a = /* @__PURE__ */ new Set();
    return e.forEach((o) => {
      const n = U(o, t);
      n != null && !(typeof n == "string" && n.trim() === "") && a.add(n);
    }), Array.from(a).sort();
  }
  function Oe(t) {
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
    const a = (c ? v.value : p.value).map((o) => Number(U(o, t))).filter((o) => !isNaN(o));
    return a.length === 0 ? null : {
      min: Math.min(...a),
      max: Math.max(...a)
    };
  }
  function me() {
    if (c && l.value?.hasExtras)
      return l.value.hasExtras;
    const t = c ? v.value : p.value, e = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const a of t)
      if (a.extras?.banding && (e.banding = !0), a.extras?.finish && (e.finish = !0), a.extras?.planing && (e.planing = !0), a.extras?.machining && (e.machining = !0), e.banding && e.finish && e.planing && e.machining) break;
    return e;
  }
  function ge(t) {
    const e = /* @__PURE__ */ new Map();
    if (c && l.value?.counts) {
      const o = l.value.counts[t];
      if (o) {
        for (const [n, r] of Object.entries(o))
          e.set(n, r);
        return e;
      }
      return e;
    }
    let a = [...p.value];
    k.value && (a = a.filter((o) => N(o, k.value)));
    for (const o of g.value)
      o.field !== t && (a = a.filter((n) => K(n, o)));
    for (const o of a) {
      const n = U(o, t);
      if (n != null && !(typeof n == "string" && n.trim() === "")) {
        const r = typeof n == "object" && n !== null && "hex" in n ? n.hex : String(n);
        e.set(r, (e.get(r) || 0) + 1);
      }
    }
    return e;
  }
  const he = A(() => ({
    activeFilters: g.value,
    searchQuery: k.value,
    sortBy: j.value,
    sortOrder: I.value,
    displayMode: se.value,
    currentPage: d.value,
    selectedStockIds: f.value
  }));
  return {
    // State
    activeFilters: g,
    searchQuery: k,
    sortBy: j,
    sortOrder: I,
    displayMode: se,
    currentPage: d,
    selectedStockIds: f,
    // Server pagination state
    isLoading: W,
    serverMode: c,
    serverFilterOptions: l,
    // Computed
    filteredStock: X,
    sortedStock: h,
    paginatedStock: fe,
    selectedStock: pe,
    totalPages: m,
    totalItems: oe,
    currentState: he,
    // Methods
    applyFilter: we,
    removeFilter: de,
    clearFilters: Ce,
    updateSort: xe,
    updateSearch: Pe,
    goToPage: Ee,
    toggleStockSelection: O,
    isStockSelected: Q,
    clearSelection: V,
    selectById: ve,
    createInputStock: De,
    getUniqueValues: Fe,
    getFieldRange: Oe,
    getFilterOptionCounts: ge,
    getHasExtrasOptions: me,
    fetchServerStock: y
  };
}
const nt = B({
  name: i().trim(),
  price: i().trim().default("0"),
  options: _(i(), G(i()))
}), lt = _(i(), nt), it = B({
  name: i().trim(),
  options: _(
    i(),
    at([i(), G(i())])
  ).optional(),
  variations: lt.optional(),
  price: i().trim().default("0"),
  type: ue(["simple", "variable"]).optional()
}), Ne = _(i(), it);
B({
  env: i().default("production"),
  showDevInfo: x().default(!1),
  debug: x().default(!1),
  el: _(i(), H()).default({}),
  inputType: ue(["manual", "formula"]).default("manual"),
  settings: _(i(), H()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: _(i(), H()).default({}),
  formatting: _(i(), H()).default({}),
  product: _(i(), H()).default({}),
  stock: G(Xe).default([]),
  variations: G(H()).default([]),
  selectedVariation: _(i(), H()).default({}),
  machiningPricing: te().optional(),
  quantityPricing: x().default(!1),
  extrasData: B({
    banding: Ne,
    finish: Ne
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: i().url().optional().or(i().default("")),
  formulaSpec: i().default(""),
  hardwareResult: _(i(), te()).default({}),
  // HardwareResult type from formula.ts
  metadata: te().optional()
  // Metadata from optimize/main
});
const Be = B({
  source: s(ue(["inline", "url"]), {
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
  spec: te().optional(),
  // The formula specification object
  // Optional linkage back to a Model Library template. Set when the
  // admin loads a template via "Browse model templates…". Combined with
  // `sourceClean`, this lets the server overlay the LIVE template spec
  // at fetch-time so curator improvements automatically flow into
  // products that haven't been edited since load (snapshot defaults to
  // frozen; live-inheritance is opt-in via `sourceClean`).
  sourceKey: i().optional(),
  // Template version captured at load time. Used by the editor to
  // detect drift ("template advanced to vN, you're on vM").
  sourceVersion: C().int().optional(),
  // True when the spec hasn't been edited since the template was loaded
  // — the server overlay swaps in `template.formula` / `template.assembly`
  // at fetch time. Any explicit spec edit flips this to false so the
  // admin's local changes aren't silently stomped by a curator update.
  sourceClean: x().optional()
}), je = B({
  source: s(ue(["inline", "url"]).default("inline"), {
    label: "Source Type",
    info: "Inline JSON or load from a URL",
    order: 1
  }),
  url: s(i().url().optional(), {
    label: "Assembly Specification URL",
    placeholder: "https://example.com/assembly.json",
    info: "URL to a JSON assembly spec",
    order: 2
  }),
  spec: te().optional(),
  // The AssemblySpec object (validated at use time)
  // See formulaSpecSchema for the rationale on these three.
  // `sourceKey`/`sourceVersion` link the assembly back to a Model Library
  // template; `sourceClean` flips to false the first time the admin edits
  // the assembly so curator updates stop overlaying.
  sourceKey: i().optional(),
  sourceVersion: C().int().optional(),
  sourceClean: x().optional()
}), Me = B({
  price: s(C().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  discount: s(C().min(0).max(100).default(0), {
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
  trackInventory: s(x().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: s(C().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: s(x().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: s(C().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: s(x().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), Ve = ue(["formula", "simple", "bundle"]), $e = B({
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
  tags: s(G(i()).default([]), {
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
  images: s(G(i()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: s(C().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: s(C().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: s(Ve, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: Be.optional(),
  // Optional 3D layout — paired with formula products to drive the
  // ProductVisualiser preview on the storefront.
  assemblySpec: je.optional(),
  simpleConfig: Me.optional(),
  // Visibility & Status
  published: s(x().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  featured: s(x().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: s(C().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 15
  }),
  // Top-level material groups — lifted out of formulaSpec.spec so URL-
  // based formulas (which can't carry our extension on the remote JSON)
  // can still have customer-pickable materials. Inline-spec products may
  // also use this location (preferred); legacy data nested under
  // formulaSpec.spec.materialGroups continues to be readable client-side.
  // Shape mirrors the `MaterialGroup` interface from FormulaCalculator.
  materialGroups: _(te()).optional(),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
}), qe = B({
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
  displayOrder: s(C().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: s(x().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: ke().optional(),
  updatedAt: ke().optional()
});
$e.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
$e.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
B({
  name: i().min(1, "Name is required").optional(),
  slug: i().optional(),
  description: i().optional(),
  shortDescription: i().optional(),
  category: i().optional(),
  tags: G(i()).optional(),
  imageUrl: i().optional(),
  cost: C().min(0, "Cost cannot be negative").optional(),
  discount: C().min(0).max(100).optional(),
  type: Ve.optional(),
  formulaSpec: Be.partial().optional(),
  assemblySpec: je.partial().optional(),
  simpleConfig: Me.partial().optional(),
  published: x().optional(),
  featured: x().optional(),
  displayOrder: C().int().optional()
});
qe.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
qe.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
const ut = {
  key: 2,
  class: "selected-product-header"
}, st = { class: "selected-product-info" }, ct = { key: 0 }, ft = /* @__PURE__ */ Je({
  __name: "Vanilla",
  emits: ["ready"],
  setup(S, { expose: p, emit: P }) {
    const R = le(() => import("./Catalogue-lKFgJna5.js")), ae = le(() => import("./Configurator-DS7QdehL.js")), E = le(() => import("./ProductBrowser-DWiJe32S.js")), g = le(() => import("./Notices-D3BnaiQW.js")), k = le(() => import("./OrderLookup-EkKvCLvH.js")), j = P, I = "production", se = "4.2.0", d = u(!1), f = u([]), c = u({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), W = A(() => f.value.map((e) => {
      if (e instanceof _e) return e;
      const { issues: a, ...o } = e, n = Array.isArray(a) ? a : [];
      return new _e({ ...o, issues: n });
    })), v = u("USD"), D = u("en-US"), M = u("metric"), l = u("manual"), F = u(""), w = He(null), ce = u(null), y = u(), J = u(!1), U = u([]), Y = u(Ie()), K = u(!1), N = u(!1), X = u(!0), h = u(null), fe = u("calculator"), m = u(null), oe = u(null), { inventoryChanged: we, start: de, acknowledge: Ce } = rt(), xe = A(() => N.value && !h.value || N.value && h.value?.type === "simple" || !(l.value === "manual" || l.value === "formula" && (F.value || w.value)) ? !1 : J.value ? f.value.length > 0 : !0), Pe = A(() => {
      if (!(!K.value || !m.value))
        return {
          enabled: !0,
          apiUrl: m.value.baseUrl,
          orgSlug: m.value.orgSlug,
          isCustomDomain: m.value.isCustomDomain
        };
    }), Ee = A(() => m.value ? {
      apiUrl: m.value.baseUrl,
      orgSlug: m.value.orgSlug,
      isCustomDomain: m.value.isCustomDomain
    } : null);
    Ye("calculator", () => y.value);
    const O = (e) => {
      d.value && console.log("SmartCut -", ...e);
    }, Q = (e) => {
      console.error(`SmartCut - ${e}`);
    }, Z = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, ee = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, pe = (e) => {
      ce.value = e;
    }, V = (e = 0, a = D.value) => {
      if (e === !0) return "";
      try {
        a = a.replace("_", "-");
        const o = Number(e);
        return !o && o !== 0 ? "" : isNaN(o) ? (console.error("formatPrice - invalid price:", e), "") : o.toLocaleString(a, {
          style: "currency",
          currency: v.value
        });
      } catch (o) {
        return console.error("Error formatting price:", o), "";
      }
    }, ve = (e, a) => {
      if (!c.value?.[e]) return null;
      const n = a.filter((b) => b && b.trim() !== "").join("|"), r = T(c.value, [e, n]);
      return typeof r == "number" ? r : parseFloat(r);
    }, De = (e) => {
      if (e.length === 0) return;
      const a = e.map((b) => {
        const L = b.toData();
        return L.autoAdd = !0, L;
      }), o = [...f.value, ...a], n = [], r = /* @__PURE__ */ new Set();
      for (const b of o) {
        const L = z(b);
        r.has(L) || (r.add(L), n.push(b));
      }
      f.value = n, O(["Stock added. Total stocks:", f.value.length]), y.value && Se(() => {
        y.value.initMaterialsThicknesses({ stock: f.value });
      });
    }, Fe = () => {
      const e = new CustomEvent("smartcut/selection-confirmed");
      window.dispatchEvent(e), Se(() => {
        const a = y.value?.$el;
        a && a.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, Oe = (e) => {
      const a = z(e);
      f.value = f.value.filter((o) => z(o) !== a), O(["Stock removed. Total stocks:", f.value.length]), y.value && Se(() => {
        y.value.initMaterialsThicknesses({ stock: f.value });
      });
    }, me = (e) => {
      if (h.value = e, O(["Product selected:", e.name, e.type]), e.type === "formula" && e.formulaSpec)
        l.value = "formula", F.value = e.formulaSpec.url ?? "", w.value = e.formulaSpec.spec ?? null, O(["Formula product - loading spec"]);
      else if (e.type === "simple") {
        l.value = "manual", O(["Simple product selected"]);
        const a = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(e)),
            type: "simple"
          }
        });
        window.dispatchEvent(a);
      }
    }, ge = () => {
      h.value = null, l.value === "formula" && (F.value = "", w.value = null, l.value = "manual");
    }, he = (e) => {
      et(e), e.api && (m.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (J.value = !0, K.value = e.stockFilter.serverMode || !1, U.value = K.value ? [] : (e.stock || []).map((o) => ({ ...o })), Y.value = e.stockFilter.config || Ie(), f.value = [], O(["Stock filter enabled", K.value ? "(server mode)" : `with ${U.value.length} available options`])) : (J.value = !1, f.value = e.stock), e.products?.enabled ? (N.value = !0, X.value = e.products.showCategories !== !1, O(["Product browser enabled", X.value ? "with categories" : "without categories"])) : N.value = !1, c.value.banding = T(e, ["banding", "pricing"]), c.value.finish = T(e, ["finish", "pricing"]), c.value.planing = T(e, ["planing", "pricing"]), c.value.machining = T(e, ["machining", "pricing"]), q(e, ["options", "currency"]) && (v.value = T(e, ["options", "currency"])), q(e, ["options", "locale"]) && (D.value = T(e, ["options", "locale"]).replace("_", "-")), q(e, ["options", "unitSystem"]) && (M.value = T(e, ["options", "unitSystem"])), q(e, ["config", "configurator", "enabled"]) && e.config.configurator.enabled ? (l.value = "formula", F.value = e.config.configurator.url ?? null, w.value = e.config.configurator.spec ?? null) : (q(e, ["options", "formula", "url"]) || q(e, ["options", "formula", "spec"])) && (l.value = "formula", F.value = T(e, ["options", "formula", "url"]) ?? null, w.value = T(e, ["options", "formula", "spec"]) ?? null), (T(e, ["options", "enable", "debug"]) ?? T(e, ["options", "debug"])) && (d.value = !0), e.api?.wsServer && e.api?.orgId && de(e.api.wsServer, e.api.orgId), Se(() => {
        if (y.value) {
          const o = {
            ...e,
            stock: f.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: J.value
          };
          y.value.init(o);
        }
      });
    }, t = (e) => {
      const a = e;
      if (a.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, e?.metadata?.totalStockCost && (a.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        D.value,
        {
          style: "currency",
          currency: v.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [n, r] of Object.entries(e.metadata.bandingLengthByType)) {
          if (!q(c.value, ["banding", n])) {
            Q(`Banding price ${n} not found`);
            continue;
          }
          a.checkout.formattedBandingCost[n] = (r / 1e3 * c.value.banding[n]).toLocaleString(D.value, { style: "currency", currency: v.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [n, r] of Object.entries(e.metadata.finishAreaByType)) {
          if (!q(c.value, ["finish", n])) {
            Q(`Finish price ${n} not found`);
            continue;
          }
          a.checkout.formattedFinishCost[n] = (r / 1e6 * c.value.finish[n]).toLocaleString(D.value, { style: "currency", currency: v.value });
        }
      const o = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(a))
      });
      window.dispatchEvent(o);
    };
    return Le(we, (e) => {
      e && (window.dispatchEvent(new CustomEvent("smartcut/inventoryUpdated")), Ce());
    }), Ke(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + se} [${I}]`);
      const e = new URLSearchParams(window.location.search);
      d.value = !!e.has("debug");
      const a = e.get("view");
      (a === "track-order" || a === "order-lookup") && (fe.value = "order-lookup");
      const o = e.get("product");
      o && (oe.value = o, O(["Deep link to product:", o])), d.value && console.log("Smartcut - debug enabled");
    }), Qe(() => {
      window.smartcutCheckout = { init: he }, j("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), p({
      init: he,
      debug: d,
      stock: f,
      pricing: c,
      currency: v,
      locale: D,
      unitSystem: M,
      inputType: l,
      formulaURL: F,
      formulaSpec: w,
      hardWareResult: ce,
      // Product state
      productsEnabled: N,
      selectedProduct: h,
      selectProduct: me,
      clearProduct: ge,
      // Methods
      log: O,
      error: Q,
      calculating: ee,
      result: t,
      formatPrice: V,
      findExtrasPrice: ve,
      setHardwareResult: pe
    }), (e, a) => ($(), ye(Ue, null, [
      Re(ne(g), { position: "top-left" }),
      fe.value === "order-lookup" && m.value ? ($(), be(ne(k), {
        key: 0,
        "api-base-url": m.value.baseUrl,
        "org-slug": m.value.orgSlug,
        "is-custom-domain": m.value.isCustomDomain,
        "format-price": V,
        locale: D.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : ($(), ye(Ue, { key: 1 }, [
        N.value && !h.value ? ($(), be(ne(E), {
          key: 0,
          config: Ee.value,
          "show-categories": X.value,
          "initial-product-id": oe.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: me
        }, null, 8, ["config", "show-categories", "initial-product-id"])) : ie("", !0),
        J.value && !N.value ? ($(), be(ne(R), {
          key: 1,
          "stock-options": U.value,
          config: Y.value,
          "format-price": V,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: D.value,
          "unit-system": M.value,
          "initial-product-id": oe.value,
          "server-pagination": Pe.value,
          "show-selection-bar": !1,
          debug: d.value,
          onStockAdded: De,
          onStockRemoved: Oe,
          onSelectionConfirmed: Fe
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "debug"])) : ie("", !0),
        h.value ? ($(), ye("div", ut, [
          Te("div", st, [
            Te("h3", null, Ae(h.value.name), 1),
            h.value.shortDescription ? ($(), ye("p", ct, Ae(h.value.shortDescription), 1)) : ie("", !0)
          ]),
          Te("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: ge
          }, " Change Product ")
        ])) : ie("", !0),
        l.value === "formula" && (F.value || w.value) ? ($(), be(ne(ae), {
          key: 3,
          ref: "configurator",
          "format-price": V,
          url: F.value,
          spec: w.value,
          debug: d.value,
          onHardwareResult: pe
        }, null, 8, ["url", "spec", "debug"])) : ie("", !0),
        ze(Re(Ze, {
          ref_key: "calculator",
          ref: y,
          readonly: l.value === "formula",
          "input-stock": W.value,
          "input-type": l.value,
          "find-extras-price": ve,
          "format-price": V,
          debug: d.value,
          onLog: O,
          onError: Q,
          onCalculating: ee,
          onValidationError: Z,
          onResult: t
        }, null, 8, ["readonly", "input-stock", "input-type", "debug"]), [
          [Ge, xe.value]
        ])
      ], 64))
    ], 64));
  }
}), dt = /* @__PURE__ */ ot(ft, [["__scopeId", "data-v-47dda2b7"]]), St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: dt }, Symbol.toStringTag, { value: "Module" }));
export {
  yt as S,
  St as V,
  z as g,
  bt as u
};
