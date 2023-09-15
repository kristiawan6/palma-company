import React, { useEffect, useState } from "react";
import "../../assets/css/section.css";
import Modal from "../../components/Modal"

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";

// core components

function SectionYoutube() {

  return (
    <>
      <div
        id="section-service"
        style={{
            backgroundImage: "url(" + require("assets/img/peta.png") + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        className=""
      >
        <div className="container py-5">
          <div className="row">
          <div>
            <div>
            <iframe
              src="https://www.youtube.com/embed/dmevz371MXU"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              style={{ width: 1120, height: 750, borderRadius:20 }}
              className="youtube"
              />
              </div>
      </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionYoutube;
