import { t as D, tData as U } from "./i18n-DGE8ywV5.js";
import { d as R, z as O, l as V, r as $, o, c, m as v, u as y, b, a as u, F as A, f as E, C as M, s as w } from "./vendor-vue-CrNGqS0k.js";
import { _ as S } from "./Launch-9LoYYNsk.js";
const T = { id: "uploader" }, z = {
  key: 0,
  class: "debug"
}, P = {
  key: 1,
  class: "selected-files"
}, G = ["src", "alt"], H = ["onClick"], J = /* @__PURE__ */ R({
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
  setup(g, { emit: F }) {
    const k = M(() => import("./ObjectViewer-IjOsrd1T.js")), h = w(null), a = w({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), s = g, d = F, C = (e) => ["image/jpeg", "image/jpg", "image/png"].includes(e.type), j = () => {
      h.value?.click();
    }, q = (e) => {
      const t = e.target, r = t.files;
      if (!r) return;
      const n = Array.from(r), l = n.filter((i) => !C(i));
      if (l.length > 0) {
        const i = l.map((f) => f.name).join(", ");
        alert(U("ecommerce.upload.invalid_file_type", { files: i })), t.value = "";
        return;
      }
      const p = a.value.files || [];
      if (p.length + n.length > s.maxImages) {
        alert(U("ecommerce.upload.max_images", { max: s.maxImages })), t.value = "";
        return;
      }
      const m = [...p, ...n], N = I(m), B = m.map((i, f) => ({
        originalName: i.name,
        newName: `${s.prefix}-${f + 1}-${s.uniqueId}${x(i.name)}`
      })), _ = {
        shapeId: s.shapeId,
        files: m,
        previewUrls: N,
        metadata: B
      };
      a.value = _, d("update", _), t.value = "";
    }, I = (e) => e.map((t) => URL.createObjectURL(t)), x = (e) => e.substring(e.lastIndexOf(".")), L = (e) => {
      URL.revokeObjectURL(a.value.previewUrls[e]);
      const t = [...a.value.files], r = [...a.value.previewUrls], n = [...a.value.metadata];
      if (t.splice(e, 1), r.splice(e, 1), n.splice(e, 1), t.length === 0)
        a.value = {
          shapeId: s.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, d("remove", s.shapeId);
      else {
        const l = {
          shapeId: s.shapeId,
          files: t,
          previewUrls: r,
          metadata: n
        };
        a.value = l, d("update", l);
      }
    };
    return O(() => {
      a.value?.previewUrls && a.value.previewUrls.forEach((e) => URL.revokeObjectURL(e));
    }), V(() => {
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
      const r = $("Icon");
      return o(), c("div", T, [
        g.debug ? (o(), c("div", z, [
          v(y(k), {
            data: [a.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : b("", !0),
        u("input", {
          ref_key: "fileInput",
          ref: h,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: q
        }, null, 544),
        u("button", {
          type: "button",
          class: "upload-button",
          onClick: j
        }, [
          v(r, { icon: ["fass", "files"] })
        ]),
        a.value.files?.length ? (o(), c("div", P, [
          (o(!0), c(A, null, E(a.value.files, (n, l) => (o(), c("div", {
            key: l,
            class: "selected-file"
          }, [
            u("img", {
              src: a.value.previewUrls[l],
              alt: y(D)("ecommerce.upload.preview_alt")
            }, null, 8, G),
            u("button", {
              class: "remove-file",
              type: "button",
              onClick: (p) => L(l)
            }, [
              v(r, { icon: ["fass", "trash"] })
            ], 8, H)
          ]))), 128))
        ])) : b("", !0)
      ]);
    };
  }
}), Y = /* @__PURE__ */ S(J, [["__scopeId", "data-v-7ccccb08"]]);
export {
  Y as default
};
