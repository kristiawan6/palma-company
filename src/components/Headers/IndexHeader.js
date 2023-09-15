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
/*eslint-disable*/
import React from "react";
import "../../assets/css/section.css";
// reactstrap components

// core components
import { Jumbotron, Container, Button } from "reactstrap";
function IndexHeader() {
  return (
    <>
      <Jumbotron
        fluid
        style={{
          backgroundImage: "url(" + require("assets/img/hero.jpg") + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#FFEACC",
        }}
        className="text-black page-header"
      >
        <Container>
          <div className=" align-items-center">
            <div className="col-md-12">
              <h1 className="heroes-title display-3">
                Menjadi Motor Indonesia
              </h1>
              <h3 className="heroes-text display-3">
                Untuk Menuju Lambung Pangan Dunia
              </h3>
              <h3 className="heroes-text-p display-3">
              PT PALMA PERTIWI MAKMUR adalah sebuah perusahaan yang bergerak di bidang ketahanan pangan yang memiliki visi mejadi lumbung pangan dunia. PT Palma Pertiwi Mandiri memiliki divisi Pertanian, Perkebunan, Industri, Perdagangan dan Energi,
              </h3>
            </div>
          </div>
        </Container>
        <div className="vector">
          <img src={require("../../assets/img/Vector.png")}></img>
          <div className="vector-logo d-flex justify-content-center">
          <img src={require("../../assets/img/perkebunan.png")}></img>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default IndexHeader;
