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
import * as styles from "./index.module.css";

const IndexPageVI = () => (
  <Layout lang={"vi"}>
    <Seo lang={"vi"} />
    <LangSwitch lang={"vi"} />
    <ToTop />

    <section id={"bio"}>
      <div className={styles.bioWrapper}>
        <div className={styles.profilePhotoWrapper}>
          <StaticImage
            className={styles.photo}
            src={"../images/portrait.jpg"}
            alt={"Ảnh chân dung"}
          />
        </div>
        <div className={styles.bioContentWrapper}>
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
      <div>
        <div>
          <h2>2014</h2>
        </div>
        <div>
          <h2>THPT Trần Phú - Hoàn Kiếm</h2>
        </div>

        <div>
          <h2>2017</h2>
        </div>
        <div>
          <h2>Đại học Quốc gia Hà Nội</h2>
          <p>
            Trường Đại học Giáo dục
            <br />
            Khoa Sư phạm Hóa học
          </p>
        </div>

        <div>
          <h2>2017</h2>
        </div>
        <div>
          <h2>Đại học Quốc gia Hà Nội</h2>
          <p>
            Trường Đại học Ngoại ngữ
            <br />
            Ngành Biên dịch - Phiên dịch, Khoa Ngôn ngữ Anh
          </p>
        </div>
      </div>
    </section>

    <section id={"experiences"}>
      <div>
        <h3>2017 - 2021</h3>
        <h2>Gia sư bộ môn Hóa học</h2>
        <StaticImage
          src={"../images/adam-winger-UFG04g43hqs-unsplash.jpg"}
          alt={""}
        />
        <p>Hỗ trợ nhóm học sinh lấy gốc môn Hóa, ôn luyện thi Đại học.</p>
      </div>

      <div>
        <h3>2019</h3>
        <h2>Cuộc thi Hunarobo lần 7</h2>
        <StaticImage src={"../images/Hunarobo.JPG"} alt={""} />
        <p>Hỗ trợ thí sinh và ban tổ chức trong quá trình cuộc thi.</p>
      </div>

      <div>
        <h3>2019 - 2020</h3>
        <h2>Công ty Cổ phần Anh ngữ Apax</h2>
        <StaticImage src={"../images/Apax.jpg"} alt={""} />
        <p>
          Trợ giảng tiếng Anh, hỗ trợ giáo viên bản ngữ giảng dạy, phiên dịch
          các cuộc họp giữa giáo viên và phụ huynh.
        </p>
      </div>

      <div>
        <h3>2020</h3>
        <h2>Trường THPT Khoa học Giáo dục HES - VNU</h2>
        <StaticImage src={"../images/HES.JPG"} alt={""} />
        <p>Thực hiện công tác kiến tập sư phạm.</p>
      </div>

      <div>
        <h3>2021</h3>
        <h2>Trường THPT Trần Phú - Hoàn Kiếm</h2>
        <StaticImage src={"../images/TP-HK.JPG"} alt={""} />
        <p>Thực hiện công tác thực tập sư phạm.</p>
      </div>
    </section>

    <section id={"skills"}>
      <div>
        <h2>Tiếng Anh</h2>
        <div>
          <span>IELTS 6.0</span>
        </div>
      </div>

      <div>
        <h2>Tin học văn phòng</h2>
        <div></div>
      </div>

      <div>
        <h2>Edit video</h2>
        <div></div>
      </div>

      <div>
        <h2>Design ảnh</h2>
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
          <p>371 phố Vĩnh Hưng, Hoàng Mai - Hà Nội</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPageVI;
