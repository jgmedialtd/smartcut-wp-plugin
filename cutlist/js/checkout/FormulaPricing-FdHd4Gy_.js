var F = Object.defineProperty;
var b = (t, e, o) => e in t ? F(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var n = (t, e, o) => b(t, typeof e != "symbol" ? e + "" : e, o);
import { p as y, I as j, d as g, _ as $, r as m, o as a, b as h, h as k, F as I, f as O, N as _, e as C, i as V } from "./main-BZ3wIwF-.js";
class M {
  constructor(e) {
    n(this, "url");
    n(this, "spec");
    this.url = e;
  }
  async getSpec() {
    if (!this.url) return null;
    try {
      const e = await fetch(this.url);
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`);
      const o = await e.json();
      return this.spec = o, o;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  /* calculate( userInputs )
  	{
  
  	} */
  evaluateFormula(e, o) {
    const l = Object.keys(o), c = Object.values(o), i = `
            const max = Math.max;
            const min = Math.min;
            const round = Math.round;
            const ceil = Math.ceil;
            const floor = Math.floor;
        `;
    try {
      return new Function(
        ...l,
        `${i} return ${e};`
      )(...c);
    } catch {
      throw new Error(`Invalid formula: ${e}`);
    }
  }
}
const N = g(() => import("./ObjectViewer-Bu9x0GW7.js")), B = y({
  name: "FormulaPricing",
  components: {
    InputField: j,
    ObjectViewer: N
  },
  data() {
    return {
      env: "production",
      showDevInfo: !0,
      spec: null,
      fields: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const t = new M("http://localhost:9002/example-formula.json");
      this.spec = await t.getSpec(), this.createFields();
    },
    createFields() {
      this.fields = Object.values(this.spec.inputs).map((t) => ({
        value: t.value
      }));
    }
  }
}), D = {
  key: 0,
  class: "debug"
};
function E(t, e, o, l, c, i) {
  var u;
  const f = m("InputField"), v = m("ObjectViewer");
  return t.env === "development" && t.showDevInfo ? (a(), h("div", D, [
    e[0] || (e[0] = k("div", null, "Developer information", -1)),
    (a(!0), h(I, null, O((u = t.spec) == null ? void 0 : u.inputs, (s, r) => {
      var p, d;
      return a(), _(f, {
        id: "formula-field-" + r,
        key: r,
        type: s.type,
        label: s.label,
        placeholder: s.label,
        value: (d = (p = t.fields) == null ? void 0 : p[r]) == null ? void 0 : d.value,
        onUpdate: (w) => t.fields[r].value = w
      }, null, 8, ["id", "type", "label", "placeholder", "value", "onUpdate"]);
    }), 128)),
    C(v, {
      data: [t.spec],
      paths: ["this.spec"]
    }, null, 8, ["data"])
  ])) : V("", !0);
}
const T = /* @__PURE__ */ $(B, [["render", E]]);
export {
  T as default
};
