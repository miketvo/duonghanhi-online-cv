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

const stickyNav = document.getElementById("sticky-nav");
const toTopButton = document.getElementById("to-top-button");
const langSwitchButton = document.getElementById("lang-switch-button");

// Primary navigation UI logic
if (stickyNav) {
  let stickyNavStyles = getComputedStyle(stickyNav);
  let stickyPos = stickyNav.offsetTop;
  let stickyNavChildren = stickyNav.firstChild.childNodes;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= stickyPos) {
      // Dynamically load y-offset from top for each section linked in the nav
      let sectionPositions = [];
      stickyNavChildren.forEach(function (child) {
        sectionPositions.push(
          document.getElementById(
            child.firstChild.getAttribute("name").slice(1)
          ).offsetTop
        );
      });

      // Display sticky navbar when user scrolls past the header section
      stickyNav.classList.add("sticky-nav-stick");

      // Highlight the active section name
      let offsetY =
        stickyNav.offsetHeight +
        parseInt(stickyNavStyles.marginTop) +
        parseInt(stickyNavStyles.marginBottom);
      for (let index = 0; index < stickyNavChildren.length - 1; index++) {
        if (
          sectionPositions[index] - offsetY < window.scrollY &&
          window.scrollY < sectionPositions[index + 1] - offsetY
        ) {
          stickyNavChildren[index].firstChild.classList.add("active");
        } else {
          stickyNavChildren[index].firstChild.classList.remove("active");
        }
      }
      if (
        sectionPositions[stickyNavChildren.length - 1] - offsetY <
        window.scrollY
      ) {
        stickyNavChildren[
          stickyNavChildren.length - 1
        ].firstChild.classList.add("active");
      } else {
        stickyNavChildren[
          stickyNavChildren.length - 1
        ].firstChild.classList.remove("active");
      }
    } else {
      stickyNav.classList.remove("sticky-nav-stick");
    }
  });
}

// Auxiliary navigation UI logic
if (stickyNav && toTopButton && langSwitchButton) {
  let stickyNavOffsetTop = stickyNav.offsetTop;

  toTopButton.addEventListener("mouseenter", function () {
    toTopButton.setAttribute(
      "style",
      "transform: translateX(0); opacity: 1.0; cursor: pointer;"
    );
  });
  toTopButton.addEventListener("mouseleave", function () {
    toTopButton.setAttribute(
      "style",
      "transform: translateX(60px); opacity: 1.0;"
    );
  });

  langSwitchButton.addEventListener("mouseenter", function () {
    langSwitchButton.setAttribute(
      "style",
      "transform: translateX(0); opacity: 1.0;"
    );
  });
  langSwitchButton.addEventListener("mouseleave", function () {
    langSwitchButton.setAttribute(
      "style",
      "transform: translateX(-60px); opacity: 1.0;"
    );
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY >= stickyNavOffsetTop) {
      toTopButton.setAttribute(
        "style",
        "transform: translateX(60px); opacity: 1.0;"
      );
      langSwitchButton.setAttribute(
        "style",
        "transform: translateX(-60px); opacity: 1.0;"
      );
    } else {
      toTopButton.setAttribute(
        "style",
        "transform: translateX(75px); opacity: 0;"
      );
      langSwitchButton.setAttribute(
        "style",
        "transform: translateX(-75px); opacity: 0;"
      );
    }
  });
}
