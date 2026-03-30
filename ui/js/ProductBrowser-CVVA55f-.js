import { d as Q, a as c, b as n, e as S, f as v, O as u, P as V, p as L, q, r as m, t as I, c as T, x as ne, F as G, k as H, u as D, g as J, w as ce, j as ie, Q as ue, y as B, R as j, S as z } from "./vendor-vue-DyIrsOEK.js";
import { _ as R } from "./Launch-CW1xtdsr.js";
const de = ["onKeydown"], ge = {
  key: 0,
  class: "catalog-card__image"
}, ve = ["src", "alt"], be = {
  key: 1,
  class: "catalog-card__placeholder"
}, me = { class: "catalog-card__content" }, fe = { class: "catalog-card__title" }, ye = {
  key: 0,
  class: "catalog-card__description"
}, he = {
  key: 0,
  class: "catalog-card__badges"
}, we = { class: "catalog-card__footer" }, $e = { class: "catalog-card__meta" }, Ce = { class: "catalog-card__actions" }, ke = ["disabled"], Pe = /* @__PURE__ */ Q({
  __name: "CatalogCard",
  props: {
    title: { default: "" },
    description: { default: "" },
    imageUrl: { default: "" },
    selected: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    displayMode: { default: "grid" },
    showImage: { type: Boolean, default: !0 },
    actionLabel: { default: "Select" },
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" }
  },
  emits: ["click", "select"],
  setup(e, { emit: d }) {
    const b = e, C = d, k = m(!1), f = T(() => b.title ? b.title.charAt(0).toUpperCase() : "?"), l = T(() => b.selected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": b.buttonTextColor,
      "--btn-bg": b.buttonColor,
      "--btn-hover-bg": r(b.buttonColor, -8)
    });
    function r(s, w) {
      const a = s.replace("#", ""), h = parseInt(a, 16), $ = Math.round(2.55 * w), p = (h >> 16) + $, P = (h >> 8 & 255) + $, F = (h & 255) + $;
      return `#${(16777216 + (p < 255 ? p < 1 ? 0 : p : 255) * 65536 + (P < 255 ? P < 1 ? 0 : P : 255) * 256 + (F < 255 ? F < 1 ? 0 : F : 255)).toString(16).slice(1)}`;
    }
    function o() {
      b.disabled || C("click");
    }
    function y() {
      b.disabled || C("select");
    }
    return (s, w) => (n(), c("div", {
      class: L(["catalog-card", {
        "catalog-card--selected": e.selected,
        "catalog-card--disabled": e.disabled,
        "catalog-card--list": e.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: o,
      onKeydown: [
        V(o, ["enter"]),
        V(q(o, ["prevent"]), ["space"])
      ]
    }, [
      e.showImage ? (n(), c("div", ge, [
        u(s.$slots, "image", {}, () => [
          e.imageUrl && !k.value ? (n(), c("img", {
            key: 0,
            src: e.imageUrl,
            alt: e.title,
            loading: "lazy",
            onError: w[0] || (w[0] = (a) => k.value = !0)
          }, null, 40, ve)) : (n(), c("div", be, [
            v("span", null, I(f.value), 1)
          ]))
        ], !0)
      ])) : S("", !0),
      v("div", me, [
        u(s.$slots, "content", {}, () => [
          v("h3", fe, I(e.title), 1),
          e.description ? (n(), c("p", ye, I(e.description), 1)) : S("", !0)
        ], !0),
        s.$slots.badges ? (n(), c("div", he, [
          u(s.$slots, "badges", {}, void 0, !0)
        ])) : S("", !0)
      ]),
      v("div", we, [
        u(s.$slots, "footer", {}, () => [
          v("div", $e, [
            u(s.$slots, "meta", {}, void 0, !0)
          ]),
          v("div", Ce, [
            u(s.$slots, "actions", {}, () => [
              v("button", {
                type: "button",
                class: L(["c-btn c-btn--sm", { "c-btn--delete": e.selected }]),
                style: ne(l.value),
                disabled: e.disabled,
                onClick: q(y, ["stop"])
              }, I(e.actionLabel), 15, ke)
            ], !0)
          ])
        ], !0)
      ])
    ], 42, de));
  }
}), W = /* @__PURE__ */ R(Pe, [["__scopeId", "data-v-1f0431be"]]), Se = { class: "catalog-browser" }, Ie = {
  key: 0,
  class: "catalog-browser__categories"
}, pe = ["onClick"], Be = {
  key: 1,
  class: "catalog-browser__search"
}, Fe = ["value"], Te = {
  key: 2,
  class: "catalog-browser__loading"
}, Ue = {
  key: 3,
  class: "catalog-browser__empty"
}, De = {
  key: 5,
  class: "catalog-browser__pagination"
}, Le = ["disabled"], Me = { class: "pagination-info" }, Ne = ["disabled"], Ee = /* @__PURE__ */ Q({
  __name: "CatalogBrowser",
  props: {
    browser: {},
    showCategories: { type: Boolean, default: !0 },
    showSearch: { type: Boolean, default: !0 },
    getItemId: { type: Function, default: (e) => e._id || e.id || "" },
    getItemName: { type: Function, default: (e) => e.name || "" },
    getItemDescription: { type: Function, default: (e) => e.shortDescription || e.description || "" },
    getItemImage: { type: Function, default: (e) => e.imageUrl || "" }
  },
  setup(e) {
    const d = e, { getItemId: b, getItemName: C, getItemDescription: k, getItemImage: f } = d;
    return (l, r) => (n(), c("div", Se, [
      e.showCategories && e.browser.hasCategories.value ? (n(), c("div", Ie, [
        u(l.$slots, "categories", {
          categories: e.browser.categories.value,
          active: e.browser.activeCategory.value,
          setCategory: e.browser.setCategory
        }, () => [
          v("button", {
            type: "button",
            class: L(["category-chip", { "category-chip--active": !e.browser.activeCategory.value }]),
            onClick: r[0] || (r[0] = (o) => e.browser.setCategory(null))
          }, " All ", 2),
          (n(!0), c(G, null, H(e.browser.categories.value, (o) => (n(), c("button", {
            key: o._id,
            type: "button",
            class: L(["category-chip", { "category-chip--active": e.browser.activeCategory.value === o._id }]),
            onClick: (y) => e.browser.setCategory(o._id || null)
          }, I(o.name), 11, pe))), 128))
        ], !0)
      ])) : S("", !0),
      e.showSearch ? (n(), c("div", Be, [
        u(l.$slots, "search", {
          query: e.browser.searchQuery.value,
          updateSearch: e.browser.updateSearch
        }, () => [
          v("input", {
            type: "search",
            class: "catalog-search-input",
            placeholder: "Search...",
            value: e.browser.searchQuery.value,
            onInput: r[1] || (r[1] = (o) => e.browser.updateSearch(o.target.value))
          }, null, 40, Fe)
        ], !0)
      ])) : S("", !0),
      e.browser.isLoading.value ? (n(), c("div", Te, [
        u(l.$slots, "loading", {}, () => [
          r[5] || (r[5] = v("div", { class: "loading-spinner" }, null, -1)),
          r[6] || (r[6] = v("span", null, "Loading...", -1))
        ], !0)
      ])) : e.browser.isEmpty.value ? (n(), c("div", Ue, [
        u(l.$slots, "empty", {}, () => [
          r[7] || (r[7] = v("p", null, "No items found.", -1)),
          e.browser.searchQuery.value || e.browser.activeCategory.value ? (n(), c("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm",
            onClick: r[2] || (r[2] = (o) => e.browser.clearFilters())
          }, " Clear filters ")) : S("", !0)
        ], !0)
      ])) : (n(), c("div", {
        key: 4,
        class: L(["catalog-browser__grid", `catalog-browser__grid--${e.browser.displayMode.value}`])
      }, [
        u(l.$slots, "items", {
          items: e.browser.items.value,
          selectItem: e.browser.selectItem,
          isSelected: e.browser.isSelected
        }, () => [
          (n(!0), c(G, null, H(e.browser.items.value, (o) => u(l.$slots, "item", {
            key: D(b)(o),
            item: o,
            select: () => e.browser.selectItem(o),
            selected: e.browser.isSelected(o)
          }, () => [
            J(W, {
              title: D(C)(o),
              description: D(k)(o),
              "image-url": D(f)(o),
              selected: e.browser.isSelected(o),
              "display-mode": e.browser.displayMode.value,
              "action-label": e.browser.isSelected(o) ? "Selected" : "Select",
              onClick: (y) => e.browser.selectItem(o),
              onSelect: (y) => e.browser.selectItem(o)
            }, null, 8, ["title", "description", "image-url", "selected", "display-mode", "action-label", "onClick", "onSelect"])
          ], !0)), 128))
        ], !0)
      ], 2)),
      e.browser.totalPages.value > 1 ? (n(), c("div", De, [
        u(l.$slots, "pagination", {
          currentPage: e.browser.currentPage.value,
          totalPages: e.browser.totalPages.value,
          goToPage: e.browser.goToPage
        }, () => [
          v("button", {
            type: "button",
            class: "pagination-btn",
            disabled: e.browser.currentPage.value <= 1,
            onClick: r[3] || (r[3] = (o) => e.browser.goToPage(e.browser.currentPage.value - 1))
          }, " Previous ", 8, Le),
          v("span", Me, " Page " + I(e.browser.currentPage.value) + " of " + I(e.browser.totalPages.value), 1),
          v("button", {
            type: "button",
            class: "pagination-btn",
            disabled: e.browser.currentPage.value >= e.browser.totalPages.value,
            onClick: r[4] || (r[4] = (o) => e.browser.goToPage(e.browser.currentPage.value + 1))
          }, " Next ", 8, Ne)
        ], !0)
      ])) : S("", !0)
    ]));
  }
}), je = /* @__PURE__ */ R(Ee, [["__scopeId", "data-v-b6f71d9e"]]);
function ze(e) {
  const {
    config: d,
    endpoint: b,
    transformItem: C = (t) => t,
    getItemId: k = (t) => t._id || t.id
  } = e, f = m([]), l = m(null), r = m([]), o = m(null), y = m(""), s = m("name"), w = m("asc"), a = m("grid"), h = m(1), $ = m(1), p = m(0), P = m(!1), F = m(null);
  let N = null;
  function E(t) {
    if (!d.value) return "";
    const { apiUrl: i, orgSlug: g, isCustomDomain: M } = d.value;
    return M ? `${i}ecommerce/${t}` : `${i}ecommerce/${g}/${t}`;
  }
  async function U() {
    if (d.value) {
      P.value = !0, F.value = null;
      try {
        const t = new URL(E(b));
        t.searchParams.set("page", String(h.value)), t.searchParams.set("limit", String(d.value.itemsPerPage || 20)), t.searchParams.set("sortBy", s.value), t.searchParams.set("sortOrder", w.value), y.value.trim() && t.searchParams.set("search", y.value.trim()), o.value && t.searchParams.set("category", o.value);
        const i = await fetch(t.toString(), {
          credentials: "include"
        });
        if (!i.ok)
          throw new Error(`Server returned ${i.status}`);
        const g = await i.json();
        f.value = (g.data?.items || g.items || []).map(C), $.value = g.data?.pagination?.totalPages || g.pagination?.totalPages || 1, p.value = g.data?.pagination?.total || g.pagination?.total || 0;
      } catch (t) {
        console.error("[useCatalogBrowser] Fetch error:", t), F.value = t.message || "Failed to fetch items", f.value = [], $.value = 1, p.value = 0;
      } finally {
        P.value = !1;
      }
    }
  }
  async function A() {
    if (d.value)
      try {
        const t = E("product-categories"), i = await fetch(t, {
          credentials: "include"
        });
        if (!i.ok)
          throw new Error(`Server returned ${i.status}`);
        const g = await i.json();
        r.value = g.data || g || [];
      } catch (t) {
        console.error("[useCatalogBrowser] Categories fetch error:", t), r.value = [];
      }
  }
  async function X(t) {
    if (!d.value) return null;
    try {
      const i = E(`${b}/${t}`), g = await fetch(i, {
        credentials: "include"
      });
      if (!g.ok) {
        if (g.status === 404) return null;
        throw new Error(`Server returned ${g.status}`);
      }
      const M = await g.json();
      return C(M.data || M);
    } catch (i) {
      return console.error("[useCatalogBrowser] Fetch by slug error:", i), null;
    }
  }
  function K() {
    f.value = [], P.value = !0, N && clearTimeout(N), N = setTimeout(() => {
      U();
    }, d.value?.debounceMs || 300);
  }
  function Y(t) {
    l.value = t;
  }
  function Z(t) {
    return l.value ? k(t) === k(l.value) : !1;
  }
  function x(t) {
    o.value = t, h.value = 1, K();
  }
  function _(t) {
    y.value = t, h.value = 1, K();
  }
  function ee(t, i) {
    s.value = t, i ? w.value = i : w.value = w.value === "asc" ? "desc" : "asc", h.value = 1, U();
  }
  function te(t) {
    t >= 1 && t <= $.value && (h.value = t, f.value = [], P.value = !0, U());
  }
  function ae() {
    y.value = "", o.value = null, h.value = 1, U();
  }
  async function O() {
    await Promise.all([
      A(),
      U()
    ]);
  }
  ce(() => d.value, (t) => {
    t && O();
  }, { immediate: !0 });
  const oe = T(() => f.value.length > 0), se = T(() => r.value.length > 0), re = T(() => !P.value && f.value.length === 0), le = T(() => o.value && r.value.find((i) => i._id === o.value)?.name || null);
  return {
    // State
    items: f,
    selectedItem: l,
    categories: r,
    activeCategory: o,
    searchQuery: y,
    sortBy: s,
    sortOrder: w,
    displayMode: a,
    currentPage: h,
    totalPages: $,
    totalItems: p,
    isLoading: P,
    error: F,
    // Computed
    hasItems: oe,
    hasCategories: se,
    isEmpty: re,
    activeCategoryName: le,
    // Methods
    fetchItems: U,
    fetchCategories: A,
    fetchItemBySlug: X,
    selectItem: Y,
    isSelected: Z,
    setCategory: x,
    updateSearch: _,
    updateSort: ee,
    goToPage: te,
    clearFilters: ae,
    initialize: O
  };
}
function Qe(e) {
  return ze({
    config: e,
    endpoint: "products",
    transformItem: (d) => d,
    getItemId: (d) => d._id || ""
  });
}
const Re = {
  key: 0,
  class: "catalog-badge catalog-badge--featured"
}, Ae = {
  key: 1,
  class: "catalog-badge catalog-badge--category"
}, Ke = {
  key: 0,
  class: "product-price"
}, Oe = /* @__PURE__ */ Q({
  __name: "ProductBrowser",
  props: {
    config: {},
    showCategories: { type: Boolean, default: !0 },
    showSearch: { type: Boolean, default: !0 },
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    currencySymbol: { default: "$" },
    locale: { default: "en-US" }
  },
  emits: ["product-selected", "product-click"],
  setup(e, { expose: d, emit: b }) {
    const C = e, k = b, f = T(() => C.config), l = Qe(f), r = {
      formula: "Formula",
      simple: "Product",
      bundle: "Bundle"
    };
    function o(s) {
      return new Intl.NumberFormat(C.locale, {
        style: "currency",
        currency: "USD",
        // This should come from org config
        minimumFractionDigits: 2
      }).format(s);
    }
    function y(s) {
      l.selectItem(s), k("product-click", s), k("product-selected", s);
    }
    return d({
      browser: l,
      refresh: l.fetchItems,
      selectProduct: l.selectItem,
      selectedProduct: l.selectedItem
    }), (s, w) => (n(), ie(je, {
      browser: D(l),
      "show-categories": e.showCategories,
      "show-search": e.showSearch,
      "get-item-id": (a) => a._id || "",
      "get-item-name": (a) => a.name,
      "get-item-description": (a) => a.shortDescription || a.description || "",
      "get-item-image": (a) => a.imageUrl || ""
    }, ue({
      item: B(({ item: a, select: h, selected: $ }) => [
        J(W, {
          title: a.name,
          description: a.shortDescription || a.description,
          "image-url": a.imageUrl,
          selected: $,
          "display-mode": D(l).displayMode.value,
          "action-label": $ ? "Selected" : "Configure",
          "button-color": e.buttonColor,
          "button-text-color": e.buttonTextColor,
          onClick: (p) => y(a),
          onSelect: (p) => y(a)
        }, {
          badges: B(() => [
            v("span", {
              class: L(["catalog-badge", `catalog-badge--${a.type}`])
            }, I(r[a.type] || a.type), 3),
            a.featured ? (n(), c("span", Re, " Featured ")) : S("", !0),
            a.category && typeof a.category == "object" ? (n(), c("span", Ae, I(a.category.name), 1)) : S("", !0)
          ]),
          meta: B(() => [
            u(s.$slots, "product-meta", { product: a }, () => [
              a.type === "simple" && a.simpleConfig?.price ? (n(), c("span", Ke, I(o(a.simpleConfig.price)), 1)) : S("", !0)
            ], !0)
          ]),
          _: 2
        }, 1032, ["title", "description", "image-url", "selected", "display-mode", "action-label", "button-color", "button-text-color", "onClick", "onSelect"])
      ]),
      _: 2
    }, [
      s.$slots.categories ? {
        name: "categories",
        fn: B((a) => [
          u(s.$slots, "categories", j(z(a)), void 0, !0)
        ]),
        key: "0"
      } : void 0,
      s.$slots.search ? {
        name: "search",
        fn: B((a) => [
          u(s.$slots, "search", j(z(a)), void 0, !0)
        ]),
        key: "1"
      } : void 0,
      s.$slots.loading ? {
        name: "loading",
        fn: B(() => [
          u(s.$slots, "loading", {}, void 0, !0)
        ]),
        key: "2"
      } : void 0,
      s.$slots.empty ? {
        name: "empty",
        fn: B(() => [
          u(s.$slots, "empty", {}, void 0, !0)
        ]),
        key: "3"
      } : void 0,
      s.$slots.pagination ? {
        name: "pagination",
        fn: B((a) => [
          u(s.$slots, "pagination", j(z(a)), void 0, !0)
        ]),
        key: "4"
      } : void 0
    ]), 1032, ["browser", "show-categories", "show-search", "get-item-id", "get-item-name", "get-item-description", "get-item-image"]));
  }
}), Ge = /* @__PURE__ */ R(Oe, [["__scopeId", "data-v-c43f8733"]]);
export {
  Ge as default
};
