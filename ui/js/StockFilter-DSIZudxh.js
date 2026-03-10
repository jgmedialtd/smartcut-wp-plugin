import { d as oe, a as i, b as l, O as ce, l as re, p as N, x as ae, c as p, f as a, e as f, r as U, t as n, A as Oe, u, F as W, k as Y, o as we, S as qe, w as J, U as Ye, N as et, y as tt, z as st, V as ot, j as ve, g as Ve, W as pe, q as Ie, X as lt } from "./vendor-vue-XczpOw2V.js";
import { c as it, u as nt } from "./EcommerceCalculator-B91faSfl.js";
import { t as r } from "./i18n-CYUWq18B.js";
import { u as at, b as _e, g as E } from "./Vanilla-DSGkcpr1.js";
import { _ as ue } from "./Launch-Ctx3PgLR.js";
const ct = ["onKeydown"], rt = { class: "stock-filter-row__thumb" }, ut = ["src", "alt"], dt = {
  key: 1,
  class: "stock-filter-row__thumb-placeholder"
}, ft = { class: "stock-filter-row__material" }, vt = { class: "stock-filter-row__name" }, gt = {
  key: 0,
  class: "stock-filter-row__code"
}, ht = {
  key: 0,
  class: "stock-filter-row__cell"
}, mt = {
  key: 1,
  class: "stock-filter-row__cell"
}, kt = {
  key: 2,
  class: "stock-filter-row__cell"
}, bt = {
  key: 3,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, yt = {
  key: 4,
  class: "stock-filter-row__color"
}, pt = { key: 1 }, _t = {
  key: 5,
  class: "stock-filter-row__thickness"
}, wt = {
  key: 0,
  class: "thickness-badge"
}, St = {
  key: 6,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, $t = {
  key: 7,
  class: "stock-filter-row__weight"
}, Ct = {
  key: 8,
  class: "stock-filter-row__price"
}, xt = {
  key: 0,
  class: "price__original"
}, Ft = {
  key: 1,
  class: "price__badge"
}, Pt = { class: "stock-filter-row__action" }, Mt = ["disabled"], Ot = ["onKeydown"], Vt = { class: "stock-filter-card__image-wrapper" }, It = {
  key: 0,
  class: "stock-filter-card__image"
}, qt = ["src", "alt"], Bt = {
  key: 1,
  class: "stock-filter-card__image-placeholder"
}, Rt = {
  key: 2,
  class: "stock-filter-card__badge--thickness"
}, Tt = {
  key: 3,
  class: "stock-filter-card__badge--finish"
}, Ut = { class: "stock-filter-card__content" }, At = { class: "stock-filter-card__title" }, Lt = {
  key: 0,
  class: "stock-filter-card__code"
}, jt = {
  key: 1,
  class: "stock-filter-card__description"
}, Nt = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Dt = {
  key: 0,
  class: "middot"
}, zt = {
  key: 3,
  class: "stock-filter-card__color"
}, Et = { key: 0 }, Kt = {
  key: 4,
  class: "stock-filter-card__extras"
}, Gt = {
  key: 0,
  class: "extras-badge extras-badge--sample"
}, Ht = {
  key: 1,
  class: "extras-badge extras-badge--banding"
}, Qt = {
  key: 2,
  class: "extras-badge extras-badge--finish"
}, Wt = {
  key: 3,
  class: "extras-badge extras-badge--planing"
}, Jt = {
  key: 4,
  class: "extras-badge extras-badge--machining"
}, Zt = { class: "stock-filter-card__footer" }, Xt = {
  key: 0,
  class: "stock-filter-card__price"
}, Yt = {
  key: 0,
  class: "price__original"
}, es = {
  key: 1,
  class: "price__badge"
}, ts = { class: "stock-filter-card__actions" }, ss = ["disabled"], os = /* @__PURE__ */ oe({
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
    mode: { default: "stock" },
    unitSystem: { default: "metric" },
    visibleColumns: { default: () => ({ code: !0, description: !0, finish: !0, variant: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) }
  },
  emits: ["toggle-selection", "order-sample"],
  setup(e, { emit: D }) {
    const t = e, k = D, _ = U(!1), x = p(() => t.stock.available !== !1), F = p(() => t.isDisabled), V = p(() => t.stock.discount && t.stock.discount > 0), C = p(() => {
      const s = t.stock.sample;
      return s?.enabled ? s.price && s.price > 0 ? `${r("stockFilter.orderSample")} (${t.formatPrice(s.price, t.locale)})` : r("stockFilter.freeSample") : "";
    }), I = p(() => t.stock.cost ? V.value ? t.stock.cost * (1 - t.stock.discount / 100) : t.stock.cost : 0), T = p(() => t.stock.cost ? t.formatPrice(t.stock.cost, t.locale) : "N/A"), g = p(() => t.stock.cost ? t.formatPrice(I.value, t.locale) : "N/A"), b = p(() => {
      if (!t.stock.color) return "";
      let s = "";
      return typeof t.stock.color == "object" && "hex" in t.stock.color ? s = t.stock.color.hex || "" : typeof t.stock.color == "string" && (s = t.stock.color), !s || !/^#[0-9a-f]{3,8}$/i.test(s) ? "" : s;
    }), $ = p(() => t.stock.color ? typeof t.stock.color == "object" && "name" in t.stock.color ? t.stock.color.name : typeof t.stock.color == "string" ? t.stock.color : "" : ""), A = p(() => {
      if (!t.stock.grain) return "";
      switch (t.stock.grain) {
        case "l":
          return r("fields.grain.length");
        case "w":
          return r("fields.grain.width");
        default:
          return "";
      }
    }), z = p(() => {
      const s = [];
      return t.stock.category && s.push(t.stock.category), t.stock.finish && s.push(t.stock.finish), t.stock.variant && s.push(t.stock.variant), A.value && s.push(A.value), t.stock.weight && s.push(`${t.stock.weight}kg`), s;
    }), K = p(() => t.stock.t == null ? "" : t.unitSystem === "imperial" ? `${(t.stock.t / 25.4).toFixed(2)}"` : `${t.stock.t} mm`), q = p(() => {
      const s = t.stock.extras;
      return s ? !!(s.banding?.length || s.finish?.length || s.planing?.length || s.machining?.length) : !1;
    }), le = p(() => {
      const s = ["60px", "2fr"];
      return t.visibleColumns.finish && s.push("1fr"), t.visibleColumns.variant && s.push("1fr"), t.visibleColumns.category && s.push("1fr"), t.visibleColumns.grain && s.push("80px"), t.visibleColumns.color && s.push("100px"), t.visibleColumns.thickness && s.push("80px"), t.visibleColumns.quantity && s.push("80px"), t.visibleColumns.weight && s.push("80px"), t.visibleColumns.price && s.push("100px"), s.push("50px"), { "grid-template-columns": s.join(" ") };
    }), Z = p(() => t.displayLabel ? t.displayLabel : t.stock.name ? t.stock.name : t.mode === "material" ? t.stock.material || "" : `${t.stock.material} ${t.stock.l}×${t.stock.w}`);
    function d() {
      !x.value || F.value || k("toggle-selection", t.stock);
    }
    function h() {
      k("order-sample", t.stock);
    }
    return (s, v) => e.displayMode === "list" ? (l(), i("div", {
      key: 0,
      class: N(["stock-filter-row", {
        "stock-filter-row--selected": e.isSelected,
        "stock-filter-row--unavailable": !x.value,
        "stock-filter-row--disabled": F.value
      }]),
      style: re(le.value),
      role: "button",
      tabindex: "0",
      onClick: d,
      onKeydown: [
        ce(d, ["enter"]),
        ce(ae(d, ["prevent"]), ["space"])
      ]
    }, [
      a("div", rt, [
        e.stock.imageUrl && !_.value ? (l(), i("img", {
          key: 0,
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onError: v[0] || (v[0] = (P) => _.value = !0)
        }, null, 40, ut)) : (l(), i("div", dt))
      ]),
      a("div", ft, [
        a("span", vt, n(Z.value), 1),
        e.stock.code ? (l(), i("span", gt, n(e.stock.code), 1)) : f("", !0)
      ]),
      e.visibleColumns.finish ? (l(), i("div", ht, n(e.stock.finish || ""), 1)) : f("", !0),
      e.visibleColumns.variant ? (l(), i("div", mt, n(e.stock.variant || ""), 1)) : f("", !0),
      e.visibleColumns.category ? (l(), i("div", kt, n(e.stock.category || ""), 1)) : f("", !0),
      e.visibleColumns.grain ? (l(), i("div", bt, n(A.value), 1)) : f("", !0),
      e.visibleColumns.color ? (l(), i("div", yt, [
        b.value ? (l(), i("span", {
          key: 0,
          class: "color-swatch color-swatch--sm",
          style: re({ backgroundColor: b.value })
        }, null, 4)) : f("", !0),
        $.value ? (l(), i("span", pt, n($.value), 1)) : f("", !0)
      ])) : f("", !0),
      e.visibleColumns.thickness ? (l(), i("div", _t, [
        e.stock.t != null ? (l(), i("span", wt, [
          Oe(n(e.stock.t), 1),
          v[2] || (v[2] = a("small", null, "mm", -1))
        ])) : f("", !0)
      ])) : f("", !0),
      e.visibleColumns.quantity ? (l(), i("div", St, n(e.stock.unlimitedQuantity ? u(r)("stockFilter.inStock") : e.stock.q), 1)) : f("", !0),
      e.visibleColumns.weight ? (l(), i("div", $t, n(e.stock.weight ? `${e.stock.weight}kg` : ""), 1)) : f("", !0),
      e.visibleColumns.price ? (l(), i("div", Ct, [
        V.value ? (l(), i("span", xt, n(T.value), 1)) : f("", !0),
        a("span", {
          class: N(["price__value", { price__discounted: V.value }])
        }, n(g.value), 3),
        V.value ? (l(), i("span", Ft, "-" + n(e.stock.discount) + "%", 1)) : f("", !0)
      ])) : f("", !0),
      a("div", Pt, [
        a("button", {
          type: "button",
          class: N(["c-btn c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
          disabled: !x.value || F.value,
          onClick: ae(d, ["stop"])
        }, n(e.isSelected ? "−" : "+"), 11, Mt)
      ])
    ], 46, ct)) : (l(), i("div", {
      key: 1,
      class: N(["stock-filter-card", {
        "stock-filter-card--selected": e.isSelected,
        "stock-filter-card--unavailable": !x.value,
        "stock-filter-card--disabled": F.value
      }]),
      role: "button",
      tabindex: "0",
      onClick: d,
      onKeydown: [
        ce(d, ["enter"]),
        ce(ae(d, ["prevent"]), ["space"])
      ]
    }, [
      a("div", Vt, [
        e.stock.imageUrl && !_.value ? (l(), i("div", It, [
          a("img", {
            src: e.stock.imageUrl,
            alt: e.stock.name || e.stock.material,
            loading: "lazy",
            onError: v[1] || (v[1] = (P) => _.value = !0)
          }, null, 40, qt)
        ])) : (l(), i("div", Bt)),
        e.stock.t != null ? (l(), i("span", Rt, n(K.value), 1)) : f("", !0),
        e.stock.finish ? (l(), i("span", Tt, n(e.stock.finish), 1)) : f("", !0)
      ]),
      a("div", Ut, [
        a("h3", At, n(Z.value), 1),
        e.stock.code ? (l(), i("div", Lt, n(e.stock.code), 1)) : f("", !0),
        e.stock.description ? (l(), i("div", jt, n(e.stock.description), 1)) : f("", !0),
        z.value.length ? (l(), i("div", Nt, [
          (l(!0), i(W, null, Y(z.value, (P, y) => (l(), i(W, { key: y }, [
            y > 0 ? (l(), i("span", Dt, " · ")) : f("", !0),
            Oe(n(P), 1)
          ], 64))), 128))
        ])) : f("", !0),
        e.stock.color ? (l(), i("div", zt, [
          a("span", {
            class: "color-swatch",
            style: re({ backgroundColor: b.value })
          }, null, 4),
          $.value ? (l(), i("span", Et, n($.value), 1)) : f("", !0)
        ])) : f("", !0),
        q.value || e.stock.sample?.enabled ? (l(), i("div", Kt, [
          e.stock.sample?.enabled ? (l(), i("span", Gt, n(u(r)("stockFilter.samplesAvailable")), 1)) : f("", !0),
          e.stock.extras?.banding?.length ? (l(), i("span", Ht, n(u(r)("stockFilter.banding")), 1)) : f("", !0),
          e.stock.extras?.finish?.length ? (l(), i("span", Qt, n(u(r)("stockFilter.finishOption")), 1)) : f("", !0),
          e.stock.extras?.planing?.length ? (l(), i("span", Wt, n(u(r)("stockFilter.planing")), 1)) : f("", !0),
          e.stock.extras?.machining?.length ? (l(), i("span", Jt, n(u(r)("stockFilter.machining")), 1)) : f("", !0)
        ])) : f("", !0)
      ]),
      a("div", Zt, [
        e.stock.cost ? (l(), i("div", Xt, [
          V.value ? (l(), i("span", Yt, n(T.value), 1)) : f("", !0),
          a("span", {
            class: N(["price__value", { price__discounted: V.value }])
          }, n(g.value), 3),
          V.value ? (l(), i("span", es, "-" + n(e.stock.discount) + "%", 1)) : f("", !0)
        ])) : f("", !0),
        a("div", ts, [
          e.stock.sample?.enabled ? (l(), i("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: ae(h, ["stop"])
          }, n(C.value), 1)) : f("", !0),
          a("button", {
            type: "button",
            class: N(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
            disabled: !x.value || F.value,
            onClick: ae(d, ["stop"])
          }, n(e.isSelected ? u(r)("stockFilter.remove") : "+ " + u(r)("stockFilter.select")), 11, ss)
        ])
      ])
    ], 42, Ot));
  }
}), ls = /* @__PURE__ */ ue(os, [["__scopeId", "data-v-0c9fa021"]]), is = { class: "stock-filter-panel" }, ns = { class: "filter-panel-content" }, as = {
  key: 0,
  class: "filter-summary"
}, cs = { class: "filter-summary__count" }, rs = { class: "filter-groups" }, us = { class: "filter-group__header" }, ds = { class: "filter-group__label" }, fs = { class: "filter-group__content" }, vs = {
  key: 0,
  class: "filter-select"
}, gs = ["value", "onChange"], hs = { value: "" }, ms = ["value"], ks = {
  key: 1,
  class: "multiselect"
}, bs = ["onClick"], ys = { class: "multiselect__text" }, ps = {
  key: 0,
  class: "multiselect__dropdown"
}, _s = ["checked", "onChange"], ws = { class: "multiselect__option-label" }, Ss = {
  key: 0,
  class: "multiselect__option-count"
}, $s = {
  key: 2,
  class: "filter-range"
}, Cs = { class: "filter-range__inputs" }, xs = ["value", "min", "max", "step", "onInput"], Fs = ["value", "min", "max", "step", "onInput"], Ps = {
  key: 3,
  class: "filter-boolean"
}, Ms = { class: "filter-checkbox" }, Os = ["checked", "onChange"], Vs = /* @__PURE__ */ oe({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(e, { emit: D }) {
    const t = e, k = D, _ = U({}), x = U(null), F = p(() => t.activeFilters.length);
    function V(d) {
      return {
        material: r("woodwork.material"),
        t: r("woodwork.thickness") + " (mm)",
        cost: r("stockFilter.price"),
        color: r("fields.color"),
        l: r("woodwork.length"),
        w: r("woodwork.width"),
        weight: r("fields.weight"),
        name: r("fields.name"),
        category: r("general.category")
      }[d.field] || d.label;
    }
    function C(d) {
      const h = t.getFilterOptionCounts?.(d.field) || /* @__PURE__ */ new Map(), s = h.size > 0, v = (y) => {
        if (!s) return;
        const R = typeof y == "object" && y !== null && "hex" in y ? y.hex : String(y);
        return h.get(R) ?? 0;
      };
      return d.options?.length ? d.options.map((y) => ({
        ...y,
        count: v(y.value)
      })) : t.getUniqueValues(d.field).map((y) => {
        const R = v(y);
        return d.field === "color" && typeof y == "object" && y !== null ? "name" in y && y.name ? {
          label: y.name,
          value: y,
          count: R
        } : {
          label: y.hex || String(y),
          value: y,
          count: R
        } : {
          label: String(y),
          value: y,
          count: R
        };
      });
    }
    function I(d) {
      return t.activeFilters.find((s) => s.field === d)?.value;
    }
    function T(d, h) {
      const s = I(d);
      return Array.isArray(s) ? d === "color" && typeof h == "object" && h !== null && "hex" in h ? s.some((v) => typeof v == "object" && v !== null && "hex" in v && v.hex === h.hex) : s.includes(h) : d === "color" && typeof h == "object" && h !== null && "hex" in h ? typeof s == "object" && s !== null && "hex" in s && s.hex === h.hex : s === h;
    }
    function g(d, h) {
      const v = h.target.value;
      if (v === "")
        k("remove-filter", d);
      else {
        const P = v !== "" && !isNaN(Number(v)) ? Number(v) : v;
        k("apply-filter", d, P, "select");
      }
    }
    function b(d, h, s) {
      const v = s.target, P = I(d) || [], y = Array.isArray(P) ? [...P] : [];
      if (v.checked)
        y.includes(h) || y.push(h);
      else {
        const R = y.indexOf(h);
        R !== -1 && y.splice(R, 1);
      }
      y.length === 0 ? k("remove-filter", d) : k("apply-filter", d, y, "multiselect");
    }
    function $(d, h) {
      if (_.value[d]?.[h] !== void 0)
        return _.value[d][h];
      const s = t.activeFilters.find((v) => v.field === d);
      if (s?.value && typeof s.value == "object")
        return s.value[h];
    }
    function A(d, h, s) {
      const v = s.target, P = v.value ? Number(v.value) : void 0;
      _.value[d] || (_.value[d] = {}), _.value[d][h] = P;
      const y = _.value[d].min, R = _.value[d].max;
      y !== void 0 || R !== void 0 ? k("apply-filter", d, { min: y, max: R }, "range") : k("remove-filter", d);
    }
    function z(d, h) {
      h.target.checked ? k("apply-filter", d, !0, "boolean") : k("remove-filter", d);
    }
    function K() {
      _.value = {}, k("clear-filters");
    }
    function q(d) {
      x.value = x.value === d ? null : d;
    }
    function le(d) {
      const h = I(d.field);
      return !h || Array.isArray(h) && h.length === 0 ? r("stockFilter.all") : Array.isArray(h) ? h.length === 1 ? C(d).find((P) => d.field === "color" && typeof P.value == "object" && P.value !== null && "hex" in P.value ? typeof h[0] == "object" && h[0] !== null && "hex" in h[0] && P.value.hex === h[0].hex : P.value === h[0])?.label || String(h[0]) : r("stockFilter.selected_count", [h.length]) : String(h);
    }
    function Z(d) {
      d.target.closest(".multiselect") || (x.value = null);
    }
    return we(() => {
      document.addEventListener("click", Z);
    }), qe(() => {
      document.removeEventListener("click", Z);
    }), (d, h) => (l(), i("div", is, [
      a("div", ns, [
        F.value > 0 ? (l(), i("div", as, [
          a("span", cs, n(u(r)("stockFilter.active_filters", [F.value])), 1),
          a("button", {
            type: "button",
            class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
            onClick: K
          }, n(u(r)("stockFilter.clear_filters")), 1)
        ])) : f("", !0),
        a("div", rs, [
          (l(!0), i(W, null, Y(e.filterConfigs, (s) => (l(), i("div", {
            key: s.field,
            class: "filter-group"
          }, [
            a("div", us, [
              a("label", ds, n(V(s)), 1)
            ]),
            a("div", fs, [
              s.type === "select" ? (l(), i("div", vs, [
                a("select", {
                  value: I(s.field),
                  class: "filter-select-input",
                  onChange: (v) => g(s.field, v)
                }, [
                  a("option", hs, n(u(r)("stockFilter.all")), 1),
                  (l(!0), i(W, null, Y(C(s), (v) => (l(), i("option", {
                    key: v.value,
                    value: v.value
                  }, n(v.label) + n(v.count !== void 0 ? ` (${v.count})` : ""), 9, ms))), 128))
                ], 40, gs)
              ])) : s.type === "multiselect" ? (l(), i("div", ks, [
                a("button", {
                  type: "button",
                  class: "multiselect__trigger",
                  onClick: (v) => q(s.field)
                }, [
                  a("span", ys, n(le(s)), 1)
                ], 8, bs),
                x.value === s.field ? (l(), i("div", ps, [
                  (l(!0), i(W, null, Y(C(s), (v) => (l(), i("label", {
                    key: v.value,
                    class: N(["multiselect__option", { "multiselect__option--zero": v.count === 0 }])
                  }, [
                    a("input", {
                      checked: T(s.field, v.value),
                      type: "checkbox",
                      onChange: (P) => b(s.field, v.value, P)
                    }, null, 40, _s),
                    a("span", ws, n(v.label), 1),
                    v.count !== void 0 ? (l(), i("span", Ss, "(" + n(v.count) + ")", 1)) : f("", !0)
                  ], 2))), 128))
                ])) : f("", !0)
              ])) : s.type === "range" ? (l(), i("div", $s, [
                a("div", Cs, [
                  a("input", {
                    value: $(s.field, "min"),
                    min: s.min,
                    max: s.max,
                    step: s.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (v) => A(s.field, "min", v)
                  }, null, 40, xs),
                  h[0] || (h[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                  a("input", {
                    value: $(s.field, "max"),
                    min: s.min,
                    max: s.max,
                    step: s.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (v) => A(s.field, "max", v)
                  }, null, 40, Fs)
                ])
              ])) : s.type === "boolean" ? (l(), i("div", Ps, [
                a("label", Ms, [
                  a("input", {
                    checked: I(s.field) === !0,
                    type: "checkbox",
                    onChange: (v) => z(s.field, v)
                  }, null, 40, Os),
                  a("span", null, n(s.label), 1)
                ])
              ])) : f("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), Is = /* @__PURE__ */ ue(Vs, [["__scopeId", "data-v-a7ee4797"]]), qs = { class: "stock-filter-results" }, Bs = { class: "results-header" }, Rs = { class: "results-info" }, Ts = {
  key: 0,
  class: "results-count"
}, Us = {
  key: 1,
  class: "results-count results-count--loading"
}, As = { class: "results-controls" }, Ls = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, js = ["title"], Ns = ["title"], Ds = {
  key: 0,
  class: "results-loading"
}, zs = {
  key: 1,
  class: "results-empty"
}, Es = { class: "empty-message" }, Ks = { class: "th" }, Gs = {
  key: 0,
  class: "th"
}, Hs = {
  key: 1,
  class: "th"
}, Qs = {
  key: 2,
  class: "th"
}, Ws = {
  key: 3,
  class: "th"
}, Js = {
  key: 4,
  class: "th"
}, Zs = {
  key: 5,
  class: "th th--center"
}, Xs = {
  key: 6,
  class: "th th--center"
}, Ys = {
  key: 7,
  class: "th th--center"
}, eo = {
  key: 8,
  class: "th th--right"
}, to = {
  key: 3,
  class: "results-pagination"
}, so = ["disabled"], oo = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, lo = ["onClick"], io = ["disabled"], no = /* @__PURE__ */ oe({
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
  setup(e, { emit: D }) {
    const t = e, k = p(() => {
      const g = ["60px", "2fr"];
      return t.visibleColumns.finish && g.push("1fr"), t.visibleColumns.variant && g.push("1fr"), t.visibleColumns.category && g.push("1fr"), t.visibleColumns.grain && g.push("80px"), t.visibleColumns.color && g.push("100px"), t.visibleColumns.thickness && g.push("80px"), t.visibleColumns.quantity && g.push("80px"), t.visibleColumns.weight && g.push("80px"), t.visibleColumns.price && g.push("100px"), g.push("50px"), { "grid-template-columns": g.join(" ") };
    }), _ = D, x = U(!0), F = U(null);
    let V = null;
    const C = p(() => {
      const g = t.visibleColumns;
      let b = 310;
      g.finish && (b += 100), g.variant && (b += 100), g.category && (b += 100), g.grain && (b += 80), g.color && (b += 100), g.thickness && (b += 80), g.quantity && (b += 80), g.weight && (b += 80), g.price && (b += 100);
      const $ = 3 + [g.finish, g.variant, g.category, g.grain, g.color, g.thickness, g.quantity, g.weight, g.price].filter(Boolean).length;
      return b += ($ - 1) * 16, b;
    });
    function I() {
      F.value && (x.value = F.value.offsetWidth >= C.value);
    }
    we(() => {
      F.value = document.querySelector(".stock-filter-results"), I(), V = new ResizeObserver(I), F.value && V.observe(F.value);
    }), qe(() => {
      V?.disconnect();
    }), J(x, (g) => {
      !g && t.displayMode === "list" && _("update:displayMode", "grid");
    }), J(C, () => I());
    const T = p(() => {
      const g = [], $ = Math.floor(2.5);
      let A = Math.max(1, t.currentPage - $), z = Math.min(t.totalPages, A + 5 - 1);
      z === t.totalPages && (A = Math.max(1, z - 5 + 1));
      for (let K = A; K <= z; K++)
        g.push(K);
      return g;
    });
    return (g, b) => (l(), i("div", qs, [
      a("div", Bs, [
        a("div", Rs, [
          e.loading ? (l(), i("div", Us, n(u(r)("actions.loading")) + "...", 1)) : (l(), i("div", Ts, n(e.totalResults) + " " + n(e.totalResults === 1 ? u(r)("stockFilter.result_one") : u(r)("stockFilter.result_other")), 1))
        ]),
        a("div", As, [
          a("div", Ls, [
            a("button", {
              type: "button",
              class: N(["c-btn c-btn--sm", { selected: e.displayMode === "grid" }]),
              title: u(r)("stockFilter.grid_view"),
              onClick: b[0] || (b[0] = ($) => g.$emit("update:displayMode", "grid"))
            }, [...b[5] || (b[5] = [
              Ye('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-33e09d3c><rect x="1" y="1" width="6" height="6" data-v-33e09d3c></rect><rect x="9" y="1" width="6" height="6" data-v-33e09d3c></rect><rect x="1" y="9" width="6" height="6" data-v-33e09d3c></rect><rect x="9" y="9" width="6" height="6" data-v-33e09d3c></rect></svg>', 1)
            ])], 10, js),
            x.value ? (l(), i("button", {
              key: 0,
              type: "button",
              class: N(["c-btn c-btn--sm", { selected: e.displayMode === "list" }]),
              title: u(r)("stockFilter.list_view"),
              onClick: b[1] || (b[1] = ($) => g.$emit("update:displayMode", "list"))
            }, [...b[6] || (b[6] = [
              a("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                a("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                a("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                a("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Ns)) : f("", !0)
          ])
        ])
      ]),
      e.loading ? (l(), i("div", Ds, [
        b[7] || (b[7] = a("div", { class: "spinner" }, null, -1)),
        a("p", null, n(u(r)("actions.loading")) + "...", 1)
      ])) : e.totalResults === 0 ? (l(), i("div", zs, [
        a("p", Es, n(u(r)("stockFilter.no_results")), 1),
        e.hasActiveFilters ? (l(), i("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: b[2] || (b[2] = ($) => g.$emit("clear-filters"))
        }, n(u(r)("stockFilter.clear_filters")), 1)) : f("", !0)
      ])) : (l(), i(W, { key: 2 }, [
        e.displayMode === "list" ? (l(), i("div", {
          key: 0,
          class: "results-table-header",
          style: re(k.value)
        }, [
          b[8] || (b[8] = a("div", { class: "th" }, null, -1)),
          a("div", Ks, n(u(r)("woodwork.material")), 1),
          e.visibleColumns.finish ? (l(), i("div", Gs, n(u(r)("fields.finish")), 1)) : f("", !0),
          e.visibleColumns.variant ? (l(), i("div", Hs, n(u(r)("fields.variant")), 1)) : f("", !0),
          e.visibleColumns.category ? (l(), i("div", Qs, n(u(r)("fields.category")), 1)) : f("", !0),
          e.visibleColumns.grain ? (l(), i("div", Ws, n(u(r)("fields.grain")), 1)) : f("", !0),
          e.visibleColumns.color ? (l(), i("div", Js, n(u(r)("fields.color")), 1)) : f("", !0),
          e.visibleColumns.thickness ? (l(), i("div", Zs, n(u(r)("fields.t")), 1)) : f("", !0),
          e.visibleColumns.quantity ? (l(), i("div", Xs, n(u(r)("fields.q")), 1)) : f("", !0),
          e.visibleColumns.weight ? (l(), i("div", Ys, n(u(r)("fields.weight")), 1)) : f("", !0),
          e.visibleColumns.price ? (l(), i("div", eo, n(u(r)("stockFilter.price")), 1)) : f("", !0),
          b[9] || (b[9] = a("div", { class: "th th--center" }, null, -1))
        ], 4)) : f("", !0),
        a("div", {
          class: N(["results-grid", { "results-grid--list": e.displayMode === "list" }])
        }, [
          et(g.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      e.totalPages > 1 ? (l(), i("div", to, [
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === 1,
          onClick: b[3] || (b[3] = ($) => g.$emit("go-to-page", e.currentPage - 1))
        }, n(u(r)("pagination.previous")), 9, so),
        a("div", oo, [
          (l(!0), i(W, null, Y(T.value, ($) => (l(), i("button", {
            key: $,
            type: "button",
            class: N(["c-btn c-btn--sm", { selected: $ === e.currentPage }]),
            onClick: (A) => g.$emit("go-to-page", $)
          }, n($), 11, lo))), 128))
        ]),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === e.totalPages,
          onClick: b[4] || (b[4] = ($) => g.$emit("go-to-page", e.currentPage + 1))
        }, n(u(r)("pagination.next")), 9, io)
      ])) : f("", !0)
    ]));
  }
}), ao = /* @__PURE__ */ ue(no, [["__scopeId", "data-v-33e09d3c"]]), co = { class: "stock-filter-search" }, ro = { class: "search-input-wrapper" }, uo = ["placeholder"], fo = /* @__PURE__ */ oe({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: D }) {
    const t = e, k = D, _ = U(t.modelValue);
    J(() => t.modelValue, (V) => {
      _.value = V;
    });
    function x() {
      k("update:modelValue", _.value);
    }
    function F() {
      _.value = "", k("update:modelValue", "");
    }
    return (V, C) => (l(), i("div", co, [
      a("div", ro, [
        tt(a("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (I) => _.value = I),
          type: "text",
          class: "search-input",
          placeholder: e.placeholder,
          onKeydown: ce(x, ["enter"])
        }, null, 40, uo), [
          [st, _.value]
        ]),
        _.value ? (l(), i("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: F
        }, " × ")) : f("", !0),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin c-btn--no-effects",
          onClick: x
        }, n(u(r)("actions.search")), 1)
      ])
    ]));
  }
}), vo = /* @__PURE__ */ ue(fo, [["__scopeId", "data-v-8c3c0dd2"]]), go = { class: "stock-filter-sort" }, ho = { class: "sort-controls" }, mo = { class: "sort-label" }, ko = ["value"], bo = ["value"], yo = ["title"], po = {
  width: "32",
  height: "32",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _o = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, wo = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, So = /* @__PURE__ */ oe({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(e, { emit: D }) {
    const t = e, k = D, _ = t.availableFields.map((C) => ({
      value: C,
      label: x(C)
    }));
    function x(C) {
      return {
        cost: r("stockFilter.price"),
        material: r("woodwork.material"),
        t: r("woodwork.thickness"),
        l: r("woodwork.length"),
        w: r("woodwork.width"),
        pricePerKg: r("stockFilter.price") + " per kg",
        pricePerM2: r("stockFilter.price") + " per m²",
        weight: r("fields.weight"),
        name: r("fields.name")
      }[C] || C.charAt(0).toUpperCase() + C.slice(1);
    }
    function F(C) {
      const I = C.target;
      k("update:sortBy", I.value);
    }
    function V() {
      k("update:sortOrder", t.sortOrder === "asc" ? "desc" : "asc");
    }
    return (C, I) => (l(), i("div", go, [
      a("div", ho, [
        a("label", mo, n(u(r)("stockFilter.sort_by")) + ":", 1),
        a("select", {
          value: e.sortBy,
          class: "sort-select",
          onChange: F
        }, [
          (l(!0), i(W, null, Y(u(_), (T) => (l(), i("option", {
            key: T.value,
            value: T.value
          }, n(T.label), 9, bo))), 128))
        ], 40, ko),
        a("button", {
          type: "button",
          class: N(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": e.sortOrder === "desc" }]),
          title: e.sortOrder === "asc" ? u(r)("options.by_dimensions") : u(r)("options.by_dimensions"),
          onClick: V
        }, [
          (l(), i("svg", po, [
            e.sortOrder === "asc" ? (l(), i("path", _o)) : (l(), i("path", wo))
          ]))
        ], 10, yo)
      ])
    ]));
  }
}), $o = /* @__PURE__ */ ue(So, [["__scopeId", "data-v-62dadb26"]]), Co = {
  id: "stock-filter",
  class: "smartcut-content"
}, xo = {
  key: 1,
  class: "stock-filter-search-sort"
}, Fo = {
  key: 0,
  class: "selection-bar"
}, Po = { class: "selection-bar__left" }, Mo = { class: "selection-bar__count" }, Ro = /* @__PURE__ */ oe({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => it()
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
    mode: {
      type: String,
      default: "stock"
    },
    unitSystem: {
      type: String,
      default: "metric"
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "labels-changed", "order-sample"],
  setup(e, { expose: D, emit: t }) {
    const k = e, _ = t, x = U(k.stockOptions), F = U(k.config), V = U(k.numberFormat);
    J(() => k.stockOptions, (o) => {
      x.value = o;
    }), J(() => k.config, (o) => {
      F.value = o;
    });
    const C = p(() => {
      if (k.serverPagination)
        return {
          ...k.serverPagination,
          mode: k.mode
        };
    }), {
      activeFilters: I,
      searchQuery: T,
      sortBy: g,
      sortOrder: b,
      displayMode: $,
      currentPage: A,
      filteredStock: z,
      paginatedStock: K,
      selectedStock: q,
      totalPages: le,
      totalItems: Z,
      isLoading: d,
      applyFilter: h,
      removeFilter: s,
      clearFilters: v,
      goToPage: P,
      toggleStockSelection: y,
      isStockSelected: R,
      clearSelection: Se,
      selectById: Be,
      createInputStock: G,
      getUniqueValues: ge,
      getFieldRange: $e,
      getFilterOptionCounts: Re
    } = at({
      stockOptions: x,
      config: F,
      numberFormat: V,
      serverPagination: C.value
    }), { addNotice: Te } = nt(), ie = ot("stock-filter-selections", []), ee = U(!1), j = U(!1), te = U(1), L = U(/* @__PURE__ */ new Map());
    function H(o, m) {
      for (const c of o)
        c.customData = { ...c.customData || {}, selectionId: m };
      _("stock-added", o);
    }
    const de = p(() => k.config.itemsPerPage || 20), Ue = p(() => {
      const o = (te.value - 1) * de.value, m = o + de.value;
      return q.value.slice(o, m);
    }), Ce = p(() => j.value ? Ue.value : K.value), Ae = p(() => _e(Ce.value)), xe = p(() => {
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
      }, m = k.serverPagination ? K.value : z.value;
      for (const c of m)
        c.code && (o.code = !0), c.description && (o.description = !0), c.finish && (o.finish = !0), c.variant && (o.variant = !0), c.grain && (o.grain = !0), c.color && (o.color = !0), c.category && (o.category = !0), c.t != null && (o.thickness = !0), c.weight && (o.weight = !0), c.cost && (o.price = !0), c.q != null && (o.quantity = !0), c.tags?.length && (o.tags = !0);
      return o;
    }), Le = p(() => j.value ? q.value.length : Z.value), je = p(() => j.value ? Math.max(1, Math.ceil(q.value.length / de.value)) : le.value), Ne = p(() => j.value ? te.value : A.value);
    function De(o) {
      j.value ? te.value = o : P(o);
    }
    J(j, () => {
      te.value = 1;
    }), J(() => q.value.length, (o) => {
      o === 0 && j.value && (j.value = !1);
      const m = Math.max(1, Math.ceil(o / de.value));
      if (te.value > m && (te.value = m), q.value.length > 0) {
        const c = _e(q.value);
        for (const [w, S] of L.value) {
          const M = c.get(w);
          if (M)
            for (const O of S)
              O.material = M;
        }
        _("labels-changed", c);
      }
    });
    const ze = p(() => k.loading || d.value), he = U(!1);
    J(q, (o) => {
      he.value || (ie.value = o.map((m) => E(m)));
    }, { deep: !0 });
    async function Ee(o) {
      if (!k.serverPagination) return null;
      const { apiUrl: m, orgSlug: c, isCustomDomain: w } = k.serverPagination, S = k.mode === "material" ? "materials" : "stock", M = w ? `${m}ecommerce/${S}` : `${m}ecommerce/${c}/${S}`;
      try {
        const O = new URL(M);
        O.searchParams.set("limit", "1");
        const B = {}, se = o.match(/^([a-f0-9]{24})-t(\d+(?:\.\d+)?)$/i);
        if (se)
          B._id = se[1], B.t = parseFloat(se[2]);
        else if (/^[a-f0-9]{24}$/i.test(o))
          B._id = o;
        else {
          const ne = o.split("-");
          if (ne.length >= 4) {
            const We = parseFloat(ne.pop()), Je = parseFloat(ne.pop()), Ze = parseFloat(ne.pop()), Xe = ne.join("-");
            B.material = Xe, B.l = Ze, B.w = Je, B.t = We;
          } else
            return null;
        }
        O.searchParams.set("filters", JSON.stringify(B));
        const ke = await fetch(O.toString(), { credentials: "include" });
        if (!ke.ok) return null;
        const X = (await ke.json()).items || [];
        if (X.length === 0) return null;
        const ye = X[0];
        return E(ye) !== o ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: o, got: E(ye) }), null) : ye;
      } catch {
        return null;
      }
    }
    async function Ke() {
      if (ie.value.length) {
        he.value = !0;
        try {
          const o = [...ie.value], m = [], c = [];
          for (const S of o) {
            let M = k.stockOptions.find((O) => E(O) === S);
            !M && k.serverPagination && (M = await Ee(S)), M && (m.push(S), c.push(M));
          }
          const w = o.length - m.length;
          w > 0 && (ie.value = m, Te({
            message: w === 1 ? "A previously selected material is no longer available" : `${w} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const S of c) {
            const M = E(S);
            if (!R(S))
              if (y(S), k.mode === "material" && k.serverPagination) {
                ee.value = !0;
                try {
                  const O = await me(S);
                  if (O.length > 0)
                    Q(O, S), L.value.set(M, O), H(O, M);
                  else {
                    const B = G(S);
                    Q([B], S), L.value.set(M, [B]), H([B], M);
                  }
                } finally {
                  ee.value = !1;
                }
              } else {
                const O = G(S);
                Q([O], S), L.value.set(M, [O]), H([O], M);
              }
          }
        } finally {
          he.value = !1;
        }
      }
    }
    we(async () => {
      if (k.initialProductId) {
        const o = Be(k.initialProductId);
        if (!o) return;
        const m = E(o);
        if (k.mode === "material" && k.serverPagination) {
          ee.value = !0;
          try {
            const c = await me(o);
            if (c.length > 0)
              Q(c, o), L.value.set(m, c), H(c, m);
            else {
              const w = G(o);
              Q([w], o), L.value.set(m, [w]), H([w], m);
            }
          } finally {
            ee.value = !1;
          }
        } else {
          const c = G(o);
          Q([c], o), H([c], m);
        }
        return;
      }
      await Ke();
    });
    const Fe = p(() => k.config.availableFilters.filter((o) => {
      const m = ge(o.field);
      return m.length > 0 && m.some((c) => c != null);
    })), Pe = p(() => q.value.length === 0 ? null : q.value[0].db_sawId || null);
    function Me(o) {
      if (!Pe.value) return !1;
      const m = o.db_sawId;
      return m ? m !== Pe.value : !1;
    }
    async function me(o) {
      if (!k.serverPagination) return [];
      const { apiUrl: m, orgSlug: c, isCustomDomain: w } = k.serverPagination, S = w ? `${m}ecommerce/stock` : `${m}ecommerce/${c}/stock`;
      try {
        const M = new URL(S);
        M.searchParams.set("limit", "500");
        const O = {};
        let B = null;
        if (o.db_materialId)
          B = o.db_materialId;
        else if (o._id && /^[a-f0-9]{24}$/i.test(o._id))
          B = o._id;
        else if (o.db_id) {
          const X = o.db_id.match(/^([a-f0-9]{24})-t\d+(?:\.\d+)?$/i);
          X && (B = X[1]);
        }
        B ? O.db_materialId = B : O.material = o.name || o.material, o.t != null && (O.t = o.t), M.searchParams.set("filters", JSON.stringify(O)), console.log("[StockFilter] fetchStockForMaterial URL:", M.toString());
        const se = await fetch(M.toString(), { credentials: "include" });
        if (!se.ok) return [];
        const be = (await se.json()).items || [];
        return console.log("[StockFilter] fetchStockForMaterial returned", be.length, "items"), be.map((X) => G(X));
      } catch {
        return [];
      }
    }
    function Q(o, m) {
      const w = _e(q.value).get(E(m));
      if (w)
        for (const S of o)
          S.material = w;
    }
    async function Ge(o) {
      if (Me(o)) return;
      const m = R(o);
      y(o);
      const c = E(o);
      if (console.log("[StockFilter] Toggle:", { stockId: c, wasSelected: m, name: o.name, material: o.material, db_materialId: o.db_materialId, t: o.t }), m) {
        const w = L.value.get(c);
        w ? (w.forEach(fe), L.value.delete(c)) : fe(G(o));
      } else if (k.mode === "material" && k.serverPagination) {
        ee.value = !0;
        try {
          const w = await me(o);
          if (w.length > 0)
            Q(w, o), L.value.set(c, w), H(w, c);
          else {
            const S = G(o);
            Q([S], o), L.value.set(c, [S]), H([S], c);
          }
        } finally {
          ee.value = !1;
        }
      } else {
        const w = G(o);
        Q([w], o), L.value.set(c, [w]), H([w], c);
      }
    }
    function fe(o) {
      _("stock-removed", o);
    }
    function He() {
      for (const o of q.value) {
        const m = E(o), c = L.value.get(m);
        c ? c.forEach(fe) : fe(G(o));
      }
      L.value.clear(), Se(), ie.value = [], j.value = !1;
    }
    function Qe(o) {
      _("order-sample", o);
    }
    return D({
      applyFilter: h,
      removeFilter: s,
      clearFilters: v,
      clearSelection: Se,
      selectedStock: q,
      filteredStock: z,
      getUniqueValues: ge,
      getFieldRange: $e
    }), (o, m) => (l(), i("div", Co, [
      f("", !0),
      e.config.enableSearch || e.config.sortOptions.length > 0 ? (l(), i("div", xo, [
        e.config.enableSearch ? (l(), ve(vo, {
          key: 0,
          modelValue: u(T),
          "onUpdate:modelValue": m[0] || (m[0] = (c) => pe(T) ? T.value = c : null)
        }, null, 8, ["modelValue"])) : f("", !0),
        e.config.sortOptions.length > 0 ? (l(), ve($o, {
          key: 1,
          "sort-by": u(g),
          "onUpdate:sortBy": m[1] || (m[1] = (c) => pe(g) ? g.value = c : null),
          "sort-order": u(b),
          "onUpdate:sortOrder": m[2] || (m[2] = (c) => pe(b) ? b.value = c : null),
          "available-fields": e.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : f("", !0)
      ])) : f("", !0),
      Fe.value.length > 0 ? (l(), ve(Is, {
        key: 2,
        "filter-configs": Fe.value,
        "active-filters": u(I),
        "get-unique-values": u(ge),
        "get-field-range": u($e),
        "get-filter-option-counts": u(Re),
        onApplyFilter: u(h),
        onRemoveFilter: u(s),
        onClearFilters: u(v)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : f("", !0),
      Ve(ao, {
        "total-results": Le.value,
        "display-mode": u($),
        loading: ze.value,
        "has-active-filters": u(I).length > 0,
        "current-page": Ne.value,
        "total-pages": je.value,
        "visible-columns": xe.value,
        "onUpdate:displayMode": m[3] || (m[3] = (c) => $.value = c),
        onClearFilters: u(v),
        onGoToPage: De
      }, {
        default: Ie(() => [
          (l(!0), i(W, null, Y(Ce.value, (c, w) => (l(), ve(ls, {
            key: u(E)(c),
            stock: c,
            "is-selected": u(R)(c),
            "is-disabled": Me(c),
            "display-label": Ae.value.get(u(E)(c)),
            "format-price": e.formatPrice,
            "button-color": e.colors.button,
            "button-text-color": e.colors.buttonText,
            locale: e.locale,
            "display-mode": u($),
            mode: e.mode,
            "unit-system": e.unitSystem,
            "visible-columns": xe.value,
            onToggleSelection: Ge,
            onOrderSample: Qe
          }, null, 8, ["stock", "is-selected", "is-disabled", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "mode", "unit-system", "visible-columns"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Ve(lt, { name: "selection-bar" }, {
        default: Ie(() => [
          u(q).length > 0 ? (l(), i("div", Fo, [
            a("div", Po, [
              a("span", Mo, n(u(q).length) + " " + n(u(q).length === 1 ? "material" : "materials") + " selected ", 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects no-margin",
                onClick: m[4] || (m[4] = (c) => j.value = !j.value)
              }, n(j.value ? "Show all" : "Show selected"), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
                onClick: He
              }, " Clear ")
            ]),
            a("button", {
              type: "button",
              class: "c-btn c-btn--md no-margin selection-bar__confirm",
              style: re({ backgroundColor: e.colors.button, color: e.colors.buttonText }),
              onClick: m[5] || (m[5] = (c) => _("selection-confirmed", u(q)))
            }, n(u(r)("stockFilter.create_cut_list")), 5)
          ])) : f("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Ro as default
};
