import { d as x, Y as $, r as U, h as D, L as O, b as o, o as d, e as _, j as u, i as f, u as R, g as A, F as B, q as V } from "./vendor-vue-h1I-4LEU.js";
import { _ as M } from "./Launch-C8DaHa5j.js";
const P = { id: "uploader" }, S = {
  key: 0,
  class: "debug"
}, E = {
  key: 1,
  class: "selected-files"
}, T = ["src"], G = ["onClick"], J = !0, Y = /* @__PURE__ */ x({
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
    const F = A(() => import("./ObjectViewer-CjruzqzE.js")), h = U(null), t = U({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), s = g, p = w, b = (e) => ["image/jpeg", "image/jpg", "image/png"].includes(e.type), k = () => {
      h.value?.click();
    }, j = (e) => {
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
      const m = [...c, ...r], L = I(m), N = m.map((i, v) => ({
        originalName: i.name,
        newName: `${s.prefix}-${v + 1}-${s.uniqueId}${C(i.name)}`
      })), y = {
        shapeId: s.shapeId,
        files: m,
        previewUrls: L,
        metadata: N
      };
      t.value = y, p("update", y), a.value = "";
    }, I = (e) => e.map((a) => URL.createObjectURL(a)), C = (e) => e.substring(e.lastIndexOf(".")), q = (e) => {
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
    }), D(() => {
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
      const n = O("FontAwesomeIcon");
      return d(), o("div", P, [
        g.env === "development" && J ? (d(), o("div", S, [
          f(R(F), {
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
          onChange: j
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
}), Q = /* @__PURE__ */ M(Y, [["__scopeId", "data-v-bcaad5a2"]]);
export {
  Q as default
};
