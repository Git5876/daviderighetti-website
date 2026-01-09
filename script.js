// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile menu
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

function closeMobile() {
  if (!mobile || !burger) return;
  mobile.classList.remove("show");
  mobile.setAttribute("aria-hidden", "true");
  burger.setAttribute("aria-expanded", "false");
}

burger?.addEventListener("click", () => {
  if (!mobile || !burger) return;
  const isOpen = mobile.classList.toggle("show");
  mobile.setAttribute("aria-hidden", String(!isOpen));
  burger.setAttribute("aria-expanded", String(isOpen));
});

mobile?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMobile);
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12 });

reveals.forEach(el => obs.observe(el));

// Privacy modal
const openPrivacy = document.getElementById("openPrivacy");
const privacyModal = document.getElementById("privacyModal");
const closePrivacy = document.getElementById("closePrivacy");
const closePrivacyBtn = document.getElementById("closePrivacyBtn");

function openModal() {
  if (!privacyModal) return;
  privacyModal.style.display = "block";
  privacyModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!privacyModal) return;
  privacyModal.style.display = "none";
  privacyModal.setAttribute("aria-hidden", "true");
}

openPrivacy?.addEventListener("click", openModal);
closePrivacy?.addEventListener("click", closeModal);
closePrivacyBtn?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
