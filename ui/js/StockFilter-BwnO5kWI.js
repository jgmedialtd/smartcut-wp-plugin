import { d as Z, a as l, b as s, P as le, x as oe, p as V, q as se, c as C, f as n, e as u, r as T, t as i, s as Ce, u as r, F as N, k as z, o as Se, M as Ge, U as He, O as Qe, w as W, m as We, B as Ze, V as Je, j as ce, g as $e, W as ve, y as xe, X as Xe } from "./vendor-vue-DyIrsOEK.js";
import { e as Ye, u as et } from "./EcommerceCalculator-DIT6YeNX.js";
import { t as c } from "./i18n-Ck7sLK64.js";
import { u as tt, g as R } from "./Vanilla-BpGpbIIC.js";
import { _ as ne } from "./Launch-BtYy4DRB.js";
function st(e) {
  const M = e.trim();
  if (M.startsWith("#")) {
    const t = M.slice(1);
    if (t.length === 3)
      return {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16)
      };
    if (t.length >= 6)
      return {
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16)
      };
  }
  if (M.startsWith("rgb")) {
    const t = M.match(/\d+/g);
    if (t && t.length >= 3)
      return { r: +t[0], g: +t[1], b: +t[2] };
  }
  return null;
}
function lt(e, M) {
  const t = st(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.6 ? "#000" : "#fff" : "#000";
}
const ot = ["onKeydown"], nt = { class: "stock-filter-row__thumb" }, it = ["src", "alt"], at = { class: "stock-filter-row__material" }, ct = { class: "stock-filter-row__name" }, rt = {
  key: 0,
  class: "stock-filter-row__code"
}, ut = {
  key: 0,
  class: "stock-filter-row__cell"
}, dt = {
  key: 1,
  class: "stock-filter-row__cell"
}, ft = {
  key: 2,
  class: "stock-filter-row__cell"
}, gt = {
  key: 3,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, vt = {
  key: 4,
  class: "stock-filter-row__color"
}, mt = { key: 1 }, ht = {
  key: 5,
  class: "stock-filter-row__thickness"
}, kt = {
  key: 0,
  class: "thickness-badge"
}, bt = {
  key: 6,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, yt = {
  key: 7,
  class: "stock-filter-row__weight"
}, pt = {
  key: 8,
  class: "stock-filter-row__price"
}, _t = {
  key: 0,
  class: "price__original"
}, wt = {
  key: 1,
  class: "price__badge"
}, Ct = { class: "stock-filter-row__action" }, $t = ["disabled"], xt = ["onKeydown"], St = { class: "stock-filter-card__image-wrapper" }, Ft = ["src", "alt"], Pt = {
  key: 1,
  class: "c-badge stock-filter-card__badge--thickness"
}, Mt = { class: "stock-filter-card__badges-bottom" }, Ot = {
  key: 1,
  class: "c-badge stock-filter-card__badge--finish"
}, Vt = { class: "stock-filter-card__content" }, Bt = { class: "stock-filter-card__title" }, It = {
  key: 0,
  class: "stock-filter-card__code"
}, qt = {
  key: 1,
  class: "stock-filter-card__description"
}, At = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Tt = {
  key: 0,
  class: "middot"
}, Lt = {
  key: 3,
  class: "stock-filter-card__extras"
}, Rt = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, Ut = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Nt = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, jt = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Dt = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Et = { class: "stock-filter-card__footer" }, Kt = {
  key: 0,
  class: "stock-filter-card__price"
}, zt = {
  key: 0,
  class: "price__original"
}, Gt = {
  key: 1,
  class: "price__badge"
}, Ht = { class: "stock-filter-card__actions" }, Qt = ["disabled"], Wt = /* @__PURE__ */ Z({
  __name: "StockFilterCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean, default: !1 },
    displayLabel: {},
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" },
    displayMode: { default: "grid" },
    unitSystem: { default: "metric" },
    visibleColumns: { default: () => ({ code: !0, description: !0, finish: !0, variant: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) }
  },
  emits: ["toggle-selection", "order-sample"],
  setup(e, { emit: M }) {
    const t = e, b = M, _ = T(!1), y = T(!1), p = C(() => t.stock.available !== !1), $ = C(() => t.isDisabled), w = C(() => t.stock.discount && t.stock.discount > 0), S = C(() => {
      const k = t.stock.sample;
      return k?.enabled ? k.price && k.price > 0 ? `${c("stockFilter.orderSample")} (${t.formatPrice(k.price, t.locale)})` : c("stockFilter.freeSample") : "";
    }), O = C(() => t.stock.cost ? w.value ? t.stock.cost * (1 - t.stock.discount / 100) : t.stock.cost : 0), j = C(() => t.stock.cost ? t.formatPrice(t.stock.cost, t.locale) : "N/A"), D = C(() => t.stock.cost ? t.formatPrice(O.value, t.locale) : "N/A"), B = C(() => t.stock.colorHex || ""), U = C(() => t.stock.color || ""), G = C(() => B.value ? lt(B.value) : "#fff"), E = C(() => {
      if (!t.stock.grain) return "";
      switch (t.stock.grain) {
        case "l":
          return c("fields.grain.length");
        case "w":
          return c("fields.grain.width");
        default:
          return "";
      }
    }), F = C(() => {
      const k = [];
      return t.stock.category && k.push(t.stock.category), t.stock.variant && k.push(t.stock.variant), E.value && k.push(E.value), t.stock.weight && k.push(`${t.stock.weight}kg`), k;
    }), J = C(() => t.stock.t == null ? "" : t.unitSystem === "imperial" ? `${(t.stock.t / 25.4).toFixed(2)}"` : `${t.stock.t} mm`), H = C(() => {
      const k = t.stock.extras;
      return k ? !!(k.banding || k.finish || k.planing || k.machining) : !1;
    }), v = C(() => {
      const k = ["60px", "2fr"];
      return t.visibleColumns.finish && k.push("1fr"), t.visibleColumns.variant && k.push("1fr"), t.visibleColumns.category && k.push("1fr"), t.visibleColumns.grain && k.push("80px"), t.visibleColumns.color && k.push("100px"), t.visibleColumns.thickness && k.push("80px"), t.visibleColumns.quantity && k.push("80px"), t.visibleColumns.weight && k.push("80px"), t.visibleColumns.price && k.push("100px"), k.push("50px"), { "grid-template-columns": k.join(" ") };
    }), f = C(() => t.displayLabel ? t.displayLabel : t.stock.name ? t.stock.name : `${t.stock.material} ${t.stock.l}×${t.stock.w}`);
    function a() {
      !p.value || $.value || b("toggle-selection", t.stock);
    }
    function g() {
      b("order-sample", t.stock);
    }
    return (k, h) => e.displayMode === "list" ? (s(), l("div", {
      key: 0,
      class: V(["stock-filter-row", {
        "stock-filter-row--selected": e.isSelected,
        "stock-filter-row--unavailable": !p.value,
        "stock-filter-row--disabled": $.value
      }]),
      style: oe(v.value),
      role: "button",
      tabindex: "0",
      onClick: a,
      onKeydown: [
        le(a, ["enter"]),
        le(se(a, ["prevent"]), ["space"])
      ]
    }, [
      n("div", nt, [
        h[4] || (h[4] = n("div", { class: "stock-filter-row__thumb-placeholder" }, null, -1)),
        e.stock.imageUrl && !_.value ? (s(), l("img", {
          key: 0,
          class: V(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": y.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: h[0] || (h[0] = (x) => y.value = !0),
          onError: h[1] || (h[1] = (x) => _.value = !0)
        }, null, 42, it)) : u("", !0)
      ]),
      n("div", at, [
        n("span", ct, i(f.value), 1),
        e.stock.code ? (s(), l("span", rt, i(e.stock.code), 1)) : u("", !0)
      ]),
      e.visibleColumns.finish ? (s(), l("div", ut, i(e.stock.finish || ""), 1)) : u("", !0),
      e.visibleColumns.variant ? (s(), l("div", dt, i(e.stock.variant || ""), 1)) : u("", !0),
      e.visibleColumns.category ? (s(), l("div", ft, i(e.stock.category || ""), 1)) : u("", !0),
      e.visibleColumns.grain ? (s(), l("div", gt, i(E.value), 1)) : u("", !0),
      e.visibleColumns.color ? (s(), l("div", vt, [
        B.value ? (s(), l("span", {
          key: 0,
          class: "color-swatch color-swatch--sm",
          style: oe({ backgroundColor: B.value })
        }, null, 4)) : u("", !0),
        U.value ? (s(), l("span", mt, i(U.value), 1)) : u("", !0)
      ])) : u("", !0),
      e.visibleColumns.thickness ? (s(), l("div", ht, [
        e.stock.t != null ? (s(), l("span", kt, [
          Ce(i(e.stock.t), 1),
          h[5] || (h[5] = n("small", null, "mm", -1))
        ])) : u("", !0)
      ])) : u("", !0),
      e.visibleColumns.quantity ? (s(), l("div", bt, i(e.stock.unlimitedQuantity ? r(c)("stockFilter.inStock") : e.stock.q), 1)) : u("", !0),
      e.visibleColumns.weight ? (s(), l("div", yt, i(e.stock.weight ? `${e.stock.weight}kg` : ""), 1)) : u("", !0),
      e.visibleColumns.price ? (s(), l("div", pt, [
        w.value ? (s(), l("span", _t, i(j.value), 1)) : u("", !0),
        n("span", {
          class: V(["price__value", { price__discounted: w.value }])
        }, i(D.value), 3),
        w.value ? (s(), l("span", wt, "-" + i(e.stock.discount) + "%", 1)) : u("", !0)
      ])) : u("", !0),
      n("div", Ct, [
        n("button", {
          type: "button",
          class: V(["c-btn c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
          disabled: !p.value || $.value,
          onClick: se(a, ["stop"])
        }, i(e.isSelected ? "−" : "+"), 11, $t)
      ])
    ], 46, ot)) : (s(), l("div", {
      key: 1,
      class: V(["stock-filter-card", {
        "stock-filter-card--selected": e.isSelected,
        "stock-filter-card--unavailable": !p.value,
        "stock-filter-card--disabled": $.value
      }]),
      role: "button",
      tabindex: "0",
      onClick: a,
      onKeydown: [
        le(a, ["enter"]),
        le(se(a, ["prevent"]), ["space"])
      ]
    }, [
      n("div", St, [
        h[6] || (h[6] = n("div", { class: "stock-filter-card__image-placeholder" }, null, -1)),
        e.stock.imageUrl && !_.value ? (s(), l("img", {
          key: 0,
          class: V(["stock-filter-card__image", { "stock-filter-card__image--loaded": y.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: h[2] || (h[2] = (x) => y.value = !0),
          onError: h[3] || (h[3] = (x) => _.value = !0)
        }, null, 42, Ft)) : u("", !0),
        e.stock.t != null ? (s(), l("span", Pt, i(J.value), 1)) : u("", !0),
        n("div", Mt, [
          U.value ? (s(), l("span", {
            key: 0,
            class: "c-badge stock-filter-card__badge--color",
            style: oe(B.value ? { background: B.value, color: G.value } : void 0)
          }, i(U.value), 5)) : u("", !0),
          e.stock.finish ? (s(), l("span", Ot, i(e.stock.finish), 1)) : u("", !0)
        ])
      ]),
      n("div", Vt, [
        n("h3", Bt, i(f.value), 1),
        e.stock.code ? (s(), l("div", It, i(e.stock.code), 1)) : u("", !0),
        e.stock.description ? (s(), l("div", qt, i(e.stock.description), 1)) : u("", !0),
        F.value.length ? (s(), l("div", At, [
          (s(!0), l(N, null, z(F.value, (x, X) => (s(), l(N, { key: X }, [
            X > 0 ? (s(), l("span", Tt, " · ")) : u("", !0),
            Ce(i(x), 1)
          ], 64))), 128))
        ])) : u("", !0),
        H.value || e.stock.sample?.enabled ? (s(), l("div", Lt, [
          e.stock.sample?.enabled ? (s(), l("span", Rt, i(r(c)("stockFilter.samplesAvailable")), 1)) : u("", !0),
          e.stock.extras?.banding ? (s(), l("span", Ut, i(r(c)("stockFilter.banding")), 1)) : u("", !0),
          e.stock.extras?.finish ? (s(), l("span", Nt, i(r(c)("stockFilter.finishOption")), 1)) : u("", !0),
          e.stock.extras?.planing ? (s(), l("span", jt, i(r(c)("stockFilter.planing")), 1)) : u("", !0),
          e.stock.extras?.machining ? (s(), l("span", Dt, i(r(c)("stockFilter.machining")), 1)) : u("", !0)
        ])) : u("", !0)
      ]),
      n("div", Et, [
        e.stock.cost ? (s(), l("div", Kt, [
          w.value ? (s(), l("span", zt, i(j.value), 1)) : u("", !0),
          n("span", {
            class: V(["price__value", { price__discounted: w.value }])
          }, i(D.value), 3),
          w.value ? (s(), l("span", Gt, "-" + i(e.stock.discount) + "%", 1)) : u("", !0)
        ])) : u("", !0),
        n("div", Ht, [
          e.stock.sample?.enabled ? (s(), l("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: se(g, ["stop"])
          }, i(S.value), 1)) : u("", !0),
          n("button", {
            type: "button",
            class: V(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
            disabled: !p.value || $.value,
            onClick: se(a, ["stop"])
          }, i(e.isSelected ? r(c)("stockFilter.remove") : "+ " + r(c)("stockFilter.select")), 11, Qt)
        ])
      ])
    ], 42, xt));
  }
}), Zt = /* @__PURE__ */ ne(Wt, [["__scopeId", "data-v-9c37fe42"]]), Jt = { class: "stock-filter-panel" }, Xt = { class: "filter-panel-content" }, Yt = {
  key: 0,
  class: "filter-summary"
}, es = { class: "filter-summary__count" }, ts = { class: "filter-groups" }, ss = { class: "filter-group__header" }, ls = { class: "filter-group__label" }, os = { class: "filter-group__content" }, ns = {
  key: 0,
  class: "filter-select"
}, is = ["value", "onChange"], as = { value: "" }, cs = ["value"], rs = {
  key: 1,
  class: "multiselect"
}, us = ["onClick"], ds = { class: "multiselect__text" }, fs = {
  key: 0,
  class: "multiselect__dropdown"
}, gs = ["checked", "onChange"], vs = { class: "multiselect__option-label" }, ms = {
  key: 0,
  class: "multiselect__option-count"
}, hs = {
  key: 2,
  class: "filter-range"
}, ks = { class: "filter-range__inputs" }, bs = ["value", "min", "max", "step", "onInput"], ys = ["value", "min", "max", "step", "onInput"], ps = {
  key: 3,
  class: "filter-boolean"
}, _s = { class: "filter-checkbox" }, ws = ["checked", "onChange"], Cs = /* @__PURE__ */ Z({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(e, { emit: M }) {
    const t = e, b = M, _ = T({}), y = T(null), p = C(() => t.activeFilters.length);
    function $(v) {
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
      }[v.field] || v.label;
    }
    function w(v) {
      const f = t.getFilterOptionCounts?.(v.field) || /* @__PURE__ */ new Map(), a = f.size > 0, g = (h) => {
        if (!a) return;
        const x = typeof h == "object" && h !== null && "hex" in h ? h.hex : String(h);
        return f.get(x) ?? 0;
      };
      return v.options?.length ? v.options.map((h) => ({
        ...h,
        count: g(h.value)
      })) : t.getUniqueValues(v.field).map((h) => {
        const x = g(h);
        return v.field === "color" && typeof h == "object" && h !== null ? "name" in h && h.name ? {
          label: h.name,
          value: h,
          count: x
        } : {
          label: h.hex || String(h),
          value: h,
          count: x
        } : {
          label: String(h),
          value: h,
          count: x
        };
      });
    }
    function S(v) {
      return t.activeFilters.find((a) => a.field === v)?.value;
    }
    function O(v, f) {
      const a = S(v);
      return Array.isArray(a) ? v === "color" && typeof f == "object" && f !== null && "hex" in f ? a.some((g) => typeof g == "object" && g !== null && "hex" in g && g.hex === f.hex) : a.includes(f) : v === "color" && typeof f == "object" && f !== null && "hex" in f ? typeof a == "object" && a !== null && "hex" in a && a.hex === f.hex : a === f;
    }
    function j(v, f) {
      const g = f.target.value;
      if (g === "")
        b("remove-filter", v);
      else {
        const k = g !== "" && !isNaN(Number(g)) ? Number(g) : g;
        b("apply-filter", v, k, "select");
      }
    }
    function D(v, f, a) {
      const g = a.target, k = S(v) || [], h = Array.isArray(k) ? [...k] : [];
      if (g.checked)
        h.includes(f) || h.push(f);
      else {
        const x = h.indexOf(f);
        x !== -1 && h.splice(x, 1);
      }
      h.length === 0 ? b("remove-filter", v) : b("apply-filter", v, h, "multiselect");
    }
    function B(v, f) {
      if (_.value[v]?.[f] !== void 0)
        return _.value[v][f];
      const a = t.activeFilters.find((g) => g.field === v);
      if (a?.value && typeof a.value == "object")
        return a.value[f];
    }
    function U(v, f, a) {
      const g = a.target, k = g.value ? Number(g.value) : void 0;
      _.value[v] || (_.value[v] = {}), _.value[v][f] = k;
      const h = _.value[v].min, x = _.value[v].max;
      h !== void 0 || x !== void 0 ? b("apply-filter", v, { min: h, max: x }, "range") : b("remove-filter", v);
    }
    function G(v, f) {
      f.target.checked ? b("apply-filter", v, !0, "boolean") : b("remove-filter", v);
    }
    function E() {
      _.value = {}, b("clear-filters");
    }
    function F(v) {
      y.value = y.value === v ? null : v;
    }
    function J(v) {
      const f = S(v.field);
      return !f || Array.isArray(f) && f.length === 0 ? c("stockFilter.all") : Array.isArray(f) ? f.length === 1 ? w(v).find((k) => v.field === "color" && typeof k.value == "object" && k.value !== null && "hex" in k.value ? typeof f[0] == "object" && f[0] !== null && "hex" in f[0] && k.value.hex === f[0].hex : k.value === f[0])?.label || String(f[0]) : c("stockFilter.selected_count", [f.length]) : String(f);
    }
    function H(v) {
      v.target.closest(".multiselect") || (y.value = null);
    }
    return Se(() => {
      document.addEventListener("click", H);
    }), Ge(() => {
      document.removeEventListener("click", H);
    }), (v, f) => (s(), l("div", Jt, [
      n("div", Xt, [
        p.value > 0 ? (s(), l("div", Yt, [
          n("span", es, i(r(c)("stockFilter.active_filters", [p.value])), 1),
          n("button", {
            type: "button",
            class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
            onClick: E
          }, i(r(c)("stockFilter.clear_filters")), 1)
        ])) : u("", !0),
        n("div", ts, [
          (s(!0), l(N, null, z(e.filterConfigs, (a) => (s(), l("div", {
            key: a.field,
            class: "filter-group"
          }, [
            n("div", ss, [
              n("label", ls, i($(a)), 1)
            ]),
            n("div", os, [
              a.type === "select" ? (s(), l("div", ns, [
                n("select", {
                  value: S(a.field),
                  class: "filter-select-input",
                  onChange: (g) => j(a.field, g)
                }, [
                  n("option", as, i(r(c)("stockFilter.all")), 1),
                  (s(!0), l(N, null, z(w(a), (g) => (s(), l("option", {
                    key: g.value,
                    value: g.value
                  }, i(g.label) + i(g.count !== void 0 ? ` (${g.count})` : ""), 9, cs))), 128))
                ], 40, is)
              ])) : a.type === "multiselect" ? (s(), l("div", rs, [
                n("button", {
                  type: "button",
                  class: "multiselect__trigger",
                  onClick: (g) => F(a.field)
                }, [
                  n("span", ds, i(J(a)), 1)
                ], 8, us),
                y.value === a.field ? (s(), l("div", fs, [
                  (s(!0), l(N, null, z(w(a), (g) => (s(), l("label", {
                    key: g.value,
                    class: V(["multiselect__option", { "multiselect__option--zero": g.count === 0 }])
                  }, [
                    n("input", {
                      checked: O(a.field, g.value),
                      type: "checkbox",
                      onChange: (k) => D(a.field, g.value, k)
                    }, null, 40, gs),
                    n("span", vs, i(g.label), 1),
                    g.count !== void 0 ? (s(), l("span", ms, "(" + i(g.count) + ")", 1)) : u("", !0)
                  ], 2))), 128))
                ])) : u("", !0)
              ])) : a.type === "range" ? (s(), l("div", hs, [
                n("div", ks, [
                  n("input", {
                    value: B(a.field, "min"),
                    min: a.min,
                    max: a.max,
                    step: a.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (g) => U(a.field, "min", g)
                  }, null, 40, bs),
                  f[0] || (f[0] = n("span", { class: "filter-range__separator" }, "–", -1)),
                  n("input", {
                    value: B(a.field, "max"),
                    min: a.min,
                    max: a.max,
                    step: a.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (g) => U(a.field, "max", g)
                  }, null, 40, ys)
                ])
              ])) : a.type === "boolean" ? (s(), l("div", ps, [
                n("label", _s, [
                  n("input", {
                    checked: S(a.field) === !0,
                    type: "checkbox",
                    onChange: (g) => G(a.field, g)
                  }, null, 40, ws),
                  n("span", null, i(a.label), 1)
                ])
              ])) : u("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), $s = /* @__PURE__ */ ne(Cs, [["__scopeId", "data-v-126e3b6c"]]), xs = { class: "stock-filter-results" }, Ss = { class: "results-header" }, Fs = { class: "results-info" }, Ps = {
  key: 0,
  class: "results-count"
}, Ms = {
  key: 1,
  class: "results-count results-count--loading"
}, Os = { class: "results-controls" }, Vs = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, Bs = ["title"], Is = ["title"], qs = {
  key: 0,
  class: "results-loading"
}, As = {
  key: 1,
  class: "results-empty"
}, Ts = { class: "empty-message" }, Ls = { class: "th" }, Rs = {
  key: 0,
  class: "th"
}, Us = {
  key: 1,
  class: "th"
}, Ns = {
  key: 2,
  class: "th"
}, js = {
  key: 3,
  class: "th"
}, Ds = {
  key: 4,
  class: "th"
}, Es = {
  key: 5,
  class: "th th--center"
}, Ks = {
  key: 6,
  class: "th th--center"
}, zs = {
  key: 7,
  class: "th th--center"
}, Gs = {
  key: 8,
  class: "th th--right"
}, Hs = {
  key: 3,
  class: "results-pagination"
}, Qs = ["disabled"], Ws = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, Zs = ["onClick"], Js = ["disabled"], Xs = /* @__PURE__ */ Z({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    currentPage: { default: 1 },
    totalPages: { default: 1 },
    visibleColumns: { default: () => ({ code: !0, description: !0, finish: !0, variant: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) }
  },
  emits: ["update:displayMode", "clear-filters", "go-to-page"],
  setup(e, { emit: M }) {
    const t = e, b = C(() => {
      const y = ["60px", "2fr"];
      return t.visibleColumns.finish && y.push("1fr"), t.visibleColumns.variant && y.push("1fr"), t.visibleColumns.category && y.push("1fr"), t.visibleColumns.grain && y.push("80px"), t.visibleColumns.color && y.push("100px"), t.visibleColumns.thickness && y.push("80px"), t.visibleColumns.quantity && y.push("80px"), t.visibleColumns.weight && y.push("80px"), t.visibleColumns.price && y.push("100px"), y.push("50px"), { "grid-template-columns": y.join(" ") };
    }), _ = C(() => {
      const y = [], $ = Math.floor(2.5);
      let w = Math.max(1, t.currentPage - $), S = Math.min(t.totalPages, w + 5 - 1);
      S === t.totalPages && (w = Math.max(1, S - 5 + 1));
      for (let O = w; O <= S; O++)
        y.push(O);
      return y;
    });
    return (y, p) => (s(), l("div", xs, [
      n("div", Ss, [
        n("div", Fs, [
          e.loading ? (s(), l("div", Ms, i(r(c)("actions.loading")) + "...", 1)) : (s(), l("div", Ps, i(e.totalResults) + " " + i(e.totalResults === 1 ? r(c)("stockFilter.result_one") : r(c)("stockFilter.result_other")), 1))
        ]),
        n("div", Os, [
          n("div", Vs, [
            n("button", {
              type: "button",
              class: V(["c-btn c-btn--sm", { selected: e.displayMode === "grid" }]),
              title: r(c)("stockFilter.grid_view"),
              onClick: p[0] || (p[0] = ($) => y.$emit("update:displayMode", "grid"))
            }, [...p[5] || (p[5] = [
              He('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-7608804e><rect x="1" y="1" width="6" height="6" data-v-7608804e></rect><rect x="9" y="1" width="6" height="6" data-v-7608804e></rect><rect x="1" y="9" width="6" height="6" data-v-7608804e></rect><rect x="9" y="9" width="6" height="6" data-v-7608804e></rect></svg>', 1)
            ])], 10, Bs),
            n("button", {
              type: "button",
              class: V(["c-btn c-btn--sm", { selected: e.displayMode === "list" }]),
              title: r(c)("stockFilter.list_view"),
              onClick: p[1] || (p[1] = ($) => y.$emit("update:displayMode", "list"))
            }, [...p[6] || (p[6] = [
              n("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                n("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                n("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                n("rect", {
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
      e.loading ? (s(), l("div", qs, [
        p[7] || (p[7] = n("div", { class: "spinner" }, null, -1)),
        n("p", null, i(r(c)("actions.loading")) + "...", 1)
      ])) : e.totalResults === 0 ? (s(), l("div", As, [
        n("p", Ts, i(r(c)("stockFilter.no_results")), 1),
        e.hasActiveFilters ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: p[2] || (p[2] = ($) => y.$emit("clear-filters"))
        }, i(r(c)("stockFilter.clear_filters")), 1)) : u("", !0)
      ])) : (s(), l(N, { key: 2 }, [
        e.displayMode === "list" ? (s(), l("div", {
          key: 0,
          class: "results-table-header",
          style: oe(b.value)
        }, [
          p[8] || (p[8] = n("div", { class: "th" }, null, -1)),
          n("div", Ls, i(r(c)("woodwork.material")), 1),
          e.visibleColumns.finish ? (s(), l("div", Rs, i(r(c)("fields.finish")), 1)) : u("", !0),
          e.visibleColumns.variant ? (s(), l("div", Us, i(r(c)("fields.variant")), 1)) : u("", !0),
          e.visibleColumns.category ? (s(), l("div", Ns, i(r(c)("fields.category")), 1)) : u("", !0),
          e.visibleColumns.grain ? (s(), l("div", js, i(r(c)("fields.grain")), 1)) : u("", !0),
          e.visibleColumns.color ? (s(), l("div", Ds, i(r(c)("fields.color")), 1)) : u("", !0),
          e.visibleColumns.thickness ? (s(), l("div", Es, i(r(c)("fields.t")), 1)) : u("", !0),
          e.visibleColumns.quantity ? (s(), l("div", Ks, i(r(c)("fields.q")), 1)) : u("", !0),
          e.visibleColumns.weight ? (s(), l("div", zs, i(r(c)("fields.weight")), 1)) : u("", !0),
          e.visibleColumns.price ? (s(), l("div", Gs, i(r(c)("stockFilter.price")), 1)) : u("", !0),
          p[9] || (p[9] = n("div", { class: "th th--center" }, null, -1))
        ], 4)) : u("", !0),
        n("div", {
          class: V(["results-grid", { "results-grid--list": e.displayMode === "list" }])
        }, [
          Qe(y.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      e.totalPages > 1 ? (s(), l("div", Hs, [
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === 1,
          onClick: p[3] || (p[3] = ($) => y.$emit("go-to-page", e.currentPage - 1))
        }, i(r(c)("pagination.previous")), 9, Qs),
        n("div", Ws, [
          (s(!0), l(N, null, z(_.value, ($) => (s(), l("button", {
            key: $,
            type: "button",
            class: V(["c-btn c-btn--sm", { selected: $ === e.currentPage }]),
            onClick: (w) => y.$emit("go-to-page", $)
          }, i($), 11, Zs))), 128))
        ]),
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === e.totalPages,
          onClick: p[4] || (p[4] = ($) => y.$emit("go-to-page", e.currentPage + 1))
        }, i(r(c)("pagination.next")), 9, Js)
      ])) : u("", !0)
    ]));
  }
}), Ys = /* @__PURE__ */ ne(Xs, [["__scopeId", "data-v-7608804e"]]), el = { class: "stock-filter-search" }, tl = { class: "c-field-action search-input-wrapper" }, sl = ["placeholder"], ll = /* @__PURE__ */ Z({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: M }) {
    const t = e, b = M, _ = T(t.modelValue);
    W(() => t.modelValue, ($) => {
      _.value = $;
    });
    function y() {
      b("update:modelValue", _.value);
    }
    function p() {
      _.value = "", b("update:modelValue", "");
    }
    return ($, w) => (s(), l("div", el, [
      n("div", tl, [
        We(n("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (S) => _.value = S),
          type: "text",
          class: "search-input",
          placeholder: e.placeholder,
          onKeydown: le(y, ["enter"])
        }, null, 40, sl), [
          [Ze, _.value]
        ]),
        _.value ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: p
        }, " × ")) : u("", !0),
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin c-btn--no-effects",
          onClick: y
        }, i(r(c)("actions.search")), 1)
      ])
    ]));
  }
}), ol = /* @__PURE__ */ ne(ll, [["__scopeId", "data-v-bd9f3f41"]]), nl = { class: "stock-filter-sort" }, il = { class: "c-field-action sort-controls" }, al = { class: "sort-label" }, cl = ["value"], rl = ["value"], ul = ["title"], dl = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fl = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, gl = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, vl = /* @__PURE__ */ Z({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(e, { emit: M }) {
    const t = e, b = M, _ = t.availableFields.map((w) => ({
      value: w,
      label: y(w)
    }));
    function y(w) {
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
      }[w] || w.charAt(0).toUpperCase() + w.slice(1);
    }
    function p(w) {
      const S = w.target;
      b("update:sortBy", S.value);
    }
    function $() {
      b("update:sortOrder", t.sortOrder === "asc" ? "desc" : "asc");
    }
    return (w, S) => (s(), l("div", nl, [
      n("div", il, [
        n("label", al, i(r(c)("stockFilter.sort_by")) + ":", 1),
        n("select", {
          value: e.sortBy,
          class: "sort-select",
          onChange: p
        }, [
          (s(!0), l(N, null, z(r(_), (O) => (s(), l("option", {
            key: O.value,
            value: O.value
          }, i(O.label), 9, rl))), 128))
        ], 40, cl),
        n("button", {
          type: "button",
          class: V(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": e.sortOrder === "desc" }]),
          title: e.sortOrder === "asc" ? r(c)("options.by_dimensions") : r(c)("options.by_dimensions"),
          onClick: $
        }, [
          (s(), l("svg", dl, [
            e.sortOrder === "asc" ? (s(), l("path", fl)) : (s(), l("path", gl))
          ]))
        ], 10, ul)
      ])
    ]));
  }
}), ml = /* @__PURE__ */ ne(vl, [["__scopeId", "data-v-d77a934a"]]), hl = {
  id: "stock-filter",
  class: "smartcut-content"
}, kl = {
  key: 1,
  class: "stock-filter-search-sort"
}, bl = {
  key: 0,
  class: "selection-bar"
}, yl = { class: "selection-bar__left" }, pl = { class: "selection-bar__count" }, Fl = /* @__PURE__ */ Z({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => Ye()
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
    initialProductId: {
      type: String,
      default: null
    },
    serverPagination: {
      type: Object,
      default: null
    },
    unitSystem: {
      type: String,
      default: "metric"
    },
    showSelectionBar: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "labels-changed", "order-sample", "selections-restored"],
  setup(e, { expose: M, emit: t }) {
    const b = e, _ = t, y = T(b.stockOptions), p = T(b.config), $ = T(b.numberFormat);
    W(() => b.stockOptions, (o) => {
      y.value = o;
    }), W(() => b.config, (o) => {
      p.value = o;
    });
    const w = C(() => {
      if (b.serverPagination)
        return { ...b.serverPagination };
    }), {
      activeFilters: S,
      searchQuery: O,
      sortBy: j,
      sortOrder: D,
      displayMode: B,
      currentPage: U,
      filteredStock: G,
      paginatedStock: E,
      selectedStock: F,
      totalPages: J,
      totalItems: H,
      isLoading: v,
      applyFilter: f,
      removeFilter: a,
      clearFilters: g,
      goToPage: k,
      toggleStockSelection: h,
      isStockSelected: x,
      clearSelection: X,
      selectById: Fe,
      createInputStock: Y,
      getUniqueValues: re,
      getFieldRange: me,
      getFilterOptionCounts: Pe
    } = tt({
      stockOptions: y,
      config: p,
      numberFormat: $,
      serverPagination: w.value
    }), { addNotice: Me } = et(), ee = Je("stock-filter-selections", []), I = T(!1), Q = T(1), K = T(/* @__PURE__ */ new Map());
    function ue(o, m, d) {
      for (const P of o)
        P.customData = {
          ...P.customData || {},
          selectionId: m,
          // Preserve source stock data for calculator extras filtering
          // (InputStock schema strips extras during parse, so we pass via customData)
          ...d?.name && { stockName: d.name },
          ...d?.extras && { stockExtras: d.extras }
        };
      _("stock-added", o);
    }
    const ie = C(() => b.config.itemsPerPage || 20), Oe = C(() => {
      const o = (Q.value - 1) * ie.value, m = o + ie.value;
      return F.value.slice(o, m);
    }), he = C(() => I.value ? Oe.value : E.value), Ve = C(() => {
      const o = /* @__PURE__ */ new Map();
      for (const m of he.value)
        o.set(R(m), m.name || m.material || "");
      return o;
    }), ke = C(() => {
      const o = {
        code: !1,
        description: !1,
        finish: !1,
        variant: !1,
        grain: !1,
        color: !1,
        category: !1,
        thickness: !1,
        weight: !1,
        price: !1,
        quantity: !1,
        tags: !1
      }, m = b.serverPagination ? E.value : G.value;
      for (const d of m)
        d.code && (o.code = !0), d.description && (o.description = !0), d.finish && (o.finish = !0), d.variant && (o.variant = !0), d.grain && (o.grain = !0), d.color && (o.color = !0), d.category && (o.category = !0), d.t != null && (o.thickness = !0), d.weight && (o.weight = !0), d.cost && (o.price = !0), d.q != null && !d.unlimitedQuantity && (o.quantity = !0), d.tags?.length && (o.tags = !0);
      return o;
    }), Be = C(() => I.value ? F.value.length : H.value), Ie = C(() => I.value ? Math.max(1, Math.ceil(F.value.length / ie.value)) : J.value), qe = C(() => I.value ? Q.value : U.value);
    function Ae(o) {
      I.value ? Q.value = o : k(o);
    }
    W(I, () => {
      Q.value = 1;
    }), W(() => F.value.length, (o) => {
      o === 0 && I.value && (I.value = !1);
      const m = Math.max(1, Math.ceil(o / ie.value));
      Q.value > m && (Q.value = m), F.value.length > 0 && _("labels-changed", /* @__PURE__ */ new Map());
    });
    const Te = C(() => b.loading || v.value), de = T(!1);
    W(F, (o) => {
      de.value || (ee.value = o.map((m) => R(m)));
    }, { deep: !0 });
    async function Le(o) {
      if (!b.serverPagination) return null;
      const { apiUrl: m, orgSlug: d, isCustomDomain: P } = b.serverPagination, q = P ? `${m}ecommerce/stock` : `${m}ecommerce/${d}/stock`;
      try {
        const L = new URL(q);
        L.searchParams.set("limit", "1");
        const A = {};
        if (/^[a-f0-9]{24}$/i.test(o))
          A._id = o;
        else {
          const te = o.split("-");
          if (te.length >= 4) {
            const De = parseFloat(te.pop()), Ee = parseFloat(te.pop()), Ke = parseFloat(te.pop()), ze = te.join("-");
            A.material = ze, A.l = Ke, A.w = Ee, A.t = De;
          } else
            return null;
        }
        L.searchParams.set("filters", JSON.stringify(A));
        const _e = await fetch(L.toString(), { credentials: "include" });
        if (!_e.ok) return null;
        const we = (await _e.json()).items || [];
        if (we.length === 0) return null;
        const ge = we[0];
        return R(ge) !== o ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: o, got: R(ge) }), null) : ge;
      } catch {
        return null;
      }
    }
    async function Re() {
      if (ee.value.length) {
        de.value = !0;
        try {
          const o = [...ee.value], m = [], d = [];
          for (const q of o) {
            let L = b.stockOptions.find((A) => R(A) === q);
            !L && b.serverPagination && (L = await Le(q)), L && (m.push(q), d.push(L));
          }
          const P = o.length - m.length;
          P > 0 && (ee.value = m, Me({
            message: P === 1 ? "A previously selected material is no longer available" : `${P} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const q of d) {
            const L = R(q);
            if (!x(q)) {
              h(q);
              const A = Y(q);
              fe([A], q), K.value.set(L, [A]), ue([A], L, q);
            }
          }
        } finally {
          de.value = !1;
        }
      }
    }
    Se(async () => {
      if (b.initialProductId) {
        const o = Fe(b.initialProductId);
        if (!o) return;
        const m = R(o), d = Y(o);
        fe([d], o), K.value.set(m, [d]), ue([d], m, o);
        return;
      }
      await Re(), _("selections-restored", F.value.length);
    });
    const be = C(() => b.config.availableFilters.filter((o) => {
      const m = re(o.field);
      return m.length > 0 && m.some((d) => d != null);
    })), ye = C(() => F.value.length === 0 ? null : F.value[0].db_sawId || null);
    function pe(o) {
      if (!ye.value) return !1;
      const m = o.db_sawId;
      return m ? m !== ye.value : !1;
    }
    function fe(o, m) {
      const d = m.name || m.material;
      if (d)
        for (const P of o)
          P.material = d;
    }
    async function Ue(o) {
      if (pe(o)) return;
      const m = x(o);
      h(o);
      const d = R(o);
      if (m) {
        const P = K.value.get(d);
        P ? (P.forEach(ae), K.value.delete(d)) : ae(Y(o));
      } else {
        const P = Y(o);
        fe([P], o), K.value.set(d, [P]), ue([P], d, o);
      }
    }
    function ae(o) {
      _("stock-removed", o);
    }
    function Ne() {
      for (const o of F.value) {
        const m = R(o), d = K.value.get(m);
        d ? d.forEach(ae) : ae(Y(o));
      }
      K.value.clear(), X(), ee.value = [], I.value = !1;
    }
    function je(o) {
      _("order-sample", o);
    }
    return M({
      applyFilter: f,
      removeFilter: a,
      clearFilters: g,
      clearSelection: X,
      selectedStock: F,
      filteredStock: G,
      getUniqueValues: re,
      getFieldRange: me
    }), (o, m) => (s(), l("div", hl, [
      u("", !0),
      e.config.enableSearch || e.config.sortOptions.length > 0 ? (s(), l("div", kl, [
        e.config.enableSearch ? (s(), ce(ol, {
          key: 0,
          modelValue: r(O),
          "onUpdate:modelValue": m[0] || (m[0] = (d) => ve(O) ? O.value = d : null)
        }, null, 8, ["modelValue"])) : u("", !0),
        e.config.sortOptions.length > 0 ? (s(), ce(ml, {
          key: 1,
          "sort-by": r(j),
          "onUpdate:sortBy": m[1] || (m[1] = (d) => ve(j) ? j.value = d : null),
          "sort-order": r(D),
          "onUpdate:sortOrder": m[2] || (m[2] = (d) => ve(D) ? D.value = d : null),
          "available-fields": e.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : u("", !0)
      ])) : u("", !0),
      be.value.length > 0 ? (s(), ce($s, {
        key: 2,
        "filter-configs": be.value,
        "active-filters": r(S),
        "get-unique-values": r(re),
        "get-field-range": r(me),
        "get-filter-option-counts": r(Pe),
        onApplyFilter: r(f),
        onRemoveFilter: r(a),
        onClearFilters: r(g)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : u("", !0),
      $e(Ys, {
        "total-results": Be.value,
        "display-mode": r(B),
        loading: Te.value,
        "has-active-filters": r(S).length > 0,
        "current-page": qe.value,
        "total-pages": Ie.value,
        "visible-columns": ke.value,
        "onUpdate:displayMode": m[3] || (m[3] = (d) => B.value = d),
        onClearFilters: r(g),
        onGoToPage: Ae
      }, {
        default: xe(() => [
          (s(!0), l(N, null, z(he.value, (d, P) => (s(), ce(Zt, {
            key: r(R)(d),
            stock: d,
            "is-selected": r(x)(d),
            "is-disabled": pe(d),
            "display-label": Ve.value.get(r(R)(d)),
            "format-price": e.formatPrice,
            "button-color": e.colors.button,
            "button-text-color": e.colors.buttonText,
            locale: e.locale,
            "display-mode": r(B),
            "unit-system": e.unitSystem,
            "visible-columns": ke.value,
            onToggleSelection: Ue,
            onOrderSample: je
          }, null, 8, ["stock", "is-selected", "is-disabled", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      $e(Xe, { name: "selection-bar" }, {
        default: xe(() => [
          b.showSelectionBar && r(F).length > 0 ? (s(), l("div", bl, [
            n("div", yl, [
              n("span", pl, i(r(F).length) + " " + i(r(F).length === 1 ? "material" : "materials") + " selected ", 1),
              n("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects no-margin",
                onClick: m[4] || (m[4] = (d) => I.value = !I.value)
              }, i(I.value ? "Show all" : "Show selected"), 1),
              n("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
                onClick: Ne
              }, " Clear ")
            ]),
            n("button", {
              type: "button",
              class: "c-btn c-btn--md no-margin selection-bar__confirm",
              style: oe({ backgroundColor: e.colors.button, color: e.colors.buttonText }),
              onClick: m[5] || (m[5] = (d) => _("selection-confirmed", r(F)))
            }, i(r(c)("stockFilter.create_cut_list")), 5)
          ])) : u("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Fl as default
};
