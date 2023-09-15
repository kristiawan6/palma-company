/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import "../../assets/css/section.css";
// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "reactstrap";

function SectionButtons() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="section section-buttons"
      id="section-about"
      style={{ background: "#ffffff", paddingTop: "3rem" }}
    >
      <Container>
        <div className="title">
          <p className="h1 judul d-flex align-items-center justify-content-center pt-5">
            <img
              className="mr-3"
              src={require("../../assets/img/dot.png")}
            ></img>{" "}
            About Us
          </p>
        </div>

        {/* About US */}
        <div className="aboutus">
          <p className="h3 aboutus-p ">
            IOTANESIA adalah Tim yang memberikan solusi kepada banyak kalangan
            old milenial maupun kalangan young milenial dalam kebutuhan macro
            dan micro dari sisi bisnis, sehari-hari, bahkan mampu memberikan hal
            yang tidak terduga.
          </p>
          <p className="h3 aboutus-p">
            {" "}
            Kata IOTANESIA terdiri dari "IOT" adalah Internet of Thinks, "IOTA"
            adalah sepulah yang artinya adalah jumlah para founder/owner, "NE"
            adalah indoNEsia. "SIA" adalah ber-aSIA.
          </p>
          <p className="h3 aboutus-p ">
            {" "}
            Filosofi kita adalah Internet of Think yang di bawa oleh sepuluh
            orang berasal dari indonesia yang akan menuju ajang persaingan
            sampai asia.
          </p>
          <p className="h3 aboutus-p ">
            {" "}
            Beberapa proyek yang sudah kita lalui membuahkan hasil yang sangat
            kita syukuri karena dari hasil tersebut memiliki makna sebuah bukti
            kepada client kami untuk dapat percaya dan terus berkembang bersama
            kami
          </p>
          <p className="h3 aboutus-p pb-5 mb-5">
            {" "}
            Kesempatan dan Harapan adalah jalan kesuksesan!
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SectionButtons;
