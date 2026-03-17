import { d as B, a as l, b as d, f as o, e as n, t as e, u as t, r as f, x as I, y as b, z as L, A as h, p as A, F as y, k as C } from "./vendor-vue-XczpOw2V.js";
import { t as s } from "./i18n-CYUWq18B.js";
import { _ as V } from "./Launch-DrD-8UqN.js";
const F = { class: "order-lookup" }, M = { class: "order-lookup__header" }, O = { class: "order-lookup__title" }, $ = { class: "order-lookup__subtitle" }, q = { class: "order-lookup__field" }, N = {
  for: "orderId",
  class: "order-lookup__label"
}, T = ["placeholder"], z = { class: "order-lookup__field" }, E = {
  for: "postalCode",
  class: "order-lookup__label"
}, j = ["placeholder"], R = {
  key: 0,
  class: "order-lookup__error"
}, G = ["disabled"], H = {
  key: 0,
  class: "order-lookup__spinner"
}, J = {
  key: 1,
  class: "order-lookup__result"
}, K = { class: "order-lookup__result-header" }, Q = { class: "order-lookup__order-card" }, W = { class: "order-lookup__status-row" }, X = { class: "order-lookup__order-id" }, Y = { class: "order-lookup__info-row" }, Z = { class: "order-lookup__info-label" }, oo = { class: "order-lookup__info-value" }, eo = { class: "order-lookup__info-row" }, ro = { class: "order-lookup__info-label" }, so = { class: "order-lookup__info-value" }, to = {
  key: 0,
  class: "order-lookup__section"
}, lo = { class: "order-lookup__section-title" }, ao = { class: "order-lookup__address" }, uo = { key: 0 }, no = { key: 1 }, io = {
  key: 0,
  class: "order-lookup__shipping-method"
}, po = { class: "order-lookup__info-label" }, _o = { class: "order-lookup__info-value" }, co = {
  key: 1,
  class: "order-lookup__section"
}, ko = { class: "order-lookup__section-title" }, ho = { class: "order-lookup__items" }, vo = { class: "order-lookup__item-header" }, mo = { class: "order-lookup__item-number" }, fo = { class: "order-lookup__item-parts" }, go = {
  key: 0,
  class: "order-lookup__item-stock"
}, bo = { class: "order-lookup__item-price" }, Lo = ["href"], yo = {
  key: 2,
  class: "order-lookup__section"
}, Co = ["href"], wo = { class: "order-lookup__section order-lookup__pricing" }, Uo = { class: "order-lookup__section-title" }, Po = {
  key: 0,
  class: "order-lookup__price-row"
}, xo = { class: "order-lookup__price-row order-lookup__price-row--total" }, Do = /* @__PURE__ */ B({
  __name: "OrderLookup",
  props: {
    apiBaseUrl: {},
    orgSlug: {},
    isCustomDomain: { type: Boolean, default: !1 },
    formatPrice: {},
    locale: { default: "en-US" }
  },
  setup(g) {
    const v = g, p = f(""), _ = f(""), m = f(!1), c = f(""), r = f(null);
    function w() {
      return v.isCustomDomain ? `${v.apiBaseUrl}ecommerce/order-lookup` : `${v.apiBaseUrl}ecommerce/${v.orgSlug}/order-lookup`;
    }
    async function U() {
      if (!(!p.value || !_.value)) {
        m.value = !0, c.value = "", r.value = null;
        try {
          const i = new URL(w());
          i.searchParams.set("orderId", p.value.trim()), i.searchParams.set("postalCode", _.value.trim());
          const a = await fetch(i.toString(), {
            credentials: "include"
          }), u = await a.json();
          if (!a.ok) {
            c.value = u.error || s("orderLookup.notFound");
            return;
          }
          r.value = u.order;
        } catch (i) {
          console.error("[OrderLookup] Error:", i), c.value = s("orderLookup.error");
        } finally {
          m.value = !1;
        }
      }
    }
    function P() {
      r.value = null, p.value = "", _.value = "", c.value = "";
    }
    function x(i) {
      return new Date(i).toLocaleDateString(v.locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    function D(i) {
      return {
        pending: s("orderLookup.statusPending"),
        cut: s("orderLookup.statusCut"),
        dispatched: s("orderLookup.statusDispatched"),
        cancelled: s("orderLookup.statusCancelled")
      }[i] || i;
    }
    return (i, a) => (d(), l("div", F, [
      o("div", M, [
        o("h2", O, e(t(s)("orderLookup.title")), 1),
        o("p", $, e(t(s)("orderLookup.subtitle")), 1)
      ]),
      r.value ? n("", !0) : (d(), l("form", {
        key: 0,
        class: "order-lookup__form",
        onSubmit: I(U, ["prevent"])
      }, [
        o("div", q, [
          o("label", N, e(t(s)("orderLookup.orderId")), 1),
          b(o("input", {
            id: "orderId",
            "onUpdate:modelValue": a[0] || (a[0] = (u) => p.value = u),
            type: "text",
            class: "order-lookup__input",
            placeholder: t(s)("orderLookup.orderIdPlaceholder"),
            required: ""
          }, null, 8, T), [
            [L, p.value]
          ])
        ]),
        o("div", z, [
          o("label", E, e(t(s)("orderLookup.postalCode")), 1),
          b(o("input", {
            id: "postalCode",
            "onUpdate:modelValue": a[1] || (a[1] = (u) => _.value = u),
            type: "text",
            class: "order-lookup__input",
            placeholder: t(s)("orderLookup.postalCodePlaceholder"),
            required: ""
          }, null, 8, j), [
            [L, _.value]
          ])
        ]),
        c.value ? (d(), l("div", R, e(c.value), 1)) : n("", !0),
        o("button", {
          type: "submit",
          class: "c-btn c-btn--primary",
          disabled: m.value || !p.value || !_.value
        }, [
          m.value ? (d(), l("span", H)) : n("", !0),
          h(" " + e(m.value ? t(s)("general.loading") : t(s)("orderLookup.search")), 1)
        ], 8, G)
      ], 32)),
      r.value ? (d(), l("div", J, [
        o("div", K, [
          o("h3", null, e(t(s)("orderLookup.orderFound")), 1),
          o("button", {
            type: "button",
            class: "c-btn c-btn--sm c-btn--secondary",
            onClick: P
          }, e(t(s)("orderLookup.searchAnother")), 1)
        ]),
        o("div", Q, [
          o("div", W, [
            o("span", X, e(t(s)("orderLookup.order")) + " #" + e(r.value._id), 1),
            o("span", {
              class: A(["order-lookup__status-badge", `order-lookup__status-badge--${r.value.status}`])
            }, e(D(r.value.status)), 3)
          ]),
          o("div", Y, [
            o("span", Z, e(t(s)("orderLookup.orderDate")) + ":", 1),
            o("span", oo, e(x(r.value.createdAt)), 1)
          ]),
          o("div", eo, [
            o("span", ro, e(t(s)("orderLookup.customer")) + ":", 1),
            o("span", so, e(r.value.customer.name), 1)
          ]),
          r.value.shipping?.address ? (d(), l("div", to, [
            o("h4", lo, e(t(s)("orderLookup.shippingAddress")), 1),
            o("address", ao, [
              h(e(r.value.shipping.address.line1), 1),
              a[3] || (a[3] = o("br", null, null, -1)),
              r.value.shipping.address.line2 ? (d(), l("span", uo, [
                h(e(r.value.shipping.address.line2), 1),
                a[2] || (a[2] = o("br", null, null, -1))
              ])) : n("", !0),
              h(" " + e(r.value.shipping.address.city), 1),
              r.value.shipping.address.state ? (d(), l("span", no, ", " + e(r.value.shipping.address.state), 1)) : n("", !0),
              a[4] || (a[4] = o("br", null, null, -1)),
              h(" " + e(r.value.shipping.address.postalCode), 1),
              a[5] || (a[5] = o("br", null, null, -1)),
              h(" " + e(r.value.shipping.address.country), 1)
            ]),
            r.value.shipping.method ? (d(), l("div", io, [
              o("span", po, e(t(s)("orderLookup.shippingMethod")) + ":", 1),
              o("span", _o, e(r.value.shipping.method), 1)
            ])) : n("", !0)
          ])) : n("", !0),
          r.value.items && r.value.items.length > 0 ? (d(), l("div", co, [
            o("h4", ko, e(t(s)("orderLookup.items")) + " (" + e(r.value.items.length) + ")", 1),
            o("div", ho, [
              (d(!0), l(y, null, C(r.value.items, (u, S) => (d(), l("div", {
                key: u.id,
                class: "order-lookup__item"
              }, [
                o("div", vo, [
                  o("span", mo, e(t(s)("orderLookup.item")) + " " + e(S + 1), 1),
                  o("span", fo, e(u.partsCount) + " " + e(t(s)("orderLookup.parts")), 1)
                ]),
                u.result?.stock && u.result.stock.length > 0 ? (d(), l("div", go, [
                  (d(!0), l(y, null, C(u.result.stock, (k) => (d(), l("div", {
                    key: k.id,
                    class: "order-lookup__stock-line"
                  }, e(k.q) + "x " + e(k.name || k.material) + " (" + e(k.l) + "×" + e(k.w) + ") ", 1))), 128))
                ])) : n("", !0),
                o("div", bo, e(g.formatPrice(u.pricing.subtotal)), 1),
                u.fileUrls?.pdf ? (d(), l("a", {
                  key: 1,
                  href: u.fileUrls.pdf,
                  target: "_blank",
                  class: "order-lookup__pdf-link"
                }, e(t(s)("orderLookup.viewPdf")), 9, Lo)) : n("", !0)
              ]))), 128))
            ])
          ])) : n("", !0),
          r.value.pdfUrl && !r.value.items?.length ? (d(), l("div", yo, [
            o("a", {
              href: r.value.pdfUrl,
              target: "_blank",
              class: "c-btn c-btn--secondary"
            }, e(t(s)("orderLookup.downloadPdf")), 9, Co)
          ])) : n("", !0),
          o("div", wo, [
            o("h4", Uo, e(t(s)("orderLookup.orderTotal")), 1),
            r.value.pricing.shippingCost ? (d(), l("div", Po, [
              o("span", null, e(t(s)("orderLookup.shipping")) + ":", 1),
              o("span", null, e(g.formatPrice(r.value.pricing.shippingCost)), 1)
            ])) : n("", !0),
            o("div", xo, [
              o("span", null, e(t(s)("orderLookup.total")) + ":", 1),
              o("span", null, e(g.formatPrice(r.value.pricing.total)), 1)
            ])
          ])
        ])
      ])) : n("", !0)
    ]));
  }
}), Ao = /* @__PURE__ */ V(Do, [["__scopeId", "data-v-5c3e5dc2"]]);
export {
  Ao as default
};
