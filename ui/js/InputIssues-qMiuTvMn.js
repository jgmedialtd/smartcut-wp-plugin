import { s as r } from "./i18n-DT7wACvc.js";
import { d as p, a as t, b as n, e as a, l as i, f as u, t as l, u as m, F as c } from "./vendor-vue-BJlZsQnE.js";
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
  setup(o) {
    const s = o;
    return (d, f) => (n(), t(c, null, [
      !s.item.isNew && s.item.issues?.filter((e) => e.type === "error")?.length ? (n(), t("div", {
        key: 0,
        class: "group issues",
        style: i({
          "grid-column-end": "span " + s.numColumns
        })
      }, [
        u("pre", null, l(s.item.issues.filter((e) => e.type === "error").flatMap((e) => m(r)(e.message)).join(`
`)), 1)
      ], 4)) : a("", !0),
      !s.item.isNew && s.item.issues?.filter((e) => e.type === "warning")?.length ? (n(), t("div", {
        key: 1,
        class: "group warnings",
        style: i({
          "grid-column-end": "span " + s.numColumns
        })
      }, [
        u("pre", null, l(s.item.issues.filter((e) => e.type === "warning").flatMap((e) => m(r)(e.message)).join(`
`)), 1)
      ], 4)) : a("", !0)
    ], 64));
  }
});
export {
  C as default
};
