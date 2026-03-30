import { d as L, A as $, r as U, o as A, l as D, a as o, b as d, e as _, f as u, g as f, u as O, h as R, F as B, k as V } from "./vendor-vue-DyIrsOEK.js";
import { _ as M } from "./Launch-CW1xtdsr.js";
const P = { id: "uploader" }, S = {
  key: 0,
  class: "debug"
}, E = {
  key: 1,
  class: "selected-files"
}, T = ["src"], G = ["onClick"], J = !0, z = /* @__PURE__ */ L({
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
    env: {
      type: String,
      required: !1,
      default: "production"
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
    const F = R(() => import("./ObjectViewer-CAuCuTVs.js")), h = U(null), t = U({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), s = g, p = w, b = (e) => ["image/jpeg", "image/jpg", "image/png"].includes(e.type), k = () => {
      h.value?.click();
    }, C = (e) => {
      const a = e.target, n = a.files;
      if (!n) return;
      const r = Array.from(n), l = r.filter((i) => !b(i));
      if (l.length > 0) {
        const i = l.map((v) => v.name).join(", ");
        alert(`Invalid file type(s): ${i}
Only JPG and PNG files are allowed.`), a.value = "";
        return;
      }
      const c = t.value.files || [];
      if (c.length + r.length > s.maxImages) {
        alert(`Maximum ${s.maxImages} images allowed per shape.`), a.value = "";
        return;
      }
      const m = [...c, ...r], N = I(m), x = m.map((i, v) => ({
        originalName: i.name,
        newName: `${s.prefix}-${v + 1}-${s.uniqueId}${j(i.name)}`
      })), y = {
        shapeId: s.shapeId,
        files: m,
        previewUrls: N,
        metadata: x
      };
      t.value = y, p("update", y), a.value = "";
    }, I = (e) => e.map((a) => URL.createObjectURL(a)), j = (e) => e.substring(e.lastIndexOf(".")), q = (e) => {
      URL.revokeObjectURL(t.value.previewUrls[e]);
      const a = [...t.value.files], n = [...t.value.previewUrls], r = [...t.value.metadata];
      if (a.splice(e, 1), n.splice(e, 1), r.splice(e, 1), a.length === 0)
        t.value = {
          shapeId: s.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, p("remove", s.shapeId);
      else {
        const l = {
          shapeId: s.shapeId,
          files: a,
          previewUrls: n,
          metadata: r
        };
        t.value = l, p("update", l);
      }
    };
    return $(() => {
      t.value?.previewUrls && t.value.previewUrls.forEach((e) => URL.revokeObjectURL(e));
    }), A(() => {
      t.value.shapeId = s.shapeId;
      const e = s.images.find((a) => a.shapeId === s.shapeId);
      if (e) {
        const a = I(e.files);
        t.value = {
          ...e,
          previewUrls: a
        };
      }
    }), (e, a) => {
      const n = D("FontAwesomeIcon");
      return d(), o("div", P, [
        g.env === "development" && J ? (d(), o("div", S, [
          f(O(F), {
            data: [t.value],
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
          f(n, { icon: ["fass", "files"] })
        ]),
        t.value.files?.length ? (d(), o("div", E, [
          (d(!0), o(B, null, V(t.value.files, (r, l) => (d(), o("div", {
            key: l,
            class: "selected-file"
          }, [
            u("img", {
              src: t.value.previewUrls[l],
              alt: "Preview"
            }, null, 8, T),
            u("button", {
              class: "remove-file",
              type: "button",
              onClick: (c) => q(l)
            }, [
              f(n, { icon: ["fass", "trash"] })
            ], 8, G)
          ]))), 128))
        ])) : _("", !0)
      ]);
    };
  }
}), W = /* @__PURE__ */ M(z, [["__scopeId", "data-v-bcaad5a2"]]);
export {
  W as default
};
