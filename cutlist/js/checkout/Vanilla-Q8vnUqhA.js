import { C as CheckoutCalculator, _ as _export_sfc, r as resolveComponent, o as openBlock, c as createBlock } from "./main-7sEo_shw.js";
const _sfc_main = {
  name: "Vanilla",
  components: {
    CheckoutCalculator
  },
  data() {
    return {
      debug: true,
      stock: []
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev");
  },
  mounted() {
    console.log("Launching checkout...");
  },
  methods: {
    log(message) {
      console.log(message);
    },
    error(message) {
      console.error(message);
    },
    toggleDebug() {
      this.debug = !this.debug;
    },
    result(result) {
      console.log(result);
      const event = new CustomEvent("result", { detail: result });
      window.smartcutCheckout.dispatchEvent(event);
    },
    init(data) {
      this.stock = data.stock;
      this.$refs.calculator.init(data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckoutCalculator = resolveComponent("CheckoutCalculator");
  return openBlock(), createBlock(_component_CheckoutCalculator, {
    ref: "calculator",
    debug: $data.debug,
    stock: $data.stock,
    onLog: $options.log,
    onError: $options.error,
    onDebug: $options.toggleDebug,
    onResult: $options.result
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult"]);
}
const Vanilla = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Vanilla as default
};
