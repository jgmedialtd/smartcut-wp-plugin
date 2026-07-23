import { x as p, d as Re, k as fe, o, j as te, p as Oe, c as i, t as a, F as B, f as V, b as v, a as r, s as N, m as Le, u as m, V as dt, h as Xe, A as Be, w as H, n as X, g as j, i as J, W as ft, e as vt, P as gt, X as mt, l as ht, H as pt, Y as Ze, Z as kt } from "./vendor-vue-CeWGZ1lm.js";
import { S as bt, _ as yt, L as nt, C as _t, z as wt, D as st, M as Ct, q as St, G as $t, u as xt } from "./EcommerceCalculator-Cpt6HXtv.js";
import { t as _ } from "./i18n-gSInbpCa.js";
import { u as Ft, g as W, S as Tt } from "./Vanilla-AjF_uuti.js";
import { Icon as et } from "./index-BYdfCLOt.js";
import { _ as Ge } from "./Launch-_29Ox10h.js";
import { C as Mt, a as Pt } from "./CatalogueSort-BMDJoB9w.js";
const Ot = [
  "material",
  "name",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "imageUrl",
  "db_sawId"
], Lt = 5e3, Ve = /* @__PURE__ */ new Map(), Rt = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function zt(t) {
  if (!t) return t;
  const F = Ve.get(t);
  if (F !== void 0) return F;
  const e = t.replace(Rt, "");
  return Ve.size >= Lt && Ve.clear(), Ve.set(t, e), e;
}
function It(t) {
  const F = [];
  for (const u of Ot) {
    const d = t[u];
    F.push(d != null ? String(d) : "");
  }
  t.variant ? F.push(zt(t.code ?? "")) : F.push("");
  const e = t.extras;
  if (e)
    for (const u of bt)
      F.push(e[u] ? "1" : "0");
  else
    F.push("0000");
  return F.join("");
}
function tt(t) {
  return t.length > 0 && t[0].thicknessGroup ? At(t) : qt(t);
}
function At(t) {
  const F = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), u = [];
  for (const k of t) {
    const M = k.thicknessGroup;
    if (!M) {
      const S = `__solo_${k.db_id || Math.random()}`;
      F.set(S, [k]), u.push(S);
      continue;
    }
    const z = M.groupKey;
    F.has(z) || (F.set(z, []), e.set(z, M), u.push(z)), F.get(z).push(k);
  }
  const d = [];
  for (const k of u) {
    const M = F.get(k);
    M.sort((S, T) => (S.t ?? 0) - (T.t ?? 0));
    const z = e.get(k);
    d.push({
      groupKey: k,
      items: M,
      thicknesses: z?.thicknesses || M.map((S) => S.t).filter((S) => S != null),
      dimensions: z?.dimensions || it(M),
      representative: M[0],
      priceRange: z?.priceRange || null,
      weightRange: z?.weightRange || null
    });
  }
  return d;
}
function it(t) {
  const F = /* @__PURE__ */ new Set(), e = [];
  for (const u of t) {
    if (typeof u.l != "number" || typeof u.w != "number") continue;
    const d = `${u.l}x${u.w}`;
    F.has(d) || (F.add(d), e.push({ l: u.l, w: u.w }));
  }
  return e;
}
function qt(t) {
  const F = /* @__PURE__ */ new Map(), e = [];
  for (const d of t) {
    if (d.t == null) {
      const M = `__solo_${d.db_id || Math.random()}`;
      F.set(M, [d]), e.push(M);
      continue;
    }
    const k = It(d);
    F.has(k) || (F.set(k, []), e.push(k)), F.get(k).push(d);
  }
  const u = [];
  for (const d of e) {
    const k = F.get(d);
    k.sort((y, x) => (y.t ?? 0) - (x.t ?? 0));
    const M = [...new Set(k.map((y) => y.t).filter((y) => y != null))].sort((y, x) => y - x), z = k.map((y) => y.cost).filter((y) => y != null && y > 0);
    let S = null;
    if (z.length > 1) {
      const y = Math.min(...z), x = Math.max(...z);
      y !== x && (S = { min: y, max: x });
    }
    const T = k.map((y) => y.weight).filter((y) => y != null && y > 0);
    let $ = null;
    if (T.length > 1) {
      const y = Math.min(...T), x = Math.max(...T);
      y !== x && ($ = { min: y, max: x });
    }
    u.push({
      groupKey: d,
      items: k,
      thicknesses: M,
      dimensions: it(k),
      representative: k[0],
      priceRange: S,
      weightRange: $
    });
  }
  return u;
}
function ot(t, F) {
  const e = F.find((d) => d.field === "t");
  if (!e) return !1;
  const u = e.value;
  return Array.isArray(u) ? !u.some((d) => Number(d) === t) : u != null ? Number(u) !== t : !1;
}
function Dt(t, F) {
  const e = p(() => tt(t.value));
  function u(S, T) {
    return S.items.find(($) => $.t === T);
  }
  function d(S, T, $, y) {
    return S.items.find((x) => x.l === T && x.w === $ && x.t === y);
  }
  function k(S, T, $) {
    const y = /* @__PURE__ */ new Set();
    for (const x of S.items)
      x.l === T && x.w === $ && typeof x.t == "number" && y.add(x.t);
    return [...y].sort((x, G) => x - G);
  }
  function M(S, T) {
    const $ = /* @__PURE__ */ new Set(), y = [];
    for (const x of S.items) {
      if (x.t !== T || typeof x.l != "number" || typeof x.w != "number") continue;
      const G = `${x.l}x${x.w}`;
      $.has(G) || ($.add(G), y.push({ l: x.l, w: x.w }));
    }
    return y;
  }
  function z(S) {
    const T = /* @__PURE__ */ new Set();
    for (const $ of S.thicknesses)
      ot($, F.value) && T.add($);
    return T;
  }
  return {
    groupedStock: e,
    getItemForThickness: u,
    getItemForCombo: d,
    getThicknessesForDimension: k,
    getDimensionsForThickness: M,
    getFilteredOutThicknesses: z,
    isThicknessFilteredOut: ot
  };
}
const Ut = { key: 0 }, Nt = {
  key: 0,
  class: "bim-description"
}, Bt = {
  key: 1,
  class: "bim-empty"
}, Vt = {
  key: 2,
  class: "bim-links"
}, Gt = ["href"], Kt = { key: 1 }, Et = /* @__PURE__ */ Re({
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
    function F(T) {
      const $ = (T.url || "").toLowerCase(), y = (T.label || "").toLowerCase();
      return /\.pdf(\?|$|#)/.test($) || y.includes("pdf") ? "file-pdf" : /\/3d|\bviewer\b|visualization/.test($) || y.includes("3d") || y.includes("viewer") ? "cube" : y.includes("spec") || y.includes("datasheet") ? "file-lines" : "arrow-up-right-from-square";
    }
    const e = t, u = N(!1), d = N(!1), k = N(null), M = () => typeof e.description == "string" && e.description.trim() !== "" || Array.isArray(e.urls) && e.urls.length > 0;
    let z = "";
    async function S() {
      if (!e.open) return;
      if (M()) {
        k.value = {
          name: e.brandName,
          fullDescription: e.description,
          urls: e.urls || []
        }, u.value = !1, d.value = !1;
        return;
      }
      if (!e.brandName || !e.catalogueKey || !e.apiUrl) {
        d.value = !0;
        return;
      }
      const T = `${e.catalogueKey}::${e.brandName}`;
      if (!(T === z && k.value)) {
        z = T, u.value = !0, d.value = !1, k.value = null;
        try {
          const y = `${e.apiUrl.endsWith("/") ? e.apiUrl : e.apiUrl + "/"}catalogues/${encodeURIComponent(e.catalogueKey)}/categories/${encodeURIComponent(e.brandName)}`, x = await fetch(y, { credentials: "include" });
          if (!x.ok) {
            d.value = !0;
            return;
          }
          k.value = await x.json();
        } catch {
          d.value = !0;
        } finally {
          u.value = !1;
        }
      }
    }
    return fe(
      () => [e.open, e.brandName, e.catalogueKey, e.description, e.urls],
      S,
      { immediate: !0, deep: !0 }
    ), (T, $) => (o(), te(yt, {
      size: "sm",
      compact: !1,
      open: t.open,
      onClosed: $[2] || ($[2] = (y) => T.$emit("close"))
    }, {
      header: Oe(() => [
        r("div", null, [
          r("h3", null, a(t.brandName), 1),
          u.value ? (o(), te(nt, {
            key: 0,
            size: "small",
            label: "Loading…",
            class: "bim-sub"
          })) : v("", !0)
        ]),
        r("button", {
          class: "bim-close",
          "aria-label": "Close",
          onClick: $[0] || ($[0] = (y) => T.$emit("close"))
        }, "×")
      ]),
      footer: Oe(() => [
        r("button", {
          class: "c-btn",
          onClick: $[1] || ($[1] = (y) => T.$emit("close"))
        }, "Done")
      ]),
      default: Oe(() => [
        !u.value && !d.value && k.value ? (o(), i("div", Ut, [
          k.value.fullDescription ? (o(), i("p", Nt, a(k.value.fullDescription), 1)) : (o(), i("p", Bt, "No description available for this brand yet.")),
          k.value.urls && k.value.urls.length ? (o(), i("ul", Vt, [
            (o(!0), i(B, null, V(k.value.urls, (y) => (o(), i("li", {
              key: y.url
            }, [
              r("a", {
                href: y.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                Le(m(et), {
                  icon: ["fass", F(y)],
                  class: "bim-link-icon"
                }, null, 8, ["icon"]),
                r("span", null, a(y.label), 1)
              ], 8, Gt)
            ]))), 128))
          ])) : v("", !0)
        ])) : !u.value && d.value ? (o(), i("div", Kt, [...$[3] || ($[3] = [
          r("p", { class: "bim-empty" }, "We don't have additional information about this brand yet.", -1)
        ])])) : v("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), jt = /* @__PURE__ */ Ge(Et, [["__scopeId", "data-v-cc403927"]]), Qt = ["onKeydown"], Ht = { class: "stock-filter-row__thumb" }, Wt = ["src", "alt"], Jt = { class: "stock-filter-row__material" }, Yt = { class: "stock-filter-row__name" }, Xt = {
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
}, wl = {
  key: 3,
  class: "c-badge stock-filter-card__badge--thickness"
}, Cl = { class: "stock-filter-card__content" }, Sl = { class: "stock-filter-card__title" }, $l = {
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
}, Rl = {
  key: 6,
  class: "c-loz-group"
}, zl = ["disabled", "onClick"], Il = {
  key: 7,
  class: "stock-filter-card__extras"
}, Al = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, ql = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Dl = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Ul = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Nl = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Bl = { class: "stock-filter-card__footer" }, Vl = {
  key: 0,
  class: "stock-filter-card__price"
}, Gl = { class: "price__value" }, Kl = {
  key: 1,
  class: "stock-filter-card__price"
}, El = {
  key: 0,
  class: "price__original"
}, jl = {
  key: 1,
  class: "price__badge"
}, Ql = { class: "stock-filter-card__actions" }, Hl = ["disabled"], Wl = {
  key: 0,
  class: "full-stock__options"
}, Jl = { class: "full-stock__option" }, Yl = ["value"], Xl = ["aria-label"], Zl = ["disabled", "onClick"], es = { class: "full-stock__qty-value" }, ts = ["onClick"], ls = { class: "full-stock__buy" }, ss = {
  class: "full-stock__qty",
  role: "group",
  "aria-label": "Quantity"
}, os = ["disabled"], ns = { class: "full-stock__qty-value" }, is = /* @__PURE__ */ Re({
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
  setup(t, { emit: F }) {
    const e = t, u = F, d = N(!1), k = N(!1), M = N(!1), z = p(() => e.stock._catalogueKey), S = p(() => _t(e.stock)), T = p(() => S.value.brand || S.value.variant || S.value.material || ""), $ = p(() => e.stock._hasDetailContent === !0), y = p(() => (e.stock.description || "").trim() || void 0), x = p(() => {
      const c = e.stock.urls;
      return Array.isArray(c) ? c.filter((b) => b && typeof b.url == "string" && b.url.trim()).map((b) => ({ label: String(b.label || b.url), url: String(b.url) })) : [];
    }), G = p(() => !!y.value || x.value.length > 0), ve = p(() => e.stock._source === "library"), oe = p(() => O.value ? !1 : G.value || ve.value && $.value && !!T.value && !!z.value && !!e.apiUrl), Y = p(() => e.stock.available !== !1), I = p(() => e.isDisabled), K = p(() => e.stock.discount && e.stock.discount > 0), he = p(() => {
      const c = e.stock.sample;
      return c?.enabled ? c.price && c.price > 0 ? `${_("stockFilter.orderSample")} (${e.formatPrice(c.price, e.locale)})` : _("stockFilter.freeSample") : "";
    }), ge = p(() => e.stock.cost ? K.value ? e.stock.cost * (1 - e.stock.discount / 100) : e.stock.cost : 0), ne = p(() => e.stock.cost ? e.formatPrice(e.stock.cost, e.locale) : "N/A"), ie = p(() => e.stock.cost ? e.formatPrice(ge.value, e.locale) : "N/A"), Q = p(() => {
      const c = e.stock.color;
      return c && typeof c == "object" && "hex" in c && c.hex ? String(c.hex) : e.stock.colorHex || "";
    }), g = p(() => {
      const c = e.stock.color;
      return typeof c == "string" ? c : c && typeof c == "object" && "name" in c ? String(c.name || "") : "";
    }), f = p(() => (!e.stock.imageUrl || d.value) && !!Q.value), h = p(() => f.value ? { background: Q.value } : void 0), C = p(() => Q.value ? wt(Q.value) : "#fff"), P = p(() => {
      if (!e.stock.grain) return "";
      switch (e.stock.grain) {
        case "l":
          return _("fields.grain.length");
        case "w":
          return _("fields.grain.width");
        default:
          return "";
      }
    }), w = p(() => {
      if (!P.value) return "";
      const c = _("fields.grain");
      return `${c.charAt(0).toUpperCase()}${c.slice(1)}: ${P.value}`;
    }), q = p(() => {
      const c = [], b = /* @__PURE__ */ new Set(), n = (L) => {
        if (L == null) return;
        const A = String(L).trim();
        if (!A) return;
        const U = A.toLowerCase();
        b.has(U) || (b.add(U), c.push(A));
      }, l = ce.value.toLowerCase(), s = (L) => {
        if (L == null) return;
        const A = String(L).trim();
        !A || l.includes(A.toLowerCase()) || n(A);
      };
      s(S.value.variant);
      const R = O.value && e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : e.stock.weight ? `${e.stock.weight}kg` : "";
      return R && s(R), c;
    }), pe = p(() => {
      const c = [], b = (S.value.material || "").trim(), n = (e.stock.category || "").trim();
      return b && c.push({ kind: "material", label: b }), n && n.toLowerCase() !== b.toLowerCase() && c.push({ kind: "category", label: n }), c;
    });
    function Ke(c, b) {
      return e.unitSystem === "imperial" ? `${(c / 25.4).toFixed(1)}" × ${(b / 25.4).toFixed(1)}"` : `${c} × ${b}`;
    }
    const le = p(() => (e.group?.dimensions?.length ? e.group.dimensions : e.stock.l && e.stock.w ? [{ l: e.stock.l, w: e.stock.w }] : []).map((b) => Ke(b.l, b.w))), D = p(() => {
      if (e.stock.t == null) return "";
      const c = be.value ? " [B]" : "";
      return e.unitSystem === "imperial" ? `${(e.stock.t / 25.4).toFixed(2)}"${c}` : `${e.stock.t} mm${c}`;
    }), ae = p(() => {
      const c = e.stock.extras;
      return c ? !!(c.banding || c.finish || c.planing || c.machining) : !1;
    }), O = p(() => e.group && e.group.items.length > 1), ke = p(() => {
      if (!O.value || !e.selectedThicknesses) return !1;
      const c = e.selectedThicknesses.size;
      return c > 0 && c < e.group.thicknesses.length;
    }), re = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size === e.group.thicknesses.length), se = p(() => !O.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size > 0);
    function Ce(c) {
      return (e.group?.items ?? [e.stock]).some(
        (n) => n?.t === c && !!st(n)
      );
    }
    const be = p(() => (e.group?.items ?? [e.stock]).some(
      (b) => !!st(b)
    ));
    function Se(c) {
      const b = Ce(c) ? " [B]" : "";
      return e.unitSystem === "imperial" ? `${(c / 25.4).toFixed(2)}"${b}` : `${c}mm${b}`;
    }
    const ze = p(() => e.group?.priceRange ? `${e.formatPrice(e.group.priceRange.min, e.locale)} – ${e.formatPrice(e.group.priceRange.max, e.locale)}` : null), Ee = p(() => e.group?.weightRange ? `${e.group.weightRange.min}–${e.group.weightRange.max}kg` : null);
    function $e(c, b) {
      if (b.stopPropagation(), e.filteredOutThicknesses?.has(c)) return;
      const n = e.group?.items.find((l) => l.t === c);
      n && u("toggle-thickness", n, c);
    }
    function je() {
      !Y.value || I.value || (O.value && e.group ? u("toggle-group", e.group) : u("toggle-selection", e.stock));
    }
    function Ie() {
      !Y.value || I.value || (O.value && e.group ? se.value ? u("deselect-group", e.group) : u("select-group", e.group) : u("toggle-selection", e.stock));
    }
    const xe = p(() => {
      if (!e.group || e.group.thicknesses.length < 2) return "";
      const c = e.group.thicknesses[0], b = e.group.thicknesses[e.group.thicknesses.length - 1];
      return e.unitSystem === "imperial" ? `${(c / 25.4).toFixed(2)}" – ${(b / 25.4).toFixed(2)}"` : `${c} – ${b}mm`;
    }), Ae = p(() => {
      const c = ["60px", "2fr"];
      return e.visibleColumns.finish && c.push("1fr"), e.visibleColumns.brand && c.push("1fr"), e.visibleColumns.variant && c.push("1fr"), e.visibleColumns.category && c.push("1fr"), e.visibleColumns.grain && c.push("80px"), e.visibleColumns.color && c.push("100px"), e.visibleColumns.thickness && c.push(O.value ? "minmax(120px, auto)" : "80px"), e.visibleColumns.quantity && c.push("80px"), e.visibleColumns.weight && c.push("80px"), e.visibleColumns.price && c.push("100px"), c.push("50px"), { "grid-template-columns": c.join(" ") };
    }), ce = p(() => e.displayLabel ? e.displayLabel : S.value.productLabel && S.value.productLabel !== "(unnamed)" ? S.value.productLabel : `${e.stock.material} ${e.stock.l}×${e.stock.w}`), Fe = p(() => S.value.code ? S.value.code.toLowerCase() !== ce.value.toLowerCase() : !1);
    function ue() {
      je();
    }
    function Qe() {
      u("order-sample", e.stock);
    }
    const E = N(1), Z = N([]), de = N({}), ye = N({}), Te = p(
      () => e.allowFullStockPurchase && !O.value && e.stock.cost != null && e.stock.cost > 0
    ), _e = p(() => e.stock.fullStockOptions || []);
    function ee(c) {
      return de.value[c] ?? E.value;
    }
    function qe(c, b) {
      de.value = { ...de.value, [c]: Math.max(1, Math.floor(b) || 1) }, ye.value = { ...ye.value, [c]: !0 };
    }
    function Me(c) {
      qe(c, ee(c) + 1);
    }
    function we(c) {
      qe(c, ee(c) - 1);
    }
    const me = p(
      () => _e.value.filter((c) => Z.value.includes(c.id)).map((c) => ({ ...c, quantity: ee(c.id) }))
    ), He = p(
      () => me.value.reduce((c, b) => c + (b.price || 0) * b.quantity, 0)
    ), De = p(
      () => (e.stock.cost || 0) * E.value + He.value
    );
    function Ue() {
      E.value++;
    }
    function We() {
      E.value = Math.max(1, E.value - 1);
    }
    fe(E, (c) => {
      for (const b of Z.value)
        ye.value[b] || (de.value = { ...de.value, [b]: c });
    });
    function Je() {
      Te.value && (u("add-full-stock", {
        stock: e.stock,
        quantity: Math.max(1, Math.floor(E.value)),
        options: me.value
      }), E.value = 1, Z.value = [], de.value = {}, ye.value = {});
    }
    return (c, b) => {
      const n = dt("tooltip");
      return o(), i(B, null, [
        t.displayMode === "list" ? Xe((o(), i("article", {
          key: 0,
          class: j(["stock-filter-row", {
            "stock-filter-row--selected": O.value ? re.value : t.isSelected,
            "stock-filter-row--partial": ke.value,
            "stock-filter-row--unavailable": !Y.value,
            "stock-filter-row--disabled": I.value
          }]),
          style: X(Ae.value),
          role: "button",
          tabindex: "0",
          onClick: ue,
          onKeydown: [
            Be(ue, ["enter"]),
            Be(H(ue, ["prevent"]), ["space"])
          ]
        }, [
          r("div", Ht, [
            r("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: X(h.value)
            }, null, 4),
            t.stock.imageUrl && !d.value ? (o(), i("img", {
              key: 0,
              class: j(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": k.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: b[0] || (b[0] = (l) => k.value = !0),
              onError: b[1] || (b[1] = (l) => d.value = !0)
            }, null, 42, Wt)) : v("", !0)
          ]),
          r("div", Jt, [
            r("h3", Yt, a(ce.value), 1),
            Fe.value ? (o(), i("span", Xt, a(S.value.code), 1)) : v("", !0)
          ]),
          t.visibleColumns.finish ? (o(), i("div", Zt, a(t.stock.finish || ""), 1)) : v("", !0),
          t.visibleColumns.brand ? (o(), i("div", el, a(t.stock.brand || ""), 1)) : v("", !0),
          t.visibleColumns.variant ? (o(), i("div", tl, a(t.stock.variant || ""), 1)) : v("", !0),
          t.visibleColumns.category ? (o(), i("div", ll, a(t.stock.category || ""), 1)) : v("", !0),
          t.visibleColumns.grain ? (o(), i("div", sl, a(P.value), 1)) : v("", !0),
          t.visibleColumns.color ? (o(), i("div", ol, [
            Q.value ? (o(), i("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: X({ backgroundColor: Q.value })
            }, null, 4)) : v("", !0),
            g.value ? (o(), i("span", nl, a(g.value), 1)) : v("", !0)
          ])) : v("", !0),
          t.visibleColumns.thickness ? (o(), i("div", il, [
            O.value ? (o(), i("div", al, [
              (o(!0), i(B, null, V(t.group.thicknesses, (l) => (o(), i("button", {
                key: l,
                type: "button",
                class: j(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(l) && !t.filteredOutThicknesses?.has(l),
                  active: t.selectedThicknesses?.has(l)
                }]),
                style: X({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(l) && !t.filteredOutThicknesses?.has(l) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(l) ? { "--loz-bg": "var(--color-selected, #10b981)", "--loz-color": "var(--font-color-black, #10222b)", "--loz-border-color": "var(--color-selected-border, #087f60)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(l),
                onClick: (s) => $e(l, s)
              }, a(Se(l)), 15, rl))), 128))
            ])) : t.stock.t != null ? (o(), i("span", cl, [
              J(a(t.stock.t), 1),
              b[8] || (b[8] = r("small", null, "mm", -1))
            ])) : v("", !0)
          ])) : v("", !0),
          t.visibleColumns.quantity ? (o(), i("div", ul, a(t.stock.unlimitedQuantity ? m(_)("stockFilter.inStock") : t.stock.q), 1)) : v("", !0),
          t.visibleColumns.weight ? (o(), i("div", dl, a(Ee.value || (t.stock.weight ? `${t.stock.weight}kg` : "")), 1)) : v("", !0),
          t.visibleColumns.price ? (o(), i("div", fl, [
            K.value ? (o(), i("span", vl, a(ne.value), 1)) : v("", !0),
            r("span", {
              class: j(["price__value", { price__discounted: K.value }])
            }, a(ie.value), 3),
            K.value ? (o(), i("span", gl, "-" + a(t.stock.discount) + "%", 1)) : v("", !0)
          ])) : v("", !0),
          r("div", ml, [
            r("button", {
              type: "button",
              class: j(["c-btn", { "c-btn--delete": O.value ? se.value : t.isSelected }]),
              disabled: !Y.value || I.value,
              onClick: H(Ie, ["stop"])
            }, a((O.value ? se.value : t.isSelected) ? "−" : "+"), 11, hl)
          ])
        ], 46, Qt)), [
          [n, I.value && t.disabledReason ? t.disabledReason : ""]
        ]) : Xe((o(), i("article", {
          key: 1,
          class: j(["stock-filter-card", {
            "stock-filter-card--selected": O.value ? re.value : t.isSelected,
            "stock-filter-card--partial": ke.value,
            "stock-filter-card--unavailable": !Y.value,
            "stock-filter-card--disabled": I.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: ue,
          onKeydown: [
            Be(ue, ["enter"]),
            Be(H(ue, ["prevent"]), ["space"])
          ]
        }, [
          r("div", kl, [
            r("div", {
              class: "stock-filter-card__image-placeholder",
              style: X(h.value)
            }, null, 4),
            t.stock.imageUrl && !d.value ? (o(), i("img", {
              key: 0,
              class: j(["stock-filter-card__image", { "stock-filter-card__image--loaded": k.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: b[2] || (b[2] = (l) => k.value = !0),
              onError: b[3] || (b[3] = (l) => d.value = !0)
            }, null, 42, bl)) : v("", !0),
            S.value.brand && !ce.value.toLowerCase().includes(S.value.brand.toLowerCase()) ? (o(), i("span", yl, a(S.value.brand), 1)) : v("", !0),
            O.value && xe.value ? (o(), i("span", _l, a(xe.value), 1)) : !O.value && t.stock.t != null ? (o(), i("span", wl, a(D.value), 1)) : v("", !0),
            f.value && g.value ? (o(), i("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: X({ color: C.value })
            }, a(g.value), 5)) : v("", !0)
          ]),
          r("div", Cl, [
            r("h3", Sl, a(ce.value), 1),
            Fe.value ? (o(), i("div", $l, a(t.stock.code), 1)) : v("", !0),
            q.value.length ? (o(), i("div", xl, [
              (o(!0), i(B, null, V(q.value, (l, s) => (o(), i("span", {
                key: s,
                class: "spec-item"
              }, a(l), 1))), 128))
            ])) : v("", !0),
            g.value && !f.value || t.stock.finish || P.value ? (o(), i("div", Fl, [
              g.value && !f.value ? (o(), i("span", Tl, [
                Q.value ? (o(), i("span", {
                  key: 0,
                  class: "qc-chip__dot",
                  style: X({ background: Q.value })
                }, null, 4)) : v("", !0),
                J(a(g.value), 1)
              ])) : v("", !0),
              t.stock.finish ? (o(), i("span", Ml, a(t.stock.finish), 1)) : v("", !0),
              P.value ? (o(), i("span", Pl, a(w.value), 1)) : v("", !0)
            ])) : v("", !0),
            oe.value ? (o(), i("button", {
              key: 3,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: b[4] || (b[4] = H((l) => M.value = !0, ["stop"]))
            }, a(m(_)("stockFilter.details")), 1)) : v("", !0),
            pe.value.length ? (o(), i("div", Ol, [
              (o(!0), i(B, null, V(pe.value, (l) => (o(), i("span", {
                key: l.kind,
                class: j(["c-badge", `spec-badge--${l.kind}`])
              }, a(l.label), 3))), 128))
            ])) : v("", !0),
            le.value.length ? (o(), i("div", Ll, [
              (o(!0), i(B, null, V(le.value, (l) => (o(), i("span", {
                key: l,
                class: "c-badge stock-filter-card__dim"
              }, a(l), 1))), 128))
            ])) : v("", !0),
            O.value ? (o(), i("div", Rl, [
              (o(!0), i(B, null, V(t.group.thicknesses, (l) => (o(), i("button", {
                key: l,
                type: "button",
                class: j(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(l) && !t.filteredOutThicknesses?.has(l),
                  active: t.selectedThicknesses?.has(l)
                }]),
                style: X({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(l) && !t.filteredOutThicknesses?.has(l) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(l) ? { "--loz-bg": "var(--color-selected, #10b981)", "--loz-color": "var(--font-color-black, #10222b)", "--loz-border-color": "var(--color-selected-border, #087f60)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(l),
                onClick: (s) => $e(l, s)
              }, a(Se(l)), 15, zl))), 128))
            ])) : v("", !0),
            ae.value || t.stock.sample?.enabled ? (o(), i("div", Il, [
              t.stock.sample?.enabled ? (o(), i("span", Al, a(m(_)("stockFilter.samplesAvailable")), 1)) : v("", !0),
              t.stock.extras?.banding ? (o(), i("span", ql, a(m(_)("stockFilter.banding")), 1)) : v("", !0),
              t.stock.extras?.finish ? (o(), i("span", Dl, a(m(_)("stockFilter.finishOption")), 1)) : v("", !0),
              t.stock.extras?.planing ? (o(), i("span", Ul, a(m(_)("stockFilter.planing")), 1)) : v("", !0),
              t.stock.extras?.machining ? (o(), i("span", Nl, a(m(_)("stockFilter.machining")), 1)) : v("", !0)
            ])) : v("", !0)
          ]),
          r("div", Bl, [
            O.value && ze.value ? (o(), i("div", Vl, [
              r("span", Gl, a(ze.value), 1)
            ])) : t.stock.cost ? (o(), i("div", Kl, [
              K.value ? (o(), i("span", El, a(ne.value), 1)) : v("", !0),
              r("span", {
                class: j(["price__value", { price__discounted: K.value }])
              }, a(ie.value), 3),
              K.value ? (o(), i("span", jl, "-" + a(t.stock.discount) + "%", 1)) : v("", !0)
            ])) : v("", !0),
            r("div", Ql, [
              t.stock.sample?.enabled ? (o(), i("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: H(Qe, ["stop"])
              }, a(he.value), 1)) : v("", !0),
              r("button", {
                type: "button",
                class: j(["c-btn c-btn--sm", { "c-btn--delete": O.value ? se.value : t.isSelected }]),
                disabled: !Y.value || I.value,
                onClick: H(Ie, ["stop"])
              }, a((O.value ? se.value : t.isSelected) ? m(_)("stockFilter.remove") : m(_)("stockFilter.select")), 11, Hl)
            ]),
            Te.value ? (o(), i("div", {
              key: 2,
              class: "stock-filter-card__full-stock",
              onClick: b[6] || (b[6] = H(() => {
              }, ["stop"]))
            }, [
              _e.value.length ? (o(), i("div", Wl, [
                (o(!0), i(B, null, V(_e.value, (l) => (o(), i("div", {
                  key: l.id,
                  class: "full-stock__option-row"
                }, [
                  r("label", Jl, [
                    Xe(r("input", {
                      type: "checkbox",
                      value: l.id,
                      "onUpdate:modelValue": b[5] || (b[5] = (s) => Z.value = s)
                    }, null, 8, Yl), [
                      [ft, Z.value]
                    ]),
                    r("span", null, a(l.label) + " (+" + a(t.formatPrice(l.price, t.locale)) + ")", 1)
                  ]),
                  Z.value.includes(l.id) ? (o(), i("div", {
                    key: 0,
                    class: "full-stock__option-qty",
                    role: "group",
                    "aria-label": `${l.label} quantity`
                  }, [
                    r("button", {
                      type: "button",
                      class: "full-stock__qty-btn",
                      disabled: ee(l.id) <= 1,
                      onClick: H((s) => we(l.id), ["stop"])
                    }, "−", 8, Zl),
                    r("span", es, a(ee(l.id)), 1),
                    r("button", {
                      type: "button",
                      class: "full-stock__qty-btn",
                      onClick: H((s) => Me(l.id), ["stop"])
                    }, "+", 8, ts)
                  ], 8, Xl)) : v("", !0)
                ]))), 128))
              ])) : v("", !0),
              r("div", ls, [
                r("div", ss, [
                  r("button", {
                    type: "button",
                    class: "full-stock__qty-btn",
                    disabled: E.value <= 1,
                    onClick: H(We, ["stop"])
                  }, "−", 8, os),
                  r("span", ns, a(E.value), 1),
                  r("button", {
                    type: "button",
                    class: "full-stock__qty-btn",
                    onClick: H(Ue, ["stop"])
                  }, "+")
                ]),
                r("button", {
                  type: "button",
                  class: "c-btn c-btn--sm full-stock__add",
                  style: X({ backgroundColor: t.buttonColor, color: t.buttonTextColor }),
                  onClick: H(Je, ["stop"])
                }, a(E.value > 1 ? m(_)("stockFilter.add_full_sheets", { count: E.value }) : m(_)("stockFilter.add_full_sheet")) + " — " + a(t.formatPrice(De.value, t.locale)), 5)
              ])
            ])) : v("", !0)
          ])
        ], 42, pl)), [
          [n, I.value && t.disabledReason ? t.disabledReason : ""]
        ]),
        oe.value ? (o(), te(jt, {
          key: 2,
          open: M.value,
          "brand-name": T.value,
          description: y.value,
          urls: x.value,
          "catalogue-key": z.value,
          "api-url": t.apiUrl,
          onClose: b[7] || (b[7] = (l) => M.value = !1)
        }, null, 8, ["open", "brand-name", "description", "urls", "catalogue-key", "api-url"])) : v("", !0)
      ], 64);
    };
  }
}), as = /* @__PURE__ */ Ge(is, [["__scopeId", "data-v-8f3f4184"]]), rs = { class: "stock-filter-panel" }, cs = { class: "filter-panel-content" }, us = {
  key: 0,
  class: "filter-summary"
}, ds = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, fs = ["title"], vs = { class: "filter-summary__chip-field" }, gs = { class: "filter-summary__chip-value" }, ms = { class: "filter-summary__chip-field" }, hs = { class: "filter-summary__chip-value" }, ps = ["aria-label", "onClick"], ks = { class: "filter-groups" }, bs = { class: "filter-group__header" }, ys = { class: "filter-group__label" }, _s = { class: "filter-group__content" }, ws = {
  key: 0,
  class: "filter-select"
}, Cs = ["value", "onChange"], Ss = { value: "" }, $s = ["value"], xs = {
  key: 2,
  class: "filter-range"
}, Fs = { class: "filter-range__inputs" }, Ts = ["value", "min", "max", "step", "onInput"], Ms = ["value", "min", "max", "step", "onInput"], Ps = {
  key: 3,
  class: "filter-boolean"
}, Os = { class: "filter-checkbox" }, Ls = ["checked", "onChange"], Rs = /* @__PURE__ */ Re({
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
  setup(t, { emit: F }) {
    const e = t, u = F, d = N({}), k = p(() => e.activeFilters.length), M = p(() => {
      const g = /* @__PURE__ */ new Set();
      for (const f of e.preAppliedChips)
        f.field && g.add(f.field);
      return g;
    }), z = p(
      () => e.filterConfigs.filter((g) => !M.value.has(g.field))
    );
    function S(g, f) {
      const h = x(g), C = $(f), P = h.find((w) => $(w.value) === C);
      return P ? P.label : String(f);
    }
    const T = p(() => {
      const g = [];
      for (const f of e.activeFilters) {
        const h = e.filterConfigs.find((w) => w.field === f.field);
        if (!h) continue;
        const C = y(h);
        if (f.type === "multiselect" && Array.isArray(f.value)) {
          for (const w of f.value)
            g.push({
              key: `${f.field}:${$(w)}`,
              fieldLabel: C,
              valueLabel: S(h, w),
              remove: () => {
                const q = f.value.filter((pe) => $(pe) !== $(w));
                q.length === 0 ? u("remove-filter", f.field) : u("apply-filter", f.field, q, "multiselect");
              }
            });
          continue;
        }
        let P;
        if (f.type === "range" && f.value && typeof f.value == "object") {
          const { min: w, max: q } = f.value;
          w !== void 0 && q !== void 0 ? P = `${w} – ${q}` : w !== void 0 ? P = `≥ ${w}` : q !== void 0 ? P = `≤ ${q}` : P = "";
        } else f.type === "boolean" ? P = h.label : P = S(h, f.value);
        g.push({
          key: f.field,
          fieldLabel: C,
          valueLabel: P,
          remove: () => {
            f.type === "range" && (d.value[f.field] = {}), u("remove-filter", f.field);
          }
        });
      }
      return g;
    });
    function $(g) {
      return typeof g == "object" && g !== null && "hex" in g ? String(g.hex) : String(g);
    }
    function y(g) {
      return {
        material: _("woodwork.material"),
        t: _("woodwork.thickness") + " (mm)",
        cost: _("stockFilter.price"),
        color: _("fields.color"),
        l: _("woodwork.length"),
        w: _("woodwork.width"),
        weight: _("fields.weight"),
        name: _("fields.name"),
        category: _("general.category"),
        brand: _("fields.brand"),
        variant: _("fields.variant"),
        finish: _("fields.finish")
      }[g.field] || g.label;
    }
    function x(g) {
      const f = e.getFilterOptionCounts?.(g.field) || /* @__PURE__ */ new Map(), h = f.size > 0, C = (w) => {
        if (!h) return;
        const q = typeof w == "object" && w !== null && "hex" in w ? w.hex : String(w);
        return f.get(q) ?? 0;
      };
      return g.options?.length ? g.options.map((w) => ({
        ...w,
        count: C(w.value)
      })) : e.getUniqueValues(g.field).map((w) => {
        const q = C(w);
        return g.field === "color" && typeof w == "object" && w !== null ? "name" in w && w.name ? {
          label: w.name,
          value: w,
          count: q
        } : {
          label: w.hex || String(w),
          value: w,
          count: q
        } : {
          label: String(w),
          value: w,
          count: q
        };
      });
    }
    function G(g) {
      return e.activeFilters.find((h) => h.field === g)?.value;
    }
    function ve(g, f) {
      const C = f.target.value;
      if (C === "")
        u("remove-filter", g);
      else {
        const P = C !== "" && !isNaN(Number(C)) ? Number(C) : C;
        u("apply-filter", g, P, "select");
      }
    }
    function oe(g) {
      return x(g).map((f) => ({
        value: $(f.value),
        label: f.count !== void 0 ? `${f.label} (${f.count})` : f.label,
        hidden: f.count === 0
      }));
    }
    function Y(g) {
      const f = G(g);
      return Array.isArray(f) ? f.map($) : [];
    }
    function I(g, f) {
      if (f.length === 0) {
        u("remove-filter", g);
        return;
      }
      const h = e.getUniqueValues(g), C = new Map(h.map((w) => [$(w), w])), P = f.map((w) => C.has(w) ? C.get(w) : w !== "" && !isNaN(Number(w)) ? Number(w) : w);
      u("apply-filter", g, P, "multiselect");
    }
    function K(g) {
      const f = e.getFieldRange(g);
      return f ? { min: Math.floor(f.min), max: Math.ceil(f.max) } : { min: void 0, max: void 0 };
    }
    function he(g) {
      const f = e.getFieldRange(g);
      if (!f) return 1;
      const h = f.max - f.min;
      if (h <= 0) return 1;
      const C = h / 100, P = Math.pow(10, Math.floor(Math.log10(C)));
      return Math.max(P, 0.01);
    }
    function ge(g, f) {
      if (d.value[g]?.[f] !== void 0)
        return d.value[g][f];
      const h = e.activeFilters.find((C) => C.field === g);
      if (h?.value && typeof h.value == "object")
        return h.value[f];
    }
    function ne(g, f, h) {
      const C = h.target, P = C.value ? Number(C.value) : void 0;
      d.value[g] || (d.value[g] = {}), d.value[g][f] = P;
      const w = d.value[g].min, q = d.value[g].max;
      w !== void 0 || q !== void 0 ? u("apply-filter", g, { min: w, max: q }, "range") : u("remove-filter", g);
    }
    function ie(g, f) {
      f.target.checked ? u("apply-filter", g, !0, "boolean") : u("remove-filter", g);
    }
    function Q() {
      d.value = {}, u("clear-filters");
    }
    return (g, f) => (o(), i("div", rs, [
      r("div", cs, [
        k.value > 0 || t.preAppliedChips.length > 0 ? (o(), i("div", us, [
          r("div", ds, [
            (o(!0), i(B, null, V(t.preAppliedChips, (h) => (o(), i("span", {
              key: `pre:${h.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: h.title || "Pre-applied by the product spec"
            }, [
              r("span", vs, a(h.fieldLabel) + ":", 1),
              r("span", gs, a(h.valueLabel), 1)
            ], 8, fs))), 128)),
            (o(!0), i(B, null, V(T.value, (h) => (o(), i("span", {
              key: h.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              r("span", ms, a(h.fieldLabel) + ":", 1),
              r("span", hs, a(h.valueLabel), 1),
              r("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": m(_)("stockFilter.clear_filters"),
                onClick: h.remove
              }, "×", 8, ps)
            ]))), 128))
          ]),
          k.value > 0 ? (o(), i("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: Q
          }, a(m(_)("stockFilter.clear_filters")), 1)) : v("", !0)
        ])) : v("", !0),
        r("div", ks, [
          (o(!0), i(B, null, V(z.value, (h) => (o(), i("div", {
            key: h.field,
            class: "filter-group"
          }, [
            r("div", bs, [
              r("label", ys, a(y(h)), 1)
            ]),
            r("div", _s, [
              h.type === "select" ? (o(), i("div", ws, [
                r("select", {
                  value: G(h.field),
                  class: "filter-select-input",
                  onChange: (C) => ve(h.field, C)
                }, [
                  r("option", Ss, a(m(_)("stockFilter.all")), 1),
                  (o(!0), i(B, null, V(x(h), (C) => (o(), i("option", {
                    key: C.value,
                    value: C.value
                  }, a(C.label) + a(C.count !== void 0 ? ` (${C.count})` : ""), 9, $s))), 128))
                ], 40, Cs)
              ])) : h.type === "multiselect" ? (o(), te(Ct, {
                key: 1,
                id: `filter-${h.field}`,
                value: Y(h.field),
                options: oe(h),
                placeholder: m(_)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (C) => I(h.field, C)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : h.type === "range" ? (o(), i("div", xs, [
                r("div", Fs, [
                  r("input", {
                    value: ge(h.field, "min"),
                    min: K(h.field).min,
                    max: K(h.field).max,
                    step: he(h.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (C) => ne(h.field, "min", C)
                  }, null, 40, Ts),
                  f[0] || (f[0] = r("span", { class: "filter-range__separator" }, "–", -1)),
                  r("input", {
                    value: ge(h.field, "max"),
                    min: K(h.field).min,
                    max: K(h.field).max,
                    step: he(h.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (C) => ne(h.field, "max", C)
                  }, null, 40, Ms)
                ])
              ])) : h.type === "boolean" ? (o(), i("div", Ps, [
                r("label", Os, [
                  r("input", {
                    checked: G(h.field) === !0,
                    type: "checkbox",
                    onChange: (C) => ie(h.field, C)
                  }, null, 40, Ls),
                  r("span", null, a(h.label), 1)
                ])
              ])) : v("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), zs = /* @__PURE__ */ Ge(Rs, [["__scopeId", "data-v-5def52e7"]]), Is = { class: "stock-filter-results" }, As = { class: "results-header" }, qs = { class: "results-info" }, Ds = {
  key: 0,
  class: "results-count"
}, Us = {
  key: 1,
  class: "results-count results-count--loading"
}, Ns = { class: "results-controls" }, Bs = { class: "c-btn-group display-mode-toggle" }, Vs = ["title"], Gs = ["title"], Ks = {
  key: 1,
  class: "results-empty"
}, Es = { class: "empty-message" }, js = { class: "th" }, Qs = {
  key: 0,
  class: "th"
}, Hs = {
  key: 1,
  class: "th"
}, Ws = {
  key: 2,
  class: "th"
}, Js = {
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
}, oo = ["disabled", "aria-label"], no = { class: "catalogue-pagination__info" }, io = ["disabled", "aria-label"], ao = /* @__PURE__ */ Re({
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
  setup(t, { emit: F }) {
    const e = t, u = p(() => {
      const d = ["60px", "2fr"];
      return e.visibleColumns.finish && d.push("1fr"), e.visibleColumns.brand && d.push("1fr"), e.visibleColumns.variant && d.push("1fr"), e.visibleColumns.category && d.push("1fr"), e.visibleColumns.grain && d.push("80px"), e.visibleColumns.color && d.push("100px"), e.visibleColumns.thickness && d.push("80px"), e.visibleColumns.quantity && d.push("80px"), e.visibleColumns.weight && d.push("80px"), e.visibleColumns.price && d.push("100px"), d.push("50px"), { "grid-template-columns": d.join(" ") };
    });
    return (d, k) => (o(), i("div", Is, [
      r("header", As, [
        r("div", qs, [
          t.loading ? (o(), i("div", Us, a(m(_)("actions.loading")) + "...", 1)) : (o(), i("div", Ds, a(t.totalResults) + " " + a(t.totalResults === 1 ? m(_)("stockFilter.result_one") : m(_)("stockFilter.result_other")), 1))
        ]),
        r("div", Ns, [
          r("div", Bs, [
            r("button", {
              type: "button",
              class: j(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: m(_)("stockFilter.grid_view"),
              onClick: k[0] || (k[0] = (M) => d.$emit("update:displayMode", "grid"))
            }, [...k[5] || (k[5] = [
              vt('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-e2eb6006><rect x="1" y="1" width="6" height="6" data-v-e2eb6006></rect><rect x="9" y="1" width="6" height="6" data-v-e2eb6006></rect><rect x="1" y="9" width="6" height="6" data-v-e2eb6006></rect><rect x="9" y="9" width="6" height="6" data-v-e2eb6006></rect></svg>', 1)
            ])], 10, Vs),
            r("button", {
              type: "button",
              class: j(["c-btn c-btn--sm", { selected: t.displayMode === "list" }]),
              title: m(_)("stockFilter.list_view"),
              onClick: k[1] || (k[1] = (M) => d.$emit("update:displayMode", "list"))
            }, [...k[6] || (k[6] = [
              r("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                r("rect", {
                  x: "1",
                  y: "1",
                  width: "14",
                  height: "2"
                }),
                r("rect", {
                  x: "1",
                  y: "7",
                  width: "14",
                  height: "2"
                }),
                r("rect", {
                  x: "1",
                  y: "13",
                  width: "14",
                  height: "2"
                })
              ], -1)
            ])], 10, Gs)
          ])
        ])
      ]),
      t.loading ? (o(), te(nt, {
        key: 0,
        size: "medium",
        label: `${m(_)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : t.totalResults === 0 ? (o(), i("div", Ks, [
        r("p", Es, a(m(_)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (o(), i("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: k[2] || (k[2] = (M) => d.$emit("clear-filters"))
        }, a(m(_)("stockFilter.clear_filters")), 1)) : v("", !0)
      ])) : (o(), i(B, { key: 2 }, [
        t.displayMode === "list" ? (o(), i("div", {
          key: 0,
          class: "results-table-header",
          style: X(u.value)
        }, [
          k[7] || (k[7] = r("div", { class: "th" }, null, -1)),
          r("div", js, a(m(_)("woodwork.material")), 1),
          t.visibleColumns.finish ? (o(), i("div", Qs, a(m(_)("fields.finish")), 1)) : v("", !0),
          t.visibleColumns.brand ? (o(), i("div", Hs, a(m(_)("fields.brand")), 1)) : v("", !0),
          t.visibleColumns.variant ? (o(), i("div", Ws, a(m(_)("fields.variant")), 1)) : v("", !0),
          t.visibleColumns.category ? (o(), i("div", Js, a(m(_)("fields.category")), 1)) : v("", !0),
          t.visibleColumns.grain ? (o(), i("div", Ys, a(m(_)("fields.grain")), 1)) : v("", !0),
          t.visibleColumns.color ? (o(), i("div", Xs, a(m(_)("fields.color")), 1)) : v("", !0),
          t.visibleColumns.thickness ? (o(), i("div", Zs, a(m(_)("fields.t")), 1)) : v("", !0),
          t.visibleColumns.quantity ? (o(), i("div", eo, a(m(_)("fields.q")), 1)) : v("", !0),
          t.visibleColumns.weight ? (o(), i("div", to, a(m(_)("fields.weight")), 1)) : v("", !0),
          t.visibleColumns.price ? (o(), i("div", lo, a(m(_)("stockFilter.price")), 1)) : v("", !0),
          k[8] || (k[8] = r("div", { class: "th th--center" }, null, -1))
        ], 4)) : v("", !0),
        r("div", {
          class: j(["results-grid", { "results-grid--list": t.displayMode === "list" }])
        }, [
          gt(d.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      t.totalPages > 1 ? (o(), i("div", so, [
        r("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: t.currentPage === 1,
          "aria-label": m(_)("pagination.previous"),
          onClick: k[3] || (k[3] = (M) => d.$emit("go-to-page", t.currentPage - 1))
        }, [
          Le(m(et), { name: "chevron-left" }),
          J(" " + a(m(_)("pagination.previous")), 1)
        ], 8, oo),
        r("span", no, a(t.currentPage) + " / " + a(t.totalPages), 1),
        r("button", {
          type: "button",
          class: "catalogue-pagination__btn",
          disabled: t.currentPage === t.totalPages,
          "aria-label": m(_)("pagination.next"),
          onClick: k[4] || (k[4] = (M) => d.$emit("go-to-page", t.currentPage + 1))
        }, [
          J(a(m(_)("pagination.next")) + " ", 1),
          Le(m(et), { name: "chevron-right" })
        ], 8, io)
      ])) : v("", !0)
    ]));
  }
}), ro = /* @__PURE__ */ Ge(ao, [["__scopeId", "data-v-e2eb6006"]]), co = {
  id: "stock-filter",
  class: "smartcut-content",
  "aria-label": "Material catalogue"
}, uo = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, fo = { style: { "margin-bottom": "6px", color: "#aaa" } }, vo = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, go = { style: { "margin-bottom": "6px", color: "#aaa" } }, mo = { style: { color: "#0ff" } }, ho = { style: { color: "#aaa" } }, po = { style: { color: "#0ff" } }, ko = { style: { color: "#0f0" } }, bo = {
  key: 2,
  class: "stock-filter-search-sort"
}, yo = {
  key: 0,
  class: "selection-bar"
}, _o = { class: "selection-bar__left" }, wo = { class: "selection-bar__count" }, Co = 500, So = "Can't mix with a material that's cut on a different saw. Remove your current selection to pick this one.", Ro = /* @__PURE__ */ Re({
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
      default: () => St()
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
  setup(t, { expose: F, emit: e }) {
    const u = t, d = e, k = N(u.stockOptions), M = N(u.config), z = N(u.numberFormat);
    fe(() => u.stockOptions, (n) => {
      k.value = n;
    }), fe(() => u.config, (n) => {
      M.value = n;
    });
    const S = p(() => {
      if (u.serverPagination)
        return { ...u.serverPagination };
    }), {
      activeFilters: T,
      searchQuery: $,
      sortBy: y,
      sortOrder: x,
      displayMode: G,
      currentPage: ve,
      filteredStock: oe,
      paginatedStock: Y,
      selectedStock: I,
      totalItems: K,
      isLoading: he,
      applyFilter: ge,
      removeFilter: ne,
      clearFilters: ie,
      goToPage: Q,
      toggleStockSelection: g,
      isStockSelected: f,
      clearSelection: h,
      selectById: C,
      createInputStock: P,
      getUniqueValues: w,
      getFieldRange: q,
      getFilterOptionCounts: pe
    } = Ft({
      stockOptions: k,
      config: M,
      numberFormat: z,
      serverPagination: S.value
    }), { addNotice: Ke } = xt(), le = mt(Tt, []), D = N(!1), ae = N(1), O = N(/* @__PURE__ */ new Map());
    function ke(n, l, s) {
      for (const R of n)
        R.customData = {
          ...R.customData || {},
          selectionId: l,
          ...s?.name && { stockName: s.name },
          ...s?.material && { materialLabel: s.material }
        }, s?.extras && $t(R, s.extras);
      d("stock-added", n);
    }
    const re = p(() => u.config.itemsPerPage || 20), se = p(() => u.serverPagination ? [] : tt(oe.value)), Ce = p(() => tt(I.value)), be = p(() => {
      if (u.serverPagination && !D.value) return [];
      const n = D.value ? Ce.value : se.value, s = ((D.value ? ae.value : ve.value) - 1) * re.value;
      return n.slice(s, s + re.value);
    }), Se = p(() => D.value ? be.value.flatMap((n) => n.items) : u.serverPagination ? Y.value : be.value.flatMap((n) => n.items)), { groupedStock: ze, getFilteredOutThicknesses: Ee } = Dt(Se, T), $e = p(() => D.value ? be.value : u.serverPagination ? ze.value : be.value);
    function je(n) {
      const l = /* @__PURE__ */ new Set();
      for (const s of n.items)
        f(s) && s.t != null && l.add(s.t);
      return l;
    }
    const Ie = p(() => {
      const n = /* @__PURE__ */ new Map();
      for (const l of Se.value)
        n.set(W(l), l.name || l.material || "");
      return n;
    }), xe = p(() => {
      const n = u.serverPagination ? $e.value.map((s) => s.representative) : u.stockOptions.slice(0, Co);
      if (!n.length) return "";
      const l = n.map((s, R) => {
        const L = s.name || s.material;
        if (!L) return null;
        const A = s.db_id, U = s.cost && u.currency ? {
          "@type": "Offer",
          price: s.cost,
          priceCurrency: u.currency,
          availability: s.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, Ne = {
          "@type": "Product",
          name: L,
          ...s.imageUrl && { image: s.imageUrl },
          ...s.code && { sku: s.code },
          ...A && { productID: A },
          ...s.brand && { brand: { "@type": "Brand", name: s.brand } },
          ...s.category && { category: s.category },
          ...s.description && { description: s.description },
          ...U && { offers: U }
        };
        return {
          "@type": "ListItem",
          position: R + 1,
          item: Ne
        };
      }).filter((s) => s !== null);
      return l.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: l
      }).replace(/[<]/g, "\\u003c") : "";
    }), Ae = p(() => {
      const n = {
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
      }, l = u.serverPagination ? Y.value : oe.value;
      for (const s of l)
        s.code && (n.code = !0), s.finish && (n.finish = !0), s.variant && (n.variant = !0), s.brand && (n.brand = !0), s.grain && (n.grain = !0), s.color && (n.color = !0), s.category && (n.category = !0), s.t != null && (n.thickness = !0), s.weight && (n.weight = !0), s.cost && (n.price = !0), s.q != null && !s.unlimitedQuantity && (n.quantity = !0), s.tags?.length && (n.tags = !0);
      return n;
    }), ce = p(() => D.value ? Ce.value.length : u.serverPagination ? K.value : se.value.length), Fe = p(() => {
      const n = ce.value;
      return Math.max(1, Math.ceil(n / re.value));
    }), ue = p(() => D.value ? ae.value : ve.value);
    function Qe(n) {
      const l = Fe.value, s = Math.max(1, Math.min(n, l));
      D.value ? ae.value = s : Q(s);
    }
    fe(se, (n) => {
      if (u.serverPagination || D.value) return;
      const l = Math.max(1, Math.ceil(n.length / re.value));
      ve.value > l && Q(l);
    }), fe(D, () => {
      ae.value = 1;
    }), fe(() => I.value.length, (n) => {
      n === 0 && D.value && (D.value = !1);
      const l = Math.max(1, Math.ceil(Ce.value.length / re.value));
      ae.value > l && (ae.value = l), I.value.length > 0 && d("labels-changed", /* @__PURE__ */ new Map());
    });
    const E = p(() => u.loading || he.value), Z = N(!1);
    fe(I, (n) => {
      Z.value || (le.value = n.map((l) => W(l)));
    }, { deep: !0 });
    async function de(n) {
      if (!u.serverPagination) return null;
      const { apiUrl: l, orgSlug: s, isCustomDomain: R } = u.serverPagination, L = R ? `${l}ecommerce/stock` : `${l}ecommerce/${s}/stock`;
      try {
        const A = new URL(L);
        A.searchParams.set("limit", "1");
        const U = {};
        if (/^[a-f0-9]{24}$/i.test(n))
          U._id = n;
        else {
          const Pe = n.split("-");
          if (Pe.length >= 4) {
            const at = parseFloat(Pe.pop()), rt = parseFloat(Pe.pop()), ct = parseFloat(Pe.pop()), ut = Pe.join("-");
            U.material = ut, U.l = ct, U.w = rt, U.t = at;
          } else
            return null;
        }
        A.searchParams.set("filters", JSON.stringify(U));
        const Ne = await fetch(A.toString(), { credentials: "include" });
        if (!Ne.ok) return null;
        const lt = (await Ne.json()).items || [];
        if (lt.length === 0) return null;
        const Ye = lt[0];
        return W(Ye) !== n ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: n, got: W(Ye) }), null) : Ye;
      } catch {
        return null;
      }
    }
    async function ye() {
      if (le.value.length) {
        Z.value = !0;
        try {
          const n = [...le.value], l = [], s = [];
          for (const L of n) {
            let A = u.stockOptions.find((U) => W(U) === L);
            !A && u.serverPagination && (A = await de(L)), A && (l.push(L), s.push(A));
          }
          const R = n.length - l.length;
          R > 0 && (le.value = l, Ke({
            message: R === 1 ? "A previously selected material is no longer available" : `${R} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const L of s) {
            const A = W(L);
            if (!f(L)) {
              g(L);
              const U = P(L);
              Me([U], L), O.value.set(A, [U]), ke([U], A, L);
            }
          }
        } finally {
          Z.value = !1;
        }
      }
    }
    ht(async () => {
      if (!u.singleSelect) {
        if (u.initialProductId) {
          const n = C(u.initialProductId);
          if (!n) return;
          const l = W(n), s = P(n);
          Me([s], n), O.value.set(l, [s]), ke([s], l, n);
          return;
        }
        await ye(), d("selections-restored", I.value.length);
      }
    });
    const Te = p(() => {
      const n = u.config.availableFilters.filter((l) => {
        const s = w(l.field);
        return s.length > 0 && s.some((R) => R != null);
      });
      return n.length === 0 && T.value.length > 0 ? u.config.availableFilters : n;
    }), _e = p(() => I.value.length === 0 ? null : I.value[0].db_sawId || null);
    function ee(n) {
      if (!_e.value) return !1;
      const l = n.db_sawId;
      return l ? l !== _e.value : !1;
    }
    function qe(n) {
      return ee(n) ? So : "";
    }
    function Me(n, l) {
      const s = l.name || l.material;
      if (s)
        for (const R of n)
          R.material = s;
    }
    async function we(n) {
      if (ee(n)) return;
      if (u.singleSelect) {
        d("single-pick", n);
        return;
      }
      const l = f(n);
      g(n);
      const s = W(n);
      if (l) {
        const R = O.value.get(s);
        R ? (R.forEach(me), O.value.delete(s)) : me(P(n));
      } else {
        const R = P(n);
        Me([R], n), O.value.set(s, [R]), ke([R], s, n);
      }
    }
    function me(n) {
      d("stock-removed", n);
    }
    async function He(n) {
      n.items.every((s) => f(s)) ? await Ue(n) : await De(n);
    }
    async function De(n) {
      for (const l of n.items)
        ee(l) || f(l) || await we(l);
    }
    async function Ue(n) {
      for (const l of n.items)
        f(l) && await we(l);
    }
    async function We(n, l) {
      await we(n);
    }
    function Je() {
      for (const n of I.value) {
        const l = W(n), s = O.value.get(l);
        s ? s.forEach(me) : me(P(n));
      }
      O.value.clear(), h(), le.value = [], D.value = !1;
    }
    function c(n) {
      d("order-sample", n);
    }
    function b(n) {
      d("add-full-stock", n);
    }
    return F({
      applyFilter: ge,
      removeFilter: ne,
      clearFilters: ie,
      clearSelection: h,
      selectedStock: I,
      filteredStock: oe,
      getUniqueValues: w,
      getFieldRange: q
    }), (n, l) => (o(), i("section", co, [
      xe.value ? (o(), te(pt("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: xe.value
      }, null, 8, ["innerHTML"])) : v("", !0),
      t.debug ? (o(), i("div", uo, [
        l[15] || (l[15] = r("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        r("div", fo, [
          l[6] || (l[6] = r("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          r("pre", vo, a(JSON.stringify(m(le), null, 2)), 1)
        ]),
        r("div", go, [
          r("strong", mo, "selectedStock (" + a(m(I).length) + " items):", 1),
          (o(!0), i(B, null, V(m(I), (s) => (o(), i("div", {
            key: m(W)(s),
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            r("div", null, [
              l[7] || (l[7] = r("span", { style: { color: "#ff0" } }, "getStockId:", -1)),
              J(" " + a(m(W)(s)), 1)
            ]),
            r("div", null, [
              l[8] || (l[8] = r("span", { style: { color: "#ff0" } }, "db_id:", -1)),
              J(" " + a(s.db_id || "(none)"), 1)
            ]),
            r("div", null, [
              l[9] || (l[9] = r("span", { style: { color: "#ff0" } }, "code:", -1)),
              J(" " + a(s.code || "(none)"), 1)
            ]),
            r("div", null, [
              l[10] || (l[10] = r("span", { style: { color: "#ff0" } }, "material:", -1)),
              J(" " + a(s.material), 1)
            ]),
            r("div", null, [
              l[11] || (l[11] = r("span", { style: { color: "#ff0" } }, "name:", -1)),
              J(" " + a(s.name), 1)
            ]),
            r("div", null, [
              l[12] || (l[12] = r("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
              J(" " + a(s.l) + " × " + a(s.w) + " × " + a(s.t), 1)
            ]),
            r("div", null, [
              l[13] || (l[13] = r("span", { style: { color: "#ff0" } }, "variant:", -1)),
              J(" " + a(s.variant || "(none)"), 1)
            ])
          ]))), 128))
        ]),
        r("div", ho, [
          r("strong", po, "materialStockMap (" + a(O.value.size) + " entries):", 1),
          (o(!0), i(B, null, V(O.value, ([s, R]) => (o(), i("div", {
            key: s,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            r("div", null, [
              l[14] || (l[14] = r("span", { style: { color: "#ff0" } }, "key:", -1)),
              J(" " + a(s) + " → ", 1),
              r("span", ko, a(R.length) + " InputStock(s)", 1)
            ]),
            (o(!0), i(B, null, V(R, (L, A) => (o(), i("div", {
              key: A,
              style: { "margin-left": "12px" }
            }, a(L.material) + " " + a(L.l) + "×" + a(L.w) + "×" + a(L.t) + " db_id=" + a(L.db_id || "(none)") + " code=" + a(L.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : v("", !0),
      t.config.enableSearch || t.config.sortOptions.length > 0 ? (o(), i("div", bo, [
        t.config.enableSearch ? (o(), te(Mt, {
          key: 0,
          modelValue: m($),
          "onUpdate:modelValue": l[0] || (l[0] = (s) => Ze($) ? $.value = s : null)
        }, null, 8, ["modelValue"])) : v("", !0),
        t.config.sortOptions.length > 0 ? (o(), te(Pt, {
          key: 1,
          "sort-by": m(y),
          "onUpdate:sortBy": l[1] || (l[1] = (s) => Ze(y) ? y.value = s : null),
          "sort-order": m(x),
          "onUpdate:sortOrder": l[2] || (l[2] = (s) => Ze(x) ? x.value = s : null),
          "available-fields": t.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : v("", !0)
      ])) : v("", !0),
      Te.value.length > 0 || t.preAppliedChips.length > 0 ? (o(), te(zs, {
        key: 3,
        "filter-configs": Te.value,
        "active-filters": m(T),
        "get-unique-values": m(w),
        "get-field-range": m(q),
        "get-filter-option-counts": m(pe),
        "pre-applied-chips": t.preAppliedChips,
        onApplyFilter: m(ge),
        onRemoveFilter: m(ne),
        onClearFilters: m(ie)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : v("", !0),
      Le(ro, {
        "total-results": ce.value,
        "display-mode": m(G),
        loading: E.value,
        "has-active-filters": m(T).length > 0,
        "current-page": ue.value,
        "total-pages": Fe.value,
        "visible-columns": Ae.value,
        "onUpdate:displayMode": l[3] || (l[3] = (s) => G.value = s),
        onClearFilters: m(ie),
        onGoToPage: Qe
      }, {
        default: Oe(() => [
          (o(!0), i(B, null, V($e.value, (s) => (o(), te(as, {
            key: s.groupKey,
            stock: s.representative,
            "is-selected": m(f)(s.representative),
            "is-disabled": ee(s.representative),
            "disabled-reason": qe(s.representative),
            "display-label": Ie.value.get(m(W)(s.representative)),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            "display-mode": m(G),
            "unit-system": t.unitSystem,
            "visible-columns": Ae.value,
            "api-url": t.serverPagination?.apiUrl,
            "allow-full-stock-purchase": t.config.allowFullStockPurchase,
            group: s.items.length > 1 ? s : void 0,
            "selected-thicknesses": s.items.length > 1 ? je(s) : void 0,
            "filtered-out-thicknesses": s.items.length > 1 ? m(Ee)(s) : void 0,
            onToggleSelection: we,
            onToggleGroup: He,
            onSelectGroup: De,
            onDeselectGroup: Ue,
            onToggleThickness: We,
            onOrderSample: c,
            onAddFullStock: b
          }, null, 8, ["stock", "is-selected", "is-disabled", "disabled-reason", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "allow-full-stock-purchase", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Le(kt, { name: "selection-bar" }, {
        default: Oe(() => [
          u.showSelectionBar && m(I).length > 0 ? (o(), i("div", yo, [
            r("div", _o, [
              r("span", wo, a(m(I).length) + " " + a(m(I).length === 1 ? "material" : "materials") + " selected ", 1),
              r("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: l[4] || (l[4] = (s) => D.value = !D.value)
              }, a(D.value ? "Show all" : "Show selected"), 1),
              r("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: Je
              }, " Clear ")
            ]),
            r("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: X({ backgroundColor: t.colors.button, color: t.colors.buttonText }),
              onClick: l[5] || (l[5] = (s) => d("selection-confirmed", m(I)))
            }, a(m(_)("stockFilter.create_cut_list")), 5)
          ])) : v("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  Ro as default
};
