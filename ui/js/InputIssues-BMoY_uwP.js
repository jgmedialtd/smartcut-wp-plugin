import { s as r } from "./i18n-B29Te7vQ.js";
import { d as p, c as t, o as n, a, n as i, b as u, t as o, u as l, F as c } from "./vendor-vue-BgOQH8dC.js";
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
