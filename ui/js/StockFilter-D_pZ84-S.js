import { d as Z, a as l, b as s, P as le, x as oe, p as q, q as se, c as _, f as n, e as r, r as T, t as i, s as Ce, u, F as z, k as G, o as he, M as Fe, w as K, U as Ge, O as He, m as Qe, B as Ze, V as Je, j as ce, g as $e, W as ve, y as Se, X as Xe } from "./vendor-vue-DyIrsOEK.js";
import { e as Ye, u as et } from "./EcommerceCalculator-zkjR6l-4.js";
import { t as c } from "./i18n-Ck7sLK64.js";
import { u as tt, g as D } from "./Vanilla-OWebG3QT.js";
import { _ as ne } from "./Launch-DkkhHqxE.js";
function st(e) {
  const B = e.trim();
  if (B.startsWith("#")) {
    const t = B.slice(1);
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
  if (B.startsWith("rgb")) {
    const t = B.match(/\d+/g);
    if (t && t.length >= 3)
      return { r: +t[0], g: +t[1], b: +t[2] };
  }
  return null;
}
function lt(e, B) {
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
}, ht = { key: 1 }, mt = {
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
}, xt = { class: "stock-filter-row__action" }, Ct = ["disabled"], $t = ["onKeydown"], St = { class: "stock-filter-card__image-wrapper" }, Ft = ["src", "alt"], Pt = {
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
}, Tt = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Rt = {
  key: 0,
  class: "middot"
}, At = {
  key: 3,
  class: "stock-filter-card__extras"
}, Lt = {
  key: 0,
  class: "extras-badge extras-badge--sample"
}, Ut = {
  key: 1,
  class: "extras-badge extras-badge--banding"
}, Nt = {
  key: 2,
  class: "extras-badge extras-badge--finish"
}, jt = {
  key: 3,
  class: "extras-badge extras-badge--planing"
}, Dt = {
  key: 4,
  class: "extras-badge extras-badge--machining"
}, Et = { class: "stock-filter-card__footer" }, zt = {
  key: 0,
  class: "stock-filter-card__price"
}, Kt = {
  key: 0,
  class: "price__original"
}, Wt = {
  key: 1,
  class: "price__badge"
}, Gt = { class: "stock-filter-card__actions" }, Ht = ["disabled"], Qt = /* @__PURE__ */ Z({
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
  setup(e, { emit: B }) {
    const t = e, p = B, w = T(!1), $ = T(!1), S = _(() => t.stock.available !== !1), O = _(() => t.isDisabled), x = _(() => t.stock.discount && t.stock.discount > 0), P = _(() => {
      const b = t.stock.sample;
      return b?.enabled ? b.price && b.price > 0 ? `${c("stockFilter.orderSample")} (${t.formatPrice(b.price, t.locale)})` : c("stockFilter.freeSample") : "";
    }), R = _(() => t.stock.cost ? x.value ? t.stock.cost * (1 - t.stock.discount / 100) : t.stock.cost : 0), g = _(() => t.stock.cost ? t.formatPrice(t.stock.cost, t.locale) : "N/A"), y = _(() => t.stock.cost ? t.formatPrice(R.value, t.locale) : "N/A"), C = _(() => t.stock.colorHex || ""), I = _(() => t.stock.color || ""), E = _(() => C.value ? lt(C.value) : "#fff"), A = _(() => {
      if (!t.stock.grain) return "";
      switch (t.stock.grain) {
        case "l":
          return c("fields.grain.length");
        case "w":
          return c("fields.grain.width");
        default:
          return "";
      }
    }), M = _(() => {
      const b = [];
      return t.stock.category && b.push(t.stock.category), t.stock.variant && b.push(t.stock.variant), A.value && b.push(A.value), t.stock.weight && b.push(`${t.stock.weight}kg`), b;
    }), J = _(() => t.stock.t == null ? "" : t.unitSystem === "imperial" ? `${(t.stock.t / 25.4).toFixed(2)}"` : `${t.stock.t} mm`), H = _(() => {
      const b = t.stock.extras;
      return b ? !!(b.banding?.length || b.finish?.length || b.planing?.length || b.machining?.length) : !1;
    }), h = _(() => {
      const b = ["60px", "2fr"];
      return t.visibleColumns.finish && b.push("1fr"), t.visibleColumns.variant && b.push("1fr"), t.visibleColumns.category && b.push("1fr"), t.visibleColumns.grain && b.push("80px"), t.visibleColumns.color && b.push("100px"), t.visibleColumns.thickness && b.push("80px"), t.visibleColumns.quantity && b.push("80px"), t.visibleColumns.weight && b.push("80px"), t.visibleColumns.price && b.push("100px"), b.push("50px"), { "grid-template-columns": b.join(" ") };
    }), f = _(() => t.displayLabel ? t.displayLabel : t.stock.name ? t.stock.name : `${t.stock.material} ${t.stock.l}×${t.stock.w}`);
    function a() {
      !S.value || O.value || p("toggle-selection", t.stock);
    }
    function v() {
      p("order-sample", t.stock);
    }
    return (b, k) => e.displayMode === "list" ? (s(), l("div", {
      key: 0,
      class: q(["stock-filter-row", {
        "stock-filter-row--selected": e.isSelected,
        "stock-filter-row--unavailable": !S.value,
        "stock-filter-row--disabled": O.value
      }]),
      style: oe(h.value),
      role: "button",
      tabindex: "0",
      onClick: a,
      onKeydown: [
        le(a, ["enter"]),
        le(se(a, ["prevent"]), ["space"])
      ]
    }, [
      n("div", nt, [
        k[4] || (k[4] = n("div", { class: "stock-filter-row__thumb-placeholder" }, null, -1)),
        e.stock.imageUrl && !w.value ? (s(), l("img", {
          key: 0,
          class: q(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": $.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: k[0] || (k[0] = (F) => $.value = !0),
          onError: k[1] || (k[1] = (F) => w.value = !0)
        }, null, 42, it)) : r("", !0)
      ]),
      n("div", at, [
        n("span", ct, i(f.value), 1),
        e.stock.code ? (s(), l("span", rt, i(e.stock.code), 1)) : r("", !0)
      ]),
      e.visibleColumns.finish ? (s(), l("div", ut, i(e.stock.finish || ""), 1)) : r("", !0),
      e.visibleColumns.variant ? (s(), l("div", dt, i(e.stock.variant || ""), 1)) : r("", !0),
      e.visibleColumns.category ? (s(), l("div", ft, i(e.stock.category || ""), 1)) : r("", !0),
      e.visibleColumns.grain ? (s(), l("div", gt, i(A.value), 1)) : r("", !0),
      e.visibleColumns.color ? (s(), l("div", vt, [
        C.value ? (s(), l("span", {
          key: 0,
          class: "color-swatch color-swatch--sm",
          style: oe({ backgroundColor: C.value })
        }, null, 4)) : r("", !0),
        I.value ? (s(), l("span", ht, i(I.value), 1)) : r("", !0)
      ])) : r("", !0),
      e.visibleColumns.thickness ? (s(), l("div", mt, [
        e.stock.t != null ? (s(), l("span", kt, [
          Ce(i(e.stock.t), 1),
          k[5] || (k[5] = n("small", null, "mm", -1))
        ])) : r("", !0)
      ])) : r("", !0),
      e.visibleColumns.quantity ? (s(), l("div", bt, i(e.stock.unlimitedQuantity ? u(c)("stockFilter.inStock") : e.stock.q), 1)) : r("", !0),
      e.visibleColumns.weight ? (s(), l("div", yt, i(e.stock.weight ? `${e.stock.weight}kg` : ""), 1)) : r("", !0),
      e.visibleColumns.price ? (s(), l("div", pt, [
        x.value ? (s(), l("span", _t, i(g.value), 1)) : r("", !0),
        n("span", {
          class: q(["price__value", { price__discounted: x.value }])
        }, i(y.value), 3),
        x.value ? (s(), l("span", wt, "-" + i(e.stock.discount) + "%", 1)) : r("", !0)
      ])) : r("", !0),
      n("div", xt, [
        n("button", {
          type: "button",
          class: q(["c-btn c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
          disabled: !S.value || O.value,
          onClick: se(a, ["stop"])
        }, i(e.isSelected ? "−" : "+"), 11, Ct)
      ])
    ], 46, ot)) : (s(), l("div", {
      key: 1,
      class: q(["stock-filter-card", {
        "stock-filter-card--selected": e.isSelected,
        "stock-filter-card--unavailable": !S.value,
        "stock-filter-card--disabled": O.value
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
        k[6] || (k[6] = n("div", { class: "stock-filter-card__image-placeholder" }, null, -1)),
        e.stock.imageUrl && !w.value ? (s(), l("img", {
          key: 0,
          class: q(["stock-filter-card__image", { "stock-filter-card__image--loaded": $.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: k[2] || (k[2] = (F) => $.value = !0),
          onError: k[3] || (k[3] = (F) => w.value = !0)
        }, null, 42, Ft)) : r("", !0),
        e.stock.t != null ? (s(), l("span", Pt, i(J.value), 1)) : r("", !0),
        n("div", Mt, [
          I.value ? (s(), l("span", {
            key: 0,
            class: "c-badge stock-filter-card__badge--color",
            style: oe(C.value ? { background: C.value, color: E.value } : void 0)
          }, i(I.value), 5)) : r("", !0),
          e.stock.finish ? (s(), l("span", Ot, i(e.stock.finish), 1)) : r("", !0)
        ])
      ]),
      n("div", Vt, [
        n("h3", Bt, i(f.value), 1),
        e.stock.code ? (s(), l("div", It, i(e.stock.code), 1)) : r("", !0),
        e.stock.description ? (s(), l("div", qt, i(e.stock.description), 1)) : r("", !0),
        M.value.length ? (s(), l("div", Tt, [
          (s(!0), l(z, null, G(M.value, (F, X) => (s(), l(z, { key: X }, [
            X > 0 ? (s(), l("span", Rt, " · ")) : r("", !0),
            Ce(i(F), 1)
          ], 64))), 128))
        ])) : r("", !0),
        H.value || e.stock.sample?.enabled ? (s(), l("div", At, [
          e.stock.sample?.enabled ? (s(), l("span", Lt, i(u(c)("stockFilter.samplesAvailable")), 1)) : r("", !0),
          e.stock.extras?.banding?.length ? (s(), l("span", Ut, i(u(c)("stockFilter.banding")), 1)) : r("", !0),
          e.stock.extras?.finish?.length ? (s(), l("span", Nt, i(u(c)("stockFilter.finishOption")), 1)) : r("", !0),
          e.stock.extras?.planing?.length ? (s(), l("span", jt, i(u(c)("stockFilter.planing")), 1)) : r("", !0),
          e.stock.extras?.machining?.length ? (s(), l("span", Dt, i(u(c)("stockFilter.machining")), 1)) : r("", !0)
        ])) : r("", !0)
      ]),
      n("div", Et, [
        e.stock.cost ? (s(), l("div", zt, [
          x.value ? (s(), l("span", Kt, i(g.value), 1)) : r("", !0),
          n("span", {
            class: q(["price__value", { price__discounted: x.value }])
          }, i(y.value), 3),
          x.value ? (s(), l("span", Wt, "-" + i(e.stock.discount) + "%", 1)) : r("", !0)
        ])) : r("", !0),
        n("div", Gt, [
          e.stock.sample?.enabled ? (s(), l("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: se(v, ["stop"])
          }, i(P.value), 1)) : r("", !0),
          n("button", {
            type: "button",
            class: q(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
            disabled: !S.value || O.value,
            onClick: se(a, ["stop"])
          }, i(e.isSelected ? u(c)("stockFilter.remove") : "+ " + u(c)("stockFilter.select")), 11, Ht)
        ])
      ])
    ], 42, $t));
  }
}), Zt = /* @__PURE__ */ ne(Qt, [["__scopeId", "data-v-17acd3da"]]), Jt = { class: "stock-filter-panel" }, Xt = { class: "filter-panel-content" }, Yt = {
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
}, gs = ["checked", "onChange"], vs = { class: "multiselect__option-label" }, hs = {
  key: 0,
  class: "multiselect__option-count"
}, ms = {
  key: 2,
  class: "filter-range"
}, ks = { class: "filter-range__inputs" }, bs = ["value", "min", "max", "step", "onInput"], ys = ["value", "min", "max", "step", "onInput"], ps = {
  key: 3,
  class: "filter-boolean"
}, _s = { class: "filter-checkbox" }, ws = ["checked", "onChange"], xs = /* @__PURE__ */ Z({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(e, { emit: B }) {
    const t = e, p = B, w = T({}), $ = T(null), S = _(() => t.activeFilters.length);
    function O(h) {
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
      }[h.field] || h.label;
    }
    function x(h) {
      const f = t.getFilterOptionCounts?.(h.field) || /* @__PURE__ */ new Map(), a = f.size > 0, v = (k) => {
        if (!a) return;
        const F = typeof k == "object" && k !== null && "hex" in k ? k.hex : String(k);
        return f.get(F) ?? 0;
      };
      return h.options?.length ? h.options.map((k) => ({
        ...k,
        count: v(k.value)
      })) : t.getUniqueValues(h.field).map((k) => {
        const F = v(k);
        return h.field === "color" && typeof k == "object" && k !== null ? "name" in k && k.name ? {
          label: k.name,
          value: k,
          count: F
        } : {
          label: k.hex || String(k),
          value: k,
          count: F
        } : {
          label: String(k),
          value: k,
          count: F
        };
      });
    }
    function P(h) {
      return t.activeFilters.find((a) => a.field === h)?.value;
    }
    function R(h, f) {
      const a = P(h);
      return Array.isArray(a) ? h === "color" && typeof f == "object" && f !== null && "hex" in f ? a.some((v) => typeof v == "object" && v !== null && "hex" in v && v.hex === f.hex) : a.includes(f) : h === "color" && typeof f == "object" && f !== null && "hex" in f ? typeof a == "object" && a !== null && "hex" in a && a.hex === f.hex : a === f;
    }
    function g(h, f) {
      const v = f.target.value;
      if (v === "")
        p("remove-filter", h);
      else {
        const b = v !== "" && !isNaN(Number(v)) ? Number(v) : v;
        p("apply-filter", h, b, "select");
      }
    }
    function y(h, f, a) {
      const v = a.target, b = P(h) || [], k = Array.isArray(b) ? [...b] : [];
      if (v.checked)
        k.includes(f) || k.push(f);
      else {
        const F = k.indexOf(f);
        F !== -1 && k.splice(F, 1);
      }
      k.length === 0 ? p("remove-filter", h) : p("apply-filter", h, k, "multiselect");
    }
    function C(h, f) {
      if (w.value[h]?.[f] !== void 0)
        return w.value[h][f];
      const a = t.activeFilters.find((v) => v.field === h);
      if (a?.value && typeof a.value == "object")
        return a.value[f];
    }
    function I(h, f, a) {
      const v = a.target, b = v.value ? Number(v.value) : void 0;
      w.value[h] || (w.value[h] = {}), w.value[h][f] = b;
      const k = w.value[h].min, F = w.value[h].max;
      k !== void 0 || F !== void 0 ? p("apply-filter", h, { min: k, max: F }, "range") : p("remove-filter", h);
    }
    function E(h, f) {
      f.target.checked ? p("apply-filter", h, !0, "boolean") : p("remove-filter", h);
    }
    function A() {
      w.value = {}, p("clear-filters");
    }
    function M(h) {
      $.value = $.value === h ? null : h;
    }
    function J(h) {
      const f = P(h.field);
      return !f || Array.isArray(f) && f.length === 0 ? c("stockFilter.all") : Array.isArray(f) ? f.length === 1 ? x(h).find((b) => h.field === "color" && typeof b.value == "object" && b.value !== null && "hex" in b.value ? typeof f[0] == "object" && f[0] !== null && "hex" in f[0] && b.value.hex === f[0].hex : b.value === f[0])?.label || String(f[0]) : c("stockFilter.selected_count", [f.length]) : String(f);
    }
    function H(h) {
      h.target.closest(".multiselect") || ($.value = null);
    }
    return he(() => {
      document.addEventListener("click", H);
    }), Fe(() => {
      document.removeEventListener("click", H);
    }), (h, f) => (s(), l("div", Jt, [
      n("div", Xt, [
        S.value > 0 ? (s(), l("div", Yt, [
          n("span", es, i(u(c)("stockFilter.active_filters", [S.value])), 1),
          n("button", {
            type: "button",
            class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
            onClick: A
          }, i(u(c)("stockFilter.clear_filters")), 1)
        ])) : r("", !0),
        n("div", ts, [
          (s(!0), l(z, null, G(e.filterConfigs, (a) => (s(), l("div", {
            key: a.field,
            class: "filter-group"
          }, [
            n("div", ss, [
              n("label", ls, i(O(a)), 1)
            ]),
            n("div", os, [
              a.type === "select" ? (s(), l("div", ns, [
                n("select", {
                  value: P(a.field),
                  class: "filter-select-input",
                  onChange: (v) => g(a.field, v)
                }, [
                  n("option", as, i(u(c)("stockFilter.all")), 1),
                  (s(!0), l(z, null, G(x(a), (v) => (s(), l("option", {
                    key: v.value,
                    value: v.value
                  }, i(v.label) + i(v.count !== void 0 ? ` (${v.count})` : ""), 9, cs))), 128))
                ], 40, is)
              ])) : a.type === "multiselect" ? (s(), l("div", rs, [
                n("button", {
                  type: "button",
                  class: "multiselect__trigger",
                  onClick: (v) => M(a.field)
                }, [
                  n("span", ds, i(J(a)), 1)
                ], 8, us),
                $.value === a.field ? (s(), l("div", fs, [
                  (s(!0), l(z, null, G(x(a), (v) => (s(), l("label", {
                    key: v.value,
                    class: q(["multiselect__option", { "multiselect__option--zero": v.count === 0 }])
                  }, [
                    n("input", {
                      checked: R(a.field, v.value),
                      type: "checkbox",
                      onChange: (b) => y(a.field, v.value, b)
                    }, null, 40, gs),
                    n("span", vs, i(v.label), 1),
                    v.count !== void 0 ? (s(), l("span", hs, "(" + i(v.count) + ")", 1)) : r("", !0)
                  ], 2))), 128))
                ])) : r("", !0)
              ])) : a.type === "range" ? (s(), l("div", ms, [
                n("div", ks, [
                  n("input", {
                    value: C(a.field, "min"),
                    min: a.min,
                    max: a.max,
                    step: a.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (v) => I(a.field, "min", v)
                  }, null, 40, bs),
                  f[0] || (f[0] = n("span", { class: "filter-range__separator" }, "–", -1)),
                  n("input", {
                    value: C(a.field, "max"),
                    min: a.min,
                    max: a.max,
                    step: a.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (v) => I(a.field, "max", v)
                  }, null, 40, ys)
                ])
              ])) : a.type === "boolean" ? (s(), l("div", ps, [
                n("label", _s, [
                  n("input", {
                    checked: P(a.field) === !0,
                    type: "checkbox",
                    onChange: (v) => E(a.field, v)
                  }, null, 40, ws),
                  n("span", null, i(a.label), 1)
                ])
              ])) : r("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), Cs = /* @__PURE__ */ ne(xs, [["__scopeId", "data-v-126e3b6c"]]), $s = { class: "stock-filter-results" }, Ss = { class: "results-header" }, Fs = { class: "results-info" }, Ps = {
  key: 0,
  class: "results-count"
}, Ms = {
  key: 1,
  class: "results-count results-count--loading"
}, Os = { class: "results-controls" }, Vs = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, Bs = ["title"], Is = ["title"], qs = {
  key: 0,
  class: "results-loading"
}, Ts = {
  key: 1,
  class: "results-empty"
}, Rs = { class: "empty-message" }, As = { class: "th" }, Ls = {
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
}, zs = {
  key: 6,
  class: "th th--center"
}, Ks = {
  key: 7,
  class: "th th--center"
}, Ws = {
  key: 8,
  class: "th th--right"
}, Gs = {
  key: 3,
  class: "results-pagination"
}, Hs = ["disabled"], Qs = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, Zs = ["onClick"], Js = ["disabled"], Xs = /* @__PURE__ */ Z({
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
  setup(e, { emit: B }) {
    const t = e, p = _(() => {
      const g = ["60px", "2fr"];
      return t.visibleColumns.finish && g.push("1fr"), t.visibleColumns.variant && g.push("1fr"), t.visibleColumns.category && g.push("1fr"), t.visibleColumns.grain && g.push("80px"), t.visibleColumns.color && g.push("100px"), t.visibleColumns.thickness && g.push("80px"), t.visibleColumns.quantity && g.push("80px"), t.visibleColumns.weight && g.push("80px"), t.visibleColumns.price && g.push("100px"), g.push("50px"), { "grid-template-columns": g.join(" ") };
    }), w = B, $ = T(!0), S = T(null);
    let O = null;
    const x = _(() => {
      const g = t.visibleColumns;
      let y = 310;
      g.finish && (y += 100), g.variant && (y += 100), g.category && (y += 100), g.grain && (y += 80), g.color && (y += 100), g.thickness && (y += 80), g.quantity && (y += 80), g.weight && (y += 80), g.price && (y += 100);
      const C = 3 + [g.finish, g.variant, g.category, g.grain, g.color, g.thickness, g.quantity, g.weight, g.price].filter(Boolean).length;
      return y += (C - 1) * 16, y;
    });
    function P() {
      S.value && ($.value = S.value.offsetWidth >= x.value);
    }
    he(() => {
      S.value = document.querySelector(".stock-filter-results"), P(), O = new ResizeObserver(P), S.value && O.observe(S.value);
    }), Fe(() => {
      O?.disconnect();
    }), K($, (g) => {
      !g && t.displayMode === "list" && w("update:displayMode", "grid");
    }), K(x, () => P());
    const R = _(() => {
      const g = [], C = Math.floor(2.5);
      let I = Math.max(1, t.currentPage - C), E = Math.min(t.totalPages, I + 5 - 1);
      E === t.totalPages && (I = Math.max(1, E - 5 + 1));
      for (let A = I; A <= E; A++)
        g.push(A);
      return g;
    });
    return (g, y) => (s(), l("div", $s, [
      n("div", Ss, [
        n("div", Fs, [
          e.loading ? (s(), l("div", Ms, i(u(c)("actions.loading")) + "...", 1)) : (s(), l("div", Ps, i(e.totalResults) + " " + i(e.totalResults === 1 ? u(c)("stockFilter.result_one") : u(c)("stockFilter.result_other")), 1))
        ]),
        n("div", Os, [
          n("div", Vs, [
            n("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: e.displayMode === "grid" }]),
              title: u(c)("stockFilter.grid_view"),
              onClick: y[0] || (y[0] = (C) => g.$emit("update:displayMode", "grid"))
            }, [...y[5] || (y[5] = [
              Ge('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-2291026a><rect x="1" y="1" width="6" height="6" data-v-2291026a></rect><rect x="9" y="1" width="6" height="6" data-v-2291026a></rect><rect x="1" y="9" width="6" height="6" data-v-2291026a></rect><rect x="9" y="9" width="6" height="6" data-v-2291026a></rect></svg>', 1)
            ])], 10, Bs),
            $.value ? (s(), l("button", {
              key: 0,
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: e.displayMode === "list" }]),
              title: u(c)("stockFilter.list_view"),
              onClick: y[1] || (y[1] = (C) => g.$emit("update:displayMode", "list"))
            }, [...y[6] || (y[6] = [
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
            ])], 10, Is)) : r("", !0)
          ])
        ])
      ]),
      e.loading ? (s(), l("div", qs, [
        y[7] || (y[7] = n("div", { class: "spinner" }, null, -1)),
        n("p", null, i(u(c)("actions.loading")) + "...", 1)
      ])) : e.totalResults === 0 ? (s(), l("div", Ts, [
        n("p", Rs, i(u(c)("stockFilter.no_results")), 1),
        e.hasActiveFilters ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: y[2] || (y[2] = (C) => g.$emit("clear-filters"))
        }, i(u(c)("stockFilter.clear_filters")), 1)) : r("", !0)
      ])) : (s(), l(z, { key: 2 }, [
        e.displayMode === "list" ? (s(), l("div", {
          key: 0,
          class: "results-table-header",
          style: oe(p.value)
        }, [
          y[8] || (y[8] = n("div", { class: "th" }, null, -1)),
          n("div", As, i(u(c)("woodwork.material")), 1),
          e.visibleColumns.finish ? (s(), l("div", Ls, i(u(c)("fields.finish")), 1)) : r("", !0),
          e.visibleColumns.variant ? (s(), l("div", Us, i(u(c)("fields.variant")), 1)) : r("", !0),
          e.visibleColumns.category ? (s(), l("div", Ns, i(u(c)("fields.category")), 1)) : r("", !0),
          e.visibleColumns.grain ? (s(), l("div", js, i(u(c)("fields.grain")), 1)) : r("", !0),
          e.visibleColumns.color ? (s(), l("div", Ds, i(u(c)("fields.color")), 1)) : r("", !0),
          e.visibleColumns.thickness ? (s(), l("div", Es, i(u(c)("fields.t")), 1)) : r("", !0),
          e.visibleColumns.quantity ? (s(), l("div", zs, i(u(c)("fields.q")), 1)) : r("", !0),
          e.visibleColumns.weight ? (s(), l("div", Ks, i(u(c)("fields.weight")), 1)) : r("", !0),
          e.visibleColumns.price ? (s(), l("div", Ws, i(u(c)("stockFilter.price")), 1)) : r("", !0),
          y[9] || (y[9] = n("div", { class: "th th--center" }, null, -1))
        ], 4)) : r("", !0),
        n("div", {
          class: q(["results-grid", { "results-grid--list": e.displayMode === "list" }])
        }, [
          He(g.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      e.totalPages > 1 ? (s(), l("div", Gs, [
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === 1,
          onClick: y[3] || (y[3] = (C) => g.$emit("go-to-page", e.currentPage - 1))
        }, i(u(c)("pagination.previous")), 9, Hs),
        n("div", Qs, [
          (s(!0), l(z, null, G(R.value, (C) => (s(), l("button", {
            key: C,
            type: "button",
            class: q(["c-btn c-btn--sm", { selected: C === e.currentPage }]),
            onClick: (I) => g.$emit("go-to-page", C)
          }, i(C), 11, Zs))), 128))
        ]),
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === e.totalPages,
          onClick: y[4] || (y[4] = (C) => g.$emit("go-to-page", e.currentPage + 1))
        }, i(u(c)("pagination.next")), 9, Js)
      ])) : r("", !0)
    ]));
  }
}), Ys = /* @__PURE__ */ ne(Xs, [["__scopeId", "data-v-2291026a"]]), el = { class: "stock-filter-search" }, tl = { class: "c-field-action search-input-wrapper" }, sl = ["placeholder"], ll = /* @__PURE__ */ Z({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: B }) {
    const t = e, p = B, w = T(t.modelValue);
    K(() => t.modelValue, (O) => {
      w.value = O;
    });
    function $() {
      p("update:modelValue", w.value);
    }
    function S() {
      w.value = "", p("update:modelValue", "");
    }
    return (O, x) => (s(), l("div", el, [
      n("div", tl, [
        Qe(n("input", {
          "onUpdate:modelValue": x[0] || (x[0] = (P) => w.value = P),
          type: "text",
          class: "search-input",
          placeholder: e.placeholder,
          onKeydown: le($, ["enter"])
        }, null, 40, sl), [
          [Ze, w.value]
        ]),
        w.value ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: S
        }, " × ")) : r("", !0),
        n("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin c-btn--no-effects",
          onClick: $
        }, i(u(c)("actions.search")), 1)
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
  setup(e, { emit: B }) {
    const t = e, p = B, w = t.availableFields.map((x) => ({
      value: x,
      label: $(x)
    }));
    function $(x) {
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
      }[x] || x.charAt(0).toUpperCase() + x.slice(1);
    }
    function S(x) {
      const P = x.target;
      p("update:sortBy", P.value);
    }
    function O() {
      p("update:sortOrder", t.sortOrder === "asc" ? "desc" : "asc");
    }
    return (x, P) => (s(), l("div", nl, [
      n("div", il, [
        n("label", al, i(u(c)("stockFilter.sort_by")) + ":", 1),
        n("select", {
          value: e.sortBy,
          class: "sort-select",
          onChange: S
        }, [
          (s(!0), l(z, null, G(u(w), (R) => (s(), l("option", {
            key: R.value,
            value: R.value
          }, i(R.label), 9, rl))), 128))
        ], 40, cl),
        n("button", {
          type: "button",
          class: q(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": e.sortOrder === "desc" }]),
          title: e.sortOrder === "asc" ? u(c)("options.by_dimensions") : u(c)("options.by_dimensions"),
          onClick: O
        }, [
          (s(), l("svg", dl, [
            e.sortOrder === "asc" ? (s(), l("path", fl)) : (s(), l("path", gl))
          ]))
        ], 10, ul)
      ])
    ]));
  }
}), hl = /* @__PURE__ */ ne(vl, [["__scopeId", "data-v-d77a934a"]]), ml = {
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
  setup(e, { expose: B, emit: t }) {
    const p = e, w = t, $ = T(p.stockOptions), S = T(p.config), O = T(p.numberFormat);
    K(() => p.stockOptions, (o) => {
      $.value = o;
    }), K(() => p.config, (o) => {
      S.value = o;
    });
    const x = _(() => {
      if (p.serverPagination)
        return { ...p.serverPagination };
    }), {
      activeFilters: P,
      searchQuery: R,
      sortBy: g,
      sortOrder: y,
      displayMode: C,
      currentPage: I,
      filteredStock: E,
      paginatedStock: A,
      selectedStock: M,
      totalPages: J,
      totalItems: H,
      isLoading: h,
      applyFilter: f,
      removeFilter: a,
      clearFilters: v,
      goToPage: b,
      toggleStockSelection: k,
      isStockSelected: F,
      clearSelection: X,
      selectById: Pe,
      createInputStock: Y,
      getUniqueValues: re,
      getFieldRange: me,
      getFilterOptionCounts: Me
    } = tt({
      stockOptions: $,
      config: S,
      numberFormat: O,
      serverPagination: x.value
    }), { addNotice: Oe } = et(), ee = Je("stock-filter-selections", []), L = T(!1), Q = T(1), W = T(/* @__PURE__ */ new Map());
    function ue(o, m, d) {
      for (const V of o)
        V.customData = {
          ...V.customData || {},
          selectionId: m,
          // Preserve source stock data for calculator extras filtering
          // (InputStock schema strips extras during parse, so we pass via customData)
          ...d?.name && { stockName: d.name },
          ...d?.extras && { stockExtras: d.extras }
        };
      w("stock-added", o);
    }
    const ie = _(() => p.config.itemsPerPage || 20), Ve = _(() => {
      const o = (Q.value - 1) * ie.value, m = o + ie.value;
      return M.value.slice(o, m);
    }), ke = _(() => L.value ? Ve.value : A.value), Be = _(() => {
      const o = /* @__PURE__ */ new Map();
      for (const m of ke.value)
        o.set(D(m), m.name || m.material || "");
      return o;
    }), be = _(() => {
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
      }, m = p.serverPagination ? A.value : E.value;
      for (const d of m)
        d.code && (o.code = !0), d.description && (o.description = !0), d.finish && (o.finish = !0), d.variant && (o.variant = !0), d.grain && (o.grain = !0), d.color && (o.color = !0), d.category && (o.category = !0), d.t != null && (o.thickness = !0), d.weight && (o.weight = !0), d.cost && (o.price = !0), d.q != null && !d.unlimitedQuantity && (o.quantity = !0), d.tags?.length && (o.tags = !0);
      return o;
    }), Ie = _(() => L.value ? M.value.length : H.value), qe = _(() => L.value ? Math.max(1, Math.ceil(M.value.length / ie.value)) : J.value), Te = _(() => L.value ? Q.value : I.value);
    function Re(o) {
      L.value ? Q.value = o : b(o);
    }
    K(L, () => {
      Q.value = 1;
    }), K(() => M.value.length, (o) => {
      o === 0 && L.value && (L.value = !1);
      const m = Math.max(1, Math.ceil(o / ie.value));
      Q.value > m && (Q.value = m), M.value.length > 0 && w("labels-changed", /* @__PURE__ */ new Map());
    });
    const Ae = _(() => p.loading || h.value), de = T(!1);
    K(M, (o) => {
      de.value || (ee.value = o.map((m) => D(m)));
    }, { deep: !0 });
    async function Le(o) {
      if (!p.serverPagination) return null;
      const { apiUrl: m, orgSlug: d, isCustomDomain: V } = p.serverPagination, U = V ? `${m}ecommerce/stock` : `${m}ecommerce/${d}/stock`;
      try {
        const j = new URL(U);
        j.searchParams.set("limit", "1");
        const N = {};
        if (/^[a-f0-9]{24}$/i.test(o))
          N._id = o;
        else {
          const te = o.split("-");
          if (te.length >= 4) {
            const Ee = parseFloat(te.pop()), ze = parseFloat(te.pop()), Ke = parseFloat(te.pop()), We = te.join("-");
            N.material = We, N.l = Ke, N.w = ze, N.t = Ee;
          } else
            return null;
        }
        j.searchParams.set("filters", JSON.stringify(N));
        const we = await fetch(j.toString(), { credentials: "include" });
        if (!we.ok) return null;
        const xe = (await we.json()).items || [];
        if (xe.length === 0) return null;
        const ge = xe[0];
        return D(ge) !== o ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: o, got: D(ge) }), null) : ge;
      } catch {
        return null;
      }
    }
    async function Ue() {
      if (ee.value.length) {
        de.value = !0;
        try {
          const o = [...ee.value], m = [], d = [];
          for (const U of o) {
            let j = p.stockOptions.find((N) => D(N) === U);
            !j && p.serverPagination && (j = await Le(U)), j && (m.push(U), d.push(j));
          }
          const V = o.length - m.length;
          V > 0 && (ee.value = m, Oe({
            message: V === 1 ? "A previously selected material is no longer available" : `${V} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const U of d) {
            const j = D(U);
            if (!F(U)) {
              k(U);
              const N = Y(U);
              fe([N], U), W.value.set(j, [N]), ue([N], j, U);
            }
          }
        } finally {
          de.value = !1;
        }
      }
    }
    he(async () => {
      if (p.initialProductId) {
        const o = Pe(p.initialProductId);
        if (!o) return;
        const m = D(o), d = Y(o);
        fe([d], o), W.value.set(m, [d]), ue([d], m, o);
        return;
      }
      await Ue(), w("selections-restored", M.value.length);
    });
    const ye = _(() => p.config.availableFilters.filter((o) => {
      const m = re(o.field);
      return m.length > 0 && m.some((d) => d != null);
    })), pe = _(() => M.value.length === 0 ? null : M.value[0].db_sawId || null);
    function _e(o) {
      if (!pe.value) return !1;
      const m = o.db_sawId;
      return m ? m !== pe.value : !1;
    }
    function fe(o, m) {
      const d = m.name || m.material;
      if (d)
        for (const V of o)
          V.material = d;
    }
    async function Ne(o) {
      if (_e(o)) return;
      const m = F(o);
      k(o);
      const d = D(o);
      if (m) {
        const V = W.value.get(d);
        V ? (V.forEach(ae), W.value.delete(d)) : ae(Y(o));
      } else {
        const V = Y(o);
        fe([V], o), W.value.set(d, [V]), ue([V], d, o);
      }
    }
    function ae(o) {
      w("stock-removed", o);
    }
    function je() {
      for (const o of M.value) {
        const m = D(o), d = W.value.get(m);
        d ? d.forEach(ae) : ae(Y(o));
      }
      W.value.clear(), X(), ee.value = [], L.value = !1;
    }
    function De(o) {
      w("order-sample", o);
    }
    return B({
      applyFilter: f,
      removeFilter: a,
      clearFilters: v,
      clearSelection: X,
      selectedStock: M,
      filteredStock: E,
      getUniqueValues: re,
      getFieldRange: me
    }), (o, m) => (s(), l("div", ml, [
      r("", !0),
      e.config.enableSearch || e.config.sortOptions.length > 0 ? (s(), l("div", kl, [
        e.config.enableSearch ? (s(), ce(ol, {
          key: 0,
          modelValue: u(R),
          "onUpdate:modelValue": m[0] || (m[0] = (d) => ve(R) ? R.value = d : null)
        }, null, 8, ["modelValue"])) : r("", !0),
        e.config.sortOptions.length > 0 ? (s(), ce(hl, {
          key: 1,
          "sort-by": u(g),
          "onUpdate:sortBy": m[1] || (m[1] = (d) => ve(g) ? g.value = d : null),
          "sort-order": u(y),
          "onUpdate:sortOrder": m[2] || (m[2] = (d) => ve(y) ? y.value = d : null),
          "available-fields": e.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : r("", !0)
      ])) : r("", !0),
      ye.value.length > 0 ? (s(), ce(Cs, {
        key: 2,
        "filter-configs": ye.value,
        "active-filters": u(P),
        "get-unique-values": u(re),
        "get-field-range": u(me),
        "get-filter-option-counts": u(Me),
        onApplyFilter: u(f),
        onRemoveFilter: u(a),
        onClearFilters: u(v)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : r("", !0),
      $e(Ys, {
        "total-results": Ie.value,
        "display-mode": u(C),
        loading: Ae.value,
        "has-active-filters": u(P).length > 0,
        "current-page": Te.value,
        "total-pages": qe.value,
        "visible-columns": be.value,
        "onUpdate:displayMode": m[3] || (m[3] = (d) => C.value = d),
        onClearFilters: u(v),
        onGoToPage: Re
      }, {
        default: Se(() => [
          (s(!0), l(z, null, G(ke.value, (d, V) => (s(), ce(Zt, {
            key: u(D)(d),
            stock: d,
            "is-selected": u(F)(d),
            "is-disabled": _e(d),
            "display-label": Be.value.get(u(D)(d)),
            "format-price": e.formatPrice,
            "button-color": e.colors.button,
            "button-text-color": e.colors.buttonText,
            locale: e.locale,
            "display-mode": u(C),
            "unit-system": e.unitSystem,
            "visible-columns": be.value,
            onToggleSelection: Ne,
            onOrderSample: De
          }, null, 8, ["stock", "is-selected", "is-disabled", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      $e(Xe, { name: "selection-bar" }, {
        default: Se(() => [
          p.showSelectionBar && u(M).length > 0 ? (s(), l("div", bl, [
            n("div", yl, [
              n("span", pl, i(u(M).length) + " " + i(u(M).length === 1 ? "material" : "materials") + " selected ", 1),
              n("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects no-margin",
                onClick: m[4] || (m[4] = (d) => L.value = !L.value)
              }, i(L.value ? "Show all" : "Show selected"), 1),
              n("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
                onClick: je
              }, " Clear ")
            ]),
            n("button", {
              type: "button",
              class: "c-btn c-btn--md no-margin selection-bar__confirm",
              style: oe({ backgroundColor: e.colors.button, color: e.colors.buttonText }),
              onClick: m[5] || (m[5] = (d) => w("selection-confirmed", u(M)))
            }, i(u(c)("stockFilter.create_cut_list")), 5)
          ])) : r("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Fl as default
};
