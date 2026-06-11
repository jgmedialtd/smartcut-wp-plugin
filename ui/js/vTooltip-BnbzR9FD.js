import { a as L, c as w, o as x, f as _, s as S, b as A } from "./vendor-floating-ui-CCq0hEoe.js";
const C = 200, v = "sc.ecommerce.tooltipsEnabled";
function O() {
  try {
    return (typeof localStorage < "u" ? localStorage.getItem(v) : null) !== "0";
  } catch {
    return !0;
  }
}
let p = O();
function P(t) {
  p = t;
  try {
    localStorage.setItem(v, t ? "1" : "0");
  } catch {
  }
}
function N() {
  return p;
}
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
function I(t) {
  const o = document.createElement("div");
  o.className = `smartcut-tooltip ${t.type || "info"}`, o.setAttribute("role", "tooltip"), Object.assign(o.style, { zIndex: "2000", pointerEvents: "none" }), o.textContent = t.content;
  const n = document.createElement("div");
  return n.className = "arrow", o.appendChild(n), o;
}
function f(t, o) {
  const n = t.getAttribute("title");
  n && !t.dataset.originalTitle && (t.dataset.originalTitle = n, t.removeAttribute("title"));
  let e = null, i = null, s = null, r = null;
  const g = (l) => {
    !e || !i || (e.className = `smartcut-tooltip ${l.type || "info"}`, e.firstChild.textContent = l.content, w(t, e, {
      placement: "top",
      middleware: [
        x(8),
        _({ padding: 8, fallbackPlacements: ["top", "bottom", "right", "left"] }),
        S({ padding: 8 }),
        A({ element: i })
      ]
    }).then(({ x: b, y, placement: d, middlewareData: T }) => {
      if (!e || !i) return;
      Object.assign(e.style, {
        left: `${b}px`,
        top: `${y}px`
      }), e.dataset.placement = d;
      const c = T.arrow;
      if (c) {
        const h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[d.split("-")[0]] || "top";
        Object.assign(i.style, {
          left: c.x != null ? `${c.x}px` : "",
          top: c.y != null ? `${c.y}px` : "",
          [h]: "-4px"
        });
      }
    }).catch(() => {
    }));
  }, E = () => {
    if (!p) return;
    const l = $(t, o);
    l && (e || (e = I(l), i = e.querySelector(".arrow"), document.body.appendChild(e)), s || (s = L(t, e, () => g(l))));
  }, u = () => {
    r && clearTimeout(r), r = setTimeout(() => {
      r = null, E();
    }, C);
  }, a = () => {
    r && (clearTimeout(r), r = null), s && (s(), s = null), e && (e.remove(), e = null, i = null);
  };
  t.addEventListener("mouseenter", u), t.addEventListener("focus", u), t.addEventListener("mouseleave", a), t.addEventListener("blur", a), t.addEventListener("mousedown", a), t.__tooltipCleanup = () => {
    a(), t.removeEventListener("mouseenter", u), t.removeEventListener("focus", u), t.removeEventListener("mouseleave", a), t.removeEventListener("blur", a), t.removeEventListener("mousedown", a);
  };
}
function m(t) {
  t.__tooltipCleanup?.(), t.__tooltipCleanup = void 0, t.dataset.originalTitle && (t.setAttribute("title", t.dataset.originalTitle), delete t.dataset.originalTitle);
}
const U = {
  mounted(t, o) {
    f(t, o);
  },
  updated(t, o) {
    m(t), f(t, o);
  },
  beforeUnmount(t) {
    m(t);
  }
};
export {
  N as getTooltipsEnabled,
  P as setTooltipsEnabled,
  U as vTooltip
};
