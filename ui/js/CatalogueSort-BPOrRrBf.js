import { d as v, r as k, w as g, c as r, o as l, b as c, z as w, a as y, C, N as S, t as b, u as p, F as O, k as V, m as x, l as B } from "./vendor-vue-BgOQH8dC.js";
import { t as e } from "./i18n-BkCqM2rg.js";
import { _ as f } from "./Launch-BRH4wqOZ.js";
const F = { class: "stock-filter-search" }, L = { class: "c-field-action search-input-wrapper" }, M = ["placeholder"], $ = /* @__PURE__ */ v({
  __name: "CatalogueSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: h }) {
    const s = o, n = h, a = k(s.modelValue);
    g(() => s.modelValue, (u) => {
      a.value = u;
    });
    function d() {
      n("update:modelValue", a.value);
    }
    function m() {
      a.value = "", n("update:modelValue", "");
    }
    return (u, t) => (l(), r("div", F, [
      c("div", L, [
        w(c("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (i) => a.value = i),
          type: "text",
          class: "search-input",
          placeholder: o.placeholder,
          onKeydown: S(d, ["enter"])
        }, null, 40, M), [
          [C, a.value]
        ]),
        a.value ? (l(), r("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete",
          onClick: m
        }, " × ")) : y("", !0),
        c("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button",
          onClick: d
        }, b(p(e)("actions.search")), 1)
      ])
    ]));
  }
}), j = /* @__PURE__ */ f($, [["__scopeId", "data-v-6821d615"]]), K = { class: "stock-filter-sort" }, N = { class: "c-field-action sort-controls" }, z = { class: "sort-label" }, D = ["value"], H = ["value"], I = ["title"], P = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, U = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, Z = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, A = /* @__PURE__ */ v({
  __name: "CatalogueSort",
  props: {
    sortBy: {},
    sortOrder: {},
    options: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(o, { emit: h }) {
    const s = o, n = h, a = x(() => s.options && s.options.length > 0 ? s.options : s.availableFields.map((t) => ({
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
    return (t, i) => (l(), r("div", K, [
      c("div", N, [
        c("label", z, b(p(e)("stockFilter.sort_by")) + ":", 1),
        c("select", {
          value: o.sortBy,
          class: "sort-select",
          onChange: m
        }, [
          (l(!0), r(O, null, V(a.value, (_) => (l(), r("option", {
            key: _.value,
            value: _.value
          }, b(_.label), 9, H))), 128))
        ], 40, D),
        c("button", {
          type: "button",
          class: B(["sort-order-btn c-btn", { "sort-order-btn--desc": o.sortOrder === "desc" }]),
          title: o.sortOrder === "asc" ? p(e)("options.by_dimensions") : p(e)("options.by_dimensions"),
          onClick: u
        }, [
          (l(), r("svg", P, [
            o.sortOrder === "asc" ? (l(), r("path", U)) : (l(), r("path", Z))
          ]))
        ], 10, I)
      ])
    ]));
  }
}), q = /* @__PURE__ */ f(A, [["__scopeId", "data-v-8a990f19"]]);
export {
  j as C,
  q as a
};
