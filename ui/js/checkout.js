import { d as Se, y as ct, g as k, j as Le, c as fe, o as V, A as we, e as te, q as se, u as ee, C as oe, b as ut, F as De, k as Ae, O as Be, U as Ve, G as pt, V as dt, h as qe, W as ft, t as mt, X as _t, Y as ht, Z as yt } from "./vendor-vue-Kgm6Js1o.js";
import { i as ke, B as gt } from "./vendor-i18n-J0oHP3sq.js";
import { q as bt, d as h, v as vt, w as Oe, x as Ie, y as S, C as Re, p as wt, z as M, A as kt, B as St, D as xt, E as Ft, _ as Pt } from "./components-B9_WaFBr.js";
import { J as Et, H as zt, I as Tt, K as jt, L as qt, M as $e, N as Ot, O as It, Q as $t, S as Lt, T as Dt, U as At, V as Bt, W as Vt, X as Rt } from "./vendor-DdDY4qXh.js";
import { E as Ht, a as K } from "./vendor-pdf-rsnubR_c.js";
import { u as Ut, f as Mt } from "./composables-BluGf2Tl.js";
const Yt = Nt();
async function Nt() {
  const l = {
    main: import("./main-DQj1MkcK.js").then((c) => c.resources),
    errors: import("./errors-CV_r96yH.js").then((c) => c.resources)
  }, [v, O] = await Promise.all([
    l.main,
    l.errors
  ]), y = Object.keys(v), u = y.reduce((c, P) => ({
    ...c,
    [P]: {
      main: v[P],
      errors: O[P]
    }
  }), {});
  return vt(ke), ke.use(gt).init({
    debug: !1,
    // lng: 'fr',
    fallbackLng: "en",
    ns: ["main", "errors"],
    defaultNS: "errors",
    resources: u,
    load: "languageOnly",
    supportedLngs: y,
    interpolation: {
      format: function(c, P) {
        return P === "capitalise" ? bt(c) : P === "sentenceCase" ? h(c) : c;
      }
    }
  });
}
const J = 5, ie = 10, pe = ",", C = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, X = {
  fontSize: 9
}, G = { left: 10 };
let Z = [];
const Qt = (l, v, O, y = (u) => u.toString()) => {
  var F;
  const u = new Ht({ orientation: "landscape" });
  let c = 10;
  u.setFontSize(20), u.text(h(l("pdf.order_summary")), 10, c), c += 15, u.setFontSize(14), u.text(l("description_item_plural", { a: "Your", i: "part" }), 10, c), c += J, Z = [
    h(l("length")),
    h(l("width")),
    h(l("thickness")),
    h(l("material")),
    h(l("quantity")),
    h(l("name")),
    `Banding (${Oe.join(pe)})`,
    `Finish (${Ie.join(pe)})`
  ];
  const P = v.parts.map((p) => {
    var x;
    const m = Oe.map((s) => p.banding[s] || "-").join(pe), t = Ie.map((s) => p.banding[s] || "-").join(pe);
    return [
      y(p.l),
      y(p.w),
      y(p.t) || "-",
      ((x = p == null ? void 0 : p.material) == null ? void 0 : x.toUpperCase()) || "-",
      y(p.q),
      p.name || "-",
      m,
      t
    ];
  });
  K(u, {
    startY: c,
    head: [Z],
    body: P,
    margin: G,
    headStyles: C,
    styles: X
  }), c = u.autoTable.previous.finalY + ie, u.setFontSize(14), u.text(h(l("pdf.stock_requirements")), 10, c), c += J, Z = [
    h(l("length")),
    h(l("width")),
    h(l("thickness")),
    h(l("material")),
    h(l("quantity"))
    // 'Cost'
  ];
  const d = v.stock.map((p) => {
    var m;
    return [
      y(p.l),
      y(p.w),
      y(p.t) || "-",
      ((m = p == null ? void 0 : p.material) == null ? void 0 : m.toUpperCase()) || "-",
      y(p.q)
      // stock.cost
    ];
  });
  if (K(u, {
    startY: c,
    head: [Z],
    body: d,
    margin: G,
    headStyles: C,
    styles: X
  }), c = u.autoTable.previous.finalY + ie, v.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(h(l("pdf.roll_requirements")), 10, c), c += J, Z = [
      l("name"),
      l("material"),
      l("length")
    ];
    const p = v.stock.map((m) => {
      var t, x;
      return [
        ((t = m == null ? void 0 : m.name) == null ? void 0 : t.toUpperCase()) || "-",
        ((x = m == null ? void 0 : m.material) == null ? void 0 : x.toUpperCase()) || "-",
        y(m.analysis.rollLength)
      ];
    });
    K(u, {
      startY: c,
      head: [Z],
      body: p,
      margin: G,
      headStyles: C,
      styles: X
    }), c = u.autoTable.previous.finalY + ie;
  }
  if (O && Object.values(O)) {
    u.setFontSize(14), u.text("Hardware", 10, c), c += J;
    const p = Object.values(O).map((m) => [
      m.name.toUpperCase(),
      y(m.q)
      // item.totalCost.toFixed( 2 )
    ]);
    K(u, {
      startY: c,
      head: [[h(l("pdf.item")), h(l("quantity"))]],
      body: p,
      margin: G,
      headStyles: C,
      styles: X
    }), c = u.autoTable.previous.finalY + ie;
  }
  u.setFontSize(14), u.text(h(l("pdf.totals")), 10, c), c += J;
  const E = [
    [h(l("pdf.total_parts")), y(v.metadata.totalPartsProduced)],
    [h(l("pdf.part_area")), y(v.metadata.totalPartArea)],
    [h(l("pdf.total_stock_required")), y(v.metadata.totalUsedStock)],
    [h(l("pdf.total_banding_length")), y(v.metadata.totalBandingLength)],
    [h(l("pdf.total_finish_area")), y(v.metadata.totalFinishArea)],
    [h(l("pdf.total_roll_length")), y(v.metadata.totalRollLength)]
  ];
  if (K(u, {
    startY: c,
    body: E,
    margin: G,
    headStyles: C,
    styles: X
  }), c = u.autoTable.previous.finalY + ie, (F = window == null ? void 0 : window.smartcutImages) != null && F.length) {
    u.addPage();
    let p = 10;
    u.setFontSize(14), u.text(h(l("pdf.images")), 10, p), p += J;
    const m = window.smartcutImages.flatMap((t, x) => t.metadata.map((s) => [
      x + 1,
      s.newName
    ]));
    K(u, {
      startY: p,
      body: m,
      head: [[h(l("pdf.part_index")), h(l("pdf.file_name"))]],
      margin: G,
      headStyles: C,
      styles: X
    });
  }
  return u.output("datauristring");
}, Wt = {
  key: 0,
  class: "debug"
}, Kt = !1, Jt = /* @__PURE__ */ Se({
  __name: "WordPress",
  setup(l) {
    const { t: v } = ct(["main", "errors"]), O = oe(() => import("./components-B9_WaFBr.js").then((e) => e.F)), y = oe(() => import("./components-B9_WaFBr.js").then((e) => e.O)), u = oe(() => import("./components-B9_WaFBr.js").then((e) => e.N)), { inputShapes: c } = Ut(), P = "production", d = {}, E = {}, F = k(null);
    let p, m, t;
    const x = {
      banding: null,
      finish: null
    };
    let s = null, I = [], R = null, T = {};
    const A = k(!1), L = k("manual"), Y = k(""), j = k([]), N = k(null), B = k(!0), ne = k(null), H = k(!1), r = k(null);
    Ve("calculator", () => r.value);
    const b = (e) => {
      A.value && console.log("SmartCut -", ...e);
    }, f = (e) => {
      console.error(`SmartCut - ${e}`);
    }, $ = (e = !0) => {
      H.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((i) => re(i, "block")), tt() && re("pricing_table", "table"), e ? Q(!0) : q(), U();
    }, D = (e = !0, n = !0) => {
      H.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => re(o, "none")), n === !0 ? W() : n === !1 && U(), Q ? Q() : e === !1 && q();
    }, Q = (e = !1) => {
      re("quantity", "inline-block"), d.quantity.readOnly = e;
    }, q = () => {
      H.value !== !1 && (me(1), re("quantity", "none"), d.quantity.readOnly = !0);
    }, W = () => {
      if (!d.cart_button) {
        f("Cart button not found");
        return;
      }
      d.cart_button.disabled = !1;
    }, U = () => {
      if (H.value !== !1) {
        if (!d.cart_button) {
          f("Cart button not found");
          return;
        }
        d.cart_button.disabled = !0;
      }
    }, He = () => {
      f("Validation error"), U();
    }, me = (e, n = 0) => {
      if (b(["setting cart quantity", e]), !d.quantity) {
        f("Quantity field not found when trying to set");
        return;
      }
      d.quantity.value = e.toFixed(n), console.assert(d.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ue = (e) => {
      b(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = le(e)), F.value = e;
    }, Me = () => {
      var n;
      const e = F.value ?? ((n = N.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, Ye = () => {
      if (!(window != null && window.smartcutConfig)) {
        f("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Pe(S(window, ["smartcutConfig", "banding_data"])), i = Pe(S(window, ["smartcutConfig", "finish_data"])), o = {
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
      const _ = {
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
      B.value = ze(), B.value ? Q(!0) : q(), s.type === "variable" ? D(!1, !1) : $(B.value);
      const a = {
        type: s.type,
        stock: j.value,
        variations: I ?? null,
        options: o,
        banding: n,
        finish: i,
        machining: _
      };
      a.type === "variable" && (b(["setting variable product form listeners"]), jQuery(function(z) {
        z(".variations_form").on("reset_data", () => D(!1, !1)).on("found_variation", (ue, lt) => rt(ue, lt));
      }));
      const g = {
        product: s,
        selectedVariation: N,
        inputs: E,
        elements: d,
        inputType: L,
        formatPrice: le,
        getCurrentVariationPrice: Me,
        setInputValue: he,
        setCartQuantity: me,
        setVariationPrice: Ue,
        isExtraEnabled: ge,
        isQuantityPricing: ze,
        isMachiningEnabled: Te,
        isSurchargeEnabled: je,
        getTotalBandingPrice: Ge,
        getTotalFinishPrice: Xe,
        getTotalMachiningPrice: Ze,
        getInputValue: et,
        enableAddToCart: W,
        log: b,
        error: f
      }, w = Mt({
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
      }, g);
      p = w.calculatePrice, m = w.resetPricing, Ae(() => {
        r.value && r.value.init(a);
      });
    }, Ne = (e) => {
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
    }, Qe = (e) => {
      L.value = S(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", Y.value = S(window, ["smartcutConfig", "settings", "formula_url"]), b([`Input type: ${L.value}`]), T = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, We = () => {
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
      for (const [n, i] of Object.entries(e))
        d[n] = document.querySelector(i);
      if (!d.checkout)
        return f("checkout iframe not found");
      if (!d.quantity)
        return f("quantity field not found");
      if (!d.cart_button)
        return f("cart button not found");
      d.quantity.readOnly = !0, U();
    }, Ke = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), ae = (e = null, n = null, i = null, o = null, _ = null) => {
      let a;
      if (_ && typeof _ == "object") {
        a = [];
        for (const [w, z] of Object.entries(_))
          w !== "attribute_size" && w !== "attribute_thickness" && a.push(`${w.replace("attribute_", "")}: ${z}`);
        a = a.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: i,
        grain: t.stock_grain,
        cost: parseFloat((o == null ? void 0 : o.toString()) || "0"),
        trim: Ke(),
        allowExactFitShapes: !0,
        notes: a
      };
    }, Je = () => {
      if (s != null && s.stock_name || f("product name not specified"), j.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!be(e)) continue;
          const [n, i] = e.split("x"), o = ae(
            parseFloat(n),
            parseFloat(i),
            s == null ? void 0 : s.t,
            s.price
          );
          j.value.push(o);
        }
      else
        j.value.push(ae(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, xe = (e, n) => {
      const i = e.split(".");
      return i[0] = i[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), i.join(".");
    }, le = (e = 0, n = "") => {
      if (!e)
        return n ? Fe("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const i = e.toFixed(T.number_of_decimals).replace(".", T.decimal_separator), o = xe(i, T.thousands_separator);
      return n ? Fe(o) : o;
    }, Ce = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const i = e % 1 !== 0 ? T.number_of_decimals : 0, o = e.toFixed(i).replace(".", T.decimal_separator);
      return xe(o, T.thousands_separator);
    }, Fe = (e) => {
      switch (T.currency_position) {
        case "left":
          return `${T.currency_symbol}${e}`;
        case "right":
          return `${e}${T.currency_symbol}`;
        default:
          return `${T.currency_symbol}${e}`;
      }
    }, ce = (e) => {
      const n = (i) => St(xt(i), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Pe = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, i = Object.values(e);
      for (const o of i)
        o != null && o.variations ? (n.labels.push(...Object.keys(o.options)), Object.values(o.variations).forEach((_) => {
          const { options: a } = _, g = Object.values(a).map((w) => ce(w)).join("|");
          n.pricing[g] = parseInt(_.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((_) => {
          n.pricing[ce(_)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, _e = (e, n) => {
      if (!n.length || !M(x, [e])) return null;
      const i = S(x, [e]);
      if (!kt(i)) return null;
      const _ = Object.values(i).map((a) => a != null && a.variations ? Object.values(a.variations).map((g) => (g.type = "variable", g)) : (a.type = "simple", a)).flat().find((a) => {
        let g;
        return a.type === "simple" ? g = Object.keys(a.options) : g = Object.values(a.options), g ? g.every((w, z) => ce(w) === ce(n[z])) : !1;
      });
      return _ != null && _.price ? parseFloat(_.price) : null;
    }, Xe = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const _ = i.split("|"), a = _e("finish", _);
          if (a === null) continue;
          const w = Number(o) / 1e6 * parseFloat(a.toString());
          n += w;
        }
        if ("min_finish_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Ge = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const _ = i.split("|"), a = _e("banding", _);
          if (a === null) continue;
          const g = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(a.toString());
          n += g;
        }
        if ("min_banding_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Ze = (e) => (R.holes ?? 0) * (e.metadata.numHoles ?? 0) + (R.corners ?? 0) * (e.metadata.numCorners ?? 0), re = (e, n) => {
      var i;
      e in d && ((i = d[e]) != null && i.style) && (d[e].style.display = n);
    }, he = (e, n) => {
      ye(e) ? E[e].value = n : f(`Attempting to set input but key '${e}' does not exist`);
    }, et = (e) => {
      if (ye(e))
        return E[e].value;
      f(`Attempting to get input but key '${e}' does not exist`);
    }, ye = (e) => e in E && E[e] instanceof HTMLInputElement, Ee = () => {
      me(1), U(), m();
      for (const e in E)
        e !== "smartcut-hardware-price" && he(e, null);
    }, ze = () => {
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
    }, ge = (e) => {
      if (M(t, ["enable", e]) && S(t, ["enable", e]) === !1)
        return !1;
      const n = S(x, [e]);
      return !!(n && Object.values(n).length);
    }, Te = () => t.enable_machining === !0, je = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), tt = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || je() || ge("banding") || ge("finish") || Te()), nt = (e) => {
      var i;
      let n = (i = e == null ? void 0 : e.attributes) == null ? void 0 : i.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, be = (e) => /\d+x\d+/.test(e), at = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        E[n] = document.getElementById(n);
      });
    }, rt = (e, n) => {
      Ee(), N.value = n, b(["variation selected", n.attributes]), j.value = [];
      const i = S(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = i, c.value.forEach((o) => {
        o.t = wt({ v: i });
      }), s.multiple_sizes) {
        const o = nt(n);
        if (b([`variation found with size: ${o} & thickness: ${i}`]), !o)
          return D(!1), f("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? $(B.value) : be(o) ? D(!0, !0) : $(B.value), I != null && I.length) {
          let _;
          Array.isArray(o) ? _ = o.map((a) => ({
            size: a,
            l: a.split("x")[0],
            w: a.split("x")[1],
            t: i,
            price: n.display_price
          })) : _ = I.filter((a) => {
            var g, w;
            return be((g = a == null ? void 0 : a.attributes) == null ? void 0 : g.size) ? i === (((w = a == null ? void 0 : a.attributes) == null ? void 0 : w.thickness) ?? null) : !1;
          }).map((a) => {
            var g, w, z, ue;
            return b([
              `size attribute: '${(g = a == null ? void 0 : a.attributes) == null ? void 0 : g.size}'`,
              `price for 'thickness ${i}, size: ${o}' is ${n.display_price}`
            ]), {
              size: (w = a == null ? void 0 : a.attributes) == null ? void 0 : w.size,
              l: (z = a == null ? void 0 : a.attributes) == null ? void 0 : z.size.split("x")[0],
              w: (ue = a == null ? void 0 : a.attributes) == null ? void 0 : ue.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), H.value === !0 && _.forEach((a) => {
            const g = ae(
              a.l,
              a.w,
              a.t,
              a.price,
              n == null ? void 0 : n.attributes
            );
            j.value.push(g);
          });
        }
      } else {
        if (!I.some((o) => "thickness" in o.attributes))
          j.value.push(ae(
            s.l,
            s.w,
            i,
            n.display_price,
            n == null ? void 0 : n.attributes
          ));
        else {
          const o = I.find((_) => {
            var a;
            return ((a = _.attributes) == null ? void 0 : a.thickness) === i;
          });
          if (!o) return f(`variation not found for thickness ${i}`);
          j.value.push(ae(
            s.l,
            s.w,
            i,
            o.price,
            n == null ? void 0 : n.attributes
          ));
        }
        $(B.value);
      }
    }, it = async (e) => {
      Ee(), b(["result event received", e]);
      const n = await p(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await ot(e);
    }, ot = async (e) => {
      const i = Qt(v, e, ne.value, Ce).split(",")[1], o = new Et();
      o.file("order-summary.pdf", i);
      const _ = await o.generateAsync({ type: "blob" }), a = new File([_], "order-summary.zip", { type: "application/zip" });
      if (!ye("smartcut-order-summary")) return;
      const g = E["smartcut-order-summary"].closest("form");
      if (!g) return;
      const w = new DataTransfer();
      w.items.add(a);
      const z = g.querySelector('[name="smartcut_order_summary"]');
      z instanceof HTMLInputElement && (z.files = w.files);
    }, st = (e, n) => {
      U(), e && (ne.value = Be(e)), he("smartcut-hardware-price", n ?? 0);
    };
    return Le(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), b(["Launching WordPress checkout..."]), x.banding = S(window, ["smartcutConfig", "banding_data"]), x.finish = S(window, ["smartcutConfig", "finish_data"]), R = S(window, ["smartcutConfig", "machining_pricing"]), I = S(window, ["smartcutConfig", "variations"]), We(), at(), Ne(window.smartcutConfig), Qe(window.smartcutConfig), Ye(), Je(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((i) => {
        const o = document.querySelector(i);
        o && (o.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), b(["Wordpress checkout ready"]);
    }), (e, n) => (V(), fe(De, null, [
      we(ee(u), { position: "top-left" }),
      ee(P) === "development" && Kt ? (V(), fe("div", Wt, [
        n[0] || (n[0] = ut("div", null, "WP - developer information", -1)),
        we(ee(y), {
          data: [j.value],
          paths: ["stock"]
        }, null, 8, ["data"])
      ])) : te("", !0),
      L.value === "formula" && Y.value ? (V(), se(ee(O), {
        key: 1,
        ref: "formulapricing",
        "format-price": le,
        url: Y.value,
        debug: A.value,
        onHardwareResult: st,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : te("", !0),
      L.value === "manual" || L.value === "formula" && Y.value ? (V(), se(Re, {
        key: 2,
        ref_key: "calculator",
        ref: r,
        readonly: L.value === "formula",
        debug: A.value,
        stock: j.value,
        "find-extras-price": _e,
        "format-price": le,
        "input-type": L.value,
        onLog: b,
        onError: f,
        onInputsChanged: U,
        onValidationError: He,
        onResult: it
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Ct = /* @__PURE__ */ Se({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: v, emit: O }) {
    const y = oe(() => import("./components-B9_WaFBr.js").then((r) => r.F)), u = oe(() => import("./components-B9_WaFBr.js").then((r) => r.N)), c = O, P = "", d = k(!1), E = k([]), F = k({
      banding: null,
      finish: null,
      machining: null
    }), p = k("USD"), m = k("en-US"), t = k("manual"), x = k(""), s = pt(null), I = k(null), R = k();
    Ve("calculator", () => R.value);
    const T = (r) => {
      d.value && console.log("SmartCut -", ...r);
    }, A = (r) => {
      console.error(`SmartCut - ${r}`);
    }, L = () => {
      const r = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(r);
    }, Y = () => {
      const r = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(r);
    }, j = (r) => {
      I.value = r;
    }, N = (r = 0, b = m.value) => {
      if (r === !0) return "";
      try {
        b = b.replace("_", "-");
        const f = Number(r);
        return !f && f !== 0 ? "" : isNaN(f) ? (console.error("formatPrice - invalid price:", r), "") : f.toLocaleString(b, {
          style: "currency",
          currency: p.value
        });
      } catch (f) {
        return console.error("Error formatting price:", f), "";
      }
    }, B = (r, b) => {
      var D;
      if (!((D = F.value) != null && D[r])) return null;
      const f = b.join("|"), $ = S(F.value, [r, f]);
      return typeof $ == "number" ? $ : parseFloat($);
    }, ne = (r) => {
      Ft(r), E.value = r.stock, F.value.banding = S(r, ["banding", "pricing"]), F.value.finish = S(r, ["finish", "pricing"]), F.value.machining = S(r, ["machining", "pricing"]), M(r, ["options", "currency"]) && (p.value = S(r, ["options", "currency"])), M(r, ["options", "locale"]) && (m.value = S(r, ["options", "locale"]).replace("_", "-")), (M(r, ["options", "formula", "url"]) || M(r, ["options", "formula", "spec"])) && (t.value = "formula", x.value = S(r, ["options", "formula", "url"]) ?? null, s.value = S(r, ["options", "formula", "spec"]) ?? null), Ae(() => {
        R.value && R.value.init(r);
      });
    }, H = (r) => {
      var $, D, Q;
      const b = r;
      if (b.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, ($ = r == null ? void 0 : r.metadata) != null && $.totalStockCost && (b.checkout.formattedTotalStockCost = r.metadata.totalStockCost.toLocaleString(
        m.value,
        {
          style: "currency",
          currency: p.value
        }
      )), (D = r == null ? void 0 : r.metadata) != null && D.bandingLengthByType)
        for (const [q, W] of Object.entries(r.metadata.bandingLengthByType)) {
          if (!M(F.value, ["banding", q])) {
            A(`Banding price ${q} not found`);
            continue;
          }
          b.checkout.formattedBandingCost[q] = (W / 1e3 * F.value.banding[q]).toLocaleString(m.value, { style: "currency", currency: p.value });
        }
      if ((Q = r == null ? void 0 : r.metadata) != null && Q.finishAreaByType)
        for (const [q, W] of Object.entries(r.metadata.finishAreaByType)) {
          if (!M(F.value, ["finish", q])) {
            A(`Finish price ${q} not found`);
            continue;
          }
          b.checkout.formattedFinishCost[q] = (W / 1e6 * F.value.finish[q]).toLocaleString(m.value, { style: "currency", currency: p.value });
        }
      const f = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(b))
      });
      window.dispatchEvent(f);
    };
    return dt(() => {
      console.log(`💥 Powered by https://smartcut.dev V${P}`);
      const r = new URLSearchParams(window.location.search);
      d.value = !!r.has("debug"), d.value && console.log("Smartcut - debug enabled");
    }), Le(() => {
      window.smartcutCheckout = { init: ne }, c("ready");
      const r = new CustomEvent("smartcut/ready");
      window.dispatchEvent(r);
    }), v({
      init: ne,
      debug: d,
      stock: E,
      pricing: F,
      currency: p,
      locale: m,
      inputType: t,
      formulaURL: x,
      formulaSpec: s,
      hardWareResult: I,
      log: T,
      error: A,
      calculating: Y,
      result: H,
      formatPrice: N,
      findExtrasPrice: B,
      setHardwareResult: j
    }), (r, b) => (V(), fe(De, null, [
      we(ee(u), { position: "top-left" }),
      t.value === "formula" && (x.value || s.value) ? (V(), se(ee(y), {
        key: 0,
        ref: "formulapricing",
        "format-price": N,
        url: x.value,
        spec: s.value,
        debug: d.value,
        onHardwareResult: j
      }, null, 8, ["url", "spec", "debug"])) : te("", !0),
      t.value === "manual" || t.value === "formula" && (x.value || s.value) ? (V(), se(Re, {
        key: 1,
        ref_key: "calculator",
        ref: R,
        readonly: t.value === "formula",
        debug: d.value,
        stock: E.value,
        "input-type": t.value,
        "find-extras-price": B,
        "format-price": N,
        onLog: T,
        onError: A,
        onCalculating: Y,
        onValidationError: L,
        onResult: H
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Xt = {
  key: 1,
  class: "error-message"
}, Gt = /* @__PURE__ */ Se({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: v }) {
    const O = k(!1), y = k(null), u = Be({
      wordpress: Jt,
      vanilla: Ct
    }), c = l, P = qe(() => {
      if (!c.type) return null;
      const d = c.type.toLowerCase();
      return u[d] || null;
    });
    return v({
      componentType: qe(() => c.type),
      isComponentMounted: O,
      checkout: y
    }), (d, E) => P.value ? (V(), se(ft(P.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: y
    }, null, 512)) : c.type ? (V(), fe("div", Xt, " Invalid component type: " + mt(c.type), 1)) : te("", !0);
  }
}), Zt = /* @__PURE__ */ Pt(Gt, [["__scopeId", "data-v-6d642def"]]);
zt.add(
  Tt,
  jt,
  qt,
  $e,
  Ot,
  It,
  $t,
  Lt,
  Dt,
  At,
  Bt,
  Vt,
  $e,
  Rt
);
let de = null, ve = !1;
const en = async () => {
  if (!ve) {
    ve = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const v = l.getAttribute("data-type") || "";
      de = _t(Zt, { type: v }), await Yt, de.use(ht, { i18next: ke }), de.component("FontAwesomeIcon", yt), de.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      ve = !1;
    }
  }
};
en();
export {
  de as app,
  en as mount
};
