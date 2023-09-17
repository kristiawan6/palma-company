import React, { useEffect, useState } from "react";
import "../../assets/css/section.css";
import Modal from "../../components/Modal"
import { Col, Row } from "reactstrap";

// reactstrap components
import AOS from "aos";
import "aos/dist/aos.css";

// core components

function SectionNavigation() {

    const [isMediumView, setIsMediumView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumView(window.innerWidth >= 768 && window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <div
                id="section-news"
                style={{ backgroundColor: "#F0F3FF" }}
                className="section-news"
            >

                <div className="container py-5">

                    <Row>
                        <Col md="6" className="ceo-title poster-news"> {/* Untuk tampilan medium */}
                            <h1>
                                <span>NEWS</span>
                            </h1>
                            <h4>PT Palma Pertiwi Makmur</h4>
                            <img src={require("../../assets/img/ceo-div.png")} alt="CEO" />
                        </Col>
                        <Col md="6" className="poster-news"> {/* Untuk tampilan medium */}
                            <img src={require("../../assets/img/poster-news.png")} alt="Poster News" />
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    );
}

export default SectionNavigation;
