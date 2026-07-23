import { d as T, y as U, l as j, z as K, o as i, c as o, a as l, t as r, b as p, F as k, f as _, A as X, u as v, w as Y, B as V, s as q, g as G } from "./vendor-vue-CeWGZ1lm.js";
import { v as J, c as W, d as Z, f as ee } from "./InputUserGroup-Cp-L9c2U.js";
import { a as se } from "./EcommerceCalculator-Cpt6HXtv.js";
const te = { class: "inputs" }, ne = {
  key: 0,
  class: "shape-name"
}, ie = {
  key: 1,
  class: "empty"
}, oe = {
  key: 2,
  class: "custom-products-list"
}, ae = {
  key: 0,
  class: "image"
}, le = ["src", "alt"], re = { class: "details" }, ce = { class: "name" }, ue = {
  key: 0,
  class: "description"
}, me = {
  key: 1,
  class: "price"
}, ge = { class: "control" }, fe = ["value", "onChange"], he = ["value"], de = ["value", "onInput"], pe = ["checked", "onChange"], _e = /* @__PURE__ */ T({
  __name: "CustomProducts",
  props: /* @__PURE__ */ V({
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
  emits: /* @__PURE__ */ V(["update:shape", "close"], ["update:inputShape"]),
  setup(f, { emit: P }) {
    const c = f, S = P, h = q(), { show: D, close: N, onToggle: b, onClosed: C, cleanup: B, isShown: w } = se(h), u = U(f, "inputShape"), M = (s) => {
      const e = u.value;
      return e.extras || (e.extras = {}), e.extras[s] || (e.extras[s] = {}), e.extras[s][""] || (e.extras[s][""] = {}), e.extras[s][""];
    }, m = (s) => u.value?.extras?.[s.type]?.[""]?.[s._id], y = (s, e) => {
      const t = M(s.type);
      e === !1 || e === "" || e === 0 || e === null || Number.isNaN(e) ? delete t[s._id] : t[s._id] = e;
    }, $ = (s) => {
      const e = m(s);
      return e !== void 0 && e !== !1 && e !== "" && e !== 0;
    }, A = (s) => !!m(s), R = (s, e) => y(s, e), E = (s) => {
      const e = m(s);
      return typeof e == "number" ? e : 0;
    }, F = (s, e) => y(s, e), H = (s) => {
      const e = m(s);
      return typeof e == "string" ? e : "";
    }, I = (s, e) => y(s, e), z = (s) => s.pricing ? Object.entries(s.pricing).map(([e, t]) => ({
      key: e,
      label: e.replace(/\|/g, " • "),
      price: t
    })) : [], x = (s) => {
      const e = m(s);
      if (typeof e == "string" && e) {
        const t = c.findExtrasPrice(s.type, [s._id, ...e.split("|")]) ?? s.pricing?.[e] ?? null;
        return t !== null ? c.formatPrice(t) : "";
      }
      return typeof e == "number" && e > 0 && s.price ? `${e} × ${c.formatPrice(s.price)} = ${c.formatPrice(e * s.price)}` : e === !0 && s.price || s.price ? c.formatPrice(s.price) : "";
    }, L = (s) => {
      const e = [], t = u.value;
      if (!t) return e;
      if (s.rules) {
        const a = J(t, s.rules);
        if (!a.valid)
          if (a.message)
            e.push(W(
              a.violations.map(Z),
              a.message
            ));
          else
            for (const g of a.violations)
              e.push(ee(s.type, g));
      }
      const n = m(s);
      if (s.allowQuantity && typeof n == "number" && n > 0) {
        const a = O();
        s.rules?.holes && n > a.holes && e.push(
          `Quantity (${n}) exceeds the ${a.holes} hole${a.holes === 1 ? "" : "s"} on this part.`
        );
      }
      return e;
    }, O = () => {
      const s = u.value?.machining;
      if (!s) return { holes: 0, corners: 0, hingeHoles: 0 };
      const e = typeof s.toData == "function" ? s.toData() : s, t = Array.isArray(e?.holes) ? e.holes.length : 0, n = Array.isArray(e?.hingeHoles) ? e.hingeHoles.length : 0, a = Object.values(e?.corners ?? {}).filter((g) => g && g.type !== null && g.type !== void 0 && g.size > 0).length;
      return { holes: t, corners: a, hingeHoles: n };
    }, d = () => {
      N(), S("close");
    }, Q = (s) => {
      const e = h.value;
      if (!e) return;
      const t = e.getBoundingClientRect();
      s.clientX >= t.left && s.clientX <= t.right && s.clientY >= t.top && s.clientY <= t.bottom || d();
    };
    return j(() => {
      w(h.value) || D();
    }), K(() => B()), (s, e) => (i(), o("dialog", {
      id: "custom-products",
      ref_key: "dialogRef",
      ref: h,
      popover: "manual",
      onCancel: Y(d, ["prevent"]),
      onClick: Q,
      onToggle: e[1] || (e[1] = //@ts-ignore
      (...t) => v(b) && v(b)(...t)),
      onClose: e[2] || (e[2] = //@ts-ignore
      (...t) => v(C) && v(C)(...t)),
      onKeydown: X(d, ["esc"])
    }, [
      l("div", te, [
        l("button", {
          class: "c-btn close",
          type: "button",
          onClick: e[0] || (e[0] = (t) => d())
        }, "×"),
        u.value?.name ? (i(), o("div", ne, r(u.value.name), 1)) : p("", !0),
        e[4] || (e[4] = l("h3", null, "Custom Products", -1)),
        f.products.length ? (i(), o("div", oe, [
          (i(!0), o(k, null, _(f.products, (t) => (i(), o("div", {
            key: t._id,
            class: G(["custom-product-card", { selected: $(t) }])
          }, [
            t.imageUrl ? (i(), o("div", ae, [
              l("img", {
                src: t.imageUrl,
                alt: t.name
              }, null, 8, le)
            ])) : p("", !0),
            l("div", re, [
              l("div", ce, r(t.name), 1),
              t.description ? (i(), o("div", ue, r(t.description), 1)) : p("", !0),
              x(t) ? (i(), o("div", me, r(x(t)), 1)) : p("", !0),
              (i(!0), o(k, null, _(L(t), (n, a) => (i(), o("div", {
                key: a,
                class: "validation-message"
              }, r(n), 1))), 128))
            ]),
            l("div", ge, [
              t.labels?.length ? (i(), o("select", {
                key: 0,
                value: H(t),
                onChange: (n) => I(t, n.target.value)
              }, [
                e[3] || (e[3] = l("option", { value: "" }, "None", -1)),
                (i(!0), o(k, null, _(z(t), (n) => (i(), o("option", {
                  key: n.key,
                  value: n.key
                }, r(n.label) + " " + r(n.price ? "(" + f.formatPrice(n.price) + ")" : ""), 9, he))), 128))
              ], 40, fe)) : t.allowQuantity ? (i(), o("input", {
                key: 1,
                type: "number",
                min: "0",
                step: "1",
                value: E(t),
                onInput: (n) => F(t, n.target.valueAsNumber)
              }, null, 40, de)) : (i(), o("input", {
                key: 2,
                type: "checkbox",
                checked: A(t),
                onChange: (n) => R(t, n.target.checked)
              }, null, 40, pe))
            ])
          ], 2))), 128))
        ])) : (i(), o("div", ie, " No custom products are available for this material. "))
      ])
    ], 544));
  }
});
export {
  _e as default
};
