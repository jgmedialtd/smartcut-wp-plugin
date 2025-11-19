import { Z as e } from "./components-zSEuX2uD.js";
import { F as m } from "./vendor-zod-DtqKDYvi.js";
const n = (a) => {
  switch (a.code) {
    case "invalid_type":
      if (a.input === void 0) {
        const t = a.path && a.path.length > 0 ? String(a.path[a.path.length - 1]) : "field";
        return {
          message: e.REQUIRED,
          params: {
            0: t,
            // positional (legacy)
            field: `fields.${t}`
            // named (new, with nested translation key)
          }
        };
      }
      return {
        message: e.INVALID_TYPE,
        params: { expected: a.expected, received: typeof a.input }
      };
    case "too_small": {
      const t = a.inclusive ? "errors.validation.zod.too_small_inclusive" : e.TOO_SMALL, r = a.path && a.path.length > 0 ? String(a.path[a.path.length - 1]) : "field";
      return {
        message: t,
        params: {
          minimum: a.minimum,
          inclusive: a.inclusive,
          exact: a.exact,
          // Named aliases for clarity
          min: a.minimum,
          field: `fields.${r}`
          // Add field name as nested translation key
        }
      };
    }
    case "too_big":
      return {
        message: e.TOO_BIG,
        params: {
          maximum: a.maximum,
          inclusive: a.inclusive,
          exact: a.exact,
          // Named aliases for clarity
          max: a.maximum
        }
      };
    case "invalid_string":
      return {
        message: e.INVALID_STRING,
        params: { validation: a.validation }
      };
    case "invalid_union":
      return {
        message: e.INVALID_ENUM,
        params: {}
      };
    case "custom": {
      const t = typeof a.params == "object" && a.params && "message" in a.params ? String(a.params.message) : "Validation error";
      return t && t.startsWith("errors.validation.") ? { message: t } : {
        message: e.CUSTOM,
        params: { message: t }
      };
    }
    default:
      return { message: "Validation error" };
  }
};
function l() {
  m(n);
}
export {
  l as initializeZodTranslations,
  n as zodErrorMap
};
