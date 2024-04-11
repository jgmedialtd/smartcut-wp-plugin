import { C as s, _ as n, r as u, o as l, c as a } from "./main-BY18-2Go.js";
const g = {
  name: "Vanilla",
  components: {
    CheckoutCalculator: s
  },
  data() {
    return {
      debug: !0,
      stock: []
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
  },
  mounted() {
    window.smartcutCheckout = this;
  },
  methods: {
    log(e) {
      console.log(...e);
    },
    error(e) {
      console.error(e);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    result(e) {
      const t = new CustomEvent("smartcut-result", { detail: e });
      window.dispatchEvent(t);
    },
    init(e) {
      this.stock = e.stock, this.$refs.calculator.init(e);
    }
  }
};
function d(e, t, i, h, r, o) {
  const c = u("CheckoutCalculator");
  return l(), a(c, {
    ref: "calculator",
    debug: r.debug,
    stock: r.stock,
    onLog: o.log,
    onError: o.error,
    onDebug: o.toggleDebug,
    onResult: o.result
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult"]);
}
const k = /* @__PURE__ */ n(g, [["render", d]]);
export {
  k as default
};
