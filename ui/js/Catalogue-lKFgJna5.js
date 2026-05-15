import { m as b, d as be, r as U, w as me, f as We, x as at, c as l, o as s, F as V, b as i, h as ee, p as rt, a as v, S as Ie, l as q, n as Z, t as n, j as _e, k as J, i as Ke, u as p, V as ct, W as ut, z as He, N as Oe, v as pe, D as ae, e as dt, X as ft, G as vt, Y as qe, Z as gt } from "./vendor-vue-BgOQH8dC.js";
import { L as Qe, n as mt, k as ht, M as pt, i as bt, s as kt, u as yt } from "./EcommerceCalculator-CIJmnT15.js";
import { t as _ } from "./i18n-BkCqM2rg.js";
import { u as wt, g as X, S as Ct } from "./Vanilla-D0wZFG4V.js";
import { _ as De } from "./Launch-BRH4wqOZ.js";
import { C as _t, a as $t } from "./CatalogueSort-BPOrRrBf.js";
const St = [
  "material",
  "name",
  "grain",
  "finish",
  "variant",
  "category",
  "color",
  "imageUrl",
  "db_sawId"
], xt = 5e3, Re = /* @__PURE__ */ new Map(), Ft = /[-_]\d+(?:_\d+)?x\d+(?:_\d+)?$/;
function Tt(t) {
  if (!t) return t;
  const P = Re.get(t);
  if (P !== void 0) return P;
  const e = t.replace(Ft, "");
  return Re.size >= xt && Re.clear(), Re.set(t, e), e;
}
function Mt(t) {
  const P = [];
  for (const r of St) {
    const h = t[r];
    P.push(h != null ? String(h) : "");
  }
  P.push(Tt(t.code ?? ""));
  const e = t.extras;
  if (e) {
    const r = ["banding", "finish", "planing", "machining"];
    for (const h of r)
      P.push(e[h] ? "1" : "0");
  } else
    P.push("0000");
  return P.join("");
}
function Pt(t) {
  return t.length > 0 && t[0].thicknessGroup ? zt(t) : Lt(t);
}
function zt(t) {
  const P = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), r = [];
  for (const u of t) {
    const $ = u.thicknessGroup;
    if (!$) {
      const C = `__solo_${u.db_id || Math.random()}`;
      P.set(C, [u]), r.push(C);
      continue;
    }
    const M = $.groupKey;
    P.has(M) || (P.set(M, []), e.set(M, $), r.push(M)), P.get(M).push(u);
  }
  const h = [];
  for (const u of r) {
    const $ = P.get(u);
    $.sort((C, y) => (C.t ?? 0) - (y.t ?? 0));
    const M = e.get(u);
    h.push({
      groupKey: u,
      items: $,
      thicknesses: M?.thicknesses || $.map((C) => C.t).filter((C) => C != null),
      dimensions: M?.dimensions || Ye($),
      representative: $[0],
      priceRange: M?.priceRange || null
    });
  }
  return h;
}
function Ye(t) {
  const P = /* @__PURE__ */ new Set(), e = [];
  for (const r of t) {
    if (typeof r.l != "number" || typeof r.w != "number") continue;
    const h = `${r.l}x${r.w}`;
    P.has(h) || (P.add(h), e.push({ l: r.l, w: r.w }));
  }
  return e;
}
function Lt(t) {
  const P = /* @__PURE__ */ new Map(), e = [];
  for (const h of t) {
    if (h.t == null) {
      const $ = `__solo_${h.db_id || Math.random()}`;
      P.set($, [h]), e.push($);
      continue;
    }
    const u = Mt(h);
    P.has(u) || (P.set(u, []), e.push(u)), P.get(u).push(h);
  }
  const r = [];
  for (const h of e) {
    const u = P.get(h);
    u.sort((y, w) => (y.t ?? 0) - (w.t ?? 0));
    const $ = [...new Set(u.map((y) => y.t).filter((y) => y != null))].sort((y, w) => y - w), M = u.map((y) => y.cost).filter((y) => y != null && y > 0);
    let C = null;
    if (M.length > 1) {
      const y = Math.min(...M), w = Math.max(...M);
      y !== w && (C = { min: y, max: w });
    }
    r.push({
      groupKey: h,
      items: u,
      thicknesses: $,
      dimensions: Ye(u),
      representative: u[0],
      priceRange: C
    });
  }
  return r;
}
function Je(t, P) {
  const e = P.find((h) => h.field === "t");
  if (!e) return !1;
  const r = e.value;
  return Array.isArray(r) ? !r.some((h) => Number(h) === t) : r != null ? Number(r) !== t : !1;
}
function Ot(t, P) {
  const e = b(() => Pt(t.value));
  function r(C, y) {
    return C.items.find((w) => w.t === y);
  }
  function h(C, y, w, T) {
    return C.items.find((z) => z.l === y && z.w === w && z.t === T);
  }
  function u(C, y, w) {
    const T = /* @__PURE__ */ new Set();
    for (const z of C.items)
      z.l === y && z.w === w && typeof z.t == "number" && T.add(z.t);
    return [...T].sort((z, K) => z - K);
  }
  function $(C, y) {
    const w = /* @__PURE__ */ new Set(), T = [];
    for (const z of C.items) {
      if (z.t !== y || typeof z.l != "number" || typeof z.w != "number") continue;
      const K = `${z.l}x${z.w}`;
      w.has(K) || (w.add(K), T.push({ l: z.l, w: z.w }));
    }
    return T;
  }
  function M(C) {
    const y = /* @__PURE__ */ new Set();
    for (const w of C.thicknesses)
      Je(w, P.value) && y.add(w);
    return y;
  }
  return {
    groupedStock: e,
    getItemForThickness: r,
    getItemForCombo: h,
    getThicknessesForDimension: u,
    getDimensionsForThickness: $,
    getFilteredOutThicknesses: M,
    isThicknessFilteredOut: Je
  };
}
const Rt = {
  key: 0,
  class: "base-dialog__header"
}, It = {
  key: 1,
  class: "base-dialog__footer"
}, Dt = /* @__PURE__ */ be({
  __name: "BaseDialog",
  props: {
    open: { type: Boolean, default: void 0 },
    title: {},
    size: { default: "md" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    compact: { type: Boolean, default: !0 },
    bodyForm: { type: Boolean, default: !1 }
  },
  emits: ["update:open", "opened", "closed"],
  setup(t, { expose: P, emit: e }) {
    const r = t, h = e, u = U(null), $ = U(null), M = U(null), C = U({}), y = !1;
    function w() {
      const L = M.value;
      if (!L) return;
      const A = getComputedStyle(L);
      C.value = {
        "font-family": A.fontFamily,
        "font-size": A.fontSize,
        "line-height": A.lineHeight,
        color: A.color
      };
    }
    const T = window.__baseDialogStack ?? (window.__baseDialogStack = U([])), z = /* @__PURE__ */ Symbol("base-dialog"), K = b(() => T.value.indexOf(z)), fe = b(() => ({
      "base-dialog__body--form": r.bodyForm,
      "smartcut-content": r.compact
    })), le = b(() => ({ ...C.value }));
    function j() {
      const L = u.value;
      if (!L || L.open) return;
      w(), L.showModal(), T.value.includes(z) || T.value.push(z);
      const A = document.getElementById("smartcut-notices");
      A?.matches(":popover-open") && (A.hidePopover(), A.showPopover()), h("opened");
    }
    function O() {
      const L = u.value;
      !L || !L.open || L.close();
    }
    function G() {
      const L = T.value.indexOf(z);
      L >= 0 && T.value.splice(L, 1), h("update:open", !1), h("closed");
    }
    function re(L) {
      r.closeOnBackdrop && L.target === u.value && O();
    }
    return me(() => r.open, (L, A) => {
      L !== void 0 && (L && !A ? j() : !L && A && O());
    }), We(() => {
      r.open === !0 && j();
    }), at(() => {
      u.value?.open && u.value.close();
      const L = T.value.indexOf(z);
      L >= 0 && T.value.splice(L, 1);
    }), P({
      show: j,
      close: O,
      dialogRef: u,
      bodyRef: $
    }), (L, A) => (s(), l(V, null, [
      i("span", {
        ref_key: "anchorRef",
        ref: M,
        class: "base-dialog__anchor",
        "aria-hidden": "true"
      }, null, 512),
      (s(), ee(rt, {
        to: "body",
        disabled: y
      }, [
        i("dialog", {
          ref_key: "dialogRef",
          ref: u,
          class: q(["base-dialog", [`base-dialog--${t.size}`, { "base-dialog--compact": t.compact, "base-dialog--stacked": K.value > 0 }]]),
          style: Z(le.value),
          onClick: re,
          onClose: G
        }, [
          L.$slots.header || t.title ? (s(), l("header", Rt, [
            Ie(L.$slots, "header", {}, () => [
              i("h3", null, n(t.title), 1),
              i("button", {
                type: "button",
                class: "base-dialog__close",
                "aria-label": "Close",
                onClick: O
              }, "×")
            ])
          ])) : v("", !0),
          i("div", {
            ref_key: "bodyRef",
            ref: $,
            class: q(["base-dialog__body", fe.value])
          }, [
            Ie(L.$slots, "default")
          ], 2),
          L.$slots.footer ? (s(), l("footer", It, [
            Ie(L.$slots, "footer", { close: O })
          ])) : v("", !0)
        ], 38)
      ]))
    ], 64));
  }
}), Bt = { key: 0 }, Nt = {
  key: 0,
  class: "bim-description"
}, At = {
  key: 1,
  class: "bim-empty"
}, Ut = {
  key: 2,
  class: "bim-links"
}, Vt = ["href"], qt = { key: 1 }, Kt = /* @__PURE__ */ be({
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
    function P(y) {
      const w = (y.url || "").toLowerCase(), T = (y.label || "").toLowerCase();
      return /\.pdf(\?|$|#)/.test(w) || T.includes("pdf") ? "file-pdf" : /\/3d|\bviewer\b|visualization/.test(w) || T.includes("3d") || T.includes("viewer") ? "cube" : T.includes("spec") || T.includes("datasheet") ? "file-lines" : "arrow-up-right-from-square";
    }
    const e = t, r = U(!1), h = U(!1), u = U(null), $ = () => typeof e.description == "string" && e.description.trim() !== "" || Array.isArray(e.urls) && e.urls.length > 0;
    let M = "";
    async function C() {
      if (!e.open) return;
      if ($()) {
        u.value = {
          name: e.brandName,
          fullDescription: e.description,
          urls: e.urls || []
        }, r.value = !1, h.value = !1;
        return;
      }
      if (!e.brandName || !e.catalogueKey || !e.apiUrl) {
        h.value = !0;
        return;
      }
      const y = `${e.catalogueKey}::${e.brandName}`;
      if (!(y === M && u.value)) {
        M = y, r.value = !0, h.value = !1, u.value = null;
        try {
          const T = `${e.apiUrl.endsWith("/") ? e.apiUrl : e.apiUrl + "/"}catalogues/${encodeURIComponent(e.catalogueKey)}/categories/${encodeURIComponent(e.brandName)}`, z = await fetch(T, { credentials: "include" });
          if (!z.ok) {
            h.value = !0;
            return;
          }
          u.value = await z.json();
        } catch {
          h.value = !0;
        } finally {
          r.value = !1;
        }
      }
    }
    return me(
      () => [e.open, e.brandName, e.catalogueKey, e.description, e.urls],
      C,
      { immediate: !0, deep: !0 }
    ), (y, w) => (s(), ee(Dt, {
      size: "sm",
      compact: !1,
      open: t.open,
      onClosed: w[2] || (w[2] = (T) => y.$emit("close"))
    }, {
      header: _e(() => [
        i("div", null, [
          i("h3", null, n(t.brandName), 1),
          r.value ? (s(), ee(Qe, {
            key: 0,
            size: "small",
            label: "Loading…",
            class: "bim-sub"
          })) : v("", !0)
        ]),
        i("button", {
          class: "bim-close",
          "aria-label": "Close",
          onClick: w[0] || (w[0] = (T) => y.$emit("close"))
        }, "×")
      ]),
      footer: _e(() => [
        i("button", {
          class: "c-btn",
          onClick: w[1] || (w[1] = (T) => y.$emit("close"))
        }, "Done")
      ]),
      default: _e(() => [
        !r.value && !h.value && u.value ? (s(), l("div", Bt, [
          u.value.fullDescription ? (s(), l("p", Nt, n(u.value.fullDescription), 1)) : (s(), l("p", At, "No description available for this brand yet.")),
          u.value.urls && u.value.urls.length ? (s(), l("ul", Ut, [
            (s(!0), l(V, null, J(u.value.urls, (T) => (s(), l("li", {
              key: T.url
            }, [
              i("a", {
                href: T.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                Ke(p(ct), {
                  icon: ["fass", P(T)],
                  class: "bim-link-icon"
                }, null, 8, ["icon"]),
                i("span", null, n(T.label), 1)
              ], 8, Vt)
            ]))), 128))
          ])) : v("", !0)
        ])) : !r.value && h.value ? (s(), l("div", qt, [...w[3] || (w[3] = [
          i("p", { class: "bim-empty" }, "We don't have additional information about this brand yet.", -1)
        ])])) : v("", !0)
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), Gt = /* @__PURE__ */ De(Kt, [["__scopeId", "data-v-8c75194a"]]), Et = ["onKeydown"], jt = { class: "stock-filter-row__thumb" }, Ht = ["src", "alt"], Jt = { class: "stock-filter-row__material" }, Wt = { class: "stock-filter-row__name" }, Qt = {
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
}, ls = { key: 1 }, os = {
  key: 6,
  class: "stock-filter-row__thickness"
}, ns = {
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
}, vs = { class: "stock-filter-row__action" }, gs = ["disabled"], ms = ["onKeydown"], hs = { class: "stock-filter-card__image-wrapper" }, ps = ["src", "alt"], bs = {
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
}, _s = {
  key: 2,
  class: "c-badge stock-filter-card__badge--grain"
}, $s = { class: "stock-filter-card__content" }, Ss = { class: "stock-filter-card__title" }, xs = {
  key: 0,
  class: "stock-filter-card__code"
}, Fs = {
  key: 1,
  class: "stock-filter-card__spec-badges"
}, Ts = {
  key: 2,
  class: "stock-filter-card__specs-inline"
}, Ms = {
  key: 3,
  class: "stock-filter-card__dimensions"
}, Ps = {
  key: 4,
  class: "c-loz-group"
}, zs = ["disabled", "onClick"], Ls = {
  key: 5,
  class: "stock-filter-card__extras"
}, Os = {
  key: 0,
  class: "c-badge extras-badge--sample"
}, Rs = {
  key: 1,
  class: "c-badge extras-badge--banding"
}, Is = {
  key: 2,
  class: "c-badge extras-badge--finish"
}, Ds = {
  key: 3,
  class: "c-badge extras-badge--planing"
}, Bs = {
  key: 4,
  class: "c-badge extras-badge--machining"
}, Ns = { class: "stock-filter-card__footer" }, As = {
  key: 0,
  class: "stock-filter-card__price"
}, Us = { class: "price__value" }, Vs = {
  key: 1,
  class: "stock-filter-card__price"
}, qs = {
  key: 0,
  class: "price__original"
}, Ks = {
  key: 1,
  class: "price__badge"
}, Gs = { class: "stock-filter-card__actions" }, Es = ["disabled"], js = /* @__PURE__ */ be({
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
    const e = t, r = P, h = U(!1), u = U(!1), $ = U(!1), M = b(() => e.stock._catalogueKey), C = b(() => mt(e.stock)), y = b(() => C.value.brand || C.value.variant || C.value.material || ""), w = b(() => e.stock._hasDetailContent === !0), T = b(() => (e.stock.description || "").trim() || void 0), z = b(() => {
      const g = e.stock.urls;
      return Array.isArray(g) ? g.filter((F) => F && typeof F.url == "string" && F.url.trim()).map((F) => ({ label: String(F.label || F.url), url: String(F.url) })) : [];
    }), K = b(() => !!T.value || z.value.length > 0), fe = b(() => e.stock._source === "library"), le = b(() => K.value || fe.value && w.value && !!y.value && !!M.value && !!e.apiUrl), j = b(() => e.stock.available !== !1), O = b(() => e.isDisabled), G = b(() => e.stock.discount && e.stock.discount > 0), re = b(() => {
      const g = e.stock.sample;
      return g?.enabled ? g.price && g.price > 0 ? `${_("stockFilter.orderSample")} (${e.formatPrice(g.price, e.locale)})` : _("stockFilter.freeSample") : "";
    }), L = b(() => e.stock.cost ? G.value ? e.stock.cost * (1 - e.stock.discount / 100) : e.stock.cost : 0), A = b(() => e.stock.cost ? e.formatPrice(e.stock.cost, e.locale) : "N/A"), ve = b(() => e.stock.cost ? e.formatPrice(L.value, e.locale) : "N/A"), W = b(() => {
      const g = e.stock.color;
      return g && typeof g == "object" && "hex" in g && g.hex ? String(g.hex) : e.stock.colorHex || "";
    }), m = b(() => {
      const g = e.stock.color;
      return typeof g == "string" ? g : g && typeof g == "object" && "name" in g ? String(g.name || "") : "";
    }), f = b(() => (!e.stock.imageUrl || h.value) && !!W.value), d = b(() => f.value ? { background: W.value } : void 0), S = b(() => W.value ? ht(W.value) : "#fff"), I = b(() => {
      if (!e.stock.grain) return "";
      switch (e.stock.grain) {
        case "l":
          return _("fields.grain.length");
        case "w":
          return _("fields.grain.width");
        default:
          return "";
      }
    }), k = b(() => {
      const g = [], F = /* @__PURE__ */ new Set(), Q = (ie) => {
        if (ie == null) return;
        const se = String(ie).trim();
        if (!se) return;
        const we = se.toLowerCase();
        F.has(we) || (F.add(we), g.push(se));
      }, x = ue.value.toLowerCase(), te = (ie) => {
        if (ie == null) return;
        const se = String(ie).trim();
        !se || x.includes(se.toLowerCase()) || Q(se);
      };
      return te(C.value.variant), e.stock.weight && te(`${e.stock.weight}kg`), g;
    }), B = b(() => {
      const g = [], F = (C.value.material || "").trim(), Q = (e.stock.category || "").trim();
      return F && g.push({ kind: "material", label: F }), Q && Q.toLowerCase() !== F.toLowerCase() && g.push({ kind: "category", label: Q }), g;
    });
    function he(g, F) {
      return e.unitSystem === "imperial" ? `${(g / 25.4).toFixed(1)}" × ${(F / 25.4).toFixed(1)}"` : `${g} × ${F}`;
    }
    const $e = b(() => (e.group?.dimensions?.length ? e.group.dimensions : e.stock.l && e.stock.w ? [{ l: e.stock.l, w: e.stock.w }] : []).map((F) => he(F.l, F.w))), Be = b(() => e.stock.t == null ? "" : e.unitSystem === "imperial" ? `${(e.stock.t / 25.4).toFixed(2)}"` : `${e.stock.t} mm`), ce = b(() => {
      const g = e.stock.extras;
      return g ? !!(g.banding || g.finish || g.planing || g.machining) : !1;
    }), R = b(() => e.group && e.group.items.length > 1), oe = b(() => {
      if (!R.value || !e.selectedThicknesses) return !1;
      const g = e.selectedThicknesses.size;
      return g > 0 && g < e.group.thicknesses.length;
    }), Y = b(() => !R.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size === e.group.thicknesses.length), ne = b(() => !R.value || !e.selectedThicknesses ? e.isSelected : e.selectedThicknesses.size > 0);
    function ge(g) {
      return e.unitSystem === "imperial" ? `${(g / 25.4).toFixed(2)}"` : `${g}mm`;
    }
    const Se = b(() => e.group?.priceRange ? `${e.formatPrice(e.group.priceRange.min, e.locale)} – ${e.formatPrice(e.group.priceRange.max, e.locale)}` : null);
    function ke(g, F) {
      if (F.stopPropagation(), e.filteredOutThicknesses?.has(g)) return;
      const Q = e.group?.items.find((x) => x.t === g);
      Q && r("toggle-thickness", Q, g);
    }
    function xe() {
      !j.value || O.value || (R.value && e.group ? r("toggle-group", e.group) : r("toggle-selection", e.stock));
    }
    function Fe() {
      !j.value || O.value || (R.value && e.group ? ne.value ? r("deselect-group", e.group) : r("select-group", e.group) : r("toggle-selection", e.stock));
    }
    const Te = b(() => {
      if (!e.group || e.group.thicknesses.length < 2) return "";
      const g = e.group.thicknesses[0], F = e.group.thicknesses[e.group.thicknesses.length - 1];
      return e.unitSystem === "imperial" ? `${(g / 25.4).toFixed(2)}" – ${(F / 25.4).toFixed(2)}"` : `${g} – ${F}mm`;
    }), Ne = b(() => {
      const g = ["60px", "2fr"];
      return e.visibleColumns.finish && g.push("1fr"), e.visibleColumns.brand && g.push("1fr"), e.visibleColumns.variant && g.push("1fr"), e.visibleColumns.category && g.push("1fr"), e.visibleColumns.grain && g.push("80px"), e.visibleColumns.color && g.push("100px"), e.visibleColumns.thickness && g.push(R.value ? "minmax(120px, auto)" : "80px"), e.visibleColumns.quantity && g.push("80px"), e.visibleColumns.weight && g.push("80px"), e.visibleColumns.price && g.push("100px"), g.push("50px"), { "grid-template-columns": g.join(" ") };
    }), ue = b(() => e.displayLabel ? e.displayLabel : C.value.productLabel && C.value.productLabel !== "(unnamed)" ? C.value.productLabel : `${e.stock.material} ${e.stock.l}×${e.stock.w}`), ye = b(() => C.value.code ? C.value.code.toLowerCase() !== ue.value.toLowerCase() : !1);
    function de() {
      xe();
    }
    function Ae() {
      r("order-sample", e.stock);
    }
    return (g, F) => {
      const Q = ut("tooltip");
      return s(), l(V, null, [
        t.displayMode === "list" ? He((s(), l("article", {
          key: 0,
          class: q(["stock-filter-row", {
            "stock-filter-row--selected": R.value ? Y.value : t.isSelected,
            "stock-filter-row--partial": oe.value,
            "stock-filter-row--unavailable": !j.value,
            "stock-filter-row--disabled": O.value
          }]),
          style: Z(Ne.value),
          role: "button",
          tabindex: "0",
          onClick: de,
          onKeydown: [
            Oe(de, ["enter"]),
            Oe(pe(de, ["prevent"]), ["space"])
          ]
        }, [
          i("div", jt, [
            i("div", {
              class: "stock-filter-row__thumb-placeholder",
              style: Z(d.value)
            }, null, 4),
            t.stock.imageUrl && !h.value ? (s(), l("img", {
              key: 0,
              class: q(["stock-filter-row__thumb-img", { "stock-filter-row__thumb-img--loaded": u.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: F[0] || (F[0] = (x) => u.value = !0),
              onError: F[1] || (F[1] = (x) => h.value = !0)
            }, null, 42, Ht)) : v("", !0)
          ]),
          i("div", Jt, [
            i("h3", Wt, n(ue.value), 1),
            ye.value ? (s(), l("span", Qt, n(C.value.code), 1)) : v("", !0)
          ]),
          t.visibleColumns.finish ? (s(), l("div", Yt, n(t.stock.finish || ""), 1)) : v("", !0),
          t.visibleColumns.brand ? (s(), l("div", Xt, n(t.stock.brand || ""), 1)) : v("", !0),
          t.visibleColumns.variant ? (s(), l("div", Zt, n(t.stock.variant || ""), 1)) : v("", !0),
          t.visibleColumns.category ? (s(), l("div", es, n(t.stock.category || ""), 1)) : v("", !0),
          t.visibleColumns.grain ? (s(), l("div", ts, n(I.value), 1)) : v("", !0),
          t.visibleColumns.color ? (s(), l("div", ss, [
            W.value ? (s(), l("span", {
              key: 0,
              class: "color-swatch color-swatch--sm",
              style: Z({ backgroundColor: W.value })
            }, null, 4)) : v("", !0),
            m.value ? (s(), l("span", ls, n(m.value), 1)) : v("", !0)
          ])) : v("", !0),
          t.visibleColumns.thickness ? (s(), l("div", os, [
            R.value ? (s(), l("div", ns, [
              (s(!0), l(V, null, J(t.group.thicknesses, (x) => (s(), l("button", {
                key: x,
                type: "button",
                class: q(["c-loz c-loz--sm c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(x) && !t.filteredOutThicknesses?.has(x),
                  active: t.selectedThicknesses?.has(x)
                }]),
                style: Z({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(x) && !t.filteredOutThicknesses?.has(x) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(x) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(x),
                onClick: (te) => ke(x, te)
              }, n(ge(x)), 15, is))), 128))
            ])) : t.stock.t != null ? (s(), l("span", as, [
              ae(n(t.stock.t), 1),
              F[6] || (F[6] = i("small", null, "mm", -1))
            ])) : v("", !0)
          ])) : v("", !0),
          t.visibleColumns.quantity ? (s(), l("div", rs, n(t.stock.unlimitedQuantity ? p(_)("stockFilter.inStock") : t.stock.q), 1)) : v("", !0),
          t.visibleColumns.weight ? (s(), l("div", cs, n(t.stock.weight ? `${t.stock.weight}kg` : ""), 1)) : v("", !0),
          t.visibleColumns.price ? (s(), l("div", us, [
            G.value ? (s(), l("span", ds, n(A.value), 1)) : v("", !0),
            i("span", {
              class: q(["price__value", { price__discounted: G.value }])
            }, n(ve.value), 3),
            G.value ? (s(), l("span", fs, "-" + n(t.stock.discount) + "%", 1)) : v("", !0)
          ])) : v("", !0),
          i("div", vs, [
            i("button", {
              type: "button",
              class: q(["c-btn", { "c-btn--delete": R.value ? ne.value : t.isSelected }]),
              disabled: !j.value || O.value,
              onClick: pe(Fe, ["stop"])
            }, n((R.value ? ne.value : t.isSelected) ? "−" : "+"), 11, gs)
          ])
        ], 46, Et)), [
          [Q, O.value && t.disabledReason ? t.disabledReason : ""]
        ]) : He((s(), l("article", {
          key: 1,
          class: q(["stock-filter-card", {
            "stock-filter-card--selected": R.value ? Y.value : t.isSelected,
            "stock-filter-card--partial": oe.value,
            "stock-filter-card--unavailable": !j.value,
            "stock-filter-card--disabled": O.value
          }]),
          role: "button",
          tabindex: "0",
          onClick: de,
          onKeydown: [
            Oe(de, ["enter"]),
            Oe(pe(de, ["prevent"]), ["space"])
          ]
        }, [
          i("div", hs, [
            i("div", {
              class: "stock-filter-card__image-placeholder",
              style: Z(d.value)
            }, null, 4),
            t.stock.imageUrl && !h.value ? (s(), l("img", {
              key: 0,
              class: q(["stock-filter-card__image", { "stock-filter-card__image--loaded": u.value }]),
              src: t.stock.imageUrl,
              alt: t.stock.name || t.stock.material,
              loading: "lazy",
              onLoad: F[2] || (F[2] = (x) => u.value = !0),
              onError: F[3] || (F[3] = (x) => h.value = !0)
            }, null, 42, ps)) : v("", !0),
            C.value.brand && !ue.value.toLowerCase().includes(C.value.brand.toLowerCase()) ? (s(), l("span", bs, n(C.value.brand), 1)) : v("", !0),
            R.value && Te.value ? (s(), l("span", ks, n(Te.value), 1)) : !R.value && t.stock.t != null ? (s(), l("span", ys, n(Be.value), 1)) : v("", !0),
            f.value && m.value ? (s(), l("span", {
              key: 4,
              class: "stock-filter-card__swatch-label",
              style: Z({ color: S.value })
            }, n(m.value), 5)) : v("", !0),
            i("div", ws, [
              m.value && !f.value ? (s(), l("span", {
                key: 0,
                class: "c-badge stock-filter-card__badge--color",
                style: Z(W.value ? { background: W.value, color: S.value } : void 0)
              }, n(m.value), 5)) : v("", !0),
              t.stock.finish ? (s(), l("span", Cs, n(t.stock.finish), 1)) : v("", !0),
              I.value ? (s(), l("span", _s, "Grain: " + n(I.value), 1)) : v("", !0)
            ])
          ]),
          i("div", $s, [
            i("h3", Ss, n(ue.value), 1),
            ye.value ? (s(), l("div", xs, n(t.stock.code), 1)) : v("", !0),
            B.value.length ? (s(), l("div", Fs, [
              (s(!0), l(V, null, J(B.value, (x) => (s(), l("span", {
                key: x.kind,
                class: q(["c-badge", `spec-badge--${x.kind}`])
              }, n(x.label), 3))), 128))
            ])) : v("", !0),
            k.value.length ? (s(), l("div", Ts, [
              (s(!0), l(V, null, J(k.value, (x, te) => (s(), l("span", {
                key: te,
                class: "spec-item"
              }, n(x), 1))), 128))
            ])) : v("", !0),
            $e.value.length ? (s(), l("div", Ms, [
              (s(!0), l(V, null, J($e.value, (x) => (s(), l("span", {
                key: x,
                class: "c-badge stock-filter-card__dim"
              }, n(x), 1))), 128))
            ])) : v("", !0),
            R.value ? (s(), l("div", Ps, [
              (s(!0), l(V, null, J(t.group.thicknesses, (x) => (s(), l("button", {
                key: x,
                type: "button",
                class: q(["c-loz c-loz--md c-loz--pill c-loz--clickable c-loz--custom", {
                  "c-loz--solid": !t.selectedThicknesses?.has(x) && !t.filteredOutThicknesses?.has(x),
                  active: t.selectedThicknesses?.has(x)
                }]),
                style: Z({
                  "--loz-custom-color": t.buttonColor,
                  "--loz-custom-text": t.buttonTextColor,
                  ...!t.selectedThicknesses?.has(x) && !t.filteredOutThicknesses?.has(x) ? { "--loz-bg": t.buttonColor, "--loz-color": t.buttonTextColor, "--loz-border-color": t.buttonColor } : {},
                  ...t.selectedThicknesses?.has(x) ? { "--loz-bg": "var(--color-selected, #1bc319)", "--loz-color": "white", "--loz-border-color": "var(--color-selected, #1bc319)" } : {}
                }),
                disabled: t.filteredOutThicknesses?.has(x),
                onClick: (te) => ke(x, te)
              }, n(ge(x)), 15, zs))), 128))
            ])) : v("", !0),
            ce.value || t.stock.sample?.enabled ? (s(), l("div", Ls, [
              t.stock.sample?.enabled ? (s(), l("span", Os, n(p(_)("stockFilter.samplesAvailable")), 1)) : v("", !0),
              t.stock.extras?.banding ? (s(), l("span", Rs, n(p(_)("stockFilter.banding")), 1)) : v("", !0),
              t.stock.extras?.finish ? (s(), l("span", Is, n(p(_)("stockFilter.finishOption")), 1)) : v("", !0),
              t.stock.extras?.planing ? (s(), l("span", Ds, n(p(_)("stockFilter.planing")), 1)) : v("", !0),
              t.stock.extras?.machining ? (s(), l("span", Bs, n(p(_)("stockFilter.machining")), 1)) : v("", !0)
            ])) : v("", !0),
            le.value ? (s(), l("button", {
              key: 6,
              type: "button",
              class: "stock-filter-card__detail-trigger",
              onClick: F[4] || (F[4] = pe((x) => $.value = !0, ["stop"]))
            }, n(p(_)("stockFilter.details")), 1)) : v("", !0)
          ]),
          i("div", Ns, [
            R.value && Se.value ? (s(), l("div", As, [
              i("span", Us, n(Se.value), 1)
            ])) : t.stock.cost ? (s(), l("div", Vs, [
              G.value ? (s(), l("span", qs, n(A.value), 1)) : v("", !0),
              i("span", {
                class: q(["price__value", { price__discounted: G.value }])
              }, n(ve.value), 3),
              G.value ? (s(), l("span", Ks, "-" + n(t.stock.discount) + "%", 1)) : v("", !0)
            ])) : v("", !0),
            i("div", Gs, [
              t.stock.sample?.enabled ? (s(), l("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--sm c-btn--white",
                onClick: pe(Ae, ["stop"])
              }, n(re.value), 1)) : v("", !0),
              i("button", {
                type: "button",
                class: q(["c-btn c-btn--sm", { "c-btn--delete": R.value ? ne.value : t.isSelected }]),
                disabled: !j.value || O.value,
                onClick: pe(Fe, ["stop"])
              }, n((R.value ? ne.value : t.isSelected) ? p(_)("stockFilter.remove") : "+ " + p(_)("stockFilter.select")), 11, Es)
            ])
          ])
        ], 42, ms)), [
          [Q, O.value && t.disabledReason ? t.disabledReason : ""]
        ]),
        le.value ? (s(), ee(Gt, {
          key: 2,
          open: $.value,
          "brand-name": y.value,
          description: T.value,
          urls: z.value,
          "catalogue-key": M.value,
          "api-url": t.apiUrl,
          onClose: F[5] || (F[5] = (x) => $.value = !1)
        }, null, 8, ["open", "brand-name", "description", "urls", "catalogue-key", "api-url"])) : v("", !0)
      ], 64);
    };
  }
}), Hs = /* @__PURE__ */ De(js, [["__scopeId", "data-v-59e435b2"]]), Js = { class: "stock-filter-panel" }, Ws = { class: "filter-panel-content" }, Qs = {
  key: 0,
  class: "filter-summary"
}, Ys = { class: "c-loz-group c-loz-group--tight filter-summary__chips" }, Xs = ["title"], Zs = { class: "filter-summary__chip-field" }, el = { class: "filter-summary__chip-value" }, tl = { class: "filter-summary__chip-field" }, sl = { class: "filter-summary__chip-value" }, ll = ["aria-label", "onClick"], ol = { class: "filter-groups" }, nl = { class: "filter-group__header" }, il = { class: "filter-group__label" }, al = { class: "filter-group__content" }, rl = {
  key: 0,
  class: "filter-select"
}, cl = ["value", "onChange"], ul = { value: "" }, dl = ["value"], fl = {
  key: 2,
  class: "filter-range"
}, vl = { class: "filter-range__inputs" }, gl = ["value", "min", "max", "step", "onInput"], ml = ["value", "min", "max", "step", "onInput"], hl = {
  key: 3,
  class: "filter-boolean"
}, pl = { class: "filter-checkbox" }, bl = ["checked", "onChange"], kl = /* @__PURE__ */ be({
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
    const e = t, r = P, h = U({}), u = b(() => e.activeFilters.length), $ = b(() => {
      const m = /* @__PURE__ */ new Set();
      for (const f of e.preAppliedChips)
        f.field && m.add(f.field);
      return m;
    }), M = b(
      () => e.filterConfigs.filter((m) => !$.value.has(m.field))
    );
    function C(m, f) {
      const d = z(m), S = w(f), I = d.find((k) => w(k.value) === S);
      return I ? I.label : String(f);
    }
    const y = b(() => {
      const m = [];
      for (const f of e.activeFilters) {
        const d = e.filterConfigs.find((k) => k.field === f.field);
        if (!d) continue;
        const S = T(d);
        if (f.type === "multiselect" && Array.isArray(f.value)) {
          for (const k of f.value)
            m.push({
              key: `${f.field}:${w(k)}`,
              fieldLabel: S,
              valueLabel: C(d, k),
              remove: () => {
                const B = f.value.filter((he) => w(he) !== w(k));
                B.length === 0 ? r("remove-filter", f.field) : r("apply-filter", f.field, B, "multiselect");
              }
            });
          continue;
        }
        let I;
        if (f.type === "range" && f.value && typeof f.value == "object") {
          const { min: k, max: B } = f.value;
          k !== void 0 && B !== void 0 ? I = `${k} – ${B}` : k !== void 0 ? I = `≥ ${k}` : B !== void 0 ? I = `≤ ${B}` : I = "";
        } else f.type === "boolean" ? I = d.label : I = C(d, f.value);
        m.push({
          key: f.field,
          fieldLabel: S,
          valueLabel: I,
          remove: () => {
            f.type === "range" && (h.value[f.field] = {}), r("remove-filter", f.field);
          }
        });
      }
      return m;
    });
    function w(m) {
      return typeof m == "object" && m !== null && "hex" in m ? String(m.hex) : String(m);
    }
    function T(m) {
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
      }[m.field] || m.label;
    }
    function z(m) {
      const f = e.getFilterOptionCounts?.(m.field) || /* @__PURE__ */ new Map(), d = f.size > 0, S = (k) => {
        if (!d) return;
        const B = typeof k == "object" && k !== null && "hex" in k ? k.hex : String(k);
        return f.get(B) ?? 0;
      };
      return m.options?.length ? m.options.map((k) => ({
        ...k,
        count: S(k.value)
      })) : e.getUniqueValues(m.field).map((k) => {
        const B = S(k);
        return m.field === "color" && typeof k == "object" && k !== null ? "name" in k && k.name ? {
          label: k.name,
          value: k,
          count: B
        } : {
          label: k.hex || String(k),
          value: k,
          count: B
        } : {
          label: String(k),
          value: k,
          count: B
        };
      });
    }
    function K(m) {
      return e.activeFilters.find((d) => d.field === m)?.value;
    }
    function fe(m, f) {
      const S = f.target.value;
      if (S === "")
        r("remove-filter", m);
      else {
        const I = S !== "" && !isNaN(Number(S)) ? Number(S) : S;
        r("apply-filter", m, I, "select");
      }
    }
    function le(m) {
      return z(m).map((f) => ({
        value: w(f.value),
        label: f.count !== void 0 ? `${f.label} (${f.count})` : f.label,
        hidden: f.count === 0
      }));
    }
    function j(m) {
      const f = K(m);
      return Array.isArray(f) ? f.map(w) : [];
    }
    function O(m, f) {
      if (f.length === 0) {
        r("remove-filter", m);
        return;
      }
      const d = e.getUniqueValues(m), S = new Map(d.map((k) => [w(k), k])), I = f.map((k) => S.has(k) ? S.get(k) : k !== "" && !isNaN(Number(k)) ? Number(k) : k);
      r("apply-filter", m, I, "multiselect");
    }
    function G(m) {
      const f = e.getFieldRange(m);
      return f ? { min: Math.floor(f.min), max: Math.ceil(f.max) } : { min: void 0, max: void 0 };
    }
    function re(m) {
      const f = e.getFieldRange(m);
      if (!f) return 1;
      const d = f.max - f.min;
      if (d <= 0) return 1;
      const S = d / 100, I = Math.pow(10, Math.floor(Math.log10(S)));
      return Math.max(I, 0.01);
    }
    function L(m, f) {
      if (h.value[m]?.[f] !== void 0)
        return h.value[m][f];
      const d = e.activeFilters.find((S) => S.field === m);
      if (d?.value && typeof d.value == "object")
        return d.value[f];
    }
    function A(m, f, d) {
      const S = d.target, I = S.value ? Number(S.value) : void 0;
      h.value[m] || (h.value[m] = {}), h.value[m][f] = I;
      const k = h.value[m].min, B = h.value[m].max;
      k !== void 0 || B !== void 0 ? r("apply-filter", m, { min: k, max: B }, "range") : r("remove-filter", m);
    }
    function ve(m, f) {
      f.target.checked ? r("apply-filter", m, !0, "boolean") : r("remove-filter", m);
    }
    function W() {
      h.value = {}, r("clear-filters");
    }
    return (m, f) => (s(), l("div", Js, [
      i("div", Ws, [
        u.value > 0 || t.preAppliedChips.length > 0 ? (s(), l("div", Qs, [
          i("div", Ys, [
            (s(!0), l(V, null, J(t.preAppliedChips, (d) => (s(), l("span", {
              key: `pre:${d.key}`,
              class: "c-loz c-loz--sm c-loz--pill filter-summary__chip filter-summary__chip--locked",
              title: d.title || "Pre-applied by the product spec"
            }, [
              i("span", Zs, n(d.fieldLabel) + ":", 1),
              i("span", el, n(d.valueLabel), 1)
            ], 8, Xs))), 128)),
            (s(!0), l(V, null, J(y.value, (d) => (s(), l("span", {
              key: d.key,
              class: "c-loz c-loz--sm c-loz--pill c-loz--removable filter-summary__chip"
            }, [
              i("span", tl, n(d.fieldLabel) + ":", 1),
              i("span", sl, n(d.valueLabel), 1),
              i("button", {
                type: "button",
                class: "c-loz__remove",
                "aria-label": p(_)("stockFilter.clear_filters"),
                onClick: d.remove
              }, "×", 8, ll)
            ]))), 128))
          ]),
          u.value > 0 ? (s(), l("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--sm c-btn--delete",
            onClick: W
          }, n(p(_)("stockFilter.clear_filters")), 1)) : v("", !0)
        ])) : v("", !0),
        i("div", ol, [
          (s(!0), l(V, null, J(M.value, (d) => (s(), l("div", {
            key: d.field,
            class: "filter-group"
          }, [
            i("div", nl, [
              i("label", il, n(T(d)), 1)
            ]),
            i("div", al, [
              d.type === "select" ? (s(), l("div", rl, [
                i("select", {
                  value: K(d.field),
                  class: "filter-select-input",
                  onChange: (S) => fe(d.field, S)
                }, [
                  i("option", ul, n(p(_)("stockFilter.all")), 1),
                  (s(!0), l(V, null, J(z(d), (S) => (s(), l("option", {
                    key: S.value,
                    value: S.value
                  }, n(S.label) + n(S.count !== void 0 ? ` (${S.count})` : ""), 9, dl))), 128))
                ], 40, cl)
              ])) : d.type === "multiselect" ? (s(), ee(pt, {
                key: 1,
                id: `filter-${d.field}`,
                value: j(d.field),
                options: le(d),
                placeholder: p(_)("stockFilter.all"),
                searchable: "",
                "onUpdate:value": (S) => O(d.field, S)
              }, null, 8, ["id", "value", "options", "placeholder", "onUpdate:value"])) : d.type === "range" ? (s(), l("div", fl, [
                i("div", vl, [
                  i("input", {
                    value: L(d.field, "min"),
                    min: G(d.field).min,
                    max: G(d.field).max,
                    step: re(d.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Min",
                    onInput: (S) => A(d.field, "min", S)
                  }, null, 40, gl),
                  f[0] || (f[0] = i("span", { class: "filter-range__separator" }, "–", -1)),
                  i("input", {
                    value: L(d.field, "max"),
                    min: G(d.field).min,
                    max: G(d.field).max,
                    step: re(d.field),
                    type: "number",
                    class: "filter-range__input",
                    placeholder: "Max",
                    onInput: (S) => A(d.field, "max", S)
                  }, null, 40, ml)
                ])
              ])) : d.type === "boolean" ? (s(), l("div", hl, [
                i("label", pl, [
                  i("input", {
                    checked: K(d.field) === !0,
                    type: "checkbox",
                    onChange: (S) => ve(d.field, S)
                  }, null, 40, bl),
                  i("span", null, n(d.label), 1)
                ])
              ])) : v("", !0)
            ])
          ]))), 128))
        ])
      ])
    ]));
  }
}), yl = /* @__PURE__ */ De(kl, [["__scopeId", "data-v-9e7cab3a"]]), wl = { class: "stock-filter-results" }, Cl = { class: "results-header" }, _l = { class: "results-info" }, $l = {
  key: 0,
  class: "results-count"
}, Sl = {
  key: 1,
  class: "results-count results-count--loading"
}, xl = { class: "results-controls" }, Fl = { class: "c-btn-group display-mode-toggle" }, Tl = ["title"], Ml = ["title"], Pl = {
  key: 1,
  class: "results-empty"
}, zl = { class: "empty-message" }, Ll = { class: "th" }, Ol = {
  key: 0,
  class: "th"
}, Rl = {
  key: 1,
  class: "th"
}, Il = {
  key: 2,
  class: "th"
}, Dl = {
  key: 3,
  class: "th"
}, Bl = {
  key: 4,
  class: "th"
}, Nl = {
  key: 5,
  class: "th"
}, Al = {
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
}, Kl = {
  key: 3,
  class: "results-pagination"
}, Gl = ["disabled"], El = { class: "c-btn-group pagination-pages" }, jl = ["onClick"], Hl = ["disabled"], Jl = /* @__PURE__ */ be({
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
    const e = t, r = b(() => {
      const u = ["60px", "2fr"];
      return e.visibleColumns.finish && u.push("1fr"), e.visibleColumns.brand && u.push("1fr"), e.visibleColumns.variant && u.push("1fr"), e.visibleColumns.category && u.push("1fr"), e.visibleColumns.grain && u.push("80px"), e.visibleColumns.color && u.push("100px"), e.visibleColumns.thickness && u.push("80px"), e.visibleColumns.quantity && u.push("80px"), e.visibleColumns.weight && u.push("80px"), e.visibleColumns.price && u.push("100px"), u.push("50px"), { "grid-template-columns": u.join(" ") };
    }), h = b(() => {
      const u = [], M = Math.floor(2.5);
      let C = Math.max(1, e.currentPage - M), y = Math.min(e.totalPages, C + 5 - 1);
      y === e.totalPages && (C = Math.max(1, y - 5 + 1));
      for (let w = C; w <= y; w++)
        u.push(w);
      return u;
    });
    return (u, $) => (s(), l("div", wl, [
      i("header", Cl, [
        i("div", _l, [
          t.loading ? (s(), l("div", Sl, n(p(_)("actions.loading")) + "...", 1)) : (s(), l("div", $l, n(t.totalResults) + " " + n(t.totalResults === 1 ? p(_)("stockFilter.result_one") : p(_)("stockFilter.result_other")), 1))
        ]),
        i("div", xl, [
          i("div", Fl, [
            i("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: t.displayMode === "grid" }]),
              title: p(_)("stockFilter.grid_view"),
              onClick: $[0] || ($[0] = (M) => u.$emit("update:displayMode", "grid"))
            }, [...$[5] || ($[5] = [
              dt('<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" data-v-26b6e10c><rect x="1" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="1" width="6" height="6" data-v-26b6e10c></rect><rect x="1" y="9" width="6" height="6" data-v-26b6e10c></rect><rect x="9" y="9" width="6" height="6" data-v-26b6e10c></rect></svg>', 1)
            ])], 10, Tl),
            i("button", {
              type: "button",
              class: q(["c-btn c-btn--sm", { selected: t.displayMode === "list" }]),
              title: p(_)("stockFilter.list_view"),
              onClick: $[1] || ($[1] = (M) => u.$emit("update:displayMode", "list"))
            }, [...$[6] || ($[6] = [
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
            ])], 10, Ml)
          ])
        ])
      ]),
      t.loading ? (s(), ee(Qe, {
        key: 0,
        size: "medium",
        label: `${p(_)("actions.loading")}...`,
        block: "",
        class: "results-loading"
      }, null, 8, ["label"])) : t.totalResults === 0 ? (s(), l("div", Pl, [
        i("p", zl, n(p(_)("stockFilter.no_results")), 1),
        t.hasActiveFilters ? (s(), l("button", {
          key: 0,
          type: "button",
          class: "c-btn",
          onClick: $[2] || ($[2] = (M) => u.$emit("clear-filters"))
        }, n(p(_)("stockFilter.clear_filters")), 1)) : v("", !0)
      ])) : (s(), l(V, { key: 2 }, [
        t.displayMode === "list" ? (s(), l("div", {
          key: 0,
          class: "results-table-header",
          style: Z(r.value)
        }, [
          $[7] || ($[7] = i("div", { class: "th" }, null, -1)),
          i("div", Ll, n(p(_)("woodwork.material")), 1),
          t.visibleColumns.finish ? (s(), l("div", Ol, n(p(_)("fields.finish")), 1)) : v("", !0),
          t.visibleColumns.brand ? (s(), l("div", Rl, n(p(_)("fields.brand")), 1)) : v("", !0),
          t.visibleColumns.variant ? (s(), l("div", Il, n(p(_)("fields.variant")), 1)) : v("", !0),
          t.visibleColumns.category ? (s(), l("div", Dl, n(p(_)("fields.category")), 1)) : v("", !0),
          t.visibleColumns.grain ? (s(), l("div", Bl, n(p(_)("fields.grain")), 1)) : v("", !0),
          t.visibleColumns.color ? (s(), l("div", Nl, n(p(_)("fields.color")), 1)) : v("", !0),
          t.visibleColumns.thickness ? (s(), l("div", Al, n(p(_)("fields.t")), 1)) : v("", !0),
          t.visibleColumns.quantity ? (s(), l("div", Ul, n(p(_)("fields.q")), 1)) : v("", !0),
          t.visibleColumns.weight ? (s(), l("div", Vl, n(p(_)("fields.weight")), 1)) : v("", !0),
          t.visibleColumns.price ? (s(), l("div", ql, n(p(_)("stockFilter.price")), 1)) : v("", !0),
          $[8] || ($[8] = i("div", { class: "th th--center" }, null, -1))
        ], 4)) : v("", !0),
        i("div", {
          class: q(["results-grid", { "results-grid--list": t.displayMode === "list" }])
        }, [
          Ie(u.$slots, "default", {}, void 0, !0)
        ], 2)
      ], 64)),
      t.totalPages > 1 ? (s(), l("div", Kl, [
        i("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === 1,
          onClick: $[3] || ($[3] = (M) => u.$emit("go-to-page", t.currentPage - 1))
        }, n(p(_)("pagination.previous")), 9, Gl),
        i("div", El, [
          (s(!0), l(V, null, J(h.value, (M) => (s(), l("button", {
            key: M,
            type: "button",
            class: q(["c-btn c-btn--sm", { selected: M === t.currentPage }]),
            onClick: (C) => u.$emit("go-to-page", M)
          }, n(M), 11, jl))), 128))
        ]),
        i("button", {
          type: "button",
          class: "c-btn c-btn--sm",
          disabled: t.currentPage === t.totalPages,
          onClick: $[4] || ($[4] = (M) => u.$emit("go-to-page", t.currentPage + 1))
        }, n(p(_)("pagination.next")), 9, Hl)
      ])) : v("", !0)
    ]));
  }
}), Wl = /* @__PURE__ */ De(Jl, [["__scopeId", "data-v-26b6e10c"]]), Ql = {
  id: "stock-filter",
  class: "smartcut-content",
  "aria-label": "Material catalogue"
}, Yl = {
  key: 1,
  class: "stock-filter-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Xl = { style: { "margin-bottom": "6px", color: "#aaa" } }, Zl = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, eo = { style: { "margin-bottom": "6px", color: "#aaa" } }, to = { style: { color: "#0ff" } }, so = { style: { color: "#aaa" } }, lo = { style: { color: "#0ff" } }, oo = { style: { color: "#0f0" } }, no = {
  key: 2,
  class: "stock-filter-search-sort"
}, io = {
  key: 0,
  class: "selection-bar"
}, ao = { class: "selection-bar__left" }, ro = { class: "selection-bar__count" }, co = 500, uo = "Can't mix with a material that's cut on a different saw. Remove your current selection to pick this one.", ko = /* @__PURE__ */ be({
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
      default: () => bt()
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
    const r = t, h = e, u = U(r.stockOptions), $ = U(r.config), M = U(r.numberFormat);
    me(() => r.stockOptions, (a) => {
      u.value = a;
    }), me(() => r.config, (a) => {
      $.value = a;
    });
    const C = b(() => {
      if (r.serverPagination)
        return { ...r.serverPagination };
    }), {
      activeFilters: y,
      searchQuery: w,
      sortBy: T,
      sortOrder: z,
      displayMode: K,
      currentPage: fe,
      filteredStock: le,
      paginatedStock: j,
      selectedStock: O,
      totalPages: G,
      totalItems: re,
      isLoading: L,
      applyFilter: A,
      removeFilter: ve,
      clearFilters: W,
      goToPage: m,
      toggleStockSelection: f,
      isStockSelected: d,
      clearSelection: S,
      selectById: I,
      createInputStock: k,
      getUniqueValues: B,
      getFieldRange: he,
      getFilterOptionCounts: $e
    } = wt({
      stockOptions: u,
      config: $,
      numberFormat: M,
      serverPagination: C.value
    }), { addNotice: Be } = yt(), ce = ft(Ct, []), R = U(!1), oe = U(1), Y = U(/* @__PURE__ */ new Map());
    function ne(a, c, o) {
      for (const D of a)
        D.customData = {
          ...D.customData || {},
          selectionId: c,
          ...o?.name && { stockName: o.name }
        }, o?.extras && kt(D, o.extras);
      h("stock-added", a);
    }
    const ge = b(() => r.config.itemsPerPage || 20), Se = b(() => {
      const a = (oe.value - 1) * ge.value, c = a + ge.value;
      return O.value.slice(a, c);
    }), ke = b(() => R.value ? Se.value : j.value), { groupedStock: xe, getFilteredOutThicknesses: Fe } = Ot(ke, y);
    function Te(a) {
      const c = /* @__PURE__ */ new Set();
      for (const o of a.items)
        d(o) && o.t != null && c.add(o.t);
      return c;
    }
    const Ne = b(() => {
      const a = /* @__PURE__ */ new Map();
      for (const c of ke.value)
        a.set(X(c), c.name || c.material || "");
      return a;
    }), ue = b(() => {
      const a = r.serverPagination ? xe.value.map((o) => o.representative) : r.stockOptions.slice(0, co);
      if (!a.length) return "";
      const c = a.map((o, D) => {
        const N = o.name || o.material;
        if (!N) return null;
        const E = o.db_id, H = o.cost && r.currency ? {
          "@type": "Offer",
          price: o.cost,
          priceCurrency: r.currency,
          availability: o.available !== !1 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        } : null, Le = {
          "@type": "Product",
          name: N,
          ...o.imageUrl && { image: o.imageUrl },
          ...o.code && { sku: o.code },
          ...E && { productID: E },
          ...o.brand && { brand: { "@type": "Brand", name: o.brand } },
          ...o.category && { category: o.category },
          ...o.description && { description: o.description },
          ...H && { offers: H }
        };
        return {
          "@type": "ListItem",
          position: D + 1,
          item: Le
        };
      }).filter((o) => o !== null);
      return c.length ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: c
      }).replace(/[<]/g, "\\u003c") : "";
    }), ye = b(() => {
      const a = {
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
      }, c = r.serverPagination ? j.value : le.value;
      for (const o of c)
        o.code && (a.code = !0), o.finish && (a.finish = !0), o.variant && (a.variant = !0), o.brand && (a.brand = !0), o.grain && (a.grain = !0), o.color && (a.color = !0), o.category && (a.category = !0), o.t != null && (a.thickness = !0), o.weight && (a.weight = !0), o.cost && (a.price = !0), o.q != null && !o.unlimitedQuantity && (a.quantity = !0), o.tags?.length && (a.tags = !0);
      return a;
    }), de = b(() => R.value ? O.value.length : re.value), Ae = b(() => R.value ? Math.max(1, Math.ceil(O.value.length / ge.value)) : G.value), g = b(() => R.value ? oe.value : fe.value);
    function F(a) {
      R.value ? oe.value = a : m(a);
    }
    me(R, () => {
      oe.value = 1;
    }), me(() => O.value.length, (a) => {
      a === 0 && R.value && (R.value = !1);
      const c = Math.max(1, Math.ceil(a / ge.value));
      oe.value > c && (oe.value = c), O.value.length > 0 && h("labels-changed", /* @__PURE__ */ new Map());
    });
    const Q = b(() => r.loading || L.value), x = U(!1);
    me(O, (a) => {
      x.value || (ce.value = a.map((c) => X(c)));
    }, { deep: !0 });
    async function te(a) {
      if (!r.serverPagination) return null;
      const { apiUrl: c, orgSlug: o, isCustomDomain: D } = r.serverPagination, N = D ? `${c}ecommerce/stock` : `${c}ecommerce/${o}/stock`;
      try {
        const E = new URL(N);
        E.searchParams.set("limit", "1");
        const H = {};
        if (/^[a-f0-9]{24}$/i.test(a))
          H._id = a;
        else {
          const Ce = a.split("-");
          if (Ce.length >= 4) {
            const lt = parseFloat(Ce.pop()), ot = parseFloat(Ce.pop()), nt = parseFloat(Ce.pop()), it = Ce.join("-");
            H.material = it, H.l = nt, H.w = ot, H.t = lt;
          } else
            return null;
        }
        E.searchParams.set("filters", JSON.stringify(H));
        const Le = await fetch(E.toString(), { credentials: "include" });
        if (!Le.ok) return null;
        const je = (await Le.json()).items || [];
        if (je.length === 0) return null;
        const Ve = je[0];
        return X(Ve) !== a ? (console.warn("[StockFilter] fetchStockById: server returned mismatched item", { requested: a, got: X(Ve) }), null) : Ve;
      } catch {
        return null;
      }
    }
    async function ie() {
      if (ce.value.length) {
        x.value = !0;
        try {
          const a = [...ce.value], c = [], o = [];
          for (const N of a) {
            let E = r.stockOptions.find((H) => X(H) === N);
            !E && r.serverPagination && (E = await te(N)), E && (c.push(N), o.push(E));
          }
          const D = a.length - c.length;
          D > 0 && (ce.value = c, Be({
            message: D === 1 ? "A previously selected material is no longer available" : `${D} previously selected materials are no longer available`,
            type: "warning"
          }));
          for (const N of o) {
            const E = X(N);
            if (!d(N)) {
              f(N);
              const H = k(N);
              Ue([H], N), Y.value.set(E, [H]), ne([H], E, N);
            }
          }
        } finally {
          x.value = !1;
        }
      }
    }
    We(async () => {
      if (!r.singleSelect) {
        if (r.initialProductId) {
          const a = I(r.initialProductId);
          if (!a) return;
          const c = X(a), o = k(a);
          Ue([o], a), Y.value.set(c, [o]), ne([o], c, a);
          return;
        }
        await ie(), h("selections-restored", O.value.length);
      }
    });
    const se = b(() => {
      const a = r.config.availableFilters.filter((c) => {
        const o = B(c.field);
        return o.length > 0 && o.some((D) => D != null);
      });
      return a.length === 0 && y.value.length > 0 ? r.config.availableFilters : a;
    }), we = b(() => O.value.length === 0 ? null : O.value[0].db_sawId || null);
    function Me(a) {
      if (!we.value) return !1;
      const c = a.db_sawId;
      return c ? c !== we.value : !1;
    }
    function Xe(a) {
      return Me(a) ? uo : "";
    }
    function Ue(a, c) {
      const o = c.name || c.material;
      if (o)
        for (const D of a)
          D.material = o;
    }
    async function Pe(a) {
      if (Me(a)) return;
      if (r.singleSelect) {
        h("single-pick", a);
        return;
      }
      const c = d(a);
      f(a);
      const o = X(a);
      if (c) {
        const D = Y.value.get(o);
        D ? (D.forEach(ze), Y.value.delete(o)) : ze(k(a));
      } else {
        const D = k(a);
        Ue([D], a), Y.value.set(o, [D]), ne([D], o, a);
      }
    }
    function ze(a) {
      h("stock-removed", a);
    }
    async function Ze(a) {
      a.items.every((o) => d(o)) ? await Ee(a) : await Ge(a);
    }
    async function Ge(a) {
      for (const c of a.items)
        Me(c) || d(c) || await Pe(c);
    }
    async function Ee(a) {
      for (const c of a.items)
        d(c) && await Pe(c);
    }
    async function et(a, c) {
      await Pe(a);
    }
    function tt() {
      for (const a of O.value) {
        const c = X(a), o = Y.value.get(c);
        o ? o.forEach(ze) : ze(k(a));
      }
      Y.value.clear(), S(), ce.value = [], R.value = !1;
    }
    function st(a) {
      h("order-sample", a);
    }
    return P({
      applyFilter: A,
      removeFilter: ve,
      clearFilters: W,
      clearSelection: S,
      selectedStock: O,
      filteredStock: le,
      getUniqueValues: B,
      getFieldRange: he
    }), (a, c) => (s(), l("section", Ql, [
      ue.value ? (s(), ee(vt("script"), {
        key: 0,
        type: "application/ld+json",
        innerHTML: ue.value
      }, null, 8, ["innerHTML"])) : v("", !0),
      t.debug ? (s(), l("div", Yl, [
        c[15] || (c[15] = i("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "StockFilter Debug", -1)),
        i("div", Xl, [
          c[6] || (c[6] = i("strong", { style: { color: "#0ff" } }, "savedSelections (localStorage 'stock-filter-selections'):", -1)),
          i("pre", Zl, n(JSON.stringify(p(ce), null, 2)), 1)
        ]),
        i("div", eo, [
          i("strong", to, "selectedStock (" + n(p(O).length) + " items):", 1),
          (s(!0), l(V, null, J(p(O), (o) => (s(), l("div", {
            key: p(X)(o),
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            i("div", null, [
              c[7] || (c[7] = i("span", { style: { color: "#ff0" } }, "getStockId:", -1)),
              ae(" " + n(p(X)(o)), 1)
            ]),
            i("div", null, [
              c[8] || (c[8] = i("span", { style: { color: "#ff0" } }, "db_id:", -1)),
              ae(" " + n(o.db_id || "(none)"), 1)
            ]),
            i("div", null, [
              c[9] || (c[9] = i("span", { style: { color: "#ff0" } }, "code:", -1)),
              ae(" " + n(o.code || "(none)"), 1)
            ]),
            i("div", null, [
              c[10] || (c[10] = i("span", { style: { color: "#ff0" } }, "material:", -1)),
              ae(" " + n(o.material), 1)
            ]),
            i("div", null, [
              c[11] || (c[11] = i("span", { style: { color: "#ff0" } }, "name:", -1)),
              ae(" " + n(o.name), 1)
            ]),
            i("div", null, [
              c[12] || (c[12] = i("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
              ae(" " + n(o.l) + " × " + n(o.w) + " × " + n(o.t), 1)
            ]),
            i("div", null, [
              c[13] || (c[13] = i("span", { style: { color: "#ff0" } }, "variant:", -1)),
              ae(" " + n(o.variant || "(none)"), 1)
            ])
          ]))), 128))
        ]),
        i("div", so, [
          i("strong", lo, "materialStockMap (" + n(Y.value.size) + " entries):", 1),
          (s(!0), l(V, null, J(Y.value, ([o, D]) => (s(), l("div", {
            key: o,
            style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
          }, [
            i("div", null, [
              c[14] || (c[14] = i("span", { style: { color: "#ff0" } }, "key:", -1)),
              ae(" " + n(o) + " → ", 1),
              i("span", oo, n(D.length) + " InputStock(s)", 1)
            ]),
            (s(!0), l(V, null, J(D, (N, E) => (s(), l("div", {
              key: E,
              style: { "margin-left": "12px" }
            }, n(N.material) + " " + n(N.l) + "×" + n(N.w) + "×" + n(N.t) + " db_id=" + n(N.db_id || "(none)") + " code=" + n(N.code || "(none)"), 1))), 128))
          ]))), 128))
        ])
      ])) : v("", !0),
      t.config.enableSearch || t.config.sortOptions.length > 0 ? (s(), l("div", no, [
        t.config.enableSearch ? (s(), ee(_t, {
          key: 0,
          modelValue: p(w),
          "onUpdate:modelValue": c[0] || (c[0] = (o) => qe(w) ? w.value = o : null)
        }, null, 8, ["modelValue"])) : v("", !0),
        t.config.sortOptions.length > 0 ? (s(), ee($t, {
          key: 1,
          "sort-by": p(T),
          "onUpdate:sortBy": c[1] || (c[1] = (o) => qe(T) ? T.value = o : null),
          "sort-order": p(z),
          "onUpdate:sortOrder": c[2] || (c[2] = (o) => qe(z) ? z.value = o : null),
          "available-fields": t.config.sortOptions
        }, null, 8, ["sort-by", "sort-order", "available-fields"])) : v("", !0)
      ])) : v("", !0),
      se.value.length > 0 || t.preAppliedChips.length > 0 ? (s(), ee(yl, {
        key: 3,
        "filter-configs": se.value,
        "active-filters": p(y),
        "get-unique-values": p(B),
        "get-field-range": p(he),
        "get-filter-option-counts": p($e),
        "pre-applied-chips": t.preAppliedChips,
        onApplyFilter: p(A),
        onRemoveFilter: p(ve),
        onClearFilters: p(W)
      }, null, 8, ["filter-configs", "active-filters", "get-unique-values", "get-field-range", "get-filter-option-counts", "pre-applied-chips", "onApplyFilter", "onRemoveFilter", "onClearFilters"])) : v("", !0),
      Ke(Wl, {
        "total-results": de.value,
        "display-mode": p(K),
        loading: Q.value,
        "has-active-filters": p(y).length > 0,
        "current-page": g.value,
        "total-pages": Ae.value,
        "visible-columns": ye.value,
        "onUpdate:displayMode": c[3] || (c[3] = (o) => K.value = o),
        onClearFilters: p(W),
        onGoToPage: F
      }, {
        default: _e(() => [
          (s(!0), l(V, null, J(p(xe), (o) => (s(), ee(Hs, {
            key: o.groupKey,
            stock: o.representative,
            "is-selected": p(d)(o.representative),
            "is-disabled": Me(o.representative),
            "disabled-reason": Xe(o.representative),
            "display-label": Ne.value.get(p(X)(o.representative)),
            "format-price": t.formatPrice,
            "button-color": t.colors.button,
            "button-text-color": t.colors.buttonText,
            locale: t.locale,
            "display-mode": p(K),
            "unit-system": t.unitSystem,
            "visible-columns": ye.value,
            "api-url": t.serverPagination?.apiUrl,
            group: o.items.length > 1 ? o : void 0,
            "selected-thicknesses": o.items.length > 1 ? Te(o) : void 0,
            "filtered-out-thicknesses": o.items.length > 1 ? p(Fe)(o) : void 0,
            onToggleSelection: Pe,
            onToggleGroup: Ze,
            onSelectGroup: Ge,
            onDeselectGroup: Ee,
            onToggleThickness: et,
            onOrderSample: st
          }, null, 8, ["stock", "is-selected", "is-disabled", "disabled-reason", "display-label", "format-price", "button-color", "button-text-color", "locale", "display-mode", "unit-system", "visible-columns", "api-url", "group", "selected-thicknesses", "filtered-out-thicknesses"]))), 128))
        ]),
        _: 1
      }, 8, ["total-results", "display-mode", "loading", "has-active-filters", "current-page", "total-pages", "visible-columns", "onClearFilters"]),
      Ke(gt, { name: "selection-bar" }, {
        default: _e(() => [
          r.showSelectionBar && p(O).length > 0 ? (s(), l("div", io, [
            i("div", ao, [
              i("span", ro, n(p(O).length) + " " + n(p(O).length === 1 ? "material" : "materials") + " selected ", 1),
              i("button", {
                type: "button",
                class: "c-btn c-btn--sm",
                onClick: c[4] || (c[4] = (o) => R.value = !R.value)
              }, n(R.value ? "Show all" : "Show selected"), 1),
              i("button", {
                type: "button",
                class: "c-btn c-btn--sm c-btn--delete",
                onClick: tt
              }, " Clear ")
            ]),
            i("button", {
              type: "button",
              class: "c-btn c-btn--md selection-bar__confirm",
              style: Z({ backgroundColor: t.colors.button, color: t.colors.buttonText }),
              onClick: c[5] || (c[5] = (o) => h("selection-confirmed", p(O)))
            }, n(p(_)("stockFilter.create_cut_list")), 5)
          ])) : v("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
export {
  ko as default
};
