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

const IndexPageEN = () => (
  <Layout lang={"en"}>
    <Seo lang={"en"} />
    <LangSwitch lang={"en"} />
    <ToTop />

    <section id={"bio"}>
      <div>
        <div>
          <StaticImage
            src={"../../images/portrait.jpg"}
            alt={"Portrait photo"}
          />
        </div>
        <div>
          <p>Hello! My name is Dương Hà Nhi.</p>
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
      <div>
        <div>
          <h2>2014</h2>
        </div>
        <div>
          <h2>Trần Phú - Hoàn Kiếm Highschool</h2>
        </div>

        <div>
          <h2>2017</h2>
        </div>
        <div>
          <h2>Vietnam National University, Hanoi</h2>
          <p>
            University of Education
            <br />
            School of Chemistry Pedagogy
          </p>
        </div>

        <div>
          <h2>2017</h2>
        </div>
        <div>
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
      <div>
        <h3>2017 - 2021</h3>
        <h2>Chemistry Tutor</h2>
        <StaticImage
          src={"../../images/adam-winger-UFG04g43hqs-unsplash.jpg"}
          alt={""}
        />
        <p>
          Tutoring students in Chemistry for their Vietnamese university
          entrance exam.
        </p>
      </div>

      <div>
        <h3>2019</h3>
        <h2>Hunarobo Contest 7</h2>
        <StaticImage src={"../../images/Hunarobo.JPG"} alt={""} />
        <p>Assisting in organisational logistics and contestants support.</p>
      </div>

      <div>
        <h3>2019 - 2020</h3>
        <h2>Apax English</h2>
        <StaticImage src={"../../images/Apax.jpg"} alt={""} />
        <p>
          English teaching assistant for native and non-native teaching staffs,
          bilingual English-Vietnamese interpretation for parent meetings.
        </p>
      </div>

      <div>
        <h3>2020</h3>
        <h2>HES - VNU Highschool of Education Science</h2>
        <StaticImage src={"../../images/HES.JPG"} alt={""} />
        <p>Practicing in Pedagogy.</p>
      </div>

      <div>
        <h3>2021</h3>
        <h2>Trần Phú - Hoàn Kiếm Highschool</h2>
        <StaticImage src={"../../images/TP-HK.JPG"} alt={""} />
        <p>Professional training in Pedagogy.</p>
      </div>
    </section>

    <section id={"skills"}>
      <div>
        <h2>English</h2>
        <div>
          <span>IELTS 6.0</span>
        </div>
      </div>

      <div>
        <h2>Office Information Technology</h2>
        <div></div>
      </div>

      <div>
        <h2>Video Editing</h2>
        <div></div>
      </div>

      <div>
        <h2>Photo Design</h2>
        <div></div>
      </div>

      <div>
        <h2>Teamwork</h2>
        <div></div>
      </div>
    </section>

    <section id={"contact"}>
      <div>
        <div>
          <div>Phone Icon here</div>
          <p>0967931999</p>
        </div>

        <div>
          <div>Email Icon here</div>
          <p>nhidg25@gmail.com</p>
        </div>

        <div>
          <div>Facebook Icon here</div>
          <p>facebook.com/dg.hnhi</p>
        </div>

        <div>
          <div>Map Icon here</div>
          <p>371 Vĩnh Hưng st., Hoàng Mai District - Hanoi</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageEN;
