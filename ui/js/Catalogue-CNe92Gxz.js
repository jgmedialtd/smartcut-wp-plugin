import { m as p, d as xe, w as ge, h as se, o as s, j as Se, c as n, a as m, r as E, t as o, F as N, k as G, b as a, i as Ke, u as h, V as rt, W as ct, z as Je, N as De, n as te, l as q, v as be, D as oe, e as ut, S as dt, X as ft, f as gt, G as vt, Y as Ge, Z as mt } from "./vendor-vue-Tt3m9hlc.js";
import { _ as ht, L as Ye, n as pt, k as bt, M as kt, i as yt, s as wt, u as Ct } from "./EcommerceCalculator-D8U1LupG.js";
import { t as w } from "./i18n-BEBY52oR.js";
import { u as $t, g as Y, S as _t } from "./Vanilla-DH-SnX5c.js";
import { _ as Ne } from "./Launch-Br9fQuik.js";
import { C as St, a as xt } from "./CatalogueSort-oZzRQQ8D.js";
const Ft = [
  "material",
  "name",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "imageUrl",
  "db_sawId"
], Tt = 5e3, Ae = /* @__PURE__ */ new Map(), Mt = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function Pt(t) {
  if (!t) return t;
  const P = Ae.get(t);
  if (P !== void 0) return P;
  const e = t.replace(Mt, "");
  return Ae.size >= Tt && Ae.clear(), Ae.set(t, e), e;
}
function Lt(t) {
  const P = [];
  for (const r of Ft) {
    const b = t[r];
    P.push(b != null ? String(b) : "");
  }
  t.variant ? P.push(Pt(t.code ?? "")) : P.push("");
  const e = t.extras;
  if (e) {
    const r = ["banding", "finish", "planing", "machining"];
    for (const b of r)
      P.push(e[b] ? "1" : "0");
  } else
    P.push("0000");
  return P.join("");
}
function je(t) {
  return t.length > 0 && t[0].thicknessGroup ? zt(t) : Rt(t);
}
function zt(t) {
  const P = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), r = [];
  for (const d of t) {
    const $ = d.thicknessGroup;
    if (!$) {
      const C = `__solo_${d.db_id || Math.random()}`;
      P.set(C, [d]), r.push(C);
      continue;
    }
    const L = $.groupKey;
    P.has(L) || (P.set(L, []), e.set(L, $), r.push(L)), P.get(L).push(d);
  }
  const b = [];
  for (const d of r) {
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
  for (const r of t) {
    if (typeof r.l != "number" || typeof r.w != "number") continue;
    const b = `${r.l}x${r.w}`;
    P.has(b) || (P.add(b), e.push({ l: r.l, w: r.w }));
  }
  return e;
}
function Rt(t) {
  const P = /* @__PURE__ */ new Map(), e = [];
  for (const b of t) {
    if (b.t == null) {
      const $ = `__solo_${b.db_id || Math.random()}`;
      P.set($, [b]), e.push($);
      continue;
    }
    const d = Lt(b);
    P.has(d) || (P.set(d, []), e.push(d)), P.get(d).push(b);
  }
  const r = [];
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
    r.push({
      groupKey: b,
      items: d,
      thicknesses: $,
      dimensions: Xe(d),
      representative: d[0],
      priceRange: C,
      weightRange: _
    });
  }
  return r;
}
function Qe(t, P) {
  const e = P.find((b) => b.field === "t");
  if (!e) return !1;
  const r = e.value;
  return Array.isArray(r) ? !r.some((b) => Number(b) === t) : r != null ? Number(r) !== t : !1;
}
function Ot(t, P) {
  const e = p(() => je(t.value));
  function r(C, M) {
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
      Qe(_, P.value) && M.add(_);
    return M;
  }
  return {
    groupedStock: e,
    getItemForThickness: r,
    getItemForCombo: b,
    getThicknessesForDimension: d,
    getDimensionsForThickness: $,
    getFilteredOutThicknesses: L,
    isThicknessFilteredOut: Qe
  };
}
const It = { key: 0 }, Dt = {
  key: 0,
  class: "bim-description"
}, At = {
  key: 1,
  class: "bim-empty"
}, Nt = {
  key: 2,
  class: "bim-links"
}, Ut = ["href"], Bt = { key: 1 }, Vt = /* @__PURE__ */ xe({
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
    const e = t, r = E(!1), b = E(!1), d = E(null), $ = () => typeof e.description == "string" && e.description.trim() !== "" || Array.isArray(e.urls) && e.urls.length > 0;
    let L = "";
    async function C() {
      if (!e.open) return;
      if ($()) {
        d.value = {
          name: e.brandName,
          fullDescription: e.description,
          urls: e.urls || []
        }, r.value = !1, b.value = !1;
        return;
      }
      if (!e.brandName || !e.catalogueKey || !e.apiUrl) {
        b.value = !0;
        return;
      }
      const M = `${e.catalogueKey}::${e.brandName}`;
      if (!(M === L && d.value)) {
        L = M, r.value = !0, b.value = !1, d.value = null;
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
          r.value = !1;
        }
      }
    }
    return ge(
      () => [e.open, e.brandName, e.catalogueKey, e.description, e.urls],
      C,
      { immediate: !0, deep: !0 }
    ), (M, _) => (s(), se(ht, {
      size: "sm",
      compact: !1,
      open: t.open,
      onClosed: _[2] || (_[2] = (k) => M.$emit("close"))
    }, {
      header: Se(() => [
        a("div", null, [
          a("h3", null, o(t.brandName), 1),
          r.value ? (s(), se(Ye, {
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
      footer: Se(() => [
        a("button", {
          class: "c-btn",
          onClick: _[1] || (_[1] = (k) => M.$emit("close"))
        }, "Done")
      ]),
      default: Se(() => [
        !r.value && !b.value && d.value ? (s(), n("div", It, [
          d.value.fullDescription ? (s(), n("p", Dt, o(d.value.fullDescription), 1)) : (s(), n("p", At, "No description available for this brand yet.")),
          d.value.urls && d.value.urls.length ? (s(), n("ul", Nt, [
            (s(!0), n(N, null, G(d.value.urls, (k) => (s(), n("li", {
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
              ], 8, Ut)
            ]))), 128))
          ])) : m("", !0)
        ])) : !r.value && b.value ? (s(), n("div", Bt, [..._[3] || (_[3] = [
          a("p", { class: "bim-empty" }, "We don't have additional information about this brand yet.", -1)
        ])])) : m("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), qt = /* @__PURE__ */ Ne(Vt, [["__scopeId", "data-v-8c75194a"]]), Gt = ["onKeydown"], Kt = { class: "stock-filter-row__thumb" }, jt = ["src", "alt"], Et = { class: "stock-filter-row__material" }, Ht = { class: "stock-filter-row__name" }, Wt = {
  key: 0,
  class: "stock-filter-row__code"
}, Jt = {
  key: 0,
  class: "stock-filter-row__cell"
}, Qt = {
  key: 1,
  class: "stock-filter-row__cell"
}, Yt = {
  key: 2,
  class: "stock-filter-row__cell"
}, Xt = {
  key: 3,
  class: "stock-filter-row__cell"
}, Zt = {
  key: 4,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, es = {
  key: 5,
  class: "stock-filter-row__color"
}, ts = { key: 1 }, ss = {
  key: 6,
  class: "stock-filter-row__thickness"
}, ls = {
  key: 0,
  class: "c-loz-group c-loz-group--tight"
}, ns = ["disabled", "onClick"], os = {
  key: 1,
  class: "thickness-badge"
}, is = {
  key: 7,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, as = {
  key: 8,
  class: "stock-filter-row__weight"
}, rs = {
  key: 9,
  class: "stock-filter-row__price"
}, cs = {
  key: 0,
  class: "price__original"
}, us = {
  key: 1,
  class: "price__badge"
}, ds = { class: "stock-filter-row__action" }, fs = ["disabled"], gs = ["onKeydown"], vs = { class: "stock-filter-card__image-wrapper" }, ms = ["src", "alt"], hs = {
  key: 1,
  class: "c-badge stock-filter-card__badge--brand"
}, ps = {
  key: 2,
  class: "c-badge stock-filter-card__badge--thickness"
}, bs = {
  key: 3,
  class: "c-badge stock-filter-card__badge--thickness"
}, ks = { class: "stock-filter-card__badges-bottom" }, ys = {
  key: 1,
  class: "c-badge stock-filter-card__badge--finish"
}, ws = {
  key: 2,
  class: "c-badge stock-filter-card__badge--grain"
}, Cs = { class: "stock-filter-card__content" }, $s = { class: "stock-filter-card__title" }, _s = {
  key: 0,
  class: "stock-filter-card__code"
}, Ss = {
  key: 1,
  class: "stock-filter-card__spec-badges"
}, xs = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Fs = {
  key: 3,
  class: "stock-filter-card__dimensions"
}, Ts = {
  key: 4,
  class: "c-loz-group"
}, Ms = ["disabled", "onClick"], Ps = {
  key: 5,
  class: "stock-filter-card__extras"
}, Ls = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, zs = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Rs = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Os = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Is = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Ds = { class: "stock-filter-card__footer" }, As = {
  key: 0,
  class: "stock-filter-card__price"
}, Ns = { class: "price__value" }, Us = {
  key: 1,
  class: "stock-filter-card__price"
}, Bs = {
  key: 0,
  class: "price__original"
}, Vs = {
  key: 1,
  class: "price__badge"
}, qs = { class: "stock-filter-card__actions" }, Gs = ["disabled"], Ks = /* @__PURE__ */ xe({
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
    const e = t, r = P, b = E(!1), d = E(!1), $ = E(!1), L = p(() => e.stock._catalogueKey), C = p(() => pt(e.stock)), M = p(() => C.value.brand || C.value.variant || C.value.material || ""), _ = p(() => e.stock._hasDetailContent === !0), k = p(() => (e.stock.description || "").trim() || void 0), F = p(() => {
      const f = e.stock.urls;
      return Array.isArray(f) ? f.filter((x) => x && typeof x.url == "string" && x.url.trim()).map((x) => ({ label: String(x.label || x.url), url: String(x.url) })) : [];
    }), K = p(() => !!k.value || F.value.length > 0), ue = p(() => e.stock._source === "library"), ie = p(() => O.value ? !1 : K.value || ue.value && _.value && !!M.value && !!L.value && !!e.apiUrl), X = p(() => e.stock.available !== !1), R = p(() => e.isDisabled), j = p(() => e.stock.discount && e.stock.discount > 0), ve = p(() => {
      const f = e.stock.sample;
      return f?.enabled ? f.price && f.price > 0 ? `${w("stockFilter.orderSample")} (${e.formatPrice(f.price, e.locale)})` : w("stockFilter.freeSample") : "";
    }), de = p(() => e.stock.cost ? j.value ? e.stock.cost * (1 - e.stock.discount / 100) : e.stock.cost : 0), ae = p(() => e.stock.cost ? e.formatPrice(e.stock.cost, e.locale) : "N/A"), re = p(() => e.stock.cost ? e.formatPrice(de.value, e.locale) : "N/A"), H = p(() => {
      const f = e.stock.color;
      return f && typeof f == "object" && "hex" in f && f.hex ? String(f.hex) : e.stock.colorHex || "";
    }), g = p(() => {
      const f = e.stock.color;
      return typeof f == "string" ? f : f && typeof f == "object" && "name" in f ? String(f.name || "") : "";
    }), u = p(() => (!e.stock.imageUrl || b.value) && !!H.value), v = p(() => u.value ? { background: H.value } : void 0), S = p(() => H.value ? bt(H.value) : "#fff"), z = p(() => {
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
      const f = [], x = /* @__PURE__ */ new Set(), W = (ne) => {
        if (ne == null) return;
        const ee = String(ne).trim();
        if (!ee) return;
        const $e = ee.toLowerCase();
        x.has($e) || (x.add($e), f.push(ee));
      }, T = fe.value.toLowerCase(), Q = (ne) => {
        if (ne == null) return;
        const ee = String(ne).trim();
        !ee || T.includes(ee.toLowerCase()) || W(ee);
      };
      Q(C.value.variant);
      const Le = O.value && e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : e.stock.weight ? `${e.stock.weight}kg` : "";
      return Le && Q(Le), f;
    }), D = p(() => {
      const f = [], x = (C.value.material || "").trim(), W = (e.stock.category || "").trim();
      return x && f.push({ kind: "material", label: x }), W && W.toLowerCase() !== x.toLowerCase() && f.push({ kind: "category", label: W }), f;
    });
    function ke(f, x) {
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(1)}" × ${(x / 25.4).toFixed(1)}"` : `${f} × ${x}`;
    }
    const Fe = p(() => (e.group?.dimensions?.length ? e.group.dimensions : e.stock.l && e.stock.w ? [{ l: e.stock.l, w: e.stock.w }] : []).map((x) => ke(x.l, x.w))), ce = p(() => e.stock.t == null ? "" : e.unitSystem === "imperial" ? `${(e.stock.t / 25.4).toFixed(2)}"` : `${e.stock.t} mm`), U = p(() => {
      const f = e.stock.extras;
      return f ? !!(f.banding || f.finish || f.planing || f.machining) : !1;
    }), O = p(() => e.group && e.group.items.length > 1), J = p(() => {
      if (!O.value || !e.selectedThicknesses) return !1;
      const f = e.selectedThicknesses.size;
      return f > 0 && f < e.group.thicknesses.length;
    }), me = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size === e.group.thicknesses.length), Z = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size > 0);
    function he(f) {
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(2)}"` : `${f}mm`;
    }
    const pe = p(() => e.group?.priceRange ? `${e.formatPrice(e.group.priceRange.min, e.locale)} – ${e.formatPrice(e.group.priceRange.max, e.locale)}` : null), Te = p(() => e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : null);
    function ye(f, x) {
      if (x.stopPropagation(), e.filteredOutThicknesses?.has(f)) return;
      const W = e.group?.items.find((T) => T.t === f);
      W && r("toggle-thickness", W, f);
    }
    function Ue() {
      !X.value || R.value || (O.value && e.group ? r("toggle-group", e.group) : r("toggle-selection", e.stock));
    }
    function Me() {
      !X.value || R.value || (O.value && e.group ? Z.value ? r("deselect-group", e.group) : r("select-group", e.group) : r("toggle-selection", e.stock));
    }
    const we = p(() => {
      if (!e.group || e.group.thicknesses.length < 2) return "";
      const f = e.group.thicknesses[0], x = e.group.thicknesses[e.group.thicknesses.length - 1];
      return e.unitSystem === "imperial" ? `${(f / 25.4).toFixed(2)}" – ${(x / 25.4).toFixed(2)}"` : `${f} – ${x}mm`;
    }), Be = p(() => {
      const f = ["60px", "2fr"];
      return e.visibleColumns.finish && f.push("1fr"), e.visibleColumns.brand && f.push("1fr"), e.visibleColumns.variant && f.push("1fr"), e.visibleColumns.category && f.push("1fr"), e.visibleColumns.grain && f.push("80px"), e.visibleColumns.color && f.push("100px"), e.visibleColumns.thickness && f.push(O.value ? "minmax(120px, auto)" : "80px"), e.visibleColumns.quantity && f.push("80px"), e.visibleColumns.weight && f.push("80px"), e.visibleColumns.price && f.push("100px"), f.push("50px"), { "grid-template-columns": f.join(" ") };
    }), fe = p(() => e.displayLabel ? e.displayLabel : C.value.productLabel && C.value.productLabel !== "(unnamed)" ? C.value.productLabel : `${e.stock.material} ${e.stock.l}×${e.stock.w}`), Ce = p(() => C.value.code ? C.value.code.toLowerCase() !== fe.value.toLowerCase() : !1);
    function le() {
      Ue();
    }
    function Pe() {
      r("order-sample", e.stock);
    }
    return (f, x) => {
      const W = ct("tooltip");
      return s(), n(N, null, [
        t.displayMode === "list" ? Je((s(), n("article", {
          key: 0,
          class: q(["stock-filter-row", {
            "stock-filter-row--selected": O.value ? me.value : t.isSelected,
            "stock-filter-row--partial": J.value,
            "stock-filter-row--unavailable": !X.value,
            "stock-filter-row--disabled": R.value
          }]),
          style: te(Be.value),
          role: "button",
          tabindex: "0",
          onClick: le,
          onKeydown: [
            De(le, ["enter"]),
            De(be(le, ["prevent"]), ["space"])
          ]
        }, [
          a("div", Kt, [
            a("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: te(v.value)
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
          a("div", Et, [
            a("h3", Ht, o(fe.value), 1),
            Ce.value ? (s(), n("span", Wt, o(C.value.code), 1)) : m("", !0)
          ]),
          t.visibleColumns.finish ? (s(), n("div", Jt, o(t.stock.finish || ""), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", Qt, o(t.stock.brand || ""), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Yt, o(t.stock.variant || ""), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", Xt, o(t.stock.category || ""), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", Zt, o(z.value), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", es, [
            H.value ? (s(), n("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: te({ backgroundColor: H.value })
            }, null, 4)) : m("", !0),
            g.value ? (s(), n("span", ts, o(g.value), 1)) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", ss, [
            O.value ? (s(), n("div", ls, [
              (s(!0), n(N, null, G(t.group.thicknesses, (T) => (s(), n("button", {
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
                onClick: (Q) => ye(T, Q)
              }, o(he(T)), 15, ns))), 128))
            ])) : t.stock.t != null ? (s(), n("span", os, [
              oe(o(t.stock.t), 1),
              x[6] || (x[6] = a("small", null, "mm", -1))
            ])) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", is, o(t.stock.unlimitedQuantity ? h(w)("stockFilter.inStock") : t.stock.q), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", as, o(Te.value || (t.stock.weight ? `${t.stock.weight}kg` : "")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", rs, [
            j.value ? (s(), n("span", cs, o(ae.value), 1)) : m("", !0),
            a("span", {
              class: q(["price__value", { price__discounted: j.value }])
            }, o(re.value), 3),
            j.value ? (s(), n("span", us, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
          ])) : m("", !0),
          a("div", ds, [
            a("button", {
              type: "button",
              class: q(["c-btn", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
              disabled: !X.value || R.value,
              onClick: be(Me, ["stop"])
            }, o((O.value ? Z.value : t.isSelected) ? "−" : "+"), 11, fs)
          ])
        ], 46, Gt)), [
          [W, R.value && t.disabledReason ? t.disabledReason : ""]
        ]) : Je((s(), n("article", {
          key: 1,
          class: q(["stock-filter-card", {
            "stock-filter-card--selected": O.value ? me.value : t.isSelected,
            "stock-filter-card--partial": J.value,
            "stock-filter-card--unavailable": !X.value,
            "stock-filter-card--disabled": R.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: le,
          onKeydown: [
            De(le, ["enter"]),
            De(be(le, ["prevent"]), ["space"])
          ]
        }, [
          a("div", vs, [
            a("div", {
              class: "stock-filter-card__image-placeholder",
              style: te(v.value)
            }, null, 4),
            t.stock.imageUrl && !b.value ? (s(), n("img", {
              key: 0,
              class: q(["stock-filter-card__image", { "stock-filter-card__image--loaded": d.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: x[2] || (x[2] = (T) => d.value = !0),
              onError: x[3] || (x[3] = (T) => b.value = !0)
            }, null, 42, ms)) : m("", !0),
            C.value.brand && !fe.value.toLowerCase().includes(C.value.brand.toLowerCase()) ? (s(), n("span", hs, o(C.value.brand), 1)) : m("", !0),
            O.value && we.value ? (s(), n("span", ps, o(we.value), 1)) : !O.value && t.stock.t != null ? (s(), n("span", bs, o(ce.value), 1)) : m("", !0),
            u.value && g.value ? (s(), n("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: te({ color: S.value })
            }, o(g.value), 5)) : m("", !0),
            a("div", ks, [
              g.value && !u.value ? (s(), n("span", {
                key: 0,
                class: "c-badge stock-filter-card__badge--color",
                style: te(H.value ? { background: H.value, color: S.value } : void 0)
              }, o(g.value), 5)) : m("", !0),
              t.stock.finish ? (s(), n("span", ys, o(t.stock.finish), 1)) : m("", !0),
              z.value ? (s(), n("span", ws, "Grain: " + o(z.value), 1)) : m("", !0)
            ])
          ]),
          a("div", Cs, [
            a("h3", $s, o(fe.value), 1),
            Ce.value ? (s(), n("div", _s, o(t.stock.code), 1)) : m("", !0),
            D.value.length ? (s(), n("div", Ss, [
              (s(!0), n(N, null, G(D.value, (T) => (s(), n("span", {
                key: T.kind,
                class: q(["c-badge", `spec-badge--${T.kind}`])
              }, o(T.label), 3))), 128))
            ])) : m("", !0),
            y.value.length ? (s(), n("div", xs, [
              (s(!0), n(N, null, G(y.value, (T, Q) => (s(), n("span", {
                key: Q,
                class: "spec-item"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            Fe.value.length ? (s(), n("div", Fs, [
              (s(!0), n(N, null, G(Fe.value, (T) => (s(), n("span", {
                key: T,
                class: "c-badge stock-filter-card__dim"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            O.value ? (s(), n("div", Ts, [
              (s(!0), n(N, null, G(t.group.thicknesses, (T) => (s(), n("button", {
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
                onClick: (Q) => ye(T, Q)
              }, o(he(T)), 15, Ms))), 128))
            ])) : m("", !0),
            U.value || t.stock.sample?.enabled ? (s(), n("div", Ps, [
              t.stock.sample?.enabled ? (s(), n("span", Ls, o(h(w)("stockFilter.samplesAvailable")), 1)) : m("", !0),
              t.stock.extras?.banding ? (s(), n("span", zs, o(h(w)("stockFilter.banding")), 1)) : m("", !0),
              t.stock.extras?.finish ? (s(), n("span", Rs, o(h(w)("stockFilter.finishOption")), 1)) : m("", !0),
              t.stock.extras?.planing ? (s(), n("span", Os, o(h(w)("stockFilter.planing")), 1)) : m("", !0),
              t.stock.extras?.machining ? (s(), n("span", Is, o(h(w)("stockFilter.machining")), 1)) : m("", !0)
            ])) : m("", !0),
            ie.value ? (s(), n("button", {
              key: 6,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: x[4] || (x[4] = be((T) => $.value = !0, ["stop"]))
            }, o(h(w)("stockFilter.details")), 1)) : m("", !0)
          ]),
          a("div", Ds, [
            O.value && pe.value ? (s(), n("div", As, [
              a("span", Ns, o(pe.value), 1)
            ])) : t.stock.cost ? (s(), n("div", Us, [
              j.value ? (s(), n("span", Bs, o(ae.value), 1)) : m("", !0),
              a("span", {
                class: q(["price__value", { price__discounted: j.value }])
              }, o(re.value), 3),
              j.value ? (s(), n("span", Vs, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
            ])) : m("", !0),
            a("div", qs, [
              t.stock.sample?.enabled ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: be(Pe, ["stop"])
              }, o(ve.value), 1)) : m("", !0),
              a("button", {
                type: "button",
                class: q(["c-btn c-btn--sm", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
                disabled: !X.value || R.value,
                onClick: be(Me, ["stop"])
              }, o((O.value ? Z.value : t.isSelected) ? h(w)("stockFilter.remove") : h(w)("stockFilter.select")), 11, Gs)
            ])
          ])
        ], 42, gs)), [
          [W, R.value && t.disabledReason ? t.disabledReason : ""]
        ]),
        ie.value ? (s(), se(qt, {
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
}), js = /* @__PURE__ */ Ne(Ks, [["__scopeId", "data-v-06c74416"]]), Es = { class: "stock-filter-panel" }, Hs = { class: "filter-panel-content" }, Ws = {
  key: 0,
  class: "filter-summary"
}, Js = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, Qs = ["title"], Ys = { class: "filter-summary__chip-field" }, Xs = { class: "filter-summary__chip-value" }, Zs = { class: "filter-summary__chip-field" }, el = { class: "filter-summary__chip-value" }, tl = ["aria-label", "onClick"], sl = { class: "filter-groups" }, ll = { class: "filter-group__header" }, nl = { class: "filter-group__label" }, ol = { class: "filter-group__content" }, il = {
  key: 0,
  class: "filter-select"
}, al = ["value", "onChange"], rl = { value: "" }, cl = ["value"], ul = {
  key: 2,
  class: "filter-range"
}, dl = { class: "filter-range__inputs" }, fl = ["value", "min", "max", "step", "onInput"], gl = ["value", "min", "max", "step", "onInput"], vl = {
  key: 3,
  class: "filter-boolean"
}, ml = { class: "filter-checkbox" }, hl = ["checked", "onChange"], pl = /* @__PURE__ */ xe({
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
    const e = t, r = P, b = E({}), d = p(() => e.activeFilters.length), $ = p(() => {
      const g = /* @__PURE__ */ new Set();
      for (const u of e.preAppliedChips)
        u.field && g.add(u.field);
      return g;
    }), L = p(
      () => e.filterConfigs.filter((g) => !$.value.has(g.field))
    );
    function C(g, u) {
      const v = F(g), S = _(u), z = v.find((y) => _(y.value) === S);
      return z ? z.label : String(u);
    }
    const M = p(() => {
      const g = [];
      for (const u of e.activeFilters) {
        const v = e.filterConfigs.find((y) => y.field === u.field);
        if (!v) continue;
        const S = k(v);
        if (u.type === "multiselect" && Array.isArray(u.value)) {
          for (const y of u.value)
            g.push({
              key: `${u.field}:${_(y)}`,
              fieldLabel: S,
              valueLabel: C(v, y),
              remove: () => {
                const D = u.value.filter((ke) => _(ke) !== _(y));
                D.length === 0 ? r("remove-filter", u.field) : r("apply-filter", u.field, D, "multiselect");
              }
            });
          continue;
        }
        let z;
        if (u.type === "range" && u.value && typeof u.value == "object") {
          const { min: y, max: D } = u.value;
          y !== void 0 && D !== void 0 ? z = `${y} – ${D}` : y !== void 0 ? z = `≥ ${y}` : D !== void 0 ? z = `≤ ${D}` : z = "";
        } else u.type === "boolean" ? z = v.label : z = C(v, u.value);
        g.push({
          key: u.field,
          fieldLabel: S,
          valueLabel: z,
          remove: () => {
            u.type === "range" && (b.value[u.field] = {}), r("remove-filter", u.field);
          }
        });
      }
      return g;
    });
    function _(g) {
      return typeof g == "object" && g !== null && "hex" in g ? String(g.hex) : String(g);
    }
    function k(g) {
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
      }[g.field] || g.label;
    }
    function F(g) {
      const u = e.getFilterOptionCounts?.(g.field) || /* @__PURE__ */ new Map(), v = u.size > 0, S = (y) => {
        if (!v) return;
        const D = typeof y == "object" && y !== null && "hex" in y ? y.hex : String(y);
        return u.get(D) ?? 0;
      };
      return g.options?.length ? g.options.map((y) => ({
        ...y,
        count: S(y.value)
      })) : e.getUniqueValues(g.field).map((y) => {
        const D = S(y);
        return g.field === "color" && typeof y == "object" && y !== null ? "name" in y && y.name ? {
          label: y.name,
          value: y,
          count: D
        } : {
          label: y.hex || String(y),
          value: y,
          count: D
        } : {
          label: String(y),
          value: y,
          count: D
        };
      });
    }
    function K(g) {
      return e.activeFilters.find((v) => v.field === g)?.value;
    }
    function ue(g, u) {
      const S = u.target.value;
      if (S === "")
        r("remove-filter", g);
      else {
        const z = S !== "" && !isNaN(Number(S)) ? Number(S) : S;
        r("apply-filter", g, z, "select");
      }
    }
    function ie(g) {
      return F(g).map((u) => ({
        value: _(u.value),
        label: u.count !== void 0 ? `${u.label} (${u.count})` : u.label,
        hidden: u.count === 0
      }));
    }
    function X(g) {
      const u = K(g);
      return Array.isArray(u) ? u.map(_) : [];
    }
    function R(g, u) {
      if (u.length === 0) {
        r("remove-filter", g);
        return;
      }
      const v = e.getUniqueValues(g), S = new Map(v.map((y) => [_(y), y])), z = u.map((y) => S.has(y) ? S.get(y) : y !== "" && !isNaN(Number(y)) ? Number(y) : y);
      r("apply-filter", g, z, "multiselect");
    }
    function j(g) {
      const u = e.getFieldRange(g);
      return u ? { min: Math.floor(u.min), max: Math.ceil(u.max) } : { min: void 0, max: void 0 };
    }
    function ve(g) {
      const u = e.getFieldRange(g);
      if (!u) return 1;
      const v = u.max - u.min;
      if (v <= 0) return 1;
      const S = v / 100, z = Math.pow(10, Math.floor(Math.log10(S)));
      return Math.max(z, 0.01);
    }
    function de(g, u) {
      if (b.value[g]?.[u] !== void 0)
        return b.value[g][u];
      const v = e.activeFilters.find((S) => S.field === g);
      if (v?.value && typeof v.value == "object")
        return v.value[u];
    }
    function ae(g, u, v) {
      const S = v.target, z = S.value ? Number(S.value) : void 0;
      b.value[g] || (b.value[g] = {}), b.value[g][u] = z;
      const y = b.value[g].min, D = b.value[g].max;
      y !== void 0 || D !== void 0 ? r("apply-filter", g, { min: y, max: D }, "range") : r("remove-filter", g);
    }
    function re(g, u) {
      u.target.checked ? r("apply-filter", g, !0, "boolean") : r("remove-filter", g);
    }
    function H() {
      b.value = {}, r("clear-filters");
    }
    return (g, u) => (s(), n("div", Es, [
      a("div", Hs, [
        d.value > 0 || t.preAppliedChips.length > 0 ? (s(), n("div", Ws, [
          a("div", Js, [
            (s(!0), n(N, null, G(t.preAppliedChips, (v) => (s(), n("span", {
              key: `pre:${v.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: v.title || "Pre-applied by the product spec"
            }, [
              a("span", Ys, o(v.fieldLabel) + ":", 1),
              a("span", Xs, o(v.valueLabel), 1)
            ], 8, Qs))), 128)),
            (s(!0), n(N, null, G(M.value, (v) => (s(), n("span", {
              key: v.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              a("span", Zs, o(v.fieldLabel) + ":", 1),
              a("span", el, o(v.valueLabel), 1),
              a("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": h(w)("stockFilter.clear_filters"),
                onClick: v.remove
              }, "×", 8, tl)
            ]))), 128))
          ]),
          d.value > 0 ? (s(), n("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: H
          }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
        ])) : m("", !0),
        a("div", sl, [
          (s(!0), n(N, null, G(L.value, (v) => (s(), n("div", {
            key: v.field,
            class: "filter-group"
          }, [
            a("div", ll, [
              a("label", nl, o(k(v)), 1)
            ]),
            a("div", ol, [
              v.type === "select" ? (s(), n("div", il, [
                a("select", {
                  value: K(v.field),
                  class: "filter-select-input",
                  onChange: (S) => ue(v.field, S)
                }, [
                  a("option", rl, o(h(w)("stockFilter.all")), 1),
                  (s(!0), n(N, null, G(F(v), (S) => (s(), n("option", {
                    key: S.value,
                    value: S.value
                  }, o(S.label) + o(S.count !== void 0 ? ` (${S.count})` : ""), 9, cl))), 128))
                ], 40, al)
              ])) : v.type === "multiselect" ? (s(), se(kt, {
                key: 1,
                id: `filter-${v.field}`,
                value: X(v.field),
                options: ie(v),
                placeholder: h(w)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (S) => R(v.field, S)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : v.type === "range" ? (s(), n("div", ul, [
                a("div", dl, [
                  a("input", {
                    value: de(v.field, "min"),
                    min: j(v.field).min,
                    max: j(v.field).max,
                    step: ve(v.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (S) => ae(v.field, "min", S)
                  }, null, 40, fl),
                  u[0] || (u[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                  a("input", {
                    value: de(v.field, "max"),
                    min: j(v.field).min,
                    max: j(v.field).max,
                    step: ve(v.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (S) => ae(v.field, "max", S)
                  }, null, 40, gl)
                ])
              ])) : v.type === "boolean" ? (s(), n("div", vl, [
                a("label", ml, [
                  a("input", {
                    checked: K(v.field) === !0,
                    type: "checkbox",
                    onChange: (S) => re(v.field, S)
                  }, null, 40, hl),
                  a("span", null, o(v.label), 1)
                ])
              ])) : m("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), bl = /* @__PURE__ */ Ne(pl, [["__scopeId", "data-v-9e7cab3a"]]), kl = { class: "stock-filter-results" }, yl = { class: "results-header" }, wl = { class: "results-info" }, Cl = {
  key: 0,
  class: "results-count"
}, $l = {
  key: 1,
  class: "results-count results-count--loading"
}, _l = { class: "results-controls" }, Sl = { class: "c-btn-group display-mode-toggle" }, xl = ["title"], Fl = ["title"], Tl = {
  key: 1,
  class: "results-empty"
}, Ml = { class: "empty-message" }, Pl = { class: "th" }, Ll = {
  key: 0,
  class: "th"
}, zl = {
  key: 1,
  class: "th"
}, Rl = {
  key: 2,
  class: "th"
}, Ol = {
  key: 3,
  class: "th"
}, Il = {
  key: 4,
  class: "th"
}, Dl = {
  key: 5,
  class: "th"
}, Al = {
  key: 6,
  class: "th th--center"
}, Nl = {
  key: 7,
  class: "th th--center"
}, Ul = {
  key: 8,
  class: "th th--center"
}, Bl = {
  key: 9,
  class: "th th--right"
}, Vl = {
  key: 3,
  class: "results-pagination"
}, ql = ["disabled"], Gl = { class: "c-btn-group pagination-pages" }, Kl = ["onClick"], jl = ["disabled"], El = /* @__PURE__ */ xe({
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
    const e = t, r = p(() => {
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
    return (d, $) => (s(), n("div", kl, [
      a("header", yl, [
        a("div", wl, [
          t.loading ? (s(), n("div", $l, o(h(w)("actions.loading")) + "...", 1)) : (s(), n("div", Cl, o(t.totalResults) + " " + o(t.totalResults === 1 ? h(w)("stockFilter.result_one") : h(w)("stockFilter.result_other")), 1))
        ]),
        a("div", _l, [
          a("div", Sl, [
            a("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: h(w)("stockFilter.grid_view"),
              onClick: $[0] || ($[0] = (L) => d.$emit("update:displayMode", "grid"))
            }, [...$[5] || ($[5] = [
              ut('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-26b6e10c><rect x="1" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="1" y="9" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="9" width="6" height="6" data-v-26b6e10c></rect></svg>', 1)
            ])], 10, xl),
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
            ])], 10, Fl)
          ])
        ])
      ]),
      t.loading ? (s(), se(Ye, {
        key: 0,
        size: "medium",
        label: `${h(w)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : t.totalResults === 0 ? (s(), n("div", Tl, [
        a("p", Ml, o(h(w)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (s(), n("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: $[2] || ($[2] = (L) => d.$emit("clear-filters"))
        }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
      ])) : (s(), n(N, { key: 2 }, [
        t.displayMode === "list" ? (s(), n("div", {
          key: 0,
          class: "results-table-header",
          style: te(r.value)
        }, [
          $[7] || ($[7] = a("div", { class: "th" }, null, -1)),
          a("div", Pl, o(h(w)("woodwork.material")), 1),
          t.visibleColumns.finish ? (s(), n("div", Ll, o(h(w)("fields.finish")), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", zl, o(h(w)("fields.brand")), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Rl, o(h(w)("fields.variant")), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", Ol, o(h(w)("fields.category")), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", Il, o(h(w)("fields.grain")), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", Dl, o(h(w)("fields.color")), 1)) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", Al, o(h(w)("fields.t")), 1)) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", Nl, o(h(w)("fields.q")), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", Ul, o(h(w)("fields.weight")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", Bl, o(h(w)("stockFilter.price")), 1)) : m("", !0),
          $[8] || ($[8] = a("div", { class: "th th--center" }, null, -1))
        ], 4)) : m("", !0),
        a("div", {
          class: q(["results-grid", { "results-grid--list": t.displayMode === "list" }])
        }, [
          dt(d.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      t.totalPages > 1 ? (s(), n("div", Vl, [
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === 1,
          onClick: $[3] || ($[3] = (L) => d.$emit("go-to-page", t.currentPage - 1))
        }, o(h(w)("pagination.previous")), 9, ql),
        a("div", Gl, [
          (s(!0), n(N, null, G(b.value, (L) => (s(), n("button", {
            key: L,
            type: "button",
            class: q(["c-btn c-btn--sm", { selected: L === t.currentPage }]),
            onClick: (C) => d.$emit("go-to-page", L)
          }, o(L), 11, Kl))), 128))
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
}), Hl = /* @__PURE__ */ Ne(El, [["__scopeId", "data-v-26b6e10c"]]), Wl = {
  id: "stock-filter",
  class: "smartcut-content",
  "aria-label": "Material catalogue"
}, Jl = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Ql = { style: { "margin-bottom": "6px", color: "#aaa" } }, Yl = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, Xl = { style: { "margin-bottom": "6px", color: "#aaa" } }, Zl = { style: { color: "#0ff" } }, en = { style: { color: "#aaa" } }, tn = { style: { color: "#0ff" } }, sn = { style: { color: "#0f0" } }, ln = {
  key: 2,
  class: "stock-filter-search-sort"
}, nn = {
  key: 0,
  class: "selection-bar"
}, on = { class: "selection-bar__left" }, an = { class: "selection-bar__count" }, rn = 500, cn = "Can't mix with a material that's cut on a different saw. Remove your current selection to pick this one.", pn = /* @__PURE__ */ xe({
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
      default: () => yt()
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
    const r = t, b = e, d = E(r.stockOptions), $ = E(r.config), L = E(r.numberFormat);
    ge(() => r.stockOptions, (i) => {
      d.value = i;
    }), ge(() => r.config, (i) => {
      $.value = i;
    });
    const C = p(() => {
      if (r.serverPagination)
        return { ...r.serverPagination };
    }), {
      activeFilters: M,
      searchQuery: _,
      sortBy: k,
      sortOrder: F,
      displayMode: K,
      currentPage: ue,
      filteredStock: ie,
      paginatedStock: X,
      selectedStock: R,
      totalItems: j,
      isLoading: ve,
      applyFilter: de,
      removeFilter: ae,
      clearFilters: re,
      goToPage: H,
      toggleStockSelection: g,
      isStockSelected: u,
      clearSelection: v,
      selectById: S,
      createInputStock: z,
      getUniqueValues: y,
      getFieldRange: D,
      getFilterOptionCounts: ke
    } = $t({
      stockOptions: d,
      config: $,
      numberFormat: L,
      serverPagination: C.value
    }), { addNotice: Fe } = Ct(), ce = ft(_t, []), U = E(!1), O = E(1), J = E(/* @__PURE__ */ new Map());
    function me(i, c, l) {
      for (const I of i)
        I.customData = {
          ...I.customData || {},
          selectionId: c,
          ...l?.name && { stockName: l.name },
          ...l?.material && { materialLabel: l.material }
        }, l?.extras && wt(I, l.extras);
      b("stock-added", i);
    }
    const Z = p(() => r.config.itemsPerPage || 20), he = p(() => r.serverPagination ? [] : je(ie.value)), pe = p(() => r.serverPagination ? [] : je(R.value)), Te = p(() => {
      const i = U.value ? pe.value : he.value, l = ((U.value ? O.value : ue.value) - 1) * Z.value;
      return i.slice(l, l + Z.value);
    }), ye = p(() => r.serverPagination ? X.value : Te.value.flatMap((i) => i.items)), { groupedStock: Ue, getFilteredOutThicknesses: Me } = Ot(ye, M), we = p(
      () => r.serverPagination ? Ue.value : Te.value
    );
    function Be(i) {
      const c = /* @__PURE__ */ new Set();
      for (const l of i.items)
        u(l) && l.t != null && c.add(l.t);
      return c;
    }
    const fe = p(() => {
      const i = /* @__PURE__ */ new Map();
      for (const c of ye.value)
        i.set(Y(c), c.name || c.material || "");
      return i;
    }), Ce = p(() => {
      const i = r.serverPagination ? we.value.map((l) => l.representative) : r.stockOptions.slice(0, rn);
      if (!i.length) return "";
      const c = i.map((l, I) => {
        const A = l.name || l.material;
        if (!A) return null;
        const B = l.db_id, V = l.cost && r.currency ? {
          "@type": "Offer",
          price: l.cost,
          priceCurrency: r.currency,
          availability: l.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, Ie = {
          "@type": "Product",
          name: A,
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
      return c.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: c
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
      }, c = r.serverPagination ? X.value : ie.value;
      for (const l of c)
        l.code && (i.code = !0), l.finish && (i.finish = !0), l.variant && (i.variant = !0), l.brand && (i.brand = !0), l.grain && (i.grain = !0), l.color && (i.color = !0), l.category && (i.category = !0), l.t != null && (i.thickness = !0), l.weight && (i.weight = !0), l.cost && (i.price = !0), l.q != null && !l.unlimitedQuantity && (i.quantity = !0), l.tags?.length && (i.tags = !0);
      return i;
    }), Pe = p(() => r.serverPagination ? U.value ? R.value.length : j.value : U.value ? pe.value.length : he.value.length), f = p(() => {
      const i = Pe.value;
      return Math.max(1, Math.ceil(i / Z.value));
    }), x = p(() => U.value ? O.value : ue.value);
    function W(i) {
      const c = f.value, l = Math.max(1, Math.min(i, c));
      U.value ? O.value = l : H(l);
    }
    ge(he, (i) => {
      if (r.serverPagination || U.value) return;
      const c = Math.max(1, Math.ceil(i.length / Z.value));
      ue.value > c && H(c);
    }), ge(U, () => {
      O.value = 1;
    }), ge(() => R.value.length, (i) => {
      i === 0 && U.value && (U.value = !1);
      const c = r.serverPagination ? i : pe.value.length, l = Math.max(1, Math.ceil(c / Z.value));
      O.value > l && (O.value = l), R.value.length > 0 && b("labels-changed", /* @__PURE__ */ new Map());
    });
    const T = p(() => r.loading || ve.value), Q = E(!1);
    ge(R, (i) => {
      Q.value || (ce.value = i.map((c) => Y(c)));
    }, { deep: !0 });
    async function Le(i) {
      if (!r.serverPagination) return null;
      const { apiUrl: c, orgSlug: l, isCustomDomain: I } = r.serverPagination, A = I ? `${c}ecommerce/stock` : `${c}ecommerce/${l}/stock`;
      try {
        const B = new URL(A);
        B.searchParams.set("limit", "1");
        const V = {};
        if (/^[a-f0-9]{24}$/i.test(i))
          V._id = i;
        else {
          const _e = i.split("-");
          if (_e.length >= 4) {
            const nt = parseFloat(_e.pop()), ot = parseFloat(_e.pop()), it = parseFloat(_e.pop()), at = _e.join("-");
            V.material = at, V.l = it, V.w = ot, V.t = nt;
          } else
            return null;
        }
        B.searchParams.set("filters", JSON.stringify(V));
        const Ie = await fetch(B.toString(), { credentials: "include" });
        if (!Ie.ok) return null;
        const We = (await Ie.json()).items || [];
        if (We.length === 0) return null;
        const qe = We[0];
        return Y(qe) !== i ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: i, got: Y(qe) }), null) : qe;
      } catch {
        return null;
      }
    }
    async function ne() {
      if (ce.value.length) {
        Q.value = !0;
        try {
          const i = [...ce.value], c = [], l = [];
          for (const A of i) {
            let B = r.stockOptions.find((V) => Y(V) === A);
            !B && r.serverPagination && (B = await Le(A)), B && (c.push(A), l.push(B));
          }
          const I = i.length - c.length;
          I > 0 && (ce.value = c, Fe({
            message: I === 1 ? "A previously selected material is no longer available" : `${I} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const A of l) {
            const B = Y(A);
            if (!u(A)) {
              g(A);
              const V = z(A);
              Ve([V], A), J.value.set(B, [V]), me([V], B, A);
            }
          }
        } finally {
          Q.value = !1;
        }
      }
    }
    gt(async () => {
      if (!r.singleSelect) {
        if (r.initialProductId) {
          const i = S(r.initialProductId);
          if (!i) return;
          const c = Y(i), l = z(i);
          Ve([l], i), J.value.set(c, [l]), me([l], c, i);
          return;
        }
        await ne(), b("selections-restored", R.value.length);
      }
    });
    const ee = p(() => {
      const i = r.config.availableFilters.filter((c) => {
        const l = y(c.field);
        return l.length > 0 && l.some((I) => I != null);
      });
      return i.length === 0 && M.value.length > 0 ? r.config.availableFilters : i;
    }), $e = p(() => R.value.length === 0 ? null : R.value[0].db_sawId || null);
    function ze(i) {
      if (!$e.value) return !1;
      const c = i.db_sawId;
      return c ? c !== $e.value : !1;
    }
    function Ze(i) {
      return ze(i) ? cn : "";
    }
    function Ve(i, c) {
      const l = c.name || c.material;
      if (l)
        for (const I of i)
          I.material = l;
    }
    async function Re(i) {
      if (ze(i)) return;
      if (r.singleSelect) {
        b("single-pick", i);
        return;
      }
      const c = u(i);
      g(i);
      const l = Y(i);
      if (c) {
        const I = J.value.get(l);
        I ? (I.forEach(Oe), J.value.delete(l)) : Oe(z(i));
      } else {
        const I = z(i);
        Ve([I], i), J.value.set(l, [I]), me([I], l, i);
      }
    }
    function Oe(i) {
      b("stock-removed", i);
    }
    async function et(i) {
      i.items.every((l) => u(l)) ? await He(i) : await Ee(i);
    }
    async function Ee(i) {
      for (const c of i.items)
        ze(c) || u(c) || await Re(c);
    }
    async function He(i) {
      for (const c of i.items)
        u(c) && await Re(c);
    }
    async function tt(i, c) {
      await Re(i);
    }
    function st() {
      for (const i of R.value) {
        const c = Y(i), l = J.value.get(c);
        l ? l.forEach(Oe) : Oe(z(i));
      }
      J.value.clear(), v(), ce.value = [], U.value = !1;
    }
    function lt(i) {
      b("order-sample", i);
    }
    return P({
      applyFilter: de,
      removeFilter: ae,
      clearFilters: re,
      clearSelection: v,
      selectedStock: R,
      filteredStock: ie,
      getUniqueValues: y,
      getFieldRange: D
    }), (i, c) => (s(), n("section", Wl, [
      Ce.value ? (s(), se(vt("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: Ce.value
      }, null, 8, ["innerHTML"])) : m("", !0),
      t.debug ? (s(), n("div", Jl, [
        c[15] || (c[15] = a("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        a("div", Ql, [
          c[6] || (c[6] = a("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          a("pre", Yl, o(JSON.stringify(h(ce), null, 2)), 1)
        ]),
        a("div", Xl, [
          a("strong", Zl, "selectedStock (" + o(h(R).length) + " items):", 1),
          (s(!0), n(N, null, G(h(R), (l) => (s(), n("div", {
            key: h(Y)(l),
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              c[7] || (c[7] = a("span", { style: { color: "#ff0" } }, "getStockId:", -1)),
              oe(" " + o(h(Y)(l)), 1)
            ]),
            a("div", null, [
              c[8] || (c[8] = a("span", { style: { color: "#ff0" } }, "db_id:", -1)),
              oe(" " + o(l.db_id || "(none)"), 1)
            ]),
            a("div", null, [
              c[9] || (c[9] = a("span", { style: { color: "#ff0" } }, "code:", -1)),
              oe(" " + o(l.code || "(none)"), 1)
            ]),
            a("div", null, [
              c[10] || (c[10] = a("span", { style: { color: "#ff0" } }, "material:", -1)),
              oe(" " + o(l.material), 1)
            ]),
            a("div", null, [
              c[11] || (c[11] = a("span", { style: { color: "#ff0" } }, "name:", -1)),
              oe(" " + o(l.name), 1)
            ]),
            a("div", null, [
              c[12] || (c[12] = a("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
              oe(" " + o(l.l) + " × " + o(l.w) + " × " + o(l.t), 1)
            ]),
            a("div", null, [
              c[13] || (c[13] = a("span", { style: { color: "#ff0" } }, "variant:", -1)),
              oe(" " + o(l.variant || "(none)"), 1)
            ])
          ]))), 128))
        ]),
        a("div", en, [
          a("strong", tn, "materialStockMap (" + o(J.value.size) + " entries):", 1),
          (s(!0), n(N, null, G(J.value, ([l, I]) => (s(), n("div", {
            key: l,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              c[14] || (c[14] = a("span", { style: { color: "#ff0" } }, "key:", -1)),
              oe(" " + o(l) + " → ", 1),
              a("span", sn, o(I.length) + " InputStock(s)", 1)
            ]),
            (s(!0), n(N, null, G(I, (A, B) => (s(), n("div", {
              key: B,
              style: { "margin-left": "12px" }
            }, o(A.material) + " " + o(A.l) + "×" + o(A.w) + "×" + o(A.t) + " db_id=" + o(A.db_id || "(none)") + " code=" + o(A.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : m("", !0),
      t.config.enableSearch || t.config.sortOptions.length > 0 ? (s(), n("div", ln, [
        t.config.enableSearch ? (s(), se(St, {
          key: 0,
          modelValue: h(_),
          "onUpdate:modelValue": c[0] || (c[0] = (l) => Ge(_) ? _.value = l : null)
        }, null, 8, ["modelValue"])) : m("", !0),
        t.config.sortOptions.length > 0 ? (s(), se(xt, {
          key: 1,
          "sort-by": h(k),
          "onUpdate:sortBy": c[1] || (c[1] = (l) => Ge(k) ? k.value = l : null),
          "sort-order": h(F),
          "onUpdate:sortOrder": c[2] || (c[2] = (l) => Ge(F) ? F.value = l : null),
          "available-fields": t.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : m("", !0)
      ])) : m("", !0),
      ee.value.length > 0 || t.preAppliedChips.length > 0 ? (s(), se(bl, {
        key: 3,
        "filter-configs": ee.value,
        "active-filters": h(M),
        "get-unique-values": h(y),
        "get-field-range": h(D),
        "get-filter-option-counts": h(ke),
        "pre-applied-chips": t.preAppliedChips,
        onApplyFilter: h(de),
        onRemoveFilter: h(ae),
        onClearFilters: h(re)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : m("", !0),
      Ke(Hl, {
        "total-results": Pe.value,
        "display-mode": h(K),
        loading: T.value,
        "has-active-filters": h(M).length > 0,
        "current-page": x.value,
        "total-pages": f.value,
        "visible-columns": le.value,
        "onUpdate:displayMode": c[3] || (c[3] = (l) => K.value = l),
        onClearFilters: h(re),
        onGoToPage: W
      }, {
        default: Se(() => [
          (s(!0), n(N, null, G(we.value, (l) => (s(), se(js, {
            key: l.groupKey,
            stock: l.representative,
            "is-selected": h(u)(l.representative),
            "is-disabled": ze(l.representative),
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
            onToggleSelection: Re,
            onToggleGroup: et,
            onSelectGroup: Ee,
            onDeselectGroup: He,
            onToggleThickness: tt,
            onOrderSample: lt
          }, null, 8, ["stock", "is-selected", "is-disabled", "disabled-reason", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Ke(mt, { name: "selection-bar" }, {
        default: Se(() => [
          r.showSelectionBar && h(R).length > 0 ? (s(), n("div", nn, [
            a("div", on, [
              a("span", an, o(h(R).length) + " " + o(h(R).length === 1 ? "material" : "materials") + " selected ", 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: c[4] || (c[4] = (l) => U.value = !U.value)
              }, o(U.value ? "Show all" : "Show selected"), 1),
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
              onClick: c[5] || (c[5] = (l) => b("selection-confirmed", h(R)))
            }, o(h(w)("stockFilter.create_cut_list")), 5)
          ])) : m("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  pn as default
};
