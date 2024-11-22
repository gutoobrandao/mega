"use strict";

// Funtions
function responsiveMenu() {
  const header = document.querySelector("header");
  const btnOpen = document.querySelector("#btn--menu-open");
  const btnClose = document.querySelector("#btn--menu-close");

  header.addEventListener("click", (e) => {
    e.preventDefault();

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

responsiveMenu();
