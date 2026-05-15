import { a as T, c as h, o as L, f as w, s as x, b as _ } from "./vendor-floating-ui-CCq0hEoe.js";
const A = 200, C = "sc.ecommerce.tooltipsEnabled";
function S() {
  try {
    return (typeof localStorage < "u" ? localStorage.getItem(C) : null) !== "0";
  } catch {
    return !0;
  }
}
let O = S();
function $(t, o) {
  const n = o.value;
  if (typeof n == "string" && n.trim())
    return { content: n.trim(), type: "info" };
  if (n && typeof n == "object" && typeof n.content == "string" && n.content.trim())
    return { content: n.content.trim(), type: n.type || "info" };
  const e = t.dataset.originalTitle;
  if (e) return { content: e, type: "info" };
  const i = t.getAttribute("title");
  return i ? { content: i, type: "info" } : null;
}
function j(t) {
  const o = document.createElement("div");
  o.className = `smartcut-tooltip ${t.type || "info"}`, o.setAttribute("role", "tooltip"), Object.assign(o.style, { zIndex: "2000", pointerEvents: "none" }), o.textContent = t.content;
  const n = document.createElement("div");
  return n.className = "arrow", o.appendChild(n), o;
}
function p(t, o) {
  const n = t.getAttribute("title");
  n && !t.dataset.originalTitle && (t.dataset.originalTitle = n, t.removeAttribute("title"));
  let e = null, i = null, s = null, r = null;
  const m = (l) => {
    !e || !i || (e.className = `smartcut-tooltip ${l.type || "info"}`, e.firstChild.textContent = l.content, h(t, e, {
      placement: "top",
      middleware: [
        L(8),
        w({ padding: 8, fallbackPlacements: ["top", "bottom", "right", "left"] }),
        x({ padding: 8 }),
        _({ element: i })
      ]
    }).then(({ x: b, y: g, placement: d, middlewareData: E }) => {
      if (!e || !i) return;
      Object.assign(e.style, {
        left: `${b}px`,
        top: `${g}px`
      }), e.dataset.placement = d;
      const c = E.arrow;
      if (c) {
        const y = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[d.split("-")[0]] || "top";
        Object.assign(i.style, {
          left: c.x != null ? `${c.x}px` : "",
          top: c.y != null ? `${c.y}px` : "",
          [y]: "-4px"
        });
      }
    }).catch(() => {
    }));
  }, v = () => {
    if (!O) return;
    const l = $(t, o);
    l && (e || (e = j(l), i = e.querySelector(".arrow"), document.body.appendChild(e)), s || (s = T(t, e, () => m(l))));
  }, u = () => {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, v();
    }, A);
  }, a = () => {
    r && (clearTimeout(r), r = null), s && (s(), s = null), e && (e.remove(), e = null, i = null);
  };
  t.addEventListener("mouseenter", u), t.addEventListener("focus", u), t.addEventListener("mouseleave", a), t.addEventListener("blur", a), t.addEventListener("mousedown", a), t.__tooltipCleanup = () => {
    a(), t.removeEventListener("mouseenter", u), t.removeEventListener("focus", u), t.removeEventListener("mouseleave", a), t.removeEventListener("blur", a), t.removeEventListener("mousedown", a);
  };
}
function f(t) {
  t.__tooltipCleanup?.(), t.__tooltipCleanup = void 0, t.dataset.originalTitle && (t.setAttribute("title", t.dataset.originalTitle), delete t.dataset.originalTitle);
}
const P = {
  mounted(t, o) {
    p(t, o);
  },
  updated(t, o) {
    f(t), p(t, o);
  },
  beforeUnmount(t) {
    f(t);
  }
};
export {
  P as vTooltip
};
