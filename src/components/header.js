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

import LangMenu from "./langMenu";
import StickyNav from "./stickyNav";
import * as styles from "./header.module.css";

const Header = ({ name, description, navLinks, lang }) => (
  <header id={"top"} className={styles.header}>
    <LangMenu lang={lang} />
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.subtitle}>{description}</p>
    </div>
    <StickyNav navLinks={navLinks} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
