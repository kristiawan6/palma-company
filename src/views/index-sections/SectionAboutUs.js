import React, { useEffect } from "react";
import "../../assets/css/section.css";
// reactstrap components
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Container } from "reactstrap";

function SectionCeo() {
  return (
  <div className="container-ceo">
    <div className="ceo-title">
        <h1>SAMBUTAN <span>PRESIDEN DIREKTUR</span></h1>
        <h4>PT Palma Pertiwi Makmur</h4>
        <img src={require('../../assets/img/ceo-div.png')}></img>
    </div>
  <div className="ceo-image">
    <img src={require('../../assets/img/ceo.png')}></img>
  </div>
  </div>

  );
}

export default SectionCeo;
