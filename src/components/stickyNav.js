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
import scrollTo from "gatsby-plugin-smoothscroll";
import PropTypes from "prop-types";

import * as styles from "./stickyNav.module.css";

const StickyNav = ({ navLinks }) => (
  <nav id={"sticky-nav"} className={styles.stickyNav}>
    <ul>
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
  </nav>
);

StickyNav.propTypes = {
  navLinks: PropTypes.any.isRequired,
};

export default StickyNav;
