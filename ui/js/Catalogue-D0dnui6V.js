import { x as p, d as xe, k as ve, o as s, j as le, p as Se, c as n, t as o, F as U, f as K, b as m, a, s as H, m as Ee, u as h, V as ct, h as Qe, N as Ne, w as pe, n as se, g as G, i as oe, e as ut, P as dt, W as ft, l as gt, G as vt, X as Ke, Y as mt } from "./vendor-vue-DcIxm_xE.js";
import { S as ht, _ as pt, L as Ze, B as bt, y as kt, C as Ye, M as yt, n as wt, D as Ct, u as $t } from "./EcommerceCalculator-xTmaI3ss.js";
import { t as w } from "./i18n-BsG8Q9fA.js";
import { u as _t, g as Y, S as St } from "./Vanilla-CzFaMymj.js";
import { Icon as xt } from "./index-DLa-cABK.js";
import { _ as Be } from "./Launch-CoGHL0vS.js";
import { C as Ft, a as Tt } from "./CatalogueSort-BmB374sp.js";
const Mt = [
  "material",
  "name",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "imageUrl",
  "db_sawId"
], Pt = 5e3, Ae = /* @__PURE__ */ new Map(), Lt = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function Rt(t) {
  if (!t) return t;
  const P = Ae.get(t);
  if (P !== void 0) return P;
  const e = t.replace(Lt, "");
  return Ae.size >= Pt && Ae.clear(), Ae.set(t, e), e;
}
function zt(t) {
  const P = [];
  for (const c of Mt) {
    const b = t[c];
    P.push(b != null ? String(b) : "");
  }
  t.variant ? P.push(Rt(t.code ?? "")) : P.push("");
  const e = t.extras;
  if (e)
    for (const c of ht)
      P.push(e[c] ? "1" : "0");
  else
    P.push("0000");
  return P.join("");
}
function je(t) {
  return t.length > 0 && t[0].thicknessGroup ? Ot(t) : It(t);
}
function Ot(t) {
  const P = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), c = [];
  for (const f of t) {
    const _ = f.thicknessGroup;
    if (!_) {
      const $ = `__solo_${f.db_id || Math.random()}`;
      P.set($, [f]), c.push($);
      continue;
    }
    const L = _.groupKey;
    P.has(L) || (P.set(L, []), e.set(L, _), c.push(L)), P.get(L).push(f);
  }
  const b = [];
  for (const f of c) {
    const _ = P.get(f);
    _.sort(($, M) => ($.t ?? 0) - (M.t ?? 0));
    const L = e.get(f);
    b.push({
      groupKey: f,
      items: _,
      thicknesses: L?.thicknesses || _.map(($) => $.t).filter(($) => $ != null),
      dimensions: L?.dimensions || et(_),
      representative: _[0],
      priceRange: L?.priceRange || null,
      weightRange: L?.weightRange || null
    });
  }
  return b;
}
function et(t) {
  const P = /* @__PURE__ */ new Set(), e = [];
  for (const c of t) {
    if (typeof c.l != "number" || typeof c.w != "number") continue;
    const b = `${c.l}x${c.w}`;
    P.has(b) || (P.add(b), e.push({ l: c.l, w: c.w }));
  }
  return e;
}
function It(t) {
  const P = /* @__PURE__ */ new Map(), e = [];
  for (const b of t) {
    if (b.t == null) {
      const _ = `__solo_${b.db_id || Math.random()}`;
      P.set(_, [b]), e.push(_);
      continue;
    }
    const f = zt(b);
    P.has(f) || (P.set(f, []), e.push(f)), P.get(f).push(b);
  }
  const c = [];
  for (const b of e) {
    const f = P.get(b);
    f.sort((k, F) => (k.t ?? 0) - (F.t ?? 0));
    const _ = [...new Set(f.map((k) => k.t).filter((k) => k != null))].sort((k, F) => k - F), L = f.map((k) => k.cost).filter((k) => k != null && k > 0);
    let $ = null;
    if (L.length > 1) {
      const k = Math.min(...L), F = Math.max(...L);
      k !== F && ($ = { min: k, max: F });
    }
    const M = f.map((k) => k.weight).filter((k) => k != null && k > 0);
    let S = null;
    if (M.length > 1) {
      const k = Math.min(...M), F = Math.max(...M);
      k !== F && (S = { min: k, max: F });
    }
    c.push({
      groupKey: b,
      items: f,
      thicknesses: _,
      dimensions: et(f),
      representative: f[0],
      priceRange: $,
      weightRange: S
    });
  }
  return c;
}
function Xe(t, P) {
  const e = P.find((b) => b.field === "t");
  if (!e) return !1;
  const c = e.value;
  return Array.isArray(c) ? !c.some((b) => Number(b) === t) : c != null ? Number(c) !== t : !1;
}
function Dt(t, P) {
  const e = p(() => je(t.value));
  function c($, M) {
    return $.items.find((S) => S.t === M);
  }
  function b($, M, S, k) {
    return $.items.find((F) => F.l === M && F.w === S && F.t === k);
  }
  function f($, M, S) {
    const k = /* @__PURE__ */ new Set();
    for (const F of $.items)
      F.l === M && F.w === S && typeof F.t == "number" && k.add(F.t);
    return [...k].sort((F, E) => F - E);
  }
  function _($, M) {
    const S = /* @__PURE__ */ new Set(), k = [];
    for (const F of $.items) {
      if (F.t !== M || typeof F.l != "number" || typeof F.w != "number") continue;
      const E = `${F.l}x${F.w}`;
      S.has(E) || (S.add(E), k.push({ l: F.l, w: F.w }));
    }
    return k;
  }
  function L($) {
    const M = /* @__PURE__ */ new Set();
    for (const S of $.thicknesses)
      Xe(S, P.value) && M.add(S);
    return M;
  }
  return {
    groupedStock: e,
    getItemForThickness: c,
    getItemForCombo: b,
    getThicknessesForDimension: f,
    getDimensionsForThickness: _,
    getFilteredOutThicknesses: L,
    isThicknessFilteredOut: Xe
  };
}
const Nt = { key: 0 }, At = {
  key: 0,
  class: "bim-description"
}, Bt = {
  key: 1,
  class: "bim-empty"
}, Ut = {
  key: 2,
  class: "bim-links"
}, Vt = ["href"], qt = { key: 1 }, Gt = /* @__PURE__ */ xe({
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
      const S = (M.url || "").toLowerCase(), k = (M.label || "").toLowerCase();
      return /\.pdf(\?|$|#)/.test(S) || k.includes("pdf") ? "file-pdf" : /\/3d|\bviewer\b|visualization/.test(S) || k.includes("3d") || k.includes("viewer") ? "cube" : k.includes("spec") || k.includes("datasheet") ? "file-lines" : "arrow-up-right-from-square";
    }
    const e = t, c = H(!1), b = H(!1), f = H(null), _ = () => typeof e.description == "string" && e.description.trim() !== "" || Array.isArray(e.urls) && e.urls.length > 0;
    let L = "";
    async function $() {
      if (!e.open) return;
      if (_()) {
        f.value = {
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
      if (!(M === L && f.value)) {
        L = M, c.value = !0, b.value = !1, f.value = null;
        try {
          const k = `${e.apiUrl.endsWith("/") ? e.apiUrl : e.apiUrl + "/"}catalogues/${encodeURIComponent(e.catalogueKey)}/categories/${encodeURIComponent(e.brandName)}`, F = await fetch(k, { credentials: "include" });
          if (!F.ok) {
            b.value = !0;
            return;
          }
          f.value = await F.json();
        } catch {
          b.value = !0;
        } finally {
          c.value = !1;
        }
      }
    }
    return ve(
      () => [e.open, e.brandName, e.catalogueKey, e.description, e.urls],
      $,
      { immediate: !0, deep: !0 }
    ), (M, S) => (s(), le(pt, {
      size: "sm",
      compact: !1,
      open: t.open,
      onClosed: S[2] || (S[2] = (k) => M.$emit("close"))
    }, {
      header: Se(() => [
        a("div", null, [
          a("h3", null, o(t.brandName), 1),
          c.value ? (s(), le(Ze, {
            key: 0,
            size: "small",
            label: "Loading…",
            class: "bim-sub"
          })) : m("", !0)
        ]),
        a("button", {
          class: "bim-close",
          "aria-label": "Close",
          onClick: S[0] || (S[0] = (k) => M.$emit("close"))
        }, "×")
      ]),
      footer: Se(() => [
        a("button", {
          class: "c-btn",
          onClick: S[1] || (S[1] = (k) => M.$emit("close"))
        }, "Done")
      ]),
      default: Se(() => [
        !c.value && !b.value && f.value ? (s(), n("div", Nt, [
          f.value.fullDescription ? (s(), n("p", At, o(f.value.fullDescription), 1)) : (s(), n("p", Bt, "No description available for this brand yet.")),
          f.value.urls && f.value.urls.length ? (s(), n("ul", Ut, [
            (s(!0), n(U, null, K(f.value.urls, (k) => (s(), n("li", {
              key: k.url
            }, [
              a("a", {
                href: k.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                Ee(h(xt), {
                  icon: ["fass", P(k)],
                  class: "bim-link-icon"
                }, null, 8, ["icon"]),
                a("span", null, o(k.label), 1)
              ], 8, Vt)
            ]))), 128))
          ])) : m("", !0)
        ])) : !c.value && b.value ? (s(), n("div", qt, [...S[3] || (S[3] = [
          a("p", { class: "bim-empty" }, "We don't have additional information about this brand yet.", -1)
        ])])) : m("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), Kt = /* @__PURE__ */ Be(Gt, [["__scopeId", "data-v-cc403927"]]), Et = ["onKeydown"], jt = { class: "stock-filter-row__thumb" }, Ht = ["src", "alt"], Wt = { class: "stock-filter-row__material" }, Jt = { class: "stock-filter-row__name" }, Qt = {
  key: 0,
  class: "stock-filter-row__code"
}, Yt = {
  key: 0,
  class: "stock-filter-row__cell"
}, Xt = {
  key: 1,
  class: "stock-filter-row__cell"
}, Zt = {
  key: 2,
  class: "stock-filter-row__cell"
}, es = {
  key: 3,
  class: "stock-filter-row__cell"
}, ts = {
  key: 4,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, ss = {
  key: 5,
  class: "stock-filter-row__color"
}, ls = { key: 1 }, ns = {
  key: 6,
  class: "stock-filter-row__thickness"
}, os = {
  key: 0,
  class: "c-loz-group c-loz-group--tight"
}, is = ["disabled", "onClick"], as = {
  key: 1,
  class: "thickness-badge"
}, rs = {
  key: 7,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, cs = {
  key: 8,
  class: "stock-filter-row__weight"
}, us = {
  key: 9,
  class: "stock-filter-row__price"
}, ds = {
  key: 0,
  class: "price__original"
}, fs = {
  key: 1,
  class: "price__badge"
}, gs = { class: "stock-filter-row__action" }, vs = ["disabled"], ms = ["onKeydown"], hs = { class: "stock-filter-card__image-wrapper" }, ps = ["src", "alt"], bs = {
  key: 1,
  class: "c-badge stock-filter-card__badge--brand"
}, ks = {
  key: 2,
  class: "c-badge stock-filter-card__badge--thickness"
}, ys = {
  key: 3,
  class: "c-badge stock-filter-card__badge--thickness"
}, ws = { class: "stock-filter-card__badges-bottom" }, Cs = {
  key: 1,
  class: "c-badge stock-filter-card__badge--finish"
}, $s = {
  key: 2,
  class: "c-badge stock-filter-card__badge--grain"
}, _s = { class: "stock-filter-card__content" }, Ss = { class: "stock-filter-card__title" }, xs = {
  key: 0,
  class: "stock-filter-card__code"
}, Fs = {
  key: 1,
  class: "stock-filter-card__specs-inline"
}, Ts = {
  key: 3,
  class: "stock-filter-card__spec-badges"
}, Ms = {
  key: 4,
  class: "stock-filter-card__dimensions"
}, Ps = {
  key: 5,
  class: "c-loz-group"
}, Ls = ["disabled", "onClick"], Rs = {
  key: 6,
  class: "stock-filter-card__extras"
}, zs = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, Os = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Is = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Ds = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Ns = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, As = { class: "stock-filter-card__footer" }, Bs = {
  key: 0,
  class: "stock-filter-card__price"
}, Us = { class: "price__value" }, Vs = {
  key: 1,
  class: "stock-filter-card__price"
}, qs = {
  key: 0,
  class: "price__original"
}, Gs = {
  key: 1,
  class: "price__badge"
}, Ks = { class: "stock-filter-card__actions" }, Es = ["disabled"], js = /* @__PURE__ */ xe({
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
    const e = t, c = P, b = H(!1), f = H(!1), _ = H(!1), L = p(() => e.stock._catalogueKey), $ = p(() => bt(e.stock)), M = p(() => $.value.brand || $.value.variant || $.value.material || ""), S = p(() => e.stock._hasDetailContent === !0), k = p(() => (e.stock.description || "").trim() || void 0), F = p(() => {
      const d = e.stock.urls;
      return Array.isArray(d) ? d.filter((C) => C && typeof C.url == "string" && C.url.trim()).map((C) => ({ label: String(C.label || C.url), url: String(C.url) })) : [];
    }), E = p(() => !!k.value || F.value.length > 0), de = p(() => e.stock._source === "library"), ie = p(() => O.value ? !1 : E.value || de.value && S.value && !!M.value && !!L.value && !!e.apiUrl), X = p(() => e.stock.available !== !1), z = p(() => e.isDisabled), j = p(() => e.stock.discount && e.stock.discount > 0), me = p(() => {
      const d = e.stock.sample;
      return d?.enabled ? d.price && d.price > 0 ? `${w("stockFilter.orderSample")} (${e.formatPrice(d.price, e.locale)})` : w("stockFilter.freeSample") : "";
    }), fe = p(() => e.stock.cost ? j.value ? e.stock.cost * (1 - e.stock.discount / 100) : e.stock.cost : 0), ae = p(() => e.stock.cost ? e.formatPrice(e.stock.cost, e.locale) : "N/A"), re = p(() => e.stock.cost ? e.formatPrice(fe.value, e.locale) : "N/A"), W = p(() => {
      const d = e.stock.color;
      return d && typeof d == "object" && "hex" in d && d.hex ? String(d.hex) : e.stock.colorHex || "";
    }), g = p(() => {
      const d = e.stock.color;
      return typeof d == "string" ? d : d && typeof d == "object" && "name" in d ? String(d.name || "") : "";
    }), u = p(() => (!e.stock.imageUrl || b.value) && !!W.value), v = p(() => u.value ? { background: W.value } : void 0), x = p(() => W.value ? kt(W.value) : "#fff"), R = p(() => {
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
      const d = [], C = /* @__PURE__ */ new Set(), A = (te) => {
        if (te == null) return;
        const Q = String(te).trim();
        if (!Q) return;
        const ze = Q.toLowerCase();
        C.has(ze) || (C.add(ze), d.push(Q));
      }, T = ue.value.toLowerCase(), ee = (te) => {
        if (te == null) return;
        const Q = String(te).trim();
        !Q || T.includes(Q.toLowerCase()) || A(Q);
      };
      ee($.value.variant);
      const $e = O.value && e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : e.stock.weight ? `${e.stock.weight}kg` : "";
      return $e && ee($e), d;
    }), D = p(() => {
      const d = [], C = ($.value.material || "").trim(), A = (e.stock.category || "").trim();
      return C && d.push({ kind: "material", label: C }), A && A.toLowerCase() !== C.toLowerCase() && d.push({ kind: "category", label: A }), d;
    });
    function be(d, C) {
      return e.unitSystem === "imperial" ? `${(d / 25.4).toFixed(1)}" × ${(C / 25.4).toFixed(1)}"` : `${d} × ${C}`;
    }
    const Fe = p(() => (e.group?.dimensions?.length ? e.group.dimensions : e.stock.l && e.stock.w ? [{ l: e.stock.l, w: e.stock.w }] : []).map((C) => be(C.l, C.w))), ce = p(() => {
      if (e.stock.t == null) return "";
      const d = ye.value ? " [B]" : "";
      return e.unitSystem === "imperial" ? `${(e.stock.t / 25.4).toFixed(2)}"${d}` : `${e.stock.t} mm${d}`;
    }), B = p(() => {
      const d = e.stock.extras;
      return d ? !!(d.banding || d.finish || d.planing || d.machining) : !1;
    }), O = p(() => e.group && e.group.items.length > 1), J = p(() => {
      if (!O.value || !e.selectedThicknesses) return !1;
      const d = e.selectedThicknesses.size;
      return d > 0 && d < e.group.thicknesses.length;
    }), he = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size === e.group.thicknesses.length), Z = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size > 0);
    function ke(d) {
      return (e.group?.items ?? [e.stock]).some(
        (A) => A?.t === d && !!Ye(A)
      );
    }
    const ye = p(() => (e.group?.items ?? [e.stock]).some(
      (C) => !!Ye(C)
    ));
    function ge(d) {
      const C = ke(d) ? " [B]" : "";
      return e.unitSystem === "imperial" ? `${(d / 25.4).toFixed(2)}"${C}` : `${d}mm${C}`;
    }
    const we = p(() => e.group?.priceRange ? `${e.formatPrice(e.group.priceRange.min, e.locale)} – ${e.formatPrice(e.group.priceRange.max, e.locale)}` : null), Ue = p(() => e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : null);
    function Te(d, C) {
      if (C.stopPropagation(), e.filteredOutThicknesses?.has(d)) return;
      const A = e.group?.items.find((T) => T.t === d);
      A && c("toggle-thickness", A, d);
    }
    function Me() {
      !X.value || z.value || (O.value && e.group ? c("toggle-group", e.group) : c("toggle-selection", e.stock));
    }
    function Pe() {
      !X.value || z.value || (O.value && e.group ? Z.value ? c("deselect-group", e.group) : c("select-group", e.group) : c("toggle-selection", e.stock));
    }
    const Le = p(() => {
      if (!e.group || e.group.thicknesses.length < 2) return "";
      const d = e.group.thicknesses[0], C = e.group.thicknesses[e.group.thicknesses.length - 1];
      return e.unitSystem === "imperial" ? `${(d / 25.4).toFixed(2)}" – ${(C / 25.4).toFixed(2)}"` : `${d} – ${C}mm`;
    }), Re = p(() => {
      const d = ["60px", "2fr"];
      return e.visibleColumns.finish && d.push("1fr"), e.visibleColumns.brand && d.push("1fr"), e.visibleColumns.variant && d.push("1fr"), e.visibleColumns.category && d.push("1fr"), e.visibleColumns.grain && d.push("80px"), e.visibleColumns.color && d.push("100px"), e.visibleColumns.thickness && d.push(O.value ? "minmax(120px, auto)" : "80px"), e.visibleColumns.quantity && d.push("80px"), e.visibleColumns.weight && d.push("80px"), e.visibleColumns.price && d.push("100px"), d.push("50px"), { "grid-template-columns": d.join(" ") };
    }), ue = p(() => e.displayLabel ? e.displayLabel : $.value.productLabel && $.value.productLabel !== "(unnamed)" ? $.value.productLabel : `${e.stock.material} ${e.stock.l}×${e.stock.w}`), Ce = p(() => $.value.code ? $.value.code.toLowerCase() !== ue.value.toLowerCase() : !1);
    function ne() {
      Me();
    }
    function Ve() {
      c("order-sample", e.stock);
    }
    return (d, C) => {
      const A = ct("tooltip");
      return s(), n(U, null, [
        t.displayMode === "list" ? Qe((s(), n("article", {
          key: 0,
          class: G(["stock-filter-row", {
            "stock-filter-row--selected": O.value ? he.value : t.isSelected,
            "stock-filter-row--partial": J.value,
            "stock-filter-row--unavailable": !X.value,
            "stock-filter-row--disabled": z.value
          }]),
          style: se(Re.value),
          role: "button",
          tabindex: "0",
          onClick: ne,
          onKeydown: [
            Ne(ne, ["enter"]),
            Ne(pe(ne, ["prevent"]), ["space"])
          ]
        }, [
          a("div", jt, [
            a("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: se(v.value)
            }, null, 4),
            t.stock.imageUrl && !b.value ? (s(), n("img", {
              key: 0,
              class: G(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": f.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: C[0] || (C[0] = (T) => f.value = !0),
              onError: C[1] || (C[1] = (T) => b.value = !0)
            }, null, 42, Ht)) : m("", !0)
          ]),
          a("div", Wt, [
            a("h3", Jt, o(ue.value), 1),
            Ce.value ? (s(), n("span", Qt, o($.value.code), 1)) : m("", !0)
          ]),
          t.visibleColumns.finish ? (s(), n("div", Yt, o(t.stock.finish || ""), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", Xt, o(t.stock.brand || ""), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Zt, o(t.stock.variant || ""), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", es, o(t.stock.category || ""), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", ts, o(R.value), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", ss, [
            W.value ? (s(), n("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: se({ backgroundColor: W.value })
            }, null, 4)) : m("", !0),
            g.value ? (s(), n("span", ls, o(g.value), 1)) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", ns, [
            O.value ? (s(), n("div", os, [
              (s(!0), n(U, null, K(t.group.thicknesses, (T) => (s(), n("button", {
                key: T,
                type: "button",
                class: G(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T),
                  active: t.selectedThicknesses?.has(T)
                }]),
                style: se({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(T) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(T),
                onClick: (ee) => Te(T, ee)
              }, o(ge(T)), 15, is))), 128))
            ])) : t.stock.t != null ? (s(), n("span", as, [
              oe(o(t.stock.t), 1),
              C[6] || (C[6] = a("small", null, "mm", -1))
            ])) : m("", !0)
          ])) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", rs, o(t.stock.unlimitedQuantity ? h(w)("stockFilter.inStock") : t.stock.q), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", cs, o(Ue.value || (t.stock.weight ? `${t.stock.weight}kg` : "")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", us, [
            j.value ? (s(), n("span", ds, o(ae.value), 1)) : m("", !0),
            a("span", {
              class: G(["price__value", { price__discounted: j.value }])
            }, o(re.value), 3),
            j.value ? (s(), n("span", fs, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
          ])) : m("", !0),
          a("div", gs, [
            a("button", {
              type: "button",
              class: G(["c-btn", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
              disabled: !X.value || z.value,
              onClick: pe(Pe, ["stop"])
            }, o((O.value ? Z.value : t.isSelected) ? "−" : "+"), 11, vs)
          ])
        ], 46, Et)), [
          [A, z.value && t.disabledReason ? t.disabledReason : ""]
        ]) : Qe((s(), n("article", {
          key: 1,
          class: G(["stock-filter-card", {
            "stock-filter-card--selected": O.value ? he.value : t.isSelected,
            "stock-filter-card--partial": J.value,
            "stock-filter-card--unavailable": !X.value,
            "stock-filter-card--disabled": z.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: ne,
          onKeydown: [
            Ne(ne, ["enter"]),
            Ne(pe(ne, ["prevent"]), ["space"])
          ]
        }, [
          a("div", hs, [
            a("div", {
              class: "stock-filter-card__image-placeholder",
              style: se(v.value)
            }, null, 4),
            t.stock.imageUrl && !b.value ? (s(), n("img", {
              key: 0,
              class: G(["stock-filter-card__image", { "stock-filter-card__image--loaded": f.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: C[2] || (C[2] = (T) => f.value = !0),
              onError: C[3] || (C[3] = (T) => b.value = !0)
            }, null, 42, ps)) : m("", !0),
            $.value.brand && !ue.value.toLowerCase().includes($.value.brand.toLowerCase()) ? (s(), n("span", bs, o($.value.brand), 1)) : m("", !0),
            O.value && Le.value ? (s(), n("span", ks, o(Le.value), 1)) : !O.value && t.stock.t != null ? (s(), n("span", ys, o(ce.value), 1)) : m("", !0),
            u.value && g.value ? (s(), n("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: se({ color: x.value })
            }, o(g.value), 5)) : m("", !0),
            a("div", ws, [
              g.value && !u.value ? (s(), n("span", {
                key: 0,
                class: "c-badge stock-filter-card__badge--color",
                style: se(W.value ? { background: W.value, color: x.value } : void 0)
              }, o(g.value), 5)) : m("", !0),
              t.stock.finish ? (s(), n("span", Cs, o(t.stock.finish), 1)) : m("", !0),
              R.value ? (s(), n("span", $s, "Grain: " + o(R.value), 1)) : m("", !0)
            ])
          ]),
          a("div", _s, [
            a("h3", Ss, o(ue.value), 1),
            Ce.value ? (s(), n("div", xs, o(t.stock.code), 1)) : m("", !0),
            y.value.length ? (s(), n("div", Fs, [
              (s(!0), n(U, null, K(y.value, (T, ee) => (s(), n("span", {
                key: ee,
                class: "spec-item"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            ie.value ? (s(), n("button", {
              key: 2,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: C[4] || (C[4] = pe((T) => _.value = !0, ["stop"]))
            }, o(h(w)("stockFilter.details")), 1)) : m("", !0),
            D.value.length ? (s(), n("div", Ts, [
              (s(!0), n(U, null, K(D.value, (T) => (s(), n("span", {
                key: T.kind,
                class: G(["c-badge", `spec-badge--${T.kind}`])
              }, o(T.label), 3))), 128))
            ])) : m("", !0),
            Fe.value.length ? (s(), n("div", Ms, [
              (s(!0), n(U, null, K(Fe.value, (T) => (s(), n("span", {
                key: T,
                class: "c-badge stock-filter-card__dim"
              }, o(T), 1))), 128))
            ])) : m("", !0),
            O.value ? (s(), n("div", Ps, [
              (s(!0), n(U, null, K(t.group.thicknesses, (T) => (s(), n("button", {
                key: T,
                type: "button",
                class: G(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T),
                  active: t.selectedThicknesses?.has(T)
                }]),
                style: se({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(T) && !t.filteredOutThicknesses?.has(T) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(T) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(T),
                onClick: (ee) => Te(T, ee)
              }, o(ge(T)), 15, Ls))), 128))
            ])) : m("", !0),
            B.value || t.stock.sample?.enabled ? (s(), n("div", Rs, [
              t.stock.sample?.enabled ? (s(), n("span", zs, o(h(w)("stockFilter.samplesAvailable")), 1)) : m("", !0),
              t.stock.extras?.banding ? (s(), n("span", Os, o(h(w)("stockFilter.banding")), 1)) : m("", !0),
              t.stock.extras?.finish ? (s(), n("span", Is, o(h(w)("stockFilter.finishOption")), 1)) : m("", !0),
              t.stock.extras?.planing ? (s(), n("span", Ds, o(h(w)("stockFilter.planing")), 1)) : m("", !0),
              t.stock.extras?.machining ? (s(), n("span", Ns, o(h(w)("stockFilter.machining")), 1)) : m("", !0)
            ])) : m("", !0)
          ]),
          a("div", As, [
            O.value && we.value ? (s(), n("div", Bs, [
              a("span", Us, o(we.value), 1)
            ])) : t.stock.cost ? (s(), n("div", Vs, [
              j.value ? (s(), n("span", qs, o(ae.value), 1)) : m("", !0),
              a("span", {
                class: G(["price__value", { price__discounted: j.value }])
              }, o(re.value), 3),
              j.value ? (s(), n("span", Gs, "-" + o(t.stock.discount) + "%", 1)) : m("", !0)
            ])) : m("", !0),
            a("div", Ks, [
              t.stock.sample?.enabled ? (s(), n("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: pe(Ve, ["stop"])
              }, o(me.value), 1)) : m("", !0),
              a("button", {
                type: "button",
                class: G(["c-btn c-btn--sm", { "c-btn--delete": O.value ? Z.value : t.isSelected }]),
                disabled: !X.value || z.value,
                onClick: pe(Pe, ["stop"])
              }, o((O.value ? Z.value : t.isSelected) ? h(w)("stockFilter.remove") : h(w)("stockFilter.select")), 11, Es)
            ])
          ])
        ], 42, ms)), [
          [A, z.value && t.disabledReason ? t.disabledReason : ""]
        ]),
        ie.value ? (s(), le(Kt, {
          key: 2,
          open: _.value,
          "brand-name": M.value,
          description: k.value,
          urls: F.value,
          "catalogue-key": L.value,
          "api-url": t.apiUrl,
          onClose: C[5] || (C[5] = (T) => _.value = !1)
        }, null, 8, ["open", "brand-name", "description", "urls", "catalogue-key", "api-url"])) : m("", !0)
      ], 64);
    };
  }
}), Hs = /* @__PURE__ */ Be(js, [["__scopeId", "data-v-6162d8fe"]]), Ws = { class: "stock-filter-panel" }, Js = { class: "filter-panel-content" }, Qs = {
  key: 0,
  class: "filter-summary"
}, Ys = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, Xs = ["title"], Zs = { class: "filter-summary__chip-field" }, el = { class: "filter-summary__chip-value" }, tl = { class: "filter-summary__chip-field" }, sl = { class: "filter-summary__chip-value" }, ll = ["aria-label", "onClick"], nl = { class: "filter-groups" }, ol = { class: "filter-group__header" }, il = { class: "filter-group__label" }, al = { class: "filter-group__content" }, rl = {
  key: 0,
  class: "filter-select"
}, cl = ["value", "onChange"], ul = { value: "" }, dl = ["value"], fl = {
  key: 2,
  class: "filter-range"
}, gl = { class: "filter-range__inputs" }, vl = ["value", "min", "max", "step", "onInput"], ml = ["value", "min", "max", "step", "onInput"], hl = {
  key: 3,
  class: "filter-boolean"
}, pl = { class: "filter-checkbox" }, bl = ["checked", "onChange"], kl = /* @__PURE__ */ xe({
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
    const e = t, c = P, b = H({}), f = p(() => e.activeFilters.length), _ = p(() => {
      const g = /* @__PURE__ */ new Set();
      for (const u of e.preAppliedChips)
        u.field && g.add(u.field);
      return g;
    }), L = p(
      () => e.filterConfigs.filter((g) => !_.value.has(g.field))
    );
    function $(g, u) {
      const v = F(g), x = S(u), R = v.find((y) => S(y.value) === x);
      return R ? R.label : String(u);
    }
    const M = p(() => {
      const g = [];
      for (const u of e.activeFilters) {
        const v = e.filterConfigs.find((y) => y.field === u.field);
        if (!v) continue;
        const x = k(v);
        if (u.type === "multiselect" && Array.isArray(u.value)) {
          for (const y of u.value)
            g.push({
              key: `${u.field}:${S(y)}`,
              fieldLabel: x,
              valueLabel: $(v, y),
              remove: () => {
                const D = u.value.filter((be) => S(be) !== S(y));
                D.length === 0 ? c("remove-filter", u.field) : c("apply-filter", u.field, D, "multiselect");
              }
            });
          continue;
        }
        let R;
        if (u.type === "range" && u.value && typeof u.value == "object") {
          const { min: y, max: D } = u.value;
          y !== void 0 && D !== void 0 ? R = `${y} – ${D}` : y !== void 0 ? R = `≥ ${y}` : D !== void 0 ? R = `≤ ${D}` : R = "";
        } else u.type === "boolean" ? R = v.label : R = $(v, u.value);
        g.push({
          key: u.field,
          fieldLabel: x,
          valueLabel: R,
          remove: () => {
            u.type === "range" && (b.value[u.field] = {}), c("remove-filter", u.field);
          }
        });
      }
      return g;
    });
    function S(g) {
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
      const u = e.getFilterOptionCounts?.(g.field) || /* @__PURE__ */ new Map(), v = u.size > 0, x = (y) => {
        if (!v) return;
        const D = typeof y == "object" && y !== null && "hex" in y ? y.hex : String(y);
        return u.get(D) ?? 0;
      };
      return g.options?.length ? g.options.map((y) => ({
        ...y,
        count: x(y.value)
      })) : e.getUniqueValues(g.field).map((y) => {
        const D = x(y);
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
    function E(g) {
      return e.activeFilters.find((v) => v.field === g)?.value;
    }
    function de(g, u) {
      const x = u.target.value;
      if (x === "")
        c("remove-filter", g);
      else {
        const R = x !== "" && !isNaN(Number(x)) ? Number(x) : x;
        c("apply-filter", g, R, "select");
      }
    }
    function ie(g) {
      return F(g).map((u) => ({
        value: S(u.value),
        label: u.count !== void 0 ? `${u.label} (${u.count})` : u.label,
        hidden: u.count === 0
      }));
    }
    function X(g) {
      const u = E(g);
      return Array.isArray(u) ? u.map(S) : [];
    }
    function z(g, u) {
      if (u.length === 0) {
        c("remove-filter", g);
        return;
      }
      const v = e.getUniqueValues(g), x = new Map(v.map((y) => [S(y), y])), R = u.map((y) => x.has(y) ? x.get(y) : y !== "" && !isNaN(Number(y)) ? Number(y) : y);
      c("apply-filter", g, R, "multiselect");
    }
    function j(g) {
      const u = e.getFieldRange(g);
      return u ? { min: Math.floor(u.min), max: Math.ceil(u.max) } : { min: void 0, max: void 0 };
    }
    function me(g) {
      const u = e.getFieldRange(g);
      if (!u) return 1;
      const v = u.max - u.min;
      if (v <= 0) return 1;
      const x = v / 100, R = Math.pow(10, Math.floor(Math.log10(x)));
      return Math.max(R, 0.01);
    }
    function fe(g, u) {
      if (b.value[g]?.[u] !== void 0)
        return b.value[g][u];
      const v = e.activeFilters.find((x) => x.field === g);
      if (v?.value && typeof v.value == "object")
        return v.value[u];
    }
    function ae(g, u, v) {
      const x = v.target, R = x.value ? Number(x.value) : void 0;
      b.value[g] || (b.value[g] = {}), b.value[g][u] = R;
      const y = b.value[g].min, D = b.value[g].max;
      y !== void 0 || D !== void 0 ? c("apply-filter", g, { min: y, max: D }, "range") : c("remove-filter", g);
    }
    function re(g, u) {
      u.target.checked ? c("apply-filter", g, !0, "boolean") : c("remove-filter", g);
    }
    function W() {
      b.value = {}, c("clear-filters");
    }
    return (g, u) => (s(), n("div", Ws, [
      a("div", Js, [
        f.value > 0 || t.preAppliedChips.length > 0 ? (s(), n("div", Qs, [
          a("div", Ys, [
            (s(!0), n(U, null, K(t.preAppliedChips, (v) => (s(), n("span", {
              key: `pre:${v.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: v.title || "Pre-applied by the product spec"
            }, [
              a("span", Zs, o(v.fieldLabel) + ":", 1),
              a("span", el, o(v.valueLabel), 1)
            ], 8, Xs))), 128)),
            (s(!0), n(U, null, K(M.value, (v) => (s(), n("span", {
              key: v.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              a("span", tl, o(v.fieldLabel) + ":", 1),
              a("span", sl, o(v.valueLabel), 1),
              a("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": h(w)("stockFilter.clear_filters"),
                onClick: v.remove
              }, "×", 8, ll)
            ]))), 128))
          ]),
          f.value > 0 ? (s(), n("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: W
          }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
        ])) : m("", !0),
        a("div", nl, [
          (s(!0), n(U, null, K(L.value, (v) => (s(), n("div", {
            key: v.field,
            class: "filter-group"
          }, [
            a("div", ol, [
              a("label", il, o(k(v)), 1)
            ]),
            a("div", al, [
              v.type === "select" ? (s(), n("div", rl, [
                a("select", {
                  value: E(v.field),
                  class: "filter-select-input",
                  onChange: (x) => de(v.field, x)
                }, [
                  a("option", ul, o(h(w)("stockFilter.all")), 1),
                  (s(!0), n(U, null, K(F(v), (x) => (s(), n("option", {
                    key: x.value,
                    value: x.value
                  }, o(x.label) + o(x.count !== void 0 ? ` (${x.count})` : ""), 9, dl))), 128))
                ], 40, cl)
              ])) : v.type === "multiselect" ? (s(), le(yt, {
                key: 1,
                id: `filter-${v.field}`,
                value: X(v.field),
                options: ie(v),
                placeholder: h(w)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (x) => z(v.field, x)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : v.type === "range" ? (s(), n("div", fl, [
                a("div", gl, [
                  a("input", {
                    value: fe(v.field, "min"),
                    min: j(v.field).min,
                    max: j(v.field).max,
                    step: me(v.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (x) => ae(v.field, "min", x)
                  }, null, 40, vl),
                  u[0] || (u[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                  a("input", {
                    value: fe(v.field, "max"),
                    min: j(v.field).min,
                    max: j(v.field).max,
                    step: me(v.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (x) => ae(v.field, "max", x)
                  }, null, 40, ml)
                ])
              ])) : v.type === "boolean" ? (s(), n("div", hl, [
                a("label", pl, [
                  a("input", {
                    checked: E(v.field) === !0,
                    type: "checkbox",
                    onChange: (x) => re(v.field, x)
                  }, null, 40, bl),
                  a("span", null, o(v.label), 1)
                ])
              ])) : m("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), yl = /* @__PURE__ */ Be(kl, [["__scopeId", "data-v-9e7cab3a"]]), wl = { class: "stock-filter-results" }, Cl = { class: "results-header" }, $l = { class: "results-info" }, _l = {
  key: 0,
  class: "results-count"
}, Sl = {
  key: 1,
  class: "results-count results-count--loading"
}, xl = { class: "results-controls" }, Fl = { class: "c-btn-group display-mode-toggle" }, Tl = ["title"], Ml = ["title"], Pl = {
  key: 1,
  class: "results-empty"
}, Ll = { class: "empty-message" }, Rl = { class: "th" }, zl = {
  key: 0,
  class: "th"
}, Ol = {
  key: 1,
  class: "th"
}, Il = {
  key: 2,
  class: "th"
}, Dl = {
  key: 3,
  class: "th"
}, Nl = {
  key: 4,
  class: "th"
}, Al = {
  key: 5,
  class: "th"
}, Bl = {
  key: 6,
  class: "th th--center"
}, Ul = {
  key: 7,
  class: "th th--center"
}, Vl = {
  key: 8,
  class: "th th--center"
}, ql = {
  key: 9,
  class: "th th--right"
}, Gl = {
  key: 3,
  class: "results-pagination"
}, Kl = ["disabled"], El = { class: "c-btn-group pagination-pages" }, jl = ["onClick"], Hl = ["disabled"], Wl = /* @__PURE__ */ xe({
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
      const f = ["60px", "2fr"];
      return e.visibleColumns.finish && f.push("1fr"), e.visibleColumns.brand && f.push("1fr"), e.visibleColumns.variant && f.push("1fr"), e.visibleColumns.category && f.push("1fr"), e.visibleColumns.grain && f.push("80px"), e.visibleColumns.color && f.push("100px"), e.visibleColumns.thickness && f.push("80px"), e.visibleColumns.quantity && f.push("80px"), e.visibleColumns.weight && f.push("80px"), e.visibleColumns.price && f.push("100px"), f.push("50px"), { "grid-template-columns": f.join(" ") };
    }), b = p(() => {
      const f = [], L = Math.floor(2.5);
      let $ = Math.max(1, e.currentPage - L), M = Math.min(e.totalPages, $ + 5 - 1);
      M === e.totalPages && ($ = Math.max(1, M - 5 + 1));
      for (let S = $; S <= M; S++)
        f.push(S);
      return f;
    });
    return (f, _) => (s(), n("div", wl, [
      a("header", Cl, [
        a("div", $l, [
          t.loading ? (s(), n("div", Sl, o(h(w)("actions.loading")) + "...", 1)) : (s(), n("div", _l, o(t.totalResults) + " " + o(t.totalResults === 1 ? h(w)("stockFilter.result_one") : h(w)("stockFilter.result_other")), 1))
        ]),
        a("div", xl, [
          a("div", Fl, [
            a("button", {
              type: "button",
              class: G(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: h(w)("stockFilter.grid_view"),
              onClick: _[0] || (_[0] = (L) => f.$emit("update:displayMode", "grid"))
            }, [..._[5] || (_[5] = [
              ut('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-26b6e10c><rect x="1" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="1" y="9" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="9" width="6" height="6" data-v-26b6e10c></rect></svg>', 1)
            ])], 10, Tl),
            a("button", {
              type: "button",
              class: G(["c-btn c-btn--sm", { selected: t.displayMode === "list" }]),
              title: h(w)("stockFilter.list_view"),
              onClick: _[1] || (_[1] = (L) => f.$emit("update:displayMode", "list"))
            }, [..._[6] || (_[6] = [
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
            ])], 10, Ml)
          ])
        ])
      ]),
      t.loading ? (s(), le(Ze, {
        key: 0,
        size: "medium",
        label: `${h(w)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : t.totalResults === 0 ? (s(), n("div", Pl, [
        a("p", Ll, o(h(w)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (s(), n("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: _[2] || (_[2] = (L) => f.$emit("clear-filters"))
        }, o(h(w)("stockFilter.clear_filters")), 1)) : m("", !0)
      ])) : (s(), n(U, { key: 2 }, [
        t.displayMode === "list" ? (s(), n("div", {
          key: 0,
          class: "results-table-header",
          style: se(c.value)
        }, [
          _[7] || (_[7] = a("div", { class: "th" }, null, -1)),
          a("div", Rl, o(h(w)("woodwork.material")), 1),
          t.visibleColumns.finish ? (s(), n("div", zl, o(h(w)("fields.finish")), 1)) : m("", !0),
          t.visibleColumns.brand ? (s(), n("div", Ol, o(h(w)("fields.brand")), 1)) : m("", !0),
          t.visibleColumns.variant ? (s(), n("div", Il, o(h(w)("fields.variant")), 1)) : m("", !0),
          t.visibleColumns.category ? (s(), n("div", Dl, o(h(w)("fields.category")), 1)) : m("", !0),
          t.visibleColumns.grain ? (s(), n("div", Nl, o(h(w)("fields.grain")), 1)) : m("", !0),
          t.visibleColumns.color ? (s(), n("div", Al, o(h(w)("fields.color")), 1)) : m("", !0),
          t.visibleColumns.thickness ? (s(), n("div", Bl, o(h(w)("fields.t")), 1)) : m("", !0),
          t.visibleColumns.quantity ? (s(), n("div", Ul, o(h(w)("fields.q")), 1)) : m("", !0),
          t.visibleColumns.weight ? (s(), n("div", Vl, o(h(w)("fields.weight")), 1)) : m("", !0),
          t.visibleColumns.price ? (s(), n("div", ql, o(h(w)("stockFilter.price")), 1)) : m("", !0),
          _[8] || (_[8] = a("div", { class: "th th--center" }, null, -1))
        ], 4)) : m("", !0),
        a("div", {
          class: G(["results-grid", { "results-grid--list": t.displayMode === "list" }])
        }, [
          dt(f.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      t.totalPages > 1 ? (s(), n("div", Gl, [
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === 1,
          onClick: _[3] || (_[3] = (L) => f.$emit("go-to-page", t.currentPage - 1))
        }, o(h(w)("pagination.previous")), 9, Kl),
        a("div", El, [
          (s(!0), n(U, null, K(b.value, (L) => (s(), n("button", {
            key: L,
            type: "button",
            class: G(["c-btn c-btn--sm", { selected: L === t.currentPage }]),
            onClick: ($) => f.$emit("go-to-page", L)
          }, o(L), 11, jl))), 128))
        ]),
        a("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === t.totalPages,
          onClick: _[4] || (_[4] = (L) => f.$emit("go-to-page", t.currentPage + 1))
        }, o(h(w)("pagination.next")), 9, Hl)
      ])) : m("", !0)
    ]));
  }
}), Jl = /* @__PURE__ */ Be(Wl, [["__scopeId", "data-v-26b6e10c"]]), Ql = {
  id: "stock-filter",
  class: "smartcut-content",
  "aria-label": "Material catalogue"
}, Yl = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Xl = { style: { "margin-bottom": "6px", color: "#aaa" } }, Zl = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, en = { style: { "margin-bottom": "6px", color: "#aaa" } }, tn = { style: { color: "#0ff" } }, sn = { style: { color: "#aaa" } }, ln = { style: { color: "#0ff" } }, nn = { style: { color: "#0f0" } }, on = {
  key: 2,
  class: "stock-filter-search-sort"
}, an = {
  key: 0,
  class: "selection-bar"
}, rn = { class: "selection-bar__left" }, cn = { class: "selection-bar__count" }, un = 500, dn = "Can't mix with a material that's cut on a different saw. Remove your current selection to pick this one.", yn = /* @__PURE__ */ xe({
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
    const c = t, b = e, f = H(c.stockOptions), _ = H(c.config), L = H(c.numberFormat);
    ve(() => c.stockOptions, (i) => {
      f.value = i;
    }), ve(() => c.config, (i) => {
      _.value = i;
    });
    const $ = p(() => {
      if (c.serverPagination)
        return { ...c.serverPagination };
    }), {
      activeFilters: M,
      searchQuery: S,
      sortBy: k,
      sortOrder: F,
      displayMode: E,
      currentPage: de,
      filteredStock: ie,
      paginatedStock: X,
      selectedStock: z,
      totalItems: j,
      isLoading: me,
      applyFilter: fe,
      removeFilter: ae,
      clearFilters: re,
      goToPage: W,
      toggleStockSelection: g,
      isStockSelected: u,
      clearSelection: v,
      selectById: x,
      createInputStock: R,
      getUniqueValues: y,
      getFieldRange: D,
      getFilterOptionCounts: be
    } = _t({
      stockOptions: f,
      config: _,
      numberFormat: L,
      serverPagination: $.value
    }), { addNotice: Fe } = $t(), ce = ft(St, []), B = H(!1), O = H(1), J = H(/* @__PURE__ */ new Map());
    function he(i, r, l) {
      for (const I of i)
        I.customData = {
          ...I.customData || {},
          selectionId: r,
          ...l?.name && { stockName: l.name },
          ...l?.material && { materialLabel: l.material }
        }, l?.extras && Ct(I, l.extras);
      b("stock-added", i);
    }
    const Z = p(() => c.config.itemsPerPage || 20), ke = p(() => c.serverPagination ? [] : je(ie.value)), ye = p(() => je(z.value)), ge = p(() => {
      if (c.serverPagination && !B.value) return [];
      const i = B.value ? ye.value : ke.value, l = ((B.value ? O.value : de.value) - 1) * Z.value;
      return i.slice(l, l + Z.value);
    }), we = p(() => B.value ? ge.value.flatMap((i) => i.items) : c.serverPagination ? X.value : ge.value.flatMap((i) => i.items)), { groupedStock: Ue, getFilteredOutThicknesses: Te } = Dt(we, M), Me = p(() => B.value ? ge.value : c.serverPagination ? Ue.value : ge.value);
    function Pe(i) {
      const r = /* @__PURE__ */ new Set();
      for (const l of i.items)
        u(l) && l.t != null && r.add(l.t);
      return r;
    }
    const Le = p(() => {
      const i = /* @__PURE__ */ new Map();
      for (const r of we.value)
        i.set(Y(r), r.name || r.material || "");
      return i;
    }), Re = p(() => {
      const i = c.serverPagination ? Me.value.map((l) => l.representative) : c.stockOptions.slice(0, un);
      if (!i.length) return "";
      const r = i.map((l, I) => {
        const N = l.name || l.material;
        if (!N) return null;
        const V = l.db_id, q = l.cost && c.currency ? {
          "@type": "Offer",
          price: l.cost,
          priceCurrency: c.currency,
          availability: l.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, De = {
          "@type": "Product",
          name: N,
          ...l.imageUrl && { image: l.imageUrl },
          ...l.code && { sku: l.code },
          ...V && { productID: V },
          ...l.brand && { brand: { "@type": "Brand", name: l.brand } },
          ...l.category && { category: l.category },
          ...l.description && { description: l.description },
          ...q && { offers: q }
        };
        return {
          "@type": "ListItem",
          position: I + 1,
          item: De
        };
      }).filter((l) => l !== null);
      return r.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: r
      }).replace(/[<]/g, "\\u003c") : "";
    }), ue = p(() => {
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
    }), Ce = p(() => B.value ? ye.value.length : c.serverPagination ? j.value : ke.value.length), ne = p(() => {
      const i = Ce.value;
      return Math.max(1, Math.ceil(i / Z.value));
    }), Ve = p(() => B.value ? O.value : de.value);
    function d(i) {
      const r = ne.value, l = Math.max(1, Math.min(i, r));
      B.value ? O.value = l : W(l);
    }
    ve(ke, (i) => {
      if (c.serverPagination || B.value) return;
      const r = Math.max(1, Math.ceil(i.length / Z.value));
      de.value > r && W(r);
    }), ve(B, () => {
      O.value = 1;
    }), ve(() => z.value.length, (i) => {
      i === 0 && B.value && (B.value = !1);
      const r = Math.max(1, Math.ceil(ye.value.length / Z.value));
      O.value > r && (O.value = r), z.value.length > 0 && b("labels-changed", /* @__PURE__ */ new Map());
    });
    const C = p(() => c.loading || me.value), A = H(!1);
    ve(z, (i) => {
      A.value || (ce.value = i.map((r) => Y(r)));
    }, { deep: !0 });
    async function T(i) {
      if (!c.serverPagination) return null;
      const { apiUrl: r, orgSlug: l, isCustomDomain: I } = c.serverPagination, N = I ? `${r}ecommerce/stock` : `${r}ecommerce/${l}/stock`;
      try {
        const V = new URL(N);
        V.searchParams.set("limit", "1");
        const q = {};
        if (/^[a-f0-9]{24}$/i.test(i))
          q._id = i;
        else {
          const _e = i.split("-");
          if (_e.length >= 4) {
            const ot = parseFloat(_e.pop()), it = parseFloat(_e.pop()), at = parseFloat(_e.pop()), rt = _e.join("-");
            q.material = rt, q.l = at, q.w = it, q.t = ot;
          } else
            return null;
        }
        V.searchParams.set("filters", JSON.stringify(q));
        const De = await fetch(V.toString(), { credentials: "include" });
        if (!De.ok) return null;
        const Je = (await De.json()).items || [];
        if (Je.length === 0) return null;
        const Ge = Je[0];
        return Y(Ge) !== i ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: i, got: Y(Ge) }), null) : Ge;
      } catch {
        return null;
      }
    }
    async function ee() {
      if (ce.value.length) {
        A.value = !0;
        try {
          const i = [...ce.value], r = [], l = [];
          for (const N of i) {
            let V = c.stockOptions.find((q) => Y(q) === N);
            !V && c.serverPagination && (V = await T(N)), V && (r.push(N), l.push(V));
          }
          const I = i.length - r.length;
          I > 0 && (ce.value = r, Fe({
            message: I === 1 ? "A previously selected material is no longer available" : `${I} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const N of l) {
            const V = Y(N);
            if (!u(N)) {
              g(N);
              const q = R(N);
              qe([q], N), J.value.set(V, [q]), he([q], V, N);
            }
          }
        } finally {
          A.value = !1;
        }
      }
    }
    gt(async () => {
      if (!c.singleSelect) {
        if (c.initialProductId) {
          const i = x(c.initialProductId);
          if (!i) return;
          const r = Y(i), l = R(i);
          qe([l], i), J.value.set(r, [l]), he([l], r, i);
          return;
        }
        await ee(), b("selections-restored", z.value.length);
      }
    });
    const $e = p(() => {
      const i = c.config.availableFilters.filter((r) => {
        const l = y(r.field);
        return l.length > 0 && l.some((I) => I != null);
      });
      return i.length === 0 && M.value.length > 0 ? c.config.availableFilters : i;
    }), te = p(() => z.value.length === 0 ? null : z.value[0].db_sawId || null);
    function Q(i) {
      if (!te.value) return !1;
      const r = i.db_sawId;
      return r ? r !== te.value : !1;
    }
    function ze(i) {
      return Q(i) ? dn : "";
    }
    function qe(i, r) {
      const l = r.name || r.material;
      if (l)
        for (const I of i)
          I.material = l;
    }
    async function Oe(i) {
      if (Q(i)) return;
      if (c.singleSelect) {
        b("single-pick", i);
        return;
      }
      const r = u(i);
      g(i);
      const l = Y(i);
      if (r) {
        const I = J.value.get(l);
        I ? (I.forEach(Ie), J.value.delete(l)) : Ie(R(i));
      } else {
        const I = R(i);
        qe([I], i), J.value.set(l, [I]), he([I], l, i);
      }
    }
    function Ie(i) {
      b("stock-removed", i);
    }
    async function tt(i) {
      i.items.every((l) => u(l)) ? await We(i) : await He(i);
    }
    async function He(i) {
      for (const r of i.items)
        Q(r) || u(r) || await Oe(r);
    }
    async function We(i) {
      for (const r of i.items)
        u(r) && await Oe(r);
    }
    async function st(i, r) {
      await Oe(i);
    }
    function lt() {
      for (const i of z.value) {
        const r = Y(i), l = J.value.get(r);
        l ? l.forEach(Ie) : Ie(R(i));
      }
      J.value.clear(), v(), ce.value = [], B.value = !1;
    }
    function nt(i) {
      b("order-sample", i);
    }
    return P({
      applyFilter: fe,
      removeFilter: ae,
      clearFilters: re,
      clearSelection: v,
      selectedStock: z,
      filteredStock: ie,
      getUniqueValues: y,
      getFieldRange: D
    }), (i, r) => (s(), n("section", Ql, [
      Re.value ? (s(), le(vt("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: Re.value
      }, null, 8, ["innerHTML"])) : m("", !0),
      t.debug ? (s(), n("div", Yl, [
        r[15] || (r[15] = a("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        a("div", Xl, [
          r[6] || (r[6] = a("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          a("pre", Zl, o(JSON.stringify(h(ce), null, 2)), 1)
        ]),
        a("div", en, [
          a("strong", tn, "selectedStock (" + o(h(z).length) + " items):", 1),
          (s(!0), n(U, null, K(h(z), (l) => (s(), n("div", {
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
        a("div", sn, [
          a("strong", ln, "materialStockMap (" + o(J.value.size) + " entries):", 1),
          (s(!0), n(U, null, K(J.value, ([l, I]) => (s(), n("div", {
            key: l,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              r[14] || (r[14] = a("span", { style: { color: "#ff0" } }, "key:", -1)),
              oe(" " + o(l) + " → ", 1),
              a("span", nn, o(I.length) + " InputStock(s)", 1)
            ]),
            (s(!0), n(U, null, K(I, (N, V) => (s(), n("div", {
              key: V,
              style: { "margin-left": "12px" }
            }, o(N.material) + " " + o(N.l) + "×" + o(N.w) + "×" + o(N.t) + " db_id=" + o(N.db_id || "(none)") + " code=" + o(N.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : m("", !0),
      t.config.enableSearch || t.config.sortOptions.length > 0 ? (s(), n("div", on, [
        t.config.enableSearch ? (s(), le(Ft, {
          key: 0,
          modelValue: h(S),
          "onUpdate:modelValue": r[0] || (r[0] = (l) => Ke(S) ? S.value = l : null)
        }, null, 8, ["modelValue"])) : m("", !0),
        t.config.sortOptions.length > 0 ? (s(), le(Tt, {
          key: 1,
          "sort-by": h(k),
          "onUpdate:sortBy": r[1] || (r[1] = (l) => Ke(k) ? k.value = l : null),
          "sort-order": h(F),
          "onUpdate:sortOrder": r[2] || (r[2] = (l) => Ke(F) ? F.value = l : null),
          "available-fields": t.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : m("", !0)
      ])) : m("", !0),
      $e.value.length > 0 || t.preAppliedChips.length > 0 ? (s(), le(yl, {
        key: 3,
        "filter-configs": $e.value,
        "active-filters": h(M),
        "get-unique-values": h(y),
        "get-field-range": h(D),
        "get-filter-option-counts": h(be),
        "pre-applied-chips": t.preAppliedChips,
        onApplyFilter: h(fe),
        onRemoveFilter: h(ae),
        onClearFilters: h(re)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : m("", !0),
      Ee(Jl, {
        "total-results": Ce.value,
        "display-mode": h(E),
        loading: C.value,
        "has-active-filters": h(M).length > 0,
        "current-page": Ve.value,
        "total-pages": ne.value,
        "visible-columns": ue.value,
        "onUpdate:displayMode": r[3] || (r[3] = (l) => E.value = l),
        onClearFilters: h(re),
        onGoToPage: d
      }, {
        default: Se(() => [
          (s(!0), n(U, null, K(Me.value, (l) => (s(), le(Hs, {
            key: l.groupKey,
            stock: l.representative,
            "is-selected": h(u)(l.representative),
            "is-disabled": Q(l.representative),
            "disabled-reason": ze(l.representative),
            "display-label": Le.value.get(h(Y)(l.representative)),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            "display-mode": h(E),
            "unit-system": t.unitSystem,
            "visible-columns": ue.value,
            "api-url": t.serverPagination?.apiUrl,
            group: l.items.length > 1 ? l : void 0,
            "selected-thicknesses": l.items.length > 1 ? Pe(l) : void 0,
            "filtered-out-thicknesses": l.items.length > 1 ? h(Te)(l) : void 0,
            onToggleSelection: Oe,
            onToggleGroup: tt,
            onSelectGroup: He,
            onDeselectGroup: We,
            onToggleThickness: st,
            onOrderSample: nt
          }, null, 8, ["stock", "is-selected", "is-disabled", "disabled-reason", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Ee(mt, { name: "selection-bar" }, {
        default: Se(() => [
          c.showSelectionBar && h(z).length > 0 ? (s(), n("div", an, [
            a("div", rn, [
              a("span", cn, o(h(z).length) + " " + o(h(z).length === 1 ? "material" : "materials") + " selected ", 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: r[4] || (r[4] = (l) => B.value = !B.value)
              }, o(B.value ? "Show all" : "Show selected"), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: lt
              }, " Clear ")
            ]),
            a("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: se({ backgroundColor: t.colors.button, color: t.colors.buttonText }),
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
  yn as default
};
