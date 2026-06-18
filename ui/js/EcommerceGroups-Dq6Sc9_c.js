import { d as mt, k as O, I as A, r as ht, o as I, c as y, a as c, t as h, u as f, m as Y, i as P, b, n as j, F as ft, f as xt, s as D, x as E, g as z, w as q } from "./vendor-vue-D6ZfZC0P.js";
import { s as U, l as L, d as gt } from "./vendor-d3-DI9vO-24.js";
import { b as Q, g as It, r as yt, I as _t } from "./InputUserGroup-pBQzFMX3.js";
import { b as wt, r as J, v as bt } from "./EcommerceCalculator-D4REKTU7.js";
import { t as x } from "./i18n-cONG3r0U.js";
import { _ as kt } from "./Launch-BnHg2-HI.js";
const St = {
  id: "inputs-groups",
  class: "ecommerce-groups"
}, Gt = { class: "groups-header" }, Ct = { class: "groups-title" }, Xt = { class: "groups-info" }, At = {
  key: 0,
  class: "menu groups"
}, Yt = { class: "row table-heading" }, Dt = { class: "cell" }, Ut = { class: "cell" }, Nt = ["onClick"], Mt = { class: "cell center" }, Ot = { class: "cell text clickable" }, Pt = { class: "number quantity cell" }, Tt = ["value", "onInput"], Bt = { class: "cell" }, Rt = ["aria-label", "onClick"], Vt = {
  key: 0,
  id: "groups-canvas"
}, jt = {
  key: 1,
  class: "info"
}, Et = {
  key: 1,
  id: "inputs-groups-all-issues",
  class: "all issues"
}, qt = 400, K = 300, T = 4, Ft = /* @__PURE__ */ mt({
  __name: "EcommerceGroups",
  props: {
    // Vue 3 unwraps a `ref<InputShape>` to a reactive proxy that sheds
    // some class-only methods (filterInvalidFields, recreateNestedClasses,
    // …), so a strict `PropType<InputShape>` rejects the parent's
    // assignment. We only read fields off the shape (autoId, l/w/t, …),
    // so the looser type is harmless.
    selectedShape: {
      type: Object,
      default: null
    },
    selectedShapeCounter: {
      type: Number,
      default: 0
    },
    stockGrain: {
      type: String,
      default: "n"
    },
    formatOptions: {
      type: Object,
      default: () => ({ numberFormat: "decimal", decimalPlaces: 2, fractionRoundTo: 0 })
    }
  },
  emits: ["clear-highlight", "highlight-shape"],
  setup(Z, { expose: tt, emit: et }) {
    const N = et, { inputs: i, inputSaw: $t } = wt(), k = Z, a = D(null), _ = D(null), F = D(4), M = D([]), B = D(!1);
    let S = null, m = null, v = null;
    const st = E(() => "34px auto 60px 30px"), G = E(() => a.value?.shapeIds?.length ? a.value.shapeIds.map((o) => {
      const e = i.inputShapes.value.findIndex((s) => s.autoId === o);
      if (e > -1)
        return i.inputShapes.value[e];
    }).filter(Boolean) : []), $ = E(() => {
      if (!a.value || !G.value.length) return { minX: 0, minY: 0, maxX: 0, maxY: 0, l: 0, w: 0 };
      const o = a.value.positions || [], e = G.value;
      let s = 1 / 0, n = 1 / 0, r = -1 / 0, u = -1 / 0;
      for (const p of o) {
        const t = e.find((g) => g.autoId === p.autoId);
        if (!t) continue;
        const l = t.trimmedDimensions || { l: t.l, w: t.w };
        s = Math.min(s, p.x), n = Math.min(n, p.y), r = Math.max(r, p.x + l.l), u = Math.max(u, p.y + l.w);
      }
      return isFinite(s) ? { minX: s, minY: n, maxX: r, maxY: u, l: r - s, w: u - n } : { minX: 0, minY: 0, maxX: 0, maxY: 0, l: 0, w: 0 };
    });
    function C() {
      const o = document.getElementById("groups-canvas");
      if (!o || !a.value?.shapeIds?.length) return;
      U(o).selectAll("*").remove();
      const e = $.value;
      if (e.l <= 0 || e.w <= 0) return;
      const s = Math.max(e.l, e.w) * 0.15, n = e.l + s * 2, r = e.w + s * 2, u = n / r;
      let p = qt, t = p / u;
      t > K && (t = K, p = t * u), m = L().domain([e.minX - s, e.maxX + s]).range([T, p - T]), v = L().domain([e.minY - s, e.maxY + s]).range([t - T, T]), S = U("#groups-canvas").append("svg").attr("width", p).attr("height", t).attr("class", "group-canvas"), S.append("rect").attr("class", "group-background").attr("x", m(e.minX)).attr("y", v(e.maxY)).attr("width", m(e.maxX) - m(e.minX)).attr("height", v(e.minY) - v(e.maxY)), at();
    }
    function at() {
      if (!S || !m || !v || !a.value) return;
      const o = a.value.positions || [], s = G.value.map((t, l) => {
        const g = o.find((d) => d.autoId === t.autoId), w = t.trimmedDimensions || { l: t.l, w: t.w };
        return {
          shape: t,
          index: l,
          x: g?.x ?? 0,
          y: g?.y ?? 0,
          l: w.l,
          w: w.w,
          autoId: t.autoId,
          displayIndex: i.inputShapes.value.findIndex((d) => d.autoId === t.autoId) + 1
        };
      });
      S.selectAll(".part-group").remove();
      const n = S.selectAll(".part-group").data(s).join("g").attr("class", (t, l) => `part-group ${_.value === l ? "selected" : ""}`).attr("cursor", "grab");
      n.append("rect").attr("class", "part-rect").attr("x", (t) => m(t.x)).attr("y", (t) => v(t.y + t.w)).attr("width", (t) => m(t.x + t.l) - m(t.x)).attr("height", (t) => v(t.y) - v(t.y + t.w)), n.append("text").attr("class", "dim-label").attr("x", (t) => m(t.x) + 2).attr("y", (t) => v(t.y + t.w) + 10).text((t) => Q({ v: t.l, o: k.formatOptions })), n.append("text").attr("class", "dim-label").attr("x", (t) => m(t.x) + 2).attr("y", (t) => v(t.y) - 2).text((t) => Q({ v: t.w, o: k.formatOptions })), n.append("text").attr("class", "part-index").attr("x", (t) => m(t.x + t.l / 2)).attr("y", (t) => v(t.y + t.w / 2) + 4).attr("text-anchor", "middle").text((t) => t.displayIndex > 0 ? t.displayIndex : ""), n.on("mousedown", function(t, l) {
        t.stopPropagation(), _.value = l.index, N("highlight-shape", a.value.shapeIds[l.index]);
      });
      let r = 0, u = 0;
      const p = gt().on("start", function(t, l) {
        r = m.invert(t.x) - l.x, u = v.invert(t.y) - l.y, U(this).attr("cursor", "grabbing").raise(), _.value = l.index;
      }).on("drag", function(t, l) {
        const g = m.invert(t.x) - r, w = v.invert(t.y) - u, d = H(g, w, l), V = U(this);
        V.select("rect.part-rect").attr("x", m(d.x)).attr("y", v(d.y + l.w)).classed("collision", !d.snapped).classed("valid", d.snapped), V.selectAll("text.dim-label").attr("x", () => m(d.x) + 2).attr(
          "y",
          (Ht, vt) => vt === 0 ? v(d.y + l.w) + 10 : v(d.y) - 2
        ), V.select("text.part-index").attr("x", m(d.x + l.l / 2)).attr("y", v(d.y + l.w / 2) + 4);
      }).on("end", function(t, l) {
        U(this).attr("cursor", "grab");
        const g = m.invert(t.x) - r, w = v.invert(t.y) - u, d = H(g, w, l);
        d.snapped && (a.value.setShapePosition(l.autoId, d.x, d.y), l.x = d.x, l.y = d.y), A(() => C());
      });
      n.call(p);
    }
    function nt(o) {
      const e = a.value?.positions || [], s = G.value, n = [];
      for (const r of e) {
        if (r.autoId === o) continue;
        const u = s.find((t) => t.autoId === r.autoId);
        if (!u) continue;
        const p = u.trimmedDimensions || { l: u.l, w: u.w };
        n.push({ x: r.x, y: r.y, l: p.l, w: p.w });
      }
      return n;
    }
    function H(o, e, s) {
      const n = nt(s.autoId), r = { l: s.l, w: s.w }, u = It(r, n, 0);
      u.sort((t, l) => {
        const g = (o - t.x) ** 2 + (e - t.y) ** 2, w = (o - l.x) ** 2 + (e - l.y) ** 2;
        return g - w;
      });
      const p = { x: 0, y: 0, l: s.l, w: s.w };
      for (const t of u) {
        p.x = t.x, p.y = t.y;
        let l = !1;
        for (const g of n)
          if (yt(p, g)) {
            l = !0;
            break;
          }
        if (!l)
          return { x: t.x, y: t.y, snapped: !0 };
      }
      return { x: o, y: e, snapped: !1 };
    }
    const ot = (o) => {
      a.value = o;
    }, lt = (o) => {
      const e = i.inputUserGroups.value.findIndex((s) => s.autoId === o);
      e !== -1 && i.inputUserGroups.value.splice(e, 1);
    }, ut = () => {
      R(), M.value = [], i.inputUserGroups.value.length = 0;
    }, R = () => {
      a.value = null, _.value = null, N("clear-highlight");
    }, W = () => {
      a.value && a.value.validate(i.inputShapes.value);
    }, X = () => {
      M.value = bt(i.inputUserGroups.value, i.inputShapes.value, !1);
    };
    O(() => i.inputShapes.value, () => {
      J(i.inputUserGroups.value, i.inputShapes.value), X();
    }, { deep: !0 }), O(() => k.selectedShapeCounter, () => {
      it();
    }), O(() => a.value, () => {
      _.value = null, N("clear-highlight"), !B.value && (B.value = !0, W(), X(), A(() => {
        B.value = !1, C();
      }));
    }, { deep: !0 }), O(() => G.value, () => {
      a.value && (X(), W(), A(() => C()));
    }, { deep: !0 }), J(i.inputUserGroups.value, i.inputShapes.value), X();
    const it = () => {
      !k.selectedShape?.autoId || !a.value?.shapeIds || rt();
    }, rt = () => {
      const o = k.selectedShape;
      if (!a.value || a.value.shapeIds.includes(o.autoId)) return;
      a.value.shapeIds.push(o.autoId);
      const e = $.value;
      a.value.positions || (a.value.positions = []), a.value.positions.push({
        autoId: o.autoId,
        x: e.l > 0 ? e.maxX : 0,
        y: e.minY
      }), A(() => C());
    }, ct = (o) => {
      if (o.autoId === a.value?.autoId && !o?.shapeIds?.length)
        return x("groups.now_click_parts", "Now click part IDs to add them");
      if (!o?.shapeIds?.length)
        return x("groups.click_to_add", "Click here to add parts");
      let e = o.shapeIds.map((s) => {
        const n = i.inputShapes.value.findIndex((r) => r.autoId === s);
        return n > -1 ? n + 1 : null;
      }).filter((s) => s).join(",");
      return o.autoId === a.value?.autoId && (e += " " + x("groups.click_to_add_inline", "(click part to add)")), e;
    }, pt = () => {
      i.inputUserGroups.value.push(new _t({})), a.value = i.inputUserGroups.value[i.inputUserGroups.value.length - 1];
    }, dt = (o) => {
      if (o > -1 && a.value) {
        const e = a.value.shapeIds[o];
        if (a.value.shapeIds.splice(o, 1), a.value.positions) {
          const s = a.value.positions.findIndex((n) => n.autoId === e);
          s > -1 && a.value.positions.splice(s, 1);
        }
        _.value = null, N("clear-highlight"), A(() => C());
      }
    };
    return tt({
      deselect: R,
      validate: X,
      currentGroup: a
    }), (o, e) => {
      const s = ht("Icon");
      return I(), y("div", St, [
        c("div", Gt, [
          c("h3", Ct, h(f(x)("groups.title", "Part Groups")), 1),
          c("p", Xt, h(f(x)("groups.info", "Define groups of parts that should be cut from the same stock piece.")), 1)
        ]),
        f(i).inputUserGroups.value.length ? (I(), y("div", At, [
          c("button", {
            type: "button",
            class: "c-btn c-btn--danger",
            onClick: ut
          }, [
            Y(s, { icon: ["fass", "trash"] }),
            P(h(f(x)("groups.delete_all", "Delete all")), 1)
          ]),
          c("button", {
            type: "button",
            class: "c-btn",
            onClick: R
          }, h(f(x)("groups.deselect", "Deselect")), 1)
        ])) : b("", !0),
        c("div", null, [
          f(i).inputUserGroups.value.length ? (I(), y("div", {
            key: 0,
            class: "inputs grid-table",
            style: j({
              "grid-template-columns": st.value
            })
          }, [
            c("div", Yt, [
              e[2] || (e[2] = c("div", { class: "cell" }, null, -1)),
              c("div", Dt, h(f(x)("groups.parts", "Parts")), 1),
              c("div", Ut, h(f(x)("groups.quantity", "Quantity")), 1),
              e[3] || (e[3] = c("div", { class: "cell" }, null, -1))
            ]),
            (I(!0), y(ft, null, xt(f(i).inputUserGroups.value, (n, r) => (I(), y("div", {
              key: n.autoId,
              class: z(["row", {
                selected: a.value?.autoId === n.autoId
              }]),
              onClick: (u) => ot(n)
            }, [
              c("div", Mt, [
                c("div", {
                  class: z(["id click-effect", {
                    selected: a.value?.autoId === n.autoId
                  }])
                }, h(r + 1), 3)
              ]),
              c("div", Ot, h(ct(n)), 1),
              c("div", Pt, [
                c("input", {
                  type: "number",
                  min: "0",
                  value: n.q,
                  class: "quantity-input",
                  onInput: (u) => n.q = Math.max(0, parseInt(u.target.value, 10) || 0),
                  onClick: e[0] || (e[0] = q(() => {
                  }, ["stop"]))
                }, null, 40, Tt)
              ]),
              c("div", Bt, [
                c("button", {
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": f(x)("groups.remove_group", "Remove group"),
                  onClick: q((u) => lt(n.autoId), ["stop"])
                }, [
                  Y(s, { icon: ["fass", "trash"] })
                ], 8, Rt)
              ]),
              a.value?.autoId === n.autoId ? (I(), y("div", {
                key: 0,
                class: "group vis",
                style: j({
                  "grid-column-end": "span " + F.value
                })
              }, [
                a.value?.shapeIds?.length ? (I(), y("div", Vt)) : b("", !0),
                _.value === null && a.value?.shapeIds?.length ? (I(), y("div", jt, [
                  Y(s, { icon: ["fass", "info-circle"] }),
                  P(" " + h(f(x)("groups.click_to_select", "Click to select a part. Drag to reposition.")), 1)
                ])) : b("", !0),
                _.value !== null ? (I(), y("button", {
                  key: 2,
                  type: "button",
                  class: "icon-left c-btn",
                  onClick: e[1] || (e[1] = q((u) => dt(_.value), ["stop"]))
                }, [
                  Y(s, { icon: ["fass", "trash"] }),
                  P(" " + h(f(x)("groups.remove_part", "Remove part from group")), 1)
                ])) : b("", !0)
              ], 4)) : b("", !0),
              n?.issues?.length ? (I(), y("div", {
                key: 1,
                class: "group issues",
                style: j({
                  "grid-column-end": "span " + F.value
                })
              }, [
                c("pre", null, h(n.issues.slice(0, 3).map((u) => u.message).join(`
`)), 1)
              ], 4)) : b("", !0)
            ], 10, Nt))), 128))
          ], 4)) : b("", !0),
          c("button", {
            type: "button",
            class: "c-btn add-button",
            onClick: pt
          }, [
            Y(s, { icon: ["fass", "plus-large"] }),
            P(" " + h(f(x)("groups.add_group", "Add group")), 1)
          ]),
          M.value?.length ? (I(), y("div", Et, [
            c("pre", null, h(M.value.slice(0, 5).map((n) => n.message).join(`
`)), 1)
          ])) : b("", !0)
        ])
      ]);
    };
  }
}), Zt = /* @__PURE__ */ kt(Ft, [["__scopeId", "data-v-e3fa1dcc"]]);
export {
  Zt as default
};
