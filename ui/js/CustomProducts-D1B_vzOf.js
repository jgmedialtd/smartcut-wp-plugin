import { d as H, q as b, s as I, f as R, r as O, c as i, o as a, b as l, a as d, t as r, F as y, k as _, v as Q, l as j } from "./vendor-vue-Tt3m9hlc.js";
import { v as q, f as z } from "./result.zod-B0Qqh9wj.js";
const L = { class: "inputs" }, U = {
  key: 0,
  class: "shape-name"
}, X = {
  key: 1,
  class: "empty"
}, Y = {
  key: 2,
  class: "custom-products-list"
}, G = {
  key: 0,
  class: "image"
}, J = ["src", "alt"], K = { class: "details" }, T = { class: "name" }, W = {
  key: 0,
  class: "description"
}, Z = {
  key: 1,
  class: "price"
}, ee = { class: "control" }, te = ["value", "onChange"], se = ["value"], ne = ["value", "onInput"], ie = ["checked", "onChange"], le = /* @__PURE__ */ H({
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
  setup(m, { emit: C }) {
    const c = m, x = C, g = O(), u = I(m, "inputShape"), V = (t) => {
      const e = u.value;
      return e.extras || (e.extras = {}), e.extras[t] || (e.extras[t] = {}), e.extras[t][""] || (e.extras[t][""] = {}), e.extras[t][""];
    }, h = (t) => u.value?.extras?.[t.type]?.[""]?.[t._id], v = (t, e) => {
      const s = V(t.type);
      e === !1 || e === "" || e === 0 || e === null || Number.isNaN(e) ? delete s[t._id] : s[t._id] = e;
    }, P = (t) => {
      const e = h(t);
      return e !== void 0 && e !== !1 && e !== "" && e !== 0;
    }, N = (t) => !!h(t), S = (t, e) => v(t, e), M = (t) => {
      const e = h(t);
      return typeof e == "number" ? e : 0;
    }, B = (t, e) => v(t, e), $ = (t) => {
      const e = h(t);
      return typeof e == "string" ? e : "";
    }, D = (t, e) => v(t, e), A = (t) => t.pricing ? Object.entries(t.pricing).map(([e, s]) => ({
      key: e,
      label: e.replace(/\|/g, " • "),
      price: s
    })) : [], k = (t) => {
      const e = h(t);
      if (typeof e == "string" && e) {
        const s = c.findExtrasPrice(t.type, [t._id, ...e.split("|")]) ?? t.pricing?.[e] ?? null;
        return s !== null ? c.formatPrice(s) : "";
      }
      return typeof e == "number" && e > 0 && t.price ? `${e} × ${c.formatPrice(t.price)} = ${c.formatPrice(e * t.price)}` : e === !0 && t.price || t.price ? c.formatPrice(t.price) : "";
    }, w = (t) => {
      const e = [], s = u.value;
      if (!s) return e;
      if (t.rules) {
        const o = q(s, t.rules);
        if (!o.valid)
          if (o.message)
            e.push(o.message);
          else
            for (const f of o.violations)
              e.push(z(t.type, f));
      }
      const n = h(t);
      if (t.allowQuantity && typeof n == "number" && n > 0) {
        const o = E();
        t.rules?.holes && n > o.holes && e.push(
          `Quantity (${n}) exceeds the ${o.holes} hole${o.holes === 1 ? "" : "s"} on this part.`
        );
      }
      return e;
    }, E = () => {
      const t = u.value?.machining;
      if (!t) return { holes: 0, corners: 0, hingeHoles: 0 };
      const e = typeof t.toData == "function" ? t.toData() : t, s = Array.isArray(e?.holes) ? e.holes.length : 0, n = Array.isArray(e?.hingeHoles) ? e.hingeHoles.length : 0, o = Object.values(e?.corners ?? {}).filter((f) => f && f.type !== null && f.type !== void 0 && f.size > 0).length;
      return { holes: s, corners: o, hingeHoles: n };
    }, p = () => {
      g.value?.close(), x("close");
    }, F = (t) => {
      const e = g.value;
      if (!e) return;
      const s = e.getBoundingClientRect();
      t.clientX >= s.left && t.clientX <= s.right && t.clientY >= s.top && t.clientY <= s.bottom || p();
    };
    return R(() => {
      g.value?.open || g.value?.showModal();
    }), (t, e) => (a(), i("dialog", {
      id: "custom-products",
      ref_key: "dialogRef",
      ref: g,
      onCancel: Q(p, ["prevent"]),
      onClick: F
    }, [
      l("div", L, [
        l("button", {
          class: "c-btn close",
          type: "button",
          onClick: e[0] || (e[0] = (s) => p())
        }, "×"),
        u.value?.name ? (a(), i("div", U, r(u.value.name), 1)) : d("", !0),
        e[2] || (e[2] = l("h3", null, "Custom Products", -1)),
        m.products.length ? (a(), i("div", Y, [
          (a(!0), i(y, null, _(m.products, (s) => (a(), i("div", {
            key: s._id,
            class: j(["custom-product-card", { selected: P(s) }])
          }, [
            s.imageUrl ? (a(), i("div", G, [
              l("img", {
                src: s.imageUrl,
                alt: s.name
              }, null, 8, J)
            ])) : d("", !0),
            l("div", K, [
              l("div", T, r(s.name), 1),
              s.description ? (a(), i("div", W, r(s.description), 1)) : d("", !0),
              k(s) ? (a(), i("div", Z, r(k(s)), 1)) : d("", !0),
              (a(!0), i(y, null, _(w(s), (n, o) => (a(), i("div", {
                key: o,
                class: "validation-message"
              }, r(n), 1))), 128))
            ]),
            l("div", ee, [
              s.labels?.length ? (a(), i("select", {
                key: 0,
                value: $(s),
                onChange: (n) => D(s, n.target.value)
              }, [
                e[1] || (e[1] = l("option", { value: "" }, "None", -1)),
                (a(!0), i(y, null, _(A(s), (n) => (a(), i("option", {
                  key: n.key,
                  value: n.key
                }, r(n.label) + " " + r(n.price ? "(" + m.formatPrice(n.price) + ")" : ""), 9, se))), 128))
              ], 40, te)) : s.allowQuantity ? (a(), i("input", {
                key: 1,
                type: "number",
                min: "0",
                step: "1",
                value: M(s),
                onInput: (n) => B(s, n.target.valueAsNumber)
              }, null, 40, ne)) : (a(), i("input", {
                key: 2,
                type: "checkbox",
                checked: N(s),
                onChange: (n) => S(s, n.target.checked)
              }, null, 40, ie))
            ])
          ], 2))), 128))
        ])) : (a(), i("div", X, " No custom products are available for this material. "))
      ])
    ], 544));
  }
});
export {
  le as default
};
