import { C as s, g as l, _ as a, r as u, o as g, c as h } from "./main-BZjECATf.js";
const d = {
  name: "Vanilla",
  components: {
    CheckoutCalculator: s
  },
  data() {
    return {
      debug: !1,
      stock: [],
      // materials: [],
      bandingPricing: null,
      machiningPricing: null,
      currency: "USD",
      locale: "en-US"
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
    const n = new URLSearchParams(window.location.search);
    this.debug = !!n.get("debug"), this.debug && console.log("Smartcut - debug enabled");
  },
  mounted() {
    window.smartcutCheckout = this;
    const n = new CustomEvent("smartcut/ready");
    window.dispatchEvent(n);
  },
  methods: {
    log(n) {
      console.log(...n);
    },
    error(n) {
      console.warn(n);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    init(n) {
      this.stock = n.stock, this.bandingPricing = (n == null ? void 0 : n.bandingPricing) ?? null, this.machiningPricing = (n == null ? void 0 : n.machiningPricing) ?? null, n.options.currency && (this.currency = n.options.currency), n.options.locale && (this.locale = n.options.locale.replace("_", "-"));
      const e = l.call(this, "calculator");
      e && e.init(n);
    },
    calculating() {
      const n = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(n);
    },
    result(n) {
      var r;
      const e = n;
      if (e.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {}
      }, e.checkout.formattedTotalStockCost = n.metadata.totalStockCost.toLocaleString(
        this.locale,
        {
          style: "currency",
          currency: this.currency
        }
      ), (r = n == null ? void 0 : n.metadata) != null && r.bandingLengthByType)
        for (const [o, c] of Object.entries(n.metadata.bandingLengthByType))
          e.checkout.formattedBandingCost[o] = (c / 1e3 * this.bandingPricing[o]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
      const t = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(e))
      });
      window.dispatchEvent(t);
    },
    formatPrice(n = 0, e = this.locale) {
      try {
        e = e.replace("_", "-");
        const t = Number(n);
        return t ? isNaN(t) ? (console.error("Invalid price:", n), "") : t.toLocaleString(e, {
          style: "currency",
          currency: this.currency
        }) : "";
      } catch (t) {
        return console.error("Error formatting price:", t), "";
      }
    },
    findBandingPrice(n) {
      if (!this.bandingPricing)
        return null;
      const e = n.join("|");
      return this.bandingPricing[e] !== void 0 ? this.bandingPricing[e].toString() : null;
    }
  }
};
function m(n, e, t, r, o, c) {
  const i = u("CheckoutCalculator");
  return g(), h(i, {
    ref: "calculator",
    debug: o.debug,
    stock: o.stock,
    onLog: c.log,
    onError: c.error,
    onDebug: c.toggleDebug,
    onResult: c.result,
    onCalculating: c.calculating
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult", "onCalculating"]);
}
const b = /* @__PURE__ */ a(d, [["render", m]]);
export {
  b as default
};
