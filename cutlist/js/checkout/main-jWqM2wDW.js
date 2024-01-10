var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  return value2;
};
function makeMap(str, expectsLowerCase) {
  const set3 = new Set(str.split(","));
  return expectsLowerCase ? (val) => set3.has(val.toLowerCase()) : (val) => set3.has(val);
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove$1 = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$7 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$7.call(val, key);
const isArray$2 = Array.isArray;
const isMap = (val) => toTypeString$1(val) === "[object Map]";
const isSet = (val) => toTypeString$1(val) === "[object Set]";
const isDate$1 = (val) => toTypeString$1(val) === "[object Date]";
const isFunction$2 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isSymbol$1 = (val) => typeof val === "symbol";
const isObject$5 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return (isObject$5(val) || isFunction$2(val)) && isFunction$2(val.then) && isFunction$2(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString$1 = (value2) => objectToString$2.call(value2);
const toRawType = (value2) => {
  return toTypeString$1(value2).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString$1(val) === "[object Object]";
const isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize$1 = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize$1(str)}` : ``;
  return s;
});
const hasChanged = (value2, oldValue) => !Object.is(value2, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key, value2) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value2
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value2) {
  if (isArray$2(value2)) {
    const res = {};
    for (let i2 = 0; i2 < value2.length; i2++) {
      const item = value2[i2];
      const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$1(value2) || isObject$5(value2)) {
    return value2;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value2) {
  let res = "";
  if (isString$1(value2)) {
    res = value2;
  } else if (isArray$2(value2)) {
    for (let i2 = 0; i2 < value2.length; i2++) {
      const normalized = normalizeClass(value2[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$5(value2)) {
    for (const name in value2) {
      if (value2[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value2) {
  return !!value2 || value2 === "";
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i2 = 0; equal && i2 < a.length; i2++) {
    equal = looseEqual(a[i2], b[i2]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate$1(a);
  let bValidType = isDate$1(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol$1(a);
  bValidType = isSymbol$1(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray$2(a);
  bValidType = isArray$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$5(a);
  bValidType = isObject$5(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString$1 = (val) => {
  return isString$1(val) ? val : val == null ? "" : isArray$2(val) || isObject$5(val) && (val.toString === objectToString$2 || !isFunction$2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i2) => {
          entries[stringifySymbol(key, i2) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol$1(val)) {
    return stringifySymbol(val);
  } else if (isObject$5(val) && !isArray$2(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i2 = "") => {
  var _a;
  return isSymbol$1(v) ? `Symbol(${(_a = v.description) != null ? _a : i2})` : v;
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i2, l;
      for (i2 = 0, l = this.effects.length; i2 < l; i2++) {
        this.effects[i2].stop();
      }
      for (i2 = 0, l = this.cleanups.length; i2 < l; i2++) {
        this.cleanups[i2]();
      }
      if (this.scopes) {
        for (i2 = 0, l = this.scopes.length; i2 < l; i2++) {
          this.scopes[i2].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 3;
    this._trackId = 0;
    this._runnings = 0;
    this._queryings = 0;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0;
      this._queryings++;
      pauseTracking();
      for (const dep of this.deps) {
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 2) {
            break;
          }
        }
      }
      resetTracking();
      this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 3 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps && effect2.deps.length > effect2._depsLength) {
    for (let i2 = effect2._depsLength; i2 < effect2.deps.length; i2++) {
      cleanupDepEffect(effect2.deps[i2], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    if (!effect2.allowRecurse && effect2._runnings) {
      continue;
    }
    if (effect2._dirtyLevel < dirtyLevel && (!effect2._runnings || dirtyLevel !== 2)) {
      const lastDirtyLevel = effect2._dirtyLevel;
      effect2._dirtyLevel = dirtyLevel;
      if (lastDirtyLevel === 0 && (!effect2._queryings || dirtyLevel !== 2)) {
        effect2.trigger();
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep
    );
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$2(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol$1(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$2(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        3
      );
    }
  }
  resetScheduling();
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$1)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l = this.length; i2 < l; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty$6(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _shallow = false) {
    this._isReadonly = _isReadonly;
    this._shallow = _shallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, shallow = this._shallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray$2(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty$6;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$1(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$5(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(shallow = false) {
    super(false, shallow);
  }
  set(target, key, value2, receiver) {
    let oldValue = target[key];
    if (!this._shallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value2) && !isReadonly(value2)) {
        oldValue = toRaw(oldValue);
        value2 = toRaw(value2);
      }
      if (!isArray$2(target) && isRef(oldValue) && !isRef(value2)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value2;
          return true;
        }
      }
    }
    const hadKey = isArray$2(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value2, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value2);
      } else if (hasChanged(value2, oldValue)) {
        trigger(target, "set", key, value2);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol$1(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray$2(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(shallow = false) {
    super(true, shallow);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
  true
);
const toShallow = (value2) => value2;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value2);
  if (!hadKey) {
    target.add(value2);
    trigger(target, "add", value2, value2);
  }
  return this;
}
function set$1(key, value2) {
  value2 = toRaw(value2);
  const target = toRaw(this);
  const { has: has2, get: get22 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get22.call(target, key);
  target.set(key, value2);
  if (!hadKey) {
    trigger(target, "add", key, value2);
  } else if (hasChanged(value2, oldValue)) {
    trigger(target, "set", key, value2);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get22 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get22 ? get22.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value2, key) => {
      return callback.call(thisArg, wrap(value2), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value: value2, done } = innerIterator.next();
        return done ? { value: value2, done } : {
          value: isPair ? [wrap(value2[0]), wrap(value2[1])] : wrap(value2),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(
      method,
      false,
      false
    );
    readonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      false
    );
    shallowInstrumentations2[method] = createIterableMethod(
      method,
      false,
      true
    );
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn$1(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value2) {
  return value2["__v_skip"] || !Object.isExtensible(value2) ? 0 : targetTypeMap(toRawType(value2));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$5(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value2) {
  if (isReadonly(value2)) {
    return isReactive(value2["__v_raw"]);
  }
  return !!(value2 && value2["__v_isReactive"]);
}
function isReadonly(value2) {
  return !!(value2 && value2["__v_isReadonly"]);
}
function isShallow(value2) {
  return !!(value2 && value2["__v_isShallow"]);
}
function isProxy(value2) {
  return isReactive(value2) || isReadonly(value2);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value2) {
  def(value2, "__v_skip", true);
  return value2;
}
const toReactive = (value2) => isObject$5(value2) ? reactive(value2) : value2;
const toReadonly = (value2) => isObject$5(value2) ? readonly(value2) : value2;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(this, 1)
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (!self2._cacheable || self2.effect.dirty) {
      if (hasChanged(self2._value, self2._value = self2.effect.run())) {
        triggerRefValue(self2, 2);
      }
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$2(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      ref2.dep || (ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ))
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 3, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel
    );
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value2) {
  return createRef(value2, false);
}
function shallowRef(value2) {
  return createRef(value2, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value2, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value2 : toRaw(value2);
    this._value = __v_isShallow ? value2 : toReactive(value2);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 3);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value2, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value2)) {
      oldValue.value = value2;
      return true;
    } else {
      return Reflect.set(target, key, value2, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
const stack = [];
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value2, raw) {
  if (isString$1(value2)) {
    value2 = JSON.stringify(value2);
    return raw ? value2 : [`${key}=${value2}`];
  } else if (typeof value2 === "number" || typeof value2 === "boolean" || value2 == null) {
    return raw ? value2 : [`${key}=${value2}`];
  } else if (isRef(value2)) {
    value2 = formatProp(key, toRaw(value2.value), true);
    return raw ? value2 : [`${key}=Ref<`, value2, `>`];
  } else if (isFunction$2(value2)) {
    return [`${key}=fn${value2.name ? `<${value2.name}>` : ``}`];
  } else {
    value2 = toRaw(value2);
    return raw ? value2 : [`${key}=`, value2];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$2(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/errors/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick$1(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end3 = queue.length;
  while (start < end3) {
    const middle = start + end3 >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end3 = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i2 = queue.indexOf(job);
  if (i2 > flushIndex) {
    queue.splice(i2, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray$2(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i2 = isFlushing ? flushIndex + 1 : 0) {
  for (; i2 < queue.length; i2++) {
    const cb = queue[i2];
    if (cb && cb.pre) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i2, 1);
      i2--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  queue.sort(comparator);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number2, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
    }
    if (number2) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$2(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$1(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$5(comp)) {
      cache2.set(comp, null);
    }
    return null;
  }
  if (isArray$2(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$1(normalized, raw);
  }
  if (isObject$5(comp)) {
    cache2.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev2 = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev2;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render3,
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  let result;
  let fallthroughAttrs;
  const prev2 = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render3.call(
          thisProxy,
          proxyToUse,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false)
        ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          props,
          null
          /* we know it doesn't need it */
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2 = cloneVNode(root2);
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev2);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  if (!el)
    return;
  while (parent) {
    const root2 = parent.subTree;
    if (root2.suspense && root2.suspense.activeBranch === vnode) {
      root2.el = vnode.el;
    }
    if (root2 === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize$1(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize$1(camelize(name))]);
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$2(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once,
  onTrack,
  onTrigger
} = EMPTY_OBJ) {
  if (cb && once) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  const instance = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray$2(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction$2(s)) {
        return callWithErrorHandling(s, instance, 2);
      } else
        ;
    });
  } else if (isFunction$2(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else {
      return NOOP;
    }
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i2) => hasChanged(v, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
  const scope = getCurrentScope();
  const unwatch = () => {
    effect2.stop();
    if (scope) {
      remove$1(scope.effects, effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(
      effect2.run.bind(effect2),
      instance && instance.suspense
    );
  } else {
    effect2.run();
  }
  if (ssrCleanup)
    ssrCleanup.push(unwatch);
  return unwatch;
}
function instanceWatch(source, value2, options) {
  const publicThis = this.proxy;
  const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$2(value2)) {
    cb = value2;
  } else {
    cb = value2.handler;
    options = value2;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path2) {
  const segments = path2.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value2, depth, currentDepth = 0, seen) {
  if (!isObject$5(value2) || value2["__v_skip"]) {
    return value2;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value2;
    }
    currentDepth++;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value2)) {
    return value2;
  }
  seen.add(value2);
  if (isRef(value2)) {
    traverse(value2.value, depth, currentDepth, seen);
  } else if (isArray$2(value2)) {
    for (let i2 = 0; i2 < value2.length; i2++) {
      traverse(value2[i2], depth, currentDepth, seen);
    }
  } else if (isSet(value2) || isMap(value2)) {
    value2.forEach((v) => {
      traverse(v, depth, currentDepth, seen);
    });
  } else if (isPlainObject$1(value2)) {
    for (const key in value2) {
      traverse(value2[key], depth, currentDepth, seen);
    }
  }
  return value2;
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value2, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (dir) {
      if (isFunction$2(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value2);
      }
      bindings.push({
        dir,
        instance,
        value: value2,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction$2(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend$1({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction$2(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded2 = ref(false);
      const error = ref();
      const delayed = ref(!!delay);
      if (delay) {
        setTimeout(() => {
          delayed.value = false;
        }, delay);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded2.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded2.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.effect.dirty = true;
          queueJob(instance.parent.update);
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded2.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref22, props, children: children2, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children2);
  vnode.ref = ref22;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove$1(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks8 = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks8.unshift(wrappedHook);
    } else {
      hooks8.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function renderList(source, renderItem, cache2, index) {
  let ret;
  const cached = cache2 && cache2[index];
  if (isArray$2(source) || isString$1(source)) {
    ret = new Array(source.length);
    for (let i2 = 0, l = source.length; i2 < l; i2++) {
      ret[i2] = renderItem(source[i2], i2, void 0, cached && cached[i2]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i2 = 0; i2 < source; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
    }
  } else if (isObject$5(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i2) => renderItem(item, i2, void 0, cached && cached[i2])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i2 = 0, l = keys.length; i2 < l; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source[key], key, i2, cached && cached[i2]);
      }
    }
  } else {
    ret = [];
  }
  if (cache2) {
    cache2[index] = ret;
  }
  return ret;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend$1(/* @__PURE__ */ Object.create(null), {
    $: (i2) => i2,
    $el: (i2) => i2.vnode.el,
    $data: (i2) => i2.data,
    $props: (i2) => i2.props,
    $attrs: (i2) => i2.attrs,
    $slots: (i2) => i2.slots,
    $refs: (i2) => i2.refs,
    $parent: (i2) => getPublicInstance(i2.parent),
    $root: (i2) => getPublicInstance(i2.root),
    $emit: (i2) => i2.emit,
    $options: (i2) => resolveMergedOptions(i2),
    $forceUpdate: (i2) => i2.f || (i2.f = () => {
      i2.effect.dirty = true;
      queueJob(i2.update);
    }),
    $nextTick: (i2) => i2.n || (i2.n = nextTick$1.bind(i2.proxy)),
    $watch: (i2) => instanceWatch.bind(i2)
  })
);
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value2) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value2;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
      data[key] = value2;
      return true;
    } else if (hasOwn$1(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value2;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn$1(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn$1(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
function normalizePropsOrEmits(props) {
  return isArray$2(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render3,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$2(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$5(data))
      ;
    else {
      instance.data = reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get3 = isFunction$2(opt) ? opt.bind(publicThis, publicThis) : isFunction$2(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set3 = !isFunction$2(opt) && isFunction$2(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get3,
        set: set3
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides7 = isFunction$2(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides7).forEach((key) => {
      provide(key, provides7[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$2(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$2(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render3 && instance.render === NOOP) {
    instance.render = render3;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray$2(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$5(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray$2(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$1(raw)) {
    const handler = ctx[raw];
    if (isFunction$2(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction$2(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$5(raw)) {
    if (isArray$2(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction$2(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$2(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache2,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache2.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$5(base)) {
    cache2.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$1(
      isFunction$2(to) ? to.call(this, this) : to,
      isFunction$2(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$2(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$1(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray$2(to) && isArray$2(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend$1(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend$1(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render3, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$2(rootComponent)) {
      rootComponent = extend$1({}, rootComponent);
    }
    if (rootProps != null && !isObject$5(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction$2(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction$2(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else
          ;
        return app2;
      },
      mixin(mixin2) {
        {
          if (!context.mixins.includes(mixin2)) {
            context.mixins.push(mixin2);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, namespace2) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace2 === true) {
            namespace2 = "svg";
          } else if (namespace2 === false) {
            namespace2 = void 0;
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render3(vnode, rootContainer, namespace2);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render3(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key, value2) {
        context.provides[key] = value2;
        return app2;
      },
      runWithContext(fn) {
        currentApp = app2;
        try {
          return fn();
        } finally {
          currentApp = null;
        }
      }
    };
    return app2;
  };
}
let currentApp = null;
function provide(key, value2) {
  if (!currentInstance)
    ;
  else {
    let provides7 = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides7) {
      provides7 = currentInstance.provides = Object.create(parentProvides);
    }
    provides7[key] = value2;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides7 = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides7 && key in provides7) {
      return provides7[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$2(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else
      ;
  }
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value2 = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value2 !== attrs[key]) {
              attrs[key] = value2;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value2,
              instance,
              false
            );
          }
        } else {
          if (value2 !== attrs[key]) {
            attrs[key] = value2;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn$1(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value2 = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value2;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value2;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value2 !== attrs[key]) {
          attrs[key] = value2;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn$1(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value2, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value2 === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction$2(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value2 = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value2 = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          unsetCurrentInstance();
        }
      } else {
        value2 = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value2 = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value2 === "" || value2 === hyphenate(key))) {
        value2 = true;
      }
    }
  }
  return value2;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$2(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend$1(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$5(comp)) {
      cache2.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray$2(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$2(opt) || isFunction$2(opt) ? { type: opt } : extend$1({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$5(comp)) {
    cache2.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
  return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$2(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type));
  } else if (isFunction$2(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value2) => isArray$2(value2) ? value2.map(normalizeVNode) : [normalizeVNode(value2)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false)
      ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value2 = rawSlots[key];
    if (isFunction$2(value2)) {
      slots[key] = normalizeSlot(key, value2, ctx);
    } else if (value2 != null) {
      const normalized = normalizeSlotValue(value2);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children2) => {
  const normalized = normalizeSlotValue(children2);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children2) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children2._;
    if (type) {
      instance.slots = toRaw(children2);
      def(children2, "_", type);
    } else {
      normalizeObjectSlots(
        children2,
        instance.slots = {}
      );
    }
  } else {
    instance.slots = {};
    if (children2) {
      normalizeVNodeSlots(instance, children2);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children2, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children2._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend$1(slots, children2);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children2.$stable;
      normalizeObjectSlots(children2, slots);
    }
    deletionComparisonTarget = children2;
  } else if (children2) {
    normalizeVNodeSlots(instance, children2);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$2(rawRef)) {
    rawRef.forEach(
      (r, i2) => setRef(
        r,
        oldRawRef && (isArray$2(oldRawRef) ? oldRawRef[i2] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value2 = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref3) {
    if (isString$1(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn$1(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$2(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value2, refs]);
  } else {
    const _isString = isString$1(ref3);
    const _isRef = isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? hasOwn$1(setupState, ref3) ? setupState[ref3] : refs[ref3] : ref3.value;
          if (isUnmount) {
            isArray$2(existing) && remove$1(existing, refValue);
          } else {
            if (!isArray$2(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (hasOwn$1(setupState, ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                ref3.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref3.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value2;
          if (hasOwn$1(setupState, ref3)) {
            setupState[ref3] = value2;
          }
        } else if (_isRef) {
          ref3.value = value2;
          if (rawRef.k)
            refs[rawRef.k] = value2;
        } else
          ;
      };
      if (value2) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis$1();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace2 = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace2);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized,
            internals
          );
        } else
          ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace2) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace2,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace2 = "svg";
    } else if (n2.type === "math") {
      namespace2 = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    } else {
      patchElement(
        n1,
        n2,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace2,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace2),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(
            el,
            key,
            null,
            props[key],
            namespace2,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace2);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children2.length; i2++) {
      const child = children2[i2] = optimized ? cloneIfMounted(children2[i2]) : normalizeVNode(children2[i2]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace2),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace2),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          namespace2
        );
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace2);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace2);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev2 = oldProps[key];
            const next = newProps[key];
            if (next !== prev2 || key === "value") {
              hostPatchProp(
                el,
                key,
                prev2,
                next,
                namespace2,
                n1.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        namespace2
      );
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace2, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace2) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace2,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev2 = oldProps[key];
        if (next !== prev2 && key !== "value") {
          hostPatchProp(
            el,
            key,
            prev2,
            next,
            namespace2,
            vnode.children,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace2);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        n2.children,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace2,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace2, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace2,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.effect.dirty = true;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace2, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !instance.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace2
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              if (!instance.isUnmounted) {
                componentUpdateFn();
              }
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace2
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    const effect2 = instance.effect = new ReactiveEffect(
      componentUpdateFn,
      NOOP,
      () => queueJob(update),
      instance.scope
      // track it in component's effect scope
    );
    const update = instance.update = () => {
      if (effect2.dirty) {
        effect2.run();
      }
    };
    update.id = instance.uid;
    toggleRecurse(instance, true);
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(
        c1[i2],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace2,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace2, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e22 = l2 - 1;
    while (i2 <= e1 && i2 <= e22) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e22) {
      const n1 = c1[e1];
      const n2 = c2[e22] = optimized ? cloneIfMounted(c2[e22]) : normalizeVNode(c2[e22]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace2,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e22--;
    }
    if (i2 > e1) {
      if (i2 <= e22) {
        const nextPos = e22 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e22) {
          patch(
            null,
            c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
          i2++;
        }
      }
    } else if (i2 > e22) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i2 = s2; i2 <= e22; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e22 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e22; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace2,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children: children2, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children2.length; i2++) {
        move(children2[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children: children2,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs
    } = vnode;
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          optimized,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children2, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end3) => {
    let next;
    while (cur !== end3) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end3);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children2, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children2.length; i2++) {
      unmount(children2[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render3 = (vnode, container, namespace2) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace2
      );
    }
    flushPreFlushCbs();
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render3,
    hydrate,
    createApp: createAppAPI(render3, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$2(ch1) && isArray$2(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j, u, v, c;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i2] = j;
        result.push(i2);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i2] = result[u - 1];
        }
        result[u] = i2;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
const isTeleport = (type) => type.__isTeleport;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value2) {
  isBlockTreeEnabled += value2;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children2, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children2,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children2, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children2,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode$1(value2) {
  return value2 ? value2.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString$1(ref3) || isRef(ref3) || isFunction$2(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: children2,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children2);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children2) {
    vnode.shapeFlag |= isString$1(children2) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode$1(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children2) {
      normalizeChildren(cloned, children2);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$1(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$5(style)) {
      if (isProxy(style) && !isArray$2(style)) {
        style = extend$1({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$5(type) ? 4 : isFunction$2(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children2,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend$1({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref3, patchFlag, children: children2 } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray$2(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: children2,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$2(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children2) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children2 == null) {
    children2 = null;
  } else if (isArray$2(children2)) {
    type = 16;
  } else if (typeof children2 === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children2.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children2._;
      if (!slotFlag && !(InternalObjectKey in children2)) {
        children2._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children2._ = 1;
        } else {
          children2._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$2(children2)) {
    children2 = { default: children2, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children2 = String(children2);
    if (shapeFlag & 64) {
      type = 16;
      children2 = [createTextVNode(children2)];
    } else {
      type = 8;
    }
  }
  vnode.children = children2;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$2(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis$1();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1)
        setters.forEach((set3) => set3(v));
      else
        setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  internalSetCurrentInstance(instance);
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children: children2 } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children2);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup: setup2 } = Component;
  if (setup2) {
    const setupContext = instance.setupContext = setup2.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup2,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    resetTracking();
    unsetCurrentInstance();
    if (isPromise$1(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$2(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$5(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$1(
          extend$1(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      unsetCurrentInstance();
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    }
  ));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      get attrs() {
        return getAttrsProxy(instance);
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$2(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value2) {
  return isFunction$2(value2) && "__vccOpts" in value2;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children2) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$5(propsOrChildren) && !isArray$2(propsOrChildren)) {
      if (isVNode$1(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children2 = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode$1(children2)) {
      children2 = [children2];
    }
    return createVNode(type, propsOrChildren, children2);
  }
}
const version = "3.4.5";
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace2, is, props) => {
    const el = namespace2 === "svg" ? doc.createElementNS(svgNS, tag) : namespace2 === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector2) => doc.querySelector(selector2),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace2, start, end3) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end3 || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end3 || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = namespace2 === "svg" ? `<svg>${content}</svg>` : namespace2 === "mathml" ? `<math>${content}</math>` : content;
      const template = templateContainer.content;
      if (namespace2 === "svg" || namespace2 === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const vtcKey = Symbol("_vtc");
function patchClass(el, value2, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value2 = (value2 ? [value2, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value2 == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value2);
  } else {
    el.className = value2;
  }
}
const vShowOldKey = Symbol("_vod");
const vShow = {
  beforeMount(el, { value: value2 }, { transition }) {
    el[vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value2) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value2);
    }
  },
  mounted(el, { value: value2 }, { transition }) {
    if (transition && value2) {
      transition.enter(el);
    }
  },
  updated(el, { value: value2, oldValue }, { transition }) {
    if (!value2 === !oldValue)
      return;
    if (transition) {
      if (value2) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value2);
    }
  },
  beforeUnmount(el, { value: value2 }) {
    setDisplay(el, value2);
  }
};
function setDisplay(el, value2) {
  el.style.display = value2 ? el[vShowOldKey] : "none";
}
const CSS_VAR_TEXT = Symbol("");
function patchStyle(el, prev2, next) {
  const style = el.style;
  const isCssString = isString$1(next);
  if (next && !isCssString) {
    if (prev2 && !isString$1(prev2)) {
      for (const key in prev2) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev2 !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
      }
    } else if (prev2) {
      el.removeAttribute("style");
    }
    if (vShowOldKey in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$2(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes$2 = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize$1(name);
  for (let i2 = 0; i2 < prefixes$2.length; i2++) {
    const prefixed = prefixes$2[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value2, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value2 == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value2);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value2 == null || isBoolean2 && !includeBooleanAttr(value2)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value2);
    }
  }
}
function patchDOMProp(el, key, value2, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value2 == null ? "" : value2;
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    el._value = value2;
    const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
    const newValue = value2 == null ? "" : value2;
    if (oldValue !== newValue) {
      el.value = newValue;
    }
    if (value2 == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value2 === "" || value2 == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value2 = includeBooleanAttr(value2);
    } else if (value2 == null && type === "string") {
      value2 = "";
      needRemove = true;
    } else if (type === "number") {
      value2 = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value2;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key);
}
function addEventListener$1(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener$1(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener$1(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener$1(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p$1 = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p$1.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value2) {
  if (isArray$2(value2)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value2.map((fn) => (e22) => !e22._stopped && fn && fn(e22));
  } else {
    return value2;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace2, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  const isSVG = namespace2 === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(
      el,
      key,
      nextValue,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren
    );
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value2, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction$2(value2)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString$1(value2)) {
    return false;
  }
  return key in el;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray$2(fn) ? (value2) => invokeArrayFns(fn, value2) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = Symbol("_assign");
const vModelText = {
  created(el, { modifiers: { lazy, trim, number: number2 } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number2 || vnode.props && vnode.props.type === "number";
    addEventListener$1(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      let domValue = el.value;
      if (trim) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = looseToNumber(domValue);
      }
      el[assignKey](domValue);
    });
    if (trim) {
      addEventListener$1(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener$1(el, "compositionstart", onCompositionStart);
      addEventListener$1(el, "compositionend", onCompositionEnd);
      addEventListener$1(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value: value2 }) {
    el.value = value2 == null ? "" : value2;
  },
  beforeUpdate(el, { value: value2, modifiers: { lazy, trim, number: number2 } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing)
      return;
    const elValue = number2 || el.type === "number" ? looseToNumber(el.value) : el.value;
    const newValue = value2 == null ? "" : value2;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener$1(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue$1(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray$2(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value: value2, oldValue }, vnode) {
  el._modelValue = value2;
  if (isArray$2(value2)) {
    el.checked = looseIndexOf(value2, vnode.props.value) > -1;
  } else if (isSet(value2)) {
    el.checked = value2.has(vnode.props.value);
  } else if (value2 !== oldValue) {
    el.checked = looseEqual(value2, getCheckboxValue(el, true));
  }
}
const vModelRadio = {
  created(el, { value: value2 }, vnode) {
    el.checked = looseEqual(value2, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener$1(el, "change", () => {
      el[assignKey](getValue$1(el));
    });
  },
  beforeUpdate(el, { value: value2, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value2 !== oldValue) {
      el.checked = looseEqual(value2, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value: value2, modifiers: { number: number2 } }, vnode) {
    const isSetModel = isSet(value2);
    addEventListener$1(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number2 ? looseToNumber(getValue$1(o)) : getValue$1(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value: value2 }) {
    setSelected(el, value2);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value: value2 }) {
    setSelected(el, value2);
  }
};
function setSelected(el, value2) {
  const isMultiple = el.multiple;
  if (isMultiple && !isArray$2(value2) && !isSet(value2)) {
    return;
  }
  for (let i2 = 0, l = el.options.length; i2 < l; i2++) {
    const option = el.options[i2];
    const optionValue = getValue$1(option);
    if (isMultiple) {
      if (isArray$2(value2)) {
        option.selected = looseIndexOf(value2, optionValue) > -1;
      } else {
        option.selected = value2.has(optionValue);
      }
    } else {
      if (looseEqual(getValue$1(option), value2)) {
        if (el.selectedIndex !== i2)
          el.selectedIndex = i2;
        return;
      }
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue$1(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
const rendererOptions = /* @__PURE__ */ extend$1({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app2._component;
    if (!isFunction$2(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString$1(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * shared v9.9.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = typeof window !== "undefined";
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale2, key, source) => friendlyJSONstringify({ l: locale2, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$1 = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign$1 = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty$5.call(obj, key);
}
const isArray$1 = Array.isArray;
const isFunction$1 = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject$4 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$4(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value2) => objectToString$1.call(value2);
const isPlainObject = (val) => {
  if (!isObject$4(val))
    return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto.constructor === Object;
};
const toDisplayString = (val) => {
  return val == null ? "" : isArray$1(val) || isPlainObject(val) && val.toString === objectToString$1 ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
function incrementer(code2) {
  let current = code2;
  return () => ++current;
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const isNotObjectOrIsArray = (val) => !isObject$4(val) || isArray$1(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack2 = [{ src, des }];
  while (stack2.length) {
    const { src: src2, des: des2 } = stack2.pop();
    Object.keys(src2).forEach((key) => {
      if (isNotObjectOrIsArray(src2[key]) || isNotObjectOrIsArray(des2[key])) {
        des2[key] = src2[key];
      } else {
        stack2.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
/*!
  * message-compiler v9.9.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject$3(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const isObject$3 = (val) => val !== null && typeof val === "object";
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
};
const errorMessages = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages: messages2, args } = options;
  const msg = format$1((messages2 || errorMessages)[code2] || "", ...args || []);
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * core-base v9.9.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function initFeatureFlags$1() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path2) {
  const trimmed = path2.trim();
  if (path2.charAt(0) === "0" && isNaN(parseInt(path2))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse$4(path2) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path2[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path2[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache$1 = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path2) {
  return isObject$4(obj) ? obj[path2] : null;
}
function resolveValue(obj, path2) {
  if (!isObject$4(obj)) {
    return null;
  }
  let hit = cache$1.get(path2);
  if (!hit) {
    hit = parse$4(path2);
    if (hit) {
      cache$1.set(path2, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    if (isFunction$1(last)) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber$1(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$1(options.named.count) || isNumber$1(options.named.n)) ? isNumber$1(options.named.count) ? options.named.count : isNumber$1(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale2 = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$4(options.pluralRules) && isString(locale2) && isFunction$1(options.pluralRules[locale2]) ? options.pluralRules[locale2] : pluralDefault;
  const orgPluralRule = isObject$4(options.pluralRules) && isString(locale2) && isFunction$1(options.pluralRules[locale2]) ? pluralDefault : void 0;
  const plural = (messages2) => {
    return messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber$1(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named2 = (key) => _named[key];
  function message(key) {
    const msg = isFunction$1(options.messages) ? options.messages(key) : isObject$4(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize2 = isPlainObject(options.processor) && isFunction$1(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate2 = isPlainObject(options.processor) && isFunction$1(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject$4(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray$1(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named2,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate2,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize2,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign$1({}, _list, _named)
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n2, version2, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: i18n2,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
};
const code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = incrementer(code$2);
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  INVALID_DATE_ARGUMENT: inc$2(),
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(),
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(),
  NOT_SUPPORT_LOCALE_TYPE: inc$2(),
  __EXTEND_POINT__: inc$2()
  // 25
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale2) {
  if (isString(locale2)) {
    return locale2;
  } else {
    if (isFunction$1(locale2)) {
      if (locale2.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale2.constructor.name === "Function") {
        const resolve2 = locale2();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray$1(fallback) ? fallback : isObject$4(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$1(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray$1(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray$1(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean(follow); i2++) {
    const locale2 = block[i2];
    if (isString(locale2)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale2, blocks) {
  let follow;
  const tokens = locale2.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale2 = target.replace(/!/g, "");
      chain.push(locale2);
      if ((isArray$1(blocks) || isPlainObject(blocks)) && blocks[locale2]) {
        follow = blocks[locale2];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.9.0";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject$4(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction$1(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale2 = isString(options.locale) || isFunction$1(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction$1(locale2) ? DEFAULT_LOCALE : locale2;
  const fallbackLocale = isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages2 = isPlainObject(options.messages) ? options.messages : { [_locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
  const modifiers = assign$1({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$1(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$1(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction$1(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$1(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject$4(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject$4(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject$4(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject$4(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale: locale2,
    fallbackLocale,
    messages: messages2,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function handleMissing(context, key, locale2, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale2, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale2, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale2);
}
const isMessageAST = (val) => isObject$4(val) && (val.t === 0 || val.type === 0) && ("b" in val || "body" in val);
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$1(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages: messages2 } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale2 = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale2, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale2,
    messages2[locale2] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign$1({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$1(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject$4(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale2, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages: messages2, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale2);
  let message = {};
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    message = messages2[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    const missingRet = handleMissing(
      context,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      key,
      targetLocale,
      missingWarn,
      type
    );
    if (missingRet !== key) {
      format2 = missingRet;
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber$1(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber$1(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$1(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$1(arg2)) {
    options.list = arg2;
  }
  if (isNumber$1(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign$1(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale2, key, source, warnHtmlMessage, onError) {
  return {
    locale: locale2,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale2, key, source2)
  };
}
function getMessageContextOptions(context, locale2, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale2, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale2, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale: locale2,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$1(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value2, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale2, overrides).format(value2);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign$1({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value2) : formatter.formatToParts(value2);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value2;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value2 = new Date(dateTime);
    try {
      value2.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value2 = arg1;
  } else if (isNumber$1(arg1)) {
    value2 = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value2, options, overrides];
}
function clearDateTimeFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale2}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number$3(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value2, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale2 = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale2
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale2, overrides).format(value2);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign$1({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value2) : formatter.formatToParts(value2);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber$1(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value2 = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value2, options, overrides];
}
function clearNumberFormat(ctx, locale2, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale2}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  initFeatureFlags$1();
}
/*!
  * vue-i18n v9.9.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.9.0";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
const code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = incrementer(code$1);
({
  FALLBACK_TO_ROOT: code$1,
  NOT_SUPPORTED_PRESERVE: inc$1(),
  NOT_SUPPORTED_FORMATTER: inc$1(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  IGNORE_OBJ_FLATTEN: inc$1(),
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1()
  // 17
});
const code = CoreErrorCodes.__EXTEND_POINT__;
const inc = incrementer(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSTALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // directive module errors
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // for enhancement
  __EXTEND_POINT__: inc()
  // 40
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject$4(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$4(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        if (!isObject$4(currentObj[subKeys[i2]])) {
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i2]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject$4(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale2, options) {
  const { messages: messages2, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages2) ? messages2 : isArray$1(__i18n) ? {} : { [locale2]: {} };
  if (isArray$1(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale22, resource } = custom;
        if (locale22) {
          ret[locale22] = ret[locale22] || {};
          deepCopy(resource, ret[locale22]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages2 = isObject$4(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages2 = getLocaleMessages(gl.locale.value, {
      messages: messages2,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages2);
  if (locales.length) {
    locales.forEach((locale2) => {
      gl.mergeLocaleMessage(locale2, messages2[locale2]);
    });
  }
  {
    if (isObject$4(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeDateTimeFormat(locale2, options.datetimeFormats[locale2]);
        });
      }
    }
    if (isObject$4(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale2) => {
          gl.mergeNumberFormat(locale2, options.numberFormats[locale2]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale2, key, type) => {
    return missing(locale2, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref2 = inBrowser ? ref : shallowRef;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref2(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref2(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray$1(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref2(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref2(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref2(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$1(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$1(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$1(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale2 = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages2 = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$1(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if (__INTLIFY_PROD_DEVTOOLS__) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (__INTLIFY_PROD_DEVTOOLS__)
        ;
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber$1(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root2) => Reflect.apply(root2.t, root2, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$4(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d2(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root2) => Reflect.apply(root2.d, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number$3, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root2) => Reflect.apply(root2.n, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize2(values) {
    return values.map((val) => isString(val) || isNumber$1(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate2 = (val) => val;
  const processor = {
    normalize: normalize2,
    interpolate: interpolate2,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root2) => root2[TranslateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray$1(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number$3, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root2) => root2[NumberPartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString(val) || isArray$1(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root2) => root2[DatetimePartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString(val) || isArray$1(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale22) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale22) ? locale22 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
    }, () => [key], "translate exists", (root2) => {
      return Reflect.apply(root2.te, root2, [key, locale22]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages22 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages22 = messageValue;
        break;
      }
    }
    return messages22;
  }
  function tm(key) {
    const messages22 = resolveMessages(key);
    return messages22 != null ? messages22 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale22) {
    return _messages.value[locale22] || {};
  }
  function setLocaleMessage(locale22, message) {
    if (flatJson) {
      const _message = { [locale22]: message };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale22];
    }
    _messages.value[locale22] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale22, message) {
    _messages.value[locale22] = _messages.value[locale22] || {};
    const _message = { [locale22]: message };
    for (const key in _message) {
      if (hasOwn(_message, key)) {
        handleFlatJson(_message[key]);
      }
    }
    message = _message[locale22];
    deepCopy(message, _messages.value[locale22]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale22) {
    return _datetimeFormats.value[locale22] || {};
  }
  function setDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function mergeDateTimeFormat(locale22, format2) {
    _datetimeFormats.value[locale22] = assign$1(_datetimeFormats.value[locale22] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale22, format2);
  }
  function getNumberFormat(locale22) {
    return _numberFormats.value[locale22] || {};
  }
  function setNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  function mergeNumberFormat(locale22, format2) {
    _numberFormats.value[locale22] = assign$1(_numberFormats.value[locale22] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale22, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale: locale2,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages: messages2,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d2;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber$1(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children2 = i18n2[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children2);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray$1(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject$4(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts2 = partFormatter(...[props.value, options, overrides]);
    let children2 = [options.key];
    if (isArray$1(parts2)) {
      children2 = parts2.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts: parts2 }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts2)) {
      children2 = [parts2];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString(props.tag) || isObject$4(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children2);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n2[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({
      useScope: "parent",
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n2[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const _process = (binding) => {
    const { instance, modifiers, value: value2 } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n2, instance.$);
    const parsedValue = parseValue(value2);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (inBrowser && i18n2.global === composer) {
      el.__i18nWatcher = watch(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (inBrowser && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = void 0;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value: value2 }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value2);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value2) {
  if (isString(value2)) {
    return { path: value2 };
  } else if (isPlainObject(value2)) {
    if (!("path" in value2)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value2;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value2) {
  const { path: path2, locale: locale2, args, choice, plural } = value2;
  const options = {};
  const named2 = args || {};
  if (isString(locale2)) {
    options.locale = locale2;
  }
  if (isNumber$1(choice)) {
    options.plural = choice;
  }
  if (isNumber$1(plural)) {
    options.plural = plural;
  }
  return [path2, named2, options];
}
function apply(app2, i18n2, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : "i18n", "I18nT"].forEach((name) => app2.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app2.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app2.component(name, DatetimeFormat));
  }
  {
    app2.directive("t", vTDirective(i18n2));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n2 = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app2, ...options2) {
        app2.__VUE_I18N_SYMBOL__ = symbol;
        app2.provide(app2.__VUE_I18N_SYMBOL__, i18n2);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n2.__composerExtend = opts.__composerExtend;
          i18n2.__vueI18nExtend = opts.__vueI18nExtend;
        }
        let globalReleaseHandler = null;
        if (__globalInjection) {
          globalReleaseHandler = injectGlobalFields(app2, i18n2.global);
        }
        {
          apply(app2, i18n2, ...options2);
        }
        const unmountApp = app2.unmount;
        app2.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n2.dispose();
          unmountApp();
        };
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n2;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n2 = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n2);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n2 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n2) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
    }
    return i18n2;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n2) {
  return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root2 = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root2 === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  {
    return !useComponent ? target.parent : target.vnode.ctx || target.parent;
  }
}
function setupLifeCycle(i18n2, target, composer) {
  {
    onMounted(() => {
    }, target);
    onUnmounted(() => {
      const _composer = composer;
      i18n2.__deleteInstance(target);
      const dispose = _composer[DisposeSymbol];
      if (dispose) {
        dispose();
        delete _composer[DisposeSymbol];
      }
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app2, composer) {
  const i18n2 = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap);
  });
  app2.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app2.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app2.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app2.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  initFeatureFlags();
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const en_US = {
  length: "Length",
  l: "L",
  width: "Width",
  w: "W",
  thickness: "Thickness",
  t: "T",
  name: "Name",
  quantity: "Quantity",
  q: "Q",
  machining: "Machining",
  orientation: "Orientation",
  "add part": "Add part",
  "remove part": "Remove part",
  calculate: "Calculate",
  "full screen": "Full screen",
  b: "B",
  banding: "Banding",
  "delete banding": "Delete banding",
  "delete": "Delete",
  clear: "Clear",
  l1: "L1",
  l2: "L2",
  w1: "W1",
  w2: "W2",
  "Powered by SmartCut": "Powered by SmartCut"
};
const ca_ES = {
  length: "Llarg",
  l: "L",
  width: "Ample",
  w: "A",
  thickness: "Gruix",
  t: "G",
  name: "Nom",
  quantity: "Quantitat",
  q: "Q",
  machining: "Mecanitzat",
  orientation: "Gir",
  "add part": "Afegeix",
  "remove part": "Elimina",
  calculate: "Calcula",
  "full screen": "Pantalla completa",
  b: "Cantell",
  banding: "Banding",
  "delete banding": "Elimina cantell",
  "delete": "Elimina",
  clear: "Neteja",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desenvolupat per SmartCut"
};
const es_ES = {
  length: "Largo",
  l: "L",
  width: "Ancho",
  w: "A",
  thickness: "Grueso",
  t: "G",
  name: "Nombre",
  quantity: "Cantidad",
  q: "C",
  machining: "Mecanizado",
  orientation: "Giro",
  "add part": "Añade",
  "remove part": "Elimina",
  calculate: "Calcula",
  "full screen": "Pantalla completa",
  b: "Canto",
  banding: "Banding",
  "delete banding": "Elimina canto",
  "delete": "Elimina",
  clear: "Borra",
  l1: "L1",
  l2: "L2",
  w1: "A1",
  w2: "A1",
  "Powered by SmartCut": "Desarrollado por SmartCut"
};
const messages = {
  en_US,
  ca_ES,
  es_ES
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString$2 = Object.prototype.toString;
const isObject$2 = (val) => toString$2.call(val) === "[object Object]";
const noop$3 = () => {
};
function createFilterWrapper(filter2, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke2) => {
  return invoke2();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter2,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter2);
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick$1(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop$3;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener3, options2) => {
    el.addEventListener(event, listener3, options2);
    return () => el.removeEventListener(event, listener3, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject$2(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener3) => register(el, event, listener3, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value2 = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value2, rawInit);
      else if (type === "object" && !Array.isArray(value2))
        return { ...rawInit, ...value2 };
      return value2;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick$1(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
const isView$1 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob$1 && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray$1(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob$1 && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray$1).then(callback);
  } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
    return callback(toArray$1(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup$1[chars.charCodeAt(i2)] = i2;
}
const decode$1 = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1[base64.charCodeAt(i2)];
    encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer$1) {
    const decoded = decode$1(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};
const SEPARATOR = String.fromCharCode(30);
const encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
let TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size2) {
  if (chunks[0].length === size2) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size2);
  let j = 0;
  for (let i2 = 0; i2 < size2; i2++) {
    buffer[i2] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
const protocol$1 = 4;
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}
function encode$1(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}
class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}
class Transport extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode$1(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
}
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map$1 = {};
let seed = 0, i = 0, prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now = encode(+/* @__PURE__ */ new Date());
  if (now !== prev)
    return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++)
  map$1[alphabet[i]] = i;
let value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
const hasCORS = value;
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}
function createCookieJar() {
}
function empty$1() {
}
const hasXHR2 = function() {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
class Polling extends Transport {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = createCookieJar();
    }
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
    return new Request(this.uri(), opts);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var _a;
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty$1;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
}
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}
const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        const opts = {};
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!WebSocket;
  }
}
class WT extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    if (typeof WebTransport !== "function") {
      return;
    }
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch((err) => {
      this.onError("webtransport error", err);
    });
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch((err) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this.writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
  }
}
const transports = {
  websocket: WS,
  webtransport: WT,
  polling: Polling
};
const re$1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse$3(str) {
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re$1.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path2) {
  const regx = /\/{2,9}/g, names = path2.replace(regx, "/").split("/");
  if (path2.slice(0, 1) == "/" || path2.length === 0) {
    names.splice(0, 1);
  }
  if (path2.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}
let Socket$1 = class Socket extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts = {}) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse$3(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse$3(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || [
      "polling",
      "websocket",
      "webtransport"
    ];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol$1;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new transports[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket$1.protocol = protocol$1;
function url(uri, path2 = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse$3(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path2;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString$1 = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString$1.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString$1.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l = obj.length; i2 < l; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}
const RESERVED_EVENTS$1 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
const protocol = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer2) {
    this.replacer = replacer2;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
}
function isObject$1(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
class Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i2 = 0;
    const p2 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p2.type] === void 0) {
      throw new Error("unknown packet type " + p2.type);
    }
    if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p2.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if ("," === c)
          break;
        if (i2 === str.length)
          break;
      }
      p2.nsp = str.substring(start, i2);
    } else {
      p2.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if (null == c || Number(c) != c) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p2.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (Decoder.isPayloadValid(p2.type, payload)) {
        p2.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p2;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject$1(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject$1(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}
class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}
const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder,
  Encoder,
  get PacketType() {
    return PacketType;
  },
  protocol
}, Symbol.toStringTag, { value: "Module" }));
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Socket2 extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket)
      ;
    else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve2, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve2(arg2);
        } else {
          return resolve2(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener3 of listeners) {
        listener3.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    }
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener3) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener3);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener3) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener3);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener3) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener3) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener3 === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener3) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener3);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener3) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener3);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener3) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener3) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener3 === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener3 of listeners) {
        listener3.apply(this, packet.data);
      }
    }
  }
}
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min2) {
  this.ms = min2;
};
Backoff.prototype.setMax = function(max2) {
  this.max = max2;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};
class Manager extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket$1(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const onError = (err) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}
const cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path2 = parsed.path;
  const sameNamespace = cache[id] && path2 in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket: Socket2,
  io: lookup,
  connect: lookup
});
const decimalPlaces = 10;
function isNumber(value2) {
  return typeof value2 !== "undefined" && typeof value2 === "number";
}
const maths = {
  greaterThan: (a, b, dp = null) => {
    if (!isNumber(a) || !isNumber(b))
      throw new Error("not a number provided to maths function greaterThan");
    return parseFloat(a.toFixed(dp ? dp : decimalPlaces)) > parseFloat(b.toFixed(dp ? dp : decimalPlaces));
  },
  greaterThanOrEqualTo: (a, b, dp = null) => {
    if (!isNumber(a) || !isNumber(b))
      throw new Error("not a number provided to maths function greaterThanOrEqualTo");
    return parseFloat(a.toFixed(dp ? dp : decimalPlaces)) >= parseFloat(b.toFixed(dp ? dp : decimalPlaces));
  },
  lessThan: (a, b, dp = null) => {
    if (!isNumber(a) || !isNumber(b))
      throw new Error("not a number provided to maths function lessThan");
    return parseFloat(a.toFixed(dp ? dp : decimalPlaces)) < parseFloat(b.toFixed(dp ? dp : decimalPlaces));
  },
  lessThanOrEqualTo: (a, b, dp = null) => {
    if (!isNumber(a) || !isNumber(b))
      throw new Error("not a number provided to maths function lessThanOrEqualTo");
    return parseFloat(a.toFixed(dp ? dp : decimalPlaces)) <= parseFloat(b.toFixed(dp ? dp : decimalPlaces));
  },
  //https://dev.to/alldanielscott/how-to-compare-numbers-correctly-in-javascript-1l4i
  equalTo: (a, b) => {
    if (!isNumber(a) || !isNumber(b))
      throw new Error("not a number provided to maths function equalTo:");
    return Math.abs(a - b) < 1e-10;
  },
  isNumber,
  round(number2) {
    if (!isNumber(number2))
      return false;
    return number2.toFixed(decimalPlaces);
  },
  getRandom(length2) {
    return Math.floor(Math.random() * length2);
  },
  //https://stackoverflow.com/a/37835673/4734460
  getRandomSample(array2, size2) {
    var r, i2 = array2.length, end3 = i2 - size2, temp, swaps = [];
    while (i2-- > end3) {
      r = this.getRandom(i2 + 1);
      temp = array2[r];
      array2[r] = array2[i2];
      array2[i2] = temp;
      swaps.push(i2);
      swaps.push(r);
    }
    var sample = array2.slice(end3);
    while (size2--) {
      i2 = swaps.pop();
      r = swaps.pop();
      temp = array2[i2];
      array2[i2] = array2[r];
      array2[r] = temp;
    }
    return sample;
  }
};
function valueSet(value2) {
  if (value2 === void 0)
    return false;
  if (value2 === null || value2 === "")
    return false;
  if (typeof value2 === "object" && !Object.values(value2).length)
    return false;
  return true;
}
function totalQuantity(items) {
  return items.reduce((total, s) => {
    const q = valueSet(s.q) && typeof s.q === "string" ? parseInt(s.q) : s.q;
    if (!isNaN(q) && q > 0)
      return total + q;
    return total;
  }, 0);
}
function unplacedShapeTally(shapeList) {
  if (!(shapeList == null ? void 0 : shapeList.length))
    return [];
  const unplacedShapes = shapeList.filter((shape) => !shape.added).map((shape) => {
    shape.parentID = shape.getParentID();
    return shape;
  });
  const uniques = {};
  unplacedShapes.forEach((item) => {
    if (!uniques[item.parentID]) {
      uniques[item.parentID] = {};
      uniques[item.parentID].count = 1;
      uniques[item.parentID].id = item.parentID;
      uniques[item.parentID].name = (item == null ? void 0 : item.name) ? item.name : item.id;
      uniques[item.parentID].l = item.l;
      uniques[item.parentID].w = item.w;
      uniques[item.parentID].t = item.t;
      uniques[item.parentID].material = item.material;
      uniques[item.parentID].rot = item.rot;
    } else
      ++uniques[item.parentID].count;
  });
  return Object.values(uniques);
}
function deepClone(obj) {
  const clone = Array.isArray(obj) ? [] : {};
  for (const i2 in obj) {
    if (typeof obj[i2] == "object" && obj[i2] != null) {
      clone[i2] = deepClone(obj[i2]);
    } else {
      clone[i2] = obj[i2];
    }
  }
  return clone;
}
const scoring = {
  /**
   * area
   */
  area(shape, comparisonShapes, stock = null) {
    let score;
    if (comparisonShapes) {
      if (comparisonShapes.length === 0)
        return 1;
      const largestShape = comparisonShapes.reduce((prev2, current) => prev2.getArea() > current.getArea() ? prev2 : current);
      score = shape.getArea() / largestShape.getArea();
    } else if (stock) {
      score = shape.getArea() / stock.getArea();
    }
    if (score > 1)
      return 1;
    if (!score)
      throw new Error("no area score found");
    return score;
  },
  /**
   * detects edges of this shape at the edge of the stock
   */
  edge(shape, container) {
    if (!container)
      throw new Error(`edge - no stock defined for shape ${shape.id}`);
    const results = [
      // 0 left
      shape.x === 0,
      // 1 right
      shape.x + shape.l === container.l,
      // 2 bottom
      shape.y === 0,
      // 3 top
      shape.y + shape.w === container.w
    ];
    const result = results.filter(Boolean).length / 4;
    return result;
  },
  /**
   * award a higher score for being close to the origin of the stock - max of 1
   * [] simplify this and split into two
   */
  compression(shape, container, primaryAxis = "y") {
    const secondaryAxis = primaryAxis === "y" ? "x" : "y";
    const secondaryDimension = secondaryAxis === "y" ? "w" : "l";
    const secondaryDistance = shape[secondaryAxis] - container[secondaryAxis];
    const primaryDistance = (shape[primaryAxis] - container[primaryAxis]) * container[secondaryDimension];
    const secondaryPercent = secondaryDistance / container[secondaryDimension] * (0.1 * container.getAspect());
    const result = 1 - (primaryDistance / container.getArea() + secondaryPercent);
    return result;
  },
  /**
   * award a higher score for being close to the origin of the stock, catering for height - max of 1
   */
  /* compression(
          shape: Shape,
          container: Container,
          primaryAxis: 'x' | 'y' = 'y'
      )
      {
          primaryAxis = primaryAxis === 'y' ? 'x' : 'y';
          //swap direction for grain width
          if ( container.grain === 'w' ) primaryAxis = primaryAxis === 'y' ? 'x' : 'y';
  
          const secondaryAxis = primaryAxis === 'y' ? 'x' : 'y';
          const secondaryDimension = secondaryAxis === 'y' ? 'w' : 'l';
          const primaryDimension = primaryAxis === 'y' ? 'l' : 'w';
  
          const secondaryDistance = shape[secondaryAxis] + shape[secondaryDimension];
          const primaryDistance =
              ( shape[primaryAxis] + shape[primaryDimension] ) *
              container[secondaryDimension];
  
          //0.1 is used to make the secondary percent the unit after the decimal point
          const secondaryPercent =
              ( secondaryDistance / container[secondaryDimension] ) *
              ( 0.1 * container.getAspect() );
          const result =
              1 - ( primaryDistance / container.getArea() + secondaryPercent );
  
          return result;
      }, */
  /**
   * fill scores the shape's fill in a direction
   */
  fill(shape, container, primaryAxis = "y") {
    if (!shape || !container)
      return 0;
    if (container.grain === "w")
      primaryAxis = primaryAxis === "y" ? "x" : "y";
    const primaryDimension = primaryAxis === "y" ? "w" : "l";
    const primaryPercent = (shape[primaryAxis] + shape[primaryDimension]) / container[primaryDimension];
    return primaryPercent;
  },
  /**
   * return the best fill for both container dimensions
   */
  bestFill(shape, container) {
    if (!shape || !container)
      return 0;
    const lengthScore = shape.l / container.l;
    if (container.type === "linear")
      return lengthScore;
    const widthScore = shape.w / container.w;
    return lengthScore > widthScore ? lengthScore : widthScore;
  },
  /**
   * collision with other shape
   */
  collision(thisShape, testShape, container) {
    if (!thisShape || !testShape || !container)
      return false;
    if (thisShape.id === testShape.id)
      throw new Error(`collision comparing to self ${thisShape.id}, ${testShape.id}`);
    const bladeWidth = container.getBladeWidth();
    return (
      // 1 left
      thisShape.x < testShape.x + testShape.l + bladeWidth && // 2 right
      thisShape.x + thisShape.l + bladeWidth > testShape.x && // 3 bottom
      thisShape.y < testShape.y + testShape.w + bladeWidth && // 4 top
      thisShape.y + thisShape.w + bladeWidth > testShape.y
    );
  },
  getAlignment(thisShape, testShape, container) {
    const bladeWidth = container.getBladeWidth();
    return [
      // 0 left to left
      thisShape.x === testShape.x,
      // 1 left to right
      thisShape.x === testShape.x + testShape.l + bladeWidth,
      // 2 bottom to bottom
      thisShape.y === testShape.y,
      // 3 bottom to top
      thisShape.y === testShape.y + testShape.w + bladeWidth,
      // 4 right to left
      thisShape.x + thisShape.l === testShape.x - bladeWidth,
      // 5 right to right
      thisShape.x + thisShape.l === testShape.x + testShape.l,
      // 6 top to bottom
      thisShape.y + thisShape.w === testShape.y - bladeWidth,
      // 7 top to top
      thisShape.y + thisShape.w === testShape.y + testShape.w
    ];
  },
  /**
   * perfect edge alignment
   */
  alignment(thisShape, testShape, container) {
    if (!thisShape || !testShape || !container)
      return [false, false, false, false, false, false, false, false];
    if (thisShape.id === testShape.id)
      throw new Error("alignment comparing to self");
    if (thisShape.isGroup()) {
      thisShape.setShapeCoordinates(false);
      const result = [false, false, false, false, false, false, false, false];
      thisShape.shapes.forEach((s) => {
        const alignment = this.getAlignment(s, testShape, container);
        alignment.forEach((a, i2) => {
          if (a === true)
            result[i2] = true;
        });
      });
      return result;
    }
    return this.getAlignment(thisShape, testShape, container);
  },
  /**
   * detect shape to shape contact
   */
  detectContact(thisRectangle, testRectangle, container) {
    if (!thisRectangle || !testRectangle || !container)
      return [false, false, false, false];
    if (thisRectangle.id === testRectangle.id)
      throw new Error("detectContact comparing to self");
    const bladeWidth = container.getBladeWidth();
    const result = [
      // 0 A left to B right
      thisRectangle.x === testRectangle.x + testRectangle.l + bladeWidth && thisRectangle.y + thisRectangle.w > testRectangle.y && thisRectangle.y < testRectangle.y + testRectangle.w,
      // 1 A right to B left
      thisRectangle.x + thisRectangle.l + bladeWidth === testRectangle.x && thisRectangle.y + thisRectangle.w > testRectangle.y && thisRectangle.y < testRectangle.y + testRectangle.w,
      // 2 A bottom to B top
      thisRectangle.y === testRectangle.y + testRectangle.w + bladeWidth && thisRectangle.x + thisRectangle.l > testRectangle.x && thisRectangle.x < testRectangle.x + testRectangle.l,
      // 3 A top to B bottom
      thisRectangle.y + thisRectangle.w + bladeWidth === testRectangle.y && thisRectangle.x + thisRectangle.l > testRectangle.x && thisRectangle.x < testRectangle.x + testRectangle.l
    ];
    return result;
  },
  /**
   * any side of this shape touching any side of a single test shape
   */
  contact(thisShape, testShape, container, options = {
    perimeter: true,
    perimeterType: "percentageOfPerimeter",
    alignment: true,
    identicalDimensions: true
  }) {
    if (thisShape.id === testShape.id)
      throw new Error("contact comparing to self");
    const result = this.detectContact(thisShape, testShape, container);
    let perimeterResult = null, alignmentResult = null, contactType = null, identicalDimensionsResult = null;
    const neighbours = result.filter(Boolean).length ? 1 : 0;
    if (neighbours > 1)
      throw new Error("number of neighbours should not be greater than one for a single test shape");
    else if (neighbours < 0)
      throw new Error("number of neighbours cannot be less than one");
    if (neighbours) {
      const contactTypes = {
        0: "lr",
        1: "rl",
        2: "bt",
        3: "tb"
      };
      contactType = contactTypes[result.findIndex(Boolean)];
      if (!contactType)
        throw new Error("no contact type found");
      if (options == null ? void 0 : options.perimeter) {
        perimeterResult = this.perimeter(thisShape, testShape, container.getBladeWidth(), contactType, options.perimeterType);
      }
      if (options == null ? void 0 : options.alignment) {
        alignmentResult = this.alignment(thisShape, testShape, container);
      }
      if (options == null ? void 0 : options.identicalDimensions) {
        if ((contactType === "rl" || contactType === "lr") && thisShape.x + thisShape.w === testShape.x + testShape.w) {
          identicalDimensionsResult = 1;
        } else if ((contactType === "tb" || contactType === "bt") && thisShape.l === testShape.l) {
          identicalDimensionsResult = 1;
        }
      }
    }
    return {
      result,
      perimeter: perimeterResult,
      alignment: alignmentResult,
      identicalDimensions: identicalDimensionsResult,
      type: contactType,
      neighbour: testShape,
      neighbours
    };
  },
  /**
   * rewards the percentage of the perimeter being occupied by a neighbouring shape and the blade width
   * assumes contact check has already taken place and adjacent sides known
   */
  perimeter(thisShape, testShape, bladeWidth, contactType, type = "percentageOfPerimeter") {
    if (thisShape.id === testShape.id)
      throw new Error("perimeter comparing to self");
    const perimeter = thisShape.getPerimeter();
    const dimensions = {
      lr: {
        dimension: "w",
        opposite: "y"
      },
      rl: {
        dimension: "w",
        opposite: "y"
      },
      tb: {
        dimension: "l",
        opposite: "x"
      },
      bt: {
        dimension: "l",
        opposite: "x"
      }
    };
    const { dimension, opposite } = dimensions[contactType];
    const overhang = {
      bottom: thisShape[opposite] - testShape[opposite],
      top: testShape[opposite] + testShape[dimension] - (thisShape[opposite] + thisShape[dimension])
    };
    let occupiedSideLength = thisShape[dimension] + Math.min(overhang.top, 0) + Math.min(overhang.bottom, 0);
    if (occupiedSideLength < thisShape[dimension])
      occupiedSideLength += bladeWidth;
    if (type === "percentageOfPerimeter") {
      let percentagePerimeterOccupation = occupiedSideLength / perimeter;
      percentagePerimeterOccupation = Math.min(Math.max(percentagePerimeterOccupation, 0), 1);
      return percentagePerimeterOccupation;
    }
    if (type === "percentageOfSide")
      return occupiedSideLength / thisShape[dimension];
    return 0;
  }
};
function isWithinBoundaries(testShape, within, withinAxis = "x") {
  if (!within)
    return false;
  const dimension = withinAxis === "x" ? "l" : "w";
  if (maths.greaterThanOrEqualTo(testShape[withinAxis], within[withinAxis]) && maths.lessThanOrEqualTo(testShape[withinAxis] + testShape[dimension], within[withinAxis] + within[dimension]))
    return true;
  return false;
}
function isShapePositioned(direction, shape, testShape) {
  if (direction === "above")
    return isShapeAbove(shape, testShape);
  if (direction === "right")
    return isShapeRight(shape, testShape);
  if (direction === "below")
    return isShapeBelow(shape, testShape);
  if (direction === "left")
    return isShapeLeft(shape, testShape);
}
function isShapeAbove(shape, testShape) {
  const above = testShape.y === shape.getTopPosition();
  if (above) {
    return maths.greaterThanOrEqualTo(testShape.getRightPosition(false), shape.x) && maths.lessThanOrEqualTo(testShape.getRightPosition(false), shape.getRightPosition(false));
  }
  return false;
}
function isShapeRight(shape, testShape) {
  const right2 = testShape.x === shape.getRightPosition();
  if (right2) {
    return maths.greaterThanOrEqualTo(testShape.getTopPosition(false), shape.y) && maths.lessThanOrEqualTo(testShape.getTopPosition(false), shape.getTopPosition(false));
  }
  return false;
}
function isShapeLeft(shape, testShape) {
  return isShapeRight(testShape, shape);
}
function isShapeBelow(shape, testShape) {
  return isShapeAbove(testShape, shape);
}
function getStockStack(stockList, stock) {
  if (!stock)
    return 0;
  if ((stock == null ? void 0 : stock.stack) === true) {
    return stockList.filter((stacked) => stacked.stack === stock.id).length + 1;
  }
  return typeof stock.stack !== "undefined" ? stock.stack : 1;
}
function sanitizeString(str) {
  if (!str)
    return null;
  str = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9.,_-]/gim, "");
  return str.trim();
}
function truncateString(str, length2 = 50) {
  if (!str)
    return null;
  str = str.substring(0, length2);
  return str.trim();
}
class Point {
  constructor(x, y) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "a");
    __publicField(this, "b");
    __publicField(this, "fromDirection");
    __publicField(this, "raycast");
    __publicField(this, "collision");
    __publicField(this, "tooClose");
    this.x = x;
    this.y = y;
  }
}
class Line {
  constructor(data) {
    __publicField(this, "x1");
    __publicField(this, "x2");
    __publicField(this, "y1");
    __publicField(this, "y2");
    __publicField(this, "direction");
    __publicField(this, "shapeCollisions");
    this.x1 = data.x1;
    this.x2 = data.x2;
    this.y1 = data.y1;
    this.y2 = data.y2;
    this.direction = getLineDirection(this);
  }
}
function getLineDirection(line) {
  if (typeof line === "undefined")
    return null;
  if (!maths.isNumber(line.x1) || !maths.isNumber(line.x2) || !maths.isNumber(line.y1) || !maths.isNumber(line.y2)) {
    return null;
  }
  if (line.x1 === line.x2 && line.y1 !== line.y2)
    return "w";
  else if (line.y1 === line.y2 && line.x1 !== line.x2)
    return "l";
  else
    return null;
}
function filterDuplicateCoordinates(coords) {
  return coords.filter((c1, i2, a) => a.findIndex((c2) => c1.x === c2.x && c1.y === c2.y) === i2);
}
function removeOutOfBoundsPoints(shape, container, coords) {
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
  const coordsClone = [...coords];
  for (let i2 = coordsClone.length; i2--; ) {
    const coord = coordsClone[i2];
    if (maths.lessThan(coord.x, minX) || maths.lessThan(coord.y, minY) || maths.greaterThan(coord.x, maxX) || maths.greaterThan(coord.y, maxY) || maths.lessThan(coord.x, 0) || maths.lessThan(coord.y, 0))
      coordsClone.splice(i2, 1);
  }
  return coordsClone;
}
function getCutLength(cut) {
  if (cut == null ? void 0 : cut.direction) {
    switch (cut.direction) {
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
    if (data.x2 < data.x1)
      [data.x1, data.x2] = [data.x2, data.x1];
    if (data.y2 < data.y1)
      [data.y1, data.y2] = [data.y2, data.y1];
    super(data);
    __publicField(this, "stock");
    __publicField(this, "stockId");
    __publicField(this, "type", null);
    __publicField(this, "guillotine");
    __publicField(this, "guillotineData");
    __publicField(this, "isTrim");
    __publicField(this, "distances");
    __publicField(this, "beamTrimX1");
    __publicField(this, "beamTrimY1");
    __publicField(this, "remove");
    if (valueSet(data == null ? void 0 : data.stock)) {
      if (((_b = (_a = data.stock) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "Stock")
        this.stock = data.stock;
      else
        this.stock = new Stock(data.stock);
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
    const data = deepClone(this);
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
    if (this.direction === "l") {
      this.x1 = this.x1 < 0 ? 0 : this.x1;
      this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2;
    } else if (this.direction === "w") {
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
    if (result)
      return result;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return maths.greaterThan(this.y1 + this.stock.getBladeWidth() / 2, 0);
      case "left":
        return maths.greaterThan(this.x1 + this.stock.getBladeWidth() / 2, 0);
      case "top":
        return maths.lessThan(this.y1 - this.stock.getBladeWidth() / 2, this.stock.w);
      case "right":
        return maths.lessThan(this.x1 - this.stock.getBladeWidth() / 2, this.stock.l);
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
    const cutLength = this.getLength();
    if (cutLength)
      return cutLength * this.stock.getBladeWidth();
    return 0;
  }
}
/**
 * @license Fraction.js v4.3.7 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
var MAX_CYCLE_LEN = 2e3;
var P = {
  "s": 1,
  "n": 0,
  "d": 1
};
function assign(n, s) {
  if (isNaN(n = parseInt(n, 10))) {
    throw InvalidParameter();
  }
  return n * s;
}
function newFraction(n, d2) {
  if (d2 === 0) {
    throw DivisionByZero();
  }
  var f = Object.create(Fraction.prototype);
  f["s"] = n < 0 ? -1 : 1;
  n = n < 0 ? -n : n;
  var a = gcd(n, d2);
  f["n"] = n / a;
  f["d"] = d2 / a;
  return f;
}
function factorize(num) {
  var factors = {};
  var n = num;
  var i2 = 2;
  var s = 4;
  while (s <= n) {
    while (n % i2 === 0) {
      n /= i2;
      factors[i2] = (factors[i2] || 0) + 1;
    }
    s += 1 + 2 * i2++;
  }
  if (n !== num) {
    if (n > 1)
      factors[n] = (factors[n] || 0) + 1;
  } else {
    factors[num] = (factors[num] || 0) + 1;
  }
  return factors;
}
var parse$2 = function(p1, p2) {
  var n = 0, d2 = 1, s = 1;
  var v = 0, w2 = 0, x = 0, y = 1, z = 1;
  var A = 0, B = 1;
  var C = 1, D = 1;
  var N = 1e7;
  var M;
  if (p1 === void 0 || p1 === null)
    ;
  else if (p2 !== void 0) {
    n = p1;
    d2 = p2;
    s = n * d2;
    if (n % 1 !== 0 || d2 % 1 !== 0) {
      throw NonIntegerParameter();
    }
  } else
    switch (typeof p1) {
      case "object": {
        if ("d" in p1 && "n" in p1) {
          n = p1["n"];
          d2 = p1["d"];
          if ("s" in p1)
            n *= p1["s"];
        } else if (0 in p1) {
          n = p1[0];
          if (1 in p1)
            d2 = p1[1];
        } else {
          throw InvalidParameter();
        }
        s = n * d2;
        break;
      }
      case "number": {
        if (p1 < 0) {
          s = p1;
          p1 = -p1;
        }
        if (p1 % 1 === 0) {
          n = p1;
        } else if (p1 > 0) {
          if (p1 >= 1) {
            z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
            p1 /= z;
          }
          while (B <= N && D <= N) {
            M = (A + C) / (B + D);
            if (p1 === M) {
              if (B + D <= N) {
                n = A + C;
                d2 = B + D;
              } else if (D > B) {
                n = C;
                d2 = D;
              } else {
                n = A;
                d2 = B;
              }
              break;
            } else {
              if (p1 > M) {
                A += C;
                B += D;
              } else {
                C += A;
                D += B;
              }
              if (B > N) {
                n = C;
                d2 = D;
              } else {
                n = A;
                d2 = B;
              }
            }
          }
          n *= z;
        } else if (isNaN(p1) || isNaN(p2)) {
          d2 = n = NaN;
        }
        break;
      }
      case "string": {
        B = p1.match(/\d+|./g);
        if (B === null)
          throw InvalidParameter();
        if (B[A] === "-") {
          s = -1;
          A++;
        } else if (B[A] === "+") {
          A++;
        }
        if (B.length === A + 1) {
          w2 = assign(B[A++], s);
        } else if (B[A + 1] === "." || B[A] === ".") {
          if (B[A] !== ".") {
            v = assign(B[A++], s);
          }
          A++;
          if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
            w2 = assign(B[A], s);
            y = Math.pow(10, B[A].length);
            A++;
          }
          if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
            x = assign(B[A + 1], s);
            z = Math.pow(10, B[A + 1].length) - 1;
            A += 3;
          }
        } else if (B[A + 1] === "/" || B[A + 1] === ":") {
          w2 = assign(B[A], s);
          y = assign(B[A + 2], 1);
          A += 3;
        } else if (B[A + 3] === "/" && B[A + 1] === " ") {
          v = assign(B[A], s);
          w2 = assign(B[A + 2], s);
          y = assign(B[A + 4], 1);
          A += 5;
        }
        if (B.length <= A) {
          d2 = y * z;
          s = /* void */
          n = x + d2 * v + z * w2;
          break;
        }
      }
      default:
        throw InvalidParameter();
    }
  if (d2 === 0) {
    throw DivisionByZero();
  }
  P["s"] = s < 0 ? -1 : 1;
  P["n"] = Math.abs(n);
  P["d"] = Math.abs(d2);
};
function modpow(b, e, m) {
  var r = 1;
  for (; e > 0; b = b * b % m, e >>= 1) {
    if (e & 1) {
      r = r * b % m;
    }
  }
  return r;
}
function cycleLen(n, d2) {
  for (; d2 % 2 === 0; d2 /= 2) {
  }
  for (; d2 % 5 === 0; d2 /= 5) {
  }
  if (d2 === 1)
    return 0;
  var rem = 10 % d2;
  var t = 1;
  for (; rem !== 1; t++) {
    rem = rem * 10 % d2;
    if (t > MAX_CYCLE_LEN)
      return 0;
  }
  return t;
}
function cycleStart(n, d2, len) {
  var rem1 = 1;
  var rem2 = modpow(10, len, d2);
  for (var t = 0; t < 300; t++) {
    if (rem1 === rem2)
      return t;
    rem1 = rem1 * 10 % d2;
    rem2 = rem2 * 10 % d2;
  }
  return 0;
}
function gcd(a, b) {
  if (!a)
    return b;
  if (!b)
    return a;
  while (1) {
    a %= b;
    if (!a)
      return b;
    b %= a;
    if (!b)
      return a;
  }
}
function Fraction(a, b) {
  parse$2(a, b);
  if (this instanceof Fraction) {
    a = gcd(P["d"], P["n"]);
    this["s"] = P["s"];
    this["n"] = P["n"] / a;
    this["d"] = P["d"] / a;
  } else {
    return newFraction(P["s"] * P["n"], P["d"]);
  }
}
var DivisionByZero = function() {
  return new Error("Division by Zero");
};
var InvalidParameter = function() {
  return new Error("Invalid argument");
};
var NonIntegerParameter = function() {
  return new Error("Parameters must be integer");
};
Fraction.prototype = {
  "s": 1,
  "n": 0,
  "d": 1,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  "abs": function() {
    return newFraction(this["n"], this["d"]);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  "neg": function() {
    return newFraction(-this["s"] * this["n"], this["d"]);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  "add": function(a, b) {
    parse$2(a, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  "sub": function(a, b) {
    parse$2(a, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  "mul": function(a, b) {
    parse$2(a, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  "div": function(a, b) {
    parse$2(a, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["d"],
      this["d"] * P["n"]
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  "clone": function() {
    return newFraction(this["s"] * this["n"], this["d"]);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   **/
  "mod": function(a, b) {
    if (isNaN(this["n"]) || isNaN(this["d"])) {
      return new Fraction(NaN);
    }
    if (a === void 0) {
      return newFraction(this["s"] * this["n"] % this["d"], 1);
    }
    parse$2(a, b);
    if (0 === P["n"] && 0 === this["d"]) {
      throw DivisionByZero();
    }
    return newFraction(
      this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
      P["d"] * this["d"]
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  "gcd": function(a, b) {
    parse$2(a, b);
    return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  "lcm": function(a, b) {
    parse$2(a, b);
    if (P["n"] === 0 && this["n"] === 0) {
      return newFraction(0, 1);
    }
    return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  "ceil": function(places) {
    places = Math.pow(10, places || 0);
    if (isNaN(this["n"]) || isNaN(this["d"])) {
      return new Fraction(NaN);
    }
    return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  "floor": function(places) {
    places = Math.pow(10, places || 0);
    if (isNaN(this["n"]) || isNaN(this["d"])) {
      return new Fraction(NaN);
    }
    return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
  },
  /**
   * Rounds a rational number
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  "round": function(places) {
    places = Math.pow(10, places || 0);
    if (isNaN(this["n"]) || isNaN(this["d"])) {
      return new Fraction(NaN);
    }
    return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
  },
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
   **/
  "roundTo": function(a, b) {
    parse$2(a, b);
    return newFraction(this["s"] * Math.round(this["n"] * P["d"] / (this["d"] * P["n"])) * P["n"], P["d"]);
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  "inverse": function() {
    return newFraction(this["s"] * this["d"], this["n"]);
  },
  /**
   * Calculates the fraction to some rational exponent, if possible
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  "pow": function(a, b) {
    parse$2(a, b);
    if (P["d"] === 1) {
      if (P["s"] < 0) {
        return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
      } else {
        return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
      }
    }
    if (this["s"] < 0)
      return null;
    var N = factorize(this["n"]);
    var D = factorize(this["d"]);
    var n = 1;
    var d2 = 1;
    for (var k in N) {
      if (k === "1")
        continue;
      if (k === "0") {
        n = 0;
        break;
      }
      N[k] *= P["n"];
      if (N[k] % P["d"] === 0) {
        N[k] /= P["d"];
      } else
        return null;
      n *= Math.pow(k, N[k]);
    }
    for (var k in D) {
      if (k === "1")
        continue;
      D[k] *= P["n"];
      if (D[k] % P["d"] === 0) {
        D[k] /= P["d"];
      } else
        return null;
      d2 *= Math.pow(k, D[k]);
    }
    if (P["s"] < 0) {
      return newFraction(d2, n);
    }
    return newFraction(n, d2);
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  "equals": function(a, b) {
    parse$2(a, b);
    return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  "compare": function(a, b) {
    parse$2(a, b);
    var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
    return (0 < t) - (t < 0);
  },
  "simplify": function(eps) {
    if (isNaN(this["n"]) || isNaN(this["d"])) {
      return this;
    }
    eps = eps || 1e-3;
    var thisABS = this["abs"]();
    var cont = thisABS["toContinued"]();
    for (var i2 = 1; i2 < cont.length; i2++) {
      var s = newFraction(cont[i2 - 1], 1);
      for (var k = i2 - 2; k >= 0; k--) {
        s = s["inverse"]()["add"](cont[k]);
      }
      if (Math.abs(s["sub"](thisABS).valueOf()) < eps) {
        return s["mul"](this["s"]);
      }
    }
    return this;
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  "divisible": function(a, b) {
    parse$2(a, b);
    return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  "valueOf": function() {
    return this["s"] * this["n"] / this["d"];
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
   **/
  "toFraction": function(excludeWhole) {
    var whole, str = "";
    var n = this["n"];
    var d2 = this["d"];
    if (this["s"] < 0) {
      str += "-";
    }
    if (d2 === 1) {
      str += n;
    } else {
      if (excludeWhole && (whole = Math.floor(n / d2)) > 0) {
        str += whole;
        str += " ";
        n %= d2;
      }
      str += n;
      str += "/";
      str += d2;
    }
    return str;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  "toLatex": function(excludeWhole) {
    var whole, str = "";
    var n = this["n"];
    var d2 = this["d"];
    if (this["s"] < 0) {
      str += "-";
    }
    if (d2 === 1) {
      str += n;
    } else {
      if (excludeWhole && (whole = Math.floor(n / d2)) > 0) {
        str += whole;
        n %= d2;
      }
      str += "\\frac{";
      str += n;
      str += "}{";
      str += d2;
      str += "}";
    }
    return str;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  "toContinued": function() {
    var t;
    var a = this["n"];
    var b = this["d"];
    var res = [];
    if (isNaN(a) || isNaN(b)) {
      return res;
    }
    do {
      res.push(Math.floor(a / b));
      t = a % b;
      a = b;
      b = t;
    } while (a !== 1);
    return res;
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  "toString": function(dec) {
    var N = this["n"];
    var D = this["d"];
    if (isNaN(N) || isNaN(D)) {
      return "NaN";
    }
    dec = dec || 15;
    var cycLen = cycleLen(N, D);
    var cycOff = cycleStart(N, D, cycLen);
    var str = this["s"] < 0 ? "-" : "";
    str += N / D | 0;
    N %= D;
    N *= 10;
    if (N)
      str += ".";
    if (cycLen) {
      for (var i2 = cycOff; i2--; ) {
        str += N / D | 0;
        N %= D;
        N *= 10;
      }
      str += "(";
      for (var i2 = cycLen; i2--; ) {
        str += N / D | 0;
        N %= D;
        N *= 10;
      }
      str += ")";
    } else {
      for (var i2 = dec; N && i2--; ) {
        str += N / D | 0;
        N %= D;
        N *= 10;
      }
    }
    return str;
  }
};
function convertUnit(value2, to = "decimal", decimalPlaces2 = false) {
  if (!valueSet(value2) || !to)
    return null;
  if (to !== "decimal" && to !== "fraction") {
    console.error("incorrect conversion type specified for convertUnit");
    return null;
  }
  try {
    let stringValue = typeof value2 === "string" ? value2.trim() : value2.toString().trim();
    if (stringValue.startsWith("."))
      stringValue = "0" + stringValue;
    stringValue.replace(",", ".");
    const validValues = stringValue.match(/[+-]?\d+(?:[./]?\d+)?/gm);
    let cleanValue;
    let parsed;
    if (validValues)
      cleanValue = validValues.join(" ").replace('"', "");
    if ((cleanValue == null ? void 0 : cleanValue.length) && !(cleanValue == null ? void 0 : cleanValue.includes("/"))) {
      cleanValue = cleanValue.replace(" ", ".");
    }
    if (to === "fraction") {
      const number2 = parseFloat(cleanValue);
      if (Number.isInteger(number2)) {
        parsed = new Fraction(cleanValue);
      } else {
        parsed = new Fraction(number2);
      }
    } else
      parsed = new Fraction(cleanValue);
    const result = 0;
    switch (to) {
      case "fraction":
        return parsed.toFraction(true);
      case "decimal":
        return decimalPlaces2 === false || typeof decimalPlaces2 !== "number" ? parsed.valueOf() : parseFloat(parseFloat(parsed.round(10)).toFixed(decimalPlaces2));
    }
    return result;
  } catch (e) {
    console.error(e);
    return 0;
  }
}
class Hole {
  constructor({ x, y, diameter, depth = 0, side = 0, type = null }) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "diameter");
    __publicField(this, "depth");
    __publicField(this, "side");
    __publicField(this, "valid");
    __publicField(this, "type");
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.depth = depth;
    this.side = side;
    this.type = type;
  }
  getXDrawPosition(shape) {
    let position = 0;
    const x = convertUnit(this.x);
    if (shape.rot) {
      const y = convertUnit(this.y);
      position = shape.l - y + ("x" in shape ? shape.x : 0);
    } else {
      position = x + ("x" in shape ? shape.x : 0);
    }
    return position;
  }
  getYDrawPosition(shape, viewingSide, stock) {
    let position = shape.rot ? convertUnit(this.x) : convertUnit(this.y);
    position += "y" in shape ? shape.y : 0;
    if (viewingSide === 1 && stock)
      position = stock.w - position;
    return position;
  }
  shouldShow(shape, side) {
    if (this.side === side)
      return true;
    if (this.depth === 0)
      return true;
    if (convertUnit(this.depth) >= convertUnit(shape.t))
      return true;
    return false;
  }
  getDistanceToEdge(shape) {
    const holeCenterX = this.x;
    const holeCenterY = this.y;
    const holeRadius = this.diameter / 2;
    const shapeLength = convertUnit(shape.getLongSide());
    const shapeWidth = convertUnit(shape.getShortSide());
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
      const x = isLeft ? holeCenterX : shapeLength - holeCenterX;
      let y = null;
      if (this.side === 0) {
        y = isBottom ? holeCenterY : shapeWidth - holeCenterY;
      } else if (this.side === 1) {
        y = isBottom ? shapeWidth - holeCenterY : holeCenterY;
      }
      const distance = Math.sqrt(x * x + y * y);
      return {
        c,
        distance
      };
    });
    const distanceToNearestEdge = Math.min(...edgeDistances.map((d2) => d2.distance));
    const distanceToNearestCorner = Math.min(...cornerDistances.map((d2) => d2.distance));
    const closestCornerIndex = cornerDistances.findIndex((d2) => d2.distance === distanceToNearestCorner);
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
      let y;
      if (this.side === 0) {
        y = isBottom ? holeCenterY : shapeWidth - holeCenterY;
      } else if (this.side === 1) {
        y = isBottom ? shapeWidth - holeCenterY : holeCenterY;
      }
      const dy = y - cornerCenterY;
      const distanceToCornerCenter = Math.sqrt(dx * dx + dy * dy);
      const distanceToCornerEdge = cornerRadii[closestCornerIndex] - distanceToCornerCenter - holeRadius;
      let inCorrectQuadrant = false;
      if (closestCorner.index === 0) {
        inCorrectQuadrant = holeCenterX <= cornerCenterX && y <= cornerCenterY;
      } else if (closestCorner.index === 1) {
        inCorrectQuadrant = holeCenterX >= cornerCenterX && y <= cornerCenterY;
      } else if (closestCorner.index === 2) {
        inCorrectQuadrant = holeCenterX >= cornerCenterX && y >= cornerCenterY;
      } else if (closestCorner.index === 3) {
        inCorrectQuadrant = holeCenterX <= cornerCenterX && y >= cornerCenterY;
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
  validate(shape, index) {
    const messages2 = [];
    if (!this.x || !this.y || !this.diameter) {
      messages2.push({
        index,
        message: "X, Y & diameter are all required"
      });
    }
    if (convertUnit(this.depth) < 0) {
      messages2.push({
        index,
        message: "Depth cannot be negative"
      });
    }
    if ("t" in shape && convertUnit(shape.t) > 0) {
      if (convertUnit(this.depth) > convertUnit(shape.t)) {
        messages2.push({
          index,
          message: "Depth cannot be greater than part thickness"
        });
      }
    }
    if (!("t" in shape) || !shape.t) {
      if (convertUnit(this.depth) > 0) {
        messages2.push({
          index,
          message: "Part thickness is not defined"
        });
      }
    }
    const distanceToEdge = this.getDistanceToEdge(shape);
    if (distanceToEdge < 0) {
      messages2.push({
        index,
        message: "Outside of part"
      });
    }
    if (!messages2.length)
      this.valid = true;
    else
      this.valid = false;
    return messages2;
  }
}
class HingeHoles {
  constructor({
    position = null,
    //from left or bottom
    edge = "x1",
    side = 0,
    numHoles = null,
    diameter = 0,
    depth = 0,
    distanceFromEdge = 0,
    outerSpacing,
    hingeLength = 0,
    minimumHoleDistance = 0,
    positionLimit = 0
  }, shape) {
    __publicField(this, "position");
    __publicField(this, "edge");
    __publicField(this, "side");
    __publicField(this, "numHoles");
    __publicField(this, "holes", []);
    __publicField(this, "diameter");
    __publicField(this, "depth");
    __publicField(this, "distanceFromEdge");
    __publicField(this, "outerSpacing");
    __publicField(this, "hingeLength");
    __publicField(this, "minimumHoleDistance");
    __publicField(this, "positionLimit");
    __publicField(this, "valid");
    this.position = position;
    this.edge = edge;
    this.side = side;
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
  getHoleSpacing() {
    const totalSpace = convertUnit(this.hingeLength) - convertUnit(this.outerSpacing) * 2;
    const numSpaces = this.numHoles - 1;
    return totalSpace / numSpaces;
  }
  getHoleXPosition(shape, index) {
    let position = 0;
    const spacing = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        position = this.distanceFromEdge;
        break;
      case "x2":
        position = shape.getLongSide() - convertUnit(this.distanceFromEdge);
        break;
      case "y1":
      case "y2":
        position = convertUnit(this.position) + convertUnit(this.outerSpacing) + spacing * index;
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
        position = convertUnit(this.position) + convertUnit(this.outerSpacing) + spacing * index;
        break;
      case "y1":
        position = convertUnit(this.distanceFromEdge);
        break;
      case "y2":
        position = shape.getShortSide() - convertUnit(this.distanceFromEdge);
        break;
    }
    return position;
  }
  createHoles(shape) {
    this.holes = [];
    for (let i2 = 0; i2 < this.numHoles; i2++) {
      const hole = new Hole({
        x: this.getHoleXPosition(shape, i2),
        y: this.getHoleYPosition(shape, i2),
        diameter: this.diameter,
        depth: this.depth,
        side: this.side,
        type: "hinge"
      });
      this.holes.push(hole);
    }
    return this.holes;
  }
  validate(shape, index) {
    const messages2 = [];
    this.holes.forEach((h2, i2) => {
      const holeIssues = h2.validate(shape, i2).map((m) => {
        m.index = index;
        m.message = `Hole ${i2 + 1}: ${m.message}`;
        return m;
      });
      messages2.push(...holeIssues);
    });
    if (!messages2.length)
      this.valid = true;
    else
      this.valid = false;
    return messages2;
  }
}
class Corner {
  constructor({ type = "radius", size: size2, index }) {
    __publicField(this, "type");
    __publicField(this, "size");
    __publicField(this, "index");
    __publicField(this, "valid");
    this.type = type;
    this.size = size2;
    this.index = index;
  }
  validate(shape, index) {
    const shortSide = shape.getShortSide();
    const messages2 = [];
    if (this.type === null) {
      this.size = null;
      const corner = ["a", "b", "c", "d"][this.index];
      shape.banding[corner] = false;
      shape.bandingType[corner] = "";
    }
    if (this.type && convertUnit(this.size) <= 0) {
      messages2.push({
        index,
        message: "Corner size cannot be zero or negative"
      });
    }
    if (this.type && convertUnit(this.size) > shortSide / 2) {
      this.size = shortSide / 2;
    }
    if (!messages2.length)
      this.valid = true;
    else
      this.valid = false;
    return messages2;
  }
}
let Machining$1 = class Machining {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({ holes = [], corners = [], hingeHoles = [] } = {}) {
    __publicField(this, "holes", []);
    __publicField(this, "corners", []);
    __publicField(this, "hingeHoles", []);
    if (corners && corners.length === 4) {
      this.corners = corners.map((c) => new Corner(c));
    } else {
      [0, 1, 2, 3].forEach((i2) => {
        this.corners.push(new Corner({
          type: null,
          size: null,
          index: i2
        }));
      });
    }
    if (holes)
      this.holes = holes.map((h2) => new Hole(h2));
    if (hingeHoles)
      this.hingeHoles = hingeHoles.map((h2) => new HingeHoles(h2));
  }
  validateEverything(shape) {
    const holeMessages = this.validate(shape, "holes");
    const hingeHolesMessages = this.validate(shape, "hingeHoles");
    const cornersMessages = this.validate(shape, "corners");
    shape.issues.push(...holeMessages.map((m) => {
      return `Part ${shape.parentID} hole issue: ${m.message}`;
    }));
    shape.issues.push(...hingeHolesMessages.map((m) => {
      return `Part ${shape.parentID} hinge hole issue: ${m.message}`;
    }));
    shape.issues.push(...cornersMessages.map((m) => {
      return `Part ${shape.parentID} corner issue: ${m.message}`;
    }));
  }
  validate(shape, type) {
    const messages2 = [];
    messages2.push(...this.validateAll(shape, type));
    return messages2;
  }
  validateAll(shape, item) {
    if (!shape)
      return [];
    const messages2 = [];
    this[item].forEach((i2, index) => messages2.push(...i2.validate(shape, index)));
    return messages2;
  }
  createHole(x, y, diameter, depth = 0, side = 0) {
    const hole = new Hole({
      x,
      y,
      diameter,
      depth,
      side
    });
    this.holes.push(hole);
    return hole;
  }
  createHingeHoles({ numHoles, position, diameter, depth = 0, edge = "x1", side = 0, distanceFromEdge = 0, outerSpacing = 0, minimumHoleDistance = 0, hingeLength = 0 }) {
    const hingeHoles = new HingeHoles({
      numHoles,
      position,
      //from left or bottom
      edge,
      side,
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
    this.hingeHoles.forEach((h2) => h2.createHoles(shape));
  }
  getAllHingeHoles(shape) {
    const holes = [];
    this.hingeHoles.forEach((h2, i2) => {
      h2.createHoles(shape);
      h2.validate(shape, i2);
      holes.push(...h2.holes);
    });
    return holes;
  }
};
function sanitiseData(object2) {
  if (!valueSet(object2) || typeof object2 !== "object")
    return {};
  object2 = Object.assign({}, object2);
  for (const [key, value2] of Object.entries(object2)) {
    if (key === "_id")
      continue;
    if (key.startsWith("_")) {
      object2[key.substring(1)] = value2;
      delete object2[key];
    }
  }
  return object2;
}
function recreateInputShapes(inputObjects) {
  return inputObjects.map((s) => {
    delete s.id;
    return new InputShape(s);
  });
}
function recreateStockList({ stockList, removeScores = false, saw = null, preventAutoRotation = false, preventGrainRotation = false }) {
  if (!stockList || !(stockList == null ? void 0 : stockList.length))
    return [];
  return stockList.map((s) => {
    if (saw)
      s.saw = saw;
    if (preventAutoRotation)
      s.preventAutoRotation = true;
    if (preventGrainRotation)
      s.preventGrainRotation = true;
    const stock = new Stock(s);
    if (stock.issues.length) {
      throw new Error(`Issues found when attempting to recreate stock list - ${stock.issues.join()}`, { cause: stock.issues });
    }
    if (removeScores)
      delete stock.algoBenchmark;
    return stock;
  });
}
function recreateShapeList({ shapeList, stockList, preventAutoRotation = false }) {
  if (typeof stockList === "undefined")
    throw new Error("recreateShapeList requires stockList");
  if (!shapeList || !(shapeList == null ? void 0 : shapeList.length))
    return [];
  return shapeList.map((s) => {
    if (preventAutoRotation)
      s.preventAutoRotation = true;
    const shape = new Shape(s);
    if (shape.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${shape.issues.join()}`);
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = s == null ? void 0 : s.stock) == null ? void 0 : _a.id) ?? (s == null ? void 0 : s.stockId));
    });
    shape.stock = stock;
    return shape;
  });
}
function recreateCutList({ cutList, stockList }) {
  if (typeof stockList === "undefined")
    throw new Error("recreateCutList requires stockList");
  if (!cutList || !(cutList == null ? void 0 : cutList.length))
    return [];
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
function recreateSegmentList({ segmentList, stockList }) {
  if (!segmentList || !(segmentList == null ? void 0 : segmentList.length))
    return [];
  return segmentList.map((segmentObject) => {
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = segmentObject == null ? void 0 : segmentObject.stock) == null ? void 0 : _a.id) ?? (segmentObject == null ? void 0 : segmentObject.stockId));
    });
    segmentObject.stock = stock;
    segmentObject.preventAutoRotation = true;
    const segment = new Segment(segmentObject);
    return segment;
  });
}
function willItFit(container = null, shape = null, rotation = null) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  if (!container)
    throw new Error("no container supplied to willItFit");
  if (!shape)
    throw new Error("no shape supplied to willItFit");
  const shapeGrainRotation = shape.getGrainRotation(container);
  if (valueSet(rotation) && valueSet(shapeGrainRotation) && rotation !== shapeGrainRotation)
    return false;
  if (rotation !== null) {
    if (shape.rot == rotation)
      return (maths.equalTo(shape.l, container.l) || maths.lessThanOrEqualTo(shape.l, container.l - (((_b = (_a = container == null ? void 0 : container.saw) == null ? void 0 : _a.options) == null ? void 0 : _b.minSpacing) ?? 0))) && (maths.equalTo(shape.w, container.w) || maths.lessThanOrEqualTo(shape.w, container.w - (((_d = (_c = container == null ? void 0 : container.saw) == null ? void 0 : _c.options) == null ? void 0 : _d.minSpacing) ?? 0)));
    else
      return (maths.equalTo(shape.w, container.l) || maths.lessThanOrEqualTo(shape.w, container.l - (((_f = (_e = container == null ? void 0 : container.saw) == null ? void 0 : _e.options) == null ? void 0 : _f.minSpacing) ?? 0))) && (maths.equalTo(shape.l, container.w) || maths.lessThanOrEqualTo(shape.l, container.w - (((_h = (_g = container == null ? void 0 : container.saw) == null ? void 0 : _g.options) == null ? void 0 : _h.minSpacing) ?? 0)));
  }
  return (maths.equalTo(shape.l, container.l) || maths.lessThanOrEqualTo(shape.l, container.l - (((_j = (_i = container == null ? void 0 : container.saw) == null ? void 0 : _i.options) == null ? void 0 : _j.minSpacing) ?? 0))) && (maths.equalTo(shape.w, container.w) || maths.lessThanOrEqualTo(shape.w, container.w - (((_l = (_k = container == null ? void 0 : container.saw) == null ? void 0 : _k.options) == null ? void 0 : _l.minSpacing) ?? 0))) || (maths.equalTo(shape.w, container.l) || maths.lessThanOrEqualTo(shape.w, container.l - (((_n = (_m = container == null ? void 0 : container.saw) == null ? void 0 : _m.options) == null ? void 0 : _n.minSpacing) ?? 0))) && (maths.equalTo(shape.l, container.w) || maths.lessThanOrEqualTo(shape.l, container.w - (((_p = (_o = container == null ? void 0 : container.saw) == null ? void 0 : _o.options) == null ? void 0 : _p.minSpacing) ?? 0)));
}
class InputStock {
  constructor({ id = null, units = "decimal", l = null, w: w2 = null, t = null, q = 1, name = "", material = "", trim = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  }, cost = null, grain = "", multiSelect = false, type = null, autoAdd = false }) {
    __publicField(this, "id");
    __publicField(this, "listId");
    __publicField(this, "units");
    __publicField(this, "l");
    __publicField(this, "w");
    __publicField(this, "t");
    __publicField(this, "q");
    __publicField(this, "name");
    __publicField(this, "material");
    __publicField(this, "trim");
    __publicField(this, "cost");
    __publicField(this, "grain");
    __publicField(this, "selected");
    //used for multiple editing
    __publicField(this, "multiSelect");
    //is this the multi-select stock
    __publicField(this, "type");
    __publicField(this, "autoAdd");
    __publicField(this, "used");
    __publicField(this, "saw");
    __publicField(this, "preventGrainRotation");
    if (!valueSet(units))
      console.warn("attempting to create InputStock without units");
    this.units = units;
    this.id = id;
    this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16);
    this.l = l ? convertUnit(l, this.units) : null;
    this.w = w2 ? convertUnit(w2, this.units) : null;
    this.t = t ? convertUnit(t, this.units) : null;
    this.q = valueSet(q) ? typeof q === "string" ? parseInt(q) : q : null;
    this.autoAdd = valueSet(autoAdd) ? autoAdd : false;
    this.name = valueSet(name) ? name.trim().toUpperCase() : "";
    this.material = valueSet(material) ? material.trim().toUpperCase() : "";
    this.trim = {
      x1: valueSet(trim.x1) ? convertUnit(trim.x1, this.units) : null,
      x2: valueSet(trim.x2) ? convertUnit(trim.x2, this.units) : null,
      y1: valueSet(trim.y1) ? convertUnit(trim.y1, this.units) : null,
      y2: valueSet(trim.y2) ? convertUnit(trim.y2, this.units) : null
    };
    this.cost = valueSet(cost) ? cost : null;
    this.grain = valueSet(grain) ? grain.toLowerCase() : "";
    this.selected = false;
    this.multiSelect = multiSelect;
    this.type = type;
    this.preventGrainRotation = true;
  }
  //change the units of the stock
  changeUnits(newUnits) {
    console.log("stock changeUnits", newUnits);
    if (!(newUnits === "decimal" || newUnits === "fraction"))
      return;
    this.units = newUnits;
    this.l = this.l ? convertUnit(this.l, newUnits) : null;
    this.w = this.w ? convertUnit(this.w, newUnits) : null;
    this.t = this.t ? convertUnit(this.t, newUnits) : null;
    this.trim = {
      x1: convertUnit(this.trim.x1, newUnits),
      x2: convertUnit(this.trim.x2, newUnits),
      y1: convertUnit(this.trim.y1, newUnits),
      y2: convertUnit(this.trim.y2, newUnits)
    };
  }
  //change the type of stock
  changeType(newType) {
    if (newType !== "sheet")
      this.grain = "";
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
  //create an id from an index
  createId(index, secondaryIndex = 0) {
    this.id = `${index + 1}.${secondaryIndex}`;
  }
}
class InputShape {
  constructor({ id = null, units = "decimal", l = null, w: w2 = null, t = null, q = 1, name = "", banding = {
    a: false,
    b: false,
    c: false,
    d: false,
    x1: false,
    x2: false,
    y1: false,
    y2: false
  }, bandingType = {
    a: "",
    b: "",
    c: "",
    d: "",
    x1: "",
    x2: "",
    y1: "",
    y2: ""
  }, orientationLock = "", material = "", multiSelect = false, machining = null }) {
    __publicField(this, "id");
    __publicField(this, "listId");
    __publicField(this, "units");
    __publicField(this, "l");
    __publicField(this, "w");
    __publicField(this, "t");
    __publicField(this, "q");
    __publicField(this, "name");
    __publicField(this, "material");
    __publicField(this, "trim");
    __publicField(this, "cost");
    __publicField(this, "grain");
    __publicField(this, "banding");
    __publicField(this, "bandingType");
    __publicField(this, "orientationLock");
    __publicField(this, "selectedMaterial");
    __publicField(this, "selected");
    //used for multiple editing
    __publicField(this, "multiSelect");
    //is this the first shape in a multi-select shape
    __publicField(this, "machining");
    if (!valueSet(units))
      console.warn("attempting to create InputShape without units");
    this.units = units;
    this.id = id;
    this.listId = Date.now().toString() + Math.ceil(Math.random() * 1e16);
    this.l = l ? convertUnit(l, this.units) : null;
    this.w = w2 ? convertUnit(w2, this.units) : null;
    this.t = t ? convertUnit(t, this.units) : null;
    this.q = valueSet(q) ? typeof q === "string" ? parseInt(q) : q : null;
    this.name = valueSet(name) ? name.trim().toUpperCase() : "";
    this.material = valueSet(material) ? material.trim().toUpperCase() : "";
    this.banding = {
      a: valueSet(banding.a) ? banding.a : false,
      b: valueSet(banding.b) ? banding.b : false,
      c: valueSet(banding.c) ? banding.c : false,
      d: valueSet(banding.d) ? banding.d : false,
      x1: valueSet(banding.x1) ? banding.x1 : false,
      x2: valueSet(banding.x2) ? banding.x2 : false,
      y1: valueSet(banding.y1) ? banding.y1 : false,
      y2: valueSet(banding.y2) ? banding.y2 : false
    };
    this.bandingType = {
      a: valueSet(bandingType.a) ? bandingType.a : "",
      b: valueSet(bandingType.b) ? bandingType.b : "",
      c: valueSet(bandingType.c) ? bandingType.c : "",
      d: valueSet(bandingType.d) ? bandingType.d : "",
      x1: valueSet(bandingType.x1) ? bandingType.x1 : "",
      x2: valueSet(bandingType.x2) ? bandingType.x2 : "",
      y1: valueSet(bandingType.y1) ? bandingType.y1 : "",
      y2: valueSet(bandingType.y2) ? bandingType.y2 : ""
    };
    this.orientationLock = valueSet(orientationLock) ? orientationLock.toLowerCase() : "";
    this.selected = false;
    this.multiSelect = multiSelect;
    this.machining = new Machining$1(machining ?? {
      holes: [],
      corners: []
    });
  }
  /**
   * change the units of the shape
   * @param {String} newUnits
   */
  changeUnits(newUnits) {
    if (!(newUnits === "decimal" || newUnits === "fraction"))
      return;
    this.units = newUnits;
    this.l = this.l ? convertUnit(this.l, newUnits) : null;
    this.w = this.w ? convertUnit(this.w, newUnits) : null;
    this.t = this.t ? convertUnit(this.t, newUnits) : null;
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
        if (newType === "roll")
          this.t = null;
        break;
      case "linear":
        this.orientationLock = "";
        this.banding = {
          x1: false,
          x2: false,
          y1: false,
          y2: false
        };
        this.bandingType = {
          x1: "",
          x2: "",
          y1: "",
          y2: ""
        };
        break;
    }
  }
  /**
   * create an id from an index
   * @param {Integer} index
   * @param {Integer} secondaryIndex
   */
  createId(index, secondaryIndex = 0) {
    this.id = `${index + 1}.${secondaryIndex}`;
  }
  getLongSide() {
    return convertUnit(this.l) > convertUnit(this.w) ? convertUnit(this.l) : convertUnit(this.w);
  }
  getShortSide() {
    return convertUnit(this.l) < convertUnit(this.w) ? convertUnit(this.l) : convertUnit(this.w);
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
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
    __publicField(this, "_trim");
    __publicField(this, "trimmed");
    __publicField(this, "preventAutoRotation");
    __publicField(this, "preventGrainRotation");
    __publicField(this, "units");
    __publicField(this, "issues");
    __publicField(this, "stock");
    __publicField(this, "stockId");
    //used when object is compressed
    __publicField(this, "cost");
    __publicField(this, "offcut");
    var _a, _b, _c, _d, _e;
    this.issues = [];
    this.id = valueSet(data.id) ? data.id.toString() : null;
    this.setParentID();
    const unitBasedValues = [
      {
        key: "x",
        default: 0,
        required: false,
        validate: (val) => !isNaN(val) && val >= 0
      },
      {
        key: "y",
        default: 0,
        required: false,
        validate: (val) => !isNaN(val) && val >= 0
      },
      {
        key: "l",
        default: null,
        required: true,
        validate: (val) => !isNaN(val) && val > 0
      },
      {
        key: "w",
        default: 1,
        required: true,
        validate: (val) => !isNaN(val) && val > 0
      },
      {
        key: "t",
        default: null,
        required: false,
        validate: (val) => !isNaN(val) && val > 0
      }
    ];
    unitBasedValues.forEach((item) => {
      let value2 = data[item.key];
      if (!valueSet(value2)) {
        if (item.required) {
          return this.issues.push(this.createIssue(`${item.key} is required`));
        } else {
          return this[item.key] = item.default;
        }
      }
      if (typeof value2 === "string")
        value2 = convertUnit(value2);
      if (!item.validate(value2))
        this.issues.push(this.createIssue(`${value2 ?? "N/A"} is not a valid value for ${item.key}`));
      this[item.key] = value2;
    });
    if (valueSet(data == null ? void 0 : data.q)) {
      if (isNaN(data.q)) {
        this.issues.push(this.createIssue(`Quantity is not a number: ${data.q ?? "N/A"}`));
        this.q = 0;
      } else if (data.q < 0) {
        this.issues.push(this.createIssue(`Quantity must be positive: ${typeof data.q === "number" ? data.q : "N/A"}`));
        this.q = 0;
      } else if (!Number.isInteger(data.q)) {
        this.issues.push(this.createIssue(`Quantity must be an integer: ${data.q ?? "N/A"}`));
        this.q = 0;
      } else {
        this.q = data.q;
      }
    } else {
      this.q = 0;
    }
    this.name = valueSet(data.name) && ((_a = data == null ? void 0 : data.name) == null ? void 0 : _a.length) ? (_b = truncateString(sanitizeString(data == null ? void 0 : data.name))) == null ? void 0 : _b.toUpperCase() : null;
    if ((data == null ? void 0 : data.orientationLock) === " ")
      data.orientationLock = "";
    this.orientationLock = valueSet(data == null ? void 0 : data.orientationLock) && this.l !== this.w ? data.orientationLock.toLowerCase() : null;
    if (!["l", "w", null, void 0, ""].includes(data == null ? void 0 : data.grain)) {
      this.issues.push(this.createIssue(`Grain is not a valid value - ${data.grain ?? "N/A"}`));
    } else {
      this.grain = typeof data.grain !== "undefined" && valueSet(data == null ? void 0 : data.grain) ? data.grain.toLowerCase() : null;
    }
    try {
      this.trim = data == null ? void 0 : data.trim;
    } catch (error) {
      if ((_c = error == null ? void 0 : error.cause) == null ? void 0 : _c.issues)
        this.issues.push(...error.cause.issues);
      else
        throw new Error("error when attempting to set trim");
    }
    this.trimmed = valueSet(data == null ? void 0 : data.trimmed) ? data.trimmed : false;
    if (!this.trimmed) {
      if (this.l && this.w && this.l > 0 && this.w > 0) {
        if (this.trim.x1 + this.trim.x2 >= this.l)
          this.issues.push(this.createIssue(`Trim W1 + W2 = ${this.trim.x1 + this.trim.x2}, which is greater than or equal to total length: ${this.l}`));
        if (this.trim.y1 + this.trim.y2 >= this.w)
          this.issues.push(this.createIssue(`Trim L1 + L2 = ${this.trim.y1 + this.trim.y2}, which is greater than or equal to total width: ${this.w}`));
      }
    }
    if (!(data == null ? void 0 : data.preventAutoRotation) && !data.trimmed && this.w > this.l) {
      [this.l, this.w] = [this.w, this.l];
      if (this.grain && !(data == null ? void 0 : data.preventGrainRotation))
        this.grain = this.grain === "l" ? "w" : "l";
    }
    this.material = valueSet(data.material) ? data.material.trim().toLowerCase() : null;
    this.duplicate = valueSet(data == null ? void 0 : data.duplicate) ? data.duplicate : false;
    if (valueSet(data == null ? void 0 : data.stock)) {
      if (((_e = (_d = data.stock) == null ? void 0 : _d.constructor) == null ? void 0 : _e.name) === "Stock")
        this.stock = data.stock;
      else
        this.stock = new Stock(data.stock);
      this.stockId = this.stock.id;
    }
    if (valueSet(data == null ? void 0 : data.cost)) {
      if (typeof data.cost === "string") {
        this.cost = parseFloat(data.cost);
      } else if (typeof data.cost === "number") {
        this.cost = data.cost;
      }
    } else {
      this.cost = 0;
    }
    this.offcut = valueSet(data == null ? void 0 : data.offcut) ? data.offcut : false;
  }
  set trim(val) {
    this._trim = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    };
    if (!valueSet(val))
      return;
    Object.keys(val).forEach((key) => {
      let value2;
      if (typeof val[key] === "string") {
        const converted = convertUnit(val[key]);
        if (isNaN(converted) || converted < 0) {
          this.issues.push(this.createIssue(`${val[key] ?? "N/A"} is not a valid value for trim: ${key}`));
          value2 = 0;
        } else
          value2 = converted;
      } else {
        if (isNaN(val[key]) || val[key] < 0) {
          this.issues.push(this.createIssue(`${val[key] ?? "N/A"} is not a valid value for trim: ${key}`));
          value2 = 0;
        } else {
          value2 = val[key];
        }
      }
      this._trim[key] = value2;
    });
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
    if (!this.id)
      return null;
    if (this.parentID)
      return this.parentID;
    if (typeof this.id !== "number" && this.id.includes(".")) {
      return parseInt(this.id.split(".")[0]);
    } else if (typeof this.id !== "number" && !this.id.includes(".")) {
      return null;
    } else
      return isNaN(parseInt(this.id)) ? null : parseInt(this.id);
  }
  isGroup() {
    return this.constructor.name === "Group" && this.userGroup !== true;
  }
  //user groups are treated like shapes
  isUserGroup() {
    return this.constructor.name === "Group" && this.userGroup === true;
  }
  isShape() {
    return this.constructor.name === "Shape";
  }
  createIssue(message) {
    var _a;
    let type = "";
    const thisClass = this.getClass();
    switch (thisClass) {
      case "Shape":
        type = "part";
        break;
      case "Stock":
        type = "stock";
        break;
      default:
        type = thisClass.toLowerCase();
        break;
    }
    return `${message} [${type} ${((_a = this == null ? void 0 : this.name) == null ? void 0 : _a.length) ? this.name.toUpperCase() : this.parentID}]`;
  }
  getDimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getCoordinates() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
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
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom",
          parentID: this.id
        };
      case "right":
        return {
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right",
          parentID: this.id
        };
      case "top":
        return {
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top",
          parentID: this.id
        };
      case "left":
        return {
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left",
          parentID: this.id
        };
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
    if (this.orientationLock)
      return this[dimension];
    else
      return this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getPoints() {
    return {
      bottomLeft: new Point(this.x, this.y),
      bottomRight: new Point(this.x + this.l, this.y),
      topRight: new Point(this.x + this.l, this.y + this.w),
      topLeft: new Point(this.x, this.y + this.w)
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
  /**
   * trim the rectangle
   */
  trimDimensions() {
    var _a, _b, _c, _d;
    if (this.trimmed)
      return false;
    if (this.trim && Object.values(this.trim).filter((value2) => !isNaN(parseFloat(value2))).length) {
      if (valueSet(this.l)) {
        this.l -= (((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) ? this.trim.x1 : 0) + (((_b = this == null ? void 0 : this.trim) == null ? void 0 : _b.x2) ? this.trim.x2 : 0);
        if (this.l <= 0) {
          console.error(this);
          throw new Error(`trimming rectangle ${this.id} has produced a negative length`);
        }
      }
      if (valueSet(this.w)) {
        this.w -= (((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.y1) ? this.trim.y1 : 0) + (((_d = this == null ? void 0 : this.trim) == null ? void 0 : _d.y2) ? this.trim.y2 : 0);
        if (this.w <= 0) {
          console.error(this);
          throw new Error(`trimming rectangle ${this.id} has produced a negative width`);
        }
      }
    }
    this.trimmed = true;
    return true;
  }
  /**
   * increase the size of the stock to the original size
   */
  removeTrim() {
    var _a, _b, _c, _d;
    if (this.trimmed) {
      this.l += (typeof ((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) === "number" ? this.trim.x1 : 0) + (typeof ((_b = this == null ? void 0 : this.trim) == null ? void 0 : _b.x2) === "number" ? this.trim.x2 : 0);
      this.w += (typeof ((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.y1) === "number" ? this.trim.y1 : 0) + (typeof ((_d = this == null ? void 0 : this.trim) == null ? void 0 : _d.y2) === "number" ? this.trim.y2 : 0);
      if (this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
    }
    this.trimmed = false;
  }
  /**
   * is this rectangle identical to another
   */
  isIdentical(rectangle) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this.getClass() !== rectangle.getClass())
      return false;
    if (this.getClass() !== "Group") {
      if (rectangle.getParentID() === this.getParentID())
        return true;
    } else {
      if (rectangle.id === this.id)
        return true;
    }
    if ((this.t === rectangle.t && rectangle.w === this.w && rectangle.l === this.l || rectangle.l === this.w && rectangle.w === this.l) && rectangle.orientationLock === this.orientationLock) {
      if (((_a = this == null ? void 0 : this.trim) == null ? void 0 : _a.x1) === ((_b = rectangle == null ? void 0 : rectangle.trim) == null ? void 0 : _b.x1) && ((_c = this == null ? void 0 : this.trim) == null ? void 0 : _c.x2) === ((_d = rectangle == null ? void 0 : rectangle.trim) == null ? void 0 : _d.x2) && ((_e = this == null ? void 0 : this.trim) == null ? void 0 : _e.y1) === ((_f = rectangle == null ? void 0 : rectangle.trim) == null ? void 0 : _f.y1) && ((_g = this == null ? void 0 : this.trim) == null ? void 0 : _g.y2) === ((_h = rectangle == null ? void 0 : rectangle.trim) == null ? void 0 : _h.y2)) {
        return true;
      }
    }
    return false;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    if (this.l === this.w)
      return true;
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
  isTooCloseToEdges(container) {
    var _a, _b;
    if (!((_b = (_a = container.saw) == null ? void 0 : _a.options) == null ? void 0 : _b.minSpacing))
      return false;
    return this.getDistancesToContainerEdges(container).some((d2) => {
      var _a2, _b2;
      return d2 > 0 && d2 <= ((_b2 = (_a2 = container.saw) == null ? void 0 : _a2.options) == null ? void 0 : _b2.minSpacing);
    });
  }
  isInsideStock(stock) {
    if (this.x + this.l > stock.l)
      return false;
    if (this.y + this.w > stock.w)
      return false;
    if (this.x < 0)
      return false;
    if (this.y < 0)
      return false;
    return true;
  }
  //create rectangles used to detect proximity to other shapes
  createProximityRectangles(distance, container = null, includeBladeWidth = true) {
    let bladeWidth;
    if (includeBladeWidth && container) {
      bladeWidth = container.getBladeWidth();
    } else {
      bladeWidth = 0;
    }
    if (container === null || this.y + this.w < container.w) {
      var top2 = new Rectangle({
        name: "top",
        id: "p-" + this.id + "-" + this.constructor.name,
        x: this.x,
        y: this.y + this.w + bladeWidth,
        l: this.l,
        w: distance,
        preventAutoRotation: true
      });
    }
    if (container === null || this.y > 0) {
      var bottom2 = new Rectangle({
        name: "bottom",
        id: "p-" + this.id + "-" + this.constructor.name,
        x: this.x,
        y: this.y - distance - bladeWidth,
        l: this.l,
        w: distance,
        preventAutoRotation: true
      });
    }
    if (container === null || this.x > 0) {
      var left2 = new Rectangle({
        name: "left",
        id: "p-" + this.id + "-" + this.constructor.name,
        x: this.x - distance - bladeWidth,
        y: this.y,
        l: distance,
        w: this.w,
        preventAutoRotation: true
      });
    }
    if (container === null || this.x + this.l < container.l) {
      var right2 = new Rectangle({
        name: "right",
        id: "p-" + this.id + "-" + this.constructor.name,
        x: this.x + this.l + bladeWidth,
        y: this.y,
        l: distance,
        w: this.w,
        preventAutoRotation: true
      });
    }
    return [left2, right2, bottom2, top2].filter((item) => item);
  }
}
class Container extends Rectangle {
  //the winning cut preference if flex is used by saw
  constructor(data) {
    super(data);
    __publicField(this, "type");
    __publicField(this, "saw");
    __publicField(this, "flex");
    if (!["sheet", "linear", "roll", null, void 0, ""].includes(data.type)) {
      this.issues.push(`Container type ${data.type ?? "N/A"} is not valid`);
    } else
      this.type = data.type;
    if (!this.type)
      this.type = "sheet";
    if (this == null ? void 0 : this.isSegment())
      this.setSaw(data == null ? void 0 : data.stock);
    else
      this.setSaw(data);
    switch (this.cutType) {
      case "beam":
        if (!valueSet(this.t) || this.t <= 0) {
          this.issues.push(this.createIssue("Stock for beam saws must have a thickness set"));
        }
        break;
    }
    if (valueSet(data.flex))
      this.flex = data.flex;
  }
  setSaw(data) {
    var _a, _b, _c, _d;
    if (!valueSet(data))
      this.saw = new Saw(null);
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
    try {
      this.saw = valueSet(data == null ? void 0 : data.saw) ? new Saw(data.saw, this.type) : new Saw(null, this.type);
      if ((_d = (_c = this.saw) == null ? void 0 : _c.issues) == null ? void 0 : _d.length)
        this.issues.push(...this.saw.issues);
    } catch (error) {
      throw new Error("error creating saw", { cause: error });
    }
  }
  get cutType() {
    var _a, _b, _c, _d;
    if (valueSet((_a = this == null ? void 0 : this.saw) == null ? void 0 : _a.cutType))
      return this.saw.cutType;
    if (!((_b = this.stock) == null ? void 0 : _b.isStock()))
      return ((_d = (_c = this == null ? void 0 : this.stock) == null ? void 0 : _c.saw) == null ? void 0 : _d.cutType) ?? null;
    return null;
  }
  get cutPreference() {
    var _a, _b, _c, _d;
    if (valueSet(this.flex))
      return this.flex;
    if (valueSet((_a = this.saw) == null ? void 0 : _a.cutPreference))
      return this.saw.cutPreference;
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
  getHalfBladeWidth() {
    const bladeWidth = this.getBladeWidth();
    return bladeWidth ? bladeWidth / 2 : 0;
  }
  getBladeWidth() {
    var _a, _b, _c;
    const bladeWidth = (((_a = this == null ? void 0 : this.saw) == null ? void 0 : _a.bladeWidth) || ((_c = (_b = this == null ? void 0 : this.stock) == null ? void 0 : _b.saw) == null ? void 0 : _c.bladeWidth)) ?? 0;
    return isNaN(bladeWidth) ? 0 : bladeWidth;
  }
  getStock() {
    return (this == null ? void 0 : this.stock) ? this.stock : this;
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  isSegment() {
    return this.constructor.name === "Segment";
  }
  isStock() {
    return this.constructor.name === "Stock";
  }
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
      cutPreference = null;
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
class Saw {
  constructor(data, stockType = "sheet") {
    __publicField(this, "issues");
    __publicField(this, "bladeWidth");
    __publicField(this, "cutType");
    __publicField(this, "cutPreference");
    __publicField(this, "guillotineOptions");
    __publicField(this, "efficiencyOptions");
    __publicField(this, "stackHeight");
    __publicField(this, "stockType");
    __publicField(this, "options");
    data = sanitiseData(data);
    this.issues = [];
    this.options = (data == null ? void 0 : data.options) ?? null;
    this.stockType = (data == null ? void 0 : data.stockType) ?? stockType;
    if (!["sheet", "linear", "roll"].includes(this.stockType))
      this.issues.push(`Saw stock type: ${this.stockType} not valid`);
    if (!this.stockType)
      this.stockType = "sheet";
    this.cutType = data == null ? void 0 : data.cutType;
    switch (this.stockType) {
      case "sheet":
        if (!["efficiency", "guillotine", "beam", null, void 0].includes(this.cutType)) {
          this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        }
        break;
      case "roll":
        if (!["efficiency", "guillotine", null, void 0].includes(this.cutType)) {
          this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        }
        break;
      default:
        if (![null, void 0].includes(this.cutType)) {
          this.issues.push(`Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}`);
        }
        break;
    }
    this.cutPreference = data == null ? void 0 : data.cutPreference;
    switch (this.cutType) {
      case "guillotine":
        if (!["l", "w", "flex"].includes(this.cutPreference)) {
          this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        }
        break;
      case "beam":
        if (!["l", null, void 0].includes(this.cutPreference)) {
          this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        }
        break;
      default:
        if (![null, void 0].includes(this.cutPreference)) {
          this.issues.push(`Saw cut preference: ${this.cutPreference} not valid for cut type: ${this.cutType}`);
        }
        break;
    }
    if (valueSet(data == null ? void 0 : data.bladeWidth)) {
      if (typeof data.bladeWidth === "string") {
        this.bladeWidth = convertUnit(data.bladeWidth);
      } else {
        this.bladeWidth = data.bladeWidth;
      }
    } else
      this.bladeWidth = 0;
    if (isNaN(this.bladeWidth) || this.bladeWidth < 0) {
      this.issues.push(`Blade width: ${this.bladeWidth ?? "N/A"} is not valid`);
      this.bladeWidth = 0;
    }
    switch (this.stockType) {
      case "sheet":
        if (!["efficiency", "guillotine", "beam", null, void 0].includes(this.cutType)) {
          this.issues.push(`Invalid cut type: ${this.cutType} for stock type: ${stockType}, cut preference: ${this.cutPreference}`);
        }
        if (this.cutType === "guillotine") {
          if (!["l", "w", "flex"].includes(this.cutPreference)) {
            this.issues.push(`Invalid cut preference: ${this.cutPreference} for stock type: ${stockType}, cut type: ${this.cutType}`);
          }
        }
        if (this.cutType === "beam")
          this.cutPreference = "l";
        if (!this.cutType)
          this.cutType = "efficiency";
        break;
      case "linear":
        this.cutType = null;
        this.cutPreference = null;
        break;
    }
    switch (this.cutType) {
      case "efficiency":
        this.efficiencyOptions = valueSet(data == null ? void 0 : data.efficiencyOptions) ? data.efficiencyOptions : { primaryCompression: "y" };
        break;
      case "guillotine":
        this.guillotineOptions = valueSet(data == null ? void 0 : data.guillotineOptions) ? data.guillotineOptions : { strategy: "efficiency" };
        break;
      case "beam":
        this.guillotineOptions = valueSet(data == null ? void 0 : data.guillotineOptions) ? data.guillotineOptions : { strategy: "efficiency" };
        this.stackHeight = valueSet(data == null ? void 0 : data.stackHeight) ? data.stackHeight : 100;
        this.cutPreference = "l";
        break;
    }
  }
  clone() {
    const data = deepClone(this);
    return new Saw(data);
  }
}
class Stock extends Container {
  //used by stock matching
  constructor(data) {
    data = sanitiseData(data);
    data.preventAutoRotation = (data == null ? void 0 : data.type) === "roll";
    super(data);
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
    __publicField(this, "algoBenchmark");
    //used by evo
    __publicField(this, "unusable");
    delete this.stock;
    this._id = data == null ? void 0 : data._id;
    this.autoAdd = valueSet(data == null ? void 0 : data.autoAdd) ? data.autoAdd : false;
    if (this.autoAdd)
      this.q = 1;
    this.allowExactFitShapes = valueSet(data == null ? void 0 : data.allowExactFitShapes) ? data.allowExactFitShapes : false;
    this.analysis = valueSet(data.analysis) ? data.analysis : null;
    this.tidy = valueSet(data == null ? void 0 : data.tidy) ? data.tidy : false;
    this.algoBenchmark = null;
    this.used = valueSet(data == null ? void 0 : data.used) ? data.used : false;
    this.stack = valueSet(data == null ? void 0 : data.stack) ? data.stack : false;
    this.initStock();
  }
  initStock() {
    switch (this.type) {
      case "linear":
        this.trim.y1 = 0;
        this.trim.y2 = 0;
        this.grain = null;
        break;
      case "roll":
        this.trim = {
          x1: 0,
          x2: 0,
          y1: 0,
          y2: 0
        };
        this.grain = null;
        break;
    }
  }
  /**
   * compress for saving / transfer
   */
  compress(stockList) {
    delete this.tidy;
    this == null ? true : delete this.algoBenchmark;
    this.stack = getStockStack(stockList, this);
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
    let length2 = false;
    let width = false;
    if (this.material === stock.material)
      material = true;
    if (this.t === stock.t)
      thickness = true;
    if (this.l === stock.l)
      length2 = true;
    if (this.w === stock.w)
      width = true;
    if (material && thickness && length2 && width)
      return true;
  }
  clone(version2 = null) {
    const id = this.id.split(".");
    if (!version2) {
      version2 = parseInt(id.pop());
      version2++;
    } else {
      id.pop();
    }
    id.push(version2.toString());
    const newId = id.join(".");
    const data = deepClone(this);
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
  compress() {
    var _a;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id);
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
function recreateOffcuts({ offcuts, stockList, preventAutoRotation = true }) {
  if (!offcuts || !(offcuts == null ? void 0 : offcuts.length))
    return [];
  return offcuts.map((offcutObject) => {
    const stock = stockList.find((stock2) => {
      var _a;
      return stock2.id === (((_a = offcutObject == null ? void 0 : offcutObject.stock) == null ? void 0 : _a.id) ?? (offcutObject == null ? void 0 : offcutObject.stockId));
    });
    offcutObject.stock = stock;
    if (preventAutoRotation)
      offcutObject.preventAutoRotation = true;
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
    __publicField(this, "_banding");
    __publicField(this, "_bandingType");
    __publicField(this, "stockLock");
    __publicField(this, "score");
    __publicField(this, "bestScore");
    __publicField(this, "placementOrder");
    //groups
    __publicField(this, "groupPlacementOrder");
    __publicField(this, "group");
    __publicField(this, "groupID");
    //[] should be array?
    __publicField(this, "inGroup");
    //is the shape currently part of at least one group
    __publicField(this, "addedAsGroup");
    //user groups
    __publicField(this, "userGroupX");
    __publicField(this, "userGroupY");
    __publicField(this, "stripShape");
    __publicField(this, "isFirstShape");
    __publicField(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    __publicField(this, "dimension");
    //used for apex shapes
    __publicField(this, "subsetUsed");
    __publicField(this, "index");
    //used for ptx
    __publicField(this, "stackedMatch");
    //used for stack detection
    __publicField(this, "stockMatch");
    __publicField(this, "machining");
    this.added = valueSet(data == null ? void 0 : data.added) ? data.added : false;
    this.guillotineData = data == null ? void 0 : data.guillotineData;
    if (!["l", "w", "", null, void 0].includes(data.orientationLock)) {
      this.issues.push(this.createIssue(`Invalid orientation lock value: ${data.orientationLock}`));
      data.orientationLock = null;
    }
    this.banding = data == null ? void 0 : data.banding;
    this.bandingType = data == null ? void 0 : data.bandingType;
    if (valueSet(data == null ? void 0 : data.stockLock)) {
      if (Array.isArray(data == null ? void 0 : data.stockLock))
        this.stockLock = data.stockLock;
      else
        this.stockLock = [data.stockLock];
    } else {
      this.stockLock = [];
    }
    this.inGroup = valueSet(data == null ? void 0 : data.inGroup) ? data.inGroup : false;
    this.addedAsGroup = valueSet(data == null ? void 0 : data.addedAsGroup) ? data.addedAsGroup : false;
    this.userGroupX = valueSet(data == null ? void 0 : data.userGroupX) ? data.userGroupX : null;
    this.userGroupY = valueSet(data == null ? void 0 : data.userGroupY) ? data.userGroupY : null;
    this.groupID = valueSet(data == null ? void 0 : data.groupID) ? data.groupID : null;
    this.score = valueSet(data == null ? void 0 : data.score) ? data.score : null;
    this.bestScore = valueSet(data == null ? void 0 : data.bestScore) ? data.bestScore : {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.placementOrder = valueSet(data == null ? void 0 : data.placementOrder) ? data.placementOrder : null;
    this.groupPlacementOrder = valueSet(data == null ? void 0 : data.groupPlacementOrder) ? data.groupPlacementOrder : null;
    this.machining = valueSet(data == null ? void 0 : data.machining) ? new Machining$1(data.machining) : null;
    if (this.machining) {
      this.machining.validateEverything(this);
    }
  }
  set banding(val) {
    this._banding = {
      a: false,
      b: false,
      c: false,
      d: false,
      x1: false,
      x2: false,
      y1: false,
      y2: false
    };
    if (!valueSet(val))
      return;
    Object.keys(val).forEach((key) => this._banding[key] = valueSet(val == null ? void 0 : val[key]) ? val[key] : false);
  }
  get banding() {
    return this._banding;
  }
  set bandingType(val) {
    this._bandingType = {
      a: "",
      b: "",
      c: "",
      d: "",
      x1: "",
      x2: "",
      y1: "",
      y2: ""
    };
    if (!valueSet(val))
      return;
    Object.keys(val).forEach((key) => this._bandingType[key] = valueSet(val[key]) ? truncateString(sanitizeString(val[key])) : "");
    for (const [key] of Object.entries(this._bandingType)) {
      if (this._bandingType[key] || this._banding[key])
        this._banding[key] = true;
    }
  }
  get bandingType() {
    return this._bandingType;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return [this.banding.y1, this.banding.y2, this.banding.x1, this.banding.x2];
  }
  //get an array of banding types in the order L1, L2, W1, W2
  get bandingTypeArray() {
    return [
      this.bandingType.y1,
      this.bandingType.y2,
      this.bandingType.x1,
      this.bandingType.x2
    ];
  }
  //compress for saving / transfer
  compress() {
    var _a, _b, _c;
    delete this.group;
    this == null ? true : delete this.stripShape;
    this.stockId = (_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id;
    delete this.stock;
    delete this.trimmed;
    delete this.bestScore;
    if (!this._banding.x1 && !this._banding.x2 && !this._banding.y1 && !this._banding.y2) {
      this._banding = null;
    }
    if (!this._bandingType.x1 && !this._bandingType.x2 && !this._bandingType.y1 && !this._bandingType.y2) {
      this._bandingType = null;
    }
    {
      (_b = this.guillotineData) == null ? true : delete _b.myStripShape;
      (_c = this.guillotineData) == null ? true : delete _c.mySecondaryStripShape;
      delete this.score;
      delete this.inGroup;
      delete this.groupID;
      delete this.addedAsGroup;
    }
  }
  isExactFit(container) {
    return this.orientationLock === "w" && this.w === container.w || this.orientationLock === "l" && this.l === container.l || !this.orientationLock && (this.w === container.w || this.l === container.l);
  }
  addToStock(stock) {
    this.stock = stock;
    this.added = true;
    this.inGroup = false;
    stock.used = true;
    this.grain = stock.grain;
    if ((stock == null ? void 0 : stock.grain) && this.rot) {
      this.grain = stock.grain === "l" ? "w" : "l";
    }
  }
  removeFromStock() {
    this.placementOrder = null;
    this.stock = null;
    this.added = false;
  }
  resetPosition() {
    this.x = 0;
    this.y = 0;
    this.placementOrder = null;
    this.guillotineData = {};
  }
  resetScore() {
    this.score = null;
    this.guillotineData = {};
  }
  setBestScore(winner) {
    const bestScore = {
      x: winner.x,
      y: winner.y,
      rot: winner.rot,
      total: winner.score.total,
      group: winner.group,
      weighting: null
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
    this.guillotineData = {};
  }
  resetBothScores() {
    this.resetBestScore();
    this.resetScore();
    this.placementOrder = null;
  }
  reset(keepScores = false) {
    this.removeFromStock();
    if (!keepScores)
      this.resetBothScores();
    this.resetPosition();
    this.setRotation(0);
    this.guillotineData = {};
    this.placementOrder = null;
    this == null ? true : delete this.isFirstShape;
    this.stackedMatch = false;
    this.subsetUsed = false;
    this.isFirstShape = false;
    if (this.group)
      this.group.destroy();
    this.addedAsGroup = false;
    this.groupID = null;
    this.group = null;
    this.inGroup = false;
    this.groupPlacementOrder = null;
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  //get an array of allowed rotations for this container
  getAllowedRotations(container) {
    const rotations = [];
    for (let i2 = 0; i2 <= 1; i2++) {
      if (this.canRotate(i2, container) && this.willItFit(container, i2)) {
        rotations.push(i2);
      }
    }
    return rotations;
  }
  //check if the shape can rotate
  canRotate(rotation = null, container = null) {
    if (!valueSet(rotation))
      throw new Error("no rotation provided to canRotate");
    if (rotation === true)
      rotation = 1;
    if (rotation === false)
      rotation = 0;
    if (this.isSquare() && rotation)
      return false;
    if (container) {
      if (!this.willItFit(container, rotation))
        return false;
    }
    const orientationLock = this.getOrientationLock(container);
    if (orientationLock === "l" && rotation)
      return false;
    if (orientationLock === "w" && !rotation)
      return false;
    return true;
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(container) {
    if (!valueSet(this.orientationLock))
      return null;
    if (!valueSet(container == null ? void 0 : container.grain))
      return this.orientationLock;
    if (this.orientationLock === container.grain)
      return "l";
    return "w";
  }
  /**
   * get the orientation lock catering for container grain
   */
  getOrientationLock(container) {
    if (!valueSet(this.orientationLock))
      return null;
    if (!container || this.isGroup()) {
      return valueSet(this.orientationLock) ? this.orientationLock : null;
    } else {
      return this.convertShapeGrainToOrientationLock(container);
    }
  }
  /**
   * get the required grain rotation
   */
  getGrainRotation(container) {
    if (!valueSet(this.orientationLock))
      return null;
    if (!valueSet(container == null ? void 0 : container.grain))
      return null;
    if (this.isGroup())
      return this.orientationLock === "l" ? 0 : 1;
    if (this.orientationLock === (container == null ? void 0 : container.grain))
      return 0;
    return 1;
  }
  rotate(rot = null, container = null) {
    if (rot === null)
      rot = !this.rot;
    if (!this.canRotate(rot, container))
      return false;
    if (this.rot === rot)
      return true;
    [this.l, this.w] = [this.w, this.l];
    return true;
  }
  //rotates the shape if allowed
  setRotation(rot = null, container = null) {
    if (rot)
      rot = 1;
    else
      rot = 0;
    if (container && rot && !this.willItFit(container, rot))
      return false;
    return this.rotate(rot, container);
  }
  getBandingLength(key) {
    if (key === "x1" || key === "x2")
      return this.getShortSide();
    if (key === "y1" || key === "y2")
      return this.getLongSide();
  }
  /**
   * get all possible points where another shape can be placed - clockwise from top left (origin)
   * used by move mode and core calculations
   */
  getPlacementCoordinates(shape, container = null, offset = 0, placedShapes) {
    if (!container)
      throw new Error("no container is defined for getPlacementCoordinates");
    let coords = [];
    const topLeft = {
      x: this.x,
      y: this.y + this.w + offset
    };
    const rightBottom = {
      x: this.x + this.l + offset,
      y: this.y
    };
    if (container.cutType === "guillotine" || container.cutType === "beam") {
      coords = [rightBottom, topLeft];
    } else {
      const bottomLeft = {
        x: this.x,
        y: this.y - offset - shape.w
      };
      const leftBottom = {
        x: this.x - offset - shape.l,
        y: this.y
      };
      const topRight = {
        x: this.x + this.l - shape.l,
        y: this.y + this.w + offset
      };
      const bottomRight = {
        x: this.x + this.l - shape.l,
        y: this.y - offset - shape.w
      };
      const leftTop = {
        x: this.x - offset - shape.l,
        y: this.y + this.w - shape.w
      };
      const rightTop = {
        x: this.x + this.l + offset,
        y: this.y + this.w - shape.w
      };
      coords = [
        topLeft,
        bottomLeft,
        leftBottom,
        rightBottom,
        topRight,
        bottomRight,
        leftTop,
        rightTop
      ];
    }
    for (let i2 = coords.length; i2--; ) {
      shape.x = coords[i2].x;
      shape.y = coords[i2].y;
      for (let j = placedShapes.length; j--; ) {
        if (scoring.collision(shape, placedShapes[j], container)) {
          coords.splice(i2, 1);
          break;
        }
      }
    }
    coords = removeOutOfBoundsPoints(shape, container, coords);
    return coords;
  }
  getPerimeterCutVectors() {
    var _a;
    const offset = ((_a = this.stock) == null ? void 0 : _a.isStock()) ? this.stock.getBladeWidth() / 2 : null;
    const vectors = [
      //bottom
      {
        x1: this.x - offset,
        x2: this.x + this.l + offset,
        y1: this.y - offset,
        y2: this.y - offset,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + offset,
        x2: this.x + this.l + offset,
        y1: this.y - offset,
        y2: this.y + this.w + offset,
        type: "right"
      },
      //top
      {
        x1: this.x - offset,
        x2: this.x + this.l + offset,
        y1: this.y + this.w + offset,
        y2: this.y + this.w + offset,
        type: "top"
      },
      //left
      {
        x1: this.x - offset,
        x2: this.x - offset,
        y1: this.y - offset,
        y2: this.y + this.w + offset,
        type: "left"
      }
    ];
    return vectors;
  }
  getTrimmedDimensions() {
    if (this.trimmed)
      return {
        l: this.l,
        w: this.w
      };
    return {
      l: this.l - this.trim.x1 - this.trim.x2,
      w: this.w - this.trim.y1 - this.trim.y2
    };
  }
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(stock = null) {
    let perimeterCuts = [];
    stock = stock ? stock : this.stock;
    if (!stock)
      throw new Error("stock is required to create a cut");
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
    if (!this.stock)
      throw new Error("createOffset - stock not defined");
    const offset = {
      x: this.x - amount,
      y: this.y - amount,
      l: this.l + amount * 2,
      w: this.w + amount * 2
    };
    if (offset.x < 0) {
      offset.x = 0;
      offset.l -= amount;
    }
    if (offset.y < 0) {
      offset.y = 0;
      offset.w -= amount;
    }
    if (offset.x + offset.l > this.stock.l) {
      offset.l = this.stock.l - offset.x;
    }
    if (offset.y + offset.w > this.stock.w) {
      offset.w = this.stock.w - offset.y;
    }
    return offset;
  }
  setPositionToBestScore() {
    this.setRotation(this.bestScore.rot);
    this.x = this.bestScore.x;
    this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(container, rotation = null) {
    return willItFit(container, this, rotation);
  }
  clone(version2 = null) {
    const id = this.id.split(".");
    if (!version2) {
      version2 = id.pop();
      version2++;
    } else {
      id.pop();
    }
    id.push(version2);
    const newId = id.join(".");
    const data = deepClone(this);
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
}
class Segment extends Container {
  constructor(data) {
    var _a, _b;
    if (maths.lessThanOrEqualTo(data.w, 0) || maths.lessThanOrEqualTo(data.l, 0)) {
      throw new Error(`tried to create segment with zero / negative dimension - l: ${data.l}, w: ${data.w}`);
    }
    if (maths.lessThan(data.x, 0) || maths.lessThan(data.y, 0)) {
      throw new Error(`tried to create segment with a negative position - x: ${data == null ? void 0 : data.x}, y: ${data == null ? void 0 : data.y}`);
    }
    if (data == null ? void 0 : data.stock) {
      if (maths.greaterThan(data.x + data.l, data.stock.l) || maths.greaterThan(data.y + data.w, data.stock.w))
        throw new Error(`tried to create segment outside of the stock - x: ${data.x}, y: ${data.y}, l: ${data.l}, w: ${data.w}, sl: ${(_a = data == null ? void 0 : data.stock) == null ? void 0 : _a.l}, sw: ${(_b = data == null ? void 0 : data.stock) == null ? void 0 : _b.w}`);
    }
    data.preventAutoRotation = true;
    super(data);
    __publicField(this, "shapes");
    __publicField(this, "cuts");
    __publicField(this, "phase");
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
    delete this.trim;
    delete this.trimmed;
    this.shapes = valueSet(data == null ? void 0 : data.shapes) ? data.shapes : [];
    this.cuts = [];
    this.phase = valueSet(data == null ? void 0 : data.phase) ? data.phase : null;
    this.merged = valueSet(data == null ? void 0 : data.merged) ? data.merged : false;
    this.parent = valueSet(data == null ? void 0 : data.parent) ? data.parent : null;
    this.children = valueSet(data == null ? void 0 : data.children) ? data.children : [];
    this.siblings = valueSet(data == null ? void 0 : data.siblings) ? data.siblings : [];
    this.offcut = valueSet(data == null ? void 0 : data.offcut) ? data.offcut : false;
    this.segmentType = valueSet(data == null ? void 0 : data.segmentType) ? data.segmentType : null;
    this.placementOrder = null;
    this.flex = this.stock.flex;
    this.hasBeamTrim = valueSet(data == null ? void 0 : data.hasBeamTrim) ? data.hasBeamTrim : false;
  }
  //compress for saving / transfer
  compress() {
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
    delete this.siblings;
    delete this.parent;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((_a = this == null ? void 0 : this.stock) == null ? void 0 : _a.id);
    delete this.stock;
    delete this.trim;
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
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal || freeSelf || Function("return this")();
var Symbol$2 = root$1.Symbol;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var nativeObjectToString$1 = objectProto$5.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty$4.call(value2, symToStringTag$1), tag = value2[symToStringTag$1];
  try {
    value2[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$1] = tag;
    } else {
      delete value2[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var nativeObjectToString = objectProto$4.toString;
function objectToString(value2) {
  return nativeObjectToString.call(value2);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
}
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
}
function arrayMap(array2, iteratee) {
  var index = -1, length2 = array2 == null ? 0 : array2.length, result = Array(length2);
  while (++index < length2) {
    result[index] = iteratee(array2[index], index, array2);
  }
  return result;
}
var isArray = Array.isArray;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray(value2)) {
    return arrayMap(value2, baseToString) + "";
  }
  if (isSymbol(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result;
}
function isObject(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject(value2)) {
    return false;
  }
  var tag = baseGetTag(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value2) {
  if (!isObject(value2) || isMasked(value2)) {
    return false;
  }
  var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value2));
}
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function getNative(object2, key) {
  var value2 = getValue(object2, key);
  return baseIsNative(value2) ? value2 : void 0;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value2, length2) {
  var type = typeof value2;
  length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length2);
}
function baseAssignValue(object2, key, value2) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value2,
      "writable": true
    });
  } else {
    object2[key] = value2;
  }
}
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue(object2, key, value2) {
  var objValue = object2[key];
  if (!(hasOwnProperty$2.call(object2, key) && eq(objValue, value2)) || value2 === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value2);
  }
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value2, object2) {
  if (isArray(value2)) {
    return false;
  }
  var type = typeof value2;
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object2 != null && value2 in Object(object2);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED : value2;
  return this;
}
function Hash(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value2) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value2]);
  } else {
    data[index][1] = value2;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value2) {
  var data = getMapData(this, key), size2 = data.size;
  data.set(key, value2);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
function toString(value2) {
  return value2 == null ? "" : baseToString(value2);
}
function castPath(value2, object2) {
  if (isArray(value2)) {
    return value2;
  }
  return isKey(value2, object2) ? [value2] : stringToPath(toString(value2));
}
var INFINITY = 1 / 0;
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol(value2)) {
    return value2;
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
}
function baseGet(object2, path2) {
  path2 = castPath(path2, object2);
  var index = 0, length2 = path2.length;
  while (object2 != null && index < length2) {
    object2 = object2[toKey(path2[index++])];
  }
  return index && index == length2 ? object2 : void 0;
}
function get(object2, path2, defaultValue) {
  var result = object2 == null ? void 0 : baseGet(object2, path2);
  return result === void 0 ? defaultValue : result;
}
function baseSet(object2, path2, value2, customizer) {
  if (!isObject(object2)) {
    return object2;
  }
  path2 = castPath(path2, object2);
  var index = -1, length2 = path2.length, lastIndex = length2 - 1, nested = object2;
  while (nested != null && ++index < length2) {
    var key = toKey(path2[index]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object2;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path2[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
function set(object2, path2, value2) {
  return object2 == null ? object2 : baseSet(object2, path2, value2);
}
var xhtml = "http://www.w3.org/1999/xhtml";
const namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace$1(name) {
  var prefix = name += "", i2 = prefix.indexOf(":");
  if (i2 >= 0 && (prefix = name.slice(0, i2)) !== "xmlns")
    name = name.slice(i2 + 1);
  return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator(name) {
  var fullname = namespace$1(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
function none() {
}
function selector(selector2) {
  return selector2 == null ? none : function() {
    return this.querySelector(selector2);
  };
}
function selection_select(select2) {
  if (typeof select2 !== "function")
    select2 = selector(select2);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i2 = 0; i2 < n; ++i2) {
      if ((node = group[i2]) && (subnode = select2.call(node, node.__data__, i2, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i2] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
function empty() {
  return [];
}
function selectorAll(selector2) {
  return selector2 == null ? empty : function() {
    return this.querySelectorAll(selector2);
  };
}
function arrayAll(select2) {
  return function() {
    return array(select2.apply(this, arguments));
  };
}
function selection_selectAll(select2) {
  if (typeof select2 === "function")
    select2 = arrayAll(select2);
  else
    select2 = selectorAll(select2);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i2 = 0; i2 < n; ++i2) {
      if (node = group[i2]) {
        subgroups.push(select2.call(node, node.__data__, i2, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}
function matcher(selector2) {
  return function() {
    return this.matches(selector2);
  };
}
function childMatcher(selector2) {
  return function(node) {
    return node.matches(selector2);
  };
}
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selection_selectChild(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selection_selectChildren(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
function selection_filter(match) {
  if (typeof match !== "function")
    match = matcher(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i2 = 0; i2 < n; ++i2) {
      if ((node = group[i2]) && match.call(node, node.__data__, i2, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}
function sparse(update) {
  return new Array(update.length);
}
function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector2) {
    return this._parent.querySelector(selector2);
  },
  querySelectorAll: function(selector2) {
    return this._parent.querySelectorAll(selector2);
  }
};
function constant$2(x) {
  return function() {
    return x;
  };
}
function bindIndex(parent, group, enter, update, exit, data) {
  var i2 = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i2 < dataLength; ++i2) {
    if (node = group[i2]) {
      node.__data__ = data[i2];
      update[i2] = node;
    } else {
      enter[i2] = new EnterNode(parent, data[i2]);
    }
  }
  for (; i2 < groupLength; ++i2) {
    if (node = group[i2]) {
      exit[i2] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i2, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i2 = 0; i2 < groupLength; ++i2) {
    if (node = group[i2]) {
      keyValues[i2] = keyValue = key.call(node, node.__data__, i2, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i2] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i2 = 0; i2 < dataLength; ++i2) {
    keyValue = key.call(parent, data[i2], i2, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i2] = node;
      node.__data__ = data[i2];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i2] = new EnterNode(parent, data[i2]);
    }
  }
  for (i2 = 0; i2 < groupLength; ++i2) {
    if ((node = group[i2]) && nodeByKeyValue.get(keyValues[i2]) === node) {
      exit[i2] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function selection_data(value2, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value2 !== "function")
    value2 = constant$2(value2);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value2.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}
function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(context) {
  var selection = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i2 = 0; i2 < n; ++i2) {
      if (node = group0[i2] || group1[i2]) {
        merge[i2] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}
function selection_order() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i2 = group.length - 1, next = group[i2], node; --i2 >= 0; ) {
      if (node = group[i2]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}
function selection_sort(compare) {
  if (!compare)
    compare = ascending$1;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i2 = 0; i2 < n; ++i2) {
      if (node = group[i2]) {
        sortgroup[i2] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}
function selection_nodes() {
  return Array.from(this);
}
function selection_node() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i2 = 0, n = group.length; i2 < n; ++i2) {
      var node = group[i2];
      if (node)
        return node;
    }
  }
  return null;
}
function selection_size() {
  let size2 = 0;
  for (const node of this)
    ++size2;
  return size2;
}
function selection_empty() {
  return !this.node();
}
function selection_each(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i2 = 0, n = group.length, node; i2 < n; ++i2) {
      if (node = group[i2])
        callback.call(node, node.__data__, i2, group);
    }
  }
  return this;
}
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value2) {
  return function() {
    this.setAttribute(name, value2);
  };
}
function attrConstantNS(fullname, value2) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value2);
  };
}
function attrFunction(name, value2) {
  return function() {
    var v = value2.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value2) {
  return function() {
    var v = value2.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function selection_attr(name, value2) {
  var fullname = namespace$1(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value2 == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value2 === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value2));
}
function defaultView(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value2, priority) {
  return function() {
    this.style.setProperty(name, value2, priority);
  };
}
function styleFunction(name, value2, priority) {
  return function() {
    var v = value2.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function selection_style(name, value2, priority) {
  return arguments.length > 1 ? this.each((value2 == null ? styleRemove : typeof value2 === "function" ? styleFunction : styleConstant)(name, value2, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value2) {
  return function() {
    this[name] = value2;
  };
}
function propertyFunction(name, value2) {
  return function() {
    var v = value2.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function selection_property(name, value2) {
  return arguments.length > 1 ? this.each((value2 == null ? propertyRemove : typeof value2 === "function" ? propertyFunction : propertyConstant)(name, value2)) : this.node()[name];
}
function classArray$1(string2) {
  return string2.trim().split(/^|\s+/);
}
function classList$1(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray$1(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 >= 0) {
      this._names.splice(i2, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList$1(node), i2 = -1, n = names.length;
  while (++i2 < n)
    list.add(names[i2]);
}
function classedRemove(node, names) {
  var list = classList$1(node), i2 = -1, n = names.length;
  while (++i2 < n)
    list.remove(names[i2]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value2) {
  return function() {
    (value2.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function selection_classed(name, value2) {
  var names = classArray$1(name + "");
  if (arguments.length < 2) {
    var list = classList$1(this.node()), i2 = -1, n = names.length;
    while (++i2 < n)
      if (!list.contains(names[i2]))
        return false;
    return true;
  }
  return this.each((typeof value2 === "function" ? classedFunction : value2 ? classedTrue : classedFalse)(names, value2));
}
function textRemove() {
  this.textContent = "";
}
function textConstant(value2) {
  return function() {
    this.textContent = value2;
  };
}
function textFunction(value2) {
  return function() {
    var v = value2.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function selection_text(value2) {
  return arguments.length ? this.each(value2 == null ? textRemove : (typeof value2 === "function" ? textFunction : textConstant)(value2)) : this.node().textContent;
}
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value2) {
  return function() {
    this.innerHTML = value2;
  };
}
function htmlFunction(value2) {
  return function() {
    var v = value2.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function selection_html(value2) {
  return arguments.length ? this.each(value2 == null ? htmlRemove : (typeof value2 === "function" ? htmlFunction : htmlConstant)(value2)) : this.node().innerHTML;
}
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function selection_raise() {
  return this.each(raise);
}
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
  return this.each(lower);
}
function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}
function constantNull() {
  return null;
}
function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select2.apply(this, arguments) || null);
  });
}
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function selection_remove() {
  return this.each(remove);
}
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value2) {
  return arguments.length ? this.property("__data__", value2) : this.node().__data__;
}
function contextListener(listener3) {
  return function(event) {
    listener3.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i2 = t.indexOf(".");
    if (i2 >= 0)
      name = t.slice(i2 + 1), t = t.slice(0, i2);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on2 = this.__on;
    if (!on2)
      return;
    for (var j = 0, i2 = -1, m = on2.length, o; j < m; ++j) {
      if (o = on2[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on2[++i2] = o;
      }
    }
    if (++i2)
      on2.length = i2;
    else
      delete this.__on;
  };
}
function onAdd(typename, value2, options) {
  return function() {
    var on2 = this.__on, o, listener3 = contextListener(value2);
    if (on2)
      for (var j = 0, m = on2.length; j < m; ++j) {
        if ((o = on2[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener3, o.options = options);
          o.value = value2;
          return;
        }
      }
    this.addEventListener(typename.type, listener3, options);
    o = { type: typename.type, name: typename.name, value: value2, listener: listener3, options };
    if (!on2)
      this.__on = [o];
    else
      on2.push(o);
  };
}
function selection_on(typename, value2, options) {
  var typenames = parseTypenames(typename + ""), i2, n = typenames.length, t;
  if (arguments.length < 2) {
    var on2 = this.node().__on;
    if (on2)
      for (var j = 0, m = on2.length, o; j < m; ++j) {
        for (i2 = 0, o = on2[j]; i2 < n; ++i2) {
          if ((t = typenames[i2]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on2 = value2 ? onAdd : onRemove;
  for (i2 = 0; i2 < n; ++i2)
    this.each(on2(typenames[i2], value2, options));
  return this;
}
function dispatchEvent(node, type, params) {
  var window2 = defaultView(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function selection_dispatch(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i2 = 0, n = group.length, node; i2 < n; ++i2) {
      if (node = group[i2])
        yield node;
    }
  }
}
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection_selection() {
  return this;
}
Selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};
function select(selector2) {
  return typeof selector2 === "string" ? new Selection([[document.querySelector(selector2)]], [document.documentElement]) : new Selection([[selector2]], root);
}
function selectAll(selector2) {
  return typeof selector2 === "string" ? new Selection([document.querySelectorAll(selector2)], [document.documentElement]) : new Selection([array(selector2)], root);
}
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d2, x) => ascending(f(d2), x);
    delta = (d2, x) => f(d2) - x;
  } else {
    compare1 = f === ascending || f === descending ? f : zero$1;
    compare2 = f;
    delta = f;
  }
  function left2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right2(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center2(a, x, lo = 0, hi = a.length) {
    const i2 = left2(a, x, lo, hi - 1);
    return i2 > lo && delta(a[i2 - 1], x) > -delta(a[i2], x) ? i2 - 1 : i2;
  }
  return { left: left2, center: center2, right: right2 };
}
function zero$1() {
  return 0;
}
function number$2(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$2).center;
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc2;
  if (power < 0) {
    inc2 = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc2);
    i2 = Math.round(stop * inc2);
    if (i1 / inc2 < start)
      ++i1;
    if (i2 / inc2 > stop)
      --i2;
    inc2 = -inc2;
  } else {
    inc2 = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc2);
    i2 = Math.round(stop / inc2);
    if (i1 * inc2 < start)
      ++i1;
    if (i2 * inc2 > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start, stop, count * 2);
  return [i1, i2, inc2];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0))
    return [];
  if (start === stop)
    return [start];
  const reverse = stop < start, [i1, i2, inc2] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc2 < 0)
      for (let i3 = 0; i3 < n; ++i3)
        ticks2[i3] = (i2 - i3) / -inc2;
    else
      for (let i3 = 0; i3 < n; ++i3)
        ticks2[i3] = (i2 - i3) * inc2;
  } else {
    if (inc2 < 0)
      for (let i3 = 0; i3 < n; ++i3)
        ticks2[i3] = (i1 + i3) / -inc2;
    else
      for (let i3 = 0; i3 < n; ++i3)
        ticks2[i3] = (i1 + i3) * inc2;
  }
  return ticks2;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc2 = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc2 < 0 ? 1 / -inc2 : inc2);
}
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value2) {
  return Math.max(0, Math.min(255, Math.round(value2) || 0));
}
function hex(value2) {
  value2 = clampi(value2);
  return (value2 < 16 ? "0" : "") + value2.toString(16);
}
function hsla(h2, s, l, a) {
  if (a <= 0)
    h2 = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h2 = s = NaN;
  else if (s <= 0)
    h2 = NaN;
  return new Hsl(h2, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h2 = NaN, s = max2 - min2, l = (max2 + min2) / 2;
  if (s) {
    if (r === max2)
      h2 = (g - b) / s + (g < b) * 6;
    else if (g === max2)
      h2 = (b - r) / s + 2;
    else
      h2 = (r - g) / s + 4;
    s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h2 *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h2;
  }
  return new Hsl(h2, s, l, o.opacity);
}
function hsl(h2, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h2, s, l, opacity) {
  this.h = +h2;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m2),
      hsl2rgb(h2, m1, m2),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value2) {
  value2 = (value2 || 0) % 360;
  return value2 < 0 ? value2 + 360 : value2;
}
function clampt(value2) {
  return Math.max(0, Math.min(1, value2 || 0));
}
function hsl2rgb(h2, m1, m2) {
  return (h2 < 60 ? m1 + (m2 - m1) * h2 / 60 : h2 < 180 ? m2 : h2 < 240 ? m1 + (m2 - m1) * (240 - h2) / 60 : m1) * 255;
}
const constant$1 = (x) => () => x;
function linear$1(a, d2) {
  return function(t) {
    return a + t * d2;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d2 = b - a;
  return d2 ? linear$1(a, d2) : constant$1(isNaN(a) ? b : a);
}
const rgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start, end3) {
    var r = color2((start = rgb$1(start)).r, (end3 = rgb$1(end3)).r), g = color2(start.g, end3.g), b = color2(start.b, end3.b), opacity = nogamma(start.opacity, end3.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i2;
  return function(t) {
    for (i2 = 0; i2 < n; ++i2)
      c[i2] = a[i2] * (1 - t) + b[i2] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i2;
  for (i2 = 0; i2 < na; ++i2)
    x[i2] = interpolate(a[i2], b[i2]);
  for (; i2 < nb; ++i2)
    c[i2] = b[i2];
  return function(t) {
    for (i2 = 0; i2 < na; ++i2)
      c[i2] = x[i2](t);
    return c;
  };
}
function date(a, b) {
  var d2 = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d2.setTime(a * (1 - t) + b * t), d2;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i2 = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i2[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i2)
      c[k] = i2[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i2 = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i2])
        s[i2] += bs;
      else
        s[++i2] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i2])
        s[i2] += bm;
      else
        s[++i2] = bm;
    } else {
      s[++i2] = null;
      q.push({ i: i2, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i2])
      s[i2] += bs;
    else
      s[++i2] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i3 = 0, o; i3 < b; ++i3)
      s[(o = q[i3]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
function constants(x) {
  return function() {
    return x;
  };
}
function number$1(x) {
  return +x;
}
var unit = [0, 1];
function identity$2(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range, interpolate2) {
  var j = Math.min(domain.length, range.length) - 1, d2 = new Array(j), r = new Array(j), i2 = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }
  while (++i2 < j) {
    d2[i2] = normalize(domain[i2], domain[i2 + 1]);
    r[i2] = interpolate2(range[i2], range[i2 + 1]);
  }
  return function(x) {
    var i3 = bisectRight(domain, x, 1, j) - 1;
    return r[i3](d2[i3](x));
  };
}
function copy$1(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer$1() {
  var domain = unit, range = unit, interpolate$1 = interpolate, transform, untransform, unknown, clamp = identity$2, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity$2)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };
  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer$1()(identity$2, identity$2);
}
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p2) {
  if ((i2 = (x = p2 ? x.toExponential(p2 - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i2, coefficient = x.slice(0, i2);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i2 + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value2, width) {
    var i2 = value2.length, t = [], j = 0, g = grouping[0], length2 = 0;
    while (i2 > 0 && g > 0) {
      if (length2 + g + 1 > width)
        g = Math.max(1, width - length2);
      t.push(value2.substring(i2 -= g, i2 + g));
      if ((length2 += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value2) {
    return value2.replace(/[0-9]/g, function(i2) {
      return numerals[+i2];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i2 = 1, i0 = -1, i1; i2 < n; ++i2) {
      switch (s[i2]) {
        case ".":
          i0 = i1 = i2;
          break;
        case "0":
          if (i0 === 0)
            i0 = i2;
          i1 = i2;
          break;
        default:
          if (!+s[i2])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p2) {
  var d2 = formatDecimalParts(x, p2);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1], i2 = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i2 === n ? coefficient : i2 > n ? coefficient + new Array(i2 - n + 1).join("0") : i2 > 0 ? coefficient.slice(0, i2) + "." + coefficient.slice(i2) : "0." + new Array(1 - i2).join("0") + formatDecimalParts(x, Math.max(0, p2 + i2 - 1))[0];
}
function formatRounded(x, p2) {
  var d2 = formatDecimalParts(x, p2);
  if (!d2)
    return x + "";
  var coefficient = d2[0], exponent2 = d2[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x, p2) => (x * 100).toFixed(p2),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p2) => x.toExponential(p2),
  "f": (x, p2) => x.toFixed(p2),
  "g": (x, p2) => x.toPrecision(p2),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p2) => formatRounded(x * 100, p2),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity$1(x) {
  return x;
}
var map = Array.prototype.map, prefixes$1 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "−" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value2) {
      var valuePrefix = prefix, valueSuffix = suffix, i2, n, c;
      if (type === "c") {
        valueSuffix = formatType(value2) + valueSuffix;
        value2 = "";
      } else {
        value2 = +value2;
        var valueNegative = value2 < 0 || 1 / value2 < 0;
        value2 = isNaN(value2) ? nan : formatType(Math.abs(value2), precision);
        if (trim)
          value2 = formatTrim(value2);
        if (valueNegative && +value2 === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes$1[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i2 = -1, n = value2.length;
          while (++i2 < n) {
            if (c = value2.charCodeAt(i2), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value2.slice(i2 + 1) : value2.slice(i2)) + valueSuffix;
              value2 = value2.slice(0, i2);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value2 = group(value2, Infinity);
      var length2 = valuePrefix.length + value2.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill) : "";
      if (comma && zero2)
        value2 = group(padding + value2, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value2 = valuePrefix + value2 + valueSuffix + padding;
          break;
        case "=":
          value2 = valuePrefix + padding + value2 + valueSuffix;
          break;
        case "^":
          value2 = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value2 + valueSuffix + padding.slice(length2);
          break;
        default:
          value2 = padding + valuePrefix + value2 + valueSuffix;
          break;
      }
      return numerals(value2);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value2) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value2) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes$1[8 + e / 3];
    return function(value3) {
      return f(k * value3) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value2) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value2) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max2) {
  step = Math.abs(step), max2 = Math.abs(max2) - step;
  return Math.max(0, exponent(max2) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value2 = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value2)))
        specifier.precision = precision;
      return formatPrefix(specifier, value2);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d2 = domain();
    return ticks(d2[0], d2[d2.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d2 = domain();
    return tickFormat(d2[0], d2[d2.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d2 = domain();
    var i0 = 0;
    var i1 = d2.length - 1;
    var start = d2[i0];
    var stop = d2[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d2[i0] = start;
        d2[i1] = stop;
        return domain(d2);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy$1(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function transformer() {
  var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = identity$2, clamp = false, unknown;
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range(interpolate2) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate2(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range(interpolate);
  scale.rangeRound = range(interpolateRound);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}
function copy(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer()(identity$2));
  scale.copy = function() {
    return copy(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function identity(x) {
  return x;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon$2 = 1e-6;
function translateX(x) {
  return "translate(" + x + ",0)";
}
function translateY(y) {
  return "translate(0," + y + ")";
}
function number(scale) {
  return (d2) => +scale(d2);
}
function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return (d2) => +scale(d2) + offset;
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number)(scale.copy(), offset), selection = context.selection ? context.selection() : context, path2 = selection.selectAll(".domain").data([null]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon$2).attr("transform", function(d2) {
        return isFinite(d2 = position(d2)) ? transform(d2 + offset) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon$2).attr("transform", function(d2) {
        var p2 = this.parentNode.__axis;
        return transform((p2 && isFinite(p2 = p2(d2)) ? p2 : position(d2)) + offset);
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d2) {
      return transform(position(d2) + offset);
    });
    line.attr(x + "2", k * tickSizeInner);
    text.attr(x, k * spacing).text(format2);
    selection.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = Array.from(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  axis2.offset = function(_) {
    return arguments.length ? (offset = +_, axis2) : offset;
  };
  return axis2;
}
function axisTop(scale) {
  return axis(top, scale);
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}
const pi$1 = Math.PI, tau$1 = 2 * pi$1, epsilon$1 = 1e-6, tauEpsilon = tau$1 - epsilon$1;
function append(strings) {
  this._ += strings[0];
  for (let i2 = 1, n = strings.length; i2 < n; ++i2) {
    this._ += arguments[i2] + strings[i2];
  }
}
function appendRound(digits) {
  let d2 = Math.floor(digits);
  if (!(d2 >= 0))
    throw new Error(`invalid digits: ${digits}`);
  if (d2 > 15)
    return append;
  const k = 10 ** d2;
  return function(strings) {
    this._ += strings[0];
    for (let i2 = 1, n = strings.length; i2 < n; ++i2) {
      this._ += Math.round(arguments[i2] * k) / k + strings[i2];
    }
  };
}
class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon$1))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._append`L${x0},${y0}`;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau$1 + tau$1;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon$1) {
      this._append`A${r},${r},0,${+(da >= pi$1)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w2, h2) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w2 = +w2}v${+h2}h${-w2}Z`;
  }
  toString() {
    return this._;
  }
}
function path() {
  return new Path();
}
path.prototype = Path.prototype;
function constant(x) {
  return function constant2() {
    return x;
  };
}
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length)
      return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d2 = Math.floor(_);
      if (!(d2 >= 0))
        throw new RangeError(`invalid digits: ${_}`);
      digits = d2;
    }
    return shape;
  };
  return () => new Path(digits);
}
function arcInnerRadius(d2) {
  return d2.innerRadius;
}
function arcOuterRadius(d2) {
  return d2.outerRadius;
}
function arcStartAngle(d2) {
  return d2.startAngle;
}
function arcEndAngle(d2) {
  return d2.endAngle;
}
function arcPadAngle(d2) {
  return d2 && d2.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon)
    return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d4 = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d4) / d2, cy0 = (-D * dx - dy * d4) / d2, cx1 = (D * dy + dx * d4) / d2, cy1 = (-D * dx + dy * d4) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc2);
  function arc2() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path2();
    if (r1 < r0)
      r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon))
      context.moveTo(0, 0);
    else if (da > tau - epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
      if (rp > epsilon) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon)
          p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc1 < rc)
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon) || !(da0 > epsilon))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc0 < rc)
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc2.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };
  arc2.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : innerRadius;
  };
  arc2.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : outerRadius;
  };
  arc2.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc2) : cornerRadius;
  };
  arc2.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc2) : padRadius;
  };
  arc2.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc2) : startAngle;
  };
  arc2.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc2) : endAngle;
  };
  arc2.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc2) : padAngle;
  };
  arc2.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc2) : context;
  };
  return arc2;
}
const circle = {
  draw(context, size2) {
    const r = sqrt(size2 / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};
const symbolSquare = {
  draw(context, size2) {
    const w2 = sqrt(size2);
    const x = -w2 / 2;
    context.rect(x, x, w2, w2);
  }
};
const sqrt3 = sqrt(3);
const symbolTriangle = {
  draw(context, size2) {
    const y = -sqrt(size2 / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};
function Symbol$1(type, size2) {
  let context = null, path2 = withPath(symbol);
  type = typeof type === "function" ? type : constant(type || circle);
  size2 = typeof size2 === "function" ? size2 : constant(size2 === void 0 ? 64 : +size2);
  function symbol() {
    let buffer;
    if (!context)
      context = buffer = path2();
    type.apply(this, arguments).draw(context, +size2.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size2 = typeof _ === "function" ? _ : constant(+_), symbol) : size2;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}
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
function isHexColor(hex2) {
  return typeof hex2 === "string" && hex2.length === 6 && !isNaN(Number("0x" + hex2.replace("#", "")));
}
class Vis {
  constructor({
    elementID,
    env = "production",
    main = true,
    units = "decimal",
    saw = null,
    app: app2 = false,
    embed = false,
    height = 0,
    width = 0,
    decimalPlaces: decimalPlaces2 = 2,
    flipY = false,
    flipX = false,
    colors = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    },
    options = {
      disableClick: false
    },
    vueComponent
  }) {
    __publicField(this, "env");
    __publicField(this, "main");
    //is this the main vis or not
    __publicField(this, "units", "decimal");
    __publicField(this, "saw");
    __publicField(this, "stockType");
    __publicField(this, "numUniqueShapes");
    __publicField(this, "app");
    __publicField(this, "embed");
    __publicField(this, "height");
    __publicField(this, "width");
    __publicField(this, "device");
    __publicField(this, "vueComponent");
    __publicField(this, "elWidth");
    __publicField(this, "elHeight");
    __publicField(this, "w");
    __publicField(this, "h");
    __publicField(this, "padding");
    __publicField(this, "mobileBreakpoint");
    //scales
    __publicField(this, "xScale", d3.scaleLinear());
    __publicField(this, "yScale", d3.scaleLinear());
    __publicField(this, "yPositionScale", d3.scaleLinear());
    __publicField(this, "xPositionScale", d3.scaleLinear());
    __publicField(this, "yAxisScale", d3.scaleLinear());
    __publicField(this, "measurementScale", d3.scaleLinear());
    __publicField(this, "xAxis");
    __publicField(this, "yAxis");
    __publicField(this, "shapeXAxis");
    __publicField(this, "shapeYAxis");
    __publicField(this, "cutMeasurementXAxes");
    __publicField(this, "cutMeasurementYAxes");
    __publicField(this, "axisSpacing");
    __publicField(this, "flipY");
    __publicField(this, "flipX");
    __publicField(this, "colors");
    __publicField(this, "options");
    __publicField(this, "decimalPlaces");
    __publicField(this, "moveMode");
    __publicField(this, "moveRotation");
    __publicField(this, "moving");
    __publicField(this, "shape");
    __publicField(this, "shapeColorScale");
    __publicField(this, "hasTouch");
    __publicField(this, "formatDp");
    __publicField(this, "highlightguillotine");
    __publicField(this, "elementID");
    //the id of the element to draw the vis in
    __publicField(this, "el");
    __publicField(this, "htmlEl");
    __publicField(this, "svgCanvas");
    __publicField(this, "axisGroup");
    __publicField(this, "stockGroup");
    __publicField(this, "stockWrappers");
    __publicField(this, "stock");
    __publicField(this, "shapeGroup");
    __publicField(this, "shapeWrappers");
    __publicField(this, "shapes");
    __publicField(this, "shapeIDText");
    __publicField(this, "shapeNameText");
    __publicField(this, "shapeLengthText");
    __publicField(this, "shapeWidthText");
    __publicField(this, "bandingGroup");
    __publicField(this, "bandingWrappers");
    __publicField(this, "banding");
    __publicField(this, "segmentGroup");
    __publicField(this, "segments");
    __publicField(this, "segment");
    __publicField(this, "positionGroup");
    __publicField(this, "position");
    __publicField(this, "dotGroup");
    __publicField(this, "dot");
    __publicField(this, "cutGroup");
    __publicField(this, "cuts");
    __publicField(this, "cut");
    var _a;
    if (!elementID)
      throw new Error("elementID is required");
    this.el = d3.select(elementID);
    if (this.el === null)
      return;
    const htmlElement = this.el.node();
    if (htmlElement === null)
      return;
    this.htmlEl = htmlElement;
    this.vueComponent = vueComponent;
    this.env = ((_a = vueComponent == null ? void 0 : vueComponent.gs) == null ? void 0 : _a.env) === "development" ? "development" : "production";
    this.app = app2 ? app2 : false;
    this.embed = embed ? embed : false;
    this.height = height;
    this.width = width;
    this.device = app2 ? "app" : "desktop";
    this.elWidth = this.htmlEl.offsetWidth;
    this.elHeight = this.htmlEl.offsetHeight;
    this.w = 0;
    this.h = 0;
    this.padding = 0;
    this.mobileBreakpoint = 450;
    this.main = main;
    this.saw = saw;
    this.cutMeasurementXAxes = [];
    this.cutMeasurementYAxes = [];
    this.axisSpacing = 16;
    this.flipY = flipY;
    this.flipX = flipX;
    colors = {
      ...colors
    };
    for (const [key, value2] of Object.entries(colors)) {
      if (value2)
        colors[key] = value2.replace("#", "");
    }
    this.colors = {
      partA: isHexColor(colors == null ? void 0 : colors.partA) ? rgb$1("#" + colors.partA) : rgb$1("#1d9bc4"),
      partB: isHexColor(colors == null ? void 0 : colors.partB) ? rgb$1("#" + colors.partB) : rgb$1("#127da1"),
      partHover: isHexColor(colors == null ? void 0 : colors.partHover) ? rgb$1("#" + colors.partHover) : rgb$1("#29c778"),
      partSelected: isHexColor(colors == null ? void 0 : colors.partSelected) ? rgb$1("#" + colors.partSelected) : rgb$1("#1bc319"),
      stock: isHexColor(colors == null ? void 0 : colors.stock) ? rgb$1("#" + colors.stock) : rgb$1("#ffd166"),
      text: isHexColor(colors == null ? void 0 : colors.text) ? rgb$1("#" + colors.text) : rgb$1("#ffffff")
    };
    this.shapeColorScale = d3.scaleSequential([
      this.colors.partA,
      this.colors.partB
    ]);
    this.env = env;
    this.moveMode = false;
    this.moving = false;
    this.moveRotation = false;
    this.units = units;
    this.decimalPlaces = decimalPlaces2;
    this.hasTouch = false;
    this.options = options;
    this.init();
  }
  /**
   * sets up the various wrappers - only needs to be called once
   * the z index is set by the order drawn
   */
  init() {
    if (!this.el)
      return false;
    if (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces))
      this.decimalPlaces = 2;
    this.formatDp = d3.format(`.${this.decimalPlaces}f`);
    if (!this.svgCanvas) {
      const svgElement = this.htmlEl.querySelector("svg");
      if (svgElement === null) {
        const svg = this.el.append("svg").attr("class", "vis");
        if (svg === null)
          return;
        svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
        svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
        svg.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1");
        this.svgCanvas = svg;
      }
      this.axisGroup = this.svgCanvas.append("g").attr("class", "axis-group");
      this.stockGroup = this.svgCanvas.append("g").attr("class", "stock-group");
      this.shapeGroup = this.svgCanvas.append("g").attr("class", "shapes");
      this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group");
      this.segmentGroup = this.svgCanvas.append("g").attr("class", "segments").attr("display", "none");
      this.positionGroup = this.svgCanvas.append("g").attr("class", "positions");
      this.dotGroup = this.svgCanvas.append("g").attr("class", "dots");
      this.cutGroup = this.svgCanvas.append("g").attr("class", "cuts");
    }
    if (this.elWidth > 0)
      this.updateSize(true);
    this.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
  trimNameToFit(shapes, vis) {
    function trim(shape, index, items) {
      const item = items[index];
      const self2 = d3.select(item);
      self2.text(shape.name);
      let text = self2.text();
      const node = self2.node();
      if (!node)
        return;
      let textLength = node.getComputedTextLength();
      const space = this.getWidthAttribute(shape) - 20;
      while (textLength > space && text.length > 0) {
        text = text.slice(0, -1);
        self2.text(text.length ? text + "..." : "");
        textLength = self2.node().getComputedTextLength();
      }
    }
    shapes.each(trim.bind(vis));
  }
  getShapeColor(shape) {
    if (this.env === "development") {
      if (shape.addedAsGroup !== false) {
        return rgb$1(53, 186, 20);
      }
    }
    return this.shapeColorScale(shape.parentID - 1);
  }
  updateDecimalPlaces(value2) {
    this.decimalPlaces = value2;
    this.formatDp = d3.format(`.${value2}f`);
  }
  setDevice() {
    if (!this.htmlEl || this.htmlEl.style.display === "none")
      return;
    if (!this.htmlEl.offsetWidth)
      return;
    this.elWidth = this.htmlEl.offsetWidth;
    this.elHeight = this.htmlEl.offsetHeight;
    if (this.elWidth === 0)
      return false;
    if (!this.main) {
      this.padding = 0;
    } else {
      if (this.elWidth <= this.mobileBreakpoint || this.app) {
        this.device = "mobile";
        this.padding = 0;
      } else {
        this.device = "desktop";
        this.padding = 50;
      }
    }
    this.w = this.elWidth;
  }
  //find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const stockList = getData.call(this.vueComponent, ["stockList"]);
    if (!(stockList == null ? void 0 : stockList.length))
      return [null, null];
    const longestStock = stockList.reduce(
      (prev2, current) => prev2.l > current.l ? prev2 : current
    );
    const widestStock = stockList.reduce(
      (prev2, current) => prev2.w > current.w ? prev2 : current
    );
    return [longestStock, widestStock];
  }
  debounce(func, wait, immediate = false) {
    let timeout;
    return (...args) => {
      return new Promise((resolve2) => {
        const later = () => {
          timeout = null;
          if (!immediate) {
            resolve2(func.apply(this, args));
          }
        };
        clearTimeout(timeout);
        if (immediate) {
          const callNow = !timeout;
          if (callNow)
            resolve2(func.apply(this, args));
        }
        timeout = setTimeout(later, wait);
      });
    };
  }
  updateSize(immediate = false) {
    return this.debounce(this._updateSize.bind(this), 10, immediate)();
  }
  _updateSize() {
    if (!this.htmlEl || this.htmlEl.style.display === "none")
      return;
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent) {
      this.vueComponent.suppressResizeObserver = true;
    }
    const stockList = getData.call(this.vueComponent, ["stockList"]);
    const shapeList = getData.call(this.vueComponent, ["shapeList"]);
    if (!(stockList == null ? void 0 : stockList.length) || !(shapeList == null ? void 0 : shapeList.length))
      return false;
    this.setDevice();
    const [longestStock, widestStock] = this.findLargestStockDimensions();
    if (!(longestStock == null ? void 0 : longestStock.l) || !(widestStock == null ? void 0 : widestStock.w))
      return false;
    if (widestStock && longestStock) {
      this.w = this.elWidth;
      const aspectRatio = longestStock.w / longestStock.l;
      this.xScale.domain([0, longestStock.l]).range([this.padding, this.w - this.padding]);
      if (aspectRatio < 0.15) {
        this.h = this.htmlEl.clientWidth * 0.15 + this.padding * 2;
      } else {
        this.h = this.xScale(longestStock.getShortSide()) + this.padding;
      }
      this.yScale.domain([0, widestStock.w]).range([this.padding, this.h - this.padding]);
      this.yAxisScale.domain(this.flipY ? [0, widestStock.w] : [widestStock.w, 0]).range([this.padding, this.h - this.padding]);
      this.yPositionScale.domain([0, widestStock.w]).range(
        this.flipY ? [this.padding, this.h - this.padding] : [this.h - this.padding, this.padding]
      );
      if (aspectRatio > 2) {
        this.w = this.htmlEl.clientWidth / aspectRatio + this.padding * 2;
        this.xScale.domain([0, longestStock.l]).range([this.padding, this.w - this.padding]);
        this.h = this.xScale(longestStock.getShortSide()) + this.padding;
      }
      this.xPositionScale.domain([0, longestStock.l]).range(
        this.flipX ? [this.w - this.padding, this.padding] : [this.padding, this.w - this.padding]
      );
      this.measurementScale.domain([0, longestStock.l]).range([0, this.w - this.padding * 2]);
      if (this.w > 0 && this.h > 0) {
        if (aspectRatio > 2)
          this.el.style("width", this.w + "px");
        else
          this.el.style("width", "");
        this.el.style("height", this.h + "px");
      }
    }
    this.refreshStock();
    this.refreshShapes();
  }
  refreshStock() {
    const stockList = getData.call(this.vueComponent, ["stockList"]);
    if (!(stockList == null ? void 0 : stockList.length))
      return false;
    const activeStock = getData.call(this.vueComponent, ["activeStock"]);
    this.initStock(activeStock);
    this.resetCuts();
    const activeCuts = getData.call(this.vueComponent, ["activeCuts"]);
    this.initCuts(activeCuts);
    this.resetSegments();
    const activeSegments = getData.call(this.vueComponent, ["activeSegments"]);
    this.initSegments(activeSegments);
    this.resetPositions();
    if (typeof this.vueComponent.toggleSegments === "function")
      this.vueComponent.toggleSegments(false);
  }
  refreshShapes() {
    const shapeList = getData.call(this.vueComponent, ["shapeList"]);
    if (!(shapeList == null ? void 0 : shapeList.length))
      return false;
    this.resetPositions();
    const activeShapes = getData.call(this.vueComponent, ["activeShapes"]);
    this.initShapes(activeShapes, this.numUniqueShapes, false);
  }
  //init or update the stock
  initStock(thisStock) {
    this.resetStock();
    if (!thisStock || !(thisStock == null ? void 0 : thisStock.w) || !(thisStock == null ? void 0 : thisStock.l) || !this.elWidth)
      return false;
    this.stockType = thisStock.type;
    let stock;
    const [longestStock, widestStock] = this.findLargestStockDimensions();
    if (!(longestStock == null ? void 0 : longestStock.l) || !(widestStock == null ? void 0 : widestStock.w))
      return false;
    if (typeof thisStock === "object")
      stock = [thisStock];
    if (this.device === "desktop") {
      if (this.main) {
        this.xAxis = this.axisGroup.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis stock x").call(d3.axisTop(this.xScale).ticks(5).tickSize(2)).selectAll("text").attr("dy", -5);
        this.yAxis = this.axisGroup.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis stock y").call(d3.axisRight(this.yAxisScale).ticks(5).tickSize(2)).selectAll("text").attr("dx", 5);
      }
    }
    this.stockGroup.data(stock).attr("transform", () => `translate(${this.padding},${this.padding})`);
    this.stockGroup.append("rect").attr("class", "background stock-area").attr("width", this.getWidthAttribute(longestStock)).attr("height", this.getHeightAttribute(longestStock));
    this.stockGroup.append("rect").attr("class", "background stock").style("fill", this.colors.stock).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr("x", (s) => this.getRectangleCoordinate(s, "x") - this.padding).attr("y", (s) => this.getRectangleCoordinate(s, "y") - this.padding);
    this.stock = this.stockGroup.append("rect").attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s)).attr("x", (s) => this.getRectangleCoordinate(s, "x") - this.padding).attr("y", (s) => this.getRectangleCoordinate(s, "y") - this.padding).style(
      "fill",
      (s) => (s == null ? void 0 : s.grain) ? `url(#grain-${s.grain.toLowerCase()})` : "url(#stripes)"
    );
  }
  getWidthAttribute(item) {
    return this.xScale(item.l) - this.padding;
  }
  getHeightAttribute(item) {
    return this.yScale(item.w) - this.padding;
  }
  //init or update the shapes
  initShapes(shapeList, numUniqueShapes, updatePartColours = true) {
    var _a, _b;
    this.resetShapes();
    if (!numUniqueShapes)
      numUniqueShapes = 1;
    if (!shapeList || !shapeList.length || !numUniqueShapes || !this.elWidth)
      return;
    this.numUniqueShapes = numUniqueShapes;
    if (isNaN(numUniqueShapes)) {
      console.error("numUniqueShapes is NaN");
      this.numUniqueShapes = 1;
    }
    if (this.numUniqueShapes)
      this.shapeColorScale.domain([0, this.numUniqueShapes]);
    if (((_a = this == null ? void 0 : this.vueComponent) == null ? void 0 : _a.gs) && updatePartColours) {
      this.vueComponent.gs.shapeColors = {};
      for (let i2 = shapeList.length; i2--; ) {
        const s = shapeList[i2];
        if (s.parentID && this.vueComponent.gs.shapeColors[s.parentID])
          continue;
        if (s.parentID) {
          this.vueComponent.gs.shapeColors[s.parentID] = color(
            this.shapeColorScale(s.parentID - 1)
          ).formatHex();
        }
      }
    }
    if (!shapeList || !shapeList.length)
      return false;
    this.shapeWrappers = this.shapeGroup.selectAll("g").data(shapeList).join("g").attr("class", "shape-group");
    if (!this.shapeWrappers.size())
      return false;
    this.shapes = this.shapeWrappers.append("rect").attr("class", "shape").attr("fill", (s) => this.getShapeColor(s)).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s));
    if (this.main) {
      const bandingData = [];
      shapeList.forEach((shape) => {
        if (shape == null ? void 0 : shape._banding) {
          for (const [key, value2] of Object.entries(shape._banding)) {
            if (!value2)
              continue;
            if (["a", "b", "c", "d"].includes(key))
              continue;
            let side = key;
            if (shape.rot) {
              switch (key) {
                case "x1":
                  side = "y1";
                  break;
                case "x2":
                  side = "y2";
                  break;
                case "y1":
                  side = "x2";
                  break;
                case "y2":
                  side = "x1";
                  break;
              }
            }
            switch (side) {
              case "x1":
                bandingData.push({
                  x1: shape.x,
                  x2: shape.x,
                  y1: shape.y,
                  y2: shape.y + shape.w,
                  type: "x1"
                });
                break;
              case "x2":
                bandingData.push({
                  x1: shape.x + shape.l,
                  x2: shape.x + shape.l,
                  y1: shape.y,
                  y2: shape.y + shape.w,
                  type: "x2"
                });
                break;
              case "y1":
                bandingData.push({
                  x1: shape.x,
                  x2: shape.x + shape.l,
                  y1: shape.y,
                  y2: shape.y,
                  type: "y1"
                });
                break;
              case "y2":
                bandingData.push({
                  x1: shape.x,
                  x2: shape.x + shape.l,
                  y1: shape.y + shape.w,
                  y2: shape.y + shape.w,
                  type: "y2"
                });
                break;
            }
          }
        }
      });
      this.bandingWrappers = this.bandingGroup.selectAll("g").data(bandingData).join("line").attr("class", "banding").attr(
        "x1",
        (d2) => this.xPositionScale(d2.x1) + this.getBandingAdjustment(d2.type, "x")
      ).attr(
        "x2",
        (d2) => this.xPositionScale(d2.x2) + this.getBandingAdjustment(d2.type, "x")
      ).attr(
        "y1",
        (d2) => this.yPositionScale(d2.y1) + this.getBandingAdjustment(d2.type, "y")
      ).attr(
        "y2",
        (d2) => this.yPositionScale(d2.y2) + this.getBandingAdjustment(d2.type, "y")
      ).attr("stroke-width", 2).attr("stroke", "white");
      this.shapeIDText = this.shapeWrappers.append("text").attr("class", "shape-text id").text(
        (shape) => shape.parentID ? shape.parentID : shape.getParentID()
      ).classed("hidden", (shape, b, c) => {
        const bbox = c[b].getBBox();
        if (bbox.width >= this.measurementScale(shape.l))
          return true;
        if (bbox.height >= this.yScale(shape.w) - this.padding)
          return true;
        return false;
      }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      this.shapeNameText = this.shapeWrappers.append("text").attr("class", "shape-text name").text((shape) => {
        if (!(shape == null ? void 0 : shape.name))
          return null;
        if (typeof (shape == null ? void 0 : shape.name) !== "string")
          return null;
        const result = shape.name.toUpperCase().trim();
        return result;
      }).call(this.trimNameToFit, this).classed("hidden", (shape, b, c) => {
        const bbox = c[b].getBBox();
        if (bbox.width >= this.measurementScale(shape.l))
          return true;
        if (this.measurementScale(shape.w) < 40)
          return true;
        return false;
      }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      this.shapeLengthText = this.shapeWrappers.append("text").attr("class", "shape-text length").text((shape) => convertUnit(shape.l, this.units, this.decimalPlaces)).classed("hidden", (shape, b, c) => {
        if (this.app)
          return this.measurementScale(shape.l) < 50 || this.measurementScale(shape.w) < 50;
        if (shape.stock.type === "linear")
          return false;
        const bbox = c[b].getBBox();
        if (bbox.width >= this.measurementScale(shape.l))
          return true;
        if (this.measurementScale(shape.w) < 30)
          return true;
        return false;
      }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
      this.shapeWidthText = this.shapeWrappers.append("text").attr("class", "shape-text width").text((shape) => convertUnit(shape.w, this.units, this.decimalPlaces)).classed("hidden", (shape, b, c) => {
        if (this.app) {
          return this.measurementScale(shape.l) < 50 || this.measurementScale(shape.w) < 50;
        }
        const bbox = c[b].getBBox();
        if (this.measurementScale(shape.l) < 30)
          return true;
        if (bbox.height >= this.measurementScale(shape.w))
          return true;
        return false;
      }).attr("dominant-baseline", "middle").attr("fill", this.colors.text);
    }
    if ((this.main || this.app) && !((_b = this == null ? void 0 : this.options) == null ? void 0 : _b.disableClick)) {
      this.shapes.on("mousedown", (event, shape) => {
        var _a2, _b2, _c, _d;
        if (this.moving)
          return false;
        if (this.env === "development") {
          console.clear();
          const logShape = JSON.parse(JSON.stringify(shape));
          console.log(logShape.score);
        }
        if (this.app || this.embed) {
          const eventData = {
            name: shape.name,
            id: shape.id,
            x: shape.x,
            y: shape.y,
            l: shape.l,
            w: shape.w,
            banding: (shape == null ? void 0 : shape.banding) && typeof shape.banding === "object" ? shape.banding : null,
            rot: shape.rot,
            stock: (_a2 = shape == null ? void 0 : shape.stock) == null ? void 0 : _a2.id,
            color: color(this.getShapeColor(shape)).formatHex()
          };
          const partClickEvent = new CustomEvent("partClick", {
            detail: eventData
          });
          if (this.env === "development") {
            console.log(eventData);
          }
          this.htmlEl.dispatchEvent(partClickEvent);
          if (this.app)
            return false;
        }
        if (!this.moveMode && ((_b2 = this.vueComponent) == null ? void 0 : _b2.gs)) {
          this.vueComponent.gs.examineShape = shape;
        }
        if (this.device === "desktop") {
          this.resetCutMeasurementAxes();
          this.addShapeAxes(shape);
        }
        this.shapes.classed("selected", false);
        this.shapes.style("fill", (s) => this.getShapeColor(s));
        if (this.moveMode) {
          if (shape.stock.cutType === "efficiency" || shape.stock.type === "linear") {
            (_d = (_c = this.vueComponent.$refs) == null ? void 0 : _c.partsBin) == null ? void 0 : _d.addToPartsBin(shape);
          }
        } else {
          d3.select(event.target).classed("selected", true);
          d3.select(event.target).style(
            "fill",
            this.colors.partSelected.toString()
          );
        }
      });
      if (!this.app && !this.hasTouch) {
        this.shapes.on(
          "mouseover",
          (event) => {
            if ((this == null ? void 0 : this.moveMode) && this.moving)
              return;
            d3.select(event.target).classed("hover", true);
            if (!d3.select(event.target).classed("selected")) {
              d3.select(event.target).style(
                "fill",
                this.colors.partHover.toString()
              );
            }
          },
          {
            passive: true
          }
        ).on(
          "mouseout",
          (event, s) => {
            d3.select(event.target).classed("hover", false);
            if (!d3.select(event.target).classed("selected")) {
              d3.select(event.target).style(
                "fill",
                this.getShapeColor(s).toString()
              );
            }
          },
          {
            passive: true
          }
        );
      }
    }
    this.setShapePosition();
  }
  /**
   * update SHAPE visibility - used for replay
   * @param {Number} number
   */
  updateShapeVisibility(number2) {
    var _a;
    (_a = this == null ? void 0 : this.shapeWrappers) == null ? void 0 : _a.style("visibility", (shape) => {
      if ((shape == null ? void 0 : shape.placementOrder) >= number2)
        return "hidden";
      else
        return "visible";
    });
  }
  //update CUT visibility
  updateCutVisibility(cut, index = null) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (index === null)
      return;
    if (cut === void 0 || cut === null)
      return;
    if (this == null ? void 0 : this.cuts.empty())
      return;
    this.resetShapeAxes();
    this.resetCutMeasurementAxes();
    d3.select(this.cuts.nodes()[index].parentNode).raise();
    const parentSegmentID = (_a = cut.guillotineData) == null ? void 0 : _a.parentSegmentID;
    const halfBladeWidth = this.getHalfBladeWidth(cut.stock);
    const axis2 = cut.direction === "l" ? "y" : "x";
    const trim = (_b = cut == null ? void 0 : cut.stock) == null ? void 0 : _b.trim;
    if ((cut.stock.cutType === "guillotine" || cut.stock.cutType === "beam") && parentSegmentID !== null && typeof parentSegmentID !== "undefined") {
      this.cuts.style("visibility", (c) => {
        if (typeof cut.guillotineData.order === "number" && c.guillotineData.order <= cut.guillotineData.order || c.guillotineData.parentSegmentID === parentSegmentID) {
          return "visible";
        }
        return "hidden";
      });
      this.cuts.classed("highlight", (c) => {
        if (cut.stock.cutType === "guillotine" && c.isTrim)
          return c.type === cut.type;
        return c.guillotineData.order === cut.guillotineData.order;
      });
      const segmentCutOrder = (_c = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _c.segmentCutOrder;
      if (segmentCutOrder === void 0 || segmentCutOrder === null)
        return;
      this.cuts.classed("completed", (c) => {
        return c.guillotineData.parentSegmentID === parentSegmentID && segmentCutOrder && c.guillotineData.segmentCutOrder < segmentCutOrder;
      });
      this.cuts.classed("inside-segment", (c) => {
        var _a2;
        return ((_a2 = c.guillotineData) == null ? void 0 : _a2.parentSegmentID) !== null && !(c == null ? void 0 : c.isTrim) ? c.guillotineData.parentSegmentID === parentSegmentID : false;
      });
      let measurements, values;
      const segments = this.getCutSegments(cut);
      if (segments === false)
        return;
      console.log(segmentCutOrder);
      const relevantSegment = (_e = segments == null ? void 0 : segments.siblings) == null ? void 0 : _e[((_d = segments.main) == null ? void 0 : _d.hasBeamTrim) ? segmentCutOrder - 1 : segmentCutOrder];
      if (relevantSegment) {
        if ((cut == null ? void 0 : cut.direction) === "l") {
          measurements = [
            [relevantSegment.y, relevantSegment.y + relevantSegment.w],
            [cut.y1 + halfBladeWidth, (segments == null ? void 0 : segments.main.y) + (segments == null ? void 0 : segments.main.w)]
          ];
        } else if ((cut == null ? void 0 : cut.direction) === "w") {
          measurements = [
            [relevantSegment.x, relevantSegment.x + relevantSegment.l],
            [cut.x1 + halfBladeWidth, (segments == null ? void 0 : segments.main.x) + (segments == null ? void 0 : segments.main.l)]
          ];
        }
        if ((cut == null ? void 0 : cut.direction) === "l") {
          values = [(_f = cut == null ? void 0 : cut.distances) == null ? void 0 : _f.bottom, cut == null ? void 0 : cut.distances.top];
        } else if ((cut == null ? void 0 : cut.direction) === "w") {
          values = [cut == null ? void 0 : cut.distances.left, (_g = cut == null ? void 0 : cut.distances) == null ? void 0 : _g.right];
        }
        if (this.device === "desktop" && !cut.isTrim)
          this.addCutMeasurementAxes(measurements, values, axis2);
      }
    } else {
      this.cuts.style(
        "visibility",
        (c, thisIndex) => thisIndex <= index ? "visible" : "hidden"
      );
      let measurements;
      if ((cut == null ? void 0 : cut.direction) === "l") {
        measurements = [
          [0 + (trim.y1 ?? 0), cut.y1 - halfBladeWidth],
          [cut.y1 + halfBladeWidth, cut.stock.w - ((trim == null ? void 0 : trim.y2) ? trim.y2 : 0)]
        ];
      } else if ((cut == null ? void 0 : cut.direction) === "w") {
        measurements = [
          [0 + (trim.x1 ?? 0), cut.x1 - halfBladeWidth],
          [cut.x1 + halfBladeWidth, cut.stock.l - ((trim == null ? void 0 : trim.x2) ? trim.x2 : 0)]
        ];
      }
      if (measurements == null ? void 0 : measurements.length) {
        const values = [
          measurements[0][1] - measurements[0][0],
          measurements[1][1] - measurements[1][0]
        ];
        if (this.device === "desktop" && !cut.isTrim)
          this.addCutMeasurementAxes(measurements, values, axis2);
      }
      this.cuts.classed("highlight", (cut2, cutIndex) => cutIndex === index);
    }
    this.cuts.attr("stroke-width", (cut2, cutIndex) => {
      let width = Math.ceil(
        this.measurementScale(this.getBladeWidth(cut2.stock))
      );
      if (cutIndex === index && this.measurementScale(this.getBladeWidth(cut2.stock)) < 5) {
        width = 5;
      }
      return width;
    });
  }
  //highlight a specific cut (by order or index), segments and related measurements
  showCut(cut, index = null) {
    if (index === null)
      return false;
    this.updateCutVisibility(cut, index);
    const cutSegments = this.getCutSegments(cut);
    if (cutSegments === false)
      return;
    const {
      siblings
    } = cutSegments;
    const numSiblings = siblings == null ? void 0 : siblings.length;
    let segments = [];
    if (numSiblings) {
      for (let i2 = numSiblings; i2--; ) {
        if (siblings[i2])
          siblings[i2].completed = false;
      }
      if (cut.guillotineData.segmentCutOrder === void 0 || cut.guillotineData.segmentCutOrder === null)
        return;
      const order = cut.guillotineData.segmentCutOrder;
      for (let i2 = 0; i2 < numSiblings; i2++) {
        if (i2 < order)
          siblings[i2].completed = true;
      }
      segments.push(...siblings);
      segments = segments.filter((s) => s);
    }
    if (segments.length) {
      this.resetSegments();
      this.initSegments(segments);
    }
  }
  /**
   * toggle the visibility of the shapes
   * @param {Boolean} show
   */
  toggleShapes(show = false) {
    if (show) {
      this.shapeGroup.attr("display", "block");
      this.bandingGroup.attr("display", "block");
    } else {
      this.shapeGroup.attr("display", "none");
      this.bandingGroup.attr("display", "none");
    }
  }
  /**
   * add measurements to an axis
   * @param {Array} measurements array of arrays
   * @param {Array} values array of values
   * @param {String} axis x | y
   */
  addCutMeasurementAxes(measurements, values, axis2) {
    if (!axis2 || !(measurements == null ? void 0 : measurements.length))
      return;
    measurements.forEach((measurement, index) => {
      const start = measurement[0];
      const end3 = measurement[1];
      if (axis2 === "x") {
        const xScale = d3.scaleLinear().domain([start, end3]).range([this.xPositionScale(start), this.xPositionScale(end3)]);
        const tickPosition = (xScale.domain()[1] - xScale.domain()[0]) / 2 + xScale.domain()[0];
        const axis22 = this.axisGroup.append("g").attr(
          "transform",
          `translate(0, ${this.h - this.padding + this.axisSpacing})`
        ).attr("class", "axis measurement x").call(
          d3.axisBottom(xScale).tickValues([tickPosition]).tickSize(4).tickFormat(() => {
            return values[index].toFixed(this.decimalPlaces);
          })
        );
        axis22.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (text, index2, list) => list[index2].getBBox().height + 10);
        this.cutMeasurementXAxes.push(axis22);
      } else {
        const yScale = d3.scaleLinear().domain([start, end3]).range([this.yPositionScale(start), this.yPositionScale(end3)]);
        const tickPosition = (yScale.domain()[1] - yScale.domain()[0]) / 2 + yScale.domain()[0];
        const axis22 = this.axisGroup.append("g").attr("transform", `translate(${this.padding - this.axisSpacing}, 0)`).attr("class", "axis measurement y").call(
          d3.axisLeft(yScale).tickValues([tickPosition]).tickSize(4).tickFormat(() => values[index].toFixed(this.decimalPlaces))
        );
        axis22.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (text, index2, list) => list[index2].getBBox().height + 10).attr("dx", (text, index2, list) => list[index2].getBBox().width / 4).attr(
          "transform",
          (text, index2, list) => "rotate(90) translate(" + list[index2].getBBox().width / 4 + ")"
        );
        this.cutMeasurementYAxes.push(axis22);
      }
    });
  }
  /**
   * add the shape axes
   * @param {Shape} shape
   */
  addShapeAxes(shape) {
    var _a;
    if (this.shapeXAxis)
      this.shapeXAxis.remove();
    if (this.shapeYAxis)
      this.shapeYAxis.remove();
    const x1 = shape.x;
    const x2 = shape.x + shape.l;
    const xScale = d3.scaleLinear().domain([x1, x2]).range([this.xPositionScale(x1), this.xPositionScale(x2)]);
    const y1 = shape.y;
    const y2 = shape.y + shape.w;
    const yScale = d3.scaleLinear().domain([y1, y2]).range([this.yPositionScale(y1), this.yPositionScale(y2)]);
    this.shapeXAxis = this.axisGroup.append("g").attr(
      "transform",
      `translate(0, ${this.h - this.padding + this.axisSpacing})`
    ).attr("class", "axis shape x").call(
      d3.axisBottom(xScale).tickValues(xScale.domain()).tickSize(4).tickFormat(this.formatDp)
    );
    this.shapeXAxis.selectAll("text").attr("dx", (text, index, list) => {
      const thisEl = list[index];
      if (thisEl === null)
        return;
      const bbox = thisEl.getBBox();
      if (index === 0)
        return -bbox.width / 2;
      else
        return bbox.width / 2;
    });
    if (((_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.type) !== "linear") {
      this.shapeYAxis = this.axisGroup.append("g").attr("transform", `translate(${this.padding - this.axisSpacing}, 0)`).attr("class", "axis shape y").call(
        d3.axisLeft(yScale).tickValues(yScale.domain()).tickSize(4).tickFormat(this.formatDp)
      );
      this.shapeYAxis.selectAll("text").attr("x", 0).attr("y", 0).attr(
        "dy",
        (text, index, list) => {
          var _a2, _b;
          return ((_b = (_a2 = list[index]) == null ? void 0 : _a2.getBBox()) == null ? void 0 : _b.height) + 2;
        }
      ).attr(
        "dx",
        (text, index, list) => {
          var _a2, _b;
          return ((_b = (_a2 = list[index]) == null ? void 0 : _a2.getBBox()) == null ? void 0 : _b.width) / 2;
        }
      ).attr("transform", (text, index, list) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h;
        if (this.flipY) {
          if (index === 0)
            return "rotate(90) translate(-" + ((_b = (_a2 = list[index]) == null ? void 0 : _a2.getBBox()) == null ? void 0 : _b.width) / 2 + ")";
          return "rotate(90) translate(" + ((_d = (_c = list[index]) == null ? void 0 : _c.getBBox()) == null ? void 0 : _d.width) / 2 + ")";
        } else {
          if (index === 0)
            return "rotate(90) translate(" + ((_f = (_e = list[index]) == null ? void 0 : _e.getBBox()) == null ? void 0 : _f.width) / 2 + ")";
          else
            return "rotate(90) translate(-" + ((_h = (_g = list[index]) == null ? void 0 : _g.getBBox()) == null ? void 0 : _h.width) / 2 + ")";
        }
      });
    }
  }
  getBandingAdjustment(type, coordinate) {
    switch (type) {
      case "y1":
        if (coordinate === "x")
          return 0;
        if (coordinate === "y")
          return this.flipY ? 1 : -1;
        break;
      case "y2":
        if (coordinate === "x")
          return 0;
        if (coordinate === "y")
          return this.flipY ? -1 : 1;
        break;
      case "x1":
        if (coordinate === "x")
          return this.flipX ? -1 : 1;
        if (coordinate === "y")
          return 0;
        break;
      case "x2":
        if (coordinate === "x")
          return this.flipX ? 1 : -1;
        if (coordinate === "y")
          return 0;
        break;
    }
    return 0;
  }
  getRectangleCoordinate(rectangle, coordinate, position, adjustment) {
    let coord;
    if (coordinate === "x") {
      let x;
      switch (position) {
        case "center":
          x = this.xPositionScale(rectangle.x + rectangle.l / 2);
          if (adjustment)
            x += adjustment;
          break;
        case "right":
          x = this.xPositionScale(rectangle.x + rectangle.l);
          if (adjustment)
            x -= adjustment;
          break;
        case "left":
        default:
          x = this.xPositionScale(
            this.flipX ? rectangle.x - rectangle.l : rectangle.x
          );
          if (adjustment)
            x -= adjustment;
      }
      coord = x;
    } else if (coordinate === "y") {
      let y;
      switch (position) {
        case "center":
          y = this.yPositionScale(rectangle.y + rectangle.w / 2);
          if (adjustment)
            y += adjustment;
          break;
        case "bottom":
          y = this.yPositionScale(
            this.flipY ? rectangle.y + rectangle.w : rectangle.y
          );
          if (adjustment)
            y += adjustment;
          break;
        case "top":
        default:
          y = this.yPositionScale(
            this.flipY ? rectangle.y : rectangle.y + rectangle.w
          );
          if (adjustment)
            y -= adjustment;
      }
      coord = y;
    }
    return coord;
  }
  getRotatedSide(position) {
    switch (position) {
      case "x1":
      case "l1":
        return "w1";
      case "x2":
      case "l2":
        return "w2";
      case "y1":
      case "w1":
        return "l2";
      case "y2":
      case "w2":
        return "l1";
    }
  }
  /**
   * update the position of the shapes and the content within
   */
  setShapePosition() {
    if (!this.shapes)
      return false;
    this.shapes.attr("x", (s) => this.getRectangleCoordinate(s, "x")).attr("y", (s) => this.getRectangleCoordinate(s, "y")).attr("width", (s) => this.getWidthAttribute(s)).attr("height", (s) => this.getHeightAttribute(s));
    if (this.main) {
      this.shapeIDText.attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr("y", (s) => this.getRectangleCoordinate(s, "y", "center")).attr("dy", 1);
      if (this.shapeNameText) {
        this.shapeNameText.attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr(
          "y",
          (s, b, c) => this.getRectangleCoordinate(
            s,
            "y",
            "bottom",
            -(c[b].getBBox().height / 2 + 1)
          )
        );
      }
      this.shapeLengthText.attr("x", (s) => this.getRectangleCoordinate(s, "x", "center")).attr(
        "y",
        (s, b, c) => this.getRectangleCoordinate(
          s,
          "y",
          "top",
          -(c[b].getBBox().height / 2 + 2)
        )
      );
      this.shapeWidthText.attr(
        "transform",
        (s, b, c) => `translate(${this.getRectangleCoordinate(
          s,
          "x",
          "left",
          -(c[b].getBBox().height / 2 + 2)
        )},${this.getRectangleCoordinate(s, "y", "center")}) ${this.device === "mobile" ? "rotate(90)" : "rotate(-90)"}`
      );
    }
  }
  //init or update the cuts
  initCuts(cutList) {
    if (!cutList || !(cutList == null ? void 0 : cutList.length) || !this.main || !this.elWidth)
      return false;
    this.cuts = this.cutGroup.selectAll("line").data(cutList).join("line").attr("class", "cut").attr("stroke-width", (cut) => {
      const width = this.measurementScale(
        this.getBladeWidth(cut.stock)
      );
      if (width < 1)
        return 1;
      return Math.ceil(width);
    }).attr("x1", (cut) => this.xPositionScale(cut.getVisCoords("x1"))).attr("x2", (cut) => this.xPositionScale(cut.getVisCoords("x2"))).attr("y1", (cut) => this.yPositionScale(cut.getVisCoords("y1"))).attr("y2", (cut) => this.yPositionScale(cut.getVisCoords("y2"))).classed("trim", (cut) => cut.isTrim);
  }
  //init or update the segments
  initSegments(segments) {
    if (!segments || !(segments == null ? void 0 : segments.length) || !this.main || !this.elWidth)
      return false;
    this.segments = this.segmentGroup.selectAll("rect").data(segments).join("rect").attr("class", "segment").style("opacity", (segment) => {
      if ((segment == null ? void 0 : segment.offcut) === true)
        return 0.5;
    }).classed("offcut", (segment) => segment.offcut).classed("merged", (segment) => segment.merged).classed("near", (segment) => segment.shapePosition === "near").classed("far", (segment) => segment.shapePosition === "far").classed("completed", (segment) => segment.completed).attr("x", (segment) => this.getRectangleCoordinate(segment, "x")).attr("y", (segment) => this.getRectangleCoordinate(segment, "y")).attr("width", (segment) => this.getWidthAttribute(segment)).attr("height", (segment) => this.getHeightAttribute(segment));
    if (!this.app && this.env === "development") {
      this.segments.on("mousedown", function(event, segment) {
        console.log(segment);
      });
      if (!this.hasTouch) {
        this.segments.on(
          "mouseover",
          function() {
            d3.select(this).classed("hover", true);
          },
          {
            passive: true
          }
        ).on(
          "mouseout",
          function() {
            d3.select(this).classed("hover", false);
          },
          {
            passive: true
          }
        );
      }
    }
  }
  //get relevant segments for a specific cut
  getCutSegments(cut) {
    var _a, _b, _c, _d;
    const parentSegmentID = (_a = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _a.parentSegmentID;
    const activeSegments = ((_c = (_b = this.vueComponent) == null ? void 0 : _b.gs) == null ? void 0 : _c.activeSegments) ?? ((_d = this.vueComponent) == null ? void 0 : _d.activeSegments);
    if (!activeSegments.length)
      return false;
    const mainSegment = activeSegments.find(
      (s) => s.id === parentSegmentID
    );
    if (mainSegment === void 0)
      return false;
    const children2 = mainSegment == null ? void 0 : mainSegment.children;
    if (children2 == null ? void 0 : children2.length) {
      const siblings = children2.map((child) => {
        const s = activeSegments.find((segment) => {
          return segment.x === child.x && segment.y === child.y && segment.l === child.l && segment.w === child.w;
        });
        if (s !== void 0)
          return s;
        return null;
      }).filter((s) => s !== null);
      const segments = {
        main: mainSegment,
        siblings
      };
      return segments;
    }
    return false;
  }
  /**
   * toggle the visibility of the segments
   * @param {Boolean} show
   */
  toggleSegments(show = true) {
    if (show)
      this.segmentGroup.attr("display", "block");
    else
      this.segmentGroup.attr("display", "none");
  }
  /**
   * show a list of possible movement positions
   */
  initPositions(shape, stock) {
    if (!stock)
      return false;
    if (!shape || !this.main)
      return false;
    stock.trimDimensions();
    if (!shape.willItFit(stock, shape.rot))
      return false;
    stock.removeTrim();
    let positions = [];
    const placedShapes = getData.call(this.vueComponent, ["shapeList"]).filter(
      (otherShape) => {
        var _a;
        return otherShape.added && ((_a = otherShape == null ? void 0 : otherShape.stock) == null ? void 0 : _a.id) === stock.id;
      }
    );
    const bladeWidth = this.getBladeWidth(stock);
    for (let i2 = placedShapes.length; i2--; ) {
      const coords = placedShapes[i2].getPlacementCoordinates(
        shape,
        stock,
        bladeWidth,
        placedShapes
      );
      positions.push(...coords);
    }
    positions = filterDuplicateCoordinates(positions);
    if (stock.cutType === "efficiency") {
      positions.push({
        x: 0 + (stock.trim.x1 ?? 0),
        y: 0 + (stock.trim.y1 ?? 0)
      });
      positions.push({
        x: stock.l - shape.l - (stock.trim.x2 ?? 0),
        y: 0 + (stock.trim.y1 ?? 0)
      });
      positions.push({
        x: 0 + (stock.trim.x1 ?? 0),
        y: stock.w - shape.w - (stock.trim.y2 ?? 0)
      });
      positions.push({
        x: stock.l - shape.l - (stock.trim.x2 ?? 0),
        y: stock.w - shape.w - (stock.trim.y2 ?? 0)
      });
    } else {
      positions.push({
        x: 0 + (stock.trim.x1 ?? 0),
        y: 0 + (stock.trim.y1 ?? 0)
      });
      positions = positions.filter((position) => {
        const positionShape = new Shape({
          x: position.x,
          y: position.y,
          l: shape.l,
          w: shape.w,
          stock
        });
        const cutPreference = stock.cutPreference;
        const cutAxis = cutPreference === "l" ? "x" : "y";
        const secondaryAxis = cutAxis === "x" ? "y" : "x";
        if (positionShape[cutAxis] === 0 + stock.trim[cutAxis + 1])
          return true;
        const stripShape = placedShapes.find(
          (s) => s[cutAxis] === stock.trim[cutAxis + 1] && isWithinBoundaries(positionShape, s, secondaryAxis)
        );
        if (!stripShape)
          return false;
        if (positionShape[secondaryAxis] === stripShape[secondaryAxis])
          return true;
        for (let i2 = placedShapes.length; i2--; ) {
          const placedShape = placedShapes[i2];
          const positionedCorrectly = placedShapes.find(
            (s) => isShapePositioned(
              cutPreference === "l" ? "above" : "right",
              s,
              positionShape
            )
          );
          if (isShapePositioned(
            cutPreference === "l" ? "right" : "above",
            placedShape,
            positionShape
          ) && (positionShape[secondaryAxis] === stock.trim[secondaryAxis + 1] || positionedCorrectly)) {
            return true;
          }
        }
        return false;
      });
    }
    positions = filterDuplicateCoordinates(positions);
    for (let i2 = positions.length; i2--; ) {
      shape.x = positions[i2].x;
      shape.y = positions[i2].y;
      for (let j = placedShapes.length; j--; ) {
        if (this.collision(shape, placedShapes[j], stock)) {
          positions.splice(i2, 1);
          break;
        }
      }
    }
    this.positionGroup.selectAll("rect").data(positions).join("rect").attr("data-id", (_p, index) => index).attr("class", "shape ghost").attr("x", (p2) => {
      shape.x = p2.x;
      return this.getRectangleCoordinate(shape, "x");
    }).attr("y", (p2) => {
      shape.y = p2.y;
      return this.getRectangleCoordinate(shape, "y");
    }).attr("width", this.getWidthAttribute(shape)).attr("height", this.getHeightAttribute(shape)).on("mousedown", (event, position) => {
      event.stopPropagation();
      this.vueComponent.$refs.partsBin.moveShape(
        event.currentTarget,
        shape,
        position
      );
    });
    if (!this.hasTouch) {
      this.positionGroup.selectAll("rect").on(
        "mouseover",
        function(event) {
          event.stopPropagation();
          d3.select(this).classed("hover", true);
          d3.select(this).raise();
        },
        {
          passive: true
        }
      ).on(
        "mouseout",
        function(event) {
          event.stopPropagation();
          d3.select(this).classed("hover", false);
        },
        {
          passive: true
        }
      );
    }
    this.dotGroup.selectAll("circle").data(positions).join("circle").attr("data-id", (_p, index) => index).attr("class", "dot").attr("cx", (p2) => {
      shape.x = p2.x;
      return this.getRectangleCoordinate(shape, "x");
    }).attr("cy", (p2) => {
      shape.y = p2.y;
      return this.getRectangleCoordinate(shape, "y");
    }).attr("r", 8).on("mousedown", (event, p2) => {
      event.stopPropagation();
      this.vueComponent.$refs.partsBin.moveShape(
        event.currentTarget,
        shape,
        p2
      );
    });
    shape.x = 0;
    shape.y = 0;
    if (!this.hasTouch) {
      this.dotGroup.selectAll("circle").on(
        "mouseover",
        function(event) {
          event.stopPropagation();
          d3.select(this).classed("hover", true);
          const id = d3.select(this).attr("data-id");
          const ghost = d3.select(`.ghost[data-id="${id}"]`);
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
          d3.select(this).classed("hover", false);
          const id = d3.select(this).attr("data-id");
          d3.select(`.ghost[data-id="${id}"]`).classed("highlight", false);
        },
        {
          passive: true
        }
      );
    }
    if (!(positions == null ? void 0 : positions.length))
      return false;
    return true;
  }
  /**
   * toggle the visibility of the cuts
   * @param {Boolean} show
   */
  toggleCuts(show = true) {
    if (show)
      this.cutGroup.attr("display", "block");
    else
      this.cutGroup.attr("display", "none");
  }
  clearSelection() {
    var _a;
    if (this == null ? void 0 : this.shapes) {
      this.shapes.classed("selected", false);
      this.shapes.classed("hover", false);
      this.shapes.style("fill", (s) => this.getShapeColor(s));
    }
    if (this == null ? void 0 : this.cuts) {
      this.cuts.classed("selected", false);
      this.cuts.classed("highlight", false);
      this.cuts.classed("inside-segment", false);
      this.cuts.style("visibility", "visible");
      this.cuts.attr(
        "stroke-width",
        (cut) => Math.ceil(
          this.measurementScale(this.getBladeWidth(cut.stock))
        )
      );
    }
    if ((_a = this == null ? void 0 : this.shapes) == null ? void 0 : _a.length)
      this.shapes.classed("selected", false);
  }
  /**
   * add padding
   * this.padding will be 0 when necessary
   * @param {number} value
   */
  addPadding(value2) {
    return value2 + this.padding;
  }
  /**
   * @param {Container} container
   * @returns {number} blade width
   */
  getBladeWidth(container = null) {
    var _a, _b;
    if (valueSet((_a = this == null ? void 0 : this.saw) == null ? void 0 : _a.bladeWidth)) {
      return (_b = this.saw) == null ? void 0 : _b.bladeWidth;
    } else if (valueSet(container) && container !== null) {
      return container.getBladeWidth();
    }
    return 0;
  }
  getHalfBladeWidth(container = null) {
    const bladeWidth = this.getBladeWidth(container);
    if (bladeWidth !== void 0 && bladeWidth > 0)
      return bladeWidth / 2;
    return 0;
  }
  resetShapes() {
    if (this.shapeGroup)
      this.shapeGroup.selectAll("*").remove();
    if (this.bandingGroup)
      this.bandingGroup.selectAll("*").remove();
    this.resetShapeAxes();
  }
  resetShapeAxes() {
    if (this.shapeXAxis)
      this.shapeXAxis.remove();
    if (this.shapeYAxis)
      this.shapeYAxis.remove();
  }
  resetStock() {
    if (this.stockGroup)
      this.stockGroup.selectAll("*").remove();
    if (this.axisGroup)
      this.axisGroup.selectAll("*").remove();
    this.resetStockAxes();
  }
  resetStockAxes() {
    if (this.xAxis)
      this.xAxis.remove();
    if (this.yAxis)
      this.yAxis.remove();
  }
  resetCuts() {
    if (this.cutGroup)
      this.cutGroup.selectAll("*").remove();
    this.resetCutMeasurementAxes();
  }
  resetSegments() {
    if (this.segmentGroup)
      this.segmentGroup.selectAll("*").remove();
  }
  resetCutMeasurementAxes() {
    var _a, _b;
    if ((_a = this.cutMeasurementXAxes) == null ? void 0 : _a.length) {
      this.cutMeasurementXAxes.forEach((axis2) => axis2.remove());
      this.cutMeasurementXAxes.length = 0;
    }
    if ((_b = this.cutMeasurementYAxes) == null ? void 0 : _b.length) {
      this.cutMeasurementYAxes.forEach((axis2) => axis2.remove());
      this.cutMeasurementYAxes.length = 0;
    }
  }
  resetPositions() {
    if (this.positionGroup)
      this.positionGroup.selectAll("*").remove();
    if (this.dotGroup)
      this.dotGroup.selectAll("*").remove();
  }
  reset() {
    this.resetPositions();
    this.resetShapes();
    this.resetStock();
    this.resetCuts();
    this.resetSegments();
  }
  /**
   * detect collision - required for move mode
   * @param {object} thisShape
   * @param {object} testShape
   * @param {object} container
   * @returns {boolean} true if collision
   */
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
}
function setData(path2, value2) {
  var _a;
  if (!(path2 == null ? void 0 : path2[0]))
    return false;
  if (typeof ((_a = this == null ? void 0 : this.gs) == null ? void 0 : _a[path2[0]]) !== "undefined")
    set(this.gs, path2, value2);
  else if (typeof (this == null ? void 0 : this[path2[0]]) !== "undefined")
    set(this, path2, value2);
  return true;
}
function getData(path2) {
  var _a;
  if (!(path2 == null ? void 0 : path2[0]))
    return null;
  if ("gs" in this && typeof ((_a = this == null ? void 0 : this.gs) == null ? void 0 : _a[path2[0]]) !== "undefined")
    return get(this.gs, path2);
  else if (typeof (this == null ? void 0 : this[path2[0]]) !== "undefined")
    return get(this, path2);
}
function getOptions(path2) {
  var _a;
  if (!(path2 == null ? void 0 : path2[0]))
    return null;
  if ("optionsStore" in this && typeof ((_a = this == null ? void 0 : this.optionsStore) == null ? void 0 : _a[path2[0]]) !== "undefined")
    return get(this.optionsStore, path2);
  else if (typeof (this == null ? void 0 : this[path2[0]]) !== "undefined")
    return get(this, path2);
}
function resetProgress(progress) {
  progress.queue = 0;
  progress.stockCount = 0;
  progress.shapeCount = 0;
  progress.complete = false;
}
function toggleWidget(name, show = null) {
  var _a, _b;
  if (typeof ((_a = this.$refs) == null ? void 0 : _a[name]) === "undefined" || ((_b = this.$refs) == null ? void 0 : _b[name]) === null)
    return;
  if (show !== null)
    this.$refs[name].visible = show;
  else {
    this.$refs[name].visible = !this.$refs[name].visible;
  }
}
function getActiveStock(stockList, activeStockId) {
  if (!(stockList == null ? void 0 : stockList.length))
    return null;
  return stockList.find((stock) => stock.id === activeStockId);
}
function getStackedStock(stockList) {
  if (!(stockList == null ? void 0 : stockList.length))
    return [];
  return stockList.filter(
    (stock) => stock.used && (stock.stack === true || typeof stock.stack === "number" || !stock.stack)
  );
}
function getActiveCuts(cutList, activeStock) {
  if (!(cutList == null ? void 0 : cutList.length) || !activeStock)
    return [];
  const cuts = cutList.filter(
    (cut) => {
      var _a, _b;
      return (((_a = cut == null ? void 0 : cut.stock) == null ? void 0 : _a.id) ?? (cut == null ? void 0 : cut.stockId)) === activeStock.id && !((_b = cut == null ? void 0 : cut.guillotineData) == null ? void 0 : _b.ptxDummyCut);
    }
  );
  cuts.sort((a, b) => {
    var _a, _b;
    return ((_a = a == null ? void 0 : a.guillotineData) == null ? void 0 : _a.order) - ((_b = b == null ? void 0 : b.guillotineData) == null ? void 0 : _b.order);
  });
  return cuts;
}
function getUsedStock(stockList) {
  if (!(stockList == null ? void 0 : stockList.length))
    return [];
  return stockList.filter((stock) => stock.used === true);
}
function initVis(config2 = {
  app: false,
  env: "production",
  main: true,
  elementID: "#smartcut-svg-wrapper",
  units: this.units,
  decimalPlaces: 2,
  saw: this.optionsStore.saw,
  embed: false,
  colors: this.colors,
  options: this.visOptions,
  vueComponent: this
}) {
  if (this.visInit)
    return false;
  this.vis = new Vis(config2);
  this.vis.initStock(this.activeStock);
  this.vis.initShapes(this.activeShapes, this.numUniqueShapes);
  this.vis.initCuts(this.activeCuts, this.activeStock);
  this.visInit = true;
}
function createStockList(globalAutoAdd = false) {
  var _a;
  let inputStock = ((_a = this == null ? void 0 : this.gs) == null ? void 0 : _a.inputStock) || (this == null ? void 0 : this.inputStock);
  if (!(inputStock == null ? void 0 : inputStock.length))
    return ["No stock input"];
  const stockList = getData.call(this, ["stockList"]);
  if (stockList)
    stockList.length = 0;
  const issues = [];
  if (globalAutoAdd)
    inputStock = [inputStock[0]];
  for (let i2 = 0; i2 < inputStock.length; i2++) {
    const stock = inputStock[i2];
    if (!(stock == null ? void 0 : stock.q) && !globalAutoAdd)
      continue;
    issues.push(...this.createStock(stock, i2));
  }
  return issues;
}
function calculate() {
  var _a, _b;
  if (this.thinking)
    return false;
  this.thinking = true;
  this.success = false;
  const issues = [];
  issues.push(...validateInputShapes.call(this));
  if (issues.length) {
    this.showMessage({
      heading: `Part issue${issues.length > 1 ? "s" : ""}`,
      main: `<p>${issues.length} issue${issues.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: issues.slice(0, 5)
    });
    this.thinking = false;
    return;
  }
  this.reset();
  issues.push(...this.createStockList());
  if (issues.length) {
    this.showMessage({
      heading: `Stock issue${issues.length > 1 ? "s" : ""}`,
      main: `<p>${issues.length} issue${issues.length > 1 ? "s" : ""} found with stock inputs</p>`,
      list: issues.slice(0, 5)
    });
    this.thinking = false;
    return;
  }
  issues.push(...this.createShapeList());
  if (issues.length) {
    this.showMessage({
      heading: `Part issue${issues.length > 1 ? "s" : ""}`,
      main: `<p>${issues.length} issue${issues.length > 1 ? "s" : ""} found with part inputs</p>`,
      list: issues.slice(0, 5)
    });
    this.thinking = false;
    return;
  }
  const saw = new Saw(
    this.saw,
    ((_a = this.saw) == null ? void 0 : _a.stockType) ?? ((_b = this.stockList) == null ? void 0 : _b[0].type)
  );
  if (saw.issues.length) {
    this.showMessage({
      heading: `Saw issue${saw.issues.length > 1 ? "s" : ""}`,
      main: `<p>${saw.issues.length} issue${saw.issues.length > 1 ? "s" : ""} found with saw inputs</p>`,
      list: saw.issues.slice(0, 5)
    });
    this.thinking = false;
    return;
  }
  this.saw = saw;
  if (this.debug)
    console.log(
      "Smartcut - calculating...",
      this.stockList.map((s) => s.getDimensions()),
      this.shapeList.map((s) => s.getDimensions())
    );
  this.socket.connect();
  this.socket.compress(true).emit(
    "calculate",
    {
      saw: this.saw,
      shapeList: this.shapeList,
      stockList: this.stockList,
      enableEvo: this.enableEvo,
      domain: this.domain
    },
    this.socket.id
  );
}
function refreshShapes(numUniqueShapes, updatePartColours = true) {
  var _a;
  const vis = getData.call(this, ["vis"]);
  if (!vis)
    return;
  const shapeList = getData.call(this, ["shapeList"]);
  if (!(shapeList == null ? void 0 : shapeList.length))
    return false;
  vis.resetPositions();
  vis.resetShapes();
  const activeShapes = getData.call(this, ["activeShapes"]);
  vis.initShapes(activeShapes, numUniqueShapes, updatePartColours);
  if ((_a = this == null ? void 0 : this.$refs) == null ? void 0 : _a.PartsBin)
    this.$refs.PartsBin.clear(false);
}
function refreshStock() {
  const vis = getData.call(this, ["vis"]);
  if (!vis)
    return;
  const stockList = getData.call(this, ["stockList"]);
  if (!(stockList == null ? void 0 : stockList.length))
    return false;
  vis.resetStock();
  const activeStock = getData.call(this, ["activeStock"]);
  vis.initStock(activeStock);
  vis.resetCuts();
  const activeCuts = getData.call(this, ["activeCuts"]);
  vis.initCuts(activeCuts);
  vis.resetSegments();
  const activeSegments = getData.call(this, ["activeSegments"]);
  vis.initSegments(activeSegments);
  vis.resetPositions();
  if (typeof this.toggleSegments === "function")
    this.toggleSegments(false);
  if (this == null ? void 0 : this.cutMode)
    this == null ? void 0 : this.showCut(0);
}
function clearSelection() {
  var _a;
  const vis = ((_a = this == null ? void 0 : this.gs) == null ? void 0 : _a.vis) ?? (this == null ? void 0 : this.vis);
  if (!vis)
    return;
  vis.clearSelection();
  vis.resetShapeAxes();
  vis.resetCutMeasurementAxes();
  vis.resetPositions();
}
function showStock(id) {
  const examineShape = getData.call(this, ["examineShape"]);
  if (examineShape)
    this.examineShape = null;
  setData.call(this, ["activeStockId"], id);
}
function validateInputShapes() {
  var _a;
  const issues = [];
  const inputShapes = ((_a = this == null ? void 0 : this.gs) == null ? void 0 : _a.inputShapes) ?? (this == null ? void 0 : this.inputShapes);
  let missingDimensionsCount = 0;
  for (let i2 = inputShapes.length; i2--; ) {
    const s = inputShapes[i2];
    if (!s.l || !s.w) {
      missingDimensionsCount++;
    }
    if (!s.l && !s.w) {
      if (i2 === 0) {
        if (inputShapes.length > 1) {
          this.removeShape(i2);
          missingDimensionsCount--;
        }
      } else {
        this.removeShape(i2);
        missingDimensionsCount--;
      }
    }
  }
  if (!inputShapes.length)
    issues.push("No valid parts found");
  if (missingDimensionsCount) {
    issues.push("Some parts have missing dimensions");
  }
  const totalQ = totalQuantity(inputShapes);
  if (!(inputShapes == null ? void 0 : inputShapes.length) || !totalQ) {
    issues.push("No valid parts found");
    return issues;
  }
  return issues;
}
function online(val) {
  if (val === false && this.allowOnlineMessages) {
    const message = {
      heading: "Offline",
      main: "<p>Looks like you've just gone offline.</p><p>Calculations are disabled for now.</p>"
    };
    if (typeof this.showModalMessage === "function") {
      this.showModalMessage(message);
    }
    this.allowOnlineMessages = false;
    this.onlineTimer = setTimeout(() => {
      this.allowOnlineMessages = true;
    }, 3e4);
  }
}
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false };
function initSocket(server = define_import_meta_env_default.VITE_WS_SERVER) {
  this.socket = lookup(server, {
    withCredentials: true,
    //this is required to send passport user data
    autoConnect: false
  });
  this.socket.on("connect", () => {
    setData.call(this, ["connected"], true);
  });
  this.socket.on("maintenance", () => {
    setData.call(this, ["maintenanceMode"], true);
    this.socket.disconnect();
    if (this.env === "development")
      console.log("SmartCut - maintenance mode flag received from server");
  });
  this.socket.on("connect_error", (err) => {
    setData.call(this, ["connected"], false);
    console.warn(`SmartCut - socket connect_error: ${err.message}`);
  });
  this.socket.on("message", (data) => console.log(data));
  this.socket.on("queued", () => {
    setData.call(this, ["progress", "queue"], 1);
  });
  this.socket.on("jobInProgess", (jobID) => {
    alert(
      `You already have a job in progress, please wait for it to finish

Job ID: ${jobID}`
    );
    return false;
  });
  this.socket.on(
    "jobStart",
    () => setData.call(this, ["progress", "queue"], 2)
  );
  this.socket.on("progress", (res) => {
    const data = res.data;
    if (typeof data.shapeCount !== "undefined") {
      setData.call(this, ["progress", "shapeCount"], data.shapeCount);
    }
    if (typeof data.stockCount !== "undefined") {
      setData.call(this, ["progress", "stockCount"], data.stockCount);
    }
  });
  this.socket.on("error", (data) => {
    var _a;
    setData.call(this, ["thinking"], false);
    const reset = getData.call(this, ["reset"]);
    if (typeof reset === "function")
      reset();
    console.error("SmartCut error:", data);
    (_a = window == null ? void 0 : window.top) == null ? void 0 : _a.postMessage(
      {
        type: "scError",
        message: data
      },
      "*"
    );
    if ("showMessage" in this && typeof this.showMessage === "function") {
      this.showMessage("Issue: " + data);
    }
    if (typeof this.showModalMessage === "function") {
      this.showModalMessage({
        heading: "Issue",
        main: data ? `<p>${data}</p>` : "<p>We had trouble connecting to the server.</p><p>Please try again later and let us know.</p>"
      });
    }
  });
  this.socket.on("result", (data) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    this.socket.disconnect();
    const result = data.result;
    const resetProgress2 = getData.call(this, ["resetProgress"]);
    setData.call(this, ["unusableShapes"], result.unusableShapes);
    setData.call(this, ["unavailableStock"], result.unavailableStock);
    setData.call(this, ["metadata"], result.metadata);
    if (!((_a = result.shapeList) == null ? void 0 : _a.length) || !result.stockList.length) {
      resetProgress2();
      if (typeof this.showModalMessage === "function") {
        let message = "<p>We did not manage to fit any parts.</p>";
        if ((_b = result == null ? void 0 : result.unusableShapes) == null ? void 0 : _b.length)
          message += "<p>No parts were usable - see the message at the bottom of the inputs widget for more detail.</p>";
        else
          message += "<p>Please double check your inputs.</p>";
        this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: message
          });
        });
      }
      (_c = window == null ? void 0 : window.top) == null ? void 0 : _c.postMessage(
        {
          type: "scError",
          message: "No parts were added - please double check your inputs."
        },
        "*"
      );
      if ("showMessage" in this && typeof this.showMessage === "function") {
        this.showMessage(
          "No parts were added - please double check your inputs."
        );
      }
      setData.call(this, ["thinking"], false);
      if (typeof this.toggleWidget === "function")
        this.toggleWidget.call(this, "inputs", true);
      return false;
    }
    if (result.shapeList.find((s) => !s.added)) {
      if (typeof this.showModalMessage === "function") {
        this.$nextTick(() => {
          this.showModalMessage({
            heading: "Parts unusable",
            main: "<p>We did not use all of your parts.</p><p>Check the results widget for more information.</p>"
          });
        });
      }
    }
    setData.call(this, ["progress", "complete"], true);
    setData.call(this, ["jobId"], data == null ? void 0 : data.jobId);
    this.toggleWidget("updateStock", false);
    this.toggleWidget("options", false);
    this.toggleWidget("offcuts", false);
    this.toggleWidget("results", false);
    this.toggleWidget("cutlist", false);
    this.toggleWidget("export", false);
    this.toggleWidget("labels", false);
    let saw;
    if (result == null ? void 0 : result.saw) {
      saw = new Saw(
        result == null ? void 0 : result.saw,
        ((_d = result == null ? void 0 : result.saw) == null ? void 0 : _d.stockType) ?? ((_f = (_e = result.stockList) == null ? void 0 : _e[0]) == null ? void 0 : _f.type)
      );
      setData.call(this, ["saw"], saw);
    }
    const stockList = recreateStockList({
      saw,
      stockList: result.stockList,
      removeScores: true,
      preventAutoRotation: true
    });
    setData.call(this, ["stockList"], stockList);
    const usedStock = getData.call(this, ["usedStock"]);
    if (usedStock.length) {
      this.$nextTick(() => {
        setData.call(this, ["activeStockId"], usedStock[0].id);
      });
    }
    setData.call(
      this,
      ["shapeList"],
      recreateShapeList({
        shapeList: result.shapeList,
        stockList,
        preventAutoRotation: true
      })
    );
    if (result == null ? void 0 : result.cutList) {
      setData.call(
        this,
        ["cutList"],
        recreateCutList({
          cutList: result.cutList,
          stockList
        })
      );
    }
    if (result == null ? void 0 : result.segmentList)
      setData.call(
        this,
        ["segmentList"],
        recreateSegmentList({
          segmentList: result.segmentList,
          stockList
        })
      );
    if (result == null ? void 0 : result.offcuts)
      setData.call(
        this,
        ["offcuts"],
        recreateOffcuts({
          offcuts: result.offcuts,
          stockList,
          preventAutoRotation: true
        })
      );
    if (result == null ? void 0 : result.metadata)
      setData.call(this, ["metadata"], result.metadata);
    if ((_g = result == null ? void 0 : result.evolutionVisData) == null ? void 0 : _g.length)
      setData.call(this, ["evolutionVisData"], result.evolutionVisData);
    else if (typeof this.toggleWidget === "function")
      this.toggleWidget.call(this, "evolution", false);
    if (typeof this.toggleWidget === "function")
      this.toggleWidget.call(this, "workbench", true);
    setData.call(this, ["thinking"], false);
    if ((_i = (_h = this.$refs) == null ? void 0 : _h.inputs) == null ? void 0 : _i.success)
      this.$refs.inputs.success = false;
    this.$nextTick(() => {
      var _a2, _b2;
      const addedShapes = getData.call(this, ["addedShapes"]);
      if (addedShapes.length === 0) {
        resetProgress2();
        if (typeof this.showModalMessage === "function") {
          let message = "<p>We did not manage to fit any parts.</p>";
          if ((_a2 = result == null ? void 0 : result.unusableShapes) == null ? void 0 : _a2.length)
            message += "<p>Some parts were not usable - see the message at the bottom of the inputs widget for more detail.</p>";
          else
            message += "<p>Please double check your inputs.</p>";
          this.showModalMessage({
            heading: "No layouts",
            main: message
          });
        }
        (_b2 = window == null ? void 0 : window.top) == null ? void 0 : _b2.postMessage(
          {
            type: "scError",
            message: "No parts were added."
          },
          "*"
        );
        console.warn("No parts were added.");
        if (typeof this.toggleWidget === "function")
          this.toggleWidget.call(this, "inputs", true);
      }
    });
  });
}
function isFieldPresent(fieldDefinitions, group, type, field) {
  var _a, _b;
  if (!type || !field)
    return false;
  if (typeof ((_b = (_a = fieldDefinitions == null ? void 0 : fieldDefinitions[type]) == null ? void 0 : _a[group]) == null ? void 0 : _b[field]) !== "undefined") {
    return true;
  }
  return false;
}
function isFieldEnabled(fieldDefinitions, group, type, field) {
  var _a;
  if (!type || !field)
    return false;
  if (isFieldPresent(fieldDefinitions, group, type, field)) {
    return (_a = fieldDefinitions[type][group][field]) == null ? void 0 : _a.enabled;
  }
  return false;
}
function setFieldEnabled(fieldDefinitions, group, type, field, enabled = true) {
  if (!isFieldPresent(fieldDefinitions, group, type, field))
    return false;
  if (isFieldPresent(fieldDefinitions, group, type, field)) {
    fieldDefinitions[type][group][field].enabled = enabled;
  }
}
function getInputMode(fieldDefinition, units) {
  if (fieldDefinition.type === "unitDependent") {
    return units === "decimal" ? "decimal" : "text";
  }
  if (fieldDefinition.type === "number")
    return "decimal";
  return "text";
}
function getInputType(fieldDefinition, units) {
  if (fieldDefinition.type === "unitDependent") {
    return units === "decimal" ? "number" : "text";
  }
  if (fieldDefinition.type === "boolean")
    return "checkbox";
  if (fieldDefinition.type === "number")
    return "number";
  return "text";
}
function getMinValue(fieldDef) {
  if (typeof fieldDef.min === "undefined")
    return null;
  if (typeof fieldDef.min === "function")
    return fieldDef.min();
  if (typeof fieldDef.min === "number")
    return fieldDef.min;
  return null;
}
function getMaxValue(fieldDef) {
  if (typeof fieldDef.max === "undefined")
    return null;
  if (typeof fieldDef.max === "function")
    return fieldDef.max();
  if (typeof fieldDef.max === "number")
    return fieldDef.max;
  return null;
}
const _sfc_main$4 = {
  name: "StockNavigation",
  emits: ["show-stock"],
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
  methods: {
    showStock(stockID) {
      this.$emit("show-stock", stockID);
    }
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$3 = { id: "mini-stock-nav" };
const _hoisted_2$3 = ["onMousedown"];
const _hoisted_3$3 = { class: "id" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.stockList, (stock, index) => {
      return openBlock(), createElementBlock("button", {
        key: index,
        class: normalizeClass(["nav-button", { selected: stock.id === $props.activeStockId }]),
        style: normalizeStyle({ backgroundColor: stock.id === $props.activeStockId ? "#" + $props.secondaryColor : "#" + $props.primaryColor }),
        onMousedown: ($event) => $options.showStock(stock.id)
      }, [
        createBaseVNode("div", _hoisted_3$3, toDisplayString$1(index + 1), 1),
        withDirectives(createBaseVNode("div", { class: "stack legibility" }, toDisplayString$1(stock.stack), 513), [
          [vShow, typeof stock.stack === "number" && stock.stack > 1]
        ])
      ], 46, _hoisted_2$3);
    }), 128))
  ]);
}
const StockNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "ShapePreview",
  props: {
    shape: {
      type: Object,
      default: () => {
        return null;
      }
    },
    buttonBackground: {
      type: String,
      default: "#e4e4e4"
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    }
  }
};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("path", { d: "m481.2 33.81c-8.938-3.656-19.31-1.656-26.16 5.219l-50.51 50.51c-40.23-35.729-92.43-57.539-148.53-57.539-99 0-187.47 66.31-215.09 161.3-3.72 12.7 3.59 26 16.31 29.7 12.81 3.781 26.06-3.625 29.75-16.31 21.73-74.59 91.23-126.69 169.03-126.69 43.12 0 83.35 16.42 114.7 43.4l-59.63 59.63c-6.875 6.875-8.906 17.19-5.219 26.16 3.719 8.969 12.47 14.81 22.19 14.81h143.9c13.259-.9 24.059-10.7 24.059-24v-144c0-9.72-5.8-18.47-14.8-22.19zm-26.5 254.29c-12.78-3.75-26.06 3.594-29.75 16.31-21.65 75.49-91.15 127.59-169.85 127.59-43.12 0-83.38-16.42-114.7-43.41l59.62-59.62c6.875-6.875 8.891-17.03 5.203-26-2.823-8.97-11.523-14.97-22.123-14.97h-143.05c-13.25 0-24.11 10.74-24.11 23.99v144c0 9.719 5.844 18.47 14.81 22.19 2.97 1.22 6.09 1.82 9.19 1.82 6.25 0 12.38-2.438 16.97-7.031l50.51-50.52c40.18 35.751 92.48 57.551 147.68 57.551 99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6z" }, null, -1);
const _hoisted_2$2 = [
  _hoisted_1$2
];
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "m512 256c0 6.688-2.812 13.09-7.719 17.62l-104 96c-4.581 4.28-10.481 6.38-16.281 6.38-6.469 0-12.91-2.594-17.62-7.719-9-9.75-8.406-24.94 1.344-33.91l58.876-54.371h-341.22l58.91 54.38c9.75 8.969 10.34 24.16 1.344 33.91-4.734 5.11-11.134 7.71-17.634 7.71-5.812 0-11.66-2.094-16.28-6.375l-104-96c-4.907-4.525-7.72-10.925-7.72-17.625s2.812-13.09 7.719-17.62l104-96c9.781-9.08 24.981-8.38 33.881 1.32 9 9.75 8.406 24.94-1.344 33.91l-58.876 54.39h341.3l-58.91-54.38c-9.75-8.969-10.34-24.16-1.344-33.91 8.874-9.71 24.074-10.41 33.874-1.31l104 96c4.9 4.5 7.7 10.9 7.7 17.6z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$2
];
const _hoisted_5$1 = {
  key: 2,
  class: "orientation",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1);
const _hoisted_7$1 = [
  _hoisted_6$1
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["shape-preview", [
      {
        "banding-x1": (_a = $props.shape.banding) == null ? void 0 : _a.x1,
        "banding-x2": (_b = $props.shape.banding) == null ? void 0 : _b.x2,
        "banding-y1": (_c = $props.shape.banding) == null ? void 0 : _c.y1,
        "banding-y2": (_d = $props.shape.banding) == null ? void 0 : _d.y2,
        "orientation-l": $props.shape.orientationLock === "l",
        "orientation-w": $props.shape.orientationLock === "w"
      }
    ]]),
    "aria-label": "Orientation & banding",
    style: normalizeStyle({
      background: $props.buttonBackground
    })
  }, [
    !$props.shape.orientationLock ? (openBlock(), createElementBlock("svg", {
      key: 0,
      class: "no-orientation",
      style: normalizeStyle({
        fill: $props.iconColor
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, _hoisted_2$2, 4)) : createCommentVNode("", true),
    $props.shape.orientationLock.trim().length ? (openBlock(), createElementBlock("svg", {
      key: 1,
      class: "orientation",
      style: normalizeStyle({
        fill: $props.iconColor ? $props.iconColor : "#ffffff"
      }),
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, _hoisted_4$1, 4)) : createCommentVNode("", true),
    $props.shape.orientationLock === " " ? (openBlock(), createElementBlock("svg", _hoisted_5$1, _hoisted_7$1)) : createCommentVNode("", true)
  ], 6);
}
const ShapePreview = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
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
const _hoisted_1$1 = { id: "spinner" };
const _hoisted_2$1 = ["width", "height"];
const _hoisted_3$1 = /* @__PURE__ */ createStaticVNode('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7);
const _hoisted_10$1 = [
  _hoisted_3$1
];
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1);
const _hoisted_12$1 = [
  _hoisted_11$1
];
const _hoisted_13$1 = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    !$props.complete ? (openBlock(), createElementBlock("svg", {
      key: 0,
      class: "loading",
      style: normalizeStyle({ width: $props.size + "px", height: $props.size + "px" }),
      width: $props.size,
      height: $props.size,
      viewBox: "0 0 300 300"
    }, _hoisted_10$1, 12, _hoisted_2$1)) : createCommentVNode("", true),
    $props.complete ? (openBlock(), createElementBlock("svg", {
      key: 1,
      class: "complete",
      style: normalizeStyle({ width: $props.size + "px", height: $props.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, _hoisted_12$1, 4)) : createCommentVNode("", true),
    $props.showNumber ? (openBlock(), createElementBlock("div", _hoisted_13$1, toDisplayString$1($props.number), 1)) : createCommentVNode("", true)
  ]);
}
const Spinner = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function hasMachining(shape) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  if (!shape.machining)
    return false;
  if ((_b = (_a = shape.machining) == null ? void 0 : _a.holes) == null ? void 0 : _b.length)
    return true;
  if ((_d = (_c = shape.machining) == null ? void 0 : _c.hingeHoles) == null ? void 0 : _d.length)
    return true;
  if ((_f = (_e = shape.machining) == null ? void 0 : _e.corners) == null ? void 0 : _f.length) {
    return (_h = (_g = shape.machining) == null ? void 0 : _g.corners) == null ? void 0 : _h.some((c) => c.type && c.size);
  }
  return false;
}
const Machining2 = /* @__PURE__ */ defineAsyncComponent(
  () => import("./Machining-zBp5vCuH.js")
);
const _sfc_main$1 = {
  name: "CheckoutCalculator",
  components: {
    StockNavigation,
    ShapePreview,
    Spinner,
    Machining: Machining2
    // Offcuts,
  },
  props: {
    debug: {
      type: Boolean,
      default: false
    },
    stock: {
      type: Array,
      default: () => []
    }
  },
  emits: ["result", "log", "error", "debug"],
  setup() {
    const { t, locale: locale2, fallbackLocale } = useI18n({
      locale: "en_US"
    });
    return {
      t,
      locale: locale2,
      fallbackLocale
    };
  },
  data() {
    const inputShapesRef = useLocalStorage(
      "Checkout/inputShapes",
      [],
      {
        serializer: {
          read: (v) => {
            const inputs = v ? JSON.parse(v) : [];
            return recreateInputShapes(inputs);
          },
          write: (v) => {
            const values = v.filter((s) => !(s == null ? void 0 : s.multiSelect));
            return JSON.stringify(values);
          }
        },
        listenToStorageChanges: false
      }
    );
    return {
      domain: window.location.hostname,
      connected: false,
      maintenanceMode: false,
      online: true,
      onlineTimer: null,
      allowOnlineMessages: true,
      socket: null,
      thinking: false,
      jobId: 0,
      //used for watchers to reset results
      height: null,
      successMetric: "areaEfficiency",
      enableEvo: false,
      saw: {
        bladeWidth: 1,
        cutPreference: "l",
        cutType: "guillotine",
        stockType: "sheet"
      },
      currentInputShape: null,
      inputShapes: inputShapesRef.value,
      inputStock: [],
      activeStockId: null,
      stockList: shallowRef([]),
      shapeList: shallowRef([]),
      cutList: shallowRef([]),
      offcuts: shallowRef([]),
      metadata: null,
      messageVisible: false,
      messageContent: "",
      vis: markRaw({}),
      visInit: false,
      isFullScreen: false,
      machiningEnabled: false,
      selectedShapeId: null,
      //default options
      options: {
        units: "decimal",
        decimalPlaces: 2,
        stackHeight: 100,
        maxParts: null,
        showBanding: false,
        disableBanding: false,
        disableOrientation: false,
        bandingTypes: [],
        //array of banding strings
        showDiagram: true,
        showProgressNumber: true,
        locale: "en_US"
      },
      //styles are declared here to prevent tampering
      creditStyles: {
        fontSize: "11px",
        textAlign: "right",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        paddingRight: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        userSelect: "none"
      },
      creditLinkStyles: {
        display: "block",
        color: "rgb(78, 78, 78)"
      },
      machiningOptions: {
        sides: {
          enabled: true
        },
        holes: {
          enabled: false
        },
        corners: {
          enabled: false,
          types: []
        },
        banding: {
          enabled: false
        },
        hingeHoles: {
          enabled: false
        },
        shelfHoles: {
          enabled: false
        }
      },
      canGoFullScreen: true,
      multiThicknesses: [],
      progress: {
        queue: 0,
        stockCount: 0,
        shapeCount: 0,
        complete: false
      },
      colors: {
        partA: "#118ab2",
        //also used for id - needs to be set
        partB: null,
        partHover: null,
        partSelected: null,
        stock: "#ffd166",
        //also used for stock-number
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      visOptions: {
        disableClick: false
      },
      viewportWidth: null,
      //this is debounced
      mounted: false,
      loaded: false,
      w: 0,
      h: 0,
      //remove definition to disable
      fieldDefinitions: {
        parts: {
          sheet: {
            l: {
              enabled: true,
              type: "unitDependent"
            },
            w: {
              enabled: true,
              type: "unitDependent"
            },
            t: {
              enabled: false,
              type: "unitDependent"
            },
            q: {
              enabled: true,
              type: "number",
              default: 1
            },
            name: {
              enabled: true,
              type: "string"
            },
            orientation: {
              enabled: true,
              type: null,
              w: "26px"
            },
            machining: {
              enabled: false,
              type: null,
              w: "26px"
            },
            banding: {
              enabled: true,
              type: "unitDependent"
            }
          },
          linear: {
            l: {
              enabled: true,
              type: "unitDependent"
            },
            q: {
              enabled: true,
              type: "number",
              default: 1
            },
            name: {
              enabled: true,
              type: "string"
            }
          }
        }
      }
    };
  },
  computed: {
    server() {
      return this.domain === "sc-store" ? "http://localhost:5000" : "https://api.cutlistevo.com/";
    },
    selectedShape() {
      if (!this.selectedShapeId) {
        return null;
      } else {
        return this.inputShapes.find(
          (shape) => shape.id === this.selectedShapeId
        );
      }
    },
    inputType() {
      return this.options.units === "decimal" ? "number" : "string";
    },
    inputMode() {
      return this.options.units === "decimal" ? "decimal" : "text";
    },
    partColumns() {
      let number2 = Object.values(
        this.fieldDefinitions.parts[this.saw.stockType]
      ).filter((f) => f.enabled).length;
      if (this.inputShapes.length > 1)
        number2++;
      if (this.isFieldEnabled("parts", "banding"))
        number2--;
      return number2;
    },
    partColumnsStyle() {
      const widthValues = {
        id: "34px",
        del: "30px"
      };
      const widths = [];
      for (const key in this.fieldDefinitions.parts[this.saw.stockType]) {
        if (["banding", "trim"].includes(key))
          continue;
        const field = this.fieldDefinitions.parts[this.saw.stockType][key];
        if (field.enabled)
          widths.push(field.w ?? "1fr");
      }
      widths.unshift(widthValues.id);
      if (this.inputShapes.length > 1)
        widths.push(widthValues.del);
      const style = widths.join(" ");
      return style;
    },
    addedShapes() {
      return this.shapeList.filter((shape) => shape.added);
    },
    uniqueShapes() {
      return this.shapeList.filter((shape) => shape.added && !shape.duplicate);
    },
    numUniqueShapes() {
      return this.uniqueShapes.length;
    },
    uniqueAddedShapes() {
      return this.uniqueShapes.filter((s) => s.added);
    },
    uniqueStock() {
      return this.stockList.filter((stock) => stock.used && !stock.duplicate);
    },
    uniqueUsedStock() {
      return this.uniqueStock.filter((s) => s.used).map((s) => {
        s.q = this.uniqueStock.filter((u) => u.parentID === s.parentID).reduce((total, s2) => total + (s2 == null ? void 0 : s2.stack) > 0 ? s2.stack : 1, 0);
        return s;
      });
    },
    usedStock() {
      return getUsedStock(this.stockList);
    },
    activeStock() {
      if (!this.activeStockId)
        return null;
      return getActiveStock(this.stockList, this.activeStockId);
    },
    activeStockArea() {
      return this.activeStock.getArea();
    },
    stackedStock() {
      return getStackedStock(this.stockList);
    },
    activeShapes() {
      return this.shapeList.filter(
        (shape) => {
          var _a, _b;
          return shape.added && ((_a = shape == null ? void 0 : shape.stock) == null ? void 0 : _a.id) === ((_b = this.activeStock) == null ? void 0 : _b.id);
        }
      );
    },
    activeCuts() {
      return getActiveCuts(this.cutList, this.activeStock);
    },
    unplacedShapes() {
      return unplacedShapeTally(this.shapeList);
    },
    totalCutLength() {
      if (!this.cutList.length || !this.metadata.totalCutLength)
        return 0;
      return this.metadata.totalCutLength;
    },
    totalInputShapes() {
      return this.inputShapes.reduce((total, s) => total + s.q, 0);
    }
  },
  watch: {
    online(val) {
      online.call(this, val);
    },
    "options.locale": function(val) {
      this.locale = val;
    },
    jobId(val) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (!val)
        return;
      if (this.visInit)
        this.updateVisSize();
      if (!this.metadata)
        this.$emit("error", "SmartCut - no metadata received from server");
      this.changePartQuantitiesBasedOnThickness();
      const result = {
        jobId: this.jobId,
        requiredStock: (_a = this.metadata) == null ? void 0 : _a.totalUsedStock,
        totalPartArea: (_b = this.metadata) == null ? void 0 : _b.totalPartArea,
        totalParts: (_c = this.metadata) == null ? void 0 : _c.totalPartsProduced,
        totalCuts: (_d = this.metadata) == null ? void 0 : _d.totalCuts,
        totalCutLength: (_e = this.metadata) == null ? void 0 : _e.totalCutLength,
        bandingLengthByType: (_f = this.metadata) == null ? void 0 : _f.bandingLengthByType,
        totalStockCost: (_g = this == null ? void 0 : this.metadata) == null ? void 0 : _g.totalStockCost,
        stockAreaCost: (_h = this == null ? void 0 : this.metadata) == null ? void 0 : _h.stockAreaCost,
        unplacedParts: (_i = this.metadata) == null ? void 0 : _i.unplacedParts,
        hasMachining: (_j = this.metadata) == null ? void 0 : _j.hasMachining,
        parts: this.uniqueAddedShapes.map((p2) => {
          var _a2;
          return {
            l: p2.l,
            w: p2.w,
            t: p2 == null ? void 0 : p2.t,
            q: (_a2 = this.metadata.addedPartTally) == null ? void 0 : _a2[p2.parentID]
          };
        }),
        stock: this.uniqueUsedStock.map((s) => {
          var _a2;
          return {
            name: s == null ? void 0 : s.name,
            l: s.l,
            w: s.w,
            t: s == null ? void 0 : s.t,
            q: (_a2 = this.metadata.usedStockTally) == null ? void 0 : _a2[s.parentID]
          };
        }),
        offcuts: this.offcuts.map((s) => {
          return {
            l: s.l,
            w: s.w,
            t: (s == null ? void 0 : s.t) ?? null,
            q: s.q
          };
        })
      };
      this.$emit("log", ["result", result]);
      if (this.unplacedShapes.length) {
        const parts2 = this.unplacedShapes.map((s) => s.id).join();
        this.showMessage(`The following parts did not fit: ${parts2}`);
      }
      this.$emit("result", result);
    },
    viewportWidth() {
      if (this.visInit)
        this.updateVisSize();
    },
    activeStockId() {
      if (this.visInit)
        this.$nextTick(() => this.refresh());
    },
    stock(stock) {
      if (!Array.isArray(stock))
        console.warn("SmartCut - stock must be passed as an array");
      this.inputStock = [];
      this.multiThicknesses = [];
      this.setFieldEnabled("parts", "t", false);
      this.inputShapes.forEach((shape) => shape.t = null);
      stock.forEach((s, i2) => {
        s.type = this.saw.stockType;
        if (s.t && typeof s.t === "string" && s.t.includes(",")) {
          s.t = s.t.split(",");
          if (s.t.length !== 2) {
            this.$emit(
              "error",
              "double thickness options must have two options"
            );
          } else {
            this.setFieldEnabled("parts", "t", true);
            this.multiThicknesses = s.t;
            s.t = s.t[0];
          }
        }
        const stock2 = this.createStockInput(s);
        this.inputStock.push(stock2);
        this.$emit("log", [`stock ${i2 + 1}`, stock2]);
      });
      if (this.inputStock.length) {
        if (!this.inputShapes.length) {
          this.addShape(1, false);
        } else {
          this.inputShapes.forEach((s) => s.t = this.inputStock[0].t);
        }
      }
    }
  },
  mounted() {
    if (this.mounted)
      return;
    this.locale = this.options.locale;
    initSocket.call(this, this.server);
    this.viewportWidth = window.innerWidth;
    this.mounted = true;
  },
  methods: {
    toggleFullScreen() {
      if (this.isFullScreen)
        this.closeFullScreen();
      else
        this.openFullScreen();
    },
    openFullScreen() {
      document.getElementById("smartcut-app").requestFullscreen();
      this.isFullScreen = true;
    },
    closeFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.isFullScreen = false;
    },
    openMachining(shape = null) {
      this.currentInputShape = shape;
      if (shape && shape.l && shape.w) {
        this.machiningEnabled = true;
      } else {
        alert("Please enter dimensions first");
      }
    },
    closeMachining() {
      this.machiningEnabled = false;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    },
    hasMachining(shape = null) {
      if (!shape)
        return false;
      return hasMachining(shape);
    },
    reset() {
      resetProgress(this.progress);
      this.stockList = [];
      this.shapeList = [];
      this.cutList = [];
      this.jobId = 0;
    },
    async updateVisSize(immediate = false) {
      if (!this.vis)
        return false;
      await this.vis.updateSize(immediate);
      this.clearSelection();
    },
    isFieldEnabled(type, field) {
      return isFieldEnabled(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field
      );
    },
    isFieldPresent(type, field) {
      return isFieldPresent(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field
      );
    },
    setFieldEnabled(type, field, enabled = true) {
      return setFieldEnabled(
        this.fieldDefinitions,
        this.saw.stockType,
        type,
        field,
        enabled
      );
    },
    clear() {
      this.inputShapes.length = 0;
      this.addShape(1, true);
    },
    calculate() {
      var _a;
      this.clearMessage();
      if (((_a = this.options) == null ? void 0 : _a.maxParts) && this.totalInputShapes > this.options.maxParts) {
        this.showMessage(
          `The maximum number of parts is ${this.options.maxParts}`
        );
        return;
      }
      calculate.call(this);
    },
    init(data) {
      this.$emit("log", ["init", data]);
      if (data == null ? void 0 : data.type)
        delete data.type;
      if (data == null ? void 0 : data.options) {
        const options = data.options;
        const requiredOptions = ["stockType", "cutPreference", "bladeWidth"];
        requiredOptions.forEach((o) => {
          if (!(o in options))
            this.$emit("error", `${o} is a required option`);
        });
        const nextSteps = {
          debug: () => {
            this.$emit("debug", options.debug);
            this.$emit("log", ["data received", data]);
          },
          stockType: () => {
            this.saw.stockType = options.stockType;
          },
          cutPreference: () => {
            const allowedCutPreferences = [
              "efficiency",
              "length",
              "width",
              "beam"
            ];
            if (allowedCutPreferences.includes(options.cutPreference)) {
              const { cutType, cutPreference } = mapLegacyCutPreference(
                options.cutPreference
              );
              this.saw.cutType = cutType;
              this.saw.cutPreference = cutPreference;
              if (options.stockType === "linear") {
                this.saw.cutType = null;
                this.saw.cutPreference = null;
              }
            } else {
              console.warn(
                `SmartCut - ${options.cutPreference} is not one of ${allowedCutPreferences.join()}`
              );
            }
          },
          bladeWidth: () => {
            if (options.bladeWidth >= 0) {
              this.saw.bladeWidth = options.bladeWidth;
            } else {
              console.warn(
                `SmartCut - you provided an incorrect blade width of: ${options.bladeWidth}`
              );
            }
          },
          disableClick: () => {
            this.visOptions.disableClick = options.disableClick;
          },
          colors: () => {
            for (const [key, value2] of Object.entries(options == null ? void 0 : options.colors)) {
              if (value2)
                this.colors[key] = value2;
            }
          },
          maxParts: () => {
            this.options.maxParts = options.maxParts;
          },
          disableOrientation: () => {
            this.setFieldEnabled(
              "parts",
              "orientation",
              !options.disableOrientation
            );
          },
          disablePartName: () => {
            this.setFieldEnabled("parts", "name", !options.disablePartName);
          },
          bandingTypes: () => {
            if (options.disableBanding) {
              return this.setFieldEnabled("parts", "banding", false);
            }
            this.options.bandingTypes = options.bandingTypes;
            if (this.options.bandingTypes && Object.values(this.options.bandingTypes).length > 0) {
              return this.setFieldEnabled("parts", "banding", true);
            }
            return this.setFieldEnabled("parts", "banding", false);
          },
          locale: () => {
            this.options.locale = options.locale;
          },
          units: () => {
            this.options.units = (options == null ? void 0 : options.units) ? options.units : "decimal";
          },
          enableMachining: () => {
            var _a, _b, _c, _d, _e;
            this.setFieldEnabled(
              "parts",
              "machining",
              options.enableMachining ?? false
            );
            this.machiningOptions = options.machining;
            ["holes", "hingeHoles"].forEach((m) => {
              var _a2, _b2;
              if ((_a2 = options == null ? void 0 : options.machining) == null ? void 0 : _a2[m]) {
                this.machiningOptions[m].enabled = (_b2 = options == null ? void 0 : options.machining) == null ? void 0 : _b2[m].enabled;
              }
            });
            if ((_c = (_b = (_a = options == null ? void 0 : options.machining) == null ? void 0 : _a.corners) == null ? void 0 : _b.types) == null ? void 0 : _c.length) {
              this.machiningOptions.corners.enabled = true;
              this.machiningOptions.corners.types = (_e = (_d = options == null ? void 0 : options.machining) == null ? void 0 : _d.corners) == null ? void 0 : _e.types;
            }
          }
        };
        for (const option in data == null ? void 0 : data.options) {
          this.options[option] = data.options[option];
          if (option in nextSteps)
            nextSteps[option]();
        }
        if (this.visInit === false) {
          const visData = {
            elementID: "#smartcut-svg-wrapper",
            env: "production",
            main: true,
            units: this.options.units,
            decimalPlaces: this.options.decimalPlaces,
            saw: this.saw,
            app: false,
            embed: true,
            colors: this.colors,
            options: this.visOptions,
            vueComponent: this
          };
          initVis.call(this, visData);
        }
      }
    },
    showMessage(content = {
      main: null,
      heading: null,
      list: []
    }) {
      var _a;
      if (typeof content === "object") {
        this.messageContent = content == null ? void 0 : content.main;
        if ((_a = content == null ? void 0 : content.list) == null ? void 0 : _a.length) {
          this.messageContent += "<ul>";
          content.list.forEach((item) => {
            this.messageContent += `<li>${item}</li>`;
          });
          this.messageContent += "</ul>";
        }
      } else {
        this.messageContent = content;
      }
      this.messageVisible = true;
    },
    clearMessage() {
      this.messageVisible = false;
      this.messageContent = null;
    },
    createStockInput({
      l = null,
      w: w2 = null,
      t = null,
      q = 1,
      name = "",
      trim = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
      },
      cost = 0
    }) {
      const stockInput = new InputStock({
        id: (this.inputStock.length + 1).toString(),
        units: this.options.units,
        w: w2,
        l,
        t,
        q,
        cost,
        autoAdd: true,
        name,
        trim
      });
      return stockInput;
    },
    createShapeInput({
      l = null,
      w: w2 = null,
      t = null,
      q = 1,
      orientationLock = null
    }) {
      var _a;
      const inputShape = new InputShape({
        id: (this.inputShapes.length + 1).toString(),
        units: this.options.units,
        l,
        w: this.saw.stockType === "linear" ? (_a = this.inputStock[0]) == null ? void 0 : _a.w : w2,
        t: this.multiThicknesses.length ? this.multiThicknesses[0] : t,
        q,
        orientationLock
      });
      return inputShape;
    },
    addShape(number2 = 1, focus = true) {
      var _a, _b;
      for (let i2 = number2; i2--; )
        this.inputShapes.push(
          this.createShapeInput({
            t: ((_b = (_a = this.inputStock) == null ? void 0 : _a[0]) == null ? void 0 : _b.t) ?? null
          })
        );
      if (focus) {
        this.$nextTick(() => {
          var _a2, _b2;
          if (number2 === 1) {
            if (Array.isArray((_a2 = this.$refs) == null ? void 0 : _a2.shapeInputFocus))
              (_b2 = this.$refs) == null ? void 0 : _b2.shapeInputFocus.pop().focus();
            else
              this.$refs.shapeInputFocus.focus();
          }
          resetProgress(this.progress);
        });
      }
    },
    removeShape(index) {
      this.inputShapes.splice(index, 1);
      resetProgress(this.progress);
    },
    createStock(stock, i2) {
      const l = convertUnit(stock.l);
      const w2 = convertUnit(stock.w);
      const t = stock.t ? convertUnit(stock.t) : null;
      const newStock = new Stock({
        id: (i2 + 1).toString() + ".0",
        name: `${l}x${w2}`,
        l,
        w: w2,
        t,
        saw: new Saw(this.saw),
        autoAdd: true,
        cost: stock == null ? void 0 : stock.cost,
        trim: stock.trim,
        allowExactFitShapes: stock.allowExactFitShapes,
        type: this.saw.stockType
      });
      this.stockList.push(newStock);
      return newStock.issues;
    },
    createStockList() {
      return createStockList.call(this, false);
    },
    //this is for double thickness bonded sheets
    changePartQuantitiesBasedOnThickness() {
      if (this.multiThicknesses.length > 0) {
        const smallestThickness = convertUnit(this.multiThicknesses[0]);
        this.shapeList.forEach((s) => {
          s.q = s.q * (convertUnit(s.t) / smallestThickness);
          s.t = smallestThickness;
        });
      }
    },
    createShapeList() {
      var _a;
      const issues = [];
      for (let index = 0; index < this.inputShapes.length; index++) {
        const shape = this.inputShapes[index];
        const s = new Shape({
          id: (index + 1).toString() + ".0",
          l: convertUnit(shape == null ? void 0 : shape.l),
          w: convertUnit(shape == null ? void 0 : shape.w),
          t: shape.t ? convertUnit(shape == null ? void 0 : shape.t) : null,
          q: typeof shape.q !== "number" ? parseInt(shape.q) : shape.q,
          name: shape.name,
          orientationLock: shape.orientationLock,
          banding: shape.banding,
          bandingType: shape.bandingType,
          machining: shape.machining
        });
        this.shapeList.push(s);
        if ((_a = s == null ? void 0 : s.issues) == null ? void 0 : _a.length)
          issues.push(...s.issues);
      }
      this.changePartQuantitiesBasedOnThickness();
      return issues;
    },
    toggleShapeOrientation(shape) {
      const orientations = ["", "l", "w"];
      let index = orientations.findIndex((o) => o === shape.orientationLock);
      index++;
      if (index > 2)
        index = 0;
      shape.orientationLock = orientations[index];
    },
    refresh() {
      this.refreshStock();
      this.refreshShapes();
    },
    refreshStock() {
      refreshStock.call(this);
    },
    refreshShapes() {
      refreshShapes.call(this, this.uniqueShapes.length);
    },
    updateViewportWidth(width) {
      this.viewportWidth = width;
    },
    toggleWidget(name, show = null) {
      toggleWidget.call(this, name, show);
    },
    clearSelection() {
      clearSelection.call(this);
    },
    showStock(id) {
      showStock.call(this, id);
    },
    deleteBanding(item) {
      for (const key in item.banding)
        item.banding[key] = false;
      for (const key in item.bandingType)
        item.bandingType[key] = "";
    }
  }
};
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en_US": {
        "length": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Length"]);
        },
        "l": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L"]);
        },
        "width": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Width"]);
        },
        "w": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["W"]);
        },
        "thickness": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Thickness"]);
        },
        "t": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "quantity": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quantity"]);
        },
        "q": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Q"]);
        },
        "machining": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Machining"]);
        },
        "orientation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Orientation"]);
        },
        "add part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Add part"]);
        },
        "remove part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Remove part"]);
        },
        "calculate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Calculate"]);
        },
        "full screen": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Full screen"]);
        },
        "b": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["B"]);
        },
        "banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Banding"]);
        },
        "delete banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Delete banding"]);
        },
        "delete": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Delete"]);
        },
        "clear": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Clear"]);
        },
        "l1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L1"]);
        },
        "l2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L2"]);
        },
        "w1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["W1"]);
        },
        "w2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["W2"]);
        },
        "Powered by SmartCut": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Powered by SmartCut"]);
        }
      },
      "ca_ES": {
        "length": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Llarg"]);
        },
        "l": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L"]);
        },
        "width": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ample"]);
        },
        "w": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A"]);
        },
        "thickness": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gruix"]);
        },
        "t": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["G"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom"]);
        },
        "quantity": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quantitat"]);
        },
        "q": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Q"]);
        },
        "machining": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mecanitzat"]);
        },
        "orientation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gir"]);
        },
        "add part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Afegeix"]);
        },
        "remove part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina"]);
        },
        "calculate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Calcula"]);
        },
        "full screen": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pantalla completa"]);
        },
        "b": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cantell"]);
        },
        "banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Banding"]);
        },
        "delete banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina cantell"]);
        },
        "delete": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina"]);
        },
        "clear": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Neteja"]);
        },
        "l1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L1"]);
        },
        "l2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L2"]);
        },
        "w1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A1"]);
        },
        "w2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A1"]);
        },
        "Powered by SmartCut": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desenvolupat per SmartCut"]);
        }
      },
      "es_ES": {
        "length": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Largo"]);
        },
        "l": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L"]);
        },
        "width": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ancho"]);
        },
        "w": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A"]);
        },
        "thickness": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Grueso"]);
        },
        "t": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["G"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "quantity": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cantidad"]);
        },
        "q": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["C"]);
        },
        "machining": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mecanizado"]);
        },
        "orientation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Giro"]);
        },
        "add part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Añade"]);
        },
        "remove part": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina"]);
        },
        "calculate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Calcula"]);
        },
        "full screen": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pantalla completa"]);
        },
        "b": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Canto"]);
        },
        "banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Banding"]);
        },
        "delete banding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina canto"]);
        },
        "delete": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elimina"]);
        },
        "clear": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Borra"]);
        },
        "l1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L1"]);
        },
        "l2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L2"]);
        },
        "w1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A1"]);
        },
        "w2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A1"]);
        },
        "Powered by SmartCut": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desarrollado por SmartCut"]);
        }
      }
    }
  });
}
const _hoisted_1 = {
  id: "shape-input",
  class: "inputs no-margin-top grid-table"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "cell" }, null, -1);
const _hoisted_3 = {
  key: 0,
  class: "cell"
};
const _hoisted_4 = {
  key: 1,
  class: "cell"
};
const _hoisted_5 = {
  key: 2,
  class: "cell"
};
const _hoisted_6 = { class: "cell" };
const _hoisted_7 = {
  key: 3,
  class: "cell"
};
const _hoisted_8 = {
  key: 4,
  class: "cell center"
};
const _hoisted_9 = {
  key: 5,
  class: "cell center"
};
const _hoisted_10 = {
  key: 6,
  class: "cell"
};
const _hoisted_11 = { class: "cell" };
const _hoisted_12 = {
  key: 0,
  class: "number length cell"
};
const _hoisted_13 = ["for"];
const _hoisted_14 = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"];
const _hoisted_15 = {
  key: 1,
  class: "number width cell"
};
const _hoisted_16 = ["for"];
const _hoisted_17 = ["id", "onUpdate:modelValue", "type", "inputmode", "placeholder"];
const _hoisted_18 = {
  key: 2,
  class: "thickness cell"
};
const _hoisted_19 = ["id", "onUpdate:modelValue"];
const _hoisted_20 = ["value"];
const _hoisted_21 = { class: "number quantity cell" };
const _hoisted_22 = ["for"];
const _hoisted_23 = ["id", "onUpdate:modelValue", "placeholder"];
const _hoisted_24 = {
  key: 3,
  class: "text name cell"
};
const _hoisted_25 = ["id", "onUpdate:modelValue", "aria-label", "placeholder"];
const _hoisted_26 = {
  key: 4,
  class: "cell"
};
const _hoisted_27 = ["onClick"];
const _hoisted_28 = {
  key: 6,
  class: "cell"
};
const _hoisted_29 = ["aria-label", "onClick"];
const _hoisted_30 = {
  id: "banding-label",
  class: "label small-font"
};
const _hoisted_31 = { class: "inputs" };
const _hoisted_32 = ["for"];
const _hoisted_33 = ["id", "onUpdate:modelValue"];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, " ✘ ", -1);
const _hoisted_35 = ["value"];
const _hoisted_36 = ["for"];
const _hoisted_37 = ["id", "onUpdate:modelValue"];
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, " ✘ ", -1);
const _hoisted_39 = ["value"];
const _hoisted_40 = ["for"];
const _hoisted_41 = ["id", "onUpdate:modelValue"];
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, " ✘ ", -1);
const _hoisted_43 = ["value"];
const _hoisted_44 = ["for"];
const _hoisted_45 = ["id", "onUpdate:modelValue"];
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, " ✘ ", -1);
const _hoisted_47 = ["value"];
const _hoisted_48 = ["aria-label", "onClick"];
const _hoisted_49 = { class: "button-wrapper main" };
const _hoisted_50 = ["aria-label"];
const _hoisted_51 = ["aria-label", "disabled"];
const _hoisted_52 = ["aria-label"];
const _hoisted_53 = { id: "part-count" };
const _hoisted_54 = ["innerHTML"];
const _hoisted_55 = {
  key: 2,
  id: "progress"
};
const _hoisted_56 = {
  id: "smartcut-svg-wrapper",
  class: "svg-wrapper production"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_Machining = resolveComponent("Machining");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_ShapePreview = resolveComponent("ShapePreview");
  const _component_Spinner = resolveComponent("Spinner");
  const _component_StockNavigation = resolveComponent("StockNavigation");
  return openBlock(), createElementBlock(Fragment, null, [
    $data.machiningEnabled ? (openBlock(), createBlock(_component_Machining, {
      key: 0,
      shape: $data.currentInputShape,
      options: $data.machiningOptions,
      onClose: $options.closeMachining
    }, null, 8, ["shape", "options", "onClose"])) : createCommentVNode("", true),
    createBaseVNode("div", {
      id: "smartcut-checkout",
      class: normalizeClass({ fullscreen: $data.isFullScreen })
    }, [
      $data.canGoFullScreen ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: "smartcut-full-screen",
        class: "icon-left",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleFullScreen())
      }, [
        createVNode(_component_font_awesome_icon, { icon: ["fasr", "expand"] }),
        createTextVNode(" " + toDisplayString$1($setup.t("full screen")), 1)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_1, [
        $data.inputShapes.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "row table-heading",
          style: normalizeStyle({ "grid-template-columns": $options.partColumnsStyle })
        }, [
          _hoisted_2,
          $options.isFieldEnabled("parts", "l") ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("span", null, [
              createVNode(_component_font_awesome_icon, { icon: ["fasr", "arrows-left-right"] }),
              createTextVNode(" " + toDisplayString$1($setup.t("length")), 1)
            ])
          ])) : createCommentVNode("", true),
          $options.isFieldEnabled("parts", "w") ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("span", null, [
              createVNode(_component_font_awesome_icon, { icon: ["fasr", "arrows-up-down"] }),
              createTextVNode(" " + toDisplayString$1($setup.t("width")), 1)
            ])
          ])) : createCommentVNode("", true),
          $options.isFieldEnabled("parts", "t") ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString$1($setup.t("thickness")), 1)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, toDisplayString$1($setup.t("quantity")), 1),
          $options.isFieldEnabled("parts", "name") ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString$1($setup.t("name")), 1)) : createCommentVNode("", true),
          $options.isFieldEnabled("parts", "orientation") ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString$1($setup.t("orientation")), 1)) : createCommentVNode("", true),
          $data.canGoFullScreen && $options.isFieldEnabled("parts", "machining") ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString$1($setup.t("machining")), 1)) : createCommentVNode("", true),
          $data.inputShapes.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true)
        ], 4)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.inputShapes, (shape, shapeIndex) => {
          return openBlock(), createElementBlock("div", {
            key: shapeIndex,
            class: "row grid-table",
            style: normalizeStyle({ "grid-template-columns": $options.partColumnsStyle })
          }, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", {
                class: "id",
                style: normalizeStyle({
                  background: $data.colors.partA,
                  color: $data.colors.text
                })
              }, toDisplayString$1(shapeIndex + 1), 5)
            ]),
            $options.isFieldEnabled("parts", "l") ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("label", {
                for: "part-length-" + shapeIndex
              }, toDisplayString$1($setup.t("length")), 9, _hoisted_13),
              withDirectives(createBaseVNode("input", {
                id: "part-length-" + shapeIndex,
                ref_for: true,
                ref: shapeIndex === $data.inputShapes.length - 1 ? "shapeInputFocus" : void 0,
                "onUpdate:modelValue": ($event) => shape.l = $event,
                type: $options.inputType,
                inputmode: $options.inputMode,
                min: "0",
                placeholder: $setup.t("l")
              }, null, 8, _hoisted_14), [
                [
                  vModelDynamic,
                  shape.l,
                  void 0,
                  {
                    lazy: true,
                    trim: true
                  }
                ]
              ])
            ])) : createCommentVNode("", true),
            $options.isFieldEnabled("parts", "w") ? (openBlock(), createElementBlock("div", _hoisted_15, [
              createBaseVNode("label", {
                for: "part-width-" + shapeIndex
              }, toDisplayString$1($setup.t("width")), 9, _hoisted_16),
              withDirectives(createBaseVNode("input", {
                id: "part-width-" + shapeIndex,
                "onUpdate:modelValue": ($event) => shape.w = $event,
                type: $options.inputType,
                inputmode: $options.inputMode,
                min: "0",
                placeholder: $setup.t("w")
              }, null, 8, _hoisted_17), [
                [
                  vModelDynamic,
                  shape.w,
                  void 0,
                  {
                    lazy: true,
                    trim: true
                  }
                ]
              ])
            ])) : createCommentVNode("", true),
            $options.isFieldEnabled("parts", "t") ? (openBlock(), createElementBlock("div", _hoisted_18, [
              withDirectives(createBaseVNode("select", {
                id: "part-thickness" + shapeIndex,
                "onUpdate:modelValue": ($event) => shape.t = $event,
                "aria-label": "Thickness"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.multiThicknesses, (thickness, index) => {
                  return openBlock(), createElementBlock("option", {
                    key: index,
                    value: thickness
                  }, toDisplayString$1(thickness), 9, _hoisted_20);
                }), 128))
              ], 8, _hoisted_19), [
                [
                  vModelSelect,
                  shape.t,
                  void 0,
                  { lazy: true }
                ]
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("label", {
                for: "part-quantity-" + shapeIndex
              }, toDisplayString$1($setup.t("quantity")), 9, _hoisted_22),
              withDirectives(createBaseVNode("input", {
                id: "part-quantity-" + shapeIndex,
                "onUpdate:modelValue": ($event) => shape.q = $event,
                type: "number",
                inputmode: "numeric",
                min: "0",
                placeholder: $setup.t("q")
              }, null, 8, _hoisted_23), [
                [
                  vModelText,
                  shape.q,
                  void 0,
                  {
                    lazy: true,
                    number: true
                  }
                ]
              ])
            ]),
            $options.isFieldEnabled("parts", "name") ? (openBlock(), createElementBlock("div", _hoisted_24, [
              withDirectives(createBaseVNode("input", {
                id: "part-name-" + shapeIndex,
                "onUpdate:modelValue": ($event) => shape.name = $event,
                "aria-label": $setup.t("name"),
                type: "text",
                placeholder: $setup.t("name")
              }, null, 8, _hoisted_25), [
                [
                  vModelText,
                  shape.name,
                  void 0,
                  { lazy: true }
                ]
              ])
            ])) : createCommentVNode("", true),
            $options.isFieldEnabled("parts", "orientation") ? (openBlock(), createElementBlock("div", _hoisted_26, [
              createVNode(_component_ShapePreview, {
                shape,
                "button-background": $data.colors.button,
                "icon-color": $data.colors.buttonText,
                onClick: ($event) => $options.toggleShapeOrientation(shape)
              }, null, 8, ["shape", "button-background", "icon-color", "onClick"])
            ])) : createCommentVNode("", true),
            $data.canGoFullScreen && $options.isFieldEnabled("parts", "machining") ? (openBlock(), createElementBlock("div", {
              key: 5,
              class: normalizeClass(["cell machining", { active: $options.hasMachining(shape) }])
            }, [
              createBaseVNode("button", {
                type: "button",
                onClick: ($event) => $options.openMachining(shape)
              }, [
                createVNode(_component_font_awesome_icon, { icon: ["fass", "hammer"] })
              ], 8, _hoisted_27)
            ], 2)) : createCommentVNode("", true),
            $data.inputShapes.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_28, [
              createBaseVNode("button", {
                type: "button",
                class: "remove",
                "aria-label": $setup.t("remove part"),
                onClick: ($event) => $options.removeShape(shapeIndex)
              }, [
                createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
              ], 8, _hoisted_29)
            ])) : createCommentVNode("", true),
            $options.isFieldEnabled("parts", "banding") && Object.values($data.options.bandingTypes).length > 0 ? (openBlock(), createElementBlock("div", {
              key: 7,
              class: "group banding",
              style: normalizeStyle({ "grid-column-end": "span " + ($options.partColumns + 1) })
            }, [
              createBaseVNode("div", _hoisted_30, toDisplayString$1($setup.t("b")), 1),
              createBaseVNode("div", _hoisted_31, [
                createBaseVNode("div", null, [
                  createBaseVNode("label", {
                    for: "banding-y1-" + shapeIndex
                  }, toDisplayString$1($setup.t("l1")), 9, _hoisted_32),
                  withDirectives(createBaseVNode("select", {
                    id: "banding-y1-" + shapeIndex,
                    "onUpdate:modelValue": ($event) => shape.bandingType.y1 = $event
                  }, [
                    _hoisted_34,
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.options.bandingTypes, (_value, id, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: id,
                        value: id
                      }, toDisplayString$1(index + 1), 9, _hoisted_35);
                    }), 128))
                  ], 8, _hoisted_33), [
                    [
                      vModelSelect,
                      shape.bandingType.y1,
                      void 0,
                      { lazy: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", {
                    for: "banding-y2-" + shapeIndex
                  }, toDisplayString$1($setup.t("l2")), 9, _hoisted_36),
                  withDirectives(createBaseVNode("select", {
                    id: "banding-y2-" + shapeIndex,
                    "onUpdate:modelValue": ($event) => shape.bandingType.y2 = $event
                  }, [
                    _hoisted_38,
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.options.bandingTypes, (_value, id, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: id,
                        value: id
                      }, toDisplayString$1(index + 1), 9, _hoisted_39);
                    }), 128))
                  ], 8, _hoisted_37), [
                    [
                      vModelSelect,
                      shape.bandingType.y2,
                      void 0,
                      { lazy: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", {
                    for: "banding-x1-" + shapeIndex
                  }, toDisplayString$1($setup.t("w1")), 9, _hoisted_40),
                  withDirectives(createBaseVNode("select", {
                    id: "banding-x1-" + shapeIndex,
                    "onUpdate:modelValue": ($event) => shape.bandingType.x1 = $event
                  }, [
                    _hoisted_42,
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.options.bandingTypes, (_value, id, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: id,
                        value: id
                      }, toDisplayString$1(index + 1), 9, _hoisted_43);
                    }), 128))
                  ], 8, _hoisted_41), [
                    [
                      vModelSelect,
                      shape.bandingType.x1,
                      void 0,
                      { lazy: true }
                    ]
                  ])
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("label", {
                    for: "banding-x2-" + shapeIndex
                  }, toDisplayString$1($setup.t("w2")), 9, _hoisted_44),
                  withDirectives(createBaseVNode("select", {
                    id: "banding-x2-" + shapeIndex,
                    "onUpdate:modelValue": ($event) => shape.bandingType.x2 = $event
                  }, [
                    _hoisted_46,
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.options.bandingTypes, (_value, id, index) => {
                      return openBlock(), createElementBlock("option", {
                        key: id,
                        value: id
                      }, toDisplayString$1(index + 1), 9, _hoisted_47);
                    }), 128))
                  ], 8, _hoisted_45), [
                    [
                      vModelSelect,
                      shape.bandingType.x2,
                      void 0,
                      { lazy: true }
                    ]
                  ])
                ]),
                createBaseVNode("button", {
                  class: "delete",
                  "aria-label": $setup.t("delete banding"),
                  onClick: ($event) => $options.deleteBanding(shape)
                }, [
                  createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
                ], 8, _hoisted_48)
              ])
            ], 4)) : createCommentVNode("", true)
          ], 4);
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_49, [
        createBaseVNode("button", {
          type: "button",
          "aria-label": $setup.t("add part"),
          style: normalizeStyle({ background: $data.colors.button, color: $data.colors.buttonText }),
          class: "add c-btn icon-left",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.addShape(1))
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fasr", "plus-large"] }),
          createTextVNode(" Add ")
        ], 12, _hoisted_50),
        createBaseVNode("button", {
          class: "c-btn calculate icon-left",
          type: "button",
          "aria-label": $setup.t("calculate"),
          style: normalizeStyle({
            background: $data.colors.button,
            color: $data.colors.buttonText
          }),
          disabled: !((_a = $data.inputStock) == null ? void 0 : _a.length) || $data.thinking,
          onClick: _cache[2] || (_cache[2] = ($event) => $options.calculate())
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "calculator"] }),
          createTextVNode("Calculate price ")
        ], 12, _hoisted_51),
        createBaseVNode("button", {
          type: "button",
          class: "c-btn clear",
          "aria-label": $setup.t("clear"),
          onClick: _cache[3] || (_cache[3] = ($event) => $options.clear())
        }, [
          createVNode(_component_font_awesome_icon, { icon: ["fass", "trash"] })
        ], 8, _hoisted_52),
        createBaseVNode("div", _hoisted_53, toDisplayString$1($options.totalInputShapes) + toDisplayString$1(((_b = $data.options) == null ? void 0 : _b.maxParts) ? "/" + $data.options.maxParts : ""), 1)
      ]),
      createBaseVNode("div", {
        id: "credit",
        style: normalizeStyle($data.creditStyles)
      }, [
        createBaseVNode("a", {
          title: "SmartCut | Cut list optimization software",
          style: normalizeStyle($data.creditLinkStyles),
          target: "_blank",
          href: "https://smartcut.dev/"
        }, toDisplayString$1($setup.t("Powered by SmartCut")), 5)
      ], 4),
      $data.messageVisible ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: "messages",
        innerHTML: $data.messageContent
      }, null, 8, _hoisted_54)) : createCommentVNode("", true),
      ($data.options.showDiagram ? $data.thinking && !$data.progress.complete : $data.thinking || $data.progress.complete) ? (openBlock(), createElementBlock("div", _hoisted_55, [
        createVNode(_component_Spinner, {
          size: 50,
          number: $data.progress.shapeCount,
          complete: $data.progress.complete,
          "show-number": $data.options.showProgressNumber
        }, null, 8, ["number", "complete", "show-number"])
      ])) : createCommentVNode("", true),
      withDirectives(createBaseVNode("div", _hoisted_56, null, 512), [
        [vShow, $data.options.showDiagram && $data.jobId > 0 && $data.progress.complete]
      ]),
      $data.options.showDiagram && $data.visInit && $options.usedStock.length > 1 && $data.jobId > 0 && $data.progress.complete ? (openBlock(), createBlock(_component_StockNavigation, {
        key: 3,
        ref: "stockNavigation",
        "active-stock-id": $data.activeStockId,
        "stock-list": $options.stackedStock,
        "stock-count": $data.stockList.length,
        "viewport-width": $data.viewportWidth,
        onShowStock: $options.showStock
      }, null, 8, ["active-stock-id", "stock-list", "stock-count", "viewport-width", "onShowStock"])) : createCommentVNode("", true)
    ], 2)
  ], 64);
}
if (typeof block0 === "function")
  block0(_sfc_main$1);
const CheckoutCalculator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "WordPress",
  components: {
    CheckoutCalculator
  },
  data() {
    return {
      debug: true,
      el: {},
      settings: {},
      options: {},
      inputs: {},
      formatting: {},
      product: {},
      stock: [],
      bandingData: {},
      variations: []
    };
  },
  created() {
    console.log("💥 Powered by https://smartcut.dev", smartcutConfig.version);
  },
  mounted() {
    this.bandingData = (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null;
    this.variations = (smartcutConfig == null ? void 0 : smartcutConfig.variations) ?? null;
    this.cacheElements();
    this.cacheInputFields();
    this.configureProduct(smartcutConfig);
    this.configurePricing(smartcutConfig);
    this.configureStock();
    this.initCheckout();
    jQuery(".variations_form").on("reset_data", () => {
      this.disableCutToSize();
    });
    jQuery(".variations_form").on("found_variation", (e, variation) => {
      var _a, _b, _c;
      this.reset();
      this.stock = [];
      const thickness = (_a = variation == null ? void 0 : variation.attributes) == null ? void 0 : _a.attribute_thickness;
      this.product.selected_thickness = thickness;
      if (this.product.multiple_sizes) {
        const size2 = this.getSizes(variation);
        if (!size2) {
          this.disableCutToSize();
          this.el.cart_button.disabled = true;
          this.el.quantity.readOnly = true;
          return this.error(
            "The size of this multiple size product could not be found"
          );
        }
        if (!Array.isArray(size2)) {
          if (this.isFullSheetSize(size2)) {
            this.disableCutToSize();
            this.enableFullSheet();
            this.el.quantity.style.display = "inline-block";
          } else {
            this.enableCutToSize();
            this.el.quantity.style.display = "none";
          }
        } else {
          this.enableCutToSize();
        }
        this.log(["variation found", size2, thickness]);
        let stockSizes;
        if (((_b = this.variations) == null ? void 0 : _b.length) && this.product.selected_thickness) {
          if (Array.isArray(size2)) {
            const v = this.variations.find(
              (v2) => v2.attributes.thickness === this.product.selected_thickness
            );
            if (!v)
              return this.error(
                `variation not found for thickness ${this.product.selected_thickness}`
              );
            stockSizes = size2.map((size22) => {
              return {
                size: size22,
                l: size22.split("x")[0],
                w: size22.split("x")[1],
                t: this.product.selected_thickness,
                price: v == null ? void 0 : v.price
              };
            });
          } else {
            stockSizes = this.variations.filter((v) => {
              var _a2, _b2;
              if (/\d+x\d+/.test((_a2 = v == null ? void 0 : v.attributes) == null ? void 0 : _a2.size)) {
                return this.product.selected_thickness === ((_b2 = v == null ? void 0 : v.attributes) == null ? void 0 : _b2.thickness);
              }
              return false;
            }).map((v) => {
              var _a2, _b2, _c2;
              return {
                size: (_a2 = v == null ? void 0 : v.attributes) == null ? void 0 : _a2.size,
                l: (_b2 = v == null ? void 0 : v.attributes) == null ? void 0 : _b2.size.split("x")[0],
                w: (_c2 = v == null ? void 0 : v.attributes) == null ? void 0 : _c2.size.split("x")[1],
                t: this.product.selected_thickness,
                price: v == null ? void 0 : v.price
                //the base price entered by the admin
              };
            });
          }
          stockSizes.forEach((size22) => {
            const newStock = this.createStock(
              size22.l,
              size22.w,
              size22.t,
              size22.price
            );
            this.stock.push(newStock);
          });
        }
      } else {
        this.el.quantity.style.display = "inline-block";
        const v = this.variations.find(
          (v2) => v2.attributes.thickness === this.product.selected_thickness
        );
        if (!v)
          return this.error(
            `variation not found for thickness ${this.product.selected_thickness}`
          );
        const thickness2 = (_c = variation == null ? void 0 : variation.attributes) == null ? void 0 : _c.attribute_thickness;
        this.stock.push(
          this.createStock(this.product.l, this.product.w, thickness2, v.price)
        );
        this.enableCutToSize();
      }
    });
    const elements = [
      "div.quantity > input.plus",
      "div.quantity > input.minus",
      "div.quantity .qty-plus",
      "div.quantity .qty-minus"
    ];
    elements.forEach((e) => {
      const el = document.querySelector(e);
      if (el)
        el.style.display = "none";
    });
  },
  methods: {
    toggleDebug(e) {
      this.debug = e;
    },
    log(messages2) {
      if (this.debug) {
        console.log("SmartCut -", ...messages2);
      }
    },
    enableCutToSize() {
      const elements = ["checkout", "intro_text", "offcuts", "banding_key"];
      elements.forEach((e) => {
        const el = this.el[e];
        if (el)
          el.style.display = "block";
      });
      if (this.isPricingTableNeeded()) {
        this.el["pricing_table"].style.display = "table";
      }
      this.el.cart_button.disabled = true;
      this.el.quantity.readOnly = true;
      this.el.quantity.style.display = "inline-block";
    },
    disableCutToSize() {
      var _a;
      const elements = [
        "checkout",
        "intro_text",
        "offcuts",
        "banding_key",
        "pricing_table"
      ];
      elements.forEach((e) => {
        const el = this.el[e];
        if (el)
          el.style.display = "none";
      });
      if ((_a = this.el) == null ? void 0 : _a.quantity) {
        this.el.quantity.style.display = "inline-block";
      }
    },
    enableFullSheet() {
      this.el.cart_button.disabled = false;
      this.el.quantity.readOnly = false;
    },
    parseValue(val, type) {
      let parsed;
      switch (type) {
        case "string":
        case "hex":
          parsed = this.parseString(val);
          break;
        case "boolean":
          parsed = this.parseBoolean(val);
          break;
        case "int":
          parsed = this.parseInt(val);
          break;
        case "float":
          parsed = this.parseFloat(val);
          break;
        default:
          parsed = this.parseString(val);
          break;
      }
      return parsed;
    },
    parseInt(val) {
      if (!val)
        return 0;
      return parseInt(val);
    },
    parseFloat(val) {
      if (!val)
        return 0;
      return parseFloat(val);
    },
    parseBoolean(val) {
      if (!val)
        return false;
      return val === "1";
    },
    parseString(val) {
      if (!val)
        return "";
      return val;
    },
    initCheckout() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
      if (!smartcutConfig) {
        console.error("SmartCut config not found");
        return;
      }
      for (const key in smartcutConfig.settings_fields) {
        this.settings[key] = this.parseValue(
          smartcutConfig.settings[key],
          smartcutConfig.settings_fields[key]
        );
      }
      this.options = {
        debug: this.settings.debug,
        units: this.settings.units,
        locale: smartcutConfig.locale,
        //saw settings
        bladeWidth: this.settings.blade_width,
        stockType: this.settings.stock_type,
        cutPreference: this.settings.cut_preference,
        maxParts: this.settings.max_parts ?? null,
        //disable defauls options
        disableBanding: this.settings.disable_banding,
        disableOrientation: this.settings.disable_orientation,
        disablePartName: this.settings.disable_part_name,
        //diagram
        showDiagram: !this.settings.hide_diagram,
        showProgressNumber: this.settings.pricing_strategy === "part_area" ? false : true,
        //banding
        bandingTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? null,
        enableMachining: this.settings.enable_machining,
        //machining - this needs to match the MachiningOptions type
        machining: {
          sides: {
            enabled: this.settings.machining_sides
          },
          holes: {
            enabled: this.settings.machining_holes,
            defaultDiameter: this.settings.machining_holes_default_diameter,
            diameters: this.settings.machining_holes_diameters.split(",").map((v) => v.trim()).filter((v) => v),
            minDiameter: this.settings.machining_holes_min_diameter,
            maxDiameter: this.settings.machining_holes_max_diameter,
            enableDepth: this.settings.machining_holes_depth,
            depths: this.settings.machining_holes_depths.split(",").map((v) => v.trim()).filter((v) => v),
            defaultDepth: this.settings.machining_holes_default_depth,
            minDepth: this.settings.machining_holes_min_depth,
            maxDepth: this.settings.machining_holes_max_depth
          },
          hingeHoles: {
            enabled: this.settings.machining_hinge_holes,
            minimumHoleDistance: this.settings.machining_hinge_holes_minimum_hole_distance,
            defaultDistanceFromEdge: this.settings.machining_hinge_holes_default_distance_from_edge,
            defaultOuterSpacing: this.settings.machining_hinge_holes_default_outer_spacing,
            defaultHingeLength: this.settings.machining_hinge_holes_default_hinge_length
          },
          corners: {
            enabled: this.settings.machining_radius_corners || this.settings.machining_bevel_corners,
            types: [
              this.settings.machining_radius_corners ? "radius" : null,
              this.settings.machining_bevel_corners ? "bevel" : null
            ].filter((v) => v),
            minValue: this.settings.machining_corners_min_value,
            maxValue: this.settings.machining_corners_max_value
          },
          banding: {
            enabled: !this.settings.disable_banding && ((_a = smartcutConfig == null ? void 0 : smartcutConfig.banding_data) == null ? void 0 : _a.length) ? true : false,
            enableCorners: this.settings.machining_corners_enable_banding,
            types: smartcutConfig == null ? void 0 : smartcutConfig.banding_data,
            enableTypes: (smartcutConfig == null ? void 0 : smartcutConfig.banding_data) ?? false
          }
        },
        //colors
        colors: {
          partA: ((_b = this.settings) == null ? void 0 : _b.part_a_color) ? (_c = this.settings) == null ? void 0 : _c.part_a_color : "#1d9bc4",
          partB: ((_d = this.settings) == null ? void 0 : _d.part_b_color) ? (_e = this.settings) == null ? void 0 : _e.part_b_color : "#065d7a",
          partHover: ((_f = this.settings) == null ? void 0 : _f.part_hover_color) ? (_g = this.settings) == null ? void 0 : _g.part_hover_color : "#f8b029",
          partSelected: ((_h = this.settings) == null ? void 0 : _h.part_selected_color) ? (_i = this.settings) == null ? void 0 : _i.part_selected_color : "#5bc85b",
          stock: ((_j = this.settings) == null ? void 0 : _j.stock_color) ? (_k = this.settings) == null ? void 0 : _k.stock_color : "#ffd166",
          button: ((_l = this.settings) == null ? void 0 : _l.button_color) ? (_m = this.settings) == null ? void 0 : _m.button_color : "#118ab2",
          buttonText: ((_n = this.settings) == null ? void 0 : _n.button_text_color) ? (_o = this.settings) == null ? void 0 : _o.button_text_color : "#ffffff",
          text: ((_p = this.settings) == null ? void 0 : _p.text_color) ? (_q = this.settings) == null ? void 0 : _q.text_color : "#ffffff"
        }
      };
      this.$refs.calculator.init({
        stock: this.stock,
        options: this.options,
        type: this.product.type,
        variations: this.variations ?? null
      });
    },
    formatPrice(price = 0) {
      if (typeof price === "string")
        price = parseFloat(price);
      return price.toFixed(this.formatting.number_of_decimals).replace(".", this.formatting.decimal_separator);
    },
    configureProduct(smartcutConfig2) {
      const multiple_sizes = (smartcutConfig2 == null ? void 0 : smartcutConfig2.multiple_sizes) === "1";
      this.product = {
        type: smartcutConfig2 == null ? void 0 : smartcutConfig2.product_type,
        multiple_sizes,
        size: (smartcutConfig2 == null ? void 0 : smartcutConfig2.size) ? smartcutConfig2.size.split(" | ") : [],
        l: !multiple_sizes && (smartcutConfig2 == null ? void 0 : smartcutConfig2.l) ? this.parseFloat(smartcutConfig2.l) : null,
        w: !multiple_sizes && (smartcutConfig2 == null ? void 0 : smartcutConfig2.w) ? this.parseFloat(smartcutConfig2.w) : null,
        t: (smartcutConfig2 == null ? void 0 : smartcutConfig2.t) ?? null
        //do not parse to allow for multiple thicknesses separated by a comma
      };
      this.product.stock_name = smartcutConfig2.stock_name;
      if (!this.product.multiple_sizes) {
        if (!this.product.l) {
          this.error("product 'length' attribute not available");
        }
        if (!this.product.w) {
          this.error("product 'width' attribute not available");
        }
      }
    },
    configurePricing(smartcutConfig2) {
      this.formatting = {
        thousands_separator: smartcutConfig2 == null ? void 0 : smartcutConfig2.thousands_separator,
        decimal_separator: smartcutConfig2 == null ? void 0 : smartcutConfig2.decimal_separator,
        number_of_decimals: smartcutConfig2 == null ? void 0 : smartcutConfig2.number_of_decimals,
        currency_symbol: smartcutConfig2 == null ? void 0 : smartcutConfig2.currency_symbol,
        currency_position: smartcutConfig2 == null ? void 0 : smartcutConfig2.currency_position
      };
    },
    cacheElements() {
      this.el.checkout = document.getElementById("smartcut-app");
      if (!this.el.checkout)
        return this.error("checkout iframe not found");
      this.el.intro_text = document.getElementById("smartcut-intro-text");
      this.el.pricing_table = document.getElementById("smartcut-pricing-table");
      this.el.offcuts = document.getElementById("include_offcuts_field");
      this.el.banding_key = document.getElementById("smartcut-banding-key");
      this.el.banding_total_price = document.querySelector(
        "#smartcut-banding-total bdi .smartcut-price-selector"
      );
      this.el.cut_length_price = document.querySelector(
        "#smartcut-cut-length-total bdi .smartcut-price-selector"
      );
      this.el.per_part_price = document.querySelector(
        "#smartcut-per-part-total bdi .smartcut-price-selector"
      );
      this.el.surcharge_price = document.querySelector(
        "#smartcut-surcharge-total bdi .smartcut-price-selector"
      );
      this.el.quantity = document.querySelector(".smartcut-stock-quantity");
      this.el.cart_button = document.querySelector(
        ".single_add_to_cart_button"
      );
      if (!this.el.quantity)
        return this.error("quantity field not found");
      if (!this.el.cart_button)
        return this.error("cart button not found");
      this.el.quantity.readOnly = true;
      this.el.cart_button.disabled = true;
    },
    createStock(l = null, w2 = null, t = null, cost = null) {
      const stock = {
        name: this.product.stock_name,
        type: this.settings.stock_type,
        l,
        w: w2,
        t,
        cost: parseFloat(cost),
        trim: {
          x1: this.settings.stock_trim_x1 ?? 0,
          x2: this.settings.stock_trim_x2 ?? 0,
          y1: this.settings.stock_type === "linear" ? 0 : this.settings.stock_trim_y1 ?? 0,
          y2: this.settings.stock_type === "linear" ? 0 : this.settings.stock_trim_y2 ?? 0
        }
      };
      return stock;
    },
    configureStock() {
      var _a, _b;
      if (!((_a = this.product) == null ? void 0 : _a.stock_name))
        this.error("product name not specified");
      if (this.product.type === "variable") {
        this.disableCutToSize();
      } else {
        this.enableCutToSize();
        this.stock = [];
        if (this.product.multiple_sizes) {
          this.product.size.forEach((size2) => {
            var _a2;
            const [l, w2] = size2.split("x");
            const newStock = this.createStock(
              l,
              w2,
              (_a2 = this.product) == null ? void 0 : _a2.t,
              size2.price
            );
            this.stock.push(newStock);
          });
        } else {
          this.stock.push(
            this.createStock(this.product.l, this.product.w, (_b = this.product) == null ? void 0 : _b.t)
          );
        }
      }
    },
    getTotalBandingPrice(totalBanding) {
      let total = 0;
      if (typeof totalBanding === "object") {
        for (let [key, length2] of Object.entries(totalBanding)) {
          if (typeof length2 === "string")
            length2 = parseFloat(length2);
          const cost = length2 / (this.settings.units === "fraction" ? 12 : 1e3) * parseFloat(this.bandingData[key]["price"]);
          total += cost;
        }
        return total;
      } else {
        return 0;
      }
    },
    reset() {
      this.el.quantity.value = 1;
      this.el.cart_button.disabled = true;
      this.inputs["smartcut-cut-to-size-surcharge"].value = 0;
      if (this.el.banding_total_price) {
        this.el.banding_total_price.innerText = this.formatPrice(0);
      }
      if (this.el.cut_length_price) {
        this.el.cut_length_price.innerText = this.formatPrice(0);
      }
      if (this.el.per_part_price) {
        this.el.per_part_price.innerText = this.formatPrice(0);
      }
      for (const key in this.inputs) {
        this.inputs[key].value = null;
      }
    },
    error(message) {
      console.error(`SmartCut - ${message}`);
      return;
    },
    isQuantityPricing() {
      if ((smartcutConfig == null ? void 0 : smartcutConfig.product_type) === "variable")
        return false;
      switch (this.settings.pricing_strategy) {
        case "full_sheet":
        case "full_sheet_plus_cut_length":
        case "full_sheet_plus_num_parts":
          return true;
      }
      return false;
    },
    isBandingEnabled() {
      if (this.settings.disable_banding === "1")
        return false;
      if (!this.bandingData || !Object.values(this.bandingData).length)
        return false;
      return true;
    },
    isSurchargeEnabled() {
      var _a;
      if (((_a = this.settings) == null ? void 0 : _a.surcharge_type) === "none")
        return false;
      if (this.settings.surcharge === "0.00")
        return false;
      return true;
    },
    isPricingTableNeeded() {
      if (this.settings.pricing_strategy === "full_sheet_plus_cut_length")
        return true;
      if (this.settings.pricing_strategy === "full_sheet_plus_num_parts")
        return true;
      if (this.isSurchargeEnabled())
        return true;
      if (this.isBandingEnabled())
        return true;
      return false;
    },
    /**
     * @param {WC_Product_Variation} variation
     * @returns {string[] | string}
     */
    getSizes(variation) {
      var _a, _b;
      let sizes = null;
      if (variation) {
        sizes = (_a = variation == null ? void 0 : variation.attributes) == null ? void 0 : _a.attribute_size;
      }
      if (!sizes)
        sizes = (_b = this.product) == null ? void 0 : _b.size;
      return sizes;
    },
    isFullSheetSize(size2) {
      return /\d+x\d+/.test(size2);
    },
    cacheInputFields() {
      smartcutConfig.input_fields.forEach((f) => {
        const fieldId = f.replaceAll("_", "-");
        this.inputs[fieldId] = document.getElementById(fieldId);
      });
    },
    result(data) {
      var _a, _b, _c, _d;
      this.reset();
      const quantityPricing = this.isQuantityPricing();
      let totalPrice = quantityPricing ? data.totalStockCost / data.requiredStock : 0;
      this.log(["result event received", data]);
      if (!(data == null ? void 0 : data.jobId))
        return;
      if (this.product.multiple_sizes) {
        this.log(["result event received for multiple sizes"]);
      }
      switch (this.settings.pricing_strategy) {
        case "full_sheet":
          {
            this.log(["calculating cost by full sheet"]);
            if (!quantityPricing) {
              this.el.quantity.value = 1;
            } else {
              this.el.quantity.value = data.requiredStock;
            }
            this.el.cart_button.disabled = false;
          }
          break;
        case "part_area":
          {
            this.log(["calculating cost by part area in meters / sq feet"]);
            const area = this.settings.units === "fraction" ? (data == null ? void 0 : data.totalPartArea) / 144 : (data == null ? void 0 : data.totalPartArea) / 1e6;
            this.log([
              `part area in square ${this.settings.units === "fraction" ? "feet" : "meters"}`,
              area
            ]);
            this.el.quantity.value = area.toFixed(2);
            this.el.cart_button.disabled = false;
          }
          break;
        case "cut_length":
          {
            this.log(["calculating cost by cut length in feet / meters"]);
            const cutLength = (data == null ? void 0 : data.totalCutLength) / (this.settings.units === "fraction" ? 12 : 1e3);
            this.el.quantity.value = cutLength.toFixed(2);
            this.el.cart_button.disabled = false;
          }
          break;
        case "full_sheet_plus_cut_length":
          {
            this.log(["calculating cost by full sheet plus cut length"]);
            if (!quantityPricing) {
              this.el.quantity.value = 1;
              this.el.quantity.style.display = "none";
            } else {
              this.el.quantity.style.display = "inline-block";
              this.el.quantity.value = data.requiredStock;
            }
            const cutLength = (data == null ? void 0 : data.totalCutLength) / (this.settings.units === "fraction" ? 12 : 1e3);
            const cutLengthTotal = cutLength * this.settings.cut_length_price;
            if (this.el.cut_length_price) {
              this.el.cut_length_price.innerText = this.formatPrice(cutLengthTotal);
            }
            this.inputs["smartcut-cut-length-price"].value = cutLengthTotal;
            totalPrice += cutLengthTotal;
            this.el.cart_button.disabled = false;
          }
          break;
        case "full_sheet_plus_num_parts":
          {
            this.log(["calculating cost by full sheet plus number of parts"]);
            if (!quantityPricing) {
              this.el.quantity.value = 1;
              this.el.quantity.style.display = "none";
            } else {
              this.el.quantity.style.display = "inline-block";
              this.el.quantity.value = data.requiredStock;
            }
            const partPrice = data.totalParts * this.settings.per_part_price;
            if (this.el.per_part_price) {
              this.el.per_part_price.innerText = this.formatPrice(partPrice);
            }
            this.inputs["smartcut-per-part-price"].value = partPrice;
            totalPrice += partPrice;
            this.el.cart_button.disabled = false;
          }
          break;
      }
      if (!quantityPricing) {
        if (!data.totalStockCost) {
          return this.error(
            "Total stock cost not returned for a multiple size product"
          );
        }
        const sizePrice = parseFloat(data.totalStockCost);
        this.log(["total price", sizePrice]);
        document.getElementById("smartcut-custom-price").value = sizePrice.toString();
        totalPrice += sizePrice;
      }
      if (this.isBandingEnabled()) {
        const bandingPrice = this.getTotalBandingPrice(
          data.bandingLengthByType
        );
        this.inputs["smartcut-banding-price"].value = bandingPrice;
        if (this.el.banding_total_price) {
          this.el.banding_total_price.innerText = this.formatPrice(bandingPrice);
        }
        totalPrice += bandingPrice;
      }
      if (this.isSurchargeEnabled()) {
        if ((_a = this.settings) == null ? void 0 : _a.surcharge) {
          let surCharge = 0;
          if (((_b = this.settings) == null ? void 0 : _b.surcharge_type) === "per_sheet") {
            surCharge = parseFloat((_c = this.settings) == null ? void 0 : _c.surcharge) * parseFloat(data.requiredStock);
          } else {
            surCharge = parseFloat((_d = this.settings) == null ? void 0 : _d.surcharge);
          }
          this.inputs["smartcut-cut-to-size-surcharge"].value = surCharge;
          if (this.el.surcharge_price) {
            this.el.surcharge_price.innerText = this.formatPrice(surCharge);
          }
          this.log(["added surcharge", surCharge]);
          totalPrice += surCharge;
        }
      }
      const variationPriceEl = document.querySelector(
        ".woocommerce-variation-price .smartcut-price-selector"
      );
      if (variationPriceEl) {
        variationPriceEl.innerText = this.formatPrice(totalPrice);
      }
      this.inputs["smartcut-job-id"].value = data == null ? void 0 : data.jobId;
      this.inputs["smartcut-total-cut-length"].value = data == null ? void 0 : data.totalCutLength;
      this.inputs["smartcut-part-area"].value = data == null ? void 0 : data.totalPartArea;
      this.inputs["smartcut-total-cuts"].value = data == null ? void 0 : data.totalCuts;
      this.inputs["smartcut-total-parts"].value = data == null ? void 0 : data.totalParts;
      this.inputs["smartcut-machining"].value = (data == null ? void 0 : data.hasMachining) ? "Y" : "N";
      const dimensions = data == null ? void 0 : data.parts.map((p2) => {
        return `${p2.l}x${p2.w} [${p2.q}]`;
      }).join(", ");
      this.inputs["smartcut-dimensions"].value = dimensions;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckoutCalculator = resolveComponent("CheckoutCalculator");
  return openBlock(), createBlock(_component_CheckoutCalculator, {
    ref: "calculator",
    debug: $data.debug,
    stock: $data.stock,
    onLog: $options.log,
    onError: $options.error,
    onDebug: $options.toggleDebug,
    onResult: $options.result
  }, null, 8, ["debug", "stock", "onLog", "onError", "onDebug", "onResult"]);
}
const WordPress = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function ownKeys$1(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty$1(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var noop = function noop2() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined")
    _WINDOW = window;
  if (typeof document !== "undefined")
    _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined")
    _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined")
    _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {}, _ref$userAgent = _ref.userAgent, userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION$1 = function() {
  try {
    return true;
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = "classic";
var FAMILY_SHARP = "sharp";
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
function familyProxy(obj) {
  return new Proxy(obj, {
    get: function get22(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
  "fa": "solid",
  "fas": "solid",
  "fa-solid": "solid",
  "far": "regular",
  "fa-regular": "regular",
  "fal": "light",
  "fa-light": "light",
  "fat": "thin",
  "fa-thin": "thin",
  "fad": "duotone",
  "fa-duotone": "duotone",
  "fab": "brands",
  "fa-brands": "brands",
  "fak": "kit",
  "fakd": "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
  "fa": "solid",
  "fass": "solid",
  "fa-solid": "solid",
  "fasr": "regular",
  "fa-regular": "regular",
  "fasl": "light",
  "fa-light": "light",
  "fast": "thin",
  "fa-thin": "thin"
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var prefixes = /* @__PURE__ */ new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray(prefixes), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function(n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "")
    return true;
  if (val === "false")
    return false;
  if (val === "true")
    return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  var attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var _default = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
if (!_config.autoReplaceSvg)
  _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function(key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set22(val) {
      _config[key] = val;
      _onChangeCb.forEach(function(cb) {
        return cb(config);
      });
    },
    get: function get22() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function set2(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function(cb) {
      return cb(config);
    });
  },
  get: function get2() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function() {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i2 = headChildren.length - 1; i2 > -1; i2--) {
    var child = headChildren[i2];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size2 = 12;
  var id = "";
  while (size2-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array2 = [];
  for (var i2 = (obj || []).length >>> 0; i2--; ) {
    array2[i2] = obj[i2];
  }
  return array2;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter(function(i2) {
      return i2;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref2) {
  var transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path2 = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path: path2
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform, _ref2$width = _ref2.width, width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width, _ref2$height = _ref2.height, height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height, _ref2$startCentered = _ref2.startCentered, startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }
  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER])
  w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles)
  w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks)
  w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims)
  w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded)
    DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM)
    return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children2 = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children2.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d2) {
    return func.call(thisContext, a, b, c, d2);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length2 = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i2, key, result;
  if (initialValue === void 0) {
    i2 = 1;
    result = subject[keys[0]];
  } else {
    i2 = 0;
    result = initialValue;
  }
  for (; i2 < length2; i2++) {
    key = keys[i2];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string2) {
  var output = [];
  var counter2 = 0;
  var length2 = string2.length;
  while (counter2 < length2) {
    var value2 = string2.charCodeAt(counter2++);
    if (value2 >= 55296 && value2 <= 56319 && counter2 < length2) {
      var extra = string2.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value2 & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value2);
        counter2--;
      }
    } else {
      output.push(value2);
    }
  }
  return output;
}
function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string2, index) {
  var size2 = string2.length;
  var first = string2.charCodeAt(index);
  var second;
  if (first >= 55296 && first <= 56319 && size2 > index + 1) {
    second = string2.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function(acc, iconName) {
    var icon3 = icons[iconName];
    var expanded = !!icon3.icon;
    if (expanded) {
      acc[icon3.iconName] = icon3.icon;
    } else {
      acc[iconName] = icon3;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles, shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts2 = cls.split("-");
  var prefix = parts2[0];
  var iconName = parts2.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build2() {
  var lookup2 = function lookup22(reducer) {
    return reduce(styles, function(o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup2(function(acc, icon3, iconName) {
    if (icon3[3]) {
      acc[icon3[3]] = iconName;
    }
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "number";
      });
      aliases.forEach(function(alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup2(function(acc, icon3, iconName) {
    acc[iconName] = iconName;
    if (icon3[2]) {
      var aliases = icon3[2].filter(function(a) {
        return typeof a === "string";
      });
      aliases.forEach(function(alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup2(function(acc, icon3, iconName) {
    var aliases = icon3[2];
    acc[iconName] = iconName;
    aliases.forEach(function(alias) {
      acc[alias] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function(acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function(c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon2() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$family = params.family, family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups, skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;
  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }
  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function(v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }
  var canonical = values.reduce(function(acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);
    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === FAMILY_SHARP && (styles["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = /* @__PURE__ */ function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add2() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix)
          defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix = _normalized$key.prefix, iconName = _normalized$key.iconName, icon3 = _normalized$key.icon;
        var aliases = icon3[2];
        if (!additions[prefix])
          additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function(alias) {
            if (typeof alias === "string") {
              additions[prefix][alias] = icon3;
            }
          });
        }
        additions[prefix][iconName] = icon3;
      });
      return additions;
    }
  }]);
  return Library2;
}();
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref2) {
  var obj = _ref2.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function(k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function(plugin) {
    var mixout8 = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout8).forEach(function(tk) {
      if (typeof mixout8[tk] === "function") {
        obj[tk] = mixout8[tk];
      }
      if (_typeof$1(mixout8[tk]) === "object") {
        Object.keys(mixout8[tk]).forEach(function(sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout8[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks8 = plugin.hooks();
      Object.keys(hooks8).forEach(function(hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks8[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function(hookFn) {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName)
    return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto2() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject("Operation requires a DOM of some kind.");
    }
  },
  watch: function watch2() {
    var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function() {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof$1(_icon) === "object" && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf("fa-") === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === "string" && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === "string") {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function autoReplace2() {
  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot, autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg)
    api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get22() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get22() {
      if (!IS_DOM)
        return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref2) {
  var children2 = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform = _ref2.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles2), {}, {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children: children2
  }];
}
function asSymbol(_ref2) {
  var prefix = _ref2.prefix, iconName = _ref2.iconName, children2 = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
        id
      }),
      children: children2
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix = params.prefix, iconName = params.iconName, transform = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix === "fak";
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
  });
  var _ref22 = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  }, children2 = _ref22.children, attributes = _ref22.attributes;
  args.children = children2;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content, width = params.width, height = params.height, transform = params.transform, title = params.title, extra = params.extra, _params$watchable2 = params.watchable, watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  var styles2 = _objectSpread2$1({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content, title = params.title, extra = params.extra;
  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  var val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var styles$1 = namespace.styles;
function asFoundIcon(icon3) {
  var width = icon3[0];
  var height = icon3[1];
  var _icon$slice = icon3.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function(resolve2, reject) {
    ({
      found: false,
      width: 512,
      height: 512,
      icon: callProvided("missingIconAbstract") || {}
    });
    if (givenPrefix === "fa") {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon3 = styles$1[prefix][iconName];
      return resolve2(asFoundIcon(icon3));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve2(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = function noop3() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.5.1"';
var begin = function begin2(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function() {
    return end(name);
  };
};
var end = function end2(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = function noop4() {
};
function isWatched(node) {
  var i2svg2 = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg2 === "string";
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon3 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon3;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$ceFn = params.ceFn, ceFn = _params$ceFn === void 0 ? abstractObj.tag === "svg" ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children2 = abstractObj.children || [];
  children2.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function(_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;
    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(" ").reduce(function(acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      _abstract2[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    var newInnerHTML = _abstract2.map(function(a) {
      return toHtml(a);
    }).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function() {
      var mutator = getMutator();
      var mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback, treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback, _options$nodeCallback = options.nodeCallback, nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback, _options$pseudoElemen = options.pseudoElementsCallback, pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen, _options$observeMutat = options.observeMutationsRoot, observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function(objects) {
    if (disabled)
      return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function(mutationRecord) {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)), prefix = _getCanonicalIcon.prefix, iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName)
            mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM)
    return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo)
    return;
  mo.disconnect();
}
function styleParser(node) {
  var style = node.getAttribute("style");
  var val = [];
  if (style) {
    val = style.split(";").reduce(function(acc, style2) {
      var styles2 = style2.split(":");
      var prop = styles2[0];
      var value2 = styles2.slice(1);
      if (prop && value2.length > 0) {
        acc[prop] = value2.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  var existingPrefix = node.getAttribute("data-prefix");
  var existingIconName = node.getAttribute("data-icon");
  var innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  var extraAttributes = toArray(node.attributes).reduce(function(acc, attr) {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  var title = node.getAttribute("title");
  var titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node), iconName = _classParser.iconName, prefix = _classParser.prefix, extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  var extraStyles = parser2.styleParser ? styleParser(node) : [];
  return _objectSpread2$1({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var styles$2 = namespace.styles;
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
var knownPrefixes = /* @__PURE__ */ new Set();
FAMILIES.map(function(family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray(knownPrefixes);
function onTree(root2) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM)
    return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd2(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove2(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map(function(p2) {
    return ".".concat(p2, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root2.querySelectorAll(prefixesDomQuery));
  } catch (e) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin("onTree");
  var mutations = candidates.reduce(function(acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION$1) {
        if (e.name === "MissingIcon") {
          console.error(e);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function(resolve2, reject) {
    Promise.all(mutations).then(function(resolvedMutations) {
      perform(resolvedMutations, function() {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function")
          callback();
        mark();
        resolve2();
      });
    }).catch(function(e) {
      mark();
      reject(e);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then(function(mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
      mask
    }));
  };
}
var render = function render2(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition)
    return;
  var prefix = iconDefinition.prefix, iconName = iconDefinition.iconName, icon3 = iconDefinition.icon;
  return domVariants(_objectSpread2$1({
    type: "icon"
  }, iconDefinition), function() {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon3),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout2() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks2() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node, _params$callback = params.callback, callback = _params$callback === void 0 ? function() {
      } : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      var iconName = nodeMeta.iconName, title = nodeMeta.title, titleId = nodeMeta.titleId, prefix = nodeMeta.prefix, transform = nodeMeta.transform, symbol = nodeMeta.symbol, mask = nodeMeta.mask, maskId = nodeMeta.maskId, extra = nodeMeta.extra;
      return new Promise(function(resolve2, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(_ref2) {
          var _ref22 = _slicedToArray(_ref2, 2), main = _ref22[0], mask2 = _ref22[1];
          resolve2([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref3) {
      var children2 = _ref3.children, attributes = _ref3.attributes, main = _ref3.main, transform = _ref3.transform, styles2 = _ref3.styles;
      var styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children2.push(nextChild || main.icon);
      return {
        children: children2,
        attributes
      };
    };
  }
};
var Layers = {
  mixout: function mixout3() {
    return {
      layer: function layer2(assembler) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: "layer"
        }, function() {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          var children2 = [];
          assembler(function(args) {
            Array.isArray(args) ? args.map(function(a) {
              children2 = children2.concat(a.abstract);
            }) : children2 = children2.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(" ")
            },
            children: children2
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout: function mixout4() {
    return {
      counter: function counter2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "counter",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout: function mixout5() {
    return {
      text: function text2(content) {
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _params$transform = params.transform, transform = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: "text",
          content
        }, function() {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides2(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      var title = nodeMeta.title, transform = nodeMeta.transform, extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise(function(resolve2, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve2();
    }
    var children2 = toArray(node.children);
    var alreadyProcessedPseudoElement = children2.filter(function(c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles2 = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles2.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN);
    var fontWeight = styles2.getPropertyValue("font-weight");
    var content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamily) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve2();
    } else if (fontFamily && content !== "none" && content !== "") {
      var _content = styles2.getPropertyValue("content");
      var family = ~["Sharp"].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
      var _hexValueFromContent = hexValueFromContent(_content), hexValue = _hexValueFromContent.value, isSecondary = _hexValueFromContent.isSecondary;
      var isV4 = fontFamily[0].startsWith("FontAwesome");
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function(main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = _abstract.map(function(a) {
            return toHtml(a);
          }).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve2();
        }).catch(reject);
      } else {
        resolve2();
      }
    } else {
      resolve2();
    }
  });
}
function replace2(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root2) {
  if (!IS_DOM)
    return;
  return new Promise(function(resolve2, reject) {
    var operations = toArray(root2.querySelectorAll("*")).filter(processable).map(replace2);
    var end3 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(function() {
      end3();
      enableObservation();
      resolve2();
    }).catch(function() {
      end3();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks: function hooks3() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides3(providers$$1) {
    providers$$1.pseudoElements2svg = function(params) {
      var _params$node = params.node, node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout6() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks4() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto: function noAuto3() {
        disconnect();
      },
      watch: function watch22(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = function parseTransformString2(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
    var parts2 = n.toLowerCase().split("-");
    var first = parts2[0];
    var rest = parts2.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout7() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks5() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides4(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref2) {
      var main = _ref2.main, transform = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path2 = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer,
        inner,
        path: path2
      };
      return {
        tag: "g",
        attributes: _objectSpread2$1({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2$1({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = "black";
  }
  return _abstract;
}
function deGroup(_abstract2) {
  if (_abstract2.tag === "g") {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}
var Masks = {
  hooks: function hooks6() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute("data-fa-mask");
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map(function(i2) {
          return i2.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides: function provides5(providers2) {
    providers2.generateAbstractMask = function(_ref2) {
      var children2 = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform = _ref2.transform;
      var mainWidth = main.width, mainPath = main.icon;
      var maskWidth = mask.width, maskPath = mask.icon;
      var trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: "rect",
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2$1({}, trans.inner),
        children: [fillBlack(_objectSpread2$1({
          tag: mainPath.tag,
          attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2$1({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: "mask",
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children2.push(defs, {
        tag: "rect",
        attributes: _objectSpread2$1({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children2,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides: function provides6(providers2) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      var gChildren = [];
      var FILL = {
        fill: "currentColor"
      };
      var ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      var dot = {
        tag: "circle",
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks: function hooks7() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute("data-fa-symbol");
        var symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
api.config;
var library$1 = api.library;
api.dom;
var parse$1 = api.parse;
api.findIconDefinition;
api.toHtml;
var icon2 = api.icon;
api.layer;
api.text;
api.counter;
function ownKeys(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value2) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var humps$1 = { exports: {} };
(function(module) {
  (function(global2) {
    var _processKeys = function(convert2, obj, options) {
      if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
        return obj;
      }
      var output, i2 = 0, l = 0;
      if (_isArray(obj)) {
        output = [];
        for (l = obj.length; i2 < l; i2++) {
          output.push(_processKeys(convert2, obj[i2], options));
        }
      } else {
        output = {};
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            output[convert2(key, options)] = _processKeys(convert2, obj[key], options);
          }
        }
      }
      return output;
    };
    var separateWords = function(string2, options) {
      options = options || {};
      var separator = options.separator || "_";
      var split = options.split || /(?=[A-Z])/;
      return string2.split(split).join(separator);
    };
    var camelize2 = function(string2) {
      if (_isNumerical(string2)) {
        return string2;
      }
      string2 = string2.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : "";
      });
      return string2.substr(0, 1).toLowerCase() + string2.substr(1);
    };
    var pascalize = function(string2) {
      var camelized = camelize2(string2);
      return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
    };
    var decamelize = function(string2, options) {
      return separateWords(string2, options).toLowerCase();
    };
    var toString2 = Object.prototype.toString;
    var _isFunction = function(obj) {
      return typeof obj === "function";
    };
    var _isObject = function(obj) {
      return obj === Object(obj);
    };
    var _isArray = function(obj) {
      return toString2.call(obj) == "[object Array]";
    };
    var _isDate = function(obj) {
      return toString2.call(obj) == "[object Date]";
    };
    var _isRegExp = function(obj) {
      return toString2.call(obj) == "[object RegExp]";
    };
    var _isBoolean = function(obj) {
      return toString2.call(obj) == "[object Boolean]";
    };
    var _isNumerical = function(obj) {
      obj = obj - 0;
      return obj === obj;
    };
    var _processor = function(convert2, options) {
      var callback = options && "process" in options ? options.process : options;
      if (typeof callback !== "function") {
        return convert2;
      }
      return function(string2, options2) {
        return callback(string2, convert2, options2);
      };
    };
    var humps2 = {
      camelize: camelize2,
      decamelize,
      pascalize,
      depascalize: decamelize,
      camelizeKeys: function(object2, options) {
        return _processKeys(_processor(camelize2, options), object2);
      },
      decamelizeKeys: function(object2, options) {
        return _processKeys(_processor(decamelize, options), object2, options);
      },
      pascalizeKeys: function(object2, options) {
        return _processKeys(_processor(pascalize, options), object2);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    if (module.exports) {
      module.exports = humps2;
    } else {
      global2.humps = humps2;
    }
  })(commonjsGlobal);
})(humps$1);
var humps = humps$1.exports;
var _excluded = ["class", "style"];
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(output, pair) {
    var idx = pair.indexOf(":");
    var prop = humps.camelize(pair.slice(0, idx));
    var value2 = pair.slice(idx + 1).trim();
    output[prop] = value2;
    return output;
  }, {});
}
function classToObject(classes) {
  return classes.split(/\s+/).reduce(function(output, className) {
    output[className] = true;
    return output;
  }, {});
}
function convert(abstractElement) {
  var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof abstractElement === "string") {
    return abstractElement;
  }
  var children2 = (abstractElement.children || []).map(function(child) {
    return convert(child);
  });
  var mixins = Object.keys(abstractElement.attributes || {}).reduce(function(mixins2, key) {
    var value2 = abstractElement.attributes[key];
    switch (key) {
      case "class":
        mixins2.class = classToObject(value2);
        break;
      case "style":
        mixins2.style = styleToObject(value2);
        break;
      default:
        mixins2.attrs[key] = value2;
    }
    return mixins2;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  attrs.class;
  var _attrs$style = attrs.style, aStyle = _attrs$style === void 0 ? {} : _attrs$style, otherAttrs = _objectWithoutProperties(attrs, _excluded);
  return h(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
    class: mixins.class,
    style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
  }, mixins.attrs), otherAttrs), children2);
}
var PRODUCTION = false;
try {
  PRODUCTION = true;
} catch (e) {
}
function log() {
  if (!PRODUCTION && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function objectWithKey(key, value2) {
  return Array.isArray(value2) && value2.length > 0 || !Array.isArray(value2) && value2 ? _defineProperty({}, key, value2) : {};
}
function classList(props) {
  var _classes;
  var classes = (_classes = {
    "fa-spin": props.spin,
    "fa-pulse": props.pulse,
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-li": props.listItem,
    "fa-inverse": props.inverse,
    "fa-flip": props.flip === true,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both"
  }, _defineProperty(_classes, "fa-".concat(props.size), props.size !== null), _defineProperty(_classes, "fa-rotate-".concat(props.rotation), props.rotation !== null), _defineProperty(_classes, "fa-pull-".concat(props.pull), props.pull !== null), _defineProperty(_classes, "fa-swap-opacity", props.swapOpacity), _defineProperty(_classes, "fa-bounce", props.bounce), _defineProperty(_classes, "fa-shake", props.shake), _defineProperty(_classes, "fa-beat", props.beat), _defineProperty(_classes, "fa-fade", props.fade), _defineProperty(_classes, "fa-beat-fade", props.beatFade), _defineProperty(_classes, "fa-flash", props.flash), _defineProperty(_classes, "fa-spin-pulse", props.spinPulse), _defineProperty(_classes, "fa-spin-reverse", props.spinReverse), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function normalizeIconArgs(icon22) {
  if (icon22 && _typeof(icon22) === "object" && icon22.prefix && icon22.iconName && icon22.icon) {
    return icon22;
  }
  if (parse$1.icon) {
    return parse$1.icon(icon22);
  }
  if (icon22 === null) {
    return null;
  }
  if (_typeof(icon22) === "object" && icon22.prefix && icon22.iconName) {
    return icon22;
  }
  if (Array.isArray(icon22) && icon22.length === 2) {
    return {
      prefix: icon22[0],
      iconName: icon22[1]
    };
  }
  if (typeof icon22 === "string") {
    return {
      prefix: "fas",
      iconName: icon22
    };
  }
}
var FontAwesomeIcon = /* @__PURE__ */ defineComponent({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: function validator(value2) {
        return [true, false, "horizontal", "vertical", "both"].indexOf(value2) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator2(value2) {
        return ["right", "left"].indexOf(value2) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator3(value2) {
        return [90, 180, 270].indexOf(Number.parseInt(value2, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator4(value2) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(value2) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    flash: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup: function setup(props, _ref2) {
    var attrs = _ref2.attrs;
    var icon$1 = computed(function() {
      return normalizeIconArgs(props.icon);
    });
    var classes = computed(function() {
      return objectWithKey("classes", classList(props));
    });
    var transform = computed(function() {
      return objectWithKey("transform", typeof props.transform === "string" ? parse$1.transform(props.transform) : props.transform);
    });
    var mask = computed(function() {
      return objectWithKey("mask", normalizeIconArgs(props.mask));
    });
    var renderedIcon = computed(function() {
      return icon2(icon$1.value, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
        symbol: props.symbol,
        title: props.title,
        titleId: props.titleId,
        maskId: props.maskId
      }));
    });
    watch(renderedIcon, function(value2) {
      if (!value2) {
        return log("Could not find one or more icon(s)", icon$1.value, mask.value);
      }
    }, {
      immediate: true
    });
    var vnode = computed(function() {
      return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null;
    });
    return function() {
      return vnode.value;
    };
  }
});
var faArrowsLeftRight = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
};
var faPlusLarge = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0V488l0 24H232l0-24 0-208L24 280 0 280V232l24 0 208 0 0-208 0-24 48 0V24l0 208 208 0z"]
};
var faExpand = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32h24V80H136 48v88 24H0V168 56 32H24 136zM0 344V320H48v24 88h88 24v48H136 24 0V456 344zM424 32h24V56 168v24H400V168 80H312 288V32h24H424zM400 344V320h48v24V456v24H424 312 288V432h24 88V344z"]
};
var faArrowsUpDown = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55V418.9l-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55V93.1l55 55 17 17 33.9-33.9-17-17-96-96z"]
};
var faTrash = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z"]
};
var faCalculator = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0H0V512H384V0zM320 64v96H64V64H320zM64 192h64v64H64V192zm64 96v64H64V288h64zM64 384H224v64H64V384zM224 192v64H160V192h64zm-64 96h64v64H160V288zm160-96v64H256V192h64zm-64 96h64v64H256V288zm64 96v64H256V384h64z"]
};
var faXmark = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
};
var faHammer = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48v48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0H291.5c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
library$1.add(
  faXmark,
  faExpand,
  faArrowsLeftRight,
  faArrowsUpDown,
  faHammer,
  faTrash,
  faPlusLarge,
  faCalculator
);
const i18n = createI18n({
  locale: "en_US",
  fallbackLocale: "en_US",
  messages
});
const app = createApp(WordPress);
app.use(i18n);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#smartcut-app");
export {
  vShow as A,
  vModelDynamic as B,
  Fragment as F,
  _export_sfc as _,
  getMinValue as a,
  getMaxValue as b,
  convertUnit as c,
  d3 as d,
  isFieldPresent as e,
  getInputMode as f,
  getOptions as g,
  getInputType as h,
  isFieldEnabled as i,
  createElementBlock as j,
  createBaseVNode as k,
  createVNode as l,
  markRaw as m,
  createCommentVNode as n,
  openBlock as o,
  normalizeClass as p,
  renderList as q,
  resolveComponent as r,
  setFieldEnabled as s,
  toDisplayString$1 as t,
  vModelText as u,
  valueSet as v,
  withDirectives as w,
  normalizeStyle as x,
  vModelCheckbox as y,
  vModelSelect as z
};
