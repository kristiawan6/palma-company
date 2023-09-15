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

import "../../assets/css/section.css";
// reactstrap components
import { Card, Container, CardBody } from "reactstrap";

// core components

function SectionProgress() {
  return (
    <div className="bg-vm pt-5">
      <div id="section-why-us" className="container  pt-3">
        <div className="row g-4 mt-5 justify-content-around align-items-center">
          <div className="card vm-border" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="400" style={{ width: "35rem" }}>
            <p className="h2 judul d-flex align-items-center justify-content-center">
              <img
                className="mr-3"
                src={require("../../assets/img/dot.png")}
              ></img>
              Vision
            </p>
            <div className="card-body card-service ">
              <h5 className="card-text">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </h5>
            </div>
          </div>
          <div className="card vm-border" data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="400" style={{ width: "35rem" }}>
            <p className="h2 judul d-flex align-items-center justify-content-center">
              <img
                className="mr-3"
                src={require("../../assets/img/dot.png")}
              ></img>
              Mission
            </p>
            <div className="card-body card-service ">
              <h5 className="card-text">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProgress;
