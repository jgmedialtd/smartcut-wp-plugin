import { r as I, w as fe, c as F, d as ie, b as m, o as d, M as Pe, x as G, H as we, e as w, j as l, t as b, u as p, v as Me, i as Oe, J as Ie, y as Ve, F as le, q as oe, z as Be, Z as Re, O as Ne, K as je, _ as Ae, Q as Ue, h as Te, a as he, $ as Fe } from "./vendor-vue-CjllP6Mc.js";
import { c as Ee, a as Le } from "./EcommerceCalculator-DwC9zTyQ.js";
import { aW as De } from "./result.zod-CjJ6OKhV.js";
import { t as f } from "./i18n-CYKv7Ga8.js";
import { _ as ve } from "./Launch-D8mb8-9D.js";
function qe(s) {
  const {
    stockOptions: B,
    config: a,
    initialState: o,
    numberFormat: g = I("decimal"),
    serverPagination: y
  } = s, x = I(o?.activeFilters || []), C = I(o?.searchQuery || ""), S = I(o?.sortBy || a?.value?.defaultSort.field || "cost"), V = I(o?.sortOrder || a?.value?.defaultSort.order || "asc"), A = I(o?.displayMode || a?.value?.displayMode || "grid"), N = I(o?.currentPage || 1), j = I([]), M = y?.enabled || !1, L = I(!1), U = I([]), K = I(1), T = I(0), i = I(null);
  let _ = null;
  function n() {
    if (!y) return "";
    const { apiUrl: e, orgSlug: t, isCustomDomain: c, mode: v = "stock" } = y, u = v === "material" ? "materials" : "stock";
    return c ? `${e}ecommerce/${u}` : `${e}ecommerce/${t}/${u}`;
  }
  async function k() {
    if (!(!M || !y)) {
      L.value = !0;
      try {
        const e = new URL(n());
        e.searchParams.set("page", String(N.value)), e.searchParams.set("limit", String(a?.value?.itemsPerPage || 20)), e.searchParams.set("sortBy", S.value), e.searchParams.set("sortOrder", V.value), C.value.trim() && e.searchParams.set("search", C.value.trim());
        const t = {};
        for (const u of x.value)
          if (u.type === "select" || u.type === "multiselect")
            t[u.field] = u.value;
          else if (u.type === "range" && u.value) {
            const { min: h, max: z } = u.value;
            let q;
            u.field === "l" ? q = "Length" : u.field === "w" ? q = "Width" : q = u.field.charAt(0).toUpperCase() + u.field.slice(1), h !== void 0 && (t[`min${q}`] = h), z !== void 0 && (t[`max${q}`] = z);
          } else if (u.type === "boolean" && u.field.startsWith("hasExtras.")) {
            const h = u.field.replace("hasExtras.", "");
            t.hasExtras || (t.hasExtras = {}), t.hasExtras[h] = u.value;
          }
        Object.keys(t).length > 0 && e.searchParams.set("filters", JSON.stringify(t));
        const c = await fetch(e.toString(), {
          credentials: "include"
        });
        if (!c.ok)
          throw new Error(`Server returned ${c.status}`);
        const v = await c.json();
        U.value = v.items || [], K.value = v.pagination?.totalPages || 1, T.value = v.pagination?.total || 0, v.filterOptions && N.value === 1 && (i.value = v.filterOptions);
      } catch (e) {
        console.error("[useStockFilter] Server fetch error:", e), U.value = [], K.value = 1, T.value = 0;
      } finally {
        L.value = !1;
      }
    }
  }
  function P() {
    M && (U.value = [], L.value = !0, _ && clearTimeout(_), _ = setTimeout(() => {
      k();
    }, y?.debounceMs || 300));
  }
  M && (fe([C, x, S, V], () => {
    N.value = 1, P();
  }, { deep: !0 }), k());
  function O(e, t) {
    return t.split(".").reduce((c, v) => c?.[v], e);
  }
  function E(e, t) {
    return typeof e == "object" && e !== null && typeof t == "object" && t !== null && "hex" in e && "hex" in t ? e.hex === t.hex : e === t;
  }
  function Q(e, t) {
    const c = O(e, t.field);
    switch (t.type) {
      case "select":
        return E(c, t.value);
      case "multiselect":
        return Array.isArray(t.value) ? t.value.some((v) => E(c, v)) : E(c, t.value);
      case "range":
        if (t.value && typeof t.value == "object") {
          const { min: v, max: u } = t.value, h = Number(c);
          return !(isNaN(h) || v !== void 0 && h < v || u !== void 0 && h > u);
        }
        return !1;
      case "boolean":
        return !!c == !!t.value;
      case "search":
        return !0;
      default:
        return !0;
    }
  }
  function ee(e, t) {
    if (!t.trim()) return !0;
    const c = t.toLowerCase().split(/\s+/).filter(Boolean), u = [
      e.name,
      e.material,
      e.description,
      e.category,
      ...e.tags || []
    ].filter(Boolean).map((h) => String(h).toLowerCase()).join(" ");
    return c.every((h) => new RegExp(`\\b${h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i").test(u));
  }
  const W = F(() => {
    let e = [...B.value];
    C.value && (e = e.filter((t) => ee(t, C.value)));
    for (const t of x.value)
      e = e.filter((c) => Q(c, t));
    return e;
  }), R = F(() => {
    const e = [...W.value];
    return e.sort((t, c) => {
      const v = O(t, S.value), u = O(c, S.value);
      if (v == null && u == null) return 0;
      if (v == null) return 1;
      if (u == null) return -1;
      let h = 0;
      return typeof v == "string" && typeof u == "string" ? h = v.localeCompare(u) : typeof v == "number" && typeof u == "number" ? h = v - u : h = String(v).localeCompare(String(u)), V.value === "asc" ? h : -h;
    }), e;
  }), H = F(() => {
    if (M)
      return U.value;
    const e = a?.value?.itemsPerPage || 20, t = (N.value - 1) * e, c = t + e;
    return R.value.slice(t, c);
  }), re = F(() => {
    if (M)
      return K.value;
    const e = a?.value?.itemsPerPage || 20;
    return Math.ceil(R.value.length / e);
  }), Z = F(() => M ? T.value : R.value.length);
  function D(e, t, c = "select") {
    ge(e), x.value.push({ field: e, value: t, type: c }), N.value = 1;
  }
  function ge(e) {
    x.value = x.value.filter((t) => t.field !== e);
  }
  function J() {
    x.value = [], C.value = "", N.value = 1;
  }
  function pe(e, t) {
    S.value = e, t ? V.value = t : V.value = V.value === "asc" ? "desc" : "asc", N.value = 1;
  }
  function X(e) {
    C.value = e, N.value = 1;
  }
  function be(e) {
    e >= 1 && e <= re.value && (N.value = e, M && (U.value = [], L.value = !0, k()));
  }
  function ke(e) {
    const t = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`, c = j.value.indexOf(t);
    return c === -1 ? a?.value?.maxSelection && j.value.length >= a.value.maxSelection ? !1 : (j.value.push(t), ae(e, !0), !0) : (j.value.splice(c, 1), ae(e, !1), !1);
  }
  function ce(e) {
    const t = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`;
    return j.value.includes(t);
  }
  const te = I(/* @__PURE__ */ new Map());
  function ae(e, t) {
    const c = e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}`;
    t ? te.value.set(c, e) : te.value.delete(c);
  }
  const me = F(() => M ? j.value.map((e) => te.value.get(e)).filter((e) => e !== void 0) : B.value.filter((e) => ce(e)));
  function ne() {
    j.value = [], te.value.clear();
  }
  function ye(e) {
    const t = B.value.find((v) => v.db_id === e) || U.value.find((v) => v.db_id === e);
    if (!t)
      return null;
    ne();
    const c = t.db_id || `${t.material}-${t.l}-${t.w}-${t.t}`;
    return j.value.push(c), ae(t, !0), t;
  }
  function Y(e) {
    const {
      ...t
    } = e;
    return new De(t, g.value);
  }
  function _e(e) {
    if (M && i.value) {
      if (e === "material" && i.value.materials)
        return i.value.materials;
      if (e === "category" && i.value.categories)
        return i.value.categories;
      if (e === "finish" && i.value.finishes)
        return i.value.finishes;
      if (e === "grain" && i.value.grains)
        return i.value.grains;
      if (e === "color" && i.value.colors)
        return i.value.colors;
      if (e === "t" && i.value.thicknesses)
        return i.value.thicknesses;
    }
    const t = M ? U.value : B.value;
    if (e === "color") {
      const v = /* @__PURE__ */ new Map();
      return t.forEach((u) => {
        const h = O(u, e);
        h != null && (typeof h == "object" && "hex" in h ? h.hex && !v.has(h.hex) && v.set(h.hex, h) : typeof h == "string" && h.trim() !== "" && (v.has(h) || v.set(h, h)));
      }), Array.from(v.values()).sort((u, h) => {
        const z = typeof u == "object" && "name" in u ? u.name : String(u), q = typeof h == "object" && "name" in h ? h.name : String(h);
        return z.localeCompare(q);
      });
    }
    const c = /* @__PURE__ */ new Set();
    return t.forEach((v) => {
      const u = O(v, e);
      u != null && !(typeof u == "string" && u.trim() === "") && c.add(u);
    }), Array.from(c).sort();
  }
  function Se(e) {
    if (M && i.value) {
      if (e === "t" && i.value.thicknessRange)
        return i.value.thicknessRange;
      if (e === "cost" && i.value.priceRange)
        return i.value.priceRange;
      if (e === "l" && i.value.dimensionRange?.length)
        return i.value.dimensionRange.length;
      if (e === "w" && i.value.dimensionRange?.width)
        return i.value.dimensionRange.width;
    }
    const c = (M ? U.value : B.value).map((v) => Number(O(v, e))).filter((v) => !isNaN(v));
    return c.length === 0 ? null : {
      min: Math.min(...c),
      max: Math.max(...c)
    };
  }
  function r() {
    if (M && i.value?.hasExtras)
      return i.value.hasExtras;
    const e = M ? U.value : B.value, t = { banding: !1, finish: !1, planing: !1, machining: !1 };
    for (const c of e)
      if (c.extras?.banding?.length && (t.banding = !0), c.extras?.finish?.length && (t.finish = !0), c.extras?.planing?.length && (t.planing = !0), c.extras?.machining?.length && (t.machining = !0), t.banding && t.finish && t.planing && t.machining) break;
    return t;
  }
  const $ = F(() => ({
    activeFilters: x.value,
    searchQuery: C.value,
    sortBy: S.value,
    sortOrder: V.value,
    displayMode: A.value,
    currentPage: N.value,
    selectedStockIds: j.value
  }));
  return {
    // State
    activeFilters: x,
    searchQuery: C,
    sortBy: S,
    sortOrder: V,
    displayMode: A,
    currentPage: N,
    selectedStockIds: j,
    // Server pagination state
    isLoading: L,
    serverMode: M,
    serverFilterOptions: i,
    // Computed
    filteredStock: W,
    sortedStock: R,
    paginatedStock: H,
    selectedStock: me,
    totalPages: re,
    totalItems: Z,
    currentState: $,
    // Methods
    applyFilter: D,
    removeFilter: ge,
    clearFilters: J,
    updateSort: pe,
    updateSearch: X,
    goToPage: be,
    toggleStockSelection: ke,
    isStockSelected: ce,
    clearSelection: ne,
    selectById: ye,
    createInputStock: Y,
    getUniqueValues: _e,
    getFieldRange: Se,
    getHasExtrasOptions: r,
    fetchServerStock: k
  };
}
const Ke = ["onKeydown"], ze = {
  key: 0,
  class: "stock-filter-card__image"
}, Qe = ["src", "alt"], He = { class: "stock-filter-card__content" }, Je = { class: "stock-filter-card__title" }, Ge = { class: "stock-filter-card__specs" }, We = {
  key: 0,
  class: "spec"
}, Ze = { class: "spec__label" }, Xe = { class: "spec__value" }, Ye = {
  key: 1,
  class: "spec"
}, et = { class: "spec__label" }, tt = { class: "spec__value" }, st = {
  key: 2,
  class: "spec"
}, at = { class: "spec__label" }, nt = { class: "spec__value" }, lt = {
  key: 3,
  class: "spec"
}, ot = { class: "spec__label" }, it = { class: "spec__value" }, rt = {
  key: 4,
  class: "spec"
}, ct = { class: "spec__label" }, ut = { class: "spec__value spec__value--color" }, dt = { key: 0 }, ft = {
  key: 5,
  class: "spec"
}, vt = { class: "spec__label" }, gt = { class: "spec__value" }, mt = {
  key: 0,
  class: "stock-filter-card__extras"
}, ht = {
  key: 0,
  class: "extras-badge extras-badge--sample"
}, pt = {
  key: 1,
  class: "extras-badge extras-badge--banding"
}, bt = {
  key: 2,
  class: "extras-badge extras-badge--finish"
}, kt = {
  key: 3,
  class: "extras-badge extras-badge--planing"
}, yt = {
  key: 4,
  class: "extras-badge extras-badge--machining"
}, _t = {
  key: 1,
  class: "stock-filter-card__description"
}, St = { class: "stock-filter-card__footer" }, $t = {
  key: 0,
  class: "stock-filter-card__price"
}, xt = { class: "price__label" }, wt = {
  key: 0,
  class: "price__original"
}, Ft = {
  key: 1,
  class: "price__badge"
}, Pt = { class: "stock-filter-card__actions" }, Ct = ["disabled"], Mt = /* @__PURE__ */ ie({
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
    mode: { default: "stock" }
  },
  emits: ["toggle-selection", "order-sample"],
  setup(s, { emit: B }) {
    const a = s, o = B, g = I(!1), y = F(() => a.stock.available !== !1), x = F(() => a.isDisabled), C = F(() => a.isSelected ? f("stockFilter.remove") : a.isDisabled ? f("stockFilter.differentSaw") : y.value ? f("stockFilter.select") : f("stockFilter.unavailable")), S = F(() => a.stock.discount && a.stock.discount > 0), V = F(() => {
      const P = a.stock.sample;
      return P?.enabled ? P.price && P.price > 0 ? `${f("stockFilter.orderSample")} (${a.formatPrice(P.price, a.locale)})` : f("stockFilter.freeSample") : "";
    }), A = F(() => a.stock.cost ? S.value ? a.stock.cost * (1 - a.stock.discount / 100) : a.stock.cost : 0), N = F(() => a.stock.cost ? a.formatPrice(a.stock.cost, a.locale) : "N/A"), j = F(() => a.stock.cost ? a.formatPrice(A.value, a.locale) : "N/A"), M = F(() => a.stock.color ? typeof a.stock.color == "object" && "hex" in a.stock.color ? a.stock.color.hex : typeof a.stock.color == "string" ? a.stock.color : "" : ""), L = F(() => a.stock.color ? typeof a.stock.color == "object" && "name" in a.stock.color ? a.stock.color.name : typeof a.stock.color == "string" ? a.stock.color : "" : ""), U = F(() => {
      if (!a.stock.grain) return "";
      switch (a.stock.grain) {
        case "l":
          return f("fields.grain.length");
        case "w":
          return f("fields.grain.width");
        default:
          return "";
      }
    }), K = F(() => {
      const P = a.stock.extras;
      return P ? !!(P.banding?.length || P.finish?.length || P.planing?.length || P.machining?.length) : !1;
    }), T = F(() => a.stock.name ? a.stock.name : a.mode === "material" ? a.stock.material || "" : `${a.stock.material} ${a.stock.l}×${a.stock.w}`), i = F(() => a.isSelected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": a.buttonTextColor,
      "--btn-bg": a.buttonColor,
      "--btn-hover-bg": _(a.buttonColor, -8)
    });
    function _(P, O) {
      const E = P.replace("#", ""), Q = parseInt(E, 16), ee = Math.round(2.55 * O), W = (Q >> 16) + ee, R = (Q >> 8 & 255) + ee, H = (Q & 255) + ee;
      return `#${(16777216 + (W < 255 ? W < 1 ? 0 : W : 255) * 65536 + (R < 255 ? R < 1 ? 0 : R : 255) * 256 + (H < 255 ? H < 1 ? 0 : H : 255)).toString(16).slice(1)}`;
    }
    function n() {
      !y.value || x.value || o("toggle-selection", a.stock);
    }
    function k() {
      o("order-sample", a.stock);
    }
    return (P, O) => (d(), m("div", {
      class: G(["stock-filter-card", {
        "stock-filter-card--selected": s.isSelected,
        "stock-filter-card--unavailable": !y.value,
        "stock-filter-card--disabled": x.value,
        "stock-filter-card--list": s.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: n,
      onKeydown: [
        Pe(n, ["enter"]),
        Pe(we(n, ["prevent"]), ["space"])
      ]
    }, [
      s.stock.imageUrl && !g.value ? (d(), m("div", ze, [
        l("img", {
          src: s.stock.imageUrl,
          alt: s.stock.name || s.stock.name || s.stock.material,
          loading: "lazy",
          onError: O[0] || (O[0] = (E) => g.value = !0)
        }, null, 40, Qe)
      ])) : w("", !0),
      l("div", He, [
        l("h3", Je, b(T.value), 1),
        l("div", Ge, [
          s.stock.t != null ? (d(), m("div", We, [
            l("span", Ze, b(p(f)("fields.t")) + ":", 1),
            l("span", Xe, b(s.stock.t), 1)
          ])) : w("", !0),
          s.stock.category ? (d(), m("div", Ye, [
            l("span", et, b(p(f)("fields.category")) + ":", 1),
            l("span", tt, b(s.stock.category), 1)
          ])) : w("", !0),
          s.stock.finish ? (d(), m("div", st, [
            l("span", at, b(p(f)("fields.finish")) + ":", 1),
            l("span", nt, b(s.stock.finish), 1)
          ])) : w("", !0),
          s.stock.grain ? (d(), m("div", lt, [
            l("span", ot, b(p(f)("fields.grain")) + ":", 1),
            l("span", it, b(U.value), 1)
          ])) : w("", !0),
          s.stock.color ? (d(), m("div", rt, [
            l("span", ct, b(p(f)("fields.color")) + ":", 1),
            l("span", ut, [
              l("span", {
                class: "color-swatch",
                style: Me({ backgroundColor: M.value })
              }, null, 4),
              L.value ? (d(), m("span", dt, b(L.value), 1)) : w("", !0)
            ])
          ])) : w("", !0),
          s.stock.weight ? (d(), m("div", ft, [
            l("span", vt, b(p(f)("fields.weight")) + ":", 1),
            l("span", gt, b(s.stock.weight) + " kg", 1)
          ])) : w("", !0)
        ]),
        K.value || s.stock.sample?.enabled ? (d(), m("div", mt, [
          s.stock.sample?.enabled ? (d(), m("span", ht, b(p(f)("stockFilter.samplesAvailable")), 1)) : w("", !0),
          s.stock.extras?.banding?.length ? (d(), m("span", pt, b(p(f)("stockFilter.banding")), 1)) : w("", !0),
          s.stock.extras?.finish?.length ? (d(), m("span", bt, b(p(f)("stockFilter.finishOption")), 1)) : w("", !0),
          s.stock.extras?.planing?.length ? (d(), m("span", kt, b(p(f)("stockFilter.planing")), 1)) : w("", !0),
          s.stock.extras?.machining?.length ? (d(), m("span", yt, b(p(f)("stockFilter.machining")), 1)) : w("", !0)
        ])) : w("", !0),
        s.stock.description ? (d(), m("div", _t, b(s.stock.description), 1)) : w("", !0)
      ]),
      l("div", St, [
        s.stock.cost ? (d(), m("div", $t, [
          l("span", xt, b(p(f)("stockFilter.price")) + ": ", 1),
          S.value ? (d(), m("span", wt, b(N.value), 1)) : w("", !0),
          l("span", {
            class: G(["price__value", { price__discounted: S.value }])
          }, b(j.value), 3),
          S.value ? (d(), m("span", Ft, "-" + b(s.stock.discount) + "%", 1)) : w("", !0)
        ])) : w("", !0),
        l("div", Pt, [
          s.stock.sample?.enabled ? (d(), m("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: we(k, ["stop"])
          }, b(V.value), 1)) : w("", !0),
          l("button", {
            type: "button",
            class: G(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": s.isSelected }]),
            style: Me(i.value),
            disabled: !y.value || x.value,
            onClick: we(n, ["stop"])
          }, b(C.value), 15, Ct)
        ])
      ])
    ], 42, Ke));
  }
}), Ot = /* @__PURE__ */ ve(Mt, [["__scopeId", "data-v-8a195cbf"]]), It = { class: "filter-panel-header" }, Vt = { class: "filter-panel-title" }, Bt = { class: "filter-panel-content" }, Rt = {
  key: 0,
  class: "filter-summary"
}, Nt = { class: "filter-summary__count" }, jt = { class: "filter-groups" }, At = { class: "filter-group__header" }, Ut = { class: "filter-group__label" }, Tt = { class: "filter-group__content" }, Et = {
  key: 0,
  class: "filter-select"
}, Lt = ["checked", "onChange"], Dt = ["value", "onChange"], qt = { value: "" }, Kt = ["value"], zt = {
  key: 1,
  class: "filter-range"
}, Qt = { class: "filter-range__inputs" }, Ht = ["value", "min", "max", "step", "onInput"], Jt = ["value", "min", "max", "step", "onInput"], Gt = {
  key: 2,
  class: "filter-boolean"
}, Wt = { class: "filter-checkbox" }, Zt = ["checked", "onChange"], Xt = /* @__PURE__ */ ie({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(s, { emit: B }) {
    const a = s, o = B, g = I(!0), y = I({}), x = F(() => a.activeFilters.length);
    function C() {
      g.value = !g.value;
    }
    function S(i) {
      return {
        material: f("woodwork.material"),
        t: f("woodwork.thickness") + " (mm)",
        cost: f("stockFilter.price"),
        color: f("fields.color"),
        l: f("woodwork.length"),
        w: f("woodwork.width"),
        weight: f("fields.weight"),
        name: f("fields.name"),
        category: f("general.category")
      }[i.field] || i.label;
    }
    function V(i) {
      return i.options?.length ? i.options : a.getUniqueValues(i.field).map((n) => i.field === "color" && typeof n == "object" && n !== null ? "name" in n && n.name ? {
        label: n.name,
        value: n
      } : {
        label: n.hex || String(n),
        value: n
      } : {
        label: String(n),
        value: n
      });
    }
    function A(i) {
      return a.activeFilters.find((n) => n.field === i)?.value;
    }
    function N(i, _) {
      const n = A(i);
      return Array.isArray(n) ? i === "color" && typeof _ == "object" && _ !== null && "hex" in _ ? n.some((k) => typeof k == "object" && k !== null && "hex" in k && k.hex === _.hex) : n.includes(_) : i === "color" && typeof _ == "object" && _ !== null && "hex" in _ ? typeof n == "object" && n !== null && "hex" in n && n.hex === _.hex : n === _;
    }
    function j(i, _) {
      const k = _.target.value;
      k === "" ? o("remove-filter", i) : o("apply-filter", i, k, "select");
    }
    function M(i, _, n) {
      const k = n.target, P = A(i) || [], O = Array.isArray(P) ? [...P] : [];
      if (k.checked)
        O.includes(_) || O.push(_);
      else {
        const E = O.indexOf(_);
        E !== -1 && O.splice(E, 1);
      }
      O.length === 0 ? o("remove-filter", i) : o("apply-filter", i, O, "multiselect");
    }
    function L(i, _) {
      if (y.value[i]?.[_] !== void 0)
        return y.value[i][_];
      const n = a.activeFilters.find((k) => k.field === i);
      if (n?.value && typeof n.value == "object")
        return n.value[_];
    }
    function U(i, _, n) {
      const k = n.target, P = k.value ? Number(k.value) : void 0;
      y.value[i] || (y.value[i] = {}), y.value[i][_] = P;
      const O = y.value[i].min, E = y.value[i].max;
      O !== void 0 || E !== void 0 ? o("apply-filter", i, { min: O, max: E }, "range") : o("remove-filter", i);
    }
    function K(i, _) {
      _.target.checked ? o("apply-filter", i, !0, "boolean") : o("remove-filter", i);
    }
    function T() {
      y.value = {}, o("clear-filters");
    }
    return (i, _) => (d(), m("div", {
      class: G(["stock-filter-panel", { "stock-filter-panel--open": g.value }])
    }, [
      l("div", It, [
        l("h3", Vt, b(p(f)("stockFilter.filters")), 1),
        l("button", {
          type: "button",
          class: "c-btn c-btn--no-effects c-btn--md no-margin filter-panel-toggle",
          onClick: C
        }, b(g.value ? "−" : "+"), 1)
      ]),
      Oe(Re, { name: "filter-panel-content" }, {
        default: Ie(() => [
          Ve(l("div", Bt, [
            x.value > 0 ? (d(), m("div", Rt, [
              l("span", Nt, b(p(f)("stockFilter.active_filters", [x.value])), 1),
              l("button", {
                type: "button",
                class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
                onClick: T
              }, b(p(f)("stockFilter.clear_filters")), 1)
            ])) : w("", !0),
            l("div", jt, [
              (d(!0), m(le, null, oe(s.filterConfigs, (n) => (d(), m("div", {
                key: n.field,
                class: "filter-group"
              }, [
                l("div", At, [
                  l("label", Ut, b(S(n)), 1)
                ]),
                l("div", Tt, [
                  n.type === "select" || n.type === "multiselect" ? (d(), m("div", Et, [
                    n.type === "multiselect" ? (d(!0), m(le, { key: 0 }, oe(V(n), (k) => (d(), m("label", {
                      key: k.value,
                      class: "filter-checkbox"
                    }, [
                      l("input", {
                        checked: N(n.field, k.value),
                        type: "checkbox",
                        onChange: (P) => M(n.field, k.value, P)
                      }, null, 40, Lt),
                      l("span", null, b(k.label), 1)
                    ]))), 128)) : (d(), m("select", {
                      key: 1,
                      value: A(n.field),
                      class: "filter-select-input",
                      onChange: (k) => j(n.field, k)
                    }, [
                      l("option", qt, b(p(f)("stockFilter.all")), 1),
                      (d(!0), m(le, null, oe(V(n), (k) => (d(), m("option", {
                        key: k.value,
                        value: k.value
                      }, b(k.label), 9, Kt))), 128))
                    ], 40, Dt))
                  ])) : n.type === "range" ? (d(), m("div", zt, [
                    l("div", Qt, [
                      l("input", {
                        value: L(n.field, "min"),
                        min: n.min,
                        max: n.max,
                        step: n.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (k) => U(n.field, "min", k)
                      }, null, 40, Ht),
                      _[0] || (_[0] = l("span", { class: "filter-range__separator" }, "–", -1)),
                      l("input", {
                        value: L(n.field, "max"),
                        min: n.min,
                        max: n.max,
                        step: n.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (k) => U(n.field, "max", k)
                      }, null, 40, Jt)
                    ])
                  ])) : n.type === "boolean" ? (d(), m("div", Gt, [
                    l("label", Wt, [
                      l("input", {
                        checked: A(n.field) === !0,
                        type: "checkbox",
                        onChange: (k) => K(n.field, k)
                      }, null, 40, Zt),
                      l("span", null, b(n.label), 1)
                    ])
                  ])) : w("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [Be, g.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Yt = /* @__PURE__ */ ve(Xt, [["__scopeId", "data-v-38be6ff2"]]), es = { class: "stock-filter-results" }, ts = { class: "results-header" }, ss = { class: "results-info" }, as = { class: "results-count" }, ns = { class: "results-controls" }, ls = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, os = ["title"], is = ["title"], rs = {
  key: 0,
  class: "selection-bar"
}, cs = { class: "selection-text" }, us = {
  key: 1,
  class: "results-loading"
}, ds = {
  key: 2,
  class: "results-empty"
}, fs = { class: "empty-message" }, vs = {
  key: 4,
  class: "results-pagination"
}, gs = ["disabled"], ms = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, hs = ["onClick"], ps = ["disabled"], bs = /* @__PURE__ */ ie({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    selectedCount: { default: 0 },
    currentPage: { default: 1 },
    totalPages: { default: 1 }
  },
  emits: ["update:displayMode", "clear-filters", "clear-selection", "go-to-page"],
  setup(s) {
    const B = s, a = F(() => {
      const o = [], y = Math.floor(2.5);
      let x = Math.max(1, B.currentPage - y), C = Math.min(B.totalPages, x + 5 - 1);
      C === B.totalPages && (x = Math.max(1, C - 5 + 1));
      for (let S = x; S <= C; S++)
        o.push(S);
      return o;
    });
    return (o, g) => (d(), m("div", es, [
      l("div", ts, [
        l("div", ss, [
          l("div", as, b(s.totalResults) + " " + b(s.totalResults === 1 ? p(f)("stockFilter.result_one") : p(f)("stockFilter.result_other")), 1)
        ]),
        l("div", ns, [
          l("div", ls, [
            l("button", {
              type: "button",
              class: G(["c-btn c-btn--sm", { selected: s.displayMode === "grid" }]),
              title: p(f)("stockFilter.grid_view"),
              onClick: g[0] || (g[0] = (y) => o.$emit("update:displayMode", "grid"))
            }, [...g[6] || (g[6] = [
              Ne('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-deae29b7><rect x="1" y="1" width="6" height="6" data-v-deae29b7></rect><rect x="9" y="1" width="6" height="6" data-v-deae29b7></rect><rect x="1" y="9" width="6" height="6" data-v-deae29b7></rect><rect x="9" y="9" width="6" height="6" data-v-deae29b7></rect></svg>', 1)
            ])], 10, os),
            l("button", {
              type: "button",
              class: G(["c-btn c-btn--sm", { selected: s.displayMode === "list" }]),
              title: p(f)("stockFilter.list_view"),
              onClick: g[1] || (g[1] = (y) => o.$emit("update:displayMode", "list"))
            }, [...g[7] || (g[7] = [
              l("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                l("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                l("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                l("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, is)
          ])
        ])
      ]),
      s.selectedCount > 0 ? (d(), m("div", rs, [
        l("span", cs, b(s.selectedCount) + " " + b(s.selectedCount === 1 ? "material" : "materials") + " selected ", 1),
        l("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
          onClick: g[2] || (g[2] = (y) => o.$emit("clear-selection"))
        }, " Clear ")
      ])) : w("", !0),
      s.loading ? (d(), m("div", us, [
        g[8] || (g[8] = l("div", { class: "spinner" }, null, -1)),
        l("p", null, b(p(f)("actions.loading")) + "...", 1)
      ])) : s.totalResults === 0 ? (d(), m("div", ds, [
        l("p", fs, b(p(f)("stockFilter.no_results")), 1),
        s.hasActiveFilters ? (d(), m("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: g[3] || (g[3] = (y) => o.$emit("clear-filters"))
        }, b(p(f)("stockFilter.clear_filters")), 1)) : w("", !0)
      ])) : (d(), m("div", {
        key: 3,
        class: G(["results-grid", { "results-grid--list": s.displayMode === "list" }])
      }, [
        je(o.$slots, "default", {}, void 0, !0)
      ], 2)),
      s.totalPages > 1 ? (d(), m("div", vs, [
        l("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: s.currentPage === 1,
          onClick: g[4] || (g[4] = (y) => o.$emit("go-to-page", s.currentPage - 1))
        }, b(p(f)("pagination.previous")), 9, gs),
        l("div", ms, [
          (d(!0), m(le, null, oe(a.value, (y) => (d(), m("button", {
            key: y,
            type: "button",
            class: G(["c-btn c-btn--sm", { selected: y === s.currentPage }]),
            onClick: (x) => o.$emit("go-to-page", y)
          }, b(y), 11, hs))), 128))
        ]),
        l("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: s.currentPage === s.totalPages,
          onClick: g[5] || (g[5] = (y) => o.$emit("go-to-page", s.currentPage + 1))
        }, b(p(f)("pagination.next")), 9, ps)
      ])) : w("", !0)
    ]));
  }
}), ks = /* @__PURE__ */ ve(bs, [["__scopeId", "data-v-deae29b7"]]), ys = { class: "stock-filter-search" }, _s = { class: "search-input-wrapper" }, Ss = ["placeholder"], $s = /* @__PURE__ */ ie({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: B }) {
    const a = s, o = B, g = I(a.modelValue);
    fe(() => a.modelValue, (C) => {
      g.value = C;
    });
    function y() {
      o("update:modelValue", g.value);
    }
    function x() {
      g.value = "", o("update:modelValue", "");
    }
    return (C, S) => (d(), m("div", ys, [
      l("div", _s, [
        Ve(l("input", {
          "onUpdate:modelValue": S[0] || (S[0] = (V) => g.value = V),
          type: "text",
          class: "search-input",
          placeholder: s.placeholder,
          onKeydown: Pe(y, ["enter"])
        }, null, 40, Ss), [
          [Ae, g.value]
        ]),
        g.value ? (d(), m("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: x
        }, " × ")) : w("", !0),
        l("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin",
          onClick: y
        }, b(p(f)("actions.search")), 1)
      ])
    ]));
  }
}), xs = /* @__PURE__ */ ve($s, [["__scopeId", "data-v-159b228c"]]), ws = { class: "stock-filter-sort" }, Fs = { class: "sort-controls" }, Ps = { class: "sort-label" }, Cs = ["value"], Ms = ["value"], Os = ["title"], Is = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Vs = {
  key: 0,
  d: "M8 3l4 5H4z"
}, Bs = {
  key: 1,
  d: "M8 13l4-5H4z"
}, Rs = /* @__PURE__ */ ie({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(s, { emit: B }) {
    const a = s, o = B, g = a.availableFields.map((S) => ({
      value: S,
      label: y(S)
    }));
    function y(S) {
      return {
        cost: f("stockFilter.price"),
        material: f("woodwork.material"),
        t: f("woodwork.thickness"),
        l: f("woodwork.length"),
        w: f("woodwork.width"),
        pricePerKg: f("stockFilter.price") + " per kg",
        pricePerM2: f("stockFilter.price") + " per m²",
        weight: f("fields.weight"),
        name: f("fields.name")
      }[S] || S.charAt(0).toUpperCase() + S.slice(1);
    }
    function x(S) {
      const V = S.target;
      o("update:sortBy", V.value);
    }
    function C() {
      o("update:sortOrder", a.sortOrder === "asc" ? "desc" : "asc");
    }
    return (S, V) => (d(), m("div", ws, [
      l("div", Fs, [
        l("label", Ps, b(p(f)("stockFilter.sort_by")) + ":", 1),
        l("select", {
          value: s.sortBy,
          class: "sort-select",
          onChange: x
        }, [
          (d(!0), m(le, null, oe(p(g), (A) => (d(), m("option", {
            key: A.value,
            value: A.value
          }, b(A.label), 9, Ms))), 128))
        ], 40, Cs),
        l("button", {
          type: "button",
          class: G(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": s.sortOrder === "desc" }]),
          title: s.sortOrder === "asc" ? p(f)("options.by_dimensions") : p(f)("options.by_dimensions"),
          onClick: C
        }, [
          (d(), m("svg", Is, [
            s.sortOrder === "asc" ? (d(), m("path", Vs)) : (d(), m("path", Bs))
          ]))
        ], 10, Os)
      ])
    ]));
  }
}), Ns = /* @__PURE__ */ ve(Rs, [["__scopeId", "data-v-4fc066e2"]]), js = {
  id: "stock-filter",
  class: "smartcut-content"
}, Ks = /* @__PURE__ */ ie({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Ee()
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
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "order-sample"],
  setup(s, { expose: B, emit: a }) {
    const o = s, g = a, y = I(o.stockOptions), x = I(o.config), C = I(o.numberFormat);
    fe(() => o.stockOptions, (r) => {
      y.value = r;
    }), fe(() => o.config, (r) => {
      x.value = r;
    });
    const S = F(() => {
      if (o.serverPagination)
        return {
          ...o.serverPagination,
          mode: o.mode
        };
    }), {
      activeFilters: V,
      searchQuery: A,
      sortBy: N,
      sortOrder: j,
      displayMode: M,
      currentPage: L,
      filteredStock: U,
      paginatedStock: K,
      selectedStock: T,
      totalPages: i,
      isLoading: _,
      applyFilter: n,
      removeFilter: k,
      clearFilters: P,
      goToPage: O,
      toggleStockSelection: E,
      isStockSelected: Q,
      clearSelection: ee,
      selectById: W,
      createInputStock: R,
      getUniqueValues: H,
      getFieldRange: re
    } = qe({
      stockOptions: y,
      config: x,
      numberFormat: C,
      serverPagination: S.value
    }), Z = I(!1), D = I(/* @__PURE__ */ new Map()), ge = F(() => o.loading || _.value), J = Ue(o.storageKey, []), { addNotice: pe } = Le();
    function X(r) {
      return r.db_id || `${r.material}-${r.l}-${r.w}-${r.t}`;
    }
    async function be(r) {
      if (!o.serverPagination)
        return null;
      const { apiUrl: $, orgSlug: e, isCustomDomain: t } = o.serverPagination, c = o.mode === "material" ? "materials" : "stock", v = t ? `${$}ecommerce/${c}` : `${$}ecommerce/${e}/${c}`;
      try {
        const u = new URL(v);
        u.searchParams.set("limit", "1"), u.searchParams.set("mode", o.mode);
        const h = {}, z = /^[a-f0-9]{24}$/i.test(r), q = r.match(/^([a-f0-9]{24})-t(\d+(?:\.\d+)?)$/i);
        if (z)
          h.db_id = r;
        else if (q) {
          const [, se, de] = q;
          h._id = se, h.t = Number(de);
        } else {
          const se = r.split("-");
          if (se.length >= 4) {
            const de = se.pop(), As = se.pop(), Us = se.pop(), Ce = se.join("-");
            Ce && (h.material = Ce), de != null && !isNaN(Number(de)) && (h.t = Number(de));
          }
        }
        if (Object.keys(h).length === 0)
          return null;
        u.searchParams.set("filters", JSON.stringify(h));
        const $e = await fetch(u.toString(), { credentials: "include" });
        if (!$e.ok) return null;
        const xe = (await $e.json()).items?.[0];
        return xe && q && (xe.db_id = r), xe || null;
      } catch {
        return null;
      }
    }
    async function ke() {
      const r = [], $ = [];
      for (const t of J.value) {
        let c = o.stockOptions.find((v) => X(v) === t);
        !c && o.serverPagination && (c = await be(t) ?? void 0), c && (r.push(t), $.push(c));
      }
      const e = J.value.length - r.length;
      e > 0 && (J.value = r, pe({
        message: e === 1 ? "A previously selected material is no longer available" : `${e} previously selected materials are no longer available`,
        type: "warning"
      }));
      for (const t of $) {
        const c = X(t);
        if (!Q(t))
          if (E(t), o.mode === "material" && o.serverPagination) {
            Z.value = !0;
            try {
              const v = await ne(t);
              if (v.length > 0)
                D.value.set(c, v), g("stock-added", v);
              else {
                const u = R(t);
                D.value.set(c, [u]), g("stock-added", [u]);
              }
            } finally {
              Z.value = !1;
            }
          } else
            g("stock-added", [R(t)]);
      }
    }
    fe(T, (r) => {
      J.value = r.map(X);
    }, { deep: !0 }), Te(async () => {
      if (o.initialProductId) {
        const r = W(o.initialProductId);
        if (r)
          if (J.value = [], o.mode === "material" && o.serverPagination) {
            Z.value = !0;
            try {
              const $ = await ne(r), e = X(r);
              if ($.length > 0)
                D.value.set(e, $), g("stock-added", $);
              else {
                const t = R(r);
                D.value.set(e, [t]), g("stock-added", [t]);
              }
            } finally {
              Z.value = !1;
            }
          } else
            g("stock-added", [R(r)]);
        return;
      }
      J.value.length > 0 && await ke();
    });
    function ce() {
      ee(), J.value = [];
    }
    const te = F(() => o.config.availableFilters.filter((r) => {
      const $ = H(r.field);
      return $.length > 0 && $.some((e) => e != null);
    })), ae = F(() => T.value.length === 0 ? null : T.value[0].db_sawId || null);
    function me(r) {
      if (!ae.value) return !1;
      const $ = r.db_sawId;
      return $ ? $ !== ae.value : !1;
    }
    async function ne(r) {
      if (!o.serverPagination) return [];
      const { apiUrl: $, orgSlug: e, isCustomDomain: t } = o.serverPagination, c = t ? `${$}ecommerce/stock` : `${$}ecommerce/${e}/stock`;
      try {
        const v = new URL(c);
        v.searchParams.set("limit", "500");
        const u = {};
        let h = null;
        if (r.db_materialId)
          h = r.db_materialId;
        else if (r._id && /^[a-f0-9]{24}$/i.test(r._id))
          h = r._id;
        else if (r.db_id) {
          const ue = r.db_id.match(/^([a-f0-9]{24})-t\d+(?:\.\d+)?$/i);
          ue && (h = ue[1]);
        }
        h ? u.db_materialId = h : u.material = r.name || r.material, r.t != null && (u.t = r.t), v.searchParams.set("filters", JSON.stringify(u));
        const z = await fetch(v.toString(), { credentials: "include" });
        return z.ok ? ((await z.json()).items || []).map((ue) => R(ue)) : [];
      } catch {
        return [];
      }
    }
    async function ye(r) {
      if (me(r)) return;
      const $ = Q(r);
      E(r);
      const e = X(r);
      if ($)
        if (o.mode === "material") {
          const t = D.value.get(e);
          t ? (t.forEach(Y), D.value.delete(e)) : Y(R(r));
        } else
          Y(R(r));
      else if (o.mode === "material" && o.serverPagination) {
        Z.value = !0;
        try {
          const t = await ne(r);
          if (t.length > 0)
            D.value.set(e, t), g("stock-added", t);
          else {
            const c = R(r);
            D.value.set(e, [c]), g("stock-added", [c]);
          }
        } finally {
          Z.value = !1;
        }
      } else {
        const t = R(r);
        g("stock-added", [t]);
      }
    }
    function Y(r) {
      g("stock-removed", r);
    }
    function _e() {
      if (o.mode === "material") {
        for (const r of T.value) {
          const $ = X(r), e = D.value.get($);
          e ? e.forEach(Y) : Y(R(r));
        }
        D.value.clear();
      } else
        for (const r of T.value)
          Y(R(r));
      ce();
    }
    function Se(r) {
      g("order-sample", r);
    }
    return B({
      applyFilter: n,
      removeFilter: k,
      clearFilters: P,
      clearSelection: ce,
      selectedStock: T,
      filteredStock: U,
      getUniqueValues: H,
      getFieldRange: re
    }), (r, $) => (d(), m("div", js, [
      s.config.enableSearch ? (d(), he(xs, {
        key: 0,
        modelValue: p(A),
        "onUpdate:modelValue": $[0] || ($[0] = (e) => Fe(A) ? A.value = e : null)
      }, null, 8, ["modelValue"])) : w("", !0),
      te.value.length > 0 ? (d(), he(Yt, {
        key: 1,
        "filter-configs": te.value,
        "active-filters": p(V),
        "get-unique-values": p(H),
        "get-field-range": p(re),
        onApplyFilter: p(n),
        onRemoveFilter: p(k),
        onClearFilters: p(P)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : w("", !0),
      s.config.sortOptions.length > 0 ? (d(), he(Ns, {
        key: 2,
        "sort-by": p(N),
        "onUpdate:sortBy": $[1] || ($[1] = (e) => Fe(N) ? N.value = e : null),
        "sort-order": p(j),
        "onUpdate:sortOrder": $[2] || ($[2] = (e) => Fe(j) ? j.value = e : null),
        "available-fields": s.config.sortOptions
      }, null, 8, ["sort-by", "sort-order", "available-fields"])) : w("", !0),
      Oe(ks, {
        "total-results": p(K).length,
        "display-mode": p(M),
        loading: ge.value,
        "has-active-filters": p(V).length > 0,
        "selected-count": p(T).length,
        "current-page": p(L),
        "total-pages": p(i),
        "onUpdate:displayMode": $[3] || ($[3] = (e) => M.value = e),
        onClearFilters: p(P),
        onClearSelection: _e,
        onGoToPage: p(O)
      }, {
        default: Ie(() => [
          (d(!0), m(le, null, oe(p(K), (e, t) => (d(), he(Ot, {
            key: e.db_id || `${e.material}-${e.l}-${e.w}-${e.t}-${t}`,
            stock: e,
            "is-selected": p(Q)(e),
            "is-disabled": me(e),
            "format-price": s.formatPrice,
            "button-color": s.colors.button,
            "button-text-color": s.colors.buttonText,
            locale: s.locale,
            "display-mode": p(M),
            mode: s.mode,
            onToggleSelection: ye,
            onOrderSample: Se
          }, null, 8, ["stock", "is-selected", "is-disabled", "format-price", "button-color", "button-text-color", "locale", "display-mode", "mode"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "selected-count", "current-page", "total-pages", "onClearFilters", "onGoToPage"])
    ]));
  }
});
export {
  Ks as default
};
