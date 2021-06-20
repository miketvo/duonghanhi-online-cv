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
const mobileHamburgerMenu = document.getElementById(
  "mobile-hamburger-menu-main-menu"
);
const mobileHamburgerMenuButton = document.getElementById(
  "mobile-hamburger-menu-button"
);

if (mobileHamburgerMenu && stickyNavRef) {
  let stickyNavStyles = getComputedStyle(stickyNavRef);
  let mobileHamburgerMenuChildren = mobileHamburgerMenu.childNodes;

  window.addEventListener("scroll", function () {
    // Dynamically load y-offset from top for each section linked in the menu
    let sectionPositions = [];
    mobileHamburgerMenuChildren.forEach(function (child, index) {
      if (index !== 0) {
        sectionPositions.push(
          document.getElementById(
            child.firstChild.getAttribute("name").slice(1)
          ).offsetTop
        );
      }
    });
    console.log(sectionPositions);

    // Highlight the active section name
    let offsetY =
      stickyNavRef.offsetHeight +
      parseInt(stickyNavStyles.marginTop) +
      parseInt(stickyNavStyles.marginBottom);
    for (
      let index = 1;
      index < mobileHamburgerMenuChildren.length - 1;
      index++
    ) {
      if (
        sectionPositions[index - 1] - offsetY - 1 <= window.scrollY &&
        window.scrollY + 1 < sectionPositions[index] - offsetY
      ) {
        mobileHamburgerMenuChildren[index].firstChild.classList.add("active");
      } else {
        mobileHamburgerMenuChildren[index].firstChild.classList.remove(
          "active"
        );
      }
    }
    if (
      sectionPositions[mobileHamburgerMenuChildren.length - 2] - offsetY <
      window.scrollY
    ) {
      mobileHamburgerMenuChildren[
        mobileHamburgerMenuChildren.length - 1
      ].firstChild.classList.add("active");
    } else {
      mobileHamburgerMenuChildren[
        mobileHamburgerMenuChildren.length - 1
      ].firstChild.classList.remove("active");
    }
    if (window.scrollY < window.innerHeight) {
      mobileHamburgerMenuChildren[0].firstChild.classList.remove("show");
    } else {
      mobileHamburgerMenuChildren[0].firstChild.classList.add("show");
    }
  });
}
