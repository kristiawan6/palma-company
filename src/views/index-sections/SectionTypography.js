import React from "react";
import "../../assets/css/section.css";
import Modal from "../../components/Modal";

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";

// core components

function SectionProject() {
  return (
    <>
      <div
        id="section-service"
        style={{ backgroundColor: "#fff" }}
        className=""
      >
        <div className="container py-5">
          <div className="ceo-title">
            <h1>
              OUR <span>PROGRAM SYSTEM</span>
            </h1>
            <h4>PT Palma Pertiwi Makmur</h4>
            <img src={require("../../assets/img/ceo-div.png")} alt="CEO" />
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card system-item">
                <div className="card-body card-system">
                  <img
                    src={require("../../assets/img/project1.png")}
                    alt="Project 1"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card system-item">
                <div className="card-body card-system">
                  <img
                    src={require("../../assets/img/project2.png")}
                    alt="Project 2"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card system-item">
                <div className="card-body card-system">
                  <img
                    src={require("../../assets/img/project3.png")}
                    alt="Project 3"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card system-item">
                <div className="card-body card-system">
                  <img
                    src={require("../../assets/img/project4.png")}
                    alt="Project 4"
                  />
                </div>
              </div>
            </div>
            <div className="garis-our-program">
              <img src={require("../../assets/img/ceo-div.png")} alt="Survey" />
              <h2 style={{ fontWeight: "bold", color: "black" }}>
                FOTO SURVEY LOKASI
              </h2>
            </div>
            <div className="riau">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Riau"
                src={require("../../assets/img/dot.png")}
                alt="Riau Dot"
              />
            </div>
            <div className="lampung">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Lampung"
                src={require("../../assets/img/dot.png")}
                alt="Lampung Dot"
              />
            </div>
            <div className="jawa-barat">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Jawa Barat"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <div className="jawa-tengah">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Jawa Tengah"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <div className="jawa-timur">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Jawa Timur"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <div className="kalimantan-tengah"> 
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Kalimantan Tengah"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <div className="sulawesi-tengah">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Sulawesi Tengah"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <div className="papua-barat">
              <img
                data-toggle="tooltip"
                data-placement="top"
                title="Papua Barat"
                src={require("../../assets/img/dot.png")}
              />
            </div>
            <img
              style={{ marginTop: 80 }}
              src={require("../../assets/img/peta2.png")}
              alt="Map"
            />
            <img
              style={{ marginTop: 20 }}
              src={require("../../assets/img/flexpalma.png")}
            />
            <div className="garis-proyek">
              <img src={require("../../assets/img/ceo-div.png")} alt="Survey" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionProject;
