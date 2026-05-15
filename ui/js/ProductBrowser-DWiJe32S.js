import { L as se } from "./EcommerceCalculator-CIJmnT15.js";
import { d as R, c as u, o as n, N as z, l as T, v as D, a as C, b, r as m, S as N, t as _, n as re, m as I, w as x, h as E, u as r, F as Q, k as A, i as ne, j as K } from "./vendor-vue-BgOQH8dC.js";
import { _ as G } from "./Launch-BRH4wqOZ.js";
import { C as ce, a as ue } from "./CatalogueSort-BPOrRrBf.js";
const ie = ["onKeydown"], de = {
  key: 0,
  class: "catalog-card__image-wrapper"
}, ge = ["src", "alt"], ve = { class: "catalog-card__content" }, fe = { class: "catalog-card__title" }, me = {
  key: 0,
  class: "catalog-card__description"
}, be = {
  key: 0,
  class: "catalog-card__badges"
}, ye = { class: "catalog-card__footer" }, pe = { class: "catalog-card__meta" }, he = { class: "catalog-card__actions" }, Ce = ["disabled"], we = /* @__PURE__ */ R({
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
  setup(s, { emit: i }) {
    const w = s, k = i, B = m(!1), p = m(!1), e = I(() => w.selected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": w.buttonTextColor,
      "--btn-bg": w.buttonColor,
      "--btn-hover-bg": P(w.buttonColor, -8)
    });
    function P(g, v) {
      const L = g.replace("#", ""), y = parseInt(L, 16), h = Math.round(2.55 * v), $ = (y >> 16) + h, o = (y >> 8 & 255) + h, l = (y & 255) + h;
      return `#${(16777216 + ($ < 255 ? $ < 1 ? 0 : $ : 255) * 65536 + (o < 255 ? o < 1 ? 0 : o : 255) * 256 + (l < 255 ? l < 1 ? 0 : l : 255)).toString(16).slice(1)}`;
    }
    function d() {
      w.disabled || k("click");
    }
    function S() {
      w.disabled || k("select");
    }
    return (g, v) => (n(), u("div", {
      class: T(["catalog-card", {
        "catalog-card--selected": s.selected,
        "catalog-card--disabled": s.disabled,
        "catalog-card--list": s.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: d,
      onKeydown: [
        z(d, ["enter"]),
        z(D(d, ["prevent"]), ["space"])
      ]
    }, [
      s.showImage && s.imageUrl && !B.value ? (n(), u("div", de, [
        N(g.$slots, "image", {}, () => [
          v[2] || (v[2] = b("div", { class: "catalog-card__image-placeholder" }, null, -1)),
          b("img", {
            class: T(["catalog-card__image", { "catalog-card__image--loaded": p.value }]),
            src: s.imageUrl,
            alt: s.title,
            loading: "lazy",
            onLoad: v[0] || (v[0] = (L) => p.value = !0),
            onError: v[1] || (v[1] = (L) => B.value = !0)
          }, null, 42, ge)
        ], !0)
      ])) : C("", !0),
      b("div", ve, [
        N(g.$slots, "content", {}, () => [
          b("h3", fe, _(s.title), 1),
          s.description ? (n(), u("p", me, _(s.description), 1)) : C("", !0)
        ], !0),
        g.$slots.badges ? (n(), u("div", be, [
          N(g.$slots, "badges", {}, void 0, !0)
        ])) : C("", !0)
      ]),
      b("div", ye, [
        N(g.$slots, "footer", {}, () => [
          b("div", pe, [
            N(g.$slots, "meta", {}, void 0, !0)
          ]),
          b("div", he, [
            N(g.$slots, "actions", {}, () => [
              b("button", {
                type: "button",
                class: T(["c-btn c-btn--sm", { "c-btn--delete": s.selected }]),
                style: re(e.value),
                disabled: s.disabled,
                onClick: D(S, ["stop"])
              }, _(s.actionLabel), 15, Ce)
            ], !0)
          ])
        ], !0)
      ])
    ], 42, ie));
  }
}), ke = /* @__PURE__ */ G(we, [["__scopeId", "data-v-c5b7f079"]]);
function Se(s) {
  const {
    config: i,
    endpoint: w,
    transformItem: k = (a) => a,
    getItemId: B = (a) => a._id || a.id
  } = s, p = m([]), e = m(null), P = m([]), d = m(null), S = m(""), g = m("name"), v = m("asc"), L = m("grid"), y = m(1), h = m(1), $ = m(0), o = m(!1), l = m(null);
  let t = null;
  function F(a) {
    if (!i.value) return "";
    const { apiUrl: c, orgSlug: f, isCustomDomain: O } = i.value;
    return O ? `${c}ecommerce/${a}` : `${c}ecommerce/${f}/${a}`;
  }
  async function U() {
    if (i.value) {
      o.value = !0, l.value = null;
      try {
        const a = new URL(F(w));
        a.searchParams.set("page", String(y.value)), a.searchParams.set("limit", String(i.value.itemsPerPage || 20)), a.searchParams.set("sortBy", g.value), a.searchParams.set("sortOrder", v.value), S.value.trim() && a.searchParams.set("search", S.value.trim()), d.value && a.searchParams.set("category", d.value);
        const c = await fetch(a.toString(), {
          credentials: "include"
        });
        if (!c.ok)
          throw new Error(`Server returned ${c.status}`);
        const f = await c.json();
        p.value = (f.data?.items || f.items || []).map(k), h.value = f.data?.pagination?.totalPages || f.pagination?.totalPages || 1, $.value = f.data?.pagination?.total || f.pagination?.total || 0;
      } catch (a) {
        console.error("[useCatalogBrowser] Fetch error:", a), l.value = a.message || "Failed to fetch items", p.value = [], h.value = 1, $.value = 0;
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
        P.value = f.data || f || [];
      } catch (a) {
        console.error("[useCatalogBrowser] Categories fetch error:", a), P.value = [];
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
      const O = await f.json();
      return k(O.data || O);
    } catch (c) {
      return console.error("[useCatalogBrowser] Fetch by slug error:", c), null;
    }
  }
  function M() {
    p.value = [], o.value = !0, t && clearTimeout(t), t = setTimeout(() => {
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
    S.value = a, y.value = 1, M();
  }
  function Y(a, c) {
    g.value = a, c ? v.value = c : v.value = v.value === "asc" ? "desc" : "asc", y.value = 1, U();
  }
  function Z(a) {
    a >= 1 && a <= h.value && (y.value = a, p.value = [], o.value = !0, U());
  }
  function ee() {
    S.value = "", d.value = null, y.value = 1, U();
  }
  async function V() {
    await Promise.all([
      j(),
      U()
    ]);
  }
  x(() => i.value, (a) => {
    a && V();
  }, { immediate: !0 });
  const te = I(() => p.value.length > 0), ae = I(() => P.value.length > 0), oe = I(() => !o.value && p.value.length === 0), le = I(() => d.value && P.value.find((c) => c._id === d.value)?.name || null);
  return {
    // State
    items: p,
    selectedItem: e,
    categories: P,
    activeCategory: d,
    searchQuery: S,
    sortBy: g,
    sortOrder: v,
    displayMode: L,
    currentPage: y,
    totalPages: h,
    totalItems: $,
    isLoading: o,
    error: l,
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
function $e(s) {
  return Se({
    config: s,
    endpoint: "products",
    transformItem: (i) => i,
    getItemId: (i) => i._id || ""
  });
}
const Pe = {
  class: "product-browser smartcut-content",
  "aria-label": "Product catalogue"
}, _e = {
  key: 0,
  class: "catalogue-chrome"
}, Be = {
  key: 1,
  class: "catalogue-categories"
}, Ie = ["onClick"], Le = {
  key: 2,
  class: "catalogue-loading"
}, Fe = {
  key: 3,
  class: "catalogue-empty"
}, Ue = {
  key: 4,
  class: "product-browser__grid"
}, Ne = {
  key: 0,
  class: "catalog-badge catalog-badge--featured"
}, Te = {
  key: 1,
  class: "catalog-badge catalog-badge--category"
}, Oe = {
  key: 0,
  class: "product-price"
}, xe = {
  key: 5,
  class: "catalogue-pagination"
}, Ee = ["disabled"], je = { class: "catalogue-pagination__info" }, Me = ["disabled"], Ve = /* @__PURE__ */ R({
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
  setup(s, { expose: i, emit: w }) {
    const k = s, B = w, p = I(() => k.config), e = $e(p), P = [
      { value: "displayOrder", label: "Featured order" },
      { value: "name", label: "Name" },
      { value: "cost", label: "Price" },
      { value: "createdAt", label: "Newest" }
    ], d = m(e.searchQuery.value);
    x(() => e.searchQuery.value, (o) => {
      d.value = o;
    }), x(d, (o) => {
      o !== e.searchQuery.value && e.updateSearch(o);
    });
    const S = I({
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
      return new Intl.NumberFormat(k.locale, {
        style: "currency",
        currency: "USD",
        // org currency injection is a separate piece of work
        minimumFractionDigits: 2
      }).format(o);
    }
    function h(o) {
      e.selectItem(o), B("product-click", o), B("product-selected", o);
    }
    let $ = !1;
    return x(() => [k.config, k.initialProductId], async ([o, l]) => {
      if ($ || !o || !l) return;
      $ = !0;
      const t = await e.fetchItemBySlug(l);
      t && h(t);
    }, { immediate: !0 }), i({
      browser: e,
      refresh: e.fetchItems,
      selectProduct: e.selectItem,
      selectedProduct: e.selectedItem
    }), (o, l) => (n(), u("section", Pe, [
      s.showSearch || s.showSort ? (n(), u("div", _e, [
        s.showSearch ? (n(), E(ce, {
          key: 0,
          modelValue: d.value,
          "onUpdate:modelValue": l[0] || (l[0] = (t) => d.value = t),
          placeholder: "Search products..."
        }, null, 8, ["modelValue"])) : C("", !0),
        s.showSort ? (n(), E(ue, {
          key: 1,
          "sort-by": S.value,
          "onUpdate:sortBy": l[1] || (l[1] = (t) => S.value = t),
          "sort-order": g.value,
          "onUpdate:sortOrder": l[2] || (l[2] = (t) => g.value = t),
          options: P
        }, null, 8, ["sort-by", "sort-order"])) : C("", !0)
      ])) : C("", !0),
      s.showCategories && r(e).hasCategories.value ? (n(), u("div", Be, [
        l[7] || (l[7] = b("span", { class: "catalogue-categories__label" }, "Category:", -1)),
        b("button", {
          type: "button",
          class: T(["catalogue-chip", { "catalogue-chip--active": !r(e).activeCategory.value }]),
          onClick: l[3] || (l[3] = (t) => r(e).setCategory(null))
        }, " All ", 2),
        (n(!0), u(Q, null, A(r(e).categories.value, (t) => (n(), u("button", {
          key: t._id,
          type: "button",
          class: T(["catalogue-chip", { "catalogue-chip--active": r(e).activeCategory.value === t._id }]),
          onClick: (F) => r(e).setCategory(t._id || null)
        }, _(t.name), 11, Ie))), 128))
      ])) : C("", !0),
      r(e).isLoading.value ? (n(), u("div", Le, [
        ne(se, {
          size: "medium",
          label: "Loading products..."
        })
      ])) : r(e).isEmpty.value ? (n(), u("div", Fe, [
        l[8] || (l[8] = b("p", null, "No products found.", -1)),
        r(e).searchQuery.value || r(e).activeCategory.value ? (n(), u("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm",
          onClick: l[4] || (l[4] = (t) => r(e).clearFilters())
        }, " Clear filters ")) : C("", !0)
      ])) : (n(), u("div", Ue, [
        (n(!0), u(Q, null, A(r(e).items.value, (t) => (n(), E(ke, {
          key: L(t),
          title: t.name,
          description: t.shortDescription || t.description,
          "image-url": t.imageUrl,
          selected: r(e).isSelected(t),
          "display-mode": "grid",
          "action-label": r(e).isSelected(t) ? "Selected" : "Configure",
          "button-color": s.buttonColor,
          "button-text-color": s.buttonTextColor,
          onClick: (F) => h(t),
          onSelect: (F) => h(t)
        }, {
          badges: K(() => [
            b("span", {
              class: T(["catalog-badge", `catalog-badge--${t.type}`])
            }, _(v[t.type] || t.type), 3),
            t.featured ? (n(), u("span", Ne, " Featured ")) : C("", !0),
            t.category && typeof t.category == "object" ? (n(), u("span", Te, _(t.category.name), 1)) : C("", !0)
          ]),
          meta: K(() => [
            t.type === "simple" && t.simpleConfig?.price ? (n(), u("span", Oe, _(y(t.simpleConfig.price)), 1)) : C("", !0)
          ]),
          _: 2
        }, 1032, ["title", "description", "image-url", "selected", "action-label", "button-color", "button-text-color", "onClick", "onSelect"]))), 128))
      ])),
      r(e).totalPages.value > 1 ? (n(), u("div", xe, [
        b("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: r(e).currentPage.value <= 1,
          onClick: l[5] || (l[5] = (t) => r(e).goToPage(r(e).currentPage.value - 1))
        }, " Previous ", 8, Ee),
        b("span", je, " Page " + _(r(e).currentPage.value) + " of " + _(r(e).totalPages.value), 1),
        b("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: r(e).currentPage.value >= r(e).totalPages.value,
          onClick: l[6] || (l[6] = (t) => r(e).goToPage(r(e).currentPage.value + 1))
        }, " Next ", 8, Me)
      ])) : C("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ G(Ve, [["__scopeId", "data-v-6bb49a4c"]]);
export {
  Ke as default
};
