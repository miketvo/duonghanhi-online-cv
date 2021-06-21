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

import * as styles from "./sectionTitleCard.module.css";

const SectionTitleCard = ({ sectionTitle, children }) => (
  <>
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <h1>{sectionTitle}</h1>
        <div>{children}</div>
        <img className={styles.icon} src={"/arrow_down.svg"} alt={""} />
      </div>
    </div>
  </>
);

SectionTitleCard.propTypes = {
  sectionTitle: PropTypes.string,
};

SectionTitleCard.defaultProps = {
  sectionTitle: `Section Title`,
};

export default SectionTitleCard;
