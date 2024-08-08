import { k as f, j as h, K as c, g as y, L as b, v as r, _ as m, o as n, l as u, t as d, q as s, n as g, F as o, w as p } from "./main-BzCMbwUQ.js";
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
      validator(a) {
        return ["first", "last"].includes(a);
      }
    },
    type: {
      type: String,
      default: "string",
      validator(a) {
        return ["unitDependent", "string", "integer", "float", "checkbox", "select"].includes(a);
      }
    },
    output: {
      type: String,
      default: "string",
      validator(a) {
        return ["string", "integer", "float", "boolean"].includes(a);
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
      validator(a) {
        return ["decimal", "fraction"].includes(a);
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
      validator(a) {
        const t = Object.keys(a);
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
      return c(
        this.type,
        this.output,
        this.units
      );
    }
  },
  created() {
    this.setDefault();
  },
  mounted() {
    const a = y.call(this, "input");
    a && this.focus && this.$nextTick(() => a.focus());
  },
  methods: {
    getType() {
      return this.type === "unitDependent" ? this.units === "fraction" ? "string" : "float" : this.type;
    },
    handleInput(a) {
      let t = a.target.value;
      if (t === "" && this.allowBlank) return "";
      switch (this.getType()) {
        case "integer":
          t = t.replace(/[^0-9-]/g, ""), t = parseInt(t);
          break;
        case "float":
          t = t.replace(/[^0-9.-]/g, ""), t = parseFloat(t);
          break;
      }
      if ((this.getType() === "integer" || this.getType() === "float") && isNaN(t))
        return this.updateValue(0);
      typeof this.min == "number" && t < this.min && (t = this.min), typeof this.max == "number" && (this.type === "integer" || this.type === "float") && t > this.max && (t = this.max), this.updateValue(t);
    },
    updateValue(a, t = "update") {
      if (this.type === "unitDependent" || this.output === "unitDependent") {
        if (this.units === "fraction")
          return a = a.replace(/[^0-9/ ]+/g, "").replace(/\s{2,}/g, " ").trim(), this.$emit(t, a);
        if (this.units === "decimal")
          return this.$emit(t, parseFloat(a));
      }
      switch (this.outputType) {
        case "string":
          return this.$emit(t, a);
        case "integer":
          return this.$emit(t, parseInt(a));
        case "float":
          return this.$emit(t, parseFloat(a));
        case "boolean":
          return this.$emit(t, b(a));
        default:
          return this.$emit(t, a);
      }
    },
    setDefault() {
      !r(this.value) && r(this.default) && this.updateValue(this.default);
    }
  }
}, _ = ["for"], v = ["id", "inputmode", "type", "value", "placeholder", "disabled", "readonly", "min", "max", "aria-label"], B = ["id", "disabled", "checked", "aria-label"], x = ["id", "value", "disabled", "aria-label"], I = ["disabled"], S = {
  key: 0,
  value: " "
}, V = ["hidden", "value"], D = ["for"];
function N(a, t, e, F, C, l) {
  return n(), u(o, null, [
    e.label && e.enableLabel && e.labelPosition === "first" ? (n(), u("label", {
      key: 0,
      for: l.thisId
    }, d(e.label), 9, _)) : s("", !0),
    e.type === "string" || e.type === "integer" || e.type === "float" || e.type === "unitDependent" ? (n(), u("input", {
      key: 1,
      id: l.thisId,
      ref: "input",
      inputmode: l.inputMode,
      type: l.inputType,
      value: e.value,
      placeholder: e.placeholder,
      disabled: e.disabled,
      readonly: e.readonly,
      min: e.min,
      max: e.max,
      "aria-label": e.label,
      onInput: t[0] || (t[0] = (...i) => l.handleInput && l.handleInput(...i))
    }, null, 40, v)) : s("", !0),
    e.type === "checkbox" ? (n(), u("input", {
      key: 2,
      id: l.thisId,
      ref: "input",
      type: "checkbox",
      disabled: e.readonly || e.disabled,
      checked: e.value === e.trueValue,
      "aria-label": e.label,
      onChange: t[1] || (t[1] = (i) => l.updateValue(i.target.checked ? e.trueValue : e.falseValue))
    }, null, 40, B)) : s("", !0),
    e.type === "select" ? (n(), u("select", {
      key: 3,
      id: l.thisId,
      ref: "input",
      value: e.value,
      disabled: e.readonly || e.disabled,
      "aria-label": e.label,
      onChange: t[2] || (t[2] = (i) => l.updateValue(i.target.value))
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
    ], 40, x)) : s("", !0),
    e.label && e.enableLabel && e.labelPosition === "last" ? (n(), u("label", {
      key: 4,
      for: e.id
    }, d(e.label), 9, D)) : s("", !0)
  ], 64);
}
const L = /* @__PURE__ */ m(k, [["render", N]]);
export {
  L as default
};
