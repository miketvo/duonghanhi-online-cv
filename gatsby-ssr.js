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

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react");

exports.onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setPreBodyComponents([
    <div id={"preloader"}>
      <div className={"preloader-loader"} />
    </div>,
    <noscript>
      <div id={"noscript-msg"}>
        This application uses Javascript to provide you with the best experience
        possible :) Please enable Javascript in your browser.
      </div>
    </noscript>,
  ]);
  setHeadComponents([
    <link as="script" rel="preload" href="/js/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/noscript.css" />
    </noscript>,
  ]);
  setPostBodyComponents([<script src="/js/preloader.js" />]);
};
