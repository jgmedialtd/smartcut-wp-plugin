import { i as _ } from "./environment-BeBZzWz6.js";
const d = {
  INVALID_TYPE: "errors.validation.zod.invalid_type",
  TOO_SMALL: "errors.validation.zod.too_small",
  TOO_BIG: "errors.validation.zod.too_big",
  INVALID_STRING: "errors.validation.zod.invalid_string",
  INVALID_ENUM: "errors.validation.zod.invalid_enum",
  REQUIRED: "errors.validation.not_set",
  CUSTOM: "errors.validation.zod.custom"
}, i = {
  FIELD_REQUIRED: "errors.validation.field.required",
  INVALID_NUMBER: "errors.validation.field.invalid_number",
  INVALID_DECIMAL: "errors.validation.field.invalid_decimal",
  INVALID_FRACTION: "errors.validation.field.invalid_fraction",
  INVALID_FRACTION_CHARS: "errors.validation.field.invalid_fraction_chars",
  INVALID_FRACTION_FORMAT: "errors.validation.field.invalid_fraction_format",
  INVALID_FORMAT: "errors.validation.field.invalid_format",
  ABOVE_MAX: "errors.validation.field.above_max",
  BELOW_MIN: "errors.validation.field.below_min",
  ZERO_NOT_ALLOWED: "errors.validation.field.zero_not_allowed",
  DIVISION_BY_ZERO: "errors.validation.field.division_by_zero"
}, o = {
  field_required: i.FIELD_REQUIRED,
  invalid_number: i.INVALID_NUMBER,
  invalid_decimal: i.INVALID_DECIMAL,
  invalid_fraction: i.INVALID_FRACTION,
  invalid_fraction_chars: i.INVALID_FRACTION_CHARS,
  invalid_fraction_format: i.INVALID_FRACTION_FORMAT,
  invalid_format: i.INVALID_FORMAT,
  above_max: i.ABOVE_MAX,
  below_min: i.BELOW_MIN,
  zero_not_allowed: i.ZERO_NOT_ALLOWED,
  division_by_zero: i.DIVISION_BY_ZERO
};
function e(r) {
  if (r in o) {
    const a = r;
    return _() && console.warn(`[Validation] Using legacy validation key "${r}". Please migrate to "${o[a]}"`), o[a];
  }
  return r;
}
export {
  d as Z,
  e as m
};
