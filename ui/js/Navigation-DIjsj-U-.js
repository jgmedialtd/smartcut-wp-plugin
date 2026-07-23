import { d as N, r as T, u as n, o as l, c as f, a as h, g as S, m as D, i as $, t as y, b as p, x as C, M as U, s as A, F as w, f as R, j as K, J as z, N as O, n as J, C as W, L as Y } from "./vendor-vue-CeWGZ1lm.js";
import { t as I } from "./i18n-gSInbpCa.js";
import { d as Z, e as E, f as q } from "./EcommerceCalculator-Cpt6HXtv.js";
import { s as L, k as G } from "./InputUserGroup-Cp-L9c2U.js";
const H = {
  key: 0,
  class: "menu pagination"
}, Q = { class: "c-btn-group" }, X = { class: "pagination-info font-sm" }, ee = /* @__PURE__ */ N({
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
    }, _ = () => {
      t.disabled || a.value === 1 || d(a.value - 1);
    }, e = () => {
      t.disabled || a.value >= u.value || t.maxPage > 0 && a.value >= t.maxPage || d(a.value + 1);
    }, r = () => {
      if (t.disabled || a.value >= u.value || t.maxPage > 0 && a.value >= t.maxPage) return;
      const k = t.maxPage > 0 ? Math.min(t.maxPage, u.value) : u.value;
      d(k);
    };
    return (k, v) => {
      const c = T("Icon");
      return n(u) > 1 ? (l(), f("div", H, [
        h("div", Q, [
          h("button", {
            type: "button",
            class: S(["c-btn first", { disabled: o.disabled || n(a) === 1 }]),
            onClick: P
          }, [
            D(c, { icon: ["fass", "chevrons-left"] }),
            $(y(n(I)("pagination.first")), 1)
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn prev", { disabled: o.disabled || n(a) === 1 }]),
            onClick: _
          }, [
            D(c, { icon: ["fass", "chevron-left"] }),
            $(y(n(I)("pagination.previous")), 1)
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn next", { disabled: o.disabled || n(a) >= n(u) || o.maxPage > 0 && n(a) >= o.maxPage }]),
            onClick: e
          }, [
            $(y(n(I)("pagination.next")), 1),
            D(c, { icon: ["fass", "chevron-right"] })
          ], 2),
          h("button", {
            type: "button",
            class: S(["c-btn last", { disabled: o.disabled || n(a) >= n(u) || o.maxPage > 0 && n(a) >= o.maxPage }]),
            onClick: r
          }, [
            $(y(n(I)("pagination.last")), 1),
            D(c, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        h("div", X, y(n(I)("pagination.page")) + " " + y(n(a)) + " / " + y(n(u)), 1)
      ])) : p("", !0);
    };
  }
});
function te(o) {
  const t = A({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), a = A("asc"), u = A(!1), d = (e, r) => e == null && r == null ? 0 : e == null ? 1 : r == null ? -1 : typeof e == "string" && typeof r == "string" ? e.localeCompare(r) : typeof e == "number" && typeof r == "number" ? e - r : String(e).localeCompare(String(r)), P = (e) => typeof e == "function" ? (t.value = { ...t.value, function: e, key: null, sortingKey: null }, e) : typeof e == "string" && e in L ? (t.value = { ...t.value, sortingKey: e, key: null, function: null }, L[e]) : Array.isArray(e) ? (t.value = { ...t.value, definition: e, key: null, function: null, sortingKey: null }, G(e)) : (t.value = { ...t.value, key: e, function: null, sortingKey: null }, (r, k) => {
    const v = r[e], c = k[e];
    return d(v, c);
  });
  return {
    sort: (e) => {
      const r = typeof e == "function" && e === t.value.function || typeof e == "string" && e in L && e === t.value.sortingKey || Array.isArray(e) && JSON.stringify(e) === JSON.stringify(t.value.definition) || e === t.value.key;
      u.value ? r ? a.value = a.value === "asc" ? "desc" : "asc" : a.value = "desc" : (a.value = "desc", u.value = !0);
      const k = P(e);
      o.value.sort((v, c) => {
        const b = k(v, c);
        return a.value === "desc" ? -b : b;
      }), U(o);
    },
    key: C(() => t.value.key),
    direction: C(() => a.value),
    sortingKey: C(() => t.value.sortingKey),
    sortFn: C(() => t.value.function),
    definition: C(() => t.value.definition)
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
].includes(o), ae = { class: "label" }, oe = { class: "c-btn-group" }, se = ["onClick"], ie = ["onClick"], le = ["onClick"], re = /* @__PURE__ */ N({
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
    const t = o, { sort: a, key: u, direction: d, sortingKey: P, sortFn: _ } = te(t.list), e = (v) => v.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim(), r = (v) => v.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim(), k = (v) => {
      t.disabled || a(v);
    };
    return (v, c) => {
      const b = T("Icon");
      return l(), f("div", {
        class: S(["menu sorting", { disabled: o.disabled }])
      }, [
        h("div", ae, y(t.label), 1),
        h("div", oe, [
          (l(!0), f(w, null, R(o.sortKeys, (i) => (l(), f("button", {
            type: "button",
            key: i.key,
            class: S(["c-btn", {
              selected: n(P) === i.key
            }]),
            onClick: (x) => k(i.key)
          }, [
            n(P) === i.key && n(ne)(i.key) ? (l(), K(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(i.label || e(i.key)), 1)
          ], 10, se))), 128)),
          (l(!0), f(w, null, R(o.objectKeys, (i) => (l(), f("button", {
            type: "button",
            key: i.key,
            class: S(["c-btn", {
              selected: n(u) === i.key
            }]),
            onClick: (x) => k(i.key)
          }, [
            n(u) === i.key ? (l(), K(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(i.label || r(i.key)), 1)
          ], 10, ie))), 128)),
          (l(!0), f(w, null, R(o.sortFunctions, (i, x) => (l(), f("button", {
            type: "button",
            key: x,
            class: S(["c-btn", {
              selected: n(_) === i.function
            }]),
            onClick: (B) => k(i.function)
          }, [
            n(_) === i.function ? (l(), K(b, {
              key: 0,
              icon: ["fass", n(d) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : p("", !0),
            $(" " + y(i.label || `${o.label} ${x + 1}`), 1)
          ], 10, le))), 128))
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
}, ye = { class: "name" }, pe = /* @__PURE__ */ N({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(o, { emit: t }) {
    const { r: a, stackedStock: u, activeStock: d } = E(), { items: P } = q("stockList"), _ = W(() => import("./Diagram-KBCeqIP7.js")), e = W(() => import("./StockNavigation-CTqPCeTr.js")), r = A(null), k = A(null), v = A(null), c = o, b = A(0), { stop: i } = z(r, Y((s) => {
      const g = s[0], { width: m } = g.contentRect;
      m > 0 && (b.value = m);
    }, 100)), x = C(() => {
      const s = d.value;
      if (!s) return "";
      const g = [s.id];
      return s.name && g.push(s.name), s.material && g.push(s.material), g.join(" • ");
    }), B = C(() => {
      const m = Math.floor((b.value + 10) / 210);
      return Math.max(m, 1);
    }), M = (s) => {
      let g = "";
      return s.t && (g = s.t.toString()), s.name ? `${s.id}: ${s.name.toUpperCase()}${g ? "-" + g : ""}` : s.material ? `${s.id}: ${s.material.toUpperCase()}${g ? "-" + g : ""}` : s.id;
    }, V = t, F = (s) => {
      V("show", s);
    };
    return O(() => i()), (s, g) => c.display ? (l(), f("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      c.showSorting ? (l(), K(re, {
        key: 0,
        list: n(a).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : p("", !0),
      n(d) ? (l(), f("div", ce, [
        $(y(x.value) + " ", 1),
        n(d).code ? (l(), f("div", ue, y(n(d).code), 1)) : p("", !0)
      ])) : p("", !0),
      b.value <= 900 ? (l(), K(n(e), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: k,
        "stock-list": n(u),
        embed: !1,
        "use-stack": c.useStack,
        "active-stock-id": n(a).activeStockAutoId.value,
        onShowStock: F
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : p("", !0),
      b.value > 900 ? (l(), f("div", {
        key: 3,
        id: "navigation-wrapper",
        style: J({ gridTemplateColumns: `repeat(${B.value}, 1fr)` })
      }, [
        (l(!0), f(w, null, R(n(P), (m, j) => (l(), f("div", {
          key: m.autoId,
          onMousedown: (ve) => F(m.autoId),
          class: S({ selected: m.autoId === n(a).activeStockAutoId.value })
        }, [
          typeof m?.stack?.number == "number" && m.stack.number > 1 ? (l(), f("div", fe, y(m.stack.number), 1)) : p("", !0),
          D(n(_), {
            "element-id": `nav-diagram-${j}`,
            main: !1,
            "stock-auto-id": m.autoId,
            "flip-y": c.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          h("div", ye, y(M(m)), 1)
        ], 42, de))), 128))
      ], 4)) : p("", !0),
      b.value > 900 ? (l(), K(ee, {
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
