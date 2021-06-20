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
import { StaticImage } from "gatsby-plugin-image";

import Header from "./header";
import MobileHamburgerMenu from "./mobileHamburgerMenu";
import "../styles/reset.css";
import "../styles/accessibility.css";
import "../styles/global.module.css";
import "../fonts/fonts.css";
import * as styles from "./layout.module.css";

const Layout = ({ lang, children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
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

  let headerName;
  let headerDesc;
  let navLinks = [];
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
    default:
      headerName = "Title";
      headerDesc = "Description";
  }

  return (
    <>
      <Header
        lang={lang}
        name={headerName}
        description={headerDesc}
        navLinks={navLinks}
      />
      <MobileHamburgerMenu lang={lang} navLinks={navLinks} />
      <main>{children}</main>
      <div className={styles.footerBackground} />
      <footer>
        <div>
          COPYRIGHT DƯƠNG&nbsp;HÀ&nbsp;NHI ©{new Date().getFullYear()} |
          WEBSITE&nbsp;BY
          {` `}
          <a href="https://miketvo.com">MIKETVO.COM</a>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
