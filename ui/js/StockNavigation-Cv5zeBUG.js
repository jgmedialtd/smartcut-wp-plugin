import { d as m, c as o, o as s, F as p, k as y, n as k, l as _, b as r, z as b, t as c, A as v } from "./vendor-vue-BgOQH8dC.js";
const S = { id: "mini-stock-nav" }, f = ["onMousedown"], h = { class: "id" }, I = /* @__PURE__ */ m({
  __name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(i, { emit: l }) {
    const e = i, d = l, u = (a) => {
      d("show-stock", a);
    };
    return (a, g) => (s(), o("div", S, [
      (s(!0), o(p, null, y(e.stockList, (t, n) => (s(), o("button", {
        type: "button",
        key: n,
        class: _(["c-btn c-btn--col-4 c-btn--sm", { selected: t.autoId === e.activeStockId }]),
        style: k({
          backgroundColor: t.autoId === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (w) => u(t.autoId)
      }, [
        r("div", h, c(n + 1), 1),
        b(r("div", { class: "stack" }, c(t.stack.number), 513), [
          [v, typeof t?.stack?.number == "number" && t.stack.number > 1]
        ])
      ], 46, f))), 128))
    ]));
  }
});
export {
  I as default
};
