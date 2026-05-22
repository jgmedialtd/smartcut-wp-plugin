import { e as nt, M as fe, o as vt, F as de, j as I, p as pe, q as zt, w as me } from "./result.zod-B0Qqh9wj.js";
import { J as _e } from "./vendor-jszip-CDtxDv8r.js";
import { b as ge, d as he } from "./i18n-uloQAa9l.js";
import { F as be, f as ye, a as ke, g as we, u as ve } from "./EcommerceCalculator-D8U1LupG.js";
import { t as Pe } from "./i18n-BEBY52oR.js";
import { E as Ce, a as Y } from "./vendor-jspdf-D--HlhzI.js";
import { d as Se, f as xe, c as jt, o as ut, i as yt, a as kt, h as qt, u as ft, y as wt, r as N, b as Fe, O as Ae, m as Ee, F as Le, H as Te, P as $e, E as ze } from "./vendor-vue-Tt3m9hlc.js";
const Ot = new be({});
function Pt(n, i, d) {
  const y = n?.pricingFormula, s = typeof y == "string" && y.trim() ? y : typeof i == "string" && i.trim() ? i : null;
  if (!s) return null;
  const c = s.trim().startsWith("=") ? s.trim().substring(1).trim() : s.trim(), b = je(d), F = Array.isArray(n.sheets) && n.sheets.length > 0 ? n.sheets : void 0;
  try {
    if (F) {
      let l = 0;
      for (const a of F) {
        const p = a.q ?? 1, m = It(n, a.analysis ?? {}, p, b), f = Ot.evaluateExpression(c, m), k = Number(f);
        if (!Number.isFinite(k) || k < 0) return null;
        l += k * p;
      }
      return l;
    }
    const E = n.q ?? 1, L = It(n, n.analysis ?? {}, E, b), _ = Ot.evaluateExpression(c, L), t = Number(_);
    return !Number.isFinite(t) || t < 0 ? null : t * E;
  } catch (E) {
    return console.error("[pricing-formula] evaluation failed", { formula: s, err: E }), null;
  }
}
function It(n, i, d, y) {
  const s = (n.l ?? 0) * (n.w ?? 0), c = i?.partArea ?? 0, b = nt({ v: n.cost }) ?? 0, F = Number(n.discount), E = Number.isFinite(F) ? Math.max(0, Math.min(100, F)) : 0, L = b * (1 - E / 100);
  return {
    usedFraction: s > 0 && d > 0 ? c / (s * d) : 0,
    stockArea: s,
    discountedCost: L,
    l: n.l ?? 0,
    w: n.w ?? 0,
    t: n.t ?? 0,
    q: d,
    cost: b,
    discount: E,
    // Per-row weight for the shipping formula. Falls through to density
    // × volume when the stock row carries `density` instead of a stored
    // `weight` — keeps the formula context in sync with the result-mapper
    // row payload (same compute helper, same fallback rules).
    weight: ye(n) ?? 0,
    "analysis.partArea": c,
    "analysis.areaEfficiency": i?.areaEfficiency ?? 0,
    "analysis.totalParts": i?.totalParts ?? 0,
    "analysis.cutLength": i?.cutLength ?? 0,
    "analysis.stackedCutLength": i?.stackedCutLength ?? 0,
    "analysis.numberOfCuts": i?.numberOfCuts ?? 0,
    "analysis.stackedNumberOfCuts": i?.stackedNumberOfCuts ?? 0,
    "analysis.bandingLength": i?.bandingLength ?? 0,
    "analysis.finishArea": i?.finishArea ?? 0,
    "analysis.rollLength": i?.rollLength ?? 0,
    ...y
  };
}
function je(n) {
  return {
    "metadata.totalUsedStock": n?.totalUsedStock ?? 0,
    "metadata.totalStockCost": n?.totalStockCost ?? 0,
    "metadata.totalPartArea": n?.totalPartArea ?? 0,
    "metadata.totalCutLength": n?.totalCutLength ?? 0,
    "metadata.totalPartsProduced": n?.totalPartsProduced ?? 0
  };
}
function qe(n, i) {
  return !!i?.trim() || n.some((d) => typeof d.pricingFormula == "string" && d.pricingFormula.trim());
}
function tt(n, i, d) {
  return n.reduce((y, s) => {
    const c = Pt(s, d, i);
    if (c !== null) return y + c;
    const b = s.q ?? 1, F = typeof s.cost == "object" ? nt(s.cost) : s.cost || 0;
    return y + F * b;
  }, 0);
}
const Oe = 1e3, Ie = 1e6, Me = 12, Be = 144;
function R(n, i) {
  return i === "area" ? n === "imperial" ? Be : Ie : n === "imperial" ? Me : Oe;
}
function Ve(n, i, d, y) {
  const { strategy: s, unitSystem: c, cutLengthPrice: b = 0, perPartPrice: F = 0, productPrice: E = 0, pricingFormula: L, minCutLengthCharge: _ } = d, t = (a) => _ && _ > 0 && a > 0 ? Math.max(a, _) : a, l = {
    total: 0,
    breakdown: {},
    strategy: s
  };
  switch (s) {
    case "full_stock": {
      const a = tt(i, n, L);
      l.breakdown.stockCost = a, l.total = a;
      break;
    }
    case "part_area": {
      const a = R(c, "area");
      let p = 0;
      for (const m of i) {
        const f = Pt(m, L, n);
        if (f !== null) {
          p += f;
          continue;
        }
        const k = typeof m.cost == "object" ? nt(m.cost) : m.cost || 0;
        if (!k) continue;
        const g = m.l * m.w;
        if (g === 0) continue;
        const S = m.analysis?.partArea || 0;
        S > 0 && (p += S / g * k);
      }
      p === 0 && n.totalPartArea > 0 && E > 0 && (p = n.totalPartArea / a * E), l.breakdown.partAreaCost = p, l.total = p;
      break;
    }
    case "cut_length": {
      const a = R(c, "length"), m = n.totalCutLength / a * b;
      l.breakdown.cutLengthCost = m, l.total = m;
      break;
    }
    case "full_stock_plus_cut_length": {
      const a = tt(i, n, L);
      l.breakdown.stockCost = a;
      const p = R(c, "length"), m = n.totalCutLength / p, f = t(m * b);
      l.breakdown.cutLengthCost = f, l.total = a + f;
      break;
    }
    case "full_stock_plus_num_parts": {
      const a = tt(i, n, L);
      l.breakdown.stockCost = a;
      const p = n.totalPartsProduced * F;
      l.breakdown.perPartCost = p, l.total = a + p;
      break;
    }
    case "full_stock_plus_part_perimeter": {
      const a = tt(i, n, L);
      l.breakdown.stockCost = a;
      const p = R(c, "length"), m = y && y.length > 0 ? y.reduce((k, g) => k + 2 * (g.l + g.w) * (g.q ?? 1), 0) : n.totalCutLength, f = t(m / p * b);
      l.breakdown.cutLengthCost = f, l.total = a + f;
      break;
    }
    case "roll_length": {
      const a = R(c, "length");
      let p = 0;
      for (const m of i) {
        const f = Pt(m, L, n);
        if (f !== null) {
          p += f;
          continue;
        }
        const k = m.analysis?.rollLength || 0, g = typeof m.cost == "object" ? nt(m.cost) : m.cost || 0;
        p += k / a * g;
      }
      l.breakdown.rollLengthCost = p, l.total = p;
      break;
    }
    default: {
      const a = tt(i, n, L);
      l.breakdown.stockCost = a, l.total = a;
    }
  }
  return l;
}
const Bt = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], Ne = (n) => Bt.includes(n);
function Re(n, i) {
  const d = (t) => {
    i.log?.(t);
  }, y = (t) => (i.error?.(t), { success: !1, error: t }), s = () => {
    for (const t of Bt) c(t, 0);
  }, c = (t, l) => {
    d(["setting price", t, l]);
    const { inputs: a, elements: p, setInputValue: m, formatPrice: f } = i;
    if (isNaN(l)) throw new Error("Price must be a number");
    if (!Ne(t)) return;
    const g = {
      //this should not include any extra costs
      custom: {
        visible: null,
        hidden: "smartcut-custom-price"
      },
      perPart: {
        hidden: "smartcut-per-part-price",
        visible: "per_part_price"
      },
      partArea: {
        hidden: null,
        visible: "part_area_price"
      },
      offcutArea: {
        hidden: null,
        visible: "offcut_area_price"
      },
      rollLength: {
        hidden: null,
        visible: "roll_length_price"
      },
      banding: {
        hidden: "smartcut-banding-price",
        visible: "banding_total_price"
      },
      finish: {
        hidden: "smartcut-finish-price",
        visible: "finish_total_price"
      },
      machining: {
        hidden: "smartcut-machining-price",
        visible: "machining_total_price"
      },
      surcharge: {
        hidden: "smartcut-cut-to-size-surcharge",
        visible: "surcharge_price"
      },
      cutLength: {
        hidden: "smartcut-cut-length-price",
        visible: "cut_length_price"
      },
      stock: {
        hidden: "smartcut-stock-total-price",
        visible: "stock_total_price"
      }
    }[t];
    g?.hidden && a[g.hidden] && (d(["setting hidden price", g.hidden, l]), m(g.hidden, l)), g?.visible && p[g.visible] && (p[g.visible].innerText = f(l));
  }, b = (t, l, a) => {
    if (!t?.offcuts?.length) return 0;
    const p = t.offcuts.filter((k) => {
      const g = Math.max(k.l, k.w), S = Math.min(k.l, k.w);
      return g >= (n.offcut_min_length || 0) && S >= (n.offcut_min_width || 0);
    });
    if (p.length === 0) return 0;
    const m = n.offcut_pricing_mode || "percentage";
    let f = 0;
    switch (m) {
      case "free":
        f = 0, d(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        f = n.offcut_fixed_price || 0, d([`offcut pricing mode: fixed, price = ${f}`]);
        break;
      default: {
        const k = (n.offcut_pricing_percentage ?? 100) / 100, g = /* @__PURE__ */ new Map();
        for (const S of p) {
          const C = S.stockId;
          C && (g.has(C) || g.set(C, []), g.get(C).push(S));
        }
        for (const [S, C] of g) {
          const x = t.stock?.find((j) => j.id === S);
          if (!x || !x.cost) continue;
          const A = x.l * x.w;
          if (A === 0) continue;
          const M = C.reduce((j, q) => j + q.l * q.w * (q.q || 1), 0);
          f += M / A * cn({ v: x.cost }) * k;
        }
        f === 0 && p.length > 0 && (f = p.reduce((x, A) => x + A.l * A.w * (A.q || 1), 0) / l * a * k), d([`offcut pricing mode: percentage (${k * 100}%), price = ${f}`]);
        break;
      }
    }
    return f;
  }, F = (t) => {
    const { product: l, getCurrentVariationPrice: a, isQuantityPricing: p, setCartQuantity: m } = i;
    let f = l?.price || a(!0) || 0;
    typeof f == "string" && (f = parseFloat(f));
    const k = n.unit_system === "imperial" ? "feet" : "meters", g = n.pricing_formula, S = n.pricing_strategy, C = {
      strategy: S,
      unitSystem: n.unit_system,
      cutLengthPrice: n.cut_length_price,
      perPartPrice: n.per_part_price,
      productPrice: f,
      pricingFormula: g,
      minCutLengthCharge: n.min_cut_length_charge
    };
    d([`calculating cost by ${S} in ${k}`]);
    const x = Ve(
      t.metadata,
      t.stock,
      C,
      t.inputs?.parts
    ), { breakdown: A } = x;
    A.stockCost !== void 0 && c("stock", A.stockCost), A.partAreaCost !== void 0 && c("partArea", A.partAreaCost), A.cutLengthCost !== void 0 && c("cutLength", A.cutLengthCost), A.perPartCost !== void 0 && c("perPart", A.perPartCost), A.rollLengthCost !== void 0 && c("rollLength", A.rollLengthCost);
    let M = x.total;
    if (S === "part_area" && n?.enable_offcut_pricing && t?.offcuts) {
      const j = R(n.unit_system, "area"), q = b(t, j, f);
      c("offcutArea", q), M += q;
    }
    if (p())
      if (S === "cut_length") {
        const j = R(n.unit_system, "length");
        m(t.metadata.totalCutLength / j, 2);
      } else if (S === "part_area") {
        const j = R(n.unit_system, "area");
        m(t.metadata.totalPartArea / j, 2);
      } else
        m(t.metadata.totalUsedStock);
    return S === "cut_length" || p() && !qe(t.stock, g) && (S === "full_stock" || S === "part_area") ? 0 : M;
  }, E = (t) => {
    const {
      isExtraEnabled: l,
      isMachiningEnabled: a,
      isSurchargeEnabled: p,
      inputType: m,
      getTotalBandingPrice: f,
      getTotalFinishPrice: k,
      getTotalMachiningPrice: g,
      getInputValue: S
    } = i;
    let C = 0;
    if (l("banding") && t.metadata.bandingLengthByType) {
      const x = f(t);
      c("banding", x), C += x;
    }
    if (l("finish") && t.metadata.finishAreaByType) {
      const x = k(t);
      c("finish", x), C += x;
    }
    if (m.value === "formula") {
      const x = parseFloat(S("smartcut-hardware-price"));
      isNaN(x) || (C += x);
    }
    if (a()) {
      const x = g(t);
      c("machining", x), C += x;
    }
    if (p() && n.surcharge) {
      const x = n.surcharge_type === "per_sheet" ? parseFloat(n.surcharge.toString()) * t.metadata.totalUsedStock : parseFloat(n.surcharge.toString());
      c("surcharge", x), d(["added surcharge", x]), C += x;
    }
    return C;
  }, L = (t) => {
    const { getInputValue: l, setInputValue: a } = i, p = {
      "smartcut-job-id": t.jobId,
      "smartcut-dimensions": t.parts.map((m) => `${m.l}x${m.w} [${m.q}]`).join(", "),
      "smartcut-total-cut-length": t.metadata.totalCutLength,
      "smartcut-part-area": t.metadata.totalPartArea,
      "smartcut-total-cuts": t.metadata.totalCuts,
      "smartcut-total-parts": t.metadata.totalPartsProduced,
      "smartcut-machining": t.metadata.hasMachining
    };
    if (Object.entries(p).forEach(([m, f]) => {
      l(m) !== void 0 && a(m, f);
    }), l("smartcut-stock-summary") !== void 0) {
      const m = t.stock.map((f) => `${f.l}x${f.w}${f.t ? "x" + f.t : ""} [${f.q}]`).join(", ");
      a("smartcut-stock-summary", m);
    }
  };
  return {
    calculatePrice: async (t) => {
      s();
      const { isQuantityPricing: l, selectedVariation: a, setVariationPrice: p, setCartQuantity: m, enableAddToCart: f } = i;
      if (!t?.jobId)
        return y("No job ID provided");
      l() || m(1);
      let k = F(t);
      const g = E(t);
      if (k += g, f(), l()) {
        const S = t.metadata.totalUsedStock, C = k / S;
        c("custom", C);
      } else {
        if (!t.metadata.totalStockCost)
          return y("Total stock cost not returned for a multiple size product");
        d([`total cost is ${k}`]), c("custom", k);
      }
      return a.value && p(k), L(t), { success: !0, totalPrice: k };
    },
    resetPricing: s
  };
}
const Mt = ["L1", "L2", "W1", "W2"], Ue = ["A", "B"], Qe = ["y1", "y2", "x1", "x2"];
function Vt(n) {
  return "extras" in n && n.extras ? fe.map((i, d) => ({ label: Mt[d], value: vt(n.extras?.banding?.sides?.[i], "-") })).filter(({ value: i }) => i !== "-").map(({ label: i, value: d }) => `${i}: ${d}`).join(`
`) || "-" : Qe.map((i, d) => ({ label: Mt[d], value: vt(n.banding?.[i], "-") })).filter(({ value: i }) => i !== "-").map(({ label: i, value: d }) => `${i}: ${d}`).join(`
`) || "-";
}
function Nt(n) {
  return de.map((i, d) => ({ label: Ue[d], value: vt(n.extras?.finish?.faces?.[i] ?? n.finish?.faces?.[i], "-") })).filter(({ value: i }) => i !== "-").map(({ label: i, value: d }) => `${i}: ${d}`).join(`
`) || "-";
}
const He = (n, i) => {
  const d = [];
  n?.name && d.push(`Name: ${n.name}`), n?.code && d.push(`Code: ${n.code}`);
  const y = i(n.l), s = i(n.w), c = n.t ? i(n.t) : null;
  d.push(`Dimensions: ${y} × ${s}${c ? ` × ${c}` : ""}`), n?.material && d.push(`Material: ${String(n.material).toUpperCase()}`), n?.q != null && d.push(`Quantity: ${i(n.q)}`);
  const b = Vt(n);
  if (b && b !== "-") {
    d.push("Banding:");
    for (const E of b.split(`
`)) d.push(`  ${E}`);
  }
  const F = Nt(n);
  if (F !== "-") {
    d.push("Finish:");
    for (const E of F.split(`
`)) d.push(`  ${E}`);
  }
  return n?.notes && d.push(`Notes: ${n.notes}`), d.join(`
`);
}, W = 5, et = 10, K = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, D = {
  fontSize: 9
}, G = { left: 10 };
let J = [];
const Ye = (n, i, d, y = (s) => s.toString()) => {
  const s = new Ce({ orientation: "landscape" });
  let c = 10;
  s.setFontSize(20), s.text(n("pdf.order_summary"), 10, c), c += 15, s.setFontSize(14), s.text(`${n("general.your")} ${n("woodwork.part")}`, 10, c), c += W, J = [
    n("woodwork.length"),
    n("woodwork.width"),
    n("woodwork.thickness"),
    n("woodwork.material"),
    n("woodwork.code"),
    n("woodwork.quantity"),
    n("woodwork.name"),
    n("woodwork.banding"),
    n("woodwork.finish")
  ];
  const b = i.parts.map((_) => [
    y(_.l),
    y(_.w),
    y(_.t) || "-",
    _?.material?.toUpperCase() || "-",
    _?.code || "-",
    y(_.q),
    _.name || "-",
    Vt(_),
    Nt(_)
  ]), F = 6;
  Y(s, {
    startY: c,
    head: [J],
    body: b,
    margin: G,
    headStyles: K,
    styles: D,
    didDrawCell: (_) => {
      if (_.section !== "body" || _.column.index !== F) return;
      const t = i.parts[_.row.index];
      if (t)
        try {
          const l = He(t, y);
          if (!l) return;
          s.createAnnotation({
            type: "text",
            title: t?.name || "Part",
            contents: l,
            bounds: {
              x: _.cell.x + 1,
              y: _.cell.y + 1,
              w: 8,
              h: 8
            },
            open: !1
          });
        } catch (l) {
          console.error("Error adding part annotation:", l);
        }
    }
  }), c = s.lastAutoTable.finalY + et, s.setFontSize(14), s.text(n("pdf.stock_requirements"), 10, c), c += W, J = [
    n("woodwork.length"),
    n("woodwork.width"),
    n("woodwork.thickness"),
    n("woodwork.material"),
    n("woodwork.code"),
    n("woodwork.quantity")
    // 'Cost'
  ];
  const E = i.stock.map((_) => [
    y(_.l),
    y(_.w),
    y(_.t) || "-",
    _?.material?.toUpperCase() || "-",
    _?.code || "-",
    y(_.q)
    // stock.cost
  ]);
  if (Y(s, {
    startY: c,
    head: [J],
    body: E,
    margin: G,
    headStyles: K,
    styles: D
  }), c = s.lastAutoTable.finalY + et, i.metadata.totalRollLength > 0) {
    s.setFontSize(14), s.text(n("pdf.roll_requirements"), 10, c), c += W, J = [
      n("woodwork.name"),
      n("woodwork.material"),
      n("woodwork.length")
    ];
    const _ = i.stock.map((t) => [
      t?.name?.toUpperCase() || "-",
      t?.material?.toUpperCase() || "-",
      y(t.analysis.rollLength)
    ]);
    Y(s, {
      startY: c,
      head: [J],
      body: _,
      margin: G,
      headStyles: K,
      styles: D
    }), c = s.lastAutoTable.finalY + et;
  }
  if (d && Object.values(d)) {
    s.setFontSize(14), s.text(n("pdf.hardware"), 10, c), c += W;
    const _ = Object.values(d).map((t) => [
      t.name.toUpperCase(),
      y(t.q)
      // item.totalCost.toFixed( 2 )
    ]);
    Y(s, {
      startY: c,
      head: [[n("pdf.item"), n("woodwork.quantity")]],
      body: _,
      margin: G,
      headStyles: K,
      styles: D
    }), c = s.lastAutoTable.finalY + et;
  }
  s.setFontSize(14), s.text(n("pdf.totals"), 10, c), c += W;
  const L = [
    [n("pdf.total_parts"), y(i.metadata.totalPartsProduced)],
    [n("pdf.part_area"), y(i.metadata.totalPartArea)],
    [n("pdf.total_stock_required"), y(i.metadata.totalUsedStock)],
    [n("pdf.total_banding_length"), y(i.metadata.totalBandingLength)],
    [n("pdf.total_finish_area"), y(i.metadata.totalFinishArea)],
    [n("pdf.total_roll_length"), y(i.metadata.totalRollLength)]
  ];
  if (Y(s, {
    startY: c,
    body: L,
    margin: G,
    headStyles: K,
    styles: D
  }), c = s.lastAutoTable.finalY + et, window?.smartcutImages?.length) {
    s.addPage();
    let _ = 10;
    s.setFontSize(14), s.text(n("pdf.images"), 10, _), _ += W;
    const t = window.smartcutImages.flatMap((l, a) => l.metadata.map((p) => [
      a + 1,
      p.newName
    ]));
    Y(s, {
      startY: _,
      body: t,
      head: [[n("pdf.part_index"), n("pdf.file_name")]],
      margin: G,
      headStyles: K,
      styles: D
    });
  }
  return s.output("datauristring");
}, We = {
  key: 0,
  class: "debug"
}, nn = /* @__PURE__ */ Se({
  __name: "WordPress",
  setup(n) {
    const i = wt(() => import("./Configurator-C57IOs9O.js")), d = wt(() => import("./EcommerceCalculator-D8U1LupG.js").then((e) => e.o)), y = wt(() => import("./Notices-CkK3zzKZ.js")), { inputShapes: s } = ke(), { addNotice: c } = ve(), b = {}, F = {}, E = N(null);
    let L, _, t;
    const l = {
      banding: null,
      finish: null
    };
    let a = null, p = [], m = null, f = {};
    const k = N(!1), g = N("manual"), S = N(""), C = Ae([]), x = Ee(() => C.value), A = N(null), M = N(!0), j = N(null), q = N(!1), rt = N(null);
    $e("calculator", () => rt.value);
    const O = (e) => {
      k.value && console.log("SmartCut -", ...e);
    }, z = (e) => {
      console.error(`SmartCut - ${e}`);
    }, it = (e = !0) => {
      q.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((o) => X(o, "block")), ne() && X("pricing_table", "table"), e ? ot(!0) : dt(), V();
    }, at = (e = !0, r = !0) => {
      q.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((u) => X(u, "none")), r === !0 ? Ct() : r === !1 && V(), ot ? ot() : e === !1 && dt();
    }, ot = (e = !1) => {
      X("quantity", "inline-block"), b.quantity.readOnly = e;
    }, dt = () => {
      q.value !== !1 && (pt(1), X("quantity", "none"), b.quantity.readOnly = !0);
    }, Ct = () => {
      if (!b.cart_button) {
        z("Cart button not found");
        return;
      }
      b.cart_button.disabled = !1;
    }, V = () => {
      if (q.value !== !1) {
        if (!b.cart_button) {
          z("Cart button not found");
          return;
        }
        b.cart_button.disabled = !0;
      }
    }, Rt = () => {
      z("Validation error"), V();
    }, pt = (e, r = 0) => {
      if (O(["setting cart quantity", e]), !b.quantity) {
        z("Quantity field not found when trying to set");
        return;
      }
      b.quantity.value = e.toFixed(r), console.assert(b.quantity.value === e.toFixed(r), "Quantity field value not set correctly");
    }, Ut = (e) => {
      O(["setting variation price", e]);
      const r = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      r && (r.innerText = Q(e)), E.value = e;
    }, Qt = (e = !1) => {
      const r = e ? A.value?.display_price ?? 0 : E.value ?? A.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", E.value, A.value?.display_price), typeof r == "string" ? parseFloat(r) : r;
    }, Ht = () => {
      if (!window?.smartcutConfig) {
        z("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const r = Ft(I(window, ["smartcutConfig", "banding_data"])), o = Ft(I(window, ["smartcutConfig", "finish_data"])), u = ($) => {
        switch ($) {
          case "length":
            return { cutType: "guillotine", cutPreference: "l" };
          case "width":
            return { cutType: "guillotine", cutPreference: "w" };
          case "flex":
            return { cutType: "guillotine", cutPreference: "l" };
          case "efficiency":
            return { cutType: "efficiency", cutPreference: "none" };
          case "beam":
            return { cutType: "beam", cutPreference: "l" };
          default:
            return { cutType: "guillotine", cutPreference: "l" };
        }
      }, { cutType: v, cutPreference: w } = u(t.cut_preference), P = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: v,
        cutPreference: w,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, h = {
        apiVersion: 3,
        debug: t.debug,
        numberFormat: t.numberFormat || "decimal",
        locale: e.locale,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        currency: t.currency || "USD",
        stockSelection: t.stock_selection,
        stockGrain: t.stock_grain,
        minSpacing: t.min_spacing,
        maxParts: t.max_parts ?? null,
        orientationModel: t.orientation_model,
        resultOrientationModel: 0,
        minDimension: t.min_dimension,
        partTrim: t.part_trim,
        enable: {
          banding: t?.enable_banding || !1,
          finish: t?.enable_finish || !1,
          planing: t?.enable_planing || !1,
          orientation: t?.enable_orientation || !1,
          diagram: !t.hide_diagram,
          machining: t.enable_machining,
          csvImport: t.enable_import,
          partName: t.enable_part_name,
          imageUpload: t.enable_image_upload,
          focus: !0,
          click: !0,
          progressNumber: t.pricing_strategy !== "part_area"
        },
        colors: {
          partA: t?.part_a_color ?? "#1d9bc4",
          partB: t?.part_b_color ?? "#065d7a",
          partSelected: t?.part_selected_color ?? "#5bc85b",
          stock: t?.stock_color ?? "#ffd166",
          button: t?.button_color ?? "#118ab2",
          buttonText: t?.button_text_color ?? "#ffffff",
          text: t?.text_color ?? "#ffffff"
        }
      };
      k.value = h.debug;
      const T = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map(($) => $.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map(($) => $.trim()).filter(Boolean),
          defaultDepth: t.machining_holes_default_depth,
          minDepth: t.machining_holes_min_depth,
          maxDepth: t.machining_holes_max_depth
        },
        hingeHoles: {
          enabled: t.machining_hinge_holes,
          minimumHoleDistance: t.machining_hinge_holes_minimum_hole_distance,
          defaultDistanceFromEdge: t.machining_hinge_holes_default_distance_from_edge,
          defaultOuterSpacing: t.machining_hinge_holes_default_outer_spacing,
          defaultHingeLength: t.machining_hinge_holes_default_hinge_length
        },
        corners: {
          enabled: t.machining_radius_corners || t.machining_bevel_corners,
          types: [
            t.machining_radius_corners ? "radius" : null,
            t.machining_bevel_corners ? "bevel" : null
          ].filter(Boolean),
          minValue: t.machining_corners_min_value,
          maxValue: t.machining_corners_max_value,
          enableBanding: t.machining_corners_enable_banding
        }
      };
      M.value = Et(), M.value ? ot(!0) : dt(), a.type === "variable" ? at(!1, !1) : it(M.value);
      const B = {
        type: a.type,
        stock: C.value.map(($) => $.toData()),
        variations: p ?? null,
        saw: P,
        options: h,
        banding: r,
        finish: o,
        machining: T
      };
      B.type === "variable" && (O(["setting variable product form listeners"]), jQuery(function($) {
        const $t = $(".variations_form");
        $t.on("reset_data", () => at(!1, !1)).on("found_variation", (bt, ue) => ae(bt, ue));
        const ht = $t.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const H = {
        product: a,
        selectedVariation: A,
        inputs: F,
        elements: b,
        inputType: g,
        formatPrice: Q,
        getCurrentVariationPrice: Qt,
        setInputValue: _t,
        setCartQuantity: pt,
        setVariationPrice: Ut,
        isExtraEnabled: gt,
        isQuantityPricing: Et,
        isMachiningEnabled: Lt,
        isSurchargeEnabled: Tt,
        getTotalBandingPrice: Xt,
        getTotalFinishPrice: Zt,
        getTotalMachiningPrice: te,
        getInputValue: ee,
        enableAddToCart: Ct,
        log: O,
        error: z
      }, U = Re({
        pricing_strategy: t.pricing_strategy,
        number_format: t.number_format,
        unit_system: t.unit_system,
        cut_length_price: t.cut_length_price,
        min_cut_length_charge: t.min_cut_length_charge,
        per_part_price: t.per_part_price,
        surcharge: t.surcharge,
        surcharge_type: t.surcharge_type,
        enable_offcut_pricing: t.enable_offcut_pricing,
        offcut_min_length: t.offcut_min_length,
        offcut_min_width: t.offcut_min_width,
        // Forward the WC plugin's per-product pricing override. The
        // runtime in useProductPricing falls back to this when a stock
        // has no per-stock `pricingFormula` (the platform rules path).
        pricing_formula: t.pricing_formula
      }, H);
      L = U.calculatePrice, _ = U.resetPricing, Te(() => {
        rt.value && rt.value.init(B);
      });
    }, Yt = (e) => {
      const r = e?.multiple_sizes === !0;
      a = {
        type: e?.product_type,
        multiple_sizes: r,
        size: e?.size ? e.size.split(" | ") : [],
        l: !r && e?.l ? parseFloat(e.l) : null,
        w: !r && e?.w ? parseFloat(e.w) : null,
        t: e?.t ?? null,
        price: e?.price ? parseFloat(e.price) : null,
        stock_name: e?.stock_sku || e.stock_name,
        stock_sku: e?.stock_sku || null
      }, a.multiple_sizes || (a.l || z("product 'length' attribute not available"), a.w || z("product 'width' attribute not available"));
    }, Wt = (e) => {
      g.value = I(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", S.value = I(window, ["smartcutConfig", "settings", "formula_url"]), O([`Input type: ${g.value}`]), f = {
        thousands_separator: e?.thousands_separator,
        decimal_separator: e?.decimal_separator,
        number_of_decimals: e?.number_of_decimals,
        currency_symbol: e?.currency_symbol,
        currency_position: e?.currency_position
      };
    }, Kt = () => {
      const e = {
        checkout: "#smartcut-app",
        intro_text: "#smartcut-intro-text",
        pricing_table: "#smartcut-pricing-table",
        offcuts: "#include_offcuts_field",
        banding_key: "#smartcut-banding-key",
        finish_key: "#smartcut-finish-key",
        banding_total_price: "#smartcut-banding-total bdi .smartcut-price-selector",
        finish_total_price: "#smartcut-finish-total bdi .smartcut-price-selector",
        cut_length_price: "#smartcut-cut-length-total bdi .smartcut-price-selector",
        per_part_price: "#smartcut-per-part-total bdi .smartcut-price-selector",
        part_area_price: "#smartcut-area-total bdi .smartcut-price-selector",
        offcut_area_price: "#smartcut-offcut-area-total bdi .smartcut-price-selector",
        roll_length_price: "#smartcut-roll-length-total bdi .smartcut-price-selector",
        surcharge_price: "#smartcut-surcharge-total bdi .smartcut-price-selector",
        machining_total_price: "#smartcut-machining-total bdi .smartcut-price-selector",
        stock_total_price: "#smartcut-stock-total bdi .smartcut-price-selector",
        quantity: ".smartcut-stock-quantity",
        //this is the add to cart quantity element(s)
        cart_button: ".single_add_to_cart_button"
      };
      for (const [r, o] of Object.entries(e))
        b[r] = document.querySelector(o);
      if (!b.checkout)
        return z("checkout iframe not found");
      if (!b.quantity)
        return z("quantity field not found");
      if (!b.cart_button)
        return z("cart button not found");
      b.quantity.readOnly = !0, V();
    }, Dt = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), Z = (e = null, r = null, o = null, u = null, v = null) => {
      let w;
      if (v && typeof v == "object") {
        w = [];
        for (const [h, T] of Object.entries(v))
          h !== "attribute_size" && h !== "attribute_thickness" && w.push(`${h.replace("attribute_", "")}: ${T}`);
        w = w.join(" - ");
      }
      const P = {
        name: a.stock_name,
        code: a.stock_sku || void 0,
        l: e,
        w: r,
        t: o,
        grain: t.stock_grain,
        cost: parseFloat(u?.toString() || "0"),
        trim: Dt(),
        allowExactFitShapes: !0,
        notes: w
      };
      return new pe(P, t.numberFormat || "decimal");
    }, Gt = () => {
      if (a?.stock_name || z("product name not specified"), C.value = [], a.multiple_sizes)
        for (const e of a.size) {
          if (!lt(e)) continue;
          const [r, o] = e.split("x"), u = Z(
            parseFloat(r),
            parseFloat(o),
            a?.t,
            a.price
          );
          C.value.push(u);
        }
      else
        C.value.push(Z(
          a.l,
          a.w,
          a?.t,
          a?.price
        ));
    }, St = (e, r) => {
      const o = e.split(".");
      return o[0] = o[0].replace(/\B(?=(\d{3})+(?!\d))/g, r), o.join(".");
    }, Q = (e = 0, r = "") => {
      if (!e)
        return r ? xt("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const o = e.toFixed(f.number_of_decimals).replace(".", f.decimal_separator), u = St(o, f.thousands_separator);
      return r ? xt(u) : u;
    }, Jt = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const o = e % 1 !== 0 ? f.number_of_decimals : 0, u = e.toFixed(o).replace(".", f.decimal_separator);
      return St(u, f.thousands_separator);
    }, xt = (e) => {
      switch (f.currency_position) {
        case "left":
          return `${f.currency_symbol}${e}`;
        case "right":
          return `${e}${f.currency_symbol}`;
        default:
          return `${f.currency_symbol}${e}`;
      }
    }, st = (e) => {
      const r = (o) => ge(he(o), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(r).join(",") : r(e);
    }, Ft = (e) => {
      if (!e) return null;
      const r = {
        labels: [],
        pricing: {},
        displayNames: {}
      }, o = Object.values(e);
      for (const u of o)
        u?.variations ? (r.labels.push(...Object.keys(u.options)), Object.values(u.variations).forEach((v) => {
          const { options: w } = v, P = Object.values(w), h = P.map((B) => st(B)), T = h.join("|");
          r.pricing[T] = parseInt(v.price), P.forEach((B, H) => {
            const U = h[H], $ = Array.isArray(B) ? B.join(", ") : String(B);
            U && $ && !r.displayNames[U] && (r.displayNames[U] = $);
          });
        })) : u?.options && Object.entries(u.options).forEach(([v, w]) => {
          const P = st(v);
          r.pricing[P] = parseInt(u.price);
          const h = u.name || (typeof w == "string" ? w : Array.isArray(w) ? w.join(", ") : "");
          h && (r.displayNames[P] = h);
        });
      return r.labels.length || r.labels.push("type"), r;
    }, mt = (e, r) => {
      if (!r.length || !zt(l, [e])) return null;
      const o = I(l, [e]);
      if (!me(o)) return null;
      const v = Object.values(o).map((w) => w?.variations ? Object.values(w.variations).map((P) => (P.type = "variable", P)) : (w.type = "simple", w)).flat().find((w) => {
        let P;
        return w.type === "simple" ? P = Object.keys(w.options) : P = Object.values(w.options), P ? P.every((h, T) => st(h) === st(r[T])) : !1;
      });
      return v?.price ? parseFloat(v.price) : null;
    }, Zt = (e) => {
      const r = e.metadata?.finishAreaByType ?? {};
      let o = 0;
      if (typeof r == "object") {
        for (let [u, v] of Object.entries(r)) {
          typeof v == "string" && (v = parseFloat(v));
          const w = u.split("|"), P = mt("finish", w);
          if (P === null) continue;
          const T = Number(v) / 1e6 * parseFloat(P.toString());
          o += T;
        }
        if ("min_finish_charge" in t) {
          const u = parseFloat(t?.min_finish_charge);
          if (u > 0 && o > 0 && o < u)
            return u;
        }
      }
      return o;
    }, Xt = (e) => {
      const r = e.metadata?.bandingLengthByType ?? {};
      let o = 0;
      if (typeof r == "object") {
        for (let [u, v] of Object.entries(r)) {
          typeof v == "string" && (v = parseFloat(v));
          const w = u.split("|"), P = mt("banding", w);
          if (P === null) continue;
          const h = v / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(P.toString());
          o += h;
        }
        if ("min_banding_charge" in t) {
          const u = parseFloat(t?.min_banding_charge);
          if (u > 0 && o > 0 && o < u)
            return u;
        }
      }
      return o;
    }, te = (e) => (m.holes ?? 0) * (e.metadata.numHoles ?? 0) + (m.corners ?? 0) * (e.metadata.numCorners ?? 0), X = (e, r) => {
      e in b && b[e]?.style && (b[e].style.display = r);
    }, _t = (e, r) => {
      ct(e) ? F[e].value = r : z(`Attempting to set input but key '${e}' does not exist`);
    }, ee = (e) => {
      if (ct(e))
        return F[e].value;
    }, ct = (e) => e in F && F[e] instanceof HTMLInputElement, At = () => {
      pt(1), V(), _();
      for (const e in F)
        e !== "smartcut-hardware-price" && _t(e, null);
    }, Et = () => {
      if (window.smartcutConfig?.product_type === "variable")
        return !1;
      switch (t.pricing_strategy) {
        case "full_stock":
        case "part_area":
        case "full_stock_plus_cut_length":
        case "full_stock_plus_num_parts":
        case "full_stock_plus_part_perimeter":
          return !0;
        case "roll_length":
        case "cut_length":
          return !1;
        default:
          return !1;
      }
    }, gt = (e) => {
      if (zt(t, ["enable", e]) && I(t, ["enable", e]) === !1)
        return !1;
      const r = I(l, [e]);
      return !!(r && Object.values(r).length);
    }, Lt = () => t.enable_machining === !0, Tt = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ne = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "full_stock_plus_part_perimeter" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Tt() || gt("banding") || gt("finish") || Lt()), re = (e) => {
      let r = e?.attributes?.attribute_size;
      return r || (r = a?.size), r;
    }, lt = (e) => /\d+x\d+/.test(e), ie = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const r = e.replaceAll("_", "-");
        F[r] = document.getElementById(r);
      });
    }, ae = (e, r) => {
      At(), A.value = r, O(["variation selected", r.attributes]), C.value = [];
      const o = I(r, ["attributes", "attribute_thickness"]) ?? null;
      if (a.selected_thickness = o, s.value.forEach((u) => {
        u.t = nt({ v: o });
      }), a.multiple_sizes) {
        const u = re(r);
        if (O([`variation found with size: ${u} & thickness: ${o}`]), !u)
          return at(!1), z("The size of this multiple size product could not be found");
        if (Array.isArray(u) ? it(M.value) : lt(u) ? at(!0, !0) : it(M.value), p?.length) {
          let v;
          const w = o;
          let P = r.display_price;
          Array.isArray(u) ? v = u.map((h) => ({
            size: h,
            l: h.split("x")[0],
            w: h.split("x")[1],
            t: w,
            price: P
          })) : v = p.filter((h) => lt(h?.attributes?.size) ? o === (h?.attributes?.thickness ?? null) : !1).map((h) => {
            const T = h?.attributes?.size.split("x")[0] ?? null, B = h?.attributes?.size.split("x")[1] ?? null;
            let H = 0;
            return r.display_price || (H = p.find(($) => lt($.attributes?.size) && $.attributes?.thickness === h?.attributes?.thickness && $.attributes?.size === h?.attributes?.size && $.display_price > 0).display_price), O([
              `size attribute: '${h?.attributes?.size}'`,
              `price for thickness ${o}, dimensions: ${T}x${B} is ${P}`
            ]), {
              size: h?.attributes?.size,
              l: T,
              w: B,
              t: w,
              price: P || H
            };
          }), q.value === !0 && v.forEach((h) => {
            const T = Z(
              h.l,
              h.w,
              h.t,
              h.price,
              r?.attributes
            );
            C.value.push(T);
          });
        }
      } else {
        if (!p.some((u) => "thickness" in u.attributes))
          C.value.push(Z(
            a.l,
            a.w,
            o,
            r.display_price,
            r?.attributes
          ));
        else {
          const u = p.find((v) => v.attributes?.thickness === o);
          if (!u) return z(`variation not found for thickness ${o}`);
          C.value.push(Z(
            a.l,
            a.w,
            o,
            u.price,
            r?.attributes
          ));
        }
        it(M.value);
      }
    }, oe = (e) => {
      if (!ct("smartcut-api-result")) return;
      const r = F["smartcut-api-result"].closest("form");
      if (!r) return;
      const o = JSON.stringify(e.apiResultV3), u = new Blob([o], { type: "application/json" }), v = new File([u], "api-result.json", { type: "application/json" }), w = new DataTransfer();
      w.items.add(v);
      const P = r.querySelector('[name="smartcut_api_result"]');
      P instanceof HTMLInputElement && (P.files = w.files);
    }, se = async (e) => {
      const o = Ye(Pe, e, j.value, Jt).split(",")[1], u = new _e();
      u.file("order-summary.pdf", o);
      const v = await u.generateAsync({ type: "blob" }), w = new File([v], "order-summary.zip", { type: "application/zip" });
      if (!ct("smartcut-order-summary")) return;
      const P = F["smartcut-order-summary"].closest("form");
      if (!P) return;
      const h = new DataTransfer();
      h.items.add(w);
      const T = P.querySelector('[name="smartcut_order_summary"]');
      T instanceof HTMLInputElement && (T.files = h.files);
    }, ce = async (e) => {
      At(), O(["result event received", e]);
      const r = await L(e);
      if (!r.success) {
        console.error(r.error);
        return;
      }
      const o = t.minimum_cut_to_size_price ?? 0;
      if (o > 0 && (r.totalPrice ?? 0) < o) {
        V(), c({
          message: `A minimum cut-to-size order of ${Q(o)} is required. Your order total is ${Q(r.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await se(e), e.apiResultV3 && oe(e);
    }, le = (e, r) => {
      V(), e && (j.value = ze(e)), _t("smartcut-hardware-price", r ?? 0);
    };
    return xe(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), O(["Launching WordPress checkout..."]), l.banding = I(window, ["smartcutConfig", "banding_data"]), l.finish = I(window, ["smartcutConfig", "finish_data"]), m = I(window, ["smartcutConfig", "machining_pricing"]), p = I(window, ["smartcutConfig", "variations"]), Kt(), ie(), Yt(window.smartcutConfig), Wt(window.smartcutConfig), Ht(), Gt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((o) => {
        const u = document.querySelector(o);
        u && (u.style.display = "none");
      });
      const r = new CustomEvent("smartcut/ready");
      window.dispatchEvent(r), O(["Wordpress checkout ready"]);
    }), (e, r) => (ut(), jt(Le, null, [
      yt(ft(y), { position: "top-left" }),
      k.value ? (ut(), jt("div", We, [
        r[0] || (r[0] = Fe("div", null, "WP - developer information", -1)),
        yt(ft(d), {
          data: [C.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(ft(d), {
          data: [C.value.map((o) => o.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      g.value === "formula" && S.value ? (ut(), qt(ft(i), {
        key: 1,
        ref: "configurator",
        "format-price": Q,
        url: S.value,
        debug: k.value,
        onHardwareResult: le,
        onPanelResult: V
      }, null, 8, ["url", "debug"])) : kt("", !0),
      g.value === "manual" || g.value === "formula" && S.value ? (ut(), qt(we, {
        key: 2,
        ref_key: "calculator",
        ref: rt,
        readonly: g.value === "formula",
        "input-stock": x.value,
        "find-extras-price": mt,
        "format-price": Q,
        "input-type": g.value,
        debug: k.value,
        onLog: O,
        onError: z,
        onInputsChanged: V,
        onValidationError: Rt,
        onResult: ce
      }, null, 8, ["readonly", "input-stock", "input-type", "debug"])) : kt("", !0)
    ], 64));
  }
});
export {
  nn as default
};
