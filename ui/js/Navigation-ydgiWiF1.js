import { d as L, g as T, c as f, a as p, u as n, o as i, b as h, l as S, i as w, D as $, t as y, m as _, r as C, L as j, F as D, k as F, h as x, I as z, M as O, y as W, n as J, K as Y } from "./vendor-vue-BgOQH8dC.js";
import { t as I } from "./i18n-BkCqM2rg.js";
import { c as Z, d as E, e as q } from "./EcommerceCalculator-CIJmnT15.js";
import { k as R, n as G } from "./result.zod-n9AiX9Qf.js";
const H = {
  key: 0,
  class: "menu pagination"
}, Q = { class: "c-btn-group" }, X = { class: "pagination-info font-sm" }, ee = /* @__PURE__ */ L({
  __name: "Pagination",
  props: {
    arrayKey: {},
    disabled: { type: Boolean, default: !1 },
    maxPage: { default: 0 },
    itemsPerPage: { default: 20 }
  },
  setup(o) {
    const t = o, { currentPage: a, totalPages: u, goToPage: d } = Z(t.arrayKey, t.itemsPerPage), P = () => {
      t.disabled || a.value === 1 || d(1);
    }, A = () => {
      t.disabled || a.value === 1 || d(a.value - 1);
    }, e = () => {
      t.disabled || a.value >= u.value || t.maxPage > 0 && a.value >= t.maxPage || d(a.value + 1);
    }, r = () => {
      if (t.disabled || a.value >= u.value || t.maxPage > 0 && a.value >= t.maxPage) return;
      const k = t.maxPage > 0 ? Math.min(t.maxPage, u.value) : u.value;
      d(k);
    };
    return (k, v) => {
      const c = T("FontAwesomeIcon");
      return n(u) > 1 ? (i(), f("div", H, [
        h("div", Q, [
          h("button", {
            type: "button",
            class: S(["c-btn first", { disabled: o.disabled || n(a) === 1 }]),
            onClick: P
          }, [
            w(c, { icon: ["fass", "chevrons-left"] }),
            $(y(n(I)("pagination.first")), 1)
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn prev", { disabled: o.disabled || n(a) === 1 }]),
            onClick: A
          }, [
            w(c, { icon: ["fass", "chevron-left"] }),
            $(y(n(I)("pagination.previous")), 1)
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn next", { disabled: o.disabled || n(a) >= n(u) || o.maxPage > 0 && n(a) >= o.maxPage }]),
            onClick: e
          }, [
            $(y(n(I)("pagination.next")), 1),
            w(c, { icon: ["fass", "chevron-right"] })
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn last", { disabled: o.disabled || n(a) >= n(u) || o.maxPage > 0 && n(a) >= o.maxPage }]),
            onClick: r
          }, [
            $(y(n(I)("pagination.last")), 1),
            w(c, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        h("div", X, y(n(I)("pagination.page")) + " " + y(n(a)) + " / " + y(n(u)), 1)
      ])) : p("", !0);
    };
  }
});
function te(o) {
  const t = C({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), a = C("asc"), u = C(!1), d = (e, r) => e == null && r == null ? 0 : e == null ? 1 : r == null ? -1 : typeof e == "string" && typeof r == "string" ? e.localeCompare(r) : typeof e == "number" && typeof r == "number" ? e - r : String(e).localeCompare(String(r)), P = (e) => typeof e == "function" ? (t.value = { ...t.value, function: e, key: null, sortingKey: null }, e) : typeof e == "string" && e in R ? (t.value = { ...t.value, sortingKey: e, key: null, function: null }, R[e]) : Array.isArray(e) ? (t.value = { ...t.value, definition: e, key: null, function: null, sortingKey: null }, G(e)) : (t.value = { ...t.value, key: e, function: null, sortingKey: null }, (r, k) => {
    const v = r[e], c = k[e];
    return d(v, c);
  });
  return {
    sort: (e) => {
      const r = typeof e == "function" && e === t.value.function || typeof e == "string" && e in R && e === t.value.sortingKey || Array.isArray(e) && JSON.stringify(e) === JSON.stringify(t.value.definition) || e === t.value.key;
      u.value ? r ? a.value = a.value === "asc" ? "desc" : "asc" : a.value = "desc" : (a.value = "desc", u.value = !0);
      const k = P(e);
      o.value.sort((v, c) => {
        const b = k(v, c);
        return a.value === "desc" ? -b : b;
      }), j(o);
    },
    key: _(() => t.value.key),
    direction: _(() => a.value),
    sortingKey: _(() => t.value.sortingKey),
    sortFn: _(() => t.value.function),
    definition: _(() => t.value.definition)
  };
}
const ne = (o) => ![
  "AA",
  "AD",
  // Area Ascending/Descending
  "AAID",
  "ADID",
  // Area with ID
  "ID",
  "IDDesc",
  // ID Ascending/Descending
  "WDLD",
  "WALA",
  // Width/Length combinations
  "LDWD",
  "LAWA",
  // Length/Width combinations
  "WD",
  "LD"
  // Single dimension sorts
].includes(o), ae = { class: "label" }, oe = { class: "c-btn-group" }, se = ["onClick"], le = ["onClick"], ie = ["onClick"], re = /* @__PURE__ */ L({
  __name: "Sorting",
  props: {
    list: {},
    disabled: { type: Boolean, default: !1 },
    sortFunctions: { default: () => [] },
    sortKeys: { default: () => [] },
    objectKeys: { default: () => [] },
    label: { default: "" }
  },
  setup(o) {
    const t = o, { sort: a, key: u, direction: d, sortingKey: P, sortFn: A } = te(t.list), e = (v) => v.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim(), r = (v) => v.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim(), k = (v) => {
      t.disabled || a(v);
    };
    return (v, c) => {
      const b = T("FontAwesomeIcon");
      return i(), f("div", {
        class: S(["menu sorting", { disabled: o.disabled }])
      }, [
        h("div", ae, y(t.label), 1),
        h("div", oe, [
          (i(!0), f(D, null, F(o.sortKeys, (l) => (i(), f("button", {
            type: "button",
            key: l.key,
            class: S(["c-btn", {
              selected: n(P) === l.key
            }]),
            onClick: (K) => k(l.key)
          }, [
            n(P) === l.key && n(ne)(l.key) ? (i(), x(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(l.label || e(l.key)), 1)
          ], 10, se))), 128)),
          (i(!0), f(D, null, F(o.objectKeys, (l) => (i(), f("button", {
            type: "button",
            key: l.key,
            class: S(["c-btn", {
              selected: n(u) === l.key
            }]),
            onClick: (K) => k(l.key)
          }, [
            n(u) === l.key ? (i(), x(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(l.label || r(l.key)), 1)
          ], 10, le))), 128)),
          (i(!0), f(D, null, F(o.sortFunctions, (l, K) => (i(), f("button", {
            type: "button",
            key: K,
            class: S(["c-btn", {
              selected: n(A) === l.function
            }]),
            onClick: (B) => k(l.function)
          }, [
            n(A) === l.function ? (i(), x(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(l.label || `${o.label} ${K + 1}`), 1)
          ], 10, ie))), 128))
        ])
      ], 2);
    };
  }
}), ce = {
  key: 1,
  class: "active-stock-info"
}, ue = {
  key: 0,
  style: { color: "grey" }
}, de = ["onMousedown"], fe = {
  key: 0,
  class: "stack font-sm"
}, ye = { class: "name" }, pe = /* @__PURE__ */ L({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(o, { emit: t }) {
    const { r: a, stackedStock: u, activeStock: d } = E(), { items: P } = q("stockList"), A = W(() => import("./Diagram-BMJ2Nm4J.js")), e = W(() => import("./StockNavigation-Cv5zeBUG.js")), r = C(null), k = C(null), v = C(null), c = o, b = C(0), { stop: l } = z(r, Y((s) => {
      const m = s[0], { width: g } = m.contentRect;
      g > 0 && (b.value = g);
    }, 100)), K = _(() => {
      const s = d.value;
      if (!s) return "";
      const m = [s.id];
      return s.name && m.push(s.name), s.material && m.push(s.material), m.join(" • ");
    }), B = _(() => {
      const g = Math.floor((b.value + 10) / 210);
      return Math.max(g, 1);
    }), M = (s) => {
      let m = "";
      return s.t && (m = s.t.toString()), s.name ? `${s.id}: ${s.name.toUpperCase()}${m ? "-" + m : ""}` : s.material ? `${s.id}: ${s.material.toUpperCase()}${m ? "-" + m : ""}` : s.id;
    }, V = t, N = (s) => {
      V("show", s);
    };
    return O(() => l()), (s, m) => c.display ? (i(), f("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      c.showSorting ? (i(), x(re, {
        key: 0,
        list: n(a).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : p("", !0),
      n(d) ? (i(), f("div", ce, [
        $(y(K.value) + " ", 1),
        n(d).code ? (i(), f("div", ue, y(n(d).code), 1)) : p("", !0)
      ])) : p("", !0),
      b.value <= 900 ? (i(), x(n(e), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: k,
        "stock-list": n(u),
        embed: !1,
        "use-stack": c.useStack,
        "active-stock-id": n(a).activeStockAutoId.value,
        onShowStock: N
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : p("", !0),
      b.value > 900 ? (i(), f("div", {
        key: 3,
        id: "navigation-wrapper",
        style: J({ gridTemplateColumns: `repeat(${B.value}, 1fr)` })
      }, [
        (i(!0), f(D, null, F(n(P), (g, U) => (i(), f("div", {
          key: g.autoId,
          onMousedown: (ve) => N(g.autoId),
          class: S({ selected: g.autoId === n(a).activeStockAutoId.value })
        }, [
          typeof g?.stack?.number == "number" && g.stack.number > 1 ? (i(), f("div", fe, y(g.stack.number), 1)) : p("", !0),
          w(n(A), {
            "element-id": `nav-diagram-${U}`,
            main: !1,
            "stock-auto-id": g.autoId,
            "flip-y": c.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          h("div", ye, y(M(g)), 1)
        ], 42, de))), 128))
      ], 4)) : p("", !0),
      b.value > 900 ? (i(), x(ee, {
        key: 4,
        ref_key: "paginationRef",
        ref: v,
        "array-key": "stockList",
        "items-per-page": 10
      }, null, 512)) : p("", !0)
    ], 512)) : p("", !0);
  }
});
export {
  pe as default
};
