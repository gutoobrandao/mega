"use strict";

function init() {
  responsiveMenu();
  slider();
}

function responsiveMenu() {
  const header = document.querySelector("header");
  const btnOpen = document.querySelector("#btn--menu-open");
  const btnClose = document.querySelector("#btn--menu-close");

  header.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("menu--icon") ||
      e.target.classList.contains("nav--link") ||
      e.target.matches("a")
    ) {
      btnOpen.classList.toggle("hidden");
      btnClose.classList.toggle("hidden");
      header.classList.toggle("header--expandida");
    }
  });
}

function slider() {
  const carousel = document.querySelector(".carousel");
  const indicators = document.querySelectorAll(".dots--dot");

  function updateIndicators(activeIndex) {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("dot--active", index === activeIndex);
    });
  }

  carousel.addEventListener("scroll", () => {
    const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    updateIndicators(index);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      const slideWidth = carousel.offsetWidth;
      carousel.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    });
  });
}

init();
