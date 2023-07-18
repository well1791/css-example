const maybeQuery = (fn, ...args) =>
  [...document.querySelectorAll(...args)]
    .slice(0, 1)
    .forEach(fn)

maybeQuery((btn) => btn.addEventListener("click", () => {
  const ariaAttr = "aria-expanded";
  const isExpanded = btn.getAttribute(ariaAttr) == "true";
  btn.setAttribute(ariaAttr, !isExpanded);
}), "#mobile-menu-toggle");
