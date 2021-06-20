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

import * as style from "./langMenu.module.css";

const LangMenu = ({ lang }) => {
  let classNames = [];
  switch (lang) {
    case "vi":
      classNames["vi"] = style.active;
      break;
    case "en":
      classNames["en"] = style.active;
      break;
    default:
      break;
  }

  return (
    <ul className={style.langMenu}>
      <li>
        <a className={[classNames["vi"], style.link].join(" ")} href="/">
          Tiếng&nbsp;Việt
        </a>
      </li>
      <li>
        <a className={[classNames["en"], style.link].join(" ")} href="/en">
          English
        </a>
      </li>
    </ul>
  );
};

LangMenu.propTypes = {
  lang: PropTypes.string,
};

LangMenu.defaultProps = {
  lang: ``,
};

export default LangMenu;
