var s = Object.defineProperty;
var o = (i, t, e) => t in i ? s(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => (o(i, typeof t != "symbol" ? t + "" : t, e), e);
class l {
  constructor(t) {
    r(this, "controlelements", []);
    r(this, "controlselector", "[data-matchmedia-query]");
    const e = this.parseOptions(t);
    e.initiateElements && (this.InitiateElements(e.parent), window.addEventListener("global-markupchange", (a) => {
      var n;
      this.InitiateElements(((n = a == null ? void 0 : a.detail) == null ? void 0 : n.target) ?? document);
    }));
  }
  parseOptions(t) {
    const e = { parent: document.body, initiateElements: !0 };
    return !t || typeof t != "object" || typeof t.parent > "u" && typeof t.initiateElements > "u" ? e : { ...e, ...t };
  }
  InitiateElements(t = document.body) {
    const a = [].slice.call(
      t.querySelectorAll(this.controlselector)
    ).filter((n) => n.MatchMediaAttributeManager !== "activated");
    a.forEach((n) => {
      this.bindEvents(n), n.MatchMediaAttributeManager = "activated";
    }), this.controlelements = [].concat(
      this.controlelements,
      a
    );
  }
  bindEvents(t) {
    const e = t, a = e.getAttribute("data-matchmedia-query") || "";
    if (!a)
      return;
    const n = window.matchMedia(a);
    n.matches && this.addAttribute(e), n.onchange = (c) => {
      c.matches && this.addAttribute(e);
    };
  }
  addAttribute(t) {
    const [e, a] = (t.getAttribute("data-matchmedia-attribute") || "").split(",");
    t.getAttribute(e) + "" != a + "" && t.setAttribute(e, a);
  }
}
export {
  l as default
};
