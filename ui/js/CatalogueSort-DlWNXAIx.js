import { d as v, s as g, k, o as r, c as l, a as c, h as w, E as y, A as C, b as S, t as b, u as p, F as x, f as O, g as V, x as B } from "./vendor-vue-D6ZfZC0P.js";
import { t as e } from "./i18n-cONG3r0U.js";
import { _ as f } from "./Launch-BnHg2-HI.js";
const F = { class: "stock-filter-search" }, L = { class: "c-field-action search-input-wrapper" }, M = ["placeholder"], $ = /* @__PURE__ */ v({
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
      c("div", L, [
        w(c("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
          type: "text",
          class: "search-input",
          placeholder: o.placeholder,
          onKeydown: C(d, ["enter"])
        }, null, 40, M), [
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
}), j = /* @__PURE__ */ f($, [["__scopeId", "data-v-9db627d9"]]), K = { class: "stock-filter-sort" }, A = { class: "c-field-action sort-controls" }, D = { class: "sort-label" }, E = ["value"], H = ["value"], I = ["title"], N = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, P = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, U = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, Z = /* @__PURE__ */ v({
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
    return (t, i) => (r(), l("div", K, [
      c("div", A, [
        c("label", D, b(p(e)("stockFilter.sort_by")) + ":", 1),
        c("select", {
          value: o.sortBy,
          class: "sort-select",
          onChange: m
        }, [
          (r(!0), l(x, null, O(a.value, (_) => (r(), l("option", {
            key: _.value,
            value: _.value
          }, b(_.label), 9, H))), 128))
        ], 40, E),
        c("button", {
          type: "button",
          class: V(["sort-order-btn c-btn", { "sort-order-btn--desc": o.sortOrder === "desc" }]),
          title: o.sortOrder === "asc" ? p(e)("options.by_dimensions") : p(e)("options.by_dimensions"),
          onClick: u
        }, [
          (r(), l("svg", N, [
            o.sortOrder === "asc" ? (r(), l("path", P)) : (r(), l("path", U))
          ]))
        ], 10, I)
      ])
    ]));
  }
}), q = /* @__PURE__ */ f(Z, [["__scopeId", "data-v-8a990f19"]]);
export {
  j as C,
  q as a
};
