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

import Layout from "../components/layout";
import Seo from "../components/seo";
import LangSwitch from "../components/langSwitch";
import ToTop from "../components/toTop";
import ExperienceCard from "../components/experienceCard";
import * as indexStyles from "./index.module.css";
import * as experienceCardStyles from "../components/experienceCard.module.css";

const IndexPageVI = () => (
  <Layout lang={"vi"}>
    <Seo lang={"vi"} />
    <LangSwitch lang={"vi"} />
    <ToTop />

    <section id={"bio"}>
      <div className={indexStyles.bioWrapper}>
        <div className={indexStyles.profilePhotoWrapper}>
          <StaticImage
            className={indexStyles.photo}
            src={"../images/portrait.jpg"}
            alt={"Ảnh chân dung"}
          />
        </div>
        <div className={indexStyles.bioContentWrapper}>
          <h2>Xin chào! Mình là Dương Hà&nbsp;Nhi.</h2>
          <p>
            Làm nghề giáo viên hóa học phổ thông, niềm đam mê của mình là bồi
            dưỡng và học tập cùng các bạn trẻ. Bên cạnh việc truyền đạt kiến
            thức, mục tiêu của mình còn là làm lớp học trở nên thú vị, vui vẻ và
            thực tiễn để tạo nên một môi trường tối ưu cho học sinh phát triển
            tiềm năng của mình khi còn trên ghế nhà trường.
          </p>
        </div>
      </div>
    </section>

    <section id={"education"}>
      <div className={indexStyles.educationWrapper}>
        <div className={indexStyles.educationEntryYear}>
          <h2>2014</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>THPT Trần&nbsp;Phú - Hoàn&nbsp;Kiếm</h2>
        </div>

        <div className={indexStyles.educationEntryYear}>
          <h2>2017</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>Đại học Quốc&nbsp;gia Hà&nbsp;Nội</h2>
          <p>
            Trường Đại&nbsp;học Giáo&nbsp;dục
            <br />
            Khoa Sư&nbsp;phạm Hóa&nbsp;học
          </p>
        </div>

        <div className={indexStyles.educationEntryYear}>
          <h2>2020</h2>
        </div>
        <span className={indexStyles.educationEntrySeparator} />
        <div className={indexStyles.educationDecoration} />
        <div className={indexStyles.educationEntryDescription}>
          <h2>Đại&nbsp;học Quốc&nbsp;gia Hà&nbsp;Nội</h2>
          <p>
            Trường Đại&nbsp;học Ngoại&nbsp;ngữ
            <br />
            Ngành Biên&nbsp;dịch - Phiên&nbsp;dịch, Khoa Ngôn ngữ Anh
          </p>
        </div>
      </div>
    </section>

    <section id={"experiences"}>
      <div className={indexStyles.experiencesWrapper}>
        <ExperienceCard rotation={-3}>
          <h3>2017 - 2021</h3>
          <h2>Gia sư bộ môn Hóa&nbsp;học</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../images/adam-winger-UFG04g43hqs-unsplash.jpg"}
            alt={""}
          />
          <p>
            Hỗ trợ nhóm học sinh lấy gốc môn Hóa, ôn luyện thi Đại&nbsp;học.
          </p>
        </ExperienceCard>

        <ExperienceCard rotation={1}>
          <h3>2019</h3>
          <h2>Cuộc thi Hunarobo lần 7</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../images/Hunarobo.JPG"}
            alt={""}
          />
          <p>Hỗ trợ thí sinh và ban tổ chức trong quá trình cuộc thi.</p>
        </ExperienceCard>

        <ExperienceCard rotation={-1}>
          <h3>2019 - 2020</h3>
          <h2>Công ty Cổ&nbsp;phần Anh ngữ Apax</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../images/Apax.jpg"}
            alt={""}
          />
          <p>
            Trợ giảng tiếng Anh, hỗ trợ giáo viên bản ngữ giảng dạy, phiên dịch
            các cuộc họp giữa giáo viên và phụ huynh.
          </p>
        </ExperienceCard>

        <ExperienceCard rotation={-2}>
          <h3>2020</h3>
          <h2>Trường THPT Khoa&nbsp;học Giáo&nbsp;dục HES - VNU</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../images/HES.JPG"}
            alt={""}
          />
          <p>Thực hiện công tác kiến tập sư phạm.</p>
        </ExperienceCard>

        <ExperienceCard rotation={2}>
          <h3>2021</h3>
          <h2>Trường THPT Trần&nbsp;Phú - Hoàn&nbsp;Kiếm</h2>
          <StaticImage
            className={experienceCardStyles.photo}
            src={"../images/TP-HK.JPG"}
            alt={""}
          />
          <p>Thực hiện công tác thực tập sư phạm.</p>
        </ExperienceCard>
      </div>
    </section>

    <section id={"skills"}>
      <div className={indexStyles.skillsWrapper}>
        <div className={indexStyles.skill}>
          <h2>Tiếng Anh</h2>
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
          <h2>Tin&nbsp;học văn&nbsp;phòng</h2>
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
          <h2>Edit video</h2>
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
          <h2>Design ảnh</h2>
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
          <img src={"/icon_phone.svg"} alt={"Điện thoại"} />
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
          <img src={"/icon_map.svg"} alt={"Địa chỉ"} />
          <p>371 phố Vĩnh&nbsp;Hưng, Hoàng&nbsp;Mai - Hà&nbsp;Nội</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageVI;
