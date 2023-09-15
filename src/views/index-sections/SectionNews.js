import React, { useEffect, useState } from "react";
import "../../assets/css/section.css";
import Modal from "../../components/Modal"

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";

// core components

function SectionNavigation() {

    return (
        <>
            <div
                id="section-news"
                style={{ backgroundColor: "#F0F3FF" }}
                className="section-news"
            >

                <div className="container py-5">

                    <div className="ceo-title">
                        <h1>
                            <span>NEWS</span>
                        </h1>
                        <h4>PT Palma Pertiwi Makmur</h4>
                        <img src={require("../../assets/img/ceo-div.png")}></img>
                    </div>

                    <img className="poster-news" src={require("../../assets/img/poster-news.png")}></img>

                </div>
            </div>
        </>
    );
}

export default SectionNavigation;
