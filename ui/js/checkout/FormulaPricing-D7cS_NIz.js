var Q = Object.defineProperty;
var X = (h, e, t) => e in h ? Q(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var _ = (h, e, t) => X(h, typeof e != "symbol" ? e + "" : e, t);
import { I as ee } from "./Launch-B2tS3iRs.js";
import { B as te, E as re, P as se, C as A, r as I, n as V, w as ne, o as ae, j as y, k as E, t as x, H, u as k, A as U, I as ie, F as D, l as B, v as b, L as oe } from "./main-ELq8kMue.js";
class F extends Error {
  constructor(e, t) {
    super(e), this.code = t, this.name = "FormulaError";
  }
}
class z {
  constructor({ url: e = null, spec: t = null }) {
    _(this, "url");
    _(this, "spec");
    // Update the operations object to use the FormulaOperation type
    _(this, "operations", {
      add: (e, t) => e + t,
      subtract: (e, t) => e - t,
      multiply: (e, t) => e * t,
      divide: (e, t) => {
        if (t === 0) throw new F("Division by zero", "DIVISION_BY_ZERO");
        return e / t;
      },
      ">": (e, t) => e > t,
      "<": (e, t) => e < t,
      ">=": (e, t) => e >= t,
      "<=": (e, t) => e <= t,
      "==": (e, t) => e === t
    });
    _(this, "precedence", {
      "+": 4,
      "-": 4,
      "*": 5,
      "/": 5,
      ">": 3,
      "<": 3,
      ">=": 3,
      "<=": 3,
      "==": 3,
      "?": 2,
      ":": 2
    });
    e && (this.url = e), t && (this.spec = t);
  }
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(e, t = {}) {
    if (typeof e == "number" || typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (this.isStringLiteral(e))
        return e.slice(1, -1);
      if (!(e in t))
        throw new Error(`Undefined variable: ${e}`);
      return t[e];
    }
    const { operation: r, operands: n } = e;
    if (!r)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(r))
      throw new Error(`Invalid operation: ${r}`);
    if (r === "ternary") {
      const a = this.evaluate(e.condition, t), o = this.evaluate(e.trueExpr, t), w = this.evaluate(e.falseExpr, t);
      return a ? o : w;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [s, i] = n.map((a) => this.evaluate(a, t));
    return [">", "<", ">=", "<=", "=="].includes(r) ? this.evaluateComparison(r, s, i) : this.operations[r](s, i);
  }
  // Update getOperation to use the type guard
  getOperation(e) {
    const r = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "?:": "ternary"
    }[e];
    if (!this.isFormulaOperation(r))
      throw new Error(`Unsupported operator: ${e}`);
    return r;
  }
  isFormulaOperation(e) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(e);
  }
  isFormula(e) {
    return typeof e == "string" && e.startsWith("=");
  }
  stripFormulaPrefix(e) {
    return e.substring(1);
  }
  evaluateValue(e, t, r = {}) {
    return typeof e == "number" || !this.isFormula(e) ? e : this.evaluateFormula(this.stripFormulaPrefix(e), t, r);
  }
  extractDependencies(e) {
    const t = /* @__PURE__ */ new Set();
    if (typeof e == "string") {
      const r = Array.from(e.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const i of r)
        t.add(`${i[1]}.${i[2]}`);
      const n = Array.from(e.matchAll(/inputs\.(\w+)/g));
      for (const i of n)
        t.add(`input.${i[1]}`);
      const s = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const i of s)
        e.includes(i) && t.add(`input.${i}`);
    }
    return t;
  }
  buildFormulaGraph(e, t) {
    const r = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (s, i) => {
      const a = `${e}.${s}`;
      r.nodes.set(a, {
        panelKey: e,
        attribute: s,
        formula: i
      }), r.edges.set(a, this.isFormula(i) ? this.extractDependencies(this.stripFormulaPrefix(i.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", t.l), n("w", t.w), n("t", t.t), n("q", t.q), r;
  }
  resolveFormulas(e, t, r, n = {}) {
    const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), a = (o) => {
      if (s.has(o))
        return s.get(o);
      const [w, M] = o.split(".");
      if (!e.nodes.has(o)) {
        const c = n[w];
        if (c)
          return M === "q" ? c.q : c[M];
        throw new Error(`Node not found: ${o}`);
      }
      if (i.has(o))
        throw new Error(`Circular dependency detected at ${o}`);
      const m = e.nodes.get(o);
      if (typeof m.formula == "number")
        return s.set(o, m.formula), m.formula;
      i.add(o);
      const d = e.edges.get(o) || /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (const c of d)
        if (c.startsWith("input.")) {
          const P = c.split(".")[1];
          g.set(c, r[P]);
        } else
          g.set(c, a(c));
      const O = this.evaluateFormulaWithDeps(m.formula, g, r);
      return s.set(o, O), i.delete(o), O;
    };
    for (const o of e.nodes.keys())
      a(o);
    return Object.fromEntries(s);
  }
  evaluateFormulaWithDeps(e, t, r, n) {
    if (!this.isFormula(e)) return e;
    let s = this.stripFormulaPrefix(e.toString());
    return s = s.replace(
      /inputs\.(\w+)/g,
      (i, a) => {
        var o;
        return ((o = r[a]) == null ? void 0 : o.toString()) || "0";
      }
    ), s = s.replace(
      /panels\.(\w+)\.(\w+)/g,
      (i, a, o) => {
        if (a === (n == null ? void 0 : n.panelKey) && n[o] !== void 0)
          return n[o].toString();
        if (t.has(`${a}.${o}`))
          return t.get(`${a}.${o}`).toString();
        throw new Error(`Undefined variable in formula: ${i}`);
      }
    ), this.evaluate(this.parse(s), r);
  }
  calculatePanels(e) {
    var r;
    if (!((r = this.spec) != null && r.panels)) return {};
    const t = {};
    for (const [n, s] of Object.entries(this.spec.panels)) {
      const i = this.buildFormulaGraph(n, s), a = this.resolveFormulas(i, s, e, t), o = {
        panelKey: n,
        l: a[`${n}.l`],
        w: a[`${n}.w`],
        t: a[`${n}.t`],
        q: a[`${n}.q`] || 1
      };
      t[n] = {
        name: s.name,
        material: s.material,
        bandingOptions: s.bandingOptions ?? {},
        finishOptions: s.finishOptions ?? {},
        orientationLock: s.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(s.orientationLock, /* @__PURE__ */ new Map(), e, o) : void 0,
        ...o
      };
    }
    return t;
  }
  evaluateFormula(e, t, r = {}) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e.replace(/inputs\.(\w+)/g, (i, a) => {
        if (!(a in t))
          throw new Error(`Input not found: ${a}`);
        return t[a].toString();
      }), s = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (s) {
        const [, i, a] = s;
        if (!r[i])
          throw new Error(`Panel not found: ${i}`);
        return a === "q" ? r[i].q ?? 1 : r[i].dimensions[a];
      }
      return this.evaluate(this.parse(n), t);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(e) {
    const t = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return e.match(t) || [];
  }
  isValidToken(e) {
    return this.isNumber(e) || this.isVariable(e) || e in this.precedence || e === "(" || e === ")" || e === "." || this.isIdentifier(e);
  }
  isIdentifier(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  evaluateComparison(e, t, r) {
    switch (e) {
      case ">":
        return t > r;
      case "<":
        return t < r;
      case ">=":
        return t >= r;
      case "<=":
        return t <= r;
      case "==":
        return t === r;
      default:
        throw new Error(`Unsupported comparison operator: ${e}`);
    }
  }
  isNumber(e) {
    return !isNaN(Number(e));
  }
  isVariable(e) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e);
  }
  toPostfix(e) {
    const t = [], r = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      if (this.isNumber(s) || this.isStringLiteral(s) || this.isIdentifier(s))
        t.push(this.isNumber(s) ? Number(s) : s);
      else if (s === "(")
        r.push(s);
      else if (s === ")") {
        for (; r.length && r[r.length - 1] !== "("; )
          t.push(r.pop());
        if (r.length === 0)
          throw new Error("Mismatched parentheses");
        r.pop();
      } else if (s === "?") {
        for (; r.length && this.precedence[r[r.length - 1]] > this.precedence[s]; )
          t.push(r.pop());
        r.push(s);
      } else if (s === ":") {
        for (; r.length && r[r.length - 1] !== "?"; )
          t.push(r.pop());
        if (r.length === 0)
          throw new Error("Mismatched ternary operator");
        r.pop(), r.push("?:");
      } else if (s in this.precedence) {
        for (; r.length && this.precedence[r[r.length - 1]] >= this.precedence[s]; )
          t.push(r.pop());
        r.push(s);
      } else
        throw new Error(`Invalid token: ${s}`);
    }
    for (; r.length; ) {
      const n = r.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      t.push(n);
    }
    return t;
  }
  parse(e) {
    if (typeof e != "string")
      throw new Error("Parse input must be a string");
    if (!e.trim())
      throw new Error("Empty input");
    const t = this.tokenize(e), r = this.toPostfix(t);
    return this.toFormulaJSON(r);
  }
  isStringLiteral(e) {
    return /^'.*'$/.test(e);
  }
  toFormulaJSON(e) {
    const t = [];
    for (const r of e)
      if (typeof r == "number" || this.isStringLiteral(r.toString()) || this.isVariable(r.toString()))
        t.push(r);
      else if (r === "?:") {
        if (t.length < 3)
          throw new Error("Invalid ternary expression");
        const n = t.pop(), s = t.pop(), i = t.pop();
        t.push({
          operation: "ternary",
          condition: i,
          trueExpr: s,
          falseExpr: n
        });
      } else {
        if (t.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = t.pop(), s = t.pop();
        t.push({
          operation: this.getOperation(r.toString()),
          operands: [s, n]
        });
      }
    if (t.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return t[0];
  }
  calculateHardware(e) {
    var t;
    return (t = this.spec) != null && t.hardware ? Object.entries(this.spec.hardware).reduce((r, [n, s]) => {
      const i = this.evaluateValue(s.q, e);
      return r[n] = {
        name: s.name,
        q: Math.ceil(i),
        totalCost: Math.ceil(i) * s.cost
      }, r;
    }, {}) : {};
  }
  calculateAll(e) {
    this.validateInputs(e);
    const t = this.calculatePanels(e), r = this.calculateHardware(e);
    return {
      inputs: e,
      panels: t,
      hardware: r
    };
  }
  validateInputs(e) {
    var t;
    if (!((t = this.spec) != null && t.inputs)) throw new F("No input specifications defined", "NO_INPUTS");
    for (const [r, n] of Object.entries(this.spec.inputs)) {
      const s = e[r];
      if (s === void 0)
        throw new F(`Missing required input: ${r}`, "MISSING_INPUT");
      if (s < n.min || s > n.max)
        throw new F(`Input ${r} value ${s} out of range [${n.min}, ${n.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const e = await fetch(this.url);
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`);
      const t = await e.json();
      return this.spec = t, this.validateSpec(), t;
    } catch (e) {
      return console.error("Error fetching or parsing JSON file:", e), null;
    }
  }
  validateSpec() {
    const e = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && e.push("Specification must contain inputs"), { isValid: e.length === 0, errors: e }) : (e.push("Specification is required"), { isValid: !1, errors: e });
  }
  validateFields(e) {
    var r;
    if (!((r = this.spec) != null && r.inputs))
      throw new F("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (e.length !== t.length)
      throw new F(`Expected ${t.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    e.forEach((n, s) => {
      const i = t[s], a = this.spec.inputs[i];
      if (n.value === null || n.value === void 0)
        throw new F(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (n.value < a.min || n.value > a.max)
        throw new F(`Field ${s} value ${n.value} out of range [${a.min}, ${a.max}]`, "FIELD_OUT_OF_RANGE");
    });
  }
  fieldsToInputs(e) {
    var r;
    const t = Object.keys(((r = this.spec) == null ? void 0 : r.inputs) || {});
    return e.reduce((n, s, i) => {
      const a = t[i];
      return a && (n[a] = s.value), n;
    }, {});
  }
  getEmptyFields() {
    var t;
    const e = {};
    return (t = this.spec) != null && t.inputs && Object.keys(this.spec.inputs).forEach((r, n) => {
      e[n] = { value: 0 };
    }), e;
  }
  getDefaultFields() {
    var t;
    const e = {};
    return (t = this.spec) != null && t.inputs && Object.values(this.spec.inputs).forEach((r, n) => {
      e[n] = { value: r.default };
    }), e;
  }
  calculatePanelsFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculatePanels(t);
  }
  calculateHardwareFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculateHardware(t);
  }
  calculateAllFromFields(e) {
    this.validateFields(e);
    const t = this.fieldsToInputs(e);
    return this.calculateAll(t);
  }
  getFieldMetadata() {
    var t;
    const e = [];
    return (t = this.spec) != null && t.inputs && Object.entries(this.spec.inputs).forEach(([r, n], s) => {
      e.push({
        index: s,
        name: r,
        label: n.label,
        type: n.type,
        min: n.min,
        max: n.max,
        default: n.default
      });
    }), e;
  }
}
const le = {
  key: 0,
  class: "debug"
}, ue = { id: "formula-pricing" }, ce = {
  key: 0,
  class: "extras"
}, pe = { class: "heading" }, he = { id: "hardware-total" }, de = { class: "heading panels" }, ve = /* @__PURE__ */ te({
  __name: "FormulaPricing",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (h) => h.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(h, { emit: e }) {
    const t = oe(() => import("./ObjectViewer-BBe4fcs3.js")), r = h, { t: n } = re({
      locale: "en_US",
      useScope: "global"
    }), s = e, i = se("calculator"), a = A(() => i()), o = I("production");
    let w = null;
    const M = I(!0), m = I(null), d = I([]), g = I(!1), O = A(() => {
      if (!g.value || !d.value.length || d.value.every((p) => p.value === null)) return;
      const l = R();
      return V(() => {
        s("panel-result", l);
      }), l;
    }), c = A(() => {
      if (!a.value || !g.value || !d.value.length || d.value.every((p) => p.value === null)) return;
      const l = J();
      return V(() => {
        s("hardware-result", l, P.value);
      }), l;
    }), P = A(() => {
      if (c.value)
        return Object.values(c.value).reduce((l, p) => l + p.totalCost, 0);
    });
    ne(O, (l) => {
      var $, S, N, j;
      if (!g.value || !l || !a.value || !(($ = a.value) != null && $.inputShapes) || !((S = a.value.inputShapes) != null && S.length)) return;
      const p = (u) => u != null && u.name ? u.name.toLowerCase() : "", C = new Map(
        a.value.inputShapes.map((u) => [p(u), u])
      ), f = /* @__PURE__ */ new Set();
      for (const u of Object.values(O.value)) {
        if (!u.name) continue;
        const q = p(u), v = C.get(q), T = {
          ...u,
          name: u.name.toUpperCase() || (v == null ? void 0 : v.name.toUpperCase()),
          material: ((N = u.material) == null ? void 0 : N.toUpperCase()) || ((j = v == null ? void 0 : v.material) == null ? void 0 : j.toUpperCase()),
          bandingOptions: u.bandingOptions || {},
          finishOptions: u.finishOptions || {},
          orientationLock: u.orientationLock || null,
          readonly: !0
        }, Z = v || a.value.createShapeInput(T);
        if (v) {
          Object.assign(v, T);
          for (const Y of ["banding", "finish"])
            a.value.initExtrasOptions(v, Y);
        } else
          a.value.inputShapes.push(Z);
        f.add(q);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        (u) => f.has(p(u))
      );
    }, { immediate: !1 }), ae(() => W());
    const L = (l) => {
      r.debug && console.log(l);
    }, G = () => {
      d.value = Object.values(m.value.inputs).map(() => ({
        value: null
      }));
    }, K = (l, p) => {
      d.value[l] && (d.value[l].value = p);
    }, R = () => {
      try {
        return w.calculatePanelsFromFields(d.value);
      } catch (l) {
        console.warn("Smartcut formula error:", l.message.split(`
`)[0]);
      }
    }, J = () => {
      try {
        return w.calculateHardwareFromFields(d.value);
      } catch (l) {
        console.warn("Smartcut - Formula error:", l.message.split(`
`)[0]);
      }
    }, W = async () => {
      if (!r.url && !r.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      r.url ? (L(`SmartCut - Formula calculator init from url: ${r.url}`), w = new z({ url: r.url }), m.value = await w.getSpec()) : r.spec && (L("SmartCut - Formula calculator init with JSON"), w = new z({ spec: r.spec }), m.value = await w.getSpec()), G(), g.value = !0;
    };
    return (l, p) => {
      var C;
      return y(), E(D, null, [
        o.value === "development" && M.value ? (y(), E("div", le, [
          p[0] || (p[0] = x("div", null, "Developer information", -1)),
          m.value ? (y(), H(k(t), {
            key: 0,
            data: [m.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : U("", !0),
          ie(k(t), {
            data: [d.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : U("", !0),
        x("div", ue, [
          (y(!0), E(D, null, B((C = m.value) == null ? void 0 : C.inputs, (f, $, S) => {
            var N;
            return y(), H(ee, {
              id: "formula-field-" + S,
              key: S,
              type: f.type,
              label: f.label,
              placeholder: f.label,
              min: f.min ?? null,
              max: f.max ?? null,
              default: f.default ?? null,
              value: (N = d.value[S]) == null ? void 0 : N.value,
              onUpdate: (j) => K(S, j)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate"]);
          }), 128)),
          c.value ? (y(), E("div", ce, [
            x("div", pe, b(k(n)("Hardware")), 1),
            (y(!0), E(D, null, B(c.value, (f, $) => (y(), E("div", { key: $ }, b(f.name) + " x" + b(f.q) + " = " + b(h.formatPrice(f.totalCost)), 1))), 128)),
            x("div", he, b(k(n)("Hardware total")) + " = " + b(h.formatPrice(P.value)), 1)
          ])) : U("", !0),
          x("div", de, b(k(n)("Panels")), 1)
        ])
      ], 64);
    };
  }
});
export {
  ve as default
};
