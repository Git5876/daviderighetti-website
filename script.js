(() => {
  // Mobile menu
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  const setOpen = (open) => {
    btn?.setAttribute("aria-expanded", String(open));
    menu?.setAttribute("aria-hidden", String(!open));
    menu?.classList.toggle("is-open", open);
  };

  btn?.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  menu?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

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
