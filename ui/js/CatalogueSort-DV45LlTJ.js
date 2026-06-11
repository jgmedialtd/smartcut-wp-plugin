import { d as v, g, w as k, o as r, e as l, j as c, J as w, K as y, N as C, f as S, t as b, u as p, F as O, C as V, y as x, c as B } from "./vendor-vue-QD0FJS8o.js";
import { t as e } from "./i18n-Dj6izb6_.js";
import { _ as f } from "./Launch-NSW_K3VG.js";
const F = { class: "stock-filter-search" }, K = { class: "c-field-action search-input-wrapper" }, L = ["placeholder"], M = /* @__PURE__ */ v({
  __name: "CatalogueSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: h }) {
    const s = o, n = h, a = g(s.modelValue);
    k(() => s.modelValue, (u) => {
      a.value = u;
    });
    function d() {
      n("update:modelValue", a.value);
    }
    function m() {
      a.value = "", n("update:modelValue", "");
    }
    return (u, t) => (r(), l("div", F, [
      c("div", K, [
        w(c("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
          type: "text",
          class: "search-input",
          placeholder: o.placeholder,
          onKeydown: C(d, ["enter"])
        }, null, 40, L), [
          [y, a.value]
        ]),
        a.value ? (r(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete",
          onClick: m
        }, " × ")) : S("", !0),
        c("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button",
          onClick: d
        }, b(p(e)("actions.search")), 1)
      ])
    ]));
  }
}), Q = /* @__PURE__ */ f(M, [["__scopeId", "data-v-9db627d9"]]), $ = { class: "stock-filter-sort" }, N = { class: "c-field-action sort-controls" }, D = { class: "sort-label" }, H = ["value"], I = ["value"], P = ["title"], U = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Z = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, j = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, z = /* @__PURE__ */ v({
  __name: "CatalogueSort",
  props: {
    sortBy: {},
    sortOrder: {},
    options: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(o, { emit: h }) {
    const s = o, n = h, a = B(() => s.options && s.options.length > 0 ? s.options : s.availableFields.map((t) => ({
      value: t,
      label: d(t)
    })));
    function d(t) {
      return {
        cost: e("stockFilter.price"),
        material: e("woodwork.material"),
        t: e("woodwork.thickness"),
        l: e("woodwork.length"),
        w: e("woodwork.width"),
        pricePerKg: e("stockFilter.price") + " per kg",
        pricePerM2: e("stockFilter.price") + " per m²",
        weight: e("fields.weight"),
        name: e("fields.name")
      }[t] || t.charAt(0).toUpperCase() + t.slice(1);
    }
    function m(t) {
      const i = t.target;
      n("update:sortBy", i.value);
    }
    function u() {
      n("update:sortOrder", s.sortOrder === "asc" ? "desc" : "asc");
    }
    return (t, i) => (r(), l("div", $, [
      c("div", N, [
        c("label", D, b(p(e)("stockFilter.sort_by")) + ":", 1),
        c("select", {
          value: o.sortBy,
          class: "sort-select",
          onChange: m
        }, [
          (r(!0), l(O, null, V(a.value, (_) => (r(), l("option", {
            key: _.value,
            value: _.value
          }, b(_.label), 9, I))), 128))
        ], 40, H),
        c("button", {
          type: "button",
          class: x(["sort-order-btn c-btn", { "sort-order-btn--desc": o.sortOrder === "desc" }]),
          title: o.sortOrder === "asc" ? p(e)("options.by_dimensions") : p(e)("options.by_dimensions"),
          onClick: u
        }, [
          (r(), l("svg", U, [
            o.sortOrder === "asc" ? (r(), l("path", Z)) : (r(), l("path", j))
          ]))
        ], 10, P)
      ])
    ]));
  }
}), T = /* @__PURE__ */ f(z, [["__scopeId", "data-v-8a990f19"]]);
export {
  Q as C,
  T as a
};
