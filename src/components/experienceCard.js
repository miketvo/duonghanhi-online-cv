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

import * as styles from "./experienceCard.module.css";

const ExperienceCard = ({ rotation, children }) => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {children}
      </div>
    </>
  );
};

ExperienceCard.defaultProps = {
  rotation: 0,
};

export default ExperienceCard;
