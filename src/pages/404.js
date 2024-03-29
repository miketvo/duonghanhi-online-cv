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

import Seo from "../components/seo";
import * as styles from "./404.module.css";

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div className={styles.wrapper}>
      <h1>404: Not Found</h1>
      <p>This page doesn&#39;t exist</p>
      <p>Trang này không tồn tại</p>
      <a href={"/"}>Back / Trở về</a>
    </div>
  </>
);

export default NotFoundPage;
