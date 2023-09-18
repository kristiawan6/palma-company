/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blob/main/LICENSE.md)

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

function SectionNewProject() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="section-pulau"
        className="container-xxl ">
        <div className="container">
        <div className="judul-pulau"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <h2 style={{ fontWeight: "bold", color: "black"}}>
                PROYEK TERBARU KAMI
              </h2>
            </div>
          <div className="row mt-2 justify-content-left align-items-center" >
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body riaumr">
                  <img className="img-fluid" src={require("../../assets/img/riau.png") } />
                </div>
              </div>
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body lampungml">
                  <img className="img-fluid" src={require("../../assets/img/lampung.png") } />
                </div>
              </div>
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body jabarml">
                  <img className="img-fluid" src={require("../../assets/img/jawa-barat.png") } />
                </div>
              </div>
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body jateng">
                  <img className="img-fluid" src={require("../../assets/img/jawa-tengah.png") } />
                </div>
              </div>
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body jatimml">
                  <img className="img-fluid" src={require("../../assets/img/jawa-timur.png") } />
                </div>
              </div>
              <div className="service-item-pulau" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <div className="card-body kaltengml">
                  <img className="img-fluid"src={require("../../assets/img/kalimantan-tengah.png") } />
                </div>
              </div>
              <div className="garis-pulau">
              <img src={require("../../assets/img/ceo-div.png")} alt="Survey" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionNewProject;
