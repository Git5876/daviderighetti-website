(() => {
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    mobile.setAttribute("aria-hidden", String(!open));
    mobile.classList.toggle("is-open", open);
  };

  burger?.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  // Close mobile menu when a link is clicked
  mobile?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
