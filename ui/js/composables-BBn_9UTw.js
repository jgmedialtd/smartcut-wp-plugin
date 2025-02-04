import { g as ref, H as useLocalStorage, h as computed, G as shallowRef, S as triggerRef, i as watch } from "./vendor-vue-DYb4rgTA.js";
import { r as recreateUserGroups, I as InputStock, a as InputShape, m as mapOrientation, S as Shape, b as Stock, t as totalQuantity, c as Issue, s as stockMatch, g as getStockGrainSummary, u as updateInputNumberFormat, d as sentenceCase, e as unplacedShapeTally, f as getStockStack, h as sorting, i as Saw, j as recreateStockList, k as recreateShapeList, l as recreateCutList, n as recreateSegmentList, o as recreateOffcuts, p as convertNumberFormat } from "./components-5Ywb82Gq.js";
import { p as purify, l as lookup } from "./vendor-CklyHjfV.js";
let instance = null;
function createInputs(options = { numberFormat: "decimal" }) {
  const selectedSaw = ref(null);
  const migrateDeprecatedStorage = () => {
    const globalStoreInputStock = localStorage.getItem("GlobalStore/inputStock");
    const globalStoreInputShapes = localStorage.getItem("GlobalStore/inputShapes");
    let migratedStock2 = [];
    let migratedShapes2 = [];
    if (globalStoreInputStock) {
      try {
        const parsedStock = JSON.parse(globalStoreInputStock);
        if (parsedStock.length) {
          migratedStock2 = parsedStock;
        }
        localStorage.removeItem("GlobalStore/inputStock");
      } catch (error) {
        console.error("Error migrating stock data:", error);
      }
    }
    if (globalStoreInputShapes) {
      try {
        const parsedShapes = JSON.parse(globalStoreInputShapes);
        if (parsedShapes.length) {
          migratedShapes2 = parsedShapes;
        }
        localStorage.removeItem("GlobalStore/inputShapes");
      } catch (error) {
        console.error("Error migrating shapes data:", error);
      }
    }
    return { migratedStock: migratedStock2, migratedShapes: migratedShapes2 };
  };
  const { migratedStock, migratedShapes } = migrateDeprecatedStorage();
  const inputStock = useLocalStorage("inputs/inputStock", migratedStock, {
    serializer: {
      read: (v) => {
        const inputs2 = v ? JSON.parse(v) : [];
        return recreateInputStock(inputs2, options.numberFormat);
      },
      write: (v) => {
        const values = v.filter((s) => !(s == null ? void 0 : s.multiEdit));
        return JSON.stringify(values);
      }
    },
    listenToStorageChanges: false
  });
  const inputShapes = useLocalStorage("inputs/inputShapes", migratedShapes, {
    serializer: {
      read: (v) => {
        const inputs2 = v ? JSON.parse(v) : [];
        return recreateInputShapes(inputs2, options.numberFormat);
      },
      write: (v) => {
        const values = v.filter((s) => !(s == null ? void 0 : s.multiEdit));
        return JSON.stringify(values);
      }
    },
    listenToStorageChanges: false
  });
  const userGroups = useLocalStorage("groups/userGroups", [], {
    serializer: {
      read: (v) => {
        const inputs2 = v ? JSON.parse(v) : [];
        return recreateUserGroups(inputs2);
      },
      write: (v) => JSON.stringify(v)
    },
    listenToStorageChanges: false
  });
  const currentInputShape = ref(null);
  const totalInputShapes = computed(() => {
    return inputShapes.value.reduce((total, s) => {
      if ((s == null ? void 0 : s.q) && s.q > 0 && !(s == null ? void 0 : s.multiEdit)) return total + s.q;
      return total;
    }, 0);
  });
  const totalInputStock = computed(() => {
    return inputStock.value.reduce((total, s) => {
      if ((s == null ? void 0 : s.q) && s.q > 0 && !(s == null ? void 0 : s.multiEdit)) return total + s.q;
      return total;
    }, 0);
  });
  const updateInputs = (inputData, numberFormat = "decimal") => {
    const inputShapeData = (inputData == null ? void 0 : inputData.parts) || (inputData == null ? void 0 : inputData.shapeList);
    const inputStockData = (inputData == null ? void 0 : inputData.stock) || (inputData == null ? void 0 : inputData.stockList);
    const inputGroupData = (inputData == null ? void 0 : inputData.groups) || (inputData == null ? void 0 : inputData.userGroups);
    if (inputShapeData) {
      updateInputShapes(inputShapeData, numberFormat);
    }
    if (inputStockData) {
      updateInputStock(inputStockData, numberFormat);
    }
    if (inputGroupData) {
      try {
        userGroups.value = recreateUserGroups(inputGroupData, inputShapes.value);
      } catch (error) {
        console.error("Error updating user groups:", error);
      }
    }
  };
  const updateInputShapes = (shapeData, numberFormat = "decimal") => {
    try {
      inputShapes.value = recreateInputShapes(shapeData, numberFormat);
    } catch (error) {
      console.error("Error updating input shapes:", error);
    }
  };
  const updateInputStock = (stockData, numberFormat = "decimal") => {
    try {
      inputStock.value = recreateInputStock(stockData, numberFormat);
    } catch (error) {
      console.error("Error updating input stock:", error);
    }
  };
  function recreateInputStock(inputObjects, numberFormat = "decimal") {
    return inputObjects.map((s) => {
      delete s.id;
      return new InputStock(s, numberFormat);
    });
  }
  function recreateInputShapes(inputObjects, numberFormat = "decimal") {
    if (!inputObjects || !(inputObjects == null ? void 0 : inputObjects.length)) return [];
    return inputObjects.map((s) => {
      delete s.id;
      return new InputShape(s, numberFormat);
    });
  }
  const reset = () => {
    currentInputShape.value = null;
  };
  const clear = () => {
    inputShapes.value = [];
    inputStock.value = [];
    userGroups.value = [];
  };
  const createShapeList = (options2 = {
    trim: 0,
    stockType: null,
    minSpacing: 0,
    maxDimension: null,
    orientationModel: 0
  }) => {
    if (!inputShapes.value.length) {
      return { shapeList: [], issues: [] };
    }
    const issues = [];
    const shapeList2 = [];
    for (let i = 0; i < inputShapes.value.length; i++) {
      const s = inputShapes.value[i];
      if (!(s == null ? void 0 : s.q)) continue;
      const fieldsToSanitise = ["name", "material", "notes"];
      for (const field of fieldsToSanitise) {
        if (!(field in s)) continue;
        s[field] = purify.sanitize(s[field]);
      }
      s.createId(i);
      s.applyPartTrim(options2.trim, options2.stockType);
      const shapeData = { ...s };
      mapOrientation(shapeData, options2.orientationModel);
      const shape = new Shape(shapeData);
      shape.trimDimensions();
      if (options2.minSpacing && options2.maxDimension && (shape.l <= options2.maxDimension || shape.w <= options2.maxDimension)) {
        shape.minSpacing = options2.minSpacing;
      }
      shapeList2.push(shape);
      issues.push(...shape.issues);
    }
    return { shapeList: shapeList2, issues };
  };
  const createStockList = (saw2) => {
    if (!inputStock.value.length) {
      return { stockList: [], issues: [] };
    }
    const issues = [];
    const stockList2 = [];
    for (let i = 0; i < inputStock.value.length; i++) {
      const s = inputStock.value[i];
      if (!(s == null ? void 0 : s.q) && !s.autoAdd) continue;
      const fieldsToSanitise = ["name", "material", "notes"];
      for (const field of fieldsToSanitise) {
        if (!(field in s)) continue;
        s[field] = purify.sanitize(s[field]);
      }
      s.createId(i);
      const stock = new Stock(s, saw2);
      issues.push(...stock.issues);
      stockList2.push(stock);
    }
    return { stockList: stockList2, issues };
  };
  const validateInputStock = (saw2 = null) => {
    var _a;
    const issues = [];
    const totalQ = totalQuantity(inputStock.value);
    if (!inputStock.value.some((s) => s.autoAdd)) {
      if (!((_a = inputStock.value) == null ? void 0 : _a.length) || !totalQ) {
        new Issue({
          message: "no_stock",
          listId: inputStock.value.map((s) => s.listId),
          field: [["q"]],
          issues
        });
        return issues;
      }
    }
    for (const s of inputStock.value) {
      issues.push(...s.validate(saw2));
    }
    return issues;
  };
  const validateInputShapes = (options2 = null) => {
    var _a, _b, _c;
    const {
      saw: saw2 = null,
      partTrim = 0,
      useInventory = false
    } = options2 || {};
    const issues = [];
    if (!inputShapes.value.length) {
      new Issue({
        message: "no_parts",
        issues
      });
      return issues;
    }
    const totalQ = totalQuantity(inputShapes.value);
    if (!totalQ) {
      new Issue({
        message: "no_parts",
        issues
      });
      inputShapes.value.forEach((s) => new Issue({
        message: "no_parts",
        field: [["q"]],
        item: s
      }));
      return issues;
    }
    let index = 0;
    for (const s of inputShapes.value) {
      issues.push(...s.validate({
        inputStockList: inputStock.value,
        index,
        stockType: saw2 !== null ? saw2.stockType ?? null : null,
        partTrim,
        useInventory,
        saw: saw2
      }));
      index++;
    }
    if (issues.length) return issues;
    stockMatch((_a = inputs == null ? void 0 : inputs.inputShapes) == null ? void 0 : _a.value, (_b = inputs == null ? void 0 : inputs.inputStock) == null ? void 0 : _b.value, saw2 !== null ? saw2.stockType ?? null : null);
    const stockMatchIssues = (_c = inputs == null ? void 0 : inputs.inputShapes) == null ? void 0 : _c.value.flatMap((s) => s.issues);
    return stockMatchIssues;
  };
  const getShapeGrainSummary = (s) => {
    if (!inputStock.value.length) return "n";
    const thisMaterial = s.material;
    const thisThickness = s.t;
    const matchingStock = inputStock.value.filter((s2) => {
      return s2.material === thisMaterial && s2.t === thisThickness;
    });
    if (!matchingStock.length) {
      return "n";
    }
    const result = getStockGrainSummary(matchingStock);
    return result;
  };
  const updateNumberFormat = (newNumberFormat) => {
    for (const s of inputShapes.value) {
      updateInputNumberFormat(s, newNumberFormat);
    }
    for (const s of inputStock.value) {
      updateInputNumberFormat(s, newNumberFormat);
    }
  };
  const clearIssues = () => {
    inputShapes.value.forEach((s) => s.issues = []);
    inputStock.value.forEach((s) => s.issues = []);
  };
  const createTestData = ({
    stock = true,
    shapes = true
  }) => {
    if (stock) {
      inputStock.value = [
        new InputStock({
          l: 2440,
          w: 1220,
          q: 1
        })
      ];
    }
    if (shapes) {
      inputShapes.value = [
        new InputShape({
          l: 500,
          w: 500,
          q: 1
        }),
        new InputShape({
          l: 400,
          w: 400,
          q: 1
        })
      ];
    }
  };
  const removeStock = (listId) => {
    if (inputStock.value.length === 1) return;
    const stockToDelete = inputStock.value.findIndex((s) => s.listId === listId);
    if (stockToDelete === -1) return;
    inputStock.value.splice(stockToDelete, 1);
  };
  const removeShape = (listId) => {
    if (inputShapes.value.length === 1) return;
    const shapeToDelete = inputShapes.value.findIndex((s) => s.listId === listId);
    if (shapeToDelete === -1) return;
    inputShapes.value.splice(shapeToDelete, 1);
  };
  const inputs = {
    inputStock,
    inputShapes,
    userGroups,
    currentInputShape,
    selectedSaw
  };
  return {
    inputs,
    inputStock,
    inputShapes,
    userGroups,
    currentInputShape,
    selectedSaw,
    totalInputShapes,
    totalInputStock,
    reset,
    clear,
    clearIssues,
    updateInputs,
    updateInputShapes,
    updateInputStock,
    getShapeGrainSummary,
    createShapeList,
    createStockList,
    validateInputStock,
    validateInputShapes,
    updateNumberFormat,
    createTestData,
    removeStock,
    removeShape
  };
}
function useInputs(options = { numberFormat: "decimal" }) {
  if (!instance) instance = createInputs(options);
  return instance;
}
const notices = ref([]);
const DEFAULT_MAX_NOTICES = 6;
function useNotices() {
  const addNotice = ({
    message,
    type = "info",
    additional = [],
    options = {},
    action = () => {
    }
  }) => {
    if (!Array.isArray(additional)) {
      console.warn("addNotice - additional must be an array");
      additional = [];
    }
    const notice = {
      id: crypto.randomUUID(),
      message: sentenceCase(message),
      additional: additional.length > 5 ? additional.slice(0, 5).map((a) => sentenceCase(a)).join("<br>") + "<br>..." : additional.slice(0, 5).map((a) => sentenceCase(a)).join("<br>"),
      type,
      persistent: options.persistent || false,
      timestamp: /* @__PURE__ */ new Date(),
      action
    };
    const maxNotices = options.maxNotices ?? DEFAULT_MAX_NOTICES;
    if (notices.value.length >= maxNotices) {
      const firstNonPersistentIndex = notices.value.findIndex((n) => !n.persistent);
      if (firstNonPersistentIndex !== -1) {
        notices.value.splice(firstNonPersistentIndex, 1);
      } else if (!notice.persistent) {
        console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent");
        return notice.id;
      }
    }
    notices.value.push(notice);
    if (!notice.persistent && options.timeout !== 0) {
      setTimeout(() => dismissNotice(notice.id), options.timeout || 6e3);
    }
    return notice.id;
  };
  const dismissNotice = (id) => {
    const index = notices.value.findIndex((notice) => notice.id === id);
    if (index !== -1) {
      notices.value = notices.value.filter((notice) => notice.id !== id);
    }
  };
  return {
    notices,
    addNotice,
    dismissNotice
  };
}
const jobId = ref(null);
const saw = ref(null);
const activeStockId = ref(null);
const shapeList = shallowRef([]);
const stockList = shallowRef([]);
const cutList = shallowRef([]);
const segmentList = shallowRef([]);
const offcuts = ref([]);
const metadata = ref(null);
const unusableShapes = shallowRef([]);
const currentCutIndex = ref(0);
const activeShape = ref(null);
const r = {
  saw,
  activeStockId,
  jobId,
  shapeList,
  stockList,
  cutList,
  segmentList,
  offcuts,
  unusableShapes,
  metadata,
  currentCutIndex
};
function useResults() {
  const activeShapes = computed(() => {
    if (!activeStockId.value) return [];
    return getShapes(activeStockId.value);
  });
  const activeStock = computed(() => {
    var _a;
    if (!activeStockId.value) return null;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return null;
    return getStock(activeStockId.value);
  });
  const activeCuts = computed(() => {
    var _a;
    if (!activeStock.value || !((_a = cutList.value) == null ? void 0 : _a.length)) return [];
    const cuts = getCuts(activeStock.value.id);
    currentCutIndex.value = 0;
    return cuts;
  });
  const activeSegments = computed(() => {
    var _a;
    if (!activeStock.value || !((_a = segmentList.value) == null ? void 0 : _a.length)) return [];
    return getSegments(activeStockId.value);
  });
  const usedStock = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return [];
    return getUsedStock(stockList.value);
  });
  const addedShapes = computed(() => {
    return shapeList.value.filter((shape) => shape.added);
  });
  const unplacedShapes = computed(() => {
    var _a;
    if (!((_a = shapeList.value) == null ? void 0 : _a.length)) return [];
    return shapeList.value.filter((shape) => !shape.added);
  });
  const unplacedShapeTally$1 = computed(() => {
    var _a;
    if (!((_a = shapeList.value) == null ? void 0 : _a.length)) return [];
    return unplacedShapeTally(shapeList.value);
  });
  const uniqueShapes = computed(() => {
    var _a;
    if (!((_a = shapeList.value) == null ? void 0 : _a.length)) return [];
    return shapeList.value.filter((shape) => !shape.duplicate);
  });
  const uniqueAddedShapes = computed(() => {
    return uniqueShapes.value.filter((s) => s.added);
  });
  const uniqueStock = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return [];
    return stockList.value.filter((stock) => stock.used && !stock.duplicate);
  });
  const uniqueUsedStock = computed(() => {
    return uniqueStock.value.filter((s) => s.used);
  });
  const activeCutsArea = computed(() => {
    var _a;
    if (!((_a = cutList.value) == null ? void 0 : _a.length)) return 0;
    return activeCuts.value.reduce((total, cut) => total + cut.getArea(), 0);
  });
  const activeStockArea = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length) || !activeStock.value) return 0;
    return activeStock.value ? activeStock.value.getArea() : 0;
  });
  const activeShapeArea = computed(() => {
    var _a;
    if (!((_a = shapeList.value) == null ? void 0 : _a.length) || !activeShapes.value) return 0;
    return activeShapes.value ? activeShapes.value.reduce((total, s) => total + s.getArea(), 0) : 0;
  });
  const activeCutType = computed(() => {
    var _a;
    if (!((_a = cutList.value) == null ? void 0 : _a.length) || !activeStock.value) return null;
    return activeStock.value.cutType;
  });
  const stackedStock = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return [];
    const stacked = stockList.value.filter((stock) => stock.used && (stock.stack === false || typeof stock.stack === "number"));
    return stacked;
  });
  const activeStockStackCount = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return 0;
    return getStockStack(activeStock.value, stockList.value);
  });
  const activeTotalArea = computed(() => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return 0;
    let area = activeStockArea.value ? (activeCutsArea.value + activeShapeArea.value) / activeStockArea.value : null;
    if (area > 1) area = 1;
    return area;
  });
  const reset = () => {
    saw.value = null;
    shapeList.value.length = 0;
    stockList.value.length = 0;
    cutList.value.length = 0;
    segmentList.value.length = 0;
    offcuts.value.length = 0;
    unusableShapes.value.length = 0;
  };
  const clear = () => {
    saw.value = null;
    activeStockId.value = null;
    activeShape.value = null;
    metadata.value = null;
    shapeList.value = [];
    stockList.value = [];
    cutList.value = [];
    segmentList.value = [];
    offcuts.value = [];
    currentCutIndex.value = 0;
    unusableShapes.value = [];
  };
  const sortItems = (what, how) => {
    var _a;
    if (what in this) {
      (_a = this[what]) == null ? void 0 : _a.sort(sorting[how]);
    }
  };
  const update = (item) => {
    triggerRef(item);
  };
  const updateShapes = () => {
    triggerRef(shapeList);
  };
  const updateStock = () => {
    triggerRef(stockList);
  };
  const updateFromResult = (result) => {
    var _a, _b, _c, _d;
    if (!((_a = result == null ? void 0 : result.shapeList) == null ? void 0 : _a.some((s) => s.added))) {
      clear();
      return;
    }
    metadata.value = result.metadata;
    unusableShapes.value = result.unusableShapes || [];
    try {
      if (result == null ? void 0 : result.saw) {
        saw.value = new Saw(
          result == null ? void 0 : result.saw,
          (_b = result == null ? void 0 : result.saw) == null ? void 0 : _b.stockType
        );
      }
      stockList.value = recreateStockList({
        saw: saw.value,
        stockList: result.stockList,
        removeScores: true,
        preventAutoRotation: true
      });
      shapeList.value = recreateShapeList({
        shapeList: result.shapeList,
        stockList: stockList.value,
        preventAutoRotation: true
      });
      cutList.value = recreateCutList({
        cutList: result.cutList,
        stockList: stockList.value
      });
      segmentList.value = recreateSegmentList({
        segmentList: result.segmentList,
        stockList: stockList.value
      });
      offcuts.value = recreateOffcuts({
        offcuts: result.offcuts,
        stockList: stockList.value,
        preventAutoRotation: true
      });
      triggerRef(stockList);
      triggerRef(shapeList);
      triggerRef(cutList);
      triggerRef(segmentList);
      activeStockId.value = ((_d = (_c = getUsedStock(stockList.value)) == null ? void 0 : _c[0]) == null ? void 0 : _d.id) || null;
    } catch (e) {
      console.error("Error updating from result", e);
    }
  };
  const getStock = (id) => {
    var _a;
    if (!((_a = stockList.value) == null ? void 0 : _a.length)) return null;
    return stockList.value.find((s) => s.id === id);
  };
  const getShapes = (stockId) => {
    var _a;
    if (!((_a = shapeList.value) == null ? void 0 : _a.length)) return [];
    return shapeList.value.filter((s) => {
      var _a2;
      return (((_a2 = s == null ? void 0 : s.stock) == null ? void 0 : _a2.id) ?? (s == null ? void 0 : s.stockId)) === stockId;
    });
  };
  const getSegments = (stockId) => {
    var _a;
    if (!((_a = segmentList.value) == null ? void 0 : _a.length)) return [];
    return segmentList.value.filter((s) => {
      var _a2;
      return (((_a2 = s == null ? void 0 : s.stock) == null ? void 0 : _a2.id) ?? (s == null ? void 0 : s.stockId)) === stockId;
    });
  };
  const getCuts = (stockId) => {
    var _a;
    if (!((_a = cutList.value) == null ? void 0 : _a.length)) return;
    return cutList.value.filter((c) => {
      var _a2;
      return (((_a2 = c == null ? void 0 : c.stock) == null ? void 0 : _a2.id) ?? (c == null ? void 0 : c.stockId)) === stockId;
    });
  };
  const getUsedStock = (stockList2) => {
    if (!(stockList2 == null ? void 0 : stockList2.length)) return [];
    return stockList2.filter((stock) => stock.used === true);
  };
  const setActiveStockId = (id) => {
    activeShape.value = null;
    activeStockId.value = id;
  };
  const createTestData = () => {
    saw.value = new Saw({
      bladeWidth: 1,
      stockType: "sheet",
      cutType: "guillotine",
      cutPreference: "l"
    });
    stockList.value = recreateStockList({
      saw: saw.value,
      stockList: [
        { id: "1.0", used: true, l: 2440, w: 1220, q: 1 }
      ]
    });
    shapeList.value = recreateShapeList({
      shapeList: [
        { id: "1.0", added: true, x: 0, y: 0, l: 500, w: 500, q: 1, stockId: "1.0" },
        { id: "2.0", added: true, x: 501, y: 0, l: 400, w: 400, q: 1, stockId: "1.0" }
      ],
      stockList: stockList.value,
      preventAutoRotation: true
    });
    segmentList.value = recreateSegmentList({
      segmentList: [
        { id: "153", x: 0, y: 0, l: 2440, w: 1220, phase: 0, cutDirection: "l" },
        { id: "154", x: 0, y: 0, l: 2440, w: 500, phase: 1, cutDirection: "w" },
        { id: "155", x: 0, y: 0, l: 500, w: 500, phase: 2, cutDirection: "l" },
        { id: "157", x: 501, y: 0, l: 400, w: 500, phase: 2, cutDirection: "l" },
        { id: "158", x: 501, y: 0, l: 400, w: 400, phase: 3, cutDirection: "w" },
        { id: "159", x: 501, y: 401, l: 400, w: 99, phase: 3, cutDirection: "w" },
        { id: "160", x: 902, y: 0, l: 1538, w: 500, phase: 2, cutDirection: "l" },
        { id: "161", x: 0, y: 501, l: 2440, w: 719, phase: 1, cutDirection: "w" }
      ],
      stockList: stockList.value
    });
    cutList.value = recreateCutList({
      cutList: [
        { stockId: "1.0", x1: 0, x2: 2440, y1: 500.5, y2: 500.5, dimension: "l", direction: "lr", isTrim: false, guillotine: true },
        { stockId: "1.0", x1: 500.5, x2: 500.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: false, guillotine: true },
        { stockId: "1.0", x1: 901.5, x2: 901.5, y1: 0, y2: 500, dimension: "w", direction: "bt", isTrim: false, guillotine: true },
        { stockId: "1.0", x1: 501, x2: 901, y1: 400.5, y2: 400.5, dimension: "l", direction: "lr", isTrim: false, guillotine: true }
      ],
      stockList: stockList.value
    });
    offcuts.value = recreateOffcuts({
      offcuts: [
        { stockId: "1.0", id: "1", x: 501, y: 401, l: 400, w: 99, q: 1, duplicate: false, trimmed: false, offcut: true, placementOrder: 0 },
        { stockId: "1.0", id: "2", x: 902, y: 0, l: 1538, w: 500, q: 1, duplicate: false, trimmed: false, offcut: true, placementOrder: 1 },
        { stockId: "1.0", id: "3", x: 0, y: 501, l: 2440, w: 719, q: 1, duplicate: false, trimmed: false, offcut: true, placementOrder: 2 }
      ],
      stockList: stockList.value,
      preventAutoRotation: true
    });
    metadata.value = {
      totalBandingLength: 0,
      bandingLengthByType: {},
      totalFinishArea: 0,
      finishAreaByType: {},
      materialSummary: { "N/A": {} },
      usedStockTally: { 1: 1 },
      addedPartTally: { 1: 1, 2: 1 },
      stockAreaCost: 0,
      hasMachining: false,
      numHoles: 0,
      numCorners: 0,
      totalCutLength: 3840,
      totalStackedCutLength: 3840,
      totalCuts: 4,
      totalStackedCuts: 4,
      totalStockCost: 0,
      totalEfficiency: 0.1377317925288901,
      totalPartArea: 41e4,
      totalStockArea: 2976800,
      totalPartsProduced: 2,
      totalUsedStock: 1,
      totalRollLength: 0,
      unplacedParts: []
    };
  };
  return {
    //all result items for convenience
    r,
    //state
    activeStockId,
    saw,
    shapeList,
    stockList,
    cutList,
    segmentList,
    offcuts,
    unusableShapes,
    currentCutIndex,
    activeShape,
    //computed
    addedShapes,
    activeShapes,
    unplacedShapes,
    uniqueShapes,
    uniqueAddedShapes,
    unplacedShapeTally: unplacedShapeTally$1,
    uniqueStock,
    uniqueUsedStock,
    activeStock,
    activeCuts,
    activeCutsArea,
    activeCutType,
    usedStock,
    stackedStock,
    activeStockArea,
    activeShapeArea,
    activeStockStackCount,
    activeTotalArea,
    activeSegments,
    //methods
    reset,
    clear,
    sortItems,
    update,
    updateShapes,
    updateStock,
    updateFromResult,
    getStock,
    getShapes,
    getSegments,
    getCuts,
    setActiveStockId,
    //testing
    createTestData
  };
}
const progress$1 = ref({
  queued: false,
  started: false,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: false
});
function useProgress() {
  const reset = () => {
    progress$1.value = {
      queued: false,
      started: false,
      stockCount: 0,
      shapeCount: 0,
      resultCount: 0,
      complete: false
    };
  };
  return {
    progress: progress$1,
    reset
  };
}
const { progress, reset: resetProgress } = useProgress();
function useSocket(options) {
  const server = "ws://localhost:5000/";
  let socket;
  const initSocket = () => {
    socket = lookup(server, {
      withCredentials: true,
      autoConnect: false,
      perMessageDeflate: {
        threshold: 1024
      }
    });
    socket.on("connect", () => {
      var _a, _b, _c;
      if ((_a = options.refs) == null ? void 0 : _a.connected) {
        options.refs.connected.value = true;
      }
      (_c = (_b = options.callbacks) == null ? void 0 : _b.onConnect) == null ? void 0 : _c.call(_b);
    });
    socket.on("connect_error", (error) => {
      var _a, _b, _c, _d;
      if ((_a = options.refs) == null ? void 0 : _a.connected) {
        options.refs.connected.value = false;
      }
      if ((_b = options.refs) == null ? void 0 : _b.thinking) {
        options.refs.thinking.value = false;
      }
      (_d = (_c = options.callbacks) == null ? void 0 : _c.onConnectError) == null ? void 0 : _d.call(_c, error);
    });
    socket.on("connect_timeout", (error) => {
      var _a, _b, _c, _d;
      if ((_a = options.refs) == null ? void 0 : _a.connected) {
        options.refs.connected.value = false;
      }
      if ((_b = options.refs) == null ? void 0 : _b.thinking) {
        options.refs.thinking.value = false;
      }
      (_d = (_c = options.callbacks) == null ? void 0 : _c.onConnectError) == null ? void 0 : _d.call(_c, error);
    });
    socket.on("result", (resultData) => {
      var _a, _b;
      progress.value.complete = true;
      (_b = (_a = options.callbacks) == null ? void 0 : _a.onResult) == null ? void 0 : _b.call(_a, resultData);
      socket.disconnect();
    });
    socket.on("queued", () => {
      resetProgress();
      progress.value.queued = true;
    });
    socket.on("started", () => {
      progress.value.started = true;
    });
    socket.on("progress", (message) => {
      var _a;
      if (((_a = message == null ? void 0 : message.data) == null ? void 0 : _a.message) === "result") {
        progress.value.resultCount++;
      } else {
        progress.value.stockCount = message.data.stockCount;
        progress.value.shapeCount = message.data.shapeCount;
      }
    });
    socket.on("user", (user) => {
      var _a, _b;
      (_b = (_a = options.callbacks) == null ? void 0 : _a.onUser) == null ? void 0 : _b.call(_a, user);
    });
    socket.on("error", (error) => {
      var _a, _b, _c;
      if ((_a = options.refs) == null ? void 0 : _a.thinking) {
        options.refs.thinking.value = false;
      }
      resetProgress();
      (_c = (_b = options.callbacks) == null ? void 0 : _b.onError) == null ? void 0 : _c.call(_b, error);
    });
  };
  const disconnect = () => socket == null ? void 0 : socket.disconnect();
  const connect = () => socket == null ? void 0 : socket.connect();
  initSocket();
  return {
    socket,
    connect,
    disconnect
  };
}
const tip = ref({
  show: false,
  content: "",
  type: "info",
  referenceEl: null
});
function useToolTip() {
  let timeoutId = null;
  const hide = () => {
    tip.value.show = false;
  };
  const update = (props) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    tip.value = { ...tip.value, ...props };
    if (props.show) {
      timeoutId = setTimeout(() => {
        tip.value.show = false;
        timeoutId = null;
      }, 3e3);
    }
  };
  watch(() => tip.value.referenceEl, (el) => {
    if (!el) tip.value.show = false;
  });
  return { tip, hide, update };
}
const priceTypes = ["banding", "finish", "cutLength", "perPart", "partArea", "offcutArea", "rollLength", "surcharge", "machining", "stock", "custom"];
const isPriceType = (price) => priceTypes.includes(price);
function useProductPricing(settings, dependencies) {
  const log = (message) => {
    var _a;
    (_a = dependencies.log) == null ? void 0 : _a.call(dependencies, message);
  };
  const error = (message) => {
    var _a;
    (_a = dependencies.error) == null ? void 0 : _a.call(dependencies, message);
    return { success: false, error: message };
  };
  const resetPricing = () => {
    for (const price of priceTypes) setPrice(price, 0);
  };
  const setPrice = (type, price) => {
    console.log("setting price", type, price);
    const { inputs, elements, setInputValue, formatPrice } = dependencies;
    if (isNaN(price)) throw new Error("Price must be a number");
    if (!isPriceType(type)) return;
    const fieldMappings = {
      //this should not include any extra costs
      custom: {
        visible: null,
        hidden: "smartcut-custom-price"
      },
      perPart: {
        hidden: "smartcut-per-part-price",
        visible: "per_part_price"
      },
      partArea: {
        hidden: null,
        visible: "part_area_price"
      },
      offcutArea: {
        hidden: null,
        visible: "offcut_area_price"
      },
      rollLength: {
        hidden: null,
        visible: "roll_length_price"
      },
      banding: {
        hidden: "smartcut-banding-price",
        visible: "banding_total_price"
      },
      finish: {
        hidden: "smartcut-finish-price",
        visible: "finish_total_price"
      },
      machining: {
        hidden: "smartcut-machining-price",
        visible: "machining_total_price"
      },
      surcharge: {
        hidden: "smartcut-cut-to-size-surcharge",
        visible: "surcharge_price"
      },
      cutLength: {
        hidden: "smartcut-cut-length-price",
        visible: "cut_length_price"
      },
      stock: {
        hidden: null,
        visible: "stock_total_price"
      }
    };
    const mapping = fieldMappings[type];
    if ((mapping == null ? void 0 : mapping.hidden) && inputs[mapping.hidden]) {
      setInputValue(mapping.hidden, price);
    }
    if ((mapping == null ? void 0 : mapping.visible) && elements[mapping.visible]) {
      elements[mapping.visible].innerText = formatPrice(price);
    }
  };
  const calculateBasePrice = (resultData) => {
    const { product, getCurrentVariationPrice, isQuantityPricing, enableAddToCart, setCartQuantity } = dependencies;
    let productPrice = (product == null ? void 0 : product.price) || getCurrentVariationPrice() || 0;
    if (typeof productPrice === "string") productPrice = parseFloat(productPrice);
    const unitType = settings.unit_system === "imperial" ? "feet" : "meters";
    const pricingStrategies = {
      full_stock: (data) => {
        log(["calculating cost by full sheet"]);
        if (!isQuantityPricing()) {
          const stockCost = data.metadata.totalStockCost;
          setPrice("stock", stockCost);
          return stockCost;
        } else {
          setCartQuantity(data.metadata.totalUsedStock);
        }
        return 0;
      },
      part_area: (data) => {
        log([`calculating cost by part area in square ${unitType}`]);
        const divisor = settings.unit_system === "imperial" ? 144 : 1e6;
        const partArea = data.metadata.totalPartArea / divisor;
        const partAreaPrice = partArea * productPrice;
        setPrice("partArea", partAreaPrice);
        log([`part area in square ${unitType} is ${partArea} with price ${partAreaPrice}`]);
        let totalArea = partArea;
        if ((settings == null ? void 0 : settings.enable_offcut_pricing) && (data == null ? void 0 : data.offcuts)) {
          const sellableOffcutArea = data == null ? void 0 : data.offcuts.reduce((acc, offcut) => {
            const l = offcut.l >= offcut.w ? offcut.l : offcut.w;
            const w = offcut.l >= offcut.w ? offcut.w : offcut.l;
            if (l < settings.offcut_min_length || w < settings.offcut_min_width) {
              return acc + l * w;
            }
            return acc;
          }, 0);
          const sellableOffcutPrice = sellableOffcutArea / divisor * productPrice;
          setPrice("offcutArea", sellableOffcutPrice);
          log([`calculated sellable offcut area as ${sellableOffcutArea}, with price ${sellableOffcutPrice}`]);
          totalArea += sellableOffcutArea / divisor;
        }
        const totalPrice2 = totalArea * productPrice;
        log([`calculated total price as ${totalPrice2}, `]);
        if (isQuantityPricing()) {
          log([`setting cart quantity to ${totalArea}`]);
          setCartQuantity(totalArea, 2);
        } else {
          return totalPrice2;
        }
        return 0;
      },
      cut_length: (data) => {
        log([`calculating cost by cut length in  ${unitType}`]);
        const divisor = settings.unit_system === "imperial" ? 12 : 1e3;
        const cutLength = data.metadata.totalCutLength / divisor;
        setCartQuantity(cutLength, 2);
        return 0;
      },
      full_stock_plus_cut_length: (data) => {
        log(["calculating cost by full sheet plus cut length"]);
        let totalPrice2 = 0;
        if (!isQuantityPricing()) {
          const stockCost = data.metadata.totalStockCost;
          setPrice("stock", stockCost);
          totalPrice2 = stockCost;
        } else {
          setCartQuantity(data.metadata.totalUsedStock);
        }
        const divisor = settings.unit_system === "imperial" ? 12 : 1e3;
        const cutLength = data.metadata.totalCutLength / divisor;
        const cutLengthTotal = cutLength * settings.cut_length_price;
        setPrice("cutLength", cutLengthTotal);
        return totalPrice2 + cutLengthTotal;
      },
      full_stock_plus_num_parts: (data) => {
        log(["calculating cost by full sheet plus number of parts"]);
        let totalPrice2 = 0;
        if (!isQuantityPricing()) {
          const stockCost = data.metadata.totalStockCost;
          setPrice("stock", stockCost);
          totalPrice2 = stockCost;
        } else {
          setCartQuantity(data.metadata.totalUsedStock);
        }
        const partPrice = data.metadata.totalPartsProduced * settings.per_part_price;
        setPrice("perPart", partPrice);
        return totalPrice2 + partPrice;
      },
      roll_length: (data) => {
        log([`calculating cost by roll length in ${unitType}`]);
        const divisor = settings.unit_system === "imperial" ? 12 : 1e3;
        const rollPrice = data.stock.reduce((acc, stock) => {
          return acc + stock.analysis.rollLength / divisor * convertNumberFormat({ v: stock.cost });
        }, 0);
        setPrice("rollLength", rollPrice);
        return rollPrice;
      }
    };
    const calculate = pricingStrategies[settings.pricing_strategy];
    const totalPrice = calculate(resultData);
    enableAddToCart();
    return totalPrice;
  };
  const calculateExtras = (resultData, basePrice) => {
    const {
      isExtraEnabled,
      isMachiningEnabled,
      isSurchargeEnabled,
      inputType,
      getTotalBandingPrice,
      getTotalFinishPrice,
      getTotalMachiningPrice,
      getInputValue
    } = dependencies;
    let totalPrice = basePrice;
    if (isExtraEnabled("banding") && resultData.metadata.bandingLengthByType) {
      const bandingPrice = getTotalBandingPrice(resultData.metadata.bandingLengthByType);
      setPrice("banding", bandingPrice);
      totalPrice += bandingPrice;
    }
    if (isExtraEnabled("finish") && resultData.metadata.finishAreaByType) {
      const finishPrice = getTotalFinishPrice(resultData.metadata.finishAreaByType);
      setPrice("finish", finishPrice);
      totalPrice += finishPrice;
    }
    if (inputType.value === "formula") {
      const hardwarePrice = parseFloat(getInputValue("smartcut-hardware-price"));
      if (!isNaN(hardwarePrice)) totalPrice += hardwarePrice;
    }
    if (isMachiningEnabled()) {
      const machiningPrice = getTotalMachiningPrice(resultData);
      setPrice("machining", machiningPrice);
      totalPrice += machiningPrice;
    }
    if (isSurchargeEnabled() && settings.surcharge) {
      const surcharge = settings.surcharge_type === "per_sheet" ? parseFloat(settings.surcharge.toString()) * resultData.metadata.totalUsedStock : parseFloat(settings.surcharge.toString());
      setPrice("surcharge", surcharge);
      log(["added surcharge", surcharge]);
      totalPrice += surcharge;
    }
    return totalPrice;
  };
  const updateCartFields = (resultData) => {
    const { getInputValue, setInputValue } = dependencies;
    const cartFields = {
      "smartcut-job-id": resultData.jobId,
      "smartcut-dimensions": resultData.parts.map((p) => `${p.l}x${p.w} [${p.q}]`).join(", "),
      "smartcut-total-cut-length": resultData.metadata.totalCutLength,
      "smartcut-part-area": resultData.metadata.totalPartArea,
      "smartcut-total-cuts": resultData.metadata.totalCuts,
      "smartcut-total-parts": resultData.metadata.totalPartsProduced,
      "smartcut-machining": resultData.metadata.hasMachining
    };
    Object.entries(cartFields).forEach(([field, value]) => {
      setInputValue(field, value);
    });
    if (getInputValue("smartcut-stock-summary") !== void 0) {
      const stockSummary = resultData.stock.map((s) => `${s.l}x${s.w}${s.t ? "x" + s.t : ""} [${s.q}]`).join(", ");
      setInputValue("smartcut-stock-summary", stockSummary);
    }
  };
  const calculatePrice = async (resultData) => {
    resetPricing();
    const { isQuantityPricing, selectedVariation, setVariationPrice, setCartQuantity } = dependencies;
    if (!(resultData == null ? void 0 : resultData.jobId)) {
      return error("No job ID provided");
    }
    if (!isQuantityPricing()) {
      setCartQuantity(1);
    }
    let totalPrice = calculateBasePrice(resultData);
    totalPrice = calculateExtras(resultData, totalPrice);
    if (!isQuantityPricing()) {
      if (!resultData.metadata.totalStockCost) {
        return error("Total stock cost not returned for a multiple size product");
      }
      log([`total cost is ${totalPrice}`]);
      setPrice("custom", totalPrice);
    }
    if (selectedVariation.value) {
      setVariationPrice(totalPrice);
    }
    updateCartFields(resultData);
    return { success: true, totalPrice };
  };
  return {
    calculatePrice,
    resetPricing
  };
}
export {
  useNotices as a,
  useResults as b,
  useToolTip as c,
  useSocket as d,
  useProgress as e,
  useProductPricing as f,
  useInputs as u
};
//# sourceMappingURL=composables-BBn_9UTw.js.map
