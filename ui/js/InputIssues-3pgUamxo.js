import { t as f, s as g } from "./i18n-uloQAa9l.js";
import { t as y } from "./result.zod-B0Qqh9wj.js";
import { d as w, c as i, o, a as u, n as m, b as p, t as c, F as C } from "./vendor-vue-Tt3m9hlc.js";
const x = /* @__PURE__ */ w({
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
    return (r, s) => (o(), i(C, null, [
      !t.item.isNew && t.item.issues?.filter((e) => e.type === "error")?.length ? (o(), i("div", {
        key: 0,
        class: "group issues",
        style: m({
          "grid-column-end": "span " + t.numColumns
        })
      }, [
        p("pre", null, c(t.item.issues.filter((e) => e.type === "error").flatMap((e) => l(e)).join(`
`)), 1)
      ], 4)) : u("", !0),
      !t.item.isNew && t.item.issues?.filter((e) => e.type === "warning")?.length ? (o(), i("div", {
        key: 1,
        class: "group warnings",
        style: m({
          "grid-column-end": "span " + t.numColumns
        })
      }, [
        p("pre", null, c(t.item.issues.filter((e) => e.type === "warning").flatMap((e) => l(e)).join(`
`)), 1)
      ], 4)) : u("", !0)
    ], 64));
  }
});
export {
  x as default
};
