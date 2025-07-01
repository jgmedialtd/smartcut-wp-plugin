import { d as ve, g as b, j as Me, c as me, o as B, z as fe, e as ee, s as ie, u as Q, B as oe, b as ht, F as Ye, k as Ne, O as Qe, U as We, E as yt, V as gt, h as Re, W as bt, t as wt, X as kt, Y as vt } from "./vendor-vue-Cm6Mf_s4.js";
import { q as Ve, v as Ue, w as k, C as Ke, p as St, x as H, y as xt, z as Ft, A as Pt, B as Et, D as zt, _ as Tt, E as $t } from "./components-D5IlIQyz.js";
import { J as jt, D as qt, E as Ot, G as At, H as Dt, I as He, K as It, L as Lt, M as Bt, N as Rt, O as Vt, Q as Ut, S as Ht, T as Mt, U as Yt } from "./vendor-ov4OC3aS.js";
import { E as Nt, a as K } from "./vendor-pdf-BSKejM-7.js";
import { u as Qt, f as Wt } from "./composables-Bgzxl2Mx.js";
const J = 5, re = 10, de = ",", G = {
  fillColor: [7, 59, 76],
  fontStyle: "normal"
}, X = {
  fontSize: 9
}, C = { left: 10 };
let Z = [];
const Kt = (l, v, q, y = (u) => u.toString()) => {
  var $;
  const u = new Nt({ orientation: "landscape" });
  let f = 10;
  u.setFontSize(20), u.text(l("pdf.order_summary"), 10, f), f += 15, u.setFontSize(14), u.text(`${l("general.your")} ${l("woodwork.part")}`, 10, f), f += J, Z = [
    l("woodwork.length"),
    l("woodwork.width"),
    l("woodwork.thickness"),
    l("woodwork.material"),
    l("woodwork.quantity"),
    l("woodwork.name"),
    `${l("woodwork.banding")} (${Ve.join(de)})`,
    `${l("woodwork.finish")} (${Ue.join(de)})`
  ];
  const m = v.parts.map((c) => {
    var s;
    const t = Ve.map((x) => c.banding[x] || "-").join(de), S = Ue.map((x) => c.banding[x] || "-").join(de);
    return [
      y(c.l),
      y(c.w),
      y(c.t) || "-",
      ((s = c == null ? void 0 : c.material) == null ? void 0 : s.toUpperCase()) || "-",
      y(c.q),
      c.name || "-",
      t,
      S
    ];
  });
  K(u, {
    startY: f,
    head: [Z],
    body: m,
    margin: C,
    headStyles: G,
    styles: X
  }), f = u.lastAutoTable.finalY + re, u.setFontSize(14), u.text(l("pdf.stock_requirements"), 10, f), f += J, Z = [
    l("woodwork.length"),
    l("woodwork.width"),
    l("woodwork.thickness"),
    l("woodwork.material"),
    l("woodwork.quantity")
    // 'Cost'
  ];
  const F = v.stock.map((c) => {
    var t;
    return [
      y(c.l),
      y(c.w),
      y(c.t) || "-",
      ((t = c == null ? void 0 : c.material) == null ? void 0 : t.toUpperCase()) || "-",
      y(c.q)
      // stock.cost
    ];
  });
  if (K(u, {
    startY: f,
    head: [Z],
    body: F,
    margin: C,
    headStyles: G,
    styles: X
  }), f = u.lastAutoTable.finalY + re, v.metadata.totalRollLength > 0) {
    u.setFontSize(14), u.text(l("pdf.roll_requirements"), 10, f), f += J, Z = [
      l("woodwork.name"),
      l("woodwork.material"),
      l("woodwork.length")
    ];
    const c = v.stock.map((t) => {
      var S, s;
      return [
        ((S = t == null ? void 0 : t.name) == null ? void 0 : S.toUpperCase()) || "-",
        ((s = t == null ? void 0 : t.material) == null ? void 0 : s.toUpperCase()) || "-",
        y(t.analysis.rollLength)
      ];
    });
    K(u, {
      startY: f,
      head: [Z],
      body: c,
      margin: C,
      headStyles: G,
      styles: X
    }), f = u.lastAutoTable.finalY + re;
  }
  if (q && Object.values(q)) {
    u.setFontSize(14), u.text(l("pdf.hardware"), 10, f), f += J;
    const c = Object.values(q).map((t) => [
      t.name.toUpperCase(),
      y(t.q)
      // item.totalCost.toFixed( 2 )
    ]);
    K(u, {
      startY: f,
      head: [[l("pdf.item"), l("woodwork.quantity")]],
      body: c,
      margin: C,
      headStyles: G,
      styles: X
    }), f = u.lastAutoTable.finalY + re;
  }
  u.setFontSize(14), u.text(l("pdf.totals"), 10, f), f += J;
  const P = [
    [l("pdf.total_parts"), y(v.metadata.totalPartsProduced)],
    [l("pdf.part_area"), y(v.metadata.totalPartArea)],
    [l("pdf.total_stock_required"), y(v.metadata.totalUsedStock)],
    [l("pdf.total_banding_length"), y(v.metadata.totalBandingLength)],
    [l("pdf.total_finish_area"), y(v.metadata.totalFinishArea)],
    [l("pdf.total_roll_length"), y(v.metadata.totalRollLength)]
  ];
  if (K(u, {
    startY: f,
    body: P,
    margin: C,
    headStyles: G,
    styles: X
  }), f = u.lastAutoTable.finalY + re, ($ = window == null ? void 0 : window.smartcutImages) != null && $.length) {
    u.addPage();
    let c = 10;
    u.setFontSize(14), u.text(l("pdf.images"), 10, c), c += J;
    const t = window.smartcutImages.flatMap((S, s) => S.metadata.map((x) => [
      s + 1,
      x.newName
    ]));
    K(u, {
      startY: c,
      body: t,
      head: [[l("pdf.part_index"), l("pdf.file_name")]],
      margin: C,
      headStyles: G,
      styles: X
    });
  }
  return u.output("datauristring");
}, Jt = {
  key: 0,
  class: "debug"
}, Gt = !1, Xt = /* @__PURE__ */ ve({
  __name: "WordPress",
  setup(l) {
    const v = oe(() => import("./components-D5IlIQyz.js").then((e) => e.F)), q = oe(() => import("./components-D5IlIQyz.js").then((e) => e.O)), y = oe(() => import("./components-D5IlIQyz.js").then((e) => e.N)), { inputShapes: u } = Qt(), f = "production", m = {}, F = {}, P = b(null);
    let $, c, t;
    const S = {
      banding: null,
      finish: null
    };
    let s = null, x = [], R = null, E = {};
    const D = b(!1), O = b("manual"), M = b(""), z = b([]), I = b(null), L = b(!0), te = b(null), V = b(!1), r = b(null);
    We("calculator", () => r.value);
    const h = (e) => {
      D.value && console.log("SmartCut -", ...e);
    }, _ = (e) => {
      console.error(`SmartCut - ${e}`);
    }, j = (e = !0) => {
      V.value = !0, ["checkout", "intro_text", "offcuts", "banding_key"].forEach((a) => ae(a, "block")), ct() && ae("pricing_table", "table"), e ? Y(!0) : T(), U();
    }, A = (e = !0, n = !0) => {
      V.value = !1, ["checkout", "intro_text", "offcuts", "banding_key", "pricing_table"].forEach((o) => ae(o, "none")), n === !0 ? W() : n === !1 && U(), Y ? Y() : e === !1 && T();
    }, Y = (e = !1) => {
      ae("quantity", "inline-block"), m.quantity.readOnly = e;
    }, T = () => {
      V.value !== !1 && (_e(1), ae("quantity", "none"), m.quantity.readOnly = !0);
    }, W = () => {
      if (!m.cart_button) {
        _("Cart button not found");
        return;
      }
      m.cart_button.disabled = !1;
    }, U = () => {
      if (V.value !== !1) {
        if (!m.cart_button) {
          _("Cart button not found");
          return;
        }
        m.cart_button.disabled = !0;
      }
    }, Je = () => {
      _("Validation error"), U();
    }, _e = (e, n = 0) => {
      if (h(["setting cart quantity", e]), !m.quantity) {
        _("Quantity field not found when trying to set");
        return;
      }
      m.quantity.value = e.toFixed(n), console.assert(m.quantity.value === e.toFixed(n), "Quantity field value not set correctly");
    }, Ge = (e) => {
      h(["setting variation price", e]);
      const n = document.querySelector(".woocommerce-variation-price .smartcut-price-selector");
      n && (n.innerText = se(e)), P.value = e;
    }, Xe = (e = !1) => {
      var a, o, d;
      const n = e ? ((a = I.value) == null ? void 0 : a.display_price) ?? 0 : P.value ?? ((o = I.value) == null ? void 0 : o.display_price) ?? 0;
      return console.log("getCurrentVariationPrice", P.value, (d = I.value) == null ? void 0 : d.display_price), typeof n == "string" ? parseFloat(n) : n;
    }, Ce = () => {
      if (!(window != null && window.smartcutConfig)) {
        _("SmartCut config not found");
        return;
      }
      const e = window.smartcutConfig;
      t = e.settings;
      const n = Fe(k(window, ["smartcutConfig", "banding_data"])), a = Fe(k(window, ["smartcutConfig", "finish_data"])), o = {
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
          partSelected: (t == null ? void 0 : t.part_selected_color) ?? "#5bc85b",
          stock: (t == null ? void 0 : t.stock_color) ?? "#ffd166",
          button: (t == null ? void 0 : t.button_color) ?? "#118ab2",
          buttonText: (t == null ? void 0 : t.button_text_color) ?? "#ffffff",
          text: (t == null ? void 0 : t.text_color) ?? "#ffffff"
        }
      };
      D.value = o.debug;
      const d = {
        numberFormat: t.number_format,
        decimalPlaces: 2,
        fractionRoundTo: 0,
        faces: {
          enabled: t.machining_sides
        },
        holes: {
          enabled: t.machining_holes,
          defaultDiameter: t.machining_holes_default_diameter,
          diameters: t.machining_holes_diameters.split(",").map((w) => w.trim()).filter(Boolean),
          minDiameter: t.machining_holes_min_diameter,
          maxDiameter: t.machining_holes_max_diameter,
          enableDepth: t.machining_holes_depth,
          depths: t.machining_holes_depths.split(",").map((w) => w.trim()).filter(Boolean),
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
      L.value = Ee(), L.value ? Y(!0) : T(), s.type === "variable" ? A(!1, !1) : j(L.value);
      const p = {
        type: s.type,
        stock: z.value,
        variations: x ?? null,
        options: o,
        banding: n,
        finish: a,
        machining: d
      };
      p.type === "variable" && (h(["setting variable product form listeners"]), jQuery(function(w) {
        w(".variations_form").on("reset_data", () => A(!1, !1)).on("found_variation", (N, ue) => dt(N, ue));
      }));
      const g = {
        product: s,
        selectedVariation: I,
        inputs: F,
        elements: m,
        inputType: O,
        formatPrice: se,
        getCurrentVariationPrice: Xe,
        setInputValue: ye,
        setCartQuantity: _e,
        setVariationPrice: Ge,
        isExtraEnabled: be,
        isQuantityPricing: Ee,
        isMachiningEnabled: ze,
        isSurchargeEnabled: Te,
        getTotalBandingPrice: it,
        getTotalFinishPrice: ot,
        getTotalMachiningPrice: st,
        getInputValue: lt,
        enableAddToCart: W,
        log: h,
        error: _
      }, i = Wt({
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
      $ = i.calculatePrice, c = i.resetPricing, Ne(() => {
        r.value && r.value.init(p);
      });
    }, Ze = (e) => {
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
      }, s.multiple_sizes || (s.l || _("product 'length' attribute not available"), s.w || _("product 'width' attribute not available"));
    }, et = (e) => {
      O.value = k(window, ["smartcutConfig", "settings", "enable_formula"]) === !0 ? "formula" : "manual", M.value = k(window, ["smartcutConfig", "settings", "formula_url"]), h([`Input type: ${O.value}`]), E = {
        thousands_separator: e == null ? void 0 : e.thousands_separator,
        decimal_separator: e == null ? void 0 : e.decimal_separator,
        number_of_decimals: e == null ? void 0 : e.number_of_decimals,
        currency_symbol: e == null ? void 0 : e.currency_symbol,
        currency_position: e == null ? void 0 : e.currency_position
      };
    }, tt = () => {
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
      for (const [n, a] of Object.entries(e))
        m[n] = document.querySelector(a);
      if (!m.checkout)
        return _("checkout iframe not found");
      if (!m.quantity)
        return _("quantity field not found");
      if (!m.cart_button)
        return _("cart button not found");
      m.quantity.readOnly = !0, U();
    }, nt = () => ({
      x1: t.stock_trim_x1 ?? 0,
      x2: t.stock_trim_x2 ?? 0,
      y1: t.stock_type === "linear" ? 0 : t.stock_trim_y1 ?? 0,
      y2: t.stock_type === "linear" ? 0 : t.stock_trim_y2 ?? 0
    }), ne = (e = null, n = null, a = null, o = null, d = null) => {
      let p;
      if (d && typeof d == "object") {
        p = [];
        for (const [i, w] of Object.entries(d))
          i !== "attribute_size" && i !== "attribute_thickness" && p.push(`${i.replace("attribute_", "")}: ${w}`);
        p = p.join(" - ");
      }
      return {
        name: s.stock_name,
        l: e,
        w: n,
        t: a,
        grain: t.stock_grain,
        cost: parseFloat((o == null ? void 0 : o.toString()) || "0"),
        trim: nt(),
        allowExactFitShapes: !0,
        notes: p
      };
    }, at = () => {
      if (s != null && s.stock_name || _("product name not specified"), z.value = [], s.multiple_sizes)
        for (const e of s.size) {
          if (!ce(e)) continue;
          const [n, a] = e.split("x"), o = ne(
            parseFloat(n),
            parseFloat(a),
            s == null ? void 0 : s.t,
            s.price
          );
          z.value.push(o);
        }
      else
        z.value.push(ne(
          s.l,
          s.w,
          s == null ? void 0 : s.t,
          s == null ? void 0 : s.price
        ));
    }, Se = (e, n) => {
      const a = e.split(".");
      return a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, n), a.join(".");
    }, se = (e = 0, n = "") => {
      if (!e)
        return n ? xe("0.00") : "0.00";
      typeof e == "string" && (e = parseFloat(e));
      const a = e.toFixed(E.number_of_decimals).replace(".", E.decimal_separator), o = Se(a, E.thousands_separator);
      return n ? xe(o) : o;
    }, rt = (e) => {
      if (e == null) return "";
      typeof e == "string" && (e = parseFloat(e));
      const a = e % 1 !== 0 ? E.number_of_decimals : 0, o = e.toFixed(a).replace(".", E.decimal_separator);
      return Se(o, E.thousands_separator);
    }, xe = (e) => {
      switch (E.currency_position) {
        case "left":
          return `${E.currency_symbol}${e}`;
        case "right":
          return `${e}${E.currency_symbol}`;
        default:
          return `${E.currency_symbol}${e}`;
      }
    }, le = (e) => {
      const n = (a) => Pt(Et(a), 100).replace("|", "_");
      return Array.isArray(e) ? e.map(n).join(",") : n(e);
    }, Fe = (e) => {
      if (!e) return null;
      const n = {
        labels: [],
        pricing: {}
      }, a = Object.values(e);
      for (const o of a)
        o != null && o.variations ? (n.labels.push(...Object.keys(o.options)), Object.values(o.variations).forEach((d) => {
          const { options: p } = d, g = Object.values(p).map((i) => le(i)).join("|");
          n.pricing[g] = parseInt(d.price);
        })) : o != null && o.options && Object.keys(o.options).forEach((d) => {
          n.pricing[le(d)] = parseInt(o.price);
        });
      return n.labels.length || n.labels.push("type"), n;
    }, he = (e, n) => {
      if (!n.length || !H(S, [e])) return null;
      const a = k(S, [e]);
      if (!xt(a)) return null;
      const d = Object.values(a).map((p) => p != null && p.variations ? Object.values(p.variations).map((g) => (g.type = "variable", g)) : (p.type = "simple", p)).flat().find((p) => {
        let g;
        return p.type === "simple" ? g = Object.keys(p.options) : g = Object.values(p.options), g ? g.every((i, w) => le(i) === le(n[w])) : !1;
      });
      return d != null && d.price ? parseFloat(d.price) : null;
    }, ot = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const d = a.split("|"), p = he("finish", d);
          if (p === null) continue;
          const i = Number(o) / 1e6 * parseFloat(p.toString());
          n += i;
        }
        if ("min_finish_charge" in t) {
          const a = parseFloat(t == null ? void 0 : t.min_finish_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, it = (e) => {
      let n = 0;
      if (typeof e == "object") {
        for (let [a, o] of Object.entries(e)) {
          typeof o == "string" && (o = parseFloat(o));
          const d = a.split("|"), p = he("banding", d);
          if (p === null) continue;
          const g = o / (t.unit_system === "imperial" ? 12 : 1e3) * parseFloat(p.toString());
          n += g;
        }
        if ("min_banding_charge" in t) {
          const a = parseFloat(t == null ? void 0 : t.min_banding_charge);
          if (a > 0 && n > 0 && n < a)
            return a;
        }
      }
      return n;
    }, st = (e) => (R.holes ?? 0) * (e.metadata.numHoles ?? 0) + (R.corners ?? 0) * (e.metadata.numCorners ?? 0), ae = (e, n) => {
      var a;
      e in m && ((a = m[e]) != null && a.style) && (m[e].style.display = n);
    }, ye = (e, n) => {
      ge(e) ? F[e].value = n : _(`Attempting to set input but key '${e}' does not exist`);
    }, lt = (e) => {
      if (ge(e))
        return F[e].value;
      _(`Attempting to get input but key '${e}' does not exist`);
    }, ge = (e) => e in F && F[e] instanceof HTMLInputElement, Pe = () => {
      _e(1), U(), c();
      for (const e in F)
        e !== "smartcut-hardware-price" && ye(e, null);
    }, Ee = () => {
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
      if (H(t, ["enable", e]) && k(t, ["enable", e]) === !1)
        return !1;
      const n = k(S, [e]);
      return !!(n && Object.values(n).length);
    }, ze = () => t.enable_machining === !0, Te = () => !((t == null ? void 0 : t.surcharge_type) === "none" || !(t != null && t.surcharge) || t.surcharge === "0.00"), ct = () => !!(t.pricing_strategy === "full_stock_plus_cut_length" || t.pricing_strategy === "full_stock_plus_num_parts" || t.pricing_strategy === "part_area" || t.pricing_strategy === "roll_length" || Te() || be("banding") || be("finish") || ze()), ut = (e) => {
      var a;
      let n = (a = e == null ? void 0 : e.attributes) == null ? void 0 : a.attribute_size;
      return n || (n = s == null ? void 0 : s.size), n;
    }, ce = (e) => /\d+x\d+/.test(e), pt = () => {
      window.smartcutConfig.input_fields.forEach((e) => {
        const n = e.replaceAll("_", "-");
        F[n] = document.getElementById(n);
      });
    }, dt = (e, n) => {
      Pe(), I.value = n, h(["variation selected", n.attributes]), z.value = [];
      const a = k(n, ["attributes", "attribute_thickness"]) ?? null;
      if (s.selected_thickness = a, u.value.forEach((o) => {
        o.t = St({ v: a });
      }), s.multiple_sizes) {
        const o = ut(n);
        if (h([`variation found with size: ${o} & thickness: ${a}`]), !o)
          return A(!1), _("The size of this multiple size product could not be found");
        if (Array.isArray(o) ? j(L.value) : ce(o) ? A(!0, !0) : j(L.value), x != null && x.length) {
          let d;
          const p = a;
          let g = n.display_price;
          Array.isArray(o) ? d = o.map((i) => ({
            size: i,
            l: i.split("x")[0],
            w: i.split("x")[1],
            t: p,
            price: g
          })) : d = x.filter((i) => {
            var w, N;
            return ce((w = i == null ? void 0 : i.attributes) == null ? void 0 : w.size) ? a === (((N = i == null ? void 0 : i.attributes) == null ? void 0 : N.thickness) ?? null) : !1;
          }).map((i) => {
            var $e, je, qe, Oe;
            const w = (($e = i == null ? void 0 : i.attributes) == null ? void 0 : $e.size.split("x")[0]) ?? null, N = ((je = i == null ? void 0 : i.attributes) == null ? void 0 : je.size.split("x")[1]) ?? null;
            let ue = 0;
            return n.display_price || (ue = x.find((pe) => {
              var Ae, De, Ie, Le, Be;
              return ce((Ae = pe.attributes) == null ? void 0 : Ae.size) && ((De = pe.attributes) == null ? void 0 : De.thickness) === ((Ie = i == null ? void 0 : i.attributes) == null ? void 0 : Ie.thickness) && ((Le = pe.attributes) == null ? void 0 : Le.size) === ((Be = i == null ? void 0 : i.attributes) == null ? void 0 : Be.size) && pe.display_price > 0;
            }).display_price), h([
              `size attribute: '${(qe = i == null ? void 0 : i.attributes) == null ? void 0 : qe.size}'`,
              `price for thickness ${a}, dimensions: ${w}x${N} is ${g}`
            ]), {
              size: (Oe = i == null ? void 0 : i.attributes) == null ? void 0 : Oe.size,
              l: w,
              w: N,
              t: p,
              price: g || ue
            };
          }), V.value === !0 && d.forEach((i) => {
            const w = ne(
              i.l,
              i.w,
              i.t,
              i.price,
              n == null ? void 0 : n.attributes
            );
            z.value.push(w);
          });
        }
      } else {
        if (!x.some((o) => "thickness" in o.attributes))
          z.value.push(ne(
            s.l,
            s.w,
            a,
            n.display_price,
            n == null ? void 0 : n.attributes
          ));
        else {
          const o = x.find((d) => {
            var p;
            return ((p = d.attributes) == null ? void 0 : p.thickness) === a;
          });
          if (!o) return _(`variation not found for thickness ${a}`);
          z.value.push(ne(
            s.l,
            s.w,
            a,
            o.price,
            n == null ? void 0 : n.attributes
          ));
        }
        j(L.value);
      }
    }, ft = async (e) => {
      Pe(), h(["result event received", e]);
      const n = await $(e);
      if (!n.success) {
        console.error(n.error);
        return;
      }
      await mt(e);
    }, mt = async (e) => {
      const a = Kt(Ft, e, te.value, rt).split(",")[1], o = new jt();
      o.file("order-summary.pdf", a);
      const d = await o.generateAsync({ type: "blob" }), p = new File([d], "order-summary.zip", { type: "application/zip" });
      if (!ge("smartcut-order-summary")) return;
      const g = F["smartcut-order-summary"].closest("form");
      if (!g) return;
      const i = new DataTransfer();
      i.items.add(p);
      const w = g.querySelector('[name="smartcut_order_summary"]');
      w instanceof HTMLInputElement && (w.files = i.files);
    }, _t = (e, n) => {
      U(), e && (te.value = Qe(e)), ye("smartcut-hardware-price", n ?? 0);
    };
    return Me(() => {
      var a;
      console.log("💥 Powered by https://smartcut.dev", (a = window == null ? void 0 : window.smartcutConfig) == null ? void 0 : a.version), h(["Launching WordPress checkout..."]), S.banding = k(window, ["smartcutConfig", "banding_data"]), S.finish = k(window, ["smartcutConfig", "finish_data"]), R = k(window, ["smartcutConfig", "machining_pricing"]), x = k(window, ["smartcutConfig", "variations"]), tt(), pt(), Ze(window.smartcutConfig), et(window.smartcutConfig), Ce(), at(), [
        "div.quantity > input.plus",
        "div.quantity > input.minus",
        "div.quantity .qty-plus",
        "div.quantity .qty-minus"
      ].forEach((o) => {
        const d = document.querySelector(o);
        d && (d.style.display = "none");
      });
      const n = new CustomEvent("smartcut/ready");
      window.dispatchEvent(n), h(["Wordpress checkout ready"]);
    }), (e, n) => (B(), me(Ye, null, [
      fe(Q(y), { position: "top-left" }),
      Q(f) === "development" && Gt ? (B(), me("div", Jt, [
        n[0] || (n[0] = ht("div", null, "WP - developer information", -1)),
        fe(Q(q), {
          data: [z.value],
          paths: ["stock"]
        }, null, 8, ["data"]),
        fe(Q(q), {
          data: [z.value.map((a) => a.trim)],
          paths: ["stock trim"]
        }, null, 8, ["data"])
      ])) : ee("", !0),
      O.value === "formula" && M.value ? (B(), ie(Q(v), {
        key: 1,
        ref: "formulapricing",
        "format-price": se,
        url: M.value,
        debug: D.value,
        onHardwareResult: _t,
        onPanelResult: U
      }, null, 8, ["url", "debug"])) : ee("", !0),
      O.value === "manual" || O.value === "formula" && M.value ? (B(), ie(Ke, {
        key: 2,
        ref_key: "calculator",
        ref: r,
        readonly: O.value === "formula",
        debug: D.value,
        stock: z.value,
        "find-extras-price": he,
        "format-price": se,
        "input-type": O.value,
        onLog: h,
        onError: _,
        onInputsChanged: U,
        onValidationError: Je,
        onResult: ft
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : ee("", !0)
    ], 64));
  }
}), Ct = /* @__PURE__ */ ve({
  __name: "Vanilla",
  emits: ["ready"],
  setup(l, { expose: v, emit: q }) {
    const y = oe(() => import("./components-D5IlIQyz.js").then((r) => r.F)), u = oe(() => import("./components-D5IlIQyz.js").then((r) => r.N)), f = q, m = b(!1), F = b([]), P = b({
      banding: null,
      finish: null,
      machining: null
    }), $ = b("USD"), c = b("en-US"), t = b("manual"), S = b(""), s = yt(null), x = b(null), R = b();
    We("calculator", () => R.value);
    const E = (r) => {
      m.value && console.log("SmartCut -", ...r);
    }, D = (r) => {
      console.error(`SmartCut - ${r}`);
    }, O = () => {
      const r = new CustomEvent("smartcut/validationError");
      window.dispatchEvent(r);
    }, M = () => {
      const r = new CustomEvent("smartcut/calculating");
      window.dispatchEvent(r);
    }, z = (r) => {
      x.value = r;
    }, I = (r = 0, h = c.value) => {
      if (r === !0) return "";
      try {
        h = h.replace("_", "-");
        const _ = Number(r);
        return !_ && _ !== 0 ? "" : isNaN(_) ? (console.error("formatPrice - invalid price:", r), "") : _.toLocaleString(h, {
          style: "currency",
          currency: $.value
        });
      } catch (_) {
        return console.error("Error formatting price:", _), "";
      }
    }, L = (r, h) => {
      var A;
      if (!((A = P.value) != null && A[r])) return null;
      const _ = h.join("|"), j = k(P.value, [r, _]);
      return typeof j == "number" ? j : parseFloat(j);
    }, te = (r) => {
      zt(r), F.value = r.stock, P.value.banding = k(r, ["banding", "pricing"]), P.value.finish = k(r, ["finish", "pricing"]), P.value.machining = k(r, ["machining", "pricing"]), H(r, ["options", "currency"]) && ($.value = k(r, ["options", "currency"])), H(r, ["options", "locale"]) && (c.value = k(r, ["options", "locale"]).replace("_", "-")), (H(r, ["options", "formula", "url"]) || H(r, ["options", "formula", "spec"])) && (t.value = "formula", S.value = k(r, ["options", "formula", "url"]) ?? null, s.value = k(r, ["options", "formula", "spec"]) ?? null), Ne(() => {
        R.value && R.value.init(r);
      });
    }, V = (r) => {
      var j, A, Y;
      const h = r;
      if (h.checkout = {
        formattedTotalStockCost: "",
        formattedBandingCost: {},
        formattedFinishCost: {}
      }, (j = r == null ? void 0 : r.metadata) != null && j.totalStockCost && (h.checkout.formattedTotalStockCost = r.metadata.totalStockCost.toLocaleString(
        c.value,
        {
          style: "currency",
          currency: $.value
        }
      )), (A = r == null ? void 0 : r.metadata) != null && A.bandingLengthByType)
        for (const [T, W] of Object.entries(r.metadata.bandingLengthByType)) {
          if (!H(P.value, ["banding", T])) {
            D(`Banding price ${T} not found`);
            continue;
          }
          h.checkout.formattedBandingCost[T] = (W / 1e3 * P.value.banding[T]).toLocaleString(c.value, { style: "currency", currency: $.value });
        }
      if ((Y = r == null ? void 0 : r.metadata) != null && Y.finishAreaByType)
        for (const [T, W] of Object.entries(r.metadata.finishAreaByType)) {
          if (!H(P.value, ["finish", T])) {
            D(`Finish price ${T} not found`);
            continue;
          }
          h.checkout.formattedFinishCost[T] = (W / 1e6 * P.value.finish[T]).toLocaleString(c.value, { style: "currency", currency: $.value });
        }
      const _ = new CustomEvent("smartcut/result", {
        detail: JSON.parse(JSON.stringify(h))
      });
      window.dispatchEvent(_);
    };
    return gt(() => {
      console.log("💥 Powered by https://smartcut.dev ");
      const r = new URLSearchParams(window.location.search);
      m.value = !!r.has("debug"), m.value && console.log("Smartcut - debug enabled");
    }), Me(() => {
      window.smartcutCheckout = { init: te }, f("ready");
      const r = new CustomEvent("smartcut/ready");
      window.dispatchEvent(r);
    }), v({
      init: te,
      debug: m,
      stock: F,
      pricing: P,
      currency: $,
      locale: c,
      inputType: t,
      formulaURL: S,
      formulaSpec: s,
      hardWareResult: x,
      log: E,
      error: D,
      calculating: M,
      result: V,
      formatPrice: I,
      findExtrasPrice: L,
      setHardwareResult: z
    }), (r, h) => (B(), me(Ye, null, [
      fe(Q(u), { position: "top-left" }),
      t.value === "formula" && (S.value || s.value) ? (B(), ie(Q(y), {
        key: 0,
        ref: "formulapricing",
        "format-price": I,
        url: S.value,
        spec: s.value,
        debug: m.value,
        onHardwareResult: z
      }, null, 8, ["url", "spec", "debug"])) : ee("", !0),
      t.value === "manual" || t.value === "formula" && (S.value || s.value) ? (B(), ie(Ke, {
        key: 1,
        ref_key: "calculator",
        ref: R,
        readonly: t.value === "formula",
        debug: m.value,
        stock: F.value,
        "input-type": t.value,
        "find-extras-price": L,
        "format-price": I,
        onLog: E,
        onError: D,
        onCalculating: M,
        onValidationError: O,
        onResult: V
      }, null, 8, ["readonly", "debug", "stock", "input-type"])) : ee("", !0)
    ], 64));
  }
}), Zt = {
  key: 1,
  class: "error-message"
}, en = /* @__PURE__ */ ve({
  __name: "Launch",
  props: {
    type: { default: "vanilla" }
  },
  setup(l, { expose: v }) {
    const q = b(!1), y = b(null), u = Qe({
      wordpress: Xt,
      vanilla: Ct
    }), f = l, m = Re(() => {
      if (!f.type) return null;
      const F = f.type.toLowerCase();
      return u[F] || null;
    });
    return v({
      componentType: Re(() => f.type),
      isComponentMounted: q,
      checkout: y
    }), (F, P) => m.value ? (B(), ie(bt(m.value), {
      key: 0,
      ref_key: "checkoutRef",
      ref: y
    }, null, 512)) : f.type ? (B(), me("div", Zt, " Invalid component type: " + wt(f.type), 1)) : ee("", !0);
  }
}), tn = /* @__PURE__ */ Tt(en, [["__scopeId", "data-v-afc067af"]]);
qt.add(
  Ot,
  At,
  Dt,
  He,
  It,
  Lt,
  Bt,
  Rt,
  Vt,
  Ut,
  Ht,
  Mt,
  He,
  Yt
);
let we = null, ke = !1;
const nn = async () => {
  if (!ke) {
    ke = !0;
    try {
      const l = document.querySelector("#smartcut-app");
      if (!l) {
        console.warn("No #smartcut-app element found");
        return;
      }
      const v = l.getAttribute("data-type") || "";
      we = kt(tn, { type: v }), await $t, we.component("FontAwesomeIcon", vt), we.mount("#smartcut-app");
    } catch (l) {
      console.error("SmartCut mount error:", l);
    } finally {
      ke = !1;
    }
  }
};
nn();
export {
  we as app,
  nn as mount
};
