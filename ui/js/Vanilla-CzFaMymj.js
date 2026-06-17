import { M as Ke, s, k as Me, x as j, d as Ge, S as ze, l as Ye, o as K, c as be, m as Ne, u as se, j as Se, F as Ie, b as ue, a as Fe, t as Ue, h as Xe, v as Ze, B as ce, Q as et, H as ke, R as tt } from "./vendor-vue-DcIxm_xE.js";
import { a0 as Re, a6 as at, a7 as u } from "./InputUserGroup-BS7MVA1o.js";
import { n as Be, j as nt, q as rt, g as x, k as re, l as ot, p as Le } from "./EcommerceCalculator-xTmaI3ss.js";
import { c as it, a as lt } from "./bandingAxesCache-DMR2pLrK.js";
import { x as st, o as J, i as N, q as Z, h as i, k as fe, u as ut, l as oe, j as F, y as Y, n as D, A as Ce } from "./vendor-C76etQCp.js";
import { _ as ct } from "./Launch-CoGHL0vS.js";
function we(h, p, P) {
  if (!h) return null;
  const w = h[p], M = w?.pricing, y = w?.groupPricing, m = w?.defaultPrice, g = h[`${p}Pricing`];
  if (!M && !y && !g && m === void 0) return null;
  const b = P.filter((W) => !!W && typeof W == "string" && W.trim() !== "").join("|");
  return y && y[b] !== void 0 ? y[b] : M && M[b] !== void 0 ? M[b] : g && g[b] !== void 0 ? g[b] : typeof m == "number" ? m : null;
}
function ft() {
  const h = s(!1);
  let p = null;
  function P(y, m) {
    p || !m || !y || (p = st(`${y}/ecommerce`, {
      withCredentials: !0,
      autoConnect: !1
    }), p.on("connect", () => {
      p?.emit("join", m);
    }), p.on("inventory-changed", () => {
      h.value = !0;
    }), p.connect());
  }
  function w() {
    p && (p.disconnect(), p = null);
  }
  function M() {
    h.value = !1;
  }
  return Ke(w), {
    inventoryChanged: h,
    start: P,
    stop: w,
    acknowledge: M
  };
}
function X(h) {
  return h.db_id ? h.db_id : `${h.material}-${h.l}-${h.w}-${h.t}`;
}
const _t = "stock-filter-selections";
function Tt(h) {
  const {
    stockOptions: p,
    config: P,
    initialState: w,
    numberFormat: M = s("decimal"),
    serverPagination: y
  } = h, m = s(w?.activeFilters || []), g = s(w?.searchQuery || ""), V = s(w?.sortBy || P?.value?.defaultSort.field || "cost"), b = s(w?.sortOrder || P?.value?.defaultSort.order || "asc"), W = s(w?.displayMode || P?.value?.displayMode || "grid"), v = s(w?.currentPage || 1), c = s([]), f = y?.enabled || !1, I = s(!1), U = s([]), B = s(1), E = s(0), l = s(null);
  let S = null, A = null;
  function $() {
    if (!y) return "";
    const { apiUrl: t, orgSlug: e, isCustomDomain: a } = y;
    return a ? `${t}ecommerce/stock` : `${t}ecommerce/${e}/stock`;
  }
  async function G() {
    if (!f || !y) return;
    A?.abort();
    const t = new AbortController();
    A = t, I.value = !0;
    try {
      const e = new URL($());
      e.searchParams.set("page", String(v.value)), e.searchParams.set("limit", String(P?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", V.value), e.searchParams.set("sortOrder", b.value), e.searchParams.set("groupByThickness", "true"), g.value.trim() && e.searchParams.set("search", g.value.trim());
      const a = {};
      for (const o of m.value)
        if (o.type === "select" || o.type === "multiselect")
          a[o.field] = o.value;
        else if (o.type === "range" && o.value) {
          const { min: d, max: T } = o.value;
          let L;
          o.field === "l" ? L = "Length" : o.field === "w" ? L = "Width" : L = o.field.charAt(0).toUpperCase() + o.field.slice(1), d !== void 0 && (a[`min${L}`] = d), T !== void 0 && (a[`max${L}`] = T);
        } else if (o.type === "boolean" && o.field.startsWith("hasExtras.")) {
          const d = o.field.replace("hasExtras.", "");
          a.hasExtras || (a.hasExtras = {}), a.hasExtras[d] = o.value;
        }
      Object.keys(a).length > 0 && e.searchParams.set("filters", JSON.stringify(a)), y?.rule?.predicates?.length && e.searchParams.set("rule", JSON.stringify(y.rule));
      const n = await fetch(e.toString(), {
        credentials: "include",
        signal: t.signal
      });
      if (!n.ok)
        throw new Error(`Server returned ${n.status}`);
      const r = await n.json();
      if (t.signal.aborted) return;
      U.value = r.items || [], B.value = r.pagination?.totalPages || 1, E.value = r.pagination?.total || 0, r.filterOptions && v.value === 1 && (l.value = r.filterOptions);
    } catch (e) {
      if (e?.name === "AbortError") return;
      console.error("[useStockFilter] Server fetch error:", e), U.value = [], B.value = 1, E.value = 0;
    } finally {
      A === t && (A = null, I.value = !1);
    }
  }
  function _() {
    f && (U.value = [], E.value = 0, I.value = !0, S && clearTimeout(S), S = setTimeout(() => {
      G();
    }, y?.debounceMs || 300));
  }
  f && (Me([g, m, V, b], () => {
    v.value = 1, _();
  }, { deep: !0 }), G());
  function O(t, e) {
    return e.split(".").reduce((a, n) => a?.[n], t);
  }
  function z(t, e) {
    return typeof t == "object" && t !== null && typeof e == "object" && e !== null && "hex" in t && "hex" in e ? t.hex === e.hex : t === e;
  }
  function ie(t, e) {
    const a = O(t, e.field);
    switch (e.type) {
      case "select":
        return z(a, e.value);
      case "multiselect":
        return Array.isArray(e.value) ? e.value.some((n) => z(a, n)) : z(a, e.value);
      case "range":
        if (e.value && typeof e.value == "object") {
          const { min: n, max: r } = e.value, o = Number(a);
          return !(isNaN(o) || n !== void 0 && o < n || r !== void 0 && o > r);
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
  function ee(t) {
    if (t && typeof t == "object" && "name" in t) {
      const e = t.name;
      return typeof e == "string" ? e : void 0;
    }
    return typeof t == "string" ? t : void 0;
  }
  function q(t, e) {
    if (!e.trim()) return !0;
    const a = e.toLowerCase().split(/\s+/).filter(Boolean), r = [
      t.name,
      t.material,
      t.code,
      t.description,
      t.category,
      t.variant,
      t.brand,
      t.finish,
      t.grain,
      ee(t.color),
      ...t.tags || []
    ].filter(Boolean).map((o) => String(o).toLowerCase()).join(" ");
    return a.every((o) => r.includes(o));
  }
  const te = j(() => {
    let t = [...p.value];
    g.value && (t = t.filter((e) => q(e, g.value)));
    for (const e of m.value)
      t = t.filter((a) => ie(a, e));
    return t;
  }), C = j(() => {
    const t = [...te.value];
    return t.sort((e, a) => {
      const n = O(e, V.value), r = O(a, V.value);
      if (n == null && r == null) return 0;
      if (n == null) return 1;
      if (r == null) return -1;
      let o = 0;
      return typeof n == "string" && typeof r == "string" ? o = n.localeCompare(r) : typeof n == "number" && typeof r == "number" ? o = n - r : o = String(n).localeCompare(String(r)), b.value === "asc" ? o : -o;
    }), t;
  }), pe = j(() => {
    if (f)
      return U.value;
    const t = P?.value?.itemsPerPage || 20, e = (v.value - 1) * t, a = e + t;
    return C.value.slice(e, a);
  }), k = j(() => {
    if (f)
      return B.value;
    const t = P?.value?.itemsPerPage || 20;
    return Math.ceil(C.value.length / t);
  }), le = j(() => f ? E.value : C.value.length);
  function xe(t, e, a = "select") {
    de(t), m.value.push({ field: t, value: e, type: a }), v.value = 1;
  }
  function de(t) {
    m.value = m.value.filter((e) => e.field !== t);
  }
  function Pe() {
    m.value = [], g.value = "", v.value = 1;
  }
  function Ee(t, e) {
    V.value = t, e ? b.value = e : b.value = b.value === "asc" ? "desc" : "asc", v.value = 1;
  }
  function _e(t) {
    g.value = t, v.value = 1;
  }
  function Te(t) {
    t >= 1 && t <= k.value && (v.value = t, f && (U.value = [], I.value = !0, G()));
  }
  function R(t) {
    const e = X(t), a = c.value.indexOf(e);
    return a === -1 ? P?.value?.maxSelection && c.value.length >= P.value.maxSelection ? !1 : (c.value.push(e), ne(t, !0), !0) : (c.value.splice(a, 1), ne(t, !1), !1);
  }
  function H(t) {
    return c.value.includes(X(t));
  }
  const ae = s(/* @__PURE__ */ new Map());
  function ne(t, e) {
    const a = X(t);
    e ? ae.value.set(a, t) : ae.value.delete(a);
  }
  const ve = j(() => f ? c.value.map((t) => ae.value.get(t)).filter((t) => t !== void 0) : p.value.filter((t) => H(t)));
  function Q() {
    c.value = [], ae.value.clear();
  }
  function me(t) {
    const e = p.value.find((a) => a.db_id === t) || U.value.find((a) => a.db_id === t);
    return e ? (Q(), c.value.push(X(e)), ne(e, !0), e) : null;
  }
  function Ae(t) {
    const {
      colorHex: e,
      name: a,
      description: n,
      category: r,
      finish: o,
      sample: d,
      urls: T,
      minQuantity: L,
      extras: St,
      ...Qe
    } = t;
    return new Re(Qe, M.value);
  }
  function Oe(t) {
    if (f && l.value) {
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
    const e = f ? U.value : p.value;
    if (t === "color") {
      const n = /* @__PURE__ */ new Map();
      return e.forEach((r) => {
        const o = O(r, t);
        o != null && (typeof o == "object" && "hex" in o ? o.hex && !n.has(o.hex) && n.set(o.hex, o) : typeof o == "string" && o.trim() !== "" && (n.has(o) || n.set(o, o)));
      }), Array.from(n.values()).sort((r, o) => {
        const d = typeof r == "object" && "name" in r ? r.name : String(r), T = typeof o == "object" && "name" in o ? o.name : String(o);
        return d.localeCompare(T);
      });
    }
    const a = /* @__PURE__ */ new Set();
    return e.forEach((n) => {
      const r = O(n, t);
      r != null && !(typeof r == "string" && r.trim() === "") && a.add(r);
    }), Array.from(a).sort();
  }
  function De(t) {
    if (f && l.value) {
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
    const a = (f ? U.value : p.value).map((n) => Number(O(n, t))).filter((n) => !isNaN(n));
    return a.length === 0 ? null : {
      min: Math.min(...a),
      max: Math.max(...a)
    };
  }
  function ge() {
    if (f && l.value?.hasExtras)
      return l.value.hasExtras;
    const t = f ? U.value : p.value, e = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const a of t)
      if (a.extras?.banding && (e.banding = !0), a.extras?.finish && (e.finish = !0), a.extras?.planing && (e.planing = !0), a.extras?.machining && (e.machining = !0), e.banding && e.finish && e.planing && e.machining) break;
    return e;
  }
  function he(t) {
    const e = /* @__PURE__ */ new Map();
    if (f && l.value?.counts) {
      const n = l.value.counts[t];
      if (n) {
        for (const [r, o] of Object.entries(n))
          e.set(r, o);
        return e;
      }
      return e;
    }
    let a = [...p.value];
    g.value && (a = a.filter((n) => q(n, g.value)));
    for (const n of m.value)
      n.field !== t && (a = a.filter((r) => ie(r, n)));
    for (const n of a) {
      const r = O(n, t);
      if (r != null && !(typeof r == "string" && r.trim() === "")) {
        const o = typeof r == "object" && r !== null && "hex" in r ? r.hex : String(r);
        e.set(o, (e.get(o) || 0) + 1);
      }
    }
    return e;
  }
  const ye = j(() => ({
    activeFilters: m.value,
    searchQuery: g.value,
    sortBy: V.value,
    sortOrder: b.value,
    displayMode: W.value,
    currentPage: v.value,
    selectedStockIds: c.value
  }));
  return {
    // State
    activeFilters: m,
    searchQuery: g,
    sortBy: V,
    sortOrder: b,
    displayMode: W,
    currentPage: v,
    selectedStockIds: c,
    // Server pagination state
    isLoading: I,
    serverMode: f,
    serverFilterOptions: l,
    // Computed
    filteredStock: te,
    sortedStock: C,
    paginatedStock: pe,
    selectedStock: ve,
    totalPages: k,
    totalItems: le,
    currentState: ye,
    // Methods
    applyFilter: xe,
    removeFilter: de,
    clearFilters: Pe,
    updateSort: Ee,
    updateSearch: _e,
    goToPage: Te,
    toggleStockSelection: R,
    isStockSelected: H,
    clearSelection: Q,
    selectById: me,
    createInputStock: Ae,
    getUniqueValues: Oe,
    getFieldRange: De,
    getFilterOptionCounts: he,
    getHasExtrasOptions: ge,
    fetchServerStock: G
  };
}
const pt = J({
  name: i().trim(),
  price: i().trim().default("0"),
  sku: i().trim().optional(),
  options: N(i(), Z(i()))
}), dt = N(i(), pt), vt = J({
  name: i().trim(),
  // Simple-product SKU, sent alongside `options` (whose key is SKU-or-slug).
  // Lets getExtrasData build a tuple→SKU `codes` entry so the cutlist CSV
  // shows the SKU first — mirroring the per-variation `sku` above. Variable
  // products carry their SKUs on each variation instead.
  sku: i().trim().optional(),
  options: N(
    i(),
    ut([i(), Z(i())])
  ).optional(),
  variations: dt.optional(),
  price: i().trim().default("0"),
  type: fe(["simple", "variable"]).optional()
}), je = N(i(), vt);
J({
  env: i().default("production"),
  showDevInfo: F().default(!1),
  debug: F().default(!1),
  el: N(i(), Y()).default({}),
  inputType: fe(["manual", "formula"]).default("manual"),
  settings: N(i(), Y()).default({}),
  // Note: HTMLInputElement cannot be validated with Zod, using unknown
  inputs: N(i(), Y()).default({}),
  formatting: N(i(), Y()).default({}),
  product: N(i(), Y()).default({}),
  stock: Z(at).default([]),
  variations: Z(Y()).default([]),
  selectedVariation: N(i(), Y()).default({}),
  machiningPricing: oe().optional(),
  quantityPricing: F().default(!1),
  extrasData: J({
    banding: je,
    finish: je
  }).default({
    banding: {},
    finish: {}
  }),
  formulaURL: i().url().optional().or(i().default("")),
  formulaSpec: i().default(""),
  hardwareResult: N(i(), oe()).default({}),
  // HardwareResult type from formula.ts
  metadata: oe().optional()
  // Metadata from optimize/main
});
const Ve = J({
  source: u(fe(["inline", "url"]), {
    label: "Source Type",
    info: "Choose whether to enter the formula specification inline or load it from an external URL",
    order: 1
  }),
  url: u(i().url().optional(), {
    label: "Formula Specification URL",
    placeholder: "https://example.com/formula.json",
    info: "URL to a JSON file containing the formula specification",
    order: 2
  }),
  spec: oe().optional(),
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
  sourceVersion: D().int().optional(),
  // True when the spec hasn't been edited since the template was loaded
  // — the server overlay swaps in `template.formula` / `template.assembly`
  // at fetch time. Any explicit spec edit flips this to false so the
  // admin's local changes aren't silently stomped by a curator update.
  sourceClean: F().optional()
}), $e = J({
  source: u(fe(["inline", "url"]).default("inline"), {
    label: "Source Type",
    info: "Inline JSON or load from a URL",
    order: 1
  }),
  url: u(i().url().optional(), {
    label: "Assembly Specification URL",
    placeholder: "https://example.com/assembly.json",
    info: "URL to a JSON assembly spec",
    order: 2
  }),
  spec: oe().optional(),
  // The AssemblySpec object (validated at use time)
  // See formulaSpecSchema for the rationale on these three.
  // `sourceKey`/`sourceVersion` link the assembly back to a Model Library
  // template; `sourceClean` flips to false the first time the admin edits
  // the assembly so curator updates stop overlaying.
  sourceKey: i().optional(),
  sourceVersion: D().int().optional(),
  sourceClean: F().optional()
}), qe = J({
  price: u(D().min(0), {
    label: "Price",
    info: "Fixed price for this product",
    type: "float",
    required: !0,
    order: 1
  }),
  discount: u(D().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 2
  }),
  code: u(i().optional(), {
    label: "Code/SKU",
    placeholder: "PROD-001",
    info: "Internal material or product code",
    order: 3
  }),
  trackInventory: u(F().default(!1), {
    label: "Track Inventory",
    info: "Whether to track stock levels",
    type: "checkbox",
    order: 4
  }),
  quantity: u(D().int().min(0).default(0), {
    label: "Quantity",
    info: "Available quantity (if tracking)",
    type: "integer",
    order: 5
  }),
  unlimitedQuantity: u(F().default(!0), {
    label: "Unlimited Quantity",
    info: "Never runs out of stock",
    type: "checkbox",
    order: 6
  }),
  weight: u(D().min(0).optional(), {
    label: "Weight",
    info: "Weight for shipping calculations (in kg)",
    type: "float",
    order: 7
  }),
  requiresShipping: u(F().default(!0), {
    label: "Requires Shipping",
    info: "Physical product that needs shipping",
    type: "checkbox",
    order: 8
  })
}), Je = fe(["formula", "simple", "bundle"]), We = J({
  _id: i().optional(),
  // Basic info
  name: u(i().min(1), {
    label: "Product Name",
    placeholder: "Enter product name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: u(i().optional(), {
    label: "URL Slug",
    placeholder: "product-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: u(i().optional(), {
    label: "Description",
    placeholder: "Full product description...",
    info: "Detailed product description",
    type: "textarea",
    order: 3
  }),
  shortDescription: u(i().optional(), {
    label: "Short Description",
    placeholder: "Brief summary...",
    info: "Short summary shown in product cards",
    order: 4
  }),
  // Categorization
  category: u(i().optional(), {
    label: "Category",
    info: "Product category for filtering",
    type: "select",
    order: 5
  }),
  tags: u(Z(i()).default([]), {
    label: "Tags",
    info: "Tags for search and filtering",
    order: 6
  }),
  // Media
  imageUrl: u(i().url().optional(), {
    label: "Product Image",
    placeholder: "https://example.com/image.jpg",
    info: "Main product image URL",
    order: 7
  }),
  images: u(Z(i()).default([]), {
    label: "Gallery Images",
    info: "Additional product images",
    order: 8
  }),
  // Pricing (applies to all product types as base/display price)
  cost: u(D().min(0).default(0), {
    label: "Base Price",
    info: "Base price for this product (used for display and catalog)",
    type: "float",
    order: 9
  }),
  discount: u(D().min(0).max(100).default(0), {
    label: "Discount %",
    info: "Discount percentage (0-100)",
    type: "float",
    order: 10
  }),
  // Product type
  type: u(Je, {
    label: "Product Type",
    info: "Type of product: formula (calculated), simple (fixed price), or bundle",
    type: "select",
    required: !0,
    order: 11
  }),
  // Type-specific config
  formulaSpec: Ve.optional(),
  // Optional 3D layout — paired with formula products to drive the
  // ProductVisualiser preview on the storefront.
  assemblySpec: $e.optional(),
  simpleConfig: qe.optional(),
  // Visibility & Status
  published: u(F().default(!1), {
    label: "Published",
    info: "Whether this product is visible",
    type: "checkbox",
    order: 12
  }),
  featured: u(F().default(!1), {
    label: "Featured",
    info: "Highlight in catalog",
    type: "checkbox",
    order: 14
  }),
  displayOrder: u(D().int().default(0), {
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
  materialGroups: N(i(), oe()).optional(),
  // Timestamps (read-only)
  createdAt: Ce().optional(),
  updatedAt: Ce().optional()
}), He = J({
  _id: i().optional(),
  name: u(i().min(1), {
    label: "Category Name",
    placeholder: "Enter category name",
    info: "Name displayed to customers",
    required: !0,
    order: 1
  }),
  slug: u(i().optional(), {
    label: "URL Slug",
    placeholder: "category-name",
    info: "URL-friendly identifier (auto-generated from name if empty)",
    order: 2
  }),
  description: u(i().optional(), {
    label: "Description",
    placeholder: "Category description...",
    info: "Brief description of this category",
    type: "textarea",
    order: 3
  }),
  imageUrl: u(i().url().optional(), {
    label: "Category Image",
    placeholder: "https://example.com/image.jpg",
    info: "Image representing this category",
    order: 4
  }),
  displayOrder: u(D().int().default(0), {
    label: "Display Order",
    info: "Manual ordering (lower numbers appear first)",
    type: "integer",
    order: 5
  }),
  published: u(F().default(!0), {
    label: "Published",
    info: "Whether this category is visible",
    type: "checkbox",
    order: 6
  }),
  // Timestamps (read-only)
  createdAt: Ce().optional(),
  updatedAt: Ce().optional()
});
We.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
We.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
J({
  name: i().min(1, "Name is required").optional(),
  slug: i().optional(),
  description: i().optional(),
  shortDescription: i().optional(),
  category: i().optional(),
  tags: Z(i()).optional(),
  imageUrl: i().optional(),
  cost: D().min(0, "Cost cannot be negative").optional(),
  discount: D().min(0).max(100).optional(),
  type: Je.optional(),
  formulaSpec: Ve.partial().optional(),
  assemblySpec: $e.partial().optional(),
  simpleConfig: qe.partial().optional(),
  published: F().optional(),
  featured: F().optional(),
  displayOrder: D().int().optional()
});
He.omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
He.partial().omit({
  _id: !0,
  createdAt: !0,
  updatedAt: !0
});
const mt = {
  key: 2,
  class: "selected-product-header"
}, gt = { class: "selected-product-info" }, ht = { key: 0 }, yt = /* @__PURE__ */ Ge({
  __name: "Vanilla",
  emits: ["ready"],
  setup(h, { expose: p, emit: P }) {
    const w = ce(() => import("./Catalogue-D0dnui6V.js")), M = ce(() => import("./Configurator-itodiJUj.js")), y = ce(() => import("./ProductBrowser-BigBN1uw.js")), m = ce(() => import("./Notices-C3VzDfM4.js")), g = ce(() => import("./OrderLookup-Ce8Ld67A.js")), V = P, b = "production", W = "4.3.2", v = s(!1), c = s([]), f = s({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), I = s({}), U = j(() => c.value.map((e) => {
      if (e instanceof Re) return e;
      const { issues: a, ...n } = e, r = Array.isArray(a) ? a : [];
      return new Re({ ...n, issues: r });
    })), B = s("USD"), E = s("en-US"), l = s("metric"), S = s("manual"), A = s(""), $ = et(null), G = s(null), _ = s(), O = s(!1), z = s([]), ie = s(Be()), ee = s(!1), q = s(!1), te = s(!0), C = s(null), pe = s("calculator"), k = s(null), le = s(null), { inventoryChanged: xe, start: de, acknowledge: Pe } = ft(), Ee = j(() => q.value && !C.value || q.value && C.value?.type === "simple" || !(S.value === "manual" || S.value === "formula" && (A.value || $.value)) ? !1 : O.value ? c.value.length > 0 : !0), _e = j(() => {
      if (!(!ee.value || !k.value))
        return {
          enabled: !0,
          apiUrl: k.value.baseUrl,
          orgSlug: k.value.orgSlug,
          isCustomDomain: k.value.isCustomDomain
        };
    }), Te = j(() => k.value ? {
      apiUrl: k.value.baseUrl,
      orgSlug: k.value.orgSlug,
      isCustomDomain: k.value.isCustomDomain
    } : null);
    tt("calculator", () => _.value);
    const R = (e) => {
      v.value && console.log("SmartCut -", ...e);
    }, H = (e) => {
      console.error(`SmartCut - ${e}`);
    }, ae = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, ne = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, ve = (e) => {
      G.value = e;
    }, Q = (e = 0, a = E.value) => {
      if (e === !0) return "";
      try {
        a = a.replace("_", "-");
        const n = Number(e);
        return !n && n !== 0 ? "" : isNaN(n) ? (console.error("formatPrice - invalid price:", e), "") : n.toLocaleString(a, {
          style: "currency",
          currency: B.value
        });
      } catch (n) {
        return console.error("Error formatting price:", n), "";
      }
    }, me = (e, a) => (
      // Resolve groupPricing → pricing → legacy → defaultPrice, matching the
      // DB-backed storefront. (No groupPricing/defaultPrice in the config ⇒
      // falls through to the flat pricing map, i.e. the previous behaviour.)
      we(I.value, e, a)
    ), Ae = (e) => {
      if (e.length === 0) return;
      const a = e.map((d) => {
        const T = d.toData();
        return T.autoAdd = !0, T;
      }), n = [...c.value, ...a], r = [], o = /* @__PURE__ */ new Set();
      for (const d of n) {
        const T = X(d);
        o.has(T) || (o.add(T), r.push(d));
      }
      c.value = r, R(["Stock added. Total stocks:", c.value.length]), _.value && ke(() => {
        _.value.initMaterialsThicknesses({ stock: c.value });
      });
    }, Oe = () => {
      const e = new CustomEvent("smartcut/selection-confirmed");
      window.dispatchEvent(e), ke(() => {
        const a = _.value?.$el;
        a && a.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, De = (e) => {
      const a = X(e);
      c.value = c.value.filter((n) => X(n) !== a), R(["Stock removed. Total stocks:", c.value.length]), _.value && ke(() => {
        _.value.initMaterialsThicknesses({ stock: c.value });
      });
    }, ge = (e) => {
      if (C.value = e, R(["Product selected:", e.name, e.type]), e.type === "formula" && e.formulaSpec)
        S.value = "formula", A.value = e.formulaSpec.url ?? "", $.value = e.formulaSpec.spec ?? null, R(["Formula product - loading spec"]);
      else if (e.type === "simple") {
        S.value = "manual", R(["Simple product selected"]);
        const a = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(e)),
            type: "simple"
          }
        });
        window.dispatchEvent(a);
      }
    }, he = () => {
      C.value = null, S.value === "formula" && (A.value = "", $.value = null, S.value = "manual");
    }, ye = (e) => {
      rt(e), e.api && (k.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (O.value = !0, ee.value = e.stockFilter.serverMode || !1, z.value = ee.value ? [] : (e.stock || []).map((n) => ({ ...n })), ie.value = e.stockFilter.config || Be(), c.value = [], R(["Stock filter enabled", ee.value ? "(server mode)" : `with ${z.value.length} available options`])) : (O.value = !1, c.value = e.stock), e.products?.enabled ? (q.value = !0, te.value = e.products.showCategories !== !1, R(["Product browser enabled", te.value ? "with categories" : "without categories"])) : q.value = !1, f.value.banding = x(e, ["banding", "pricing"]), f.value.finish = x(e, ["finish", "pricing"]), f.value.planing = x(e, ["planing", "pricing"]), f.value.machining = x(e, ["machining", "pricing"]), I.value = {
        banding: x(e, ["banding"]) ?? null,
        finish: x(e, ["finish"]) ?? null,
        planing: x(e, ["planing"]) ?? null,
        machining: x(e, ["machining"]) ?? null
      }, re(e, ["options", "currency"]) && (B.value = x(e, ["options", "currency"])), re(e, ["options", "locale"]) && (E.value = x(e, ["options", "locale"]).replace("_", "-")), re(e, ["options", "unitSystem"]) && (l.value = x(e, ["options", "unitSystem"])), re(e, ["config", "configurator", "enabled"]) && e.config.configurator.enabled ? (S.value = "formula", A.value = e.config.configurator.url ?? null, $.value = e.config.configurator.spec ?? null) : (re(e, ["options", "formula", "url"]) || re(e, ["options", "formula", "spec"])) && (S.value = "formula", A.value = x(e, ["options", "formula", "url"]) ?? null, $.value = x(e, ["options", "formula", "spec"]) ?? null), (x(e, ["options", "enable", "debug"]) ?? x(e, ["options", "debug"])) && (v.value = !0), e.api?.wsServer && e.api?.orgId && de(e.api.wsServer, e.api.orgId), ke(() => {
        if (_.value) {
          const n = {
            ...e,
            stock: c.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: O.value
          };
          _.value.init(n);
        }
      });
    }, t = (e) => {
      const a = e;
      if (a.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {},
        formattedPlaningCost: {}
      }, e?.metadata?.totalStockCost && (a.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        E.value,
        {
          style: "currency",
          currency: B.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [r, o] of Object.entries(e.metadata.bandingLengthByType)) {
          const d = we(I.value, "banding", r.split("|"));
          if (d === null) {
            H(`Banding price ${r} not found`);
            continue;
          }
          a.checkout.formattedBandingCost[r] = ot(d, Number(o)).toLocaleString(E.value, { style: "currency", currency: B.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [r, o] of Object.entries(e.metadata.finishAreaByType)) {
          const d = we(I.value, "finish", r.split("|"));
          if (d === null) {
            H(`Finish price ${r} not found`);
            continue;
          }
          a.checkout.formattedFinishCost[r] = Le(d, Number(o)).toLocaleString(E.value, { style: "currency", currency: B.value });
        }
      if (e?.metadata?.planingAreaByType)
        for (const [r, o] of Object.entries(e.metadata.planingAreaByType)) {
          const d = we(I.value, "planing", r.split("|"));
          if (d === null) {
            H(`Planing price ${r} not found`);
            continue;
          }
          a.checkout.formattedPlaningCost[r] = Le(d, Number(o)).toLocaleString(E.value, { style: "currency", currency: B.value });
        }
      const n = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(a))
      });
      window.dispatchEvent(n);
    };
    return Me(xe, (e) => {
      e && (it(), lt(), window.dispatchEvent(new CustomEvent("smartcut/inventoryUpdated")), Pe());
    }), ze(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + W} [${b}]`);
      const e = new URLSearchParams(window.location.search);
      v.value = !!e.has("debug");
      const a = e.get("view");
      (a === "track-order" || a === "order-lookup") && (pe.value = "order-lookup");
      const n = e.get("product");
      n && (le.value = n, R(["Deep link to product:", n])), v.value && console.log("Smartcut - debug enabled");
    }), Ye(() => {
      window.smartcutCheckout = {
        init: ye,
        // Test-only hooks. The vanilla page is a dev/test entry — no
        // production build ships from here — so it's safe to surface
        // these without a feature flag. Playwright specs in
        // `browser-tests/ecommerce/extras-*.spec.ts` use these to
        // inspect/seed per-shape state without driving the full UI
        // for every per-side selection.
        // defineExpose unwraps refs on the public instance, so
        // `calculator.value.inputShapes` IS the array (not Ref<array>).
        getInputShapes: () => {
          const a = _.value?.inputShapes;
          return (Array.isArray(a) ? a : a?.value ?? []).map((r) => JSON.parse(JSON.stringify(r)));
        },
        setShapeExtra: (a, n, r) => {
          const o = _.value?.inputShapes, T = (Array.isArray(o) ? o : o?.value ?? [])[a];
          if (!T?.extras?.[n]) return !1;
          const L = T.extras[n];
          return r.sides && (L.sides = { ...L.sides, ...r.sides }), r.faces && (L.faces = { ...L.faces, ...r.faces }), !0;
        },
        // Snapshot of currently-installed pricing + the Vanilla shell's
        // own banding/finish pricing maps. Useful for tests that need to
        // verify the test-side override merge with init() actually
        // landed (deepMerge / init-twice races have bitten before).
        getExtrasState: () => {
          const a = _.value;
          return {
            bandingPricing: f.value?.banding ?? null,
            finishPricing: f.value?.finish ?? null,
            calculatorHasInit: !!a?.init,
            stockCount: (() => {
              const n = a?.inputShapes;
              return Array.isArray(n) ? n.length : n?.value?.length ?? 0;
            })()
          };
        }
      }, V("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), p({
      init: ye,
      debug: v,
      stock: c,
      pricing: f,
      currency: B,
      locale: E,
      unitSystem: l,
      inputType: S,
      formulaURL: A,
      formulaSpec: $,
      hardWareResult: G,
      // Product state
      productsEnabled: q,
      selectedProduct: C,
      selectProduct: ge,
      clearProduct: he,
      // Methods
      log: R,
      error: H,
      calculating: ne,
      result: t,
      formatPrice: Q,
      findExtrasPrice: me,
      setHardwareResult: ve
    }), (e, a) => (K(), be(Ie, null, [
      Ne(se(m), { position: "top-left" }),
      pe.value === "order-lookup" && k.value ? (K(), Se(se(g), {
        key: 0,
        "api-base-url": k.value.baseUrl,
        "org-slug": k.value.orgSlug,
        "is-custom-domain": k.value.isCustomDomain,
        "format-price": Q,
        locale: E.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (K(), be(Ie, { key: 1 }, [
        q.value && !C.value ? (K(), Se(se(y), {
          key: 0,
          config: Te.value,
          "show-categories": te.value,
          "initial-product-id": le.value,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          onProductSelected: ge
        }, null, 8, ["config", "show-categories", "initial-product-id"])) : ue("", !0),
        O.value && !q.value ? (K(), Se(se(w), {
          key: 1,
          "stock-options": z.value,
          config: ie.value,
          "format-price": Q,
          colors: { button: "#118ab2", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: E.value,
          "unit-system": l.value,
          "initial-product-id": le.value,
          "server-pagination": _e.value,
          "show-selection-bar": !1,
          debug: v.value,
          onStockAdded: Ae,
          onStockRemoved: De,
          onSelectionConfirmed: Oe
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "debug"])) : ue("", !0),
        C.value ? (K(), be("div", mt, [
          Fe("div", gt, [
            Fe("h3", null, Ue(C.value.name), 1),
            C.value.shortDescription ? (K(), be("p", ht, Ue(C.value.shortDescription), 1)) : ue("", !0)
          ]),
          Fe("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: he
          }, " Change Product ")
        ])) : ue("", !0),
        S.value === "formula" && (A.value || $.value) ? (K(), Se(se(M), {
          key: 3,
          ref: "configurator",
          "format-price": Q,
          url: A.value,
          spec: $.value,
          debug: v.value,
          onHardwareResult: ve
        }, null, 8, ["url", "spec", "debug"])) : ue("", !0),
        Xe(Ne(nt, {
          ref_key: "calculator",
          ref: _,
          readonly: S.value === "formula",
          "input-stock": U.value,
          "input-type": S.value,
          "find-extras-price": me,
          "format-price": Q,
          debug: v.value,
          onLog: R,
          onError: H,
          onCalculating: ne,
          onValidationError: ae,
          onResult: t
        }, null, 8, ["readonly", "input-stock", "input-type", "debug"]), [
          [Ze, Ee.value]
        ])
      ], 64))
    ], 64));
  }
}), bt = /* @__PURE__ */ ct(yt, [["__scopeId", "data-v-b9f02dd0"]]), At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bt }, Symbol.toStringTag, { value: "Module" }));
export {
  _t as S,
  At as V,
  X as g,
  Tt as u
};
