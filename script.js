document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

burger?.addEventListener("click", () => {
  mobile?.classList.toggle("show");
});

const openPrivacy = document.getElementById("openPrivacy");
const modal = document.getElementById("privacyModal");
const closeBg = document.getElementById("closePrivacy");
const closeBtn = document.getElementById("closePrivacyBtn");

openPrivacy.onclick = () => modal.style.display = "block";
closeBg.onclick = closeBtn.onclick = () => modal.style.display = "none";
