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

import * as styles from "./langSwitch.module.css";

const LangSwitch = ({ lang }) => {
  let langText;
  let langHref;
  switch (lang) {
    case "vi":
      langText = "EN";
      langHref = "\\en";
      break;
    case "en":
      langText = "VI";
      langHref = "\\";
      break;
    default:
      langText = "";
      langHref = "";
  }

  return (
    <>
      <a
        id={"lang-switch-button"}
        className={styles.langSwitch}
        href={langHref}
      >
        <span>{langText}</span>
      </a>
    </>
  );
};

LangSwitch.propTypes = {
  lang: PropTypes.string,
};

LangSwitch.defaultProps = {
  lang: ``,
};

export default LangSwitch;
