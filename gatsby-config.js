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

module.exports = {
  siteMetadata: {
    title: `Dương Hà Nhi`,
    description: `Dương Hà Nhi's Curriculum Vitae`,
    author: `@miketvo`,
    vietnameseHeader: {
      name: `Dương Hà Nhi`,
      description: `Giáo viên Hóa học`,
      navLinks: [
        {
          name: `Tiểu sử`,
          link: `#bio`,
        },
        {
          name: `Học vấn`,
          link: `#education`,
        },
        {
          name: `Kinh nghiệm`,
          link: `#experiences`,
        },
        {
          name: `Kỹ năng`,
          link: `#skills`,
        },
        {
          name: `Liên hệ`,
          link: `#contact`,
        },
      ],
    },
    englishHeader: {
      name: `Dương Hà Nhi`,
      description: `Chemistry Teacher`,
      navLinks: [
        {
          name: `Bio`,
          link: `#bio`,
        },
        {
          name: `Education`,
          link: `#education`,
        },
        {
          name: `Experiences`,
          link: `#experiences`,
        },
        {
          name: `Skills`,
          link: `#skills`,
        },
        {
          name: `Contact`,
          link: `#contact`,
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `duonghanhi-cv`,
        short_name: `duonghanhi`,
        start_url: `/`,
        background_color: `#234b4a`,
        theme_color: `#234b4a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
