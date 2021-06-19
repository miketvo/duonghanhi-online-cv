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

if (stickyNav) {
  let stickyPos = stickyNav.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= stickyPos) {
      stickyNav.classList.add("sticky-nav-stick");
    } else {
      stickyNav.classList.remove("sticky-nav-stick");
    }
  });
}
