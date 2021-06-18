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
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/reset.css";
import "../styles/accessibility.css";
import "../styles/global.module.css";
import "../fonts/fonts.css";
import "./layout.module.css";

const Layout = ({ lang, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          vietnameseHeader {
            name
            description
            navLinks {
              name
              link
            }
          }
          englishHeader {
            name
            description
            navLinks {
              name
              link
            }
          }
        }
      }
    }
  `);

  let headerName = "Title";
  let headerDesc = "Description";
  let navLinks = undefined;
  switch (lang) {
    case "vi":
      headerName = data.site.siteMetadata.vietnameseHeader.name;
      headerDesc = data.site.siteMetadata.vietnameseHeader.description;
      navLinks = data.site.siteMetadata.vietnameseHeader.navLinks;
      break;
    case "en":
      headerName = data.site.siteMetadata.englishHeader.name;
      headerDesc = data.site.siteMetadata.englishHeader.description;
      navLinks = data.site.siteMetadata.englishHeader.navLinks;
      break;
  }

  return (
    <>
      <Header
        lang={lang}
        name={headerName}
        description={headerDesc}
        navLinks={navLinks}
      />
      <main>{children}</main>
      <footer>
        COPYRIGHT DƯƠNG HÀ NHI ©{new Date().getFullYear()} | WEBSITE BY
        {` `}
        <a href="https://miketvo.com">MIKETVO.COM</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
