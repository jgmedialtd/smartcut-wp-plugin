import { t as f, s as g } from "./i18n-B1ErfgJE.js";
import { bH as y } from "./result.zod-B0BoTcpc.js";
import { d as w, o as i, e as o, B as u, j as m, t as p, f as c, F as C } from "./vendor-vue-QD0FJS8o.js";
const j = /* @__PURE__ */ w({
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
  setup(d) {
    function l(r) {
      const s = r?.message ?? "";
      if (!s) return "";
      const e = r?.context || r?.params;
      let n = y(s, e);
      if (n === s && /^(errors|fields|extras|woodwork|validation)\./.test(s)) {
        const a = f(s, e);
        a && a !== s && (n = a);
      }
      return g(n);
    }
    const t = d;
    return (r, s) => (i(), o(C, null, [
      !t.item.isNew && t.item.issues?.filter((e) => e.type === "error")?.length ? (i(), o("div", {
        key: 0,
        class: "group issues",
        style: u({
          "grid-column-end": "span " + t.numColumns
        })
      }, [
        m("pre", null, p(t.item.issues.filter((e) => e.type === "error").flatMap((e) => l(e)).join(`
`)), 1)
      ], 4)) : c("", !0),
      !t.item.isNew && t.item.issues?.filter((e) => e.type === "warning")?.length ? (i(), o("div", {
        key: 1,
        class: "group warnings",
        style: u({
          "grid-column-end": "span " + t.numColumns
        })
      }, [
        m("pre", null, p(t.item.issues.filter((e) => e.type === "warning").flatMap((e) => l(e)).join(`
`)), 1)
      ], 4)) : c("", !0)
    ], 64));
  }
});
export {
  j as default
};
