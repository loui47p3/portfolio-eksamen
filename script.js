/* scroller = reveal */
window.addEventListener("scroll", function () {
  const revealElements = document.querySelectorAll(".scroll .reveal");
  revealElements.forEach((revealElement) => {
    if (isElementInViewport(revealElement)) {
      revealElement.classList.add("revealed");
    }
  });
});

/* revealed */
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

/* click = toggle active class + vis bar1,2,3 */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bar1.classList.toggle("active");
  bar2.classList.toggle("active");
  bar3.classList.toggle("active");
});

/* click på link = fjern active */
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
