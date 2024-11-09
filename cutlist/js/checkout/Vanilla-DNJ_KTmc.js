import { C as l, m as u, g as i, c as s, a as g, _ as h, r as f, o as d, b as m } from "./main-Da74uB3y.js";
const p = {
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
      u.call(this, t), this.stock = t.stock, this.pricing.banding = i(t, ["banding", "pricing"]), this.pricing.finish = i(t, ["finish", "pricing"]), this.pricing.machining = i(t, ["machining", "pricing"]), s(t, ["options", "currency"]) && (this.currency = i(t, ["options", "currency"])), s(t, ["options", "locale"]) && (this.locale = i(t, ["options", "locale"]).replace("_", "-")), this.$nextTick(() => {
        const n = g.call(this, "calculator");
        n && n.init(t);
      });
    },
    calculating() {
      const t = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(t);
    },
    result(t) {
      var o, r;
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
      ), (o = t == null ? void 0 : t.metadata) != null && o.bandingLengthByType)
        for (const [e, a] of Object.entries(t.metadata.bandingLengthByType)) {
          if (!s(this.pricing, ["banding", e])) {
            this.error(`Banding price ${e} not found`);
            continue;
          }
          n.checkout.formattedBandingCost[e] = (a / 1e3 * this.pricing.banding[e]).toLocaleString(this.locale, { style: "currency", currency: this.currency });
        }
      if ((r = t == null ? void 0 : t.metadata) != null && r.finishAreaByType)
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
      if (t === !0) return "";
      try {
        n = n.replace("_", "-");
        const c = Number(t);
        return !c && c !== 0 ? "" : isNaN(c) ? (console.error("formatPrice - invalid price:", t), "") : c.toLocaleString(n, {
          style: "currency",
          currency: this.currency
        });
      } catch (c) {
        return console.error("Error formatting price:", c), "";
      }
    },
    findExtrasPrice(t, n) {
      var r;
      if (!((r = this.pricing) != null && r[t])) return null;
      const c = n.join("|");
      return i(this.pricing, [t, c]) || null;
    }
  }
};
function y(t, n, c, o, r, e) {
  const a = f("CheckoutCalculator");
  return d(), m(a, {
    ref: "calculator",
    debug: r.debug,
    stock: r.stock,
    "find-extras-price": e.findExtrasPrice,
    "format-price": e.formatPrice,
    onLog: e.log,
    onError: e.error,
    onDebug: e.toggleDebug,
    onResult: e.result,
    onCalculating: e.calculating
  }, null, 8, ["debug", "stock", "find-extras-price", "format-price", "onLog", "onError", "onDebug", "onResult", "onCalculating"]);
}
const k = /* @__PURE__ */ h(p, [["render", y]]);
export {
  k as default
};
