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

const stickyNavOffsetTop = document.getElementById("sticky-nav").offsetTop;
const toTopButton = document.getElementById("to-top-button");
const langSwitchButton = document.getElementById("lang-switch-button");

if (toTopButton && langSwitchButton) {
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
