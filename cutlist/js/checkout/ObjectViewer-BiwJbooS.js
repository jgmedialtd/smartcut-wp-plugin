import { _ as _export_sfc } from "./Launch-CIMl3I9R.js";
import { j as openBlock, k as createElementBlock, F as Fragment, l as renderList, t as createBaseVNode, v as toDisplayString, p as normalizeClass, A as createCommentVNode } from "./main-BuWv0poc.js";
const _sfc_main = {
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
    isObject(value) {
      return value !== null && typeof value === "object" && !Array.isArray(value);
    },
    formatValue(value) {
      if (this.isObject(value)) {
        const entries = Object.entries(value).map(([k, v]) => {
          const formattedValue = this.isObject(v) ? this.formatValue(v) : typeof v === "string" ? `'${v}'` : v;
          return `${k}: ${formattedValue}`;
        }).join(", ");
        return `{ ${entries} }`;
      }
      return value;
    }
  }
};
const _hoisted_1 = { class: "object-viewer" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "toggle-icon" };
const _hoisted_4 = { class: "path-label" };
const _hoisted_5 = {
  key: 0,
  class: "object-properties"
};
const _hoisted_6 = { class: "key" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.data, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: "array-item"
      }, [
        createBaseVNode("div", {
          class: "item-header",
          onClick: ($event) => $options.toggle(index)
        }, [
          createBaseVNode("span", _hoisted_3, toDisplayString($data.expanded[index] ? "▼" : "▶"), 1),
          createBaseVNode("span", _hoisted_4, toDisplayString($props.paths[index] || index), 1)
        ], 8, _hoisted_2),
        $data.expanded[index] ? (openBlock(), createElementBlock("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(item, (value, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "property-item"
            }, [
              createBaseVNode("span", _hoisted_6, toDisplayString(key) + ":", 1),
              createBaseVNode("span", {
                class: normalizeClass(["value", typeof value])
              }, toDisplayString($options.formatValue(value)), 3)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    }), 128))
  ]);
}
const ObjectViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b5e9be66"]]);
export {
  ObjectViewer as default
};
//# sourceMappingURL=ObjectViewer-BiwJbooS.js.map
