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

const skillsSection = document.getElementById("skills");
const skillBars = document.querySelectorAll("#skills .skillbar");

if (skillBars) {
  for (let index = 0; index < skillBars.length; index++) {
    window.addEventListener("scroll", function () {
      if (
        skillsSection.offsetTop + window.innerHeight / 2 < window.scrollY &&
        skillBars[index].getAttribute("style") !== ""
      ) {
        let newStyle = "display: inline; animation: expandX 0.8s;";
        skillBars[index].setAttribute("style", newStyle);
      }
    });
  }
}
