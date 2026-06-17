import { d as F, y as H, l as I, o as i, c as a, a as l, t as r, b as d, F as y, f as _, w as z, z as b, s as O, g as Q } from "./vendor-vue-DcIxm_xE.js";
import { v as j, c as L, d as U, f as X } from "./InputUserGroup-BS7MVA1o.js";
const Y = { class: "inputs" }, q = {
  key: 0,
  class: "shape-name"
}, G = {
  key: 1,
  class: "empty"
}, J = {
  key: 2,
  class: "custom-products-list"
}, K = {
  key: 0,
  class: "image"
}, T = ["src", "alt"], W = { class: "details" }, Z = { class: "name" }, ee = {
  key: 0,
  class: "description"
}, se = {
  key: 1,
  class: "price"
}, te = { class: "control" }, ne = ["value", "onChange"], ie = ["value"], ae = ["value", "onInput"], oe = ["checked", "onChange"], ce = /* @__PURE__ */ F({
  __name: "CustomProducts",
  props: /* @__PURE__ */ b({
    inputShape: { default: null },
    products: { default: () => [] },
    findExtrasPrice: { type: Function, default: () => null },
    formatPrice: { type: Function, default: () => "" }
  }, {
    inputShape: {
      required: !0
    },
    inputShapeModifiers: {}
  }),
  emits: /* @__PURE__ */ b(["update:shape", "close"], ["update:inputShape"]),
  setup(f, { emit: C }) {
    const c = f, x = C, g = O(), u = H(f, "inputShape"), V = (s) => {
      const e = u.value;
      return e.extras || (e.extras = {}), e.extras[s] || (e.extras[s] = {}), e.extras[s][""] || (e.extras[s][""] = {}), e.extras[s][""];
    }, m = (s) => u.value?.extras?.[s.type]?.[""]?.[s._id], v = (s, e) => {
      const t = V(s.type);
      e === !1 || e === "" || e === 0 || e === null || Number.isNaN(e) ? delete t[s._id] : t[s._id] = e;
    }, P = (s) => {
      const e = m(s);
      return e !== void 0 && e !== !1 && e !== "" && e !== 0;
    }, N = (s) => !!m(s), S = (s, e) => v(s, e), M = (s) => {
      const e = m(s);
      return typeof e == "number" ? e : 0;
    }, B = (s, e) => v(s, e), D = (s) => {
      const e = m(s);
      return typeof e == "string" ? e : "";
    }, $ = (s, e) => v(s, e), w = (s) => s.pricing ? Object.entries(s.pricing).map(([e, t]) => ({
      key: e,
      label: e.replace(/\|/g, " • "),
      price: t
    })) : [], k = (s) => {
      const e = m(s);
      if (typeof e == "string" && e) {
        const t = c.findExtrasPrice(s.type, [s._id, ...e.split("|")]) ?? s.pricing?.[e] ?? null;
        return t !== null ? c.formatPrice(t) : "";
      }
      return typeof e == "number" && e > 0 && s.price ? `${e} × ${c.formatPrice(s.price)} = ${c.formatPrice(e * s.price)}` : e === !0 && s.price || s.price ? c.formatPrice(s.price) : "";
    }, A = (s) => {
      const e = [], t = u.value;
      if (!t) return e;
      if (s.rules) {
        const o = j(t, s.rules);
        if (!o.valid)
          if (o.message)
            e.push(L(
              o.violations.map(U),
              o.message
            ));
          else
            for (const h of o.violations)
              e.push(X(s.type, h));
      }
      const n = m(s);
      if (s.allowQuantity && typeof n == "number" && n > 0) {
        const o = R();
        s.rules?.holes && n > o.holes && e.push(
          `Quantity (${n}) exceeds the ${o.holes} hole${o.holes === 1 ? "" : "s"} on this part.`
        );
      }
      return e;
    }, R = () => {
      const s = u.value?.machining;
      if (!s) return { holes: 0, corners: 0, hingeHoles: 0 };
      const e = typeof s.toData == "function" ? s.toData() : s, t = Array.isArray(e?.holes) ? e.holes.length : 0, n = Array.isArray(e?.hingeHoles) ? e.hingeHoles.length : 0, o = Object.values(e?.corners ?? {}).filter((h) => h && h.type !== null && h.type !== void 0 && h.size > 0).length;
      return { holes: t, corners: o, hingeHoles: n };
    }, p = () => {
      g.value?.close(), x("close");
    }, E = (s) => {
      const e = g.value;
      if (!e) return;
      const t = e.getBoundingClientRect();
      s.clientX >= t.left && s.clientX <= t.right && s.clientY >= t.top && s.clientY <= t.bottom || p();
    };
    return I(() => {
      g.value?.open || g.value?.showModal();
    }), (s, e) => (i(), a("dialog", {
      id: "custom-products",
      ref_key: "dialogRef",
      ref: g,
      onCancel: z(p, ["prevent"]),
      onClick: E
    }, [
      l("div", Y, [
        l("button", {
          class: "c-btn close",
          type: "button",
          onClick: e[0] || (e[0] = (t) => p())
        }, "×"),
        u.value?.name ? (i(), a("div", q, r(u.value.name), 1)) : d("", !0),
        e[2] || (e[2] = l("h3", null, "Custom Products", -1)),
        f.products.length ? (i(), a("div", J, [
          (i(!0), a(y, null, _(f.products, (t) => (i(), a("div", {
            key: t._id,
            class: Q(["custom-product-card", { selected: P(t) }])
          }, [
            t.imageUrl ? (i(), a("div", K, [
              l("img", {
                src: t.imageUrl,
                alt: t.name
              }, null, 8, T)
            ])) : d("", !0),
            l("div", W, [
              l("div", Z, r(t.name), 1),
              t.description ? (i(), a("div", ee, r(t.description), 1)) : d("", !0),
              k(t) ? (i(), a("div", se, r(k(t)), 1)) : d("", !0),
              (i(!0), a(y, null, _(A(t), (n, o) => (i(), a("div", {
                key: o,
                class: "validation-message"
              }, r(n), 1))), 128))
            ]),
            l("div", te, [
              t.labels?.length ? (i(), a("select", {
                key: 0,
                value: D(t),
                onChange: (n) => $(t, n.target.value)
              }, [
                e[1] || (e[1] = l("option", { value: "" }, "None", -1)),
                (i(!0), a(y, null, _(w(t), (n) => (i(), a("option", {
                  key: n.key,
                  value: n.key
                }, r(n.label) + " " + r(n.price ? "(" + f.formatPrice(n.price) + ")" : ""), 9, ie))), 128))
              ], 40, ne)) : t.allowQuantity ? (i(), a("input", {
                key: 1,
                type: "number",
                min: "0",
                step: "1",
                value: M(t),
                onInput: (n) => B(t, n.target.valueAsNumber)
              }, null, 40, ae)) : (i(), a("input", {
                key: 2,
                type: "checkbox",
                checked: N(t),
                onChange: (n) => S(t, n.target.checked)
              }, null, 40, oe))
            ])
          ], 2))), 128))
        ])) : (i(), a("div", G, " No custom products are available for this material. "))
      ])
    ], 544));
  }
});
export {
  ce as default
};
