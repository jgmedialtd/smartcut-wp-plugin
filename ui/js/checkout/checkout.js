import { d as Fe, y as ut, g as k, U as De, j as Ae, o as R, c as me, A as fe, u as V, b as we, t as Se, f as te, q as oe, F as Be, k as Ve, O as Re, C as ie, G as pt, V as dt, h as Ie, W as ft, X as mt, Y as _t, Z as ht } from "./vendor-vue-CrziaopC.js";
import { i as xe, B as yt } from "./vendor-i18n-D9hV6ZJH.js";
import { q as gt, d as y, v as bt, w as $e, x as Le, y as S, C as He, z as Y, A as vt, p as wt, B as kt, D as St, E as xt, _ as Ft } from "./components-CHLKqL_7.js";
import { J as Et, H as Pt, I as zt, K as Tt, L as jt, M as qt, N as Ot, O as It, Q as $t, S as Lt, T as Dt, U as At, V as Bt } from "./vendor-CtQQhE4g.js";
import { E as Vt, a as J } from "./vendor-pdf-BmcHVhVw.js";
import { u as Rt, f as Ht } from "./composables-ldBk7_sv.js";
const Ut = Mt();
async function Mt() {
  const c = {
    main: import("./main-CMlXbzPm.js").then((l) => l.resources),
    errors: import("./errors-DqT4G1Wk.js").then((l) => l.resources)
  }, [v, O] = await Promise.all([
    c.main,
    c.errors
  ]), m = Object.keys(v), u = m.reduce((l, E) => ({
    ...l,
    [E]: {
      main: v[E],
      errors: O[E]
    }
  }), {});
  return bt(xe), xe.use(yt).init({
    debug: !1,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources: u,
    load: "languageOnly",
    supportedLngs: m,
    interpolation: {
      format: function(l, E) {
        return E === "capitalise" ? gt(l) : E === "sentenceCase" ? y(l) : l;
      }
    }
  });
}
const C = 5, re = 10, pe = ",", G = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, X = {
  fontSize: 9
}, Z = { left: 10 };
let ee = [];
const Yt = (c, v, O, m = (u) => u.toString()) => {
  var F;
  const u = new Vt({ orientation: "landscape" });
  let l = 10;
  u.setFontSize(20), u.text(y(c("pdf.order_summary")), 10, l), l += 15, u.setFontSize(14), u.text(c("description_item_plural", { a: "Your", i: "part" }), 10, l), l += C, ee = [
    y(c("length")),
    y(c("width")),
    y(c("thickness")),
    y(c("material")),
    y(c("quantity")),
    y(c("name")),
    `Banding (${$e.join(pe)})`,
    `Finish (${Le.join(pe)})`
  ];
  const E = v.parts.map((p) => {
    var x;
    const _ = $e.map((s) => p.banding[s] || "-").join(pe), t = Le.map((s) => p.banding[s] || "-").join(pe);
    return [
      m(p.l),
      m(p.w),
      m(p.t) || "-",
      ((x = p == null ? void 0 : p.material) == null ? void 0 : x.toUpperCase()) || "-",
      m(p.q),
      p.name || "-",
      _,
      t
    ];
  });
  J(u, {
    startY: l,
    head: [ee],
    body: E,
    margin: Z,
    headStyles: G,
    styles: X
  }), l = u.autoTable.previous.finalY + re, u.setFontSize(14), u.text(y(c("pdf.stock_requirements")), 10, l), l += C, ee = [
    y(c("length")),
    y(c("width")),
    y(c("thickness")),
    y(c("material")),
    y(c("quantity"))
    // 'Cost'
  ];
  const d = v.stock.map((p) => {
    var _;
    return [
      m(p.l),
      m(p.w),
      m(p.t) || "-",
      ((_ = p == null ? void 0 : p.material) == null ? void 0 : _.toUpperCase()) || "-",
      m(p.q)
      // stock.cost
    ];
  });
  if (J(u, {
    startY: l,
    head: [ee],
    body: d,
    margin: Z,
    headStyles: G,
    styles: X
  }), l = u.autoTable.previous.finalY + re, v.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(y(c("pdf.roll_requirements")), 10, l), l += C, ee = [
      c("name"),
      c("material"),
      c("length")
    ];
    const p = v.stock.map((_) => {
      var t, x;
      return [
        ((t = _ == null ? void 0 : _.name) == null ? void 0 : t.toUpperCase()) || "-",
        ((x = _ == null ? void 0 : _.material) == null ? void 0 : x.toUpperCase()) || "-",
        m(_.analysis.rollLength)
      ];
    });
    J(u, {
      startY: l,
      head: [ee],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), l = u.autoTable.previous.finalY + re;
  }
  if (O && Object.values(O)) {
    u.setFontSize(14), u.text("Hardware", 10, l), l += C;
    const p = Object.values(O).map((_) => [
      _.name.toUpperCase(),
      m(_.q)
      // item.totalCost.toFixed( 2 )
    ]);
    J(u, {
      startY: l,
      head: [[y(c("pdf.item")), y(c("quantity"))]],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), l = u.autoTable.previous.finalY + re;
  }
  u.setFontSize(14), u.text(y(c("pdf.totals")), 10, l), l += C;
  const P = [
    [y(c("pdf.total_parts")), m(v.metadata.totalPartsProduced)],
    [y(c("pdf.part_area")), m(v.metadata.totalPartArea)],
    [y(c("pdf.total_stock_required")), m(v.metadata.totalUsedStock)],
    [y(c("pdf.total_banding_length")), m(v.metadata.totalBandingLength)],
    [y(c("pdf.total_finish_area")), m(v.metadata.totalFinishArea)],
    [y(c("pdf.total_roll_length")), m(v.metadata.totalRollLength)]
  ];
  if (J(u, {
    startY: l,
    body: P,
    margin: Z,
    headStyles: G,
    styles: X
  }), l = u.autoTable.previous.finalY + re, (F = window == null ? void 0 : window.smartcutImages) != null && F.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(y(c("pdf.images")), 10, p), p += C;
    const _ = window.smartcutImages.flatMap((t, x) => t.metadata.map((s) => [
      x + 1,
      s.newName
    ]));
    J(u, {
      startY: p,
      body: _,
      head: [[y(c("pdf.part_index")), y(c("pdf.file_name"))]],
      margin: Z,
      headStyles: G,
      styles: X
    });
  }
  return u.output("datauristring");
}, Nt = {
  key: 0,
  class: "debug"
}, Qt = !0, Wt = /* @__PURE__ */ Fe({
  __name: "WordPress",
  setup(c) {
    const { t: v } = ut(["main", "errors"]), O = ie(() => import("./components-CHLKqL_7.js").then((e) => e.F)), m = ie(() => import("./components-CHLKqL_7.js").then((e) => e.O)), u = ie(() => import("./components-CHLKqL_7.js").then((e) => e.N)), { inputShapes: l } = Rt(), E = "production", d = {}, P = {}, F = k(null);
    let p, _, t;
    const x = {
      banding: null,
      finish: null
    };
    let s = null, L = [], H = null, T = {};
    const A = k(!1), I = k("manual"), N = k(""), j = k([]), Q = k(null), B = k(!0), ne = k(null), U = k(!1), a = k(null);
    De("calculator", () => a.value);
    const g = (e) => {
      A.value && console.log("SmartCut -", ...e);
    }, f = (e) => {
      console.error(`SmartCut - ${e}`);
    }, $ = (e = !0) => {
      U.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => ae(r, "block")), nt() && ae("pricing_table", "table"), e ? W(!0) : q(), M();
    }, D = (e = !0, n = !0) => {
      U.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => ae(o, "none")), n === !0 ? K() : n === !1 && M(), W();
    }, W = (e = !1) => {
      ae("quantity", "inline-block"), d.quantity.readOnly = e;
    }, q = () => {
      U.value !== !1 && (_e(1), ae("quantity", "none"), d.quantity.readOnly = !0);
    }, K = () => {
      if (!d.cart_button) {
        f("Cart button not found");
        return;
      }
      d.cart_button.disabled = !1;
    }, M = () => {
      if (U.value !== !1) {
        if (!d.cart_button) {
          f("Cart button not found");
          return;
        }
        d.cart_button.disabled = !0;
      }
    }, Ue = () => {
      f("Validation error"), M();
    }, _e = (e, n = 0) => {
      if (g(["setting cart quantity", e]), !d.quantity) {
        f("Quantity field not found when trying to set");
        return;
      }
      d.quantity.value = e.toFixed(n), console.assert(d.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Me = (e) => {
      g(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = le(e)), F.value = e;
    }, Ye = () => {
      var n;
      const e = F.value ?? ((n = Q.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, Ne = () => {
      if (!(window != null && window.smartcutConfig)) {
        f("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = ze(S(window, ["smartcutConfig", "banding_data"])), r = ze(S(window, ["smartcutConfig", "finish_data"])), o = {
        debug: t.debug,
        numberFormat: t.numberFormat,
        locale: e.locale,
        decimalPlaces: 2,
        //saw
        stockType: t.stock_type,
        bladeWidth: t.blade_width,
        cutPreference: t.cut_preference,
        stackHeight: t.stack_height,
        stockSelection: t.stock_selection,
        stockGrain: t.stock_grain,
        minSpacing: t.min_spacing,
        maxParts: t.max_parts ?? null,
        orientationModel: t.orientation_model,
        minDimension: t.min_dimension,
        partTrim: t.part_trim,
        enable: {
          banding: t.enable_banding,
          finish: t.enable_finish,
          orientation: t.enable_orientation,
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
          partA: (t == null ? void 0 : t.part_a_color) ?? "#1d9bc4",
          partB: (t == null ? void 0 : t.part_b_color) ?? "#065d7a",
          partHover: (t == null ? void 0 : t.part_hover_color) ?? "#f8b029",
          partSelected: (t == null ? void 0 : t.part_selected_color) ?? "#5bc85b",
          stock: (t == null ? void 0 : t.stock_color) ?? "#ffd166",
          button: (t == null ? void 0 : t.button_color) ?? "#118ab2",
          buttonText: (t == null ? void 0 : t.button_text_color) ?? "#ffffff",
          text: (t == null ? void 0 : t.text_color) ?? "#ffffff"
        }
      };
      A.value = o.debug;
      const h = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((z) => z.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((z) => z.trim()).filter(Boolean),
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
      B.value = je(), B.value ? W(!0) : q(), s.type === "variable" ? D(!1, !1) : $(B.value);
      const i = {
        type: s.type,
        stock: j.value,
        variations: L ?? null,
        options: o,
        banding: n,
        finish: r,
        machining: h
      };
      i.type === "variable" && (g(["setting variable product form listeners"]), jQuery(function(z) {
        z(".variations_form").on("reset_data", () => D(!1, !1)).on("found_variation", (ue, ct) => it(ue, ct));
      }));
      const b = {
        product: s,
        selectedVariation: Q,
        inputs: P,
        elements: d,
        inputType: I,
        formatPrice: le,
        getCurrentVariationPrice: Ye,
        setInputValue: ye,
        setCartQuantity: _e,
        setVariationPrice: Me,
        isExtraEnabled: be,
        isQuantityPricing: je,
        isMachiningEnabled: qe,
        isSurchargeEnabled: Oe,
        getTotalBandingPrice: Ze,
        getTotalFinishPrice: Xe,
        getTotalMachiningPrice: et,
        getInputValue: tt,
        enableAddToCart: K,
        log: g,
        error: f
      }, w = Ht({
        pricing_strategy: t.pricing_strategy,
        number_format: t.number_format,
        unit_system: t.unit_system,
        cut_length_price: t.cut_length_price,
        per_part_price: t.per_part_price,
        surcharge: t.surcharge,
        surcharge_type: t.surcharge_type,
        enable_offcut_pricing: t.enable_offcut_pricing,
        offcut_min_length: t.offcut_min_length,
        offcut_min_width: t.offcut_min_width
      }, b);
      p = w.calculatePrice, _ = w.resetPricing, Ve(() => {
        a.value && a.value.init(i);
      });
    }, Qe = (e) => {
      const n = (e == null ? void 0 : e.multiple_sizes) === !0;
      s = {
        type: e == null ? void 0 : e.product_type,
        multiple_sizes: n,
        size: e != null && e.size ? e.size.split(" | ") : [],
        l: !n && (e != null && e.l) ? parseFloat(e.l) : null,
        w: !n && (e != null && e.w) ? parseFloat(e.w) : null,
        t: (e == null ? void 0 : e.t) ?? null,
        price: e != null && e.price ? parseFloat(e.price) : null,
        stock_name: (e == null ? void 0 : e.stock_sku) || e.stock_name
      }, s.multiple_sizes || (s.l || f("product 'length' attribute not available"), s.w || f("product 'width' attribute not available"));
    }, We = (e) => {
      I.value = S(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", N.value = S(window, ["smartcutConfig", "settings", "formula_url"]), g([`Input type: ${I.value}`]), g([`Input type: ${I.value}`]), T = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, Ke = () => {
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
      for (const [n, r] of Object.entries(e))
        d[n] = document.querySelector(r);
      if (!d.checkout)
        return f("checkout iframe not found");
      if (!d.quantity)
        return f("quantity field not found");
      if (!d.cart_button)
        return f("cart button not found");
      d.quantity.readOnly = !0, M();
    }, Je = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), se = (e = null, n = null, r = null, o = null, h = null) => {
      let i;
      if (h && typeof h == "object") {
        i = [];
        for (const [w, z] of Object.entries(h))
          w !== "attribute_size" && w !== "attribute_thickness" && i.push(`${w.replace("attribute_", "")}: ${z}`);
        i = i.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: r,
        grain: t.stock_grain,
        cost: parseFloat((o == null ? void 0 : o.toString()) || "0"),
        trim: Je(),
        allowExactFitShapes: !0,
        notes: i
      };
    }, Ce = () => {
      if (s != null && s.stock_name || f("product name not specified"), j.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!ve(e)) continue;
          const [n, r] = e.split("x"), o = se(
            parseFloat(n),
            parseFloat(r),
            s == null ? void 0 : s.t,
            s.price
          );
          j.value.push(o);
        }
      else
        j.value.push(se(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, Ee = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, le = (e = 0, n = "") => {
      if (!e)
        return n ? Pe("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(T.number_of_decimals).replace(".", T.decimal_separator), o = Ee(r, T.thousands_separator);
      return n ? Pe(o) : o;
    }, Ge = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? T.number_of_decimals : 0, o = e.toFixed(r).replace(".", T.decimal_separator);
      return Ee(o, T.thousands_separator);
    }, Pe = (e) => {
      switch (T.currency_position) {
        case "left":
          return `${T.currency_symbol}${e}`;
        case "right":
          return `${e}${T.currency_symbol}`;
        default:
          return `${T.currency_symbol}${e}`;
      }
    }, ce = (e) => {
      const n = (r) => kt(St(r), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, ze = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, r = Object.values(e);
      for (const o of r)
        o != null && o.variations ? (n.labels.push(...Object.keys(o.options)), Object.values(o.variations).forEach((h) => {
          const { options: i } = h, b = Object.values(i).map((w) => ce(w)).join("|");
          n.pricing[b] = parseInt(h.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((h) => {
          n.pricing[ce(h)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, he = (e, n) => {
      if (!n.length || !Y(x, [e])) return null;
      const r = S(x, [e]);
      if (!vt(r)) return null;
      const h = Object.values(r).map((i) => i != null && i.variations ? Object.values(i.variations).map((b) => (b.type = "variable", b)) : (i.type = "simple", i)).flat().find((i) => {
        let b;
        return i.type === "simple" ? b = Object.keys(i.options) : b = Object.values(i.options), b ? b.every((w, z) => ce(w) === ce(n[z])) : !1;
      });
      return h != null && h.price ? parseFloat(h.price) : null;
    }, Xe = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const h = r.split("|"), i = he("finish", h);
          if (i === null) continue;
          const w = Number(o) / 1e6 * parseFloat(i.toString());
          n += w;
        }
        if ("min_finish_charge" in t) {
          const r = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, Ze = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const h = r.split("|"), i = he("banding", h);
          if (i === null) continue;
          const b = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(i.toString());
          n += b;
        }
        if ("min_banding_charge" in t) {
          const r = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, et = (e) => (H.holes ?? 0) * (e.metadata.numHoles ?? 0) + (H.corners ?? 0) * (e.metadata.numCorners ?? 0), ae = (e, n) => {
      var r;
      e in d && ((r = d[e]) != null && r.style) && (d[e].style.display = n);
    }, ye = (e, n) => {
      ge(e) ? P[e].value = n : f(`Attempting to set input but key '${e}' does not exist`);
    }, tt = (e) => {
      if (ge(e))
        return P[e].value;
      f(`Attempting to get input but key '${e}' does not exist`);
    }, ge = (e) => e in P && P[e] instanceof HTMLInputElement, Te = () => {
      _e(1), M(), _();
      for (const e in P)
        e !== "smartcut-hardware-price" && ye(e, null);
    }, je = () => {
      var e;
      if (((e = window.smartcutConfig) == null ? void 0 : e.product_type) === "variable")
        return !1;
      switch (t.pricing_strategy) {
        case "full_stock":
        case "part_area":
        case "full_stock_plus_cut_length":
        case "full_stock_plus_num_parts":
          return !0;
        case "roll_length":
        case "cut_length":
          return !1;
        default:
          return !1;
      }
    }, be = (e) => {
      if (Y(t, ["enable", e]) && S(t, ["enable", e]) === !1)
        return !1;
      const n = S(x, [e]);
      return !!(n && Object.values(n).length);
    }, qe = () => t.enable_machining === !0, Oe = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), nt = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Oe() || be("banding") || be("finish") || qe()), at = (e) => {
      var r;
      let n = (r = e == null ? void 0 : e.attributes) == null ? void 0 : r.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ve = (e) => /\d+x\d+/.test(e), rt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        P[n] = document.getElementById(n);
      });
    }, it = (e, n) => {
      Te(), Q.value = n, g(["variation selected", n.attributes]), j.value = [];
      const r = S(n, ["attributes", "attribute_thickness"]);
      if (s.selected_thickness = r, l.value.forEach((o) => {
        o.t = wt({ v: r });
      }), s.multiple_sizes) {
        const o = at(n);
        if (g([`variation found with size: ${o} & thickness: ${r}`]), !o)
          return D(!1), f("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? $(B.value) : ve(o) ? D(!0, !0) : $(B.value), L != null && L.length && r) {
          let h;
          Array.isArray(o) ? h = o.map((i) => ({
            size: i,
            l: i.split("x")[0],
            w: i.split("x")[1],
            t: r,
            price: n.display_price
          })) : h = L.filter((i) => {
            var b, w;
            return ve((b = i == null ? void 0 : i.attributes) == null ? void 0 : b.size) ? r === ((w = i == null ? void 0 : i.attributes) == null ? void 0 : w.thickness) : !1;
          }).map((i) => {
            var b, w, z, ue;
            return g([
              `size attribute: '${(b = i == null ? void 0 : i.attributes) == null ? void 0 : b.size}'`,
              `price for 'thickness ${r}, size: ${o}' is ${n.display_price}`
            ]), {
              size: (w = i == null ? void 0 : i.attributes) == null ? void 0 : w.size,
              l: (z = i == null ? void 0 : i.attributes) == null ? void 0 : z.size.split("x")[0],
              w: (ue = i == null ? void 0 : i.attributes) == null ? void 0 : ue.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), U.value === !0 && h.forEach((i) => {
            const b = se(
              i.l,
              i.w,
              i.t,
              i.price,
              n == null ? void 0 : n.attributes
            );
            j.value.push(b);
          });
        }
      } else {
        const o = L.find((h) => h.attributes.thickness === r);
        if (!o) return f(`variation not found for thickness ${r}`);
        j.value.push(se(
          s.l,
          s.w,
          r,
          o.price,
          n == null ? void 0 : n.attributes
        )), $(B.value);
      }
    }, ot = async (e) => {
      Te(), g(["result event received", e]);
      const n = await p(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await st(e);
    }, st = async (e) => {
      const r = Yt(v, e, ne.value, Ge).split(",")[1], o = new Et();
      o.file("order-summary.pdf", r);
      const h = await o.generateAsync({ type: "blob" }), i = new File([h], "order-summary.zip", { type: "application/zip" });
      if (!ge("smartcut-order-summary")) return;
      const b = P["smartcut-order-summary"].closest("form");
      if (!b) return;
      const w = new DataTransfer();
      w.items.add(i);
      const z = b.querySelector('[name="smartcut_order_summary"]');
      z instanceof HTMLInputElement && (z.files = w.files);
    }, lt = (e, n) => {
      M(), e && (ne.value = Re(e)), ye("smartcut-hardware-price", n ?? 0);
    };
    return Ae(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), g(["Launching WordPress checkout..."]), x.banding = S(window, ["smartcutConfig", "banding_data"]), x.finish = S(window, ["smartcutConfig", "finish_data"]), H = S(window, ["smartcutConfig", "machining_pricing"]), L = S(window, ["smartcutConfig", "variations"]), Ke(), rt(), Qe(window.smartcutConfig), We(window.smartcutConfig), Ne(), Ce(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const o = document.querySelector(r);
        o && (o.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), g(["Wordpress checkout ready"]);
    }), (e, n) => (R(), me(Be, null, [
      fe(V(u), { position: "top-left" }),
      V(E) === "development" && Qt ? (R(), me("div", Nt, [
        n[0] || (n[0] = we("div", null, "WP - developer information", -1)),
        fe(V(m), {
          data: [V(s)],
          paths: ["product"]
        }, null, 8, ["data"]),
        fe(V(m), {
          data: [j.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        we("div", null, "Stock thickness: " + Se(j.value[0].t), 1),
        we("div", null, "Shape thickness: " + Se(V(l)[0].t), 1)
      ])) : te("", !0),
      I.value === "formula" && N.value ? (R(), oe(V(O), {
        key: 1,
        ref: "formulapricing",
        "format-price": le,
        url: N.value,
        debug: A.value,
        onHardwareResult: lt,
        onPanelResult: M
      }, null, 8, ["url", "debug"])) : te("", !0),
      I.value === "manual" || I.value === "formula" && N.value ? (R(), oe(He, {
        key: 2,
        ref_key: "calculator",
        ref: a,
        readonly: I.value === "formula",
        debug: A.value,
        stock: j.value,
        "find-extras-price": he,
        "format-price": le,
        "input-type": I.value,
        onLog: g,
        onError: f,
        onInputsChanged: M,
        onValidationError: Ue,
        onResult: ot
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Kt = /* @__PURE__ */ Fe({
  __name: "Vanilla",
  emits: ["ready"],
  setup(c, { expose: v, emit: O }) {
    const m = ie(() => import("./components-CHLKqL_7.js").then((a) => a.F)), u = ie(() => import("./components-CHLKqL_7.js").then((a) => a.N)), l = O, E = "", d = k(!1), P = k([]), F = k({
      banding: null,
      finish: null,
      machining: null
    }), p = k("USD"), _ = k("en-US"), t = k("manual"), x = k(""), s = pt(null), L = k(null), H = k();
    De("calculator", () => H.value);
    const T = (a) => {
      d.value && console.log("SmartCut -", ...a);
    }, A = (a) => {
      console.error(`SmartCut - ${a}`);
    }, I = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, N = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, j = (a) => {
      L.value = a;
    }, Q = (a = 0, g = _.value) => {
      if (a === !0) return "";
      try {
        g = g.replace("_", "-");
        const f = Number(a);
        return !f && f !== 0 ? "" : isNaN(f) ? (console.error("formatPrice - invalid price:", a), "") : f.toLocaleString(g, {
          style: "currency",
          currency: p.value
        });
      } catch (f) {
        return console.error("Error formatting price:", f), "";
      }
    }, B = (a, g) => {
      var D;
      if (!((D = F.value) != null && D[a])) return null;
      const f = g.join("|"), $ = S(F.value, [a, f]);
      return typeof $ == "number" ? $ : parseFloat($);
    }, ne = (a) => {
      xt(a), P.value = a.stock, F.value.banding = S(a, ["banding", "pricing"]), F.value.finish = S(a, ["finish", "pricing"]), F.value.machining = S(a, ["machining", "pricing"]), Y(a, ["options", "currency"]) && (p.value = S(a, ["options", "currency"])), Y(a, ["options", "locale"]) && (_.value = S(a, ["options", "locale"]).replace("_", "-")), (Y(a, ["options", "formula", "url"]) || Y(a, ["options", "formula", "spec"])) && (t.value = "formula", x.value = S(a, ["options", "formula", "url"]) ?? null, s.value = S(a, ["options", "formula", "spec"]) ?? null), Ve(() => {
        H.value && H.value.init(a);
      });
    }, U = (a) => {
      var $, D, W;
      const g = a;
      if (g.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, ($ = a == null ? void 0 : a.metadata) != null && $.totalStockCost && (g.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        _.value,
        {
          style: "currency",
          currency: p.value
        }
      )), (D = a == null ? void 0 : a.metadata) != null && D.bandingLengthByType)
        for (const [q, K] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!Y(F.value, ["banding", q])) {
            A(`Banding price ${q} not found`);
            continue;
          }
          g.checkout.formattedBandingCost[q] = (K / 1e3 * F.value.banding[q]).toLocaleString(_.value, { style: "currency", currency: p.value });
        }
      if ((W = a == null ? void 0 : a.metadata) != null && W.finishAreaByType)
        for (const [q, K] of Object.entries(a.metadata.finishAreaByType)) {
          if (!Y(F.value, ["finish", q])) {
            A(`Finish price ${q} not found`);
            continue;
          }
          g.checkout.formattedFinishCost[q] = (K / 1e6 * F.value.finish[q]).toLocaleString(_.value, { style: "currency", currency: p.value });
        }
      const f = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(g))
      });
      window.dispatchEvent(f);
    };
    return dt(() => {
      console.log(`💥 Powered by https://smartcut.dev V${E}`);
      const a = new URLSearchParams(window.location.search);
      d.value = !!a.has("debug"), d.value && console.log("Smartcut - debug enabled");
    }), Ae(() => {
      window.smartcutCheckout = { init: ne }, l("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), v({
      init: ne,
      debug: d,
      stock: P,
      pricing: F,
      currency: p,
      locale: _,
      inputType: t,
      formulaURL: x,
      formulaSpec: s,
      hardWareResult: L,
      log: T,
      error: A,
      calculating: N,
      result: U,
      formatPrice: Q,
      findExtrasPrice: B,
      setHardwareResult: j
    }), (a, g) => (R(), me(Be, null, [
      fe(V(u), { position: "top-left" }),
      t.value === "formula" && (x.value || s.value) ? (R(), oe(V(m), {
        key: 0,
        ref: "formulapricing",
        "format-price": Q,
        url: x.value,
        spec: s.value,
        debug: d.value,
        onHardwareResult: j
      }, null, 8, ["url", "spec", "debug"])) : te("", !0),
      t.value === "manual" || t.value === "formula" && (x.value || s.value) ? (R(), oe(He, {
        key: 1,
        ref_key: "calculator",
        ref: H,
        readonly: t.value === "formula",
        debug: d.value,
        stock: P.value,
        "input-type": t.value,
        "find-extras-price": B,
        "format-price": Q,
        onLog: T,
        onError: A,
        onCalculating: N,
        onValidationError: I,
        onResult: U
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Jt = {
  key: 1,
  class: "error-message"
}, Ct = /* @__PURE__ */ Fe({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(c, { expose: v }) {
    const O = k(!1), m = k(null), u = Re({
      wordpress: Wt,
      vanilla: Kt
    }), l = c, E = Ie(() => {
      if (!l.type) return null;
      const d = l.type.toLowerCase();
      return u[d] || null;
    });
    return v({
      componentType: Ie(() => l.type),
      isComponentMounted: O,
      checkout: m
    }), (d, P) => E.value ? (R(), oe(ft(E.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: m
    }, null, 512)) : l.type ? (R(), me("div", Jt, " Invalid component type: " + Se(l.type), 1)) : te("", !0);
  }
}), Gt = /* @__PURE__ */ Ft(Ct, [["__scopeId", "data-v-6d642def"]]);
Pt.add(
  zt,
  Tt,
  jt,
  qt,
  Ot,
  It,
  $t,
  Lt,
  Dt,
  At,
  Bt
);
let de = null, ke = !1;
const Xt = async () => {
  if (!ke) {
    ke = !0;
    try {
      const c = document.querySelector("#smartcut-app");
      if (!c) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const v = c.getAttribute("data-type") || "";
      de = mt(Gt, { type: v }), await Ut, de.use(_t, { i18next: xe }), de.component("FontAwesomeIcon", ht), de.mount("#smartcut-app");
    } catch (c) {
      console.error("SmartCut mount error:", c);
    } finally {
      ke = !1;
    }
  }
};
Xt();
export {
  de as app,
  Xt as mount
};
