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
// img
import b2b from "../../assets/img/service/b2b.svg";
import ar from "../../assets/img/service/ar.svg";
import chatbot from "../../assets/img/service/chatbot.svg";
import expedition from "../../assets/img/service/expedition.svg";
import human from "../../assets/img/service/human.svg";
import machine from "../../assets/img/service/machine.svg";
import management from "../../assets/img/service/management.svg";
import monitoring from "../../assets/img/service/monitoring.svg";
import voice from "../../assets/img/service/voice.svg";

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "reactstrap";

// core components

function SectionNavigation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="section-service"
        className="container-xxl ">
        <div className="container py-5">
          <div className="text-center mx-auto">
          <p className="h1 judul d-flex align-items-center justify-content-center mb-5 pt-5 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"><img className="mr-3" src={require("../../assets/img/dot.png")}></img>Services</p>
          </div>
          <div className="row g-4 mt-5 justify-content-around align-items-center" >
            <div className="card service-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3 mr-3" src={b2b} alt />
                <h5 className="mb-3 service-text">B2B and B2C Apps</h5>
              </div>
            </div>
            <div className="card service-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3" src={management} alt />
                <h5 className="mb-3 service-text">Management</h5>
              </div>
            </div>
            <div className="card service-item"   style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3" src={human} alt />
                <h5 className="mb-3 service-text">Human Capital Management</h5>
              </div>
            </div>
            <div className="card service-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3" src={machine} alt />
                <h5 className="mb-3 service-text">Machine Learning</h5>
              </div>
            </div>
            <div className="card service-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3 mr-3" src={monitoring} alt />
                <h5 className="mb-3 service-text">Profile (SEO & CMS)</h5>
              </div>
            </div>
            <div className="card service-item" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" style={{ width: "18rem" }}>
              <div className="card-body card-service ">
              <img className="service-logo mb-3 mt-3" src={chatbot} alt />
                <h5 className="mb-3 service-text">Chatbox Automate Respon</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionNavigation;
