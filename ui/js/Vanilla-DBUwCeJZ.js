import { M as Oe, s as i, k as Fe, x as A, d as Be, N as Ne, l as Ie, o as V, c as ue, m as Ce, u as Z, j as ce, F as Pe, b as ee, a as ke, t as xe, h as Ae, v as De, C as te, O as Re, I as fe, P as je } from "./vendor-vue-CrNGqS0k.js";
import { T as we } from "./NestingShape-JAVnw-aP.js";
import { d as Ee, e as Le, m as Me, g as w, f as Y, p as $e, i as _e } from "./EcommerceCalculator-CTmE4c2O.js";
import { c as Ue, a as Ve } from "./bandingAxesCache-DMR2pLrK.js";
import { t as Je } from "./vendor-CIXsT6Bd.js";
import { _ as He } from "./Launch-9LoYYNsk.js";
function ve(p, c, C) {
  if (!p) return null;
  const b = p[c], D = b?.pricing, m = b?.groupPricing, g = b?.defaultPrice, d = p[`${c}Pricing`];
  if (!D && !m && !d && g === void 0) return null;
  const h = C.filter((M) => !!M && typeof M == "string" && M.trim() !== "").join("|");
  return m && m[h] !== void 0 ? m[h] : D && D[h] !== void 0 ? D[h] : d && d[h] !== void 0 ? d[h] : typeof g == "number" ? g : null;
}
function Qe() {
  const p = i(!1);
  let c = null;
  function C(m, g) {
    c || !g || !m || (c = Je(`${m}/ecommerce`, {
      withCredentials: !0,
      autoConnect: !1
    }), c.on("connect", () => {
      c?.emit("join", g);
    }), c.on("inventory-changed", () => {
      p.value = !0;
    }), c.connect());
  }
  function b() {
    c && (c.disconnect(), c = null);
  }
  function D() {
    p.value = !1;
  }
  return Oe(b), {
    inventoryChanged: p,
    start: C,
    stop: b,
    acknowledge: D
  };
}
function Q(p) {
  return p.db_id ? p.db_id : `${p.material}-${p.l}-${p.w}-${p.t}`;
}
const rt = "stock-filter-selections";
function ot(p) {
  const {
    stockOptions: c,
    config: C,
    initialState: b,
    numberFormat: D = i("decimal"),
    serverPagination: m
  } = p, g = i(b?.activeFilters || []), d = i(b?.searchQuery || ""), R = i(b?.sortBy || C?.value?.defaultSort.field || "cost"), h = i(b?.sortOrder || C?.value?.defaultSort.order || "asc"), M = i(b?.displayMode || C?.value?.displayMode || "grid"), v = i(b?.currentPage || 1), s = i([]), u = m?.enabled || !1, O = i(!1), B = i([]), N = i(1), P = i(0), l = i(null);
  let S = null, _ = null;
  function j() {
    if (!m) return "";
    const { apiUrl: t, orgSlug: e, isCustomDomain: n } = m;
    return n ? `${t}ecommerce/stock` : `${t}ecommerce/${e}/stock`;
  }
  async function J() {
    if (!u || !m) return;
    _?.abort();
    const t = new AbortController();
    _ = t, O.value = !0;
    try {
      const e = new URL(j());
      e.searchParams.set("page", String(v.value)), e.searchParams.set("limit", String(C?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", R.value), e.searchParams.set("sortOrder", h.value), e.searchParams.set("groupByThickness", "true"), d.value.trim() && e.searchParams.set("search", d.value.trim());
      const n = {};
      for (const o of g.value)
        if (o.type === "select" || o.type === "multiselect")
          n[o.field] = o.value;
        else if (o.type === "range" && o.value) {
          const { min: f, max: E } = o.value;
          let I;
          o.field === "l" ? I = "Length" : o.field === "w" ? I = "Width" : I = o.field.charAt(0).toUpperCase() + o.field.slice(1), f !== void 0 && (n[`min${I}`] = f), E !== void 0 && (n[`max${I}`] = E);
        } else if (o.type === "boolean" && o.field.startsWith("hasExtras.")) {
          const f = o.field.replace("hasExtras.", "");
          n.hasExtras || (n.hasExtras = {}), n.hasExtras[f] = o.value;
        }
      Object.keys(n).length > 0 && e.searchParams.set("filters", JSON.stringify(n)), m?.rule?.predicates?.length && e.searchParams.set("rule", JSON.stringify(m.rule));
      const a = await fetch(e.toString(), {
        credentials: "include",
        signal: t.signal
      });
      if (!a.ok)
        throw new Error(`Server returned ${a.status}`);
      const r = await a.json();
      if (t.signal.aborted) return;
      B.value = r.items || [], N.value = r.pagination?.totalPages || 1, P.value = r.pagination?.total || 0, r.filterOptions && v.value === 1 && (l.value = r.filterOptions);
    } catch (e) {
      if (e?.name === "AbortError") return;
      console.error("[useStockFilter] Server fetch error:", e), B.value = [], N.value = 1, P.value = 0;
    } finally {
      _ === t && (_ = null, O.value = !1);
    }
  }
  function x() {
    u && (B.value = [], P.value = 0, O.value = !0, S && clearTimeout(S), S = setTimeout(() => {
      J();
    }, m?.debounceMs || 300));
  }
  u && (Fe([d, g, R, h], () => {
    v.value = 1, x();
  }, { deep: !0 }), J());
  function F(t, e) {
    return e.split(".").reduce((n, a) => n?.[a], t);
  }
  function H(t, e) {
    return typeof t == "object" && t !== null && typeof e == "object" && e !== null && "hex" in t && "hex" in e ? t.hex === e.hex : t === e;
  }
  function G(t, e) {
    const n = F(t, e.field);
    switch (e.type) {
      case "select":
        return H(n, e.value);
      case "multiselect":
        return Array.isArray(e.value) ? e.value.some((a) => H(n, a)) : H(n, e.value);
      case "range":
        if (e.value && typeof e.value == "object") {
          const { min: a, max: r } = e.value, o = Number(n);
          return !(isNaN(o) || a !== void 0 && o < a || r !== void 0 && o > r);
        }
        return !1;
      case "boolean":
        return !!n == !!e.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function W(t) {
    if (t && typeof t == "object" && "name" in t) {
      const e = t.name;
      return typeof e == "string" ? e : void 0;
    }
    return typeof t == "string" ? t : void 0;
  }
  function L(t, e) {
    if (!e.trim()) return !0;
    const n = e.toLowerCase().split(/\s+/).filter(Boolean), r = [
      t.name,
      t.material,
      t.code,
      t.description,
      t.category,
      t.variant,
      t.brand,
      t.finish,
      t.grain,
      W(t.color),
      ...t.tags || []
    ].filter(Boolean).map((o) => String(o).toLowerCase()).join(" ");
    return n.every((o) => r.includes(o));
  }
  const K = A(() => {
    let t = [...c.value];
    d.value && (t = t.filter((e) => L(e, d.value)));
    for (const e of g.value)
      t = t.filter((n) => G(n, e));
    return t;
  }), k = A(() => {
    const t = [...K.value];
    return t.sort((e, n) => {
      const a = F(e, R.value), r = F(n, R.value);
      if (a == null && r == null) return 0;
      if (a == null) return 1;
      if (r == null) return -1;
      let o = 0;
      return typeof a == "string" && typeof r == "string" ? o = a.localeCompare(r) : typeof a == "number" && typeof r == "number" ? o = a - r : o = String(a).localeCompare(String(r)), h.value === "asc" ? o : -o;
    }), t;
  }), ne = A(() => {
    if (u)
      return B.value;
    const t = C?.value?.itemsPerPage || 20, e = (v.value - 1) * t, n = e + t;
    return k.value.slice(e, n);
  }), y = A(() => {
    if (u)
      return N.value;
    const t = C?.value?.itemsPerPage || 20;
    return Math.ceil(k.value.length / t);
  }), X = A(() => u ? P.value : k.value.length);
  function ge(t, e, n = "select") {
    ae(t), g.value.push({ field: t, value: e, type: n }), v.value = 1;
  }
  function ae(t) {
    g.value = g.value.filter((e) => e.field !== t);
  }
  function de() {
    g.value = [], d.value = "", v.value = 1;
  }
  function pe(t, e) {
    R.value = t, e ? h.value = e : h.value = h.value === "asc" ? "desc" : "asc", v.value = 1;
  }
  function me(t) {
    d.value = t, v.value = 1;
  }
  function he(t) {
    t >= 1 && t <= y.value && (v.value = t, u && (B.value = [], O.value = !0, J()));
  }
  function T(t) {
    const e = Q(t), n = s.value.indexOf(e);
    return n === -1 ? C?.value?.maxSelection && s.value.length >= C.value.maxSelection ? !1 : (s.value.push(e), z(t, !0), !0) : (s.value.splice(n, 1), z(t, !1), !1);
  }
  function $(t) {
    return s.value.includes(Q(t));
  }
  const q = i(/* @__PURE__ */ new Map());
  function z(t, e) {
    const n = Q(t);
    e ? q.value.set(n, t) : q.value.delete(n);
  }
  const re = A(() => u ? s.value.map((t) => q.value.get(t)).filter((t) => t !== void 0) : c.value.filter((t) => $(t)));
  function U() {
    s.value = [], q.value.clear();
  }
  function oe(t) {
    const e = c.value.find((n) => n.db_id === t) || B.value.find((n) => n.db_id === t);
    return e ? (U(), s.value.push(Q(e)), z(e, !0), e) : null;
  }
  function ye(t) {
    const {
      colorHex: e,
      name: n,
      description: a,
      category: r,
      finish: o,
      sample: f,
      urls: E,
      minQuantity: I,
      extras: Ge,
      ...Te
    } = t;
    return new we(Te, D.value);
  }
  function Se(t) {
    if (u && l.value) {
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
    const e = u ? B.value : c.value;
    if (t === "color") {
      const a = /* @__PURE__ */ new Map();
      return e.forEach((r) => {
        const o = F(r, t);
        o != null && (typeof o == "object" && "hex" in o ? o.hex && !a.has(o.hex) && a.set(o.hex, o) : typeof o == "string" && o.trim() !== "" && (a.has(o) || a.set(o, o)));
      }), Array.from(a.values()).sort((r, o) => {
        const f = typeof r == "object" && "name" in r ? r.name : String(r), E = typeof o == "object" && "name" in o ? o.name : String(o);
        return f.localeCompare(E);
      });
    }
    const n = /* @__PURE__ */ new Set();
    return e.forEach((a) => {
      const r = F(a, t);
      r != null && !(typeof r == "string" && r.trim() === "") && n.add(r);
    }), Array.from(n).sort();
  }
  function be(t) {
    if (u && l.value) {
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
    const n = (u ? B.value : c.value).map((a) => Number(F(a, t))).filter((a) => !isNaN(a));
    return n.length === 0 ? null : {
      min: Math.min(...n),
      max: Math.max(...n)
    };
  }
  function le() {
    if (u && l.value?.hasExtras)
      return l.value.hasExtras;
    const t = u ? B.value : c.value, e = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const n of t)
      if (n.extras?.banding && (e.banding = !0), n.extras?.finish && (e.finish = !0), n.extras?.planing && (e.planing = !0), n.extras?.machining && (e.machining = !0), e.banding && e.finish && e.planing && e.machining) break;
    return e;
  }
  function ie(t) {
    const e = /* @__PURE__ */ new Map();
    if (u && l.value?.counts) {
      const a = l.value.counts[t];
      if (a) {
        for (const [r, o] of Object.entries(a))
          e.set(r, o);
        return e;
      }
      return e;
    }
    let n = [...c.value];
    d.value && (n = n.filter((a) => L(a, d.value)));
    for (const a of g.value)
      a.field !== t && (n = n.filter((r) => G(r, a)));
    for (const a of n) {
      const r = F(a, t);
      if (r != null && !(typeof r == "string" && r.trim() === "")) {
        const o = typeof r == "object" && r !== null && "hex" in r ? r.hex : String(r);
        e.set(o, (e.get(o) || 0) + 1);
      }
    }
    return e;
  }
  const se = A(() => ({
    activeFilters: g.value,
    searchQuery: d.value,
    sortBy: R.value,
    sortOrder: h.value,
    displayMode: M.value,
    currentPage: v.value,
    selectedStockIds: s.value
  }));
  return {
    // State
    activeFilters: g,
    searchQuery: d,
    sortBy: R,
    sortOrder: h,
    displayMode: M,
    currentPage: v,
    selectedStockIds: s,
    // Server pagination state
    isLoading: O,
    serverMode: u,
    serverFilterOptions: l,
    // Computed
    filteredStock: K,
    sortedStock: k,
    paginatedStock: ne,
    selectedStock: re,
    totalPages: y,
    totalItems: X,
    currentState: se,
    // Methods
    applyFilter: ge,
    removeFilter: ae,
    clearFilters: de,
    updateSort: pe,
    updateSearch: me,
    goToPage: he,
    toggleStockSelection: T,
    isStockSelected: $,
    clearSelection: U,
    selectById: oe,
    createInputStock: ye,
    getUniqueValues: Se,
    getFieldRange: be,
    getFilterOptionCounts: ie,
    getHasExtrasOptions: le,
    fetchServerStock: J
  };
}
const We = {
  key: 2,
  class: "selected-product-header"
}, Ke = { class: "selected-product-info" }, qe = { key: 0 }, ze = /* @__PURE__ */ Be({
  __name: "Vanilla",
  emits: ["ready"],
  setup(p, { expose: c, emit: C }) {
    const b = te(() => import("./Catalogue-DzFBaFaw.js")), D = te(() => import("./Configurator-Cgvs20oP.js")), m = te(() => import("./ProductBrowser-BnlHijTt.js")), g = te(() => import("./Notices-DFNWLH6S.js")), d = te(() => import("./OrderLookup-CgWvrlfT.js")), R = C, h = "production", M = "4.6.4", v = i(!1), s = i([]), u = i({
      banding: null,
      finish: null,
      planing: null,
      machining: null
    }), O = i({}), B = A(() => s.value.map((e) => {
      if (e instanceof we) return e;
      const { issues: n, ...a } = e, r = Array.isArray(n) ? n : [];
      return new we({ ...a, issues: r });
    })), N = i("USD"), P = i("en-US"), l = i("metric"), S = i("manual"), _ = i(""), j = Re(null), J = i(null), x = i(), F = i(!1), H = i([]), G = i(Ee()), W = i(!1), L = i(!1), K = i(!0), k = i(null), ne = i("calculator"), y = i(null), X = i(null), { inventoryChanged: ge, start: ae, acknowledge: de } = Qe(), pe = A(() => L.value && !k.value || L.value && k.value?.type === "simple" || !(S.value === "manual" || S.value === "formula" && (_.value || j.value)) ? !1 : F.value ? s.value.length > 0 : !0), me = A(() => {
      if (!(!W.value || !y.value))
        return {
          enabled: !0,
          apiUrl: y.value.baseUrl,
          orgSlug: y.value.orgSlug,
          isCustomDomain: y.value.isCustomDomain
        };
    }), he = A(() => y.value ? {
      apiUrl: y.value.baseUrl,
      orgSlug: y.value.orgSlug,
      isCustomDomain: y.value.isCustomDomain
    } : null);
    je("calculator", () => x.value);
    const T = (e) => {
      v.value && console.log("SmartCut -", ...e);
    }, $ = (e) => {
      console.error(`SmartCut - ${e}`);
    }, q = () => {
      const e = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(e);
    }, z = () => {
      const e = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(e);
    }, re = (e) => {
      J.value = e;
    }, U = (e = 0, n = P.value) => {
      if (e === !0) return "";
      try {
        n = n.replace("_", "-");
        const a = Number(e);
        return !a && a !== 0 ? "" : isNaN(a) ? (console.error("formatPrice - invalid price:", e), "") : a.toLocaleString(n, {
          style: "currency",
          currency: N.value
        });
      } catch (a) {
        return console.error("Error formatting price:", a), "";
      }
    }, oe = (e, n) => (
      // Resolve groupPricing → pricing → legacy → defaultPrice, matching the
      // DB-backed storefront. (No groupPricing/defaultPrice in the config ⇒
      // falls through to the flat pricing map, i.e. the previous behaviour.)
      ve(O.value, e, n)
    ), ye = (e) => {
      if (e.length === 0) return;
      const n = e.map((f) => {
        const E = f.toData();
        return E.autoAdd = !0, E;
      }), a = [...s.value, ...n], r = [], o = /* @__PURE__ */ new Set();
      for (const f of a) {
        const E = Q(f);
        o.has(E) || (o.add(E), r.push(f));
      }
      s.value = r, T(["Stock added. Total stocks:", s.value.length]), x.value && fe(() => {
        x.value.initMaterialsThicknesses({ stock: s.value });
      });
    }, Se = () => {
      const e = new CustomEvent("smartcut/selection-confirmed");
      window.dispatchEvent(e), fe(() => {
        const n = x.value?.$el;
        n && n.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }, be = (e) => {
      const n = Q(e);
      s.value = s.value.filter((a) => Q(a) !== n), T(["Stock removed. Total stocks:", s.value.length]), x.value && fe(() => {
        x.value.initMaterialsThicknesses({ stock: s.value });
      });
    }, le = (e) => {
      if (k.value = e, T(["Product selected:", e.name, e.type]), e.type === "formula" && e.formulaSpec)
        S.value = "formula", _.value = e.formulaSpec.url ?? "", j.value = e.formulaSpec.spec ?? null, T(["Formula product - loading spec"]);
      else if (e.type === "simple") {
        S.value = "manual", T(["Simple product selected"]);
        const n = new CustomEvent("smartcut/product-selected", {
          detail: {
            product: JSON.parse(JSON.stringify(e)),
            type: "simple"
          }
        });
        window.dispatchEvent(n);
      }
    }, ie = () => {
      k.value = null, S.value === "formula" && (_.value = "", j.value = null, S.value = "manual");
    }, se = (e) => {
      Me(e), e.api && (y.value = {
        baseUrl: e.api.baseUrl,
        orgSlug: e.api.orgSlug,
        isCustomDomain: e.api.isCustomDomain
      }), e.stockFilter?.enabled ? (F.value = !0, W.value = e.stockFilter.serverMode || !1, H.value = W.value ? [] : (e.stock || []).map((a) => ({ ...a })), G.value = e.stockFilter.config || Ee(), s.value = [], T(["Stock filter enabled", W.value ? "(server mode)" : `with ${H.value.length} available options`])) : (F.value = !1, s.value = e.stock), e.products?.enabled ? (L.value = !0, K.value = e.products.showCategories !== !1, T(["Product browser enabled", K.value ? "with categories" : "without categories"])) : L.value = !1, u.value.banding = w(e, ["banding", "pricing"]), u.value.finish = w(e, ["finish", "pricing"]), u.value.planing = w(e, ["planing", "pricing"]), u.value.machining = w(e, ["machining", "pricing"]), O.value = {
        banding: w(e, ["banding"]) ?? null,
        finish: w(e, ["finish"]) ?? null,
        planing: w(e, ["planing"]) ?? null,
        machining: w(e, ["machining"]) ?? null
      }, Y(e, ["options", "currency"]) && (N.value = w(e, ["options", "currency"])), Y(e, ["options", "locale"]) && (P.value = w(e, ["options", "locale"]).replace("_", "-")), Y(e, ["options", "unitSystem"]) && (l.value = w(e, ["options", "unitSystem"])), Y(e, ["config", "configurator", "enabled"]) && e.config.configurator.enabled ? (S.value = "formula", _.value = e.config.configurator.url ?? null, j.value = e.config.configurator.spec ?? null) : (Y(e, ["options", "formula", "url"]) || Y(e, ["options", "formula", "spec"])) && (S.value = "formula", _.value = w(e, ["options", "formula", "url"]) ?? null, j.value = w(e, ["options", "formula", "spec"]) ?? null), (w(e, ["options", "enable", "debug"]) ?? w(e, ["options", "debug"])) && (v.value = !0), e.api?.wsServer && e.api?.orgId && ae(e.api.wsServer, e.api.orgId), fe(() => {
        if (x.value) {
          const a = {
            ...e,
            stock: s.value,
            // Pass flag to indicate stock filter is enabled
            stockFilterEnabled: F.value
          };
          x.value.init(a);
        }
      });
    }, t = (e) => {
      const n = e;
      if (n.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {},
        formattedPlaningCost: {}
      }, e?.metadata?.totalStockCost && (n.checkout.formattedTotalStockCost = e.metadata.totalStockCost.toLocaleString(
        P.value,
        {
          style: "currency",
          currency: N.value
        }
      )), e?.metadata?.bandingLengthByType)
        for (const [r, o] of Object.entries(e.metadata.bandingLengthByType)) {
          const f = ve(O.value, "banding", r.split("|"));
          if (f === null) {
            $(`Banding price ${r} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[r] = $e(f, Number(o)).toLocaleString(P.value, { style: "currency", currency: N.value });
        }
      if (e?.metadata?.finishAreaByType)
        for (const [r, o] of Object.entries(e.metadata.finishAreaByType)) {
          const f = ve(O.value, "finish", r.split("|"));
          if (f === null) {
            $(`Finish price ${r} not found`);
            continue;
          }
          n.checkout.formattedFinishCost[r] = _e(f, Number(o)).toLocaleString(P.value, { style: "currency", currency: N.value });
        }
      if (e?.metadata?.planingAreaByType)
        for (const [r, o] of Object.entries(e.metadata.planingAreaByType)) {
          const f = ve(O.value, "planing", r.split("|"));
          if (f === null) {
            $(`Planing price ${r} not found`);
            continue;
          }
          n.checkout.formattedPlaningCost[r] = _e(f, Number(o)).toLocaleString(P.value, { style: "currency", currency: N.value });
        }
      const a = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(n))
      });
      window.dispatchEvent(a);
    };
    return Fe(ge, (e) => {
      e && (Ue(), Ve(), window.dispatchEvent(new CustomEvent("smartcut/inventoryUpdated")), de());
    }), Ne(() => {
      console.log(`💥 Powered by https://smartcut.dev ${"V" + M} [${h}]`);
      const e = new URLSearchParams(window.location.search);
      v.value = !!e.has("debug");
      const n = e.get("view");
      (n === "track-order" || n === "order-lookup") && (ne.value = "order-lookup");
      const a = e.get("product");
      a && (X.value = a, T(["Deep link to product:", a])), v.value && console.log("Smartcut - debug enabled");
    }), Ie(() => {
      window.smartcutCheckout = {
        init: se,
        // Test-only hooks. The vanilla page is a dev/test entry — no
        // production build ships from here — so it's safe to surface
        // these without a feature flag. Playwright specs in
        // `browser-tests/ecommerce/extras-*.spec.ts` use these to
        // inspect/seed per-shape state without driving the full UI
        // for every per-side selection.
        // defineExpose unwraps refs on the public instance, so
        // `calculator.value.inputShapes` IS the array (not Ref<array>).
        getInputShapes: () => {
          const n = x.value?.inputShapes;
          return (Array.isArray(n) ? n : n?.value ?? []).map((r) => JSON.parse(JSON.stringify(r)));
        },
        setShapeExtra: (n, a, r) => {
          const o = x.value?.inputShapes, E = (Array.isArray(o) ? o : o?.value ?? [])[n];
          if (!E?.extras?.[a]) return !1;
          const I = E.extras[a];
          return r.sides && (I.sides = { ...I.sides, ...r.sides }), r.faces && (I.faces = { ...I.faces, ...r.faces }), !0;
        },
        // Snapshot of currently-installed pricing + the Vanilla shell's
        // own banding/finish pricing maps. Useful for tests that need to
        // verify the test-side override merge with init() actually
        // landed (deepMerge / init-twice races have bitten before).
        getExtrasState: () => {
          const n = x.value;
          return {
            bandingPricing: u.value?.banding ?? null,
            finishPricing: u.value?.finish ?? null,
            calculatorHasInit: !!n?.init,
            stockCount: (() => {
              const a = n?.inputShapes;
              return Array.isArray(a) ? a.length : a?.value?.length ?? 0;
            })()
          };
        }
      }, R("ready");
      const e = new CustomEvent("smartcut/ready");
      window.dispatchEvent(e);
    }), c({
      init: se,
      debug: v,
      stock: s,
      pricing: u,
      currency: N,
      locale: P,
      unitSystem: l,
      inputType: S,
      formulaURL: _,
      formulaSpec: j,
      hardWareResult: J,
      // Product state
      productsEnabled: L,
      selectedProduct: k,
      selectProduct: le,
      clearProduct: ie,
      // Methods
      log: T,
      error: $,
      calculating: z,
      result: t,
      formatPrice: U,
      findExtrasPrice: oe,
      setHardwareResult: re
    }), (e, n) => (V(), ue(Pe, null, [
      Ce(Z(g), { position: "top-left" }),
      ne.value === "order-lookup" && y.value ? (V(), ce(Z(d), {
        key: 0,
        "api-base-url": y.value.baseUrl,
        "org-slug": y.value.orgSlug,
        "is-custom-domain": y.value.isCustomDomain,
        "format-price": U,
        locale: P.value
      }, null, 8, ["api-base-url", "org-slug", "is-custom-domain", "locale"])) : (V(), ue(Pe, { key: 1 }, [
        L.value && !k.value ? (V(), ce(Z(m), {
          key: 0,
          config: he.value,
          "show-categories": K.value,
          "initial-product-id": X.value,
          colors: { button: "#0e7fa6", buttonText: "#ffffff" },
          onProductSelected: le
        }, null, 8, ["config", "show-categories", "initial-product-id"])) : ee("", !0),
        F.value && !L.value ? (V(), ce(Z(b), {
          key: 1,
          "stock-options": H.value,
          config: G.value,
          "format-price": U,
          colors: { button: "#0e7fa6", buttonText: "#ffffff" },
          "number-format": "decimal",
          locale: P.value,
          "unit-system": l.value,
          "initial-product-id": X.value,
          "server-pagination": me.value,
          "show-selection-bar": !1,
          debug: v.value,
          onStockAdded: ye,
          onStockRemoved: be,
          onSelectionConfirmed: Se
        }, null, 8, ["stock-options", "config", "locale", "unit-system", "initial-product-id", "server-pagination", "debug"])) : ee("", !0),
        k.value ? (V(), ue("div", We, [
          ke("div", Ke, [
            ke("h3", null, xe(k.value.name), 1),
            k.value.shortDescription ? (V(), ue("p", qe, xe(k.value.shortDescription), 1)) : ee("", !0)
          ]),
          ke("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--outline",
            onClick: ie
          }, " Change Product ")
        ])) : ee("", !0),
        S.value === "formula" && (_.value || j.value) ? (V(), ce(Z(D), {
          key: 3,
          ref: "configurator",
          "format-price": U,
          url: _.value,
          spec: j.value,
          debug: v.value,
          onHardwareResult: re
        }, null, 8, ["url", "spec", "debug"])) : ee("", !0),
        Ae(Ce(Le, {
          ref_key: "calculator",
          ref: x,
          readonly: S.value === "formula",
          "input-stock": B.value,
          "input-type": S.value,
          "org-slug": y.value?.orgSlug || "",
          "find-extras-price": oe,
          "format-price": U,
          debug: v.value,
          onLog: T,
          onError: $,
          onCalculating: z,
          onValidationError: q,
          onResult: t
        }, null, 8, ["readonly", "input-stock", "input-type", "org-slug", "debug"]), [
          [De, pe.value]
        ])
      ], 64))
    ], 64));
  }
}), Ye = /* @__PURE__ */ He(ze, [["__scopeId", "data-v-94d72700"]]), lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ye }, Symbol.toStringTag, { value: "Module" }));
export {
  rt as S,
  lt as V,
  Q as g,
  ot as u
};
