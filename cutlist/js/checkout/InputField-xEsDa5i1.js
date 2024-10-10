import { p as getInputType, n as getInputMode, N as getOutputType, g as getRef, O as parseBoolean, v as valueSet, _ as _export_sfc, o as openBlock, q as createElementBlock, w as toDisplayString, x as createCommentVNode, t as createBaseVNode, F as Fragment, A as renderList } from "./main-DC0vZSqL.js";
const _sfc_main = {
  name: "CustomInput",
  props: {
    //element id
    id: {
      type: String,
      default: ""
    },
    focus: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Boolean, Number],
      default: ""
    },
    enableLabel: {
      type: Boolean,
      default: true
    },
    labelPosition: {
      type: String,
      default: "first",
      validator(value) {
        return ["first", "last"].includes(value);
      }
    },
    type: {
      type: String,
      default: "string",
      validator(value) {
        return ["unitDependent", "string", "integer", "float", "checkbox", "select"].includes(value);
      }
    },
    //used for select / checkbox
    output: {
      type: String,
      default: "string",
      validator(value) {
        return ["string", "integer", "float", "boolean"].includes(value);
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    selectFirstOptionDisabled: {
      type: Boolean,
      default: true
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
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    default: {
      type: [String, Number, Boolean],
      default: ""
    },
    units: {
      type: String,
      default: "decimal",
      validator(value) {
        return ["decimal", "fraction"].includes(value);
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
      default: false
    },
    multiEdit: {
      type: Boolean,
      default: false
    },
    allowBlank: {
      type: Boolean,
      default: false
    },
    text: {
      type: Object,
      default: () => {
        return {
          select: "Select",
          delete: "Delete"
        };
      },
      validator(value) {
        const keys = Object.keys(value);
        return ["select", "delete"].every((key) => keys.includes(key));
      }
    }
  },
  emits: ["update", "default"],
  computed: {
    thisId() {
      return this.custom ? "custom-" + this.id : this.id;
    },
    inputType() {
      return getInputType(this.type, this.units);
    },
    inputMode() {
      return getInputMode(this.type, this.units);
    },
    outputType() {
      return getOutputType(this.type, this.output, this.units);
    }
  },
  created() {
    this.setDefault();
  },
  mounted() {
    const input = getRef.call(this, "input");
    if (input && this.focus) {
      this.$nextTick(() => input.focus());
    }
  },
  methods: {
    getType() {
      if (this.type === "unitDependent") {
        return this.units === "fraction" ? "string" : "float";
      }
      return this.type;
    },
    handleInput(event) {
      let value = event.target.value;
      if ((value === "" || value === null) && this.allowBlank) this.updateValue(null);
      switch (this.getType()) {
        case "integer":
          value = value.replace(/[^0-9-]/g, "");
          value = parseInt(value);
          break;
        case "float":
          value = value.replace(/[^0-9.-]/g, "");
          value = parseFloat(value);
          break;
      }
      if (this.getType() === "integer" || this.getType() === "float") {
        if (isNaN(value)) return this.updateValue(null);
      }
      if (typeof this.min === "number") {
        if (value < this.min) value = this.min;
      }
      if (typeof this.max === "number") {
        if (value > this.max) value = this.max;
      }
      this.updateValue(value);
    },
    updateValue(value, updateType = "update") {
      if (value === null) return this.$emit(updateType, value);
      if (this.type === "unitDependent" || this.output === "unitDependent") {
        if (this.units === "fraction") {
          value = value.replace(/[^0-9/ ]+/g, "").replace(/\s{2,}/g, " ").trim();
          return this.$emit(updateType, value);
        } else if (this.units === "decimal") {
          return this.$emit(updateType, parseFloat(value));
        }
      }
      switch (this.outputType) {
        case "string":
          return this.$emit(updateType, value);
        case "integer":
          return this.$emit(updateType, parseInt(value));
        case "float":
          return this.$emit(updateType, parseFloat(value));
        case "boolean":
          return this.$emit(updateType, parseBoolean(value));
        default:
          return this.$emit(updateType, value);
      }
    },
    setDefault() {
      if (!valueSet(this.value) && valueSet(this.default)) {
        this.updateValue(this.default);
      }
    }
  }
};
const _hoisted_1 = ["for"];
const _hoisted_2 = ["id", "inputmode", "type", "value", "placeholder", "disabled", "readonly", "min", "max", "aria-label"];
const _hoisted_3 = ["id", "disabled", "checked", "aria-label"];
const _hoisted_4 = ["id", "value", "disabled", "aria-label"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = {
  key: 0,
  value: " "
};
const _hoisted_7 = ["hidden", "value"];
const _hoisted_8 = ["for"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $props.label && $props.enableLabel && $props.labelPosition === "first" ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: $options.thisId
    }, toDisplayString($props.label), 9, _hoisted_1)) : createCommentVNode("", true),
    $props.type === "string" || $props.type === "integer" || $props.type === "float" || $props.type === "unitDependent" ? (openBlock(), createElementBlock("input", {
      key: 1,
      id: $options.thisId,
      ref: "input",
      inputmode: $options.inputMode,
      type: $options.inputType,
      value: $props.value,
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      readonly: $props.readonly,
      min: $props.min,
      max: $props.max,
      "aria-label": $props.label,
      onChange: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args))
    }, null, 40, _hoisted_2)) : createCommentVNode("", true),
    $props.type === "checkbox" ? (openBlock(), createElementBlock("input", {
      key: 2,
      id: $options.thisId,
      ref: "input",
      type: "checkbox",
      disabled: $props.readonly || $props.disabled,
      checked: $props.value === $props.trueValue,
      "aria-label": $props.label,
      onChange: _cache[1] || (_cache[1] = ($event) => $options.updateValue($event.target.checked ? $props.trueValue : $props.falseValue))
    }, null, 40, _hoisted_3)) : createCommentVNode("", true),
    $props.type === "select" ? (openBlock(), createElementBlock("select", {
      key: 3,
      id: $options.thisId,
      ref: "input",
      value: $props.value,
      disabled: $props.readonly || $props.disabled,
      "aria-label": $props.label,
      onChange: _cache[2] || (_cache[2] = ($event) => $options.updateValue($event.target.value))
    }, [
      createBaseVNode("option", {
        value: "",
        disabled: $props.selectFirstOptionDisabled,
        selected: ""
      }, toDisplayString($props.text.select.toUpperCase()), 9, _hoisted_5),
      $props.multiEdit ? (openBlock(), createElementBlock("option", _hoisted_6, toDisplayString($props.text.delete.toUpperCase()), 1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option) => {
        return openBlock(), createElementBlock("option", {
          key: option.value,
          hidden: option.hidden,
          value: option.value
        }, toDisplayString(option.label.toUpperCase()), 9, _hoisted_7);
      }), 128))
    ], 40, _hoisted_4)) : createCommentVNode("", true),
    $props.label && $props.enableLabel && $props.labelPosition === "last" ? (openBlock(), createElementBlock("label", {
      key: 4,
      for: $props.id
    }, toDisplayString($props.label), 9, _hoisted_8)) : createCommentVNode("", true)
  ], 64);
}
const InputField = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InputField as default
};
