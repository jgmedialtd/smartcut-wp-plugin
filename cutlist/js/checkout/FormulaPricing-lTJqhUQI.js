var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { I as InputField } from "./Launch-CIMl3I9R.js";
import { B as defineComponent, E as useI18n, O as inject, C as computed, r as ref, n as nextTick, w as watch, o as onMounted, j as openBlock, k as createElementBlock, t as createBaseVNode, H as createBlock, u as unref, A as createCommentVNode, I as createVNode, F as Fragment, l as renderList, v as toDisplayString, K as defineAsyncComponent } from "./main-BuWv0poc.js";
class FormulaError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = "FormulaError";
  }
}
class FormulaCalculator {
  constructor({ url = null, spec = null }) {
    __publicField(this, "url");
    __publicField(this, "spec");
    // Update the operations object to use the FormulaOperation type
    __publicField(this, "operations", {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => {
        if (b === 0) throw new FormulaError("Division by zero", "DIVISION_BY_ZERO");
        return a / b;
      },
      ">": (a, b) => a > b,
      "<": (a, b) => a < b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
      "==": (a, b) => a === b
    });
    __publicField(this, "precedence", {
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
    if (url) this.url = url;
    if (spec) this.spec = spec;
  }
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(formula, variables = {}) {
    if (typeof formula === "number" || typeof formula === "boolean") return formula;
    if (typeof formula === "string") {
      if (this.isStringLiteral(formula)) {
        return formula.slice(1, -1);
      }
      if (!(formula in variables)) {
        throw new Error(`Undefined variable: ${formula}`);
      }
      return variables[formula];
    }
    const { operation, operands } = formula;
    if (!operation) {
      throw new Error("Invalid formula structure");
    }
    if (!this.isFormulaOperation(operation)) {
      throw new Error(`Invalid operation: ${operation}`);
    }
    if (operation === "ternary") {
      const condition = this.evaluate(formula.condition, variables);
      const trueExpr = this.evaluate(formula.trueExpr, variables);
      const falseExpr = this.evaluate(formula.falseExpr, variables);
      return condition ? trueExpr : falseExpr;
    }
    if (!operands || !Array.isArray(operands) || operands.length !== 2) {
      throw new Error("Invalid formula structure");
    }
    const [a, b] = operands.map((op) => this.evaluate(op, variables));
    if ([">", "<", ">=", "<=", "=="].includes(operation)) {
      return this.evaluateComparison(operation, a, b);
    }
    return this.operations[operation](a, b);
  }
  // Update getOperation to use the type guard
  getOperation(operator) {
    const operatorMap = {
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
    };
    const operation = operatorMap[operator];
    if (!this.isFormulaOperation(operation)) {
      throw new Error(`Unsupported operator: ${operator}`);
    }
    return operation;
  }
  isFormulaOperation(operation) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(operation);
  }
  isFormula(value) {
    return typeof value === "string" && value.startsWith("=");
  }
  stripFormulaPrefix(formula) {
    return formula.substring(1);
  }
  evaluateValue(value, variables, panelResults = {}) {
    if (typeof value === "number") return value;
    if (!this.isFormula(value)) return value;
    return this.evaluateFormula(this.stripFormulaPrefix(value), variables, panelResults);
  }
  extractDependencies(formula) {
    const deps = /* @__PURE__ */ new Set();
    if (typeof formula === "string") {
      const panelMatches = Array.from(formula.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const match of panelMatches) {
        deps.add(`${match[1]}.${match[2]}`);
      }
      const inputMatches = Array.from(formula.matchAll(/inputs\.(\w+)/g));
      for (const match of inputMatches) {
        deps.add(`input.${match[1]}`);
      }
      const variables = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const variable of variables) {
        if (formula.includes(variable)) {
          deps.add(`input.${variable}`);
        }
      }
    }
    return deps;
  }
  buildFormulaGraph(panelKey, panel) {
    const graph = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    };
    const addNode = (attr, value) => {
      const nodeId = `${panelKey}.${attr}`;
      graph.nodes.set(nodeId, {
        panelKey,
        attribute: attr,
        formula: value
      });
      graph.edges.set(nodeId, this.isFormula(value) ? this.extractDependencies(this.stripFormulaPrefix(value.toString())) : /* @__PURE__ */ new Set());
    };
    addNode("l", panel.l);
    addNode("w", panel.w);
    addNode("t", panel.t);
    addNode("q", panel.q);
    return graph;
  }
  resolveFormulas(graph, panel, inputs, existingPanels = {}) {
    const resolved = /* @__PURE__ */ new Map();
    const inProgress = /* @__PURE__ */ new Set();
    const resolveNode = (nodeId) => {
      if (resolved.has(nodeId)) {
        return resolved.get(nodeId);
      }
      const [panelKey, attribute] = nodeId.split(".");
      if (!graph.nodes.has(nodeId)) {
        const referencedPanel = existingPanels[panelKey];
        if (referencedPanel) {
          return attribute === "q" ? referencedPanel.q : referencedPanel[attribute];
        }
        throw new Error(`Node not found: ${nodeId}`);
      }
      if (inProgress.has(nodeId)) {
        throw new Error(`Circular dependency detected at ${nodeId}`);
      }
      const node = graph.nodes.get(nodeId);
      if (typeof node.formula === "number") {
        resolved.set(nodeId, node.formula);
        return node.formula;
      }
      inProgress.add(nodeId);
      const dependencies = graph.edges.get(nodeId) || /* @__PURE__ */ new Set();
      const resolvedDeps = /* @__PURE__ */ new Map();
      for (const dep of dependencies) {
        if (dep.startsWith("input.")) {
          const inputKey = dep.split(".")[1];
          resolvedDeps.set(dep, inputs[inputKey]);
        } else {
          resolvedDeps.set(dep, resolveNode(dep));
        }
      }
      const result = this.evaluateFormulaWithDeps(node.formula, resolvedDeps, inputs);
      resolved.set(nodeId, result);
      inProgress.delete(nodeId);
      return result;
    };
    for (const nodeId of graph.nodes.keys()) {
      resolveNode(nodeId);
    }
    return Object.fromEntries(resolved);
  }
  evaluateFormulaWithDeps(formula, resolvedDeps, inputs, currentPanelValues) {
    if (!this.isFormula(formula)) return formula;
    let evaluableFormula = this.stripFormulaPrefix(formula.toString());
    evaluableFormula = evaluableFormula.replace(
      /inputs\.(\w+)/g,
      (_, key) => {
        var _a;
        return ((_a = inputs[key]) == null ? void 0 : _a.toString()) || "0";
      }
    );
    evaluableFormula = evaluableFormula.replace(
      /panels\.(\w+)\.(\w+)/g,
      (match, panelKey, attr) => {
        if (panelKey === (currentPanelValues == null ? void 0 : currentPanelValues.panelKey) && currentPanelValues[attr] !== void 0) {
          return currentPanelValues[attr].toString();
        } else if (resolvedDeps.has(`${panelKey}.${attr}`)) {
          return resolvedDeps.get(`${panelKey}.${attr}`).toString();
        } else {
          throw new Error(`Undefined variable in formula: ${match}`);
        }
      }
    );
    return this.evaluate(this.parse(evaluableFormula), inputs);
  }
  calculatePanels(inputs) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.panels)) return {};
    const results = {};
    for (const [panelKey, panel] of Object.entries(this.spec.panels)) {
      const graph = this.buildFormulaGraph(panelKey, panel);
      const resolvedFormulas = this.resolveFormulas(graph, panel, inputs, results);
      const panelValues = {
        panelKey,
        l: resolvedFormulas[`${panelKey}.l`],
        w: resolvedFormulas[`${panelKey}.w`],
        t: resolvedFormulas[`${panelKey}.t`],
        q: resolvedFormulas[`${panelKey}.q`] || 1
      };
      results[panelKey] = {
        name: panel.name,
        material: panel.material,
        bandingOptions: panel.bandingOptions ?? {},
        finishOptions: panel.finishOptions ?? {},
        orientationLock: panel.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(panel.orientationLock, /* @__PURE__ */ new Map(), inputs, panelValues) : void 0,
        ...panelValues
      };
    }
    return results;
  }
  evaluateFormula(formula, variables, panelResults = {}) {
    if (typeof formula === "number") return formula;
    if (typeof formula === "string") {
      const evaluableFormula = formula.replace(/inputs\.(\w+)/g, (match, inputKey) => {
        if (!(inputKey in variables)) {
          throw new Error(`Input not found: ${inputKey}`);
        }
        return variables[inputKey].toString();
      });
      const panelMatches = evaluableFormula.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (panelMatches) {
        const [, panelKey, attribute] = panelMatches;
        if (!panelResults[panelKey]) {
          throw new Error(`Panel not found: ${panelKey}`);
        }
        if (attribute === "q") {
          return panelResults[panelKey].q ?? 1;
        }
        return panelResults[panelKey].dimensions[attribute];
      }
      return this.evaluate(this.parse(evaluableFormula), variables);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(input) {
    const regex = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return input.match(regex) || [];
  }
  isValidToken(token) {
    return this.isNumber(token) || this.isVariable(token) || token in this.precedence || token === "(" || token === ")" || token === "." || this.isIdentifier(token);
  }
  isIdentifier(token) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token);
  }
  evaluateComparison(operator, left, right) {
    switch (operator) {
      case ">":
        return left > right;
      case "<":
        return left < right;
      case ">=":
        return left >= right;
      case "<=":
        return left <= right;
      case "==":
        return left === right;
      default:
        throw new Error(`Unsupported comparison operator: ${operator}`);
    }
  }
  isNumber(token) {
    return !isNaN(Number(token));
  }
  isVariable(token) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token);
  }
  toPostfix(tokens) {
    const output = [];
    const operators = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.isNumber(token) || this.isStringLiteral(token) || this.isIdentifier(token)) {
        output.push(this.isNumber(token) ? Number(token) : token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop());
        }
        if (operators.length === 0) {
          throw new Error("Mismatched parentheses");
        }
        operators.pop();
      } else if (token === "?") {
        while (operators.length && this.precedence[operators[operators.length - 1]] > this.precedence[token]) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === ":") {
        while (operators.length && operators[operators.length - 1] !== "?") {
          output.push(operators.pop());
        }
        if (operators.length === 0) {
          throw new Error("Mismatched ternary operator");
        }
        operators.pop();
        operators.push("?:");
      } else if (token in this.precedence) {
        while (operators.length && this.precedence[operators[operators.length - 1]] >= this.precedence[token]) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else {
        throw new Error(`Invalid token: ${token}`);
      }
    }
    while (operators.length) {
      const op = operators.pop();
      if (op === "(" || op === ")") {
        throw new Error("Mismatched parentheses");
      }
      output.push(op);
    }
    return output;
  }
  parse(input) {
    if (typeof input !== "string") {
      throw new Error("Parse input must be a string");
    }
    if (!input.trim()) {
      throw new Error("Empty input");
    }
    const tokens = this.tokenize(input);
    const postfix = this.toPostfix(tokens);
    return this.toFormulaJSON(postfix);
  }
  isStringLiteral(token) {
    return /^'.*'$/.test(token);
  }
  toFormulaJSON(postfix) {
    const stack = [];
    for (const token of postfix) {
      if (typeof token === "number" || this.isStringLiteral(token.toString()) || this.isVariable(token.toString())) {
        stack.push(token);
      } else if (token === "?:") {
        if (stack.length < 3) {
          throw new Error("Invalid ternary expression");
        }
        const falseExpr = stack.pop();
        const trueExpr = stack.pop();
        const condition = stack.pop();
        stack.push({
          operation: "ternary",
          condition,
          trueExpr,
          falseExpr
        });
      } else {
        if (stack.length < 2) {
          throw new Error("Invalid expression: insufficient operands");
        }
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        stack.push({
          operation: this.getOperation(token.toString()),
          operands: [operand1, operand2]
        });
      }
    }
    if (stack.length !== 1) {
      throw new Error("Invalid expression: too many operands");
    }
    return stack[0];
  }
  calculateHardware(inputs) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.hardware)) {
      return {};
    }
    return Object.entries(this.spec.hardware).reduce((acc, [key, hw]) => {
      const quantity = this.evaluateValue(hw.q, inputs);
      acc[key] = {
        name: hw.name,
        q: Math.ceil(quantity),
        totalCost: Math.ceil(quantity) * hw.cost
      };
      return acc;
    }, {});
  }
  calculateAll(inputs) {
    this.validateInputs(inputs);
    const panelResults = this.calculatePanels(inputs);
    const hardwareResults = this.calculateHardware(inputs);
    return {
      inputs,
      panels: panelResults,
      hardware: hardwareResults
    };
  }
  validateInputs(inputs) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) throw new FormulaError("No input specifications defined", "NO_INPUTS");
    for (const [key, input] of Object.entries(this.spec.inputs)) {
      const value = inputs[key];
      if (value === void 0) {
        throw new FormulaError(`Missing required input: ${key}`, "MISSING_INPUT");
      }
      if (value < input.min || value > input.max) {
        throw new FormulaError(`Input ${key} value ${value} out of range [${input.min}, ${input.max}]`, "INPUT_OUT_OF_RANGE");
      }
    }
  }
  async getSpec() {
    if (this.spec) {
      this.validateSpec();
      return this.spec;
    }
    if (!this.url) return null;
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      this.spec = jsonData;
      this.validateSpec();
      return jsonData;
    } catch (error) {
      console.error("Error fetching or parsing JSON file:", error);
      return null;
    }
  }
  validateSpec() {
    const errors = [];
    if (!this.spec) {
      errors.push("Specification is required");
      return { isValid: false, errors };
    }
    if (!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) {
      errors.push("Specification must contain inputs");
    }
    return { isValid: errors.length === 0, errors };
  }
  validateFields(fields) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) {
      throw new FormulaError("No input specifications defined", "NO_INPUTS");
    }
    const inputKeys = Object.keys(this.spec.inputs);
    if (fields.length !== inputKeys.length) {
      throw new FormulaError(`Expected ${inputKeys.length} fields, got ${fields.length}`, "INVALID_FIELD_COUNT");
    }
    fields.forEach((field, index) => {
      const inputKey = inputKeys[index];
      const input = this.spec.inputs[inputKey];
      if (field.value === null || field.value === void 0) {
        throw new FormulaError(`Missing value for field ${index}`, "MISSING_FIELD_VALUE");
      }
      if (field.value < input.min || field.value > input.max) {
        throw new FormulaError(`Field ${index} value ${field.value} out of range [${input.min}, ${input.max}]`, "FIELD_OUT_OF_RANGE");
      }
    });
  }
  fieldsToInputs(fields) {
    var _a;
    const inputKeys = Object.keys(((_a = this.spec) == null ? void 0 : _a.inputs) || {});
    return fields.reduce((acc, field, index) => {
      const key = inputKeys[index];
      if (key) {
        acc[key] = field.value;
      }
      return acc;
    }, {});
  }
  getEmptyFields() {
    var _a;
    const fields = {};
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) return fields;
    Object.keys(this.spec.inputs).forEach((_, index) => {
      fields[index] = { value: 0 };
    });
    return fields;
  }
  getDefaultFields() {
    var _a;
    const fields = {};
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) return fields;
    Object.values(this.spec.inputs).forEach((input, index) => {
      fields[index] = { value: input.default };
    });
    return fields;
  }
  calculatePanelsFromFields(fields) {
    this.validateFields(fields);
    const inputs = this.fieldsToInputs(fields);
    return this.calculatePanels(inputs);
  }
  calculateHardwareFromFields(fields) {
    this.validateFields(fields);
    const inputs = this.fieldsToInputs(fields);
    return this.calculateHardware(inputs);
  }
  calculateAllFromFields(fields) {
    this.validateFields(fields);
    const inputs = this.fieldsToInputs(fields);
    return this.calculateAll(inputs);
  }
  getFieldMetadata() {
    var _a;
    const metadata = [];
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) return metadata;
    Object.entries(this.spec.inputs).forEach(([name, input], index) => {
      metadata.push({
        index,
        name,
        label: input.label,
        type: input.type,
        min: input.min,
        max: input.max,
        default: input.default
      });
    });
    return metadata;
  }
}
const _hoisted_1 = {
  key: 0,
  class: "debug"
};
const _hoisted_2 = { id: "formula-pricing" };
const _hoisted_3 = {
  key: 0,
  class: "extras"
};
const _hoisted_4 = { class: "heading" };
const _hoisted_5 = { id: "hardware-total" };
const _hoisted_6 = { class: "heading panels" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      default: false
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (price) => price.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(__props, { emit: __emit }) {
    const ObjectViewer = defineAsyncComponent(() => import("./ObjectViewer-BiwJbooS.js"));
    const props = __props;
    const { t } = useI18n({
      locale: "en_US",
      useScope: "global"
    });
    const emit = __emit;
    const calculatorFn = inject("calculator");
    const calculator = computed(() => calculatorFn());
    const env = ref("development");
    let formulaCalculator = null;
    const showDevInfo = ref(true);
    const specification = ref(null);
    const fieldsArray = ref([]);
    const loaded = ref(false);
    const panelResult = computed(() => {
      if (!loaded.value) return;
      if (!fieldsArray.value.length) return;
      if (fieldsArray.value.every((field) => field.value === null)) return;
      const result = calculatePanels();
      nextTick(() => {
        emit("panel-result", result);
      });
      return result;
    });
    const hardwareResult = computed(() => {
      if (!calculator.value) return;
      if (!loaded.value) return;
      if (!fieldsArray.value.length) return;
      if (fieldsArray.value.every((field) => field.value === null)) return;
      const result = calculateHardware();
      nextTick(() => {
        emit("hardware-result", result, harwareTotal.value);
      });
      return result;
    });
    const harwareTotal = computed(() => {
      if (!hardwareResult.value) return;
      return Object.values(hardwareResult.value).reduce((acc, item) => acc + item.totalCost, 0);
    });
    watch(panelResult, (val) => {
      var _a, _b, _c, _d;
      if (!loaded.value) return;
      if (!val) return;
      if (!calculator.value) return;
      if (!((_a = calculator.value) == null ? void 0 : _a.inputShapes)) return;
      if (!((_b = calculator.value.inputShapes) == null ? void 0 : _b.length)) return;
      const getShapeKey = (shape) => {
        if (!(shape == null ? void 0 : shape.name)) return "";
        return shape.name.toLowerCase();
      };
      const existingShapes = new Map(
        calculator.value.inputShapes.map((shape) => [getShapeKey(shape), shape])
      );
      const processedShapes = /* @__PURE__ */ new Set();
      for (const shapeDefinition of Object.values(panelResult.value)) {
        if (!shapeDefinition.name) continue;
        const shapeKey = getShapeKey(shapeDefinition);
        const existingShape = existingShapes.get(shapeKey);
        const shapeData = {
          ...shapeDefinition,
          name: shapeDefinition.name.toUpperCase() || (existingShape == null ? void 0 : existingShape.name.toUpperCase()),
          material: ((_c = shapeDefinition.material) == null ? void 0 : _c.toUpperCase()) || ((_d = existingShape == null ? void 0 : existingShape.material) == null ? void 0 : _d.toUpperCase()),
          bandingOptions: shapeDefinition.bandingOptions || {},
          finishOptions: shapeDefinition.finishOptions || {},
          orientationLock: shapeDefinition.orientationLock || null,
          readonly: true
        };
        const shape = existingShape || calculator.value.createShapeInput(shapeData);
        if (existingShape) {
          Object.assign(existingShape, shapeData);
          for (const extrasKey of ["banding", "finish"]) {
            calculator.value.initExtrasOptions(existingShape, extrasKey);
          }
        } else {
          calculator.value.inputShapes.push(shape);
        }
        processedShapes.add(shapeKey);
      }
      calculator.value.inputShapes = calculator.value.inputShapes.filter(
        (shape) => processedShapes.has(getShapeKey(shape))
      );
    }, { immediate: false });
    onMounted(() => init());
    const log = (message) => {
      if (props.debug) console.log(message);
    };
    const createFields = () => {
      fieldsArray.value = Object.values(specification.value.inputs).map(() => ({
        value: null
      }));
    };
    const setFieldValue = (index, value) => {
      if (!fieldsArray.value[index]) return;
      fieldsArray.value[index].value = value;
    };
    const calculatePanels = () => {
      try {
        const result = formulaCalculator.calculatePanelsFromFields(fieldsArray.value);
        return result;
      } catch (error) {
        console.warn("Smartcut formula error:", error.message.split("\n")[0]);
      }
    };
    const calculateHardware = () => {
      try {
        const result = formulaCalculator.calculateHardwareFromFields(fieldsArray.value);
        return result;
      } catch (error) {
        console.warn("Smartcut - Formula error:", error.message.split("\n")[0]);
      }
    };
    const init = async () => {
      if (!props.url && !props.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      if (props.url) {
        log(`SmartCut - Formula calculator init from url: ${props.url}`);
        formulaCalculator = new FormulaCalculator({ url: props.url });
        specification.value = await formulaCalculator.getSpec();
      } else if (props.spec) {
        log("SmartCut - Formula calculator init with JSON");
        formulaCalculator = new FormulaCalculator({ spec: props.spec });
        specification.value = await formulaCalculator.getSpec();
      }
      createFields();
      loaded.value = true;
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        env.value === "development" && showDevInfo.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", null, "Developer information", -1)),
          specification.value ? (openBlock(), createBlock(unref(ObjectViewer), {
            key: 0,
            data: [specification.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : createCommentVNode("", true),
          createVNode(unref(ObjectViewer), {
            data: [fieldsArray.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList((_a = specification.value) == null ? void 0 : _a.inputs, (input, key, index) => {
            var _a2;
            return openBlock(), createBlock(InputField, {
              id: "formula-field-" + index,
              key: index,
              type: input.type,
              label: input.label,
              placeholder: input.label,
              min: input.min ?? null,
              max: input.max ?? null,
              default: input.default ?? null,
              value: (_a2 = fieldsArray.value[index]) == null ? void 0 : _a2.value,
              onUpdate: ($event) => setFieldValue(index, $event)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate"]);
          }), 128)),
          hardwareResult.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(unref(t)("Hardware")), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(hardwareResult.value, (item, key) => {
              return openBlock(), createElementBlock("div", { key }, toDisplayString(item.name) + " x" + toDisplayString(item.q) + " = " + toDisplayString(__props.formatPrice(item.totalCost)), 1);
            }), 128)),
            createBaseVNode("div", _hoisted_5, toDisplayString(unref(t)("Hardware total")) + " = " + toDisplayString(__props.formatPrice(harwareTotal.value)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, toDisplayString(unref(t)("Panels")), 1)
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=FormulaPricing-lTJqhUQI.js.map
