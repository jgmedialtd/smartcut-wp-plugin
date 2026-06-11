import { c as p, d as Fe, w as ve, o as s, b as se, E as xe, e as n, t as o, F as U, C as G, f as m, j as a, g as j, i as Ke, u as h, z as rt, a0 as ct, J as Qe, N as Ae, A as ke, B as te, y as q, H as oe, $ as ut, G as dt, Q as ft, h as vt, r as gt, q as Ge, a1 as mt } from "./vendor-vue-QD0FJS8o.js";
import { S as ht, _ as pt, L as Ye, o as bt, i as kt, M as yt, d as wt, s as Ct, a as $t } from "./EcommerceCalculator-ClNeqZHE.js";
import { t as w } from "./i18n-Dj6izb6_.js";
import { u as _t, g as Y, S as St } from "./Vanilla-P5O8PTu8.js";
import { _ as Ne } from "./Launch-NSW_K3VG.js";
import { C as xt, a as Ft } from "./CatalogueSort-DV45LlTJ.js";
const Tt = [
  "material",
  "name",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "imageUrl",
  "db_sawId"
], Mt = 5e3, De = /* @__PURE__ */ new Map(), Pt = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function Lt(t) {
  if (!t) return t;
  const P = De.get(t);
  if (P !== void 0) return P;
  const e = t.replace(Pt, "");
  return De.size >= Mt && De.clear(), De.set(t, e), e;
}
function Rt(t) {
  const P = [];
  for (const c of Tt) {
    const b = t[c];
    P.push(b != null ? String(b) : "");
  }
  t.variant ? P.push(Lt(t.code ?? "")) : P.push("");
  const e = t.extras;
  if (e)
    for (const c of ht)
      P.push(e[c] ? "1" : "0");
  else
    P.push("0000");
  return P.join("");
}
function Ee(t) {
  return t.length > 0 && t[0].thicknessGroup ? zt(t) : Ot(t);
}
function zt(t) {
  const P = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), c = [];
  for (const d of t) {
    const $ = d.thicknessGroup;
    if (!$) {
      const C = `__solo_${d.db_id || Math.random()}`;
      P.set(C, [d]), c.push(C);
      continue;
    }
    const L = $.groupKey;
    P.has(L) || (P.set(L, []), e.set(L, $), c.push(L)), P.get(L).push(d);
  }
  const b = [];
  for (const d of c) {
    const $ = P.get(d);
    $.sort((C, M) => (C.t ?? 0) - (M.t ?? 0));
    const L = e.get(d);
    b.push({
      groupKey: d,
      items: $,
      thicknesses: L?.thicknesses || $.map((C) => C.t).filter((C) => C != null),
      dimensions: L?.dimensions || Xe($),
      representative: $[0],
      priceRange: L?.priceRange || null,
      weightRange: L?.weightRange || null
    });
  }
  return b;
}
function Xe(t) {
  const P = /* @__PURE__ */ new Set(), e = [];
  for (const c of t) {
    if (typeof c.l != "number" || typeof c.w != "number") continue;
    const b = `${c.l}x${c.w}`;
    P.has(b) || (P.add(b), e.push({ l: c.l, w: c.w }));
  }
  return e;
}
function Ot(t) {
  const P = /* @__PURE__ */ new Map(), e = [];
  for (const b of t) {
    if (b.t == null) {
      const $ = `__solo_${b.db_id || Math.random()}`;
      P.set($, [b]), e.push($);
      continue;
    }
    const d = Rt(b);
    P.has(d) || (P.set(d, []), e.push(d)), P.get(d).push(b);
  }
  const c = [];
  for (const b of e) {
    const d = P.get(b);
    d.sort((k, F) => (k.t ?? 0) - (F.t ?? 0));
    const $ = [...new Set(d.map((k) => k.t).filter((k) => k != null))].sort((k, F) => k - F), L = d.map((k) => k.cost).filter((k) => k != null && k > 0);
    let C = null;
    if (L.length > 1) {
      const k = Math.min(...L), F = Math.max(...L);
      k !== F && (C = { min: k, max: F });
    }
    const M = d.map((k) => k.weight).filter((k) => k != null && k > 0);
    let _ = null;
    if (M.length > 1) {
      const k = Math.min(...M), F = Math.max(...M);
      k !== F && (_ = { min: k, max: F });
    }
    c.push({
      groupKey: b,
      items: d,
      thicknesses: $,
      dimensions: Xe(d),
      representative: d[0],
      priceRange: C,
      weightRange: _
    });
  }
  return c;
}
function We(t, P) {
  const e = P.find((b) => b.field === "t");
  if (!e) return !1;
  const c = e.value;
  return Array.isArray(c) ? !c.some((b) => Number(b) === t) : c != null ? Number(c) !== t : !1;
}
function It(t, P) {
  const e = p(() => Ee(t.value));
  function c(C, M) {
    return C.items.find((_) => _.t === M);
  }
  function b(C, M, _, k) {
    return C.items.find((F) => F.l === M && F.w === _ && F.t === k);
  }
  function d(C, M, _) {
    const k = /* @__PURE__ */ new Set();
    for (const F of C.items)
      F.l === M && F.w === _ && typeof F.t == "number" && k.add(F.t);
    return [...k].sort((F, K) => F - K);
  }
  function $(C, M) {
    const _ = /* @__PURE__ */ new Set(), k = [];
    for (const F of C.items) {
      if (F.t !== M || typeof F.l != "number" || typeof F.w != "number") continue;
      const K = `${F.l}x${F.w}`;
      _.has(K) || (_.add(K), k.push({ l: F.l, w: F.w }));
    }
    return k;
  }
  function L(C) {
    const M = /* @__PURE__ */ new Set();
    for (const _ of C.thicknesses)
      We(_, P.value) && M.add(_);
    return M;
  }
  return {
    groupedStock: e,
    getItemForThickness: c,
    getItemForCombo: b,
    getThicknessesForDimension: d,
    getDimensionsForThickness: $,
    getFilteredOutThicknesses: L,
    isThicknessFilteredOut: We
  };
}
const At = { key: 0 }, Dt = {
  key: 0,
  class: "bim-description"
}, Nt = {
  key: 1,
  class: "bim-empty"
}, Ut = {
  key: 2,
  class: "bim-links"
}, Bt = ["href"], Vt = { key: 1 }, qt = /* @__PURE__ */ Fe({
  __name: "DetailModal",
  props: {
    open: { type: Boolean },
    brandName: {},
    description: {},
    urls: {},
    catalogueKey: {},
    apiUrl: {}
  },
  emits: ["close"],
  setup(t) {
    function P(M) {
      const _ = (M.url || "").toLowerCase(), k = (M.label || "").toLowerCase();
      return /\.pdf(\?|$|#)/.test(_) || k.includes("pdf") ? "file-pdf" : /\/3d|\bviewer\b|visualization/.test(_) || k.includes("3d") || k.includes("viewer") ? "cube" : k.includes("spec") || k.includes("datasheet") ? "file-lines" : "arrow-up-right-from-square";
    }
    const e = t, c = j(!1), b = j(!1), d = j(null), $ = () => typeof e.description == "string" && e.description.trim() !== "" || Array.isArray(e.urls) && e.urls.length > 0;
    let L = "";
    async function C() {
      if (!e.open) return;
      if ($()) {
        d.value = {
          name: e.brandName,
          fullDescription: e.description,
          urls: e.urls || []
        }, c.value = !1, b.value = !1;
        return;
      }
      if (!e.brandName || !e.catalogueKey || !e.apiUrl) {
        b.value = !0;
        return;
      }
      const M = `${e.catalogueKey}::${e.brandName}`;
      if (!(M === L && d.value)) {
        L = M, c.value = !0, b.value = !1, d.value = null;
        try {
          const k = `${e.apiUrl.endsWith("/") ? e.apiUrl : e.apiUrl + "/"}catalogues/${encodeURIComponent(e.catalogueKey)}/categories/${encodeURIComponent(e.brandName)}`, F = await fetch(k, { credentials: "include" });
          if (!F.ok) {
            b.value = !0;
            return;
          }
          d.value = await F.json();
        } catch {
          b.value = !0;
        } finally {
          c.value = !1;
        }
      }
    }
    return ve(
      () => [e.open, e.brandName, e.catalogueKey, e.description, e.urls],
      C,
      { immediate: !0, deep: !0 }
    ), (M, _) => (s(), se(pt, {
      size: "sm",
      compact: !1,
      open: t.open,
      onClosed: _[2] || (_[2] = (k) => M.$emit("close"))
    }, {
      header: xe(() => [
        a("div", null, [
          a("h3", null, o(t.brandName), 1),
          c.value ? (s(), se(Ye, {
            key: 0,
            size: "small",
            label: "Loading…",
            class: "bim-sub"
          })) : m("", !0)
        ]),
        a("button", {
          class: "bim-close",
          "aria-label": "Close",
          onClick: _[0] || (_[0] = (k) => M.$emit("close"))
        }, "×")
      ]),
      footer: xe(() => [
        a("button", {
          class: "c-btn",
          onClick: _[1] || (_[1] = (k) => M.$emit("close"))
        }, "Done")
      ]),
      default: xe(() => [
        !c.value && !b.value && d.value ? (s(), n("div", At, [
          d.value.fullDescription ? (s(), n("p", Dt, o(d.value.fullDescription), 1)) : (s(), n("p", Nt, "No description available for this brand yet.")),
          d.value.urls && d.value.urls.length ? (s(), n("ul", Ut, [
            (s(!0), n(U, null, G(d.value.urls, (k) => (s(), n("li", {
              key: k.url
            }, [
              a("a", {
                href: k.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                Ke(h(rt), {
                  icon: ["fass", P(k)],
                  class: "bim-link-icon"
                }, null, 8, ["icon"]),
                a("span", null, o(k.label), 1)
              ], 8, Bt)
            ]))), 128))
          ])) : m("", !0)
        ])) : !c.value && b.value ? (s(), n("div", Vt, [..._[3] || (_[3] = [
          a("p", { class: "bim-empty" }, "We don't have additional information about this brand yet.", -1)
        ])])) : m("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), Gt = /* @__PURE__ */ Ne(qt, [["__scopeId", "data-v-8c75194a"]]), Kt = ["onKeydown"], Et = { class: "stock-filter-row__thumb" }, jt = ["src", "alt"], Ht = { class: "stock-filter-row__material" }, Jt = { class: "stock-filter-row__name" }, Qt = {
  key: 0,
  class: "stock-filter-row__code"
}, Wt = {
  key: 0,
  class: "stock-filter-row__cell"
}, Yt = {
  key: 1,
  class: "stock-filter-row__cell"
}, Xt = {
  key: 2,
  class: "stock-filter-row__cell"
}, Zt = {
  key: 3,
  class: "stock-filter-row__cell"
}, es = {
  key: 4,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, ts = {
  key: 5,
  class: "stock-filter-row__color"
}, ss = { key: 1 }, ls = {
  key: 6,
  class: "stock-filter-row__thickness"
}, ns = {
  key: 0,
  class: "c-loz-group c-loz-group--tight"
}, os = ["disabled", "onClick"], is = {
  key: 1,
  class: "thickness-badge"
}, as = {
  key: 7,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, rs = {
  key: 8,
  class: "stock-filter-row__weight"
}, cs = {
  key: 9,
  class: "stock-filter-row__price"
}, us = {
  key: 0,
  class: "price__original"
}, ds = {
  key: 1,
  class: "price__badge"
}, fs = { class: "stock-filter-row__action" }, vs = ["disabled"], gs = ["onKeydown"], ms = { class: "stock-filter-card__image-wrapper" }, hs = ["src", "alt"], ps = {
  key: 1,
  class: "c-badge stock-filter-card__badge--brand"
}, bs = {
  key: 2,
  class: "c-badge stock-filter-card__badge--thickness"
}, ks = {
  key: 3,
  class: "c-badge stock-filter-card__badge--thickness"
}, ys = { class: "stock-filter-card__badges-bottom" }, ws = {
  key: 1,
  class: "c-badge stock-filter-card__badge--finish"
}, Cs = {
  key: 2,
  class: "c-badge stock-filter-card__badge--grain"
}, $s = { class: "stock-filter-card__content" }, _s = { class: "stock-filter-card__title" }, Ss = {
  key: 0,
  class: "stock-filter-card__code"
}, xs = {
  key: 1,
  class: "stock-filter-card__specs-inline"
}, Fs = {
  key: 3,
  class: "stock-filter-card__spec-badges"
}, Ts = {
  key: 4,
  class: "stock-filter-card__dimensions"
}, Ms = {
  key: 5,
  class: "c-loz-group"
}, Ps = ["disabled", "onClick"], Ls = {
  key: 6,
  class: "stock-filter-card__extras"
}, Rs = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, zs = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Os = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Is = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, As = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Ds = { class: "stock-filter-card__footer" }, Ns = {
  key: 0,
  class: "stock-filter-card__price"
}, Us = { class: "price__value" }, Bs = {
  key: 1,
  class: "stock-filter-card__price"
}, Vs = {
  key: 0,
  class: "price__original"
}, qs = {
  key: 1,
  class: "price__badge"
}, Gs = { class: "stock-filter-card__actions" }, Ks = ["disabled"], Es = /* @__PURE__ */ Fe({
  __name: "CatalogueCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean, default: !1 },
    disabledReason: { default: "" },
    displayLabel: {},
    formatPrice: {},
    buttonColor: { default: "#118ab2" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" },
    displayMode: { default: "grid" },
    unitSystem: { default: "metric" },
    visibleColumns: { default: () => ({ code: !0, finish: !0, variant: !0, brand: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) },
    group: {},
    selectedThicknesses: {},
    filteredOutThicknesses: {},
    apiUrl: {}
  },
  emits: ["toggle-selection", "order-sample", "toggle-thickness", "toggle-group", "select-group", "deselect-group"],
  setup(t, { emit: P }) {
    const e = t, c = P, b = j(!1), d = j(!1), $ = j(!1), L = p(() => e.stock._catalogueKey), C = p(() => bt(e.stock)), M = p(() => C.value.brand || C.value.variant || C.value.material || ""), _ = p(() => e.stock._hasDetailContent === !0), k = p(() => (e.stock.description || "").trim() || void 0), F = p(() => {
      const f = e.stock.urls;
      return Array.isArray(f) ? f.filter((x) => x && typeof x.url == "string" && x.url.trim()).map((x) => ({ label: String(x.label || x.url), url: String(x.url) })) : [];
    }), K = p(() => !!k.value || F.value.length > 0), ue = p(() => e.stock._source === "library"), ie = p(() => O.value ? !1 : K.value || ue.value && _.value && !!M.value && !!L.value && !!e.apiUrl), X = p(() => e.stock.available !== !1), z = p(() => e.isDisabled), E = p(() => e.stock.discount && e.stock.discount > 0), ge = p(() => {
      const f = e.stock.sample;
      return f?.enabled ? f.price && f.price > 0 ? `${w("stockFilter.orderSample")} (${e.formatPrice(f.price, e.locale)})` : w("stockFilter.freeSample") : "";
    }), de = p(() => e.stock.cost ? E.value ? e.stock.cost * (1 - e.stock.discount / 100) : e.stock.cost : 0), ae = p(() => e.stock.cost ? e.formatPrice(e.stock.cost, e.locale) : "N/A"), re = p(() => e.stock.cost ? e.formatPrice(de.value, e.locale) : "N/A"), H = p(() => {
      const f = e.stock.color;
      return f && typeof f == "object" && "hex" in f && f.hex ? String(f.hex) : e.stock.colorHex || "";
    }), v = p(() => {
      const f = e.stock.color;
      return typeof f == "string" ? f : f && typeof f == "object" && "name" in f ? String(f.name || "") : "";
    }), u = p(() => (!e.stock.imageUrl || b.value) && !!H.value), g = p(() => u.value ? { background: H.value } : void 0), S = p(() => H.value ? kt(H.value) : "#fff"), R = p(() => {
      if (!e.stock.grain) return "";
      switch (e.stock.grain) {
        case "l":
          return w("fields.grain.length");
        case "w":
          return w("fields.grain.width");
        default:
          return "";
      }
    }), y = p(() => {
      const f = [], x = /* @__PURE__ */ new Set(), J = (ne) => {
        if (ne == null) return;
        const ee = String(ne).trim();
        if (!ee) return;
        const _e = ee.toLowerCase();
        x.has(_e) || (x.add(_e), f.push(ee));
      }, T = fe.value.toLowerCase(), W = (ne) => {
        if (ne == null) return;
        const ee = String(ne).trim();
        !ee || T.includes(ee.toLowerCase()) || J(ee);
      };
      W(C.value.variant);
      const Le = O.value && e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : e.stock.weight ? `${e.stock.weight}kg` : "";
      return Le && W(Le), f;
    }), A = p(() => {
      const f = [], x = (C.value.material || "").trim(), J = (e.stock.category || "").trim();
      return x && f.push({ kind: "material", label: x }), J && J.toLowerCase() !== x.toLowerCase() && f.push({ kind: "category", label: J }), f;
    });
    function ye(f, x) {
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(1)}" × ${(x / 25.4).toFixed(1)}"` : `${f} × ${x}`;
    }
    const Te = p(() => (e.group?.dimensions?.length ? e.group.dimensions : e.stock.l && e.stock.w ? [{ l: e.stock.l, w: e.stock.w }] : []).map((x) => ye(x.l, x.w))), ce = p(() => e.stock.t == null ? "" : e.unitSystem === "imperial" ? `${(e.stock.t / 25.4).toFixed(2)}"` : `${e.stock.t} mm`), N = p(() => {
      const f = e.stock.extras;
      return f ? !!(f.banding || f.finish || f.planing || f.machining) : !1;
    }), O = p(() => e.group && e.group.items.length > 1), Q = p(() => {
      if (!O.value || !e.selectedThicknesses) return !1;
      const f = e.selectedThicknesses.size;
      return f > 0 && f < e.group.thicknesses.length;
    }), me = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size === e.group.thicknesses.length), Z = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size > 0);
    function he(f) {
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(2)}"` : `${f}mm`;
    }
    const pe = p(() => e.group?.priceRange ? `${e.formatPrice(e.group.priceRange.min, e.locale)} – ${e.formatPrice(e.group.priceRange.max, e.locale)}` : null), be = p(() => e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : null);
    function we(f, x) {
      if (x.stopPropagation(), e.filteredOutThicknesses?.has(f)) return;
      const J = e.group?.items.find((T) => T.t === f);
      J && c("toggle-thickness", J, f);
    }
    function Ue() {
      !X.value || z.value || (O.value && e.group ? c("toggle-group", e.group) : c("toggle-selection", e.stock));
    }
    function Me() {
      !X.value || z.value || (O.value && e.group ? Z.value ? c("deselect-group", e.group) : c("select-group", e.group) : c("toggle-selection", e.stock));
    }
    const Ce = p(() => {
      if (!e.group || e.group.thicknesses.length < 2) return "";
      const f = e.group.thicknesses[0], x = e.group.thicknesses[e.group.thicknesses.length - 1];
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(2)}" – ${(x / 25.4).toFixed(2)}"` : `${f} – ${x}mm`;
    }), Be = p(() => {
      const f = ["60px", "2fr"];
      return e.visibleColumns.finish && f.push("1fr"), e.visibleColumns.brand && f.push("1fr"), e.visibleColumns.variant && f.push("1fr"), e.visibleColumns.category && f.push("1fr"), e.visibleColumns.grain && f.push("80px"), e.visibleColumns.color && f.push("100px"), e.visibleColumns.thickness && f.push(O.value ? "minmax(120px, auto)" : "80px"), e.visibleColumns.quantity && f.push("80px"), e.visibleColumns.weight && f.push("80px"), e.visibleColumns.price && f.push("100px"), f.push("50px"), { "grid-template-columns": f.join(" ") };
    }), fe = p(() => e.displayLabel ? e.displayLabel : C.value.productLabel && C.value.productLabel !== "(unnamed)" ? C.value.productLabel : `${e.stock.material} ${e.stock.l}×${e.stock.w}`), $e = p(() => C.value.code ? C.value.code.toLowerCase() !== fe.value.toLowerCase() : !1);
    function le() {
      Ue();
    }
    function Pe() {
      c("order-sample", e.stock);
    }
    return (f, x) => {
      const J = ct("tooltip");
      return s(), n(U, null, [
        t.displayMode === "list" ? Qe((s(), n("article", {
          key: 0,
          class: q(["stock-filter-row", {
            "stock-filter-row--selected": O.value ? me.value : t.isSelected,
            "stock-filter-row--partial": Q.value,
            "stock-filter-row--unavailable": !X.value,
            "stock-filter-row--disabled": z.value
          }]),
          style: te(Be.value),
          role: "button",
          tabindex: "0",
          onClick: le,
          onKeydown: [
            Ae(le, ["enter"]),
            Ae(ke(le, ["prevent"]), ["space"])
          ]
        }, [
          a("div", Et, [
            a("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: te(g.value)
            }, null, 4),
            t.stock.imageUrl && !b.value ? (s(), n("img", {
              key: 0,
              class: q(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": d.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: x[0] || (x[0] = (T) => d.value = !0),
              onError: x[1] || (x[1] = (T) => b.value = !0)
            }, null, 42, jt)) : m("", !0)
          ]),
          a("div", Ht, [
            a("h3", Jt, o(fe.value), 1),
            $e.value ? (s(), n("span", Qt, o(C.value.code), 1)) : m("", !0)
          ]),
          t.visibleColumns.finish ? (s(), n("div", Wt, o(t.stock.finish || ""), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", Yt, o(t.stock.brand || ""), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Xt, o(t.stock.variant || ""), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", Zt, o(t.stock.category || ""), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", es, o(R.value), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", ts, [
            H.value ? (s(), n("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: te({ backgroundColor: H.value })
            }, null, 4)) : m("", !0),
            v.value ? (s(), n("span", ss, o(v.value), 1)) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", ls, [
            O.value ? (s(), n("div", ns, [
              (s(!0), n(U, null, G(t.group.thicknesses, (T) => (s(), n("button", {
                key: T,
                type: "button",
                class: q(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T),
                  active: t.selectedThicknesses?.has(T)
                }]),
                style: te({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(T) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(T),
                onClick: (W) => we(T, W)
              }, o(he(T)), 15, os))), 128))
            ])) : t.stock.t != null ? (s(), n("span", is, [
              oe(o(t.stock.t), 1),
              x[6] || (x[6] = a("small", null, "mm", -1))
            ])) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", as, o(t.stock.unlimitedQuantity ? h(w)("stockFilter.inStock") : t.stock.q), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", rs, o(be.value || (t.stock.weight ? `${t.stock.weight}kg` : "")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", cs, [
            E.value ? (s(), n("span", us, o(ae.value), 1)) : m("", !0),
            a("span", {
              class: q(["price__value", { price__discounted: E.value }])
            }, o(re.value), 3),
            E.value ? (s(), n("span", ds, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
          ])) : m("", !0),
          a("div", fs, [
            a("button", {
              type: "button",
              class: q(["c-btn", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
              disabled: !X.value || z.value,
              onClick: ke(Me, ["stop"])
            }, o((O.value ? Z.value : t.isSelected) ? "−" : "+"), 11, vs)
          ])
        ], 46, Kt)), [
          [J, z.value && t.disabledReason ? t.disabledReason : ""]
        ]) : Qe((s(), n("article", {
          key: 1,
          class: q(["stock-filter-card", {
            "stock-filter-card--selected": O.value ? me.value : t.isSelected,
            "stock-filter-card--partial": Q.value,
            "stock-filter-card--unavailable": !X.value,
            "stock-filter-card--disabled": z.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: le,
          onKeydown: [
            Ae(le, ["enter"]),
            Ae(ke(le, ["prevent"]), ["space"])
          ]
        }, [
          a("div", ms, [
            a("div", {
              class: "stock-filter-card__image-placeholder",
              style: te(g.value)
            }, null, 4),
            t.stock.imageUrl && !b.value ? (s(), n("img", {
              key: 0,
              class: q(["stock-filter-card__image", { "stock-filter-card__image--loaded": d.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: x[2] || (x[2] = (T) => d.value = !0),
              onError: x[3] || (x[3] = (T) => b.value = !0)
            }, null, 42, hs)) : m("", !0),
            C.value.brand && !fe.value.toLowerCase().includes(C.value.brand.toLowerCase()) ? (s(), n("span", ps, o(C.value.brand), 1)) : m("", !0),
            O.value && Ce.value ? (s(), n("span", bs, o(Ce.value), 1)) : !O.value && t.stock.t != null ? (s(), n("span", ks, o(ce.value), 1)) : m("", !0),
            u.value && v.value ? (s(), n("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: te({ color: S.value })
            }, o(v.value), 5)) : m("", !0),
            a("div", ys, [
              v.value && !u.value ? (s(), n("span", {
                key: 0,
                class: "c-badge stock-filter-card__badge--color",
                style: te(H.value ? { background: H.value, color: S.value } : void 0)
              }, o(v.value), 5)) : m("", !0),
              t.stock.finish ? (s(), n("span", ws, o(t.stock.finish), 1)) : m("", !0),
              R.value ? (s(), n("span", Cs, "Grain: " + o(R.value), 1)) : m("", !0)
            ])
          ]),
          a("div", $s, [
            a("h3", _s, o(fe.value), 1),
            $e.value ? (s(), n("div", Ss, o(t.stock.code), 1)) : m("", !0),
            y.value.length ? (s(), n("div", xs, [
              (s(!0), n(U, null, G(y.value, (T, W) => (s(), n("span", {
                key: W,
                class: "spec-item"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            ie.value ? (s(), n("button", {
              key: 2,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: x[4] || (x[4] = ke((T) => $.value = !0, ["stop"]))
            }, o(h(w)("stockFilter.details")), 1)) : m("", !0),
            A.value.length ? (s(), n("div", Fs, [
              (s(!0), n(U, null, G(A.value, (T) => (s(), n("span", {
                key: T.kind,
                class: q(["c-badge", `spec-badge--${T.kind}`])
              }, o(T.label), 3))), 128))
            ])) : m("", !0),
            Te.value.length ? (s(), n("div", Ts, [
              (s(!0), n(U, null, G(Te.value, (T) => (s(), n("span", {
                key: T,
                class: "c-badge stock-filter-card__dim"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            O.value ? (s(), n("div", Ms, [
              (s(!0), n(U, null, G(t.group.thicknesses, (T) => (s(), n("button", {
                key: T,
                type: "button",
                class: q(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T),
                  active: t.selectedThicknesses?.has(T)
                }]),
                style: te({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(T) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(T),
                onClick: (W) => we(T, W)
              }, o(he(T)), 15, Ps))), 128))
            ])) : m("", !0),
            N.value || t.stock.sample?.enabled ? (s(), n("div", Ls, [
              t.stock.sample?.enabled ? (s(), n("span", Rs, o(h(w)("stockFilter.samplesAvailable")), 1)) : m("", !0),
              t.stock.extras?.banding ? (s(), n("span", zs, o(h(w)("stockFilter.banding")), 1)) : m("", !0),
              t.stock.extras?.finish ? (s(), n("span", Os, o(h(w)("stockFilter.finishOption")), 1)) : m("", !0),
              t.stock.extras?.planing ? (s(), n("span", Is, o(h(w)("stockFilter.planing")), 1)) : m("", !0),
              t.stock.extras?.machining ? (s(), n("span", As, o(h(w)("stockFilter.machining")), 1)) : m("", !0)
            ])) : m("", !0)
          ]),
          a("div", Ds, [
            O.value && pe.value ? (s(), n("div", Ns, [
              a("span", Us, o(pe.value), 1)
            ])) : t.stock.cost ? (s(), n("div", Bs, [
              E.value ? (s(), n("span", Vs, o(ae.value), 1)) : m("", !0),
              a("span", {
                class: q(["price__value", { price__discounted: E.value }])
              }, o(re.value), 3),
              E.value ? (s(), n("span", qs, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
            ])) : m("", !0),
            a("div", Gs, [
              t.stock.sample?.enabled ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: ke(Pe, ["stop"])
              }, o(ge.value), 1)) : m("", !0),
              a("button", {
                type: "button",
                class: q(["c-btn c-btn--sm", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
                disabled: !X.value || z.value,
                onClick: ke(Me, ["stop"])
              }, o((O.value ? Z.value : t.isSelected) ? h(w)("stockFilter.remove") : h(w)("stockFilter.select")), 11, Ks)
            ])
          ])
        ], 42, gs)), [
          [J, z.value && t.disabledReason ? t.disabledReason : ""]
        ]),
        ie.value ? (s(), se(Gt, {
          key: 2,
          open: $.value,
          "brand-name": M.value,
          description: k.value,
          urls: F.value,
          "catalogue-key": L.value,
          "api-url": t.apiUrl,
          onClose: x[5] || (x[5] = (T) => $.value = !1)
        }, null, 8, ["open", "brand-name", "description", "urls", "catalogue-key", "api-url"])) : m("", !0)
      ], 64);
    };
  }
}), js = /* @__PURE__ */ Ne(Es, [["__scopeId", "data-v-3648dcb8"]]), Hs = { class: "stock-filter-panel" }, Js = { class: "filter-panel-content" }, Qs = {
  key: 0,
  class: "filter-summary"
}, Ws = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, Ys = ["title"], Xs = { class: "filter-summary__chip-field" }, Zs = { class: "filter-summary__chip-value" }, el = { class: "filter-summary__chip-field" }, tl = { class: "filter-summary__chip-value" }, sl = ["aria-label", "onClick"], ll = { class: "filter-groups" }, nl = { class: "filter-group__header" }, ol = { class: "filter-group__label" }, il = { class: "filter-group__content" }, al = {
  key: 0,
  class: "filter-select"
}, rl = ["value", "onChange"], cl = { value: "" }, ul = ["value"], dl = {
  key: 2,
  class: "filter-range"
}, fl = { class: "filter-range__inputs" }, vl = ["value", "min", "max", "step", "onInput"], gl = ["value", "min", "max", "step", "onInput"], ml = {
  key: 3,
  class: "filter-boolean"
}, hl = { class: "filter-checkbox" }, pl = ["checked", "onChange"], bl = /* @__PURE__ */ Fe({
  __name: "CatalogueFilters",
  props: {
    filterConfigs: {},
    activeFilters: {},
    getUniqueValues: {},
    getFieldRange: {},
    getFilterOptionCounts: {},
    preAppliedChips: { default: () => [] }
  },
  emits: ["apply-filter", "remove-filter", "clear-filters"],
  setup(t, { emit: P }) {
    const e = t, c = P, b = j({}), d = p(() => e.activeFilters.length), $ = p(() => {
      const v = /* @__PURE__ */ new Set();
      for (const u of e.preAppliedChips)
        u.field && v.add(u.field);
      return v;
    }), L = p(
      () => e.filterConfigs.filter((v) => !$.value.has(v.field))
    );
    function C(v, u) {
      const g = F(v), S = _(u), R = g.find((y) => _(y.value) === S);
      return R ? R.label : String(u);
    }
    const M = p(() => {
      const v = [];
      for (const u of e.activeFilters) {
        const g = e.filterConfigs.find((y) => y.field === u.field);
        if (!g) continue;
        const S = k(g);
        if (u.type === "multiselect" && Array.isArray(u.value)) {
          for (const y of u.value)
            v.push({
              key: `${u.field}:${_(y)}`,
              fieldLabel: S,
              valueLabel: C(g, y),
              remove: () => {
                const A = u.value.filter((ye) => _(ye) !== _(y));
                A.length === 0 ? c("remove-filter", u.field) : c("apply-filter", u.field, A, "multiselect");
              }
            });
          continue;
        }
        let R;
        if (u.type === "range" && u.value && typeof u.value == "object") {
          const { min: y, max: A } = u.value;
          y !== void 0 && A !== void 0 ? R = `${y} – ${A}` : y !== void 0 ? R = `≥ ${y}` : A !== void 0 ? R = `≤ ${A}` : R = "";
        } else u.type === "boolean" ? R = g.label : R = C(g, u.value);
        v.push({
          key: u.field,
          fieldLabel: S,
          valueLabel: R,
          remove: () => {
            u.type === "range" && (b.value[u.field] = {}), c("remove-filter", u.field);
          }
        });
      }
      return v;
    });
    function _(v) {
      return typeof v == "object" && v !== null && "hex" in v ? String(v.hex) : String(v);
    }
    function k(v) {
      return {
        material: w("woodwork.material"),
        t: w("woodwork.thickness") + " (mm)",
        cost: w("stockFilter.price"),
        color: w("fields.color"),
        l: w("woodwork.length"),
        w: w("woodwork.width"),
        weight: w("fields.weight"),
        name: w("fields.name"),
        category: w("general.category"),
        brand: w("fields.brand"),
        variant: w("fields.variant"),
        finish: w("fields.finish")
      }[v.field] || v.label;
    }
    function F(v) {
      const u = e.getFilterOptionCounts?.(v.field) || /* @__PURE__ */ new Map(), g = u.size > 0, S = (y) => {
        if (!g) return;
        const A = typeof y == "object" && y !== null && "hex" in y ? y.hex : String(y);
        return u.get(A) ?? 0;
      };
      return v.options?.length ? v.options.map((y) => ({
        ...y,
        count: S(y.value)
      })) : e.getUniqueValues(v.field).map((y) => {
        const A = S(y);
        return v.field === "color" && typeof y == "object" && y !== null ? "name" in y && y.name ? {
          label: y.name,
          value: y,
          count: A
        } : {
          label: y.hex || String(y),
          value: y,
          count: A
        } : {
          label: String(y),
          value: y,
          count: A
        };
      });
    }
    function K(v) {
      return e.activeFilters.find((g) => g.field === v)?.value;
    }
    function ue(v, u) {
      const S = u.target.value;
      if (S === "")
        c("remove-filter", v);
      else {
        const R = S !== "" && !isNaN(Number(S)) ? Number(S) : S;
        c("apply-filter", v, R, "select");
      }
    }
    function ie(v) {
      return F(v).map((u) => ({
        value: _(u.value),
        label: u.count !== void 0 ? `${u.label} (${u.count})` : u.label,
        hidden: u.count === 0
      }));
    }
    function X(v) {
      const u = K(v);
      return Array.isArray(u) ? u.map(_) : [];
    }
    function z(v, u) {
      if (u.length === 0) {
        c("remove-filter", v);
        return;
      }
      const g = e.getUniqueValues(v), S = new Map(g.map((y) => [_(y), y])), R = u.map((y) => S.has(y) ? S.get(y) : y !== "" && !isNaN(Number(y)) ? Number(y) : y);
      c("apply-filter", v, R, "multiselect");
    }
    function E(v) {
      const u = e.getFieldRange(v);
      return u ? { min: Math.floor(u.min), max: Math.ceil(u.max) } : { min: void 0, max: void 0 };
    }
    function ge(v) {
      const u = e.getFieldRange(v);
      if (!u) return 1;
      const g = u.max - u.min;
      if (g <= 0) return 1;
      const S = g / 100, R = Math.pow(10, Math.floor(Math.log10(S)));
      return Math.max(R, 0.01);
    }
    function de(v, u) {
      if (b.value[v]?.[u] !== void 0)
        return b.value[v][u];
      const g = e.activeFilters.find((S) => S.field === v);
      if (g?.value && typeof g.value == "object")
        return g.value[u];
    }
    function ae(v, u, g) {
      const S = g.target, R = S.value ? Number(S.value) : void 0;
      b.value[v] || (b.value[v] = {}), b.value[v][u] = R;
      const y = b.value[v].min, A = b.value[v].max;
      y !== void 0 || A !== void 0 ? c("apply-filter", v, { min: y, max: A }, "range") : c("remove-filter", v);
    }
    function re(v, u) {
      u.target.checked ? c("apply-filter", v, !0, "boolean") : c("remove-filter", v);
    }
    function H() {
      b.value = {}, c("clear-filters");
    }
    return (v, u) => (s(), n("div", Hs, [
      a("div", Js, [
        d.value > 0 || t.preAppliedChips.length > 0 ? (s(), n("div", Qs, [
          a("div", Ws, [
            (s(!0), n(U, null, G(t.preAppliedChips, (g) => (s(), n("span", {
              key: `pre:${g.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: g.title || "Pre-applied by the product spec"
            }, [
              a("span", Xs, o(g.fieldLabel) + ":", 1),
              a("span", Zs, o(g.valueLabel), 1)
            ], 8, Ys))), 128)),
            (s(!0), n(U, null, G(M.value, (g) => (s(), n("span", {
              key: g.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              a("span", el, o(g.fieldLabel) + ":", 1),
              a("span", tl, o(g.valueLabel), 1),
              a("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": h(w)("stockFilter.clear_filters"),
                onClick: g.remove
              }, "×", 8, sl)
            ]))), 128))
          ]),
          d.value > 0 ? (s(), n("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: H
          }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
        ])) : m("", !0),
        a("div", ll, [
          (s(!0), n(U, null, G(L.value, (g) => (s(), n("div", {
            key: g.field,
            class: "filter-group"
          }, [
            a("div", nl, [
              a("label", ol, o(k(g)), 1)
            ]),
            a("div", il, [
              g.type === "select" ? (s(), n("div", al, [
                a("select", {
                  value: K(g.field),
                  class: "filter-select-input",
                  onChange: (S) => ue(g.field, S)
                }, [
                  a("option", cl, o(h(w)("stockFilter.all")), 1),
                  (s(!0), n(U, null, G(F(g), (S) => (s(), n("option", {
                    key: S.value,
                    value: S.value
                  }, o(S.label) + o(S.count !== void 0 ? ` (${S.count})` : ""), 9, ul))), 128))
                ], 40, rl)
              ])) : g.type === "multiselect" ? (s(), se(yt, {
                key: 1,
                id: `filter-${g.field}`,
                value: X(g.field),
                options: ie(g),
                placeholder: h(w)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (S) => z(g.field, S)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : g.type === "range" ? (s(), n("div", dl, [
                a("div", fl, [
                  a("input", {
                    value: de(g.field, "min"),
                    min: E(g.field).min,
                    max: E(g.field).max,
                    step: ge(g.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (S) => ae(g.field, "min", S)
                  }, null, 40, vl),
                  u[0] || (u[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                  a("input", {
                    value: de(g.field, "max"),
                    min: E(g.field).min,
                    max: E(g.field).max,
                    step: ge(g.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (S) => ae(g.field, "max", S)
                  }, null, 40, gl)
                ])
              ])) : g.type === "boolean" ? (s(), n("div", ml, [
                a("label", hl, [
                  a("input", {
                    checked: K(g.field) === !0,
                    type: "checkbox",
                    onChange: (S) => re(g.field, S)
                  }, null, 40, pl),
                  a("span", null, o(g.label), 1)
                ])
              ])) : m("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), kl = /* @__PURE__ */ Ne(bl, [["__scopeId", "data-v-9e7cab3a"]]), yl = { class: "stock-filter-results" }, wl = { class: "results-header" }, Cl = { class: "results-info" }, $l = {
  key: 0,
  class: "results-count"
}, _l = {
  key: 1,
  class: "results-count results-count--loading"
}, Sl = { class: "results-controls" }, xl = { class: "c-btn-group display-mode-toggle" }, Fl = ["title"], Tl = ["title"], Ml = {
  key: 1,
  class: "results-empty"
}, Pl = { class: "empty-message" }, Ll = { class: "th" }, Rl = {
  key: 0,
  class: "th"
}, zl = {
  key: 1,
  class: "th"
}, Ol = {
  key: 2,
  class: "th"
}, Il = {
  key: 3,
  class: "th"
}, Al = {
  key: 4,
  class: "th"
}, Dl = {
  key: 5,
  class: "th"
}, Nl = {
  key: 6,
  class: "th th--center"
}, Ul = {
  key: 7,
  class: "th th--center"
}, Bl = {
  key: 8,
  class: "th th--center"
}, Vl = {
  key: 9,
  class: "th th--right"
}, ql = {
  key: 3,
  class: "results-pagination"
}, Gl = ["disabled"], Kl = { class: "c-btn-group pagination-pages" }, El = ["onClick"], jl = ["disabled"], Hl = /* @__PURE__ */ Fe({
  __name: "CatalogueResults",
  props: {
    totalResults: {},
    displayMode: {},
    loading: { type: Boolean, default: !1 },
    hasActiveFilters: { type: Boolean, default: !1 },
    currentPage: { default: 1 },
    totalPages: { default: 1 },
    visibleColumns: { default: () => ({ code: !0, finish: !0, variant: !0, brand: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) }
  },
  emits: ["update:displayMode", "clear-filters", "go-to-page"],
  setup(t, { emit: P }) {
    const e = t, c = p(() => {
      const d = ["60px", "2fr"];
      return e.visibleColumns.finish && d.push("1fr"), e.visibleColumns.brand && d.push("1fr"), e.visibleColumns.variant && d.push("1fr"), e.visibleColumns.category && d.push("1fr"), e.visibleColumns.grain && d.push("80px"), e.visibleColumns.color && d.push("100px"), e.visibleColumns.thickness && d.push("80px"), e.visibleColumns.quantity && d.push("80px"), e.visibleColumns.weight && d.push("80px"), e.visibleColumns.price && d.push("100px"), d.push("50px"), { "grid-template-columns": d.join(" ") };
    }), b = p(() => {
      const d = [], L = Math.floor(2.5);
      let C = Math.max(1, e.currentPage - L), M = Math.min(e.totalPages, C + 5 - 1);
      M === e.totalPages && (C = Math.max(1, M - 5 + 1));
      for (let _ = C; _ <= M; _++)
        d.push(_);
      return d;
    });
    return (d, $) => (s(), n("div", yl, [
      a("header", wl, [
        a("div", Cl, [
          t.loading ? (s(), n("div", _l, o(h(w)("actions.loading")) + "...", 1)) : (s(), n("div", $l, o(t.totalResults) + " " + o(t.totalResults === 1 ? h(w)("stockFilter.result_one") : h(w)("stockFilter.result_other")), 1))
        ]),
        a("div", Sl, [
          a("div", xl, [
            a("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: h(w)("stockFilter.grid_view"),
              onClick: $[0] || ($[0] = (L) => d.$emit("update:displayMode", "grid"))
            }, [...$[5] || ($[5] = [
              ut('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-26b6e10c><rect x="1" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="1" y="9" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="9" width="6" height="6" data-v-26b6e10c></rect></svg>', 1)
            ])], 10, Fl),
            a("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: t.displayMode === "list" }]),
              title: h(w)("stockFilter.list_view"),
              onClick: $[1] || ($[1] = (L) => d.$emit("update:displayMode", "list"))
            }, [...$[6] || ($[6] = [
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
            ])], 10, Tl)
          ])
        ])
      ]),
      t.loading ? (s(), se(Ye, {
        key: 0,
        size: "medium",
        label: `${h(w)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : t.totalResults === 0 ? (s(), n("div", Ml, [
        a("p", Pl, o(h(w)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (s(), n("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: $[2] || ($[2] = (L) => d.$emit("clear-filters"))
        }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
      ])) : (s(), n(U, { key: 2 }, [
        t.displayMode === "list" ? (s(), n("div", {
          key: 0,
          class: "results-table-header",
          style: te(c.value)
        }, [
          $[7] || ($[7] = a("div", { class: "th" }, null, -1)),
          a("div", Ll, o(h(w)("woodwork.material")), 1),
          t.visibleColumns.finish ? (s(), n("div", Rl, o(h(w)("fields.finish")), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", zl, o(h(w)("fields.brand")), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Ol, o(h(w)("fields.variant")), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", Il, o(h(w)("fields.category")), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", Al, o(h(w)("fields.grain")), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", Dl, o(h(w)("fields.color")), 1)) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", Nl, o(h(w)("fields.t")), 1)) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", Ul, o(h(w)("fields.q")), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", Bl, o(h(w)("fields.weight")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", Vl, o(h(w)("stockFilter.price")), 1)) : m("", !0),
          $[8] || ($[8] = a("div", { class: "th th--center" }, null, -1))
        ], 4)) : m("", !0),
        a("div", {
          class: q(["results-grid", { "results-grid--list": t.displayMode === "list" }])
        }, [
          dt(d.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      t.totalPages > 1 ? (s(), n("div", ql, [
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === 1,
          onClick: $[3] || ($[3] = (L) => d.$emit("go-to-page", t.currentPage - 1))
        }, o(h(w)("pagination.previous")), 9, Gl),
        a("div", Kl, [
          (s(!0), n(U, null, G(b.value, (L) => (s(), n("button", {
            key: L,
            type: "button",
            class: q(["c-btn c-btn--sm", { selected: L === t.currentPage }]),
            onClick: (C) => d.$emit("go-to-page", L)
          }, o(L), 11, El))), 128))
        ]),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === t.totalPages,
          onClick: $[4] || ($[4] = (L) => d.$emit("go-to-page", t.currentPage + 1))
        }, o(h(w)("pagination.next")), 9, jl)
      ])) : m("", !0)
    ]));
  }
}), Jl = /* @__PURE__ */ Ne(Hl, [["__scopeId", "data-v-26b6e10c"]]), Ql = {
  id: "stock-filter",
  class: "smartcut-content",
  "aria-label": "Material catalogue"
}, Wl = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Yl = { style: { "margin-bottom": "6px", color: "#aaa" } }, Xl = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, Zl = { style: { "margin-bottom": "6px", color: "#aaa" } }, en = { style: { color: "#0ff" } }, tn = { style: { color: "#aaa" } }, sn = { style: { color: "#0ff" } }, ln = { style: { color: "#0f0" } }, nn = {
  key: 2,
  class: "stock-filter-search-sort"
}, on = {
  key: 0,
  class: "selection-bar"
}, an = { class: "selection-bar__left" }, rn = { class: "selection-bar__count" }, cn = 500, un = "Can't mix with a material that's cut on a different saw. Remove your current selection to pick this one.", bn = /* @__PURE__ */ Fe({
  __name: "Catalogue",
  props: {
    stockOptions: {
      type: Array,
      required: !0
    },
    debug: {
      type: Boolean,
      default: !1
    },
    config: {
      type: Object,
      default: () => wt()
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
    },
    // Single-select mode for embedded usage (e.g. MaterialGroupPicker
    // dialog). Clicking a card emits `single-pick` with the chosen
    // stock and *does not* mutate the multi-select selection state or
    // touch localStorage. The host is expected to close itself on the
    // emit; we don't toggle anything internally.
    singleSelect: {
      type: Boolean,
      default: !1
    },
    currency: {
      type: String,
      default: ""
    },
    // Read-only chips for filters the spec author baked into the
    // request (e.g. a MaterialGroup's `code IN [...]` predicate that
    // scopes a picker dialog to a single material). Surface alongside
    // `activeFilters` in CatalogueFilters so the customer sees what's
    // constraining the result set, but with no remove affordance —
    // they can't widen past these.
    preAppliedChips: {
      type: Array,
      default: () => []
    }
  },
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "labels-changed", "order-sample", "selections-restored", "single-pick"],
  setup(t, { expose: P, emit: e }) {
    const c = t, b = e, d = j(c.stockOptions), $ = j(c.config), L = j(c.numberFormat);
    ve(() => c.stockOptions, (i) => {
      d.value = i;
    }), ve(() => c.config, (i) => {
      $.value = i;
    });
    const C = p(() => {
      if (c.serverPagination)
        return { ...c.serverPagination };
    }), {
      activeFilters: M,
      searchQuery: _,
      sortBy: k,
      sortOrder: F,
      displayMode: K,
      currentPage: ue,
      filteredStock: ie,
      paginatedStock: X,
      selectedStock: z,
      totalItems: E,
      isLoading: ge,
      applyFilter: de,
      removeFilter: ae,
      clearFilters: re,
      goToPage: H,
      toggleStockSelection: v,
      isStockSelected: u,
      clearSelection: g,
      selectById: S,
      createInputStock: R,
      getUniqueValues: y,
      getFieldRange: A,
      getFilterOptionCounts: ye
    } = _t({
      stockOptions: d,
      config: $,
      numberFormat: L,
      serverPagination: C.value
    }), { addNotice: Te } = $t(), ce = ft(St, []), N = j(!1), O = j(1), Q = j(/* @__PURE__ */ new Map());
    function me(i, r, l) {
      for (const I of i)
        I.customData = {
          ...I.customData || {},
          selectionId: r,
          ...l?.name && { stockName: l.name },
          ...l?.material && { materialLabel: l.material }
        }, l?.extras && Ct(I, l.extras);
      b("stock-added", i);
    }
    const Z = p(() => c.config.itemsPerPage || 20), he = p(() => c.serverPagination ? [] : Ee(ie.value)), pe = p(() => Ee(z.value)), be = p(() => {
      if (c.serverPagination && !N.value) return [];
      const i = N.value ? pe.value : he.value, l = ((N.value ? O.value : ue.value) - 1) * Z.value;
      return i.slice(l, l + Z.value);
    }), we = p(() => N.value ? be.value.flatMap((i) => i.items) : c.serverPagination ? X.value : be.value.flatMap((i) => i.items)), { groupedStock: Ue, getFilteredOutThicknesses: Me } = It(we, M), Ce = p(() => N.value ? be.value : c.serverPagination ? Ue.value : be.value);
    function Be(i) {
      const r = /* @__PURE__ */ new Set();
      for (const l of i.items)
        u(l) && l.t != null && r.add(l.t);
      return r;
    }
    const fe = p(() => {
      const i = /* @__PURE__ */ new Map();
      for (const r of we.value)
        i.set(Y(r), r.name || r.material || "");
      return i;
    }), $e = p(() => {
      const i = c.serverPagination ? Ce.value.map((l) => l.representative) : c.stockOptions.slice(0, cn);
      if (!i.length) return "";
      const r = i.map((l, I) => {
        const D = l.name || l.material;
        if (!D) return null;
        const B = l.db_id, V = l.cost && c.currency ? {
          "@type": "Offer",
          price: l.cost,
          priceCurrency: c.currency,
          availability: l.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, Ie = {
          "@type": "Product",
          name: D,
          ...l.imageUrl && { image: l.imageUrl },
          ...l.code && { sku: l.code },
          ...B && { productID: B },
          ...l.brand && { brand: { "@type": "Brand", name: l.brand } },
          ...l.category && { category: l.category },
          ...l.description && { description: l.description },
          ...V && { offers: V }
        };
        return {
          "@type": "ListItem",
          position: I + 1,
          item: Ie
        };
      }).filter((l) => l !== null);
      return r.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: r
      }).replace(/[<]/g, "\\u003c") : "";
    }), le = p(() => {
      const i = {
        code: !1,
        finish: !1,
        variant: !1,
        brand: !1,
        grain: !1,
        color: !1,
        category: !1,
        thickness: !1,
        weight: !1,
        price: !1,
        quantity: !1,
        tags: !1
      }, r = c.serverPagination ? X.value : ie.value;
      for (const l of r)
        l.code && (i.code = !0), l.finish && (i.finish = !0), l.variant && (i.variant = !0), l.brand && (i.brand = !0), l.grain && (i.grain = !0), l.color && (i.color = !0), l.category && (i.category = !0), l.t != null && (i.thickness = !0), l.weight && (i.weight = !0), l.cost && (i.price = !0), l.q != null && !l.unlimitedQuantity && (i.quantity = !0), l.tags?.length && (i.tags = !0);
      return i;
    }), Pe = p(() => N.value ? pe.value.length : c.serverPagination ? E.value : he.value.length), f = p(() => {
      const i = Pe.value;
      return Math.max(1, Math.ceil(i / Z.value));
    }), x = p(() => N.value ? O.value : ue.value);
    function J(i) {
      const r = f.value, l = Math.max(1, Math.min(i, r));
      N.value ? O.value = l : H(l);
    }
    ve(he, (i) => {
      if (c.serverPagination || N.value) return;
      const r = Math.max(1, Math.ceil(i.length / Z.value));
      ue.value > r && H(r);
    }), ve(N, () => {
      O.value = 1;
    }), ve(() => z.value.length, (i) => {
      i === 0 && N.value && (N.value = !1);
      const r = Math.max(1, Math.ceil(pe.value.length / Z.value));
      O.value > r && (O.value = r), z.value.length > 0 && b("labels-changed", /* @__PURE__ */ new Map());
    });
    const T = p(() => c.loading || ge.value), W = j(!1);
    ve(z, (i) => {
      W.value || (ce.value = i.map((r) => Y(r)));
    }, { deep: !0 });
    async function Le(i) {
      if (!c.serverPagination) return null;
      const { apiUrl: r, orgSlug: l, isCustomDomain: I } = c.serverPagination, D = I ? `${r}ecommerce/stock` : `${r}ecommerce/${l}/stock`;
      try {
        const B = new URL(D);
        B.searchParams.set("limit", "1");
        const V = {};
        if (/^[a-f0-9]{24}$/i.test(i))
          V._id = i;
        else {
          const Se = i.split("-");
          if (Se.length >= 4) {
            const nt = parseFloat(Se.pop()), ot = parseFloat(Se.pop()), it = parseFloat(Se.pop()), at = Se.join("-");
            V.material = at, V.l = it, V.w = ot, V.t = nt;
          } else
            return null;
        }
        B.searchParams.set("filters", JSON.stringify(V));
        const Ie = await fetch(B.toString(), { credentials: "include" });
        if (!Ie.ok) return null;
        const Je = (await Ie.json()).items || [];
        if (Je.length === 0) return null;
        const qe = Je[0];
        return Y(qe) !== i ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: i, got: Y(qe) }), null) : qe;
      } catch {
        return null;
      }
    }
    async function ne() {
      if (ce.value.length) {
        W.value = !0;
        try {
          const i = [...ce.value], r = [], l = [];
          for (const D of i) {
            let B = c.stockOptions.find((V) => Y(V) === D);
            !B && c.serverPagination && (B = await Le(D)), B && (r.push(D), l.push(B));
          }
          const I = i.length - r.length;
          I > 0 && (ce.value = r, Te({
            message: I === 1 ? "A previously selected material is no longer available" : `${I} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const D of l) {
            const B = Y(D);
            if (!u(D)) {
              v(D);
              const V = R(D);
              Ve([V], D), Q.value.set(B, [V]), me([V], B, D);
            }
          }
        } finally {
          W.value = !1;
        }
      }
    }
    vt(async () => {
      if (!c.singleSelect) {
        if (c.initialProductId) {
          const i = S(c.initialProductId);
          if (!i) return;
          const r = Y(i), l = R(i);
          Ve([l], i), Q.value.set(r, [l]), me([l], r, i);
          return;
        }
        await ne(), b("selections-restored", z.value.length);
      }
    });
    const ee = p(() => {
      const i = c.config.availableFilters.filter((r) => {
        const l = y(r.field);
        return l.length > 0 && l.some((I) => I != null);
      });
      return i.length === 0 && M.value.length > 0 ? c.config.availableFilters : i;
    }), _e = p(() => z.value.length === 0 ? null : z.value[0].db_sawId || null);
    function Re(i) {
      if (!_e.value) return !1;
      const r = i.db_sawId;
      return r ? r !== _e.value : !1;
    }
    function Ze(i) {
      return Re(i) ? un : "";
    }
    function Ve(i, r) {
      const l = r.name || r.material;
      if (l)
        for (const I of i)
          I.material = l;
    }
    async function ze(i) {
      if (Re(i)) return;
      if (c.singleSelect) {
        b("single-pick", i);
        return;
      }
      const r = u(i);
      v(i);
      const l = Y(i);
      if (r) {
        const I = Q.value.get(l);
        I ? (I.forEach(Oe), Q.value.delete(l)) : Oe(R(i));
      } else {
        const I = R(i);
        Ve([I], i), Q.value.set(l, [I]), me([I], l, i);
      }
    }
    function Oe(i) {
      b("stock-removed", i);
    }
    async function et(i) {
      i.items.every((l) => u(l)) ? await He(i) : await je(i);
    }
    async function je(i) {
      for (const r of i.items)
        Re(r) || u(r) || await ze(r);
    }
    async function He(i) {
      for (const r of i.items)
        u(r) && await ze(r);
    }
    async function tt(i, r) {
      await ze(i);
    }
    function st() {
      for (const i of z.value) {
        const r = Y(i), l = Q.value.get(r);
        l ? l.forEach(Oe) : Oe(R(i));
      }
      Q.value.clear(), g(), ce.value = [], N.value = !1;
    }
    function lt(i) {
      b("order-sample", i);
    }
    return P({
      applyFilter: de,
      removeFilter: ae,
      clearFilters: re,
      clearSelection: g,
      selectedStock: z,
      filteredStock: ie,
      getUniqueValues: y,
      getFieldRange: A
    }), (i, r) => (s(), n("section", Ql, [
      $e.value ? (s(), se(gt("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: $e.value
      }, null, 8, ["innerHTML"])) : m("", !0),
      t.debug ? (s(), n("div", Wl, [
        r[15] || (r[15] = a("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        a("div", Yl, [
          r[6] || (r[6] = a("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          a("pre", Xl, o(JSON.stringify(h(ce), null, 2)), 1)
        ]),
        a("div", Zl, [
          a("strong", en, "selectedStock (" + o(h(z).length) + " items):", 1),
          (s(!0), n(U, null, G(h(z), (l) => (s(), n("div", {
            key: h(Y)(l),
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              r[7] || (r[7] = a("span", { style: { color: "#ff0" } }, "getStockId:", -1)),
              oe(" " + o(h(Y)(l)), 1)
            ]),
            a("div", null, [
              r[8] || (r[8] = a("span", { style: { color: "#ff0" } }, "db_id:", -1)),
              oe(" " + o(l.db_id || "(none)"), 1)
            ]),
            a("div", null, [
              r[9] || (r[9] = a("span", { style: { color: "#ff0" } }, "code:", -1)),
              oe(" " + o(l.code || "(none)"), 1)
            ]),
            a("div", null, [
              r[10] || (r[10] = a("span", { style: { color: "#ff0" } }, "material:", -1)),
              oe(" " + o(l.material), 1)
            ]),
            a("div", null, [
              r[11] || (r[11] = a("span", { style: { color: "#ff0" } }, "name:", -1)),
              oe(" " + o(l.name), 1)
            ]),
            a("div", null, [
              r[12] || (r[12] = a("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
              oe(" " + o(l.l) + " × " + o(l.w) + " × " + o(l.t), 1)
            ]),
            a("div", null, [
              r[13] || (r[13] = a("span", { style: { color: "#ff0" } }, "variant:", -1)),
              oe(" " + o(l.variant || "(none)"), 1)
            ])
          ]))), 128))
        ]),
        a("div", tn, [
          a("strong", sn, "materialStockMap (" + o(Q.value.size) + " entries):", 1),
          (s(!0), n(U, null, G(Q.value, ([l, I]) => (s(), n("div", {
            key: l,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              r[14] || (r[14] = a("span", { style: { color: "#ff0" } }, "key:", -1)),
              oe(" " + o(l) + " → ", 1),
              a("span", ln, o(I.length) + " InputStock(s)", 1)
            ]),
            (s(!0), n(U, null, G(I, (D, B) => (s(), n("div", {
              key: B,
              style: { "margin-left": "12px" }
            }, o(D.material) + " " + o(D.l) + "×" + o(D.w) + "×" + o(D.t) + " db_id=" + o(D.db_id || "(none)") + " code=" + o(D.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : m("", !0),
      t.config.enableSearch || t.config.sortOptions.length > 0 ? (s(), n("div", nn, [
        t.config.enableSearch ? (s(), se(xt, {
          key: 0,
          modelValue: h(_),
          "onUpdate:modelValue": r[0] || (r[0] = (l) => Ge(_) ? _.value = l : null)
        }, null, 8, ["modelValue"])) : m("", !0),
        t.config.sortOptions.length > 0 ? (s(), se(Ft, {
          key: 1,
          "sort-by": h(k),
          "onUpdate:sortBy": r[1] || (r[1] = (l) => Ge(k) ? k.value = l : null),
          "sort-order": h(F),
          "onUpdate:sortOrder": r[2] || (r[2] = (l) => Ge(F) ? F.value = l : null),
          "available-fields": t.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : m("", !0)
      ])) : m("", !0),
      ee.value.length > 0 || t.preAppliedChips.length > 0 ? (s(), se(kl, {
        key: 3,
        "filter-configs": ee.value,
        "active-filters": h(M),
        "get-unique-values": h(y),
        "get-field-range": h(A),
        "get-filter-option-counts": h(ye),
        "pre-applied-chips": t.preAppliedChips,
        onApplyFilter: h(de),
        onRemoveFilter: h(ae),
        onClearFilters: h(re)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : m("", !0),
      Ke(Jl, {
        "total-results": Pe.value,
        "display-mode": h(K),
        loading: T.value,
        "has-active-filters": h(M).length > 0,
        "current-page": x.value,
        "total-pages": f.value,
        "visible-columns": le.value,
        "onUpdate:displayMode": r[3] || (r[3] = (l) => K.value = l),
        onClearFilters: h(re),
        onGoToPage: J
      }, {
        default: xe(() => [
          (s(!0), n(U, null, G(Ce.value, (l) => (s(), se(js, {
            key: l.groupKey,
            stock: l.representative,
            "is-selected": h(u)(l.representative),
            "is-disabled": Re(l.representative),
            "disabled-reason": Ze(l.representative),
            "display-label": fe.value.get(h(Y)(l.representative)),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            "display-mode": h(K),
            "unit-system": t.unitSystem,
            "visible-columns": le.value,
            "api-url": t.serverPagination?.apiUrl,
            group: l.items.length > 1 ? l : void 0,
            "selected-thicknesses": l.items.length > 1 ? Be(l) : void 0,
            "filtered-out-thicknesses": l.items.length > 1 ? h(Me)(l) : void 0,
            onToggleSelection: ze,
            onToggleGroup: et,
            onSelectGroup: je,
            onDeselectGroup: He,
            onToggleThickness: tt,
            onOrderSample: lt
          }, null, 8, ["stock", "is-selected", "is-disabled", "disabled-reason", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Ke(mt, { name: "selection-bar" }, {
        default: xe(() => [
          c.showSelectionBar && h(z).length > 0 ? (s(), n("div", on, [
            a("div", an, [
              a("span", rn, o(h(z).length) + " " + o(h(z).length === 1 ? "material" : "materials") + " selected ", 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: r[4] || (r[4] = (l) => N.value = !N.value)
              }, o(N.value ? "Show all" : "Show selected"), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: st
              }, " Clear ")
            ]),
            a("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: te({ backgroundColor: t.colors.button, color: t.colors.buttonText }),
              onClick: r[5] || (r[5] = (l) => b("selection-confirmed", h(z)))
            }, o(h(w)("stockFilter.create_cut_list")), 5)
          ])) : m("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  bn as default
};
