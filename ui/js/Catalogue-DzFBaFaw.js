import { x as b, d as Le, k as ue, o, j as ee, p as Pe, c as n, t as i, u as d, F as D, f as B, b as m, a, s as q, m as Oe, U as ut, h as Ye, A as Ne, w as H, n as X, g as V, i as W, V as dt, e as ft, R as vt, W as gt, l as mt, H as ht, X as Xe, Y as pt } from "./vendor-vue-CrNGqS0k.js";
import { S as kt, _ as bt, L as ot, z as tt, A as yt, B as lt, M as _t, d as Ct, C as wt, u as $t } from "./EcommerceCalculator-CTmE4c2O.js";
import { t as h } from "./i18n-DGE8ywV5.js";
import { u as St, g as J, S as xt } from "./Vanilla-DBUwCeJZ.js";
import { Icon as Ze } from "./index-Cn_P_Cu_.js";
import { _ as Ke } from "./Launch-9LoYYNsk.js";
import { C as Ft, a as Tt } from "./CatalogueSort-DL7jHx4P.js";
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
], Pt = 5e3, Ve = /* @__PURE__ */ new Map(), Ot = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function Lt(s) {
  if (!s) return s;
  const F = Ve.get(s);
  if (F !== void 0) return F;
  const t = s.replace(Ot, "");
  return Ve.size >= Pt && Ve.clear(), Ve.set(s, t), t;
}
function zt(s) {
  const F = [];
  for (const c of Mt) {
    const v = s[c];
    F.push(v != null ? String(v) : "");
  }
  s.variant ? F.push(Lt(s.code ?? "")) : F.push("");
  const t = s.extras;
  if (t)
    for (const c of kt)
      F.push(t[c] ? "1" : "0");
  else
    F.push("0000");
  return F.join("");
}
function et(s) {
  return s.length > 0 && s[0].thicknessGroup ? Rt(s) : At(s);
}
function Rt(s) {
  const F = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), c = [];
  for (const p of s) {
    const M = p.thicknessGroup;
    if (!M) {
      const $ = `__solo_${p.db_id || Math.random()}`;
      F.set($, [p]), c.push($);
      continue;
    }
    const L = M.groupKey;
    F.has(L) || (F.set(L, []), t.set(L, M), c.push(L)), F.get(L).push(p);
  }
  const v = [];
  for (const p of c) {
    const M = F.get(p);
    M.sort(($, T) => ($.t ?? 0) - (T.t ?? 0));
    const L = t.get(p);
    v.push({
      groupKey: p,
      items: M,
      thicknesses: L?.thicknesses || M.map(($) => $.t).filter(($) => $ != null),
      dimensions: L?.dimensions || nt(M),
      representative: M[0],
      priceRange: L?.priceRange || null,
      weightRange: L?.weightRange || null
    });
  }
  return v;
}
function nt(s) {
  const F = /* @__PURE__ */ new Set(), t = [];
  for (const c of s) {
    if (typeof c.l != "number" || typeof c.w != "number") continue;
    const v = `${c.l}x${c.w}`;
    F.has(v) || (F.add(v), t.push({ l: c.l, w: c.w }));
  }
  return t;
}
function At(s) {
  const F = /* @__PURE__ */ new Map(), t = [];
  for (const v of s) {
    if (v.t == null) {
      const M = `__solo_${v.db_id || Math.random()}`;
      F.set(M, [v]), t.push(M);
      continue;
    }
    const p = zt(v);
    F.has(p) || (F.set(p, []), t.push(p)), F.get(p).push(v);
  }
  const c = [];
  for (const v of t) {
    const p = F.get(v);
    p.sort((y, S) => (y.t ?? 0) - (S.t ?? 0));
    const M = [...new Set(p.map((y) => y.t).filter((y) => y != null))].sort((y, S) => y - S), L = p.map((y) => y.cost).filter((y) => y != null && y > 0);
    let $ = null;
    if (L.length > 1) {
      const y = Math.min(...L), S = Math.max(...L);
      y !== S && ($ = { min: y, max: S });
    }
    const T = p.map((y) => y.weight).filter((y) => y != null && y > 0);
    let x = null;
    if (T.length > 1) {
      const y = Math.min(...T), S = Math.max(...T);
      y !== S && (x = { min: y, max: S });
    }
    c.push({
      groupKey: v,
      items: p,
      thicknesses: M,
      dimensions: nt(p),
      representative: p[0],
      priceRange: $,
      weightRange: x
    });
  }
  return c;
}
function st(s, F) {
  const t = F.find((v) => v.field === "t");
  if (!t) return !1;
  const c = t.value;
  return Array.isArray(c) ? !c.some((v) => Number(v) === s) : c != null ? Number(c) !== s : !1;
}
function It(s, F) {
  const t = b(() => et(s.value));
  function c($, T) {
    return $.items.find((x) => x.t === T);
  }
  function v($, T, x, y) {
    return $.items.find((S) => S.l === T && S.w === x && S.t === y);
  }
  function p($, T, x) {
    const y = /* @__PURE__ */ new Set();
    for (const S of $.items)
      S.l === T && S.w === x && typeof S.t == "number" && y.add(S.t);
    return [...y].sort((S, N) => S - N);
  }
  function M($, T) {
    const x = /* @__PURE__ */ new Set(), y = [];
    for (const S of $.items) {
      if (S.t !== T || typeof S.l != "number" || typeof S.w != "number") continue;
      const N = `${S.l}x${S.w}`;
      x.has(N) || (x.add(N), y.push({ l: S.l, w: S.w }));
    }
    return y;
  }
  function L($) {
    const T = /* @__PURE__ */ new Set();
    for (const x of $.thicknesses)
      st(x, F.value) && T.add(x);
    return T;
  }
  return {
    groupedStock: t,
    getItemForThickness: c,
    getItemForCombo: v,
    getThicknessesForDimension: p,
    getDimensionsForThickness: M,
    getFilteredOutThicknesses: L,
    isThicknessFilteredOut: st
  };
}
const qt = ["aria-label"], Ut = { key: 0 }, Dt = {
  key: 0,
  class: "bim-description"
}, Bt = {
  key: 1,
  class: "bim-empty"
}, Nt = {
  key: 2,
  class: "bim-links"
}, Vt = ["href"], Kt = { key: 1 }, Gt = { class: "bim-empty" }, Et = /* @__PURE__ */ Le({
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
  setup(s) {
    function F(T) {
      const x = (T.url || "").toLowerCase(), y = (T.label || "").toLowerCase();
      return /\.pdf(\?|$|#)/.test(x) || y.includes("pdf") ? "file-pdf" : /\/3d|\bviewer\b|visualization/.test(x) || y.includes("3d") || y.includes("viewer") ? "cube" : y.includes("spec") || y.includes("datasheet") ? "file-lines" : "arrow-up-right-from-square";
    }
    const t = s, c = q(!1), v = q(!1), p = q(null), M = () => typeof t.description == "string" && t.description.trim() !== "" || Array.isArray(t.urls) && t.urls.length > 0;
    let L = "";
    async function $() {
      if (!t.open) return;
      if (M()) {
        p.value = {
          name: t.brandName,
          fullDescription: t.description,
          urls: t.urls || []
        }, c.value = !1, v.value = !1;
        return;
      }
      if (!t.brandName || !t.catalogueKey || !t.apiUrl) {
        v.value = !0;
        return;
      }
      const T = `${t.catalogueKey}::${t.brandName}`;
      if (!(T === L && p.value)) {
        L = T, c.value = !0, v.value = !1, p.value = null;
        try {
          const y = `${t.apiUrl.endsWith("/") ? t.apiUrl : t.apiUrl + "/"}catalogues/${encodeURIComponent(t.catalogueKey)}/categories/${encodeURIComponent(t.brandName)}`, S = await fetch(y, { credentials: "include" });
          if (!S.ok) {
            v.value = !0;
            return;
          }
          p.value = await S.json();
        } catch {
          v.value = !0;
        } finally {
          c.value = !1;
        }
      }
    }
    return ue(
      () => [t.open, t.brandName, t.catalogueKey, t.description, t.urls],
      $,
      { immediate: !0, deep: !0 }
    ), (T, x) => (o(), ee(bt, {
      size: "sm",
      compact: !1,
      open: s.open,
      onClosed: x[2] || (x[2] = (y) => T.$emit("close"))
    }, {
      header: Pe(() => [
        a("div", null, [
          a("h3", null, i(s.brandName), 1),
          c.value ? (o(), ee(ot, {
            key: 0,
            size: "small",
            label: d(h)("ecommerce.common.loading_short"),
            class: "bim-sub"
          }, null, 8, ["label"])) : m("", !0)
        ]),
        a("button", {
          class: "bim-close",
          "aria-label": d(h)("ecommerce.common.close"),
          onClick: x[0] || (x[0] = (y) => T.$emit("close"))
        }, "×", 8, qt)
      ]),
      footer: Pe(() => [
        a("button", {
          class: "c-btn",
          onClick: x[1] || (x[1] = (y) => T.$emit("close"))
        }, i(d(h)("actions.done")), 1)
      ]),
      default: Pe(() => [
        !c.value && !v.value && p.value ? (o(), n("div", Ut, [
          p.value.fullDescription ? (o(), n("p", Dt, i(p.value.fullDescription), 1)) : (o(), n("p", Bt, i(d(h)("ecommerce.brand.no_description")), 1)),
          p.value.urls && p.value.urls.length ? (o(), n("ul", Nt, [
            (o(!0), n(D, null, B(p.value.urls, (y) => (o(), n("li", {
              key: y.url
            }, [
              a("a", {
                href: y.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                Oe(d(Ze), {
                  icon: ["fass", F(y)],
                  class: "bim-link-icon"
                }, null, 8, ["icon"]),
                a("span", null, i(y.label), 1)
              ], 8, Vt)
            ]))), 128))
          ])) : m("", !0)
        ])) : !c.value && v.value ? (o(), n("div", Kt, [
          a("p", Gt, i(d(h)("ecommerce.brand.no_information")), 1)
        ])) : m("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), jt = /* @__PURE__ */ Ke(Et, [["__scopeId", "data-v-5d8cd043"]]), Qt = ["onKeydown"], Ht = { class: "stock-filter-row__thumb" }, Jt = ["src", "alt"], Wt = { class: "stock-filter-row__material" }, Yt = { class: "stock-filter-row__name" }, Xt = {
  key: 0,
  class: "stock-filter-row__code"
}, Zt = {
  key: 0,
  class: "stock-filter-row__cell"
}, el = {
  key: 1,
  class: "stock-filter-row__cell"
}, tl = {
  key: 2,
  class: "stock-filter-row__cell"
}, ll = {
  key: 3,
  class: "stock-filter-row__cell"
}, sl = {
  key: 4,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, ol = {
  key: 5,
  class: "stock-filter-row__color"
}, nl = { key: 1 }, il = {
  key: 6,
  class: "stock-filter-row__thickness"
}, al = {
  key: 0,
  class: "c-loz-group c-loz-group--tight"
}, rl = ["disabled", "onClick"], cl = {
  key: 1,
  class: "thickness-badge"
}, ul = {
  key: 7,
  class: "stock-filter-row__cell stock-filter-row__cell--center"
}, dl = {
  key: 8,
  class: "stock-filter-row__weight"
}, fl = {
  key: 9,
  class: "stock-filter-row__price"
}, vl = {
  key: 0,
  class: "price__original"
}, gl = {
  key: 1,
  class: "price__badge"
}, ml = { class: "stock-filter-row__action" }, hl = ["disabled"], pl = ["onKeydown"], kl = { class: "stock-filter-card__image-wrapper" }, bl = ["src", "alt"], yl = {
  key: 1,
  class: "c-badge stock-filter-card__badge--brand"
}, _l = {
  key: 2,
  class: "c-badge stock-filter-card__badge--thickness"
}, Cl = {
  key: 3,
  class: "c-badge stock-filter-card__badge--thickness"
}, wl = { class: "stock-filter-card__content" }, $l = { class: "stock-filter-card__title" }, Sl = {
  key: 0,
  class: "stock-filter-card__code"
}, xl = {
  key: 1,
  class: "stock-filter-card__specs-inline"
}, Fl = {
  key: 2,
  class: "stock-filter-card__quality-chips"
}, Tl = {
  key: 0,
  class: "qc-chip"
}, Ml = {
  key: 1,
  class: "qc-chip"
}, Pl = {
  key: 2,
  class: "qc-chip"
}, Ol = {
  key: 4,
  class: "stock-filter-card__spec-badges"
}, Ll = {
  key: 5,
  class: "stock-filter-card__dimensions"
}, zl = {
  key: 6,
  class: "c-loz-group"
}, Rl = ["disabled", "onClick"], Al = {
  key: 7,
  class: "stock-filter-card__extras"
}, Il = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, ql = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Ul = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Dl = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Bl = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Nl = { class: "stock-filter-card__footer" }, Vl = {
  key: 0,
  class: "stock-filter-card__price"
}, Kl = { class: "price__value" }, Gl = {
  key: 1,
  class: "stock-filter-card__price"
}, El = {
  key: 0,
  class: "price__original"
}, jl = {
  key: 1,
  class: "price__badge"
}, Ql = { class: "stock-filter-card__actions" }, Hl = ["disabled"], Jl = {
  key: 0,
  class: "full-stock__options"
}, Wl = { class: "full-stock__option" }, Yl = ["value"], Xl = ["aria-label"], Zl = ["disabled", "onClick"], es = { class: "full-stock__qty-value" }, ts = ["onClick"], ls = { class: "full-stock__buy" }, ss = ["aria-label"], os = ["disabled"], ns = { class: "full-stock__qty-value" }, is = /* @__PURE__ */ Le({
  __name: "CatalogueCard",
  props: {
    stock: {},
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean, default: !1 },
    disabledReason: { default: "" },
    displayLabel: {},
    formatPrice: {},
    buttonColor: { default: "#0e7fa6" },
    buttonTextColor: { default: "#ffffff" },
    locale: { default: "en-US" },
    displayMode: { default: "grid" },
    unitSystem: { default: "metric" },
    visibleColumns: { default: () => ({ code: !0, finish: !0, variant: !0, brand: !0, grain: !0, color: !0, category: !0, thickness: !0, weight: !0, price: !0, quantity: !0, tags: !0 }) },
    group: {},
    selectedThicknesses: {},
    filteredOutThicknesses: {},
    apiUrl: {},
    allowFullStockPurchase: { type: Boolean, default: !1 }
  },
  emits: ["toggle-selection", "order-sample", "toggle-thickness", "toggle-group", "select-group", "deselect-group", "add-full-stock"],
  setup(s, { emit: F }) {
    const t = s, c = F, v = q(!1), p = q(!1), M = q(!1), L = b(() => t.stock._catalogueKey), $ = b(() => tt(t.stock)), T = b(() => $.value.brand || $.value.variant || $.value.material || ""), x = b(() => t.stock._hasDetailContent === !0), y = b(() => (t.stock.description || "").trim() || void 0), S = b(() => {
      const e = t.stock.urls;
      return Array.isArray(e) ? e.filter((l) => l && typeof l.url == "string" && l.url.trim()).map((l) => ({ label: String(l.label || l.url), url: String(l.url) })) : [];
    }), N = b(() => !!y.value || S.value.length > 0), de = b(() => t.stock._source === "library"), oe = (e) => {
      const l = tt(e), w = Array.isArray(e?.urls) ? e.urls.filter((u) => u && typeof u.url == "string" && u.url.trim()).map((u) => `${u.label || u.url}|${u.url}`) : [];
      return JSON.stringify([
        (e?.description || "").trim(),
        w,
        e?._catalogueKey || "",
        e?._hasDetailContent === !0,
        l.brand || l.variant || l.material || ""
      ]);
    }, ke = b(() => {
      const e = t.group?.items;
      if (!e || e.length < 2) return !0;
      const l = oe(e[0]);
      return e.every((w) => oe(w) === l);
    }), U = b(() => z.value && !ke.value ? !1 : N.value || de.value && x.value && !!T.value && !!L.value && !!t.apiUrl), K = b(() => t.stock.available !== !1), G = b(() => t.isDisabled), E = b(() => t.stock.discount && t.stock.discount > 0), fe = b(() => {
      const e = t.stock.sample;
      return e?.enabled ? e.price && e.price > 0 ? `${h("stockFilter.orderSample")} (${t.formatPrice(e.price, t.locale)})` : h("stockFilter.freeSample") : "";
    }), ve = b(() => t.stock.cost ? E.value ? t.stock.cost * (1 - t.stock.discount / 100) : t.stock.cost : 0), ge = b(() => t.stock.cost ? t.formatPrice(t.stock.cost, t.locale) : "N/A"), k = b(() => t.stock.cost ? t.formatPrice(ve.value, t.locale) : "N/A"), f = b(() => {
      const e = t.stock.color;
      return e && typeof e == "object" && "hex" in e && e.hex ? String(e.hex) : t.stock.colorHex || "";
    }), g = b(() => {
      const e = t.stock.color;
      return typeof e == "string" ? e : e && typeof e == "object" && "name" in e ? String(e.name || "") : "";
    }), C = b(() => (!t.stock.imageUrl || v.value) && !!f.value), O = b(() => C.value ? { background: f.value } : void 0), _ = b(() => f.value ? yt(f.value) : "#fff"), R = b(() => {
      if (!t.stock.grain) return "";
      switch (t.stock.grain) {
        case "l":
          return h("fields.grain.length");
        case "w":
          return h("fields.grain.width");
        default:
          return "";
      }
    }), _e = b(() => {
      if (!R.value) return "";
      const e = h("fields.grain");
      return `${e.charAt(0).toUpperCase()}${e.slice(1)}: ${R.value}`;
    }), ze = b(() => {
      const e = [], l = /* @__PURE__ */ new Set(), w = (Q) => {
        if (Q == null) return;
        const ce = String(Q).trim();
        if (!ce) return;
        const Te = ce.toLowerCase();
        l.has(Te) || (l.add(Te), e.push(ce));
      }, u = me.value.toLowerCase(), P = (Q) => {
        if (Q == null) return;
        const ce = String(Q).trim();
        !ce || u.includes(ce.toLowerCase()) || w(ce);
      };
      P($.value.variant);
      const I = z.value && t.group?.weightRange ? `${t.group.weightRange.min}–${t.group.weightRange.max}kg` : t.stock.weight ? `${t.stock.weight}kg` : "";
      return I && P(I), e;
    }), te = b(() => {
      const e = [], l = ($.value.material || "").trim(), w = (t.stock.category || "").trim();
      return l && e.push({ kind: "material", label: l }), w && w.toLowerCase() !== l.toLowerCase() && e.push({ kind: "category", label: w }), e;
    });
    function A(e, l) {
      return t.unitSystem === "imperial" ? `${(e / 25.4).toFixed(1)}" × ${(l / 25.4).toFixed(1)}"` : `${e} × ${l}`;
    }
    const le = b(() => (t.group?.dimensions?.length ? t.group.dimensions : t.stock.l && t.stock.w ? [{ l: t.stock.l, w: t.stock.w }] : []).map((l) => A(l.l, l.w))), Y = b(() => {
      if (t.stock.t == null) return "";
      const e = Ge.value ? " [B]" : "";
      return t.unitSystem === "imperial" ? `${(t.stock.t / 25.4).toFixed(2)}"${e}` : `${t.stock.t} mm${e}`;
    }), Ce = b(() => {
      const e = t.stock.extras;
      return e ? !!(e.banding || e.finish || e.planing || e.machining) : !1;
    }), z = b(() => t.group && t.group.items.length > 1), be = b(() => {
      if (!z.value || !t.selectedThicknesses) return !1;
      const e = t.selectedThicknesses.size;
      return e > 0 && e < t.group.thicknesses.length;
    }), ye = b(() => !z.value || !t.selectedThicknesses ? t.isSelected : t.selectedThicknesses.size === t.group.thicknesses.length), Z = b(() => !z.value || !t.selectedThicknesses ? t.isSelected : t.selectedThicknesses.size > 0);
    function Re(e) {
      return (t.group?.items ?? [t.stock]).some(
        (w) => w?.t === e && !!lt(w)
      );
    }
    const Ge = b(() => (t.group?.items ?? [t.stock]).some(
      (l) => !!lt(l)
    ));
    function Ae(e) {
      const l = Re(e) ? " [B]" : "";
      return t.unitSystem === "imperial" ? `${(e / 25.4).toFixed(2)}"${l}` : `${e}mm${l}`;
    }
    const we = b(() => t.group?.priceRange ? `${t.formatPrice(t.group.priceRange.min, t.locale)} – ${t.formatPrice(t.group.priceRange.max, t.locale)}` : null), Ee = b(() => t.group?.weightRange ? `${t.group.weightRange.min}–${t.group.weightRange.max}kg` : null);
    function Ie(e, l) {
      if (l.stopPropagation(), t.filteredOutThicknesses?.has(e)) return;
      const w = t.group?.items.find((u) => u.t === e);
      w && c("toggle-thickness", w, e);
    }
    function qe() {
      !K.value || G.value || (z.value && t.group ? c("toggle-group", t.group) : c("toggle-selection", t.stock));
    }
    function $e() {
      !K.value || G.value || (z.value && t.group ? Z.value ? c("deselect-group", t.group) : c("select-group", t.group) : c("toggle-selection", t.stock));
    }
    const Se = b(() => {
      if (!t.group || t.group.thicknesses.length < 2) return "";
      const e = t.group.thicknesses[0], l = t.group.thicknesses[t.group.thicknesses.length - 1];
      return t.unitSystem === "imperial" ? `${(e / 25.4).toFixed(2)}" – ${(l / 25.4).toFixed(2)}"` : `${e} – ${l}mm`;
    }), Ue = b(() => {
      const e = ["60px", "2fr"];
      return t.visibleColumns.finish && e.push("1fr"), t.visibleColumns.brand && e.push("1fr"), t.visibleColumns.variant && e.push("1fr"), t.visibleColumns.category && e.push("1fr"), t.visibleColumns.grain && e.push("80px"), t.visibleColumns.color && e.push("100px"), t.visibleColumns.thickness && e.push(z.value ? "minmax(120px, auto)" : "80px"), t.visibleColumns.quantity && e.push("80px"), t.visibleColumns.weight && e.push("80px"), t.visibleColumns.price && e.push("100px"), e.push("50px"), { "grid-template-columns": e.join(" ") };
    }), me = b(() => t.displayLabel ? t.displayLabel : $.value.productLabel && $.value.productLabel !== "(unnamed)" ? $.value.productLabel : `${t.stock.material} ${t.stock.l}×${t.stock.w}`), De = b(() => $.value.code ? $.value.code.toLowerCase() !== me.value.toLowerCase() : !1);
    function ne() {
      qe();
    }
    function xe() {
      c("order-sample", t.stock);
    }
    const j = q(1), ie = q([]), se = q({}), ae = q({}), he = b(
      () => t.allowFullStockPurchase && !z.value && t.stock.cost != null && t.stock.cost > 0
    ), re = b(() => t.stock.fullStockOptions || []);
    function pe(e) {
      return se.value[e] ?? j.value;
    }
    function Fe(e, l) {
      se.value = { ...se.value, [e]: Math.max(1, Math.floor(l) || 1) }, ae.value = { ...ae.value, [e]: !0 };
    }
    function Be(e) {
      Fe(e, pe(e) + 1);
    }
    function je(e) {
      Fe(e, pe(e) - 1);
    }
    const Qe = b(
      () => re.value.filter((e) => ie.value.includes(e.id)).map((e) => ({ ...e, quantity: pe(e.id) }))
    );
    function He() {
      j.value++;
    }
    function Je() {
      j.value = Math.max(1, j.value - 1);
    }
    ue(j, (e) => {
      for (const l of ie.value)
        ae.value[l] || (se.value = { ...se.value, [l]: e });
    });
    function r() {
      he.value && (c("add-full-stock", {
        stock: t.stock,
        quantity: Math.max(1, Math.floor(j.value)),
        options: Qe.value
      }), j.value = 1, ie.value = [], se.value = {}, ae.value = {});
    }
    return (e, l) => {
      const w = ut("tooltip");
      return o(), n(D, null, [
        s.displayMode === "list" ? Ye((o(), n("article", {
          key: 0,
          class: V(["stock-filter-row", {
            "stock-filter-row--selected": z.value ? ye.value : s.isSelected,
            "stock-filter-row--partial": be.value,
            "stock-filter-row--unavailable": !K.value,
            "stock-filter-row--disabled": G.value
          }]),
          style: X(Ue.value),
          role: "button",
          tabindex: "0",
          onClick: ne,
          onKeydown: [
            Ne(ne, ["enter"]),
            Ne(H(ne, ["prevent"]), ["space"])
          ]
        }, [
          a("div", Ht, [
            a("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: X(O.value)
            }, null, 4),
            s.stock.imageUrl && !v.value ? (o(), n("img", {
              key: 0,
              class: V(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": p.value }]),
              src: s.stock.imageUrl,
              alt: s.stock.name || s.stock.material,
              loading: "lazy",
              onLoad: l[0] || (l[0] = (u) => p.value = !0),
              onError: l[1] || (l[1] = (u) => v.value = !0)
            }, null, 42, Jt)) : m("", !0)
          ]),
          a("div", Wt, [
            a("h3", Yt, i(me.value), 1),
            De.value ? (o(), n("span", Xt, i($.value.code), 1)) : m("", !0)
          ]),
          s.visibleColumns.finish ? (o(), n("div", Zt, i(s.stock.finish || ""), 1)) : m("", !0),
          s.visibleColumns.brand ? (o(), n("div", el, i(s.stock.brand || ""), 1)) : m("", !0),
          s.visibleColumns.variant ? (o(), n("div", tl, i(s.stock.variant || ""), 1)) : m("", !0),
          s.visibleColumns.category ? (o(), n("div", ll, i(s.stock.category || ""), 1)) : m("", !0),
          s.visibleColumns.grain ? (o(), n("div", sl, i(R.value), 1)) : m("", !0),
          s.visibleColumns.color ? (o(), n("div", ol, [
            f.value ? (o(), n("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: X({ backgroundColor: f.value })
            }, null, 4)) : m("", !0),
            g.value ? (o(), n("span", nl, i(g.value), 1)) : m("", !0)
          ])) : m("", !0),
          s.visibleColumns.thickness ? (o(), n("div", il, [
            z.value ? (o(), n("div", al, [
              (o(!0), n(D, null, B(s.group.thicknesses, (u) => (o(), n("button", {
                key: u,
                type: "button",
                class: V(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !s.selectedThicknesses?.has(u) && !s.filteredOutThicknesses?.has(u),
                  active: s.selectedThicknesses?.has(u)
                }]),
                style: X({
                  "--loz-custom-color": s.buttonColor,
                  "--loz-custom-text": s.buttonTextColor,
                  ...!s.selectedThicknesses?.has(u) && !s.filteredOutThicknesses?.has(u) ? { "--loz-bg": s.buttonColor, "--loz-color": s.buttonTextColor, "--loz-border-color": s.buttonColor } : {},
                  ...s.selectedThicknesses?.has(u) ? { "--loz-bg": "var(--surface-selected, #047857)", "--loz-color": "var(--surface-selected-ink, #ffffff)", "--loz-border-color": "var(--surface-selected, #047857)" } : {}
                }),
                disabled: s.filteredOutThicknesses?.has(u),
                onClick: (P) => Ie(u, P)
              }, i(Ae(u)), 15, rl))), 128))
            ])) : s.stock.t != null ? (o(), n("span", cl, [
              W(i(s.stock.t), 1),
              l[8] || (l[8] = a("small", null, "mm", -1))
            ])) : m("", !0)
          ])) : m("", !0),
          s.visibleColumns.quantity ? (o(), n("div", ul, i(s.stock.unlimitedQuantity ? d(h)("stockFilter.inStock") : s.stock.q), 1)) : m("", !0),
          s.visibleColumns.weight ? (o(), n("div", dl, i(Ee.value || (s.stock.weight ? `${s.stock.weight}kg` : "")), 1)) : m("", !0),
          s.visibleColumns.price ? (o(), n("div", fl, [
            E.value ? (o(), n("span", vl, i(ge.value), 1)) : m("", !0),
            a("span", {
              class: V(["price__value", { price__discounted: E.value }])
            }, i(k.value), 3),
            E.value ? (o(), n("span", gl, "-" + i(s.stock.discount) + "%", 1)) : m("", !0)
          ])) : m("", !0),
          a("div", ml, [
            a("button", {
              type: "button",
              class: V(["c-btn", { "c-btn--delete": z.value ? Z.value : s.isSelected }]),
              disabled: !K.value || G.value,
              onClick: H($e, ["stop"])
            }, i((z.value ? Z.value : s.isSelected) ? "−" : "+"), 11, hl)
          ])
        ], 46, Qt)), [
          [w, G.value && s.disabledReason ? s.disabledReason : ""]
        ]) : Ye((o(), n("article", {
          key: 1,
          class: V(["stock-filter-card", {
            "stock-filter-card--selected": z.value ? ye.value : s.isSelected,
            "stock-filter-card--partial": be.value,
            "stock-filter-card--unavailable": !K.value,
            "stock-filter-card--disabled": G.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: ne,
          onKeydown: [
            Ne(ne, ["enter"]),
            Ne(H(ne, ["prevent"]), ["space"])
          ]
        }, [
          a("div", kl, [
            a("div", {
              class: "stock-filter-card__image-placeholder",
              style: X(O.value)
            }, null, 4),
            s.stock.imageUrl && !v.value ? (o(), n("img", {
              key: 0,
              class: V(["stock-filter-card__image", { "stock-filter-card__image--loaded": p.value }]),
              src: s.stock.imageUrl,
              alt: s.stock.name || s.stock.material,
              loading: "lazy",
              onLoad: l[2] || (l[2] = (u) => p.value = !0),
              onError: l[3] || (l[3] = (u) => v.value = !0)
            }, null, 42, bl)) : m("", !0),
            $.value.brand && !me.value.toLowerCase().includes($.value.brand.toLowerCase()) ? (o(), n("span", yl, i($.value.brand), 1)) : m("", !0),
            z.value && Se.value ? (o(), n("span", _l, i(Se.value), 1)) : !z.value && s.stock.t != null ? (o(), n("span", Cl, i(Y.value), 1)) : m("", !0),
            C.value && g.value ? (o(), n("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: X({ color: _.value })
            }, i(g.value), 5)) : m("", !0)
          ]),
          a("div", wl, [
            a("h3", $l, i(me.value), 1),
            De.value ? (o(), n("div", Sl, i(s.stock.code), 1)) : m("", !0),
            ze.value.length ? (o(), n("div", xl, [
              (o(!0), n(D, null, B(ze.value, (u, P) => (o(), n("span", {
                key: P,
                class: "spec-item"
              }, i(u), 1))), 128))
            ])) : m("", !0),
            g.value && !C.value || s.stock.finish || R.value ? (o(), n("div", Fl, [
              g.value && !C.value ? (o(), n("span", Tl, [
                f.value ? (o(), n("span", {
                  key: 0,
                  class: "qc-chip__dot",
                  style: X({ background: f.value })
                }, null, 4)) : m("", !0),
                W(i(g.value), 1)
              ])) : m("", !0),
              s.stock.finish ? (o(), n("span", Ml, i(s.stock.finish), 1)) : m("", !0),
              R.value ? (o(), n("span", Pl, i(_e.value), 1)) : m("", !0)
            ])) : m("", !0),
            U.value ? (o(), n("button", {
              key: 3,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: l[4] || (l[4] = H((u) => M.value = !0, ["stop"]))
            }, i(d(h)("stockFilter.details")), 1)) : m("", !0),
            te.value.length ? (o(), n("div", Ol, [
              (o(!0), n(D, null, B(te.value, (u) => (o(), n("span", {
                key: u.kind,
                class: V(["c-badge", `spec-badge--${u.kind}`])
              }, i(u.label), 3))), 128))
            ])) : m("", !0),
            le.value.length ? (o(), n("div", Ll, [
              (o(!0), n(D, null, B(le.value, (u) => (o(), n("span", {
                key: u,
                class: "c-badge stock-filter-card__dim"
              }, i(u), 1))), 128))
            ])) : m("", !0),
            z.value ? (o(), n("div", zl, [
              (o(!0), n(D, null, B(s.group.thicknesses, (u) => (o(), n("button", {
                key: u,
                type: "button",
                class: V(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !s.selectedThicknesses?.has(u) && !s.filteredOutThicknesses?.has(u),
                  active: s.selectedThicknesses?.has(u)
                }]),
                style: X({
                  "--loz-custom-color": s.buttonColor,
                  "--loz-custom-text": s.buttonTextColor,
                  ...!s.selectedThicknesses?.has(u) && !s.filteredOutThicknesses?.has(u) ? { "--loz-bg": s.buttonColor, "--loz-color": s.buttonTextColor, "--loz-border-color": s.buttonColor } : {},
                  ...s.selectedThicknesses?.has(u) ? { "--loz-bg": "var(--surface-selected, #047857)", "--loz-color": "var(--surface-selected-ink, #ffffff)", "--loz-border-color": "var(--surface-selected, #047857)" } : {}
                }),
                disabled: s.filteredOutThicknesses?.has(u),
                onClick: (P) => Ie(u, P)
              }, i(Ae(u)), 15, Rl))), 128))
            ])) : m("", !0),
            Ce.value || s.stock.sample?.enabled ? (o(), n("div", Al, [
              s.stock.sample?.enabled ? (o(), n("span", Il, i(d(h)("stockFilter.samplesAvailable")), 1)) : m("", !0),
              s.stock.extras?.banding ? (o(), n("span", ql, i(d(h)("stockFilter.banding")), 1)) : m("", !0),
              s.stock.extras?.finish ? (o(), n("span", Ul, i(d(h)("stockFilter.finishOption")), 1)) : m("", !0),
              s.stock.extras?.planing ? (o(), n("span", Dl, i(d(h)("stockFilter.planing")), 1)) : m("", !0),
              s.stock.extras?.machining ? (o(), n("span", Bl, i(d(h)("stockFilter.machining")), 1)) : m("", !0)
            ])) : m("", !0)
          ]),
          a("div", Nl, [
            z.value && we.value ? (o(), n("div", Vl, [
              a("span", Kl, i(we.value), 1)
            ])) : s.stock.cost ? (o(), n("div", Gl, [
              E.value ? (o(), n("span", El, i(ge.value), 1)) : m("", !0),
              a("span", {
                class: V(["price__value", { price__discounted: E.value }])
              }, i(k.value), 3),
              E.value ? (o(), n("span", jl, "-" + i(s.stock.discount) + "%", 1)) : m("", !0)
            ])) : m("", !0),
            a("div", Ql, [
              s.stock.sample?.enabled ? (o(), n("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: H(xe, ["stop"])
              }, i(fe.value), 1)) : m("", !0),
              a("button", {
                type: "button",
                class: V(["c-btn c-btn--sm", { "c-btn--delete": z.value ? Z.value : s.isSelected }]),
                disabled: !K.value || G.value,
                onClick: H($e, ["stop"])
              }, i((z.value ? Z.value : s.isSelected) ? d(h)("stockFilter.remove") : d(h)("stockFilter.select")), 11, Hl)
            ]),
            he.value ? (o(), n("div", {
              key: 2,
              class: "stock-filter-card__full-stock",
              onClick: l[6] || (l[6] = H(() => {
              }, ["stop"]))
            }, [
              re.value.length ? (o(), n("div", Jl, [
                (o(!0), n(D, null, B(re.value, (u) => (o(), n("div", {
                  key: u.id,
                  class: "full-stock__option-row"
                }, [
                  a("label", Wl, [
                    Ye(a("input", {
                      type: "checkbox",
                      value: u.id,
                      "onUpdate:modelValue": l[5] || (l[5] = (P) => ie.value = P)
                    }, null, 8, Yl), [
                      [dt, ie.value]
                    ]),
                    a("span", null, i(u.label) + " (+" + i(s.formatPrice(u.price, s.locale)) + ")", 1)
                  ]),
                  ie.value.includes(u.id) ? (o(), n("div", {
                    key: 0,
                    class: "full-stock__option-qty",
                    role: "group",
                    "aria-label": `${u.label} quantity`
                  }, [
                    a("button", {
                      type: "button",
                      class: "full-stock__qty-btn",
                      disabled: pe(u.id) <= 1,
                      onClick: H((P) => je(u.id), ["stop"])
                    }, "−", 8, Zl),
                    a("span", es, i(pe(u.id)), 1),
                    a("button", {
                      type: "button",
                      class: "full-stock__qty-btn",
                      onClick: H((P) => Be(u.id), ["stop"])
                    }, "+", 8, ts)
                  ], 8, Xl)) : m("", !0)
                ]))), 128))
              ])) : m("", !0),
              a("div", ls, [
                a("div", {
                  class: "full-stock__qty",
                  role: "group",
                  "aria-label": d(h)("stockFilter.quantity")
                }, [
                  a("button", {
                    type: "button",
                    class: "full-stock__qty-btn",
                    disabled: j.value <= 1,
                    onClick: H(Je, ["stop"])
                  }, "−", 8, os),
                  a("span", ns, i(j.value), 1),
                  a("button", {
                    type: "button",
                    class: "full-stock__qty-btn",
                    onClick: H(He, ["stop"])
                  }, "+")
                ], 8, ss),
                a("button", {
                  type: "button",
                  class: "c-btn c-btn--sm full-stock__add",
                  style: X({ backgroundColor: s.buttonColor, color: s.buttonTextColor }),
                  onClick: H(r, ["stop"])
                }, i(j.value > 1 ? d(h)("stockFilter.add_full_sheets", { count: j.value }) : d(h)("stockFilter.add_full_sheet")), 5)
              ])
            ])) : m("", !0)
          ])
        ], 42, pl)), [
          [w, G.value && s.disabledReason ? s.disabledReason : ""]
        ]),
        U.value ? (o(), ee(jt, {
          key: 2,
          open: M.value,
          "brand-name": T.value,
          description: y.value,
          urls: S.value,
          "catalogue-key": L.value,
          "api-url": s.apiUrl,
          onClose: l[7] || (l[7] = (u) => M.value = !1)
        }, null, 8, ["open", "brand-name", "description", "urls", "catalogue-key", "api-url"])) : m("", !0)
      ], 64);
    };
  }
}), as = /* @__PURE__ */ Ke(is, [["__scopeId", "data-v-3925662c"]]), rs = { class: "stock-filter-panel" }, cs = { class: "filter-panel-content" }, us = {
  key: 0,
  class: "filter-summary"
}, ds = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, fs = ["title"], vs = { class: "filter-summary__chip-field" }, gs = { class: "filter-summary__chip-value" }, ms = { class: "filter-summary__chip-field" }, hs = { class: "filter-summary__chip-value" }, ps = ["aria-label", "onClick"], ks = { class: "filter-groups" }, bs = { class: "filter-group__header" }, ys = { class: "filter-group__label" }, _s = { class: "filter-group__content" }, Cs = {
  key: 0,
  class: "filter-select"
}, ws = ["value", "onChange"], $s = { value: "" }, Ss = ["value"], xs = {
  key: 2,
  class: "filter-range"
}, Fs = { class: "filter-range__inputs" }, Ts = ["value", "min", "max", "step", "placeholder", "onInput"], Ms = ["value", "min", "max", "step", "placeholder", "onInput"], Ps = {
  key: 3,
  class: "filter-boolean"
}, Os = { class: "filter-checkbox" }, Ls = ["checked", "onChange"], zs = /* @__PURE__ */ Le({
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
  setup(s, { emit: F }) {
    const t = s, c = F, v = q({}), p = b(() => t.activeFilters.length), M = b(() => {
      const k = /* @__PURE__ */ new Set();
      for (const f of t.preAppliedChips)
        f.field && k.add(f.field);
      return k;
    }), L = b(
      () => t.filterConfigs.filter((k) => !M.value.has(k.field))
    );
    function $(k, f) {
      const g = S(k), C = x(f), O = g.find((_) => x(_.value) === C);
      return O ? O.label : String(f);
    }
    const T = b(() => {
      const k = [];
      for (const f of t.activeFilters) {
        const g = t.filterConfigs.find((_) => _.field === f.field);
        if (!g) continue;
        const C = y(g);
        if (f.type === "multiselect" && Array.isArray(f.value)) {
          for (const _ of f.value)
            k.push({
              key: `${f.field}:${x(_)}`,
              fieldLabel: C,
              valueLabel: $(g, _),
              remove: () => {
                const R = f.value.filter((_e) => x(_e) !== x(_));
                R.length === 0 ? c("remove-filter", f.field) : c("apply-filter", f.field, R, "multiselect");
              }
            });
          continue;
        }
        let O;
        if (f.type === "range" && f.value && typeof f.value == "object") {
          const { min: _, max: R } = f.value;
          _ !== void 0 && R !== void 0 ? O = `${_} – ${R}` : _ !== void 0 ? O = `≥ ${_}` : R !== void 0 ? O = `≤ ${R}` : O = "";
        } else f.type === "boolean" ? O = g.label : O = $(g, f.value);
        k.push({
          key: f.field,
          fieldLabel: C,
          valueLabel: O,
          remove: () => {
            f.type === "range" && (v.value[f.field] = {}), c("remove-filter", f.field);
          }
        });
      }
      return k;
    });
    function x(k) {
      return typeof k == "object" && k !== null && "hex" in k ? String(k.hex) : String(k);
    }
    function y(k) {
      return {
        material: h("woodwork.material"),
        t: h("woodwork.thickness") + " (mm)",
        cost: h("stockFilter.price"),
        color: h("fields.color"),
        l: h("woodwork.length"),
        w: h("woodwork.width"),
        weight: h("fields.weight"),
        name: h("fields.name"),
        category: h("general.category"),
        brand: h("fields.brand"),
        variant: h("fields.variant"),
        finish: h("fields.finish")
      }[k.field] || k.label;
    }
    function S(k) {
      const f = t.getFilterOptionCounts?.(k.field) || /* @__PURE__ */ new Map(), g = f.size > 0, C = (_) => {
        if (!g) return;
        const R = typeof _ == "object" && _ !== null && "hex" in _ ? _.hex : String(_);
        return f.get(R) ?? 0;
      };
      return k.options?.length ? k.options.map((_) => ({
        ..._,
        count: C(_.value)
      })) : t.getUniqueValues(k.field).map((_) => {
        const R = C(_);
        return k.field === "color" && typeof _ == "object" && _ !== null ? "name" in _ && _.name ? {
          label: _.name,
          value: _,
          count: R
        } : {
          label: _.hex || String(_),
          value: _,
          count: R
        } : {
          label: String(_),
          value: _,
          count: R
        };
      });
    }
    function N(k) {
      return t.activeFilters.find((g) => g.field === k)?.value;
    }
    function de(k, f) {
      const C = f.target.value;
      if (C === "")
        c("remove-filter", k);
      else {
        const O = C !== "" && !isNaN(Number(C)) ? Number(C) : C;
        c("apply-filter", k, O, "select");
      }
    }
    function oe(k) {
      return S(k).map((f) => ({
        value: x(f.value),
        label: f.count !== void 0 ? `${f.label} (${f.count})` : f.label,
        hidden: f.count === 0
      }));
    }
    function ke(k) {
      const f = N(k);
      return Array.isArray(f) ? f.map(x) : [];
    }
    function U(k, f) {
      if (f.length === 0) {
        c("remove-filter", k);
        return;
      }
      const g = t.getUniqueValues(k), C = new Map(g.map((_) => [x(_), _])), O = f.map((_) => C.has(_) ? C.get(_) : _ !== "" && !isNaN(Number(_)) ? Number(_) : _);
      c("apply-filter", k, O, "multiselect");
    }
    function K(k) {
      const f = t.getFieldRange(k);
      return f ? { min: Math.floor(f.min), max: Math.ceil(f.max) } : { min: void 0, max: void 0 };
    }
    function G(k) {
      const f = t.getFieldRange(k);
      if (!f) return 1;
      const g = f.max - f.min;
      if (g <= 0) return 1;
      const C = g / 100, O = Math.pow(10, Math.floor(Math.log10(C)));
      return Math.max(O, 0.01);
    }
    function E(k, f) {
      if (v.value[k]?.[f] !== void 0)
        return v.value[k][f];
      const g = t.activeFilters.find((C) => C.field === k);
      if (g?.value && typeof g.value == "object")
        return g.value[f];
    }
    function fe(k, f, g) {
      const C = g.target, O = C.value ? Number(C.value) : void 0;
      v.value[k] || (v.value[k] = {}), v.value[k][f] = O;
      const _ = v.value[k].min, R = v.value[k].max;
      _ !== void 0 || R !== void 0 ? c("apply-filter", k, { min: _, max: R }, "range") : c("remove-filter", k);
    }
    function ve(k, f) {
      f.target.checked ? c("apply-filter", k, !0, "boolean") : c("remove-filter", k);
    }
    function ge() {
      v.value = {}, c("clear-filters");
    }
    return (k, f) => (o(), n("div", rs, [
      a("div", cs, [
        p.value > 0 || s.preAppliedChips.length > 0 ? (o(), n("div", us, [
          a("div", ds, [
            (o(!0), n(D, null, B(s.preAppliedChips, (g) => (o(), n("span", {
              key: `pre:${g.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: g.title || d(h)("stockFilter.pre_applied")
            }, [
              a("span", vs, i(g.fieldLabel) + ":", 1),
              a("span", gs, i(g.valueLabel), 1)
            ], 8, fs))), 128)),
            (o(!0), n(D, null, B(T.value, (g) => (o(), n("span", {
              key: g.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              a("span", ms, i(g.fieldLabel) + ":", 1),
              a("span", hs, i(g.valueLabel), 1),
              a("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": d(h)("stockFilter.clear_filters"),
                onClick: g.remove
              }, "×", 8, ps)
            ]))), 128))
          ]),
          p.value > 0 ? (o(), n("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: ge
          }, i(d(h)("stockFilter.clear_filters")), 1)) : m("", !0)
        ])) : m("", !0),
        a("div", ks, [
          (o(!0), n(D, null, B(L.value, (g) => (o(), n("div", {
            key: g.field,
            class: "filter-group"
          }, [
            a("div", bs, [
              a("label", ys, i(y(g)), 1)
            ]),
            a("div", _s, [
              g.type === "select" ? (o(), n("div", Cs, [
                a("select", {
                  value: N(g.field),
                  class: "filter-select-input",
                  onChange: (C) => de(g.field, C)
                }, [
                  a("option", $s, i(d(h)("stockFilter.all")), 1),
                  (o(!0), n(D, null, B(S(g), (C) => (o(), n("option", {
                    key: C.value,
                    value: C.value
                  }, i(C.label) + i(C.count !== void 0 ? ` (${C.count})` : ""), 9, Ss))), 128))
                ], 40, ws)
              ])) : g.type === "multiselect" ? (o(), ee(_t, {
                key: 1,
                id: `filter-${g.field}`,
                value: ke(g.field),
                options: oe(g),
                placeholder: d(h)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (C) => U(g.field, C)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : g.type === "range" ? (o(), n("div", xs, [
                a("div", Fs, [
                  a("input", {
                    value: E(g.field, "min"),
                    min: K(g.field).min,
                    max: K(g.field).max,
                    step: G(g.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: d(h)("stockFilter.min"),
                    onInput: (C) => fe(g.field, "min", C)
                  }, null, 40, Ts),
                  f[0] || (f[0] = a("span", { class: "filter-range__separator" }, "–", -1)),
                  a("input", {
                    value: E(g.field, "max"),
                    min: K(g.field).min,
                    max: K(g.field).max,
                    step: G(g.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: d(h)("stockFilter.max"),
                    onInput: (C) => fe(g.field, "max", C)
                  }, null, 40, Ms)
                ])
              ])) : g.type === "boolean" ? (o(), n("div", Ps, [
                a("label", Os, [
                  a("input", {
                    checked: N(g.field) === !0,
                    type: "checkbox",
                    onChange: (C) => ve(g.field, C)
                  }, null, 40, Ls),
                  a("span", null, i(g.label), 1)
                ])
              ])) : m("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), Rs = /* @__PURE__ */ Ke(zs, [["__scopeId", "data-v-d3ba4ee5"]]), As = { class: "stock-filter-results" }, Is = { class: "results-header" }, qs = { class: "results-info" }, Us = {
  key: 0,
  class: "results-count"
}, Ds = {
  key: 1,
  class: "results-count results-count--loading"
}, Bs = { class: "results-controls" }, Ns = { class: "c-btn-group display-mode-toggle" }, Vs = ["title"], Ks = ["title"], Gs = {
  key: 1,
  class: "results-empty"
}, Es = { class: "empty-message" }, js = { class: "th" }, Qs = {
  key: 0,
  class: "th"
}, Hs = {
  key: 1,
  class: "th"
}, Js = {
  key: 2,
  class: "th"
}, Ws = {
  key: 3,
  class: "th"
}, Ys = {
  key: 4,
  class: "th"
}, Xs = {
  key: 5,
  class: "th"
}, Zs = {
  key: 6,
  class: "th th--center"
}, eo = {
  key: 7,
  class: "th th--center"
}, to = {
  key: 8,
  class: "th th--center"
}, lo = {
  key: 9,
  class: "th th--right"
}, so = {
  key: 3,
  class: "results-pagination"
}, oo = ["disabled", "aria-label"], no = { class: "catalogue-pagination__info" }, io = ["disabled", "aria-label"], ao = /* @__PURE__ */ Le({
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
  setup(s, { emit: F }) {
    const t = s, c = b(() => {
      const v = ["60px", "2fr"];
      return t.visibleColumns.finish && v.push("1fr"), t.visibleColumns.brand && v.push("1fr"), t.visibleColumns.variant && v.push("1fr"), t.visibleColumns.category && v.push("1fr"), t.visibleColumns.grain && v.push("80px"), t.visibleColumns.color && v.push("100px"), t.visibleColumns.thickness && v.push("80px"), t.visibleColumns.quantity && v.push("80px"), t.visibleColumns.weight && v.push("80px"), t.visibleColumns.price && v.push("100px"), v.push("50px"), { "grid-template-columns": v.join(" ") };
    });
    return (v, p) => (o(), n("div", As, [
      a("header", Is, [
        a("div", qs, [
          s.loading ? (o(), n("div", Ds, i(d(h)("actions.loading")) + "...", 1)) : (o(), n("div", Us, i(s.totalResults) + " " + i(s.totalResults === 1 ? d(h)("stockFilter.result_one") : d(h)("stockFilter.result_other")), 1))
        ]),
        a("div", Bs, [
          a("div", Ns, [
            a("button", {
              type: "button",
              class: V(["c-btn c-btn--sm", { selected: s.displayMode === "grid" }]),
              title: d(h)("stockFilter.grid_view"),
              onClick: p[0] || (p[0] = (M) => v.$emit("update:displayMode", "grid"))
            }, [...p[5] || (p[5] = [
              ft('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-e2eb6006><rect x="1" y="1" width="6" height="6" data-v-e2eb6006></rect><rect x="9" y="1" width="6" height="6" data-v-e2eb6006></rect><rect x="1" y="9" width="6" height="6" data-v-e2eb6006></rect><rect x="9" y="9" width="6" height="6" data-v-e2eb6006></rect></svg>', 1)
            ])], 10, Vs),
            a("button", {
              type: "button",
              class: V(["c-btn c-btn--sm", { selected: s.displayMode === "list" }]),
              title: d(h)("stockFilter.list_view"),
              onClick: p[1] || (p[1] = (M) => v.$emit("update:displayMode", "list"))
            }, [...p[6] || (p[6] = [
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
            ])], 10, Ks)
          ])
        ])
      ]),
      s.loading ? (o(), ee(ot, {
        key: 0,
        size: "medium",
        label: `${d(h)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : s.totalResults === 0 ? (o(), n("div", Gs, [
        a("p", Es, i(d(h)("stockFilter.no_results")), 1),
        s.hasActiveFilters ? (o(), n("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: p[2] || (p[2] = (M) => v.$emit("clear-filters"))
        }, i(d(h)("stockFilter.clear_filters")), 1)) : m("", !0)
      ])) : (o(), n(D, { key: 2 }, [
        s.displayMode === "list" ? (o(), n("div", {
          key: 0,
          class: "results-table-header",
          style: X(c.value)
        }, [
          p[7] || (p[7] = a("div", { class: "th" }, null, -1)),
          a("div", js, i(d(h)("woodwork.material")), 1),
          s.visibleColumns.finish ? (o(), n("div", Qs, i(d(h)("fields.finish")), 1)) : m("", !0),
          s.visibleColumns.brand ? (o(), n("div", Hs, i(d(h)("fields.brand")), 1)) : m("", !0),
          s.visibleColumns.variant ? (o(), n("div", Js, i(d(h)("fields.variant")), 1)) : m("", !0),
          s.visibleColumns.category ? (o(), n("div", Ws, i(d(h)("fields.category")), 1)) : m("", !0),
          s.visibleColumns.grain ? (o(), n("div", Ys, i(d(h)("fields.grain")), 1)) : m("", !0),
          s.visibleColumns.color ? (o(), n("div", Xs, i(d(h)("fields.color")), 1)) : m("", !0),
          s.visibleColumns.thickness ? (o(), n("div", Zs, i(d(h)("fields.t")), 1)) : m("", !0),
          s.visibleColumns.quantity ? (o(), n("div", eo, i(d(h)("fields.q")), 1)) : m("", !0),
          s.visibleColumns.weight ? (o(), n("div", to, i(d(h)("fields.weight")), 1)) : m("", !0),
          s.visibleColumns.price ? (o(), n("div", lo, i(d(h)("stockFilter.price")), 1)) : m("", !0),
          p[8] || (p[8] = a("div", { class: "th th--center" }, null, -1))
        ], 4)) : m("", !0),
        a("div", {
          class: V(["results-grid", { "results-grid--list": s.displayMode === "list" }])
        }, [
          vt(v.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      s.totalPages > 1 ? (o(), n("div", so, [
        a("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: s.currentPage === 1,
          "aria-label": d(h)("pagination.previous"),
          onClick: p[3] || (p[3] = (M) => v.$emit("go-to-page", s.currentPage - 1))
        }, [
          Oe(d(Ze), { name: "chevron-left" }),
          W(" " + i(d(h)("pagination.previous")), 1)
        ], 8, oo),
        a("span", no, i(s.currentPage) + " / " + i(s.totalPages), 1),
        a("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: s.currentPage === s.totalPages,
          "aria-label": d(h)("pagination.next"),
          onClick: p[4] || (p[4] = (M) => v.$emit("go-to-page", s.currentPage + 1))
        }, [
          W(i(d(h)("pagination.next")) + " ", 1),
          Oe(d(Ze), { name: "chevron-right" })
        ], 8, io)
      ])) : m("", !0)
    ]));
  }
}), ro = /* @__PURE__ */ Ke(ao, [["__scopeId", "data-v-e2eb6006"]]), co = ["aria-label"], uo = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, fo = { style: { "margin-bottom": "6px", color: "#aaa" } }, vo = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, go = { style: { "margin-bottom": "6px", color: "#aaa" } }, mo = { style: { color: "#0ff" } }, ho = { style: { color: "#aaa" } }, po = { style: { color: "#0ff" } }, ko = { style: { color: "#0f0" } }, bo = {
  key: 2,
  class: "stock-filter-search-sort"
}, yo = {
  key: 0,
  class: "selection-bar"
}, _o = { class: "selection-bar__left" }, Co = { class: "selection-bar__count" }, wo = 500, Oo = /* @__PURE__ */ Le({
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
      default: () => Ct()
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
        button: "#0e7fa6",
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
  emits: ["stock-added", "stock-removed", "selection-changed", "selection-confirmed", "labels-changed", "order-sample", "selections-restored", "single-pick", "add-full-stock"],
  setup(s, { expose: F, emit: t }) {
    const c = s, v = t, p = q(c.stockOptions), M = q(c.config), L = q(c.numberFormat);
    ue(() => c.stockOptions, (r) => {
      p.value = r;
    }), ue(() => c.config, (r) => {
      M.value = r;
    });
    const $ = b(() => {
      if (c.serverPagination)
        return { ...c.serverPagination };
    }), {
      activeFilters: T,
      searchQuery: x,
      sortBy: y,
      sortOrder: S,
      displayMode: N,
      currentPage: de,
      filteredStock: oe,
      paginatedStock: ke,
      selectedStock: U,
      totalItems: K,
      isLoading: G,
      applyFilter: E,
      removeFilter: fe,
      clearFilters: ve,
      goToPage: ge,
      toggleStockSelection: k,
      isStockSelected: f,
      clearSelection: g,
      selectById: C,
      createInputStock: O,
      getUniqueValues: _,
      getFieldRange: R,
      getFilterOptionCounts: _e
    } = St({
      stockOptions: p,
      config: M,
      numberFormat: L,
      serverPagination: $.value
    }), { addNotice: ze } = $t(), te = gt(xt, []), A = q(!1), le = q(1), Y = q(/* @__PURE__ */ new Map());
    function Ce(r, e, l) {
      for (const w of r)
        w.customData = {
          ...w.customData || {},
          selectionId: e,
          ...l?.name && { stockName: l.name },
          ...l?.material && { materialLabel: l.material }
        }, l?.extras && wt(w, l.extras);
      v("stock-added", r);
    }
    const z = b(() => c.config.itemsPerPage || 20), be = b(() => c.serverPagination ? [] : et(oe.value)), ye = b(() => et(U.value)), Z = b(() => {
      if (c.serverPagination && !A.value) return [];
      const r = A.value ? ye.value : be.value, l = ((A.value ? le.value : de.value) - 1) * z.value;
      return r.slice(l, l + z.value);
    }), Re = b(() => A.value ? Z.value.flatMap((r) => r.items) : c.serverPagination ? ke.value : Z.value.flatMap((r) => r.items)), { groupedStock: Ge, getFilteredOutThicknesses: Ae } = It(Re, T), we = b(() => A.value ? Z.value : c.serverPagination ? Ge.value : Z.value);
    function Ee(r) {
      const e = /* @__PURE__ */ new Set();
      for (const l of r.items)
        f(l) && l.t != null && e.add(l.t);
      return e;
    }
    const Ie = b(() => {
      const r = /* @__PURE__ */ new Map();
      for (const e of Re.value)
        r.set(J(e), e.name || e.material || "");
      return r;
    }), qe = b(() => {
      const r = c.serverPagination ? we.value.map((l) => l.representative) : c.stockOptions.slice(0, wo);
      if (!r.length) return "";
      const e = r.map((l, w) => {
        const u = l.name || l.material;
        if (!u) return null;
        const P = l.db_id, I = l.cost && c.currency ? {
          "@type": "Offer",
          price: l.cost,
          priceCurrency: c.currency,
          availability: l.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, Q = {
          "@type": "Product",
          name: u,
          ...l.imageUrl && { image: l.imageUrl },
          ...l.code && { sku: l.code },
          ...P && { productID: P },
          ...l.brand && { brand: { "@type": "Brand", name: l.brand } },
          ...l.category && { category: l.category },
          ...l.description && { description: l.description },
          ...I && { offers: I }
        };
        return {
          "@type": "ListItem",
          position: w + 1,
          item: Q
        };
      }).filter((l) => l !== null);
      return e.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: e
      }).replace(/[<]/g, "\\u003c") : "";
    }), $e = b(() => {
      const r = {
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
      }, e = c.serverPagination ? ke.value : oe.value;
      for (const l of e)
        l.code && (r.code = !0), l.finish && (r.finish = !0), l.variant && (r.variant = !0), l.brand && (r.brand = !0), l.grain && (r.grain = !0), l.color && (r.color = !0), l.category && (r.category = !0), l.t != null && (r.thickness = !0), l.weight && (r.weight = !0), l.cost && (r.price = !0), l.q != null && !l.unlimitedQuantity && (r.quantity = !0), l.tags?.length && (r.tags = !0);
      return r;
    }), Se = b(() => A.value ? ye.value.length : c.serverPagination ? K.value : be.value.length), Ue = b(() => {
      const r = Se.value;
      return Math.max(1, Math.ceil(r / z.value));
    }), me = b(() => A.value ? le.value : de.value);
    function De(r) {
      const e = Ue.value, l = Math.max(1, Math.min(r, e));
      A.value ? le.value = l : ge(l);
    }
    ue(be, (r) => {
      if (c.serverPagination || A.value) return;
      const e = Math.max(1, Math.ceil(r.length / z.value));
      de.value > e && ge(e);
    }), ue(A, () => {
      le.value = 1;
    }), ue(() => U.value.length, (r) => {
      r === 0 && A.value && (A.value = !1);
      const e = Math.max(1, Math.ceil(ye.value.length / z.value));
      le.value > e && (le.value = e), U.value.length > 0 && v("labels-changed", /* @__PURE__ */ new Map());
    });
    const ne = b(() => c.loading || G.value), xe = q(!1);
    ue(U, (r) => {
      xe.value || (te.value = r.map((e) => J(e)));
    }, { deep: !0 });
    async function j(r) {
      if (!c.serverPagination) return null;
      const { apiUrl: e, orgSlug: l, isCustomDomain: w } = c.serverPagination, u = w ? `${e}ecommerce/stock` : `${e}ecommerce/${l}/stock`;
      try {
        const P = new URL(u);
        P.searchParams.set("limit", "1");
        const I = {};
        if (/^[a-f0-9]{24}$/i.test(r))
          I._id = r;
        else {
          const Me = r.split("-");
          if (Me.length >= 4) {
            const it = parseFloat(Me.pop()), at = parseFloat(Me.pop()), rt = parseFloat(Me.pop()), ct = Me.join("-");
            I.material = ct, I.l = rt, I.w = at, I.t = it;
          } else
            return null;
        }
        P.searchParams.set("filters", JSON.stringify(I));
        const Q = await fetch(P.toString(), { credentials: "include" });
        if (!Q.ok) return null;
        const Te = (await Q.json()).items || [];
        if (Te.length === 0) return null;
        const We = Te[0];
        return J(We) !== r ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: r, got: J(We) }), null) : We;
      } catch {
        return null;
      }
    }
    async function ie() {
      if (te.value.length) {
        xe.value = !0;
        try {
          const r = [...te.value], e = [], l = [];
          for (const u of r) {
            let P = c.stockOptions.find((I) => J(I) === u);
            !P && c.serverPagination && (P = await j(u)), P && (e.push(u), l.push(P));
          }
          const w = r.length - e.length;
          w > 0 && (te.value = e, ze({
            message: h("stockFilter.selection_unavailable", { count: w }),
            type: "warning"
          }));
          for (const u of l) {
            const P = J(u);
            if (!f(u)) {
              k(u);
              const I = O(u);
              ae([I], u), Y.value.set(P, [I]), Ce([I], P, u);
            }
          }
        } finally {
          xe.value = !1;
        }
      }
    }
    mt(async () => {
      if (!c.singleSelect) {
        if (c.initialProductId) {
          const r = C(c.initialProductId);
          if (!r) return;
          const e = J(r), l = O(r);
          ae([l], r), Y.value.set(e, [l]), Ce([l], e, r);
          return;
        }
        await ie(), v("selections-restored", U.value.length);
      }
    });
    const se = b(() => {
      const r = c.config.availableFilters.filter((e) => {
        const l = _(e.field);
        return l.length > 0 && l.some((w) => w != null);
      });
      return r.length === 0 && T.value.length > 0 ? c.config.availableFilters : r;
    });
    function ae(r, e) {
      const l = e.name || e.material;
      if (l)
        for (const w of r)
          w.material = l;
    }
    async function he(r) {
      if (c.singleSelect) {
        v("single-pick", r);
        return;
      }
      const e = f(r);
      k(r);
      const l = J(r);
      if (e) {
        const w = Y.value.get(l);
        w ? (w.forEach(re), Y.value.delete(l)) : re(O(r));
      } else {
        const w = O(r);
        ae([w], r), Y.value.set(l, [w]), Ce([w], l, r);
      }
    }
    function re(r) {
      v("stock-removed", r);
    }
    async function pe(r) {
      r.items.every((l) => f(l)) ? await Be(r) : await Fe(r);
    }
    async function Fe(r) {
      for (const e of r.items)
        f(e) || await he(e);
    }
    async function Be(r) {
      for (const e of r.items)
        f(e) && await he(e);
    }
    async function je(r, e) {
      await he(r);
    }
    function Qe() {
      for (const r of U.value) {
        const e = J(r), l = Y.value.get(e);
        l ? l.forEach(re) : re(O(r));
      }
      Y.value.clear(), g(), te.value = [], A.value = !1;
    }
    function He(r) {
      v("order-sample", r);
    }
    function Je(r) {
      v("add-full-stock", r);
    }
    return F({
      applyFilter: E,
      removeFilter: fe,
      clearFilters: ve,
      clearSelection: g,
      selectedStock: U,
      filteredStock: oe,
      getUniqueValues: _,
      getFieldRange: R
    }), (r, e) => (o(), n("section", {
      id: "stock-filter",
      class: "smartcut-content",
      "aria-label": d(h)("stockFilter.catalogue_aria")
    }, [
      qe.value ? (o(), ee(ht("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: qe.value
      }, null, 8, ["innerHTML"])) : m("", !0),
      s.debug ? (o(), n("div", uo, [
        e[15] || (e[15] = a("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        a("div", fo, [
          e[6] || (e[6] = a("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          a("pre", vo, i(JSON.stringify(d(te), null, 2)), 1)
        ]),
        a("div", go, [
          a("strong", mo, "selectedStock (" + i(d(U).length) + " items):", 1),
          (o(!0), n(D, null, B(d(U), (l) => (o(), n("div", {
            key: d(J)(l),
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              e[7] || (e[7] = a("span", { style: { color: "#ff0" } }, "getStockId:", -1)),
              W(" " + i(d(J)(l)), 1)
            ]),
            a("div", null, [
              e[8] || (e[8] = a("span", { style: { color: "#ff0" } }, "db_id:", -1)),
              W(" " + i(l.db_id || "(none)"), 1)
            ]),
            a("div", null, [
              e[9] || (e[9] = a("span", { style: { color: "#ff0" } }, "code:", -1)),
              W(" " + i(l.code || "(none)"), 1)
            ]),
            a("div", null, [
              e[10] || (e[10] = a("span", { style: { color: "#ff0" } }, "material:", -1)),
              W(" " + i(l.material), 1)
            ]),
            a("div", null, [
              e[11] || (e[11] = a("span", { style: { color: "#ff0" } }, "name:", -1)),
              W(" " + i(l.name), 1)
            ]),
            a("div", null, [
              e[12] || (e[12] = a("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
              W(" " + i(l.l) + " × " + i(l.w) + " × " + i(l.t), 1)
            ]),
            a("div", null, [
              e[13] || (e[13] = a("span", { style: { color: "#ff0" } }, "variant:", -1)),
              W(" " + i(l.variant || "(none)"), 1)
            ])
          ]))), 128))
        ]),
        a("div", ho, [
          a("strong", po, "materialStockMap (" + i(Y.value.size) + " entries):", 1),
          (o(!0), n(D, null, B(Y.value, ([l, w]) => (o(), n("div", {
            key: l,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            a("div", null, [
              e[14] || (e[14] = a("span", { style: { color: "#ff0" } }, "key:", -1)),
              W(" " + i(l) + " → ", 1),
              a("span", ko, i(w.length) + " InputStock(s)", 1)
            ]),
            (o(!0), n(D, null, B(w, (u, P) => (o(), n("div", {
              key: P,
              style: { "margin-left": "12px" }
            }, i(u.material) + " " + i(u.l) + "×" + i(u.w) + "×" + i(u.t) + " db_id=" + i(u.db_id || "(none)") + " code=" + i(u.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : m("", !0),
      s.config.enableSearch || s.config.sortOptions.length > 0 ? (o(), n("div", bo, [
        s.config.enableSearch ? (o(), ee(Ft, {
          key: 0,
          modelValue: d(x),
          "onUpdate:modelValue": e[0] || (e[0] = (l) => Xe(x) ? x.value = l : null)
        }, null, 8, ["modelValue"])) : m("", !0),
        s.config.sortOptions.length > 0 ? (o(), ee(Tt, {
          key: 1,
          "sort-by": d(y),
          "onUpdate:sortBy": e[1] || (e[1] = (l) => Xe(y) ? y.value = l : null),
          "sort-order": d(S),
          "onUpdate:sortOrder": e[2] || (e[2] = (l) => Xe(S) ? S.value = l : null),
          "available-fields": s.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : m("", !0)
      ])) : m("", !0),
      se.value.length > 0 || s.preAppliedChips.length > 0 ? (o(), ee(Rs, {
        key: 3,
        "filter-configs": se.value,
        "active-filters": d(T),
        "get-unique-values": d(_),
        "get-field-range": d(R),
        "get-filter-option-counts": d(_e),
        "pre-applied-chips": s.preAppliedChips,
        onApplyFilter: d(E),
        onRemoveFilter: d(fe),
        onClearFilters: d(ve)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : m("", !0),
      Oe(ro, {
        "total-results": Se.value,
        "display-mode": d(N),
        loading: ne.value,
        "has-active-filters": d(T).length > 0,
        "current-page": me.value,
        "total-pages": Ue.value,
        "visible-columns": $e.value,
        "onUpdate:displayMode": e[3] || (e[3] = (l) => N.value = l),
        onClearFilters: d(ve),
        onGoToPage: De
      }, {
        default: Pe(() => [
          (o(!0), n(D, null, B(we.value, (l) => (o(), ee(as, {
            key: l.groupKey,
            stock: l.representative,
            "is-selected": d(f)(l.representative),
            "display-label": Ie.value.get(d(J)(l.representative)),
            "format-price": s.formatPrice,
            "button-color": s.colors.button,
            "button-text-color": s.colors.buttonText,
            locale: s.locale,
            "display-mode": d(N),
            "unit-system": s.unitSystem,
            "visible-columns": $e.value,
            "api-url": s.serverPagination?.apiUrl,
            "allow-full-stock-purchase": s.config.allowFullStockPurchase,
            group: l.items.length > 1 ? l : void 0,
            "selected-thicknesses": l.items.length > 1 ? Ee(l) : void 0,
            "filtered-out-thicknesses": l.items.length > 1 ? d(Ae)(l) : void 0,
            onToggleSelection: he,
            onToggleGroup: pe,
            onSelectGroup: Fe,
            onDeselectGroup: Be,
            onToggleThickness: je,
            onOrderSample: He,
            onAddFullStock: Je
          }, null, 8, ["stock", "is-selected", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "allow-full-stock-purchase", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Oe(pt, { name: "selection-bar" }, {
        default: Pe(() => [
          c.showSelectionBar && d(U).length > 0 ? (o(), n("div", yo, [
            a("div", _o, [
              a("span", Co, i(d(h)("stockFilter.selected_materials", { count: d(U).length })), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: e[4] || (e[4] = (l) => A.value = !A.value)
              }, i(A.value ? d(h)("stockFilter.show_all") : d(h)("stockFilter.show_selected")), 1),
              a("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: Qe
              }, i(d(h)("stockFilter.clear")), 1)
            ]),
            a("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: X({ backgroundColor: s.colors.button, color: s.colors.buttonText }),
              onClick: e[5] || (e[5] = (l) => v("selection-confirmed", d(U)))
            }, i(d(h)("stockFilter.create_cut_list")), 5)
          ])) : m("", !0)
        ]),
        _: 1
      })
    ], 8, co));
  }
});
export {
  Oo as default
};
