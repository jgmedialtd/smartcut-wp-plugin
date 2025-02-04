var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { F as Fraction, c as config$1, a as createDebug, b as createDebug$1, g as get, d as defaults, i as isNaN$1, v as v4, t as toNumber, e as expect, h as has, s as set, f as autoUpdate, o as offset, j as shift, k as flip, P as Papa } from "./vendor-CklyHjfV.js";
import { d as defineComponent, o as openBlock, c as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, a as normalizeStyle, b as createBaseVNode, t as toDisplayString, w as withDirectives, v as vShow, e as createStaticVNode, f as createCommentVNode, g as ref, h as computed, i as watch, j as onMounted, k as nextTick, l as onUnmounted, m as mergeProps, u as unref, p as createTextVNode, q as createBlock, s as withCtx, x as renderSlot, y as useTranslation, z as resolveComponent, A as createVNode, B as onBeforeUnmount, C as defineAsyncComponent, D as useResizeObserver, E as watchThrottled, G as shallowRef, H as useLocalStorage, I as reactive, J as useFloating, T as Transition, K as Teleport, L as arrow, M as mergeModels, N as useModel, O as markRaw, P as withModifiers, Q as inject, R as TransitionGroup } from "./vendor-vue-DYb4rgTA.js";
import { u as useInputs, a as useNotices, b as useResults, c as useToolTip, d as useSocket, e as useProgress } from "./composables-BBn_9UTw.js";
import { l as linear, a as axisBottom, b as axisLeft, c as axisTop, d as axisRight, s as select, e as sequential, r as rgb, f as selectAll, p as precisionFixed, g as format, S as Symbol$1, h as path, i as arc, j as symbolTriangle, k as symbolSquare } from "./vendor-d3-DAPVr54p.js";
import { i as instance } from "./vendor-i18n-CwRLCSuJ.js";
function checkString(string) {
  if (!string || typeof string !== "string") {
    return false;
  }
  return true;
}
function upperCase(string) {
  if (!checkString(string)) return "";
  if (!string || typeof string !== "string") return "";
  return string.toUpperCase();
}
function capitalise(string) {
  if (!checkString(string)) return "";
  return string.trim().split(" ").map((word) => sentenceCase(word)).join(" ");
}
function sentenceCase(string) {
  if (!checkString(string)) return "";
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
}
function sanitiseString(string) {
  if (!checkString(string)) return "";
  string = string.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, "");
  return string.trim();
}
function truncateString(string, length = 100) {
  if (!checkString(string)) return "";
  string = string.trim();
  string = string.substring(0, length);
  return string;
}
let i18n = instance;
function setI18nInstance(instance2) {
  i18n = instance2;
}
function t$1(key, options) {
  const translation = i18n.t(key, { ns: ["main", "errors"], ...options });
  if (!translation) return key;
  return translation;
}
const TOLERANCE = 1e-10;
const DECIMAL_PLACES = 10;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const UINT32_MAX = 4294967295;
const isNumber = (value) => typeof value === "number" && Number.isFinite(value);
const isValidArray = (arr) => Array.isArray(arr) && arr.length > 0;
function compare(a, b, tolerance = TOLERANCE) {
  if (a === b) return 0;
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a > b ? 1 : -1;
  }
  const diff = a - b;
  return Math.abs(diff) < tolerance ? 0 : diff;
}
const mathOps = {
  greaterThan: (a, b, tolerance = TOLERANCE) => {
    if (!isNumber(a) || !isNumber(b)) return false;
    return compare(a, b, tolerance) > 0;
  },
  greaterThanOrEqualTo: (a, b, tolerance = TOLERANCE) => {
    if (!isNumber(a) || !isNumber(b)) return false;
    return compare(a, b, tolerance) >= 0;
  },
  lessThan: (a, b, tolerance = TOLERANCE) => {
    if (!isNumber(a) || !isNumber(b)) return false;
    return compare(a, b, tolerance) < 0;
  },
  lessThanOrEqualTo: (a, b, tolerance = TOLERANCE) => {
    if (!isNumber(a) || !isNumber(b)) return false;
    return compare(a, b, tolerance) <= 0;
  },
  equalTo: (a, b, tolerance = TOLERANCE) => {
    if (!isNumber(a) || !isNumber(b)) return false;
    return compare(a, b, tolerance) === 0;
  }
};
function round(number) {
  if (!isNumber(number)) return false;
  if (Number.isInteger(number)) return number;
  return Number(number.toFixed(DECIMAL_PLACES));
}
function getRandom(length) {
  if (!isNumber(length) || length < 0 || length > MAX_SAFE_INTEGER) {
    throw new Error("Invalid length parameter");
  }
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (UINT32_MAX + 1) * length);
}
function getRandomSample(array, size) {
  if (!isValidArray(array)) {
    throw new Error("Invalid array parameter");
  }
  if (!isNumber(size) || size < 0 || size > array.length) {
    throw new Error("Invalid size parameter");
  }
  const shuffled = array.slice();
  const min = array.length - size;
  for (let i = array.length - 1; i >= min; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(min);
}
class Statistics {
  static calculateMean(numbers) {
    if (!isValidArray(numbers)) {
      throw new Error("Invalid input array");
    }
    return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  }
  static calculateStandardDeviation(numbers, mean = null) {
    if (!isValidArray(numbers)) {
      throw new Error("Invalid input array");
    }
    const calculatedMean = mean ?? this.calculateMean(numbers);
    const variance = numbers.reduce((sum, num) => {
      const diff = num - calculatedMean;
      return sum + diff * diff;
    }, 0) / numbers.length;
    return Math.sqrt(variance);
  }
  static calculateCoefficientOfVariation(numbers) {
    if (!isValidArray(numbers)) {
      throw new Error("Invalid input array");
    }
    const mean = this.calculateMean(numbers);
    if (mean === 0) {
      throw new Error("Mean is zero, coefficient of variation undefined");
    }
    const sd = this.calculateStandardDeviation(numbers, mean);
    return sd / mean;
  }
}
const maths = {
  ...mathOps,
  isNumber,
  round,
  getRandom,
  getRandomSample,
  calculateStandardDeviation: Statistics.calculateStandardDeviation.bind(Statistics),
  calculateCoefficientOfVariation: Statistics.calculateCoefficientOfVariation.bind(Statistics)
};
const defaultDecimalPlaces = 10;
const defaultFractionRoundTo = 0;
class NumberFormatError extends Error {
  constructor(message) {
    super(message);
    this.name = "NumberFormatError";
  }
}
function getDecimalPlaces(value) {
  const str = value.toString();
  const decimal = str.indexOf(".");
  return decimal === -1 ? 0 : str.length - decimal - 1;
}
function convertNumberFormat(params) {
  const {
    v: value,
    nf,
    dp,
    pl,
    fr,
    o: options
  } = params;
  const mappedOptions = options ? {
    nf: options.numberFormat,
    dp: options.decimalPlaces,
    pl: options.parseLocale,
    fr: options.fractionRoundTo
  } : {};
  const {
    nf: numberFormat = "decimal",
    dp: decimalPlaces = defaultDecimalPlaces,
    pl: parseLocale = false,
    fr: fractionRoundTo = defaultFractionRoundTo
  } = { ...{ nf, dp, pl, fr }, ...mappedOptions };
  if (value == null || value === "") {
    return numberFormat === "decimal" ? null : "";
  }
  try {
    const cleanedValue = cleanNumericInput(value, parseLocale);
    if (!cleanedValue) {
      return numberFormat === "decimal" ? 0 : "0";
    }
    if (numberFormat === "decimal") {
      return handleDecimalFormat(
        cleanedValue,
        value,
        decimalPlaces
      );
    }
    return handleFractionFormat(
      cleanedValue,
      fractionRoundTo
    );
  } catch (error) {
    throw new NumberFormatError(
      `Failed to convert number format: ${value} to ${numberFormat}. ${error.message}`
    );
  }
}
function handleDecimalFormat(cleanedValue, originalValue, decimalPlaces) {
  if (!String(cleanedValue).includes("/")) {
    const valueStr = String(cleanedValue);
    if (valueStr.includes("e")) {
      if (typeof decimalPlaces === "number") {
        const num = Number(Number(valueStr).toFixed(decimalPlaces));
        return removeTrailingZeros(num);
      }
      return Number(valueStr);
    }
    if (typeof decimalPlaces === "number") {
      const [whole, decimal2 = ""] = valueStr.split(".");
      const paddedDecimal = decimal2.padEnd(decimalPlaces, "0");
      const num = Number(`${whole}.${paddedDecimal.slice(0, decimalPlaces)}`);
      return removeTrailingZeros(num);
    }
    return removeTrailingZeros(Number(valueStr));
  }
  const fraction = new Fraction(cleanedValue);
  const decimal = fraction.valueOf();
  if (typeof originalValue === "string" && originalValue.includes("/")) {
    if (typeof decimalPlaces === "number") {
      return removeTrailingZeros(Number(decimal.toFixed(decimalPlaces)));
    }
    return decimal;
  }
  const originalPrecision = getDecimalPlaces(String(originalValue));
  return removeTrailingZeros(Number(decimal.toFixed(originalPrecision)));
}
function handleFractionFormat(cleanedValue, fractionRoundTo) {
  const fraction = new Fraction(cleanedValue);
  if (fractionRoundTo > 0) {
    const decimal = fraction.valueOf();
    const numerator = Math.round(decimal * fractionRoundTo);
    return new Fraction(numerator, fractionRoundTo).toFraction(true);
  }
  return fraction.simplify().toFraction(true);
}
function removeTrailingZeros(num) {
  const str = num.toString();
  if (!str.includes(".")) {
    return num;
  }
  if (/\.0+$/.test(str)) {
    return parseInt(str, 10);
  }
  return num;
}
function getSeparators(locale = "en-US") {
  var _a, _b;
  try {
    const parts = Intl.NumberFormat(locale).formatToParts(123456789e-2);
    return {
      thousandsSeparator: ((_a = parts.find((part) => part.type === "group")) == null ? void 0 : _a.value) || ",",
      decimalSeparator: ((_b = parts.find((part) => part.type === "decimal")) == null ? void 0 : _b.value) || "."
    };
  } catch {
    console.warn("Failed to detect number separators. Using defaults.");
    return { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function localeParseFloat(value) {
  if (value === null || value === void 0 || value === "") return null;
  const stringValue = String(value).trim();
  if (!stringValue) return null;
  try {
    const { thousandsSeparator, decimalSeparator } = getSeparators();
    const normalizedValue = stringValue.replace(new RegExp(`\\${thousandsSeparator}`, "g"), "").replace(new RegExp(`\\${decimalSeparator}`), ".");
    const result = Number(normalizedValue);
    return isFinite(result) ? result : null;
  } catch {
    throw new NumberFormatError(`Failed to parse number: ${value}`);
  }
}
function detectFraction(input) {
  if (!input) return false;
  const cleaned = input.toString().trim();
  const fractionRegex = /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/;
  return fractionRegex.test(cleaned);
}
function cleanNumericInput(input, parseLocale = false) {
  if (!input && input !== 0) return null;
  let cleanValue = String(input).trim();
  if (!cleanValue) return null;
  try {
    if (detectFraction(input)) {
      return cleanValue.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    } else {
      if (parseLocale) {
        cleanValue = cleanValue.replace(/[^0-9,. -]/g, "");
        cleanValue = cleanValue.replace(/\s/g, "");
      } else {
        cleanValue = cleanValue.replace(/[^0-9,.-]/g, "");
        cleanValue = cleanValue.replace(/,/g, "");
      }
      if (cleanValue.startsWith(".")) {
        cleanValue = "0" + cleanValue;
      }
      if (cleanValue.startsWith("-.")) {
        cleanValue = "-0." + cleanValue.slice(2);
      }
      const parsed = parseLocale ? localeParseFloat(cleanValue) : parseFloat(cleanValue);
      if (parsed === null || isNaN(parsed)) return null;
      return parsed.toString();
    }
  } catch (error) {
    throw new NumberFormatError(
      `Failed to clean numeric input: ${input}. ${error.message}`
    );
  }
}
function updateInputNumberFormat(item, newNumberFormat, newDecimalPlaces = null, newFractionRoundTo = null) {
  if (!item) return;
  if (!isInputShape(item) && !isInputStock(item)) return;
  if (!["decimal", "fraction"].includes(newNumberFormat)) {
    console.warn("Attempting to update to an invalid number format:", newNumberFormat);
    return;
  }
  for (const key of item.numberFormatKeys) {
    if (typeof item[key] === "object") {
      for (const objectKey in item[key]) {
        item[key][objectKey] = convertNumberFormat({ v: item[key][objectKey], nf: newNumberFormat, dp: newDecimalPlaces, pl: false, fr: newFractionRoundTo });
      }
      return;
    }
    item[key] = convertNumberFormat({ v: item[key], nf: newNumberFormat, dp: newDecimalPlaces, pl: false, fr: newFractionRoundTo });
  }
}
function getConvertedDimensions(item) {
  const dims = {
    l: item.l,
    w: item.w
  };
  if (typeof dims.l === "string" || typeof dims.w === "string") {
    dims.l = convertNumberFormat({ v: item.l });
    dims.w = convertNumberFormat({ v: item.w });
  }
  return dims;
}
function checkItemHasDimensions(item) {
  if (!("l" in item) || !("w" in item)) throw new Error("rotatable item must have l & w properties");
}
function swapDimensions(item) {
  checkItemHasDimensions(item);
  [item.l, item.w] = [item.w, item.l];
}
function willItFit(item, container, rotation) {
  var _a, _b;
  if (!container || !item) {
    throw new Error("Container and shape are required");
  }
  const minSpacing = isContainer(container) ? (_b = (_a = container == null ? void 0 : container.saw) == null ? void 0 : _a.options) == null ? void 0 : _b.minSpacing : 0;
  const containerDims = getConvertedDimensions(container);
  function fitsDimension(shapeDim, containerDim) {
    return maths.equalTo(shapeDim, containerDim) || maths.lessThanOrEqualTo(shapeDim, containerDim - minSpacing);
  }
  function fitsInOrientation(dimensions) {
    const dims2 = getConvertedDimensions(dimensions);
    return fitsDimension(dims2.l, containerDims.l) && fitsDimension(dims2.w, containerDims.w);
  }
  const requiredOrientation = getNecessaryOrientation(item, container);
  if (item.orientationLock || [0, 1].includes(rotation)) {
    const targetRotation = rotation ?? (requiredOrientation === "w" ? 1 : 0);
    const dims2 = getRotatedDimensions(item, targetRotation);
    return fitsInOrientation(dims2);
  }
  let dims = getRotatedDimensions(item, 0);
  if (fitsInOrientation(dims)) return true;
  dims = getRotatedDimensions(item, 1);
  return fitsInOrientation(dims);
}
function getOrientation(item) {
  let orientation = null;
  if (isGroup(item)) {
    orientation = item.direction;
  } else if (isShape(item) || isInputShape(item)) {
    orientation = item.orientationLock;
  }
  return orientation;
}
function getRotatedDimensions(item, rot) {
  const dims = {
    l: item.l,
    w: item.w
  };
  const currentRotation = (item == null ? void 0 : item.rot) ?? 0;
  if (currentRotation === rot) return dims;
  [dims.l, dims.w] = [dims.w, dims.l];
  return dims;
}
function getNecessaryOrientation(item, container) {
  const orientation = getOrientation(item);
  if (!valueSet(orientation)) return null;
  if (!container) return orientation;
  if (isGroup(item)) return orientation;
  if (isContainer(container)) {
    return convertShapeGrainToOrientationLock(item, container);
  } else {
    return orientation;
  }
}
function convertShapeGrainToOrientationLock(item, container) {
  if (!container) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!isContainer(container)) throw new Error("container is not a container");
  const orientation = getOrientation(item);
  if (isGroup(item)) return orientation;
  if (!valueSet(orientation)) return null;
  const stock = container.getStock();
  if (!valueSet(stock.grain)) return orientation;
  if (orientation === stock.grain) return "l";
  return "w";
}
function canRotate(item, rotation = null, container = null) {
  if (!valueSet(rotation))
    throw new Error("no rotation provided to canRotate");
  if (rotation === true) rotation = 1;
  if (rotation === false) rotation = 0;
  if (isSquare(item) && rotation) return false;
  if (container) {
    if (!willItFit(item, container, rotation)) return false;
  }
  const orientationLock2 = getNecessaryOrientation(item, container);
  if (orientationLock2 === "l" && rotation === 1) return false;
  if (orientationLock2 === "w" && rotation === 0) return false;
  return true;
}
function rotate(item, rot = null, container = null) {
  if (rot === null) rot = item.rot === 0 ? 1 : 0;
  if (!canRotate(item, rot, container)) return false;
  if (item.rot === rot) return true;
  swapDimensions(item);
  return true;
}
function setRotation(item, rot = null, container = null) {
  if (rot) rot = 1;
  else rot = 0;
  if (container && rot && !willItFit(item, container, rot)) return false;
  return rotate(item, rot, container);
}
function setRotationToOrientationLock(item, container) {
  if (!container)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const requiredOrientation = getNecessaryOrientation(item, container);
  if (requiredOrientation === "l") return setRotation(item, 0);
  if (requiredOrientation === "w") return setRotation(item, 1);
  return false;
}
function setRotationToOrientationLockWithoutContainer(item) {
  if (item.orientationLock === "l") return setRotation(item, 0);
  if (item.orientationLock === "w") return setRotation(item, 1);
  return false;
}
function isSquare(item) {
  checkItemHasDimensions(item);
  const dims = getConvertedDimensions(item);
  return maths.equalTo(dims.l, dims.w);
}
const SortingErrors = {
  missingProperty: (prop, context) => `[Sorting Warning] Missing property "${prop}" in ${context}`,
  missingMethod: (method, context) => `[Sorting Warning] Missing method "${method}" in ${context}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function hasArea(obj) {
  return typeof (obj == null ? void 0 : obj.getArea) === "function";
}
function hasAspect(obj) {
  return typeof (obj == null ? void 0 : obj.getAspect) === "function";
}
function hasLongSide(obj) {
  return typeof (obj == null ? void 0 : obj.getLongSide) === "function";
}
const safeGetValue = (obj, key, context) => {
  if (!(key in obj)) {
    console.warn(SortingErrors.missingProperty(String(key), context));
    return null;
  }
  return obj[key];
};
const combineSorts = (primary, secondary) => (a, b) => {
  const primaryResult = primary(a, b);
  return primaryResult !== 0 ? primaryResult : secondary(a, b);
};
const compareAreas = (a, b) => {
  if (!hasArea(a) || !hasArea(b)) {
    console.warn(SortingErrors.missingArea);
    return 0;
  }
  const aArea = a.getArea();
  const bArea = b.getArea();
  if (aArea < bArea) return -1;
  if (aArea > bArea) return 1;
  return 0;
};
const compareIDs = (a, b) => {
  const aId = safeGetValue(a, "id", "first item");
  const bId = safeGetValue(b, "id", "second item");
  if (aId === null || bId === null) return 0;
  const aID = aId.toString().split(".");
  const bID = bId.toString().split(".");
  if (aID[0] !== bID[0]) {
    return parseInt(aID[0]) - parseInt(bID[0]);
  }
  return parseInt(aID[1]) - parseInt(bID[1]);
};
function createMultiSort(definition) {
  const configs = Array.isArray(definition[0]) ? definition.map(([key, direction]) => ({ key, direction })) : definition;
  return (a, b) => {
    for (const { key, direction } of configs) {
      const aValue = safeGetValue(a, key, "first item");
      const bValue = safeGetValue(b, key, "second item");
      if (aValue === null || bValue === null) continue;
      if (aValue === bValue) continue;
      return direction === "desc" ? aValue < bValue ? 1 : -1 : aValue < bValue ? -1 : 1;
    }
    return 0;
  };
}
const sorting = {
  // Dimension-based sorts
  WDLD: createMultiSort([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: createMultiSort([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: createMultiSort([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: createMultiSort([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: createMultiSort([["w", "desc"]]),
  LD: createMultiSort([["l", "desc"]]),
  // ID-based sorts
  LDIDA: combineSorts(
    createMultiSort([["l", "desc"]]),
    compareIDs
  ),
  WDIDA: combineSorts(
    createMultiSort([["w", "desc"]]),
    compareIDs
  ),
  // Area-based sorts
  AD: (a, b) => -compareAreas(a, b),
  AA: compareAreas,
  AAID: combineSorts(
    compareAreas,
    compareIDs
  ),
  ADID: combineSorts(
    (a, b) => -compareAreas(a, b),
    compareIDs
  ),
  // ID sorts
  ID: compareIDs,
  IDDesc: (a, b) => -compareIDs(a, b),
  StockID: (a, b) => {
    const aStock = safeGetValue(a, "stock", "first item");
    const bStock = safeGetValue(b, "stock", "second item");
    if (!aStock || !bStock) return 0;
    return compareIDs(aStock, bStock);
  },
  StockIDAD: (a, b) => {
    const aStock = safeGetValue(a, "stock", "first item");
    const bStock = safeGetValue(b, "stock", "second item");
    if (!aStock || !bStock) return 0;
    const stockCompare = compareIDs(aStock, bStock);
    return stockCompare !== 0 ? stockCompare : -compareAreas(a, b);
  },
  // Position sorts
  YX: createMultiSort([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: createMultiSort([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (a, b) => {
    const aOrder = safeGetValue(a, "placementOrder", "first item") ?? 0;
    const bOrder = safeGetValue(b, "placementOrder", "second item") ?? 0;
    return aOrder - bOrder;
  },
  typePlacementOrder: (a, b) => {
    const aOffcut = safeGetValue(a, "offcut", "first item");
    const bOffcut = safeGetValue(b, "offcut", "second item");
    const aOrder = safeGetValue(a, "placementOrder", "first item") ?? 0;
    const bOrder = safeGetValue(b, "placementOrder", "second item") ?? 0;
    if (aOffcut && !bOffcut) return 1;
    if (!aOffcut && bOffcut) return -1;
    return aOrder - bOrder;
  },
  stockIDTypePlacementOrder: (a, b) => {
    const aStock = safeGetValue(a, "stock", "first item");
    const bStock = safeGetValue(b, "stock", "second item");
    if (!aStock || !bStock) return 0;
    const stockCompare = compareIDs(aStock, bStock);
    if (stockCompare !== 0) return stockCompare;
    const aOffcut = safeGetValue(a, "offcut", "first item");
    const bOffcut = safeGetValue(b, "offcut", "second item");
    if (aOffcut && !bOffcut) return 1;
    if (!aOffcut && bOffcut) return -1;
    const aOrder = safeGetValue(a, "placementOrder", "first item") ?? 0;
    const bOrder = safeGetValue(b, "placementOrder", "second item") ?? 0;
    return aOrder - bOrder;
  },
  offcutPlacementOrder: (a, b) => {
    const aStock = safeGetValue(a, "stock", "first item");
    const bStock = safeGetValue(b, "stock", "second item");
    if (!(aStock == null ? void 0 : aStock.id) || !(bStock == null ? void 0 : bStock.id)) return 0;
    const stockCompare = compareIDs(aStock, bStock);
    if (stockCompare !== 0) return stockCompare;
    if ("placementOrder" in a && "placementOrder" in b) {
      const aOrder = safeGetValue(a, "placementOrder", "first item") ?? 0;
      const bOrder = safeGetValue(b, "placementOrder", "second item") ?? 0;
      return aOrder - bOrder;
    }
    return 0;
  },
  groupPlacementOrder: (a, b) => {
    const aOrder = safeGetValue(a, "placementOrder", "first item") ?? 0;
    const bOrder = safeGetValue(b, "placementOrder", "second item") ?? 0;
    const placementCompare = aOrder - bOrder;
    if (placementCompare !== 0) return placementCompare;
    const aGroupOrder = safeGetValue(a, "groupPlacementOrder", "first item") ?? 0;
    const bGroupOrder = safeGetValue(b, "groupPlacementOrder", "second item") ?? 0;
    return aGroupOrder - bGroupOrder;
  },
  // Array manipulation utilities
  swapFirstTwo(array) {
    if (array.length < 2) return;
    [array[0], array[1]] = [array[1], array[0]];
  },
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  // Aspect and area sorts
  aspect(a, b) {
    if (!hasAspect(a) || !hasAspect(b)) {
      console.warn(SortingErrors.missingAspect);
      return 0;
    }
    return b.getAspect() - a.getAspect();
  },
  fillThenArea(dimension) {
    return (a, b) => {
      if (!hasLongSide(a) || !hasLongSide(b)) {
        console.warn(SortingErrors.missingLongSide);
        return 0;
      }
      if (b[dimension] === a[dimension]) {
        return -compareAreas(a, b);
      }
      return parseFloat(String(b[dimension])) - parseFloat(String(a[dimension]));
    };
  }
};
function getAxisFromDimension(dimension) {
  if (dimension === "l") return "x";
  if (dimension === "w") return "y";
}
function getReverseDimension(dimension) {
  if (!dimension) return null;
  return dimension === "l" ? "w" : "l";
}
function getReverseAxis(axis) {
  if (!axis) return null;
  return axis === "x" ? "y" : "x";
}
class Line {
  constructor(data) {
    __publicField(this, "x1");
    __publicField(this, "x2");
    __publicField(this, "y1");
    __publicField(this, "y2");
    __publicField(this, "dimension");
    __publicField(this, "direction");
    __publicField(this, "shapeCollisions");
    __publicField(this, "origin");
    __publicField(this, "type");
    this.x1 = data.x1;
    this.x2 = data.x2;
    this.y1 = data.y1;
    this.y2 = data.y2;
    this.dimension = getLineDimension(this);
    this.direction = getLineDirection(this);
    this.type = (data == null ? void 0 : data.type) ? data.type : null;
    this.origin = (data == null ? void 0 : data.origin) ? data.origin : null;
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
function createLine(x1, y1, x2, y2, origin = null, type = null) {
  return new Line({ x1, y1, x2, y2, origin, type });
}
function getLineDimension(line) {
  if (typeof line === "undefined") return null;
  if (!maths.isNumber(line.x1) || !maths.isNumber(line.x2) || !maths.isNumber(line.y1) || !maths.isNumber(line.y2)) {
    return null;
  }
  if (line.x1 === line.x2 && line.y1 !== line.y2) return "w";
  else if (line.y1 === line.y2 && line.x1 !== line.x2) return "l";
  else return null;
}
function getLineDirection(line) {
  if (typeof line === "undefined") return null;
  if (!maths.isNumber(line.x1) || !maths.isNumber(line.x2) || !maths.isNumber(line.y1) || !maths.isNumber(line.y2)) {
    return null;
  }
  if (line.x1 < line.x2) return "lr";
  else if (line.x1 > line.x2) return "rl";
  else if (line.y1 < line.y2) return "bt";
  else if (line.y1 > line.y2) return "tb";
  else return null;
}
function rayCastRectangle(rectangle, container) {
  const points = rectangle.getCorners();
  const lines = {};
  if (points.bottomLeft.x > 0 && points.bottomLeft.y > 0) {
    lines.bottomLeftDown = createLine(
      points.bottomLeft.x,
      points.bottomLeft.y,
      points.bottomLeft.x,
      0,
      "bottomLeft",
      "bottomLeftDown"
    );
    lines.bottomLeftLeft = createLine(
      points.bottomLeft.x,
      points.bottomLeft.y,
      0,
      points.bottomLeft.y,
      "bottomLeft",
      "bottomLeftLeft"
    );
  }
  if (points.topLeft.x > 0 && points.topLeft.y < container.w) {
    lines.topLeftLeft = createLine(
      points.topLeft.x,
      points.topLeft.y,
      0,
      points.topLeft.y,
      "topLeft",
      "topLeftLeft"
    );
    lines.topLeftTop = createLine(
      points.topLeft.x,
      points.topLeft.y,
      points.topLeft.x,
      container.w,
      "topLeft",
      "topLeftTop"
    );
  }
  if (points.topRight.y < container.w && points.topRight.x < container.l) {
    lines.topRightTop = createLine(
      points.topRight.x,
      points.topRight.y,
      points.topRight.x,
      container.w,
      "topRight",
      "topRightTop"
    );
    lines.topRightRight = createLine(
      points.topRight.x,
      points.topRight.y,
      container.l,
      points.topRight.y,
      "topRight",
      "topRightRight"
    );
  }
  if (points.bottomRight.x < container.l && points.bottomRight.y > 0) {
    lines.bottomRightRight = createLine(
      points.bottomRight.x,
      points.bottomRight.y,
      container.l,
      points.bottomRight.y,
      "bottomRight",
      "bottomRightRight"
    );
    lines.bottomRightDown = createLine(
      points.bottomRight.x,
      points.bottomRight.y,
      points.bottomRight.x,
      0,
      "bottomRight",
      "bottomRightDown"
    );
  }
  return lines;
}
const config = {
  cacheResults: true,
  successMetric: "efficiency",
  calculateCuts: true,
  stack: true,
  findDuplicatePatterns: true,
  //dev specific
  captureProfile: false,
  runTests: false,
  throwErrorsOnFailedTests: false,
  // recordPlacementPositions: isDevOrTest ? true : false,
  //samples include rotations so one shape with two rotations counts as two
  sample: {
    enable: true,
    groupSize: 6,
    efficiency: 4,
    guillotine: 4
  },
  priority: {
    enable: true,
    variationThreshold: 0.3
  },
  secondRun: {
    enabled: false,
    efficiencyCutoff: 0.5,
    stack: false
  },
  efficiency: {
    tidy: false,
    //[] issue with picking winner when tidy is enabled
    rayCasting: true
  },
  groups: {
    shapeAreaCutOff: 0.7,
    tolerance: 0.04,
    guillotine: {
      strips: true,
      segments: true,
      runWithout: false
    },
    efficiency: {
      firstShapes: true,
      position: true,
      limit: 100
    }
  },
  guillotine: {
    viableShapeArea: 0.5,
    secondPass: true,
    strips: {
      rearrange: true,
      efficiencyThreshold: 0.7
    },
    stripShapes: {
      allocation: true,
      iterations: 6,
      numPriorityShapes: 1
    }
  },
  subset: {
    shuffles: 80,
    //this is the default - can be overwritten (for example when creating groups)
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      limit: 0.5
    }
  },
  evo: {
    disable: false,
    stockLimit: 40
  }
};
config$1.showDiff = true;
createDebug("tests");
createDebug("timers");
function isDev() {
  if (typeof process !== "undefined" && (process == null ? void 0 : process.env)) {
    return false;
  }
  return false;
}
function test(tests = [], issueMessage = null) {
  if (!(tests == null ? void 0 : tests.length)) return;
  if (isDev() && config.runTests) ;
}
createDebug$1.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
createDebug$1("logs");
createDebug$1("cuts");
createDebug$1("guillotine");
createDebug$1("results");
createDebug$1("scoring");
createDebug$1("firstShapes");
createDebug$1("calculations");
createDebug$1("subset");
createDebug$1("secondRun");
createDebug$1("stack");
const errorDebug = createDebug$1("errors");
createDebug$1("allStock");
errorDebug.color = 1;
function getCutLength(cut) {
  if (cut == null ? void 0 : cut.dimension) {
    switch (cut.dimension) {
      case "l":
        return cut.x2 - cut.x1;
      case "w":
        return cut.y2 - cut.y1;
    }
  }
  switch (cut.type) {
    case "top":
    case "bottom":
      return cut.x2 - cut.x1;
    case "left":
    case "right":
      return cut.y2 - cut.y1;
  }
  return 0;
}
class Cut extends Line {
  //used to mark for removal
  constructor(data) {
    var _a, _b, _c, _d;
    if (data.x2 < data.x1) [data.x1, data.x2] = [data.x2, data.x1];
    if (data.y2 < data.y1) [data.y1, data.y2] = [data.y2, data.y1];
    super(data);
    __publicField(this, "stock");
    __publicField(this, "stockId");
    __publicField(this, "guillotine");
    __publicField(this, "guillotineData");
    __publicField(this, "isTrim");
    __publicField(this, "distances");
    __publicField(this, "beamTrimX1");
    __publicField(this, "beamTrimY1");
    __publicField(this, "type", null);
    __publicField(this, "remove");
    if (valueSet(data == null ? void 0 : data.stock)) {
      if (((_b = (_a = data.stock) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "Stock")
        this.stock = data.stock;
      else this.stock = new Stock(data.stock);
      this.stockId = this.stock.id;
    }
    this.stockId = (_c = data == null ? void 0 : data.stock) == null ? void 0 : _c.id;
    this.type = data.type ?? null;
    this.guillotine = data.guillotine;
    this.guillotineData = valueSet(data.guillotineData) ? data.guillotineData : {};
    this.guillotineData.ptxDummyCut = (data == null ? void 0 : data.ptxDummyCut) || ((_d = data == null ? void 0 : data.guillotineData) == null ? void 0 : _d.ptxDummyCut) || false;
    this.isTrim = valueSet(data.isTrim) ? data.isTrim : false;
    this.distances = valueSet(data.distances) ? data.distances : {};
    this.beamTrimX1 = data.beamTrimX1;
    this.beamTrimY1 = data.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var _a;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id);
    delete this.shapeCollisions;
    delete this.stock;
  }
  clone() {
    const data = structuredClone(this);
    return new Cut(data);
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  trim() {
    if (this.dimension === "l") {
      this.x1 = this.x1 < 0 ? 0 : this.x1;
      this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2;
    } else if (this.dimension === "w") {
      this.y1 = this.y1 < 0 ? 0 : this.y1;
      this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2;
    }
  }
  lookupDirectionByType(type) {
    const directionLookup = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    };
    const result = directionLookup[type];
    if (result) return result;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return maths.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return maths.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return maths.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return maths.lessThan(
          this.x1 - this.stock.getBladeWidth() / 2,
          this.stock.l
        );
      default:
        return true;
    }
  }
  /**
      * the cuts are visualised differently from their exact dimensions
      * @param {string} coord
      */
  getVisCoords(coord) {
    return this[coord];
  }
  getLength() {
    return getCutLength(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const cutLength = this.getLength();
    if (cutLength) return cutLength * this.stock.getBladeWidth();
    return 0;
  }
}
const raycastPointToShapePositionMap = {
  "tb": {
    "bottomLeft": {
      "top": "topRight",
      "topLeft": "topLeft"
    },
    "bottomRight": {
      "top": "topLeft",
      "topRight": "topRight"
    }
  },
  "bt": {
    "topLeft": {
      "bottom": "bottomRight",
      "bottomLeft": "bottomLeft"
    },
    "topRight": {
      "bottom": "bottomLeft",
      "bottomRight": "bottomRight"
    }
  },
  "lr": {
    "topRight": {
      "left": "bottomLeft",
      "topLeft": "topLeft"
    },
    "bottomRight": {
      "left": "topLeft",
      "bottomLeft": "bottomLeft"
    }
  },
  "rl": {
    "topLeft": {
      "right": "bottomRight",
      "topRight": "topRight"
    },
    "bottomLeft": {
      "right": "topRight",
      "bottomRight": "bottomRight"
    }
  }
};
const guillotinePointToShapePositionMap = {
  "topLeft": {
    "top": ["topRight"],
    "default": ["topRight"]
  },
  "bottomRight": {
    "right": ["topRight"],
    "default": ["topRight"]
  }
};
const efficiencyPointToShapePositionMap = {
  "topRight": {
    "top": ["topLeft"],
    "right": ["bottomRight"],
    "default": ["topLeft", "bottomRight"]
  },
  "topLeft": {
    "top": ["topRight"],
    "left": ["bottomLeft"],
    "default": ["topRight", "bottomLeft"]
  },
  "bottomRight": {
    "bottom": ["bottomLeft"],
    "right": ["topRight"],
    "default": ["bottomLeft", "topRight"]
  },
  "bottomLeft": {
    "bottom": ["bottomRight"],
    "left": ["topLeft"],
    "default": ["bottomRight", "topLeft"]
  }
};
class Point {
  constructor(x2, y2, z = null) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "z");
    __publicField(this, "a");
    //shape id
    __publicField(this, "b");
    //shape id
    __publicField(this, "direction");
    //direction of the raay
    __publicField(this, "type");
    //[] need to type
    __publicField(this, "corner");
    //originating corner of this point
    __publicField(this, "grid");
    //if a grid point, which grid position
    __publicField(this, "stockID");
    __publicField(this, "raycast");
    __publicField(this, "collision");
    __publicField(this, "tooClose");
    __publicField(this, "adjustedForMinSpacing");
    this.x = parseFloat(x2);
    this.y = parseFloat(y2);
    this.z = parseFloat(z) || 0;
    this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(x2 = null, y2 = null) {
    const point = new Point(x2 ?? this.x, y2 ?? this.y);
    for (const key in this) {
      if (key !== "x" && key !== "y") {
        point[key] = this[key];
      }
    }
    return point;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  coords() {
    return {
      x: this.x,
      y: this.y
    };
  }
  collidesWith(shape) {
    return this.x >= shape.x && this.x <= shape.x + shape.l && this.y >= shape.y && this.y <= shape.y + shape.w;
  }
  isIdenticalTo(point) {
    return this.x === point.x && this.y === point.y;
  }
  /**
   * given a point from a shape corner or a ray, get the available positions for this shape
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  //[x] needs to cater for raycast coords, which don't originate from a shape corner
  //[x] cater for raycast corners and grid
  getAvailableShapePositions(container) {
    const availableShapePositions = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const directionMap = raycastPointToShapePositionMap[this.direction];
      if (directionMap && directionMap[this.corner] && directionMap[this.corner][this.grid]) {
        availableShapePositions.add(directionMap[this.corner][this.grid]);
      }
      return availableShapePositions;
    }
    if ((container == null ? void 0 : container.cutType) !== "efficiency") {
      if (guillotinePointToShapePositionMap[this.corner]) {
        if (!this.grid) {
          guillotinePointToShapePositionMap[this.corner].default.forEach((pos) => availableShapePositions.add(pos));
        } else if (guillotinePointToShapePositionMap[this.corner][this.grid]) {
          guillotinePointToShapePositionMap[this.corner][this.grid].forEach((pos) => availableShapePositions.add(pos));
        }
      }
      return availableShapePositions;
    }
    if (efficiencyPointToShapePositionMap[this.corner]) {
      if (!this.grid) {
        efficiencyPointToShapePositionMap[this.corner].default.forEach((pos) => availableShapePositions.add(pos));
      } else if (efficiencyPointToShapePositionMap[this.corner][this.grid]) {
        efficiencyPointToShapePositionMap[this.corner][this.grid].forEach((pos) => availableShapePositions.add(pos));
      }
    }
    return availableShapePositions;
  }
}
class PointCollection {
  constructor(points = []) {
    __publicField(this, "points", /* @__PURE__ */ new Map());
    points.forEach((p) => this.addPoint(p));
  }
  addPoint(p, type = null) {
    if (this.contains(p)) {
      const existingPoint = this.getPoint(p);
      if (existingPoint.type === "group" && !type) {
        existingPoint.type = void 0;
      }
      return;
    }
    p.validate();
    if (type) p.type = type;
    this.points.set(this.createKey(p), p);
  }
  addPoints(points, type = null) {
    for (const p of points) {
      if (!p) return;
      p.validate();
      this.addPoint(p, type);
    }
  }
  createKey(p) {
    return `${p.x},${p.y}`;
  }
  getPoint(p) {
    return this.points.get(this.createKey(p));
  }
  deletePoint(p) {
    p.validate();
    this.points.delete(this.createKey(p));
  }
  deletePoints(points) {
    for (const p of points) {
      p.validate();
      this.deletePoint(p);
    }
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(p) {
    return this.points.has(this.createKey(p));
  }
}
function getGridPoint(gridPostion, centre, spacing, corner, direction) {
  const gridPoint = gridPointCalculations[gridPostion](centre, spacing);
  if (corner) gridPoint.corner = corner;
  if (direction) gridPoint.direction = direction;
  return gridPoint;
}
const gridPointCalculations = {
  bottom: (p, spacing) => {
    const gridPoint = p.clone(p.x, p.y - spacing);
    gridPoint.grid = "bottom";
    return gridPoint;
  },
  bottomLeft: (p, spacing) => {
    const gridPoint = p.clone(p.x - spacing, p.y - spacing);
    gridPoint.grid = "bottomLeft";
    return gridPoint;
  },
  bottomRight: (p, spacing) => {
    const gridPoint = p.clone(p.x + spacing, p.y - spacing);
    gridPoint.grid = "bottomRight";
    return gridPoint;
  },
  left: (p, spacing) => {
    const gridPoint = p.clone(p.x - spacing, p.y);
    gridPoint.grid = "left";
    return gridPoint;
  },
  centre: (p) => {
    const gridPoint = p.clone(p.x, p.y);
    gridPoint.grid = "centre";
    return gridPoint;
  },
  right: (p, spacing) => {
    const gridPoint = p.clone(p.x + spacing, p.y);
    gridPoint.grid = "right";
    return gridPoint;
  },
  top: (p, spacing) => {
    const gridPoint = p.clone(p.x, p.y + spacing);
    gridPoint.grid = "top";
    return gridPoint;
  },
  topLeft: (p, spacing) => {
    const gridPoint = p.clone(p.x - spacing, p.y + spacing);
    gridPoint.grid = "topLeft";
    return gridPoint;
  },
  topRight: (p, spacing) => {
    const gridPoint = p.clone(p.x + spacing, p.y + spacing);
    gridPoint.grid = "topRight";
    return gridPoint;
  }
};
function createGrid(placedShapes, container, cornerCollection) {
  var _a, _b, _c, _d, _e, _f;
  const gridCollection = new PointCollection();
  const sortedCorners = cornerCollection.toArray().sort(pointsSort);
  const bladeWidth = container.getBladeWidth();
  sortedCorners.forEach((cornerPoint) => {
    const corner = cornerPoint.corner;
    const cornerType = cornerPoint.type;
    if (!bladeWidth) {
      gridCollection.addPoint(cornerPoint);
    } else {
      switch (corner) {
        case "topRight":
          gridCollection.addPoint(
            getGridPoint("top", cornerPoint, bladeWidth, corner),
            cornerType
          );
          gridCollection.addPoint(
            getGridPoint("right", cornerPoint, bladeWidth, corner),
            cornerType
          );
          break;
        case "topLeft":
          gridCollection.addPoint(
            getGridPoint("top", cornerPoint, bladeWidth, corner),
            cornerType
          );
          gridCollection.addPoint(
            getGridPoint("left", cornerPoint, bladeWidth, corner),
            cornerType
          );
          break;
        case "bottomRight":
          gridCollection.addPoint(
            getGridPoint("bottom", cornerPoint, bladeWidth, corner),
            cornerType
          );
          gridCollection.addPoint(
            getGridPoint("right", cornerPoint, bladeWidth, corner),
            cornerType
          );
          break;
        case "bottomLeft":
          gridCollection.addPoint(
            getGridPoint("bottom", cornerPoint, bladeWidth, corner),
            cornerType
          );
          gridCollection.addPoint(
            getGridPoint("left", cornerPoint, bladeWidth, corner),
            cornerType
          );
          break;
      }
    }
    const gridCollectionArray = gridCollection.toArray();
    if (bladeWidth) {
      for (let i = gridCollectionArray.length; i--; ) {
        const gridPoint = gridCollectionArray[i];
        if (cornerCollection.contains(gridPoint)) {
          gridCollection.deletePoint(gridPoint);
        }
      }
    } else {
      for (let i = gridCollectionArray.length; i--; ) {
        const gridPoint = gridCollectionArray[i];
        for (let j = placedShapes.length; j--; ) {
          const placedShape = placedShapes[j];
          if (gridPoint.x === placedShape.x && gridPoint.y === placedShape.y) {
            gridCollection.deletePoint(gridPoint);
            break;
          }
        }
      }
    }
  });
  if (bladeWidth) {
    const pointsToRemove = /* @__PURE__ */ new Set();
    let minX, minY, maxX, maxY;
    if (((_a = container == null ? void 0 : container.constructor) == null ? void 0 : _a.name) === "Stock" && (container == null ? void 0 : container.trimmed) || ((_b = container == null ? void 0 : container.constructor) == null ? void 0 : _b.name) === "Segment") {
      minX = container.x;
      minY = container.y;
      maxX = container.x + container.l;
      maxY = container.y + container.w;
    } else {
      minX = container.x + ((_c = container == null ? void 0 : container.trim) == null ? void 0 : _c.x1);
      minY = container.y + ((_d = container == null ? void 0 : container.trim) == null ? void 0 : _d.y1);
      maxX = container.x + container.l - ((_e = container == null ? void 0 : container.trim) == null ? void 0 : _e.x2);
      maxY = container.y + container.w - ((_f = container == null ? void 0 : container.trim) == null ? void 0 : _f.y2);
    }
    let gridArray = gridCollection.toArray();
    for (let i = gridArray.length; i--; ) {
      const point = gridArray[i];
      if (maths.lessThan(point.x, minX) || maths.lessThan(point.y, minY) || maths.greaterThan(point.x, maxX) || maths.greaterThan(point.y, maxY)) {
        gridArray.splice(i, 1);
      }
    }
    gridCollection.clear();
    gridCollection.addPoints(gridArray);
    pointsToRemove.clear();
    gridArray = gridCollection.toArray();
    for (let i = gridArray.length; i--; ) {
      const point = gridArray[i];
      for (let j = placedShapes.length; j--; ) {
        const placedShape = placedShapes[j];
        if (point.collidesWith(placedShape)) {
          gridCollection.deletePoint(point);
          break;
        }
      }
    }
  }
  return gridCollection;
}
function convertRaycastCollisionPointToShapePositions(shape, point, container) {
  let points = [];
  const minSpacing = shape.getMinSpacing(container);
  const corner = point.corner;
  const direction = point.direction;
  if (point.type === "shape") {
    switch (corner) {
      case "topLeft":
        if (direction === "rl") {
          points.push(getGridPoint("right", point, minSpacing, corner, direction));
          points.push(getGridPoint("topRight", point, minSpacing, corner, direction));
        }
        if (direction === "bt") {
          points.push(getGridPoint("bottom", point, minSpacing, corner, direction));
          points.push(getGridPoint("bottomLeft", point, minSpacing, corner, direction));
        }
        break;
      case "topRight":
        if (direction === "lr") {
          points.push(getGridPoint("left", point, minSpacing, corner, direction));
          points.push(getGridPoint("topLeft", point, minSpacing, corner, direction));
        }
        if (direction === "bt") {
          points.push(getGridPoint("bottom", point, minSpacing, corner, direction));
          points.push(getGridPoint("bottomRight", point, minSpacing, corner, direction));
        }
        break;
      case "bottomRight":
        if (direction === "lr") {
          points.push(getGridPoint("left", point, minSpacing, corner, direction));
          points.push(getGridPoint("bottomLeft", point, minSpacing, corner, direction));
        }
        if (direction === "tb") {
          points.push(getGridPoint("top", point, minSpacing, corner, direction));
          points.push(getGridPoint("topRight", point, minSpacing, corner, direction));
        }
        break;
      case "bottomLeft":
        if (direction === "rl") {
          points.push(getGridPoint("right", point, minSpacing, corner, direction));
          points.push(getGridPoint("bottomRight", point, minSpacing, corner, direction));
        }
        if (direction === "tb") {
          points.push(getGridPoint("top", point, minSpacing, corner, direction));
          points.push(getGridPoint("topLeft", point, minSpacing, corner, direction));
        }
        break;
    }
  } else if (point.type === "edge") {
    switch (direction) {
      case "rl":
      case "lr":
        points.push(getGridPoint("top", point, 0));
        points.push(getGridPoint("centre", point, 0));
        points.push(getGridPoint("bottom", point, 0));
        break;
      case "tb":
      case "bt":
        points.push(getGridPoint("left", point, 0));
        points.push(getGridPoint("right", point, 0));
        points.push(getGridPoint("centre", point, 0));
        break;
    }
  }
  points = points.filter((c) => c.x >= 0 && c.y >= 0);
  if (!points.length) return null;
  const shapePositions = new PointCollection();
  for (const p of points) {
    p.raycast = true;
    shapePositions.addPoints(convertPointToShapePositions(shape, p, container).toArray());
  }
  removeOutOfBoundsPoints(shape, container, shapePositions);
  return shapePositions;
}
function getCorners(shapes, container) {
  const cornerCollection = new PointCollection();
  shapes.sort(pointsSort);
  shapes.forEach((s) => {
    if (isGroup(s)) {
      cornerCollection.addPoints(s.getCoords(container));
      s.shapes.forEach((gs) => {
        const points = gs.getCoords(container);
        cornerCollection.addPoints(points, "group");
      });
    } else {
      cornerCollection.addPoints(s.getCoords(container));
    }
  });
  cornerCollection.points.forEach((p) => {
    p.stockID = container.getStock().id;
  });
  return cornerCollection;
}
function getPlacementPositions(addedShapes = [], placedShapes, container) {
  const cornerCollection = getCorners(
    addedShapes === null ? placedShapes : addedShapes,
    container
  );
  const gridCollection = createGrid(
    placedShapes,
    container,
    cornerCollection
  );
  return gridCollection;
}
function pointsSort(a, b) {
  if (a.y === b.y) return b.x - a.x;
  return b.y - a.y;
}
function addDataToPoint(point, shapeA, shapeB, direction, type, corner) {
  point.a = shapeA.id;
  point.b = shapeB ? shapeB.id : null;
  point.direction = direction;
  point.raycast = true;
  point.type = type;
  point.corner = corner;
}
function getRayCastCoordinates(container, placedShapes) {
  if (container.saw.cutType !== "efficiency" || placedShapes.length <= 1) return null;
  let pointCollection = new PointCollection();
  const shapeRays = precomputeShapeRays(placedShapes, container);
  for (const placedShape of placedShapes) {
    for (const shapeRay of shapeRays) {
      if (shapeRay.shape.id === placedShape.id) continue;
      const rays = Object.values(shapeRay.rays);
      for (const ray of rays) {
        processRayCollision(
          ray,
          shapeRay.shape,
          placedShape,
          pointCollection
        );
      }
    }
  }
  const saw = container.saw;
  const requiredFromDirection = saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb";
  const edgeRaycastShape = placedShapes.reduce((a, b) => {
    return (requiredFromDirection === "tb" ? a.x + a.l > b.x + b.l : a.y + a.w > b.y + b.w) ? a : b;
  });
  shapeRays.filter(({ shape }) => shape.id === edgeRaycastShape.id).forEach(({ shape, rays }) => {
    const raycastLines = Object.values(rays);
    for (const ray of raycastLines) {
      const p = new Point(ray.x2, ray.y2);
      if (requiredFromDirection === ray.direction) {
        addDataToPoint(p, shape, null, ray.direction, "edge");
        pointCollection.addPoint(p);
      }
    }
  });
  pointCollection = filterClosestPoints(pointCollection);
  return pointCollection;
}
function precomputeShapeRays(placedShapes, container) {
  return placedShapes.map((shape) => {
    const rays = rayCastRectangle(shape, container);
    return {
      shape,
      rays
    };
  });
}
function processRayCollision(ray, shapeA, shapeB, collection) {
  switch (ray.direction) {
    case "rl":
      checkAndAddCollisionPoint(
        ray,
        shapeA,
        shapeB,
        collection,
        shapeB.x + shapeB.l
      );
      break;
    case "lr":
      checkAndAddCollisionPoint(
        ray,
        shapeA,
        shapeB,
        collection,
        shapeB.x
      );
      break;
    case "tb":
      checkAndAddCollisionPoint(
        ray,
        shapeA,
        shapeB,
        collection,
        shapeB.y + shapeB.w
      );
      break;
    case "bt":
      checkAndAddCollisionPoint(
        ray,
        shapeA,
        shapeB,
        collection,
        shapeB.y
      );
      break;
  }
}
function checkAndAddCollisionPoint(ray, shapeA, shapeB, collection, collisionCoordinate) {
  const isVerticalRay = ray.dimension === "w";
  const rayPrimaryAxis = isVerticalRay ? "y" : "x";
  const raySecondaryAxis = isVerticalRay ? "x" : "y";
  const secondaryDimension = isVerticalRay ? "l" : "w";
  if (ray[`${raySecondaryAxis}1`] >= shapeB[raySecondaryAxis] && ray[`${raySecondaryAxis}1`] <= shapeB[raySecondaryAxis] + shapeB[secondaryDimension]) {
    const collisionFromLeft = ray.direction === "lr" && ray[`${rayPrimaryAxis}1`] <= collisionCoordinate && ray[`${rayPrimaryAxis}2`] >= collisionCoordinate;
    const collisionFromRight = ray.direction === "rl" && ray[`${rayPrimaryAxis}1`] >= collisionCoordinate && ray[`${rayPrimaryAxis}2`] <= collisionCoordinate;
    const collisionFromBottom = ray.direction === "bt" && ray[`${rayPrimaryAxis}1`] <= collisionCoordinate && ray[`${rayPrimaryAxis}2`] >= collisionCoordinate;
    const collisionFromTop = ray.direction === "tb" && ray[`${rayPrimaryAxis}1`] >= collisionCoordinate && ray[`${rayPrimaryAxis}2`] <= collisionCoordinate;
    const collision = collisionFromLeft || collisionFromRight || collisionFromBottom || collisionFromTop;
    if (collision) {
      const pointCoordX = isVerticalRay ? ray[`${raySecondaryAxis}1`] : collisionCoordinate;
      const pointCoordY = isVerticalRay ? collisionCoordinate : ray[`${raySecondaryAxis}1`];
      const point = new Point(pointCoordX, pointCoordY);
      const corner = ray.origin;
      addDataToPoint(point, shapeA, shapeB, ray.direction, "shape", corner);
      collection.addPoint(point);
    }
  }
}
function filterClosestPoints(collection) {
  const filteredPoints = new PointCollection();
  if (collection.points.size === 0) return filteredPoints;
  const originShapes = new Set(collection.toArray().map((p) => p.a));
  originShapes.forEach((shape) => {
    const startingShapePoints = collection.toArray().filter((p) => p.a === shape);
    ["right", "left", "top", "bottom"].forEach((direction) => {
      const point = findClosestPointInDirection(
        startingShapePoints,
        direction
      );
      if (point) filteredPoints.addPoint(point);
    });
  });
  return filteredPoints;
}
function findClosestPointInDirection(points, direction) {
  if (points.length === 0) return null;
  return points.reduce((closest, current) => {
    switch (direction) {
      case "left":
        return !closest || current.x < closest.x ? current : closest;
      case "right":
        return !closest || current.x > closest.x ? current : closest;
      case "top":
        return !closest || current.y > closest.y ? current : closest;
      case "bottom":
        return !closest || current.y < closest.y ? current : closest;
      default:
        return null;
    }
  }, null);
}
function convertPointToShapePositions(shape, point, container) {
  const collection = new PointCollection();
  const availableShapePositions = point.getAvailableShapePositions(container);
  for (const position of availableShapePositions) {
    let p;
    p = adjustPointForMimumSpacing(point, shape, container);
    switch (position) {
      case "bottomLeft":
        {
          p = p.clone(p.x - shape.l, p.y - shape.w);
          p.shapePosition = "bottomLeft";
        }
        break;
      case "bottomRight":
        {
          p = p.clone(p.x, p.y - shape.w);
          p.shapePosition = "bottomRight";
        }
        break;
      case "topLeft":
        {
          p = p.clone(p.x - shape.l, p.y);
          p.shapePosition = "topLeft";
        }
        break;
      case "topRight":
        {
          p = p.clone(p.x, p.y);
          p.shapePosition = "topRight";
        }
        break;
    }
    collection.addPoint(p);
  }
  removeOutOfBoundsPoints(shape, container, collection);
  return collection;
}
function adjustPointForMimumSpacing(point, shape, container) {
  if (container.saw.cutType !== "efficiency") return point;
  const minSpacing = shape.getMinSpacing(container);
  const bladeWidth = container.getBladeWidth();
  if (!minSpacing) return point;
  if (minSpacing === bladeWidth) return point;
  let newPoint;
  if (!point.grid) return point;
  switch (point.grid) {
    case "bottom":
      newPoint = point.clone(point.x, point.y - minSpacing + bladeWidth);
      break;
    case "top":
      newPoint = point.clone(point.x, point.y + minSpacing - bladeWidth);
      break;
    case "left":
      newPoint = point.clone(point.x - minSpacing + bladeWidth, point.y);
      break;
    case "right":
      newPoint = point.clone(point.x + minSpacing - bladeWidth, point.y);
      break;
  }
  if (!newPoint) return point;
  if (newPoint.x < 0) newPoint.x = 0;
  if (newPoint.y < 0) newPoint.y = 0;
  newPoint.adjustedForMinSpacing = true;
  return newPoint;
}
function removeOutOfBoundsPoints(shape, container, collection) {
  var _a, _b, _c, _d, _e, _f;
  let minX, minY, maxX, maxY;
  if (((_a = container == null ? void 0 : container.constructor) == null ? void 0 : _a.name) === "Stock" && (container == null ? void 0 : container.trimmed) || ((_b = container == null ? void 0 : container.constructor) == null ? void 0 : _b.name) === "Segment") {
    minX = 0;
    minY = 0;
    maxX = container.x + container.l - shape.l;
    maxY = container.y + container.w - shape.w;
  } else {
    minX = (_c = container == null ? void 0 : container.trim) == null ? void 0 : _c.x1;
    minY = (_d = container == null ? void 0 : container.trim) == null ? void 0 : _d.y1;
    maxX = container.l - ((_e = container == null ? void 0 : container.trim) == null ? void 0 : _e.x2) - shape.l;
    maxY = container.w - ((_f = container == null ? void 0 : container.trim) == null ? void 0 : _f.y2) - shape.w;
  }
  const pointsArray = collection.toArray();
  for (let i = pointsArray.length; i--; ) {
    const p = pointsArray[i];
    if (maths.lessThan(p.x, minX) || maths.lessThan(p.y, minY) || maths.greaterThan(p.x, maxX) || maths.greaterThan(p.y, maxY) || p.x < 0 || p.y < 0)
      collection.deletePoint(p);
  }
}
function getMatchingStock(shape, stockList, stockMaterialPresent = false, stockThicknessPresent = false) {
  return stockList.filter((stock, stockIndex) => {
    const matches = {
      fit: isValidShape(shape) && willItFit(shape, stock),
      material: checkMaterialMatch(shape, stock, stockMaterialPresent),
      thickness: checkThicknessMatch(shape, stock, stockThicknessPresent),
      width: checkWidthMatch(shape, stock)
    };
    Object.entries(matches).forEach(([key, value]) => {
      shape.stockMatch[key][stockIndex] = value;
    });
    return Object.values(matches).every(Boolean);
  });
}
function isValidShape(shape) {
  return isInputShape(shape) || isShape(shape) || isUserGroup(shape);
}
function checkMaterialMatch(shape, stock, required) {
  var _a, _b;
  if (!required) return true;
  const stockMaterial = (_a = stock == null ? void 0 : stock.material) == null ? void 0 : _a.toLowerCase();
  const shapeMaterial = (_b = shape == null ? void 0 : shape.material) == null ? void 0 : _b.toLowerCase();
  return !stockMaterial && !shapeMaterial || stockMaterial === shapeMaterial;
}
function checkThicknessMatch(shape, stock, required) {
  if (!required) return true;
  if (!valueSet(shape.t) || !valueSet(stock.t)) return false;
  return isShape(shape) ? maths.equalTo(shape.t, stock.t) : shape.t === stock.t;
}
function checkWidthMatch(shape, stock) {
  var _a;
  if (((_a = stock == null ? void 0 : stock.saw) == null ? void 0 : _a.stockType) !== "linear") return true;
  if (!isShape(shape)) return true;
  return canRotate(shape, 0, stock) && maths.equalTo(shape.w, stock.w) || canRotate(shape, 1, stock) && maths.equalTo(shape.l, stock.w);
}
const hasAnyTrue = (arr) => arr.some((v) => v === true);
const hasMatchingPair = (arr1, arr2) => arr1.some((value, index) => value && arr2[index]);
function stockMatch$1(shapes, stock, stockType) {
  const isInputs = isInputShape(shapes[0]);
  const stockLockSetManually = shapes.some((s) => valueSet(s.stockLock) && s.stockLock.length);
  if (stockLockSetManually) return { stockList: stock, shapeList: shapes, unusableShapes: [], unusableStock: [] };
  if (!isInputs) {
    stock = stock.filter((s) => s.autoAdd === true || valueSet(s.q) && s.q > 0);
  }
  const someStockMaterialSet = stock.some((s) => valueSet(s.material));
  const someStockThicknessSet = stock.some((s) => valueSet(s.t));
  const allocatedStock = /* @__PURE__ */ new Set();
  for (const shape of shapes) {
    shape.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const matchingStock = getMatchingStock(shape, stock, someStockMaterialSet, someStockThicknessSet);
    shape.stockMatch.fit = hasAnyTrue(shape.stockMatch.fit);
    const hasMaterialThicknessMatch = hasMatchingPair(
      shape.stockMatch.material,
      shape.stockMatch.thickness
    );
    shape.stockMatch.width = hasAnyTrue(shape.stockMatch.width);
    if (!isInputs) {
      if (matchingStock.length) {
        const stockParentIds = matchingStock.map((stock2) => stock2.getParentID());
        shape.stockLock = stockParentIds;
        stockParentIds.forEach((id) => allocatedStock.add(id));
      }
    }
    if (!shape.stockMatch.fit) {
      new Issue({
        item: shape,
        field: [["l"], ["w"]],
        message: "will_not_fit"
      });
    } else {
      if (!hasMaterialThicknessMatch) {
        new Issue({
          item: shape,
          field: [["material"], ["t"]],
          message: "no_matching_stock_material_thickness"
        });
      }
      if (stockType === "linear" && !shape.stockMatch.width) {
        new Issue({
          item: shape,
          field: [["w"]],
          message: "no_matching_stock_width"
        });
      }
    }
    shape.stockMatch = null;
  }
  let unusableShapes;
  let unusableStock;
  if (!isInputs) {
    unusableShapes = shapes.filter((s) => !s.stockLock || !s.stockLock.length).sort(sorting.ID);
    unusableStock = stock.filter((s) => !allocatedStock.has(s.parentID)).sort(sorting.ID);
    stock = stock.filter((s) => isStock(s)).filter((s) => allocatedStock.has(s.parentID));
    if (someStockMaterialSet || someStockThicknessSet)
      shapes = shapes.filter((s) => {
        var _a;
        return (_a = s == null ? void 0 : s.stockLock) == null ? void 0 : _a.length;
      });
  }
  return {
    stockList: stock,
    unusableStock,
    shapeList: shapes,
    unusableShapes
  };
}
class Issue {
  constructor({
    item = null,
    message = "",
    field = [],
    index = null,
    listId = null,
    issues = null,
    type = "error",
    throwError = false,
    shouldTranslate = true
  }) {
    __publicField(this, "message");
    __publicField(this, "identifier");
    __publicField(this, "field");
    __publicField(this, "index");
    __publicField(this, "listId");
    __publicField(this, "type", "error");
    var _a, _b, _c, _d;
    this.message = shouldTranslate ? t$1(message) : message;
    this.field = field;
    this.index = index;
    this.listId = listId;
    this.type = type;
    if (item) {
      if ("name" in item && ((_a = item.name) == null ? void 0 : _a.length)) this.identifier = item.name.toLocaleUpperCase();
      else if ("id" in item && ((_b = item.id) == null ? void 0 : _b.length)) this.identifier = item.id;
      else if ("parentID" in item && ((_c = item.parentID) == null ? void 0 : _c.length)) this.identifier = item.parentID;
      else if (typeof ((_d = this == null ? void 0 : this.index) == null ? void 0 : _d[0]) === "number") this.identifier = String(this.index[0] + 1);
      if ("issues" in item && Array.isArray(item.issues)) item.issues.push(this);
    }
    if (Array.isArray(issues)) issues.push(this);
    const errorMessage = `issue created for ${getItemType(item)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (throwError) throw new Error(errorMessage);
  }
}
const fieldMap = {
  partMaterial: "material",
  stockMaterial: "material"
};
function getMappedField(f) {
  return (fieldMap == null ? void 0 : fieldMap[f]) || f;
}
function getErrors(issues) {
  if (!issues.length) return [];
  return (issues == null ? void 0 : issues.filter((i) => i.type === "error")) || [];
}
function shouldShowInputIssue(item, field, warning = false) {
  var _a;
  if (!("issues" in item) || !((_a = item.issues) == null ? void 0 : _a.length)) return false;
  const relevantIssues = item.issues.filter((i) => i.type === (warning ? "warning" : "error"));
  const result = relevantIssues.some((issue) => {
    var _a2;
    if (!((_a2 = issue.field) == null ? void 0 : _a2.length)) {
      return false;
    }
    for (let i = 0; i < issue.field.length; i++) {
      if (issue.field[i].every((val, index) => val === getMappedField(field[index]))) {
        return true;
      }
    }
    return false;
  });
  return result;
}
const convertAndValidate = ({ item, field, index, newIssues, min = null, max = null, required = false, allowZero = true, isWarning = false }) => {
  let val = get(item, field);
  if (required && (val === void 0 || val === null || val === "")) {
    new Issue({
      item,
      message: t$1("not_set", { x: userFriendlyFieldMap[field.join(".")] }),
      field: [field],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
    return null;
  }
  if (!allowZero && val === 0) {
    new Issue({
      item,
      message: t$1("greater_than", { x: userFriendlyFieldMap[field.join(".")], y: 0 }),
      field: [field],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
    return 0;
  }
  if (val === void 0 || val === null || val === "") return null;
  try {
    val = convertNumberFormat(val);
  } catch {
    handleConversionError({
      item,
      field,
      value: get(item, field),
      index,
      issues: newIssues,
      isWarning
    });
    return null;
  }
  handleMinValue({ item, field, value: val, index, issues: newIssues, min, isWarning });
  handleMaxValue({ item, field, value: val, index, issues: newIssues, max, isWarning });
  return val;
};
const handleConversionError = ({ item, field, value, index, issues, isWarning }) => {
  new Issue({
    item,
    message: t$1("not_understood", { x: field.join("."), y: value }),
    field: [field],
    index: [index],
    type: isWarning ? "warning" : "error",
    issues
  });
};
const handleMinValue = ({ item, field, value, index, issues, min, isWarning }) => {
  if (typeof value !== "number") return;
  if (typeof min !== "number") return;
  if (value < min) {
    new Issue({
      item,
      message: t$1("greater_than_or_equal", { x: userFriendlyFieldMap[field.join(".")], y: min }),
      field: [field],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues
    });
  }
};
const handleMaxValue = ({ item, field, value, index, issues, max, isWarning }) => {
  if (typeof value !== "number") return;
  if (typeof max !== "number") return;
  if (value > max) {
    new Issue({
      item,
      message: t$1("less_than_or_equal", { x: userFriendlyFieldMap[field.join(".")], y: max }),
      field: [field],
      index: [index],
      issues,
      type: isWarning ? "warning" : "error"
    });
  }
};
const banding = ({ item, index, isWarning }) => {
  const newIssues = [];
  if (!("banding" in item)) return newIssues;
  if (typeof item.banding !== "object") {
    new Issue({
      item,
      message: t$1("must_be_object", { x: "banding" }),
      field: [["banding"]],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
  }
  return newIssues;
};
const x = ({ item, index, max, isWarning }) => {
  const newIssues = [];
  if (!("x" in item)) return newIssues;
  convertAndValidate({ item, field: ["x"], index, newIssues, min: 0, max, isWarning });
  return newIssues;
};
const y = ({ item, index, max, isWarning }) => {
  const newIssues = [];
  if (!("y" in item)) return newIssues;
  convertAndValidate({ item, field: ["y"], index, newIssues, min: 0, max, isWarning });
  return newIssues;
};
const l = ({ item, index, max, isWarning }) => {
  const newIssues = [];
  if (!("l" in item)) return newIssues;
  convertAndValidate({ item, field: ["l"], index, newIssues, required: true, allowZero: false, min: 0, max, isWarning });
  return newIssues;
};
const w = ({ item, index, max, isWarning }) => {
  const newIssues = [];
  if (!("w" in item)) return newIssues;
  convertAndValidate({ item, field: ["w"], index, newIssues, required: true, allowZero: false, min: 0, max, isWarning });
  return newIssues;
};
const t = ({ item, index, max, isWarning, saw }) => {
  const newIssues = [];
  if (!("t" in item)) return newIssues;
  if ((saw == null ? void 0 : saw.cutType) === "beam" && !item.t) {
    new Issue({
      item,
      message: t$1("thickness_required_for_beam_saw"),
      field: [["t"]],
      index: [index],
      type: "error",
      issues: newIssues
    });
  }
  convertAndValidate({ item, field: ["t"], index, newIssues, allowZero: false, min: 0, max, isWarning });
  return newIssues;
};
const q = ({ item, index, isWarning }) => {
  const newIssues = [];
  if (!("q" in item)) return newIssues;
  const val = convertNumberFormat({ v: item.q });
  if (val <= 0 && (!("autoAdd" in item) || (item == null ? void 0 : item.autoAdd) === false)) {
    new Issue({
      item,
      message: t$1("greater_than_or_equal", { x: userFriendlyFieldMap["q"], y: 0 }),
      field: [["q"]],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
  }
  return newIssues;
};
const orientationLock = ({ item, index, isWarning }) => {
  const newIssues = [];
  if (!("orientationLock" in item)) return newIssues;
  if (item.orientationLock === void 0 || item.orientationLock === null || item.orientationLock === "") return newIssues;
  const val = item.orientationLock.toLowerCase();
  if (val !== "l" && val !== "w") {
    new Issue({
      item,
      message: t$1("must_be_values", { x: userFriendlyFieldMap["orientationLock"], y: "l, w" }),
      field: [["orientationLock"]],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
  }
  return newIssues;
};
const grain = ({ item, index, isWarning }) => {
  const newIssues = [];
  if (!("grain" in item)) return newIssues;
  if (item.grain === void 0 || item.grain === null || item.grain === "") return newIssues;
  const val = item.grain.toLowerCase();
  if (val !== "l" && val !== "w") {
    new Issue({
      item,
      message: t$1("must_be_values", { x: userFriendlyFieldMap["grain"], y: "l, w" }),
      field: [["grain"]],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
  }
  return newIssues;
};
const customData = ({ item, index, isWarning }) => {
  const newIssues = [];
  if (!("customData" in item)) return newIssues;
  const data = item.customData;
  if (typeof data !== "object") {
    new Issue({
      item,
      message: t$1("must_be_object", { x: userFriendlyFieldMap["customData"] }),
      field: [["customData"]],
      index: [index],
      issues: newIssues
    });
    return newIssues;
  }
  for (const key in data) {
    const value = data[key];
    if (value !== void 0 && value !== null) {
      if (!["string", "number", "boolean"].includes(typeof value)) {
        new Issue({
          item,
          message: t$1("must_be_string_number_boolean", { x: userFriendlyFieldMap["customData"] }),
          field: [["customData"]],
          index: [index],
          type: isWarning ? "warning" : "error",
          issues: newIssues
        });
      }
    }
  }
  return newIssues;
};
const partTrim = ({
  item,
  partTrim: trimValue,
  index = null,
  isWarning = false
}) => {
  const newIssues = [];
  if (!trimValue || !("l" in item) || !("w" in item) || !item.l || !item.w) return newIssues;
  const trimValueNum = convertNumberFormat({ v: trimValue });
  const l2 = convertNumberFormat({ v: item.l });
  const w2 = convertNumberFormat({ v: item.w });
  const trimmedL = l2 - trimValueNum * 2;
  const trimmedW = w2 - trimValueNum * 2;
  if (trimmedL <= 0 || trimmedW <= 0) {
    new Issue({
      item,
      message: t$1("too_much_trim", { x: "part", y: trimValueNum, z: `${trimmedL}x${trimmedW}` }),
      field: [["l"], ["w"], ["trim"]],
      index: [index],
      type: isWarning ? "warning" : "error",
      issues: newIssues
    });
  }
  return newIssues;
};
const trim = ({
  item,
  index = null,
  min = null,
  max = null,
  isWarning = false
}) => {
  const newIssues = [];
  if (!("l" in item) || !("w" in item) || !item.l || !item.w) return newIssues;
  if (!("trim" in item)) return newIssues;
  if (!isStock(item) || isStock(item) && !(item == null ? void 0 : item.trimmed)) {
    const dimensions = ["l", "w"];
    const [l2, w2] = dimensions.map((dim) => convertNumberFormat(item[dim]));
    for (const key in item.trim) {
      convertAndValidate({ item, field: ["trim", key], index, newIssues, min, max });
    }
    if (newIssues.length) return newIssues;
    if (l2 && w2 && l2 > 0 && w2 > 0) {
      const x1 = convertNumberFormat({ v: item.trim.x1 });
      const x2 = convertNumberFormat({ v: item.trim.x2 });
      const y1 = convertNumberFormat({ v: item.trim.y1 });
      const y2 = convertNumberFormat({ v: item.trim.y2 });
      const totalX = (x1 || 0) + (x2 || 0);
      const totalY = (y1 || 0) + (y2 || 0);
      if (totalX >= l2) {
        new Issue({
          item,
          message: t$1("too_much_trim", {
            x: `${userFriendlyFieldMap["x1"].toUpperCase()} + ${userFriendlyFieldMap["x2"].toUpperCase()}`,
            y: userFriendlyFieldMap.w,
            z: l2
          }),
          field: [["trim", "x1"], ["trim", "x2"]],
          index: [index],
          type: isWarning ? "warning" : "error",
          issues: newIssues
        });
      }
      if (totalY >= w2) {
        new Issue({
          item,
          message: t$1("too_much_trim", {
            x: `${userFriendlyFieldMap["y1"].toUpperCase()} + ${userFriendlyFieldMap["y2"].toUpperCase()}`,
            y: userFriendlyFieldMap.l,
            z: w2
          }),
          field: [["trim", "y1"], ["trim", "y2"]],
          index: [index],
          type: isWarning ? "warning" : "error",
          issues: newIssues
        });
      }
    }
  }
  return newIssues;
};
const stockMatch = ({
  item,
  inputStockList,
  stockType,
  partTrim: partTrim2 = 0,
  index = null,
  isWarning = false
}) => {
  var _a;
  const newIssues = [];
  if (!("q" in item) || !("l" in item) || !("w" in item) || !item.l || !item.w) return newIssues;
  if ("applyPartTrim" in item) {
    item.applyPartTrim(partTrim2, stockType);
  }
  if (item.issues.length) return newIssues;
  const matchResult = stockMatch$1([item], inputStockList, stockType);
  if (!matchResult) return newIssues;
  if ((_a = matchResult == null ? void 0 : matchResult.unusableShapes) == null ? void 0 : _a.length) {
    const s = matchResult.unusableShapes[0];
    const stockMatchData = s.stockMatch;
    if (!stockMatchData.fit) {
      new Issue({
        item,
        message: "will_not_fit",
        field: [["l"], ["w"]],
        listId: isInputShape(item) || isInputStock(item) ? [item.listId] : null,
        index: [index],
        type: isWarning ? "warning" : "error",
        issues: newIssues
      });
    }
    if (!stockMatchData.material) {
      new Issue({
        item,
        message: "no_matching_stock_material",
        field: [["material"]],
        listId: isInputShape(item) || isInputStock(item) ? [item.listId] : null,
        index: [index],
        issues: newIssues
      });
    }
    if (!stockMatchData.thickness) {
      new Issue({
        item,
        message: "no_matching_stock_thickness",
        field: [["t"]],
        listId: isInputShape(item) || isInputStock(item) ? [item.listId] : null,
        index: [index],
        issues: newIssues
      });
    }
    if (!stockMatchData.width && stockType === "linear") {
      new Issue({
        item,
        message: "no_matching_stock_width",
        field: [["w"]],
        listId: isInputShape(item) || isInputStock(item) ? [item.listId] : null,
        index: [index],
        issues: newIssues
      });
    }
  }
  return newIssues;
};
const machining = ({ item = null, index = null }) => {
  item.machining.validateEverything(item, index);
};
const validation = {
  customData,
  banding,
  partTrim,
  trim,
  x,
  y,
  l,
  w,
  t,
  q,
  orientationLock,
  grain,
  stockMatch,
  machining
};
const blankValues = [null, void 0, "none", ""];
const SawSchema = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: blankValues
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: blankValues
    },
    roll: {
      guillotine: ["w"],
      efficiency: blankValues
    },
    linear: {
      guillotine: blankValues,
      efficiency: blankValues
    }
  },
  efficiencyCompression: {
    sheet: {
      efficiency: ["y", "x"]
    },
    roll: {
      efficiency: ["x"]
    }
  },
  defaults: {
    bladeWidth: 0,
    stackHeight: 100,
    guillotine: {
      strategy: "efficiency",
      maxPhase: 0
    },
    efficiency: {
      primaryCompression: "y"
    },
    options: {
      stockSelection: "efficiency",
      minSpacing: 0,
      minSpacingDimension: {
        dimension: 0,
        minSpacing: 0
      },
      stackingMode: "identical"
    }
  }
};
function getValidCutTypeInputs(stockType) {
  var _a;
  return ((_a = SawSchema.cutTypes) == null ? void 0 : _a[stockType]) ?? blankValues;
}
function getValidCutPreferenceInputs(stockType, cutType) {
  var _a, _b;
  return ((_b = (_a = SawSchema.cutPreferences) == null ? void 0 : _a[stockType]) == null ? void 0 : _b[cutType]) ?? blankValues;
}
function getValidCutTypes(stockType) {
  var _a;
  return ((_a = SawSchema.cutTypes) == null ? void 0 : _a[stockType]) ?? [];
}
function getValidCutPreferences(stockType, cutType) {
  var _a, _b;
  return ((_b = (_a = SawSchema.cutPreferences) == null ? void 0 : _a[stockType]) == null ? void 0 : _b[cutType]) ?? [];
}
function isValidStockTypeInput(stockType) {
  return SawSchema.stockTypes.includes(stockType);
}
function isValidCutTypeInput(stockType, cutType) {
  return getValidCutTypeInputs(stockType).includes(cutType);
}
function isValidCutPreferenceInput(stockType, cutType, cutPreference) {
  return getValidCutPreferenceInputs(stockType, cutType).includes(cutPreference);
}
function createIssue(item, fields, translationKey, interpolation = {}) {
  for (const key in interpolation) {
    if (interpolation[key] === "" || interpolation[key] === null || interpolation[key] === void 0) {
      interpolation[key] = "none";
    }
  }
  if (!isSaw(item)) {
    console.error(t$1(translationKey, interpolation));
    return;
  }
  new Issue({
    item,
    field: Array.isArray(fields) ? fields.map((f) => [f]) : [[fields]],
    message: t$1(translationKey, interpolation),
    shouldTranslate: false
  });
}
class Saw {
  constructor(data, stockType) {
    __publicField(this, "bladeWidth");
    __publicField(this, "stockType");
    __publicField(this, "cutType");
    __publicField(this, "cutPreference");
    __publicField(this, "stackHeight");
    __publicField(this, "options");
    __publicField(this, "guillotineOptions");
    __publicField(this, "efficiencyOptions");
    __publicField(this, "issues");
    data = sanitiseData(data);
    this.issues = [];
    stockType = stockType ?? (data == null ? void 0 : data.stockType) ?? SawSchema.stockTypes[0];
    validateSaw(this, data, stockType);
    if (this.issues.length) return;
    this.bladeWidth = convertNumberFormat({ v: data == null ? void 0 : data.bladeWidth }) ?? SawSchema.defaults.bladeWidth;
    this.stockType = stockType ?? (data == null ? void 0 : data.stockType) ?? SawSchema.stockTypes[0];
    if (!isValidStockTypeInput(this.stockType)) {
      this.stockType = SawSchema.stockTypes[0];
    }
    this.cutType = data == null ? void 0 : data.cutType;
    if (!isValidCutTypeInput(this.stockType, this.cutType)) {
      this.cutType = getValidCutTypes(this.stockType)[0];
    }
    this.cutPreference = data == null ? void 0 : data.cutPreference;
    if (!isValidCutPreferenceInput(this.stockType, this.cutType, this.cutPreference)) {
      this.cutPreference = getValidCutPreferences(this.stockType, this.cutType)[0];
    }
    this.stackHeight = (data == null ? void 0 : data.stackHeight) ?? SawSchema.defaults.stackHeight;
    this.guillotineOptions = defaults({}, data == null ? void 0 : data.guillotineOptions, SawSchema.defaults.guillotine);
    this.efficiencyOptions = defaults({}, data == null ? void 0 : data.efficiencyOptions, SawSchema.defaults.efficiency);
    this.options = defaults({}, data == null ? void 0 : data.options, SawSchema.defaults.options);
  }
  clone() {
    const data = structuredClone(this);
    return new Saw(data);
  }
}
function validateSaw(saw, data, stockType) {
  if (valueSet(data == null ? void 0 : data.bladeWidth)) {
    data.bladeWidth = typeof data.bladeWidth === "string" ? convertNumberFormat({ v: data.bladeWidth }) : data.bladeWidth;
  }
  if (isNaN$1(data.bladeWidth) || data.bladeWidth < 0) {
    createIssue(
      saw,
      "bladeWidth",
      "saw.validation.bladeWidth.invalid",
      { width: data.bladeWidth ?? "none" }
    );
  }
  if (!isValidStockTypeInput(stockType)) {
    createIssue(
      saw,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType }
    );
    return;
  }
  if (data.cutType && !isValidCutTypeInput(stockType, data.cutType)) {
    createIssue(
      saw,
      "cutType",
      "saw.validation.cutType.invalid",
      { cutType: data.cutType, stockType }
    );
  }
  if (data.cutType && data.cutPreference && !isValidCutPreferenceInput(stockType, data.cutType, data.cutPreference)) {
    createIssue(
      saw,
      ["cutPreference", "cutType"],
      "saw.validation.cutPreference.invalid",
      {
        preference: data.cutPreference || "none",
        cutType: data.cutType || "none",
        stockType
      }
    );
  }
}
function isSaw(s) {
  return s instanceof Saw;
}
function mapLegacyCutPreference(originalCutPreference) {
  let cutType;
  let cutPreference;
  switch (originalCutPreference) {
    case "l":
    case "length":
      cutType = "guillotine";
      cutPreference = "l";
      break;
    case "w":
    case "width":
      cutType = "guillotine";
      cutPreference = "w";
      break;
    case "flex":
      cutType = "guillotine";
      cutPreference = "flex";
      break;
    case "efficiency":
      cutType = "efficiency";
      cutPreference = "none";
      break;
    case "beam":
      cutType = "beam";
      cutPreference = "l";
      break;
    default:
      cutType = null;
      cutPreference = null;
      break;
  }
  return {
    cutPreference,
    cutType
  };
}
function getBandingCornerPrice(shape, corner, price) {
  if (!cornerSides.includes(corner)) return 0;
  if (!shape.machining.corners) return 0;
  const length = getCornerLength(shape, corner);
  const lengthPrice = price * length;
  return lengthPrice;
}
function getCornerLength(shape, corner) {
  if (!cornerSides.includes(corner)) return 0;
  if (!shape.machining.corners) return 0;
  const relevantCorner = shape.machining.corners.find((c) => c.getCorner() === corner);
  if (!relevantCorner) return 0;
  const length = relevantCorner.getLength();
  return length;
}
function extrasValidation(item, extras, issues, index) {
  Object.keys(extras).forEach((key) => {
    var _a, _b;
    if (key in item) {
      if (((_a = extras[key]) == null ? void 0 : _a.min) && convertNumberFormat({ v: item[key] }) < convertNumberFormat({ v: extras[key].min })) {
        issues.push({
          index,
          message: `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be less than ${extras[key].min}.`,
          fields: [key]
        });
      } else if (((_b = extras[key]) == null ? void 0 : _b.max) && convertNumberFormat({ v: item[key] }) > convertNumberFormat({ v: extras[key].max })) {
        issues.push({
          index,
          message: `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be greater than ${extras[key].max}.`,
          fields: [key]
        });
      }
    }
  });
}
class Hole {
  constructor({ x: x2, y: y2, diameter, depth = 0, face = 0, type = null }) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "diameter");
    __publicField(this, "depth");
    __publicField(this, "face");
    __publicField(this, "valid");
    __publicField(this, "type");
    this.x = x2;
    this.y = y2;
    this.diameter = diameter;
    this.depth = depth;
    this.face = face;
    this.type = type;
  }
  getFace() {
    return faces[this.face];
  }
  getXDrawPosition(shape) {
    let position = 0;
    const x2 = convertNumberFormat({ v: this.x });
    if (shape.rot) {
      position = shape.l - convertNumberFormat({ v: this.y }) + ("x" in shape ? convertNumberFormat({ v: shape.x }) : 0);
    } else {
      position = x2 + ("x" in shape ? convertNumberFormat({ v: shape.x }) : 0);
    }
    return position;
  }
  getYDrawPosition(shape, viewingFace, stock) {
    let position = shape.rot ? convertNumberFormat({ v: this.x }) : convertNumberFormat({ v: this.y });
    position += "y" in shape ? convertNumberFormat({ v: shape.y }) : 0;
    if (viewingFace === 1)
      if (stock) {
        position = convertNumberFormat({ v: stock.w }) - position;
      } else {
        position = convertNumberFormat({ v: shape.w }) - position;
      }
    return position;
  }
  shouldShow(shape, face) {
    if (this.face === face) return true;
    if (this.isThroughShape(shape) === true) return true;
    return false;
  }
  isThroughShape(shape) {
    return !this.depth || convertNumberFormat({ v: this.depth }) >= convertNumberFormat({ v: shape.t });
  }
  getDistanceToEdge(shape) {
    const holeCenterX = this.x;
    const holeCenterY = this.y;
    const holeRadius = this.diameter / 2;
    const shapeLength = convertNumberFormat({ v: shape.getLongSide() });
    const shapeWidth = convertNumberFormat({ v: shape.getShortSide() });
    const cornerRadii = shape.machining.corners.map((c) => c.type ? c.size : 0);
    const edgeDistances = [
      {
        edge: "left",
        distance: holeCenterX - holeRadius
      },
      {
        edge: "right",
        distance: shapeLength - holeCenterX - holeRadius
      },
      {
        edge: "bottom",
        distance: shapeWidth - holeCenterY - holeRadius
      },
      {
        edge: "top",
        distance: holeCenterY - holeRadius
      }
    ];
    const cornerDistances = shape.machining.corners.map((c, index) => {
      const isLeft = index === 0 || index === 3;
      const isBottom = index < 2;
      const x2 = isLeft ? holeCenterX : shapeLength - holeCenterX;
      let y2 = null;
      if (this.face === 0) {
        y2 = isBottom ? holeCenterY : shapeWidth - holeCenterY;
      } else if (this.face === 1) {
        y2 = isBottom ? shapeWidth - holeCenterY : holeCenterY;
      }
      const distance = Math.sqrt(x2 * x2 + y2 * y2);
      return {
        c,
        distance
      };
    });
    const distanceToNearestEdge = Math.min(...edgeDistances.map((d) => d.distance));
    const distanceToNearestCorner = Math.min(...cornerDistances.map((d) => d.distance));
    const closestCornerIndex = cornerDistances.findIndex((d) => d.distance === distanceToNearestCorner);
    const closestCorner = shape.machining.corners[closestCornerIndex];
    if (closestCorner && closestCorner.type === "radius") {
      let cornerCenterX = closestCornerIndex === 0 || closestCornerIndex === 3 ? 0 : shapeLength;
      let cornerCenterY = closestCornerIndex < 2 ? 0 : shapeWidth;
      const isBottomCorner = closestCornerIndex < 2;
      const isLeftCorner = closestCornerIndex === 0 || closestCornerIndex === 3;
      cornerCenterX += isLeftCorner ? cornerRadii[closestCornerIndex] : -cornerRadii[closestCornerIndex];
      cornerCenterY += isBottomCorner ? cornerRadii[closestCornerIndex] : -cornerRadii[closestCornerIndex];
      const dx = holeCenterX - cornerCenterX;
      const isBottom = closestCornerIndex < 2;
      let y2;
      if (this.face === 0) {
        y2 = isBottom ? holeCenterY : shapeWidth - holeCenterY;
      } else if (this.face === 1) {
        y2 = isBottom ? shapeWidth - holeCenterY : holeCenterY;
      }
      const dy = y2 - cornerCenterY;
      const distanceToCornerCenter = Math.sqrt(dx * dx + dy * dy);
      const distanceToCornerEdge = cornerRadii[closestCornerIndex] - distanceToCornerCenter - holeRadius;
      let inCorrectQuadrant = false;
      if (closestCorner.index === 0) {
        inCorrectQuadrant = holeCenterX <= cornerCenterX && y2 <= cornerCenterY;
      } else if (closestCorner.index === 1) {
        inCorrectQuadrant = holeCenterX >= cornerCenterX && y2 <= cornerCenterY;
      } else if (closestCorner.index === 2) {
        inCorrectQuadrant = holeCenterX >= cornerCenterX && y2 >= cornerCenterY;
      } else if (closestCorner.index === 3) {
        inCorrectQuadrant = holeCenterX <= cornerCenterX && y2 >= cornerCenterY;
      }
      return inCorrectQuadrant && distanceToCornerEdge < distanceToNearestEdge ? distanceToCornerEdge : distanceToNearestEdge;
    } else if (closestCorner && closestCorner.type === "bevel") {
      let A, B, C;
      if (closestCorner.index === 0) {
        A = 1;
        B = 1;
        C = -closestCorner.size;
      } else if (closestCorner.index === 1) {
        A = 1;
        B = -1;
        C = -shapeLength + closestCorner.size;
      } else if (closestCorner.index === 2) {
        A = 1;
        B = 1;
        C = -shapeLength - shapeWidth + closestCorner.size;
      } else if (closestCorner.index === 3) {
        A = -1;
        B = 1;
        C = -shapeWidth + closestCorner.size;
      }
      const multiplier = closestCorner.index === 0 ? 1 : -1;
      const distanceToBevelEdge = (A * holeCenterX + B * holeCenterY + C) / Math.sqrt(A * A + B * B) * multiplier - holeRadius;
      return distanceToBevelEdge < distanceToNearestEdge ? distanceToBevelEdge : distanceToNearestEdge;
    } else {
      return distanceToNearestEdge;
    }
  }
  validate(shape, index, additionalValidation = null) {
    const issues = [];
    if (!valueSet(this.x) || !valueSet(this.y) || !valueSet(this.diameter)) {
      const issue = {
        index,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      if (!this.x) issue.fields.push("x");
      if (!this.y) issue.fields.push("y");
      if (!this.diameter) issue.fields.push("diameter");
      issues.push(issue);
    }
    if (convertNumberFormat({ v: this.diameter }) <= 0) {
      issues.push({
        index,
        message: "Diameter cannot be negative or zero.",
        fields: ["diameter"]
      });
    }
    if (convertNumberFormat({ v: this.depth }) < 0) {
      issues.push({
        index,
        message: "Depth cannot be negative.",
        fields: ["depth"]
      });
    }
    if ("t" in shape && convertNumberFormat({ v: shape.t }) > 0) {
      if (convertNumberFormat({ v: this.depth }) > convertNumberFormat({ v: shape.t })) {
        issues.push({
          index,
          message: "Depth cannot be greater than part thickness.",
          fields: ["depth"]
        });
      }
    }
    if (!("t" in shape) || !shape.t) {
      if (convertNumberFormat({ v: this.depth }) > 0) {
        issues.push({
          index,
          message: "Part thickness is not defined.",
          fields: ["depth"]
        });
      }
    }
    const distanceToEdge = this.getDistanceToEdge(shape);
    if (distanceToEdge < 0) {
      issues.push({
        index,
        message: "Outside of part."
      });
    }
    if (additionalValidation) {
      extrasValidation(this, additionalValidation, issues, index);
    }
    if (!issues.length) this.valid = true;
    else this.valid = false;
    return issues;
  }
}
class HingeHoles {
  constructor({
    position = null,
    //from left or bottom
    edge = "x1",
    face = 0,
    numHoles = null,
    diameter = 0,
    depth = 0,
    distanceFromEdge = 0,
    outerSpacing = 0,
    hingeLength = 0,
    minimumHoleDistance = 0,
    positionLimit = 0
  }, shape) {
    __publicField(this, "position");
    __publicField(this, "edge");
    __publicField(this, "face");
    __publicField(this, "numHoles");
    __publicField(this, "holes", []);
    __publicField(this, "diameter");
    __publicField(this, "depth");
    __publicField(this, "distanceFromEdge");
    //from edge to center of hole
    __publicField(this, "outerSpacing");
    //from edge to center of hole
    __publicField(this, "hingeLength");
    __publicField(this, "minimumHoleDistance");
    __publicField(this, "positionLimit");
    __publicField(this, "valid");
    this.position = position;
    this.edge = edge;
    this.face = face;
    this.numHoles = numHoles;
    this.diameter = diameter;
    this.depth = depth;
    this.distanceFromEdge = distanceFromEdge;
    this.outerSpacing = outerSpacing;
    this.hingeLength = hingeLength;
    this.minimumHoleDistance = minimumHoleDistance;
    this.positionLimit = positionLimit;
    if (shape) {
      this.createHoles(shape);
    }
  }
  getFace() {
    return faces[this.face];
  }
  getHoleSpacing() {
    const totalSpace = convertNumberFormat({ v: this.hingeLength }) - convertNumberFormat({ v: this.outerSpacing }) * 2;
    const numSpaces = this.numHoles - 1;
    const holeSpacing = totalSpace / numSpaces;
    return holeSpacing;
  }
  getHoleXPosition(shape, index) {
    let position = 0;
    const spacing = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        position = this.distanceFromEdge;
        break;
      case "x2":
        position = shape.getLongSide() - convertNumberFormat({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        position = convertNumberFormat({ v: this.position }) + convertNumberFormat({ v: this.outerSpacing }) + spacing * index;
        break;
    }
    return position;
  }
  getHoleYPosition(shape, index) {
    let position = 0;
    const spacing = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        position = convertNumberFormat({ v: this.position }) + convertNumberFormat({ v: this.outerSpacing }) + spacing * index;
        break;
      case "y1":
        position = convertNumberFormat({ v: this.distanceFromEdge });
        break;
      case "y2":
        position = shape.getShortSide() - convertNumberFormat({ v: this.distanceFromEdge });
        break;
    }
    return position;
  }
  createHoles(shape) {
    this.holes = [];
    for (let i = 0; i < this.numHoles; i++) {
      const hole = new Hole({
        x: this.getHoleXPosition(shape, i),
        y: this.getHoleYPosition(shape, i),
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      });
      this.holes.push(hole);
    }
    return this.holes;
  }
  validate(shape, index, additionalValidation = null) {
    const issues = [];
    this.holes.forEach((h, i) => {
      const holeIssues = h.validate(shape, i).map((m) => {
        m.index = index;
        m.message = `Hole ${i + 1}: ${m.message}`;
        return m;
      });
      issues.push(...holeIssues);
    });
    if (additionalValidation) {
      extrasValidation(this, additionalValidation, issues, index);
    }
    if (!issues.length) this.valid = true;
    else this.valid = false;
    return issues;
  }
}
class Corner {
  constructor({ type = "radius", size, index }) {
    __publicField(this, "type");
    __publicField(this, "size");
    __publicField(this, "index");
    __publicField(this, "valid");
    this.type = type;
    this.size = size;
    this.index = index;
  }
  getLength() {
    if (this.type === "radius") {
      return Math.PI * this.size / 2;
    } else if (this.type === "bevel") {
      return Math.sqrt(2) * this.size;
    }
    return 0;
  }
  getCorner() {
    return ["a", "b", "c", "d"][this.index];
  }
  isPresent() {
    return (this.valid === true || this.valid === void 0) && this.type !== null && this.size > 0;
  }
  validate(shape, index) {
    const shortSide = shape.getShortSide();
    const messages = [];
    if (this.type === null) {
      this.size = null;
      const corner = this.getCorner();
      shape.banding[corner] = false;
    }
    if (this.type && convertNumberFormat({ v: this.size }) <= 0) {
      messages.push({
        index,
        message: "Corner size cannot be zero or negative"
      });
    }
    if (this.type && convertNumberFormat({ v: this.size }) > shortSide / 2) {
      this.size = shortSide / 2;
    }
    if (!messages.length) this.valid = true;
    else this.valid = false;
    return messages;
  }
}
let Machining$1 = class Machining {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes = [],
    hingeHoles = [],
    corners = []
  } = {}) {
    __publicField(this, "holes", []);
    __publicField(this, "corners", []);
    __publicField(this, "hingeHoles", []);
    if (corners && corners.length === 4) {
      this.corners = corners.map((c) => new Corner(c));
    } else {
      [0, 1, 2, 3].forEach((i) => {
        this.corners.push(new Corner({
          type: null,
          size: null,
          index: i
        }));
      });
    }
    if (holes) this.holes = holes.map((h) => new Hole(h));
    if (hingeHoles)
      this.hingeHoles = hingeHoles.map((h) => new HingeHoles(h));
  }
  validateEverything(shape, index = null) {
    const holeMessages = this.validate(shape, "holes");
    const hingeHolesMessages = this.validate(shape, "hingeHoles");
    const cornersMessages = this.validate(shape, "corners");
    if (holeMessages.length) {
      new Issue({
        item: shape,
        index,
        listId: isInputShape(shape) ? [shape.listId] : null,
        message: "Issue with machining -> holes",
        field: [["machining"]]
      });
    }
    if (hingeHolesMessages.length) {
      new Issue({
        item: shape,
        index,
        listId: isInputShape(shape) ? [shape.listId] : null,
        message: "Issue with machining -> hinge holes",
        field: [["machining"]]
      });
    }
    if (cornersMessages.length) {
      new Issue({
        item: shape,
        index,
        listId: isInputShape(shape) ? [shape.listId] : null,
        message: "Issue with machining -> corners",
        field: [["machining"]]
      });
    }
  }
  validate(shape, type, additionalValidation = null) {
    if (!shape) return [];
    if (!type) return [];
    const messages = [];
    messages.push(...this.validateAll(shape, type, additionalValidation));
    return messages;
  }
  validateAll(shape, item, additionalValidation = null) {
    if (!shape) return [];
    const messages = [];
    this[item].forEach((i, index) => messages.push(...i.validate(shape, index, additionalValidation)));
    return messages;
  }
  createHole(x2, y2, diameter, depth = 0, face = 0) {
    const hole = new Hole({
      x: x2,
      y: y2,
      diameter,
      depth,
      face
    });
    this.holes.push(hole);
    return hole;
  }
  createHingeHoles({
    numHoles,
    position,
    diameter,
    depth = 0,
    edge = "x1",
    face = 0,
    distanceFromEdge = 0,
    outerSpacing = 0,
    minimumHoleDistance = 0,
    hingeLength = 0
  }) {
    const hingeHoles = new HingeHoles({
      numHoles,
      position,
      //from left or bottom
      edge,
      face,
      diameter,
      depth,
      distanceFromEdge,
      outerSpacing,
      minimumHoleDistance,
      hingeLength
    });
    this.hingeHoles.push(hingeHoles);
    return hingeHoles;
  }
  updateHingeHoles(shape) {
    this.hingeHoles.forEach((h) => h.createHoles(shape));
  }
  getAllHingeHoles(shape) {
    const holes = [];
    this.hingeHoles.forEach((h) => {
      if (h.holes.length) holes.push(...h.holes);
      else {
        h.createHoles(shape);
        holes.push(...h.holes);
      }
    });
    return holes;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (total, hingeHoles) => total + hingeHoles.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((c) => c.type !== null).length;
  }
};
function hasMachining(shape) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!shape) return false;
  if (!(shape == null ? void 0 : shape.machining)) return false;
  if ((_b = (_a = shape.machining) == null ? void 0 : _a.holes) == null ? void 0 : _b.length) return true;
  if ((_d = (_c = shape.machining) == null ? void 0 : _c.hingeHoles) == null ? void 0 : _d.length) return true;
  if ((_f = (_e = shape.machining) == null ? void 0 : _e.corners) == null ? void 0 : _f.length) {
    return (_h = (_g = shape.machining) == null ? void 0 : _g.corners) == null ? void 0 : _h.some((c) => c.type && c.size);
  }
  return false;
}
function compressMachining(shape) {
  var _a, _b, _c, _d;
  if (!("machining" in shape)) return;
  if (!hasMachining(shape)) {
    shape.machining = null;
    return;
  }
  if (!((_a = shape.machining.holes) == null ? void 0 : _a.length)) shape.machining.holes = null;
  if (!((_b = shape.machining.hingeHoles) == null ? void 0 : _b.length)) shape.machining.hingeHoles = null;
  if (!((_d = (_c = shape.machining) == null ? void 0 : _c.corners) == null ? void 0 : _d.some((c) => c.type && c.size))) shape.machining.corners = null;
}
class InputUserGroup {
  constructor(data = null) {
    __publicField(this, "id");
    //api
    __publicField(this, "listId");
    __publicField(this, "shapeListIds", []);
    __publicField(this, "shapes");
    __publicField(this, "direction");
    __publicField(this, "q");
    __publicField(this, "duplicate", false);
    __publicField(this, "issues", []);
    __publicField(this, "stockMatch");
    var _a;
    this.listId = (data == null ? void 0 : data.listId) ? data.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16);
    this.id = data == null ? void 0 : data.id;
    this.shapes = valueSet(data == null ? void 0 : data.shapes) ? data.shapes.map((s) => s.toString()) : [];
    this.shapeListIds = valueSet(data == null ? void 0 : data.shapeListIds) ? data.shapeListIds : [];
    this.direction = valueSet(data == null ? void 0 : data.direction) ? data.direction : "l";
    this.q = valueSet(data == null ? void 0 : data.q) ? data.q : 1;
    if (valueSet(data == null ? void 0 : data.shapeList) && ((_a = data.shapeList) == null ? void 0 : _a.length)) {
      this.validate(data.shapeList);
    }
  }
  validate(shapeList = []) {
    var _a, _b;
    this.issues = [];
    if (!(shapeList == null ? void 0 : shapeList.length))
      throw new Error("shapeList is required to validate user group");
    const allShapes = this.findShapes(shapeList);
    if (!allShapes.length) {
      new Issue({
        item: this,
        message: "Must have 2 or more parts."
      });
      return this.issues;
    }
    const referenceShape = allShapes[0];
    if (isShape(referenceShape)) {
      if (!(this == null ? void 0 : this.shapes) || ((_a = this.shapes) == null ? void 0 : _a.length) < 2) {
        new Issue({
          item: this,
          message: "Must have 2 or more parts."
        });
        return this.issues;
      }
    } else {
      if (!(this == null ? void 0 : this.shapeListIds) || ((_b = this.shapeListIds) == null ? void 0 : _b.length) < 2) {
        new Issue({
          item: this,
          message: "Must have 2 or more parts."
        });
        return this.issues;
      }
    }
    allShapes.forEach((s, i) => {
      if (!s.isSquare() && !["l", "w"].includes(s.orientationLock)) {
        new Issue({
          item: this,
          field: [["orientationLock"]],
          message: `Part in position ${i + 1} must have orientation lock set to be part of a group.`
        });
      }
    });
    if (this.issues.length) return this.issues;
    const joinDimension = getReverseDimension(this.direction);
    const referenceDimension = referenceShape.getTrimmedDimensions(true)[joinDimension];
    allShapes.forEach((s, i) => {
      if (s.id === referenceShape.id) return;
      const shapeDimension = s.getTrimmedDimensions(true)[joinDimension];
      if (!maths.equalTo(shapeDimension, referenceDimension)) {
        new Issue({
          item: this,
          message: `Part in position ${i + 1} final ${joinDimension === "l" ? "length" : "width"} is not correct for the group. Expected ${referenceDimension} and is ${shapeDimension}. Check the dimensions, trim & orientation lock.`
        });
      }
    });
    return this.issues;
  }
  findShapes(shapeList = []) {
    var _a, _b;
    if (!shapeList.length) return [];
    let foundShapes = [];
    if (isInputShape(shapeList[0])) {
      if (!((_a = this.shapeListIds) == null ? void 0 : _a.length)) return [];
      foundShapes = this.shapeListIds.map((s) => shapeList.find((shape) => {
        return shape.listId === s;
      })).filter((s) => s);
      if (!foundShapes.length)
        throw new Error("could not map group shapes to shape list");
      return foundShapes;
    } else {
      if (!((_b = this.shapes) == null ? void 0 : _b.length)) return [];
      const foundShapeIds = /* @__PURE__ */ new Set();
      foundShapes = this.shapes.map((s) => {
        const shape = shapeList.find((shape2) => shape2.parentID === s && !shape2.inUserGroup && !foundShapeIds.has(shape2.id));
        if (shape) {
          foundShapeIds.add(shape.id);
          return shape;
        }
        return null;
      }).filter((s) => s);
    }
    if (!foundShapes.length)
      throw new Error("could not map group shapes to shape list");
    return foundShapes;
  }
  populateParentID(shapeList) {
    var _a;
    if (!(shapeList == null ? void 0 : shapeList.length)) return;
    if (!((_a = this == null ? void 0 : this.shapeListIds) == null ? void 0 : _a.length)) return;
    this.shapes = this.shapeListIds.map((s) => {
      const index = shapeList.findIndex((shape) => shape.listId === s);
      return (index + 1).toString();
    });
  }
  //create a group from a user group
  createGroup(groupParentID = 0, groupIndex = 0, shapeList = [], stock = null) {
    if (!(shapeList == null ? void 0 : shapeList.length))
      throw new Error("some parts are required to create a user group");
    if (!isShape(shapeList[0]))
      throw new Error("shapeList must be of type Shape[]");
    const shapes = this.findShapes(shapeList);
    if (!shapes.length) return false;
    const referenceShape = shapes[0];
    shapes.forEach((s) => {
      const shapeIndex = shapeList.findIndex((sh) => !sh.inUserGroup && sh.parentID === s.parentID);
      if (shapeIndex === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      shapeList.splice(shapeIndex, 1);
      setRotationToOrientationLockWithoutContainer(s);
      s.inUserGroup = true;
    });
    let l2 = 0;
    let w2 = 0;
    if (this.direction === "l") w2 = referenceShape.w;
    else l2 = referenceShape.l;
    let group;
    try {
      const groupData = {
        id: `ug${groupParentID}.${groupIndex}`,
        shapes,
        l: l2,
        w: w2,
        t: referenceShape == null ? void 0 : referenceShape.t,
        material: referenceShape == null ? void 0 : referenceShape.material,
        // joinDimension:
        //     referenceShape.l === l ? referenceShape.l : referenceShape.w,
        direction: this.direction,
        preventAutoRotation: true,
        container: stock,
        type: "user"
      };
      group = new Group(groupData);
    } catch (err) {
      console.error(err);
      return false;
    }
    group.parentID = `ug${groupParentID}`;
    if (stock) {
      group.updateShapeSpacing(stock);
    }
    return group;
  }
}
function recreateUserGroups(userGroups, inputShapes = []) {
  if (!(userGroups == null ? void 0 : userGroups.length)) return [];
  const groups = userGroups.map((g) => new InputUserGroup(g));
  if (inputShapes.length) {
    removeNonExistantShapes(groups, inputShapes);
  }
  return groups;
}
function removeNonExistantShapes(userGroups = [], inputShapes = []) {
  if (!userGroups.length) return;
  if (!inputShapes.length) return;
  userGroups.forEach((group) => {
    group.shapeListIds = group.shapeListIds.filter((s) => {
      return inputShapes.find((shape) => shape.listId === s);
    });
  });
}
function getShapeTally(userGroups) {
  const tally = {};
  userGroups.forEach((group) => {
    group.shapeListIds.forEach((shape) => {
      const q2 = group.q || 1;
      if (tally[shape]) {
        tally[shape] += q2;
      } else {
        tally[shape] = q2;
      }
    });
  });
  return tally;
}
function validateUserGroups(userGroups, shapeList, validateGroups = true) {
  const tally = getShapeTally(userGroups);
  const issues = [];
  for (const listId in tally) {
    const tallyQuantity = tally[listId];
    const inputShapeIndex = shapeList.findIndex((s) => s.listId === listId);
    if (inputShapeIndex < 0) {
      new Issue({
        message: "Cannot find at least one part in the list.",
        issues
      });
    }
    const inputShape = shapeList[inputShapeIndex];
    if (!(inputShape == null ? void 0 : inputShape.q) || tallyQuantity > inputShape.q) {
      new Issue({
        message: `Not enough of part ${(inputShape == null ? void 0 : inputShape.name) ? inputShape.name : inputShapeIndex + 1} to form groups - ${tallyQuantity} needed, ${inputShape.q ?? 0} found.`,
        issues
      });
    }
  }
  if (validateGroups) {
    userGroups.forEach((group) => {
      const groupIssues = group.validate(shapeList);
      if (groupIssues == null ? void 0 : groupIssues.length) issues.push(...groupIssues);
    });
  }
  return issues;
}
const mainSides = ["y1", "y2", "x1", "x2"];
const cornerSides = ["a", "b", "c", "d"];
const allSides = [...mainSides, ...cornerSides];
const faces = ["a", "b"];
function isCornerSide(side) {
  return cornerSides.includes(side);
}
function isSide(side) {
  return allSides.includes(side);
}
const userFriendlyFieldMap = {
  x: "x",
  y: "y",
  l: "length",
  w: "width",
  t: "thickness",
  q: "quantity",
  orientationLock: "rotation",
  name: "name",
  material: "material",
  banding: "banding",
  finish: "finish",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  all: "all"
};
function getMainSidesArray(sides) {
  return mainSides.map((side) => sides[side] ?? null);
}
function sanitiseData(object) {
  if (!valueSet(object) || typeof object !== "object") return {};
  object = { ...object };
  for (const [key, value] of Object.entries(object)) {
    if (key === "_id") continue;
    if (key.startsWith("_")) {
      object[key.substring(1)] = value;
      delete object[key];
    }
  }
  return object;
}
function recreateStockList({
  stockList,
  removeScores = false,
  saw = null,
  preventAutoRotation = false,
  preventGrainRotation = false
}) {
  if (!stockList || !(stockList == null ? void 0 : stockList.length)) return [];
  return stockList.filter((s) => s).map((s) => {
    if (preventAutoRotation) s.preventAutoRotation = true;
    if (preventGrainRotation) s.preventGrainRotation = true;
    const stock = new Stock(s, saw);
    if (stock.issues.length) {
      throw new Error(
        `Issues found when attempting to recreate stock list - ${stock.issues.map((i) => i.message).join()}`,
        { cause: stock.issues }
      );
    }
    if (removeScores) delete stock.algoBenchmark;
    return stock;
  }).sort(sorting.ID);
}
function recreateShapeList({
  shapeList,
  stockList,
  preventAutoRotation = false
}) {
  if (typeof stockList === "undefined")
    throw new Error("recreateShapeList requires stockList");
  if (!shapeList || !(shapeList == null ? void 0 : shapeList.length)) return [];
  return shapeList.filter((s) => s).map((s) => {
    var _a;
    if (preventAutoRotation) s.preventAutoRotation = true;
    let shape;
    if (isGroupData(s) && ((_a = s == null ? void 0 : s.shapes) == null ? void 0 : _a.length)) {
      s.shapes = s.shapes.map((shapeData) => new Shape(shapeData));
      try {
        shape = new Group(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else {
      shape = new Shape(s);
    }
    if (shape.issues.length) {
      throw new Error(`Issues found when attempting to recreate shape list - ${shape.issues.map((i) => i.message).join(", ")}`);
    }
    const stock = stockList.find((stock2) => {
      var _a2;
      return stock2.id === (((_a2 = s == null ? void 0 : s.stock) == null ? void 0 : _a2.id) ?? (s == null ? void 0 : s.stockId));
    });
    shape.stock = stock;
    return shape;
  }).sort(sorting.ID);
}
function recreateCutList({
  cutList,
  stockList
}) {
  if (typeof stockList === "undefined")
    throw new Error("recreateCutList requires stockList");
  if (!cutList || !(cutList == null ? void 0 : cutList.length)) return [];
  return cutList.map((cutObject) => {
    const cut = new Cut(cutObject);
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = cutObject == null ? void 0 : cutObject.stock) == null ? void 0 : _a.id) ?? (cutObject == null ? void 0 : cutObject.stockId));
    });
    cut.stock = stock;
    return cut;
  });
}
function recreateSegmentList({
  segmentList,
  stockList
}) {
  if (!segmentList || !(segmentList == null ? void 0 : segmentList.length)) return [];
  return segmentList.map((segmentObject) => {
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = segmentObject == null ? void 0 : segmentObject.stock) == null ? void 0 : _a.id) ?? (segmentObject == null ? void 0 : segmentObject.stockId));
    });
    segmentObject.stock = stock;
    const segment = new Segment(segmentObject);
    return segment;
  });
}
function processValue(data, key, numberFormat = "decimal", parseLocale = false) {
  return valueSet(data == null ? void 0 : data[key]) ? convertNumberFormat({ v: data[key], nf: numberFormat, pl: parseLocale }) : null;
}
class InputStock {
  constructor(data, numberFormat = "decimal", parseLocale = false) {
    __publicField(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    __publicField(this, "warningKeys", ["q"]);
    __publicField(this, "issueKeys", ["l", "w", "t", "trim"]);
    __publicField(this, "readonly");
    __publicField(this, "id");
    __publicField(this, "listId");
    __publicField(this, "l");
    __publicField(this, "w");
    __publicField(this, "t");
    __publicField(this, "q");
    __publicField(this, "name");
    __publicField(this, "material");
    __publicField(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    __publicField(this, "cost", null);
    __publicField(this, "grain", "");
    __publicField(this, "selected", false);
    //used for multiple editing
    __publicField(this, "multiEdit", false);
    //is this the multi-select stock
    // type: StockType = null;
    __publicField(this, "autoAdd", false);
    __publicField(this, "used");
    __publicField(this, "saw");
    __publicField(this, "preventGrainRotation");
    __publicField(this, "allowExactFitShapes");
    __publicField(this, "issues", []);
    __publicField(this, "warnings", []);
    __publicField(this, "notes", "");
    var _a, _b;
    data = sanitiseData(data);
    this.readonly = data.readonly;
    this.id = data.id;
    this.listId = (data == null ? void 0 : data.listId) ? data.listId : Date.now().toString() + v4();
    const keys = ["l", "w", "t"];
    keys.forEach((key) => {
      this[key] = processValue(data, key, numberFormat, parseLocale);
    });
    this.q = valueSet(data == null ? void 0 : data.q) ? isNaN$1(toNumber(data.q)) ? null : toNumber(data.q) : null;
    this.autoAdd = valueSet(data.autoAdd) ? data.autoAdd : false;
    this.name = valueSet(data.name) ? sanitiseString(data.name).toUpperCase() : "";
    this.material = valueSet(data.material) ? data.material.trim().toUpperCase() : "";
    const trimKeys = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    };
    trimKeys.forEach((key) => {
      this.trim[key] = processValue(data.trim, key, numberFormat, parseLocale);
    });
    this.cost = valueSet(data.cost) ? data.cost : null;
    data.grain = (_a = data == null ? void 0 : data.grain) == null ? void 0 : _a.toLowerCase();
    if ((data == null ? void 0 : data.grain) === " ") {
      data.grain = "";
    }
    this.grain = data.grain;
    this.grain = valueSet(data.grain) ? ["l", "w"].includes(data.grain.toLowerCase()) ? data.grain.toLowerCase() : "" : "";
    this.multiEdit = data.multiEdit;
    this.allowExactFitShapes = valueSet(data == null ? void 0 : data.allowExactFitShapes) ? data.allowExactFitShapes : false;
    this.preventGrainRotation = true;
    this.notes = (data == null ? void 0 : data.notes) ? (_b = data.notes) == null ? void 0 : _b.replace(/,/g, " ") : "";
  }
  //change the type of stock
  changeType(newType) {
    if (newType !== "sheet") this.grain = "";
    switch (newType) {
      case "linear":
        this.trim.y1 = 0;
        this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0;
        this.trim.x2 = 0;
        this.trim.y1 = 0;
        this.trim.y2 = 0;
        this.t = null;
        break;
    }
  }
  createId(index, secondaryIndex = 0) {
    this.id = `${index + 1}.${secondaryIndex}`;
  }
  isSquare() {
    isSquare(this);
  }
  validate(saw) {
    this.issues = [];
    ["l", "w", "t"].forEach((key) => validation[key]({ item: this, saw }));
    validation.trim({ item: this });
    ["q"].forEach((key) => validation[key]({ item: this, isWarning: true }));
    this.issues = this.issues.filter((i) => i);
    return this.issues;
  }
}
class InputShape {
  constructor(data, numberFormat = "decimal", parseLocale = false) {
    __publicField(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    __publicField(this, "readonly");
    __publicField(this, "id");
    __publicField(this, "listId");
    // numberFormat: NumberFormat = 'decimal';
    __publicField(this, "l");
    __publicField(this, "w");
    __publicField(this, "t");
    __publicField(this, "q", 1);
    __publicField(this, "name", "");
    __publicField(this, "material", "");
    __publicField(this, "cost");
    __publicField(this, "orientationLock");
    __publicField(this, "selectedMaterial");
    __publicField(this, "selected", false);
    //used for multiple editing
    __publicField(this, "multiEdit", false);
    __publicField(this, "issues", []);
    __publicField(this, "notes", "");
    __publicField(this, "stockLock");
    __publicField(this, "stockMatch");
    __publicField(this, "customData");
    //objects
    __publicField(this, "machining");
    __publicField(this, "trim", Object.fromEntries(
      mainSides.map((side) => [side, 0])
    ));
    __publicField(this, "banding", Object.fromEntries(
      allSides.map((side) => [side, false])
    ));
    __publicField(this, "bandingOptions", Object.fromEntries([
      ...allSides,
      "all"
    ].map((side) => [side, {}])));
    __publicField(this, "finish", Object.fromEntries(
      faces.map((face) => [face, ""])
    ));
    __publicField(this, "finishOptions", Object.fromEntries(
      faces.map((face) => [face, {}])
    ));
    var _a, _b, _c, _d, _e;
    data = data = sanitiseData(data);
    this.readonly = data.readonly;
    this.id = data.id;
    this.listId = (data == null ? void 0 : data.listId) ? data.listId : Date.now().toString() + v4();
    const keys = ["l", "w", "t"];
    keys.forEach((key) => {
      this[key] = processValue(data, key, numberFormat, parseLocale);
    });
    this.q = valueSet(data == null ? void 0 : data.q) ? isNaN$1(toNumber(data.q)) ? null : toNumber(data.q) : null;
    this.name = valueSet(data.name) ? sanitiseString(data.name).toUpperCase() : "";
    this.material = valueSet(data.material) ? data.material.trim().toUpperCase() : "";
    this.multiEdit = data.multiEdit;
    this.notes = (data == null ? void 0 : data.notes) ? (_a = data.notes) == null ? void 0 : _a.replace(/,/g, " ") : "";
    this.stockLock = (data == null ? void 0 : data.stockLock) ?? [];
    for (const key of Object.keys(this.trim)) {
      this.trim[key] = processValue(data.trim, key, numberFormat, parseLocale);
    }
    for (const key of Object.keys(this.banding)) {
      this.banding[key] = valueSet((_b = data == null ? void 0 : data.banding) == null ? void 0 : _b[key]) ? data.banding[key] : false;
    }
    for (const key of Object.keys(this.bandingOptions)) {
      this.bandingOptions[key] = valueSet((_c = data == null ? void 0 : data.bandingOptions) == null ? void 0 : _c[key]) ? data.bandingOptions[key] : {};
    }
    for (const key of Object.keys(this.finish)) {
      this.finish[key] = valueSet((_d = data == null ? void 0 : data.finish) == null ? void 0 : _d[key]) ? data.finish[key] : "";
    }
    for (const key of Object.keys(this.finishOptions)) {
      this.finishOptions[key] = valueSet((_e = data == null ? void 0 : data.finishOptions) == null ? void 0 : _e[key]) ? data.finishOptions[key] : {};
    }
    this.orientationLock = valueSet(data.orientationLock) ? ["l", "w"].includes(data.orientationLock.toLowerCase()) ? data.orientationLock.toLowerCase() : "" : "";
    this.machining = new Machining$1(data.machining ?? {
      holes: [],
      hingeHoles: [],
      corners: []
    });
    this.customData = (data == null ? void 0 : data.customData) ?? {};
  }
  isSquare() {
    if (this.l === this.w) return true;
    return false;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(newType) {
    switch (newType) {
      case "sheet":
      case "roll":
        this.orientationLock = "";
        if (newType === "roll") this.t = null;
        break;
      case "linear":
        this.orientationLock = "";
        this.banding = Object.fromEntries(
          allSides.map((side) => [side, false])
        );
        break;
    }
  }
  createId(index, secondaryIndex = 0) {
    this.id = `${index + 1}.${secondaryIndex}`;
  }
  getLongSide() {
    return convertNumberFormat({ v: this.l }) > convertNumberFormat({ v: this.w }) ? convertNumberFormat({ v: this.l }) : convertNumberFormat({ v: this.w });
  }
  getShortSide() {
    return convertNumberFormat({ v: this.l }) < convertNumberFormat({ v: this.w }) ? convertNumberFormat({ v: this.l }) : convertNumberFormat({ v: this.w });
  }
  getRotatedDimensions() {
    if (["l", "w"].includes(this.orientationLock)) {
      return {
        name: this.name,
        listId: this.listId,
        l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
        w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
        orientationLock: this.orientationLock
      };
    }
    return {
      name: this.name,
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getTrimmedDimensions(rotated = false) {
    let dimensions = { l: convertNumberFormat({ v: this.l }), w: convertNumberFormat({ v: this.w }) };
    if (rotated) dimensions = this.getRotatedDimensions();
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: dimensions.l - (convertNumberFormat({ v: this.trim.x1 }) + convertNumberFormat({ v: this.trim.x2 })),
      w: dimensions.w - (convertNumberFormat({ v: this.trim.y1 }) + convertNumberFormat({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(partTrim2, stockType) {
    if (this.readonly) return;
    partTrim2 = convertNumberFormat({ v: partTrim2 });
    if (this.trim) {
      for (const key in this.trim) {
        this.trim[key] = partTrim2;
      }
      if (stockType === "linear") {
        this.trim.y1 = 0;
        this.trim.y2 = 0;
      }
    } else {
      this.trim = {
        x1: partTrim2,
        x2: partTrim2,
        y1: stockType !== "linear" ? partTrim2 : 0,
        y2: stockType !== "linear" ? partTrim2 : 0
      };
    }
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  validate({
    inputStockList = [],
    index = null,
    stockType = null,
    partTrim: partTrim2 = 0,
    useInventory = false,
    saw = null
  }) {
    this.issues = [];
    ["l", "w", "t"].forEach((key) => validation[key]({ item: this, index, saw }));
    partTrim2 = convertNumberFormat({ v: partTrim2 });
    validation.partTrim({ item: this, partTrim: partTrim2, index });
    validation.trim({ item: this, index });
    validation.machining({ item: this, index });
    ["q"].forEach((key) => {
      validation[key]({ item: this, index, isWarning: true });
    });
    if (inputStockList.length && !useInventory) {
      validation.stockMatch({ item: this, inputStockList, stockType, partTrim: partTrim2, index, isWarning: true });
    }
    this.issues = this.issues.filter((i) => i);
    return this.issues;
  }
}
class Rectangle {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "parentID");
    __publicField(this, "name");
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "l");
    __publicField(this, "w");
    __publicField(this, "t");
    __publicField(this, "q");
    __publicField(this, "material");
    __publicField(this, "grain");
    __publicField(this, "orientationLock");
    __publicField(this, "duplicate");
    __publicField(this, "trimmed");
    __publicField(this, "preventAutoRotation");
    __publicField(this, "preventGrainRotation");
    __publicField(this, "numberFormat");
    __publicField(this, "issues", []);
    __publicField(this, "stock");
    __publicField(this, "stockId");
    //used when object is compressed
    __publicField(this, "cost");
    __publicField(this, "offcut");
    __publicField(this, "notes");
    //for user notes
    __publicField(this, "proximity");
    //objects
    __publicField(this, "_trim", Object.fromEntries(
      mainSides.map((side) => [side, 0])
    ));
    __publicField(this, "customData");
    this.initRectangle(data);
  }
  validateRectangle(data) {
    this.issues = [];
    const newIssues = [];
    ["x", "y", "l", "w", "t"].forEach((key) => newIssues.push(...validation[key]({ item: data })));
    this.issues.push(...validation.customData({ item: data }));
    this.issues.push(...newIssues.filter((i) => i));
  }
  initRectangle(data, update = false) {
    var _a, _b, _c;
    if (!update) {
      this.validateRectangle(data);
      this.id = valueSet(data.id) ? data.id.toString() : this.id || null;
      this.setParentID();
      if (valueSet(data == null ? void 0 : data.q)) {
        if (typeof data.q === "string") {
          this.q = parseInt(data.q);
        } else {
          this.q = data.q;
        }
      } else {
        this.q = 0;
      }
      this.name = valueSet(data.name) && ((_a = data == null ? void 0 : data.name) == null ? void 0 : _a.length) ? (_b = truncateString(sanitiseString(data == null ? void 0 : data.name))) == null ? void 0 : _b.toUpperCase() : null;
      if (valueSet(data == null ? void 0 : data.cost)) {
        if (typeof data.cost === "string") {
          this.cost = parseFloat(data.cost);
        } else if (typeof data.cost === "number") {
          this.cost = data.cost;
        }
      } else {
        this.cost = 0;
      }
      this.material = valueSet(data.material) ? data.material.trim().toLowerCase() : null;
      this.duplicate = valueSet(data == null ? void 0 : data.duplicate) ? data.duplicate : false;
      this.grain = typeof data.grain !== "undefined" && valueSet(data == null ? void 0 : data.grain) ? data.grain.toLowerCase() : null;
      this.trimmed = valueSet(data == null ? void 0 : data.trimmed) ? data.trimmed : false;
      this.offcut = valueSet(data == null ? void 0 : data.offcut) ? data.offcut : false;
      this.notes = typeof (data == null ? void 0 : data.notes) === "string" && data.notes.length ? data.notes.replace(/,/g, "").substring(0, 200) : "";
      this.customData = (data == null ? void 0 : data.customData) ?? {};
      this.proximity = {
        rectangle: null,
        distance: null
      };
      try {
        this.trim = (data == null ? void 0 : data.trim) || (data == null ? void 0 : data._trim);
      } catch (error) {
        if ((_c = error == null ? void 0 : error.cause) == null ? void 0 : _c.issues) this.issues.push(...error.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(error)}`);
      }
    }
    const unitBasedValues = [
      {
        key: "x",
        default: 0,
        required: false
      },
      {
        key: "y",
        default: 0,
        required: false
      },
      {
        key: "l",
        default: null,
        required: true
      },
      {
        key: "w",
        default: 1,
        //for linear
        required: true
      },
      {
        key: "t",
        default: null,
        required: false
      }
    ];
    unitBasedValues.forEach((item) => {
      let value = data[item.key];
      if (!valueSet(value)) {
        return this[item.key] = this[item.key] || item.default;
      }
      if (typeof value === "string") value = convertNumberFormat({ v: value });
      this[item.key] = value;
    });
    if (!(data == null ? void 0 : data.preventAutoRotation) && !data.trimmed && this.w > this.l) {
      [this.l, this.w] = [this.w, this.l];
      if (this.grain && !(data == null ? void 0 : data.preventGrainRotation))
        this.grain = getReverseDimension(this.grain);
    }
    if (valueSet(data == null ? void 0 : data.stock)) {
      if (isStock(data.stock)) {
        this.stock = data.stock;
      } else {
        this.stock = new Stock(data.stock);
      }
      this.stockId = this.stock.id;
    }
  }
  updateRectangle(data) {
    data.preventAutoRotation = true;
    this.initRectangle(data, true);
  }
  set trim(val) {
    this._trim = Object.fromEntries(
      mainSides.map((side) => [side, 0])
    );
    if (!objectValuesPresent(val, true)) return;
    for (const side of mainSides) {
      let value;
      if (typeof val[side] === "string") {
        try {
          value = convertNumberFormat({ v: val[side] });
        } catch {
          value = 0;
          new Issue({ item: this, field: [["trim", side]], message: `${val[side] ?? "N/A"} is not a valid value for trim: ${side}` });
        }
      } else {
        value = val[side];
      }
      this._trim[side] = value;
    }
  }
  get trim() {
    return this._trim;
  }
  get rot() {
    return this.w > this.l ? 1 : 0;
  }
  setParentID() {
    this.parentID = this.getParentID();
  }
  getParentID() {
    if (!this.id) return null;
    if (this.parentID) return this.parentID;
    if (typeof this.id !== "number" && this.id.includes(".")) {
      return this.id.split(".")[0];
    } else if (typeof this.id !== "number" && !this.id.includes(".")) {
      return null;
    } else return (this == null ? void 0 : this.id) ? this.id.toString() : null;
  }
  getCopyNumber() {
    if (typeof this.id !== "number" && this.id.includes(".")) {
      return parseInt(this.id.split(".")[1]);
    }
    return 0;
  }
  dimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getRotatedDimensions() {
    if (["l", "w"].includes(this.orientationLock)) {
      return {
        l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
        w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
        orientationLock: this.orientationLock
      };
    }
    return {
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  coords() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  hasCoords(x2, y2) {
    if (this.x === x2 && this.y === y2) return true;
    return false;
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  getPerimeter() {
    return this.w * 2 + this.l * 2;
  }
  getLongSide() {
    return this.l > this.w ? this.l : this.w;
  }
  getShortSide() {
    return this.l < this.w ? this.l : this.w;
  }
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  getSide(side) {
    switch (side) {
      case "bottom":
        return new Line({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Line({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Line({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Line({
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left"
          // parentID: this.id
        });
    }
  }
  getTopPosition(addBladeWidth = true, bladeWidth = null) {
    var _a;
    if (addBladeWidth && typeof ((_a = this.stock) == null ? void 0 : _a.getBladeWidth) === "undefined" && bladeWidth === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return addBladeWidth ? this.y + this.w + ((this.stock.getBladeWidth() || bladeWidth) ?? 0) : this.y + this.w;
  }
  getRightPosition(addBladeWidth = true, bladeWidth = null) {
    var _a;
    if (addBladeWidth && typeof ((_a = this.stock) == null ? void 0 : _a.getBladeWidth) === "undefined" && bladeWidth === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return addBladeWidth ? this.x + this.l + ((this.stock.getBladeWidth() || bladeWidth) ?? 0) : this.x + this.l;
  }
  getBottomPosition(addBladeWidth = true, bladeWidth = null) {
    var _a;
    if (addBladeWidth && typeof ((_a = this.stock) == null ? void 0 : _a.getBladeWidth) === "undefined" && bladeWidth === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return addBladeWidth ? this.y - ((this.stock.getBladeWidth() || bladeWidth) ?? 0) : this.y;
  }
  getLeftPosition(addBladeWidth = true, bladeWidth = null) {
    var _a;
    if (addBladeWidth && typeof ((_a = this.stock) == null ? void 0 : _a.getBladeWidth) === "undefined" && bladeWidth === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return addBladeWidth ? this.x - ((this.stock.getBladeWidth() || bladeWidth) ?? 0) : this.x;
  }
  sharesSide(rectangle, bladeWidth = 0, side = null) {
    switch (side) {
      case "left":
        return rectangle.x + rectangle.l + bladeWidth === this.x;
      case "right":
        return rectangle.x === this.x + this.l + bladeWidth;
      case "bottom":
        return rectangle.y + rectangle.w + bladeWidth === this.y;
      case "top":
        return rectangle.y === this.y + this.w + bladeWidth;
    }
    return false;
  }
  sameSide(rectangle, side = null) {
    switch (side) {
      case "left":
        return rectangle.x === this.x;
      case "right":
        return rectangle.x + rectangle.l === this.x + this.l;
      case "bottom":
        return rectangle.y === this.y;
      case "top":
        return rectangle.y + rectangle.w === this.y + this.w;
    }
    return false;
  }
  //considers if the shape can rotate
  getLongestDimension(dimension) {
    if (this.orientationLock) return this[dimension];
    else return this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(container, getAll = false) {
    const bottomRight = new Point(this.x + this.l, this.y);
    bottomRight.corner = "bottomRight";
    const topLeft = new Point(this.x, this.y + this.w);
    topLeft.corner = "topLeft";
    if ((container == null ? void 0 : container.cutType) !== "efficiency" && !getAll) {
      return [topLeft, bottomRight];
    }
    const bottomLeft = new Point(this.x, this.y);
    bottomLeft.corner = "bottomLeft";
    const topRight = new Point(this.x + this.l, this.y + this.w);
    topRight.corner = "topRight";
    return [bottomLeft, topLeft, topRight, bottomRight];
  }
  getCorners() {
    return {
      bottomLeft: new Point(this.x, this.y),
      topLeft: new Point(this.x, this.y + this.w),
      topRight: new Point(this.x + this.l, this.y + this.w),
      bottomRight: new Point(this.x + this.l, this.y)
    };
  }
  round() {
    return {
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getClass() {
    return this.constructor.name;
  }
  getTrimmedDimensions(rotated = false) {
    let dimensions = { l: this.l, w: this.w };
    if (rotated) {
      dimensions = this.getRotatedDimensions();
    }
    if (!this.trimmed) {
      return {
        l: dimensions.l - (this.trim.x1 + this.trim.x2),
        w: dimensions.w - (this.trim.y1 + this.trim.y2)
      };
    }
    return dimensions;
  }
  //trim the rectangle
  trimDimensions() {
    var _a, _b, _c, _d;
    if (this.trimmed) return false;
    if (!this.l || !this.w) return false;
    if (this.trim && Object.values(this.trim).filter((value) => !isNaN$1(parseFloat(String(value)))).length) {
      if (valueSet(this.l)) {
        this.l -= (valueSet((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) ? this.trim.x1 : 0) + (valueSet((_b = this == null ? void 0 : this.trim) == null ? void 0 : _b.x2) ? this.trim.x2 : 0);
        if (this.l <= 0) {
          new Issue({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" });
        }
      }
      if (valueSet(this.w)) {
        this.w -= (valueSet((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.y1) ? this.trim.y1 : 0) + (valueSet((_d = this == null ? void 0 : this.trim) == null ? void 0 : _d.y2) ? this.trim.y2 : 0);
        if (this.w <= 0) {
          new Issue({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" });
        }
      }
    }
    this.trimmed = true;
    return true;
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var _a, _b, _c, _d;
    if (!this.trimmed) return;
    this.l += (typeof ((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) === "number" ? this.trim.x1 : 0) + (typeof ((_b = this == null ? void 0 : this.trim) == null ? void 0 : _b.x2) === "number" ? this.trim.x2 : 0);
    this.w += (typeof ((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.y1) === "number" ? this.trim.y1 : 0) + (typeof ((_d = this == null ? void 0 : this.trim) == null ? void 0 : _d.y2) === "number" ? this.trim.y2 : 0);
    if (this.l <= 0)
      throw new Error(`trimming this ${this.id} has produced a negative length`);
    if (this.w <= 0)
      throw new Error(`trimming this ${this.id} has produced a negative width`);
    this.trimmed = false;
  }
  getUntrimmedDimensions() {
    var _a, _b, _c, _d;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const l2 = this.getLongSide();
    const w2 = this.getShortSide();
    return {
      l: l2 + (typeof ((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) === "number" ? this.trim.x1 : 0) + (typeof ((_b = this == null ? void 0 : this.trim) == null ? void 0 : _b.x2) === "number" ? this.trim.x2 : 0),
      w: w2 + (typeof ((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.y1) === "number" ? this.trim.y1 : 0) + (typeof ((_d = this == null ? void 0 : this.trim) == null ? void 0 : _d.y2) === "number" ? this.trim.y2 : 0)
    };
  }
  isIdentical(rectangle, matchParentId = false) {
    if (this.constructor !== rectangle.constructor) {
      return false;
    }
    if (this.t !== rectangle.t || this.orientationLock !== rectangle.orientationLock) {
      return false;
    }
    if (!isGroup(this)) {
      if (rectangle.parentID === this.parentID) return true;
      else if (isShape(this) && matchParentId && this.parentID !== rectangle.parentID) return false;
    } else {
      if (rectangle.id === this.id) return true;
    }
    const { w: w1, l: l1 } = this;
    const { w: w2, l: l2 } = rectangle;
    if (!(w1 === w2 && l1 === l2) && !(w1 === l2 && l1 === w2)) {
      return false;
    }
    const thisTrim = this.trim;
    const rectTrim = rectangle.trim;
    if (!thisTrim || !rectTrim) {
      return thisTrim === rectTrim;
    }
    return thisTrim.x1 === rectTrim.x1 && thisTrim.x2 === rectTrim.x2 && thisTrim.y1 === rectTrim.y1 && thisTrim.y2 === rectTrim.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    if (this.l === this.w) return true;
    return false;
  }
  getDistancesToContainerEdges(container) {
    return [
      this.x - container.x,
      container.l - (this.x + this.l),
      container.w - (this.y + this.w),
      this.y - container.y
    ];
  }
  isInsideStock(stock) {
    if (this.x + this.l > stock.l) return false;
    if (this.y + this.w > stock.w) return false;
    if (this.x < 0) return false;
    if (this.y < 0) return false;
    return true;
  }
  /**
  * Creates or retrieves a cached rectangle used for proximity detection.
  * Optimized for frequent calls with the same distance parameter.
  */
  getProximityRectangle(distance) {
    if (!distance || distance < 0) return null;
    const cache = this.proximity;
    if ((cache == null ? void 0 : cache.distance) === distance) {
      const rect = cache.rectangle;
      if (this.x === 0) {
        rect.x = 0;
        rect.l = this.l + distance;
      } else {
        rect.x = this.x - distance;
        rect.l = this.l + distance * 2;
      }
      if (this.y === 0) {
        rect.y = 0;
        rect.w = this.w + distance;
      } else {
        rect.y = this.y - distance;
        rect.w = this.w + distance * 2;
      }
      return rect;
    }
    const proxRect = new Rectangle({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: this.x === 0 ? 0 : this.x - distance,
      y: this.y === 0 ? 0 : this.y - distance,
      l: this.x === 0 ? this.l + distance : this.l + distance * 2,
      w: this.y === 0 ? this.w + distance : this.w + distance * 2,
      preventAutoRotation: true
    });
    this.proximity = { rectangle: proxRect, distance };
    return proxRect;
  }
  isShape() {
    return isShape(this);
  }
  isSegment() {
    return isSegment(this);
  }
  isStock() {
    return isStock(this);
  }
  isGroup() {
    return isGroup(this);
  }
  isUserGroup() {
    return isUserGroup(this);
  }
}
class Container extends Rectangle {
  //used by evo
  constructor(data, saw) {
    var _a, _b;
    super(data);
    // type: StockType;
    __publicField(this, "shapes", []);
    __publicField(this, "saw");
    __publicField(this, "algoBenchmark");
    this.shapes = data.shapes;
    if (!["sheet", "linear", "roll", null, void 0, ""].includes((_a = data == null ? void 0 : data.saw) == null ? void 0 : _a.stockType)) {
      new Issue({ item: this, field: [["type"]], message: `Container type ${((_b = data == null ? void 0 : data.saw) == null ? void 0 : _b.stockType) ?? "N/A"} is not valid`, shouldTranslate: false });
    }
    this.setSaw(data, saw);
    switch (this.cutType) {
      case "beam":
        if (!valueSet(this.t) || this.t <= 0) {
          new Issue({ item: this, message: "Stock for beam saws must have a thickness set" });
        }
        break;
    }
  }
  setSaw(data, saw) {
    var _a, _b, _c, _d;
    if (!data && !saw) return;
    if (!saw) {
      if (!valueSet(data == null ? void 0 : data.saw)) {
        data.saw = {};
        const { cutType, cutPreference } = mapLegacyCutPreference(data.cutPreference);
        data.saw.cutType = cutType;
        data.saw.cutPreference = cutPreference;
        if (valueSet(data == null ? void 0 : data.bladeWidth))
          data.saw.bladeWidth = data.bladeWidth;
        if (valueSet((_a = data == null ? void 0 : data.blade) == null ? void 0 : _a.width))
          data.saw.bladeWidth = data.blade.width;
        if (valueSet(data == null ? void 0 : data.efficiencyOptions))
          data.saw.efficiencyOptions = data.efficiencyOptions;
        if (valueSet(data == null ? void 0 : data.guillotineOptions))
          data.saw.guillotineOptions = data.guillotineOptions;
        if (valueSet(data == null ? void 0 : data.stackHeight))
          data.saw.stackHeight = data.stackHeight;
      } else {
        if (!((_b = data == null ? void 0 : data.saw) == null ? void 0 : _b.cutType)) {
          const { cutType, cutPreference } = mapLegacyCutPreference(data.saw.cutPreference);
          data.saw.cutType = cutType;
          data.saw.cutPreference = cutPreference;
        }
      }
    }
    try {
      const sawData = saw ?? (data == null ? void 0 : data.saw);
      if (sawData) {
        if (isSaw(sawData)) {
          this.saw = sawData;
        } else {
          this.saw = new Saw(sawData);
        }
      }
      if ((_d = (_c = this.saw) == null ? void 0 : _c.issues) == null ? void 0 : _d.length) this.issues.push(...this.saw.issues);
    } catch (error) {
      throw new Error("error creating saw", { cause: error });
    }
  }
  get cutType() {
    var _a, _b, _c, _d;
    if (valueSet((_a = this == null ? void 0 : this.saw) == null ? void 0 : _a.cutType)) return this.saw.cutType;
    if (!((_b = this.stock) == null ? void 0 : _b.isStock())) return ((_d = (_c = this == null ? void 0 : this.stock) == null ? void 0 : _c.saw) == null ? void 0 : _d.cutType) ?? null;
    return null;
  }
  get cutPreference() {
    var _a, _b, _c, _d;
    if (valueSet((_a = this.saw) == null ? void 0 : _a.cutPreference)) return this.saw.cutPreference;
    if (!((_b = this.stock) == null ? void 0 : _b.isStock()))
      return ((_d = (_c = this.stock) == null ? void 0 : _c.saw) == null ? void 0 : _d.cutPreference) ?? null;
    return null;
  }
  get guillotineOptions() {
    var _a, _b, _c, _d;
    if (valueSet((_a = this.saw) == null ? void 0 : _a.guillotineOptions))
      return this.saw.guillotineOptions;
    if (!((_b = this.stock) == null ? void 0 : _b.isStock()))
      return ((_d = (_c = this == null ? void 0 : this.stock) == null ? void 0 : _c.saw) == null ? void 0 : _d.guillotineOptions) ?? null;
    return null;
  }
  get efficiencyOptions() {
    var _a, _b, _c, _d;
    if (valueSet((_a = this.saw) == null ? void 0 : _a.efficiencyOptions))
      return this.saw.efficiencyOptions;
    if (!((_b = this.stock) == null ? void 0 : _b.isStock()))
      return ((_d = (_c = this == null ? void 0 : this.stock) == null ? void 0 : _c.saw) == null ? void 0 : _d.efficiencyOptions) ?? null;
    return null;
  }
  get primaryCompression() {
    var _a, _b;
    if (this.cutType === "efficiency") {
      if ((_b = (_a = this.saw) == null ? void 0 : _a.efficiencyOptions) == null ? void 0 : _b.primaryCompression) {
        return this.efficiencyOptions.primaryCompression;
      }
      return "y";
    }
    return void 0;
  }
  getHalfBladeWidth() {
    const bladeWidth = this.getBladeWidth();
    return bladeWidth ? bladeWidth / 2 : 0;
  }
  getBladeWidth() {
    var _a, _b, _c;
    const bladeWidth = (((_a = this == null ? void 0 : this.saw) == null ? void 0 : _a.bladeWidth) || ((_c = (_b = this == null ? void 0 : this.stock) == null ? void 0 : _b.saw) == null ? void 0 : _c.bladeWidth)) ?? 0;
    return isNaN$1(bladeWidth) ? 0 : bladeWidth;
  }
  getStock() {
    if (isStock(this)) return this;
    return (this == null ? void 0 : this.stock) ? this.stock : null;
  }
}
class Stock extends Container {
  constructor(data, saw) {
    var _a;
    data = sanitiseData(data);
    data.preventAutoRotation = ((_a = data == null ? void 0 : data.saw) == null ? void 0 : _a.stockType) === "roll";
    if (data.autoAdd && !data.q) data.q = 1;
    super(data, saw);
    __publicField(this, "_id");
    //used for mongo
    __publicField(this, "autoAdd");
    __publicField(this, "allowExactFitShapes");
    __publicField(this, "analysis");
    __publicField(this, "tidy");
    __publicField(this, "used");
    __publicField(this, "stack");
    __publicField(this, "winningStrategy");
    //used for reporting
    __publicField(this, "unusable");
    //used by stock matching
    __publicField(this, "duplicatePattern");
    __publicField(this, "score");
    __publicField(this, "rootSegment");
    delete this.stock;
    this._id = data == null ? void 0 : data._id;
    this.autoAdd = valueSet(data == null ? void 0 : data.autoAdd) ? data.autoAdd : false;
    this.allowExactFitShapes = valueSet(data == null ? void 0 : data.allowExactFitShapes) ? data.allowExactFitShapes : false;
    this.analysis = valueSet(data.analysis) ? data.analysis : null;
    this.tidy = valueSet(data == null ? void 0 : data.tidy) ? data.tidy : false;
    this.algoBenchmark = null;
    this.used = valueSet(data == null ? void 0 : data.used) ? data.used : false;
    this.stack = valueSet(data == null ? void 0 : data.stack) ? data.stack : false;
    this.duplicatePattern = (data == null ? void 0 : data.duplicatePattern) ?? null;
    this.initStock(data);
  }
  initStock(data) {
    switch (this.saw.stockType) {
      case "linear":
      case "roll":
        this.trim.y1 = 0;
        this.trim.y2 = 0;
        this.grain = null;
        break;
    }
    this.validateStock(data);
  }
  reset() {
    this.used = false;
    this.stack = null;
    this.score = null;
    this.rootSegment = null;
    this.tidy = null;
    this.analysis = null;
    this.duplicatePattern = null;
    this.shapes = [];
  }
  validateStock(data) {
    const newIssues = [];
    if (!data.autoAdd) {
      ["q"].forEach((key) => newIssues.push(...validation[key]({ item: data })));
    }
    ["grain"].forEach((key) => newIssues.push(...validation[key]({ item: data })));
    this.issues.push(...newIssues.filter((i) => i));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy;
    delete this.score;
    delete this.rootSegment;
    delete this.shapes;
    delete this.saw;
    this == null ? true : delete this.algoBenchmark;
    this.stack = isStock(this.stack) ? this.stack.id : this.stack;
    if (!this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2) {
      this.trim = null;
    }
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(stock) {
    let material = false;
    let thickness = false;
    let length = false;
    let width = false;
    if (this.material === stock.material) material = true;
    if (this.t === stock.t) thickness = true;
    if (this.l === stock.l) length = true;
    if (this.w === stock.w) width = true;
    if (material && thickness && length && width) return true;
  }
  hasStack() {
    return typeof this.stack === "number";
  }
  isStacked() {
    return isStock(this.stack) || typeof this.stack === "string";
  }
  clone(version = null) {
    const id = this.id.split(".");
    if (!version) {
      version = parseInt(id.pop());
      version++;
    } else {
      id.pop();
    }
    id.push(version.toString());
    const newId = id.join(".");
    const data = structuredClone(this);
    data.id = newId;
    data.used = false;
    data.duplicate = true;
    data.stack = false;
    data.saw = this.saw;
    const stock = new Stock(data);
    return stock;
  }
}
class Offcut extends Rectangle {
  constructor(data) {
    super(data);
    __publicField(this, "addToInventory");
    //for front end selection
    __publicField(this, "added");
    //for adding to inputStock
    __publicField(this, "placementOrder");
    __publicField(this, "flex");
    this.cost = this.getCost();
    this.addToInventory = (data == null ? void 0 : data.addToInventory) ?? true;
    this.added = false;
    this.placementOrder = (data == null ? void 0 : data.placementOrder) ?? null;
    this.offcut = true;
  }
  compressForSaving() {
    var _a;
    this.stockId = (this == null ? void 0 : this.stockId) || ((_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id);
    delete this.stock;
    delete this._trim;
    delete this.trimmed;
  }
  getCost() {
    var _a;
    if ((_a = this.stock) == null ? void 0 : _a.isStock())
      return this.stock ? parseFloat((this.getArea() / this.stock.getArea() * this.stock.cost).toFixed(2)) : 0;
    return 0;
  }
}
function recreateOffcuts({
  offcuts,
  stockList,
  preventAutoRotation = true
}) {
  if (!offcuts || !(offcuts == null ? void 0 : offcuts.length)) return [];
  return offcuts.map((offcutObject) => {
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = offcutObject == null ? void 0 : offcutObject.stock) == null ? void 0 : _a.id) ?? (offcutObject == null ? void 0 : offcutObject.stockId));
    });
    offcutObject.stock = stock;
    if (preventAutoRotation) offcutObject.preventAutoRotation = true;
    const offcut = new Offcut(offcutObject);
    return offcut;
  });
}
class Shape extends Rectangle {
  constructor(data) {
    data = sanitiseData(data);
    super(data);
    __publicField(this, "added");
    __publicField(this, "guillotineData");
    __publicField(this, "stockLock");
    __publicField(this, "score");
    __publicField(this, "bestScore");
    __publicField(this, "placementOrder");
    //groups
    __publicField(this, "groupPlacementOrder");
    __publicField(this, "group");
    __publicField(this, "groupID");
    __publicField(this, "inGroup");
    //is the shape currently part of at least one group
    __publicField(this, "inUserGroup");
    //is the shape currently part of a user group`
    __publicField(this, "addedAsGroup");
    __publicField(this, "isFirstShape");
    __publicField(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    __publicField(this, "index");
    //used for ptx
    __publicField(this, "patternMatch");
    //used for stack detection
    __publicField(this, "stockMatch");
    __publicField(this, "minSpacing");
    __publicField(this, "priority");
    __publicField(this, "weighting", {});
    //objects
    __publicField(this, "machining");
    __publicField(this, "_banding", Object.fromEntries(
      allSides.map((side) => [side, false])
    ));
    __publicField(this, "_finish", Object.fromEntries(
      faces.map((face) => [face, ""])
    ));
    __publicField(this, "_trim", { x1: 0, x2: 0, y1: 0, y2: 0 });
    this.initShape(data);
  }
  get trim() {
    return super.trim;
  }
  set trim(value) {
    super.trim = value;
  }
  initShape(data, update = false) {
    var _a;
    if (!update) {
      this.validateShape(data);
      data.orientationLock = (_a = data == null ? void 0 : data.orientationLock) == null ? void 0 : _a.toLowerCase();
      if ((data == null ? void 0 : data.orientationLock) === " ") {
        data.orientationLock = "";
      }
      this.orientationLock = valueSet(data == null ? void 0 : data.orientationLock) && this.l !== this.w ? data.orientationLock : null;
      if (valueSet(data == null ? void 0 : data.stockLock)) {
        if (Array.isArray(data == null ? void 0 : data.stockLock))
          this.stockLock = data.stockLock.map((sl) => sl.toString());
      } else {
        this.stockLock = [];
      }
      this.banding = (data == null ? void 0 : data.banding) || (data == null ? void 0 : data._banding);
      this.finish = (data == null ? void 0 : data.finish) || (data == null ? void 0 : data._finish);
      this.machining = valueSet(data == null ? void 0 : data.machining) ? new Machining$1(data.machining) : null;
    }
    this.added = valueSet(data == null ? void 0 : data.added) ? data.added : false;
    this.initGuillotineData(data);
    this.inGroup = valueSet(data == null ? void 0 : data.inGroup) ? data.inGroup : this.inGroup || false;
    this.inUserGroup = valueSet(data == null ? void 0 : data.inUserGroup) ? data.inUserGroup : this.inUserGroup || false;
    this.groupID = valueSet(data == null ? void 0 : data.groupID) ? data.groupID : this.groupID || null;
    this.addedAsGroup = valueSet(data == null ? void 0 : data.addedAsGroup) ? data.addedAsGroup : this.addedAsGroup || false;
    this.score = valueSet(data == null ? void 0 : data.score) ? data.score : this.score || null;
    this.bestScore = valueSet(data == null ? void 0 : data.bestScore) ? data.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.placementOrder = valueSet(data == null ? void 0 : data.placementOrder) ? data.placementOrder : this.placementOrder || null;
    this.groupPlacementOrder = valueSet(data == null ? void 0 : data.groupPlacementOrder) ? data.groupPlacementOrder : this.groupPlacementOrder || null;
    this.minSpacing = (data == null ? void 0 : data.minSpacing) ?? (this.minSpacing || 0);
    this.priority = (data == null ? void 0 : data.priority) ?? {};
  }
  initGuillotineData(data) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.guillotineData = defaults({}, data == null ? void 0 : data.guillotineData, {
      firstShape: ((_a = this == null ? void 0 : this.guillotineData) == null ? void 0 : _a.firstShape) || null,
      myPhase: ((_b = this == null ? void 0 : this.guillotineData) == null ? void 0 : _b.myPhase) || null,
      myStripParent: ((_c = this == null ? void 0 : this.guillotineData) == null ? void 0 : _c.myStripParent) || null,
      myStripDirection: ((_d = this == null ? void 0 : this.guillotineData) == null ? void 0 : _d.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((_f = (_e = this == null ? void 0 : this.guillotineData) == null ? void 0 : _e.stripShapeBatches) == null ? void 0 : _f.subsetUsed) || false,
        groups: ((_h = (_g = this == null ? void 0 : this.guillotineData) == null ? void 0 : _g.stripShapeBatches) == null ? void 0 : _h.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var _a;
    if (((_a = this.guillotineData) == null ? void 0 : _a.myStripParent) && (isShape(this.guillotineData.myStripParent) || isGroup(this.guillotineData.myStripParent))) {
      this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress();
    }
    return structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(container, removeBlade = false) {
    var _a, _b;
    if (!container) return 0;
    const bladeWidth = container.getBladeWidth();
    if (container.cutType !== "efficiency") {
      if (removeBlade) return 0;
      return bladeWidth;
    }
    let minSpacing = (this == null ? void 0 : this.minSpacing) || ((_b = (_a = container.saw) == null ? void 0 : _a.options) == null ? void 0 : _b.minSpacing) || 0;
    if (bladeWidth > minSpacing) minSpacing = bladeWidth;
    if (removeBlade) {
      minSpacing -= bladeWidth;
    }
    if (minSpacing < 0) minSpacing = 0;
    return minSpacing;
  }
  validateShape(data) {
    const newIssues = [];
    ["q", "orientationLock", "banding"].forEach((key) => newIssues.push(...validation[key]({ item: data })));
    this.issues.push(...newIssues.filter((i) => i));
    if (this.machining) {
      this.machining.validateEverything(this);
    }
  }
  //individual shape weighting
  /* calculateWeighting()
  	{
  		// const aspect = this.w / this.l;
  		if ( aspect > 0.5 )
  		{
  			//cater for small parts
  			const area = s.getArea();
  			const areaPercentage = area / maxArea;
  
  			if ( areaPercentage <= 0.1 )
  			{
  				s.weighting.edge = areaPercentage;
  			}
  		}
  		//the closer to zero, the higher the edge weighting
  		this.weighting.edge = 1 - aspect;
  		this.weighting.edge *= 2;
  	} */
  update(data) {
    data = sanitiseData(data);
    this.initShape(data, true);
    this.updateRectangle(data);
  }
  //banding
  set banding(val) {
    this._banding = Object.fromEntries(
      allSides.map((side) => [side, false])
    );
    if (!objectValuesPresent(val, true)) return;
    for (const side of allSides) {
      this._banding[side] = valueSet(val == null ? void 0 : val[side]) ? val[side] : false;
    }
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return getMainSidesArray(this._banding);
  }
  get finish() {
    return this._finish;
  }
  get FacesArray() {
    return faces.map((face) => {
      var _a;
      return (_a = this.finish) == null ? void 0 : _a[face];
    });
  }
  set finish(val) {
    this._finish = Object.fromEntries(
      faces.map((face) => [face, ""])
    );
    if (!objectValuesPresent(val, true)) return;
    for (const face of faces) {
      this._finish[face] = valueSet(val == null ? void 0 : val[face]) ? val[face] : "";
    }
  }
  //compress for saving / transfer
  save() {
    var _a, _b, _c;
    delete this.group;
    {
      (_a = this == null ? void 0 : this.guillotineData) == null ? true : delete _a.stripShapeBatches;
    }
    this.stockId = (_b = this == null ? void 0 : this.stock) == null ? void 0 : _b.id;
    delete this.stock;
    delete this.score;
    delete this.proximity;
    delete this.firstShapeSampleRotations;
    delete this.index;
    delete this.patternMatch;
    delete this.stockMatch;
    {
      delete this.bestScore;
    }
    if (allSides.every((side) => {
      var _a2;
      return !((_a2 = this._banding) == null ? void 0 : _a2[side]);
    })) {
      this._banding = null;
    }
    if (faces.every((face) => {
      var _a2;
      return !((_a2 = this._finish) == null ? void 0 : _a2[face]);
    })) {
      this._finish = null;
    }
    compressMachining(this);
    {
      (_c = this.guillotineData) == null ? true : delete _c.myStripParent;
      delete this.score;
      delete this.inGroup;
      delete this.groupID;
      delete this.addedAsGroup;
    }
  }
  isExactFit(container) {
    return this.orientationLock === "w" && this.w === container.w || this.orientationLock === "l" && this.l === container.l || !this.orientationLock && (this.w === container.w && this.l === container.l);
  }
  addToStock(stock) {
    this.stock = stock;
    this.stockId = stock.id;
    this.added = true;
    this.inGroup = false;
    stock.used = true;
    this.grain = stock.grain;
    if ((stock == null ? void 0 : stock.grain) && this.rot) {
      this.grain = getReverseDimension(stock.grain);
    }
    test([
      () => expect(this.isInsideStock(stock), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null;
    this.stock = null;
    this.stockId = null;
    this.added = false;
    this.addedAsGroup = false;
    this == null ? true : delete this.isFirstShape;
    if (isGroup(this)) {
      this.shapes.forEach((s) => s.removeFromStock());
    }
  }
  setBestScore(winner, point = null) {
    const bestScore = {
      x: winner.x,
      y: winner.y,
      rot: winner.rot,
      total: winner.score.total,
      score: winner.score,
      group: winner.group,
      weighting: null,
      point
    };
    this.bestScore = bestScore;
  }
  resetBestScore() {
    const bestScore = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = bestScore;
    this.resetGuillotineData(true);
  }
  resetScore() {
    this.score = null;
    this.resetGuillotineData(true);
  }
  resetBothScores() {
    this.resetBestScore();
    this.resetScore();
  }
  resetPosition() {
    this.x = 0;
    this.y = 0;
    this.placementOrder = null;
    this.resetGuillotineData(true);
  }
  resetGroupData() {
    this.inGroup = false;
    this.group = null;
    this.groupID = null;
    this.groupPlacementOrder = null;
    this.grain = null;
  }
  resetGuillotineData(keepStripShapeBatches = false) {
    var _a, _b;
    const guillotineData = {
      firstShape: false,
      myPhase: null,
      myStripDirection: null,
      stripShapeBatches: {
        subsetUsed: false,
        groups: {}
      }
    };
    if (keepStripShapeBatches) {
      guillotineData.stripShapeBatches.groups = (_b = (_a = this.guillotineData) == null ? void 0 : _a.stripShapeBatches) == null ? void 0 : _b.groups;
    }
    this.guillotineData = guillotineData;
  }
  reset(keepScores = false, keepGuillotineBatchData = true, keepGroupData = false) {
    this.removeFromStock();
    this.resetPosition();
    setRotation(this, 0);
    this.placementOrder = null;
    this == null ? true : delete this.isFirstShape;
    this.patternMatch = false;
    if (!keepScores) this.resetBothScores();
    if (!keepGroupData) this.resetGroupData();
    this.resetGuillotineData(keepGuillotineBatchData);
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getBandingLength(key) {
    if (!isSide(key)) return 0;
    if (!this.banding[key]) return 0;
    if (key === "x1" || key === "x2") return this.getShortSide();
    if (key === "y1" || key === "y2") return this.getLongSide();
    if (isCornerSide(key)) {
      return getCornerLength(this, key);
    }
    return 0;
  }
  getPriority(stock) {
    var _a;
    if (!stock) return 0;
    const id = stock.parentID;
    if ((_a = this.priority) == null ? void 0 : _a[id]) return this.priority[id];
    return 0;
  }
  clearPriority() {
    this.priority = {};
  }
  getPerimeterCutVectors() {
    var _a;
    const offset2 = ((_a = this.stock) == null ? void 0 : _a.isStock()) ? this.stock.getBladeWidth() / 2 : null;
    const vectors = [
      //bottom
      {
        x1: this.x - offset2,
        x2: this.x + this.l + offset2,
        y1: this.y - offset2,
        y2: this.y - offset2,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + offset2,
        x2: this.x + this.l + offset2,
        y1: this.y - offset2,
        y2: this.y + this.w + offset2,
        type: "right"
      },
      //top
      {
        x1: this.x - offset2,
        x2: this.x + this.l + offset2,
        y1: this.y + this.w + offset2,
        y2: this.y + this.w + offset2,
        type: "top"
      },
      //left
      {
        x1: this.x - offset2,
        x2: this.x - offset2,
        y1: this.y - offset2,
        y2: this.y + this.w + offset2,
        type: "left"
      }
    ];
    return vectors;
  }
  /* getTrimmedDimensions()
  	{
  		if ( this.trimmed )
  			return {
  				l: this.l,
  				w: this.w
  			};
  
  		return {
  			l: this.l - this.trim.x1 - this.trim.x2,
  			w: this.w - this.trim.y1 - this.trim.y2
  		};
  	} */
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(stock = null) {
    let perimeterCuts = [];
    stock = stock ? stock : this.stock;
    if (!stock) throw new Error("stock is required to create a cut");
    const vectors = this.getPerimeterCutVectors();
    vectors.forEach((vector) => {
      var _a;
      return perimeterCuts.push(new Cut({
        stock: ((_a = this.stock) == null ? void 0 : _a.isStock()) ? this.stock : stock,
        x1: vector.x1,
        x2: vector.x2,
        y1: vector.y1,
        y2: vector.y2,
        type: vector.type
      }));
    });
    perimeterCuts = perimeterCuts.filter((cut) => cut.isInsideStock());
    return perimeterCuts;
  }
  createOffset(amount) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const offset2 = {
      x: this.x - amount,
      y: this.y - amount,
      l: this.l + amount * 2,
      w: this.w + amount * 2
    };
    if (offset2.x < 0) {
      offset2.x = 0;
      offset2.l -= amount;
    }
    if (offset2.y < 0) {
      offset2.y = 0;
      offset2.w -= amount;
    }
    if (offset2.x + offset2.l > this.stock.l) {
      offset2.l = this.stock.l - offset2.x;
    }
    if (offset2.y + offset2.w > this.stock.w) {
      offset2.w = this.stock.w - offset2.y;
    }
    return offset2;
  }
  setPositionToBestScore() {
    setRotation(this, this.bestScore.rot);
    this.x = this.bestScore.x;
    this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(container, rotation = null) {
    return willItFit(this, container, rotation);
  }
  clone(version = null) {
    const id = this.id.split(".");
    if (!version) {
      version = id.pop();
      version++;
    } else {
      id.pop();
    }
    id.push(version);
    const newId = id.join(".");
    const stock = this.stock;
    this.stock = null;
    const data = structuredClone(this);
    data.stock = stock;
    data.id = newId;
    data.added = false;
    data.duplicate = true;
    delete data.score;
    delete data.bestScore;
    delete data.stock;
    delete data.placementOrder;
    delete data.inGroup;
    delete data.addedAsGroup;
    delete data.groupID;
    delete data.isFirstShape;
    const shape = new Shape(data);
    return shape;
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const guillotineData = this.cloneGuillotineData();
    guillotineData.myStripParent = isShapeOrGroup(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent;
    const clone = {
      id: this.id,
      x: this.added ? this.x : 0,
      y: this.added ? this.y : 0,
      l: this.l,
      w: this.w,
      added: this.added,
      guillotineData,
      placementOrder: this.placementOrder,
      bestScore: this.bestScore,
      inGroup: this.inGroup,
      groupID: this.groupID,
      addedAsGroup: this.addedAsGroup,
      groupPlacementOrder: this.groupPlacementOrder,
      minSpacing: this.minSpacing,
      cloneType: "shape",
      priority: Object.assign({}, this.priority)
    };
    return clone;
  }
  isTooCloseToEdges(container) {
    var _a, _b;
    const minSpacing = ((_b = (_a = container.saw) == null ? void 0 : _a.options) == null ? void 0 : _b.minSpacing) || this.minSpacing;
    if (!minSpacing) return false;
    return this.getDistancesToContainerEdges(container).some((d) => d > 0 && d <= minSpacing);
  }
  validateStripShapeBatches() {
    const groups = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      if (group.id !== this.id) {
        throw new Error(`strip shape group id does not match shape id ${this.id} ${group.id} ${i}`);
      }
      if (![this.l, this.w].includes(group.dimension)) {
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${group.id} ${i} ${this.l} ${this.w} ${group.dimension}`);
      }
    }
  }
  getStripShapeBatchData(batchNumber) {
    var _a;
    if (typeof batchNumber !== "number") return false;
    if (!((_a = this == null ? void 0 : this.guillotineData) == null ? void 0 : _a.stripShapeBatches)) return false;
    if (!this.guillotineData.stripShapeBatches.groups) return false;
    if (!(batchNumber in this.guillotineData.stripShapeBatches.groups))
      return false;
    return this.guillotineData.stripShapeBatches.groups[batchNumber];
  }
  isInStripShapeBatch(batchNumber) {
    const batchInfo = this.getStripShapeBatchData(batchNumber);
    if (!batchInfo) return false;
    return true;
  }
  isStacked() {
    return this.added && this.stock && this.stock.isStacked();
  }
}
class Segment extends Container {
  constructor(data) {
    if (!data) return;
    data.preventAutoRotation = true;
    super(data);
    __publicField(this, "cuts");
    __publicField(this, "phase");
    __publicField(this, "cutDirection");
    __publicField(this, "firstShape");
    __publicField(this, "merged");
    __publicField(this, "children");
    __publicField(this, "siblings");
    //used by vis only
    __publicField(this, "parent");
    __publicField(this, "segmentType");
    __publicField(this, "completed");
    //used by vis only
    __publicField(this, "rowSegment");
    //used by cuts
    __publicField(this, "placementOrder");
    __publicField(this, "hasBeamTrim");
    this.validateSegment(data);
    delete this.trim;
    delete this.trimmed;
    this.shapes = valueSet(data == null ? void 0 : data.shapes) ? data.shapes : [];
    this.firstShape = valueSet(data == null ? void 0 : data.firstShape) ? data.firstShape : null;
    this.cuts = [];
    this.phase = valueSet(data == null ? void 0 : data.phase) ? data.phase : null;
    this.merged = valueSet(data == null ? void 0 : data.merged) ? data.merged : false;
    this.parent = valueSet(data == null ? void 0 : data.parent) ? data.parent : null;
    this.children = valueSet(data == null ? void 0 : data.children) ? data.children : [];
    this.siblings = valueSet(data == null ? void 0 : data.siblings) ? data.siblings : [];
    this.offcut = valueSet(data == null ? void 0 : data.offcut) ? data.offcut : false;
    this.segmentType = valueSet(data == null ? void 0 : data.segmentType) ? data.segmentType : null;
    this.placementOrder = null;
    this.cutDirection = valueSet(data == null ? void 0 : data.cutDirection) ? data.cutDirection : "l";
    this.hasBeamTrim = valueSet(data == null ? void 0 : data.hasBeamTrim) ? data.hasBeamTrim : false;
  }
  validateSegment(data) {
    var _a, _b;
    if (maths.lessThanOrEqualTo(data.w, 0) || maths.lessThanOrEqualTo(data.l, 0)) {
      new Issue({
        item: this,
        message: `Zero / negative dimension - l: ${data.l}, w: ${data.w}.`,
        field: [["l"], ["w"]]
      });
    }
    if (maths.lessThan(data.x, 0) || maths.lessThan(data.y, 0)) {
      new Issue({
        item: this,
        message: `Negative position - x: ${data.x}, y: ${data.y}.`,
        field: [["x"], ["y"]]
      });
    }
    if (data == null ? void 0 : data.stock) {
      if (maths.greaterThan(data.x + data.l, data.stock.l) || maths.greaterThan(data.y + data.w, data.stock.w)) {
        new Issue({
          item: this,
          field: [["x"], ["y"], ["l"], ["w"]],
          message: `Outside of stock ${data.stock.id} - x: ${data.x}, y: ${data.y}, l: ${data.l}, w: ${data.w}, sl: ${(_a = data == null ? void 0 : data.stock) == null ? void 0 : _a.l}, sw: ${(_b = data == null ? void 0 : data.stock) == null ? void 0 : _b.w}.`
        });
      }
    }
  }
  //compress for saving / transfer
  save() {
    var _a;
    this.children = this.children.map((c) => {
      return {
        id: c.id,
        x: c.x,
        y: c.y,
        l: c.l,
        w: c.w,
        offcut: c.offcut
      };
    });
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id);
    delete this.stock;
    delete this.shapes;
    delete this.saw;
    delete this.siblings;
    delete this.parent;
    delete this.trim;
    this.algoBenchmark = null;
  }
  getBladeWidth() {
    return this.stock.getBladeWidth();
  }
  /**
   * create a normalised shape list to allow searching for duplicates
   */
  getNormalisedShapes(shapes) {
    return shapes.map((shape) => {
      const normalisedShape = {
        x: shape.x - this.x,
        y: shape.y - this.y,
        l: shape.l,
        w: shape.w
      };
      return normalisedShape;
    });
  }
  reset() {
    this.stock.used = false;
    this.children = [];
    this.siblings = [];
    this.parent = null;
    this.cuts = [];
    this.phase = null;
  }
}
class Group extends Shape {
  //used for sorting
  constructor(data) {
    var _a, _b;
    data = sanitiseData(data);
    if (!((_a = data == null ? void 0 : data.shapes) == null ? void 0 : _a.length))
      throw new Error("attempting to create a group with no shapes");
    data.preventAutoRotation = true;
    super(data);
    __publicField(this, "shapes");
    __publicField(this, "direction");
    __publicField(this, "container");
    //can be set after initial creation
    __publicField(this, "positions");
    __publicField(this, "outOfBounds");
    __publicField(this, "collision");
    __publicField(this, "counter", 0);
    __publicField(this, "type");
    __publicField(this, "efficiency");
    this.q = 1;
    delete this._banding;
    delete this._finish;
    delete this._trim;
    this.shapes = data.shapes;
    this.positions = ((_b = data == null ? void 0 : data.positions) == null ? void 0 : _b.length) ? data.positions : [];
    this.direction = data.direction;
    this.container = data.container;
    this.type = (data == null ? void 0 : data.type) ?? "auto";
    this.initGroup();
  }
  initGroup() {
    var _a;
    if (!((_a = this == null ? void 0 : this.shapes) == null ? void 0 : _a.length)) return;
    this.setShapePositions();
    if (this.w > this.l) this.orientationLock = "w";
    else this.orientationLock = "l";
    if (this.container) {
      this.efficiency = this[this.direction] / this.container[this.direction];
    }
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [];
    if (this.type !== "user") this.sortShapes();
    let currentPosition = 0;
    const groupAxis = getAxisFromDimension(this.direction);
    let i = 0;
    for (const s of this.shapes) {
      this.positions.push({
        shape: s.id,
        [groupAxis]: currentPosition,
        [getReverseAxis(groupAxis)]: 0,
        rot: s.rot.valueOf()
      });
      s.inGroup = true;
      currentPosition += i === this.shapes.length - 1 ? s[this.direction] : s[this.direction] + s.getMinSpacing(this.container);
      i++;
    }
    this[this.direction] = currentPosition;
    const secondaryDimension = getReverseDimension(this.direction);
    const largestShapeInOtherDirection = this.shapes.reduce((max, shape) => shape[secondaryDimension] > max ? shape[secondaryDimension] : max, 0);
    this[secondaryDimension] = largestShapeInOtherDirection;
    if (isDev()) {
      const totalSpacing = this.shapes.slice(0, -1).reduce((total, shape) => total + shape.getMinSpacing(this.container), 0);
      const totalShapeDimension = this.shapes.reduce((total, shape) => total + shape[this.direction], 0);
      const totalInDirection = totalShapeDimension + totalSpacing;
      test([
        () => expect(maths.equalTo(totalInDirection, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => expect(currentPosition, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => expect(largestShapeInOtherDirection, "group dimension in other direction is not correct").to.equal(this[secondaryDimension])
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l) {
      throw new Error(`group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`);
    }
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(container) {
    this.container = container;
    this.setShapePositions();
    if (this.w > this.l) this.orientationLock = "w";
    else this.orientationLock = "l";
    if (this.container) {
      this.efficiency = this[this.direction] / this.container[this.direction];
    }
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  getArea() {
    return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
  }
  destroy() {
    super.reset();
    for (const s of this.shapes) s.reset(false, false, false);
  }
  reset() {
    super.reset();
    for (const s of this.shapes) s.reset(false, false, true);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(stock) {
    this.shapes.forEach((s) => {
      const position = this.positions.find((p) => p.shape === s.id);
      if (!position) throw new Error("position not found for shape in group");
      const result = rotate(s, position.rot, stock);
      if (!result) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const sortDimension = getReverseDimension(this.direction);
    this.shapes.sort((a, b) => {
      if (b[sortDimension] === a[sortDimension]) {
        if (b[this.direction] === a[this.direction]) {
          return a.id.localeCompare(b.id, void 0, { numeric: true });
        }
        return b[this.direction] - a[this.direction];
      }
      return b[sortDimension] - a[sortDimension];
    });
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(stock) {
    if (!stock) throw new Error("placeShapes requires stock");
    this.addToStock(stock);
    for (let i = 0; i < this.shapes.length; i++) {
      const s = this.shapes[i];
      s.addToStock(stock);
      const position = this.positions.find((p) => p.shape === s.id);
      if (!position) throw new Error("position not found for shape in group");
      s.x = this.x + position.x;
      s.y = this.y + position.y;
      const rotationResult = rotate(s, position.rot, stock);
      if (!rotationResult) throw new Error("placeMyShapes - unable to rotate shape in group");
      if (i === 0 && this.x === 0 && this.y === 0) {
        s.isFirstShape = true;
      }
      s.addedAsGroup = this.id;
      s.inGroup = false;
      s.score = this.score;
      const stripShapeBatchesData = s.guillotineData.stripShapeBatches;
      s.guillotineData = this.cloneGuillotineData();
      s.guillotineData.stripShapeBatches = stripShapeBatchesData;
      s.bestScore = this.bestScore;
      if (typeof this.placementOrder === "number") {
        s.groupPlacementOrder = i;
        s.placementOrder = this.placementOrder + i / 1e6;
      }
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(container) {
    this.orientateShapes(container);
    setRotationToOrientationLock(this, container);
  }
  clone(shapes = []) {
    const groupNumber = parseInt(this.id.split("g")[1]);
    const newID = `g${groupNumber + 1}`;
    const originalShapes = this.shapes;
    const originalContainer = this.container;
    const originalStock = this.stock;
    this.shapes = [];
    this.container = null;
    this.stock = null;
    const data = structuredClone(this);
    this.shapes = originalShapes;
    this.container = originalContainer;
    this.stock = originalStock;
    data.container = this.container;
    data.shapes = shapes;
    data.id = newID;
    return new Group(data);
  }
  compress() {
    const clone = super.compress.call(this);
    clone.direction = this.direction;
    clone.positions = structuredClone(this.positions);
    clone.shapes = this.shapes.map((s) => s.compress());
    clone.type = this.type;
    clone.cloneType = "group";
    return clone;
  }
}
function getStockGrainSummary(inputStock) {
  if (!inputStock.length) return "n";
  const grainValues = inputStock.map((s) => s.grain).filter((v) => v);
  if (!grainValues.length) return "n";
  if (grainValues.every((v) => v === "l")) {
    return "l";
  } else if (grainValues.every((v) => v === "w")) {
    return "w";
  } else if (grainValues.some((v) => v === "l" || v === "w")) {
    return "y";
  } else {
    return "n";
  }
}
function isGroupData(data) {
  return data.shapes !== void 0;
}
function isGroup(object) {
  return object instanceof Group && object.type !== "user";
}
function isUserGroup(object) {
  return object instanceof Group && object.type === "user";
}
function isInputUserGroup(object) {
  return object instanceof InputUserGroup;
}
function isInputStock(s) {
  return s instanceof InputStock;
}
function isInputShape(s) {
  return s instanceof InputShape;
}
function isStock(s) {
  return s instanceof Stock;
}
function isContainer(s) {
  return s instanceof Container;
}
function isShape(s) {
  return s instanceof Shape && !(s instanceof Group);
}
function isShapeOrGroup(s) {
  return s instanceof Shape || s instanceof Group;
}
function isSegment(s) {
  return s instanceof Segment;
}
function getItemType(item) {
  if (item instanceof Group) {
    if (item.type === "user") return "userGroup";
    if (item.type === "strip") return "stripGroup";
    return "group";
  }
  if (item instanceof InputUserGroup) return "inputUserGroup";
  if (item instanceof InputStock) return "inputStock";
  if (item instanceof InputShape) return "inputShape";
  if (item instanceof Stock) return "stock";
  if (item instanceof Container) return "container";
  if (item instanceof Shape && !(item instanceof Group)) return "shape";
  if (item instanceof Segment) return "segment";
  if (item instanceof Offcut) return "offcut";
  if (item instanceof Saw) return "saw";
  if (item instanceof Rectangle) return "rectangle";
  return null;
}
function checkObjectHasPropery(obj, path2) {
  return has(obj, path2);
}
function getNestedProperty$1(obj, path2) {
  return get(obj, path2);
}
function setNestedProperty(obj, path2, value) {
  set(obj, path2, value);
}
function valueSet(value) {
  if (value === void 0) return false;
  if (value === null || value === "") return false;
  if (typeof value === "object" && !Object.values(value).length) return false;
  return true;
}
function objectValuesPresent(object, truthy = false) {
  if (!valueSet(object) || typeof object !== "object") return false;
  const values = Object.values(object);
  if (values.length === 0) return false;
  if (truthy) {
    return values.some((val) => valueSet(val) && val);
  }
  return values.some((val) => valueSet(val));
}
function totalQuantity(items) {
  if (!items || !Array.isArray(items)) return 0;
  return items.reduce((total, s) => {
    let q2 = 0;
    if (isInputStock(s) && s.autoAdd) q2 = 1;
    else {
      q2 = valueSet(s.q) && typeof s.q === "string" ? parseInt(s.q) : s.q;
    }
    if (!isNaN(q2) && q2 > 0) return total + q2;
    return total;
  }, 0);
}
function unplacedShapeTally(shapeList) {
  if (!(shapeList == null ? void 0 : shapeList.length)) return [];
  const unplacedShapes = shapeList.filter((shape) => !shape.added).map((shape) => {
    shape.parentID = shape.getParentID();
    return shape;
  });
  const uniques = {};
  unplacedShapes.forEach((s) => {
    const stack = getStockStack(s.stock) || 1;
    if (!uniques[s.parentID]) {
      uniques[s.parentID] = {};
      uniques[s.parentID].count = stack;
      uniques[s.parentID].id = s.parentID;
      uniques[s.parentID].name = (s == null ? void 0 : s.name) ? s.name : s.id;
      uniques[s.parentID].l = s.l;
      uniques[s.parentID].w = s.w;
      uniques[s.parentID].t = s.t;
      uniques[s.parentID].material = s.material;
      uniques[s.parentID].rot = s.rot;
    } else uniques[s.parentID].count += stack;
  });
  return Object.values(uniques);
}
function getStockStack(stock, stockList = []) {
  if (!stock) return 0;
  if (stock.stack === false) return 1;
  if (typeof (stock == null ? void 0 : stock.stack) === "number") return stock.stack;
  if (typeof (stock == null ? void 0 : stock.stack) === "string") {
    const parent = stockList.find((s) => s.id === stock.stack);
    return parent.stack;
  }
  return 0;
}
function isElementFullScreenSupported() {
  const elem = document.documentElement;
  if ("requestFullscreen" in elem || "webkitRequestFullscreen" in elem || "mozRequestFullScreen" in elem || "msRequestFullscreen" in elem) {
    return true;
  }
  return false;
}
function shouldRotateDiagram(orientationModel = 0, stockGrainSummary, rectangle = null, rectangleType = null, shapeOrientation = null) {
  if (!isInputShape(rectangle) && !isInputUserGroup || rectangleType === "stock") return false;
  let orientation, rotate2;
  if (isInputShape(rectangle)) {
    orientation = rectangle.orientationLock;
  } else if (isInputUserGroup(rectangle)) {
    orientation = rectangle.direction;
  } else if (rectangleType === "shape") {
    orientation = shapeOrientation;
  }
  if (orientationModel === 0 || isInputUserGroup(rectangle)) {
    switch (stockGrainSummary) {
      case "n":
        rotate2 = orientation === "w" || shapeOrientation === "w";
        break;
      case "l":
      case "y":
        rotate2 = orientation === "w" || shapeOrientation === "w";
        break;
      case "w":
        rotate2 = orientation === "l" || shapeOrientation === "l";
        break;
      default:
        rotate2 = shapeOrientation === "w";
    }
  } else if (orientationModel === 1) {
    if (!rectangle) return false;
    else rotate2 = rectangle.w > rectangle.l;
  } else if (orientationModel === 2) {
    if (!rectangle) return false;
    switch (stockGrainSummary) {
      case "n":
        rotate2 = rectangle.w > rectangle.l;
        break;
      case "y":
      case "l":
        rotate2 = rectangle.w > rectangle.l;
        break;
      case "w":
        rotate2 = rectangle.l >= rectangle.w;
        break;
      default:
        rotate2 = false;
    }
  }
  return rotate2;
}
function getSideRotation(orientationModel, stockGrainSummary, rectangle = null, rectangleType = null, shapeOrientation = null) {
  if (!isInputShape(rectangle) || rectangleType === "shape") return false;
  let rotate2;
  if (orientationModel === 0) {
    return shouldRotateDiagram(orientationModel, stockGrainSummary, rectangle, rectangleType, shapeOrientation) ? "cc" : false;
  } else if (orientationModel === 1) {
    return shouldRotateDiagram(orientationModel, stockGrainSummary, rectangle, rectangleType, shapeOrientation) ? "cc" : false;
  } else if (orientationModel === 2) {
    if (stockGrainSummary === "w") {
      if (rectangle.l < rectangle.w) return "c";
      return "cc";
    }
    return false;
  }
  return rotate2;
}
function rotateShapeProperties(shape) {
  if (shape.banding) {
    shape.banding = rotateSides(shape.banding, "cc");
  }
  if (shape.trim) {
    shape.trim = rotateSides(shape.trim, "cc");
  }
}
function mapOrientation(shape, orientationModel = 0) {
  if (isShape(shape)) return shape;
  if (isInputShape(shape)) return shape;
  if (!orientationModel) return shape;
  shape.preventAutoRotation = true;
  if (orientationModel === 2) {
    if (shape.l < shape.w) rotateShapeProperties(shape);
  }
  return shape;
}
function rotateSides(sidesObject, direction = "cc", mainSideMapping = {
  "x1": "y1",
  "x2": "y2",
  "y1": "x1",
  "y2": "x2"
}, cornerMapping = {
  "a": "d",
  "b": "a",
  "c": "b",
  "d": "c"
}) {
  const newObject = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  if (direction === "c") {
    for (const [key, value] of Object.entries(mainSideMapping)) {
      newObject[value] = sidesObject[key];
    }
    for (const [key, value] of Object.entries(cornerMapping)) {
      if (value in sidesObject) {
        newObject[value] = sidesObject[key];
      }
    }
  } else if (direction === "cc") {
    for (const [key, value] of Object.entries(mainSideMapping)) {
      newObject[key] = sidesObject[value];
    }
    for (const [key, value] of Object.entries(cornerMapping)) {
      if (value in sidesObject) {
        newObject[key] = sidesObject[value];
      }
    }
  }
  return newObject;
}
const { addNotice } = useNotices();
const {
  inputs,
  totalInputShapes,
  totalInputStock,
  createStockList,
  createShapeList,
  validateInputShapes,
  validateInputStock,
  removeShape,
  removeStock
} = useInputs();
const DEFAULT_OPTIONS = {
  t: (str) => str,
  isAdmin: false,
  partTrim: 0,
  shared: false,
  maxShapes: Infinity,
  maxStock: Infinity,
  useInventory: false,
  selectedSaw: void 0,
  materialStore: void 0,
  onLimit: () => {
  }
};
const removeEmptyInputs = () => {
  var _a, _b;
  if (!((_a = inputs == null ? void 0 : inputs.inputStock) == null ? void 0 : _a.value)) return;
  for (let i = inputs.inputStock.value.length - 1; i >= 0; i--) {
    const stock = inputs.inputStock.value[i];
    if (!(stock == null ? void 0 : stock.l) && !(stock == null ? void 0 : stock.w)) {
      if (i === 0 && inputs.inputStock.value.length > 1) {
        removeStock(stock.listId);
      } else if (i !== 0) {
        removeStock(stock.listId);
      }
    }
  }
  if (!((_b = inputs == null ? void 0 : inputs.inputShapes) == null ? void 0 : _b.value)) return;
  for (let i = inputs.inputShapes.value.length - 1; i >= 0; i--) {
    const shape = inputs.inputShapes.value[i];
    if (!(shape == null ? void 0 : shape.l) && !(shape == null ? void 0 : shape.w)) {
      if (i === 0 && inputs.inputShapes.value.length > 1) {
        removeShape(shape.listId);
      } else if (i !== 0) {
        removeShape(shape.listId);
      }
    }
  }
};
const validateMaterials = (materialStore, useInventory = false) => {
  var _a, _b;
  if (!useInventory) return [];
  const issues = [];
  if (!((_a = inputs == null ? void 0 : inputs.inputShapes) == null ? void 0 : _a.value)) return issues;
  for (let i = inputs.inputShapes.value.length - 1; i >= 0; i--) {
    const shape = inputs.inputShapes.value[i];
    if (!shape) continue;
    if (!valueSet(shape.material)) {
      issues.push(new Issue({
        item: shape,
        message: "no_material",
        listId: [shape.listId]
      }));
      continue;
    }
    const material = materialStore.items.find((m) => m._id === shape.material);
    if ((_b = material == null ? void 0 : material.t) == null ? void 0 : _b.length) {
      if (!shape.t) {
        issues.push(new Issue({
          item: shape,
          message: "no_thickness",
          listId: [shape.listId]
        }));
      } else if (!material.t.includes(shape.t)) {
        issues.push(new Issue({
          item: shape,
          message: "invalid_thickness",
          listId: [shape.listId]
        }));
      }
    }
  }
  return issues;
};
const normaliseOptions = (options) => {
  if (options.orientationModel === void 0 || options.sawData === void 0) {
    throw new Error("orientationModel and sawData are required options");
  }
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    // Ensure required properties are present
    orientationModel: options.orientationModel,
    sawData: options.sawData
  };
};
const validateInputs = (options = {}) => {
  const normalizedOptions = normaliseOptions(options);
  const t2 = normalizedOptions.t;
  removeEmptyInputs();
  const issues = [];
  if (!normalizedOptions.useInventory) {
    issues.push(...validateInputStock(options == null ? void 0 : options.sawData));
  }
  issues.push(...validateInputShapes({
    saw: normalizedOptions.sawData,
    partTrim: convertNumberFormat({ v: normalizedOptions.partTrim }),
    useInventory: normalizedOptions.useInventory
  }));
  const errors = getErrors(issues);
  if (errors.length > 0) {
    console.warn("Validation errors:", JSON.parse(JSON.stringify(errors)));
    addNotice({
      type: "error",
      message: t2("inputs_issue", { x: "part" }),
      additional: errors.map((e) => t2(e.message))
    });
    return false;
  }
  return true;
};
async function validateAndPrepare(rawOptions) {
  var _a, _b;
  const options = normaliseOptions(rawOptions);
  const t2 = options.t;
  try {
    if (!validateInputs(options)) {
      return { valid: false };
    }
    if (options.maxShapes !== Infinity && options.maxShapes && !options.isAdmin && !options.shared) {
      if (totalInputShapes.value > options.maxShapes || totalInputStock.value > options.maxStock) {
        options.onLimit();
        return { valid: false };
      }
    }
    if (!options.useInventory) {
      const stockIssues = validateInputStock();
      const stockErrors = getErrors(stockIssues);
      if (stockErrors.length > 0) {
        addNotice({
          type: "error",
          message: t2("inputs_issue", { x: "stock" }),
          additional: stockErrors.map((i) => t2(i.message))
        });
        return { valid: false };
      }
    } else {
      const materialIssues = validateMaterials(options.materialStore, true);
      const materialErrors = getErrors(materialIssues);
      if (materialErrors.length > 0) {
        addNotice({
          type: "error",
          message: t2("inputs_issue", { x: "material" }),
          additional: materialErrors.map((i) => t2(i.message))
        });
        return { valid: false };
      }
    }
    const saw = options.useInventory ? new Saw(options.selectedSaw) : new Saw(options.sawData);
    const sawErrors = getErrors(saw.issues);
    if (sawErrors.length > 0) {
      addNotice({
        type: "error",
        message: t2("inputs_issue", { x: "saw" }),
        additional: sawErrors.map((i) => t2(i.message))
      });
      return { valid: false };
    }
    const { stockList, issues: stockListIssues } = await createStockList(saw);
    const stockListErrors = getErrors(stockListIssues);
    if (stockListErrors.length > 0) {
      addNotice({
        type: "error",
        message: t2("inputs_issue", { x: "stock" }),
        additional: stockListErrors.map((i) => t2(i.message))
      });
      return { valid: false };
    }
    if (!(stockList == null ? void 0 : stockList.length)) {
      addNotice({
        type: "error",
        message: t2("no_stock")
      });
      return { valid: false };
    }
    const { shapeList, issues: shapeListIssues } = await createShapeList({
      orientationModel: options.orientationModel
    });
    const shapeListErrors = getErrors(shapeListIssues);
    if (shapeListErrors.length > 0) {
      addNotice({
        type: "error",
        message: t2("inputs_issue", { x: "part" }),
        additional: shapeListErrors.map((i) => t2(i.message))
      });
      return { valid: false };
    }
    if (!(shapeList == null ? void 0 : shapeList.length)) {
      addNotice({
        type: "error",
        message: t2("no_parts_list")
      });
      return { valid: false };
    }
    if (((_b = (_a = inputs.userGroups) == null ? void 0 : _a.value) == null ? void 0 : _b.length) > 0) {
      inputs.userGroups.value.forEach((group) => group.populateParentID(inputs.inputShapes.value));
      const userGroupIssues = validateUserGroups(
        inputs.userGroups.value,
        inputs.inputShapes.value
      );
      const userGroupErrors = getErrors(userGroupIssues);
      if (userGroupErrors.length > 0) {
        addNotice({
          type: "error",
          message: t2("inputs_issue", { x: "group" }),
          additional: userGroupErrors.map((i) => t2(i.message))
        });
        return { valid: false };
      }
    }
    return {
      valid: true,
      saw,
      stockList,
      shapeList
    };
  } catch (error) {
    console.error("Validation error:", error);
    addNotice({
      type: "error",
      message: t2("unexpected_error"),
      additional: [(error == null ? void 0 : error.message) ?? ""]
    });
    return { valid: false };
  }
}
function createExtraStringFromOptions(options) {
  if (!options) return "";
  if (!objectValuesPresent(options, true)) return "";
  return Object.values(options).filter((o) => o).join("|");
}
function checkIfValidExtra(shape, extrasKey, type = "Options") {
  if (!type && `${extrasKey}` in shape && typeof shape[extrasKey] === "object") return true;
  const typeKey = `${extrasKey}${type}`;
  if (type && typeKey in shape && typeof shape[typeKey] === "object") return true;
  return false;
}
function getExtraOptionsKey(extraKey) {
  return `${extraKey}Options`;
}
function initExtraOptions(shape, extraKey, keys) {
  const optionsKey = getExtraOptionsKey(extraKey);
  for (const option in shape[optionsKey]) {
    const existingOptionsKeys = Object.keys(shape[optionsKey][option]);
    for (const existingKey of existingOptionsKeys) {
      if (!keys.includes(existingKey)) {
        if (existingKey in shape[optionsKey][option]) {
          delete shape[optionsKey][option][existingKey];
        }
      }
    }
    for (const key of keys) {
      if (option === "all" || !(key in shape[optionsKey][option])) {
        shape[optionsKey][option][key] = "";
      }
    }
  }
}
function removeExtras(shape, extrasKey, clearOptions = true) {
  if (!checkIfValidExtra(shape, extrasKey, "Options")) return;
  const extras = shape[extrasKey];
  const extraKeys = Object.keys(extras);
  for (const option of extraKeys) {
    removeSingleExtra(shape, extrasKey, option, clearOptions);
  }
  if (clearOptions) {
    clearExtrasOptions(shape, extrasKey, "all");
  }
}
function removeSingleExtra(shape, extrasKey, option, clearOptions = true) {
  if (clearOptions) clearExtrasOptions(shape, extrasKey, option);
  if (option === "all") return;
  if (checkIfValidExtra(shape, extrasKey)) shape[extrasKey][option] = false;
}
function clearExtrasOptions(shape, extrasKey, option) {
  if (!checkIfValidExtra(shape, extrasKey, "Options")) return;
  const options = shape[`${extrasKey}Options`];
  const optionObj = options[option];
  if (typeof optionObj !== "object" || optionObj === null) return;
  const optionsKeys = Object.keys(optionObj);
  optionsKeys.forEach((key) => optionObj[key] = "");
}
function setExtrasOption(shape, extrasKey, option, key, value, findExtrasPrice) {
  var _a;
  const optionsKey = extrasKey + "Options";
  if (!((_a = shape == null ? void 0 : shape[optionsKey]) == null ? void 0 : _a[option])) return;
  if (!(key in shape[optionsKey][option])) return;
  setExtra(shape, extrasKey, option, false);
  shape[optionsKey][option][key] = value;
  const selectedOptions = shape[optionsKey][option];
  const options = Object.values(selectedOptions || {}).filter((o) => o);
  if (!Array.isArray(options)) return;
  const price = getExtrasPrice(shape, extrasKey, option, findExtrasPrice);
  setExtra(shape, extrasKey, option, isNumber(price) ? true : false);
}
function setAllExtrasOptions(shape, extrasKey, option, value, keysToIgnore = [], findExtrasPrice) {
  const optionsKey = extrasKey + "Options";
  if (!shape[optionsKey] || typeof shape[optionsKey] !== "object") return;
  const options = Object.keys(shape[optionsKey]);
  if (!options.length) return;
  const price = getExtrasPrice(shape, extrasKey, "all", findExtrasPrice);
  const selectedOptions = shape[optionsKey][option];
  const populatedOptions = Object.values(selectedOptions || {}).filter((o) => o);
  for (const key of options) {
    if (key === "all") continue;
    if (keysToIgnore.includes(key)) continue;
    setExtrasOption(shape, extrasKey, key, option, value, findExtrasPrice);
    if (!Array.isArray(populatedOptions)) {
      setExtra(shape, extrasKey, key, false);
    }
    setExtra(shape, extrasKey, key, isNumber(price) ? true : false);
  }
}
function setExtra(shape, extrasKey, option, mark) {
  var _a;
  if (option === "all") return;
  const optionsKey = getExtraOptionsKey(extrasKey);
  const optionsString = createExtraStringFromOptions((_a = shape == null ? void 0 : shape[optionsKey]) == null ? void 0 : _a[option]);
  if (mark) {
    shape[extrasKey][option] = optionsString || true;
  } else {
    shape[extrasKey][option] = false;
  }
}
function getExtrasPrice(shape, extraType, key, findExtrasPrice) {
  var _a;
  const optionsKey = extraType + "Options";
  if (!((_a = shape == null ? void 0 : shape[optionsKey]) == null ? void 0 : _a[key])) return false;
  const selectedOptions = shape[optionsKey][key];
  const options = Object.values(selectedOptions || {}).filter((o) => o);
  if (!Array.isArray(options)) return false;
  if (!findExtrasPrice || typeof findExtrasPrice !== "function") {
    return false;
  }
  const price = findExtrasPrice(extraType, options);
  if (extraType === "banding" && isCornerSide(key) && isNumber(price)) {
    const bandingCornerPrice = getBandingCornerPrice(shape, key, price);
    return bandingCornerPrice / 1e3;
  }
  return price;
}
function mapLegacyInitData(initData) {
  if (initData == null ? void 0 : initData.type) delete initData.type;
  mapLegacyBanding.call(this, initData);
}
function mapLegacyBanding(initData) {
  if (!(initData == null ? void 0 : initData.banding)) return;
  if (!(typeof initData.banding === "object")) return;
  const bandingKeys = Object.keys(initData.banding);
  if (!bandingKeys.length) return;
  const newBandingKeys = ["labels", "pricing"];
  if (!bandingKeys.every((k) => newBandingKeys.includes(k))) {
    console.warn("SmartCut - legacy banding data provided - please update to use { labels: string[], pricing: Record<string, number> }");
  } else return;
  initData.banding = {
    labels: Object.keys(initData.banding),
    pricing: initData.bandingPricing
  };
}
function mapLegacyOptions(options) {
  if (options == null ? void 0 : options.enable) return;
  options.enable = {};
  const fieldMap2 = {
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const oldKey of Object.keys(fieldMap2)) {
    if (oldKey in options) {
      options.enable[fieldMap2[oldKey].new] = fieldMap2[oldKey].map === "reverse" ? !options[oldKey] : options[oldKey];
      delete options[oldKey];
    }
  }
  console.log(options);
}
const _hoisted_1$k = { id: "mini-stock-nav" };
const _hoisted_2$d = ["onMousedown"];
const _hoisted_3$a = { class: "id" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "StockNavigation",
  props: {
    stockList: {
      type: Array,
      default: () => []
    },
    primaryColor: {
      type: String,
      default: ""
    },
    secondaryColor: {
      type: String,
      default: ""
    },
    activeStockId: {
      type: String,
      default: null
    }
  },
  emits: ["show-stock"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showStock = (stockID) => {
      emit("show-stock", stockID);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.stockList, (stock, index) => {
          return openBlock(), createElementBlock("button", {
            key: index,
            class: normalizeClass(["nav-button", { selected: stock.id === props.activeStockId }]),
            type: "button",
            style: normalizeStyle({
              backgroundColor: stock.id === props.activeStockId ? "#" + props.secondaryColor : "#" + props.primaryColor
            }),
            onMousedown: ($event) => showStock(stock.id)
          }, [
            createBaseVNode("div", _hoisted_3$a, toDisplayString(index + 1), 1),
            withDirectives(createBaseVNode("div", { class: "stack legibility" }, toDisplayString(stock.stack), 513), [
              [vShow, typeof stock.stack === "number" && stock.stack > 1]
            ])
          ], 46, _hoisted_2$d);
        }), 128))
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = {
  name: "Spinner",
  props: {
    size: {
      type: Number,
      default: 100
    },
    showNumber: {
      type: Boolean,
      default: true
    },
    number: {
      type: Number,
      default: 0
    },
    complete: {
      type: Boolean,
      default: false
    }
  }
};
const _hoisted_1$j = { id: "spinner" };
const _hoisted_2$c = ["width", "height"];
const _hoisted_3$9 = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$j, [
    !$props.complete ? (openBlock(), createElementBlock("svg", {
      key: 0,
      class: "loading",
      style: normalizeStyle({ width: $props.size + "px", height: $props.size + "px" }),
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 300 300"
    }, _cache[0] || (_cache[0] = [
      createStaticVNode('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, _hoisted_2$c)) : createCommentVNode("", true),
    $props.complete ? (openBlock(), createElementBlock("svg", {
      key: 1,
      class: "complete",
      style: normalizeStyle({ width: $props.size + "px", height: $props.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, _cache[1] || (_cache[1] = [
      createBaseVNode("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : createCommentVNode("", true),
    $props.showNumber ? (openBlock(), createElementBlock("div", _hoisted_3$9, toDisplayString($props.number), 1)) : createCommentVNode("", true)
  ]);
}
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$3]]);
function setFieldEnabled(allFields, group, type, fieldId, enabled = true) {
  var _a;
  if (!allFields) return;
  if (!type) return;
  if (!fieldId) return;
  if (!((_a = allFields == null ? void 0 : allFields[group]) == null ? void 0 : _a[type])) return;
  const field = allFields[group][type].find((f) => f.id === fieldId);
  if (!field) return;
  if (enabled) field.enabled = true;
  else field.enabled = false;
  return true;
}
function getEnabledFields(allFields, group, type) {
  var _a;
  if (!((_a = allFields == null ? void 0 : allFields[group]) == null ? void 0 : _a[type])) return [];
  return allFields[group][type].filter((f) => f.enabled === true).map((f) => f.id);
}
function getRelevantFieldDefinitions(allFields, fieldDefinitions, group, type, order = []) {
  const enabledFields = getEnabledFields(allFields, group, type);
  if (!enabledFields.length) return [];
  const relevantFieldDefinitions = fieldDefinitions.filter((def) => enabledFields.includes(def.id) || def.custom === true);
  const filteredFieldDefinitions = relevantFieldDefinitions.filter((f) => (f == null ? void 0 : f.fieldMap) && !f.fieldMap.startsWith("customData."));
  if (enabledFields.length !== filteredFieldDefinitions.length) {
    const filteredIds = new Set(filteredFieldDefinitions.map((field) => field.id));
    const missingIds = relevantFieldDefinitions.map((field) => field.id).filter((id) => !filteredIds.has(id)).map((id) => `'${id}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${missingIds.join()}`);
  }
  if (!order.length) return relevantFieldDefinitions;
  relevantFieldDefinitions.sort((a, b) => {
    const indexA = order.indexOf(a.id);
    const indexB = order.indexOf(b.id);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  console.log(relevantFieldDefinitions);
  return relevantFieldDefinitions;
}
const _hoisted_1$i = ["id"];
const _hoisted_2$b = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    buttonBackground: { default: "#848484" },
    iconColor: { default: "#FFFFFF" },
    disabled: { type: Boolean, default: false },
    debug: { type: Boolean, default: false }
  },
  emits: ["updateOrientation"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const orientationIndex = ref(0);
    const mounted = ref(false);
    const validateOrientationLock = (orientationLock2, orientationModel, rectangle, stockGrain) => {
      if (!isInputShape(rectangle) || orientationModel === 0) {
        return orientationLock2;
      }
      const calculatedLock = calculateOrientationLock();
      if (orientationModel === 1) {
        return calculatedLock;
      }
      if (orientationModel === 2 && stockGrain !== "n" && orientationLock2) {
        return calculatedLock;
      }
      return orientationLock2;
    };
    const calculateOrientationLock = (passedProps) => {
      const calculatedProps = { ...props, ...passedProps };
      if (!calculatedProps.rectangle) return "";
      if (!isInputShape(calculatedProps.rectangle)) return "";
      let calculatedOrientationLock = "";
      switch (calculatedProps.orientationModel) {
        case 0:
          calculatedOrientationLock = currentOrientation.value;
          break;
        case 1:
          if (calculatedProps.stockGrain === "y" || calculatedProps.stockGrain === "n") calculatedOrientationLock = calculatedProps.rectangle.l >= calculatedProps.rectangle.w ? "l" : "w";
          else if (calculatedProps.rectangle.l >= calculatedProps.rectangle.w) calculatedOrientationLock = calculatedProps.stockGrain;
          else calculatedOrientationLock = calculatedOrientationLock = calculatedProps.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          calculatedOrientationLock = calculatedProps.rectangle.l >= calculatedProps.rectangle.w ? "l" : "w";
          break;
      }
      return calculatedOrientationLock;
    };
    const click = () => {
      if (props.disabled) return;
      if (orientationOptions.value.length <= 1) return;
      let requiredIndex = null;
      if ([1, 2].includes(props.orientationModel)) {
        requiredIndex = toggleOrientationIndex();
      } else {
        requiredIndex = iterateOrientationIndex();
      }
      orientationIndex.value = requiredIndex;
    };
    const getCurrentOrientationIndex = (orientation) => {
      const index = orientationOptions.value.findIndex((o) => o === orientation);
      if (index === -1) return 0;
      return index;
    };
    const iterateOrientationIndex = () => {
      let requiredIndex = 0;
      const currentIndex = getCurrentOrientationIndex(currentOrientation.value);
      requiredIndex = currentIndex + 1;
      if (requiredIndex > orientationOptions.value.length - 1) requiredIndex = 0;
      return requiredIndex;
    };
    const toggleOrientationIndex = () => {
      let requiredIndex = 0;
      if (!currentOrientation.value) {
        const requiredOrientationLock = calculateOrientationLock();
        requiredIndex = orientationOptions.value.findIndex((o) => o === requiredOrientationLock);
      } else {
        requiredIndex = orientationOptions.value.findIndex((o) => o === "");
      }
      return requiredIndex;
    };
    const emitOrientationUpdate = (newValue) => {
      emit("updateOrientation", newValue);
    };
    const getModelIconKey = () => {
      const orientation = currentOrientation.value;
      switch (props.orientationModel) {
        case 0:
          if (!orientation) return "default";
          if (props.stockGrain === "n") return orientation || props.shapeOrientation || "default";
          return props.stockGrain === "w" ? orientation === "w" ? "w" : "l" : orientation === "l" ? "l" : "w";
        case 1:
          if (!orientation) return "default";
          if (props.stockGrain === "n") return orientation || props.shapeOrientation || "default";
          return props.stockGrain === "w" ? orientation === "w" ? "w" : "l" : orientation === "l" ? "l" : "w";
        case 2:
          if (!orientation) return "default";
          if (props.stockGrain === "n") return orientation || props.shapeOrientation || "default";
          return props.stockGrain === "w" ? orientation === "w" ? "w" : "l" : orientation === "l" ? "l" : "w";
        default:
          return "default";
      }
    };
    const determineLoadState = () => {
      if (!props.rectangle) return;
      const validatedOrientation = validateOrientationLock(
        currentOrientation.value,
        props.orientationModel,
        props.rectangle,
        props.stockGrain
      );
      if (validatedOrientation !== currentOrientation.value) {
        updateOrientation(validatedOrientation);
        return;
      }
      orientationIndex.value = getCurrentOrientationIndex(currentOrientation.value);
      if (!isInputShape(props.rectangle)) return;
      if (props.orientationModel === 1) {
        const orientation = isNew.value ? calculateOrientationLock() : currentOrientation.value;
        updateOrientation(orientation);
        return;
      }
      if (props.orientationModel === 2) {
        let orientation;
        if (isNew.value) {
          orientation = props.stockGrain !== "n" ? calculateOrientationLock() : "";
        } else {
          orientation = currentOrientation.value;
        }
        updateOrientation(orientation);
      }
    };
    const updateOrientation = (orientation) => {
      orientationIndex.value = getCurrentOrientationIndex(orientation);
      emitOrientationUpdate(orientation);
    };
    const logOrientationMatrix = () => {
      const dimensions2 = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ];
      const grainOptions = ["l", "w", "y", "n"];
      const orientationModels = [0, 1, 2];
      const humanReadableOrientationLockWithoutGrain = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      };
      const humanReadableOrientationLockWithGrain = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      };
      const humanReadableStockGrain = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      };
      const results = [];
      dimensions2.forEach((dim) => {
        grainOptions.forEach((grain2) => {
          orientationModels.forEach((model) => {
            const shape = new InputShape({
              l: dim.l,
              w: dim.w
            });
            const props2 = {
              orientationModel: model,
              rectangle: shape,
              stockGrain: grain2
            };
            const orientationLock2 = calculateOrientationLock(props2);
            let shapeDimensions = "";
            if (shape.l === shape.w) {
              shapeDimensions = "l === w";
            } else if (shape.l > shape.w) {
              shapeDimensions = "l >= w";
            } else {
              shapeDimensions = "w > l";
            }
            const descriptionMap = ["l", "w", "y"].includes(grain2) ? humanReadableOrientationLockWithoutGrain : humanReadableOrientationLockWithGrain;
            results.push({
              "Model": model,
              "Stock grain": grain2,
              "Stock grain description": humanReadableStockGrain[grain2],
              "Dimensions": shapeDimensions,
              "Orientation lock": orientationLock2 || "N/A",
              "Orientation Lock description": descriptionMap[orientationLock2] || "N/A"
            });
          });
        });
      });
      results.sort((a, b) => {
        if (a.Model !== b.Model) {
          return a.Model - b.Model;
        }
        if (a["Stock grain"] !== b["Stock grain"]) {
          return a["Stock grain"].localeCompare(b["Stock grain"]);
        }
        const dimensionOrder = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return dimensionOrder[a.Dimensions] - dimensionOrder[b.Dimensions];
      });
      console.table(results);
    };
    const orientationOptions = computed(() => {
      if (!props.rectangle) return ["l", "w"];
      if (isInputUserGroup(props.rectangle)) return ["l", "w"];
      let options = ["", "l", "w"];
      if (props.rectangle.multiEdit) options = [" ", "", "l", "w"];
      if (isSquare2.value) {
        options = options.filter((option) => option !== "w");
      }
      return options;
    });
    const isSquare2 = computed(() => {
      var _a, _b, _c, _d;
      if (isInputShape(props.rectangle) || isInputStock(props.rectangle)) {
        return props.rectangle.isSquare();
      }
      if (props.rectangleType && ((_a = props.rectangle) == null ? void 0 : _a.l) && ((_b = props.rectangle) == null ? void 0 : _b.w)) {
        return ((_c = props.rectangle) == null ? void 0 : _c.l) === ((_d = props.rectangle) == null ? void 0 : _d.w);
      }
      return false;
    });
    const currentOrientation = computed(() => {
      let orientation = "";
      if (isInputUserGroup(props.rectangle)) {
        orientation = props.rectangle.direction;
      } else if (isInputShape(props.rectangle)) {
        orientation = props.rectangle.orientationLock ?? "";
      } else if (isInputStock(props.rectangle)) {
        orientation = props.rectangle.grain ?? "";
      }
      return orientation;
    });
    const dimensions = computed(() => {
      if (isInputUserGroup(props.rectangle) || !props.rectangle) return {
        l: null,
        w: null
      };
      return {
        l: props.rectangle.l,
        w: props.rectangle.w
      };
    });
    const isNew = computed(() => {
      return !dimensions.value.l && !dimensions.value.w;
    });
    const shouldRotate = computed(() => {
      return shouldRotateDiagram(
        props.orientationModel,
        props.stockGrain,
        props.rectangle,
        props.rectangleType,
        props.shapeOrientation
      );
    });
    const icon = computed(() => {
      var _a;
      if (!props.rectangle) {
        return !props.shapeOrientation ? "freeRotation" : "noGrain";
      }
      if (isInputStock(props.rectangle) || props.rectangleType === "stock") {
        const grainMap = {
          " ": "delete",
          "l": "grainLeftRight",
          "w": "grainTopBottom"
        };
        return grainMap[props.rectangle.grain] || "noGrain";
      }
      const iconMap = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      };
      const grain2 = props.stockGrain || "default";
      let iconKey = "default";
      if (isInputShape(props.rectangle) || props.rectangleType === "shape") {
        iconKey = getModelIconKey();
      } else if (isInputUserGroup(props.rectangle)) {
        iconKey = props.rectangle.direction || "default";
      }
      return ((_a = iconMap[grain2]) == null ? void 0 : _a[iconKey]) || iconMap[grain2].default;
    });
    watch(orientationIndex, (newIndex, oldIndex) => {
      if (!mounted.value) return;
      if (oldIndex === void 0) return;
      emitOrientationUpdate(orientationOptions.value[newIndex]);
    }, { immediate: false });
    watch(dimensions, (newDimensions, oldDimensions) => {
      if (!props.rectangle) return;
      if (props.orientationModel === 0) return;
      if (!isInputShape(props.rectangle)) return;
      if (isInputShape(props.rectangle)) {
        if (props.orientationModel === 2 && oldDimensions.l && oldDimensions.w) {
          if (!currentOrientation.value) return;
        }
        if (props.stockGrain === "n" && !currentOrientation.value) return;
      }
      const requiredOrientationLock = calculateOrientationLock();
      if (currentOrientation.value === requiredOrientationLock) return;
      emitOrientationUpdate(requiredOrientationLock);
    }, { immediate: false });
    watch(() => props.stockGrain, (newStockGrain, oldStockGrain) => {
      if (newStockGrain !== oldStockGrain) determineLoadState();
    }, { immediate: true });
    onMounted(() => {
      determineLoadState();
      nextTick(() => {
        mounted.value = true;
        if (props.debug) {
          logOrientationMatrix();
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: _ctx.id,
        class: normalizeClass(["orientation-button", { rot: shouldRotate.value, square: isSquare2.value, disabled: _ctx.disabled, [icon.value]: true }]),
        tabindex: "0",
        "aria-label": "Part orientation",
        style: normalizeStyle({
          backgroundColor: _ctx.buttonBackground
        }),
        onClick: click
      }, [
        icon.value === "delete" ? (openBlock(), createElementBlock("svg", _hoisted_2$b, _cache[0] || (_cache[0] = [
          createBaseVNode("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
        ]))) : createCommentVNode("", true),
        icon.value === "freeRotation" ? (openBlock(), createElementBlock("svg", {
          key: 1,
          class: "arrow",
          style: normalizeStyle({
            stroke: _ctx.iconColor ? _ctx.iconColor : "#ffffff"
          }),
          viewBox: "0 0 67 63",
          xmlns: "http://www.w3.org/2000/svg"
        }, _cache[1] || (_cache[1] = [
          createBaseVNode("g", null, [
            createBaseVNode("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
            createBaseVNode("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
            createBaseVNode("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
            createBaseVNode("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
          ], -1)
        ]), 4)) : createCommentVNode("", true),
        icon.value === "leftRight" ? (openBlock(), createElementBlock("svg", {
          key: 2,
          class: "arrow",
          style: normalizeStyle({
            stroke: _ctx.iconColor ? _ctx.iconColor : "#ffffff"
          }),
          viewBox: "0 0 72 39",
          xmlns: "http://www.w3.org/2000/svg"
        }, _cache[2] || (_cache[2] = [
          createBaseVNode("g", null, [
            createBaseVNode("path", { d: "m5.408 19.408h61.095" }),
            createBaseVNode("g", null, [
              createBaseVNode("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
              createBaseVNode("path", { d: "m17.408 33.408-12-14 12-14" })
            ])
          ], -1)
        ]), 4)) : createCommentVNode("", true),
        icon.value === "topBottom" ? (openBlock(), createElementBlock("svg", {
          key: 3,
          class: "arrow",
          style: normalizeStyle({
            stroke: _ctx.iconColor ? _ctx.iconColor : "#ffffff"
          }),
          viewBox: "0 0 39 72",
          xmlns: "http://www.w3.org/2000/svg"
        }, _cache[3] || (_cache[3] = [
          createBaseVNode("g", null, [
            createBaseVNode("path", { d: "m19.408 66.503v-61.095" }),
            createBaseVNode("g", null, [
              createBaseVNode("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
              createBaseVNode("path", { d: "m33.408 54.503-14 12-14-12" })
            ])
          ], -1)
        ]), 4)) : createCommentVNode("", true),
        icon.value === "grainLeftRight" ? (openBlock(), createElementBlock("svg", {
          key: 4,
          class: "grain",
          style: normalizeStyle({
            stroke: _ctx.iconColor ? _ctx.iconColor : "#ffffff"
          }),
          viewBox: "0 0 106 64",
          xmlns: "http://www.w3.org/2000/svg"
        }, _cache[4] || (_cache[4] = [
          createBaseVNode("g", null, [
            createBaseVNode("path", { d: "m3 3h99.887" }),
            createBaseVNode("path", { d: "m3.113 32h99.887" }),
            createBaseVNode("path", { d: "m3.113 61h99.887" })
          ], -1)
        ]), 4)) : createCommentVNode("", true),
        icon.value === "grainTopBottom" ? (openBlock(), createElementBlock("svg", {
          key: 5,
          class: "grain",
          style: normalizeStyle({
            stroke: _ctx.iconColor ? _ctx.iconColor : "#ffffff"
          }),
          viewBox: "0 0 64 106",
          xmlns: "http://www.w3.org/2000/svg"
        }, _cache[5] || (_cache[5] = [
          createBaseVNode("g", null, [
            createBaseVNode("path", { d: "m61 3v99.887" }),
            createBaseVNode("path", { d: "m32 3.113v99.887" }),
            createBaseVNode("path", { d: "m3 3.113v99.887" })
          ], -1)
        ]), 4)) : createCommentVNode("", true)
      ], 14, _hoisted_1$i);
    };
  }
});
const _hoisted_1$h = ["id"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: false },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const bandingState = ref({
      x1: false,
      x2: false,
      y1: false,
      y2: false
    });
    watch(() => props.inputShape.orientationLock, () => {
      let bandingObject = {
        x1: props.inputShape.banding.x1,
        x2: props.inputShape.banding.x2,
        y1: props.inputShape.banding.y1,
        y2: props.inputShape.banding.y2
      };
      const requiredRotation = getSideRotation(
        props.orientationModel,
        props.stockGrain,
        props.inputShape
      );
      if (requiredRotation) {
        bandingObject = rotateSides(bandingObject, requiredRotation, {
          "x1": "y2",
          "x2": "y1",
          "y1": "x1",
          "y2": "x2"
        });
      }
      bandingState.value = bandingObject;
    }, { deep: true, immediate: true });
    watch([
      () => {
        var _a;
        return (_a = props.inputShape) == null ? void 0 : _a.banding;
      },
      () => props.orientationModel,
      () => props.stockGrain,
      () => {
        var _a;
        return (_a = props.inputShape) == null ? void 0 : _a.orientationLock;
      }
    ], () => {
      var _a;
      if (!((_a = props.inputShape) == null ? void 0 : _a.banding)) return;
      let bandingObject = {
        x1: props.inputShape.banding.x1,
        x2: props.inputShape.banding.x2,
        y1: props.inputShape.banding.y1,
        y2: props.inputShape.banding.y2
      };
      const requiredRotation = getSideRotation(
        props.orientationModel,
        props.stockGrain,
        props.inputShape
      );
      if (requiredRotation) {
        bandingObject = rotateSides(bandingObject, requiredRotation, {
          "x1": "y2",
          "x2": "y1",
          "y1": "x1",
          "y2": "x2"
        });
      }
      bandingState.value = bandingObject;
    }, { deep: true, immediate: true });
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") click();
    };
    const click = () => {
      if (props.disabled) return;
      emit("clicked");
    };
    onMounted(() => {
      var _a;
      (_a = document.getElementById(props.id)) == null ? void 0 : _a.addEventListener("keydown", handleKeyDown);
    });
    onUnmounted(() => {
      var _a;
      (_a = document.getElementById(props.id)) == null ? void 0 : _a.removeEventListener("keydown", handleKeyDown);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: _ctx.id,
        class: normalizeClass(["banding-button", { open: _ctx.open, disabled: _ctx.disabled }]),
        tabindex: "0",
        onClick: click
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["outer", {
            x1: bandingState.value.x1,
            x2: bandingState.value.x2,
            y1: bandingState.value.y1,
            y2: bandingState.value.y2
          }])
        }, _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "inner" }, null, -1)
        ]), 2)
      ], 10, _hoisted_1$h);
    };
  }
});
const tryParseFraction = (value) => {
  value = value.replace(/['"]+/g, "");
  try {
    return new Fraction(value).valueOf();
  } catch {
    return null;
  }
};
function useTextInputProcessor({
  props,
  emit,
  isMounted
}) {
  const state = ref({
    isTyping: false,
    isComposing: false,
    lastValidValue: String(props.value ?? "")
  });
  const processValue2 = (inputValue, isTyping = false) => {
    if (inputValue === void 0 || inputValue === null || inputValue === "") {
      if (props.required) {
        return {
          value: null,
          valid: false,
          message: "field_required"
        };
      } else {
        return {
          value: null,
          valid: true
        };
      }
    }
    if (props.allowZero === false && (inputValue === 0 || inputValue === "0")) {
      return {
        value: null,
        valid: false,
        message: "zero_not_allowed"
      };
    }
    const stringValue = String(inputValue);
    switch (props.type) {
      case "string":
        return { value: stringValue, valid: true };
      case "unitDependent":
        if (props.numberFormat === "fraction") {
          if (isTyping) {
            const isPartialFraction = /^-?\d*\s*-?\d*\/?-?\d*$/.test(stringValue);
            return {
              value: stringValue,
              valid: isPartialFraction
            };
          }
          const parsed = tryParseFraction(stringValue);
          if (parsed === null) {
            return {
              value: null,
              valid: false,
              message: "invalid_fraction"
            };
          }
          let result = parsed;
          if (typeof props.min === "number") result = Math.max(result, props.min);
          if (typeof props.max === "number") result = Math.min(result, props.max);
          const fraction = new Fraction(result);
          const fractionValue = fraction.toFraction(true);
          return {
            value: fractionValue,
            valid: true
          };
        } else if (props.numberFormat === "decimal") {
          const num = parseFloat(stringValue);
          if (isNaN(num)) {
            return {
              value: null,
              valid: false,
              message: "invalid_number"
            };
          }
          let result = num;
          if (typeof props.min === "number") result = Math.max(result, props.min);
          if (typeof props.max === "number") result = Math.min(result, props.max);
          return { value: result, valid: true };
        }
        break;
      case "integer":
      case "float":
        if (isTyping) {
          const regex = props.type === "integer" ? /^-?\d*$/ : /^-?\d*\.?\d*$/;
          return {
            value: stringValue,
            valid: regex.test(stringValue)
          };
        }
        {
          const cleaned = stringValue.replace(
            props.type === "integer" ? /[^0-9-]/g : /[^0-9.-]/g,
            ""
          );
          const num = props.type === "integer" ? parseInt(cleaned) : parseFloat(cleaned);
          return isNaN(num) ? { value: null, valid: false } : { value: num, valid: true };
        }
      default:
        return { value: inputValue, valid: true };
    }
  };
  const handlers = {
    handleInput: (event) => {
      if (!isMounted.value) return;
      const target = event.target;
      const isSpinnerClick = event.type === "input" && ["integer", "float"].includes(props.type) || props.type === "unitDependent" && props.numberFormat === "decimal";
      state.value.isTyping = !isSpinnerClick;
      const processedValue = processValue2(target.value, !isSpinnerClick);
      emit("validation", processedValue, props.id);
      emit("input", target.value);
      if (isSpinnerClick && processedValue.valid) {
        emit("update:value", processedValue.value);
      }
    },
    handleBlur: (event) => {
      if (!isMounted.value) return;
      state.value.isTyping = false;
      const target = event.target;
      const processedValue = processValue2(target.value, false);
      emit("validation", processedValue, props.id);
      if (processedValue.valid) {
        emit("update:value", processedValue.value);
      }
      emit("blur", event);
    },
    handleFocus: (event) => {
      if (!isMounted.value) return;
      emit("focus", event);
    },
    handleKeydown: (event) => {
      if (!isMounted.value) return;
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(event.key)) {
        if (props.type === "unitDependent" && props.numberFormat === "fraction") {
          const validKey = /^[-0-9\s/]$/.test(event.key);
          if (!validKey) {
            event.preventDefault();
          }
        } else if (props.type === "integer" || props.type === "float") {
          const validKey = props.type === "integer" ? /^[-0-9]$/.test(event.key) : /^[-0-9.]$/.test(event.key);
          if (!validKey) {
            event.preventDefault();
          }
        }
      }
      if (event.key === "Enter") {
        state.value.isTyping = false;
        const target = event.target;
        const processedValue = processValue2(target.value, false);
        if (processedValue.valid) {
          emit("update:value", processedValue.value);
        }
        emit("enter", processedValue);
      }
      if (event.key === "Escape") {
        emit("escape");
      }
    },
    getInputPattern: () => {
      switch (props.type) {
        case "integer":
          return "-?[0-9]*";
        case "float":
          return "-?[0-9]*\\.?[0-9]*";
        case "unitDependent":
          if (props.numberFormat === "fraction") {
            return "-?([0-9]+ )?[0-9]*/[0-9]*";
          }
          return "-?[0-9]*\\.?[0-9]*";
        default:
          return void 0;
      }
    },
    getInputMode: () => {
      switch (props.type) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "unitDependent":
          return props.numberFormat === "fraction" ? "numeric" : "decimal";
        default:
          return "text";
      }
    },
    handleCompositionStart: () => {
      state.value.isComposing = true;
    },
    handleCompositionEnd: (event) => {
      state.value.isComposing = false;
      state.value.isTyping = false;
      const target = event.target;
      const processedValue = processValue2(target.value, false);
      if (processedValue.valid) {
        emit("update:value", processedValue.value);
      }
    },
    handlePaste: (event) => {
      var _a;
      if (!isMounted.value) return;
      const pastedText = ((_a = event.clipboardData) == null ? void 0 : _a.getData("text")) || "";
      if (props.type === "integer" || props.type === "float") {
        const regex = props.type === "integer" ? /^-?\d+$/ : /^-?\d*\.?\d*$/;
        if (!regex.test(pastedText)) {
          event.preventDefault();
          return;
        }
      }
      if (props.type === "unitDependent" && props.numberFormat === "fraction") {
        const isValidFractionInput = /^-?\d*\s*\/?-?\d*$/.test(pastedText);
        if (!isValidFractionInput) {
          event.preventDefault();
          return;
        }
      }
      emit("paste", event);
    }
  };
  return {
    state,
    ...handlers,
    processValue: processValue2
  };
}
function useSelectInputProcessor({
  props,
  emit,
  isMounted
}) {
  return {
    handleSelectChange: (event) => {
      if (!isMounted.value) return;
      const target = event.target;
      if (props.multiEdit && target.value === " ") {
        emit("update:value", null);
        return;
      }
      emit("update:value", target.value);
    },
    handleFocus: (event) => {
      if (!isMounted.value) return;
      emit("focus", event);
    },
    handleBlur: (event) => {
      if (!isMounted.value) return;
      emit("blur", event);
    }
  };
}
function useCheckboxInputProcessor({
  props,
  emit,
  isMounted
}) {
  return {
    handleCheckboxChange: (event) => {
      if (!isMounted.value) return;
      const target = event.target;
      const newValue = target.checked ? props.trueValue : props.falseValue;
      if (newValue === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      emit("update:value", newValue);
    },
    handleFocus: (event) => {
      if (!isMounted.value) return;
      emit("focus", event);
    },
    handleBlur: (event) => {
      if (!isMounted.value) return;
      emit("blur", event);
    }
  };
}
const _hoisted_1$g = ["id", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    focus: { type: Boolean },
    allowZero: { type: Boolean },
    min: {},
    max: {},
    default: {},
    debounceMs: {},
    numberFormat: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isMounted = ref(true);
    const inputRef = ref(null);
    const {
      handleInput,
      handleFocus,
      handleBlur,
      handleKeydown,
      handleCompositionStart,
      handleCompositionEnd,
      handlePaste
    } = useTextInputProcessor({
      props,
      emit,
      isMounted
    });
    onMounted(() => {
      if (valueSet(props.default) && props.value === void 0 || props.value === null) {
        emit("update:value", props.default);
      }
      if (props.focus) {
        nextTick(() => {
          var _a;
          (_a = inputRef.value) == null ? void 0 : _a.focus();
        });
      }
    });
    onUnmounted(() => {
      isMounted.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", mergeProps(_ctx.$attrs, {
        id: props.id,
        ref_key: "inputRef",
        ref: inputRef,
        value: props.value,
        inputmode: props.inputMode,
        type: props.inputType,
        placeholder: props.placeholder,
        disabled: props.disabled,
        default: props.default,
        readonly: props.readonly,
        required: props.required,
        min: props.min,
        max: props.max,
        "aria-label": props.ariaLabel,
        "aria-invalid": !!props.issue,
        "aria-describedby": props.errorId,
        onInput: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(handleInput) && unref(handleInput)(...args)),
        onFocus: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
        onBlur: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
        onKeydown: _cache[3] || (_cache[3] = //@ts-ignore
        (...args) => unref(handleKeydown) && unref(handleKeydown)(...args)),
        onCompositionstart: _cache[4] || (_cache[4] = //@ts-ignore
        (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
        onCompositionend: _cache[5] || (_cache[5] = //@ts-ignore
        (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
        onPaste: _cache[6] || (_cache[6] = //@ts-ignore
        (...args) => unref(handlePaste) && unref(handlePaste)(...args))
      }), null, 16, _hoisted_1$g);
    };
  }
});
const _hoisted_1$f = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isMounted = ref(true);
    const inputRef = ref(null);
    const {
      handleCheckboxChange,
      handleFocus,
      handleBlur
    } = useCheckboxInputProcessor({
      props,
      emit,
      isMounted
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        id: props.id,
        ref_key: "inputRef",
        ref: inputRef,
        type: "checkbox",
        checked: props.value === props.trueValue,
        disabled: props.readonly || props.disabled,
        required: props.required,
        "aria-label": props.ariaLabel,
        "aria-invalid": !!props.issue,
        "aria-describedby": props.errorId,
        onChange: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(handleCheckboxChange) && unref(handleCheckboxChange)(...args)),
        onFocus: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
        onBlur: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(handleBlur) && unref(handleBlur)(...args))
      }, null, 40, _hoisted_1$f);
    };
  }
});
const _hoisted_1$e = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"];
const _hoisted_2$a = ["disabled", "selected"];
const _hoisted_3$8 = {
  key: 0,
  value: " "
};
const _hoisted_4$8 = ["hidden", "value", "disabled"];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    text: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "focus", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isMounted = ref(true);
    const inputRef = ref(null);
    const normalizedOptions = computed(() => props.options.map((option) => {
      var _a, _b, _c;
      return {
        value: option.value,
        label: ((_a = option.label) == null ? void 0 : _a.toUpperCase()) ?? ((_c = (_b = option.value) == null ? void 0 : _b.toString()) == null ? void 0 : _c.toUpperCase()),
        hidden: option.hidden ?? false,
        disabled: option.disabled ?? false
      };
    }));
    const {
      handleSelectChange,
      handleFocus,
      handleBlur
    } = useSelectInputProcessor({
      props,
      emit,
      isMounted
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("select", mergeProps(_ctx.$attrs, {
        id: props.id,
        ref_key: "inputRef",
        ref: inputRef,
        value: props.value,
        disabled: props.readonly || props.disabled,
        required: props.required,
        "aria-label": props.ariaLabel,
        "aria-invalid": !!props.issue,
        "aria-describedby": props.errorId,
        onChange: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(handleSelectChange) && unref(handleSelectChange)(...args)),
        onFocus: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
        onBlur: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(handleBlur) && unref(handleBlur)(...args))
      }), [
        createBaseVNode("option", {
          value: "",
          disabled: props.selectFirstOptionDisabled,
          selected: !props.value
        }, toDisplayString(((_b = (_a = props.text) == null ? void 0 : _a.select) == null ? void 0 : _b.toUpperCase()) ?? "SELECT"), 9, _hoisted_2$a),
        props.multiEdit ? (openBlock(), createElementBlock("option", _hoisted_3$8, toDisplayString(((_d = (_c = props.text) == null ? void 0 : _c.delete) == null ? void 0 : _d.toUpperCase()) ?? "DELETE"), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(normalizedOptions.value, (option) => {
          return openBlock(), createElementBlock("option", {
            key: option.value,
            hidden: option.hidden,
            value: option.value,
            disabled: option.disabled
          }, toDisplayString(option.label), 9, _hoisted_4$8);
        }), 128))
      ], 16, _hoisted_1$e);
    };
  }
});
const _hoisted_1$d = ["for"];
const _hoisted_2$9 = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        for: _ctx.id,
        class: "input-label"
      }, [
        createTextVNode(toDisplayString(_ctx.label) + " ", 1),
        _ctx.required ? (openBlock(), createElementBlock("span", _hoisted_2$9, "*")) : createCommentVNode("", true)
      ], 8, _hoisted_1$d);
    };
  }
});
const _hoisted_1$c = ["data-field-id"];
const _hoisted_2$8 = ["disabled", "selected"];
const _hoisted_3$7 = {
  key: 0,
  value: " "
};
const _hoisted_4$7 = ["hidden", "value", "disabled"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
    type: { default: "string" },
    focus: { type: Boolean, default: false },
    label: { default: "" },
    enableLabel: { type: Boolean, default: true },
    labelPosition: { default: "first" },
    output: { default: null },
    options: { default: () => [] },
    selectFirstOptionDisabled: { type: Boolean, default: true },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    allowZero: { type: Boolean, default: true },
    trueValue: { default: true },
    falseValue: { default: false },
    default: { default: null },
    numberFormat: { default: "decimal" },
    shouldConvertNumberFormat: { type: Boolean, default: true },
    min: { default: null },
    max: { default: null },
    custom: { type: Boolean, default: false },
    multiEdit: { type: Boolean, default: false },
    text: { default: () => ({ select: "Select", delete: "Delete" }) },
    issue: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    additional: {},
    debounceMs: {},
    inputClasses: {},
    ariaLabel: {}
  },
  emits: ["update:value", "validation"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const fieldRef = ref(null);
    const inputRef = ref(null);
    const valid = ref(true);
    const previousNumberFormat = ref(props.numberFormat);
    const thisId = computed(() => props.custom ? "custom-" + props.id : props.id);
    const errorId = computed(() => `${thisId.value}-error`);
    const ariaLabel = computed(() => props.label || props.placeholder);
    const htmlInputType = computed(() => getHTMLInputType(props.type, props.numberFormat));
    const inputMode = computed(() => getHTMLInputMode(props.type, props.numberFormat));
    const isTextualInput = computed(() => ["string", "integer", "float", "unitDependent"].includes(props.type));
    const convertedValue = computed(() => {
      let value = props.value;
      if (!valueSet(props.value) && valueSet(props.default)) value = props.default;
      if (props.type !== "unitDependent" || !value) return value;
      try {
        return convertNumberFormat({ v: value, nf: props.numberFormat });
      } catch {
        return props.numberFormat === "decimal" ? 0 : "0";
      }
    });
    const normalisedSelectOptions = computed(() => props.options.map((option) => {
      var _a, _b;
      return {
        value: option.value,
        label: ((_a = option.label) == null ? void 0 : _a.toUpperCase()) || ((_b = option.value) == null ? void 0 : _b.toString().toUpperCase()),
        hidden: option.hidden || false,
        disabled: option.disabled || false
      };
    }));
    const classes = computed(() => ({
      input: true,
      issue: props.issue || !valid.value,
      warning: props.warning,
      required: props.required,
      disabled: props.disabled
    }));
    const baseProps = computed(() => ({
      id: thisId.value,
      value: props.value,
      disabled: props.disabled,
      readonly: props.readonly,
      required: props.required,
      "aria-label": ariaLabel.value,
      "aria-invalid": !!props.issue,
      "aria-describedby": props.issue ? errorId.value : void 0
    }));
    const textInputProps = computed(() => ({
      ...baseProps.value,
      type: props.type,
      inputMode: inputMode.value,
      inputType: htmlInputType.value,
      placeholder: props.placeholder,
      allowZero: props.allowZero,
      min: props.min,
      max: props.max,
      numberFormat: props.numberFormat,
      default: props.default
    }));
    const checkboxInputProps = computed(() => ({
      ...baseProps.value,
      trueValue: props.trueValue,
      falseValue: props.falseValue
    }));
    const selectInputProps = computed(() => ({
      ...baseProps.value,
      options: normalisedSelectOptions.value,
      selectFirstOptionDisabled: props.selectFirstOptionDisabled,
      multiEdit: props.multiEdit,
      text: props.text
    }));
    const setInputRef = (el) => {
      inputRef.value = el;
    };
    const shouldShowLabel = (position) => {
      return props.label && props.enableLabel && props.labelPosition === position;
    };
    const getHTMLInputType = (type, numberFormat) => {
      if (type === "unitDependent") {
        return numberFormat === "fraction" ? "text" : "number";
      }
      switch (type) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    };
    const getHTMLInputMode = (type, numberFormat) => {
      if (type === "unitDependent") {
        return numberFormat === "fraction" ? "text" : "decimal";
      }
      switch (type) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    };
    const handleValueUpdate = (newValue) => {
      emit("update:value", newValue);
    };
    const handleValidation = (result, id) => {
      if (result.valid === void 0 || result.valid === true) {
        valid.value = true;
        emit("validation", fieldRef.value, result);
      } else if (result.valid === false && result.message) {
        valid.value = false;
        console.warn(`Field validation error for field ${id} - ${result.message}`);
        emit("validation", fieldRef.value, result);
      }
    };
    watch(() => props.numberFormat, (newFormat, oldFormat) => {
      if (props.shouldConvertNumberFormat === false) return;
      if (props.type === "unitDependent" && newFormat !== oldFormat && props.value) {
        try {
          const convertedValue2 = convertNumberFormat({ v: props.value, nf: newFormat });
          emit("update:value", convertedValue2);
        } catch {
          emit("update:value", newFormat === "decimal" ? 0 : "0");
        }
      }
      previousNumberFormat.value = newFormat;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "fieldRef",
        ref: fieldRef,
        class: normalizeClass(["input-wrapper", classes.value]),
        "data-field-id": thisId.value
      }, [
        shouldShowLabel("first") ? (openBlock(), createBlock(_sfc_main$f, {
          key: 0,
          id: thisId.value,
          label: _ctx.label,
          required: _ctx.required
        }, null, 8, ["id", "label", "required"])) : createCommentVNode("", true),
        isTextualInput.value ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
          key: 1,
          ref: setInputRef
        }, textInputProps.value, {
          "input-type": htmlInputType.value,
          "input-mode": inputMode.value,
          value: convertedValue.value,
          onValidation: handleValidation,
          "onUpdate:value": handleValueUpdate
        }), null, 16, ["input-type", "input-mode", "value"])) : _ctx.type === "checkbox" ? (openBlock(), createBlock(_sfc_main$h, mergeProps({
          key: 2,
          ref: setInputRef,
          type: "checkbox"
        }, checkboxInputProps.value, {
          checked: _ctx.value === _ctx.trueValue,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => emit("update:value", $event))
        }), null, 16, ["checked"])) : _ctx.type === "select" ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
          key: 3,
          ref: setInputRef
        }, selectInputProps.value, {
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => emit("update:value", $event))
        }), {
          default: withCtx(() => {
            var _a, _b, _c, _d;
            return [
              createBaseVNode("option", {
                value: "",
                disabled: _ctx.selectFirstOptionDisabled,
                selected: !_ctx.value
              }, toDisplayString(((_b = (_a = _ctx.text) == null ? void 0 : _a.select) == null ? void 0 : _b.toUpperCase()) ?? "SELECT"), 9, _hoisted_2$8),
              _ctx.multiEdit ? (openBlock(), createElementBlock("option", _hoisted_3$7, toDisplayString(((_d = (_c = _ctx.text) == null ? void 0 : _c.delete) == null ? void 0 : _d.toUpperCase()) ?? "DELETE"), 1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(normalisedSelectOptions.value, (option) => {
                return openBlock(), createElementBlock("option", {
                  key: option.value,
                  hidden: option.hidden,
                  value: option.value,
                  disabled: option.disabled
                }, toDisplayString(option.label), 9, _hoisted_4$7);
              }), 128))
            ];
          }),
          _: 1
        }, 16)) : createCommentVNode("", true),
        shouldShowLabel("last") ? (openBlock(), createBlock(_sfc_main$f, {
          key: 4,
          id: thisId.value,
          label: _ctx.label,
          required: _ctx.required
        }, null, 8, ["id", "label", "required"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$c);
    };
  }
});
const _hoisted_1$b = {
  key: 0,
  class: "inputs"
};
const _hoisted_2$7 = { class: "label" };
const _hoisted_3$6 = { class: "label" };
const _hoisted_4$6 = { class: "label" };
const _hoisted_5$5 = ["onClick"];
const _hoisted_6$4 = { class: "price" };
const _hoisted_7$2 = ["aria-label"];
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: true },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    extraKeys: {},
    allOptions: {},
    pricing: { default: () => ({}) },
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {}
  },
  emits: ["update-all", "set"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t: t2 } = useTranslation(["main", "errors"]);
    const preFlightIssues = ref(false);
    const extraOptionsKey = computed(() => props.extraType + "Options");
    const columnsStyle = computed(() => {
      var _a;
      if (!((_a = props.allOptions) == null ? void 0 : _a.length)) return "auto";
      const numOptions = props.allOptions.length;
      if (!numOptions) return "auto";
      const cols = numOptions + 3;
      return `repeat(${cols - 1}, minmax(20px, max-content)) 1fr`;
    });
    const updateAll = (key, value) => {
      emit("update-all", props.shape, props.extraType, key, value);
    };
    const setOption = (key, option, value) => {
      emit("set", props.shape, props.extraType, key, option, value);
    };
    const getPricingOptions = (pricing, shape, option, key, optionsIndex) => {
      var _a;
      if (!pricing) return [];
      const options = (_a = shape == null ? void 0 : shape[option]) == null ? void 0 : _a[key];
      if (!options) {
        console.error(`ExtrasInputs: cannot find pricing options for ${option} > ${key}`);
        return [];
      }
      const values = Object.values(options);
      if (!values.length) {
        console.error(`ExtrasInputs: cannot find pricing options for ${option} > ${key}`);
        return [];
      }
      const theseOptions = values.filter((value) => typeof value === "string");
      if (!props.getAvailablePricingOptions) {
        console.error("ExtrasInputs: cannot find pricing function in parent");
        return [];
      }
      return props.getAvailablePricingOptions(pricing, theseOptions, optionsIndex);
    };
    const getPrice = (key) => {
      if (!props.pricing || !Object.values(props.pricing).length) return "";
      if (!props.getPrice) {
        console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent");
        return "";
      }
      const price = props.getPrice(props.shape, props.extraType, key);
      if (!price) return "";
      return props.formatPrice(price);
    };
    const preFlightCheck = () => {
      const issues = [];
      if (!(props.extraType in props.shape)) {
        new Issue(
          {
            item: props.shape,
            message: `The extra type '${props.extraType}' does not exist in the part`
          }
        );
      }
      if (!(extraOptionsKey.value in props.shape)) {
        new Issue(
          {
            item: props.shape,
            message: `The options key '${extraOptionsKey.value}' does not exist in the part`
          }
        );
      }
      if (issues.length) {
        preFlightIssues.value = true;
        console.error("pre-flight issues found in ExtrasInputs: " + issues.map((i) => i.message).join(" "));
      }
    };
    onMounted(() => preFlightCheck());
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return !preFlightIssues.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["extras group", [_ctx.extraType]]),
        style: normalizeStyle({ "grid-column-end": "span " + _ctx.partColumns })
      }, [
        _ctx.allOptions.length === 1 && _ctx.allOptions[0].length === 1 ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
          createBaseVNode("div", _hoisted_2$7, toDisplayString((_b = (_a = _ctx.allOptions) == null ? void 0 : _a[0]) == null ? void 0 : _b[0]), 1),
          createBaseVNode("div", null, [
            ((_c = _ctx.shape) == null ? void 0 : _c[extraOptionsKey.value]) && "all" in _ctx.shape[extraOptionsKey.value] ? (openBlock(), createBlock(_sfc_main$e, {
              key: 0,
              id: `${_ctx.extraType}-all-${_ctx.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: unref(capitalise)(unref(t2)("all")),
              "true-value": (_e = (_d = _ctx.allOptions) == null ? void 0 : _d[0]) == null ? void 0 : _e[0],
              "false-value": "",
              value: (_g = _ctx.shape[extraOptionsKey.value]["all"]) == null ? void 0 : _g[(_f = _ctx.labels) == null ? void 0 : _f[0]],
              "onUpdate:value": _cache[0] || (_cache[0] = (value) => {
                var _a2, _b2;
                setOption("all", (_a2 = _ctx.labels) == null ? void 0 : _a2[0], value);
                updateAll((_b2 = _ctx.labels) == null ? void 0 : _b2[0], value);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : createCommentVNode("", true)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.extraKeys, (key) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            return openBlock(), createElementBlock("div", { key }, [
              ((_a2 = _ctx.labels) == null ? void 0 : _a2[0]) && ((_c2 = (_b2 = _ctx.shape) == null ? void 0 : _b2[extraOptionsKey.value]) == null ? void 0 : _c2[key]) && _ctx.labels[0] in _ctx.shape[extraOptionsKey.value][key] ? (openBlock(), createBlock(_sfc_main$e, {
                key: 0,
                id: `${_ctx.extraType}-${key}-${_ctx.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: unref(capitalise)(unref(t2)(((_d2 = _ctx.userFriendlyFieldMap) == null ? void 0 : _d2[key]) || key)),
                "true-value": (_f2 = (_e2 = _ctx.allOptions) == null ? void 0 : _e2[0]) == null ? void 0 : _f2[0],
                "false-value": "",
                value: _ctx.shape[extraOptionsKey.value][key][_ctx.labels[0]],
                "onUpdate:value": (value) => setOption(key, _ctx.labels[0], value)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : createCommentVNode("", true)
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "grid inputs",
          style: normalizeStyle({
            "grid-template-columns": columnsStyle.value
          })
        }, [
          ((_h = _ctx.shape) == null ? void 0 : _h[extraOptionsKey.value]) && "all" in _ctx.shape[extraOptionsKey.value] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("div", _hoisted_3$6, toDisplayString(unref(capitalise)(unref(t2)("all"))), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allOptions, (options, optionsIndex) => {
              var _a2, _b2;
              return openBlock(), createBlock(_sfc_main$e, {
                id: `${_ctx.extraType}-all-${_ctx.labels[optionsIndex]}-${optionsIndex}-${_ctx.shapeIndex}`,
                key: `${_ctx.extraType}-all-${_ctx.labels[optionsIndex]}-${optionsIndex}-${_ctx.shapeIndex}`,
                type: "select",
                disabled: getPricingOptions(_ctx.pricing, _ctx.shape, extraOptionsKey.value, "all", optionsIndex).length === 0,
                options: getPricingOptions(_ctx.pricing, _ctx.shape, extraOptionsKey.value, "all", optionsIndex).map((option) => ({ value: option, label: option })),
                text: { select: "✘" },
                "select-first-option-disabled": false,
                value: (_b2 = _ctx.shape[extraOptionsKey.value]["all"]) == null ? void 0 : _b2[(_a2 = _ctx.labels) == null ? void 0 : _a2[optionsIndex]],
                "onUpdate:value": (value) => {
                  var _a3, _b3;
                  setOption("all", (_a3 = _ctx.labels) == null ? void 0 : _a3[optionsIndex], value);
                  updateAll((_b3 = _ctx.labels) == null ? void 0 : _b3[optionsIndex], value);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            _cache[2] || (_cache[2] = createBaseVNode("div", null, null, -1)),
            _cache[3] || (_cache[3] = createBaseVNode("div", null, null, -1))
          ], 64)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.extraKeys, (option) => {
            var _a2, _b2;
            return openBlock(), createElementBlock(Fragment, { key: option }, [
              ((_a2 = _ctx.shape) == null ? void 0 : _a2[extraOptionsKey.value]) && option in _ctx.shape[extraOptionsKey.value] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_4$6, toDisplayString(unref(capitalise)(unref(t2)(((_b2 = _ctx.userFriendlyFieldMap) == null ? void 0 : _b2[option]) || option))), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.allOptions, (options, optionsIndex) => {
                  var _a3;
                  return openBlock(), createBlock(_sfc_main$e, {
                    id: `${_ctx.extraType}-${option}-${_ctx.labels[optionsIndex]}-${optionsIndex}-${_ctx.shapeIndex}`,
                    key: `${_ctx.extraType}-${option}-${_ctx.labels[optionsIndex]}-${optionsIndex}-${_ctx.shapeIndex}`,
                    type: "select",
                    disabled: getPricingOptions(_ctx.pricing, _ctx.shape, extraOptionsKey.value, option, optionsIndex).length === 0,
                    options: getPricingOptions(_ctx.pricing, _ctx.shape, extraOptionsKey.value, option, optionsIndex).map((option2) => ({
                      value: option2,
                      label: option2
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": false,
                    value: _ctx.shape[extraOptionsKey.value][option][(_a3 = _ctx.labels) == null ? void 0 : _a3[optionsIndex]],
                    "onUpdate:value": (value) => {
                      var _a4;
                      return setOption(option, (_a4 = _ctx.labels) == null ? void 0 : _a4[optionsIndex], value);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: "delete",
                onClick: () => unref(removeSingleExtra)(_ctx.shape, _ctx.extraType, option)
              }, [
                createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
              ], 8, _hoisted_5$5),
              createBaseVNode("div", _hoisted_6$4, toDisplayString(getPrice(option) || unref(t2)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        createBaseVNode("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": unref(t2)("action_item", { a: "delete", i: _ctx.extraLabel }),
          onClick: _cache[1] || (_cache[1] = () => unref(removeExtras)(_ctx.shape, _ctx.extraType, true))
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] }),
          createTextVNode(" " + toDisplayString(unref(t2)("action_item", { a: "delete", i: _ctx.extraLabel })), 1)
        ], 8, _hoisted_7$2)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$a = ["id", "disabled"];
const _hoisted_2$6 = { class: "icon" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: false },
    id: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const click = () => {
      if (props.disabled) return;
      emit("clicked");
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("button", {
        id: _ctx.id,
        class: normalizeClass(["finish-button", {
          "face-a": (_b = (_a = _ctx.inputShape) == null ? void 0 : _a.finish) == null ? void 0 : _b.a,
          "face-b": (_d = (_c = _ctx.inputShape) == null ? void 0 : _c.finish) == null ? void 0 : _d.b,
          "selected": _ctx.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: _ctx.disabled,
        onClick: click
      }, [
        createBaseVNode("div", _hoisted_2$6, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "spray-can"] })
        ]),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "indicator" }, null, -1))
      ], 10, _hoisted_1$a);
    };
  }
});
const _sfc_main$b = defineComponent({
  name: "MachiningButton",
  props: {
    inputShape: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open"],
  computed: {
    hasMachining() {
      return hasMachining(this.inputShape);
    },
    disabledOrReadonly() {
      var _a;
      return this.disabled || (((_a = this.inputShape) == null ? void 0 : _a.readonly) ? true : false);
    }
  },
  methods: {
    openMachining() {
      if (this.disabled) return;
      this.$emit("open");
    }
  }
});
const _hoisted_1$9 = ["id", "disabled"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  return openBlock(), createElementBlock("button", {
    id: _ctx.id,
    class: normalizeClass(["machining-button", { "has-machining": _ctx.hasMachining }]),
    type: "button",
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.openMachining && _ctx.openMachining(...args))
  }, [
    createVNode(_component_font_awesome_icon, { icon: ["fass", "hammer"] })
  ], 10, _hoisted_1$9);
}
const MachiningButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$2]]);
const _hoisted_1$8 = { id: "uploader" };
const _hoisted_2$5 = {
  key: 0,
  class: "debug"
};
const _hoisted_3$5 = {
  key: 1,
  class: "selected-files"
};
const _hoisted_4$5 = ["src"];
const _hoisted_5$4 = ["onClick"];
const showDevInfo$3 = true;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ImageUpload",
  props: {
    shapeId: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      required: true
    },
    uniqueId: {
      type: String,
      required: true
    },
    env: {
      type: String,
      required: false,
      default: "production"
    },
    maxImages: {
      type: Number,
      required: false,
      default: 5
    },
    images: {
      type: Array,
      required: true
    }
  },
  emits: ["update", "remove"],
  setup(__props, { emit: __emit }) {
    const ObjectViewer2 = defineAsyncComponent(() => Promise.resolve().then(() => ObjectViewer$1));
    const fileInput = ref(null);
    const imageData = ref({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    });
    const props = __props;
    const emit = __emit;
    const isValidFileType = (file) => {
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      return validTypes.includes(file.type);
    };
    const handleButtonClick = () => {
      var _a;
      (_a = fileInput.value) == null ? void 0 : _a.click();
    };
    const handleFileChange = (event) => {
      const target = event.target;
      const files = target.files;
      if (!files) return;
      const newFiles = Array.from(files);
      const invalidFiles = newFiles.filter((file) => !isValidFileType(file));
      if (invalidFiles.length > 0) {
        const invalidFileNames = invalidFiles.map((file) => file.name).join(", ");
        alert(`Invalid file type(s): ${invalidFileNames}
Only JPG and PNG files are allowed.`);
        target.value = "";
        return;
      }
      const currentFiles = imageData.value.files || [];
      const totalFiles = currentFiles.length + newFiles.length;
      if (totalFiles > props.maxImages) {
        alert(`Maximum ${props.maxImages} images allowed per shape.`);
        target.value = "";
        return;
      }
      const updatedFiles = [...currentFiles, ...newFiles];
      const updatedUrls = createPreviewUrls(updatedFiles);
      const updatedMetadata = updatedFiles.map((file, index) => ({
        originalName: file.name,
        newName: `${props.prefix}-${index + 1}-${props.uniqueId}${getFileExtension(file.name)}`
      }));
      const updatedImageData = {
        shapeId: props.shapeId,
        files: updatedFiles,
        previewUrls: updatedUrls,
        metadata: updatedMetadata
      };
      imageData.value = updatedImageData;
      emit("update", updatedImageData);
      target.value = "";
    };
    const createPreviewUrls = (files) => {
      return files.map((file) => URL.createObjectURL(file));
    };
    const getFileExtension = (filename) => {
      return filename.substring(filename.lastIndexOf("."));
    };
    const removeFile = (index) => {
      URL.revokeObjectURL(imageData.value.previewUrls[index]);
      const updatedFiles = [...imageData.value.files];
      const updatedUrls = [...imageData.value.previewUrls];
      const updatedMetadata = [...imageData.value.metadata];
      updatedFiles.splice(index, 1);
      updatedUrls.splice(index, 1);
      updatedMetadata.splice(index, 1);
      if (updatedFiles.length === 0) {
        imageData.value = {
          shapeId: props.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        };
        emit("remove", props.shapeId);
      } else {
        const updatedImageData = {
          shapeId: props.shapeId,
          files: updatedFiles,
          previewUrls: updatedUrls,
          metadata: updatedMetadata
        };
        imageData.value = updatedImageData;
        emit("update", updatedImageData);
      }
    };
    onBeforeUnmount(() => {
      var _a;
      if ((_a = imageData.value) == null ? void 0 : _a.previewUrls) {
        imageData.value.previewUrls.forEach((url) => URL.revokeObjectURL(url));
      }
    });
    onMounted(() => {
      imageData.value.shapeId = props.shapeId;
      const existingImageData = props.images.find((img) => img.shapeId === props.shapeId);
      if (existingImageData) {
        const urls = createPreviewUrls(existingImageData.files);
        imageData.value = {
          ...existingImageData,
          previewUrls: urls
        };
      }
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        __props.env === "development" && showDevInfo$3 ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createVNode(unref(ObjectViewer2), {
            data: [imageData.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        createBaseVNode("input", {
          ref_key: "fileInput",
          ref: fileInput,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: handleFileChange
        }, null, 544),
        createBaseVNode("button", {
          type: "button",
          class: "upload-button",
          onClick: handleButtonClick
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "files"] })
        ]),
        ((_a = imageData.value.files) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_3$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(imageData.value.files, (file, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "selected-file"
            }, [
              createBaseVNode("img", {
                src: imageData.value.previewUrls[index],
                alt: "Preview"
              }, null, 8, _hoisted_4$5),
              createBaseVNode("button", {
                class: "remove-file",
                type: "button",
                onClick: ($event) => removeFile(index)
              }, [
                createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
              ], 8, _hoisted_5$4)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ImageUpload = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-bb77aee9"]]);
function addShapeAxes(shape) {
  var _a, _b;
  const x1 = shape.x;
  const x2 = shape.x + shape.l;
  const xScale = linear().domain([x1, x2]).range([this.scales.xPositionScale(x1), this.scales.xPositionScale(x2)]);
  const y1 = shape.y;
  const y2 = shape.y + shape.w;
  const yScale = linear().domain([y1, y2]).range([this.scales.yPositionScale(y1), this.scales.yPositionScale(y2)]);
  if (this.axes.shapeXAxis) {
    this.axes.shapeXAxis.call(axisBottom(xScale).tickValues(xScale.domain()).tickSize(4).tickFormat(this.formatNumber));
  } else {
    this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(axisBottom(xScale).tickValues(xScale.domain()).tickSize(4).tickFormat(this.formatNumber));
  }
  if (((_b = (_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.saw) == null ? void 0 : _b.stockType) !== "linear") {
    if (this.axes.shapeYAxis) {
      this.axes.shapeYAxis.call(axisLeft(yScale).tickValues(yScale.domain()).tickSize(4).tickFormat(this.formatNumber));
    } else {
      this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(axisLeft(yScale).tickValues(yScale.domain()).tickSize(4).tickFormat(this.formatNumber));
    }
  } else if (this.axes.shapeYAxis) {
    this.axes.shapeYAxis.remove();
    this.axes.shapeYAxis = null;
  }
}
function updateAxes() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((axis) => {
    axis.transition().duration(0).call(axisTop(this.scales.xScale).ticks(5).tickSize(5));
    axis.selectAll("text").attr("dy", -5);
  });
  const requiresStretch = this.requiresStretch(this.props.stock.value);
  if (!requiresStretch || requiresStretch && this.state.stretched) {
    this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((axis) => {
      axis.transition().duration(0).call(axisRight(this.scales.yAxisScale).ticks(5).tickSize(5));
      axis.selectAll("text").attr("dx", 5);
    });
  }
}
function addCutMeasurementAxes(measurements, values, axis) {
  if (!axis || !(measurements == null ? void 0 : measurements.length)) return;
  measurements.forEach((measurement, index) => {
    const [start, end] = measurement;
    if (axis === "x") {
      createXAxisMeasurement.call(this, start, end, values[index]);
    } else {
      createYAxisMeasurement.call(this, start, end, values[index]);
    }
  });
}
function createXAxisMeasurement(start, end, value) {
  const xScale = linear().domain([start, end]).range([
    this.scales.xPositionScale(start),
    this.scales.xPositionScale(end)
  ]);
  const tickPosition = calculateTickPosition(xScale.domain());
  const axis = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(axisBottom(xScale).tickValues([tickPosition]).tickSize(4).tickFormat(() => this.formatNumber(value)));
  axis.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (text, index, list) => {
    var _a, _b;
    return ((_b = (_a = list[index]) == null ? void 0 : _a.getBBox()) == null ? void 0 : _b.height) + 10;
  });
  this.axes.cutMeasurementXAxes.push(axis);
}
function createYAxisMeasurement(start, end, value) {
  const yScale = linear().domain([start, end]).range([
    this.scales.yPositionScale(start),
    this.scales.yPositionScale(end)
  ]);
  const tickPosition = calculateTickPosition(yScale.domain());
  const axis = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(axisLeft(yScale).tickValues([tickPosition]).tickSize(4).tickFormat(() => this.formatNumber(value)));
  formatYAxisText(axis);
  this.axes.cutMeasurementYAxes.push(axis);
}
function calculateTickPosition(domain) {
  return (domain[1] - domain[0]) / 2 + domain[0];
}
function formatYAxisText(axis) {
  axis.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (text, index, list) => {
    var _a, _b;
    return ((_b = (_a = list[index]) == null ? void 0 : _a.getBBox()) == null ? void 0 : _b.height) + 10;
  }).attr("dx", (text, index, list) => {
    var _a, _b;
    return ((_b = (_a = list[index]) == null ? void 0 : _a.getBBox()) == null ? void 0 : _b.width) / 4;
  }).attr("transform", (text, index, list) => {
    var _a, _b;
    return "rotate(90) translate(" + ((_b = (_a = list[index]) == null ? void 0 : _a.getBBox()) == null ? void 0 : _b.width) / 4 + ")";
  });
}
function resetShapeAxes() {
  if (this.axes.shapeXAxis) {
    this.axes.shapeXAxis.remove();
    this.axes.shapeXAxis = null;
  }
  if (this.axes.shapeYAxis) {
    this.axes.shapeYAxis.remove();
    this.axes.shapeYAxis = null;
  }
}
function resetStockAxes() {
  if (this.axes.xAxis) this.axes.xAxis.remove();
  if (this.axes.yAxis) this.axes.yAxis.remove();
}
function resetCutMeasurementAxes() {
  var _a, _b;
  if ((_a = this.axes.cutMeasurementXAxes) == null ? void 0 : _a.length) {
    this.axes.cutMeasurementXAxes.forEach((axis) => axis.remove());
    this.axes.cutMeasurementXAxes.length = 0;
  }
  if ((_b = this.axes.cutMeasurementYAxes) == null ? void 0 : _b.length) {
    this.axes.cutMeasurementYAxes.forEach((axis) => axis.remove());
    this.axes.cutMeasurementYAxes.length = 0;
  }
}
function createShapeLabels() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((d) => [d]).join(
    (enter) => enter.append("text").attr("class", "shape-text id").text((shape) => getShapeIdText.call(this, shape)).classed("hidden", (shape, b, c) => this.isTextHidden(shape, b, c)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s) => this.getRectangleCoordinate(s, "y", "center")).attr("dy", 1),
    (update) => update.attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s) => this.getRectangleCoordinate(s, "y", "center")).attr("dy", 1)
  );
  this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((d) => [d]).join(
    (enter) => enter.append("text").attr("class", "shape-text name").text((shape) => getShapeNameText.call(this, shape)).call(this.trimNameToFit, this).classed("hidden", (shape, b, c) => this.isNameHidden(shape, b, c)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s, b, c) => {
      const node = c[b];
      return this.getRectangleCoordinate(
        s,
        "y",
        "bottom",
        -(node.getBBox().height / 2 + 1)
      );
    }),
    (update) => update.attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s, b, c) => {
      const node = c[b];
      return this.getRectangleCoordinate(
        s,
        "y",
        "bottom",
        -(node.getBBox().height / 2 + 1)
      );
    })
  );
  this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((d) => [d]).join(
    (enter) => enter.append("text").attr("class", "shape-text length").text((shape) => getShapeLengthText.call(this, shape)).classed("hidden", (shape, b, c) => this.isLengthHidden(shape, b, c)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s, b, c) => {
      const node = c[b];
      const height = node.getBBox().height;
      return this.getRectangleCoordinate(s, "y", "top", -(height / 2 + 2));
    }),
    (update) => update.text((shape) => getShapeLengthText.call(this, shape)).classed("hidden", (shape, b, c) => this.isLengthHidden(shape, b, c)).attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s, b, c) => {
      const node = c[b];
      const height = node.getBBox().height;
      return this.getRectangleCoordinate(s, "y", "top", -(height / 2 + 2));
    })
  );
  this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((d) => [d]).join(
    (enter) => enter.append("text").attr("class", "shape-text width").text((shape) => getShapeWidthText.call(this, shape)).classed("hidden", (shape, b, c) => this.isWidthHidden(shape, b, c)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (s, b, c) => {
      const node = c[b];
      const x2 = this.getRectangleCoordinate(
        s,
        "x",
        "left",
        -(node.getBBox().height / 2 + 2)
      );
      const y2 = this.getRectangleCoordinate(s, "y", "center");
      const rotation = this.state.device === "mobile" ? 90 : -90;
      return `translate(${x2},${y2}) rotate(${rotation})`;
    }),
    (update) => update.attr("transform", (s, b, c) => {
      const node = c[b];
      const x2 = this.getRectangleCoordinate(
        s,
        "x",
        "left",
        -(node.getBBox().height / 2 + 2)
      );
      const y2 = this.getRectangleCoordinate(s, "y", "center");
      const rotation = this.state.device === "mobile" ? 90 : -90;
      return `translate(${x2},${y2}) rotate(${rotation})`;
    })
  );
}
function getShapeIdText(shape) {
  var _a, _b;
  if (this.state.env === "development") {
    switch (this.state.debug) {
      case "guillotine":
        {
          const stripDirection = shape.guillotineData.myStripDirection;
          const group = shape.addedAsGroup;
          let shapeText = "";
          if (stripDirection === "l") {
            shapeText = `→ ${shape.parentID}`;
          } else if (stripDirection === "w") {
            shapeText = `↑ ${shape.parentID}`;
          }
          if ((_b = shape == null ? void 0 : shape.priority) == null ? void 0 : _b[(_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.parentID]) {
            shapeText += "P";
          }
          if (group) shapeText += "G";
          if (shapeText.length) return shapeText;
        }
        break;
      case "groups":
        {
          const group = shape.addedAsGroup;
          if (group) return group.split(".")[0].toUpperCase();
        }
        break;
      case "positions":
        return shape.id;
    }
  }
  return shape.parentID ? shape.parentID : shape.getParentID();
}
function getShapeNameText(shape) {
  if (!(shape == null ? void 0 : shape.name)) return null;
  if (typeof (shape == null ? void 0 : shape.name) !== "string") return null;
  return shape.name.toUpperCase().trim();
}
function getShapeLengthText(shape) {
  if (this.state.debug === "guillotine") return "";
  return convertNumberFormat({ v: shape.l, o: this.numberConfig }).toString();
}
function getShapeWidthText(shape) {
  if (this.state.debug === "guillotine") return "";
  return convertNumberFormat({ v: shape.w, o: this.numberConfig }).toString();
}
function drawPositions(shape) {
  if (!this.props.stock) return false;
  if (!shape || !this.settings.main) return false;
  let positions;
  if (!shape.willItFit(this.props.stock.value, shape.rot)) return false;
  const placementCollection = getPlacementPositions(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let rayCastCoords;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let rayHash = function(ray) {
        return `${ray.x1}-${ray.y1}-${ray.x2}-${ray.y2}`;
      }, applyRayAttributes = function(selection) {
        selection.attr("class", "ray").attr("x1", (d) => this.scales.xPositionScale(d.x1)).attr("x2", (d) => this.scales.xPositionScale(d.x2)).attr("y1", (d) => this.scales.yPositionScale(d.y1)).attr("y2", (d) => this.scales.yPositionScale(d.y2));
      };
      if (this.state.env !== "development") return;
      const shapeRays = precomputeShapeRays(this.props.shapes.value, this.props.stock.value);
      const allRays = shapeRays.flatMap((sr) => Object.values(sr.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(allRays, rayHash).join(
        (enter) => enter.append("line").call((enter2) => applyRayAttributes.call(this, enter2)),
        (update) => update.call((update2) => applyRayAttributes.call(this, update2)),
        (exit) => exit.remove()
      );
    }
    rayCastCoords = getRayCastCoordinates(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const positionCollection = new PointCollection();
  for (const p of placementCollection.toArray()) {
    const shapePositions = convertPointToShapePositions(shape, p, this.props.stock.value);
    if (shapePositions) {
      positionCollection.addPoints(shapePositions.toArray());
    }
  }
  if (rayCastCoords) {
    const rayCastCoordsArray = rayCastCoords.toArray();
    for (const p of rayCastCoordsArray) {
      const shapePositions = convertRaycastCollisionPointToShapePositions(shape, p, this.props.stock.value);
      if (shapePositions) {
        positionCollection.addPoints(shapePositions.toArray());
      }
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    [
      new Point(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
      new Point(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
      new Point(
        this.props.stock.value.l - shape.l - (this.props.stock.value.trim.x2 ?? 0),
        0 + (this.props.stock.value.trim.y1 ?? 0)
      ),
      new Point(
        0 + (this.props.stock.value.trim.x1 ?? 0),
        this.props.stock.value.w - shape.w - (this.props.stock.value.trim.y2 ?? 0)
      ),
      new Point(
        this.props.stock.value.l - shape.l - (this.props.stock.value.trim.x2 ?? 0),
        this.props.stock.value.w - shape.w - (this.props.stock.value.trim.y2 ?? 0)
      )
    ].forEach((c) => positionCollection.addPoint(c));
    positions = positionCollection.toArray();
  } else {
    positionCollection.addPoint(new Point(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)));
    positions = positionCollection.toArray();
  }
  for (let i = positions.length; i--; ) {
    const p = positions[i];
    shape.x = p.x;
    shape.y = p.y;
    for (const placedShape of this.props.shapes.value) {
      if (this.collision(shape, placedShape, this.props.stock.value)) {
        positions.splice(i, 1);
        break;
      }
    }
  }
  drawGhostShapes.call(this, positions, shape);
  drawDots.call(this, positions, shape);
  if (!(positions == null ? void 0 : positions.length)) return false;
  return true;
}
function drawGhostShapes(positions, shape) {
  function positionHash(point) {
    return `${point.x}-${point.y}`;
  }
  function applyPositionAttributes(selection, shape2) {
    selection.attr("data-id", (_p, index) => index).attr("class", "shape ghost").attr("x", (p) => {
      shape2.x = p.x;
      return this.getRectangleCoordinate(shape2, "x");
    }).attr("y", (p) => {
      shape2.y = p.y;
      return this.getRectangleCoordinate(shape2, "y");
    }).attr("width", this.getWidthAttribute(shape2)).attr("height", this.getHeightAttribute(shape2)).on("mousedown", (event, position) => {
      this.callbacks.onMoveShape(shape2, position);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(positions, positionHash).join(
    (enter) => enter.append("rect").call((enter2) => applyPositionAttributes.call(this, enter2, shape)),
    (update) => update.call((update2) => applyPositionAttributes.call(this, update2, shape)),
    (exit) => exit.remove()
  );
  if (!this.state.hasTouch) {
    this.selections.ghostShapeGroup.selectAll("rect").on(
      "mouseover",
      function(event) {
        event.stopPropagation();
        select(this).classed("hover", true);
        select(this).raise();
      },
      {
        passive: true
      }
    ).on(
      "mouseout",
      function(event) {
        event.stopPropagation();
        select(this).classed("hover", false);
      },
      {
        passive: true
      }
    );
  }
}
function drawDots(positions, shape) {
  function dotHash(point) {
    return `${point.x}-${point.y}`;
  }
  function applyDotAttributes(selection) {
    selection.attr("class", "dot").attr("cx", (p) => this.scales.xPositionScale(p.x)).attr("cy", (p) => this.scales.yPositionScale(p.y)).attr("r", 6).on("mousedown", (event, position) => {
      this.callbacks.onMoveShape(shape, position);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(positions, dotHash).join(
    (enter) => enter.append("circle").call((enter2) => applyDotAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyDotAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
  shape.x = 0;
  shape.y = 0;
  if (!this.state.hasTouch) {
    this.selections.dotGroup.selectAll("circle").on(
      "mouseover",
      function(event) {
        event.stopPropagation();
        select(this).classed("hover", true);
        const id = select(this).attr("data-id");
        const ghost = select(`.ghost[data-id="${id}"]`);
        ghost.raise();
        ghost.classed("highlight", true);
      },
      {
        passive: true
      }
    ).on(
      "mouseout",
      function(event) {
        event.stopPropagation();
        select(this).classed("hover", false);
        const id = select(this).attr("data-id");
        select(`.ghost[data-id="${id}"]`).classed(
          "highlight",
          false
        );
      },
      {
        passive: true
      }
    );
  }
}
const rectangleHash = (rectangle) => {
  return `${rectangle.parentID}-${rectangle.x}-${rectangle.y}-${rectangle.w}-${rectangle.l}`;
};
function drawShapes() {
  if (!this.props.containerWidth) return;
  resetShapeAxes.call(this);
  const maxParentId = this.props.shapes.value.reduce((max, shape) => {
    const parentId = parseInt(shape.parentID);
    return parentId > max ? parentId : max;
  }, 0);
  this.scales.shapeColorScale.domain([1, maxParentId]);
  if (this.state.env === "development") setupDevelopmentMode.call(this);
  setupShapes.call(this);
}
function setupShapes() {
  this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, rectangleHash).join(
    (enter) => {
      const group = enter.append("g").attr("class", "shape-group");
      createShapeRectangles.call(this, group);
      if (group.size() > 0) {
        drawBanding.call(this, group.data());
      }
      setupHoverEvents.call(this, group);
      group.on("mousedown", handleShapeClick.bind(this));
      return group;
    },
    (update) => {
      createShapeRectangles.call(this, update);
      if (update.size() > 0) {
        drawBanding.call(this, update.data());
      }
      setupHoverEvents.call(this, update);
      update.on("mousedown", handleShapeClick.bind(this));
      return update;
    },
    (exit) => exit.remove()
  );
  if (this.settings.main) {
    requestAnimationFrame(() => createShapeLabels.call(this));
  }
  return this.selections.shapeWrappers.size() > 0;
}
function setupDevelopmentMode() {
  var _a;
  let initialMin = Infinity;
  let initialMax = -Infinity;
  for (const shape of this.props.shapes.value) {
    const score = (_a = shape == null ? void 0 : shape.bestScore) == null ? void 0 : _a.total;
    if (score !== 0 && score !== null && score !== void 0) {
      initialMin = score;
      initialMax = score;
      break;
    }
  }
  const minBestScore = this.props.shapes.value.reduce((min, shape) => {
    var _a2;
    const score = (_a2 = shape == null ? void 0 : shape.bestScore) == null ? void 0 : _a2.total;
    if (score === 0 || score === null || score === void 0)
      return min;
    return score < min ? score : min;
  }, initialMin);
  const maxBestScore = this.props.shapes.value.reduce((max, shape) => {
    var _a2;
    const score = (_a2 = shape == null ? void 0 : shape.bestScore) == null ? void 0 : _a2.total;
    if (score === null || score === void 0) return max;
    return score > max ? score : max;
  }, initialMax);
  this.scales.scoreColorScale = sequential([rgb(251, 224, 255), rgb(122, 0, 138)]).domain([minBestScore, maxBestScore]);
}
function createShapeRectangles(selection) {
  const newRectangles = selection.selectAll("rect.shape").data((d) => [d]).join("rect").attr("class", "shape").attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).style("fill", (s) => {
    var _a;
    return (_a = getShapeColor.call(this, s)) == null ? void 0 : _a.toString();
  });
  if (!this.selections.shapeRectangles) {
    this.selections.shapeRectangles = newRectangles;
  } else {
    this.selections.shapeRectangles = selectAll(
      this.selections.shapeRectangles.nodes().concat(newRectangles.nodes())
    );
  }
}
function getRotatedSide(key) {
  const rotationMap = {
    "x1": "y1",
    "x2": "y2",
    "y1": "x2",
    "y2": "x1",
    "l1": "w1",
    "l2": "w2",
    "w1": "l2",
    "w2": "l1"
  };
  return rotationMap[key] || key;
}
function setupHoverEvents(selection) {
  if (!this.settings.main || this.settings.app || this.state.hasTouch) return;
  selection.on("mouseover", (event) => {
    if ((this == null ? void 0 : this.props.moveMode) && this.state.moving) return;
    const target = select(event.target);
    target.classed("hover", true);
    if (!target.classed("selected")) {
      target.style("fill", this.config.colors.partHover.toString());
    }
  }, { passive: true }).on("mouseout", (event, shape) => {
    var _a;
    const target = select(event.target);
    target.classed("hover", false);
    if (!target.classed("selected")) {
      target.style("fill", (_a = getShapeColor.call(this, shape)) == null ? void 0 : _a.toString());
    }
  }, { passive: true });
}
function handleShapeClick(event, shape) {
  if (this.state.moving || !this.settings.main) return false;
  if (this.state.env === "development") {
    handleDevelopmentModeClick.call(this, event, shape);
  }
  if (this.settings.app || this.settings.embed) {
    handleAppModeClick.call(this, event, shape);
  }
  if (this.state.device === "desktop") {
    resetCutMeasurementAxes.call(this);
    addShapeAxes.call(this, shape);
  }
  if (this.props.moveMode.value) {
    this.callbacks.onAddToPartsBin(shape);
  } else {
    this.findShape.call(this, shape.id);
  }
}
function handleDevelopmentModeClick(event, shape) {
  console.clear();
  if (shape) {
    let logProperties;
    switch (this.state.debug) {
      case "guillotine":
        logProperties = [
          "id",
          "placementOrder",
          "priority",
          "guillotineData.myPhase",
          "guillotineData.myStripDirection",
          "guillotineData.myStripParent",
          "guillotineData.firstShape",
          "addedAsGroup"
        ];
        handleGuillotineHighlighting.call(this, shape);
        break;
      case "groups":
        logProperties = ["id", "addedAsGroup"];
        break;
      case "score":
        logProperties = ["id", "bestScore.score"];
        break;
      default:
        logProperties = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score"];
    }
    console.table(getShapeProperties(shape, logProperties));
  }
}
function getShapeProperties(shape, properties) {
  return properties.reduce((obj, prop) => {
    const value = getNestedProperty(shape, prop);
    obj[prop] = Array.isArray(value) ? value.join(", ") : value;
    return obj;
  }, {});
}
function handleGuillotineHighlighting(shape) {
  var _a, _b, _c;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", false);
  this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", false);
  this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", false);
  const stripParentId = (_a = shape.guillotineData) == null ? void 0 : _a.myStripParent;
  if (stripParentId) {
    const el = this.selections.shapeWrappers.filter((d) => d.id === stripParentId || d.addedAsGroup === stripParentId);
    el.select("rect").classed("highlight-a", true);
  }
  const stripParentParentId = (_c = (_b = this.props.shapes.value.find((s) => s.id === stripParentId)) == null ? void 0 : _b.guillotineData) == null ? void 0 : _c.myStripParent;
  if (stripParentParentId) {
    const el = this.selections.shapeWrappers.filter((d) => d.id === stripParentParentId || d.addedAsGroup === stripParentId);
    el.select("rect").classed("highlight-b", true);
  }
}
function handleAppModeClick(event, shape) {
  var _a, _b;
  const eventData = {
    name: shape.name,
    id: shape.id,
    x: shape.x,
    y: shape.y,
    l: shape.l,
    w: shape.w,
    banding: (shape == null ? void 0 : shape.banding) && typeof shape.banding === "object" ? shape.banding : null,
    rot: shape.rot,
    stock: (_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.id,
    color: (_b = getShapeColor.call(this, shape)) == null ? void 0 : _b.toString(),
    notes: shape == null ? void 0 : shape.notes
  };
  if (this.state.env === "development") {
    console.log(eventData);
  }
  const partClickEvent = new CustomEvent("partClick", {
    detail: eventData
  });
  this.selections.htmlEl.dispatchEvent(partClickEvent);
  if (this.settings.app) return false;
}
function getShapeColor(shape) {
  var _a;
  if (this.state.env === "development") {
    switch (this.state.debug) {
      case "guillotine":
        if (shape.guillotineData.firstShape) {
          return rgb(252, 3, 182);
        }
        if (shape.addedAsGroup) {
          return rgb(43, 156, 16);
        }
        if (typeof shape.guillotineData.myPhase === "number") {
          const startColor = [0, 115, 255];
          const endColor = [176, 255, 231];
          const color = startColor.map((start, i) => {
            return Math.round(start + shape.guillotineData.myPhase / 5 * (endColor[i] - start));
          });
          return `rgb(${color.join(",")})`;
        }
        break;
      case "groups":
        if (shape.addedAsGroup !== false) {
          return rgb(43, 156, 16);
        }
        break;
      case "priorityShapes":
        if ((shape == null ? void 0 : shape.priority) && ((_a = shape.priority) == null ? void 0 : _a[shape.stock.parentID])) {
          return rgb(139, 171, 46);
        }
        break;
      case "score":
        return this.scales.scoreColorScale(shape.bestScore.total);
    }
  }
  return this.scales.shapeColorScale(parseInt(shape.parentID));
}
function createBandingData(shapes) {
  const bandingData = [];
  for (const shape of shapes) {
    if (shape == null ? void 0 : shape._banding) {
      for (const [key, value] of Object.entries(shape._banding)) {
        if (!value || ["a", "b", "c", "d"].includes(key)) continue;
        let side = key;
        if (shape.rot) side = getRotatedSide.call(this, key);
        const bandingCoords = calculateBandingCoordinates.call(this, shape, side);
        if (bandingCoords) bandingData.push(bandingCoords);
      }
    }
  }
  return bandingData;
}
function applyBandingAttributes(selection) {
  return selection.attr("class", "banding").attr("x1", (d) => this.scales.xPositionScale(d.x1) + getBandingAdjustment.call(this, d.type, "x")).attr("x2", (d) => this.scales.xPositionScale(d.x2) + getBandingAdjustment.call(this, d.type, "x")).attr("y1", (d) => this.scales.yPositionScale(d.y1) + getBandingAdjustment.call(this, d.type, "y")).attr("y2", (d) => this.scales.yPositionScale(d.y2) + getBandingAdjustment.call(this, d.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function drawBanding(shapes) {
  if (!this.settings.main) return;
  const bandingData = createBandingData.call(this, shapes);
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(bandingData).join(
    (enter) => enter.append("line").call((enter2) => applyBandingAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyBandingAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
}
function getBandingAdjustment(type, coordinate) {
  var _a;
  const adjustments = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  };
  return ((_a = adjustments[type]) == null ? void 0 : _a[coordinate]) ?? 0;
}
function calculateBandingCoordinates(shape, side) {
  const coords = {
    x1: shape.x,
    x2: shape.x,
    y1: shape.y,
    y2: shape.y,
    type: side
  };
  switch (side) {
    case "x1":
      coords.y2 = shape.y + shape.w;
      break;
    case "x2":
      coords.x1 = coords.x2 = shape.x + shape.l;
      coords.y2 = shape.y + shape.w;
      break;
    case "y1":
      coords.x2 = shape.x + shape.l;
      break;
    case "y2":
      coords.y1 = coords.y2 = shape.y + shape.w;
      coords.x2 = shape.x + shape.l;
      break;
    default:
      return null;
  }
  return coords;
}
function updateShapeVisibility(number) {
  this.selections.shapeWrappers.style("visibility", (shape) => {
    if ((shape == null ? void 0 : shape.placementOrder) >= number) return "hidden";
    return "visible";
  });
}
const stockHash = (stock) => `${stock.w}-${stock.l}-${stock.grain}`;
function applyBackgroundAttributes(selection) {
  return selection.style("fill", this.config.colors.stock).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function applyPatternAttributes(selection) {
  return selection.style("fill", "url(#stripes)").attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function drawStock() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return false;
  this.setAspectRatio();
  updateAxes.call(this);
  this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], stockHash).join(
    (enter) => enter.append("rect").attr("class", "background stock").call((enter2) => applyBackgroundAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyBackgroundAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
  this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], stockHash).join(
    (enter) => enter.append("rect").attr("class", "stock-pattern").call((enter2) => applyPatternAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyPatternAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
}
function segmentHash(segment) {
  return `${segment.x}-${segment.y}-${segment.w}-${segment.l}`;
}
function drawSegments(segments) {
  if (!this.props.containerWidth)
    return false;
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(segments, segmentHash).join(
    (enter) => enter.append("rect").attr("class", "segment").call((enter2) => applySegmentAttributes.call(this, enter2)),
    (update) => update.call((update2) => applySegmentAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
  addSegmentLabels.call(this, this.selections.segmentRectangles);
  if (!this.settings.app && this.state.env === "development") {
    setupSegmentDebugEvents.call(this);
  }
}
function applySegmentAttributes(selection) {
  return selection.style("opacity", (segment) => (segment == null ? void 0 : segment.offcut) === true ? 0.5 : 1).classed("offcut", (segment) => segment.offcut).classed("merged", (segment) => segment.merged).classed("near", (segment) => segment.shapePosition === "near").classed("far", (segment) => segment.shapePosition === "far").classed("completed", (segment) => segment.completed).attr("x", (segment) => this.getRectangleCoordinate(segment, "x")).attr("y", (segment) => this.getRectangleCoordinate(segment, "y")).attr("width", (segment) => this.getWidthAttribute(segment)).attr("height", (segment) => this.getHeightAttribute(segment));
}
function addSegmentLabels(segments) {
  this.selections.segmentGroup.selectAll("text").data(segments, segmentHash).join(
    (enter) => enter.append("text").attr("class", "segment-text").call((enter2) => applyLabelAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyLabelAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
}
function applyLabelAttributes(selection) {
  return selection.attr("x", (segment) => this.getRectangleCoordinate(segment, "x", "center")).attr("y", (s) => this.getRectangleCoordinate(s, "y", "center")).attr("text-anchor", "middle").text(getSegmentLabel.call(this)).attr("dominant-baseline", "middle");
}
function getSegmentLabel(segment) {
  if (this.state.env !== "development") return null;
  if (segment.offcut) return null;
  const prefix = segment.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${prefix} ${segment.id}` : prefix;
}
function setupSegmentDebugEvents() {
  this.selections.segmentRectangles.on("mousedown", function(event, segment) {
    const logSegment = structuredClone(segment);
    const logProperties = [
      "id",
      "x",
      "y",
      "l",
      "w",
      "cutDirection",
      "cutPreference"
    ];
    console.log(logProperties.reduce((obj, prop) => {
      obj[prop] = getNestedProperty(logSegment, prop);
      return obj;
    }, {}));
  });
}
function getCutSegments(cut) {
  var _a;
  const parentSegmentID = (_a = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _a.parentSegmentID;
  if (!this.props.segments.value.length) return false;
  let mainSegment;
  if (parentSegmentID) {
    mainSegment = this.props.segments.value.find((s) => s.id === parentSegmentID);
  } else {
    mainSegment = this.props.segments.value.find((s) => s.segmentType === "root");
  }
  if (mainSegment === void 0) return false;
  const children = mainSegment == null ? void 0 : mainSegment.children;
  if (children == null ? void 0 : children.length) {
    const siblings = children.map((child) => {
      const s = this.props.segments.value.find((segment) => segment.x === child.x && segment.y === child.y && segment.l === child.l && segment.w === child.w);
      return s || null;
    }).filter((s) => s !== null);
    return {
      main: mainSegment,
      siblings
    };
  }
  return false;
}
function cutHash(cut) {
  return `${cut.stock.saw.bladeWidth}-${cut.x1}-${cut.y1}-${cut.x2}-${cut.y2}`;
}
function drawCuts() {
  if (!this.props.containerWidth) return;
  this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, cutHash).join(
    (enter) => enter.append("line").attr("class", "cut").call((enter2) => applyLineAttributes.call(this, enter2)),
    (update) => update.call((update2) => applyLineAttributes.call(this, update2)),
    (exit) => exit.remove()
  );
}
function applyLineAttributes(selection) {
  return selection.attr("stroke-width", (cut) => {
    const width = this.scales.measurementScale(this.getBladeWidth(cut.stock));
    if (width < 1) return 1;
    return Math.ceil(width);
  }).attr("x1", (cut) => this.scales.xPositionScale(cut.getVisCoords("x1"))).attr("x2", (cut) => this.scales.xPositionScale(cut.getVisCoords("x2"))).attr("y1", (cut) => this.scales.yPositionScale(cut.getVisCoords("y1"))).attr("y2", (cut) => this.scales.yPositionScale(cut.getVisCoords("y2"))).classed("trim", (cut) => cut.isTrim);
}
function isCutComplete(c, parentSegmentID, segmentCutOrder) {
  return c.guillotineData.parentSegmentID === parentSegmentID && segmentCutOrder && c.guillotineData.segmentCutOrder < segmentCutOrder;
}
function isCutInsideSegment(c, parentSegmentID) {
  var _a;
  return ((_a = c.guillotineData) == null ? void 0 : _a.parentSegmentID) !== null && !(c == null ? void 0 : c.isTrim) ? c.guillotineData.parentSegmentID === parentSegmentID : false;
}
function handleGuillotineCutVisibility(cut, parentSegmentID, orderKey, sorting2) {
  this.selections.cutLines.style("visibility", (c) => {
    if (typeof cut.guillotineData[orderKey] === "number" && c.guillotineData[orderKey] <= cut.guillotineData[orderKey]) {
      return "visible";
    }
    if (!sorting2 && c.guillotineData.parentSegmentID === parentSegmentID) {
      return "visible";
    }
    return "hidden";
  });
  this.selections.cutLines.classed("highlight", (c) => {
    if (cut.stock.cutType === "guillotine" && c.isTrim)
      return c.type === cut.type;
    return c.guillotineData[orderKey] === cut.guillotineData[orderKey];
  });
  this.selections.cutLines.classed("ptx-dummy", (c) => c.guillotineData.ptxDummyCut);
  if (!sorting2) {
    handleSegmentBasedCutVisibility.call(this, cut, parentSegmentID);
  }
}
function handleStandardCutVisibility(cut, index, trim2, axis, halfBladeWidth) {
  this.selections.cutLines.style("visibility", (c, thisIndex) => thisIndex <= index ? "visible" : "hidden");
  let measurements;
  if ((cut == null ? void 0 : cut.dimension) === "l") {
    measurements = [
      [0 + (trim2.y1 ?? 0), cut.y1 - halfBladeWidth],
      [cut.y1 + halfBladeWidth, cut.stock.w - ((trim2 == null ? void 0 : trim2.y2) ? trim2.y2 : 0)]
    ];
  } else if ((cut == null ? void 0 : cut.dimension) === "w") {
    measurements = [
      [0 + (trim2.x1 ?? 0), cut.x1 - halfBladeWidth],
      [cut.x1 + halfBladeWidth, cut.stock.l - ((trim2 == null ? void 0 : trim2.x2) ? trim2.x2 : 0)]
    ];
  }
  if (measurements == null ? void 0 : measurements.length) {
    const values = [
      measurements[0][1] - measurements[0][0],
      measurements[1][1] - measurements[1][0]
    ];
    if (this.state.device === "desktop" && !cut.isTrim)
      addCutMeasurementAxes.call(this, measurements, values, axis);
  }
  this.selections.cutLines.classed("highlight", (cut2, cutIndex) => cutIndex === index);
}
function handleSegmentBasedCutVisibility(cut, parentSegmentID) {
  var _a, _b, _c, _d, _e, _f;
  const segmentCutOrder = (_a = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _a.segmentCutOrder;
  if (segmentCutOrder === void 0 || segmentCutOrder === null) return;
  this.selections.cutLines.classed("completed", (c) => isCutComplete(c, parentSegmentID, segmentCutOrder));
  this.selections.cutLines.classed("inside-segment", (c) => isCutInsideSegment(c, parentSegmentID));
  const segments = getCutSegments.call(this, cut);
  if (segments === false) return;
  const relevantSegment = (_c = segments == null ? void 0 : segments.siblings) == null ? void 0 : _c[((_b = segments.main) == null ? void 0 : _b.hasBeamTrim) ? segmentCutOrder - 1 : segmentCutOrder];
  if (relevantSegment) {
    let measurements = [];
    let values;
    const halfBladeWidth = this.getHalfBladeWidth(cut.stock);
    const axis = cut.dimension === "l" ? "y" : "x";
    if ((cut == null ? void 0 : cut.dimension) === "l") {
      measurements = [
        [
          relevantSegment.y,
          relevantSegment.y + relevantSegment.w
        ],
        [
          cut.y1 + halfBladeWidth,
          (segments == null ? void 0 : segments.main.y) + (segments == null ? void 0 : segments.main.w)
        ]
      ];
      values = [(_d = cut == null ? void 0 : cut.distances) == null ? void 0 : _d.bottom, cut == null ? void 0 : cut.distances.top];
    } else if ((cut == null ? void 0 : cut.dimension) === "w") {
      measurements = [
        [
          relevantSegment.x,
          relevantSegment.x + relevantSegment.l
        ],
        [
          cut.x1 + halfBladeWidth,
          (segments == null ? void 0 : segments.main.x) + (segments == null ? void 0 : segments.main.l)
        ]
      ];
      values = [(_e = cut == null ? void 0 : cut.distances) == null ? void 0 : _e.left, (_f = cut == null ? void 0 : cut.distances) == null ? void 0 : _f.right];
    }
    if (this.state.device === "desktop" && !cut.isTrim && values) {
      addCutMeasurementAxes.call(this, measurements, values, axis);
    }
  }
}
function showCut(index = null, sorting2 = "") {
  var _a, _b, _c, _d;
  if (index === null) return;
  if (this.selections.cutLines.empty()) return;
  const cut = this.props.cuts.value[index];
  resetShapeAxes.call(this);
  resetCutMeasurementAxes.call(this);
  select(this.selections.cutLines.nodes()[index].parentElement).raise();
  const parentSegmentID = (_a = cut.guillotineData) == null ? void 0 : _a.parentSegmentID;
  const halfBladeWidth = this.getHalfBladeWidth(cut.stock);
  const axis = cut.dimension === "l" ? "y" : "x";
  const trim2 = (_b = cut == null ? void 0 : cut.stock) == null ? void 0 : _b.trim;
  const orderKey = sorting2 === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((_c = cut == null ? void 0 : cut.stock) == null ? void 0 : _c.cutType) && parentSegmentID !== null && typeof parentSegmentID !== "undefined") {
    handleGuillotineCutVisibility.call(this, cut, parentSegmentID, orderKey, sorting2);
  } else {
    handleStandardCutVisibility.call(this, cut, index, trim2, axis, halfBladeWidth);
  }
  updateCutStrokeWidth.call(this, cut, index, parentSegmentID);
  if (sorting2 === "ptx") {
    this.removeSegments();
    return;
  }
  const cutSegments = getCutSegments.call(this, cut);
  if (cutSegments === false) return;
  const { main, siblings } = cutSegments;
  if (!((_d = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _d.parentSegmentID)) {
    return drawSegments.call(this, [main]);
  }
  const numSiblings = siblings == null ? void 0 : siblings.length;
  let segments = [];
  if (numSiblings) {
    for (let i = numSiblings; i--; ) {
      if (siblings[i]) {
        siblings[i].completed = false;
      }
    }
    if (cut.guillotineData.segmentCutOrder === void 0 || cut.guillotineData.segmentCutOrder === null) {
      return;
    }
    const order = cut.guillotineData.segmentCutOrder;
    for (let i = 0; i < numSiblings; i++) {
      if (i < order) {
        siblings[i].completed = true;
      }
    }
    segments.push(...siblings);
    segments = segments.filter((s) => s);
  }
  if (segments.length) {
    drawSegments.call(this, segments);
  }
}
function updateCutStrokeWidth(cut, index, parentSegmentID) {
  this.selections.cutLines.attr("stroke-width", (c, cutIndex) => {
    var _a;
    let width = Math.ceil(this.scales.measurementScale(this.getBladeWidth(c.stock)));
    const segmentCutOrder = (_a = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _a.segmentCutOrder;
    if (isCutComplete(c, parentSegmentID, segmentCutOrder) || isCutInsideSegment(c, parentSegmentID)) {
      width += 1;
    }
    if (cutIndex === index && Math.ceil(this.scales.measurementScale(this.getBladeWidth(c.stock))) < 5) {
      width = 5;
    }
    return width;
  });
}
function resetCuts() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", false).classed("completed", false).classed("inside-segment", false).classed("ptx-dummy", false);
  this.selections.cutLines.attr("stroke-width", (cut) => {
    const width = this.scales.measurementScale(this.getBladeWidth(cut.stock));
    if (width < 1) return 1;
    return Math.ceil(width);
  });
  resetShapeAxes.call(this);
  resetCutMeasurementAxes.call(this);
}
function isHexColor(hex) {
  return typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex.replace("#", "")));
}
function getNestedProperty(obj, path2) {
  return get(obj, path2);
}
class Diagram {
  constructor(config2) {
    __publicField(this, "config");
    __publicField(this, "props");
    __publicField(this, "settings");
    __publicField(this, "options");
    __publicField(this, "numberConfig");
    __publicField(this, "callbacks");
    __publicField(this, "selections");
    __publicField(this, "state");
    __publicField(this, "scales");
    __publicField(this, "axes");
    __publicField(this, "formatNumber", (v) => {
      return convertNumberFormat({
        v,
        o: this.numberConfig
      }).toString();
    });
    this.config = config2;
    this.selections = {};
    if (!config2.elementID) return;
    this.selections.el = select(config2.elementID);
    if (this.selections.el === null) return;
    const htmlElement = this.selections.el.node();
    if (htmlElement === null) return;
    this.selections.htmlEl = htmlElement;
    this.scales = {
      xScale: linear(),
      yScale: linear(),
      yPositionScale: linear(),
      xPositionScale: linear(),
      yAxisScale: linear(),
      measurementScale: linear(),
      shapeColorScale: sequential(),
      scoreColorScale: sequential()
    };
    this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    };
    this.state = {
      env: "development",
      device: "desktop",
      debug: "",
      hasTouch: false,
      stretched: false,
      moving: false,
      moveRotation: false,
      highlightguillotine: false,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      padding: 0,
      mobileBreakpoint: 768,
      axisSpacing: 20,
      shapeColors: {}
    };
    this.props = config2.props;
    this.settings = config2.settings;
    this.options = config2.options;
    this.callbacks = config2.callbacks;
    this.numberConfig = config2.numberConfig;
    this.initColors(config2);
    this.initNumbers(config2);
    this.init();
  }
  initColors(config2) {
    const defaultColors = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    };
    const processColor = (colorValue, defaultColor) => rgb("#" + (isHexColor(colorValue == null ? void 0 : colorValue.replace("#", "")) ? colorValue.replace("#", "") : defaultColor.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(defaultColors).map(([key, defaultValue]) => {
        var _a;
        return [
          key,
          processColor((_a = config2.colors) == null ? void 0 : _a[key], defaultValue)
        ];
      })
    );
    this.scales.shapeColorScale = sequential([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(config2) {
    this.numberConfig = config2.numberConfig;
    if (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces))
      this.numberConfig.decimalPlaces = 2;
    if (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo))
      this.numberConfig.fractionRoundTo = 0;
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const svgElement = this.selections.htmlEl.querySelector("svg");
    if (svgElement === null) {
      const svg = this.selections.el.append("svg").attr("class", "vis");
      if (svg === null) return;
      svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
      svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
      svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
      this.selections.svgCanvas = svg;
    } else {
      this.selections.svgCanvas = select(svgElement);
    }
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group");
    this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x");
    this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y");
    this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group");
    this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes");
    this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group");
    this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts");
    this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none");
    this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none");
    this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions");
    this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots");
    if (this.state.env === "development") {
      this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements");
    }
  }
  updateNumberFormat(newNumberFormat, decimalPlaces, fractionRoundTo) {
    if (!this.numberConfig) return;
    if (newNumberFormat) this.numberConfig.numberFormat = newNumberFormat;
    if (decimalPlaces) this.numberConfig.decimalPlaces = decimalPlaces;
    if (fractionRoundTo) this.numberConfig.fractionRoundTo = fractionRoundTo;
  }
  trimNameToFit(shapes, vis) {
    function trim2(shape, index, items) {
      const item = items[index];
      const self = select(item);
      self.text(shape.name);
      let text = self.text();
      const node = self.node();
      if (!node) return;
      let textLength = node.getComputedTextLength();
      const space = this.getWidthAttribute(shape) - 20;
      while (textLength > space && text.length > 0) {
        text = text.slice(0, -1);
        self.text(text.length ? text + "..." : "");
        textLength = self.node().getComputedTextLength();
      }
    }
    shapes.each(trim2.bind(vis));
  }
  setDevice() {
    if (!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") return;
    if (!this.selections.htmlEl.offsetWidth) return;
    if (this.props.containerWidth.value === 0) return false;
    if (!this.settings.main) {
      this.state.padding = 0;
    } else {
      if (this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app) {
        this.state.device = "mobile";
        this.state.padding = 0;
      } else {
        this.state.device = "desktop";
        this.state.padding = 50;
      }
    }
    this.state.w = this.props.containerWidth.value;
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const usedStock = this.props.stockList.value.filter((s) => s.used);
    if (!usedStock) return [null, null];
    const longestStock = usedStock.reduce((prev, current) => prev.l > current.l ? prev : current);
    const widestStock = usedStock.reduce((prev, current) => prev.w > current.w ? prev : current);
    return [longestStock, widestStock];
  }
  debounce(func, wait, immediate = false) {
    let timeout;
    return (...args) => {
      return new Promise((resolve) => {
        const later = () => {
          timeout = null;
          if (!immediate) {
            resolve(func.apply(this, args));
          }
        };
        clearTimeout(timeout);
        if (immediate) {
          const callNow = !timeout;
          if (callNow) resolve(func.apply(this, args));
        }
        timeout = setTimeout(later, wait);
      });
    };
  }
  requiresStretch(stock, aspectRatio = null) {
    if (!stock) return false;
    if (aspectRatio === null) aspectRatio = stock.w / stock.l;
    return aspectRatio < 0.15;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value) return;
    this.state.w = this.props.containerWidth.value;
    const aspectRatio = this.props.stock.value.w / this.props.stock.value.l;
    this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]);
    if (this.requiresStretch(this.props.stock.value, aspectRatio) && this.options.enableStretch) {
      this.state.h = this.selections.htmlEl.clientWidth * 0.15 + this.state.padding * 2;
      this.state.stretched = true;
    } else {
      this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding;
      this.state.stretched = false;
    }
    this.scales.yScale.domain([0, this.props.stock.value.w]).range([this.state.padding, this.state.h - this.state.padding]);
    this.scales.yAxisScale.domain(this.settings.flipY ? [0, this.props.stock.value.w] : [this.props.stock.value.w, 0]).range([this.state.padding, this.state.h - this.state.padding]);
    this.scales.yPositionScale.domain([0, this.props.stock.value.w]).range(this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]);
    if (aspectRatio > 2) {
      this.state.w = this.selections.htmlEl.clientWidth / aspectRatio + this.state.padding * 2;
      this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]);
      this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding;
    }
    this.scales.xPositionScale.domain([0, this.props.stock.value.l]).range(this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]);
    this.scales.measurementScale.domain([0, this.props.stock.value.l]).range([0, this.state.w - this.state.padding * 2]);
    if (this.state.w > 0 && this.state.h > 0) {
      if (aspectRatio > 2) this.selections.el.style("width", this.state.w + "px");
      else this.selections.el.style("width", "");
      this.selections.el.style("height", this.state.h + "px");
    }
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(id) {
    const shape = this.selections.shapeWrappers.filter((d) => d.id === id);
    return !shape.empty() ? shape.node() : null;
  }
  findShape(id) {
    const shapeEl = this.findShapeElement.call(this, id);
    if (shapeEl) this.selectShape.call(this, shapeEl);
  }
  selectShape(shapeEl) {
    this.selections.shapeRectangles.classed("selected", false);
    this.selections.shapeRectangles.style("fill", (s) => getShapeColor.call(this, s));
    const shapeEL = select(shapeEl).select("rect");
    if (shapeEL) {
      shapeEL.classed("selected", true);
      shapeEL.style("fill", this.config.colors.partSelected.toString());
      const shape = select(shapeEl).datum();
      this.callbacks.onShapeSelect(shape);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    drawShapes.call(this);
  }
  drawStock() {
    drawStock.call(this);
  }
  drawCuts() {
    drawCuts.call(this);
  }
  drawAll() {
    this.drawStock();
    this.drawShapes();
    this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(item) {
    if (!(item == null ? void 0 : item.l)) return 0;
    return this.scales.xScale(item.l) - this.state.padding;
  }
  getHeightAttribute(item) {
    if (!(item == null ? void 0 : item.w)) return 0;
    return this.scales.yScale(item.w) - this.state.padding;
  }
  getRectangleCoordinate(rectangle, coordinate, position, adjustment) {
    let coord;
    if (coordinate === "x") {
      let x2;
      switch (position) {
        case "center":
          x2 = this.scales.xPositionScale(rectangle.x + rectangle.l / 2);
          if (adjustment) x2 += adjustment;
          break;
        case "right":
          x2 = this.scales.xPositionScale(rectangle.x + rectangle.l);
          if (adjustment) x2 -= adjustment;
          break;
        case "left":
        default:
          x2 = this.scales.xPositionScale(this.settings.flipX ? rectangle.x - rectangle.l : rectangle.x);
          if (adjustment) x2 -= adjustment;
      }
      coord = x2;
    } else if (coordinate === "y") {
      let y2;
      switch (position) {
        case "center":
          y2 = this.scales.yPositionScale(rectangle.y + rectangle.w / 2);
          if (adjustment) y2 += adjustment;
          break;
        case "bottom":
          y2 = this.scales.yPositionScale(this.settings.flipY ? rectangle.y + rectangle.w : rectangle.y);
          if (adjustment) y2 += adjustment;
          break;
        case "top":
        default:
          y2 = this.scales.yPositionScale(this.settings.flipY ? rectangle.y : rectangle.y + rectangle.w);
          if (adjustment) y2 -= adjustment;
      }
      coord = y2;
    }
    return coord;
  }
  // Blade Width Methods
  getBladeWidth(container = null) {
    if (valueSet(container) && container !== null) {
      return container.getBladeWidth();
    }
    return 0;
  }
  getHalfBladeWidth(container = null) {
    const bladeWidth = this.getBladeWidth(container);
    if (bladeWidth !== void 0 && bladeWidth > 0) return bladeWidth / 2;
    return 0;
  }
  // Reset Methods
  removeShapes() {
    if (this.selections.shapeGroup) this.selections.shapeGroup.selectAll("*").remove();
    if (this.selections.bandingGroup) this.selections.bandingGroup.selectAll("*").remove();
    resetShapeAxes.call(this);
  }
  removeStock() {
    if (this.selections.stockGroup) this.selections.stockGroup.selectAll("*").remove();
    if (this.selections.axisGroup) this.selections.axisGroup.selectAll("*").remove();
    resetStockAxes.call(this);
  }
  removeCuts() {
    if (this.selections.cutGroup) this.selections.cutGroup.selectAll("*").remove();
    resetCutMeasurementAxes.call(this);
  }
  removeSegments() {
    if (this.selections.segmentGroup) this.selections.segmentGroup.selectAll("*").remove();
  }
  removeGroups() {
    if (this.selections.groupGroup) this.selections.groupGroup.selectAll("*").remove();
  }
  removePositions() {
    if (this.selections.ghostShapeGroup) this.selections.ghostShapeGroup.selectAll("*").remove();
    this.removePlacementPositions();
  }
  removePlacementPositions() {
    if (this.selections.dotGroup) this.selections.dotGroup.selectAll("*").remove();
  }
  removeAll() {
    this.removePositions();
    this.removePlacementPositions();
    this.removeShapes();
    this.removeStock();
    this.removeCuts();
    this.removeSegments();
  }
  // Collision Detection
  collision(thisShape, testShape, container) {
    if (thisShape.id === testShape.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      thisShape.x < testShape.x + testShape.l + this.getBladeWidth(container) && // 2 right
      thisShape.x + thisShape.l + this.getBladeWidth(container) > testShape.x && // 3 bottom
      thisShape.y < testShape.y + testShape.w + this.getBladeWidth(container) && // 4 top
      thisShape.y + thisShape.w + this.getBladeWidth(container) > testShape.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(show = false) {
    if (show) {
      this.selections.shapeGroup.attr("display", "block");
      this.selections.bandingGroup.attr("display", "block");
    } else {
      this.selections.shapeGroup.attr("display", "none");
      this.selections.bandingGroup.attr("display", "none");
    }
  }
  toggleSegments(show = true) {
    if (show) this.selections.segmentGroup.attr("display", "block");
    else this.selections.segmentGroup.attr("display", "none");
  }
  toggleCuts(show = true) {
    if (show) this.selections.cutGroup.attr("display", "block");
    else this.selections.cutGroup.attr("display", "none");
  }
  // Padding Helper
  addPadding(value) {
    return value + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(shape, index, nodes) {
    const node = nodes[index];
    if (!node) return true;
    const bbox = node.getBBox();
    const scaledLength = this.scales.measurementScale(shape.l);
    const scaledWidth = this.scales.yScale(shape.w);
    if (bbox.width >= scaledLength) return true;
    if (bbox.height >= scaledWidth - this.state.padding) return true;
    return false;
  }
  isNameHidden(shape, index, nodes) {
    const node = nodes[index];
    if (!node) return true;
    const bbox = node.getBBox();
    const scaledLength = this.scales.measurementScale(shape.l);
    const scaledWidth = this.scales.measurementScale(shape.w);
    if (bbox.width >= scaledLength) return true;
    if (scaledWidth < 40) return true;
    return false;
  }
  isLengthHidden(shape, index, nodes) {
    var _a, _b;
    if (this.settings.app) {
      const scaledLength2 = this.scales.measurementScale(shape.l);
      const scaledWidth2 = this.scales.measurementScale(shape.w);
      return scaledLength2 < 50 || scaledWidth2 < 50;
    }
    if (((_b = (_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.saw) == null ? void 0 : _b.stockType) === "linear") return false;
    const node = nodes[index];
    if (!node) return true;
    const bbox = node.getBBox();
    const scaledLength = this.scales.measurementScale(shape.l);
    const scaledWidth = this.scales.measurementScale(shape.w);
    if (bbox.width >= scaledLength) return true;
    if (scaledWidth < 30) return true;
    return false;
  }
  isWidthHidden(shape, index, nodes) {
    if (this.settings.app) {
      return this.scales.measurementScale(shape.l) < 50 || this.scales.measurementScale(shape.w) < 50;
    }
    const node = nodes[index];
    const bbox = node.getBBox();
    if (this.scales.measurementScale(shape.l) < 30) return true;
    if (bbox.height >= this.scales.measurementScale(shape.w)) return true;
    return false;
  }
  // Group Management
  /* initGroups( groups: InputUserGroup[] )
  	{
  		if ( !groups || !groups?.length || !this.settings.main || !this.props.containerWidth )
  			return false;
  
  		this.resetGroups();
  
  		this.selections.groupRectangles = this.selections.groupGroup
  			.selectAll( 'rect' )
  			.data( groups )
  			.join( 'rect' )
  			.attr( 'class', 'group' )
  			.attr( 'x', ( g ) => this.getRectangleCoordinate( g, 'x' ) )
  			.attr( 'y', ( g ) => this.getRectangleCoordinate( g, 'y' ) )
  			.attr( 'width', ( g ) => this.getWidthAttribute( g ) )
  			.attr( 'height', ( g ) => this.getHeightAttribute( g ) );
  
  		this.selections.groupGroup.attr( 'display', 'block' );
  
  		if ( this.state.env === 'development' )
  		{
  			this.setupGroupDebugEvents();
  		}
  	} */
  /* private setupGroupDebugEvents()
  {
  	if ( !this.state.hasTouch )
  	{
  		this.selections.groupRectangles
  			.on( 'mouseover', function()
  			{
  				d3.select( this ).classed( 'hover', true );
  			} )
  			.on( 'mouseout', function()
  			{
  				d3.select( this ).classed( 'hover', false );
  			} )
  			.on( 'mousedown', ( event, group ) =>
  			{
  				console.log( 'Group:', {
  					dimensions: {
  						x: group.x,
  						y: group.y,
  						width: group.w,
  						length: group.l
  					},
  					shapes: group.shapes.map( s => ( {
  						id: s.id,
  						parentId: s.parentID,
  						addedAsGroup: s.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    var _a, _b;
    if ((_a = this == null ? void 0 : this.selections) == null ? void 0 : _a.shapeRectangles) {
      this.selections.shapeRectangles.classed("selected", false).classed("hover", false).style("fill", (s) => getShapeColor.call(this, s));
    }
    if ((_b = this == null ? void 0 : this.selections) == null ? void 0 : _b.cutLines) {
      this.selections.cutLines.classed("selected", false).classed("highlight", false).classed("inside-segment", false).style("visibility", "visible").attr("stroke-width", (cut) => {
        const width = this.scales.measurementScale(this.getBladeWidth(cut.stock));
        return width < 1 ? 1 : Math.ceil(width);
      });
    }
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    resetShapeAxes.call(this);
  }
  updateShapeVisibility() {
    updateShapeVisibility.call(this);
  }
  drawPositions(shape) {
    drawPositions.call(this, shape);
  }
  showCut(index) {
    showCut.call(this, index);
  }
  resetCuts() {
    resetCuts.call(this);
  }
}
const _hoisted_1$7 = ["id"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Diagram",
  props: {
    elementId: {},
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: true },
    stockId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: false },
    enableStretch: { type: Boolean, default: true },
    moveMode: { default: () => ref(false) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { r, activeStock, activeShapes, activeCuts, activeSegments, currentCutIndex, getStock, getShapes, getSegments, getCuts } = useResults();
    const props = __props;
    const emit = __emit;
    const onShapeColourUpdate = (newColours) => {
      emit("shape-colour-update", newColours);
    };
    const onShapeSelect = (shape) => {
      if (!(shape == null ? void 0 : shape.id)) return;
      emit("shape-select", shape.id.toString());
    };
    const onAddToPartsBin = (shape) => {
      if (!shape) return;
      emit("add-to-parts-bin", shape);
    };
    const onMoveShape = (shape, position) => {
      if (!shape) return;
      emit("move-shape", shape, position);
    };
    const containerWidth = ref(0);
    const containerHeight = ref(0);
    const diagramContainerRef = ref(null);
    let diagram;
    let loaded = ref(false);
    onMounted(() => init());
    const formatConfig = computed(() => ({
      format: props.numberFormat,
      decimals: props.decimalPlaces
    }));
    const relevantStock = computed(() => props.stockId ? getStock(props.stockId) : activeStock.value);
    const relevantShapes = computed(() => props.stockId ? getShapes(props.stockId) : activeShapes.value);
    const relevantCuts = computed(() => {
      if (!props.main) return [];
      return props.stockId ? getCuts(props.stockId) : activeCuts.value;
    });
    const relevantSegments = computed(() => {
      if (!props.main) return [];
      return props.stockId ? getSegments(props.stockId) : activeSegments.value;
    });
    useResizeObserver(diagramContainerRef, (entries) => {
      const entry = entries[0];
      const { width } = entry.contentRect;
      if (width > 0) containerWidth.value = width;
    });
    watchThrottled(
      containerWidth,
      (newWidth) => {
        if (!diagram) return;
        if (newWidth <= 0) return;
        diagram.setDevice();
        diagram.resetShapeAxes();
        diagram.drawAll();
      },
      { throttle: 100 }
    );
    watch(activeStock, (newStock) => {
      if (!newStock) return;
      if (containerWidth.value <= 0) return;
      diagram.setDevice();
      diagram.drawStock();
    });
    watch(activeShapes, (newShapes) => {
      if (!newShapes) return;
      if (containerWidth.value <= 0) return;
      diagram.setDevice();
      diagram.drawShapes();
    });
    watch(activeCuts, () => {
      if (containerWidth.value <= 0) return;
      diagram.drawCuts();
    });
    watch(currentCutIndex, () => {
      if (containerWidth.value <= 0) return;
      diagram.toggleSegments(true);
      diagram.showCut(currentCutIndex.value);
    });
    watch(formatConfig, (newConfig) => {
      diagram.updateNumberFormat(newConfig.format, newConfig.decimals, null);
    });
    const init = () => {
      const config2 = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${props.elementId}`,
        env: "development",
        numberConfig: {
          numberFormat: props.numberFormat,
          decimalPlaces: props.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: props.colors || null,
        //[] check this
        settings: {
          main: props.main,
          app: false,
          embed: false,
          flipY: false,
          flipX: false
        },
        props: {
          containerHeight,
          containerWidth,
          stock: relevantStock,
          shapes: relevantShapes,
          cuts: relevantCuts,
          segments: relevantSegments,
          stockList: r.stockList,
          moveMode: props.moveMode
        },
        options: {
          disableClick: props.disableClick,
          enableStretch: props.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate,
          onShapeSelect,
          onAddToPartsBin,
          onMoveShape
        }
      };
      diagram = new Diagram(config2);
      loaded.value = true;
    };
    const toggleShapes = (show = false) => {
      if (diagram) diagram.toggleShapes(show);
    };
    const toggleCuts = (show = false) => {
      if (diagram) diagram.toggleCuts(show);
    };
    const toggleSegments = (show = false) => {
      if (diagram) diagram.toggleSegments(show);
    };
    const drawShapes2 = () => {
      if (diagram) diagram.drawShapes();
    };
    const drawStock2 = () => {
      if (diagram) diagram.drawStock();
    };
    const resetCuts2 = () => {
      if (diagram) {
        diagram.toggleSegments(false);
        diagram.resetCuts();
      }
    };
    const showCut2 = (index) => {
      if (diagram) {
        diagram.toggleSegments(true);
        diagram.showCut(index);
      }
    };
    const drawPositions2 = (shape) => {
      if (diagram) diagram.drawPositions(shape);
    };
    const resetPositions = () => {
      if (diagram) diagram.removePositions();
    };
    const findShape = (id) => {
      if (diagram) diagram.findShape(id);
    };
    const clearSelection = () => {
      if (diagram) diagram.clearSelection();
    };
    const requiresStretch = (stock) => {
      if (diagram) diagram.requiresStretch(stock);
    };
    __expose({
      loaded,
      toggleShapes,
      toggleCuts,
      toggleSegments,
      drawShapes: drawShapes2,
      drawStock: drawStock2,
      drawPositions: drawPositions2,
      resetPositions,
      findShape,
      clearSelection,
      resetCuts: resetCuts2,
      showCut: showCut2,
      requiresStretch
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: _ctx.elementId,
        ref_key: "diagramContainerRef",
        ref: diagramContainerRef,
        class: "diagram-container"
      }, null, 8, _hoisted_1$7);
    };
  }
});
const _hoisted_1$6 = {
  key: 0,
  class: "debug"
};
const _hoisted_2$4 = { key: 2 };
const _hoisted_3$4 = {
  key: 0,
  class: "row table-heading"
};
const _hoisted_4$4 = {
  key: 0,
  class: "cell center"
};
const _hoisted_5$3 = {
  key: 1,
  class: "cell delete"
};
const _hoisted_6$3 = { class: "cell" };
const _hoisted_7$1 = ["id", "disabled", "onClick"];
const _hoisted_8$1 = {
  key: 0,
  class: "cell center"
};
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = {
  key: 1,
  class: "cell"
};
const _hoisted_11$1 = ["aria-label", "onClick"];
const _hoisted_12$1 = { class: "button-wrapper main" };
const _hoisted_13$1 = ["aria-label"];
const _hoisted_14$1 = ["aria-label", "disabled"];
const _hoisted_15$1 = ["aria-label"];
const _hoisted_16 = { id: "part-count" };
const _hoisted_17 = {
  key: 3,
  id: "messages"
};
const _hoisted_18 = {
  key: 0,
  class: "heading"
};
const _hoisted_19 = { class: "content" };
const _hoisted_20 = {
  key: 4,
  id: "progress"
};
const showDevInfo$2 = true;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CheckoutCalculator",
  props: {
    debug: {
      type: Boolean,
      default: false
    },
    stock: {
      type: Array,
      default: () => []
    },
    findExtrasPrice: {
      type: Function,
      required: true
    },
    formatPrice: {
      type: Function,
      required: true
    },
    inputType: {
      type: String,
      default: "manual"
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const ToolTip$1 = defineAsyncComponent(() => Promise.resolve().then(() => ToolTip));
    const InputIssues$1 = defineAsyncComponent(() => Promise.resolve().then(() => InputIssues));
    const Machining$12 = defineAsyncComponent(() => Promise.resolve().then(() => Machining2));
    const ImportCSV$1 = defineAsyncComponent(() => Promise.resolve().then(() => ImportCSV));
    const ObjectViewer2 = defineAsyncComponent(() => Promise.resolve().then(() => ObjectViewer$1));
    const { t: t2 } = useTranslation(["main", "errors"]);
    const { inputs: inputs2, totalInputShapes: totalInputShapes2, getShapeGrainSummary, updateNumberFormat, validateInputStock: validateInputStock2 } = useInputs();
    const { r, updateFromResult, stackedStock, uniqueAddedShapes, uniqueUsedStock, activeStockId, setActiveStockId } = useResults();
    const { progress, reset: resetProgress } = useProgress();
    const { addNotice: addNotice2 } = useNotices();
    const { tip, update: updateTip, hide: hideTip } = useToolTip();
    const props = __props;
    const emit = __emit;
    const env = "development";
    const locale = ref((navigator == null ? void 0 : navigator.language) || "en-US");
    const user = shallowRef(null);
    const domain = window.location.hostname;
    const connected = ref(false);
    const creditVisible = ref(true);
    const currentURL = useLocalStorage("Checkout/currentURL", window.location.href);
    const uniqueId = v4();
    const images = ref([]);
    const mounted = ref(false);
    const loaded = ref(false);
    const thinking = ref(false);
    const success = ref(false);
    const CSVImportEnabled = ref(false);
    const canGoFullScreen = ref(isElementFullScreenSupported());
    const isFullScreen = ref(false);
    const { socket } = useSocket({
      refs: {
        connected,
        thinking
      },
      callbacks: {
        onResult(resultData) {
          var _a, _b, _c, _d, _e;
          const result = resultData.result;
          updateFromResult(result);
          if (!((_a = result.shapeList) == null ? void 0 : _a.length) || !((_b = result.stockList) == null ? void 0 : _b.length)) {
            resetProgress();
            addNotice2({
              type: "error",
              message: sentenceCase(t2("no_result")),
              additional: [sentenceCase(t2("check_inputs"))]
            });
            thinking.value = false;
            return;
          }
          updatePartQuantitiesBasedOnThickness();
          const checkoutResult = {
            jobId: resultData.jobId,
            metadata: r.metadata.value,
            parts: uniqueAddedShapes.value.map((p) => {
              var _a2, _b2, _c2;
              return {
                l: p.l,
                w: p.w,
                t: p == null ? void 0 : p.t,
                material: p.material,
                orientationLock: p.orientationLock,
                q: (_b2 = (_a2 = r.metadata.value) == null ? void 0 : _a2.addedPartTally) == null ? void 0 : _b2[p.parentID],
                name: p.name,
                banding: p.banding,
                finish: p.finish,
                customData: p.customData,
                stockId: ((_c2 = p == null ? void 0 : p.stock) == null ? void 0 : _c2.id) || (p == null ? void 0 : p.stockId)
              };
            }),
            stock: uniqueUsedStock.value.map((s) => {
              var _a2, _b2;
              return {
                id: s.id,
                name: s == null ? void 0 : s.name,
                l: s.l,
                w: s.w,
                t: s == null ? void 0 : s.t,
                material: s.material,
                q: (_b2 = (_a2 = r.metadata.value) == null ? void 0 : _a2.usedStockTally) == null ? void 0 : _b2[s.parentID],
                trim: s == null ? void 0 : s.trim,
                cost: s == null ? void 0 : s.cost,
                analysis: s == null ? void 0 : s.analysis
                // type: s?.type
              };
            }),
            offcuts: r.offcuts.value.map((s) => ({
              l: s.l,
              w: s.w,
              t: (s == null ? void 0 : s.t) ?? null,
              q: s.q,
              stockId: s.stockId
            })),
            inputs: {
              parts: inputs2.inputShapes.value.map((s) => {
                const newS = { ...s };
                delete newS.listId;
                return newS;
              })
            }
          };
          if ((_e = (_d = (_c = r == null ? void 0 : r.metadata) == null ? void 0 : _c.value) == null ? void 0 : _d.unplacedParts) == null ? void 0 : _e.length) {
            const parts = r.metadata.value.unplacedParts.map((s) => s.id).join();
            addNotice2({
              type: "warning",
              message: sentenceCase(t2("parts_not_fit")) + ": " + parts
            });
          }
          emit("result", checkoutResult);
          thinking.value = false;
        },
        onUser(sentUser) {
          user.value = sentUser;
        },
        onConnectError(error) {
          addNotice2({
            type: "error",
            message: sentenceCase(t2("cannot_connect")),
            additional: [error]
          });
        },
        onError(error) {
          addNotice2({
            type: "error",
            message: sentenceCase(t2("error_occurred")),
            additional: [error]
          });
        }
      }
    });
    const defaultOptions = {
      enable: {
        diagram: true,
        focus: true,
        click: true,
        partName: true,
        progressNumber: true,
        orientation: true,
        banding: false,
        finish: false,
        machining: false,
        csvImport: false,
        imageUpload: false
      },
      colors: {
        partA: "#118ab2",
        partB: null,
        partHover: null,
        partSelected: null,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      stackHeight: 100,
      maxParts: null,
      locale: (navigator == null ? void 0 : navigator.language) || "en-US",
      orientationModel: 0,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      cutPreference: null,
      bladeWidth: null,
      stockType: null,
      minSpacing: 0,
      stockGrain: null,
      partTrim: 0
    };
    const options = reactive(defaultOptions);
    const sawData = reactive({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    });
    const currentInputShape = ref(null);
    const messageVisible = ref(false);
    const messageHeading = ref("");
    const messageContent = ref("");
    const extrasIndex = reactive({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    });
    const materials = ref([]);
    const thicknesses = ref([]);
    const bondedThicknesses = ref([]);
    const machiningEnabled = ref(false);
    const machiningOptions = reactive({
      numberFormat: "decimal",
      faces: { enabled: true },
      holes: { enabled: false },
      corners: {
        enabled: false,
        types: []
      },
      banding: { enabled: false },
      hingeHoles: { enabled: false },
      shelfHoles: { enabled: false }
    });
    const bandingData = reactive({
      labels: [],
      pricing: {},
      options: {},
      keys: mainSides
    });
    const finishData = reactive({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    });
    const allFields = reactive({
      parts: {
        sheet: [
          { id: "material", enabled: false },
          { id: "l", enabled: true },
          { id: "w", enabled: true },
          { id: "t", enabled: false },
          { id: "q", enabled: true },
          { id: "name", enabled: true },
          { id: "orientationLock", enabled: true },
          { id: "banding", enabled: false },
          { id: "finish", enabled: false },
          { id: "machining", enabled: false },
          { id: "imageUpload", enabled: false }
        ],
        linear: [
          { id: "l", enabled: true },
          { id: "q", enabled: true },
          { id: "name", enabled: true },
          { id: "finish", enabled: false },
          { id: "imageUpload", enabled: false }
        ],
        roll: [
          { id: "l", enabled: true },
          { id: "w", enabled: true },
          { id: "q", enabled: true },
          { id: "name", enabled: true },
          { id: "orientationLock", enabled: true },
          { id: "imageUpload", enabled: false }
        ]
      }
    });
    const customFieldDefinitions = ref([]);
    const fieldDefinitions = computed(() => {
      var _a;
      const fieldDefinitions2 = [
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (_a = materials.value[0]) == null ? void 0 : _a.name,
          options: materials.value.map((m) => ({
            value: m.name,
            label: m.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: options.numberFormat === "decimal" ? "float" : "string",
          label: "thickness",
          allowZero: false
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "length",
          min: 0,
          placeholder: "l",
          required: true,
          allowZero: false
        },
        {
          id: "w",
          fieldMap: "w",
          type: "unitDependent",
          label: "width",
          placeholder: "w",
          min: 0,
          required: true,
          allowZero: false
        },
        {
          id: "q",
          fieldMap: "q",
          type: "integer",
          placeholder: "q",
          default: 1,
          label: "quantity",
          min: 0
        },
        {
          id: "name",
          fieldMap: "name",
          type: "string",
          placeholder: "name",
          label: "name"
        },
        {
          id: "orientationLock",
          w: "32px",
          label: "rotation",
          fieldMap: "orientationLock"
        },
        {
          id: "banding",
          w: "32px",
          label: "banding",
          fieldMap: "bandingOptions"
        },
        {
          id: "finish",
          type: "checkbox",
          w: "32px",
          label: "finish",
          fieldMap: "finish"
        },
        {
          id: "machining",
          w: "32px",
          label: "machining",
          fieldMap: "machining"
        },
        {
          id: "imageUpload",
          w: "32px",
          label: "image_upload",
          fieldMap: "imageUpload"
        }
      ];
      return [...fieldDefinitions2, ...customFieldDefinitions.value];
    });
    const relevantFieldDefinitions = computed(() => {
      return getRelevantFieldDefinitions(
        allFields,
        fieldDefinitions.value,
        "parts",
        sawData.stockType,
        options.fieldOrder
      );
    });
    const partColumns = computed(() => {
      let number = relevantFieldDefinitions.value.length + 1;
      number++;
      if (inputs2.inputShapes.value.length > 1) number++;
      return number;
    });
    const partColumnsStyle = computed(() => {
      const widthValues = {
        id: "34px",
        del: "30px",
        info: "30px"
      };
      const widths = [];
      for (const field of relevantFieldDefinitions.value) {
        if (field.id === "trim") continue;
        widths.push(field.w ?? "minmax(20px, 1fr)");
      }
      widths.unshift(widthValues.id);
      widths.push(widthValues.info);
      if (inputs2.inputShapes.value.length > 1) widths.push(widthValues.del);
      return widths.join(" ");
    });
    const creditStyles = computed(() => ({
      fontSize: "11px",
      textAlign: "right",
      width: "100%",
      height: "auto",
      position: "relative",
      display: "flex",
      visibility: "visible",
      opacity: "1",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      paddingRight: "10px",
      marginTop: "10px",
      marginBottom: "2px",
      userSelect: "none",
      alignItems: "center"
    }));
    const creditLinkStyles = computed(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    }));
    const showCredit = computed(() => {
      var _a, _b;
      if (!user.value) return true;
      if (user.value && ((_b = (_a = user.value) == null ? void 0 : _a.api) == null ? void 0 : _b.whiteLabel)) return false;
      return true;
    });
    const optionHandlers = {
      stockType: (stockType) => {
        const validOptions = ["sheet", "linear", "roll"];
        if (!validOptions.includes(stockType)) {
          console.warn(`${stockType} is not a valid stockType, expected ${validOptions.join("|")}`);
        }
        sawData.stockType = stockType;
        if (stockType === "linear") {
          sawData.cutType = null;
          sawData.cutPreference = null;
        }
      },
      stockSelection: (stockSelection) => {
        const validOptions = ["efficiency", "smallest"];
        if (stockSelection && !validOptions.includes(stockSelection)) {
          console.warn(`${stockSelection} is not a valid stockSelection, expected ${validOptions.join("|")}`);
        } else {
          sawData.options.stockSelection = stockSelection;
        }
      },
      minSpacing: (minSpacing) => {
        sawData.options.minSpacing = minSpacing;
      },
      stackHeight: (stackHeight) => {
        sawData.stackHeight = stackHeight;
      },
      cutPreference: (cutPreference) => {
        const allowedCutPreferences = ["efficiency", "length", "width", "beam"];
        if (allowedCutPreferences.includes(cutPreference)) {
          const { cutType: mappedCutType, cutPreference: mappedCutPreference } = mapLegacyCutPreference(cutPreference);
          sawData.cutType = mappedCutType;
          sawData.cutPreference = mappedCutPreference;
        } else {
          console.warn(`SmartCut - ${cutPreference} is not one of ${allowedCutPreferences.join("|")}`);
        }
      },
      bladeWidth: (bladeWidth) => {
        if (bladeWidth >= 0) {
          sawData.bladeWidth = bladeWidth;
        } else {
          console.warn(`SmartCut - you provided an incorrect blade width of: ${bladeWidth}`);
        }
      },
      maxParts: (maxParts) => {
        options.maxParts = maxParts;
      },
      locale: (sentLocale) => {
        locale.value = sentLocale.replace(/_/g, "-");
      },
      enable: (sentEnable) => {
        const fieldMappings = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const setting in defaultOptions.enable) {
          if (setting in sentEnable) {
            options.enable[setting] = sentEnable[setting];
          }
        }
        for (const field in fieldMappings) {
          setFieldEnabled$1(field, getNestedProperty$1(sentEnable, [fieldMappings[field]]) ?? defaultOptions.enable[fieldMappings[field]]);
        }
        CSVImportEnabled.value = getNestedProperty$1(sentEnable, ["csvImport"]) ?? defaultOptions.enable.csvImport;
      },
      colors: (sentColors) => {
        for (const setting in defaultOptions.colors) {
          if (setting in sentColors) {
            options.colors[setting] = sentColors[setting];
          }
        }
      },
      orientationModel: (orientationModel) => {
        if (![0, 1, 2].includes(orientationModel)) {
          options.orientationModel = 0;
          return;
        }
        options.orientationModel = orientationModel;
      },
      numberFormat: (numberFormat) => {
        if (!["decimal", "fraction"].includes(numberFormat)) {
          options.numberFormat = "decimal";
          return;
        }
        options.numberFormat = numberFormat;
      },
      customFields: (customFields) => {
        if (!Array.isArray(customFields) || !(customFields == null ? void 0 : customFields.length)) return;
        const newCustomFieldDefinitions = [];
        customFields.forEach((cf, index) => {
          newCustomFieldDefinitions.push(cf);
          newCustomFieldDefinitions[index].custom = true;
          const id = getCustomFieldId(cf.id);
          newCustomFieldDefinitions[index].id = id;
          newCustomFieldDefinitions[index].fieldMap = "customData." + id;
          if (cf.type === "checkbox") {
            newCustomFieldDefinitions[index].w = "32px";
          }
          if (cf.type === "select") {
            newCustomFieldDefinitions[index].output = cf.output ?? "string";
            newCustomFieldDefinitions[index].options = cf.options;
          }
        });
        customFieldDefinitions.value = newCustomFieldDefinitions;
        for (const s of inputs2.inputShapes.value) {
          s.customData = customFields.reduce((acc, cf) => {
            const id = getCustomFieldId(cf.id);
            acc[id] = s.customData[id] || cf.default || "";
            return acc;
          }, {});
        }
      }
    };
    const init = (initData) => {
      if (props.debug) {
        emit("log", ["checkout init...", initData]);
      }
      if (initData == null ? void 0 : initData.options) {
        const sentOptions = initData.options;
        mapLegacyOptions(sentOptions);
        const requiredOptions = [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ];
        requiredOptions.forEach((o) => {
          if (!(o in sentOptions)) {
            emit("error", `${o} is a required option`);
          }
        });
        const skip = ["enable", "colors"];
        for (const option in sentOptions) {
          if (!skip.includes(option)) {
            options[option] = sentOptions[option];
          }
          if (option in optionHandlers) optionHandlers[option](sentOptions[option]);
        }
      }
      if (initData.colors) {
        if ("colors" in optionHandlers) optionHandlers["colors"](initData.colors);
      }
      initExtra("banding", initData);
      initExtra("finish", initData);
      initMachining(initData);
      initMaterialsThicknesses(initData);
      loaded.value = true;
      if (props.debug) {
        emit("log", ["init complete"]);
      }
      const event = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(event);
      nextTick(() => {
        if (showCredit.value && !isCreditVisible()) {
          alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
        }
      });
    };
    const updateShapeOrientation = (shape, orientation) => {
      if (!shape) return;
      shape.orientationLock = orientation;
    };
    const setFieldEnabled$1 = (fieldId, enabled = false) => {
      setFieldEnabled(allFields, "parts", sawData.stockType, fieldId, enabled);
    };
    const getCustomFieldId = (id) => {
      if (!id) return null;
      return sanitiseString(id).toLowerCase();
    };
    const handleFieldValidation = (el, result, item, key) => {
      if (result.valid) {
        hideTip();
        if (item && key) {
          const issueIndex = item.issues.findIndex((issue) => {
            return issue.field.some((fieldArr) => fieldArr.length === key.length && fieldArr.every((el2, i) => el2 === key[i]));
          });
          if (issueIndex !== -1) {
            item.issues.splice(issueIndex, 1);
          }
        }
      } else {
        updateTip({
          referenceEl: el,
          show: true,
          content: t2(`fieldValidation.${result.message}`),
          type: "error"
        });
      }
    };
    const initMachining = (initData) => {
      var _a, _b, _c, _d, _e;
      if (!getNestedProperty$1(options, ["enable", "machining"])) return;
      if (!(initData == null ? void 0 : initData.machining)) return;
      for (const key in machiningOptions) {
        if (initData.machining[key]) {
          machiningOptions[key] = initData.machining[key];
        }
      }
      ["holes", "hingeHoles"].forEach((m) => {
        var _a2, _b2;
        if ((_a2 = initData == null ? void 0 : initData.machining) == null ? void 0 : _a2[m]) {
          machiningOptions[m].enabled = (_b2 = initData == null ? void 0 : initData.machining) == null ? void 0 : _b2[m].enabled;
        }
      });
      if ((_c = (_b = (_a = initData == null ? void 0 : initData.machining) == null ? void 0 : _a.corners) == null ? void 0 : _b.types) == null ? void 0 : _c.length) {
        machiningOptions.corners.enabled = true;
        machiningOptions.corners.types = initData.machining.corners.types;
      }
      if (initData.banding && ((_e = (_d = initData == null ? void 0 : initData.options) == null ? void 0 : _d.enable) == null ? void 0 : _e.banding)) {
        if (!bandingData) return;
        machiningOptions.banding = {
          enabled: true
        };
        if (bandingData.options.length) {
          machiningOptions.banding.options = bandingData.options;
        }
        if (bandingData.labels.length) {
          machiningOptions.banding.labels = bandingData.labels;
        }
        if (objectValuesPresent(bandingData.pricing)) {
          machiningOptions.banding.pricing = bandingData.pricing;
        }
      }
    };
    const openMachining = (shape = null) => {
      currentInputShape.value = shape;
      if (shape && shape.l && shape.w) {
        machiningEnabled.value = true;
      } else {
        alert("Please enter dimensions first");
      }
    };
    const closeMachining = () => {
      machiningEnabled.value = false;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    };
    const getThicknessesFromStock = (stockList = []) => {
      thicknesses.value = [];
      bondedThicknesses.value = [];
      setFieldEnabled$1("t", false);
      if (!stockList.length) return;
      for (const st of stockList) {
        if (!(st == null ? void 0 : st.t)) continue;
        if (typeof st.t === "string" && st.t.includes(",")) {
          const bondedThickness = getBondedThicknesses(st.t, true);
          if (bondedThickness.length === 2) {
            addBondedThicknesses(bondedThickness);
            setFieldEnabled$1("t", true);
            st.t = thicknesses.value[0];
          } else {
            emit("error", "bonded thickness found which does not have 2 options");
          }
        } else if (!thicknesses.value.includes(st.t)) {
          thicknesses.value.push(st.t);
        }
      }
      if (thicknesses.value.length > 1) setFieldEnabled$1("t", true);
    };
    const getShapeThicknesses = (shape) => {
      var _a;
      if (!shape) return { thicknesses: [], bondedThicknesses: [] };
      if (!((_a = materials.value) == null ? void 0 : _a.length)) {
        return {
          thicknesses: thicknesses.value,
          bondedThicknesses: []
        };
      }
      if (!shape.material) return { thicknesses: [], bondedThicknesses: [] };
      const material = materials.value.find((m) => m.name === shape.material);
      if (!material) return { thicknesses: [], bondedThicknesses: [] };
      const thicknessesList = [...material.thicknesses];
      const bondedThicknessesList = [];
      for (let i = 0; i < thicknessesList.length; i++) {
        const t22 = thicknessesList[i];
        const bonded = getBondedThicknesses(t22);
        const bondedIndexes = [];
        if (bonded.length) {
          for (const b of bonded) {
            thicknessesList[i] = b;
            bondedIndexes.push(i);
          }
          i++;
        }
        if (bondedIndexes.length) {
          bondedThicknessesList.push(bondedIndexes);
        }
      }
      return {
        thicknesses: thicknessesList,
        bondedThicknesses: bondedThicknessesList
      };
    };
    const getShapeThicknessOptions = (shape) => {
      const thicknesses2 = getShapeThicknesses(shape).thicknesses;
      return thicknesses2.map((t22) => ({
        label: t22 == null ? void 0 : t22.toString(),
        value: t22
      }));
    };
    const initMaterialsThicknesses = (initData) => {
      var _a, _b;
      if ((_a = initData == null ? void 0 : initData.stock) == null ? void 0 : _a.some((s) => s == null ? void 0 : s.material)) {
        materials.value = [];
        thicknesses.value = [];
        bondedThicknesses.value = [];
        const materialMap = /* @__PURE__ */ new Map();
        for (const s of initData.stock) {
          if (!s.material) continue;
          const materialName = s.material.toUpperCase();
          if (!materialMap.has(materialName)) {
            materialMap.set(materialName, /* @__PURE__ */ new Set());
          }
          if (s.t != null) {
            (_b = materialMap.get(materialName)) == null ? void 0 : _b.add(convertNumberFormat({ v: s.t }));
          }
        }
        materials.value = Array.from(materialMap.entries()).map(([name, thicknessSet]) => {
          const material = {
            name,
            thicknesses: Array.from(thicknessSet).sort((a, b) => a - b)
          };
          return material;
        });
        if (materials.value.length > 1) {
          setFieldEnabled$1("material", true);
        }
      } else {
        getThicknessesFromStock(initData.stock);
      }
    };
    const addBondedThicknesses = (bonded, material = null) => {
      if (!Array.isArray(bonded)) {
        emit("error", "addBondedThicknesses expects an array");
        return;
      }
      const bondexIndexes = [];
      for (let i = 0; i < bonded.length; i++) {
        let bondedThickness = bonded[i];
        if (options.numberFormat === "decimal") {
          bondedThickness = parseFloat(bondedThickness);
        }
        thicknesses.value.push(bondedThickness);
        if (material) {
          material.thicknesses.push(bondedThickness);
        }
        bondexIndexes.push(thicknesses.value.length - 1);
      }
      bondedThicknesses.value.push(bondexIndexes);
    };
    const getBondedThicknesses = (t22, cu = false) => {
      if (typeof t22 === "string" && t22.includes(",")) {
        const bonded = t22.split(",");
        if (cu) return bonded.map((t3) => convertNumberFormat({ v: t3 }));
        return bonded;
      }
      return [];
    };
    const toggleFullScreen = () => {
      if (isFullScreen.value) closeFullScreen();
      else openFullScreen();
    };
    const openFullScreen = () => {
      document.getElementById("smartcut-checkout").requestFullscreen();
      isFullScreen.value = true;
    };
    const closeFullScreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      isFullScreen.value = false;
    };
    const isCreditVisible = () => {
      var _a, _b;
      if ((_b = (_a = user.value) == null ? void 0 : _a.api) == null ? void 0 : _b.whiteLabel) return true;
      let visible = true;
      const wrapper = document.querySelector("#smartcut-app #credit");
      const link = document.querySelector("#smartcut-app #credit a");
      [wrapper, link].forEach((el, index) => {
        if (!el) return visible = false;
        const style = window.getComputedStyle(el);
        if (style.display === "none") return visible = false;
        if (style.display === "hidden") return visible = false;
        if (style.opacity === "0") return visible = false;
        if (style.color === "transparent") return visible = false;
        if (style.position !== "relative") return visible = false;
        if (index === 1) {
          if (style.color !== "#4e4e4e" && style.color !== "rgb(78, 78, 78)") {
            return visible = false;
          }
        }
      });
      creditVisible.value = visible;
      return visible;
    };
    const setExtrasOption$1 = (shape, extraType, option, key, value) => {
      setExtrasOption(
        shape,
        extraType,
        option,
        key,
        value,
        props.findExtrasPrice
      );
    };
    const setAllExtrasOptions$1 = (shape, extraType, option, value) => {
      setAllExtrasOptions(
        shape,
        extraType,
        option,
        value,
        extraType === "banding" ? cornerSides : [],
        props.findExtrasPrice
      );
    };
    const initExtrasOptions = (shape, extraType) => {
      const labelsKeys = extraType === "banding" ? bandingData == null ? void 0 : bandingData.labels : finishData == null ? void 0 : finishData.labels;
      initExtraOptions(shape, extraType, labelsKeys);
      const extraOptionsKey = getExtraOptionsKey(extraType);
      if (shape == null ? void 0 : shape[extraOptionsKey]) {
        for (const option in shape[extraOptionsKey]) {
          const price = getExtrasPrice(shape, extraType, option, props.findExtrasPrice);
          if (!price && option && shape[extraType][option]) {
            new Issue({
              item: shape,
              field: [[extraType, option]],
              type: "error",
              message: sentenceCase(t2("option_not_available", { x: shape[extraType][option], y: t2(extraType) }))
            });
          }
          setExtra(shape, extraType, option, price ? true : false);
        }
      }
    };
    const getMaxPricingLevels = (pricingObject) => {
      const pricingKeys = Object.keys(pricingObject);
      const maxLevels = Math.max(...pricingKeys.map((key) => key.split("|").length));
      return maxLevels;
    };
    const getAllOptionsFromPricingObject = (pricingObject) => {
      const options2 = [];
      const pricingKeys = Object.keys(pricingObject);
      const maxLevels = getMaxPricingLevels(pricingObject);
      for (let i = maxLevels; i--; ) options2.push(/* @__PURE__ */ new Set());
      for (const key of pricingKeys) {
        const values = key.split("|");
        values.forEach((value, index) => options2[index].add(value));
      }
      for (let i = 0; i < maxLevels; i++) {
        options2[i] = Array.from(options2[i]);
      }
      return options2;
    };
    const getAvailablePricingOptions = (pricingObject, currentOptions = [], index) => {
      if (!pricingObject) return [];
      if (index > 0 && !currentOptions[index - 1]) return [];
      const availableOptions = /* @__PURE__ */ new Set();
      for (const key of Object.keys(pricingObject)) {
        const keyParts = key.split("|");
        if (keyParts.length > index) {
          let isCompatible = true;
          for (let i = 0; i < index; i++) {
            if (currentOptions[i] && keyParts[i] !== currentOptions[i]) {
              isCompatible = false;
              break;
            }
          }
          if (isCompatible) {
            availableOptions.add(keyParts[index]);
          }
        }
      }
      return Array.from(availableOptions);
    };
    const getExtrasPrice$1 = (shape, extraType, key) => {
      return getExtrasPrice(
        shape,
        extraType,
        key,
        props.findExtrasPrice
      );
    };
    const handleImageUpdate = (newImageData) => {
      const existingIndex = images.value.findIndex((img) => img.shapeId === newImageData.shapeId);
      if (existingIndex !== -1) {
        images.value[existingIndex] = newImageData;
      } else {
        images.value.push(newImageData);
      }
      window.smartcutImages = images.value;
    };
    const handleImageRemove = (shapeId) => {
      images.value = images.value.filter((img) => img.shapeId !== shapeId);
      window.smartcutImages = images.value;
    };
    const addInputShape = (number = 1) => {
      for (let i = number; i--; ) {
        let newInputShape;
        if (inputs2.inputShapes.value.length > 0) {
          const lastShape = inputs2.inputShapes.value[inputs2.inputShapes.value.length - 1];
          newInputShape = createInputShape({
            material: lastShape.material,
            t: lastShape.t
          });
        } else {
          newInputShape = createInputShape();
        }
        inputs2.inputShapes.value.push(newInputShape);
      }
    };
    const removeShape2 = (index) => {
      var _a;
      if (inputs2.inputShapes.value.length === 1) return;
      const listId = inputs2.inputShapes.value[index].listId;
      inputs2.inputShapes.value.splice(index, 1);
      if (((_a = currentInputShape.value) == null ? void 0 : _a.listId) === listId) {
        currentInputShape.value = null;
      }
      resetProgress();
    };
    const createInputShape = (inputShapeData = {
      l: null,
      w: sawData.stockType === "linear" ? ((_a) => (_a = inputs2.inputStock.value[0]) == null ? void 0 : _a.w)() : null,
      t: thicknesses.value.length ? thicknesses.value[0] : null,
      q: 1,
      material: ((_b) => (_b = materials.value) == null ? void 0 : _b.length)() === 1 ? materials.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: false
    }) => {
      var _a2, _b2;
      inputShapeData.id = (inputs2.inputShapes.value.length + 1).toString();
      const inputShape = new InputShape(inputShapeData, options.numberFormat);
      if ((_a2 = bandingData == null ? void 0 : bandingData.labels) == null ? void 0 : _a2.length) {
        initExtrasOptions(inputShape, "banding");
      }
      if ((_b2 = finishData == null ? void 0 : finishData.labels) == null ? void 0 : _b2.length) {
        initExtrasOptions(inputShape, "finish");
      }
      return inputShape;
    };
    const updatePartQuantitiesBasedOnThickness = () => {
      if (!thicknesses.value.length) return;
      r.shapeList.value.forEach((s) => {
        if (!s.t) return;
        const thicknessIndex = thicknesses.value.findIndex(
          (t22) => convertNumberFormat({ v: t22 }) === s.t
        );
        const bondedIndexes = bondedThicknesses.value.find((bonded) => {
          return bonded.includes(thicknessIndex);
        });
        if (!bondedIndexes) return;
        const smallestThickness = Math.min(
          ...bondedIndexes.map((i) => thicknesses.value[i])
        );
        if (s.t > smallestThickness) {
          s.q = s.q * (s.t / smallestThickness);
          s.t = smallestThickness;
        }
      });
    };
    const reset = () => {
      resetProgress();
      setActiveStockId(null);
      r.stockList.value = [];
      r.shapeList.value = [];
      r.cutList.value = [];
    };
    const clear = () => {
      inputs2.inputShapes.value.length = 0;
      if (props.inputType !== "formula") {
        nextTick(() => addInputShape(1));
      }
    };
    const calculate = async () => {
      emit("calculating");
      if (thinking.value) return false;
      thinking.value = true;
      success.value = false;
      const { valid, saw, stockList, shapeList } = await validateAndPrepare({
        t: t2,
        partTrim: options.partTrim,
        maxShapes: options.maxParts,
        orientationModel: options.orientationModel,
        sawData,
        onLimit: () => {
          addNotice2({
            type: "error",
            message: t2("max_parts") + " " + options.maxParts
          });
        }
      });
      if (!valid) {
        emit("validation-error");
        thinking.value = false;
        return;
      }
      reset();
      if (props.debug)
        console.log(
          "SmartCut - calculating",
          "stock",
          stockList.map((s) => s.dimensions()),
          "parts",
          shapeList.map((s) => s.dimensions())
        );
      const calculationData = {
        inputs: {
          parts: inputs2.inputShapes.value,
          stock: inputs2.inputStock.value,
          saw
        },
        saw,
        shapeList,
        stockList,
        enableEvo: true,
        domain
      };
      await socket.connect();
      socket.emit("calculate", calculationData);
    };
    const initExtra = (extraType, initData) => {
      var _a;
      setFieldEnabled$1(extraType, false);
      if (!extraType || !initData || !(initData == null ? void 0 : initData[extraType])) return;
      if (!getNestedProperty$1(options, ["enable", extraType])) return;
      const pricingPath = [extraType, "pricing"];
      if (!checkObjectHasPropery(initData, pricingPath)) {
        emit("error", `${pricingPath.join(".")} not found in sent data`);
        return;
      }
      const pricingData = getNestedProperty$1(initData, pricingPath);
      if (typeof pricingData !== "object") {
        emit("error", `${pricingPath.join(".")} data must be an object`);
        return;
      }
      if (!objectValuesPresent(pricingData)) {
        emit("error", `if provided, ${pricingPath.join(".")} data must contain some values`);
        return;
      }
      const pricingKeys = Object.keys(pricingData);
      const pricingValues = Object.values(pricingData);
      if (!pricingKeys.length) {
        emit("error", `no ${pricingPath.join(".")} pricing found`);
        return;
      }
      const commaRegex = /,/;
      for (const key of pricingKeys) {
        if (commaRegex.test(key)) {
          emit("error", `${pricingPath} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      }
      if (pricingValues.some((v) => isNaN(v))) {
        emit("error", `${pricingPath} values must be a number`);
        return;
      }
      const maxPricingLevels = getMaxPricingLevels(pricingData);
      const labelsPath = [extraType, "labels"];
      let labelsData = [];
      if (!checkObjectHasPropery(initData, labelsPath)) {
        emit("error", `${labelsPath.join(".")} not found`);
        return;
      } else {
        labelsData = getNestedProperty$1(initData, labelsPath);
      }
      if (!labelsData) {
        emit("error", `${labelsPath.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(labelsData)) {
        emit("error", `${labelsPath.join(".")} data must be an array`);
        return;
      }
      if (!(labelsData == null ? void 0 : labelsData.length)) {
        emit("error", `if provided, ${labelsPath.join(".")} data must contain values`);
        return;
      }
      if (labelsData.length !== maxPricingLevels) {
        emit("error", `${labelsPath.join(".")} length (${labelsData.length}) must match the number of levels in ${pricingPath.join(".")} (${maxPricingLevels})`);
        return;
      }
      switch (extraType) {
        case "banding":
          bandingData.labels = labelsData;
          bandingData.pricing = pricingData;
          bandingData.options = getAllOptionsFromPricingObject(pricingData);
          break;
        case "finish":
          finishData.labels = labelsData;
          finishData.pricing = pricingData;
          finishData.options = getAllOptionsFromPricingObject(pricingData);
          break;
      }
      setFieldEnabled$1(extraType, true);
      if (!((_a = inputs2.inputShapes.value) == null ? void 0 : _a.length)) return;
      for (const inputShape of inputs2.inputShapes.value) {
        initExtrasOptions(inputShape, extraType);
      }
    };
    const openExtra = (extraType, shape) => {
      if (!shape) return;
      if (extraType !== "info") {
        Object.keys(extrasIndex).forEach((key) => {
          if (key !== extraType && key !== "info") {
            extrasIndex[key] = null;
          }
        });
      }
      const index = inputs2.inputShapes.value.indexOf(shape);
      if (extrasIndex[extraType] === index) {
        currentInputShape.value = null;
        extrasIndex[extraType] = null;
      } else {
        currentInputShape.value = shape;
        extrasIndex[extraType] = index;
      }
    };
    const handleSmartcutLoad = (e) => {
      emit("log", ["load event received"]);
      if (!loaded.value) {
        emit("log", ["load event received"]);
        return;
      }
      parseInputs(e.detail);
    };
    const parseInputs = (detail) => {
      var _a, _b, _c;
      emit("log", ["loading parts..."]);
      if (!detail || !((_b = (_a = detail == null ? void 0 : detail.inputs) == null ? void 0 : _a.parts) == null ? void 0 : _b.length)) {
        emit("log", ["could not find any parts to import"]);
        return;
      }
      inputs2.inputShapes.value.length = 0;
      let index = 0;
      for (const d of detail.inputs.parts) {
        const inputShape = createInputShape(d);
        if (inputShape) {
          inputs2.inputShapes.value.push(inputShape);
          if ((_c = inputShape.issues) == null ? void 0 : _c.length) {
            emit("log", [`SmartCut - issues found while importing part at index ${index}`, inputShape.issues]);
          }
        } else {
          emit("log", [`SmartCut - error loading part at index ${index}`, d]);
        }
        index++;
      }
      const errors = inputs2.inputShapes.value.flatMap((s) => getErrors(s.issues));
      if (errors.length) {
        addNotice2({
          type: "error",
          message: sentenceCase(t2("issues_found"))
        });
      }
      emit("log", [`loaded ${inputs2.inputShapes.value.length} parts`]);
    };
    const importParts = (inputData) => {
      inputs2.inputShapes.value.length = 0;
      nextTick(() => {
        var _a, _b;
        for (const d of inputData) {
          d.t = ((_b = (_a = inputs2.inputStock.value) == null ? void 0 : _a[0]) == null ? void 0 : _b.t) ?? null;
          inputs2.inputShapes.value.push(createInputShape(d));
        }
      });
    };
    watch(() => props.stock, (stock) => {
      reset();
      if (!Array.isArray(stock)) {
        console.warn("SmartCut - stock must be passed as an array");
      }
      if (!(stock == null ? void 0 : stock.length)) return;
      inputs2.inputStock.value.length = 0;
      if (!materials.value.length) {
        getThicknessesFromStock(stock);
      }
      for (const st of stock) {
        const newInputStock = new InputStock({
          ...st,
          autoAdd: true,
          id: (inputs2.inputStock.value.length + 1).toString()
          // type: sawData.stockType
        }, options.numberFormat);
        inputs2.inputStock.value.push(newInputStock);
      }
      if (inputs2.inputStock.value.length) {
        if (!inputs2.inputShapes.value.length) {
          if (props.inputType !== "formula") {
            nextTick(() => addInputShape(1));
          }
        } else {
          nextTick(() => {
            inputs2.inputShapes.value.forEach((shape) => {
              if (shape.material) {
                const materialData = materials.value.find((m) => m.name === shape.material);
                if (materialData) {
                  if (!materialData.thicknesses.includes(convertNumberFormat({ v: shape.t }))) {
                    shape.t = convertNumberFormat({ v: materialData.thicknesses[0] });
                  }
                }
              } else if (!shape.t) {
                shape.t = convertNumberFormat({ v: inputs2.inputStock.value[0].t });
              }
            });
          });
        }
        const inputStockIssues = validateInputStock2(sawData);
        if (inputStockIssues.length) {
          console.warn("inputStock issues", JSON.parse(JSON.stringify(inputStockIssues)));
          addNotice2({
            type: "error",
            message: sentenceCase(t2("stock_issue")),
            additional: inputStockIssues.map((i) => t2(i.message))
          });
        }
      }
    }, { immediate: true });
    watch(inputs2.inputShapes, (inputShapes) => {
      emit("inputs-changed");
      inputShapes.forEach((s) => {
        var _a;
        if (sawData.stockType === "linear") {
          s.w = (_a = inputs2.inputShapes.value[0]) == null ? void 0 : _a.w;
        }
        const materialOption = materials.value.find((m) => m.name === s.material);
        if (materialOption) {
          if (!materialOption.thicknesses.includes(convertNumberFormat({ v: s.t }))) {
            s.t = convertNumberFormat({ v: materialOption.thicknesses[0] });
          }
        }
      });
    }, { deep: true });
    watch(() => options.numberFormat, (value) => {
      updateNumberFormat(value);
    });
    onMounted(async () => {
      if (mounted.value) return;
      const url = new URL(window.location.href);
      const queryParams = url.searchParams.toString();
      const newURL = url.origin + url.pathname + (queryParams ? `?${queryParams}` : "");
      if (currentURL.value !== newURL) {
        inputs2.inputShapes.value.length = 0;
        if (props.inputType !== "formula") {
          addInputShape(1);
        }
      }
      currentURL.value = newURL;
      locale.value = options.locale;
      await socket.connect();
      socket.emit("getUserFromDomain");
      window.addEventListener("smartcut/load", handleSmartcutLoad);
      mounted.value = true;
      if (props.debug) {
        emit("log", [
          "ready...",
          "fields:",
          relevantFieldDefinitions.value.map((f) => f.id)
        ]);
      }
    });
    const cleanupSocket = () => {
      if (socket) socket.disconnect();
    };
    onUnmounted(() => {
      window.removeEventListener("smartcut/load", handleSmartcutLoad);
      cleanupSocket();
      delete window.smartcutCheckout;
    });
    __expose({
      init,
      getAvailablePricingOptions,
      getExtrasPrice: getExtrasPrice$1,
      formatPrice: props.formatPrice,
      findExtrasPrice: props.findExtrasPrice,
      inputShapes: inputs2.inputShapes,
      initExtrasOptions,
      createInputShape
    });
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(ToolTip$1), {
          content: unref(tip).content,
          type: unref(tip).type,
          show: unref(tip).show,
          "reference-el": unref(tip).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        unref(env) === "development" && showDevInfo$2 ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
          _cache[5] || (_cache[5] = createBaseVNode("div", null, "Developer information", -1)),
          createBaseVNode("div", null, toDisplayString(unref(inputs2).inputShapes.value[0].t), 1)
        ])) : createCommentVNode("", true),
        machiningEnabled.value && ((_a = currentInputShape.value) == null ? void 0 : _a.machining) ? (openBlock(), createBlock(unref(Machining$12), {
          key: 1,
          shape: currentInputShape.value,
          "onUpdate:shape": _cache[0] || (_cache[0] = ($event) => currentInputShape.value = $event),
          translate: true,
          options: machiningOptions,
          "find-extras-price": __props.findExtrasPrice,
          "get-extras-price": getExtrasPrice$1,
          "get-available-pricing-options": getAvailablePricingOptions,
          "format-price": __props.formatPrice,
          onClose: closeMachining
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : createCommentVNode("", true),
        !loaded.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(Spinner, {
            size: 50,
            "show-number": false
          })
        ])) : createCommentVNode("", true),
        loaded.value ? (openBlock(), createElementBlock("div", {
          key: 3,
          id: "smartcut-checkout",
          class: normalizeClass({ fullscreen: isFullScreen.value })
        }, [
          canGoFullScreen.value && !__props.readonly ? (openBlock(), createElementBlock("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: _cache[1] || (_cache[1] = ($event) => toggleFullScreen())
          }, [
            createVNode(_component_font_awesome_icon, { icon: ["fasr", "expand"] }),
            createTextVNode(" " + toDisplayString(unref(sentenceCase)(unref(t2)("full_screen"))), 1)
          ])) : createCommentVNode("", true),
          showCredit.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            id: "credit",
            style: normalizeStyle(creditStyles.value)
          }, [
            createBaseVNode("a", {
              title: "SmartCut | Cut list optimization software",
              style: normalizeStyle(creditLinkStyles.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, toDisplayString(unref(upperCase)(unref(t2)("powered_by"))), 5)
          ], 4)) : createCommentVNode("", true),
          createBaseVNode("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: normalizeStyle({ "grid-template-columns": partColumnsStyle.value })
          }, [
            unref(inputs2).inputShapes.value.length ? (openBlock(), createElementBlock("div", _hoisted_3$4, [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "cell id" }, null, -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(relevantFieldDefinitions.value, (f) => {
                return openBlock(), createElementBlock("div", {
                  key: f.id,
                  class: normalizeClass(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(f.id) || f.type === "checkbox" }])
                }, toDisplayString(unref(sentenceCase)(unref(t2)(f.label))), 3);
              }), 128)),
              unref(env) === "development" ? (openBlock(), createElementBlock("div", _hoisted_4$4, " Info ")) : createCommentVNode("", true),
              unref(inputs2).inputShapes.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_5$3)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(inputs2).inputShapes.value, (shape, shapeIndex) => {
              return openBlock(), createElementBlock("div", {
                key: shapeIndex,
                class: "row inputs"
              }, [
                createBaseVNode("div", _hoisted_6$3, [
                  createBaseVNode("div", {
                    class: "id",
                    style: normalizeStyle({
                      background: options.colors.partA,
                      color: options.colors.text
                    })
                  }, toDisplayString(shapeIndex + 1), 5)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(relevantFieldDefinitions.value, (f) => {
                  return openBlock(), createElementBlock("div", {
                    key: f.fieldMap,
                    class: normalizeClass(["cell", [`${f.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(f.id) || f.type === "checkbox" }]])
                  }, [
                    !["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(f.id) ? (openBlock(), createBlock(_sfc_main$e, {
                      key: 0,
                      id: f.id + "-" + shapeIndex,
                      focus: !__props.readonly && options.enable.focus && shapeIndex === unref(inputs2).inputShapes.value.length - 1 && f.id === "l",
                      issue: unref(shouldShowInputIssue)(shape, [f.fieldMap]),
                      warning: unref(shouldShowInputIssue)(shape, [f.fieldMap], true),
                      type: f.type,
                      output: f.output,
                      label: (f == null ? void 0 : f.label) ? unref(sentenceCase)(unref(t2)(f.label)) : null,
                      placeholder: (f == null ? void 0 : f.placeholder) ? unref(sentenceCase)(unref(t2)(f.placeholder)) : null,
                      "enable-label": false,
                      "number-format": options.numberFormat,
                      "should-update-number-format": false,
                      readonly: __props.readonly,
                      required: (f == null ? void 0 : f.required) ?? false,
                      "allow-zero": (f == null ? void 0 : f.allowZero) ?? true,
                      options: f.id === "t" ? getShapeThicknessOptions(shape) : f == null ? void 0 : f.options,
                      "true-value": f == null ? void 0 : f.trueValue,
                      "false-value": f == null ? void 0 : f.falseValue,
                      default: f == null ? void 0 : f.default,
                      min: typeof (f == null ? void 0 : f.min) === "number" ? f.min : null,
                      max: typeof (f == null ? void 0 : f.max) === "number" ? f.max : null,
                      custom: f == null ? void 0 : f.custom,
                      value: unref(getNestedProperty$1)(shape, f == null ? void 0 : f.fieldMap),
                      text: {
                        delete: unref(capitalise)(unref(t2)("delete")),
                        select: unref(capitalise)(unref(t2)("select"))
                      },
                      onValidation: (ref2, result) => handleFieldValidation(ref2, result, shape, [f.fieldMap]),
                      "onUpdate:value": (value) => {
                        if (f.fieldMap) {
                          unref(setNestedProperty)(shape, f.fieldMap, value);
                        }
                      }
                    }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"])) : f.id === "orientationLock" ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 1,
                      id: "orientation-" + shapeIndex,
                      rectangle: shape,
                      disabled: __props.readonly,
                      "stock-grain": unref(getShapeGrainSummary)(shape),
                      "button-background": options.colors.button,
                      "icon-color": options.colors.buttonText,
                      "orientation-model": options.orientationModel,
                      onUpdateOrientation: ($event) => updateShapeOrientation(shape, $event)
                    }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : f.id === "banding" ? (openBlock(), createBlock(_sfc_main$j, {
                      key: 2,
                      id: "banding-" + shapeIndex,
                      "input-shape": shape,
                      disabled: __props.readonly,
                      "stock-grain": unref(getShapeGrainSummary)(shape),
                      open: extrasIndex.banding === shapeIndex,
                      "orientation-model": options.orientationModel,
                      onClicked: ($event) => openExtra("banding", shape)
                    }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : f.id === "finish" ? (openBlock(), createBlock(_sfc_main$c, {
                      key: 3,
                      id: "finish-" + shapeIndex,
                      "input-shape": shape,
                      disabled: __props.readonly,
                      open: extrasIndex.finish === shapeIndex,
                      onClicked: ($event) => openExtra("finish", shape)
                    }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : f.fieldMap === "machining" && canGoFullScreen.value ? (openBlock(), createBlock(MachiningButton, {
                      key: 4,
                      id: "machining-" + shapeIndex,
                      disabled: __props.readonly,
                      "input-shape": shape,
                      onOpen: ($event) => openMachining(shape)
                    }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : f.fieldMap === "imageUpload" ? (openBlock(), createElementBlock("button", {
                      key: 5,
                      id: "image-upload-" + shapeIndex,
                      type: "button",
                      disabled: __props.readonly,
                      class: normalizeClass({ selected: extrasIndex.info === shapeIndex }),
                      onClick: ($event) => openExtra("imageUpload", shape)
                    }, [
                      createVNode(_component_font_awesome_icon, { icon: ["fass", "image"] })
                    ], 10, _hoisted_7$1)) : createCommentVNode("", true)
                  ], 2);
                }), 128)),
                unref(env) === "development" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass({ selected: extrasIndex.info === shapeIndex }),
                    onClick: ($event) => openExtra("info", shape)
                  }, " i ", 10, _hoisted_9$1)
                ])) : createCommentVNode("", true),
                unref(inputs2).inputShapes.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  createBaseVNode("button", {
                    type: "button",
                    class: "delete",
                    "aria-label": unref(sentenceCase)(unref(t2)("action_item", { a: "remove", i: "part" })),
                    onClick: ($event) => removeShape2(shapeIndex)
                  }, [
                    createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                  ], 8, _hoisted_11$1)
                ])) : createCommentVNode("", true),
                createVNode(unref(InputIssues$1), {
                  item: shape,
                  "num-columns": partColumns.value
                }, null, 8, ["item", "num-columns"]),
                extrasIndex.banding === shapeIndex && bandingData.options.length > 0 ? (openBlock(), createBlock(_sfc_main$d, {
                  key: 2,
                  shape,
                  "shape-index": shapeIndex,
                  "extra-type": "banding",
                  "extra-label": "banding",
                  "extra-keys": bandingData.keys,
                  "all-options": bandingData.options,
                  pricing: bandingData.pricing,
                  labels: bandingData.labels,
                  "user-friendly-field-map": unref(userFriendlyFieldMap),
                  "part-columns": partColumns.value,
                  "get-price": getExtrasPrice$1,
                  "format-price": __props.formatPrice,
                  "orientation-model": options.orientationModel,
                  "get-available-pricing-options": getAvailablePricingOptions,
                  onUpdateAll: setAllExtrasOptions$1,
                  onSet: setExtrasOption$1
                }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : createCommentVNode("", true),
                extrasIndex.finish === shapeIndex && finishData.options.length > 0 ? (openBlock(), createBlock(_sfc_main$d, {
                  key: 3,
                  shape,
                  "shape-index": shapeIndex,
                  "extra-type": "finish",
                  "extra-label": "finish",
                  "extra-keys": finishData.keys,
                  "all-options": finishData.options,
                  pricing: finishData.pricing,
                  labels: finishData.labels,
                  "user-friendly-field-map": unref(userFriendlyFieldMap),
                  "part-columns": partColumns.value,
                  "get-price": getExtrasPrice$1,
                  "format-price": __props.formatPrice,
                  "orientation-model": options.orientationModel,
                  "get-available-pricing-options": getAvailablePricingOptions,
                  onUpdateAll: setAllExtrasOptions$1,
                  onSet: setExtrasOption$1
                }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : createCommentVNode("", true),
                extrasIndex.info === shapeIndex ? (openBlock(), createElementBlock("div", {
                  key: 4,
                  id: "shape-info",
                  style: normalizeStyle({ "grid-column-end": "span " + partColumns.value })
                }, [
                  createVNode(unref(ObjectViewer2), {
                    data: [shape == null ? void 0 : shape.banding],
                    paths: ["banding"]
                  }, null, 8, ["data"])
                ], 4)) : createCommentVNode("", true),
                extrasIndex.imageUpload === shapeIndex ? (openBlock(), createBlock(ImageUpload, {
                  key: 5,
                  prefix: (shapeIndex + 1).toString(),
                  "unique-id": unref(uniqueId),
                  "shape-id": shape.listId,
                  style: normalizeStyle({ "grid-column-end": "span " + partColumns.value }),
                  images: images.value,
                  onUpdate: handleImageUpdate,
                  onRemove: handleImageRemove
                }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : createCommentVNode("", true)
              ]);
            }), 128))
          ], 4),
          createBaseVNode("div", _hoisted_12$1, [
            !__props.readonly ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              "aria-label": unref(t2)("action_item", { a: "add", i: "part" }),
              style: normalizeStyle({ background: options.colors.button, color: options.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: _cache[2] || (_cache[2] = ($event) => addInputShape(1))
            }, [
              createVNode(_component_font_awesome_icon, { icon: ["fasr", "plus-large"] }),
              createTextVNode(" " + toDisplayString(unref(sentenceCase)(unref(t2)("action_item", { a: unref(t2)("add"), i: unref(t2)("part") }))), 1)
            ], 12, _hoisted_13$1)) : createCommentVNode("", true),
            createBaseVNode("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": unref(sentenceCase)(unref(t2)("calculate")),
              style: normalizeStyle({
                background: options.colors.button,
                color: options.colors.buttonText
              }),
              disabled: !((_b = unref(inputs2).inputStock.value) == null ? void 0 : _b.length) || thinking.value,
              onClick: _cache[3] || (_cache[3] = ($event) => calculate())
            }, [
              createVNode(_component_font_awesome_icon, { icon: ["fass", "calculator"] }),
              createTextVNode(toDisplayString(unref(sentenceCase)(unref(t2)("calculate"))), 1)
            ], 12, _hoisted_14$1),
            !__props.readonly ? (openBlock(), createElementBlock("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": unref(sentenceCase)(unref(t2)("clear")),
              onClick: _cache[4] || (_cache[4] = ($event) => clear())
            }, [
              createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
            ], 8, _hoisted_15$1)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_16, toDisplayString(unref(totalInputShapes2)) + toDisplayString((options == null ? void 0 : options.maxParts) ? "/" + options.maxParts : ""), 1)
          ]),
          CSVImportEnabled.value && !__props.readonly ? (openBlock(), createBlock(unref(ImportCSV$1), {
            key: 2,
            ref: "import",
            "number-format": options.numberFormat,
            "custom-fields": customFieldDefinitions.value,
            "banding-options": bandingData.options,
            "banding-labels": bandingData.labels,
            "finish-options": finishData.options,
            "finish-labels": finishData.labels,
            onImport: importParts
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : createCommentVNode("", true),
          messageVisible.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
            messageHeading.value ? (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(messageHeading.value), 1)) : createCommentVNode("", true),
            createBaseVNode("pre", _hoisted_19, toDisplayString(messageContent.value), 1)
          ])) : createCommentVNode("", true),
          (options.enable.diagram ? thinking.value && !unref(progress).complete : thinking.value || unref(progress).complete) ? (openBlock(), createElementBlock("div", _hoisted_20, [
            createVNode(Spinner, {
              size: 50,
              number: unref(progress).shapeCount,
              complete: unref(progress).complete,
              "show-number": options.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : createCommentVNode("", true),
          withDirectives(createVNode(_sfc_main$9, {
            "element-id": "diagram",
            "number-format": options.numberFormat,
            "decimal-places": options.decimalPlaces,
            colors: options.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [vShow, options.enable.diagram && unref(progress).complete]
          ]),
          options.enable.diagram && unref(stackedStock).length > 1 && unref(progress).complete ? (openBlock(), createBlock(_sfc_main$m, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": unref(activeStockId),
            "stock-list": unref(stackedStock),
            onShowStock: unref(setActiveStockId)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const CheckoutCalculator = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1c3530d5"]]);
const _sfc_main$7 = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: true
    },
    paths: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((_, index) => {
      this.expanded[index] = true;
    });
  },
  methods: {
    toggle(index) {
      this.expanded[index] = !this.expanded[index];
    },
    getValueType(value) {
      if (value === null) return "null";
      if (Array.isArray(value)) return "array";
      return typeof value;
    },
    formatValue(value) {
      if (value === null) return "null";
      if (value === void 0) return "undefined";
      if (typeof value === "boolean") return value.toString();
      if (typeof value !== "object") {
        return typeof value === "string" ? `'${value}'` : String(value);
      }
      if (Array.isArray(value)) {
        const items = value.map((item) => {
          if (typeof item === "object" && item !== null) {
            const entries2 = Object.entries(item).map(([k, v]) => `${k}: ${typeof v === "string" ? `'${v}'` : v}`).join(", ");
            return `{ ${entries2} }`;
          }
          return typeof item === "string" ? `'${item}'` : String(item);
        });
        return `[ ${items.join(", ")} ]`;
      }
      const entries = Object.entries(value).map(([k, v]) => {
        if (Array.isArray(v)) {
          return `${k}: ${this.formatValue(v)}`;
        }
        return `${k}: ${typeof v === "string" ? `'${v}'` : v}`;
      }).join(", ");
      return `{ ${entries} }`;
    }
  }
};
const _hoisted_1$5 = { class: "smartcut-object-viewer" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$3 = { class: "toggle-icon" };
const _hoisted_4$3 = { class: "path-label" };
const _hoisted_5$2 = {
  key: 0,
  class: "object-properties"
};
const _hoisted_6$2 = { class: "key" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.data, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: "array-item"
      }, [
        createBaseVNode("div", {
          class: "item-header",
          onClick: ($event) => $options.toggle(index)
        }, [
          createBaseVNode("div", _hoisted_3$3, toDisplayString($data.expanded[index] ? "▼" : "▶"), 1),
          createBaseVNode("div", _hoisted_4$3, toDisplayString($props.paths[index] || index), 1)
        ], 8, _hoisted_2$3),
        $data.expanded[index] ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "property-item"
            }, [
              createBaseVNode("div", _hoisted_6$2, toDisplayString(key) + ": ", 1),
              createBaseVNode("div", {
                class: normalizeClass(["value", $options.getValueType(value)])
              }, toDisplayString($options.formatValue(value)), 3)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    }), 128))
  ]);
}
const ObjectViewer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1]]);
const ObjectViewer$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ObjectViewer
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = ["data-placement"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(__props) {
    const props = __props;
    const floatingRef = ref(null);
    const arrowRef = ref(null);
    const virtualRef = computed(() => ({
      getBoundingClientRect: () => {
        var _a;
        return ((_a = props.referenceEl) == null ? void 0 : _a.getBoundingClientRect()) || new DOMRect();
      }
    }));
    const middleware = [
      offset(8),
      shift({
        padding: 8,
        mainAxis: true,
        crossAxis: true,
        boundary: document.body
      }),
      flip({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      arrow({ element: arrowRef })
    ];
    const { floatingStyles, middlewareData, placement } = useFloating(
      virtualRef,
      floatingRef,
      {
        placement: "top",
        middleware,
        whileElementsMounted: (reference, floating, update) => {
          const cleanup = autoUpdate(
            reference,
            floating,
            update,
            {
              ancestorScroll: true,
              ancestorResize: true,
              elementResize: true,
              animationFrame: true
            }
          );
          return cleanup;
        }
      }
    );
    const computedStyles = computed(() => ({
      position: floatingStyles.value.position,
      top: floatingStyles.value.top,
      left: floatingStyles.value.left,
      transform: floatingStyles.value.transform,
      zIndex: "1000"
    }));
    const arrowStyles = computed(() => {
      if (!middlewareData.value.arrow) return {};
      const { x: x2, y: y2 } = middlewareData.value.arrow;
      const staticSide = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[placement.value.split("-")[0]] || "top";
      return {
        left: x2 != null ? `${x2}px` : void 0,
        top: y2 != null ? `${y2}px` : void 0,
        [staticSide]: "-4px"
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            _ctx.show && _ctx.referenceEl ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "floatingRef",
              ref: floatingRef,
              class: normalizeClass(["tooltip", _ctx.type]),
              style: normalizeStyle(computedStyles.value),
              "data-placement": unref(placement)
            }, [
              createTextVNode(toDisplayString(_ctx.content) + " ", 1),
              createBaseVNode("div", {
                ref_key: "arrowRef",
                ref: arrowRef,
                class: "arrow",
                style: normalizeStyle(arrowStyles.value)
              }, null, 4)
            ], 14, _hoisted_1$4)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ToolTip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InputIssues",
  props: {
    item: {
      type: Object,
      required: true
    },
    numColumns: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock(Fragment, null, [
        ((_b = (_a = props.item.issues) == null ? void 0 : _a.filter((i) => i.type === "error")) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "group issues",
          style: normalizeStyle({
            "grid-column-end": "span " + props.numColumns
          })
        }, [
          createBaseVNode("pre", null, toDisplayString(props.item.issues.filter((i) => i.type === "error").flatMap((i) => unref(sentenceCase)(i.message)).join("\n")), 1)
        ], 4)) : createCommentVNode("", true),
        ((_d = (_c = props.item.issues) == null ? void 0 : _c.filter((i) => i.type === "warning")) == null ? void 0 : _d.length) ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "group warnings",
          style: normalizeStyle({
            "grid-column-end": "span " + props.numColumns
          })
        }, [
          createBaseVNode("pre", null, toDisplayString(props.item.issues.filter((i) => i.type === "warning").flatMap((i) => unref(sentenceCase)(i.message)).join("\n")), 1)
        ], 4)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const InputIssues = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const d3 = {
  precisionFixed,
  format,
  select,
  selectAll,
  scaleLinear: linear,
  scaleSequential: sequential,
  axisTop,
  axisBottom,
  axisRight,
  axisLeft,
  symbol: Symbol$1,
  path,
  arc,
  symbolTriangle,
  symbolSquare
};
class Vis {
  constructor({
    HTMLElement: el,
    vueComponent,
    shape,
    numberFormat: units = "decimal",
    decimalPlaces = 2
  }) {
    __publicField(this, "HTMLElement");
    __publicField(this, "HTMLElementWidth");
    __publicField(this, "el");
    __publicField(this, "numberFormat");
    __publicField(this, "decimalPlaces");
    __publicField(this, "vueComponent");
    __publicField(this, "shape");
    __publicField(this, "h");
    __publicField(this, "w");
    __publicField(this, "shapeL");
    __publicField(this, "shapeW");
    __publicField(this, "padding", 40);
    __publicField(this, "xScale", d3.scaleLinear());
    __publicField(this, "yScale", d3.scaleLinear());
    __publicField(this, "yScaleFlipped", d3.scaleLinear());
    __publicField(this, "measurementScale", d3.scaleLinear());
    __publicField(this, "xAxis");
    __publicField(this, "yAxis");
    __publicField(this, "formatDp");
    __publicField(this, "svgCanvas");
    __publicField(this, "currentSide", 0);
    __publicField(this, "bandingStrokeWidth", 4);
    __publicField(this, "shapeGroup");
    __publicField(this, "bandingGroup");
    __publicField(this, "holeGroup");
    __publicField(this, "hingeHoleGroup");
    __publicField(this, "cornerGroup");
    __publicField(this, "legendGroup");
    __publicField(this, "pointGroup");
    __publicField(this, "loaded", false);
    this.HTMLElement = el;
    this.numberFormat = units;
    this.decimalPlaces = decimalPlaces;
    this.HTMLElementWidth = this.HTMLElement.offsetWidth;
    this.vueComponent = vueComponent;
    this.shape = shape;
    this.w = 0;
    this.h = 0;
  }
  init() {
    if (this.loaded) return;
    if (!this.HTMLElement) return false;
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w) return false;
    this.el = d3.select(this.HTMLElement);
    if (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces))
      this.decimalPlaces = 2;
    this.formatDp = d3.format(`.${this.decimalPlaces}f`);
    this.shapeL = this.shape.getLongSide();
    this.shapeW = this.shape.getShortSide();
    if (!this.svgCanvas) {
      this.svgCanvas = this.HTMLElement.querySelector("svg");
      if (this.svgCanvas === null) {
        const svg = this.el.append("svg").attr("class", "vis");
        if (svg === null) return;
        this.svgCanvas = svg;
      }
    }
    this.loaded = true;
  }
  create() {
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return false;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2");
    this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group");
    this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group");
    this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group");
    this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group");
    this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group");
    this.createShape();
    this.createHoles();
    this.createHingeHoles();
    this.createBanding();
    this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x");
    this.xAxis.call(
      d3.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    );
    this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px");
    this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y");
    this.yAxis.call(
      d3.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    );
    this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px");
    this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group");
    this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group");
    this.createLegend();
  }
  addPoint(x2, y2) {
    this.pointGroup.append("circle").attr("cx", this.xScale(x2)).attr("cy", this.getYScale()(y2)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    this.svgCanvas.selectAll(".shape-group > *").remove();
    this.svgCanvas.selectAll(".point-group > *").remove();
    if (!this.shape) return false;
    if (!this.shape.l || !this.shape.w || !this.w || !this.h) return false;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2);
    this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const path2 = d3.path();
    const corners = this.shape.machining.corners;
    const sizes = [];
    const types = [];
    [0, 1, 2, 3].forEach((i) => {
      const corner = corners[i];
      if (corner && corner.type) {
        sizes.push(!corner.size ? 0 : convertNumberFormat({ v: corner.size ?? 0, o: this }));
        types.push(corner.type);
      } else {
        sizes.push(0);
        types.push(null);
      }
    });
    const drawCorner = (index, x1, y1, x2, y2) => {
      if (types[index] === "radius") {
        path2.arcTo(
          this.xScale(x1),
          this.getYScale()(y1),
          this.xScale(x2),
          this.getYScale()(y2),
          this.measurementScale(sizes[index])
        );
      } else if (types[index] === "bevel") {
        path2.lineTo(this.xScale(x2), this.getYScale()(y2));
      } else {
        path2.lineTo(this.xScale(x1), this.getYScale()(y1));
        path2.lineTo(this.xScale(x2), this.getYScale()(y2));
      }
    };
    path2.moveTo(this.xScale(0), this.getYScale()(sizes[0]));
    drawCorner(0, 0, 0, sizes[0], 0);
    if (types[0] === "bevel" || types[1] === "bevel") {
      path2.lineTo(this.xScale(this.shapeL - sizes[1]), this.getYScale()(0));
    }
    drawCorner(1, this.shapeL, 0, this.shapeL, sizes[1]);
    if (types[1] === "bevel" || types[2] === "bevel") {
      path2.lineTo(
        this.xScale(this.shapeL),
        this.getYScale()(this.shapeW - sizes[2])
      );
    }
    drawCorner(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - sizes[2],
      this.shapeW
    );
    if (types[2] === "bevel" || types[3] === "bevel") {
      path2.lineTo(this.xScale(sizes[3]), this.getYScale()(this.shapeW));
    }
    drawCorner(3, 0, this.shapeW, 0, this.shapeW - sizes[3]);
    path2.closePath();
    this.shapeGroup.append("path").attr("id", "shape").attr("d", path2.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let text;
    text = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
    this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px");
    this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2));
    text = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
    text = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW));
    text.attr(
      "dy",
      text.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove();
    this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((h) => h.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (h) => h.valid === false).classed("partial", (h) => !h.isThroughShape(this.shape)).attr("cx", (h) => this.xScale(h.x)).attr("cy", (h) => {
      const drawYPosition = h.getYDrawPosition(this.shape, this.currentSide);
      const scaledYposition = this.yScale(drawYPosition);
      return scaledYposition;
    }).attr("r", (h) => this.measurementScale(h.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const allHingeHoles = this.shape.machining.getAllHingeHoles(this.shape);
    const visibleHingeHoles = allHingeHoles.filter((h) => {
      const show = h.shouldShow(this.shape, this.currentSide);
      return show;
    });
    this.hingeHoleGroup.selectAll("g").data(visibleHingeHoles).join("circle").attr("class", "hole").classed("invalid", (h) => h.valid === false).classed("partial", (h) => !h.isThroughShape(this.shape)).attr("cx", (h) => this.xScale(h.x)).attr("cy", (h) => this.yScale(h.getYDrawPosition(this.shape, this.currentSide))).attr("r", (h) => this.measurementScale(h.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const banding2 = this.shape.banding;
    const offset2 = -1;
    const bandingData = [];
    for (const side of mainSides) {
      if (!banding2[side]) continue;
      switch (side) {
        case "x1":
          bandingData.push({
            x1: this.padding - offset2,
            x2: this.padding - offset2,
            y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
            y2: this.getYScale()(
              this.shapeW - (this.shape.machining.corners[3].size ?? 0)
            )
          });
          break;
        case "x2":
          bandingData.push({
            x1: this.w - this.padding + offset2,
            x2: this.w - this.padding + offset2,
            y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
            y2: this.getYScale()(
              this.shapeW - (this.shape.machining.corners[2].size ?? 0)
            )
          });
          break;
        case "y1":
          bandingData.push({
            x1: this.padding + this.getCornerBandingSize(0),
            x2: this.w - this.padding - this.getCornerBandingSize(1),
            y1: this.getYScale()(0) + (this.currentSide === 0 ? offset2 : 1),
            y2: this.getYScale()(0) + (this.currentSide === 0 ? offset2 : 1)
          });
          break;
        case "y2":
          bandingData.push({
            x1: this.padding + this.getCornerBandingSize(3),
            x2: this.w - this.padding - this.getCornerBandingSize(2),
            y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : offset2),
            y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : offset2)
          });
          break;
      }
    }
    this.bandingGroup.selectAll("g").data(bandingData).join("line").attr("class", "banding").attr("x1", (d) => d.x1).attr("x2", (d) => d.x2).attr("y1", (d) => d.y1).attr("y2", (d) => d.y2).attr("stroke-width", this.bandingStrokeWidth);
    const path2 = d3.path();
    this.shape.machining.corners.forEach((corner, i) => {
      if (!corner.type) return;
      let start, middle, end;
      switch (i) {
        case 0:
          if (!valueSet(banding2.a) || banding2.a === false) return;
          start = {
            x: this.xScale(0) - offset2,
            y: this.getYScale()(convertNumberFormat({ v: corner.size ?? 0, o: this }))
          };
          middle = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          };
          end = {
            x: this.xScale(convertNumberFormat({ v: corner.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? offset2 : 1)
          };
          break;
        case 1:
          if (!valueSet(banding2.b) || banding2.b === false) return;
          start = {
            x: this.xScale(this.shapeL - convertNumberFormat({ v: corner.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? offset2 : 1)
          };
          middle = {
            x: this.xScale(this.shapeL) - offset2,
            y: this.getYScale()(0)
          };
          end = {
            x: this.xScale(this.shapeL) + offset2,
            y: this.getYScale()(convertNumberFormat({ v: corner.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!valueSet(banding2.c) || banding2.c === false) return;
          start = {
            x: this.xScale(this.shapeL) + offset2,
            y: this.getYScale()(this.shapeW - convertNumberFormat({ v: corner.size ?? 0, o: this }))
          };
          middle = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          };
          end = {
            x: this.xScale(this.shapeL - convertNumberFormat({ v: corner.size ?? 0, o: this })) - offset2,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? offset2 : 1)
          };
          break;
        case 3:
          if (!valueSet(banding2.d) || banding2.d === false) return;
          start = {
            x: this.xScale(convertNumberFormat({ v: corner.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? offset2 : 1)
          };
          middle = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          };
          end = {
            x: this.xScale(0) - offset2,
            y: this.getYScale()(this.shapeW - convertNumberFormat({ v: corner.size ?? 0, o: this })) + offset2
          };
          break;
        default:
          return;
      }
      path2.moveTo(start.x, start.y);
      if (corner.type === "radius") {
        path2.arcTo(
          middle.x,
          middle.y,
          end.x,
          end.y,
          this.measurementScale(corner.size ?? 0)
        );
        switch (i) {
          case 0:
          case 2:
            path2.lineTo(end.x + offset2, end.y);
            break;
          case 1:
          case 3:
            path2.lineTo(end.x, end.y - (this.currentSide === 0 ? offset2 : -1));
            break;
        }
      } else if (corner.type === "bevel") {
        path2.lineTo(end.x, end.y);
      }
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][i]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", path2.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    if (this.svgCanvas) this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0;
    this.yAxis.call(
      d3.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    );
    this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px");
    this.createShape();
    this.createHoles();
    this.createHingeHoles();
    this.createLegend();
    this.createBanding();
  }
  getCornerBandingSize(index) {
    if (!this.shape.machining.corners[index].type) return 0;
    return this.measurementScale(this.shape.machining.corners[index].size ?? 0);
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent) {
      this.vueComponent.suppressResizeObserver = true;
    }
    this.HTMLElementWidth = this.HTMLElement.offsetWidth;
    if (this.HTMLElementWidth === 0) return;
    this.reset();
    let aspectRatio = this.shape.getShortSide() / this.shape.getLongSide();
    this.w = this.HTMLElementWidth;
    if (this.w - this.padding * 2 < 0) return;
    let availableHeight = window.innerHeight - this.padding * 2 - 20;
    if (availableHeight > 600) availableHeight = 600;
    this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]);
    if (aspectRatio > 0.3) {
      this.h = this.xScale(this.shape.getShortSide()) + this.padding;
    } else {
      aspectRatio = 0.3;
      this.h = this.w * aspectRatio;
    }
    if (this.h > availableHeight) {
      this.h = availableHeight;
      this.w = this.h / aspectRatio;
      this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]);
    }
    this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]);
    this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]);
    this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]);
    this.HTMLElement.style.height = this.h + "px";
    this.create();
  }
}
function getOptions(path2) {
  var _a;
  if (!(path2 == null ? void 0 : path2[0])) return null;
  if ("optionsStore" in this && typeof ((_a = this == null ? void 0 : this.optionsStore) == null ? void 0 : _a[path2[0]]) !== "undefined")
    return get(this.optionsStore, path2);
  else if (typeof (this == null ? void 0 : this[path2[0]]) !== "undefined") return get(this, path2);
}
const _hoisted_1$3 = { id: "machining" };
const _hoisted_2$2 = {
  key: 0,
  class: "debug"
};
const _hoisted_3$2 = { class: "inputs" };
const _hoisted_4$2 = {
  key: 0,
  class: "shape-name"
};
const _hoisted_5$1 = { class: "shape-dimensions" };
const _hoisted_6$1 = {
  key: 1,
  class: "sides-wrapper"
};
const _hoisted_7 = { class: "menu" };
const _hoisted_8 = { class: "button-wrapper" };
const _hoisted_9 = { class: "row table-heading" };
const _hoisted_10 = {
  key: 0,
  class: "cell id"
};
const _hoisted_11 = {
  key: 0,
  class: "cell"
};
const _hoisted_12 = { class: "id" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "remove" };
const _hoisted_15 = { key: 5 };
const showDevInfo$1 = false;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Machining",
  props: /* @__PURE__ */ mergeModels({
    env: { default: "production" },
    translate: { type: Boolean, default: false },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: true },
      holes: {
        enabled: true,
        defaultDiameter: 10,
        diameters: [],
        minDiameter: 0,
        maxDiameter: 100,
        enableDepth: true,
        depths: [],
        defaultDepth: 0,
        minDepth: 0,
        maxDepth: 100
      },
      hingeHoles: {
        enabled: true,
        minimumHoleDistance: 0,
        defaultDistanceFromEdge: 22,
        defaultOuterSpacing: 10,
        defaultHingeLength: 50
      },
      shelfHoles: {
        enabled: false,
        diameters: [],
        depths: []
      },
      corners: {
        enabled: true,
        minValue: 0,
        types: ["bevel", "radius"]
      },
      banding: {
        enabled: false,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: false
      }
    }) }
  }, {
    "shape": {
      required: true
    },
    "shapeModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:shape", "close"], ["update:shape"]),
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    const ObjectViewer2 = defineAsyncComponent(() => Promise.resolve().then(() => ObjectViewer$1));
    const props = __props;
    const emit = __emit;
    const hasMachining$1 = computed(() => hasMachining(shape.value));
    const units = computed(() => getOptions.call({ options: props.options }, ["units"]));
    const columns = computed(() => {
      var _a2;
      if (!((_a2 = currentFieldKeys.value) == null ? void 0 : _a2.length)) return 0;
      if (currentType.value === "banding") return 1;
      let number = Object.values(currentFields.value).filter((f) => f.enabled).length;
      number += 2;
      return number;
    });
    const columnsStyle = computed(() => {
      if (!currentFieldKeys.value.length) return;
      if (currentType.value === "banding") return;
      const widthValues = {
        id: "34px",
        del: "30px"
      };
      const widths = [];
      currentFieldKeys.value.forEach((key) => {
        const field = currentFields.value[key];
        if (field.enabled) widths.push(field.w ?? "1fr");
      });
      widths.unshift(widthValues.id);
      widths.push(widthValues.del);
      return widths.join(" ");
    });
    const currentFields = computed(() => {
      if (!currentType.value || currentType.value === "banding") return null;
      return fieldDefinitions[currentType.value];
    });
    const currentFieldKeys = computed(() => {
      if (!currentType.value || currentType.value === "banding") return [];
      return Object.keys(fieldDefinitions[currentType.value]).filter((f) => fieldDefinitions[currentType.value][f].enabled);
    });
    const currentShapeFields = computed(() => {
      if (!currentType.value) return [];
      return getCurrentShapeFields();
    });
    const availableBandingSides = computed(() => {
      var _a2, _b2, _c2, _d2;
      const corners = ((_d2 = (_c2 = (_b2 = (_a2 = shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.corners) == null ? void 0 : _c2.map((corner) => {
        var _a3;
        return ((_a3 = corner == null ? void 0 : corner.isPresent) == null ? void 0 : _a3.call(corner)) ? corner.getCorner() : null;
      })) == null ? void 0 : _d2.filter((c) => c)) ?? [];
      return [...mainSides, ...corners];
    });
    const suppressWatchers = (on = true) => {
      if (on) {
        disableWatchers.value = on;
      } else {
        nextTick(() => disableWatchers.value = false);
      }
    };
    const deleteAll = () => {
      deleteHoles();
      deleteHingeHoles();
      deleteCorners();
      deleteBanding();
    };
    const updateField = (field, key, value) => {
      nextTick(() => {
        field[key] = value;
      });
    };
    const getIndex = (index) => {
      if (currentType.value === "corners") {
        switch (index) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return index;
        }
      }
      return index + 1;
    };
    const shouldShowId = () => currentType.value !== "banding";
    const getSelectOptions = (values, type = null) => {
      if (!(values == null ? void 0 : values.length)) return [];
      let nullOptionKey = "None";
      if (type === "depth") nullOptionKey = "Through";
      const options = [{ label: nullOptionKey, value: null }];
      values.forEach((value) => {
        const label = value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
        options.push({ label, value });
      });
      return options;
    };
    const getCurrentShapeFields = () => {
      if (!currentType.value) return [];
      if (currentType.value === "banding") return [];
      const shapeFields = shape.value.machining[currentType.value];
      return Array.isArray(shapeFields) ? shapeFields : [shapeFields];
    };
    let vis = null;
    const initVis = () => {
      if (!shape.value) return;
      vis = new Vis({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: shape.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      });
      vis.init();
      visInit.value = true;
      setTimeout(() => {
        vis.updateSize();
      }, 100);
    };
    const flip2 = () => {
      currentFace.value = currentFace.value === 0 ? 1 : 0;
      vis.flip();
    };
    const create = () => {
      switch (currentType.value) {
        case "holes":
          createHole();
          break;
        case "hingeHoles":
          createHingeHoles();
          break;
      }
    };
    const createHole = () => {
      shape.value.machining.createHole(
        convertNumberFormat({ v: shape.value.getLongSide() }) / 2,
        convertNumberFormat({ v: shape.value.getShortSide() }) / 2,
        props.options.holes.defaultDiameter ?? 1,
        props.options.holes.defaultDepth ?? 0,
        currentFace.value
      );
      vis.createHoles();
    };
    const createHingeHoles = () => {
      shape.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: props.options.holes.defaultDiameter ?? 0,
        depth: props.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: currentFace.value,
        distanceFromEdge: props.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: props.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: props.options.hingeHoles.minimumHoleDistance,
        hingeLength: props.options.hingeHoles.defaultHingeLength
      });
      vis.createHingeHoles();
    };
    const deleteHoles = () => {
      shape.value.machining.holes.length = 0;
    };
    const deleteHingeHoles = () => {
      shape.value.machining.hingeHoles.length = 0;
    };
    const deleteCorners = () => {
      shape.value.machining.corners.forEach((c) => {
        c.size = null;
        c.type = null;
      });
      shape.value.banding.a = false;
      shape.value.banding.b = false;
      shape.value.banding.c = false;
      shape.value.banding.d = false;
    };
    const deleteBanding = () => {
      shape.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    };
    const remove = (itemIndex) => {
      switch (currentType.value) {
        case "holes":
          return shape.value.machining.holes.splice(itemIndex, 1);
        case "hingeHoles":
          return shape.value.machining.hingeHoles.splice(itemIndex, 1);
        case "corners":
          shape.value.machining.corners[itemIndex].size = null;
          shape.value.machining.corners[itemIndex].type = null;
          return;
      }
    };
    const removeAll = () => {
      switch (currentType.value) {
        case "holes":
          return deleteHoles();
        case "hingeHoles":
          return deleteHingeHoles();
        case "corners":
          return deleteCorners();
      }
    };
    const validateBanding = () => {
      var _a2;
      validationIssues.value = [];
      if (!props.options.banding.enabled) return;
      suppressWatchers();
      for (const key in shape.value.banding) {
        const active = shape.value.banding[key];
        if (active) {
          if (props.options.banding.enableTypes && ((_a2 = props.options.banding.types) == null ? void 0 : _a2.length)) {
            if (!shape.value.banding[key]) {
              validationIssues.value.push({
                index: key,
                message: "Please select a type"
              });
            }
          }
        } else {
          shape.value.banding[key] = "";
        }
      }
      suppressWatchers(false);
    };
    const getValidationIssues = (index) => {
      const issues = validationIssues.value.filter((i) => i.index === index);
      return issues.length ? issues.map((i) => i.message) : [];
    };
    const getValidationIssueFields = (index) => {
      const issues = validationIssues.value.filter((i) => i.index === index && (i == null ? void 0 : i.fields));
      const fields = issues.flatMap((m) => m.fields);
      return issues.length ? fields : [];
    };
    const isInvalid = (index, key) => {
      const fields = getValidationIssueFields(index);
      if (!(fields == null ? void 0 : fields.length)) return false;
      return fields.includes(key);
    };
    const close = () => {
      emit("close");
    };
    const isFieldDisabled = (fieldDefinition) => {
      if (!fieldDefinition) return false;
      if (typeof fieldDefinition.disabled === "function") {
        return fieldDefinition.disabled;
      }
      return false;
    };
    const setExtrasOption$1 = (shape2, extrasKey, option, key, value) => {
      setExtrasOption(shape2, extrasKey, option, key, value, props.findExtrasPrice);
    };
    const setAllExtrasOptions$1 = (shape2, extraType, option, value) => {
      setAllExtrasOptions(
        shape2,
        extraType,
        option,
        value,
        [],
        props.findExtrasPrice
      );
    };
    const shape = useModel(__props, "shape");
    if (!((_a = shape.value) == null ? void 0 : _a.machining)) {
      throw new Error("Machining component requires a shape with machining initialized");
    }
    const visWrapperResizeObserver = ref(null);
    const visWrapperResizeTimer = ref(null);
    const loaded = ref(false);
    const visInit = ref(false);
    const disableWatchers = ref(false);
    const suppressResizeObserver = ref(false);
    const currentFace = ref(0);
    const currentType = ref(null);
    const visWrapperWidth = ref(0);
    const validationIssues = ref([]);
    const fieldDefinitions = reactive({
      holes: {
        x: {
          enabled: true,
          type: "unitDependent",
          label: "X position",
          required: true
        },
        y: {
          enabled: true,
          type: "unitDependent",
          label: "Y position",
          required: true
        },
        diameter: {
          enabled: true,
          type: ((_b = props.options.holes.diameters) == null ? void 0 : _b.length) ? "select" : "unitDependent",
          label: "Diameter",
          output: ((_c = props.options.holes.diameters) == null ? void 0 : _c.length) ? "float" : void 0,
          options: ((_d = props.options.holes.diameters) == null ? void 0 : _d.length) ? getSelectOptions(props.options.holes.diameters) : void 0,
          required: true
        },
        depth: {
          enabled: props.options.holes.enableDepth && typeof shape.value.t !== "undefined" && convertNumberFormat({ v: shape.value.t }) > 0,
          //[]
          required: false,
          type: ((_e = props.options.holes.depths) == null ? void 0 : _e.length) ? "select" : "unitDependent",
          output: ((_f = props.options.holes.depths) == null ? void 0 : _f.length) ? "float" : void 0,
          options: ((_g = props.options.holes.depths) == null ? void 0 : _g.length) ? getSelectOptions(props.options.holes.depths) : void 0
        },
        face: {
          required: true,
          enabled: props.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        }
      },
      hingeHoles: {
        position: {
          enabled: true,
          required: true,
          type: "unitDependent",
          min: 0
        },
        hingeLength: {
          enabled: true,
          required: true,
          type: "unitDependent",
          label: "Hinge length",
          min: 0
        },
        outerSpacing: {
          enabled: true,
          required: true,
          type: "unitDependent",
          label: "Outer spacing",
          min: 0
        },
        distanceFromEdge: {
          enabled: true,
          required: true,
          type: "unitDependent",
          label: "Distance from edge",
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: props.options.holes.enableDepth && typeof shape.value.t !== "undefined" && convertNumberFormat({ v: shape.value.t }) > 0,
          required: false,
          type: ((_h = props.options.holes.depths) == null ? void 0 : _h.length) ? "select" : "unitDependent",
          output: ((_i = props.options.holes.depths) == null ? void 0 : _i.length) ? "float" : void 0,
          options: ((_j = props.options.holes.depths) == null ? void 0 : _j.length) ? getSelectOptions(props.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: true,
          required: true,
          type: ((_k = props.options.holes.diameters) == null ? void 0 : _k.length) ? "select" : "unitDependent",
          label: "Diameter",
          output: ((_l = props.options.holes.diameters) == null ? void 0 : _l.length) ? "float" : void 0,
          options: ((_m = props.options.holes.diameters) == null ? void 0 : _m.length) ? getSelectOptions(props.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: true,
          required: true,
          type: "integer",
          label: "Num holes",
          min: 2
        },
        face: {
          enabled: props.options.faces.enabled,
          type: "select",
          required: true,
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        },
        edge: {
          enabled: true,
          required: true,
          type: "select",
          output: "string",
          options: [
            {
              label: "W1",
              value: "x1"
            },
            {
              label: "W2",
              value: "x2"
            },
            {
              label: "L1",
              value: "y1"
            },
            {
              label: "L2",
              value: "y2"
            }
          ]
        }
      },
      shelfHoles: {
        x: {
          enabled: true,
          required: true,
          type: "unitDependent"
        },
        y: {
          enabled: true,
          required: true,
          type: "unitDependent"
        },
        depth: {
          required: false,
          enabled: true,
          type: "unitDependent"
        }
      },
      corners: {
        type: {
          enabled: true,
          required: true,
          label: "Type",
          type: "select",
          output: "string",
          options: getSelectOptions(props.options.corners.types)
        },
        size: {
          enabled: true,
          required: true,
          label: "Size",
          type: "unitDependent",
          min: () => typeof props.options.corners.minValue !== "undefined" ? convertNumberFormat({ v: props.options.corners.minValue, o: props.options }) : 0,
          max: () => typeof props.options.corners.maxValue !== "undefined" ? convertNumberFormat({ v: props.options.corners.maxValue, o: props.options }) : convertNumberFormat({ v: shape.value.getShortSide(), o: props.options }) / 2
        }
      }
    });
    const extraValidation = reactive({
      holes: {
        diameter: {
          min: props.options.holes.minDiameter,
          max: props.options.holes.maxDiameter
        },
        depth: {
          min: props.options.holes.minDepth,
          max: props.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: props.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: props.options.corners.minValue,
          max: props.options.corners.maxValue
        }
      }
    });
    const checkShape = () => {
      var _a2;
      if (!((_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) || !loaded.value || disableWatchers.value) return false;
      return true;
    };
    watch(() => {
      var _a2;
      return (_a2 = shape.value) == null ? void 0 : _a2.listId;
    }, () => {
      if (!checkShape()) return;
      initVis();
    });
    watch(() => {
      var _a2;
      return (_a2 = shape.value) == null ? void 0 : _a2.id;
    }, () => {
      if (!checkShape()) return;
      initVis();
    });
    watch(currentType, (type) => {
      if (!checkShape()) return;
      if (type === "banding") {
        suppressWatchers();
        validateBanding();
        suppressWatchers(false);
        return;
      }
      if (!type) {
        validationIssues.value = [];
        return;
      }
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        type,
        extraValidation == null ? void 0 : extraValidation[type]
      );
      if (type === "hingeHoles") {
        shape.value.machining.hingeHoles.forEach((hole, index) => {
          extrasValidation(hole, extraValidation == null ? void 0 : extraValidation.holes, validationIssues.value, index);
        });
      }
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.holes;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "holes",
        extraValidation == null ? void 0 : extraValidation.holes
      );
      vis.createHoles();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.hingeHoles;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      shape.value.machining.updateHingeHoles(shape.value);
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "hingeHoles",
        extraValidation == null ? void 0 : extraValidation.hingeHoles
      );
      shape.value.machining.hingeHoles.forEach((hole, index) => {
        extrasValidation(hole, extraValidation == null ? void 0 : extraValidation.holes, validationIssues.value, index);
      });
      vis.createHingeHoles();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.machining) == null ? void 0 : _b2.corners;
    }, () => {
      if (!checkShape()) return;
      suppressWatchers();
      validationIssues.value = shape.value.machining.validate(
        shape.value,
        "corners",
        extraValidation == null ? void 0 : extraValidation.corners
      );
      shape.value.machining.validate(shape.value, "holes");
      shape.value.machining.validate(shape.value, "hingeHoles");
      vis.createShape();
      vis.createHoles();
      vis.createHingeHoles();
      for (const corner of shape.value.machining.corners) {
        if (!corner.isPresent()) {
          removeSingleExtra(shape.value, "banding", corner.getCorner(), true);
        }
      }
      vis.createBanding();
      suppressWatchers(false);
    }, { deep: true, immediate: true });
    watch(() => {
      var _a2;
      return (_a2 = shape == null ? void 0 : shape.value) == null ? void 0 : _a2.banding;
    }, () => {
      if (!checkShape()) return;
      validateBanding();
      vis.createBanding();
    }, { deep: true, immediate: true });
    onMounted(() => {
      var _a2;
      (_a2 = document.getElementById("machining")) == null ? void 0 : _a2.requestFullscreen();
      if (!shape.value || !shape.value.l || !shape.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      nextTick(() => initVis());
      const visWrapper = document.querySelector("#smartcut-app #machining .diagram");
      if (!visWrapperResizeObserver.value) {
        visWrapperResizeObserver.value = new ResizeObserver((entries) => {
          clearTimeout(visWrapperResizeTimer.value ?? void 0);
          if (!visInit.value) return;
          visWrapperResizeTimer.value = window.setTimeout(() => {
            if (suppressResizeObserver.value) {
              suppressResizeObserver.value = false;
              return;
            }
            const newWidth = entries[0].contentRect.width;
            if (newWidth !== visWrapperWidth.value) {
              visWrapperWidth.value = entries[0].contentRect.width;
              if (visWrapperWidth.value) vis.updateSize();
            }
          }, 10);
        });
        visWrapperResizeObserver.value.observe(visWrapper);
      }
      loaded.value = true;
    });
    return (_ctx, _cache) => {
      var _a2, _b2, _c2, _d2, _e2;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        _ctx.env === "development" && showDevInfo$1 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(unref(ObjectViewer2), {
            data: [shape.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("button", {
              type: "button",
              class: "close",
              onClick: close
            }, [
              createVNode(_component_font_awesome_icon, { icon: ["fass", "xmark"] })
            ]),
            ((_a2 = shape.value) == null ? void 0 : _a2.name) ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(shape.value.name), 1)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5$1, toDisplayString((_b2 = shape.value) == null ? void 0 : _b2.l) + " x " + toDisplayString((_c2 = shape.value) == null ? void 0 : _c2.w) + " " + toDisplayString(((_d2 = shape.value) == null ? void 0 : _d2.t) ? "x " + ((_e2 = shape.value) == null ? void 0 : _e2.t) : null), 1),
            _ctx.options.faces.enabled ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
              createBaseVNode("div", {
                ref: "sides",
                class: normalizeClass(["sides", { flipped: currentFace.value === 1 }]),
                onClick: flip2
              }, _cache[4] || (_cache[4] = [
                createBaseVNode("div", { class: "side-a" }, " A ", -1),
                createBaseVNode("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : createCommentVNode("", true),
            hasMachining$1.value ? (openBlock(), createElementBlock("button", {
              key: 2,
              onClick: deleteAll
            }, " Delete all machining ")) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_7, [
              _ctx.options.holes.enabled ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({ selected: currentType.value === "holes" }),
                onClick: _cache[0] || (_cache[0] = ($event) => currentType.value = "holes")
              }, " Holes ", 2)) : createCommentVNode("", true),
              _ctx.options.hingeHoles.enabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass({ selected: currentType.value === "hingeHoles" }),
                onClick: _cache[1] || (_cache[1] = ($event) => currentType.value = "hingeHoles")
              }, " Hinge holes ", 2)) : createCommentVNode("", true),
              _ctx.options.corners.enabled ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass({ selected: currentType.value === "corners" }),
                onClick: _cache[2] || (_cache[2] = ($event) => currentType.value = "corners")
              }, " Corners ", 2)) : createCommentVNode("", true),
              _ctx.options.banding.enabled ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass({ selected: currentType.value === "banding" }),
                onClick: _cache[3] || (_cache[3] = ($event) => currentType.value = "banding")
              }, " Banding ", 2)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_8, [
              currentType.value === "holes" || currentType.value === "hingeHoles" ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                onClick: create
              }, " Create ")) : createCommentVNode("", true),
              currentType.value && currentType.value !== "banding" ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                onClick: removeAll
              }, " Delete all ")) : createCommentVNode("", true)
            ]),
            currentType.value === "banding" && shape.value ? (openBlock(), createBlock(_sfc_main$d, {
              key: 3,
              shape: shape.value,
              env: _ctx.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": availableBandingSides.value,
              labels: _ctx.options.banding.labels,
              "all-options": _ctx.options.banding.options,
              pricing: _ctx.options.banding.pricing,
              "user-friendly-field-map": unref(userFriendlyFieldMap),
              "part-columns": 1,
              translate: _ctx.translate,
              "orientation-model": 0,
              "get-price": _ctx.getExtrasPrice,
              "format-price": _ctx.formatPrice,
              "get-available-pricing-options": _ctx.getAvailablePricingOptions,
              onSet: setExtrasOption$1,
              onUpdateAll: setAllExtrasOptions$1
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : createCommentVNode("", true),
            currentType.value !== "banding" && currentShapeFields.value.length ? (openBlock(), createElementBlock("div", {
              key: 4,
              class: normalizeClass(["grid-table", currentType.value]),
              style: normalizeStyle({ "grid-template-columns": columnsStyle.value })
            }, [
              createBaseVNode("div", _hoisted_9, [
                shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(currentFields.value, (value, key, index) => {
                  return withDirectives((openBlock(), createElementBlock("div", {
                    key: index,
                    class: "cell"
                  }, toDisplayString(value.label ?? key), 1)), [
                    [vShow, value.enabled]
                  ]);
                }), 128)),
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "cell del" }, null, -1))
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(currentShapeFields.value, (shapeField, shapeFieldIndex) => {
                return openBlock(), createElementBlock("div", {
                  key: shapeFieldIndex,
                  class: "row"
                }, [
                  shouldShowId() ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, toDisplayString(getIndex(shapeFieldIndex)), 1)
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(currentFieldKeys.value, (key, fieldIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: fieldIndex,
                      class: "cell"
                    }, [
                      currentFields.value[key].type !== "select" && currentFields.value[key].type !== "checkbox" ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 0,
                        id: key + "-" + fieldIndex,
                        warning: isInvalid(shapeFieldIndex, key),
                        type: currentFields.value[key].output ?? "unitDependent",
                        "enable-label": false,
                        placeholder: currentFields.value[key].label ?? key,
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        units: units.value,
                        output: currentFields.value[key].output,
                        "onUpdate:value": (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : currentFields.value[key].type === "checkbox" ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 1,
                        id: key + "-" + fieldIndex,
                        type: "checkbox",
                        warning: isInvalid(shapeFieldIndex, key),
                        "enable-label": false,
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        output: currentFields.value[key].output,
                        "onUpdate:value": (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : currentFields.value[key].type === "select" ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 2,
                        id: key + "-" + fieldIndex,
                        type: "select",
                        "enable-label": false,
                        warning: isInvalid(shapeFieldIndex, key),
                        disabled: isFieldDisabled(currentFields.value[key]),
                        value: shapeField[key],
                        options: currentFields.value[key].options,
                        output: currentFields.value[key].output,
                        "onUpdate:value": (value) => updateField(shapeField, key, value)
                      }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : createCommentVNode("", true)
                    ]);
                  }), 128)),
                  createBaseVNode("div", {
                    class: "cell",
                    onClick: ($event) => remove(shapeFieldIndex)
                  }, [
                    createBaseVNode("div", _hoisted_14, [
                      createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                    ])
                  ], 8, _hoisted_13),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getValidationIssues(shapeFieldIndex), (message, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "group validation",
                      style: normalizeStyle({ "grid-column-end": "span " + columns.value })
                    }, toDisplayString(message), 5);
                  }), 128))
                ]);
              }), 128))
            ], 6)) : currentType.value !== "banding" ? (openBlock(), createElementBlock("div", _hoisted_15, " Please select from the menu above ")) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            id: "machining-diagram",
            class: normalizeClass(["diagram", { flipped: currentFace.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
});
const Machining2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: false
    },
    maxFiles: {
      type: Number,
      default: 1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: markRaw([])
    };
  },
  mounted() {
    this.events.forEach((eventName) => {
      this.$el.addEventListener(eventName, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((eventName) => {
      this.$el.removeEventListener(eventName, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    },
    async onDrop(e) {
      const files = [...e.dataTransfer.files];
      if (this.maxFiles && files.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      if (this.requiredType) {
        if (!files.every((file) => file.type === this.requiredType)) {
          alert("We did not detect a valid file type - this might be safe to ignore");
        }
      }
      this.files.length = 0;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let processedFile;
        try {
          processedFile = await this.readFileAsync(file);
        } catch (e2) {
          console.error(e2);
          alert(`Error reading file ${i + 1}`);
          return;
        }
        const response = {
          data: processedFile,
          name: file.name
        };
        this.files.push(response);
        const percent = i / files.length * 100;
        this.loadingProgress = percent;
      }
      this.$emit("drop", structuredClone(this.files));
      this.files.length = 0;
    },
    eventHandler(e) {
      this.dropClass = (e == null ? void 0 : e.type) ?? null;
      e.preventDefault();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: "drop",
    class: normalizeClass({ thinking: $props.thinking, [$data.dropClass]: true }),
    onDrop: _cache[0] || (_cache[0] = withModifiers((...args) => $options.onDrop && $options.onDrop(...args), ["prevent"]))
  }, [
    createBaseVNode("div", null, toDisplayString($props.thinking ? "Loading, please wait..." : $props.label), 1)
  ], 34);
}
const Drop = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _hoisted_1$2 = { id: "import-file" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: Object,
      default: () => ({})
    },
    finishOptions: {
      type: Object,
      default: () => ({})
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t: t2 } = useTranslation(["main", "errors"]);
    const items = ref([]);
    const userRows = ref([]);
    const userHeaders = ref([]);
    const mappedHeaders = ref([]);
    const columnMap = ref({});
    const duplicateIndexes = ref([]);
    const showDataMismatch = ref(false);
    const bandingChoiceCombinations = ref(null);
    const finishChoiceCombinations = ref(null);
    const partFields = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ];
    const itemValidation = computed(() => {
      const validation2 = {};
      items.value.forEach((p, i) => {
        validation2[i] = {};
        for (const [key, value] of Object.entries(p)) {
          if (!partFields.includes(key)) continue;
          const result = validate(key, value);
          if (result === true || result === false) {
            validation2[i][key] = result;
          }
        }
      });
      return validation2;
    });
    const customFieldLabels = computed(() => {
      return props.customFields.map((field) => field.label);
    });
    const setupChoiceCombinations = (type, options) => {
      if (options) {
        const keys = Object.keys(options);
        const combinations = [[]];
        keys.forEach((key) => {
          const values = options[key];
          const newCombinations = [];
          combinations.forEach((combination) => {
            values.forEach((value) => newCombinations.push([...combination, value]));
          });
          combinations.splice(0, combinations.length, ...newCombinations);
        });
        const validCombinations = /* @__PURE__ */ new Set();
        combinations.forEach((combination) => validCombinations.add(combination.join("|").toLowerCase()));
        if (type === "banding") {
          bandingChoiceCombinations.value = validCombinations;
        } else {
          finishChoiceCombinations.value = validCombinations;
        }
      }
    };
    const validate = (key, value) => {
      if (value === "???") return true;
      function dimensionValidation(v) {
        if (!v) return true;
        v = v.trim().toLowerCase();
        return v === "l" || v === "w";
      }
      const validation2 = {
        banding: (v) => validateChoices(v, bandingChoiceCombinations.value, "banding"),
        finish: (v) => validateChoices(v, finishChoiceCombinations.value, "finish"),
        orientationLock: dimensionValidation
      };
      return key in validation2 ? validation2[key](value) : null;
    };
    const validateChoices = (value, choiceCombinations, type) => {
      value = stripSpacesAroundCommas(value);
      if (!value) return true;
      const individualChoices = value.split(",");
      const isValid = individualChoices.every((val) => !val || choiceCombinations.has(val.toLowerCase()));
      if (!isValid) {
        const invalid = individualChoices.filter((val) => !choiceCombinations.has(val.toLowerCase()));
        console.log(`Valid ${type} choices...`);
        console.table(Array.from(choiceCombinations));
        console.log(`The following ${type} choices are invalid`, invalid);
      }
      return isValid;
    };
    const parseItemValue = (key, value) => {
      const parsing = {
        bandingOptions: (v) => parseChoiceOptions(v, props.bandingOptions, props.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (v) => parseChoiceOptions(v, props.finishOptions, props.finishLabels, ["a", "b"])
      };
      return key in parsing ? parsing[key](value) : null;
    };
    const parseChoiceOptions = (value, options, labels, positions) => {
      value = stripSpacesAroundCommas(value);
      if (!value) {
        return positions.reduce((acc, pos) => ({ ...acc, [pos]: {} }), {});
      }
      const parsed = value.split(",").map((b) => b.toLowerCase());
      const result = {};
      positions.forEach((pos, index) => {
        result[pos] = {};
        Object.keys(options).forEach((choiceKey, choiceIndex) => {
          var _a;
          result[pos][labels[choiceIndex]] = ((_a = parsed[index]) == null ? void 0 : _a.split("|")[choiceIndex]) || "";
        });
      });
      return result;
    };
    const convertPartDataToInputData = () => {
      return items.value.map((item, itemIndex) => ({
        l: props.numberFormat === "decimal" ? localeParseFloat(item.l) : item.l,
        w: props.numberFormat === "decimal" ? localeParseFloat(item.w) : item.w,
        t: props.numberFormat === "decimal" ? localeParseFloat(item.t) : item.t,
        q: item.q,
        orientationLock: item.orientationLock,
        name: item.name,
        material: item.material,
        bandingOptions: itemValidation.value[itemIndex].banding ? parseItemValue("bandingOptions", item.banding) : null,
        finishOptions: itemValidation.value[itemIndex].finish ? parseItemValue("finishOptions", item.finish) : null,
        numberFormat: props.numberFormat,
        customData: transformCustomData(item)
      }));
    };
    const parse = (files) => {
      var _a;
      const file = (_a = files == null ? void 0 : files[0]) == null ? void 0 : _a.data;
      if (!file) return;
      Papa.parse(file, {
        header: false,
        dynamicTyping: false,
        worker: true,
        complete: (results) => process2(results),
        error: () => emit("error")
      });
    };
    const process2 = (results) => {
      userRows.value = results.data.filter((row) => row.some((cell) => cell));
      userHeaders.value = userRows.value[0];
      columnMap.value = {};
      for (let i = userHeaders.value.length; i--; ) {
        const header = userHeaders.value[i];
        const predictedType = predictHeadingType(header);
        if (!predictedType) {
          columnMap.value[i] = null;
          if (customFieldLabels.value.includes(header)) {
            columnMap.value[i] = "customData." + props.customFields.find((field) => field.label === header).id;
          }
        } else {
          columnMap.value[i] = predictedType;
        }
      }
      processColumnMap();
      userRows.value.shift();
      populateColumnData();
      importParts();
    };
    const predictHeadingType = (header) => {
      const strings = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", t2("l"), t2("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", t2("w"), t2("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", t2("t"), t2("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", t2("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", t2("quantity"), t2("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", t2("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", t2("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", t2("banding")],
        finish: ["finish", "paint"]
      };
      const matches = Object.entries(strings).reduce(
        (matches2, [key, values]) => {
          if (values.some((v) => header && header.toLowerCase() === v)) {
            matches2.push(key);
          }
          return matches2;
        },
        []
      );
      return matches.length > 1 ? null : matches[0];
    };
    const processColumnMap = () => {
      showDataMismatch.value = false;
      mappedHeaders.value = Object.values(columnMap.value).map((heading) => {
        if (!heading || heading === "N") {
          return null;
        }
        if (!partFields.includes(heading)) {
          showDataMismatch.value = true;
          return null;
        }
        return heading;
      });
      const duplicateHeadings = mappedHeaders.value.filter((heading, index) => mappedHeaders.value.indexOf(heading) !== index);
      duplicateIndexes.value = duplicateHeadings.map((heading) => mappedHeaders.value.reduce(
        (indexes, currentHeading, currentIndex) => {
          if (!currentHeading) return indexes;
          if (currentHeading === heading) {
            indexes.push(currentIndex);
          }
          return indexes;
        },
        []
      ));
    };
    const stripSpacesAroundCommas = (val) => {
      if (!val) return val;
      return val.replace(/\s*,\s*/g, ",");
    };
    const populateColumnData = () => {
      const mappedData = userRows.value.map((row) => {
        const rowData = {};
        userHeaders.value.forEach((h, i) => {
          if (duplicateIndexes.value.flat().includes(i)) {
            return rowData[columnMap.value[i]] = "???";
          }
          rowData[columnMap.value[i]] = row[i];
        });
        return rowData;
      });
      items.value = mappedData;
    };
    const transformCustomData = (item) => {
      let customData2 = {};
      for (let key in item) {
        if (key.startsWith("customData.")) {
          let newKey = key.slice("customData.".length);
          customData2[newKey] = item[key];
        }
      }
      return customData2;
    };
    const importParts = () => {
      const inputData = convertPartDataToInputData();
      if (!(inputData == null ? void 0 : inputData.length)) return;
      emit("import", inputData);
    };
    onMounted(() => {
      setupChoiceCombinations("banding", props.bandingOptions);
      setupChoiceCombinations("finish", props.finishOptions);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(Drop, {
          label: unref(t2)("Drop CSV file here"),
          "required-type": "text/csv",
          onDrop: parse
        }, null, 8, ["label"])
      ]);
    };
  }
});
const ImportCSV = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
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
  resolveFormulas(graph, panel, inputs2, existingPanels = {}) {
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
          resolvedDeps.set(dep, inputs2[inputKey]);
        } else {
          resolvedDeps.set(dep, resolveNode(dep));
        }
      }
      const result = this.evaluateFormulaWithDeps(node.formula, resolvedDeps, inputs2);
      resolved.set(nodeId, result);
      inProgress.delete(nodeId);
      return result;
    };
    for (const nodeId of graph.nodes.keys()) {
      resolveNode(nodeId);
    }
    return Object.fromEntries(resolved);
  }
  evaluateFormulaWithDeps(formula, resolvedDeps, inputs2, currentPanelValues) {
    if (!this.isFormula(formula)) return formula;
    let evaluableFormula = this.stripFormulaPrefix(formula.toString());
    evaluableFormula = evaluableFormula.replace(
      /inputs\.(\w+)/g,
      (_, key) => {
        var _a;
        return ((_a = inputs2[key]) == null ? void 0 : _a.toString()) || "0";
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
    return this.evaluate(this.parse(evaluableFormula), inputs2);
  }
  calculatePanels(inputs2) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.panels)) return {};
    const results = {};
    for (const [panelKey, panel] of Object.entries(this.spec.panels)) {
      const graph = this.buildFormulaGraph(panelKey, panel);
      const resolvedFormulas = this.resolveFormulas(graph, panel, inputs2, results);
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
        orientationLock: panel.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(panel.orientationLock, /* @__PURE__ */ new Map(), inputs2, panelValues) : void 0,
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
  calculateHardware(inputs2) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.hardware)) {
      return {};
    }
    return Object.entries(this.spec.hardware).reduce((acc, [key, hw]) => {
      const quantity = this.evaluateValue(hw.q, inputs2);
      acc[key] = {
        name: hw.name,
        q: Math.ceil(quantity),
        totalCost: Math.ceil(quantity) * hw.cost
      };
      return acc;
    }, {});
  }
  calculateAll(inputs2) {
    this.validateInputs(inputs2);
    const panelResults = this.calculatePanels(inputs2);
    const hardwareResults = this.calculateHardware(inputs2);
    return {
      inputs: inputs2,
      panels: panelResults,
      hardware: hardwareResults
    };
  }
  validateInputs(inputs2) {
    var _a;
    if (!((_a = this.spec) == null ? void 0 : _a.inputs)) throw new FormulaError("No input specifications defined", "NO_INPUTS");
    for (const [key, input] of Object.entries(this.spec.inputs)) {
      const value = inputs2[key];
      if (value === void 0) {
        throw new FormulaError(`Missing required input: ${key}`, "MISSING_INPUT");
      }
      if (value < input.min || value > input.max) {
        throw new FormulaError(`Input ${key} value ${value} out of range [min: ${input.min}, max: ${input.max}]`, "INPUT_OUT_OF_RANGE");
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
    let fieldIndex = 0;
    for (const field of fields) {
      const inputKey = inputKeys[fieldIndex];
      const input = this.spec.inputs[inputKey];
      if (field.value === null || field.value === void 0) {
        throw new FormulaError(`Missing value for field ${fieldIndex}`, "MISSING_FIELD_VALUE");
      }
      if (field.value < input.min || field.value > input.max) {
        throw new FormulaError(`Field ${fieldIndex} value ${field.value} out of range [min: ${input.min}, max: ${input.max}]`, "FIELD_OUT_OF_RANGE");
      }
      fieldIndex++;
    }
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
    const inputs2 = this.fieldsToInputs(fields);
    return this.calculatePanels(inputs2);
  }
  calculateHardwareFromFields(fields) {
    this.validateFields(fields);
    const inputs2 = this.fieldsToInputs(fields);
    return this.calculateHardware(inputs2);
  }
  calculateAllFromFields(fields) {
    this.validateFields(fields);
    const inputs2 = this.fieldsToInputs(fields);
    return this.calculateAll(inputs2);
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
const _hoisted_1$1 = {
  key: 0,
  class: "debug"
};
const _hoisted_2$1 = { id: "formula-pricing" };
const _hoisted_3$1 = {
  key: 1,
  class: "extras"
};
const _hoisted_4$1 = { class: "heading" };
const _hoisted_5 = { id: "hardware-total" };
const _hoisted_6 = { class: "heading panels" };
const showDevInfo = true;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    const ObjectViewer2 = defineAsyncComponent(() => Promise.resolve().then(() => ObjectViewer$1));
    const props = __props;
    const { t: t2 } = useTranslation(["main", "errors"]);
    const emit = __emit;
    const calculatorFn = inject("calculator");
    const calculator = computed(() => calculatorFn());
    const env = ref("development");
    let formulaCalculator = null;
    const specification = ref(null);
    const fieldsArray = ref([]);
    const loaded = ref(false);
    const projectName = ref("");
    const panelResult = computed(() => {
      if (!loaded.value) return null;
      if (!fieldsArray.value.length) return null;
      if (fieldsArray.value.every((field) => field.value === null)) return null;
      const result = calculatePanels();
      nextTick(() => emit("panel-result", result));
      return result;
    });
    const hardwareResult = computed(() => {
      if (!calculator.value) return;
      if (!loaded.value) return;
      if (!fieldsArray.value.length) return;
      if (fieldsArray.value.every((field) => field.value === null)) return;
      const result = calculateHardware();
      nextTick(() => emit("hardware-result", result, harwareTotal.value));
      return result;
    });
    const harwareTotal = computed(() => {
      if (!hardwareResult.value) return;
      return Object.values(hardwareResult.value).reduce((acc, item) => acc + item.totalCost, 0);
    });
    watch(panelResult, (val) => {
      var _a, _b, _c;
      if (!loaded.value) return;
      if (!val) return;
      if (!calculator.value) return;
      if (!((_a = calculator.value) == null ? void 0 : _a.inputShapes)) return;
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
          material: ((_b = shapeDefinition.material) == null ? void 0 : _b.toUpperCase()) || ((_c = existingShape == null ? void 0 : existingShape.material) == null ? void 0 : _c.toUpperCase()),
          bandingOptions: shapeDefinition.bandingOptions || {},
          finishOptions: shapeDefinition.finishOptions || {},
          orientationLock: shapeDefinition.orientationLock || null,
          notes: projectName.value,
          readonly: true
        };
        const shape = existingShape || calculator.value.createInputShape(shapeData);
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
        calculator.value.inputShapes.length = 0;
        console.error(error);
        return null;
      }
    };
    const calculateHardware = () => {
      try {
        const result = formulaCalculator.calculateHardwareFromFields(fieldsArray.value);
        return result;
      } catch (error) {
        console.error(error);
        return null;
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
      var _a, _b;
      return openBlock(), createElementBlock(Fragment, null, [
        env.value === "development" && showDevInfo ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          _cache[1] || (_cache[1] = createBaseVNode("div", null, "Developer information", -1)),
          createVNode(unref(ObjectViewer2), {
            data: [panelResult.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2$1, [
          ((_a = specification.value) == null ? void 0 : _a.projectName) ? (openBlock(), createBlock(_sfc_main$e, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: projectName.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => projectName.value = $event)
          }, null, 8, ["value"])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList((_b = specification.value) == null ? void 0 : _b.inputs, (input, key, index) => {
            var _a2;
            return openBlock(), createBlock(_sfc_main$e, {
              id: "formula-field-" + index,
              key: index,
              type: input.type,
              label: input.label,
              placeholder: input.label,
              min: input.min ?? 0,
              max: input.max ?? null,
              default: input.default ?? 0,
              value: (_a2 = fieldsArray.value[index]) == null ? void 0 : _a2.value,
              "onUpdate:value": ($event) => setFieldValue(index, $event)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          hardwareResult.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(t2)("Hardware")), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(hardwareResult.value, (item, key) => {
              return openBlock(), createElementBlock("div", { key }, toDisplayString(item.name) + " x" + toDisplayString(item.q) + " = " + toDisplayString(__props.formatPrice(item.totalCost)), 1);
            }), 128)),
            createBaseVNode("div", _hoisted_5, toDisplayString(unref(t2)("Hardware total")) + " = " + toDisplayString(__props.formatPrice(harwareTotal.value)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, toDisplayString(unref(t2)("Panels")), 1)
        ])
      ], 64);
    };
  }
});
const FormulaPricing = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { id: "smartcut-notices" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(__props) {
    const props = __props;
    const { notices, dismissNotice } = useNotices();
    const noticeRefs = ref({});
    const transitionName = computed(() => {
      return props.position.includes("right") ? "notice-right" : "notice-left";
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(TransitionGroup, {
            name: transitionName.value,
            "move-class": "notice-move",
            tag: "div",
            class: normalizeClass(["notices-container", props.position])
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notices), (notice) => {
                return openBlock(), createElementBlock("div", {
                  key: notice.id,
                  ref_for: true,
                  ref: (el) => {
                    if (el) noticeRefs.value[notice.id] = el;
                  },
                  class: normalizeClass([
                    "notice",
                    `notice--${notice.type}`
                  ])
                }, [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", {
                      class: "message",
                      onClick: ($event) => notice.action()
                    }, toDisplayString(notice.message), 9, _hoisted_3),
                    createBaseVNode("div", {
                      class: "additional-info",
                      innerHTML: notice.additional
                    }, null, 8, _hoisted_4)
                  ]),
                  !notice.persistent ? (openBlock(), createBlock(_component_font_awesome_icon, {
                    key: 0,
                    icon: ["fass", "trash"],
                    class: "dismiss",
                    onClick: ($event) => unref(dismissNotice)(notice.id)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ], 2);
              }), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
});
const Notices = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  objectValuesPresent as A,
  truncateString as B,
  CheckoutCalculator as C,
  sanitiseString as D,
  mapLegacyInitData as E,
  FormulaPricing as F,
  InputStock as I,
  Notices as N,
  ObjectViewer$1 as O,
  Shape as S,
  _export_sfc as _,
  InputShape as a,
  Stock as b,
  Issue as c,
  sentenceCase as d,
  unplacedShapeTally as e,
  getStockStack as f,
  getStockGrainSummary as g,
  sorting as h,
  Saw as i,
  recreateStockList as j,
  recreateShapeList as k,
  recreateCutList as l,
  mapOrientation as m,
  recreateSegmentList as n,
  recreateOffcuts as o,
  convertNumberFormat as p,
  capitalise as q,
  recreateUserGroups as r,
  stockMatch$1 as s,
  totalQuantity as t,
  updateInputNumberFormat as u,
  setI18nInstance as v,
  mainSides as w,
  faces as x,
  getNestedProperty$1 as y,
  checkObjectHasPropery as z
};
//# sourceMappingURL=components-5Ywb82Gq.js.map
