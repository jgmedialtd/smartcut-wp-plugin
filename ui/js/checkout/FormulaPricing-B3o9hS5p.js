import { F as U, _ as B } from "./EcommerceCalculator-DwC9zTyQ.js";
import { t as O } from "./i18n-CYKv7Ga8.js";
import { d as G, S as z, w as Q, r as m, c as w, h as W, b as p, o, e as _, j as h, i as X, u as b, g as Y, a as D, F as j, q as L, t as s, n as V } from "./vendor-vue-CjllP6Mc.js";
const Z = {
  key: 0,
  class: "debug"
}, ee = { id: "formula-pricing" }, ae = {
  key: 1,
  class: "extras"
}, te = { class: "heading" }, le = { id: "hardware-total" }, re = { class: "heading panels" }, ne = !1, ie = /* @__PURE__ */ G({
  __name: "FormulaPricing",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (d) => d.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(d, { emit: H }) {
    const R = Y(() => import("./ObjectViewer-CQl5kqFl.js")), u = d, k = H, K = z("calculator"), n = w(() => K()), q = m("production");
    let i = null;
    const v = m(null), r = m([]), g = m(!1), F = m(""), C = w(() => {
      if (!g.value || !r.value.length || r.value.every((t) => t.value === null)) return null;
      const e = I();
      return V(() => k("panel-result", e)), e;
    }), y = w(() => {
      if (!n.value || !g.value || !r.value.length || r.value.every((t) => t.value === null)) return;
      const e = J();
      return V(() => k("hardware-result", e, x.value)), e;
    }), x = w(() => {
      if (y.value)
        return Object.values(y.value).reduce((e, t) => e + t.totalCost, 0);
    });
    Q(C, (e) => {
      if (!g.value || !e || !n.value || !n.value?.inputShapes) return;
      const t = (a) => a?.name ? a.name.toLowerCase() : "", l = new Map(
        n.value.inputShapes.map((a) => [t(a), a])
      ), f = /* @__PURE__ */ new Set();
      for (const a of Object.values(C.value)) {
        if (!a.name) continue;
        const S = t(a), c = l.get(S), P = {
          ...a,
          name: a.name.toUpperCase() || c?.name.toUpperCase(),
          material: a.material?.toUpperCase() || c?.material?.toUpperCase(),
          bandingOptions: a.bandingOptions || {},
          finishOptions: a.finishOptions || {},
          orientationLock: a.orientationLock || null,
          notes: F.value,
          readonly: !0
        }, T = c || n.value.createInputShape(P);
        if (c) {
          Object.assign(c, P);
          for (const $ of ["banding", "finish"])
            n.value.initExtrasOptions(c, $);
        } else
          n.value.inputShapes.push(T);
        f.add(S);
      }
      n.value.inputShapes = n.value.inputShapes.filter(
        (a) => f.has(t(a))
      );
    }, { immediate: !1 }), W(() => M());
    const N = (e) => {
      u.debug && console.log(e);
    }, A = () => {
      r.value = Object.values(v.value.inputs).map((e) => ({
        value: e.default ?? null
      })), console.log(r.value);
    }, E = (e, t) => {
      r.value[e] && (r.value[e].value = t);
    }, I = () => {
      try {
        return i.calculatePanelsFromFields(r.value);
      } catch (e) {
        return n.value.inputShapes.length = 0, console.error(e), null;
      }
    }, J = () => {
      try {
        return i.calculateHardwareFromFields(r.value);
      } catch (e) {
        return console.error(e), null;
      }
    }, M = async () => {
      if (!u.url && !u.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      u.url ? (N(`SmartCut - Formula calculator init from url: ${u.url}`), i = new U({ url: u.url }), v.value = await i.getSpec()) : u.spec && (N("SmartCut - Formula calculator init with JSON"), i = new U({ spec: u.spec }), v.value = await i.getSpec()), A(), g.value = !0;
    };
    return (e, t) => (o(), p(j, null, [
      q.value === "development" && ne ? (o(), p("div", Z, [
        t[1] || (t[1] = h("div", null, "Developer information", -1)),
        X(b(R), {
          data: [C.value],
          paths: ["panelResult"]
        }, null, 8, ["data"])
      ])) : _("", !0),
      h("div", ee, [
        v.value?.projectName ? (o(), D(B, {
          key: 0,
          id: "project-name",
          type: "string",
          label: "Project name",
          placeholder: "Name",
          value: F.value,
          "onUpdate:value": t[0] || (t[0] = (l) => F.value = l)
        }, null, 8, ["value"])) : _("", !0),
        (o(!0), p(j, null, L(v.value?.inputs, (l, f, a) => (o(), D(B, {
          id: "formula-field-" + a,
          key: a,
          type: l.type,
          label: l.label,
          placeholder: l.label,
          min: l.min ?? 0,
          max: l.max ?? null,
          default: l.default ?? 0,
          value: r.value[a]?.value,
          "onUpdate:value": (S) => E(a, S)
        }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]))), 128)),
        y.value ? (o(), p("div", ae, [
          h("div", te, s(b(O)("Hardware")), 1),
          (o(!0), p(j, null, L(y.value, (l, f) => (o(), p("div", { key: f }, s(l.name) + " x" + s(l.q) + " = " + s(d.formatPrice(l.totalCost)), 1))), 128)),
          h("div", le, s(b(O)("Hardware total")) + " = " + s(d.formatPrice(x.value)), 1)
        ])) : _("", !0),
        h("div", re, s(b(O)("Panels")), 1)
      ])
    ], 64));
  }
});
export {
  ie as default
};
