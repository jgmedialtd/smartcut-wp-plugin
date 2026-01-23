import { a as r } from "./i18n-BfwcbnjK.js";
import { d as p, b as t, o as n, e as a, v as i, j as u, t as o, u as l, F as c } from "./vendor-vue-CjllP6Mc.js";
const C = /* @__PURE__ */ p({
  __name: "InputIssues",
  props: {
    item: {
      type: Object,
      required: !0
    },
    numColumns: {
      type: Number,
      required: !0
    }
  },
  setup(m) {
    const s = m;
    return (d, g) => (n(), t(c, null, [
      !s.item.isNew && s.item.issues?.filter((e) => e.type === "error")?.length ? (n(), t("div", {
        key: 0,
        class: "group issues",
        style: i({
          "grid-column-end": "span " + s.numColumns
        })
      }, [
        u("pre", null, o(s.item.issues.filter((e) => e.type === "error").flatMap((e) => l(r)(e.message)).join(`
`)), 1)
      ], 4)) : a("", !0),
      !s.item.isNew && s.item.issues?.filter((e) => e.type === "warning")?.length ? (n(), t("div", {
        key: 1,
        class: "group warnings",
        style: i({
          "grid-column-end": "span " + s.numColumns
        })
      }, [
        u("pre", null, o(s.item.issues.filter((e) => e.type === "warning").flatMap((e) => l(r)(e.message)).join(`
`)), 1)
      ], 4)) : a("", !0)
    ], 64));
  }
});
export {
  C as default
};
