import { d as xe, y as bt, g as S, j as Qe, c as he, o as B, A as _e, e as te, q as se, u as N, C as oe, b as vt, F as We, k as Ke, O as Je, U as Ce, G as wt, V as kt, h as Ue, W as St, t as xt, X as Ft, Y as Pt, Z as Et } from "./vendor-vue-CJxGe4Gd.js";
import { i as Se, B as zt } from "./vendor-i18n-nUcHjT4U.js";
import { q as Tt, d as y, v as jt, w as Me, x as Ye, y as P, C as Ge, p as qt, z as V, A as Ot, B as $t, D as At, E as It, _ as Lt } from "./components-CRI1BfhQ.js";
import { J as Dt, D as Bt, E as Rt, G as Vt, H as Ht, I as Ne, K as Ut, L as Mt, M as Yt, N as Nt, O as Qt, Q as Wt, S as Kt, T as Jt, U as Ct } from "./vendor-Y3hHrfRC.js";
import { E as Gt, a as J } from "./vendor-pdf-DoOdgAw_.js";
import { u as Xt, f as Zt } from "./composables-2cx3fLQ9.js";
const en = tn();
async function tn() {
  const l = {
    main: import("./main-DQj1MkcK.js").then((c) => c.resources),
    errors: import("./errors-CMbWVxrq.js").then((c) => c.resources)
  }, [k, A] = await Promise.all([
    l.main,
    l.errors
  ]), m = Object.keys(k), u = m.reduce((c, x) => ({
    ...c,
    [x]: {
      main: k[x],
      errors: A[x]
    }
  }), {});
  return jt(Se), Se.use(zt).init({
    debug: !1,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources: u,
    load: "languageOnly",
    supportedLngs: m,
    interpolation: {
      format: function(c, x) {
        return x === "capitalise" ? Tt(c) : x === "sentenceCase" ? y(c) : c;
      }
    }
  });
}
const C = 5, ie = 10, fe = ",", G = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, X = {
  fontSize: 9
}, Z = { left: 10 };
let ee = [];
const nn = (l, k, A, m = (u) => u.toString()) => {
  var $;
  const u = new Gt({ orientation: "landscape" });
  let c = 10;
  u.setFontSize(20), u.text(y(l("pdf.order_summary")), 10, c), c += 15, u.setFontSize(14), u.text(l("description_item_plural", { a: "Your", i: "part" }), 10, c), c += C, ee = [
    y(l("length")),
    y(l("width")),
    y(l("thickness")),
    y(l("material")),
    y(l("quantity")),
    y(l("name")),
    `Banding (${Me.join(fe)})`,
    `Finish (${Ye.join(fe)})`
  ];
  const x = k.parts.map((p) => {
    var E;
    const f = Me.map((s) => p.banding[s] || "-").join(fe), t = Ye.map((s) => p.banding[s] || "-").join(fe);
    return [
      m(p.l),
      m(p.w),
      m(p.t) || "-",
      ((E = p == null ? void 0 : p.material) == null ? void 0 : E.toUpperCase()) || "-",
      m(p.q),
      p.name || "-",
      f,
      t
    ];
  });
  J(u, {
    startY: c,
    head: [ee],
    body: x,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, u.setFontSize(14), u.text(y(l("pdf.stock_requirements")), 10, c), c += C, ee = [
    y(l("length")),
    y(l("width")),
    y(l("thickness")),
    y(l("material")),
    y(l("quantity"))
    // 'Cost'
  ];
  const _ = k.stock.map((p) => {
    var f;
    return [
      m(p.l),
      m(p.w),
      m(p.t) || "-",
      ((f = p == null ? void 0 : p.material) == null ? void 0 : f.toUpperCase()) || "-",
      m(p.q)
      // stock.cost
    ];
  });
  if (J(u, {
    startY: c,
    head: [ee],
    body: _,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, k.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(y(l("pdf.roll_requirements")), 10, c), c += C, ee = [
      l("name"),
      l("material"),
      l("length")
    ];
    const p = k.stock.map((f) => {
      var t, E;
      return [
        ((t = f == null ? void 0 : f.name) == null ? void 0 : t.toUpperCase()) || "-",
        ((E = f == null ? void 0 : f.material) == null ? void 0 : E.toUpperCase()) || "-",
        m(f.analysis.rollLength)
      ];
    });
    J(u, {
      startY: c,
      head: [ee],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), c = u.lastAutoTable.finalY + ie;
  }
  if (A && Object.values(A)) {
    u.setFontSize(14), u.text("Hardware", 10, c), c += C;
    const p = Object.values(A).map((f) => [
      f.name.toUpperCase(),
      m(f.q)
      // item.totalCost.toFixed( 2 )
    ]);
    J(u, {
      startY: c,
      head: [[y(l("pdf.item")), y(l("quantity"))]],
      body: p,
      margin: Z,
      headStyles: G,
      styles: X
    }), c = u.lastAutoTable.finalY + ie;
  }
  u.setFontSize(14), u.text(y(l("pdf.totals")), 10, c), c += C;
  const v = [
    [y(l("pdf.total_parts")), m(k.metadata.totalPartsProduced)],
    [y(l("pdf.part_area")), m(k.metadata.totalPartArea)],
    [y(l("pdf.total_stock_required")), m(k.metadata.totalUsedStock)],
    [y(l("pdf.total_banding_length")), m(k.metadata.totalBandingLength)],
    [y(l("pdf.total_finish_area")), m(k.metadata.totalFinishArea)],
    [y(l("pdf.total_roll_length")), m(k.metadata.totalRollLength)]
  ];
  if (J(u, {
    startY: c,
    body: v,
    margin: Z,
    headStyles: G,
    styles: X
  }), c = u.lastAutoTable.finalY + ie, ($ = window == null ? void 0 : window.smartcutImages) != null && $.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(y(l("pdf.images")), 10, p), p += C;
    const f = window.smartcutImages.flatMap((t, E) => t.metadata.map((s) => [
      E + 1,
      s.newName
    ]));
    J(u, {
      startY: p,
      body: f,
      head: [[y(l("pdf.part_index")), y(l("pdf.file_name"))]],
      margin: Z,
      headStyles: G,
      styles: X
    });
  }
  return u.output("datauristring");
}, an = {
  key: 0,
  class: "debug"
}, rn = !1, on = /* @__PURE__ */ xe({
  __name: "WordPress",
  setup(l) {
    const { t: k } = bt(["main", "errors"]), A = oe(() => import("./components-CRI1BfhQ.js").then((e) => e.F)), m = oe(() => import("./components-CRI1BfhQ.js").then((e) => e.O)), u = oe(() => import("./components-CRI1BfhQ.js").then((e) => e.N)), { inputShapes: c } = Xt(), x = "production", _ = {}, v = {}, $ = S(null);
    let p, f, t;
    const E = {
      banding: null,
      finish: null
    };
    let s = null, q = [], Q = null, T = {};
    const W = S(!1), I = S("manual"), H = S(""), j = S([]), K = S(null), D = S(!0), ne = S(null), a = S(!1), z = S(null);
    Ce("calculator", () => z.value);
    const b = (e) => {
      W.value && console.log("SmartCut -", ...e);
    }, g = (e) => {
      console.error(`SmartCut - ${e}`);
    }, L = (e = !0) => {
      a.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((r) => re(r, "block")), dt() && re("pricing_table", "table"), e ? O(!0) : M(), R();
    }, U = (e = !0, n = !0) => {
      a.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((i) => re(i, "none")), n === !0 ? Fe() : n === !1 && R(), O ? O() : e === !1 && M();
    }, O = (e = !1) => {
      re("quantity", "inline-block"), _.quantity.readOnly = e;
    }, M = () => {
      a.value !== !1 && (ye(1), re("quantity", "none"), _.quantity.readOnly = !0);
    }, Fe = () => {
      if (!_.cart_button) {
        g("Cart button not found");
        return;
      }
      _.cart_button.disabled = !1;
    }, R = () => {
      if (a.value !== !1) {
        if (!_.cart_button) {
          g("Cart button not found");
          return;
        }
        _.cart_button.disabled = !0;
      }
    }, Xe = () => {
      g("Validation error"), R();
    }, ye = (e, n = 0) => {
      if (b(["setting cart quantity", e]), !_.quantity) {
        g("Quantity field not found when trying to set");
        return;
      }
      _.quantity.value = e.toFixed(n), console.assert(_.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ze = (e) => {
      b(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = le(e)), $.value = e;
    }, et = () => {
      var n;
      const e = $.value ?? ((n = K.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, tt = () => {
      if (!(window != null && window.smartcutConfig)) {
        g("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = ze(P(window, ["smartcutConfig", "banding_data"])), r = ze(P(window, ["smartcutConfig", "finish_data"])), i = {
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
      W.value = i.debug;
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
          diameters: t.machining_holes_diameters.split(",").map((F) => F.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((F) => F.trim()).filter(Boolean),
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
      D.value = je(), D.value ? O(!0) : M(), s.type === "variable" ? U(!1, !1) : L(D.value);
      const d = {
        type: s.type,
        stock: j.value,
        variations: q ?? null,
        options: i,
        banding: n,
        finish: r,
        machining: h
      };
      d.type === "variable" && (b(["setting variable product form listeners"]), jQuery(function(F) {
        F(".variations_form").on("reset_data", () => U(!1, !1)).on("found_variation", (Y, pe) => _t(Y, pe));
      }));
      const w = {
        product: s,
        selectedVariation: K,
        inputs: v,
        elements: _,
        inputType: I,
        formatPrice: le,
        getCurrentVariationPrice: et,
        setInputValue: be,
        setCartQuantity: ye,
        setVariationPrice: Ze,
        isExtraEnabled: we,
        isQuantityPricing: je,
        isMachiningEnabled: qe,
        isSurchargeEnabled: Oe,
        getTotalBandingPrice: ct,
        getTotalFinishPrice: lt,
        getTotalMachiningPrice: ut,
        getInputValue: pt,
        enableAddToCart: Fe,
        log: b,
        error: g
      }, o = Zt({
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
      }, w);
      p = o.calculatePrice, f = o.resetPricing, Ke(() => {
        z.value && z.value.init(d);
      });
    }, nt = (e) => {
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
      }, s.multiple_sizes || (s.l || g("product 'length' attribute not available"), s.w || g("product 'width' attribute not available"));
    }, at = (e) => {
      I.value = P(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", H.value = P(window, ["smartcutConfig", "settings", "formula_url"]), b([`Input type: ${I.value}`]), T = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, rt = () => {
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
        _[n] = document.querySelector(r);
      if (!_.checkout)
        return g("checkout iframe not found");
      if (!_.quantity)
        return g("quantity field not found");
      if (!_.cart_button)
        return g("cart button not found");
      _.quantity.readOnly = !0, R();
    }, it = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), ae = (e = null, n = null, r = null, i = null, h = null) => {
      let d;
      if (h && typeof h == "object") {
        d = [];
        for (const [o, F] of Object.entries(h))
          o !== "attribute_size" && o !== "attribute_thickness" && d.push(`${o.replace("attribute_", "")}: ${F}`);
        d = d.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: r,
        grain: t.stock_grain,
        cost: parseFloat((i == null ? void 0 : i.toString()) || "0"),
        trim: it(),
        allowExactFitShapes: !0,
        notes: d
      };
    }, ot = () => {
      if (s != null && s.stock_name || g("product name not specified"), j.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!ue(e)) continue;
          const [n, r] = e.split("x"), i = ae(
            parseFloat(n),
            parseFloat(r),
            s == null ? void 0 : s.t,
            s.price
          );
          j.value.push(i);
        }
      else
        j.value.push(ae(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, Pe = (e, n) => {
      const r = e.split(".");
      return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), r.join(".");
    }, le = (e = 0, n = "") => {
      if (!e)
        return n ? Ee("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const r = e.toFixed(T.number_of_decimals).replace(".", T.decimal_separator), i = Pe(r, T.thousands_separator);
      return n ? Ee(i) : i;
    }, st = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const r = e % 1 !== 0 ? T.number_of_decimals : 0, i = e.toFixed(r).replace(".", T.decimal_separator);
      return Pe(i, T.thousands_separator);
    }, Ee = (e) => {
      switch (T.currency_position) {
        case "left":
          return `${T.currency_symbol}${e}`;
        case "right":
          return `${e}${T.currency_symbol}`;
        default:
          return `${T.currency_symbol}${e}`;
      }
    }, ce = (e) => {
      const n = (r) => $t(At(r), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, ze = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, r = Object.values(e);
      for (const i of r)
        i != null && i.variations ? (n.labels.push(...Object.keys(i.options)), Object.values(i.variations).forEach((h) => {
          const { options: d } = h, w = Object.values(d).map((o) => ce(o)).join("|");
          n.pricing[w] = parseInt(h.price);
        })) : i != null && i.options && Object.keys(i.options).forEach((h) => {
          n.pricing[ce(h)] = parseInt(i.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, ge = (e, n) => {
      if (!n.length || !V(E, [e])) return null;
      const r = P(E, [e]);
      if (!Ot(r)) return null;
      const h = Object.values(r).map((d) => d != null && d.variations ? Object.values(d.variations).map((w) => (w.type = "variable", w)) : (d.type = "simple", d)).flat().find((d) => {
        let w;
        return d.type === "simple" ? w = Object.keys(d.options) : w = Object.values(d.options), w ? w.every((o, F) => ce(o) === ce(n[F])) : !1;
      });
      return h != null && h.price ? parseFloat(h.price) : null;
    }, lt = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const h = r.split("|"), d = ge("finish", h);
          if (d === null) continue;
          const o = Number(i) / 1e6 * parseFloat(d.toString());
          n += o;
        }
        if ("min_finish_charge" in t) {
          const r = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, ct = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [r, i] of Object.entries(e)) {
          typeof i == "string" && (i = parseFloat(i));
          const h = r.split("|"), d = ge("banding", h);
          if (d === null) continue;
          const w = i / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(d.toString());
          n += w;
        }
        if ("min_banding_charge" in t) {
          const r = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (r > 0 && n > 0 && n < r)
            return r;
        }
      }
      return n;
    }, ut = (e) => (Q.holes ?? 0) * (e.metadata.numHoles ?? 0) + (Q.corners ?? 0) * (e.metadata.numCorners ?? 0), re = (e, n) => {
      var r;
      e in _ && ((r = _[e]) != null && r.style) && (_[e].style.display = n);
    }, be = (e, n) => {
      ve(e) ? v[e].value = n : g(`Attempting to set input but key '${e}' does not exist`);
    }, pt = (e) => {
      if (ve(e))
        return v[e].value;
      g(`Attempting to get input but key '${e}' does not exist`);
    }, ve = (e) => e in v && v[e] instanceof HTMLInputElement, Te = () => {
      ye(1), R(), f();
      for (const e in v)
        e !== "smartcut-hardware-price" && be(e, null);
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
    }, we = (e) => {
      if (V(t, ["enable", e]) && P(t, ["enable", e]) === !1)
        return !1;
      const n = P(E, [e]);
      return !!(n && Object.values(n).length);
    }, qe = () => t.enable_machining === !0, Oe = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), dt = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Oe() || we("banding") || we("finish") || qe()), ft = (e) => {
      var r;
      let n = (r = e == null ? void 0 : e.attributes) == null ? void 0 : r.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ue = (e) => /\d+x\d+/.test(e), mt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        v[n] = document.getElementById(n);
      });
    }, _t = (e, n) => {
      Te(), K.value = n, b(["variation selected", n.attributes]), j.value = [];
      const r = P(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = r, c.value.forEach((i) => {
        i.t = qt({ v: r });
      }), s.multiple_sizes) {
        const i = ft(n);
        if (b([`variation found with size: ${i} & thickness: ${r}`]), !i)
          return U(!1), g("The size of this multiple size product could not be found");
        if (Array.isArray(i) ? L(D.value) : ue(i) ? U(!0, !0) : L(D.value), q != null && q.length) {
          let h;
          const d = r;
          let w = n.display_price;
          Array.isArray(i) ? h = i.map((o) => ({
            size: o,
            l: o.split("x")[0],
            w: o.split("x")[1],
            t: d,
            price: w
          })) : h = q.filter((o) => {
            var F, Y;
            return ue((F = o == null ? void 0 : o.attributes) == null ? void 0 : F.size) ? r === (((Y = o == null ? void 0 : o.attributes) == null ? void 0 : Y.thickness) ?? null) : !1;
          }).map((o) => {
            var $e, Ae, Ie, Le;
            const F = (($e = o == null ? void 0 : o.attributes) == null ? void 0 : $e.size.split("x")[0]) ?? null, Y = ((Ae = o == null ? void 0 : o.attributes) == null ? void 0 : Ae.size.split("x")[1]) ?? null;
            let pe = 0;
            return n.display_price || (pe = q.find((de) => {
              var De, Be, Re, Ve, He;
              return ue((De = de.attributes) == null ? void 0 : De.size) && ((Be = de.attributes) == null ? void 0 : Be.thickness) === ((Re = o == null ? void 0 : o.attributes) == null ? void 0 : Re.thickness) && ((Ve = de.attributes) == null ? void 0 : Ve.size) === ((He = o == null ? void 0 : o.attributes) == null ? void 0 : He.size) && de.display_price > 0;
            }).display_price), b([
              `size attribute: '${(Ie = o == null ? void 0 : o.attributes) == null ? void 0 : Ie.size}'`,
              `price for thickness ${r}, dimensions: ${F}x${Y} is ${w}`
            ]), {
              size: (Le = o == null ? void 0 : o.attributes) == null ? void 0 : Le.size,
              l: F,
              w: Y,
              t: d,
              price: w || pe
            };
          }), a.value === !0 && h.forEach((o) => {
            const F = ae(
              o.l,
              o.w,
              o.t,
              o.price,
              n == null ? void 0 : n.attributes
            );
            j.value.push(F);
          });
        }
      } else {
        if (!q.some((i) => "thickness" in i.attributes))
          j.value.push(ae(
            s.l,
            s.w,
            r,
            n.display_price,
            n == null ? void 0 : n.attributes
          ));
        else {
          const i = q.find((h) => {
            var d;
            return ((d = h.attributes) == null ? void 0 : d.thickness) === r;
          });
          if (!i) return g(`variation not found for thickness ${r}`);
          j.value.push(ae(
            s.l,
            s.w,
            r,
            i.price,
            n == null ? void 0 : n.attributes
          ));
        }
        L(D.value);
      }
    }, ht = async (e) => {
      Te(), b(["result event received", e]);
      const n = await p(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await yt(e);
    }, yt = async (e) => {
      const r = nn(k, e, ne.value, st).split(",")[1], i = new Dt();
      i.file("order-summary.pdf", r);
      const h = await i.generateAsync({ type: "blob" }), d = new File([h], "order-summary.zip", { type: "application/zip" });
      if (!ve("smartcut-order-summary")) return;
      const w = v["smartcut-order-summary"].closest("form");
      if (!w) return;
      const o = new DataTransfer();
      o.items.add(d);
      const F = w.querySelector('[name="smartcut_order_summary"]');
      F instanceof HTMLInputElement && (F.files = o.files);
    }, gt = (e, n) => {
      R(), e && (ne.value = Je(e)), be("smartcut-hardware-price", n ?? 0);
    };
    return Qe(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), b(["Launching WordPress checkout..."]), E.banding = P(window, ["smartcutConfig", "banding_data"]), E.finish = P(window, ["smartcutConfig", "finish_data"]), Q = P(window, ["smartcutConfig", "machining_pricing"]), q = P(window, ["smartcutConfig", "variations"]), rt(), mt(), nt(window.smartcutConfig), at(window.smartcutConfig), tt(), ot(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((r) => {
        const i = document.querySelector(r);
        i && (i.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), b(["Wordpress checkout ready"]);
    }), (e, n) => (B(), he(We, null, [
      _e(N(u), { position: "top-left" }),
      N(x) === "development" && rn ? (B(), he("div", an, [
        n[0] || (n[0] = vt("div", null, "WP - developer information", -1)),
        _e(N(m), {
          data: [j.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        _e(N(m), {
          data: [j.value.map((r) => r.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : te("", !0),
      I.value === "formula" && H.value ? (B(), se(N(A), {
        key: 1,
        ref: "formulapricing",
        "format-price": le,
        url: H.value,
        debug: W.value,
        onHardwareResult: gt,
        onPanelResult: R
      }, null, 8, ["url", "debug"])) : te("", !0),
      I.value === "manual" || I.value === "formula" && H.value ? (B(), se(Ge, {
        key: 2,
        ref_key: "calculator",
        ref: z,
        readonly: I.value === "formula",
        debug: W.value,
        stock: j.value,
        "find-extras-price": ge,
        "format-price": le,
        "input-type": I.value,
        onLog: b,
        onError: g,
        onInputsChanged: R,
        onValidationError: Xe,
        onResult: ht
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), sn = /* @__PURE__ */ xe({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: k, emit: A }) {
    const m = oe(() => import("./components-CRI1BfhQ.js").then((a) => a.F)), u = oe(() => import("./components-CRI1BfhQ.js").then((a) => a.N)), c = A, x = S(!1), _ = S([]), v = S({
      banding: null,
      finish: null,
      machining: null
    }), $ = S("USD"), p = S("en-US"), f = S("manual"), t = S(""), E = wt(null), s = S(null), q = S();
    Ce("calculator", () => q.value);
    const Q = (a) => {
      x.value && console.log("SmartCut -", ...a);
    }, T = (a) => {
      console.error(`SmartCut - ${a}`);
    }, W = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, I = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, H = (a) => {
      s.value = a;
    }, j = (a = 0, z = p.value) => {
      if (a === !0) return "";
      try {
        z = z.replace("_", "-");
        const b = Number(a);
        return !b && b !== 0 ? "" : isNaN(b) ? (console.error("formatPrice - invalid price:", a), "") : b.toLocaleString(z, {
          style: "currency",
          currency: $.value
        });
      } catch (b) {
        return console.error("Error formatting price:", b), "";
      }
    }, K = (a, z) => {
      var L;
      if (!((L = v.value) != null && L[a])) return null;
      const b = z.join("|"), g = P(v.value, [a, b]);
      return typeof g == "number" ? g : parseFloat(g);
    }, D = (a) => {
      It(a), _.value = a.stock, v.value.banding = P(a, ["banding", "pricing"]), v.value.finish = P(a, ["finish", "pricing"]), v.value.machining = P(a, ["machining", "pricing"]), V(a, ["options", "currency"]) && ($.value = P(a, ["options", "currency"])), V(a, ["options", "locale"]) && (p.value = P(a, ["options", "locale"]).replace("_", "-")), (V(a, ["options", "formula", "url"]) || V(a, ["options", "formula", "spec"])) && (f.value = "formula", t.value = P(a, ["options", "formula", "url"]) ?? null, E.value = P(a, ["options", "formula", "spec"]) ?? null), Ke(() => {
        q.value && q.value.init(a);
      });
    }, ne = (a) => {
      var g, L, U;
      const z = a;
      if (z.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, (g = a == null ? void 0 : a.metadata) != null && g.totalStockCost && (z.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        p.value,
        {
          style: "currency",
          currency: $.value
        }
      )), (L = a == null ? void 0 : a.metadata) != null && L.bandingLengthByType)
        for (const [O, M] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!V(v.value, ["banding", O])) {
            T(`Banding price ${O} not found`);
            continue;
          }
          z.checkout.formattedBandingCost[O] = (M / 1e3 * v.value.banding[O]).toLocaleString(p.value, { style: "currency", currency: $.value });
        }
      if ((U = a == null ? void 0 : a.metadata) != null && U.finishAreaByType)
        for (const [O, M] of Object.entries(a.metadata.finishAreaByType)) {
          if (!V(v.value, ["finish", O])) {
            T(`Finish price ${O} not found`);
            continue;
          }
          z.checkout.formattedFinishCost[O] = (M / 1e6 * v.value.finish[O]).toLocaleString(p.value, { style: "currency", currency: $.value });
        }
      const b = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(z))
      });
      window.dispatchEvent(b);
    };
    return kt(() => {
      console.log("💥 Powered by https://smartcut.dev ");
      const a = new URLSearchParams(window.location.search);
      x.value = !!a.has("debug"), x.value && console.log("Smartcut - debug enabled");
    }), Qe(() => {
      window.smartcutCheckout = { init: D }, c("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
    }), k({
      init: D,
      debug: x,
      stock: _,
      pricing: v,
      currency: $,
      locale: p,
      inputType: f,
      formulaURL: t,
      formulaSpec: E,
      hardWareResult: s,
      log: Q,
      error: T,
      calculating: I,
      result: ne,
      formatPrice: j,
      findExtrasPrice: K,
      setHardwareResult: H
    }), (a, z) => (B(), he(We, null, [
      _e(N(u), { position: "top-left" }),
      f.value === "formula" && (t.value || E.value) ? (B(), se(N(m), {
        key: 0,
        ref: "formulapricing",
        "format-price": j,
        url: t.value,
        spec: E.value,
        debug: x.value,
        onHardwareResult: H
      }, null, 8, ["url", "spec", "debug"])) : te("", !0),
      f.value === "manual" || f.value === "formula" && (t.value || E.value) ? (B(), se(Ge, {
        key: 1,
        ref_key: "calculator",
        ref: q,
        readonly: f.value === "formula",
        debug: x.value,
        stock: _.value,
        "input-type": f.value,
        "find-extras-price": K,
        "format-price": j,
        onLog: Q,
        onError: T,
        onCalculating: I,
        onValidationError: W,
        onResult: ne
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), ln = {
  key: 1,
  class: "error-message"
}, cn = /* @__PURE__ */ xe({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: k }) {
    const A = S(!1), m = S(null), u = Je({
      wordpress: on,
      vanilla: sn
    }), c = l, x = Ue(() => {
      if (!c.type) return null;
      const _ = c.type.toLowerCase();
      return u[_] || null;
    });
    return k({
      componentType: Ue(() => c.type),
      isComponentMounted: A,
      checkout: m
    }), (_, v) => x.value ? (B(), se(St(x.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: m
    }, null, 512)) : c.type ? (B(), he("div", ln, " Invalid component type: " + xt(c.type), 1)) : te("", !0);
  }
}), un = /* @__PURE__ */ Lt(cn, [["__scopeId", "data-v-6d642def"]]);
Bt.add(
  Rt,
  Vt,
  Ht,
  Ne,
  Ut,
  Mt,
  Yt,
  Nt,
  Qt,
  Wt,
  Kt,
  Jt,
  Ne,
  Ct
);
let me = null, ke = !1;
const pn = async () => {
  if (!ke) {
    ke = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const k = l.getAttribute("data-type") || "";
      me = Ft(un, { type: k }), await en, me.use(Pt, { i18next: Se }), me.component("FontAwesomeIcon", Et), me.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      ke = !1;
    }
  }
};
pn();
export {
  me as app,
  pn as mount
};
