import { C as l, m as u, g as o, c as s, a as g, _ as h, r as d, o as f, b as p } from "./main-DZxDd4D_.js";
const m = {
  name: "Vanilla",
  components: {
    CheckoutCalculator: l
  },
  data() {
    return {
      debug: !1,
      stock: [],
      // materials: [],
      pricing: {
        banding: null,
        finish: null,
        machining: null
      },
      currency: "USD",
      locale: "en-US"
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
    const t = new URLSearchParams(window.location.search);
    this.debug = !!t.get("debug"), this.debug && console.log("Smartcut - debug enabled");
  },
  mounted() {
    window.smartcutCheckout = this;
    const t = new CustomEvent("smartcut/ready");
    window.dispatchEvent(t);
  },
  methods: {
    log(t) {
      console.log(...t);
    },
    error(t) {
      console.warn(t);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    init(t) {
      u.call(this, t), this.stock = t.stock, this.pricing.banding = o(t, ["banding", "pricing"]), this.pricing.finish = o(t, ["finish", "pricing"]), this.pricing.machining = o(t, ["machining", "pricing"]), s(t, ["options", "currency"]) && (this.currency = o(t, ["options", "currency"])), s(t, ["options", "locale"]) && (this.locale = o(t, ["options", "locale"]).replace("_", "-")), this.$nextTick(() => {
        const n = g.call(this, "calculator");
        n && n.init(t);
      });
    },
    calculating() {
      const t = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(t);
    },
    result(t) {
      var r, i;
      const n = t;
      if (n.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, n.checkout.formattedTotalStockCost = t.metadata.totalStockCost.toLocaleString(
        this.locale,
        {
          style: "currency",
          currency: this.currency
        }
      ), (r = t == null ? void 0 : t.metadata) != null && r.bandingLengthByType)
        for (const [e, a] of Object.entries(t.metadata.bandingLengthByType)) {
          if (!s(this.pricing, ["banding", e])) {
            this.error(`Banding price ${e} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[e] = (a / 1e3 * this.pricing.banding[e]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      if ((i = t == null ? void 0 : t.metadata) != null && i.finishAreaByType)
        for (const [e, a] of Object.entries(t.metadata.finishAreaByType)) {
          if (!s(this.pricing, ["finish", e])) {
            this.error(`Finish price ${e} not found`);
            continue;
          }
          n.checkout.formattedFinishCost[e] = (a / 1e6 * this.pricing.finish[e]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      const c = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(n))
      });
      window.dispatchEvent(c);
    },
    formatPrice(t = 0, n = this.locale) {
      try {
        n = n.replace("_", "-");
        const c = Number(t);
        return c ? isNaN(c) ? (console.error("Invalid price:", t), "") : c.toLocaleString(n, {
          style: "currency",
          currency: this.currency
        }) : "";
      } catch (c) {
        return console.error("Error formatting price:", c), "";
      }
    },
    findExtrasPrice(t, n) {
      var i;
      if (!((i = this.pricing) != null && i[t])) return null;
      const c = n.join("|");
      return o(this.pricing, [t, c]) || null;
    }
  }
};
function y(t, n, c, r, i, e) {
  const a = d("CheckoutCalculator");
  return f(), p(a, {
    ref: "calculator",
    debug: i.debug,
    stock: i.stock,
    onLog: e.log,
    onError: e.error,
    onDebug: e.toggleDebug,
    onResult: e.result,
    onCalculating: e.calculating
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult", "onCalculating"]);
}
const k = /* @__PURE__ */ h(m, [["render", y]]);
export {
  k as default
};
