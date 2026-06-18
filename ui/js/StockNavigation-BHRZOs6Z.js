import { d as m, o, c as s, F as p, f as y, n as k, g as v, a as r, t as c, h as _, v as S } from "./vendor-vue-D6ZfZC0P.js";
const b = { id: "mini-stock-nav" }, f = ["onMousedown"], h = { class: "id" }, I = /* @__PURE__ */ m({
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
  setup(i, { emit: d }) {
    const e = i, l = d, u = (a) => {
      l("show-stock", a);
    };
    return (a, g) => (o(), s("div", b, [
      (o(!0), s(p, null, y(e.stockList, (t, n) => (o(), s("button", {
        type: "button",
        key: n,
        class: v(["c-btn c-btn--col-4 c-btn--sm", { selected: t.autoId === e.activeStockId }]),
        style: k({
          backgroundColor: t.autoId === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (w) => u(t.autoId)
      }, [
        r("div", h, c(n + 1), 1),
        _(r("div", { class: "stack" }, c(t.stack.number), 513), [
          [S, typeof t?.stack?.number == "number" && t.stack.number > 1]
        ])
      ], 46, f))), 128))
    ]));
  }
});
export {
  I as default
};
