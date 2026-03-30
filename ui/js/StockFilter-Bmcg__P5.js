import { c as C, d as se, a as l, b as s, P as ae, x as J, p as I, q as ie, f as i, e as v, r as q, t as n, F as N, k as D, s as Pe, u as g, o as Ve, M as et, U as tt, O as st, w as te, m as lt, B as ot, V as nt, j as ve, g as Oe, W as pe, y as Me, X as it } from "./vendor-vue-DyIrsOEK.js";
import { e as at, u as ct } from "./EcommerceCalculator-DI2zhyU0.js";
import { t as f } from "./i18n-Ck7sLK64.js";
import { u as rt, g as G } from "./Vanilla-DrGtkUy7.js";
import { _ as ce } from "./Launch-CW1xtdsr.js";
const ut = [
  "material",
  "name",
  "l",
  "w",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "code",
  "imageUrl",
  "db_sawId"
];
function dt(e) {
  const x = [];
  for (const u of ut) {
    const y = e[u];
    x.push(y != null ? String(y) : "");
  }
  const t = e.extras;
  if (t) {
    const u = ["banding", "finish", "planing", "machining"];
    for (const y of u)
      x.push(t[y] ? "1" : "0");
  } else
    x.push("0000");
  return x.join("");
}
function ft(e) {
  return e.length > 0 && e[0].thicknessGroup ? gt(e) : ht(e);
}
function gt(e) {
  const x = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), u = [];
  for (const r of e) {
    const m = r.thicknessGroup;
    if (!m) {
      const w = `__solo_${r.db_id || Math.random()}`;
      x.set(w, [r]), u.push(w);
      continue;
    }
    const _ = m.groupKey;
    x.has(_) || (x.set(_, []), t.set(_, m), u.push(_)), x.get(_).push(r);
  }
  const y = [];
  for (const r of u) {
    const m = x.get(r);
    m.sort((w, $) => (w.t ?? 0) - ($.t ?? 0));
    const _ = t.get(r);
    y.push({
      groupKey: r,
      items: m,
      thicknesses: _?.thicknesses || m.map((w) => w.t).filter((w) => w != null),
      representative: m[0],
      priceRange: _?.priceRange || null
    });
  }
  return y;
}
function ht(e) {
  const x = /* @__PURE__ */ new Map(), t = [];
  for (const y of e) {
    if (y.t == null) {
      const m = `__solo_${y.db_id || Math.random()}`;
      x.set(m, [y]), t.push(m);
      continue;
    }
    const r = dt(y);
    x.has(r) || (x.set(r, []), t.push(r)), x.get(r).push(y);
  }
  const u = [];
  for (const y of t) {
    const r = x.get(y);
    r.sort(($, O) => ($.t ?? 0) - (O.t ?? 0));
    const m = r.map(($) => $.t).filter(($) => $ != null), _ = r.map(($) => $.cost).filter(($) => $ != null && $ > 0);
    let w = null;
    if (_.length > 1) {
      const $ = Math.min(..._), O = Math.max(..._);
      $ !== O && (w = { min: $, max: O });
    }
    u.push({
      groupKey: y,
      items: r,
      thicknesses: m,
      representative: r[0],
      priceRange: w
    });
  }
  return u;
}
function ze(e, x) {
  const t = x.find((y) => y.field === "t");
  if (!t) return !1;
  const u = t.value;
  return Array.isArray(u) ? !u.some((y) => Number(y) === e) : u != null ? Number(u) !== e : !1;
}
function vt(e, x) {
  const t = C(() => ft(e.value));
  function u(r, m) {
    return r.items.find((_) => _.t === m);
  }
  function y(r) {
    const m = /* @__PURE__ */ new Set();
    for (const _ of r.thicknesses)
      ze(_, x.value) && m.add(_);
    return m;
  }
  return {
    groupedStock: t,
    getItemForThickness: u,
    getFilteredOutThicknesses: y,
    isThicknessFilteredOut: ze
  };
}
function mt(e) {
  const x = e.trim();
  if (x.startsWith("#")) {
    const t = x.slice(1);
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
  if (x.startsWith("rgb")) {
    const t = x.match(/\d+/g);
    if (t && t.length >= 3)
      return { r: +t[0], g: +t[1], b: +t[2] };
  }
  return null;
}
function kt(e, x) {
  const t = mt(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.6 ? "#000" : "#fff" : "#000";
}
const bt = ["onKeydown"], yt = { class: "stock-filter-row__thumb" }, pt = ["src", "alt"], _t = { class: "stock-filter-row__material" }, wt = { class: "stock-filter-row__name" }, Ct = {
  key: 0,
  class: "stock-filter-row__code"
}, xt = {
  key: 0,
  class: "stock-filter-row__cell"
}, St = {
  key: 1,
  class: "stock-filter-row__cell"
}, $t = {
  key: 2,
  class: "stock-filter-row__cell"
}, Ft = {
  key: 3,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, Tt = {
  key: 4,
  class: "stock-filter-row__color"
}, Pt = { key: 1 }, Ot = {
  key: 5,
  class: "stock-filter-row__thickness"
}, Mt = {
  key: 0,
  class: "c-loz-group c-loz-group--tight"
}, zt = ["disabled", "onClick"], Vt = {
  key: 1,
  class: "thickness-badge"
}, It = {
  key: 6,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, Bt = {
  key: 7,
  class: "stock-filter-row__weight"
}, Rt = {
  key: 8,
  class: "stock-filter-row__price"
}, Lt = {
  key: 0,
  class: "price__original"
}, At = {
  key: 1,
  class: "price__badge"
}, qt = { class: "stock-filter-row__action" }, Ut = ["disabled"], Nt = ["onKeydown"], Gt = { class: "stock-filter-card__image-wrapper" }, jt = ["src", "alt"], Dt = {
  key: 1,
  class: "c-badge stock-filter-card__badge--thickness"
}, Kt = {
  key: 2,
  class: "c-badge stock-filter-card__badge--thickness"
}, Et = { class: "stock-filter-card__badges-bottom" }, Ht = {
  key: 1,
  class: "c-badge stock-filter-card__badge--finish"
}, Qt = { class: "stock-filter-card__content" }, Wt = { class: "stock-filter-card__title" }, Zt = {
  key: 0,
  class: "stock-filter-card__code"
}, Jt = {
  key: 1,
  class: "stock-filter-card__description"
}, Xt = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Yt = {
  key: 0,
  class: "middot"
}, es = {
  key: 3,
  class: "c-loz-group"
}, ts = ["disabled", "onClick"], ss = {
  key: 4,
  class: "stock-filter-card__extras"
}, ls = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, os = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, ns = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, is = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, as = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, cs = { class: "stock-filter-card__footer" }, rs = {
  key: 0,
  class: "stock-filter-card__price"
}, us = { class: "price__value" }, ds = {
  key: 1,
  class: "stock-filter-card__price"
}, fs = {
  key: 0,
  class: "price__original"
}, gs = {
  key: 1,
  class: "price__badge"
}, hs = { class: "stock-filter-card__actions" }, vs = ["disabled"], ms = /* @__PURE__ */ se({
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
    visibleColumns: { default: () => ({ code: !0, description: !0, finish: !0, variant: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) },
    group: {},
    selectedThicknesses: {},
    filteredOutThicknesses: {}
  },
  emits: ["toggle-selection", "order-sample", "toggle-thickness", "toggle-group", "select-group", "deselect-group"],
  setup(e, { emit: x }) {
    const t = e, u = x, y = q(!1), r = q(!1), m = C(() => t.stock.available !== !1), _ = C(() => t.isDisabled), w = C(() => t.stock.discount && t.stock.discount > 0), $ = C(() => {
      const k = t.stock.sample;
      return k?.enabled ? k.price && k.price > 0 ? `${f("stockFilter.orderSample")} (${t.formatPrice(k.price, t.locale)})` : f("stockFilter.freeSample") : "";
    }), O = C(() => t.stock.cost ? w.value ? t.stock.cost * (1 - t.stock.discount / 100) : t.stock.cost : 0), K = C(() => t.stock.cost ? t.formatPrice(t.stock.cost, t.locale) : "N/A"), E = C(() => t.stock.cost ? t.formatPrice(O.value, t.locale) : "N/A"), B = C(() => t.stock.colorHex || ""), j = C(() => t.stock.color || ""), X = C(() => B.value ? kt(B.value) : "#fff"), H = C(() => {
      if (!t.stock.grain) return "";
      switch (t.stock.grain) {
        case "l":
          return f("fields.grain.length");
        case "w":
          return f("fields.grain.width");
        default:
          return "";
      }
    }), M = C(() => {
      const k = [];
      return t.stock.category && k.push(t.stock.category), t.stock.variant && k.push(t.stock.variant), H.value && k.push(H.value), t.stock.weight && k.push(`${t.stock.weight}kg`), k;
    }), le = C(() => t.stock.t == null ? "" : t.unitSystem === "imperial" ? `${(t.stock.t / 25.4).toFixed(2)}"` : `${t.stock.t} mm`), Y = C(() => {
      const k = t.stock.extras;
      return k ? !!(k.banding || k.finish || k.planing || k.machining) : !1;
    }), c = C(() => t.group && t.group.items.length > 1), p = C(() => {
      if (!c.value || !t.selectedThicknesses) return !1;
      const k = t.selectedThicknesses.size;
      return k > 0 && k < t.group.thicknesses.length;
    }), h = C(() => !c.value || !t.selectedThicknesses ? t.isSelected : t.selectedThicknesses.size === t.group.thicknesses.length), b = C(() => !c.value || !t.selectedThicknesses ? t.isSelected : t.selectedThicknesses.size > 0);
    function z(k) {
      return t.unitSystem === "imperial" ? `${(k / 25.4).toFixed(2)}"` : `${k}mm`;
    }
    const F = C(() => t.group?.priceRange ? `${t.formatPrice(t.group.priceRange.min, t.locale)} – ${t.formatPrice(t.group.priceRange.max, t.locale)}` : null);
    function P(k, T) {
      if (T.stopPropagation(), t.filteredOutThicknesses?.has(k)) return;
      const S = t.group?.items.find((R) => R.t === k);
      S && u("toggle-thickness", S, k);
    }
    function re() {
      !m.value || _.value || (c.value && t.group ? u("toggle-group", t.group) : u("toggle-selection", t.stock));
    }
    function ue() {
      !m.value || _.value || (c.value && t.group ? b.value ? u("deselect-group", t.group) : u("select-group", t.group) : u("toggle-selection", t.stock));
    }
    const Q = C(() => {
      if (!t.group || t.group.thicknesses.length < 2) return "";
      const k = t.group.thicknesses[0], T = t.group.thicknesses[t.group.thicknesses.length - 1];
      return t.unitSystem === "imperial" ? `${(k / 25.4).toFixed(2)}" – ${(T / 25.4).toFixed(2)}"` : `${k} – ${T}mm`;
    }), oe = C(() => {
      const k = ["60px", "2fr"];
      return t.visibleColumns.finish && k.push("1fr"), t.visibleColumns.variant && k.push("1fr"), t.visibleColumns.category && k.push("1fr"), t.visibleColumns.grain && k.push("80px"), t.visibleColumns.color && k.push("100px"), t.visibleColumns.thickness && k.push(c.value ? "minmax(120px, auto)" : "80px"), t.visibleColumns.quantity && k.push("80px"), t.visibleColumns.weight && k.push("80px"), t.visibleColumns.price && k.push("100px"), k.push("50px"), { "grid-template-columns": k.join(" ") };
    }), ee = C(() => t.displayLabel ? t.displayLabel : t.stock.name ? t.stock.name : `${t.stock.material} ${t.stock.l}×${t.stock.w}`), de = C(() => t.stock.code ? t.stock.code.toLowerCase() !== ee.value.toLowerCase() : !1);
    function W() {
      re();
    }
    function Z() {
      u("order-sample", t.stock);
    }
    return (k, T) => e.displayMode === "list" ? (s(), l("div", {
      key: 0,
      class: I(["stock-filter-row", {
        "stock-filter-row--selected": c.value ? h.value : e.isSelected,
        "stock-filter-row--partial": p.value,
        "stock-filter-row--unavailable": !m.value,
        "stock-filter-row--disabled": _.value
      }]),
      style: J(oe.value),
      role: "button",
      tabindex: "0",
      onClick: W,
      onKeydown: [
        ae(W, ["enter"]),
        ae(ie(W, ["prevent"]), ["space"])
      ]
    }, [
      i("div", yt, [
        T[4] || (T[4] = i("div", { class: "stock-filter-row__thumb-placeholder" }, null, -1)),
        e.stock.imageUrl && !y.value ? (s(), l("img", {
          key: 0,
          class: I(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": r.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: T[0] || (T[0] = (S) => r.value = !0),
          onError: T[1] || (T[1] = (S) => y.value = !0)
        }, null, 42, pt)) : v("", !0)
      ]),
      i("div", _t, [
        i("span", wt, n(ee.value), 1),
        de.value ? (s(), l("span", Ct, n(e.stock.code), 1)) : v("", !0)
      ]),
      e.visibleColumns.finish ? (s(), l("div", xt, n(e.stock.finish || ""), 1)) : v("", !0),
      e.visibleColumns.variant ? (s(), l("div", St, n(e.stock.variant || ""), 1)) : v("", !0),
      e.visibleColumns.category ? (s(), l("div", $t, n(e.stock.category || ""), 1)) : v("", !0),
      e.visibleColumns.grain ? (s(), l("div", Ft, n(H.value), 1)) : v("", !0),
      e.visibleColumns.color ? (s(), l("div", Tt, [
        B.value ? (s(), l("span", {
          key: 0,
          class: "color-swatch color-swatch--sm",
          style: J({ backgroundColor: B.value })
        }, null, 4)) : v("", !0),
        j.value ? (s(), l("span", Pt, n(j.value), 1)) : v("", !0)
      ])) : v("", !0),
      e.visibleColumns.thickness ? (s(), l("div", Ot, [
        c.value ? (s(), l("div", Mt, [
          (s(!0), l(N, null, D(e.group.thicknesses, (S) => (s(), l("button", {
            key: S,
            type: "button",
            class: I(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
              "c-loz--solid": !e.selectedThicknesses?.has(S) && !e.filteredOutThicknesses?.has(S),
              active: e.selectedThicknesses?.has(S)
            }]),
            style: J({
              "--loz-custom-color": e.buttonColor,
              "--loz-custom-text": e.buttonTextColor,
              ...!e.selectedThicknesses?.has(S) && !e.filteredOutThicknesses?.has(S) ? { "--loz-bg": e.buttonColor, "--loz-color": e.buttonTextColor, "--loz-border-color": e.buttonColor } : {},
              ...e.selectedThicknesses?.has(S) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
            }),
            disabled: e.filteredOutThicknesses?.has(S),
            onClick: (R) => P(S, R)
          }, n(z(S)), 15, zt))), 128))
        ])) : e.stock.t != null ? (s(), l("span", Vt, [
          Pe(n(e.stock.t), 1),
          T[5] || (T[5] = i("small", null, "mm", -1))
        ])) : v("", !0)
      ])) : v("", !0),
      e.visibleColumns.quantity ? (s(), l("div", It, n(e.stock.unlimitedQuantity ? g(f)("stockFilter.inStock") : e.stock.q), 1)) : v("", !0),
      e.visibleColumns.weight ? (s(), l("div", Bt, n(e.stock.weight ? `${e.stock.weight}kg` : ""), 1)) : v("", !0),
      e.visibleColumns.price ? (s(), l("div", Rt, [
        w.value ? (s(), l("span", Lt, n(K.value), 1)) : v("", !0),
        i("span", {
          class: I(["price__value", { price__discounted: w.value }])
        }, n(E.value), 3),
        w.value ? (s(), l("span", At, "-" + n(e.stock.discount) + "%", 1)) : v("", !0)
      ])) : v("", !0),
      i("div", qt, [
        i("button", {
          type: "button",
          class: I(["c-btn", { "c-btn--delete": c.value ? b.value : e.isSelected }]),
          disabled: !m.value || _.value,
          onClick: ie(ue, ["stop"])
        }, n((c.value ? b.value : e.isSelected) ? "−" : "+"), 11, Ut)
      ])
    ], 46, bt)) : (s(), l("div", {
      key: 1,
      class: I(["stock-filter-card", {
        "stock-filter-card--selected": c.value ? h.value : e.isSelected,
        "stock-filter-card--partial": p.value,
        "stock-filter-card--unavailable": !m.value,
        "stock-filter-card--disabled": _.value
      }]),
      role: "button",
      tabindex: "0",
      onClick: W,
      onKeydown: [
        ae(W, ["enter"]),
        ae(ie(W, ["prevent"]), ["space"])
      ]
    }, [
      i("div", Gt, [
        T[6] || (T[6] = i("div", { class: "stock-filter-card__image-placeholder" }, null, -1)),
        e.stock.imageUrl && !y.value ? (s(), l("img", {
          key: 0,
          class: I(["stock-filter-card__image", { "stock-filter-card__image--loaded": r.value }]),
          src: e.stock.imageUrl,
          alt: e.stock.name || e.stock.material,
          loading: "lazy",
          onLoad: T[2] || (T[2] = (S) => r.value = !0),
          onError: T[3] || (T[3] = (S) => y.value = !0)
        }, null, 42, jt)) : v("", !0),
        c.value && Q.value ? (s(), l("span", Dt, n(Q.value), 1)) : !c.value && e.stock.t != null ? (s(), l("span", Kt, n(le.value), 1)) : v("", !0),
        i("div", Et, [
          j.value ? (s(), l("span", {
            key: 0,
            class: "c-badge stock-filter-card__badge--color",
            style: J(B.value ? { background: B.value, color: X.value } : void 0)
          }, n(j.value), 5)) : v("", !0),
          e.stock.finish ? (s(), l("span", Ht, n(e.stock.finish), 1)) : v("", !0)
        ])
      ]),
      i("div", Qt, [
        i("h3", Wt, n(ee.value), 1),
        de.value ? (s(), l("div", Zt, n(e.stock.code), 1)) : v("", !0),
        e.stock.description ? (s(), l("div", Jt, n(e.stock.description), 1)) : v("", !0),
        M.value.length ? (s(), l("div", Xt, [
          (s(!0), l(N, null, D(M.value, (S, R) => (s(), l(N, { key: R }, [
            R > 0 ? (s(), l("span", Yt, " · ")) : v("", !0),
            Pe(n(S), 1)
          ], 64))), 128))
        ])) : v("", !0),
        c.value ? (s(), l("div", es, [
          (s(!0), l(N, null, D(e.group.thicknesses, (S) => (s(), l("button", {
            key: S,
            type: "button",
            class: I(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
              "c-loz--solid": !e.selectedThicknesses?.has(S) && !e.filteredOutThicknesses?.has(S),
              active: e.selectedThicknesses?.has(S)
            }]),
            style: J({
              "--loz-custom-color": e.buttonColor,
              "--loz-custom-text": e.buttonTextColor,
              ...!e.selectedThicknesses?.has(S) && !e.filteredOutThicknesses?.has(S) ? { "--loz-bg": e.buttonColor, "--loz-color": e.buttonTextColor, "--loz-border-color": e.buttonColor } : {},
              ...e.selectedThicknesses?.has(S) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
            }),
            disabled: e.filteredOutThicknesses?.has(S),
            onClick: (R) => P(S, R)
          }, n(z(S)), 15, ts))), 128))
        ])) : v("", !0),
        Y.value || e.stock.sample?.enabled ? (s(), l("div", ss, [
          e.stock.sample?.enabled ? (s(), l("span", ls, n(g(f)("stockFilter.samplesAvailable")), 1)) : v("", !0),
          e.stock.extras?.banding ? (s(), l("span", os, n(g(f)("stockFilter.banding")), 1)) : v("", !0),
          e.stock.extras?.finish ? (s(), l("span", ns, n(g(f)("stockFilter.finishOption")), 1)) : v("", !0),
          e.stock.extras?.planing ? (s(), l("span", is, n(g(f)("stockFilter.planing")), 1)) : v("", !0),
          e.stock.extras?.machining ? (s(), l("span", as, n(g(f)("stockFilter.machining")), 1)) : v("", !0)
        ])) : v("", !0)
      ]),
      i("div", cs, [
        c.value && F.value ? (s(), l("div", rs, [
          i("span", us, n(F.value), 1)
        ])) : e.stock.cost ? (s(), l("div", ds, [
          w.value ? (s(), l("span", fs, n(K.value), 1)) : v("", !0),
          i("span", {
            class: I(["price__value", { price__discounted: w.value }])
          }, n(E.value), 3),
          w.value ? (s(), l("span", gs, "-" + n(e.stock.discount) + "%", 1)) : v("", !0)
        ])) : v("", !0),
        i("div", hs, [
          e.stock.sample?.enabled ? (s(), l("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--white",
            onClick: ie(Z, ["stop"])
          }, n($.value), 1)) : v("", !0),
          i("button", {
            type: "button",
            class: I(["c-btn c-btn--sm", { "c-btn--delete": c.value ? b.value : e.isSelected }]),
            disabled: !m.value || _.value,
            onClick: ie(ue, ["stop"])
          }, n((c.value ? b.value : e.isSelected) ? g(f)("stockFilter.remove") : "+ " + g(f)("stockFilter.select")), 11, vs)
        ])
      ])
    ], 42, Nt));
  }
}), ks = /* @__PURE__ */ ce(ms, [["__scopeId", "data-v-6069be6d"]]), bs = { class: "stock-filter-panel" }, ys = { class: "filter-panel-content" }, ps = {
  key: 0,
  class: "filter-summary"
}, _s = { class: "filter-summary__count" }, ws = { class: "filter-groups" }, Cs = { class: "filter-group__header" }, xs = { class: "filter-group__label" }, Ss = { class: "filter-group__content" }, $s = {
  key: 0,
  class: "filter-select"
}, Fs = ["value", "onChange"], Ts = { value: "" }, Ps = ["value"], Os = {
  key: 1,
  class: "multiselect"
}, Ms = ["onClick"], zs = { class: "multiselect__text" }, Vs = {
  key: 0,
  class: "multiselect__dropdown"
}, Is = ["checked", "onChange"], Bs = { class: "multiselect__option-label" }, Rs = {
  key: 0,
  class: "multiselect__option-count"
}, Ls = {
  key: 2,
  class: "filter-range"
}, As = { class: "filter-range__inputs" }, qs = ["value", "min", "max", "step", "onInput"], Us = ["value", "min", "max", "step", "onInput"], Ns = {
  key: 3,
  class: "filter-boolean"
}, Gs = { class: "filter-checkbox" }, js = ["checked", "onChange"], Ds = /* @__PURE__ */ se({
  __name: "StockFilterPanel",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: { type: Function },
    getFieldRange: { type: Function },
    getFilterOptionCounts: { type: Function }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(e, { emit: x }) {
    const t = e, u = x, y = q({}), r = q(null), m = C(() => t.activeFilters.length);
    function _(c) {
      return {
        material: f("woodwork.material"),
        t: f("woodwork.thickness") + " (mm)",
        cost: f("stockFilter.price"),
        color: f("fields.color"),
        l: f("woodwork.length"),
        w: f("woodwork.width"),
        weight: f("fields.weight"),
        name: f("fields.name"),
        category: f("general.category")
      }[c.field] || c.label;
    }
    function w(c) {
      const p = t.getFilterOptionCounts?.(c.field) || /* @__PURE__ */ new Map(), h = p.size > 0, b = (F) => {
        if (!h) return;
        const P = typeof F == "object" && F !== null && "hex" in F ? F.hex : String(F);
        return p.get(P) ?? 0;
      };
      return c.options?.length ? c.options.map((F) => ({
        ...F,
        count: b(F.value)
      })) : t.getUniqueValues(c.field).map((F) => {
        const P = b(F);
        return c.field === "color" && typeof F == "object" && F !== null ? "name" in F && F.name ? {
          label: F.name,
          value: F,
          count: P
        } : {
          label: F.hex || String(F),
          value: F,
          count: P
        } : {
          label: String(F),
          value: F,
          count: P
        };
      });
    }
    function $(c) {
      return t.activeFilters.find((h) => h.field === c)?.value;
    }
    function O(c, p) {
      const h = $(c);
      return Array.isArray(h) ? c === "color" && typeof p == "object" && p !== null && "hex" in p ? h.some((b) => typeof b == "object" && b !== null && "hex" in b && b.hex === p.hex) : h.includes(p) : c === "color" && typeof p == "object" && p !== null && "hex" in p ? typeof h == "object" && h !== null && "hex" in h && h.hex === p.hex : h === p;
    }
    function K(c, p) {
      const b = p.target.value;
      if (b === "")
        u("remove-filter", c);
      else {
        const z = b !== "" && !isNaN(Number(b)) ? Number(b) : b;
        u("apply-filter", c, z, "select");
      }
    }
    function E(c, p, h) {
      const b = h.target, z = $(c) || [], F = Array.isArray(z) ? [...z] : [];
      if (b.checked)
        F.includes(p) || F.push(p);
      else {
        const P = F.indexOf(p);
        P !== -1 && F.splice(P, 1);
      }
      F.length === 0 ? u("remove-filter", c) : u("apply-filter", c, F, "multiselect");
    }
    function B(c, p) {
      if (y.value[c]?.[p] !== void 0)
        return y.value[c][p];
      const h = t.activeFilters.find((b) => b.field === c);
      if (h?.value && typeof h.value == "object")
        return h.value[p];
    }
    function j(c, p, h) {
      const b = h.target, z = b.value ? Number(b.value) : void 0;
      y.value[c] || (y.value[c] = {}), y.value[c][p] = z;
      const F = y.value[c].min, P = y.value[c].max;
      F !== void 0 || P !== void 0 ? u("apply-filter", c, { min: F, max: P }, "range") : u("remove-filter", c);
    }
    function X(c, p) {
      p.target.checked ? u("apply-filter", c, !0, "boolean") : u("remove-filter", c);
    }
    function H() {
      y.value = {}, u("clear-filters");
    }
    function M(c) {
      r.value = r.value === c ? null : c;
    }
    function le(c) {
      const p = $(c.field);
      return !p || Array.isArray(p) && p.length === 0 ? f("stockFilter.all") : Array.isArray(p) ? p.length === 1 ? w(c).find((z) => c.field === "color" && typeof z.value == "object" && z.value !== null && "hex" in z.value ? typeof p[0] == "object" && p[0] !== null && "hex" in p[0] && z.value.hex === p[0].hex : z.value === p[0])?.label || String(p[0]) : f("stockFilter.selected_count", [p.length]) : String(p);
    }
    function Y(c) {
      c.target.closest(".multiselect") || (r.value = null);
    }
    return Ve(() => {
      document.addEventListener("click", Y);
    }), et(() => {
      document.removeEventListener("click", Y);
    }), (c, p) => (s(), l("div", bs, [
      i("div", ys, [
        m.value > 0 ? (s(), l("div", ps, [
          i("span", _s, n(g(f)("stockFilter.active_filters", [m.value])), 1),
          i("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: H
          }, n(g(f)("stockFilter.clear_filters")), 1)
        ])) : v("", !0),
        i("div", ws, [
          (s(!0), l(N, null, D(e.filterConfigs, (h) => (s(), l("div", {
            key: h.field,
            class: "filter-group"
          }, [
            i("div", Cs, [
              i("label", xs, n(_(h)), 1)
            ]),
            i("div", Ss, [
              h.type === "select" ? (s(), l("div", $s, [
                i("select", {
                  value: $(h.field),
                  class: "filter-select-input",
                  onChange: (b) => K(h.field, b)
                }, [
                  i("option", Ts, n(g(f)("stockFilter.all")), 1),
                  (s(!0), l(N, null, D(w(h), (b) => (s(), l("option", {
                    key: b.value,
                    value: b.value
                  }, n(b.label) + n(b.count !== void 0 ? ` (${b.count})` : ""), 9, Ps))), 128))
                ], 40, Fs)
              ])) : h.type === "multiselect" ? (s(), l("div", Os, [
                i("button", {
                  type: "button",
                  class: "multiselect__trigger",
                  onClick: (b) => M(h.field)
                }, [
                  i("span", zs, n(le(h)), 1)
                ], 8, Ms),
                r.value === h.field ? (s(), l("div", Vs, [
                  (s(!0), l(N, null, D(w(h), (b) => (s(), l("label", {
                    key: b.value,
                    class: I(["multiselect__option", { "multiselect__option--zero": b.count === 0 }])
                  }, [
                    i("input", {
                      checked: O(h.field, b.value),
                      type: "checkbox",
                      onChange: (z) => E(h.field, b.value, z)
                    }, null, 40, Is),
                    i("span", Bs, n(b.label), 1),
                    b.count !== void 0 ? (s(), l("span", Rs, "(" + n(b.count) + ")", 1)) : v("", !0)
                  ], 2))), 128))
                ])) : v("", !0)
              ])) : h.type === "range" ? (s(), l("div", Ls, [
                i("div", As, [
                  i("input", {
                    value: B(h.field, "min"),
                    min: h.min,
                    max: h.max,
                    step: h.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (b) => j(h.field, "min", b)
                  }, null, 40, qs),
                  p[0] || (p[0] = i("span", { class: "filter-range__separator" }, "–", -1)),
                  i("input", {
                    value: B(h.field, "max"),
                    min: h.min,
                    max: h.max,
                    step: h.step || 1,
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (b) => j(h.field, "max", b)
                  }, null, 40, Us)
                ])
              ])) : h.type === "boolean" ? (s(), l("div", Ns, [
                i("label", Gs, [
                  i("input", {
                    checked: $(h.field) === !0,
                    type: "checkbox",
                    onChange: (b) => X(h.field, b)
                  }, null, 40, js),
                  i("span", null, n(h.label), 1)
                ])
              ])) : v("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ ce(Ds, [["__scopeId", "data-v-36577581"]]), Es = { class: "stock-filter-results" }, Hs = { class: "results-header" }, Qs = { class: "results-info" }, Ws = {
  key: 0,
  class: "results-count"
}, Zs = {
  key: 1,
  class: "results-count results-count--loading"
}, Js = { class: "results-controls" }, Xs = { class: "c-btn-group display-mode-toggle" }, Ys = ["title"], el = ["title"], tl = {
  key: 0,
  class: "results-loading"
}, sl = {
  key: 1,
  class: "results-empty"
}, ll = { class: "empty-message" }, ol = { class: "th" }, nl = {
  key: 0,
  class: "th"
}, il = {
  key: 1,
  class: "th"
}, al = {
  key: 2,
  class: "th"
}, cl = {
  key: 3,
  class: "th"
}, rl = {
  key: 4,
  class: "th"
}, ul = {
  key: 5,
  class: "th th--center"
}, dl = {
  key: 6,
  class: "th th--center"
}, fl = {
  key: 7,
  class: "th th--center"
}, gl = {
  key: 8,
  class: "th th--right"
}, hl = {
  key: 3,
  class: "results-pagination"
}, vl = ["disabled"], ml = { class: "c-btn-group pagination-pages" }, kl = ["onClick"], bl = ["disabled"], yl = /* @__PURE__ */ se({
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
  setup(e, { emit: x }) {
    const t = e, u = C(() => {
      const r = ["60px", "2fr"];
      return t.visibleColumns.finish && r.push("1fr"), t.visibleColumns.variant && r.push("1fr"), t.visibleColumns.category && r.push("1fr"), t.visibleColumns.grain && r.push("80px"), t.visibleColumns.color && r.push("100px"), t.visibleColumns.thickness && r.push("80px"), t.visibleColumns.quantity && r.push("80px"), t.visibleColumns.weight && r.push("80px"), t.visibleColumns.price && r.push("100px"), r.push("50px"), { "grid-template-columns": r.join(" ") };
    }), y = C(() => {
      const r = [], _ = Math.floor(2.5);
      let w = Math.max(1, t.currentPage - _), $ = Math.min(t.totalPages, w + 5 - 1);
      $ === t.totalPages && (w = Math.max(1, $ - 5 + 1));
      for (let O = w; O <= $; O++)
        r.push(O);
      return r;
    });
    return (r, m) => (s(), l("div", Es, [
      i("div", Hs, [
        i("div", Qs, [
          e.loading ? (s(), l("div", Zs, n(g(f)("actions.loading")) + "...", 1)) : (s(), l("div", Ws, n(e.totalResults) + " " + n(e.totalResults === 1 ? g(f)("stockFilter.result_one") : g(f)("stockFilter.result_other")), 1))
        ]),
        i("div", Js, [
          i("div", Xs, [
            i("button", {
              type: "button",
              class: I(["c-btn c-btn--sm", { selected: e.displayMode === "grid" }]),
              title: g(f)("stockFilter.grid_view"),
              onClick: m[0] || (m[0] = (_) => r.$emit("update:displayMode", "grid"))
            }, [...m[5] || (m[5] = [
              tt('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-2c8f4af9><rect x="1" y="1" width="6" height="6" data-v-2c8f4af9></rect><rect x="9" y="1" width="6" height="6" data-v-2c8f4af9></rect><rect x="1" y="9" width="6" height="6" data-v-2c8f4af9></rect><rect x="9" y="9" width="6" height="6" data-v-2c8f4af9></rect></svg>', 1)
            ])], 10, Ys),
            i("button", {
              type: "button",
              class: I(["c-btn c-btn--sm", { selected: e.displayMode === "list" }]),
              title: g(f)("stockFilter.list_view"),
              onClick: m[1] || (m[1] = (_) => r.$emit("update:displayMode", "list"))
            }, [...m[6] || (m[6] = [
              i("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                i("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                i("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                i("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, el)
          ])
        ])
      ]),
      e.loading ? (s(), l("div", tl, [
        m[7] || (m[7] = i("div", { class: "spinner" }, null, -1)),
        i("p", null, n(g(f)("actions.loading")) + "...", 1)
      ])) : e.totalResults === 0 ? (s(), l("div", sl, [
        i("p", ll, n(g(f)("stockFilter.no_results")), 1),
        e.hasActiveFilters ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: m[2] || (m[2] = (_) => r.$emit("clear-filters"))
        }, n(g(f)("stockFilter.clear_filters")), 1)) : v("", !0)
      ])) : (s(), l(N, { key: 2 }, [
        e.displayMode === "list" ? (s(), l("div", {
          key: 0,
          class: "results-table-header",
          style: J(u.value)
        }, [
          m[8] || (m[8] = i("div", { class: "th" }, null, -1)),
          i("div", ol, n(g(f)("woodwork.material")), 1),
          e.visibleColumns.finish ? (s(), l("div", nl, n(g(f)("fields.finish")), 1)) : v("", !0),
          e.visibleColumns.variant ? (s(), l("div", il, n(g(f)("fields.variant")), 1)) : v("", !0),
          e.visibleColumns.category ? (s(), l("div", al, n(g(f)("fields.category")), 1)) : v("", !0),
          e.visibleColumns.grain ? (s(), l("div", cl, n(g(f)("fields.grain")), 1)) : v("", !0),
          e.visibleColumns.color ? (s(), l("div", rl, n(g(f)("fields.color")), 1)) : v("", !0),
          e.visibleColumns.thickness ? (s(), l("div", ul, n(g(f)("fields.t")), 1)) : v("", !0),
          e.visibleColumns.quantity ? (s(), l("div", dl, n(g(f)("fields.q")), 1)) : v("", !0),
          e.visibleColumns.weight ? (s(), l("div", fl, n(g(f)("fields.weight")), 1)) : v("", !0),
          e.visibleColumns.price ? (s(), l("div", gl, n(g(f)("stockFilter.price")), 1)) : v("", !0),
          m[9] || (m[9] = i("div", { class: "th th--center" }, null, -1))
        ], 4)) : v("", !0),
        i("div", {
          class: I(["results-grid", { "results-grid--list": e.displayMode === "list" }])
        }, [
          st(r.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      e.totalPages > 1 ? (s(), l("div", hl, [
        i("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: e.currentPage === 1,
          onClick: m[3] || (m[3] = (_) => r.$emit("go-to-page", e.currentPage - 1))
        }, n(g(f)("pagination.previous")), 9, vl),
        i("div", ml, [
          (s(!0), l(N, null, D(y.value, (_) => (s(), l("button", {
            key: _,
            type: "button",
            class: I(["c-btn c-btn--sm", { selected: _ === e.currentPage }]),
            onClick: (w) => r.$emit("go-to-page", _)
          }, n(_), 11, kl))), 128))
        ]),
        i("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: e.currentPage === e.totalPages,
          onClick: m[4] || (m[4] = (_) => r.$emit("go-to-page", e.currentPage + 1))
        }, n(g(f)("pagination.next")), 9, bl)
      ])) : v("", !0)
    ]));
  }
}), pl = /* @__PURE__ */ ce(yl, [["__scopeId", "data-v-2c8f4af9"]]), _l = { class: "stock-filter-search" }, wl = { class: "c-field-action search-input-wrapper" }, Cl = ["placeholder"], xl = /* @__PURE__ */ se({
  __name: "StockFilterSearch",
  props: {
    modelValue: {},
    placeholder: { default: "Search materials..." }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: x }) {
    const t = e, u = x, y = q(t.modelValue);
    te(() => t.modelValue, (_) => {
      y.value = _;
    });
    function r() {
      u("update:modelValue", y.value);
    }
    function m() {
      y.value = "", u("update:modelValue", "");
    }
    return (_, w) => (s(), l("div", _l, [
      i("div", wl, [
        lt(i("input", {
          "onUpdate:modelValue": w[0] || (w[0] = ($) => y.value = $),
          type: "text",
          class: "search-input",
          placeholder: e.placeholder,
          onKeydown: ae(r, ["enter"])
        }, null, 40, Cl), [
          [ot, y.value]
        ]),
        y.value ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn c-btn--sm c-btn--delete",
          onClick: m
        }, " × ")) : v("", !0),
        i("button", {
          type: "button",
          class: "c-btn c-btn--sm search-button",
          onClick: r
        }, n(g(f)("actions.search")), 1)
      ])
    ]));
  }
}), Sl = /* @__PURE__ */ ce(xl, [["__scopeId", "data-v-23819b7a"]]), $l = { class: "stock-filter-sort" }, Fl = { class: "c-field-action sort-controls" }, Tl = { class: "sort-label" }, Pl = ["value"], Ol = ["value"], Ml = ["title"], zl = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Vl = {
  key: 0,
  d: "M8 1L15 13H1Z"
}, Il = {
  key: 1,
  d: "M8 15L15 3H1Z"
}, Bl = /* @__PURE__ */ se({
  __name: "StockFilterSort",
  props: {
    sortBy: {},
    sortOrder: {},
    availableFields: { default: () => ["cost", "material", "t", "l", "w"] }
  },
  emits: ["update:sortBy", "update:sortOrder"],
  setup(e, { emit: x }) {
    const t = e, u = x, y = t.availableFields.map((w) => ({
      value: w,
      label: r(w)
    }));
    function r(w) {
      return {
        cost: f("stockFilter.price"),
        material: f("woodwork.material"),
        t: f("woodwork.thickness"),
        l: f("woodwork.length"),
        w: f("woodwork.width"),
        pricePerKg: f("stockFilter.price") + " per kg",
        pricePerM2: f("stockFilter.price") + " per m²",
        weight: f("fields.weight"),
        name: f("fields.name")
      }[w] || w.charAt(0).toUpperCase() + w.slice(1);
    }
    function m(w) {
      const $ = w.target;
      u("update:sortBy", $.value);
    }
    function _() {
      u("update:sortOrder", t.sortOrder === "asc" ? "desc" : "asc");
    }
    return (w, $) => (s(), l("div", $l, [
      i("div", Fl, [
        i("label", Tl, n(g(f)("stockFilter.sort_by")) + ":", 1),
        i("select", {
          value: e.sortBy,
          class: "sort-select",
          onChange: m
        }, [
          (s(!0), l(N, null, D(g(y), (O) => (s(), l("option", {
            key: O.value,
            value: O.value
          }, n(O.label), 9, Ol))), 128))
        ], 40, Pl),
        i("button", {
          type: "button",
          class: I(["sort-order-btn c-btn", { "sort-order-btn--desc": e.sortOrder === "desc" }]),
          title: e.sortOrder === "asc" ? g(f)("options.by_dimensions") : g(f)("options.by_dimensions"),
          onClick: _
        }, [
          (s(), l("svg", zl, [
            e.sortOrder === "asc" ? (s(), l("path", Vl)) : (s(), l("path", Il))
          ]))
        ], 10, Ml)
      ])
    ]));
  }
}), Rl = /* @__PURE__ */ ce(Bl, [["__scopeId", "data-v-1e7feb51"]]), Ll = {
  id: "stock-filter",
  class: "smartcut-content"
}, Al = {
  key: 1,
  class: "stock-filter-search-sort"
}, ql = {
  key: 0,
  class: "selection-bar"
}, Ul = { class: "selection-bar__left" }, Nl = { class: "selection-bar__count" }, Ql = /* @__PURE__ */ se({
  __name: "StockFilter",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    config: {
      type: Object,
      default: () => at()
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
  setup(e, { expose: x, emit: t }) {
    const u = e, y = t, r = q(u.stockOptions), m = q(u.config), _ = q(u.numberFormat);
    te(() => u.stockOptions, (o) => {
      r.value = o;
    }), te(() => u.config, (o) => {
      m.value = o;
    });
    const w = C(() => {
      if (u.serverPagination)
        return { ...u.serverPagination };
    }), {
      activeFilters: $,
      searchQuery: O,
      sortBy: K,
      sortOrder: E,
      displayMode: B,
      currentPage: j,
      filteredStock: X,
      paginatedStock: H,
      selectedStock: M,
      totalPages: le,
      totalItems: Y,
      isLoading: c,
      applyFilter: p,
      removeFilter: h,
      clearFilters: b,
      goToPage: z,
      toggleStockSelection: F,
      isStockSelected: P,
      clearSelection: re,
      selectById: ue,
      createInputStock: Q,
      getUniqueValues: oe,
      getFieldRange: ee,
      getFilterOptionCounts: de
    } = rt({
      stockOptions: r,
      config: m,
      numberFormat: _,
      serverPagination: w.value
    }), { addNotice: W } = ct(), Z = nt("stock-filter-selections", []), k = q(!1), T = q(1), S = q(/* @__PURE__ */ new Map());
    function R(o, d, a) {
      for (const V of o)
        V.customData = {
          ...V.customData || {},
          selectionId: d,
          // Preserve source stock data for calculator extras filtering
          // (InputStock schema strips extras during parse, so we pass via customData)
          ...a?.name && { stockName: a.name },
          ...a?.extras && { stockExtras: a.extras }
        };
      y("stock-added", o);
    }
    const fe = C(() => u.config.itemsPerPage || 20), Ie = C(() => {
      const o = (T.value - 1) * fe.value, d = o + fe.value;
      return M.value.slice(o, d);
    }), _e = C(() => k.value ? Ie.value : H.value), { groupedStock: Be, getFilteredOutThicknesses: Re } = vt(_e, $);
    function Le(o) {
      const d = /* @__PURE__ */ new Set();
      for (const a of o.items)
        P(a) && a.t != null && d.add(a.t);
      return d;
    }
    const Ae = C(() => {
      const o = /* @__PURE__ */ new Map();
      for (const d of _e.value)
        o.set(G(d), d.name || d.material || "");
      return o;
    }), we = C(() => {
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
      }, d = u.serverPagination ? H.value : X.value;
      for (const a of d)
        a.code && (o.code = !0), a.description && (o.description = !0), a.finish && (o.finish = !0), a.variant && (o.variant = !0), a.grain && (o.grain = !0), a.color && (o.color = !0), a.category && (o.category = !0), a.t != null && (o.thickness = !0), a.weight && (o.weight = !0), a.cost && (o.price = !0), a.q != null && !a.unlimitedQuantity && (o.quantity = !0), a.tags?.length && (o.tags = !0);
      return o;
    }), qe = C(() => k.value ? M.value.length : Y.value), Ue = C(() => k.value ? Math.max(1, Math.ceil(M.value.length / fe.value)) : le.value), Ne = C(() => k.value ? T.value : j.value);
    function Ge(o) {
      k.value ? T.value = o : z(o);
    }
    te(k, () => {
      T.value = 1;
    }), te(() => M.value.length, (o) => {
      o === 0 && k.value && (k.value = !1);
      const d = Math.max(1, Math.ceil(o / fe.value));
      T.value > d && (T.value = d), M.value.length > 0 && y("labels-changed", /* @__PURE__ */ new Map());
    });
    const je = C(() => u.loading || c.value), me = q(!1);
    te(M, (o) => {
      me.value || (Z.value = o.map((d) => G(d)));
    }, { deep: !0 });
    async function De(o) {
      if (!u.serverPagination) return null;
      const { apiUrl: d, orgSlug: a, isCustomDomain: V } = u.serverPagination, L = V ? `${d}ecommerce/stock` : `${d}ecommerce/${a}/stock`;
      try {
        const U = new URL(L);
        U.searchParams.set("limit", "1");
        const A = {};
        if (/^[a-f0-9]{24}$/i.test(o))
          A._id = o;
        else {
          const ne = o.split("-");
          if (ne.length >= 4) {
            const Ze = parseFloat(ne.pop()), Je = parseFloat(ne.pop()), Xe = parseFloat(ne.pop()), Ye = ne.join("-");
            A.material = Ye, A.l = Xe, A.w = Je, A.t = Ze;
          } else
            return null;
        }
        U.searchParams.set("filters", JSON.stringify(A));
        const Fe = await fetch(U.toString(), { credentials: "include" });
        if (!Fe.ok) return null;
        const Te = (await Fe.json()).items || [];
        if (Te.length === 0) return null;
        const ye = Te[0];
        return G(ye) !== o ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: o, got: G(ye) }), null) : ye;
      } catch {
        return null;
      }
    }
    async function Ke() {
      if (Z.value.length) {
        me.value = !0;
        try {
          const o = [...Z.value], d = [], a = [];
          for (const L of o) {
            let U = u.stockOptions.find((A) => G(A) === L);
            !U && u.serverPagination && (U = await De(L)), U && (d.push(L), a.push(U));
          }
          const V = o.length - d.length;
          V > 0 && (Z.value = d, W({
            message: V === 1 ? "A previously selected material is no longer available" : `${V} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const L of a) {
            const U = G(L);
            if (!P(L)) {
              F(L);
              const A = Q(L);
              be([A], L), S.value.set(U, [A]), R([A], U, L);
            }
          }
        } finally {
          me.value = !1;
        }
      }
    }
    Ve(async () => {
      if (u.initialProductId) {
        const o = ue(u.initialProductId);
        if (!o) return;
        const d = G(o), a = Q(o);
        be([a], o), S.value.set(d, [a]), R([a], d, o);
        return;
      }
      await Ke(), y("selections-restored", M.value.length);
    });
    const Ce = C(() => u.config.availableFilters.filter((o) => {
      const d = oe(o.field);
      return d.length > 0 && d.some((a) => a != null);
    })), xe = C(() => M.value.length === 0 ? null : M.value[0].db_sawId || null);
    function ke(o) {
      if (!xe.value) return !1;
      const d = o.db_sawId;
      return d ? d !== xe.value : !1;
    }
    function be(o, d) {
      const a = d.name || d.material;
      if (a)
        for (const V of o)
          V.material = a;
    }
    async function ge(o) {
      if (ke(o)) return;
      const d = P(o);
      F(o);
      const a = G(o);
      if (d) {
        const V = S.value.get(a);
        V ? (V.forEach(he), S.value.delete(a)) : he(Q(o));
      } else {
        const V = Q(o);
        be([V], o), S.value.set(a, [V]), R([V], a, o);
      }
    }
    function he(o) {
      y("stock-removed", o);
    }
    async function Ee(o) {
      o.items.every((a) => P(a)) ? await $e(o) : await Se(o);
    }
    async function Se(o) {
      for (const d of o.items)
        ke(d) || P(d) || await ge(d);
    }
    async function $e(o) {
      for (const d of o.items)
        P(d) && await ge(d);
    }
    async function He(o, d) {
      await ge(o);
    }
    function Qe() {
      for (const o of M.value) {
        const d = G(o), a = S.value.get(d);
        a ? a.forEach(he) : he(Q(o));
      }
      S.value.clear(), re(), Z.value = [], k.value = !1;
    }
    function We(o) {
      y("order-sample", o);
    }
    return x({
      applyFilter: p,
      removeFilter: h,
      clearFilters: b,
      clearSelection: re,
      selectedStock: M,
      filteredStock: X,
      getUniqueValues: oe,
      getFieldRange: ee
    }), (o, d) => (s(), l("div", Ll, [
      v("", !0),
      e.config.enableSearch || e.config.sortOptions.length > 0 ? (s(), l("div", Al, [
        e.config.enableSearch ? (s(), ve(Sl, {
          key: 0,
          modelValue: g(O),
          "onUpdate:modelValue": d[0] || (d[0] = (a) => pe(O) ? O.value = a : null)
        }, null, 8, ["modelValue"])) : v("", !0),
        e.config.sortOptions.length > 0 ? (s(), ve(Rl, {
          key: 1,
          "sort-by": g(K),
          "onUpdate:sortBy": d[1] || (d[1] = (a) => pe(K) ? K.value = a : null),
          "sort-order": g(E),
          "onUpdate:sortOrder": d[2] || (d[2] = (a) => pe(E) ? E.value = a : null),
          "available-fields": e.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : v("", !0)
      ])) : v("", !0),
      Ce.value.length > 0 ? (s(), ve(Ks, {
        key: 2,
        "filter-configs": Ce.value,
        "active-filters": g($),
        "get-unique-values": g(oe),
        "get-field-range": g(ee),
        "get-filter-option-counts": g(de),
        onApplyFilter: g(p),
        onRemoveFilter: g(h),
        onClearFilters: g(b)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : v("", !0),
      Oe(pl, {
        "total-results": qe.value,
        "display-mode": g(B),
        loading: je.value,
        "has-active-filters": g($).length > 0,
        "current-page": Ne.value,
        "total-pages": Ue.value,
        "visible-columns": we.value,
        "onUpdate:displayMode": d[3] || (d[3] = (a) => B.value = a),
        onClearFilters: g(b),
        onGoToPage: Ge
      }, {
        default: Me(() => [
          (s(!0), l(N, null, D(g(Be), (a) => (s(), ve(ks, {
            key: a.groupKey,
            stock: a.representative,
            "is-selected": g(P)(a.representative),
            "is-disabled": ke(a.representative),
            "display-label": Ae.value.get(g(G)(a.representative)),
            "format-price": e.formatPrice,
            "button-color": e.colors.button,
            "button-text-color": e.colors.buttonText,
            locale: e.locale,
            "display-mode": g(B),
            "unit-system": e.unitSystem,
            "visible-columns": we.value,
            group: a.items.length > 1 ? a : void 0,
            "selected-thicknesses": a.items.length > 1 ? Le(a) : void 0,
            "filtered-out-thicknesses": a.items.length > 1 ? g(Re)(a) : void 0,
            onToggleSelection: ge,
            onToggleGroup: Ee,
            onSelectGroup: Se,
            onDeselectGroup: $e,
            onToggleThickness: He,
            onOrderSample: We
          }, null, 8, ["stock", "is-selected", "is-disabled", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Oe(it, { name: "selection-bar" }, {
        default: Me(() => [
          u.showSelectionBar && g(M).length > 0 ? (s(), l("div", ql, [
            i("div", Ul, [
              i("span", Nl, n(g(M).length) + " " + n(g(M).length === 1 ? "material" : "materials") + " selected ", 1),
              i("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: d[4] || (d[4] = (a) => k.value = !k.value)
              }, n(k.value ? "Show all" : "Show selected"), 1),
              i("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: Qe
              }, " Clear ")
            ]),
            i("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: J({ backgroundColor: e.colors.button, color: e.colors.buttonText }),
              onClick: d[5] || (d[5] = (a) => y("selection-confirmed", g(M)))
            }, n(g(f)("stockFilter.create_cut_list")), 5)
          ])) : v("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Ql as default
};
