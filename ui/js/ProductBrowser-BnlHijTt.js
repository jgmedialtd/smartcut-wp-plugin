import { t as m, tData as re } from "./i18n-DGE8ywV5.js";
import { L as ce } from "./EcommerceCalculator-CTmE4c2O.js";
import { d as G, o as c, c as u, A as N, w as Q, g as O, R as x, a as y, b as C, t as b, n as ne, s as p, x as F, k as j, j as D, u as o, F as A, f as R, m as ue, p as K } from "./vendor-vue-CrNGqS0k.js";
import { _ as H } from "./Launch-9LoYYNsk.js";
import { C as ie, a as de } from "./CatalogueSort-DL7jHx4P.js";
const ge = ["onKeydown"], fe = {
  key: 0,
  class: "catalog-card__image-wrapper"
}, ve = ["src", "alt"], me = { class: "catalog-card__content" }, pe = { class: "catalog-card__title" }, be = {
  key: 0,
  class: "catalog-card__code"
}, ye = {
  key: 1,
  class: "catalog-card__description"
}, he = {
  key: 0,
  class: "catalog-card__badges"
}, Ce = { class: "catalog-card__footer" }, _e = { class: "catalog-card__meta" }, ke = { class: "catalog-card__actions" }, we = ["disabled"], $e = /* @__PURE__ */ G({
  __name: "CatalogCard",
  props: {
    title: { default: "" },
    code: { default: "" },
    description: { default: "" },
    imageUrl: { default: "" },
    selected: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    displayMode: { default: "grid" },
    showImage: { type: Boolean, default: !0 },
    actionLabel: { default: "Select" },
    buttonColor: { default: "#0e7fa6" },
    buttonTextColor: { default: "#ffffff" }
  },
  emits: ["click", "select"],
  setup(s, { emit: i }) {
    const w = s, $ = i, I = p(!1), _ = p(!1), e = F(() => w.selected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": w.buttonTextColor,
      "--btn-bg": w.buttonColor,
      "--btn-hover-bg": B(w.buttonColor, -8)
    });
    function B(g, f) {
      const L = g.replace("#", ""), h = parseInt(L, 16), k = Math.round(2.55 * f), P = (h >> 16) + k, l = (h >> 8 & 255) + k, r = (h & 255) + k;
      return `#${(16777216 + (P < 255 ? P < 1 ? 0 : P : 255) * 65536 + (l < 255 ? l < 1 ? 0 : l : 255) * 256 + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)}`;
    }
    function d() {
      w.disabled || $("click");
    }
    function S() {
      w.disabled || $("select");
    }
    return (g, f) => (c(), u("div", {
      class: O(["catalog-card", {
        "catalog-card--selected": s.selected,
        "catalog-card--disabled": s.disabled,
        "catalog-card--list": s.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: d,
      onKeydown: [
        N(d, ["enter"]),
        N(Q(d, ["prevent"]), ["space"])
      ]
    }, [
      s.showImage && s.imageUrl && !I.value ? (c(), u("div", fe, [
        x(g.$slots, "image", {}, () => [
          f[2] || (f[2] = y("div", { class: "catalog-card__image-placeholder" }, null, -1)),
          y("img", {
            class: O(["catalog-card__image", { "catalog-card__image--loaded": _.value }]),
            src: s.imageUrl,
            alt: s.title,
            loading: "lazy",
            onLoad: f[0] || (f[0] = (L) => _.value = !0),
            onError: f[1] || (f[1] = (L) => I.value = !0)
          }, null, 42, ve)
        ], !0)
      ])) : C("", !0),
      y("div", me, [
        x(g.$slots, "content", {}, () => [
          y("h3", pe, b(s.title), 1),
          s.code ? (c(), u("p", be, b(s.code), 1)) : C("", !0),
          s.description ? (c(), u("p", ye, b(s.description), 1)) : C("", !0)
        ], !0),
        g.$slots.badges ? (c(), u("div", he, [
          x(g.$slots, "badges", {}, void 0, !0)
        ])) : C("", !0)
      ]),
      y("div", Ce, [
        x(g.$slots, "footer", {}, () => [
          y("div", _e, [
            x(g.$slots, "meta", {}, void 0, !0)
          ]),
          y("div", ke, [
            x(g.$slots, "actions", {}, () => [
              y("button", {
                type: "button",
                class: O(["c-btn c-btn--sm", { "c-btn--delete": s.selected }]),
                style: ne(e.value),
                disabled: s.disabled,
                onClick: Q(S, ["stop"])
              }, b(s.actionLabel), 15, we)
            ], !0)
          ])
        ], !0)
      ])
    ], 42, ge));
  }
}), Se = /* @__PURE__ */ H($e, [["__scopeId", "data-v-0a6cc915"]]);
function Pe(s) {
  const {
    config: i,
    endpoint: w,
    transformItem: $ = (a) => a,
    getItemId: I = (a) => a._id || a.id
  } = s, _ = p([]), e = p(null), B = p([]), d = p(null), S = p(""), g = p("name"), f = p("asc"), L = p("grid"), h = p(1), k = p(1), P = p(0), l = p(!1), r = p(null);
  let t = null;
  function U(a) {
    if (!i.value) return "";
    const { apiUrl: n, orgSlug: v, isCustomDomain: E } = i.value;
    return E ? `${n}ecommerce/${a}` : `${n}ecommerce/${v}/${a}`;
  }
  async function T() {
    if (i.value) {
      l.value = !0, r.value = null;
      try {
        const a = new URL(U(w));
        a.searchParams.set("page", String(h.value)), a.searchParams.set("limit", String(i.value.itemsPerPage || 20)), a.searchParams.set("sortBy", g.value), a.searchParams.set("sortOrder", f.value), S.value.trim() && a.searchParams.set("search", S.value.trim()), d.value && a.searchParams.set("category", d.value);
        const n = await fetch(a.toString(), {
          credentials: "include"
        });
        if (!n.ok)
          throw new Error(`Server returned ${n.status}`);
        const v = await n.json();
        _.value = (v.data?.items || v.items || []).map($), k.value = v.data?.pagination?.totalPages || v.pagination?.totalPages || 1, P.value = v.data?.pagination?.total || v.pagination?.total || 0;
      } catch (a) {
        console.error("[useCatalogBrowser] Fetch error:", a), r.value = a.message || "Failed to fetch items", _.value = [], k.value = 1, P.value = 0;
      } finally {
        l.value = !1;
      }
    }
  }
  async function M() {
    if (i.value)
      try {
        const a = U("product-categories"), n = await fetch(a, {
          credentials: "include"
        });
        if (!n.ok)
          throw new Error(`Server returned ${n.status}`);
        const v = await n.json();
        B.value = v.data || v || [];
      } catch (a) {
        console.error("[useCatalogBrowser] Categories fetch error:", a), B.value = [];
      }
  }
  async function q(a) {
    if (!i.value) return null;
    try {
      const n = U(`${w}/${a}`), v = await fetch(n, {
        credentials: "include"
      });
      if (!v.ok) {
        if (v.status === 404) return null;
        throw new Error(`Server returned ${v.status}`);
      }
      const E = await v.json();
      return $(E.data || E);
    } catch (n) {
      return console.error("[useCatalogBrowser] Fetch by slug error:", n), null;
    }
  }
  function V() {
    _.value = [], l.value = !0, t && clearTimeout(t), t = setTimeout(() => {
      T();
    }, i.value?.debounceMs || 300);
  }
  function J(a) {
    e.value = a;
  }
  function W(a) {
    return e.value ? I(a) === I(e.value) : !1;
  }
  function X(a) {
    d.value = a, h.value = 1, V();
  }
  function Y(a) {
    S.value = a, h.value = 1, V();
  }
  function Z(a, n) {
    g.value = a, n ? f.value = n : f.value = f.value === "asc" ? "desc" : "asc", h.value = 1, T();
  }
  function ee(a) {
    a >= 1 && a <= k.value && (h.value = a, _.value = [], l.value = !0, T());
  }
  function te() {
    S.value = "", d.value = null, h.value = 1, T();
  }
  async function z() {
    await Promise.all([
      M(),
      T()
    ]);
  }
  j(() => i.value, (a) => {
    a && z();
  }, { immediate: !0 });
  const ae = F(() => _.value.length > 0), oe = F(() => B.value.length > 0), le = F(() => !l.value && _.value.length === 0), se = F(() => d.value && B.value.find((n) => n._id === d.value)?.name || null);
  return {
    // State
    items: _,
    selectedItem: e,
    categories: B,
    activeCategory: d,
    searchQuery: S,
    sortBy: g,
    sortOrder: f,
    displayMode: L,
    currentPage: h,
    totalPages: k,
    totalItems: P,
    isLoading: l,
    error: r,
    // Computed
    hasItems: ae,
    hasCategories: oe,
    isEmpty: le,
    activeCategoryName: se,
    // Methods
    fetchItems: T,
    fetchCategories: M,
    fetchItemBySlug: q,
    selectItem: J,
    isSelected: W,
    setCategory: X,
    updateSearch: Y,
    updateSort: Z,
    goToPage: ee,
    clearFilters: te,
    initialize: z
  };
}
function Be(s) {
  return Pe({
    config: s,
    endpoint: "products",
    transformItem: (i) => i,
    getItemId: (i) => i._id || ""
  });
}
const Ie = ["aria-label"], Fe = {
  key: 0,
  class: "catalogue-chrome"
}, Le = {
  key: 1,
  class: "catalogue-categories"
}, Ue = { class: "catalogue-categories__label" }, Te = ["onClick"], xe = {
  key: 2,
  class: "catalogue-loading"
}, Oe = {
  key: 3,
  class: "catalogue-empty"
}, Ee = {
  key: 4,
  class: "product-browser__grid"
}, je = {
  key: 0,
  class: "catalog-badge catalog-badge--featured"
}, De = {
  key: 1,
  class: "catalog-badge catalog-badge--category"
}, Me = {
  key: 0,
  class: "product-price"
}, Ve = {
  key: 5,
  class: "catalogue-pagination"
}, ze = ["disabled"], Ne = { class: "catalogue-pagination__info" }, Qe = ["disabled"], Ae = /* @__PURE__ */ G({
  __name: "ProductBrowser",
  props: {
    config: {},
    initialProductId: {},
    showCategories: { type: Boolean, default: !0 },
    showSearch: { type: Boolean, default: !0 },
    showSort: { type: Boolean, default: !0 },
    buttonColor: { default: "#0e7fa6" },
    buttonTextColor: { default: "#ffffff" },
    currencySymbol: { default: "$" },
    locale: { default: "en-US" }
  },
  emits: ["product-selected", "product-click"],
  setup(s, { expose: i, emit: w }) {
    const $ = s, I = w, _ = F(() => $.config), e = Be(_), B = [
      { value: "displayOrder", label: m("ecommerce.products.sort_featured") },
      { value: "name", label: m("ecommerce.products.sort_name") },
      { value: "cost", label: m("stockFilter.price") },
      { value: "createdAt", label: m("ecommerce.products.sort_newest") }
    ], d = p(e.searchQuery.value);
    j(() => e.searchQuery.value, (l) => {
      d.value = l;
    }), j(d, (l) => {
      l !== e.searchQuery.value && e.updateSearch(l);
    });
    const S = F({
      get: () => e.sortBy.value,
      set: (l) => {
        l !== e.sortBy.value && e.updateSort(l, e.sortOrder.value);
      }
    }), g = F({
      get: () => e.sortOrder.value,
      set: (l) => {
        l !== e.sortOrder.value && e.updateSort(e.sortBy.value, l);
      }
    }), f = {
      formula: "Formula",
      simple: "Product",
      bundle: "Bundle"
    };
    function L(l) {
      return l._id || "";
    }
    function h(l) {
      return new Intl.NumberFormat($.locale, {
        style: "currency",
        currency: "USD",
        // org currency injection is a separate piece of work
        minimumFractionDigits: 2
      }).format(l);
    }
    function k(l) {
      e.selectItem(l), I("product-click", l), I("product-selected", l);
    }
    let P = !1;
    return j(() => [$.config, $.initialProductId], async ([l, r]) => {
      if (P || !l || !r) return;
      P = !0;
      const t = await e.fetchItemBySlug(r);
      t && k(t);
    }, { immediate: !0 }), i({
      browser: e,
      refresh: e.fetchItems,
      selectProduct: e.selectItem,
      selectedProduct: e.selectedItem
    }), (l, r) => (c(), u("section", {
      class: "product-browser smartcut-content",
      "aria-label": o(m)("ecommerce.products.catalogue_aria")
    }, [
      s.showSearch || s.showSort ? (c(), u("div", Fe, [
        s.showSearch ? (c(), D(ie, {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": r[0] || (r[0] = (t) => d.value = t),
          placeholder: o(m)("ecommerce.products.search_placeholder")
        }, null, 8, ["modelValue", "placeholder"])) : C("", !0),
        s.showSort ? (c(), D(de, {
          key: 1,
          "sort-by": S.value,
          "onUpdate:sortBy": r[1] || (r[1] = (t) => S.value = t),
          "sort-order": g.value,
          "onUpdate:sortOrder": r[2] || (r[2] = (t) => g.value = t),
          options: B
        }, null, 8, ["sort-by", "sort-order"])) : C("", !0)
      ])) : C("", !0),
      s.showCategories && o(e).hasCategories.value ? (c(), u("div", Le, [
        y("span", Ue, b(o(m)("general.category")) + ":", 1),
        y("button", {
          type: "button",
          class: O(["catalogue-chip", { "catalogue-chip--active": !o(e).activeCategory.value }]),
          onClick: r[3] || (r[3] = (t) => o(e).setCategory(null))
        }, b(o(m)("stockFilter.all")), 3),
        (c(!0), u(A, null, R(o(e).categories.value, (t) => (c(), u("button", {
          key: t._id,
          type: "button",
          class: O(["catalogue-chip", { "catalogue-chip--active": o(e).activeCategory.value === t._id }]),
          onClick: (U) => o(e).setCategory(t._id || null)
        }, b(t.name), 11, Te))), 128))
      ])) : C("", !0),
      o(e).isLoading.value ? (c(), u("div", xe, [
        ue(ce, {
          size: "medium",
          label: o(m)("ecommerce.products.loading")
        }, null, 8, ["label"])
      ])) : o(e).isEmpty.value ? (c(), u("div", Oe, [
        y("p", null, b(o(m)("ecommerce.products.none_found")), 1),
        o(e).searchQuery.value || o(e).activeCategory.value ? (c(), u("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm",
          onClick: r[4] || (r[4] = (t) => o(e).clearFilters())
        }, b(o(m)("stockFilter.clear_filters")), 1)) : C("", !0)
      ])) : (c(), u("div", Ee, [
        (c(!0), u(A, null, R(o(e).items.value, (t) => (c(), D(Se, {
          key: L(t),
          title: t.name,
          description: t.shortDescription || t.description,
          "image-url": t.imageUrl,
          selected: o(e).isSelected(t),
          "display-mode": "grid",
          "action-label": o(e).isSelected(t) ? o(m)("ecommerce.products.selected") : o(m)("ecommerce.products.configure"),
          "button-color": s.buttonColor,
          "button-text-color": s.buttonTextColor,
          onClick: (U) => k(t),
          onSelect: (U) => k(t)
        }, {
          badges: K(() => [
            y("span", {
              class: O(["catalog-badge", `catalog-badge--${t.type}`])
            }, b(f[t.type] || t.type), 3),
            t.featured ? (c(), u("span", je, b(o(m)("ecommerce.products.featured")), 1)) : C("", !0),
            t.category && typeof t.category == "object" ? (c(), u("span", De, b(t.category.name), 1)) : C("", !0)
          ]),
          meta: K(() => [
            t.type === "simple" && t.simpleConfig?.price ? (c(), u("span", Me, b(h(t.simpleConfig.price)), 1)) : C("", !0)
          ]),
          _: 2
        }, 1032, ["title", "description", "image-url", "selected", "action-label", "button-color", "button-text-color", "onClick", "onSelect"]))), 128))
      ])),
      o(e).totalPages.value > 1 ? (c(), u("div", Ve, [
        y("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: o(e).currentPage.value <= 1,
          onClick: r[5] || (r[5] = (t) => o(e).goToPage(o(e).currentPage.value - 1))
        }, b(o(m)("pagination.previous")), 9, ze),
        y("span", Ne, b(o(re)("ecommerce.products.page_of", { page: o(e).currentPage.value, pages: o(e).totalPages.value })), 1),
        y("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: o(e).currentPage.value >= o(e).totalPages.value,
          onClick: r[6] || (r[6] = (t) => o(e).goToPage(o(e).currentPage.value + 1))
        }, b(o(m)("pagination.next")), 9, Qe)
      ])) : C("", !0)
    ], 8, Ie));
  }
}), Je = /* @__PURE__ */ H(Ae, [["__scopeId", "data-v-d2e977b1"]]);
export {
  Je as default
};
