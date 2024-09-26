import { l as f, k as h, L as c, g as y, M as b, v as r, _ as m, o as n, n as u, t as d, u as s, p as g, F as o, y as p } from "./main-DNx7nhge.js";
const k = {
  name: "CustomInput",
  props: {
    //element id
    id: {
      type: String,
      default: ""
    },
    focus: {
      type: Boolean,
      default: !1
    },
    value: {
      type: [String, Boolean, Number],
      default: ""
    },
    enableLabel: {
      type: Boolean,
      default: !0
    },
    labelPosition: {
      type: String,
      default: "first",
      validator(l) {
        return ["first", "last"].includes(l);
      }
    },
    type: {
      type: String,
      default: "string",
      validator(l) {
        return ["unitDependent", "string", "integer", "float", "checkbox", "select"].includes(l);
      }
    },
    //used for select / checkbox
    output: {
      type: String,
      default: "string",
      validator(l) {
        return ["string", "integer", "float", "boolean"].includes(l);
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    selectFirstOptionDisabled: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: !0
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: !1
    },
    default: {
      type: [String, Number, Boolean],
      default: ""
    },
    units: {
      type: String,
      default: "decimal",
      validator(l) {
        return ["decimal", "fraction"].includes(l);
      }
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    custom: {
      type: Boolean,
      default: !1
    },
    multiEdit: {
      type: Boolean,
      default: !1
    },
    allowBlank: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Object,
      default: () => ({
        select: "Select",
        delete: "Delete"
      }),
      validator(l) {
        const t = Object.keys(l);
        return ["select", "delete"].every((e) => t.includes(e));
      }
    }
  },
  emits: ["update", "default"],
  computed: {
    thisId() {
      return this.custom ? "custom-" + this.id : this.id;
    },
    inputType() {
      return f(this.type, this.units);
    },
    inputMode() {
      return h(this.type, this.units);
    },
    outputType() {
      return c(this.type, this.output, this.units);
    }
  },
  created() {
    this.setDefault();
  },
  mounted() {
    const l = y.call(this, "input");
    l && this.focus && this.$nextTick(() => l.focus());
  },
  methods: {
    getType() {
      return this.type === "unitDependent" ? this.units === "fraction" ? "string" : "float" : this.type;
    },
    handleInput(l) {
      let t = l.target.value;
      switch ((t === "" || t === null) && this.allowBlank && this.updateValue(null), this.getType()) {
        case "integer":
          t = t.replace(/[^0-9-]/g, ""), t = parseInt(t);
          break;
        case "float":
          t = t.replace(/[^0-9.-]/g, ""), t = parseFloat(t);
          break;
      }
      if ((this.getType() === "integer" || this.getType() === "float") && isNaN(t))
        return this.updateValue(null);
      typeof this.min == "number" && t < this.min && (t = this.min), typeof this.max == "number" && t > this.max && (t = this.max), this.updateValue(t);
    },
    updateValue(l, t = "update") {
      if (l === null) return this.$emit(t, l);
      if (this.type === "unitDependent" || this.output === "unitDependent") {
        if (this.units === "fraction")
          return l = l.replace(/[^0-9/ ]+/g, "").replace(/\s{2,}/g, " ").trim(), this.$emit(t, l);
        if (this.units === "decimal")
          return this.$emit(t, parseFloat(l));
      }
      switch (this.outputType) {
        case "string":
          return this.$emit(t, l);
        case "integer":
          return this.$emit(t, parseInt(l));
        case "float":
          return this.$emit(t, parseFloat(l));
        case "boolean":
          return this.$emit(t, b(l));
        default:
          return this.$emit(t, l);
      }
    },
    setDefault() {
      !r(this.value) && r(this.default) && this.updateValue(this.default);
    }
  }
}, _ = ["for"], B = ["id", "inputmode", "type", "value", "placeholder", "disabled", "readonly", "min", "max", "aria-label"], x = ["id", "disabled", "checked", "aria-label"], v = ["id", "value", "disabled", "aria-label"], I = ["disabled"], S = {
  key: 0,
  value: " "
}, V = ["hidden", "value"], D = ["for"];
function N(l, t, e, C, F, a) {
  return n(), u(o, null, [
    e.label && e.enableLabel && e.labelPosition === "first" ? (n(), u("label", {
      key: 0,
      for: a.thisId
    }, d(e.label), 9, _)) : s("", !0),
    e.type === "string" || e.type === "integer" || e.type === "float" || e.type === "unitDependent" ? (n(), u("input", {
      key: 1,
      id: a.thisId,
      ref: "input",
      inputmode: a.inputMode,
      type: a.inputType,
      value: e.value,
      placeholder: e.placeholder,
      disabled: e.disabled,
      readonly: e.readonly,
      min: e.min,
      max: e.max,
      "aria-label": e.label,
      onChange: t[0] || (t[0] = (...i) => a.handleInput && a.handleInput(...i))
    }, null, 40, B)) : s("", !0),
    e.type === "checkbox" ? (n(), u("input", {
      key: 2,
      id: a.thisId,
      ref: "input",
      type: "checkbox",
      disabled: e.readonly || e.disabled,
      checked: e.value === e.trueValue,
      "aria-label": e.label,
      onChange: t[1] || (t[1] = (i) => a.updateValue(i.target.checked ? e.trueValue : e.falseValue))
    }, null, 40, x)) : s("", !0),
    e.type === "select" ? (n(), u("select", {
      key: 3,
      id: a.thisId,
      ref: "input",
      value: e.value,
      disabled: e.readonly || e.disabled,
      "aria-label": e.label,
      onChange: t[2] || (t[2] = (i) => a.updateValue(i.target.value))
    }, [
      g("option", {
        value: "",
        disabled: e.selectFirstOptionDisabled,
        selected: ""
      }, d(e.text.select.toUpperCase()), 9, I),
      e.multiEdit ? (n(), u("option", S, d(e.text.delete.toUpperCase()), 1)) : s("", !0),
      (n(!0), u(o, null, p(e.options, (i) => (n(), u("option", {
        key: i.value,
        hidden: i.hidden,
        value: i.value
      }, d(i.label.toUpperCase()), 9, V))), 128))
    ], 40, v)) : s("", !0),
    e.label && e.enableLabel && e.labelPosition === "last" ? (n(), u("label", {
      key: 4,
      for: e.id
    }, d(e.label), 9, D)) : s("", !0)
  ], 64);
}
const O = /* @__PURE__ */ m(k, [["render", N]]);
export {
  O as default
};
