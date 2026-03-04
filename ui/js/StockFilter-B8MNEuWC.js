import { d as le, a, b as n, O as Se, p as q, x as be, c as _, e as k, f as s, r as A, t as r, u as d, l as Pe, F as J, k as Z, o as Oe, S as We, g as Me, q as Ie, y as Ve, L as Xe, U as Ye, V as et, N as tt, w as oe, z as st, W as ot, j as ge, X as ye } from "./vendor-vue-9U543O5d.js";
import { c as lt, u as nt } from "./EcommerceCalculator-CNt9J5Wx.js";
import { u as at, b as _e, g as N } from "./Vanilla-BLiO1VYv.js";
import { t as i } from "./i18n-BcF5TYdp.js";
import { _ as ue } from "./Launch-f21ynuad.js";
const it = ["onKeydown"], ct = {
  key: 0,
  class: "stock-filter-card__image"
}, rt = ["src", "alt"], ut = { class: "stock-filter-card__content" }, dt = { class: "stock-filter-card__title" }, ft = {
  key: 0,
  class: "stock-filter-card__code"
}, gt = {
  key: 1,
  class: "stock-filter-card__description"
}, mt = { class: "stock-filter-card__specs" }, ht = {
  key: 0,
  class: "spec"
}, vt = { class: "spec__label" }, kt = { class: "spec__value" }, pt = {
  key: 1,
  class: "spec"
}, bt = { class: "spec__label" }, yt = { class: "spec__value" }, _t = {
  key: 2,
  class: "spec"
}, St = { class: "spec__label" }, $t = { class: "spec__value" }, wt = {
  key: 3,
  class: "spec"
}, Ft = { class: "spec__label" }, xt = { class: "spec__value" }, Ct = {
  key: 4,
  class: "spec"
}, Pt = { class: "spec__label" }, Ot = { class: "spec__value" }, Mt = {
  key: 5,
  class: "spec"
}, It = { class: "spec__label" }, Vt = { class: "spec__value" }, Bt = {
  key: 6,
  class: "spec"
}, Lt = { class: "spec__label" }, Rt = { class: "spec__value spec__value--color" }, Ut = { key: 0 }, At = {
  key: 7,
  class: "spec"
}, Tt = { class: "spec__label" }, jt = { class: "spec__value" }, Nt = {
  key: 8,
  class: "spec spec--tags"
}, Dt = { class: "spec__label" }, qt = { class: "spec__value spec__value--tags" }, Et = {
  key: 2,
  class: "stock-filter-card__extras"
}, zt = {
  key: 0,
  class: "extras-badge extras-badge--sample"
}, Kt = {
  key: 1,
  class: "extras-badge extras-badge--banding"
}, Gt = {
  key: 2,
  class: "extras-badge extras-badge--finish"
}, Ht = {
  key: 3,
  class: "extras-badge extras-badge--planing"
}, Qt = {
  key: 4,
  class: "extras-badge extras-badge--machining"
}, Jt = { class: "stock-filter-card__footer" }, Zt = {
  key: 0,
  class: "stock-filter-card__price"
}, Wt = { class: "price__label" }, Xt = {
  key: 0,
  class: "price__original"
}, Yt = {
  key: 1,
  class: "price__badge"
}, es = { class: "stock-filter-card__actions" }, ts = ["disabled"], ss = /* @__PURE__ */ le({
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
    unitSystem: { default: "metric" }
  },
  emits: ["toggle-selection", "order-sample"],
  setup(e, { emit: T }) {
    const o = e, h = T, w = A(!1), F = _(() => o.stock.available !== !1), S = _(() => o.isDisabled), b = _(() => o.isSelected ? i("stockFilter.remove") : o.isDisabled ? i("stockFilter.differentSaw") : F.value ? i("stockFilter.select") : i("stockFilter.unavailable")), p = _(() => o.stock.discount && o.stock.discount > 0), M = _(() => {
      const l = o.stock.sample;
      return l?.enabled ? l.price && l.price > 0 ? `${i("stockFilter.orderSample")} (${o.formatPrice(l.price, o.locale)})` : i("stockFilter.freeSample") : "";
    }), I = _(() => o.stock.cost ? p.value ? o.stock.cost * (1 - o.stock.discount / 100) : o.stock.cost : 0), L = _(() => o.stock.cost ? o.formatPrice(o.stock.cost, o.locale) : "N/A"), K = _(() => o.stock.cost ? o.formatPrice(I.value, o.locale) : "N/A"), G = _(() => o.stock.color ? typeof o.stock.color == "object" && "hex" in o.stock.color ? o.stock.color.hex : typeof o.stock.color == "string" ? o.stock.color : "" : ""), W = _(() => o.stock.color ? typeof o.stock.color == "object" && "name" in o.stock.color ? o.stock.color.name : typeof o.stock.color == "string" ? o.stock.color : "" : ""), X = _(() => {
      if (!o.stock.grain) return "";
      switch (o.stock.grain) {
        case "l":
          return i("fields.grain.length");
        case "w":
          return i("fields.grain.width");
        default:
          return "";
      }
    }), Y = _(() => o.stock.t == null ? "" : o.unitSystem === "imperial" ? `${(o.stock.t / 25.4).toFixed(2)}"` : `${o.stock.t} mm`), V = _(() => {
      const l = o.stock.extras;
      return l ? !!(l.banding?.length || l.finish?.length || l.planing?.length || l.machining?.length) : !1;
    }), ne = _(() => o.displayLabel ? o.displayLabel : o.stock.name ? o.stock.name : o.mode === "material" ? o.stock.material || "" : `${o.stock.material} ${o.stock.l}×${o.stock.w}`), ae = _(() => o.isSelected ? {
      "--btn-color": void 0,
      "--btn-bg": void 0,
      "--btn-hover-bg": void 0
    } : {
      "--btn-color": o.buttonTextColor,
      "--btn-bg": o.buttonColor,
      "--btn-hover-bg": ie(o.buttonColor, -8)
    });
    function ie(l, c) {
      const u = l.replace("#", ""), x = parseInt(u, 16), v = Math.round(2.55 * c), B = (x >> 16) + v, R = (x >> 8 & 255) + v, H = (x & 255) + v;
      return `#${(16777216 + (B < 255 ? B < 1 ? 0 : B : 255) * 65536 + (R < 255 ? R < 1 ? 0 : R : 255) * 256 + (H < 255 ? H < 1 ? 0 : H : 255)).toString(16).slice(1)}`;
    }
    function D() {
      !F.value || S.value || h("toggle-selection", o.stock);
    }
    function g() {
      h("order-sample", o.stock);
    }
    return (l, c) => (n(), a("div", {
      class: q(["stock-filter-card", {
        "stock-filter-card--selected": e.isSelected,
        "stock-filter-card--unavailable": !F.value,
        "stock-filter-card--disabled": S.value,
        "stock-filter-card--list": e.displayMode === "list"
      }]),
      role: "button",
      tabindex: "0",
      onClick: D,
      onKeydown: [
        Se(D, ["enter"]),
        Se(be(D, ["prevent"]), ["space"])
      ]
    }, [
      e.stock.imageUrl && !w.value ? (n(), a("div", ct, [
        s("img", {
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.name || e.stock.material,
          loading: "lazy",
          onError: c[0] || (c[0] = (u) => w.value = !0)
        }, null, 40, rt)
      ])) : k("", !0),
      s("div", ut, [
        s("h3", dt, r(ne.value), 1),
        e.stock.code ? (n(), a("div", ft, r(e.stock.code), 1)) : k("", !0),
        e.stock.description ? (n(), a("div", gt, r(e.stock.description), 1)) : k("", !0),
        s("div", mt, [
          e.stock.t != null ? (n(), a("div", ht, [
            s("span", vt, r(d(i)("fields.t")) + ":", 1),
            s("span", kt, r(Y.value), 1)
          ])) : k("", !0),
          e.stock.q != null ? (n(), a("div", pt, [
            s("span", bt, r(d(i)("fields.q")) + ":", 1),
            s("span", yt, r(e.stock.unlimitedQuantity ? d(i)("stockFilter.inStock") : e.stock.q), 1)
          ])) : k("", !0),
          e.stock.category ? (n(), a("div", _t, [
            s("span", St, r(d(i)("fields.category")) + ":", 1),
            s("span", $t, r(e.stock.category), 1)
          ])) : k("", !0),
          e.stock.finish ? (n(), a("div", wt, [
            s("span", Ft, r(d(i)("fields.finish")) + ":", 1),
            s("span", xt, r(e.stock.finish), 1)
          ])) : k("", !0),
          e.stock.variant ? (n(), a("div", Ct, [
            s("span", Pt, r(d(i)("fields.variant")) + ":", 1),
            s("span", Ot, r(e.stock.variant), 1)
          ])) : k("", !0),
          e.stock.grain ? (n(), a("div", Mt, [
            s("span", It, r(d(i)("fields.grain")) + ":", 1),
            s("span", Vt, r(X.value), 1)
          ])) : k("", !0),
          e.stock.color ? (n(), a("div", Bt, [
            s("span", Lt, r(d(i)("fields.color")) + ":", 1),
            s("span", Rt, [
              s("span", {
                class: "color-swatch",
                style: Pe({ backgroundColor: G.value })
              }, null, 4),
              W.value ? (n(), a("span", Ut, r(W.value), 1)) : k("", !0)
            ])
          ])) : k("", !0),
          e.stock.weight ? (n(), a("div", At, [
            s("span", Tt, r(d(i)("fields.weight")) + ":", 1),
            s("span", jt, r(e.stock.weight) + " kg", 1)
          ])) : k("", !0),
          e.stock.tags?.length ? (n(), a("div", Nt, [
            s("span", Dt, r(d(i)("fields.tags")) + ":", 1),
            s("span", qt, [
              (n(!0), a(J, null, Z(e.stock.tags, (u) => (n(), a("span", {
                key: u,
                class: "tag-pill"
              }, r(u), 1))), 128))
            ])
          ])) : k("", !0)
        ]),
        V.value || e.stock.sample?.enabled ? (n(), a("div", Et, [
          e.stock.sample?.enabled ? (n(), a("span", zt, r(d(i)("stockFilter.samplesAvailable")), 1)) : k("", !0),
          e.stock.extras?.banding?.length ? (n(), a("span", Kt, r(d(i)("stockFilter.banding")), 1)) : k("", !0),
          e.stock.extras?.finish?.length ? (n(), a("span", Gt, r(d(i)("stockFilter.finishOption")), 1)) : k("", !0),
          e.stock.extras?.planing?.length ? (n(), a("span", Ht, r(d(i)("stockFilter.planing")), 1)) : k("", !0),
          e.stock.extras?.machining?.length ? (n(), a("span", Qt, r(d(i)("stockFilter.machining")), 1)) : k("", !0)
        ])) : k("", !0)
      ]),
      s("div", Jt, [
        e.stock.cost ? (n(), a("div", Zt, [
          s("span", Wt, r(d(i)("stockFilter.price")) + ": ", 1),
          p.value ? (n(), a("span", Xt, r(L.value), 1)) : k("", !0),
          s("span", {
            class: q(["price__value", { price__discounted: p.value }])
          }, r(K.value), 3),
          p.value ? (n(), a("span", Yt, "-" + r(e.stock.discount) + "%", 1)) : k("", !0)
        ])) : k("", !0),
        s("div", es, [
          e.stock.sample?.enabled ? (n(), a("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white c-btn--no-effects no-margin",
            onClick: be(g, ["stop"])
          }, r(M.value), 1)) : k("", !0),
          s("button", {
            type: "button",
            class: q(["c-btn c-btn--sm c-btn--no-effects no-margin", { "c-btn--delete": e.isSelected }]),
            style: Pe(ae.value),
            disabled: !F.value || S.value,
            onClick: be(D, ["stop"])
          }, r(b.value), 15, ts)
        ])
      ])
    ], 42, it));
  }
}), os = /* @__PURE__ */ ue(ss, [["__scopeId", "data-v-6a21e2de"]]), ls = { class: "filter-panel-header" }, ns = { class: "filter-panel-title" }, as = { class: "filter-panel-content" }, is = {
  key: 0,
  class: "filter-summary"
}, cs = { class: "filter-summary__count" }, rs = { class: "filter-groups" }, us = { class: "filter-group__header" }, ds = { class: "filter-group__label" }, fs = { class: "filter-group__content" }, gs = {
  key: 0,
  class: "filter-select"
}, ms = ["value", "onChange"], hs = { value: "" }, vs = ["value"], ks = {
  key: 1,
  class: "multiselect"
}, ps = ["onClick"], bs = { class: "multiselect__text" }, ys = {
  key: 0,
  class: "multiselect__dropdown"
}, _s = ["checked", "onChange"], Ss = { class: "multiselect__option-label" }, $s = {
  key: 0,
  class: "multiselect__option-count"
}, ws = {
  key: 2,
  class: "filter-range"
}, Fs = { class: "filter-range__inputs" }, xs = ["value", "min", "max", "step", "onInput"], Cs = ["value", "min", "max", "step", "onInput"], Ps = {
  key: 3,
  class: "filter-boolean"
}, Os = { class: "filter-checkbox" }, Ms = ["checked", "onChange"], Is = /* @__PURE__ */ le({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(e, { emit: T }) {
    const o = e, h = T, w = A(!0), F = A({}), S = A(null), b = _(() => o.activeFilters.length);
    function p() {
      w.value = !w.value;
    }
    function M(g) {
      return {
        material: i("woodwork.material"),
        t: i("woodwork.thickness") + " (mm)",
        cost: i("stockFilter.price"),
        color: i("fields.color"),
        l: i("woodwork.length"),
        w: i("woodwork.width"),
        weight: i("fields.weight"),
        name: i("fields.name"),
        category: i("general.category")
      }[g.field] || g.label;
    }
    function I(g) {
      const l = o.getFilterOptionCounts?.(g.field) || /* @__PURE__ */ new Map(), c = l.size > 0, u = (v) => {
        if (!c) return;
        const B = typeof v == "object" && v !== null && "hex" in v ? v.hex : String(v);
        return l.get(B) ?? 0;
      };
      return g.options?.length ? g.options.map((v) => ({
        ...v,
        count: u(v.value)
      })) : o.getUniqueValues(g.field).map((v) => {
        const B = u(v);
        return g.field === "color" && typeof v == "object" && v !== null ? "name" in v && v.name ? {
          label: v.name,
          value: v,
          count: B
        } : {
          label: v.hex || String(v),
          value: v,
          count: B
        } : {
          label: String(v),
          value: v,
          count: B
        };
      });
    }
    function L(g) {
      return o.activeFilters.find((c) => c.field === g)?.value;
    }
    function K(g, l) {
      const c = L(g);
      return Array.isArray(c) ? g === "color" && typeof l == "object" && l !== null && "hex" in l ? c.some((u) => typeof u == "object" && u !== null && "hex" in u && u.hex === l.hex) : c.includes(l) : g === "color" && typeof l == "object" && l !== null && "hex" in l ? typeof c == "object" && c !== null && "hex" in c && c.hex === l.hex : c === l;
    }
    function G(g, l) {
      const u = l.target.value;
      if (u === "")
        h("remove-filter", g);
      else {
        const x = u !== "" && !isNaN(Number(u)) ? Number(u) : u;
        h("apply-filter", g, x, "select");
      }
    }
    function W(g, l, c) {
      const u = c.target, x = L(g) || [], v = Array.isArray(x) ? [...x] : [];
      if (u.checked)
        v.includes(l) || v.push(l);
      else {
        const B = v.indexOf(l);
        B !== -1 && v.splice(B, 1);
      }
      v.length === 0 ? h("remove-filter", g) : h("apply-filter", g, v, "multiselect");
    }
    function X(g, l) {
      if (F.value[g]?.[l] !== void 0)
        return F.value[g][l];
      const c = o.activeFilters.find((u) => u.field === g);
      if (c?.value && typeof c.value == "object")
        return c.value[l];
    }
    function Y(g, l, c) {
      const u = c.target, x = u.value ? Number(u.value) : void 0;
      F.value[g] || (F.value[g] = {}), F.value[g][l] = x;
      const v = F.value[g].min, B = F.value[g].max;
      v !== void 0 || B !== void 0 ? h("apply-filter", g, { min: v, max: B }, "range") : h("remove-filter", g);
    }
    function V(g, l) {
      l.target.checked ? h("apply-filter", g, !0, "boolean") : h("remove-filter", g);
    }
    function ne() {
      F.value = {}, h("clear-filters");
    }
    function ae(g) {
      S.value = S.value === g ? null : g;
    }
    function ie(g) {
      const l = L(g.field);
      return !l || Array.isArray(l) && l.length === 0 ? i("stockFilter.all") : Array.isArray(l) ? l.length === 1 ? I(g).find((x) => g.field === "color" && typeof x.value == "object" && x.value !== null && "hex" in x.value ? typeof l[0] == "object" && l[0] !== null && "hex" in l[0] && x.value.hex === l[0].hex : x.value === l[0])?.label || String(l[0]) : i("stockFilter.selected_count", [l.length]) : String(l);
    }
    function D(g) {
      g.target.closest(".multiselect") || (S.value = null);
    }
    return Oe(() => {
      document.addEventListener("click", D);
    }), We(() => {
      document.removeEventListener("click", D);
    }), (g, l) => (n(), a("div", {
      class: q(["stock-filter-panel", { "stock-filter-panel--open": w.value }])
    }, [
      s("div", ls, [
        s("h3", ns, r(d(i)("stockFilter.filters")), 1),
        s("button", {
          type: "button",
          class: "c-btn c-btn--no-effects c-btn--md no-margin filter-panel-toggle",
          onClick: p
        }, r(w.value ? "−" : "+"), 1)
      ]),
      Me(Ye, { name: "filter-panel-content" }, {
        default: Ie(() => [
          Ve(s("div", as, [
            b.value > 0 ? (n(), a("div", is, [
              s("span", cs, r(d(i)("stockFilter.active_filters", [b.value])), 1),
              s("button", {
                type: "button",
                class: "c-btn c-btn--no-effects c-btn--sm c-btn--delete no-margin",
                onClick: ne
              }, r(d(i)("stockFilter.clear_filters")), 1)
            ])) : k("", !0),
            s("div", rs, [
              (n(!0), a(J, null, Z(e.filterConfigs, (c) => (n(), a("div", {
                key: c.field,
                class: "filter-group"
              }, [
                s("div", us, [
                  s("label", ds, r(M(c)), 1)
                ]),
                s("div", fs, [
                  c.type === "select" ? (n(), a("div", gs, [
                    s("select", {
                      value: L(c.field),
                      class: "filter-select-input",
                      onChange: (u) => G(c.field, u)
                    }, [
                      s("option", hs, r(d(i)("stockFilter.all")), 1),
                      (n(!0), a(J, null, Z(I(c), (u) => (n(), a("option", {
                        key: u.value,
                        value: u.value
                      }, r(u.label) + r(u.count !== void 0 ? ` (${u.count})` : ""), 9, vs))), 128))
                    ], 40, ms)
                  ])) : c.type === "multiselect" ? (n(), a("div", ks, [
                    s("button", {
                      type: "button",
                      class: "multiselect__trigger",
                      onClick: (u) => ae(c.field)
                    }, [
                      s("span", bs, r(ie(c)), 1)
                    ], 8, ps),
                    S.value === c.field ? (n(), a("div", ys, [
                      (n(!0), a(J, null, Z(I(c), (u) => (n(), a("label", {
                        key: u.value,
                        class: q(["multiselect__option", { "multiselect__option--zero": u.count === 0 }])
                      }, [
                        s("input", {
                          checked: K(c.field, u.value),
                          type: "checkbox",
                          onChange: (x) => W(c.field, u.value, x)
                        }, null, 40, _s),
                        s("span", Ss, r(u.label), 1),
                        u.count !== void 0 ? (n(), a("span", $s, "(" + r(u.count) + ")", 1)) : k("", !0)
                      ], 2))), 128))
                    ])) : k("", !0)
                  ])) : c.type === "range" ? (n(), a("div", ws, [
                    s("div", Fs, [
                      s("input", {
                        value: X(c.field, "min"),
                        min: c.min,
                        max: c.max,
                        step: c.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Min",
                        onInput: (u) => Y(c.field, "min", u)
                      }, null, 40, xs),
                      l[0] || (l[0] = s("span", { class: "filter-range__separator" }, "–", -1)),
                      s("input", {
                        value: X(c.field, "max"),
                        min: c.min,
                        max: c.max,
                        step: c.step || 1,
                        type: "number",
                        class: "filter-range__input",
                        placeholder: "Max",
                        onInput: (u) => Y(c.field, "max", u)
                      }, null, 40, Cs)
                    ])
                  ])) : c.type === "boolean" ? (n(), a("div", Ps, [
                    s("label", Os, [
                      s("input", {
                        checked: L(c.field) === !0,
                        type: "checkbox",
                        onChange: (u) => V(c.field, u)
                      }, null, 40, Ms),
                      s("span", null, r(c.label), 1)
                    ])
                  ])) : k("", !0)
                ])
              ]))), 128))
            ])
          ], 512), [
            [Xe, w.value]
          ])
        ]),
        _: 1
      })
    ], 2));
  }
}), Vs = /* @__PURE__ */ ue(Is, [["__scopeId", "data-v-7a4c3504"]]), Bs = { class: "stock-filter-results" }, Ls = { class: "results-header" }, Rs = { class: "results-info" }, Us = {
  key: 0,
  class: "results-count"
}, As = {
  key: 1,
  class: "results-count results-count--loading"
}, Ts = { class: "results-controls" }, js = { class: "c-btn-group c-btn--no-effects display-mode-toggle no-margin" }, Ns = ["title"], Ds = ["title"], qs = {
  key: 0,
  class: "selection-bar"
}, Es = { class: "selection-text" }, zs = { class: "selection-actions" }, Ks = {
  key: 1,
  class: "results-loading"
}, Gs = {
  key: 2,
  class: "results-empty"
}, Hs = { class: "empty-message" }, Qs = {
  key: 4,
  class: "results-pagination"
}, Js = ["disabled"], Zs = { class: "c-btn-group c-btn--no-effects pagination-pages no-margin" }, Ws = ["onClick"], Xs = ["disabled"], Ys = /* @__PURE__ */ le({
  __name: "StockFilterResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    selectedCount: { default: 0 },
    currentPage: { default: 1 },
    totalPages: { default: 1 },
    showSelectedOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:displayMode", "update:showSelectedOnly", "clear-filters", "clear-selection", "go-to-page"],
  setup(e, { emit: T }) {
    const o = e, h = T;
    function w() {
      h("update:showSelectedOnly", !o.showSelectedOnly);
    }
    const F = _(() => {
      const S = [], p = Math.floor(2.5);
      let M = Math.max(1, o.currentPage - p), I = Math.min(o.totalPages, M + 5 - 1);
      I === o.totalPages && (M = Math.max(1, I - 5 + 1));
      for (let L = M; L <= I; L++)
        S.push(L);
      return S;
    });
    return (S, b) => (n(), a("div", Bs, [
      s("div", Ls, [
        s("div", Rs, [
          e.loading ? (n(), a("div", As, r(d(i)("actions.loading")) + "...", 1)) : (n(), a("div", Us, r(e.totalResults) + " " + r(e.totalResults === 1 ? d(i)("stockFilter.result_one") : d(i)("stockFilter.result_other")), 1))
        ]),
        s("div", Ts, [
          s("div", js, [
            s("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: e.displayMode === "grid" }]),
              title: d(i)("stockFilter.grid_view"),
              onClick: b[0] || (b[0] = (p) => S.$emit("update:displayMode", "grid"))
            }, [...b[6] || (b[6] = [
              et('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-6c22b200><rect x="1" y="1" width="6" height="6" data-v-6c22b200></rect><rect x="9" y="1" width="6" height="6" data-v-6c22b200></rect><rect x="1" y="9" width="6" height="6" data-v-6c22b200></rect><rect x="9" y="9" width="6" height="6" data-v-6c22b200></rect></svg>', 1)
            ])], 10, Ns),
            s("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: e.displayMode === "list" }]),
              title: d(i)("stockFilter.list_view"),
              onClick: b[1] || (b[1] = (p) => S.$emit("update:displayMode", "list"))
            }, [...b[7] || (b[7] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                s("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                s("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Ds)
          ])
        ])
      ]),
      e.selectedCount > 0 ? (n(), a("div", qs, [
        s("span", Es, r(e.selectedCount) + " " + r(e.selectedCount === 1 ? "material" : "materials") + " selected ", 1),
        s("div", zs, [
          s("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--no-effects no-margin",
            onClick: w
          }, r(e.showSelectedOnly ? "Show all" : "Show selected"), 1),
          s("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--no-effects c-btn--delete no-margin",
            onClick: b[2] || (b[2] = (p) => S.$emit("clear-selection"))
          }, " Clear ")
        ])
      ])) : k("", !0),
      e.loading ? (n(), a("div", Ks, [
        b[8] || (b[8] = s("div", { class: "spinner" }, null, -1)),
        s("p", null, r(d(i)("actions.loading")) + "...", 1)
      ])) : e.totalResults === 0 ? (n(), a("div", Gs, [
        s("p", Hs, r(d(i)("stockFilter.no_results")), 1),
        e.hasActiveFilters ? (n(), a("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: b[3] || (b[3] = (p) => S.$emit("clear-filters"))
        }, r(d(i)("stockFilter.clear_filters")), 1)) : k("", !0)
      ])) : (n(), a("div", {
        key: 3,
        class: q(["results-grid", { "results-grid--list": e.displayMode === "list" }])
      }, [
        tt(S.$slots, "default", {}, void 0, !0)
      ], 2)),
      e.totalPages > 1 ? (n(), a("div", Qs, [
        s("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === 1,
          onClick: b[4] || (b[4] = (p) => S.$emit("go-to-page", e.currentPage - 1))
        }, r(d(i)("pagination.previous")), 9, Js),
        s("div", Zs, [
          (n(!0), a(J, null, Z(F.value, (p) => (n(), a("button", {
            key: p,
            type: "button",
            class: q(["c-btn c-btn--sm", { selected: p === e.currentPage }]),
            onClick: (M) => S.$emit("go-to-page", p)
          }, r(p), 11, Ws))), 128))
        ]),
        s("button", {
          type: "button",
          class: "c-btn c-btn--sm c-btn--no-effects no-margin",
          disabled: e.currentPage === e.totalPages,
          onClick: b[5] || (b[5] = (p) => S.$emit("go-to-page", e.currentPage + 1))
        }, r(d(i)("pagination.next")), 9, Xs)
      ])) : k("", !0)
    ]));
  }
}), eo = /* @__PURE__ */ ue(Ys, [["__scopeId", "data-v-6c22b200"]]), to = { class: "stock-filter-search" }, so = { class: "search-input-wrapper" }, oo = ["placeholder"], lo = /* @__PURE__ */ le({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: T }) {
    const o = e, h = T, w = A(o.modelValue);
    oe(() => o.modelValue, (b) => {
      w.value = b;
    });
    function F() {
      h("update:modelValue", w.value);
    }
    function S() {
      w.value = "", h("update:modelValue", "");
    }
    return (b, p) => (n(), a("div", to, [
      s("div", so, [
        Ve(s("input", {
          "onUpdate:modelValue": p[0] || (p[0] = (M) => w.value = M),
          type: "text",
          class: "search-input",
          placeholder: e.placeholder,
          onKeydown: Se(F, ["enter"])
        }, null, 40, oo), [
          [st, w.value]
        ]),
        w.value ? (n(), a("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete no-margin",
          onClick: S
        }, " × ")) : k("", !0),
        s("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button no-margin c-btn--no-effects",
          onClick: F
        }, r(d(i)("actions.search")), 1)
      ])
    ]));
  }
}), no = /* @__PURE__ */ ue(lo, [["__scopeId", "data-v-8c3c0dd2"]]), ao = { class: "stock-filter-sort" }, io = { class: "sort-controls" }, co = { class: "sort-label" }, ro = ["value"], uo = ["value"], fo = ["title"], go = {
  width: "32",
  height: "32",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mo = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, ho = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, vo = /* @__PURE__ */ le({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(e, { emit: T }) {
    const o = e, h = T, w = o.availableFields.map((p) => ({
      value: p,
      label: F(p)
    }));
    function F(p) {
      return {
        cost: i("stockFilter.price"),
        material: i("woodwork.material"),
        t: i("woodwork.thickness"),
        l: i("woodwork.length"),
        w: i("woodwork.width"),
        pricePerKg: i("stockFilter.price") + " per kg",
        pricePerM2: i("stockFilter.price") + " per m²",
        weight: i("fields.weight"),
        name: i("fields.name")
      }[p] || p.charAt(0).toUpperCase() + p.slice(1);
    }
    function S(p) {
      const M = p.target;
      h("update:sortBy", M.value);
    }
    function b() {
      h("update:sortOrder", o.sortOrder === "asc" ? "desc" : "asc");
    }
    return (p, M) => (n(), a("div", ao, [
      s("div", io, [
        s("label", co, r(d(i)("stockFilter.sort_by")) + ":", 1),
        s("select", {
          value: e.sortBy,
          class: "sort-select",
          onChange: S
        }, [
          (n(!0), a(J, null, Z(d(w), (I) => (n(), a("option", {
            key: I.value,
            value: I.value
          }, r(I.label), 9, uo))), 128))
        ], 40, ro),
        s("button", {
          type: "button",
          class: q(["sort-order-btn c-btn c-btn--no-effects no-margin", { "sort-order-btn--desc": e.sortOrder === "desc" }]),
          title: e.sortOrder === "asc" ? d(i)("options.by_dimensions") : d(i)("options.by_dimensions"),
          onClick: b
        }, [
          (n(), a("svg", go, [
            e.sortOrder === "asc" ? (n(), a("path", mo)) : (n(), a("path", ho))
          ]))
        ], 10, fo)
      ])
    ]));
  }
}), ko = /* @__PURE__ */ ue(vo, [["__scopeId", "data-v-62dadb26"]]), po = {
  id: "stock-filter",
  class: "smartcut-content"
}, bo = {
  key: 2,
  class: "stock-filter-search-sort"
}, Fo = /* @__PURE__ */ le({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => lt()
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
  setup(e, { expose: T, emit: o }) {
    const h = e, w = o, F = A(h.stockOptions), S = A(h.config), b = A(h.numberFormat);
    oe(() => h.stockOptions, (t) => {
      F.value = t;
    }), oe(() => h.config, (t) => {
      S.value = t;
    });
    const p = _(() => {
      if (h.serverPagination)
        return {
          ...h.serverPagination,
          mode: h.mode
        };
    }), {
      activeFilters: M,
      searchQuery: I,
      sortBy: L,
      sortOrder: K,
      displayMode: G,
      currentPage: W,
      filteredStock: X,
      paginatedStock: Y,
      selectedStock: V,
      totalPages: ne,
      totalItems: ae,
      isLoading: ie,
      applyFilter: D,
      removeFilter: g,
      clearFilters: l,
      goToPage: c,
      toggleStockSelection: u,
      isStockSelected: x,
      clearSelection: v,
      selectById: B,
      createInputStock: R,
      getUniqueValues: H,
      getFieldRange: $e,
      getFilterOptionCounts: Be
    } = at({
      stockOptions: F,
      config: S,
      numberFormat: b,
      serverPagination: p.value
    }), { addNotice: Le } = nt(), ce = ot("stock-filter-selections", []), ee = A(!1), j = A(!1), te = A(1), U = A(/* @__PURE__ */ new Map());
    function E(t, m) {
      for (const f of t)
        f.customData = { ...f.customData || {}, selectionId: m };
      w("stock-added", t);
    }
    const de = _(() => h.config.itemsPerPage || 20), Re = _(() => {
      const t = (te.value - 1) * de.value, m = t + de.value;
      return V.value.slice(t, m);
    }), we = _(() => j.value ? Re.value : Y.value), Ue = _(() => _e(we.value)), Ae = _(() => j.value ? V.value.length : ae.value), Te = _(() => j.value ? Math.max(1, Math.ceil(V.value.length / de.value)) : ne.value), je = _(() => j.value ? te.value : W.value);
    function Ne(t) {
      j.value ? te.value = t : c(t);
    }
    oe(j, () => {
      te.value = 1;
    }), oe(() => V.value.length, (t) => {
      t === 0 && j.value && (j.value = !1);
      const m = Math.max(1, Math.ceil(t / de.value));
      if (te.value > m && (te.value = m), V.value.length > 0) {
        const f = _e(V.value);
        for (const [y, $] of U.value) {
          const C = f.get(y);
          if (C)
            for (const P of $)
              P.material = C;
        }
        w("labels-changed", f);
      }
    });
    const De = _(() => h.loading || ie.value), me = A(!1);
    oe(V, (t) => {
      me.value || (ce.value = t.map((m) => N(m)));
    }, { deep: !0 });
    async function qe(t) {
      if (!h.serverPagination) return null;
      const { apiUrl: m, orgSlug: f, isCustomDomain: y } = h.serverPagination, $ = h.mode === "material" ? "materials" : "stock", C = y ? `${m}ecommerce/${$}` : `${m}ecommerce/${f}/${$}`;
      try {
        const P = new URL(C);
        P.searchParams.set("limit", "1");
        const O = {}, se = t.match(/^([a-f0-9]{24})-t(\d+(?:\.\d+)?)$/i);
        if (se)
          O._id = se[1], O.t = parseFloat(se[2]);
        else if (/^[a-f0-9]{24}$/i.test(t))
          O._id = t;
        else {
          const re = t.split("-");
          if (re.length >= 4) {
            const He = parseFloat(re.pop()), Qe = parseFloat(re.pop()), Je = parseFloat(re.pop()), Ze = re.join("-");
            O.material = Ze, O.l = Je, O.w = Qe, O.t = He;
          } else
            return null;
        }
        P.searchParams.set("filters", JSON.stringify(O));
        const ve = await fetch(P.toString(), { credentials: "include" });
        if (!ve.ok) return null;
        const Q = (await ve.json()).items || [];
        if (Q.length === 0) return null;
        const pe = Q[0];
        return N(pe) !== t ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: t, got: N(pe) }), null) : pe;
      } catch {
        return null;
      }
    }
    async function Ee() {
      if (ce.value.length) {
        me.value = !0;
        try {
          const t = [...ce.value], m = [], f = [];
          for (const $ of t) {
            let C = h.stockOptions.find((P) => N(P) === $);
            !C && h.serverPagination && (C = await qe($)), C && (m.push($), f.push(C));
          }
          const y = t.length - m.length;
          y > 0 && (ce.value = m, Le({
            message: y === 1 ? "A previously selected material is no longer available" : `${y} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const $ of f) {
            const C = N($);
            if (!x($))
              if (u($), h.mode === "material" && h.serverPagination) {
                ee.value = !0;
                try {
                  const P = await he($);
                  if (P.length > 0)
                    z(P, $), U.value.set(C, P), E(P, C);
                  else {
                    const O = R($);
                    z([O], $), U.value.set(C, [O]), E([O], C);
                  }
                } finally {
                  ee.value = !1;
                }
              } else {
                const P = R($);
                z([P], $), U.value.set(C, [P]), E([P], C);
              }
          }
        } finally {
          me.value = !1;
        }
      }
    }
    Oe(async () => {
      if (h.initialProductId) {
        const t = B(h.initialProductId);
        if (!t) return;
        const m = N(t);
        if (h.mode === "material" && h.serverPagination) {
          ee.value = !0;
          try {
            const f = await he(t);
            if (f.length > 0)
              z(f, t), U.value.set(m, f), E(f, m);
            else {
              const y = R(t);
              z([y], t), U.value.set(m, [y]), E([y], m);
            }
          } finally {
            ee.value = !1;
          }
        } else {
          const f = R(t);
          z([f], t), E([f], m);
        }
        return;
      }
      await Ee();
    });
    const Fe = _(() => h.config.availableFilters.filter((t) => {
      const m = H(t.field);
      return m.length > 0 && m.some((f) => f != null);
    })), xe = _(() => V.value.length === 0 ? null : V.value[0].db_sawId || null);
    function Ce(t) {
      if (!xe.value) return !1;
      const m = t.db_sawId;
      return m ? m !== xe.value : !1;
    }
    async function he(t) {
      if (!h.serverPagination) return [];
      const { apiUrl: m, orgSlug: f, isCustomDomain: y } = h.serverPagination, $ = y ? `${m}ecommerce/stock` : `${m}ecommerce/${f}/stock`;
      try {
        const C = new URL($);
        C.searchParams.set("limit", "500");
        const P = {};
        let O = null;
        if (t.db_materialId)
          O = t.db_materialId;
        else if (t._id && /^[a-f0-9]{24}$/i.test(t._id))
          O = t._id;
        else if (t.db_id) {
          const Q = t.db_id.match(/^([a-f0-9]{24})-t\d+(?:\.\d+)?$/i);
          Q && (O = Q[1]);
        }
        O ? P.db_materialId = O : P.material = t.name || t.material, t.t != null && (P.t = t.t), C.searchParams.set("filters", JSON.stringify(P)), console.log("[StockFilter] fetchStockForMaterial URL:", C.toString());
        const se = await fetch(C.toString(), { credentials: "include" });
        if (!se.ok) return [];
        const ke = (await se.json()).items || [];
        return console.log("[StockFilter] fetchStockForMaterial returned", ke.length, "items"), ke.map((Q) => R(Q));
      } catch {
        return [];
      }
    }
    function z(t, m) {
      const y = _e(V.value).get(N(m));
      if (y)
        for (const $ of t)
          $.material = y;
    }
    async function ze(t) {
      if (Ce(t)) return;
      const m = x(t);
      u(t);
      const f = N(t);
      if (console.log("[StockFilter] Toggle:", { stockId: f, wasSelected: m, name: t.name, material: t.material, db_materialId: t.db_materialId, t: t.t }), m) {
        const y = U.value.get(f);
        y ? (y.forEach(fe), U.value.delete(f)) : fe(R(t));
      } else if (h.mode === "material" && h.serverPagination) {
        ee.value = !0;
        try {
          const y = await he(t);
          if (y.length > 0)
            z(y, t), U.value.set(f, y), E(y, f);
          else {
            const $ = R(t);
            z([$], t), U.value.set(f, [$]), E([$], f);
          }
        } finally {
          ee.value = !1;
        }
      } else {
        const y = R(t);
        z([y], t), U.value.set(f, [y]), E([y], f);
      }
    }
    function fe(t) {
      w("stock-removed", t);
    }
    function Ke() {
      for (const t of V.value) {
        const m = N(t), f = U.value.get(m);
        f ? f.forEach(fe) : fe(R(t));
      }
      U.value.clear(), v(), ce.value = [], j.value = !1;
    }
    function Ge(t) {
      w("order-sample", t);
    }
    return T({
      applyFilter: D,
      removeFilter: g,
      clearFilters: l,
      clearSelection: v,
      selectedStock: V,
      filteredStock: X,
      getUniqueValues: H,
      getFieldRange: $e
    }), (t, m) => (n(), a("div", po, [
      k("", !0),
      Fe.value.length > 0 ? (n(), ge(Vs, {
        key: 1,
        "filter-configs": Fe.value,
        "active-filters": d(M),
        "get-unique-values": d(H),
        "get-field-range": d($e),
        "get-filter-option-counts": d(Be),
        onApplyFilter: d(D),
        onRemoveFilter: d(g),
        onClearFilters: d(l)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : k("", !0),
      e.config.enableSearch || e.config.sortOptions.length > 0 ? (n(), a("div", bo, [
        e.config.enableSearch ? (n(), ge(no, {
          key: 0,
          modelValue: d(I),
          "onUpdate:modelValue": m[0] || (m[0] = (f) => ye(I) ? I.value = f : null)
        }, null, 8, ["modelValue"])) : k("", !0),
        e.config.sortOptions.length > 0 ? (n(), ge(ko, {
          key: 1,
          "sort-by": d(L),
          "onUpdate:sortBy": m[1] || (m[1] = (f) => ye(L) ? L.value = f : null),
          "sort-order": d(K),
          "onUpdate:sortOrder": m[2] || (m[2] = (f) => ye(K) ? K.value = f : null),
          "available-fields": e.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : k("", !0)
      ])) : k("", !0),
      Me(eo, {
        "total-results": Ae.value,
        "display-mode": d(G),
        loading: De.value,
        "has-active-filters": d(M).length > 0,
        "selected-count": d(V).length,
        "current-page": je.value,
        "total-pages": Te.value,
        "show-selected-only": j.value,
        "onUpdate:displayMode": m[3] || (m[3] = (f) => G.value = f),
        "onUpdate:showSelectedOnly": m[4] || (m[4] = (f) => j.value = f),
        onClearFilters: d(l),
        onClearSelection: Ke,
        onGoToPage: Ne
      }, {
        default: Ie(() => [
          (n(!0), a(J, null, Z(we.value, (f, y) => (n(), ge(os, {
            key: d(N)(f),
            stock: f,
            "is-selected": d(x)(f),
            "is-disabled": Ce(f),
            "display-label": Ue.value.get(d(N)(f)),
            "format-price": e.formatPrice,
            "button-color": e.colors.button,
            "button-text-color": e.colors.buttonText,
            locale: e.locale,
            "display-mode": d(G),
            mode: e.mode,
            "unit-system": e.unitSystem,
            onToggleSelection: ze,
            onOrderSample: Ge
          }, null, 8, ["stock", "is-selected", "is-disabled", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "mode", "unit-system"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "selected-count", "current-page", "total-pages", "show-selected-only", "onClearFilters"])
    ]));
  }
});
export {
  Fo as default
};
