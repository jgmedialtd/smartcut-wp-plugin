import { d as L, x as $, r as U, f as B, g as O, c as o, o as d, a as _, b as u, i as v, u as R, y as A, F as D, k as V } from "./vendor-vue-BgOQH8dC.js";
import { _ as M } from "./Launch-BRH4wqOZ.js";
const P = { id: "uploader" }, E = {
  key: 0,
  class: "debug"
}, S = {
  key: 1,
  class: "selected-files"
}, T = ["src"], G = ["onClick"], J = /* @__PURE__ */ L({
  __name: "ImageUpload",
  props: {
    shapeId: {
      type: String,
      required: !0
    },
    prefix: {
      type: String,
      required: !0
    },
    uniqueId: {
      type: String,
      required: !0
    },
    debug: {
      type: Boolean,
      required: !1,
      default: !1
    },
    maxImages: {
      type: Number,
      required: !1,
      default: 5
    },
    images: {
      type: Array,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(g, { emit: w }) {
    const b = A(() => import("./EcommerceCalculator-CIJmnT15.js").then((e) => e.o)), h = U(null), a = U({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), s = g, p = w, F = (e) => ["image/jpeg", "image/jpg", "image/png"].includes(e.type), k = () => {
      h.value?.click();
    }, C = (e) => {
      const t = e.target, n = t.files;
      if (!n) return;
      const i = Array.from(n), l = i.filter((r) => !F(r));
      if (l.length > 0) {
        const r = l.map((f) => f.name).join(", ");
        alert(`Invalid file type(s): ${r}
Only JPG and PNG files are allowed.`), t.value = "";
        return;
      }
      const c = a.value.files || [];
      if (c.length + i.length > s.maxImages) {
        alert(`Maximum ${s.maxImages} images allowed per shape.`), t.value = "";
        return;
      }
      const m = [...c, ...i], x = I(m), N = m.map((r, f) => ({
        originalName: r.name,
        newName: `${s.prefix}-${f + 1}-${s.uniqueId}${j(r.name)}`
      })), y = {
        shapeId: s.shapeId,
        files: m,
        previewUrls: x,
        metadata: N
      };
      a.value = y, p("update", y), t.value = "";
    }, I = (e) => e.map((t) => URL.createObjectURL(t)), j = (e) => e.substring(e.lastIndexOf(".")), q = (e) => {
      URL.revokeObjectURL(a.value.previewUrls[e]);
      const t = [...a.value.files], n = [...a.value.previewUrls], i = [...a.value.metadata];
      if (t.splice(e, 1), n.splice(e, 1), i.splice(e, 1), t.length === 0)
        a.value = {
          shapeId: s.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, p("remove", s.shapeId);
      else {
        const l = {
          shapeId: s.shapeId,
          files: t,
          previewUrls: n,
          metadata: i
        };
        a.value = l, p("update", l);
      }
    };
    return $(() => {
      a.value?.previewUrls && a.value.previewUrls.forEach((e) => URL.revokeObjectURL(e));
    }), B(() => {
      a.value.shapeId = s.shapeId;
      const e = s.images.find((t) => t.shapeId === s.shapeId);
      if (e) {
        const t = I(e.files);
        a.value = {
          ...e,
          previewUrls: t
        };
      }
    }), (e, t) => {
      const n = O("FontAwesomeIcon");
      return d(), o("div", P, [
        g.debug ? (d(), o("div", E, [
          v(R(b), {
            data: [a.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : _("", !0),
        u("input", {
          ref_key: "fileInput",
          ref: h,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: C
        }, null, 544),
        u("button", {
          type: "button",
          class: "upload-button",
          onClick: k
        }, [
          v(n, { icon: ["fass", "files"] })
        ]),
        a.value.files?.length ? (d(), o("div", S, [
          (d(!0), o(D, null, V(a.value.files, (i, l) => (d(), o("div", {
            key: l,
            class: "selected-file"
          }, [
            u("img", {
              src: a.value.previewUrls[l],
              alt: "Preview"
            }, null, 8, T),
            u("button", {
              class: "remove-file",
              type: "button",
              onClick: (c) => q(l)
            }, [
              v(n, { icon: ["fass", "trash"] })
            ], 8, G)
          ]))), 128))
        ])) : _("", !0)
      ]);
    };
  }
}), Q = /* @__PURE__ */ M(J, [["__scopeId", "data-v-ebfbb532"]]);
export {
  Q as default
};
