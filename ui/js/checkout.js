import { d as Se, y as lt, g as k, j as $e, c as fe, o as V, A as we, e as te, q as oe, u as ee, C as ie, b as ct, F as Le, k as De, O as Ae, U as Be, G as ut, V as pt, h as qe, W as dt, t as ft, X as mt, Y as _t, Z as ht } from "./vendor-vue-B1q46E6p.js";
import { i as ke, B as yt } from "./vendor-i18n-DgDRNGQo.js";
import { q as gt, d as h, v as bt, w as Oe, x as Ie, y as S, C as Ve, p as vt, z as M, A as wt, B as kt, D as St, E as xt, _ as Ft } from "./components-CIsCPK8W.js";
import { J as Pt, H as Et, I as zt, K as Tt, L as jt, M as qt, N as Ot, O as It, Q as $t, S as Lt, T as Dt, U as At, V as Bt } from "./vendor-8YFbieK2.js";
import { E as Vt, a as K } from "./vendor-pdf-B5IhOHus.js";
import { u as Rt, f as Ht } from "./composables-BC5Zok4q.js";
const Ut = Mt();
async function Mt() {
  const l = {
    main: import("./main-CMlXbzPm.js").then((c) => c.resources),
    errors: import("./errors-DqT4G1Wk.js").then((c) => c.resources)
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
  return bt(ke), ke.use(yt).init({
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
        return P === "capitalise" ? gt(c) : P === "sentenceCase" ? h(c) : c;
      }
    }
  });
}
const J = 5, re = 10, pe = ",", C = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, G = {
  fontSize: 9
}, X = { left: 10 };
let Z = [];
const Yt = (l, v, O, y = (u) => u.toString()) => {
  var F;
  const u = new Vt({ orientation: "landscape" });
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
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + re, u.setFontSize(14), u.text(h(l("pdf.stock_requirements")), 10, c), c += J, Z = [
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
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + re, v.metadata.totalRollLength > 0) {
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
      margin: X,
      headStyles: C,
      styles: G
    }), c = u.autoTable.previous.finalY + re;
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
      margin: X,
      headStyles: C,
      styles: G
    }), c = u.autoTable.previous.finalY + re;
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
    margin: X,
    headStyles: C,
    styles: G
  }), c = u.autoTable.previous.finalY + re, (F = window == null ? void 0 : window.smartcutImages) != null && F.length) {
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
      margin: X,
      headStyles: C,
      styles: G
    });
  }
  return u.output("datauristring");
}, Nt = {
  key: 0,
  class: "debug"
}, Qt = !0, Wt = /* @__PURE__ */ Se({
  __name: "WordPress",
  setup(l) {
    const { t: v } = lt(["main", "errors"]), O = ie(() => import("./components-CIsCPK8W.js").then((e) => e.F)), y = ie(() => import("./components-CIsCPK8W.js").then((e) => e.O)), u = ie(() => import("./components-CIsCPK8W.js").then((e) => e.N)), { inputShapes: c } = Rt(), P = "production", d = {}, E = {}, F = k(null);
    let p, m, t;
    const x = {
      banding: null,
      finish: null
    };
    let s = null, L = [], R = null, T = {};
    const A = k(!1), I = k("manual"), Y = k(""), q = k([]), N = k(null), B = k(!0), ne = k(null), H = k(!1), a = k(null);
    Be("calculator", () => a.value);
    const g = (e) => {
      A.value && console.log("SmartCut -", ...e);
    }, f = (e) => {
      console.error(`SmartCut - ${e}`);
    }, $ = (e = !0) => {
      H.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((i) => ae(i, "block")), et() && ae("pricing_table", "table"), e ? Q(!0) : j(), U();
    }, D = (e = !0, n = !0) => {
      H.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => ae(o, "none")), n === !0 ? W() : n === !1 && U(), Q ? Q() : e === !1 && j();
    }, Q = (e = !1) => {
      ae("quantity", "inline-block"), d.quantity.readOnly = e;
    }, j = () => {
      H.value !== !1 && (me(1), ae("quantity", "none"), d.quantity.readOnly = !0);
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
    }, Re = () => {
      f("Validation error"), U();
    }, me = (e, n = 0) => {
      if (g(["setting cart quantity", e]), !d.quantity) {
        f("Quantity field not found when trying to set");
        return;
      }
      d.quantity.value = e.toFixed(n), console.assert(d.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, He = (e) => {
      g(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = le(e)), F.value = e;
    }, Ue = () => {
      var n;
      const e = F.value ?? ((n = N.value) == null ? void 0 : n.display_price) ?? 0;
      return typeof e == "string" ? parseFloat(e) : e;
    }, Me = () => {
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
      B.value = ze(), B.value ? Q(!0) : j(), s.type === "variable" ? D(!1, !1) : $(B.value);
      const r = {
        type: s.type,
        stock: q.value,
        variations: L ?? null,
        options: o,
        banding: n,
        finish: i,
        machining: _
      };
      r.type === "variable" && (g(["setting variable product form listeners"]), jQuery(function(z) {
        z(".variations_form").on("reset_data", () => D(!1, !1)).on("found_variation", (ue, st) => at(ue, st));
      }));
      const b = {
        product: s,
        selectedVariation: N,
        inputs: E,
        elements: d,
        inputType: I,
        formatPrice: le,
        getCurrentVariationPrice: Ue,
        setInputValue: he,
        setCartQuantity: me,
        setVariationPrice: He,
        isExtraEnabled: ge,
        isQuantityPricing: ze,
        isMachiningEnabled: Te,
        isSurchargeEnabled: je,
        getTotalBandingPrice: Ge,
        getTotalFinishPrice: Ce,
        getTotalMachiningPrice: Xe,
        getInputValue: Ze,
        enableAddToCart: W,
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
      p = w.calculatePrice, m = w.resetPricing, De(() => {
        a.value && a.value.init(r);
      });
    }, Ye = (e) => {
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
    }, Ne = (e) => {
      I.value = S(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", Y.value = S(window, ["smartcutConfig", "settings", "formula_url"]), g([`Input type: ${I.value}`]), g([`Input type: ${I.value}`]), T = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, Qe = () => {
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
    }, We = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), se = (e = null, n = null, i = null, o = null, _ = null) => {
      let r;
      if (_ && typeof _ == "object") {
        r = [];
        for (const [w, z] of Object.entries(_))
          w !== "attribute_size" && w !== "attribute_thickness" && r.push(`${w.replace("attribute_", "")}: ${z}`);
        r = r.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: i,
        grain: t.stock_grain,
        cost: parseFloat((o == null ? void 0 : o.toString()) || "0"),
        trim: We(),
        allowExactFitShapes: !0,
        notes: r
      };
    }, Ke = () => {
      if (s != null && s.stock_name || f("product name not specified"), q.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!be(e)) continue;
          const [n, i] = e.split("x"), o = se(
            parseFloat(n),
            parseFloat(i),
            s == null ? void 0 : s.t,
            s.price
          );
          q.value.push(o);
        }
      else
        q.value.push(se(
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
    }, Je = (e) => {
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
      const n = (i) => kt(St(i), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Pe = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, i = Object.values(e);
      for (const o of i)
        o != null && o.variations ? (n.labels.push(...Object.keys(o.options)), Object.values(o.variations).forEach((_) => {
          const { options: r } = _, b = Object.values(r).map((w) => ce(w)).join("|");
          n.pricing[b] = parseInt(_.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((_) => {
          n.pricing[ce(_)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, _e = (e, n) => {
      if (!n.length || !M(x, [e])) return null;
      const i = S(x, [e]);
      if (!wt(i)) return null;
      const _ = Object.values(i).map((r) => r != null && r.variations ? Object.values(r.variations).map((b) => (b.type = "variable", b)) : (r.type = "simple", r)).flat().find((r) => {
        let b;
        return r.type === "simple" ? b = Object.keys(r.options) : b = Object.values(r.options), b ? b.every((w, z) => ce(w) === ce(n[z])) : !1;
      });
      return _ != null && _.price ? parseFloat(_.price) : null;
    }, Ce = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [i, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const _ = i.split("|"), r = _e("finish", _);
          if (r === null) continue;
          const w = Number(o) / 1e6 * parseFloat(r.toString());
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
          const _ = i.split("|"), r = _e("banding", _);
          if (r === null) continue;
          const b = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(r.toString());
          n += b;
        }
        if ("min_banding_charge" in t) {
          const i = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (i > 0 && n > 0 && n < i)
            return i;
        }
      }
      return n;
    }, Xe = (e) => (R.holes ?? 0) * (e.metadata.numHoles ?? 0) + (R.corners ?? 0) * (e.metadata.numCorners ?? 0), ae = (e, n) => {
      var i;
      e in d && ((i = d[e]) != null && i.style) && (d[e].style.display = n);
    }, he = (e, n) => {
      ye(e) ? E[e].value = n : f(`Attempting to set input but key '${e}' does not exist`);
    }, Ze = (e) => {
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
    }, Te = () => t.enable_machining === !0, je = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), et = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || je() || ge("banding") || ge("finish") || Te()), tt = (e) => {
      var i;
      let n = (i = e == null ? void 0 : e.attributes) == null ? void 0 : i.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, be = (e) => /\d+x\d+/.test(e), nt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        E[n] = document.getElementById(n);
      });
    }, at = (e, n) => {
      Ee(), N.value = n, g(["variation selected", n.attributes]), q.value = [];
      const i = S(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = i, c.value.forEach((o) => {
        o.t = vt({ v: i });
      }), s.multiple_sizes) {
        const o = tt(n);
        if (g([`variation found with size: ${o} & thickness: ${i}`]), !o)
          return D(!1), f("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? $(B.value) : be(o) ? D(!0, !0) : $(B.value), L != null && L.length) {
          let _;
          Array.isArray(o) ? _ = o.map((r) => ({
            size: r,
            l: r.split("x")[0],
            w: r.split("x")[1],
            t: i,
            price: n.display_price
          })) : _ = L.filter((r) => {
            var b, w;
            return be((b = r == null ? void 0 : r.attributes) == null ? void 0 : b.size) ? i === (((w = r == null ? void 0 : r.attributes) == null ? void 0 : w.thickness) ?? null) : !1;
          }).map((r) => {
            var b, w, z, ue;
            return g([
              `size attribute: '${(b = r == null ? void 0 : r.attributes) == null ? void 0 : b.size}'`,
              `price for 'thickness ${i}, size: ${o}' is ${n.display_price}`
            ]), {
              size: (w = r == null ? void 0 : r.attributes) == null ? void 0 : w.size,
              l: (z = r == null ? void 0 : r.attributes) == null ? void 0 : z.size.split("x")[0],
              w: (ue = r == null ? void 0 : r.attributes) == null ? void 0 : ue.size.split("x")[1],
              t: s.selected_thickness,
              price: n.display_price
            };
          }), H.value === !0 && _.forEach((r) => {
            const b = se(
              r.l,
              r.w,
              r.t,
              r.price,
              n == null ? void 0 : n.attributes
            );
            q.value.push(b);
          });
        }
      } else {
        const o = L.find((_) => _.attributes.thickness === i);
        if (!o) return f(`variation not found for thickness ${i}`);
        q.value.push(se(
          s.l,
          s.w,
          i,
          o.price,
          n == null ? void 0 : n.attributes
        )), $(B.value);
      }
    }, rt = async (e) => {
      Ee(), g(["result event received", e]);
      const n = await p(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await it(e);
    }, it = async (e) => {
      const i = Yt(v, e, ne.value, Je).split(",")[1], o = new Pt();
      o.file("order-summary.pdf", i);
      const _ = await o.generateAsync({ type: "blob" }), r = new File([_], "order-summary.zip", { type: "application/zip" });
      if (!ye("smartcut-order-summary")) return;
      const b = E["smartcut-order-summary"].closest("form");
      if (!b) return;
      const w = new DataTransfer();
      w.items.add(r);
      const z = b.querySelector('[name="smartcut_order_summary"]');
      z instanceof HTMLInputElement && (z.files = w.files);
    }, ot = (e, n) => {
      U(), e && (ne.value = Ae(e)), he("smartcut-hardware-price", n ?? 0);
    };
    return $e(() => {
      console.log("💥 Powered by https://smartcut.dev", window.smartcutConfig.version), g(["Launching WordPress checkout..."]), x.banding = S(window, ["smartcutConfig", "banding_data"]), x.finish = S(window, ["smartcutConfig", "finish_data"]), R = S(window, ["smartcutConfig", "machining_pricing"]), L = S(window, ["smartcutConfig", "variations"]), Qe(), nt(), Ye(window.smartcutConfig), Ne(window.smartcutConfig), Me(), Ke(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((i) => {
        const o = document.querySelector(i);
        o && (o.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), g(["Wordpress checkout ready"]);
    }), (e, n) => (V(), fe(Le, null, [
      we(ee(u), { position: "top-left" }),
      ee(P) === "development" && Qt ? (V(), fe("div", Nt, [
        n[0] || (n[0] = ct("div", null, "WP - developer information", -1)),
        we(ee(y), {
          data: [q.value],
          paths: ["stock"]
        }, null, 8, ["data"])
      ])) : te("", !0),
      I.value === "formula" && Y.value ? (V(), oe(ee(O), {
        key: 1,
        ref: "formulapricing",
        "format-price": le,
        url: Y.value,
        debug: A.value,
        onHardwareResult: ot,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : te("", !0),
      I.value === "manual" || I.value === "formula" && Y.value ? (V(), oe(Ve, {
        key: 2,
        ref_key: "calculator",
        ref: a,
        readonly: I.value === "formula",
        debug: A.value,
        stock: q.value,
        "find-extras-price": _e,
        "format-price": le,
        "input-type": I.value,
        onLog: g,
        onError: f,
        onInputsChanged: U,
        onValidationError: Re,
        onResult: rt
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Kt = /* @__PURE__ */ Se({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: v, emit: O }) {
    const y = ie(() => import("./components-CIsCPK8W.js").then((a) => a.F)), u = ie(() => import("./components-CIsCPK8W.js").then((a) => a.N)), c = O, P = "", d = k(!1), E = k([]), F = k({
      banding: null,
      finish: null,
      machining: null
    }), p = k("USD"), m = k("en-US"), t = k("manual"), x = k(""), s = ut(null), L = k(null), R = k();
    Be("calculator", () => R.value);
    const T = (a) => {
      d.value && console.log("SmartCut -", ...a);
    }, A = (a) => {
      console.error(`SmartCut - ${a}`);
    }, I = () => {
      const a = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(a);
    }, Y = () => {
      const a = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(a);
    }, q = (a) => {
      L.value = a;
    }, N = (a = 0, g = m.value) => {
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
      xt(a), E.value = a.stock, F.value.banding = S(a, ["banding", "pricing"]), F.value.finish = S(a, ["finish", "pricing"]), F.value.machining = S(a, ["machining", "pricing"]), M(a, ["options", "currency"]) && (p.value = S(a, ["options", "currency"])), M(a, ["options", "locale"]) && (m.value = S(a, ["options", "locale"]).replace("_", "-")), (M(a, ["options", "formula", "url"]) || M(a, ["options", "formula", "spec"])) && (t.value = "formula", x.value = S(a, ["options", "formula", "url"]) ?? null, s.value = S(a, ["options", "formula", "spec"]) ?? null), De(() => {
        R.value && R.value.init(a);
      });
    }, H = (a) => {
      var $, D, Q;
      const g = a;
      if (g.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, ($ = a == null ? void 0 : a.metadata) != null && $.totalStockCost && (g.checkout.formattedTotalStockCost = a.metadata.totalStockCost.toLocaleString(
        m.value,
        {
          style: "currency",
          currency: p.value
        }
      )), (D = a == null ? void 0 : a.metadata) != null && D.bandingLengthByType)
        for (const [j, W] of Object.entries(a.metadata.bandingLengthByType)) {
          if (!M(F.value, ["banding", j])) {
            A(`Banding price ${j} not found`);
            continue;
          }
          g.checkout.formattedBandingCost[j] = (W / 1e3 * F.value.banding[j]).toLocaleString(m.value, { style: "currency", currency: p.value });
        }
      if ((Q = a == null ? void 0 : a.metadata) != null && Q.finishAreaByType)
        for (const [j, W] of Object.entries(a.metadata.finishAreaByType)) {
          if (!M(F.value, ["finish", j])) {
            A(`Finish price ${j} not found`);
            continue;
          }
          g.checkout.formattedFinishCost[j] = (W / 1e6 * F.value.finish[j]).toLocaleString(m.value, { style: "currency", currency: p.value });
        }
      const f = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(g))
      });
      window.dispatchEvent(f);
    };
    return pt(() => {
      console.log(`💥 Powered by https://smartcut.dev V${P}`);
      const a = new URLSearchParams(window.location.search);
      d.value = !!a.has("debug"), d.value && console.log("Smartcut - debug enabled");
    }), $e(() => {
      window.smartcutCheckout = { init: ne }, c("ready");
      const a = new CustomEvent("smartcut/ready");
      window.dispatchEvent(a);
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
      hardWareResult: L,
      log: T,
      error: A,
      calculating: Y,
      result: H,
      formatPrice: N,
      findExtrasPrice: B,
      setHardwareResult: q
    }), (a, g) => (V(), fe(Le, null, [
      we(ee(u), { position: "top-left" }),
      t.value === "formula" && (x.value || s.value) ? (V(), oe(ee(y), {
        key: 0,
        ref: "formulapricing",
        "format-price": N,
        url: x.value,
        spec: s.value,
        debug: d.value,
        onHardwareResult: q
      }, null, 8, ["url", "spec", "debug"])) : te("", !0),
      t.value === "manual" || t.value === "formula" && (x.value || s.value) ? (V(), oe(Ve, {
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
        onValidationError: I,
        onResult: H
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : te("", !0)
    ], 64));
  }
}), Jt = {
  key: 1,
  class: "error-message"
}, Ct = /* @__PURE__ */ Se({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: v }) {
    const O = k(!1), y = k(null), u = Ae({
      wordpress: Wt,
      vanilla: Kt
    }), c = l, P = qe(() => {
      if (!c.type) return null;
      const d = c.type.toLowerCase();
      return u[d] || null;
    });
    return v({
      componentType: qe(() => c.type),
      isComponentMounted: O,
      checkout: y
    }), (d, E) => P.value ? (V(), oe(dt(P.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: y
    }, null, 512)) : c.type ? (V(), fe("div", Jt, " Invalid component type: " + ft(c.type), 1)) : te("", !0);
  }
}), Gt = /* @__PURE__ */ Ft(Ct, [["__scopeId", "data-v-6d642def"]]);
Et.add(
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
let de = null, ve = !1;
const Xt = async () => {
  if (!ve) {
    ve = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const v = l.getAttribute("data-type") || "";
      de = mt(Gt, { type: v }), await Ut, de.use(_t, { i18next: ke }), de.component("FontAwesomeIcon", ht), de.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      ve = !1;
    }
  }
};
Xt();
export {
  de as app,
  Xt as mount
};
