// Customize these links before publishing. Keep secrets and API keys out of this file.
const SITE_CONFIG = {
  telegramBotUrl: "https://t.me/",
  socialLinks: {
    youtube: "#",
    tiktok: "#",
    facebook: "#",
    telegram: "#",
    github: "#"
  }
};

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

document.getElementById("telegramButton").href = SITE_CONFIG.telegramBotUrl;
const socialOrder = ["youtube", "tiktok", "facebook", "telegram", "github"];
document.querySelectorAll(".social-links a").forEach((link, index) => {
  const url = SITE_CONFIG.socialLinks[socialOrder[index]];
  link.href = url || "#";
  if (url && url !== "#") {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

// Active navigation indicator based on the section currently in view.
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach(section => observer.observe(section));
}
