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

import * as React from "react";
import PropTypes from "prop-types";
import scrollTo from "gatsby-plugin-smoothscroll";
import LangMenu from "./langMenu";

import * as styles from "./mobileHamburgerMenu.module.css";

const MobileHamburgerMenu = ({ lang, navLinks }) => {
  let backToTopMsg;
  switch (lang) {
    case "vi":
      backToTopMsg = "Đầu trang";
      break;
    case "en":
      backToTopMsg = "To Top";
      break;
    default:
      backToTopMsg = "";
  }

  return (
    <>
      <div className={styles.toggleButtonWrapper}>
        <button id={"mobile-hamburger-menu-button"}>
          <div />
          <div />
          <div />
        </button>
      </div>
      <div id={"mobile-hamburger-menu"} className={styles.menu}>
        <div>
          <LangMenu lang={lang} />
          <ul
            id={"mobile-hamburger-menu-main-menu"}
            className={styles.mainMenu}
          >
            <li>
              <button
                onClick={function () {
                  scrollTo("#top");
                }}
              >
                <img
                  className={styles.icon}
                  src="/to_top_arrow_light.svg"
                  alt=""
                />
                {backToTopMsg}
              </button>
            </li>
            {navLinks.map(link => (
              <li key={link.link}>
                <button
                  name={link.link}
                  onClick={event => {
                    scrollTo(link.link);
                    event.preventDefault();
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MobileHamburgerMenu.propTypes = {
  lang: PropTypes.string,
  navLinks: PropTypes.any.isRequired,
};

MobileHamburgerMenu.defaultProps = {
  lang: ``,
};

export default MobileHamburgerMenu;
