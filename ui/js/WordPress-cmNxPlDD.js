import { ba as ue, aB as K, bb as fe, bc as de, bd as vt, be as pe, bf as q, b5 as me, bg as ge } from "./result.zod-B0BoTcpc.js";
import { J as _e } from "./vendor-jszip-CfA-XncZ.js";
import { F as he, g as be, c as ye, u as ke, E as we, a as ve, p as Pe, b as Ce } from "./EcommerceCalculator-ClNeqZHE.js";
import { d as Se, e as xe } from "./i18n-B1ErfgJE.js";
import { t as Fe } from "./i18n-Dj6izb6_.js";
import { E as Ae, a as U } from "./vendor-jspdf-rw2fIeFX.js";
import { d as Ee, h as Le, o as ct, e as $t, i as yt, u as lt, j as Te, f as kt, b as zt, F as $e, a as wt, g as M, s as ze, c as je, n as Oe, m as qe, p as Be } from "./vendor-vue-QD0FJS8o.js";
function ut(e) {
  const r = (u) => Se(xe(u), 100).replace(/\|/g, "_");
  return Array.isArray(e) ? e.map(r).join(",") : r(e);
}
function jt(e) {
  if (!e) return null;
  const r = {
    labels: [],
    pricing: {},
    displayNames: {}
  }, u = Object.values(e);
  for (const l of u)
    l?.variations ? (r.labels.push(...Object.keys(l.options)), Object.values(l.variations).forEach((c) => {
      const { options: o } = c, f = Object.values(o), y = f.map((v) => ut(v)), S = y.join("|");
      r.pricing[S] = parseFloat(c.price), c.sku && (r.codes ??= {}, r.codes[S] = c.sku), f.forEach((v, L) => {
        const t = y[L], s = Array.isArray(v) ? v.join(", ") : String(v);
        t && s && !r.displayNames[t] && (r.displayNames[t] = s);
      });
    })) : l?.options && Object.entries(l.options).forEach(([c, o]) => {
      const f = ut(c);
      r.pricing[f] = parseFloat(l.price);
      const y = l.name || (typeof o == "string" ? o : Array.isArray(o) ? o.join(", ") : "");
      y && (r.displayNames[f] = y);
    });
  return r.labels.length || r.labels.push("type"), r;
}
function Ie(e, r) {
  if (!r.length || !ue(e)) return null;
  const u = r.filter(
    (o) => o != null && String(o).trim() !== ""
  );
  if (!u.length) return null;
  const c = Object.values(e).map((o) => o?.variations ? Object.values(o.variations).map((f) => (f.type = "variable", f)) : (o.type = "simple", o)).flat().find((o) => {
    let f;
    return o.type === "simple" ? f = Object.keys(o.options) : f = Object.values(o.options), !f || f.length !== u.length ? !1 : f.every((y, S) => ut(y) === ut(u[S]));
  });
  return c?.price ? parseFloat(c.price) : null;
}
const Ot = new he({});
function Pt(e, r, u) {
  const l = e?.pricingFormula, c = typeof l == "string" && l.trim() ? l : typeof r == "string" && r.trim() ? r : null;
  if (!c) return null;
  const o = c.trim().startsWith("=") ? c.trim().substring(1).trim() : c.trim(), f = Me(u), y = Array.isArray(e.sheets) && e.sheets.length > 0 ? e.sheets : void 0;
  try {
    if (y) {
      let s = 0;
      for (const a of y) {
        const g = a.q ?? 1, m = qt(e, a.analysis ?? {}, g, f), d = Ot.evaluateExpression(o, m), b = Number(d);
        if (!Number.isFinite(b) || b < 0) return null;
        s += b * g;
      }
      return s;
    }
    const S = e.q ?? 1, v = qt(e, e.analysis ?? {}, S, f), L = Ot.evaluateExpression(o, v), t = Number(L);
    return !Number.isFinite(t) || t < 0 ? null : t * S;
  } catch (S) {
    return console.error("[pricing-formula] evaluation failed", { formula: c, err: S }), null;
  }
}
function qt(e, r, u, l) {
  const c = (e.l ?? 0) * (e.w ?? 0), o = r?.partArea ?? 0, f = K({ v: e.cost }) ?? 0, y = Number(e.discount), S = Number.isFinite(y) ? Math.max(0, Math.min(100, y)) : 0, v = f * (1 - S / 100);
  return {
    usedFraction: c > 0 && u > 0 ? o / (c * u) : 0,
    stockArea: c,
    discountedCost: v,
    l: e.l ?? 0,
    w: e.w ?? 0,
    t: e.t ?? 0,
    q: u,
    cost: f,
    discount: S,
    // Per-row weight for the shipping formula. Falls through to density
    // × volume when the stock row carries `density` instead of a stored
    // `weight` — keeps the formula context in sync with the result-mapper
    // row payload (same compute helper, same fallback rules).
    weight: ye(e) ?? 0,
    "analysis.partArea": o,
    "analysis.areaEfficiency": r?.areaEfficiency ?? 0,
    "analysis.totalParts": r?.totalParts ?? 0,
    "analysis.cutLength": r?.cutLength ?? 0,
    "analysis.stackedCutLength": r?.stackedCutLength ?? 0,
    "analysis.numberOfCuts": r?.numberOfCuts ?? 0,
    "analysis.stackedNumberOfCuts": r?.stackedNumberOfCuts ?? 0,
    "analysis.bandingLength": r?.bandingLength ?? 0,
    "analysis.finishArea": r?.finishArea ?? 0,
    "analysis.rollLength": r?.rollLength ?? 0,
    ...l
  };
}
const Ne = [
  "totalUsedStock",
  "totalStockCost",
  "totalPartArea",
  "totalCutLength",
  "totalPartsProduced"
];
function Me(e) {
  const r = {};
  for (const u of be(fe))
    r[`metadata.${u}`] = 0;
  for (const u of Ne) {
    const l = e?.[u];
    typeof l == "number" && (r[`metadata.${u}`] = l);
  }
  return r;
}
function Ve(e, r) {
  return !!r?.trim() || e.some((u) => typeof u.pricingFormula == "string" && u.pricingFormula.trim());
}
function X(e, r, u) {
  return e.reduce((l, c) => {
    const o = Pt(c, u, r);
    if (o !== null) return l + o;
    const f = c.q ?? 1, y = typeof c.cost == "object" ? K(c.cost) : c.cost || 0;
    return l + y * f;
  }, 0);
}
const Re = 1e3, Ue = 1e6, Qe = 12, He = 144;
function V(e, r) {
  return r === "area" ? e === "imperial" ? He : Ue : e === "imperial" ? Qe : Re;
}
function Ye(e, r, u, l) {
  const { strategy: c, unitSystem: o, cutLengthPrice: f = 0, perPartPrice: y = 0, productPrice: S = 0, pricingFormula: v, minCutLengthCharge: L } = u, t = (a) => L && L > 0 && a > 0 ? Math.max(a, L) : a, s = {
    total: 0,
    breakdown: {},
    strategy: c
  };
  switch (c) {
    case "full_stock": {
      const a = X(r, e, v);
      s.breakdown.stockCost = a, s.total = a;
      break;
    }
    case "part_area": {
      const a = V(o, "area");
      let g = 0;
      for (const m of r) {
        const d = Pt(m, v, e);
        if (d !== null) {
          g += d;
          continue;
        }
        const b = typeof m.cost == "object" ? K(m.cost) : m.cost || 0;
        if (!b) continue;
        const h = m.l * m.w;
        if (h === 0) continue;
        const P = m.analysis?.partArea || 0;
        P > 0 && (g += P / h * b);
      }
      g === 0 && e.totalPartArea > 0 && S > 0 && (g = e.totalPartArea / a * S), s.breakdown.partAreaCost = g, s.total = g;
      break;
    }
    case "cut_length": {
      const a = V(o, "length"), m = e.totalCutLength / a * f;
      s.breakdown.cutLengthCost = m, s.total = m;
      break;
    }
    case "full_stock_plus_cut_length": {
      const a = X(r, e, v);
      s.breakdown.stockCost = a;
      const g = V(o, "length"), m = e.totalCutLength / g, d = t(m * f);
      s.breakdown.cutLengthCost = d, s.total = a + d;
      break;
    }
    case "full_stock_plus_num_parts": {
      const a = X(r, e, v);
      s.breakdown.stockCost = a;
      const g = e.totalPartsProduced * y;
      s.breakdown.perPartCost = g, s.total = a + g;
      break;
    }
    case "full_stock_plus_part_perimeter": {
      const a = X(r, e, v);
      s.breakdown.stockCost = a;
      const g = V(o, "length"), m = l && l.length > 0 ? l.reduce((b, h) => b + 2 * (h.l + h.w) * (h.q ?? 1), 0) : e.totalCutLength, d = t(m / g * f);
      s.breakdown.cutLengthCost = d, s.total = a + d;
      break;
    }
    case "roll_length": {
      const a = V(o, "length");
      let g = 0;
      for (const m of r) {
        const d = Pt(m, v, e);
        if (d !== null) {
          g += d;
          continue;
        }
        const b = m.analysis?.rollLength || 0, h = typeof m.cost == "object" ? K(m.cost) : m.cost || 0;
        g += b / a * h;
      }
      s.breakdown.rollLengthCost = g, s.total = g;
      break;
    }
    default: {
      const a = X(r, e, v);
      s.breakdown.stockCost = a, s.total = a;
    }
  }
  return s;
}
const It = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"], We = (e) => It.includes(e);
function De(e, r) {
  const u = (t) => {
    r.log?.(t);
  }, l = (t) => (r.error?.(t), { success: !1, error: t }), c = () => {
    for (const t of It) o(t, 0);
  }, o = (t, s) => {
    u(["setting price", t, s]);
    const { inputs: a, elements: g, setInputValue: m, formatPrice: d } = r;
    if (isNaN(s)) throw new Error("Price must be a number");
    if (!We(t)) return;
    const h = {
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
    h?.hidden && a[h.hidden] && (u(["setting hidden price", h.hidden, s]), m(h.hidden, s)), h?.visible && g[h.visible] && (g[h.visible].innerText = d(s));
  }, f = (t, s, a) => {
    if (!t?.offcuts?.length) return 0;
    const g = t.offcuts.filter((b) => {
      const h = Math.max(b.l, b.w), P = Math.min(b.l, b.w);
      return h >= (e.offcut_min_length || 0) && P >= (e.offcut_min_width || 0);
    });
    if (g.length === 0) return 0;
    const m = e.offcut_pricing_mode || "percentage";
    let d = 0;
    switch (m) {
      case "free":
        d = 0, u(["offcut pricing mode: free, price = $0"]);
        break;
      case "fixed":
        d = e.offcut_fixed_price || 0, u([`offcut pricing mode: fixed, price = ${d}`]);
        break;
      default: {
        const b = (e.offcut_pricing_percentage ?? 100) / 100, h = /* @__PURE__ */ new Map();
        for (const P of g) {
          const w = P.stockId;
          w && (h.has(w) || h.set(w, []), h.get(w).push(P));
        }
        for (const [P, w] of h) {
          const C = t.stock?.find((z) => z.id === P);
          if (!C || !C.cost) continue;
          const F = C.l * C.w;
          if (F === 0) continue;
          const B = w.reduce((z, j) => z + j.l * j.w * (j.q || 1), 0);
          d += B / F * K({ v: C.cost }) * b;
        }
        d === 0 && g.length > 0 && (d = g.reduce((C, F) => C + F.l * F.w * (F.q || 1), 0) / s * a * b), u([`offcut pricing mode: percentage (${b * 100}%), price = ${d}`]);
        break;
      }
    }
    return d;
  }, y = (t) => {
    const { product: s, getCurrentVariationPrice: a, isQuantityPricing: g, setCartQuantity: m } = r;
    let d = s?.price || a(!0) || 0;
    typeof d == "string" && (d = parseFloat(d));
    const b = e.unit_system === "imperial" ? "feet" : "meters", h = e.pricing_formula, P = e.pricing_strategy, w = {
      strategy: P,
      unitSystem: e.unit_system,
      cutLengthPrice: e.cut_length_price,
      perPartPrice: e.per_part_price,
      productPrice: d,
      pricingFormula: h,
      minCutLengthCharge: e.min_cut_length_charge
    };
    u([`calculating cost by ${P} in ${b}`]);
    const C = Ye(
      t.metadata,
      t.stock,
      w,
      t.inputs?.parts
    ), { breakdown: F } = C;
    F.stockCost !== void 0 && o("stock", F.stockCost), F.partAreaCost !== void 0 && o("partArea", F.partAreaCost), F.cutLengthCost !== void 0 && o("cutLength", F.cutLengthCost), F.perPartCost !== void 0 && o("perPart", F.perPartCost), F.rollLengthCost !== void 0 && o("rollLength", F.rollLengthCost);
    let B = C.total;
    if (P === "part_area" && e?.enable_offcut_pricing && t?.offcuts) {
      const z = V(e.unit_system, "area"), j = f(t, z, d);
      o("offcutArea", j), B += j;
    }
    if (g())
      if (P === "cut_length") {
        const z = V(e.unit_system, "length");
        m(t.metadata.totalCutLength / z, 2);
      } else if (P === "part_area") {
        const z = V(e.unit_system, "area");
        m(t.metadata.totalPartArea / z, 2);
      } else
        m(t.metadata.totalUsedStock);
    return P === "cut_length" || g() && !Ve(t.stock, h) && (P === "full_stock" || P === "part_area") ? 0 : B;
  }, S = (t) => {
    const {
      isExtraEnabled: s,
      isMachiningEnabled: a,
      isSurchargeEnabled: g,
      inputType: m,
      getTotalBandingPrice: d,
      getTotalFinishPrice: b,
      getTotalMachiningPrice: h,
      getInputValue: P
    } = r;
    let w = 0;
    if (s("banding") && t.metadata.bandingLengthByType) {
      const C = d(t);
      o("banding", C), w += C;
    }
    if (s("finish") && t.metadata.finishAreaByType) {
      const C = b(t);
      o("finish", C), w += C;
    }
    if (m.value === "formula") {
      const C = parseFloat(P("smartcut-hardware-price"));
      isNaN(C) || (w += C);
    }
    if (a()) {
      const C = h(t);
      o("machining", C), w += C;
    }
    if (g() && e.surcharge) {
      const C = e.surcharge_type === "per_sheet" ? parseFloat(e.surcharge.toString()) * t.metadata.totalUsedStock : parseFloat(e.surcharge.toString());
      o("surcharge", C), u(["added surcharge", C]), w += C;
    }
    return w;
  }, v = (t) => {
    const { getInputValue: s, setInputValue: a } = r, g = {
      "smartcut-job-id": t.jobId,
      "smartcut-dimensions": t.parts.map((m) => `${m.l}x${m.w} [${m.q}]`).join(", "),
      "smartcut-total-cut-length": t.metadata.totalCutLength,
      "smartcut-part-area": t.metadata.totalPartArea,
      "smartcut-total-cuts": t.metadata.totalCuts,
      "smartcut-total-parts": t.metadata.totalPartsProduced,
      "smartcut-machining": t.metadata.hasMachining
    };
    if (Object.entries(g).forEach(([m, d]) => {
      s(m) !== void 0 && a(m, d);
    }), s("smartcut-stock-summary") !== void 0) {
      const m = t.stock.map((d) => `${d.l}x${d.w}${d.t ? "x" + d.t : ""} [${d.q}]`).join(", ");
      a("smartcut-stock-summary", m);
    }
  };
  return {
    calculatePrice: async (t) => {
      c();
      const { isQuantityPricing: s, selectedVariation: a, setVariationPrice: g, setCartQuantity: m, enableAddToCart: d } = r;
      if (!t?.jobId)
        return l("No job ID provided");
      s() || m(1);
      let b = y(t);
      const h = S(t);
      if (b += h, d(), s()) {
        const P = t.metadata.totalUsedStock, w = b / P;
        o("custom", w);
      } else {
        if (!t.metadata.totalStockCost)
          return l("Total stock cost not returned for a multiple size product");
        u([`total cost is ${b}`]), o("custom", b);
      }
      return a.value && g(b), v(t), { success: !0, totalPrice: b };
    },
    resetPricing: c
  };
}
const Bt = ["L1", "L2", "W1", "W2"], Ke = ["A", "B"], Ge = ["y1", "y2", "x1", "x2"];
function Nt(e) {
  return "extras" in e && e.extras ? de.map((r, u) => ({ label: Bt[u], value: vt(e.extras?.banding?.sides?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: u }) => `${r}: ${u}`).join(`
`) || "-" : Ge.map((r, u) => ({ label: Bt[u], value: vt(e.banding?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: u }) => `${r}: ${u}`).join(`
`) || "-";
}
function Mt(e) {
  return pe.map((r, u) => ({ label: Ke[u], value: vt(e.extras?.finish?.faces?.[r] ?? e.finish?.faces?.[r], "-") })).filter(({ value: r }) => r !== "-").map(({ label: r, value: u }) => `${r}: ${u}`).join(`
`) || "-";
}
const Je = (e, r, u) => {
  const l = [];
  e?.name && l.push(`Name: ${e.name}`), e?.code && l.push(`Code: ${e.code}`);
  const c = r(e.l), o = r(e.w), f = e.t ? r(e.t) : null;
  l.push(`Dimensions: ${c} × ${o}${f ? ` × ${f}` : ""}`);
  const S = (e?.code ? u?.get(String(e.code).toUpperCase()) : void 0) || e?.customData?.materialName || e?.material;
  S && l.push(`Material: ${String(S).toUpperCase()}`), e?.q != null && l.push(`Quantity: ${r(e.q)}`);
  const v = Nt(e);
  if (v && v !== "-") {
    l.push("Banding:");
    for (const t of v.split(`
`)) l.push(`  ${t}`);
  }
  const L = Mt(e);
  if (L !== "-") {
    l.push("Finish:");
    for (const t of L.split(`
`)) l.push(`  ${t}`);
  }
  return e?.notes && l.push(`Notes: ${e.notes}`), l.join(`
`);
}, Q = 5, tt = 10, H = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, Y = {
  fontSize: 9
}, W = { left: 10 };
let D = [];
const Ze = (e, r, u, l = (c) => c.toString()) => {
  const c = new Ae({ orientation: "landscape" });
  let o = 10;
  c.setFontSize(20), c.text(e("pdf.order_summary"), 10, o), o += 15, c.setFontSize(14), c.text(`${e("general.your")} ${e("woodwork.part")}`, 10, o), o += Q, D = [
    e("woodwork.length"),
    e("woodwork.width"),
    e("woodwork.thickness"),
    e("woodwork.material"),
    e("woodwork.code"),
    e("woodwork.quantity"),
    e("woodwork.name"),
    e("woodwork.banding"),
    e("woodwork.finish")
  ];
  const f = /* @__PURE__ */ new Map();
  for (const t of r.stock || []) {
    const s = t?.customData?.materialName || t?.material;
    t?.code && s && f.set(String(t.code).toUpperCase(), String(s));
  }
  const y = r.parts.map((t) => {
    const a = (t?.code ? f.get(String(t.code).toUpperCase()) : void 0) || t?.customData?.materialName || t?.material;
    return [
      l(t.l),
      l(t.w),
      l(t.t) || "-",
      a ? String(a).toUpperCase() : "-",
      t?.code || "-",
      l(t.q),
      t.name || "-",
      Nt(t),
      Mt(t)
    ];
  }), S = 6;
  U(c, {
    startY: o,
    head: [D],
    body: y,
    margin: W,
    headStyles: H,
    styles: Y,
    didDrawCell: (t) => {
      if (t.section !== "body" || t.column.index !== S) return;
      const s = r.parts[t.row.index];
      if (s)
        try {
          const a = Je(s, l, f);
          if (!a) return;
          c.createAnnotation({
            type: "text",
            title: s?.name || "Part",
            contents: a,
            bounds: {
              x: t.cell.x + 1,
              y: t.cell.y + 1,
              w: 8,
              h: 8
            },
            open: !1
          });
        } catch (a) {
          console.error("Error adding part annotation:", a);
        }
    }
  }), o = c.lastAutoTable.finalY + tt, c.setFontSize(14), c.text(e("pdf.stock_requirements"), 10, o), o += Q, D = [
    e("woodwork.length"),
    e("woodwork.width"),
    e("woodwork.thickness"),
    e("woodwork.material"),
    e("woodwork.code"),
    e("woodwork.quantity")
    // 'Cost'
  ];
  const v = r.stock.map((t) => {
    const s = t?.customData?.materialName || t?.material;
    return [
      l(t.l),
      l(t.w),
      l(t.t) || "-",
      s ? String(s).toUpperCase() : "-",
      t?.code || "-",
      l(t.q)
      // stock.cost
    ];
  });
  if (U(c, {
    startY: o,
    head: [D],
    body: v,
    margin: W,
    headStyles: H,
    styles: Y
  }), o = c.lastAutoTable.finalY + tt, r.metadata.totalRollLength > 0) {
    c.setFontSize(14), c.text(e("pdf.roll_requirements"), 10, o), o += Q, D = [
      e("woodwork.name"),
      e("woodwork.material"),
      e("woodwork.length")
    ];
    const t = r.stock.map((s) => {
      const a = s?.customData?.materialName || s?.customData?.stockName || s?.material;
      return [
        s?.name?.toUpperCase() || "-",
        a ? String(a).toUpperCase() : "-",
        l(s.analysis.rollLength)
      ];
    });
    U(c, {
      startY: o,
      head: [D],
      body: t,
      margin: W,
      headStyles: H,
      styles: Y
    }), o = c.lastAutoTable.finalY + tt;
  }
  if (u && Object.values(u)) {
    c.setFontSize(14), c.text(e("pdf.hardware"), 10, o), o += Q;
    const t = Object.values(u).map((s) => [
      s.name.toUpperCase(),
      l(s.q)
      // item.totalCost.toFixed( 2 )
    ]);
    U(c, {
      startY: o,
      head: [[e("pdf.item"), e("woodwork.quantity")]],
      body: t,
      margin: W,
      headStyles: H,
      styles: Y
    }), o = c.lastAutoTable.finalY + tt;
  }
  c.setFontSize(14), c.text(e("pdf.totals"), 10, o), o += Q;
  const L = [
    [e("pdf.total_parts"), l(r.metadata.totalPartsProduced)],
    [e("pdf.part_area"), l(r.metadata.totalPartArea)],
    [e("pdf.total_stock_required"), l(r.metadata.totalUsedStock)],
    [e("pdf.total_banding_length"), l(r.metadata.totalBandingLength)],
    [e("pdf.total_finish_area"), l(r.metadata.totalFinishArea)],
    [e("pdf.total_roll_length"), l(r.metadata.totalRollLength)]
  ];
  if (U(c, {
    startY: o,
    body: L,
    margin: W,
    headStyles: H,
    styles: Y
  }), o = c.lastAutoTable.finalY + tt, window?.smartcutImages?.length) {
    c.addPage();
    let t = 10;
    c.setFontSize(14), c.text(e("pdf.images"), 10, t), t += Q;
    const s = window.smartcutImages.flatMap((a, g) => a.metadata.map((m) => [
      g + 1,
      m.newName
    ]));
    U(c, {
      startY: t,
      body: s,
      head: [[e("pdf.part_index"), e("pdf.file_name")]],
      margin: W,
      headStyles: H,
      styles: Y
    });
  }
  return c.output("datauristring");
}, Xe = {
  key: 0,
  class: "debug"
}, ln = /* @__PURE__ */ Ee({
  __name: "WordPress",
  setup(e) {
    const r = wt(() => import("./Configurator-DBmjfmK9.js")), u = wt(() => import("./EcommerceCalculator-ClNeqZHE.js").then((n) => n.w)), l = wt(() => import("./Notices-Dp4_t_6H.js")), { inputShapes: c } = ke(), { addNotice: o } = ve(), f = {}, y = {}, S = M(null);
    let v, L, t;
    const s = {
      banding: null,
      finish: null
    };
    let a = null, g = [], m = null, d = {};
    const b = M(!1), h = M("manual"), P = M(""), w = ze([]), C = je(() => w.value), F = M(null), B = M(!0), z = M(null), j = M(!1), et = M(null);
    Be("calculator", () => et.value);
    const O = (n) => {
      b.value && console.log("SmartCut -", ...n);
    }, T = (n) => {
      console.error(`SmartCut - ${n}`);
    }, nt = (n = !0) => {
      j.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((p) => J(p, "block")), ee() && J("pricing_table", "table"), n ? it(!0) : ft(), N();
    }, rt = (n = !0, i = !0) => {
      j.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((_) => J(_, "none")), i === !0 ? Ct() : i === !1 && N(), it ? it() : n === !1 && ft();
    }, it = (n = !1) => {
      J("quantity", "inline-block"), f.quantity.readOnly = n;
    }, ft = () => {
      j.value !== !1 && (dt(1), J("quantity", "none"), f.quantity.readOnly = !0);
    }, Ct = () => {
      if (!f.cart_button) {
        T("Cart button not found");
        return;
      }
      f.cart_button.disabled = !1;
    }, N = () => {
      if (j.value !== !1) {
        if (!f.cart_button) {
          T("Cart button not found");
          return;
        }
        f.cart_button.disabled = !0;
      }
    }, Vt = () => {
      T("Validation error"), N();
    }, dt = (n, i = 0) => {
      if (O(["setting cart quantity", n]), !f.quantity) {
        T("Quantity field not found when trying to set");
        return;
      }
      f.quantity.value = n.toFixed(i), console.assert(f.quantity.value === n.toFixed(i), "Quantity field value not set correctly");
    }, Rt = (n) => {
      O(["setting variation price", n]);
      const i = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      i && (i.innerText = R(n)), S.value = n;
    }, Ut = (n = !1) => {
      const i = n ? F.value?.display_price ?? 0 : S.value ?? F.value?.display_price ?? 0;
      return console.log("getCurrentVariationPrice", S.value, F.value?.display_price), typeof i == "string" ? parseFloat(i) : i;
    }, Qt = () => {
      if (!window?.smartcutConfig) {
        T("SmartCut config not found");
        return;
      }
      const n = window.smartcutConfig;
      t = n.settings;
      const i = jt(q(window, ["smartcutConfig", "banding_data"])), p = jt(q(window, ["smartcutConfig", "finish_data"])), _ = ($) => {
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
      }, { cutType: x, cutPreference: A } = _(t.cut_preference), E = {
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutType: x,
        cutPreference: A,
        stackHeight: t.stack_height || 100,
        guillotineOptions: {
          strategy: "efficiency",
          maxPhase: 0,
          headCuts: !1,
          limitStripDimensions: !1
        }
      }, k = {
        apiVersion: 3,
        debug: t.debug,
        numberFormat: t.numberFormat || "decimal",
        locale: n.locale,
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
      b.value = k.debug;
      const I = {
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
      B.value = At(), B.value ? it(!0) : ft(), a.type === "variable" ? rt(!1, !1) : nt(B.value);
      const Z = {
        type: a.type,
        stock: w.value.map(($) => $.toData()),
        variations: g ?? null,
        saw: E,
        options: k,
        banding: i,
        finish: p,
        machining: I
      };
      Z.type === "variable" && (O(["setting variable product form listeners"]), jQuery(function($) {
        const Tt = $(".variations_form");
        Tt.on("reset_data", () => rt(!1, !1)).on("found_variation", (bt, le) => ie(bt, le));
        const ht = Tt.find("select");
        ht.length > 0 && ht.toArray().every((bt) => bt.value !== "") && ht.last().trigger("change");
      }));
      const st = {
        product: a,
        selectedVariation: F,
        inputs: y,
        elements: f,
        inputType: h,
        formatPrice: R,
        getCurrentVariationPrice: Ut,
        setInputValue: mt,
        setCartQuantity: dt,
        setVariationPrice: Rt,
        isExtraEnabled: gt,
        isQuantityPricing: At,
        isMachiningEnabled: Et,
        isSurchargeEnabled: Lt,
        getTotalBandingPrice: Zt,
        getTotalFinishPrice: Jt,
        getTotalMachiningPrice: Xt,
        getInputValue: te,
        enableAddToCart: Ct,
        log: O,
        error: T
      }, _t = De({
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
      }, st);
      v = _t.calculatePrice, L = _t.resetPricing, Oe(() => {
        et.value && et.value.init(Z);
      });
    }, Ht = (n) => {
      const i = n?.multiple_sizes === !0;
      a = {
        type: n?.product_type,
        multiple_sizes: i,
        size: n?.size ? n.size.split(" | ") : [],
        l: !i && n?.l ? parseFloat(n.l) : null,
        w: !i && n?.w ? parseFloat(n.w) : null,
        t: n?.t ?? null,
        price: n?.price ? parseFloat(n.price) : null,
        stock_name: n?.stock_sku || n.stock_name,
        stock_sku: n?.stock_sku || null
      }, a.multiple_sizes || (a.l || T("product 'length' attribute not available"), a.w || T("product 'width' attribute not available"));
    }, Yt = (n) => {
      h.value = q(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", P.value = q(window, ["smartcutConfig", "settings", "formula_url"]), O([`Input type: ${h.value}`]), d = {
        thousands_separator: n?.thousands_separator,
        decimal_separator: n?.decimal_separator,
        number_of_decimals: n?.number_of_decimals,
        currency_symbol: n?.currency_symbol,
        currency_position: n?.currency_position
      };
    }, Wt = () => {
      const n = {
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
      for (const [i, p] of Object.entries(n))
        f[i] = document.querySelector(p);
      if (!f.checkout)
        return T("checkout iframe not found");
      if (!f.quantity)
        return T("quantity field not found");
      if (!f.cart_button)
        return T("cart button not found");
      f.quantity.readOnly = !0, N();
    }, Dt = () => ({
      w1: t.stock_trim_x1 ?? 0,
      w2: t.stock_trim_x2 ?? 0,
      l1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      l2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), G = (n = null, i = null, p = null, _ = null, x = null) => {
      let A;
      if (x && typeof x == "object") {
        A = [];
        for (const [k, I] of Object.entries(x))
          k !== "attribute_size" && k !== "attribute_thickness" && A.push(`${k.replace("attribute_", "")}: ${I}`);
        A = A.join(" - ");
      }
      const E = {
        name: a.stock_name,
        code: a.stock_sku || void 0,
        l: n,
        w: i,
        t: p,
        grain: t.stock_grain,
        cost: parseFloat(_?.toString() || "0"),
        trim: Dt(),
        allowExactFitShapes: !0,
        notes: A
      };
      return new me(E, t.numberFormat || "decimal");
    }, Kt = () => {
      if (a?.stock_name || T("product name not specified"), w.value = [], a.multiple_sizes)
        for (const n of a.size) {
          if (!ot(n)) continue;
          const [i, p] = n.split("x"), _ = G(
            parseFloat(i),
            parseFloat(p),
            a?.t,
            a.price
          );
          w.value.push(_);
        }
      else
        w.value.push(G(
          a.l,
          a.w,
          a?.t,
          a?.price
        ));
    }, St = (n, i) => {
      const p = n.split(".");
      return p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, i), p.join(".");
    }, R = (n = 0, i = "") => {
      if (!n)
        return i ? xt("0.00") : "0.00";
      typeof n == "string" && (n = parseFloat(n));
      const p = n.toFixed(d.number_of_decimals).replace(".", d.decimal_separator), _ = St(p, d.thousands_separator);
      return i ? xt(_) : _;
    }, Gt = (n) => {
      if (n == null) return "";
      typeof n == "string" && (n = parseFloat(n));
      const p = n % 1 !== 0 ? d.number_of_decimals : 0, _ = n.toFixed(p).replace(".", d.decimal_separator);
      return St(_, d.thousands_separator);
    }, xt = (n) => {
      switch (d.currency_position) {
        case "left":
          return `${d.currency_symbol}${n}`;
        case "right":
          return `${n}${d.currency_symbol}`;
        default:
          return `${d.currency_symbol}${n}`;
      }
    }, pt = (n, i) => Ie(q(s, [n]), i), Jt = (n) => {
      const i = n.metadata?.finishAreaByType ?? {};
      let p = 0;
      if (typeof i == "object") {
        for (let [_, x] of Object.entries(i)) {
          typeof x == "string" && (x = parseFloat(x));
          const A = _.split("|"), E = pt("finish", A);
          if (E === null) continue;
          const k = Pe(parseFloat(E.toString()), Number(x));
          p += k;
        }
        if ("min_finish_charge" in t) {
          const _ = parseFloat(t?.min_finish_charge);
          if (_ > 0 && p > 0 && p < _)
            return _;
        }
      }
      return p;
    }, Zt = (n) => {
      const i = n.metadata?.bandingLengthByType ?? {};
      let p = 0;
      if (typeof i == "object") {
        for (let [_, x] of Object.entries(i)) {
          typeof x == "string" && (x = parseFloat(x));
          const A = _.split("|"), E = pt("banding", A);
          if (E === null) continue;
          const k = Ce(parseFloat(E.toString()), Number(x), t.unit_system === "imperial" ? "imperial" : "metric");
          p += k;
        }
        if ("min_banding_charge" in t) {
          const _ = parseFloat(t?.min_banding_charge);
          if (_ > 0 && p > 0 && p < _)
            return _;
        }
      }
      return p;
    }, Xt = (n) => (m.holes ?? 0) * (n.metadata.numHoles ?? 0) + (m.corners ?? 0) * (n.metadata.numCorners ?? 0), J = (n, i) => {
      n in f && f[n]?.style && (f[n].style.display = i);
    }, mt = (n, i) => {
      at(n) ? y[n].value = i : T(`Attempting to set input but key '${n}' does not exist`);
    }, te = (n) => {
      if (at(n))
        return y[n].value;
    }, at = (n) => n in y && y[n] instanceof HTMLInputElement, Ft = () => {
      dt(1), N(), L();
      for (const n in y)
        n !== "smartcut-hardware-price" && mt(n, null);
    }, At = () => {
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
    }, gt = (n) => {
      if (ge(t, ["enable", n]) && q(t, ["enable", n]) === !1)
        return !1;
      const i = q(s, [n]);
      return !!(i && Object.values(i).length);
    }, Et = () => t.enable_machining === !0, Lt = () => !(t?.surcharge_type === "none" || !t?.surcharge || t.surcharge === "0.00"), ee = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "full_stock_plus_part_perimeter" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Lt() || gt("banding") || gt("finish") || Et()), ne = (n) => {
      let i = n?.attributes?.attribute_size;
      return i || (i = a?.size), i;
    }, ot = (n) => /\d+x\d+/.test(n), re = () => {
      window.smartcutConfig.input_fields.forEach((n) => {
        const i = n.replaceAll("_", "-");
        y[i] = document.getElementById(i);
      });
    }, ie = (n, i) => {
      Ft(), F.value = i, O(["variation selected", i.attributes]), w.value = [];
      const p = q(i, ["attributes", "attribute_thickness"]) ?? null;
      if (a.selected_thickness = p, c.value.forEach((_) => {
        _.t = K({ v: p });
      }), a.multiple_sizes) {
        const _ = ne(i);
        if (O([`variation found with size: ${_} & thickness: ${p}`]), !_)
          return rt(!1), T("The size of this multiple size product could not be found");
        if (Array.isArray(_) ? nt(B.value) : ot(_) ? rt(!0, !0) : nt(B.value), g?.length) {
          let x;
          const A = p;
          let E = i.display_price;
          Array.isArray(_) ? x = _.map((k) => ({
            size: k,
            l: k.split("x")[0],
            w: k.split("x")[1],
            t: A,
            price: E
          })) : x = g.filter((k) => ot(k?.attributes?.size) ? p === (k?.attributes?.thickness ?? null) : !1).map((k) => {
            const I = k?.attributes?.size.split("x")[0] ?? null, Z = k?.attributes?.size.split("x")[1] ?? null;
            let st = 0;
            return i.display_price || (st = g.find(($) => ot($.attributes?.size) && $.attributes?.thickness === k?.attributes?.thickness && $.attributes?.size === k?.attributes?.size && $.display_price > 0).display_price), O([
              `size attribute: '${k?.attributes?.size}'`,
              `price for thickness ${p}, dimensions: ${I}x${Z} is ${E}`
            ]), {
              size: k?.attributes?.size,
              l: I,
              w: Z,
              t: A,
              price: E || st
            };
          }), j.value === !0 && x.forEach((k) => {
            const I = G(
              k.l,
              k.w,
              k.t,
              k.price,
              i?.attributes
            );
            w.value.push(I);
          });
        }
      } else {
        if (!g.some((_) => "thickness" in _.attributes))
          w.value.push(G(
            a.l,
            a.w,
            p,
            i.display_price,
            i?.attributes
          ));
        else {
          const _ = g.find((x) => x.attributes?.thickness === p);
          if (!_) return T(`variation not found for thickness ${p}`);
          w.value.push(G(
            a.l,
            a.w,
            p,
            _.price,
            i?.attributes
          ));
        }
        nt(B.value);
      }
    }, ae = (n) => {
      if (!at("smartcut-api-result")) return;
      const i = y["smartcut-api-result"].closest("form");
      if (!i) return;
      const p = JSON.stringify(n.apiResultV3), _ = new Blob([p], { type: "application/json" }), x = new File([_], "api-result.json", { type: "application/json" }), A = new DataTransfer();
      A.items.add(x);
      const E = i.querySelector('[name="smartcut_api_result"]');
      E instanceof HTMLInputElement && (E.files = A.files);
    }, oe = async (n) => {
      const p = Ze(Fe, n, z.value, Gt).split(",")[1], _ = new _e();
      _.file("order-summary.pdf", p);
      const x = await _.generateAsync({ type: "blob" }), A = new File([x], "order-summary.zip", { type: "application/zip" });
      if (!at("smartcut-order-summary")) return;
      const E = y["smartcut-order-summary"].closest("form");
      if (!E) return;
      const k = new DataTransfer();
      k.items.add(A);
      const I = E.querySelector('[name="smartcut_order_summary"]');
      I instanceof HTMLInputElement && (I.files = k.files);
    }, se = async (n) => {
      Ft(), O(["result event received", n]);
      const i = await v(n);
      if (!i.success) {
        console.error(i.error);
        return;
      }
      const p = t.minimum_cut_to_size_price ?? 0;
      if (p > 0 && (i.totalPrice ?? 0) < p) {
        N(), o({
          message: `A minimum cut-to-size order of ${R(p)} is required. Your order total is ${R(i.totalPrice ?? 0)}.`,
          type: "warning"
        });
        return;
      }
      await oe(n), n.apiResultV3 && ae(n);
    }, ce = (n, i) => {
      N(), n && (z.value = qe(n)), mt("smartcut-hardware-price", i ?? 0);
    };
    return Le(() => {
      console.log("💥 Powered by https://smartcut.dev", window?.smartcutConfig?.version), O(["Launching WordPress checkout..."]), s.banding = q(window, ["smartcutConfig", "banding_data"]), s.finish = q(window, ["smartcutConfig", "finish_data"]), m = q(window, ["smartcutConfig", "machining_pricing"]), g = q(window, ["smartcutConfig", "variations"]), Wt(), re(), Ht(window.smartcutConfig), Yt(window.smartcutConfig), Qt(), Kt(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((p) => {
        const _ = document.querySelector(p);
        _ && (_.style.display = "none");
      });
      const i = new CustomEvent("smartcut/ready");
      window.dispatchEvent(i), O(["Wordpress checkout ready"]);
    }), (n, i) => (ct(), $t($e, null, [
      yt(lt(l), { position: "top-left" }),
      b.value ? (ct(), $t("div", Xe, [
        i[0] || (i[0] = Te("div", null, "WP - developer information", -1)),
        yt(lt(u), {
          data: [w.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        yt(lt(u), {
          data: [w.value.map((p) => p.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : kt("", !0),
      h.value === "formula" && P.value ? (ct(), zt(lt(r), {
        key: 1,
        ref: "configurator",
        "format-price": R,
        url: P.value,
        debug: b.value,
        onHardwareResult: ce,
        onPanelResult: N
      }, null, 8, ["url", "debug"])) : kt("", !0),
      h.value === "manual" || h.value === "formula" && P.value ? (ct(), zt(we, {
        key: 2,
        ref_key: "calculator",
        ref: et,
        readonly: h.value === "formula",
        "input-stock": C.value,
        "find-extras-price": pt,
        "format-price": R,
        "input-type": h.value,
        debug: b.value,
        onLog: O,
        onError: T,
        onInputsChanged: N,
        onValidationError: Vt,
        onResult: se
      }, null, 8, ["readonly", "input-stock", "input-type", "debug"])) : kt("", !0)
    ], 64));
  }
});
export {
  ln as default
};
