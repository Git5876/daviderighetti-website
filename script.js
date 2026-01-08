(() => {
  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu (only relevant on small screens)
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  const setOpen = (open) => {
    if (!burger || !mobileMenu) return;
    burger.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.classList.toggle("is-open", open);
  };

  burger?.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  mobileMenu?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Soft reveal on scroll
  const els = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );
  els.forEach((el) => io.observe(el));
})();
