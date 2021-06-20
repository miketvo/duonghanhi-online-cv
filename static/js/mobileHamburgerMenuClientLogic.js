/*
 * Copyright (c) 2021 Mike Vo (info@miketvo.com) - All Rights Reserved.
 *
 * This file is part of the project "duonghanhi-online-cv".
 *
 * This project is an online curriculum vitae authored by Mike Vo - hereby
 * referred to as "the author" - for Ms. Duong Ha Nhi - hereby referred to as
 * "the client".
 *
 * COPYING AND/OR DISTRIBUTING OF ANY CONTENT WITHIN THIS PROJECT WITHOUT EX-
 * PRESS PERMISSION FROM THE CLIENT AND/OR THE AUTHOR, VIA ANY MEDIUM IS
 * STRICTLY PROHIBITED.
 */

const stickyNavRef = document.getElementById("sticky-nav");
const mobileHamburgerMenu = document.getElementById("mobile-hamburger-menu");
const mobileHamburgerMenuMain = document.getElementById(
  "mobile-hamburger-menu-main-menu"
);
const mobileHamburgerMenuButton = document.getElementById(
  "mobile-hamburger-menu-button"
);
let menuOn = false;

if (mobileHamburgerMenuMain && mobileHamburgerMenuButton && stickyNavRef) {
  let stickyNavStyles = getComputedStyle(stickyNavRef);
  let mobileHamburgerMenuMainChildren = mobileHamburgerMenuMain.childNodes;

  window.addEventListener("scroll", function () {
    // Dynamically load y-offset from top for each section linked in the menu
    let sectionPositions = [];
    mobileHamburgerMenuMainChildren.forEach(function (child, index) {
      child.firstChild.addEventListener("click", function () {
        mobileHamburgerMenu.setAttribute("style", "");
        mobileHamburgerMenuButton.classList.remove(
          "mobile-hamburger-menu-button-active"
        );
        menuOn = false;
      });
      if (index !== 0) {
        sectionPositions.push(
          document.getElementById(
            child.firstChild.getAttribute("name").slice(1)
          ).offsetTop
        );
      }
    });

    // Highlight the active section name
    let offsetY =
      stickyNavRef.offsetHeight +
      parseInt(stickyNavStyles.marginTop) +
      parseInt(stickyNavStyles.marginBottom);
    for (
      let index = 1;
      index < mobileHamburgerMenuMainChildren.length - 1;
      index++
    ) {
      if (
        sectionPositions[index - 1] - offsetY - 1 <= window.scrollY &&
        window.scrollY + 1 < sectionPositions[index] - offsetY
      ) {
        mobileHamburgerMenuMainChildren[index].firstChild.classList.add(
          "active"
        );
      } else {
        mobileHamburgerMenuMainChildren[index].firstChild.classList.remove(
          "active"
        );
      }
    }
    if (
      sectionPositions[mobileHamburgerMenuMainChildren.length - 2] - offsetY <
      window.scrollY
    ) {
      mobileHamburgerMenuMainChildren[
        mobileHamburgerMenuMainChildren.length - 1
      ].firstChild.classList.add("active");
    } else {
      mobileHamburgerMenuMainChildren[
        mobileHamburgerMenuMainChildren.length - 1
      ].firstChild.classList.remove("active");
    }
    if (window.scrollY < window.innerHeight) {
      mobileHamburgerMenuMainChildren[0].firstChild.classList.remove("show");
    } else {
      mobileHamburgerMenuMainChildren[0].firstChild.classList.add("show");
    }
  });
}

mobileHamburgerMenuButton.addEventListener("click", function () {
  if (menuOn) {
    mobileHamburgerMenu.setAttribute("style", "");
    mobileHamburgerMenuButton.classList.remove(
      "mobile-hamburger-menu-button-active"
    );
  } else {
    mobileHamburgerMenu.setAttribute(
      "style",
      "display: block; animation: fadeInExpandY 0.5s;"
    );
    mobileHamburgerMenuButton.classList.add(
      "mobile-hamburger-menu-button-active"
    );
  }
  menuOn = !menuOn;
});
