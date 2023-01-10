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

/*** hamburger menu ***/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
