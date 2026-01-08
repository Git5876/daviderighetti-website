(() => {
  // year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // mobile menu
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");

  const setOpen = (open) => {
    if (!burger || !mobile) return;
    burger.setAttribute("aria-expanded", String(open));
    mobile.setAttribute("aria-hidden", String(!open));
    mobile.classList.toggle("is-open", open);
  };

  burger?.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  mobile?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // soft reveal
  const els = [...document.querySelectorAll(".reveal")];
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
