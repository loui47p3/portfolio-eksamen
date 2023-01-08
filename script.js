/* reveal */
window.addEventListener("scroll", function () {
  const revealElements = document.querySelectorAll(".scroll .reveal");
  revealElements.forEach((revealElement) => {
    if (isElementInViewport(revealElement)) {
      revealElement.classList.add("revealed");
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/* smooth scrolling */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScrollTo(link.getAttribute("href").substring(1));
  });
});

function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

/* menu */
const button = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

/* aktiv menu */
