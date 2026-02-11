import { r as R, w as re, c as C, d as ge, b as f, o as r, M as Te, x as ee, H as Ne, e as O, j as a, t as v, u as k, v as Ee, h as Le, E as ze, i as De, J as qe, y as Ke, F as fe, q as ve, z as Qe, Z as He, O as Je, K as Ge, _ as We, Q as Ze, a as Fe, $ as Ae } from "./vendor-vue-h1I-4LEU.js";
import { c as Xe, a as Ye } from "./EcommerceCalculator-ROHa1p5B.js";
import { aW as et } from "./result.zod-B50712hY.js";
import { t as c } from "./i18n-b56ZOQhn.js";
import { _ as ke } from "./Launch-C8DaHa5j.js";
function tt(s) {
  const {
    stockOptions: E,
    config: n,
    initialState: u,
    numberFormat: P = R("decimal"),
    serverPagination: M
  } = s, x = R(u?.activeFilters || []), y = R(u?.searchQuery || ""), _ = R(u?.sortBy || n?.value?.defaultSort.field || "cost"), B = R(u?.sortOrder || n?.value?.defaultSort.order || "asc"), T = R(u?.displayMode || n?.value?.displayMode || "grid"), V = R(u?.currentPage || 1), L = R([]), N = M?.enabled || !1, H = R(!1), q = R([]), Z = R(1), U = R(0), w = R(null);
  let te = null;
  function ie() {
    if (!M) return "";
    const { apiUrl: e, orgSlug: t, isCustomDomain: p, mode: h = "stock" } = M, d = h === "material" ? "materials" : "stock";
    return p ? `${e}ecommerce/${d}` : `${e}ecommerce/${t}/${d}`;
  }
  async function K() {
    if (!(!N || !M)) {
      H.value = !0;
      try {
        const e = new URL(ie());
        e.searchParams.set("page", String(V.value)), e.searchParams.set("limit", String(n?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", _.value), e.searchParams.set("sortOrder", B.value), y.value.trim() && e.searchParams.set("search", y.value.trim());
        const t = {};
        for (const d of x.value)
          if (d.type === "select" || d.type === "multiselect")
            t[d.field] = d.value;
          else if (d.type === "range" && d.value) {
            const { min: b, max: de } = d.value;
            let ae;
            d.field === "l" ? ae = "Length" : d.field === "w" ? ae = "Width" : ae = d.field.charAt(0).toUpperCase() + d.field.slice(1), b !== void 0 && (t[`min${ae}`] = b), de !== void 0 && (t[`max${ae}`] = de);
          } else if (d.type === "boolean" && d.field.startsWith("hasExtras.")) {
            const b = d.field.replace("hasExtras.", "");
            t.hasExtras || (t.hasExtras = {}), t.hasExtras[b] = d.value;
          }
        Object.keys(t).length > 0 && e.searchParams.set("filters", JSON.stringify(t));
        const p = await fetch(e.toString(), {
          credentials: "include"
        });
        if (!p.ok)
          throw new Error(`Server returned ${p.status}`);
        const h = await p.json();
        q.value = h.items || [], Z.value = h.pagination?.totalPages || 1, U.value = h.pagination?.total || 0, h.filterOptions && V.value === 1 && (w.value = h.filterOptions);
      } catch (e) {
        console.error("[useStockFilter] Server fetch error:", e), q.value = [], Z.value = 1, U.value = 0;
      } finally {
        H.value = !1;
      }
    }
  }
  function m() {
    N && (q.value = [], H.value = !0, te && clearTimeout(te), te = setTimeout(() => {
      K();
    }, M?.debounceMs || 300));
  }
  N && (re([y, x, _, B], () => {
    V.value = 1, m();
  }, { deep: !0 }), K());
  function l(e, t) {
    return t.split(".").reduce((p, h) => p?.[h], e);
  }
  function i(e, t) {
    return typeof e == "object" && e !== null && typeof t == "object" && t !== null && "hex" in e && "hex" in t ? e.hex === t.hex : e === t;
  }
  function g(e, t) {
    const p = l(e, t.field);
    switch (t.type) {
      case "select":
        return i(p, t.value);
      case "multiselect":
        return Array.isArray(t.value) ? t.value.some((h) => i(p, h)) : i(p, t.value);
      case "range":
        if (t.value && typeof t.value == "object") {
          const { min: h, max: d } = t.value, b = Number(p);
          return !(isNaN(b) || h !== void 0 && b < h || d !== void 0 && b > d);
        }
        return !1;
      case "boolean":
        return !!p == !!t.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function j(e, t) {
    if (!t.trim()) return !0;
    const p = t.toLowerCase().split(/\s+/).filter(Boolean), d = [
      e.name,
      e.material,
      e.description,
      e.category,
      e.variant,
      e.finish,
      e.grain,
      typeof e.color == "object" ? e.color?.name : e.color,
      ...e.tags || []
    ].filter(Boolean).map((b) => String(b).toLowerCase()).join(" ");
    return p.every((b) => d.includes(b));
  }
  const S = C(() => {
    let e = [...E.value];
    y.value && (e = e.filter((t) => j(t, y.value)));
    for (const t of x.value)
      e = e.filter((p) => g(p, t));
    return e;
  }), A = C(() => {
    const e = [...S.value];
    return e.sort((t, p) => {
      const h = l(t, _.value), d = l(p, _.value);
      if (h == null && d == null) return 0;
      if (h == null) return 1;
      if (d == null) return -1;
      let b = 0;
      return typeof h == "string" && typeof d == "string" ? b = h.localeCompare(d) : typeof h == "number" && typeof d == "number" ? b = h - d : b = String(h).localeCompare(String(d)), B.value === "asc" ? b : -b;
    }), e;
  }), D = C(() => {
    if (N)
      return q.value;
    const e = n?.value?.itemsPerPage || 20, t = (V.value - 1) * e, p = t + e;
    return A.value.slice(t, p);
  }), X = C(() => {
    if (N)
      return Z.value;
    const e = n?.value?.itemsPerPage || 20;
    return Math.ceil(A.value.length / e);
  }), ye = C(() => N ? U.value : A.value.length);
  function Ce(e, t, p = "select") {
    se(e), x.value.push({ field: e, value: t, type: p }), V.value = 1;
  }
  function se(e) {
    x.value = x.value.filter((t) => t.field !== e);
  }
  function Y() {
    x.value = [], y.value = "", V.value = 1;
  }
  function le(e, t) {
    _.value = e, t ? B.value = t : B.value = B.value === "asc" ? "desc" : "asc", V.value = 1;
  }
  function J(e) {
    y.value = e, V.value = 1;
  }
  function ce(e) {
    e >= 1 && e <= X.value && (V.value = e, N && (q.value = [], H.value = !0, K()));
  }
  function Pe(e) {
    const t = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`, p = L.value.indexOf(t);
    return p === -1 ? n?.value?.maxSelection && L.value.length >= n.value.maxSelection ? !1 : (L.value.push(t), me(e, !0), !0) : (L.value.splice(p, 1), me(e, !1), !1);
  }
  function _e(e) {
    const t = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`;
    return L.value.includes(t);
  }
  const ue = R(/* @__PURE__ */ new Map());
  function me(e, t) {
    const p = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`;
    t ? ue.value.set(p, e) : ue.value.delete(p);
  }
  const Oe = C(() => N ? L.value.map((e) => ue.value.get(e)).filter((e) => e !== void 0) : E.value.filter((e) => _e(e)));
  function Se() {
    L.value = [], ue.value.clear();
  }
  function Me(e) {
    const t = E.value.find((h) => h.db_id === e) || q.value.find((h) => h.db_id === e);
    if (!t)
      return null;
    Se();
    const p = t.db_id || `${t.material}-${t.l}-${t.w}-${t.t}`;
    return L.value.push(p), me(t, !0), t;
  }
  function ne(e) {
    const {
      ...t
    } = e;
    return new et(t, P.value);
  }
  function Ie(e) {
    if (N && w.value) {
      if (e === "material" && w.value.materials)
        return w.value.materials;
      if (e === "category" && w.value.categories)
        return w.value.categories;
      if (e === "finish" && w.value.finishes)
        return w.value.finishes;
      if (e === "grain" && w.value.grains)
        return w.value.grains;
      if (e === "color" && w.value.colors)
        return w.value.colors;
      if (e === "t" && w.value.thicknesses)
        return w.value.thicknesses;
      if (e === "variant" && w.value.variants)
        return w.value.variants;
    }
    const t = N ? q.value : E.value;
    if (e === "color") {
      const h = /* @__PURE__ */ new Map();
      return t.forEach((d) => {
        const b = l(d, e);
        b != null && (typeof b == "object" && "hex" in b ? b.hex && !h.has(b.hex) && h.set(b.hex, b) : typeof b == "string" && b.trim() !== "" && (h.has(b) || h.set(b, b)));
      }), Array.from(h.values()).sort((d, b) => {
        const de = typeof d == "object" && "name" in d ? d.name : String(d), ae = typeof b == "object" && "name" in b ? b.name : String(b);
        return de.localeCompare(ae);
      });
    }
    const p = /* @__PURE__ */ new Set();
    return t.forEach((h) => {
      const d = l(h, e);
      d != null && !(typeof d == "string" && d.trim() === "") && p.add(d);
    }), Array.from(p).sort();
  }
  function oe(e) {
    if (N && w.value) {
      if (e === "t" && w.value.thicknessRange)
        return w.value.thicknessRange;
      if (e === "cost" && w.value.priceRange)
        return w.value.priceRange;
      if (e === "l" && w.value.dimensionRange?.length)
        return w.value.dimensionRange.length;
      if (e === "w" && w.value.dimensionRange?.width)
        return w.value.dimensionRange.width;
    }
    const p = (N ? q.value : E.value).map((h) => Number(l(h, e))).filter((h) => !isNaN(h));
    return p.length === 0 ? null : {
      min: Math.min(...p),
      max: Math.max(...p)
    };
  }
  function Ve() {
    if (N && w.value?.hasExtras)
      return w.value.hasExtras;
    const e = N ? q.value : E.value, t = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const p of e)
      if (p.extras?.banding?.length && (t.banding = !0), p.extras?.finish?.length && (t.finish = !0), p.extras?.planing?.length && (t.planing = !0), p.extras?.machining?.length && (t.machining = !0), t.banding && t.finish && t.planing && t.machining) break;
    return t;
  }
  function Be(e) {
    const t = /* @__PURE__ */ new Map();
    if (N && w.value?.counts) {
      const h = w.value.counts[e];
      if (h) {
        for (const [d, b] of Object.entries(h))
          t.set(d, b);
        return t;
      }
      return t;
    }
    let p = [...E.value];
    y.value && (p = p.filter((h) => j(h, y.value)));
    for (const h of x.value)
      h.field !== e && (p = p.filter((d) => g(d, h)));
    for (const h of p) {
      const d = l(h, e);
      if (d != null && !(typeof d == "string" && d.trim() === "")) {
        const b = typeof d == "object" && d !== null && "hex" in d ? d.hex : String(d);
        t.set(b, (t.get(b) || 0) + 1);
      }
    }
    return t;
  }
  const $e = C(() => ({
    activeFilters: x.value,
    searchQuery: y.value,
    sortBy: _.value,
    sortOrder: B.value,
    displayMode: T.value,
    currentPage: V.value,
    selectedStockIds: L.value
  }));
  return {
    // State
    activeFilters: x,
    searchQuery: y,
    sortBy: _,
    sortOrder: B,
    displayMode: T,
    currentPage: V,
    selectedStockIds: L,
    // Server pagination state
    isLoading: H,
    serverMode: N,
    serverFilterOptions: w,
    // Computed
    filteredStock: S,
    sortedStock: A,
    paginatedStock: D,
    selectedStock: Oe,
    totalPages: X,
    totalItems: ye,
    currentState: $e,
    // Methods
    applyFilter: Ce,
    removeFilter: se,
    clearFilters: Y,
    updateSort: le,
    updateSearch: J,
    goToPage: ce,
    toggleStockSelection: Pe,
    isStockSelected: _e,
    clearSelection: Se,
    selectById: Me,
    createInputStock: ne,
    getUniqueValues: Ie,
    getFieldRange: oe,
    getFilterOptionCounts: Be,
    getHasExtrasOptions: Ve,
    fetchServerStock: K
  };
}
const st = ["onKeydown"], nt = {
  key: 0,
  class: "stock-filter-card__image"
}, at = ["src", "alt"], lt = { class: "stock-filter-card__content" }, ot = { class: "stock-filter-card__title" }, it = { class: "stock-filter-card__specs" }, rt = {
  key: 0,
  class: "spec"
}, ct = { class: "spec__label" }, ut = { class: "spec__value" }, dt = {
  key: 1,
  class: "spec"
}, ft = { class: "spec__label" }, vt = { class: "spec__value" }, gt = {
  key: 2,
  class: "spec"
}, mt = { class: "spec__label" }, ht = { class: "spec__value" }, pt = {
  key: 3,
  class: "spec"
}, bt = { class: "spec__label" }, kt = { class: "spec__value" }, yt = {
  key: 4,
  class: "spec"
}, _t = { class: "spec__label" }, St = { class: "spec__value" }, $t = {
  key: 5,
  class: "spec"
}, xt = { class: "spec__label" }, wt = { class: "spec__value" }, Ft = {
  key: 6,
  class: "spec"
}, Ct = { class: "spec__label" }, Pt = { class: "spec__value spec__value--color" }, Ot = { key: 0 }, Mt = {
  key: 7,
  class: "spec"
}, It = { class: "spec__label" }, Vt = { class: "spec__value" }, Bt = {
  key: 0,
  class: "stock-filter-card__extras"
}, jt = {
  key: 0,
  class: "extras-badge extras-badge--sample"
}, Rt = {
  key: 1,
  class: "extras-badge extras-badge--banding"
}, Nt = {
  key: 2,
  class: "extras-badge extras-badge--finish"
}, At = {
  key: 3,
  class: "extras-badge extras-badge--planing"
}, Tt = {
  key: 4,
  class: "extras-badge extras-badge--machining"
}, Ut = {
  key: 1,
  class: "stock-filter-card__description"
}, Et = { class: "stock-filter-card__footer" }, Lt = {
  key: 0,
  class: "stock-filter-card__price"
}, Dt = { class: "price__label" }, qt = {
  key: 0,
  class: "price__original"
}, Kt = {
  key: 1,
  class: "price__badge"
}, zt = { class: "stock-filter-card__actions" }, Qt = ["disabled"], Ht = /* @__PURE__ */ ge({
  __name: "StockFilterCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean, default: !1 },
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" },
    displayMode: { default: "grid" },
    mode: { default: "stock" },
    unitSystem: { default: "metric" }
  },
  emits: ["toggle-selection", "order-sample"],
  setup(s, { emit: E }) {
    const n = s, u = E, P = R(!1), M = C(() => n.stock.available !== !1), x = C(() => n.isDisabled), y = C(() => n.isSelected ? c("stockFilter.remove") : n.isDisabled ? c("stockFilter.differentSaw") : M.value ? c("stockFilter.select") : c("stockFilter.unavailable")), _ = C(() => n.stock.discount && n.stock.discount > 0), B = C(() => {
      const l = n.stock.sample;
      return l?.enabled ? l.price && l.price > 0 ? `${c("stockFilter.orderSample")} (${n.formatPrice(l.price, n.locale)})` : c("stockFilter.freeSample") : "";
    }), T = C(() => n.stock.cost ? _.value ? n.stock.cost * (1 - n.stock.discount / 100) : n.stock.cost : 0), V = C(() => n.stock.cost ? n.formatPrice(n.stock.cost, n.locale) : "N/A"), L = C(() => n.stock.cost ? n.formatPrice(T.value, n.locale) : "N/A"), N = C(() => n.stock.color ? typeof n.stock.color == "object" && "hex" in n.stock.color ? n.stock.color.hex : typeof n.stock.color == "string" ? n.stock.color : "" : ""), H = C(() => n.stock.color ? typeof n.stock.color == "object" && "name" in n.stock.color ? n.stock.color.name : typeof n.stock.color == "string" ? n.stock.color : "" : ""), q = C(() => {
      if (!n.stock.grain) return "";
      switch (n.stock.grain) {
        case "l":
          return c("fields.grain.length");
        case "w":
          return c("fields.grain.width");
        default:
          return "";
      }
    }), Z = C(() => n.stock.t == null ? "" : n.unitSystem === "imperial" ? `${(n.stock.t / 25.4).toFixed(2)}"` : `${n.stock.t} mm`), U = C(() => {
      const l = n.stock.extras;
      return l ? !!(l.banding?.length || l.finish?.length || l.planing?.length || l.machining?.length) : !1;
    }), w = C(() => n.stock.name ? n.stock.name : n.mode === "material" ? n.stock.material || "" : `${n.stock.material} ${n.stock.l}×${n.stock.w}`), te = C(() => n.isSelected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": n.buttonTextColor,
      "--btn-bg": n.buttonColor,
      "--btn-hover-bg": ie(n.buttonColor, -8)
    });
    function ie(l, i) {
      const g = l.replace("#", ""), j = parseInt(g, 16), S = Math.round(2.55 * i), A = (j >> 16) + S, D = (j >> 8 & 255) + S, X = (j & 255) + S;
      return `#${(16777216 + (A < 255 ? A < 1 ? 0 : A : 255) * 65536 + (D < 255 ? D < 1 ? 0 : D : 255) * 256 + (X < 255 ? X < 1 ? 0 : X : 255)).toString(16).slice(1)}`;
    }
    function K() {
      !M.value || x.value || u("toggle-selection", n.stock);
    }
    function m() {
      u("order-sample", n.stock);
    }
    return (l, i) => (r(), f("div", {
      class: ee(["stock-filter-card", {
        "stock-filter-card--selected": s.isSelected,
        "stock-filter-card--unavailable": !M.value,
        "stock-filter-card--disabled": x.value,
        "stock-filter-card--list": s.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: K,
      onKeydown: [
        Te(K, ["enter"]),
        Te(Ne(K, ["prevent"]), ["space"])
      ]
    }, [
      s.stock.imageUrl && !P.value ? (r(), f("div", nt, [
        a("img", {
          src: s.stock.imageUrl,
          alt: s.stock.name || s.stock.name || s.stock.material,
          loading: "lazy",
          onError: i[0] || (i[0] = (g) => P.value = !0)
        }, null, 40, at)
      ])) : O("", !0),
      a("div", lt, [
        a("h3", ot, v(w.value), 1),
        a("div", it, [
          s.stock.sku ? (r(), f("div", rt, [
            a("span", ct, v(k(c)("fields.sku")) + ":", 1),
            a("span", ut, v(s.stock.sku), 1)
          ])) : O("", !0),
          s.stock.t != null ? (r(), f("div", dt, [
            a("span", ft, v(k(c)("fields.t")) + ":", 1),
            a("span", vt, v(Z.value), 1)
          ])) : O("", !0),
          s.stock.category ? (r(), f("div", gt, [
            a("span", mt, v(k(c)("fields.category")) + ":", 1),
            a("span", ht, v(s.stock.category), 1)
          ])) : O("", !0),
          s.stock.finish ? (r(), f("div", pt, [
            a("span", bt, v(k(c)("fields.finish")) + ":", 1),
            a("span", kt, v(s.stock.finish), 1)
          ])) : O("", !0),
          s.stock.variant ? (r(), f("div", yt, [
            a("span", _t, v(k(c)("fields.variant")) + ":", 1),
            a("span", St, v(s.stock.variant), 1)
          ])) : O("", !0),
          s.stock.grain ? (r(), f("div", $t, [
            a("span", xt, v(k(c)("fields.grain")) + ":", 1),
            a("span", wt, v(q.value), 1)
          ])) : O("", !0),
          s.stock.color ? (r(), f("div", Ft, [
            a("span", Ct, v(k(c)("fields.color")) + ":", 1),
            a("span", Pt, [
              a("span", {
                class: "color-swatch",
                style: Ee({ backgroundColor: N.value })
              }, null, 4),
              H.value ? (r(), f("span", Ot, v(H.value), 1)) : O("", !0)
            ])
          ])) : O("", !0),
          s.stock.weight ? (r(), f("div", Mt, [
            a("span", It, v(k(c)("fields.weight")) + ":", 1),
            a("span", Vt, v(s.stock.weight) + " kg", 1)
          ])) : O("", !0)
        ]),
        U.value || s.stock.sample?.enabled ? (r(), f("div", Bt, [
          s.stock.sample?.enabled ? (r(), f("span", jt, v(k(c)("stockFilter.samplesAvailable")), 1)) : O("", !0),
          s.stock.extras?.banding?.length ? (r(), f("span", Rt, v(k(c)("stockFilter.banding")), 1)) : O("", !0),
          s.stock.extras?.finish?.length ? (r(), f("span", Nt, v(k(c)("stockFilter.finishOption")), 1)) : O("", !0),
          s.stock.extras?.planing?.length ? (r(), f("span", At, v(k(c)("stockFilter.planing")), 1)) : O("", !0),
          s.stock.extras?.machining?.length ? (r(), f("span", Tt, v(k(c)("stockFilter.machining")), 1)) : O("", !0)
        ])) : O("", !0),
        s.stock.description ? (r(), f("div", Ut, v(s.stock.description), 1)) : O("", !0)
      ]),
      a("div", Et, [
        s.stock.cost ? (r(), f("div", Lt, [
          a("span", Dt, v(k(c)("stockFilter.price")) + ": ", 1),
          _.value ? (r(), f("span", qt, v(V.value), 1)) : O("", !0),
          a("span", {
            class: ee(["price__value", { price__discounted: _.value }])
          }, v(L.value), 3),
          _.value ? (r(), f("span", Kt, "-" + v(s.stock.discount) + "%", 1)) : O("", !0)
        ])) : O("", !0),
        a("div", zt, [
          s.stock.sample?.enabled ? (r(), f("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: Ne(m, ["stop"])
          }, v(B.value), 1)) : O("", !0),
          a("button", {
            type: "button",
            class: ee(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": s.isSelected }]),
            style: Ee(te.value),
            disabled: !M.value || x.value,
            onClick: Ne(K, ["stop"])
          }, v(y.value), 15, Qt)
        ])
      ])
    ], 42, st));
  }
}), Jt = /* @__PURE__ */ ke(Ht, [["__scopeId", "data-v-655c7c34"]]), Gt = { class: "filter-panel-header" }, Wt = { class: "filter-panel-title" }, Zt = { class: "filter-panel-content" }, Xt = {
  key: 0,
  class: "filter-summary"
}, Yt = { class: "filter-summary__count" }, es = { class: "filter-groups" }, ts = { class: "filter-group__header" }, ss = { class: "filter-group__label" }, ns = { class: "filter-group__content" }, as = {
  key: 0,
  class: "filter-select"
}, ls = ["value", "onChange"], os = { value: "" }, is = ["value"], rs = {
  key: 1,
  class: "multiselect"
}, cs = ["onClick"], us = { class: "multiselect__text" }, ds = {
  key: 0,
  class: "multiselect__dropdown"
}, fs = ["checked", "onChange"], vs = { class: "multiselect__option-label" }, gs = {
  key: 0,
  class: "multiselect__option-count"
}, ms = {
  key: 2,
  class: "filter-range"
}, hs = { class: "filter-range__inputs" }, ps = ["value", "min", "max", "step", "onInput"], bs = ["value", "min", "max", "step", "onInput"], ks = {
  key: 3,
  class: "filter-boolean"
}, ys = { class: "filter-checkbox" }, _s = ["checked", "onChange"], Ss = /* @__PURE__ */ ge({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(s, { emit: E }) {
    const n = s, u = E, P = R(!0), M = R({}), x = R(null), y = C(() => n.activeFilters.length);
    function _() {
      P.value = !P.value;
    }
    function B(m) {
      return {
        material: c("woodwork.material"),
        t: c("woodwork.thickness") + " (mm)",
        cost: c("stockFilter.price"),
        color: c("fields.color"),
        l: c("woodwork.length"),
        w: c("woodwork.width"),
        weight: c("fields.weight"),
        name: c("fields.name"),
        category: c("general.category")
      }[m.field] || m.label;
    }
    function T(m) {
      const l = n.getFilterOptionCounts?.(m.field) || /* @__PURE__ */ new Map(), i = l.size > 0, g = (S) => {
        if (!i) return;
        const A = typeof S == "object" && S !== null && "hex" in S ? S.hex : String(S);
        return l.get(A) ?? 0;
      };
      return m.options?.length ? m.options.map((S) => ({
        ...S,
        count: g(S.value)
      })) : n.getUniqueValues(m.field).map((S) => {
        const A = g(S);
        return m.field === "color" && typeof S == "object" && S !== null ? "name" in S && S.name ? {
          label: S.name,
          value: S,
          count: A
        } : {
          label: S.hex || String(S),
          value: S,
          count: A
        } : {
          label: String(S),
          value: S,
          count: A
        };
      });
    }
    function V(m) {
      return n.activeFilters.find((i) => i.field === m)?.value;
    }
    function L(m, l) {
      const i = V(m);
      return Array.isArray(i) ? m === "color" && typeof l == "object" && l !== null && "hex" in l ? i.some((g) => typeof g == "object" && g !== null && "hex" in g && g.hex === l.hex) : i.includes(l) : m === "color" && typeof l == "object" && l !== null && "hex" in l ? typeof i == "object" && i !== null && "hex" in i && i.hex === l.hex : i === l;
    }
    function N(m, l) {
      const g = l.target.value;
      if (g === "")
        u("remove-filter", m);
      else {
        const j = g !== "" && !isNaN(Number(g)) ? Number(g) : g;
        u("apply-filter", m, j, "select");
      }
    }
    function H(m, l, i) {
      const g = i.target, j = V(m) || [], S = Array.isArray(j) ? [...j] : [];
      if (g.checked)
        S.includes(l) || S.push(l);
      else {
        const A = S.indexOf(l);
        A !== -1 && S.splice(A, 1);
      }
      S.length === 0 ? u("remove-filter", m) : u("apply-filter", m, S, "multiselect");
    }
    function q(m, l) {
      if (M.value[m]?.[l] !== void 0)
        return M.value[m][l];
      const i = n.activeFilters.find((g) => g.field === m);
      if (i?.value && typeof i.value == "object")
        return i.value[l];
    }
    function Z(m, l, i) {
      const g = i.target, j = g.value ? Number(g.value) : void 0;
      M.value[m] || (M.value[m] = {}), M.value[m][l] = j;
      const S = M.value[m].min, A = M.value[m].max;
      S !== void 0 || A !== void 0 ? u("apply-filter", m, { min: S, max: A }, "range") : u("remove-filter", m);
    }
    function U(m, l) {
      l.target.checked ? u("apply-filter", m, !0, "boolean") : u("remove-filter", m);
    }
    function w() {
      M.value = {}, u("clear-filters");
    }
    function te(m) {
      x.value = x.value === m ? null : m;
    }
    function ie(m) {
      const l = V(m.field);
      return !l || Array.isArray(l) && l.length === 0 ? c("stockFilter.all") : Array.isArray(l) ? l.length === 1 ? T(m).find((j) => m.field === "color" && typeof j.value == "object" && j.value !== null && "hex" in j.value ? typeof l[0] == "object" && l[0] !== null && "hex" in l[0] && j.value.hex === l[0].hex : j.value === l[0])?.label || String(l[0]) : c("stockFilter.selected_count", [l.length]) : String(l);
    }
    function K(m) {
      m.target.closest(".multiselect") || (x.value = null);
    }
    return Le(() => {
      document.addEventListener("click", K);
    }), ze(() => {
      document.removeEventListener("click", K);
    }), (m, l) => (r(), f("div", {
      class: ee(["stock-filter-panel", { "stock-filter-panel--open": P.value }])
    }, [
      a("div", Gt, [
        a("h3", Wt, v(k(c)("stockFilter.filters")), 1),
        a("button", {
          type: "button",
          class: "c-btn c-btn--no-effects c-btn--md no-margin filter-panel-toggle",
          onClick: _
        }, v(P.value ? "−" : "+"), 1)
      ]),
      De(He, { name: "filter-panel-content" }, {
        default: qe(() => [
          Ke(a("div", Zt, [
            y.value > 0 ? (r(), f("div", Xt, [
              a("span", Yt, v(k(c)("stockFilter.active_filters", [y.value])), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
                onClick: w
              }, v(k(c)("stockFilter.clear_filters")), 1)
            ])) : O("", !0),
            a("div", es, [
              (r(!0), f(fe, null, ve(s.filterConfigs, (i) => (r(), f("div", {
                key: i.field,
                class: "filter-group"
              }, [
                a("div", ts, [
                  a("label", ss, v(B(i)), 1)
                ]),
                a("div", ns, [
                  i.type === "select" ? (r(), f("div", as, [
                    a("select", {
                      value: V(i.field),
                      class: "filter-select-input",
                      onChange: (g) => N(i.field, g)
                    }, [
                      a("option", os, v(k(c)("stockFilter.all")), 1),
                      (r(!0), f(fe, null, ve(T(i), (g) => (r(), f("option", {
                        key: g.value,
                        value: g.value
                      }, v(g.label) + v(g.count !== void 0 ? ` (${g.count})` : ""), 9, is))), 128))
                    ], 40, ls)
                  ])) : i.type === "multiselect" ? (r(), f("div", rs, [
                    a("button", {
                      type: "button",
                      class: "multiselect__trigger",
                      onClick: (g) => te(i.field)
                    }, [
                      a("span", us, v(ie(i)), 1)
                    ], 8, cs),
                    x.value === i.field ? (r(), f("div", ds, [
                      (r(!0), f(fe, null, ve(T(i), (g) => (r(), f("label", {
                        key: g.value,
                        class: ee(["multiselect__option", { "multiselect__option--zero": g.count === 0 }])
                      }, [
                        a("input", {
                          checked: L(i.field, g.value),
                          type: "checkbox",
                          onChange: (j) => H(i.field, g.value, j)
                        }, null, 40, fs),
                        a("span", vs, v(g.label), 1),
                        g.count !== void 0 ? (r(), f("span", gs, "(" + v(g.count) + ")", 1)) : O("", !0)
                      ], 2))), 128))
                    ])) : O("", !0)
                  ])) : i.type === "range" ? (r(), f("div", ms, [
                    a("div", hs, [
                      a("input", {
                        value: q(i.field, "min"),
                        min: i.min,
                        max: i.max,
                        step: i.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (g) => Z(i.field, "min", g)
                      }, null, 40, ps),
                      l[0] || (l[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                      a("input", {
                        value: q(i.field, "max"),
                        min: i.min,
                        max: i.max,
                        step: i.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (g) => Z(i.field, "max", g)
                      }, null, 40, bs)
                    ])
                  ])) : i.type === "boolean" ? (r(), f("div", ks, [
                    a("label", ys, [
                      a("input", {
                        checked: V(i.field) === !0,
                        type: "checkbox",
                        onChange: (g) => U(i.field, g)
                      }, null, 40, _s),
                      a("span", null, v(i.label), 1)
                    ])
                  ])) : O("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [Qe, P.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), $s = /* @__PURE__ */ ke(Ss, [["__scopeId", "data-v-7a4c3504"]]), xs = { class: "stock-filter-results" }, ws = { class: "results-header" }, Fs = { class: "results-info" }, Cs = { class: "results-count" }, Ps = { class: "results-controls" }, Os = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, Ms = ["title"], Is = ["title"], Vs = {
  key: 0,
  class: "selection-bar"
}, Bs = { class: "selection-text" }, js = { class: "selection-actions" }, Rs = {
  key: 1,
  class: "results-loading"
}, Ns = {
  key: 2,
  class: "results-empty"
}, As = { class: "empty-message" }, Ts = {
  key: 4,
  class: "results-pagination"
}, Us = ["disabled"], Es = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, Ls = ["onClick"], Ds = ["disabled"], qs = /* @__PURE__ */ ge({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    selectedCount: { default: 0 },
    currentPage: { default: 1 },
    totalPages: { default: 1 },
    showSelectedOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:displayMode", "update:showSelectedOnly", "clear-filters", "clear-selection", "go-to-page"],
  setup(s, { emit: E }) {
    const n = s, u = E;
    function P() {
      u("update:showSelectedOnly", !n.showSelectedOnly);
    }
    const M = C(() => {
      const x = [], _ = Math.floor(2.5);
      let B = Math.max(1, n.currentPage - _), T = Math.min(n.totalPages, B + 5 - 1);
      T === n.totalPages && (B = Math.max(1, T - 5 + 1));
      for (let V = B; V <= T; V++)
        x.push(V);
      return x;
    });
    return (x, y) => (r(), f("div", xs, [
      a("div", ws, [
        a("div", Fs, [
          a("div", Cs, v(s.totalResults) + " " + v(s.totalResults === 1 ? k(c)("stockFilter.result_one") : k(c)("stockFilter.result_other")), 1)
        ]),
        a("div", Ps, [
          a("div", Os, [
            a("button", {
              type: "button",
              class: ee(["c-btn c-btn--sm", { selected: s.displayMode === "grid" }]),
              title: k(c)("stockFilter.grid_view"),
              onClick: y[0] || (y[0] = (_) => x.$emit("update:displayMode", "grid"))
            }, [...y[6] || (y[6] = [
              Je('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-5ba41b66><rect x="1" y="1" width="6" height="6" data-v-5ba41b66></rect><rect x="9" y="1" width="6" height="6" data-v-5ba41b66></rect><rect x="1" y="9" width="6" height="6" data-v-5ba41b66></rect><rect x="9" y="9" width="6" height="6" data-v-5ba41b66></rect></svg>', 1)
            ])], 10, Ms),
            a("button", {
              type: "button",
              class: ee(["c-btn c-btn--sm", { selected: s.displayMode === "list" }]),
              title: k(c)("stockFilter.list_view"),
              onClick: y[1] || (y[1] = (_) => x.$emit("update:displayMode", "list"))
            }, [...y[7] || (y[7] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                a("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                a("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Is)
          ])
        ])
      ]),
      s.selectedCount > 0 ? (r(), f("div", Vs, [
        a("span", Bs, v(s.selectedCount) + " " + v(s.selectedCount === 1 ? "material" : "materials") + " selected ", 1),
        a("div", js, [
          a("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--no-effects no-margin",
            onClick: P
          }, v(s.showSelectedOnly ? "Show all" : "Show selected"), 1),
          a("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
            onClick: y[2] || (y[2] = (_) => x.$emit("clear-selection"))
          }, " Clear ")
        ])
      ])) : O("", !0),
      s.loading ? (r(), f("div", Rs, [
        y[8] || (y[8] = a("div", { class: "spinner" }, null, -1)),
        a("p", null, v(k(c)("actions.loading")) + "...", 1)
      ])) : s.totalResults === 0 ? (r(), f("div", Ns, [
        a("p", As, v(k(c)("stockFilter.no_results")), 1),
        s.hasActiveFilters ? (r(), f("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: y[3] || (y[3] = (_) => x.$emit("clear-filters"))
        }, v(k(c)("stockFilter.clear_filters")), 1)) : O("", !0)
      ])) : (r(), f("div", {
        key: 3,
        class: ee(["results-grid", { "results-grid--list": s.displayMode === "list" }])
      }, [
        Ge(x.$slots, "default", {}, void 0, !0)
      ], 2)),
      s.totalPages > 1 ? (r(), f("div", Ts, [
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: s.currentPage === 1,
          onClick: y[4] || (y[4] = (_) => x.$emit("go-to-page", s.currentPage - 1))
        }, v(k(c)("pagination.previous")), 9, Us),
        a("div", Es, [
          (r(!0), f(fe, null, ve(M.value, (_) => (r(), f("button", {
            key: _,
            type: "button",
            class: ee(["c-btn c-btn--sm", { selected: _ === s.currentPage }]),
            onClick: (B) => x.$emit("go-to-page", _)
          }, v(_), 11, Ls))), 128))
        ]),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: s.currentPage === s.totalPages,
          onClick: y[5] || (y[5] = (_) => x.$emit("go-to-page", s.currentPage + 1))
        }, v(k(c)("pagination.next")), 9, Ds)
      ])) : O("", !0)
    ]));
  }
}), Ks = /* @__PURE__ */ ke(qs, [["__scopeId", "data-v-5ba41b66"]]), zs = { class: "stock-filter-search" }, Qs = { class: "search-input-wrapper" }, Hs = ["placeholder"], Js = /* @__PURE__ */ ge({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: E }) {
    const n = s, u = E, P = R(n.modelValue);
    re(() => n.modelValue, (y) => {
      P.value = y;
    });
    function M() {
      u("update:modelValue", P.value);
    }
    function x() {
      P.value = "", u("update:modelValue", "");
    }
    return (y, _) => (r(), f("div", zs, [
      a("div", Qs, [
        Ke(a("input", {
          "onUpdate:modelValue": _[0] || (_[0] = (B) => P.value = B),
          type: "text",
          class: "search-input",
          placeholder: s.placeholder,
          onKeydown: Te(M, ["enter"])
        }, null, 40, Hs), [
          [We, P.value]
        ]),
        P.value ? (r(), f("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: x
        }, " × ")) : O("", !0),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin",
          onClick: M
        }, v(k(c)("actions.search")), 1)
      ])
    ]));
  }
}), Gs = /* @__PURE__ */ ke(Js, [["__scopeId", "data-v-159b228c"]]), Ws = { class: "stock-filter-sort" }, Zs = { class: "sort-controls" }, Xs = { class: "sort-label" }, Ys = ["value"], en = ["value"], tn = ["title"], sn = {
  width: "32",
  height: "32",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, nn = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, an = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, ln = /* @__PURE__ */ ge({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(s, { emit: E }) {
    const n = s, u = E, P = n.availableFields.map((_) => ({
      value: _,
      label: M(_)
    }));
    function M(_) {
      return {
        cost: c("stockFilter.price"),
        material: c("woodwork.material"),
        t: c("woodwork.thickness"),
        l: c("woodwork.length"),
        w: c("woodwork.width"),
        pricePerKg: c("stockFilter.price") + " per kg",
        pricePerM2: c("stockFilter.price") + " per m²",
        weight: c("fields.weight"),
        name: c("fields.name")
      }[_] || _.charAt(0).toUpperCase() + _.slice(1);
    }
    function x(_) {
      const B = _.target;
      u("update:sortBy", B.value);
    }
    function y() {
      u("update:sortOrder", n.sortOrder === "asc" ? "desc" : "asc");
    }
    return (_, B) => (r(), f("div", Ws, [
      a("div", Zs, [
        a("label", Xs, v(k(c)("stockFilter.sort_by")) + ":", 1),
        a("select", {
          value: s.sortBy,
          class: "sort-select",
          onChange: x
        }, [
          (r(!0), f(fe, null, ve(k(P), (T) => (r(), f("option", {
            key: T.value,
            value: T.value
          }, v(T.label), 9, en))), 128))
        ], 40, Ys),
        a("button", {
          type: "button",
          class: ee(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": s.sortOrder === "desc" }]),
          title: s.sortOrder === "asc" ? k(c)("options.by_dimensions") : k(c)("options.by_dimensions"),
          onClick: y
        }, [
          (r(), f("svg", sn, [
            s.sortOrder === "asc" ? (r(), f("path", nn)) : (r(), f("path", an))
          ]))
        ], 10, tn)
      ])
    ]));
  }
}), on = /* @__PURE__ */ ke(ln, [["__scopeId", "data-v-62dadb26"]]), rn = {
  id: "stock-filter",
  class: "smartcut-content"
}, cn = {
  key: 1,
  class: "stock-filter-search-sort"
}, mn = /* @__PURE__ */ ge({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Xe()
    },
    formatPrice: {
      type: Function,
      required: !0
    },
    numberFormat: {
      type: String,
      default: "decimal"
    },
    colors: {
      type: Object,
      default: () => ({
        button: "#118ab2",
        buttonText: "#ffffff"
      })
    },
    locale: {
      type: String,
      default: "en-US"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    storageKey: {
      type: String,
      default: "stock-filter-selections"
    },
    initialProductId: {
      type: String,
      default: null
    },
    serverPagination: {
      type: Object,
      default: null
    },
    mode: {
      type: String,
      default: "stock"
    },
    unitSystem: {
      type: String,
      default: "metric"
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "order-sample"],
  setup(s, { expose: E, emit: n }) {
    const u = s, P = n, M = R(u.stockOptions), x = R(u.config), y = R(u.numberFormat);
    re(() => u.stockOptions, (o) => {
      M.value = o;
    }), re(() => u.config, (o) => {
      x.value = o;
    });
    const _ = C(() => {
      if (u.serverPagination)
        return {
          ...u.serverPagination,
          mode: u.mode
        };
    }), {
      activeFilters: B,
      searchQuery: T,
      sortBy: V,
      sortOrder: L,
      displayMode: N,
      currentPage: H,
      filteredStock: q,
      paginatedStock: Z,
      selectedStock: U,
      totalPages: w,
      totalItems: te,
      isLoading: ie,
      applyFilter: K,
      removeFilter: m,
      clearFilters: l,
      goToPage: i,
      toggleStockSelection: g,
      isStockSelected: j,
      clearSelection: S,
      selectById: A,
      createInputStock: D,
      getUniqueValues: X,
      getFieldRange: ye,
      getFilterOptionCounts: Ce
    } = tt({
      stockOptions: M,
      config: x,
      numberFormat: y,
      serverPagination: _.value
    }), se = R(!1), Y = R(!1), le = R(1), J = R(/* @__PURE__ */ new Map()), ce = C(() => u.config.itemsPerPage || 20), Pe = C(() => {
      const o = (le.value - 1) * ce.value, F = o + ce.value;
      return U.value.slice(o, F);
    }), _e = C(() => Y.value ? Pe.value : Z.value), ue = C(() => Y.value ? U.value.length : te.value), me = C(() => Y.value ? Math.max(1, Math.ceil(U.value.length / ce.value)) : w.value), Oe = C(() => Y.value ? le.value : H.value);
    function Se(o) {
      Y.value ? le.value = o : i(o);
    }
    re(Y, () => {
      le.value = 1;
    }), re(() => U.value.length, () => {
      const o = Math.max(1, Math.ceil(U.value.length / ce.value));
      le.value > o && (le.value = o);
    });
    const Me = C(() => u.loading || ie.value), ne = Ze(u.storageKey, []), { addNotice: Ie } = Ye();
    function oe(o) {
      return o.db_id || `${o.material}-${o.l}-${o.w}-${o.t}`;
    }
    async function Ve(o) {
      if (!u.serverPagination)
        return null;
      const { apiUrl: F, orgSlug: $, isCustomDomain: I } = u.serverPagination, z = u.mode === "material" ? "materials" : "stock", W = I ? `${F}ecommerce/${z}` : `${F}ecommerce/${$}/${z}`;
      try {
        const G = new URL(W);
        G.searchParams.set("limit", "1"), G.searchParams.set("mode", u.mode);
        const Q = {}, xe = /^[a-f0-9]{24}$/i.test(o), we = o.match(/^([a-f0-9]{24})-t(\d+(?:\.\d+)?)$/i);
        if (xe)
          Q.db_id = o;
        else if (we) {
          const [, pe, be] = we;
          Q._id = pe, Q.t = Number(be);
        } else {
          const pe = o.split("-");
          if (pe.length >= 4) {
            const be = pe.pop(), Ue = pe.join("-");
            Ue && (Q.material = Ue), be != null && !isNaN(Number(be)) && (Q.t = Number(be));
          }
        }
        if (Object.keys(Q).length === 0)
          return null;
        G.searchParams.set("filters", JSON.stringify(Q));
        const je = await fetch(G.toString(), { credentials: "include" });
        if (!je.ok) return null;
        const Re = (await je.json()).items?.[0];
        return Re && we && (Re.db_id = o), Re || null;
      } catch {
        return null;
      }
    }
    async function Be() {
      const o = [], F = [];
      for (const I of ne.value) {
        let z = u.stockOptions.find((W) => oe(W) === I);
        !z && u.serverPagination && (z = await Ve(I) ?? void 0), z && (o.push(I), F.push(z));
      }
      const $ = ne.value.length - o.length;
      $ > 0 && (ne.value = o, Ie({
        message: $ === 1 ? "A previously selected material is no longer available" : `${$} previously selected materials are no longer available`,
        type: "warning"
      }));
      for (const I of F) {
        const z = oe(I);
        if (!j(I))
          if (g(I), u.mode === "material" && u.serverPagination) {
            se.value = !0;
            try {
              const W = await h(I);
              if (W.length > 0)
                J.value.set(z, W), P("stock-added", W);
              else {
                const G = D(I);
                J.value.set(z, [G]), P("stock-added", [G]);
              }
            } finally {
              se.value = !1;
            }
          } else
            P("stock-added", [D(I)]);
      }
    }
    re(U, (o) => {
      ne.value = o.map(oe);
    }, { deep: !0 }), Le(async () => {
      if (u.initialProductId) {
        const o = A(u.initialProductId);
        if (o)
          if (ne.value = [], u.mode === "material" && u.serverPagination) {
            se.value = !0;
            try {
              const F = await h(o), $ = oe(o);
              if (F.length > 0)
                J.value.set($, F), P("stock-added", F);
              else {
                const I = D(o);
                J.value.set($, [I]), P("stock-added", [I]);
              }
            } finally {
              se.value = !1;
            }
          } else
            P("stock-added", [D(o)]);
        return;
      }
      ne.value.length > 0 && await Be();
    });
    function $e() {
      S(), ne.value = [];
    }
    const e = C(() => u.config.availableFilters.filter((o) => {
      const F = X(o.field);
      return F.length > 0 && F.some(($) => $ != null);
    })), t = C(() => U.value.length === 0 ? null : U.value[0].db_sawId || null);
    function p(o) {
      if (!t.value) return !1;
      const F = o.db_sawId;
      return F ? F !== t.value : !1;
    }
    async function h(o) {
      if (!u.serverPagination) return [];
      const { apiUrl: F, orgSlug: $, isCustomDomain: I } = u.serverPagination, z = I ? `${F}ecommerce/stock` : `${F}ecommerce/${$}/stock`;
      try {
        const W = new URL(z);
        W.searchParams.set("limit", "500");
        const G = {};
        let Q = null;
        if (o.db_materialId)
          Q = o.db_materialId;
        else if (o._id && /^[a-f0-9]{24}$/i.test(o._id))
          Q = o._id;
        else if (o.db_id) {
          const he = o.db_id.match(/^([a-f0-9]{24})-t\d+(?:\.\d+)?$/i);
          he && (Q = he[1]);
        }
        Q ? G.db_materialId = Q : G.material = o.name || o.material, o.t != null && (G.t = o.t), W.searchParams.set("filters", JSON.stringify(G));
        const xe = await fetch(W.toString(), { credentials: "include" });
        return xe.ok ? ((await xe.json()).items || []).map((he) => D(he)) : [];
      } catch {
        return [];
      }
    }
    async function d(o) {
      if (p(o)) return;
      const F = j(o);
      g(o);
      const $ = oe(o);
      if (F)
        if (u.mode === "material") {
          const I = J.value.get($);
          I ? (I.forEach(b), J.value.delete($)) : b(D(o));
        } else
          b(D(o));
      else if (u.mode === "material" && u.serverPagination) {
        se.value = !0;
        try {
          const I = await h(o);
          if (I.length > 0)
            J.value.set($, I), P("stock-added", I);
          else {
            const z = D(o);
            J.value.set($, [z]), P("stock-added", [z]);
          }
        } finally {
          se.value = !1;
        }
      } else {
        const I = D(o);
        P("stock-added", [I]);
      }
    }
    function b(o) {
      P("stock-removed", o);
    }
    function de() {
      if (u.mode === "material") {
        for (const o of U.value) {
          const F = oe(o), $ = J.value.get(F);
          $ ? $.forEach(b) : b(D(o));
        }
        J.value.clear();
      } else
        for (const o of U.value)
          b(D(o));
      $e();
    }
    function ae(o) {
      P("order-sample", o);
    }
    return E({
      applyFilter: K,
      removeFilter: m,
      clearFilters: l,
      clearSelection: $e,
      selectedStock: U,
      filteredStock: q,
      getUniqueValues: X,
      getFieldRange: ye
    }), (o, F) => (r(), f("div", rn, [
      e.value.length > 0 ? (r(), Fe($s, {
        key: 0,
        "filter-configs": e.value,
        "active-filters": k(B),
        "get-unique-values": k(X),
        "get-field-range": k(ye),
        "get-filter-option-counts": k(Ce),
        onApplyFilter: k(K),
        onRemoveFilter: k(m),
        onClearFilters: k(l)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : O("", !0),
      s.config.enableSearch || s.config.sortOptions.length > 0 ? (r(), f("div", cn, [
        s.config.enableSearch ? (r(), Fe(Gs, {
          key: 0,
          modelValue: k(T),
          "onUpdate:modelValue": F[0] || (F[0] = ($) => Ae(T) ? T.value = $ : null)
        }, null, 8, ["modelValue"])) : O("", !0),
        s.config.sortOptions.length > 0 ? (r(), Fe(on, {
          key: 1,
          "sort-by": k(V),
          "onUpdate:sortBy": F[1] || (F[1] = ($) => Ae(V) ? V.value = $ : null),
          "sort-order": k(L),
          "onUpdate:sortOrder": F[2] || (F[2] = ($) => Ae(L) ? L.value = $ : null),
          "available-fields": s.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : O("", !0)
      ])) : O("", !0),
      De(Ks, {
        "total-results": ue.value,
        "display-mode": k(N),
        loading: Me.value,
        "has-active-filters": k(B).length > 0,
        "selected-count": k(U).length,
        "current-page": Oe.value,
        "total-pages": me.value,
        "show-selected-only": Y.value,
        "onUpdate:displayMode": F[3] || (F[3] = ($) => N.value = $),
        "onUpdate:showSelectedOnly": F[4] || (F[4] = ($) => Y.value = $),
        onClearFilters: k(l),
        onClearSelection: de,
        onGoToPage: Se
      }, {
        default: qe(() => [
          (r(!0), f(fe, null, ve(_e.value, ($, I) => (r(), Fe(Jt, {
            key: $.db_id || `${$.material}-${$.l}-${$.w}-${$.t}-${I}`,
            stock: $,
            "is-selected": k(j)($),
            "is-disabled": p($),
            "format-price": s.formatPrice,
            "button-color": s.colors.button,
            "button-text-color": s.colors.buttonText,
            locale: s.locale,
            "display-mode": k(N),
            mode: s.mode,
            "unit-system": s.unitSystem,
            onToggleSelection: d,
            onOrderSample: ae
          }, null, 8, ["stock", "is-selected", "is-disabled", "format-price", "button-color", "button-text-color", "locale", "display-mode", "mode", "unit-system"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "selected-count", "current-page", "total-pages", "show-selected-only", "onClearFilters"])
    ]));
  }
});
export {
  mn as default
};
