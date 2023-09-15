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
import React from "react";

import '../../assets/css/section.css'
// reactstrap components
import {
  Card,
  Container,
 CardBody
} from "reactstrap";

// core components

function SectionProgress() {

  return (
    <div className="bg-whyus pt-5 mt-5 mb-5 pb-5" id="section-why-us">
      <div className="whyus" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="400">
        <div className="container">
          <div className="card card-box wu-border">
            <CardBody>
            <p className="h2 judul d-flex align-items-center justify-content-center">
              <img
                className="mr-3"
                src={require("../../assets/img/dot.png")}
              ></img>
              Why Us
            </p>
              <div className="whyus-title">
              <p className="h3 whyus-p ">Terdiri dari para IT-engineer muda dari berbagai perusahaan IT terkemuka Indonesia, energik dan bersemangat turut memberikan kontribusi yang nyata bagi kemajuan bangsa Indonesia diantara bangsa-bangsa lain di dunia</p>
              <hr class="solid"></hr>
              <p className="h3 whyus-p ">Siap dalam teknologi dan solusi sistem, sekaligus memberikan peluang kerjasama saling menguntungkan</p>
              <hr class="solid"></hr>
              <p className="h3 whyus-p mb-5 ">Support penuh dalam mendampingi mewujudkan visi dan misi client</p>
            </div>
        </CardBody>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProgress;
