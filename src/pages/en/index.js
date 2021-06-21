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
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../../components/seo";
import Layout from "../../components/layout";
import LangSwitch from "../../components/langSwitch";
import ToTop from "../../components/toTop";
import ExperienceCard from "../../components/experienceCard";
import * as indexStyles from "../index.module.css";
import * as experienceCardStyles from "../../components/experienceCard.module.css";
import SectionTitleCard from "../../components/sectionTitleCard";

const IndexPageEN = () => (
  <Layout lang={"en"}>
    <Seo lang={"en"} />
    <LangSwitch lang={"en"} />
    <ToTop />

    <section id={"bio"}>
      <SectionTitleCard scrollToId={"bio-content"} sectionTitle={"Bio"} />
      <div id={"bio-content"} className={indexStyles.bioWrapper}>
        <div className={indexStyles.profilePhotoWrapper}>
          <StaticImage
            className={indexStyles.photo}
            src={"../../images/portrait.jpg"}
            alt={"Portrait photo"}
          />
        </div>
        <div className={indexStyles.bioContentWrapper}>
          <h2>Hello! My name is Dương Hà&nbsp;Nhi.</h2>
          <p>
            I am an enthusiastic secondary and high school chemistry teacher
            from Hanoi. My passion is working with young people and contributing
            to their personal development. My goal is to enhance the learning
            experience for my students and help them get the most out of their
            school years by making lessons enjoyable, fun, and practical.
          </p>
        </div>
      </div>
    </section>

    <section id={"education"}>
      <SectionTitleCard
        scrollToId={"education-content"}
        sectionTitle={"Education"}
      />
      <div id={"education-content"} className={indexStyles.educationWrapper}>
        <div className={indexStyles.educationEntryYear}>
          <h2>2014</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>Trần Phú - Hoàn Kiếm Highschool</h2>
        </div>

        <div className={indexStyles.educationEntryYear}>
          <h2>2017</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>Vietnam National University, Hanoi</h2>
          <p>
            University of Education
            <br />
            School of Chemistry Pedagogy
          </p>
        </div>

        <div className={indexStyles.educationEntryYear}>
          <h2>2020</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>Vietnam National University, Hanoi</h2>
          <p>
            University of Languages and International Studies
            <br />
            School of English, Language Interpretation and Translation Major
          </p>
        </div>
      </div>
    </section>

    <section id={"experiences"}>
      <SectionTitleCard
        scrollToId={"experiences-content"}
        sectionTitle={"Experiences"}
      />
      <div
        id={"experiences-content"}
        className={indexStyles.experiencesWrapper}
      >
        <ExperienceCard rotation={-3}>
          <h3>2017 - 2021</h3>
          <h2>Chemistry Tutor</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../../images/adam-winger-UFG04g43hqs-unsplash.jpg"}
            alt={""}
          />
          <p>
            Tutoring students in Chemistry for their Vietnamese university
            entrance exam.
          </p>
        </ExperienceCard>

        <ExperienceCard rotation={1}>
          <h3>2019</h3>
          <h2>Hunarobo Contest 7</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../../images/Hunarobo.JPG"}
            alt={""}
          />
          <p>Assisting in organisational logistics and contestants support.</p>
        </ExperienceCard>

        <ExperienceCard rotation={-1}>
          <h3>2019 - 2020</h3>
          <h2>Apax English</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../../images/Apax.jpg"}
            alt={""}
          />
          <p>
            English teaching assistant for native and non-native teaching
            staffs, bilingual English-Vietnamese interpretation for parent
            meetings.
          </p>
        </ExperienceCard>

        <ExperienceCard rotation={-2}>
          <h3>2020</h3>
          <h2>HES - VNU Highschool of Education Science</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../../images/HES.JPG"}
            alt={""}
          />
          <p>Practicing in Pedagogy.</p>
        </ExperienceCard>

        <ExperienceCard rotation={2}>
          <h3>2021</h3>
          <h2>Trần Phú - Hoàn Kiếm Highschool</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../../images/TP-HK.JPG"}
            alt={""}
          />
          <p>Professional training in Pedagogy.</p>
        </ExperienceCard>
      </div>
    </section>

    <section id={"skills"}>
      <SectionTitleCard scrollToId={"skills-content"} sectionTitle={"Skills"} />
      <div id={"skills-content"} className={indexStyles.skillsWrapper}>
        <div className={indexStyles.skill}>
          <h2>English</h2>
          <div className={indexStyles.skillsBarWrapper}>
            <span
              className={[
                indexStyles.skillsBar,
                indexStyles.skillsBar1,
                "skillbar",
              ].join(" ")}
            />
            <span className={indexStyles.skillsBarCaption}>IELTS 6.0</span>
          </div>
        </div>

        <div className={indexStyles.skill}>
          <h2>Office I.T.</h2>
          <div className={indexStyles.skillsBarWrapper}>
            <span
              className={[
                indexStyles.skillsBar,
                indexStyles.skillsBar2,
                "skillbar",
              ].join(" ")}
            />
          </div>
        </div>

        <div className={indexStyles.skill}>
          <h2>Video Editing</h2>
          <div className={indexStyles.skillsBarWrapper}>
            <span
              className={[
                indexStyles.skillsBar,
                indexStyles.skillsBar3,
                "skillbar",
              ].join(" ")}
            />
          </div>
        </div>

        <div className={indexStyles.skill}>
          <h2>Graphic Design</h2>
          <div className={indexStyles.skillsBarWrapper}>
            <span
              className={[
                indexStyles.skillsBar,
                indexStyles.skillsBar4,
                "skillbar",
              ].join(" ")}
            />
          </div>
        </div>

        <div className={indexStyles.skill}>
          <h2>Teamwork</h2>
          <div className={indexStyles.skillsBarWrapper}>
            <span
              className={[
                indexStyles.skillsBar,
                indexStyles.skillsBar5,
                "skillbar",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </section>

    <section id={"contact"} className={indexStyles.contactSection}>
      <div className={indexStyles.contactWrapper}>
        <div>
          <img src={"/icon_phone.svg"} alt={"Phone"} />
          <p>0967931999</p>
        </div>

        <div>
          <img src={"/icon_email.svg"} alt={"Email"} />
          <p>nhidg25@gmail.com</p>
        </div>

        <div>
          <img src={"/icon_facebook.svg"} alt={"Facebook"} />
          <p>facebook.com/dg.hnhi</p>
        </div>

        <div>
          <img src={"/icon_map.svg"} alt={"Address"} />
          <p>371 Vĩnh&nbsp;Hưng st., Hoàng&nbsp;Mai District - Hanoi</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageEN;
