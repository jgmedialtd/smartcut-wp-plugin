import { L as se } from "./EcommerceCalculator-ClNeqZHE.js";
import { d as R, o as n, e as u, N as z, A, y as T, G as N, j as b, f as p, t as P, B as re, g as m, c as I, w as O, b as x, u as r, F as D, C as Q, i as ne, E as K } from "./vendor-vue-QD0FJS8o.js";
import { _ as G } from "./Launch-NSW_K3VG.js";
import { C as ce, a as ue } from "./CatalogueSort-DV45LlTJ.js";
const ie = ["onKeydown"], de = {
  key: 0,
  class: "catalog-card__image-wrapper"
}, ge = ["src", "alt"], ve = { class: "catalog-card__content" }, fe = { class: "catalog-card__title" }, me = {
  key: 0,
  class: "catalog-card__code"
}, be = {
  key: 1,
  class: "catalog-card__description"
}, ye = {
  key: 0,
  class: "catalog-card__badges"
}, pe = { class: "catalog-card__footer" }, he = { class: "catalog-card__meta" }, Ce = { class: "catalog-card__actions" }, we = ["disabled"], $e = /* @__PURE__ */ R({
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
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" }
  },
  emits: ["click", "select"],
  setup(l, { emit: i }) {
    const w = l, $ = i, B = m(!1), h = m(!1), e = I(() => w.selected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": w.buttonTextColor,
      "--btn-bg": w.buttonColor,
      "--btn-hover-bg": _(w.buttonColor, -8)
    });
    function _(g, v) {
      const L = g.replace("#", ""), y = parseInt(L, 16), C = Math.round(2.55 * v), S = (y >> 16) + C, o = (y >> 8 & 255) + C, s = (y & 255) + C;
      return `#${(16777216 + (S < 255 ? S < 1 ? 0 : S : 255) * 65536 + (o < 255 ? o < 1 ? 0 : o : 255) * 256 + (s < 255 ? s < 1 ? 0 : s : 255)).toString(16).slice(1)}`;
    }
    function d() {
      w.disabled || $("click");
    }
    function k() {
      w.disabled || $("select");
    }
    return (g, v) => (n(), u("div", {
      class: T(["catalog-card", {
        "catalog-card--selected": l.selected,
        "catalog-card--disabled": l.disabled,
        "catalog-card--list": l.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: d,
      onKeydown: [
        z(d, ["enter"]),
        z(A(d, ["prevent"]), ["space"])
      ]
    }, [
      l.showImage && l.imageUrl && !B.value ? (n(), u("div", de, [
        N(g.$slots, "image", {}, () => [
          v[2] || (v[2] = b("div", { class: "catalog-card__image-placeholder" }, null, -1)),
          b("img", {
            class: T(["catalog-card__image", { "catalog-card__image--loaded": h.value }]),
            src: l.imageUrl,
            alt: l.title,
            loading: "lazy",
            onLoad: v[0] || (v[0] = (L) => h.value = !0),
            onError: v[1] || (v[1] = (L) => B.value = !0)
          }, null, 42, ge)
        ], !0)
      ])) : p("", !0),
      b("div", ve, [
        N(g.$slots, "content", {}, () => [
          b("h3", fe, P(l.title), 1),
          l.code ? (n(), u("p", me, P(l.code), 1)) : p("", !0),
          l.description ? (n(), u("p", be, P(l.description), 1)) : p("", !0)
        ], !0),
        g.$slots.badges ? (n(), u("div", ye, [
          N(g.$slots, "badges", {}, void 0, !0)
        ])) : p("", !0)
      ]),
      b("div", pe, [
        N(g.$slots, "footer", {}, () => [
          b("div", he, [
            N(g.$slots, "meta", {}, void 0, !0)
          ]),
          b("div", Ce, [
            N(g.$slots, "actions", {}, () => [
              b("button", {
                type: "button",
                class: T(["c-btn c-btn--sm", { "c-btn--delete": l.selected }]),
                style: re(e.value),
                disabled: l.disabled,
                onClick: A(k, ["stop"])
              }, P(l.actionLabel), 15, we)
            ], !0)
          ])
        ], !0)
      ])
    ], 42, ie));
  }
}), ke = /* @__PURE__ */ G($e, [["__scopeId", "data-v-bbf21f24"]]);
function Se(l) {
  const {
    config: i,
    endpoint: w,
    transformItem: $ = (a) => a,
    getItemId: B = (a) => a._id || a.id
  } = l, h = m([]), e = m(null), _ = m([]), d = m(null), k = m(""), g = m("name"), v = m("asc"), L = m("grid"), y = m(1), C = m(1), S = m(0), o = m(!1), s = m(null);
  let t = null;
  function F(a) {
    if (!i.value) return "";
    const { apiUrl: c, orgSlug: f, isCustomDomain: E } = i.value;
    return E ? `${c}ecommerce/${a}` : `${c}ecommerce/${f}/${a}`;
  }
  async function U() {
    if (i.value) {
      o.value = !0, s.value = null;
      try {
        const a = new URL(F(w));
        a.searchParams.set("page", String(y.value)), a.searchParams.set("limit", String(i.value.itemsPerPage || 20)), a.searchParams.set("sortBy", g.value), a.searchParams.set("sortOrder", v.value), k.value.trim() && a.searchParams.set("search", k.value.trim()), d.value && a.searchParams.set("category", d.value);
        const c = await fetch(a.toString(), {
          credentials: "include"
        });
        if (!c.ok)
          throw new Error(`Server returned ${c.status}`);
        const f = await c.json();
        h.value = (f.data?.items || f.items || []).map($), C.value = f.data?.pagination?.totalPages || f.pagination?.totalPages || 1, S.value = f.data?.pagination?.total || f.pagination?.total || 0;
      } catch (a) {
        console.error("[useCatalogBrowser] Fetch error:", a), s.value = a.message || "Failed to fetch items", h.value = [], C.value = 1, S.value = 0;
      } finally {
        o.value = !1;
      }
    }
  }
  async function j() {
    if (i.value)
      try {
        const a = F("product-categories"), c = await fetch(a, {
          credentials: "include"
        });
        if (!c.ok)
          throw new Error(`Server returned ${c.status}`);
        const f = await c.json();
        _.value = f.data || f || [];
      } catch (a) {
        console.error("[useCatalogBrowser] Categories fetch error:", a), _.value = [];
      }
  }
  async function H(a) {
    if (!i.value) return null;
    try {
      const c = F(`${w}/${a}`), f = await fetch(c, {
        credentials: "include"
      });
      if (!f.ok) {
        if (f.status === 404) return null;
        throw new Error(`Server returned ${f.status}`);
      }
      const E = await f.json();
      return $(E.data || E);
    } catch (c) {
      return console.error("[useCatalogBrowser] Fetch by slug error:", c), null;
    }
  }
  function M() {
    h.value = [], o.value = !0, t && clearTimeout(t), t = setTimeout(() => {
      U();
    }, i.value?.debounceMs || 300);
  }
  function q(a) {
    e.value = a;
  }
  function J(a) {
    return e.value ? B(a) === B(e.value) : !1;
  }
  function W(a) {
    d.value = a, y.value = 1, M();
  }
  function X(a) {
    k.value = a, y.value = 1, M();
  }
  function Y(a, c) {
    g.value = a, c ? v.value = c : v.value = v.value === "asc" ? "desc" : "asc", y.value = 1, U();
  }
  function Z(a) {
    a >= 1 && a <= C.value && (y.value = a, h.value = [], o.value = !0, U());
  }
  function ee() {
    k.value = "", d.value = null, y.value = 1, U();
  }
  async function V() {
    await Promise.all([
      j(),
      U()
    ]);
  }
  O(() => i.value, (a) => {
    a && V();
  }, { immediate: !0 });
  const te = I(() => h.value.length > 0), ae = I(() => _.value.length > 0), oe = I(() => !o.value && h.value.length === 0), le = I(() => d.value && _.value.find((c) => c._id === d.value)?.name || null);
  return {
    // State
    items: h,
    selectedItem: e,
    categories: _,
    activeCategory: d,
    searchQuery: k,
    sortBy: g,
    sortOrder: v,
    displayMode: L,
    currentPage: y,
    totalPages: C,
    totalItems: S,
    isLoading: o,
    error: s,
    // Computed
    hasItems: te,
    hasCategories: ae,
    isEmpty: oe,
    activeCategoryName: le,
    // Methods
    fetchItems: U,
    fetchCategories: j,
    fetchItemBySlug: H,
    selectItem: q,
    isSelected: J,
    setCategory: W,
    updateSearch: X,
    updateSort: Y,
    goToPage: Z,
    clearFilters: ee,
    initialize: V
  };
}
function Pe(l) {
  return Se({
    config: l,
    endpoint: "products",
    transformItem: (i) => i,
    getItemId: (i) => i._id || ""
  });
}
const _e = {
  class: "product-browser smartcut-content",
  "aria-label": "Product catalogue"
}, Be = {
  key: 0,
  class: "catalogue-chrome"
}, Ie = {
  key: 1,
  class: "catalogue-categories"
}, Le = ["onClick"], Fe = {
  key: 2,
  class: "catalogue-loading"
}, Ue = {
  key: 3,
  class: "catalogue-empty"
}, Ne = {
  key: 4,
  class: "product-browser__grid"
}, Te = {
  key: 0,
  class: "catalog-badge catalog-badge--featured"
}, Ee = {
  key: 1,
  class: "catalog-badge catalog-badge--category"
}, Oe = {
  key: 0,
  class: "product-price"
}, xe = {
  key: 5,
  class: "catalogue-pagination"
}, je = ["disabled"], Me = { class: "catalogue-pagination__info" }, Ve = ["disabled"], ze = /* @__PURE__ */ R({
  __name: "ProductBrowser",
  props: {
    config: {},
    initialProductId: {},
    showCategories: { type: Boolean, default: !0 },
    showSearch: { type: Boolean, default: !0 },
    showSort: { type: Boolean, default: !0 },
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    currencySymbol: { default: "$" },
    locale: { default: "en-US" }
  },
  emits: ["product-selected", "product-click"],
  setup(l, { expose: i, emit: w }) {
    const $ = l, B = w, h = I(() => $.config), e = Pe(h), _ = [
      { value: "displayOrder", label: "Featured order" },
      { value: "name", label: "Name" },
      { value: "cost", label: "Price" },
      { value: "createdAt", label: "Newest" }
    ], d = m(e.searchQuery.value);
    O(() => e.searchQuery.value, (o) => {
      d.value = o;
    }), O(d, (o) => {
      o !== e.searchQuery.value && e.updateSearch(o);
    });
    const k = I({
      get: () => e.sortBy.value,
      set: (o) => {
        o !== e.sortBy.value && e.updateSort(o, e.sortOrder.value);
      }
    }), g = I({
      get: () => e.sortOrder.value,
      set: (o) => {
        o !== e.sortOrder.value && e.updateSort(e.sortBy.value, o);
      }
    }), v = {
      formula: "Formula",
      simple: "Product",
      bundle: "Bundle"
    };
    function L(o) {
      return o._id || "";
    }
    function y(o) {
      return new Intl.NumberFormat($.locale, {
        style: "currency",
        currency: "USD",
        // org currency injection is a separate piece of work
        minimumFractionDigits: 2
      }).format(o);
    }
    function C(o) {
      e.selectItem(o), B("product-click", o), B("product-selected", o);
    }
    let S = !1;
    return O(() => [$.config, $.initialProductId], async ([o, s]) => {
      if (S || !o || !s) return;
      S = !0;
      const t = await e.fetchItemBySlug(s);
      t && C(t);
    }, { immediate: !0 }), i({
      browser: e,
      refresh: e.fetchItems,
      selectProduct: e.selectItem,
      selectedProduct: e.selectedItem
    }), (o, s) => (n(), u("section", _e, [
      l.showSearch || l.showSort ? (n(), u("div", Be, [
        l.showSearch ? (n(), x(ce, {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": s[0] || (s[0] = (t) => d.value = t),
          placeholder: "Search products..."
        }, null, 8, ["modelValue"])) : p("", !0),
        l.showSort ? (n(), x(ue, {
          key: 1,
          "sort-by": k.value,
          "onUpdate:sortBy": s[1] || (s[1] = (t) => k.value = t),
          "sort-order": g.value,
          "onUpdate:sortOrder": s[2] || (s[2] = (t) => g.value = t),
          options: _
        }, null, 8, ["sort-by", "sort-order"])) : p("", !0)
      ])) : p("", !0),
      l.showCategories && r(e).hasCategories.value ? (n(), u("div", Ie, [
        s[7] || (s[7] = b("span", { class: "catalogue-categories__label" }, "Category:", -1)),
        b("button", {
          type: "button",
          class: T(["catalogue-chip", { "catalogue-chip--active": !r(e).activeCategory.value }]),
          onClick: s[3] || (s[3] = (t) => r(e).setCategory(null))
        }, " All ", 2),
        (n(!0), u(D, null, Q(r(e).categories.value, (t) => (n(), u("button", {
          key: t._id,
          type: "button",
          class: T(["catalogue-chip", { "catalogue-chip--active": r(e).activeCategory.value === t._id }]),
          onClick: (F) => r(e).setCategory(t._id || null)
        }, P(t.name), 11, Le))), 128))
      ])) : p("", !0),
      r(e).isLoading.value ? (n(), u("div", Fe, [
        ne(se, {
          size: "medium",
          label: "Loading products..."
        })
      ])) : r(e).isEmpty.value ? (n(), u("div", Ue, [
        s[8] || (s[8] = b("p", null, "No products found.", -1)),
        r(e).searchQuery.value || r(e).activeCategory.value ? (n(), u("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm",
          onClick: s[4] || (s[4] = (t) => r(e).clearFilters())
        }, " Clear filters ")) : p("", !0)
      ])) : (n(), u("div", Ne, [
        (n(!0), u(D, null, Q(r(e).items.value, (t) => (n(), x(ke, {
          key: L(t),
          title: t.name,
          description: t.shortDescription || t.description,
          "image-url": t.imageUrl,
          selected: r(e).isSelected(t),
          "display-mode": "grid",
          "action-label": r(e).isSelected(t) ? "Selected" : "Configure",
          "button-color": l.buttonColor,
          "button-text-color": l.buttonTextColor,
          onClick: (F) => C(t),
          onSelect: (F) => C(t)
        }, {
          badges: K(() => [
            b("span", {
              class: T(["catalog-badge", `catalog-badge--${t.type}`])
            }, P(v[t.type] || t.type), 3),
            t.featured ? (n(), u("span", Te, " Featured ")) : p("", !0),
            t.category && typeof t.category == "object" ? (n(), u("span", Ee, P(t.category.name), 1)) : p("", !0)
          ]),
          meta: K(() => [
            t.type === "simple" && t.simpleConfig?.price ? (n(), u("span", Oe, P(y(t.simpleConfig.price)), 1)) : p("", !0)
          ]),
          _: 2
        }, 1032, ["title", "description", "image-url", "selected", "action-label", "button-color", "button-text-color", "onClick", "onSelect"]))), 128))
      ])),
      r(e).totalPages.value > 1 ? (n(), u("div", xe, [
        b("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: r(e).currentPage.value <= 1,
          onClick: s[5] || (s[5] = (t) => r(e).goToPage(r(e).currentPage.value - 1))
        }, " Previous ", 8, je),
        b("span", Me, " Page " + P(r(e).currentPage.value) + " of " + P(r(e).totalPages.value), 1),
        b("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: r(e).currentPage.value >= r(e).totalPages.value,
          onClick: s[6] || (s[6] = (t) => r(e).goToPage(r(e).currentPage.value + 1))
        }, " Next ", 8, Ve)
      ])) : p("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ G(ze, [["__scopeId", "data-v-6bb49a4c"]]);
export {
  Re as default
};
