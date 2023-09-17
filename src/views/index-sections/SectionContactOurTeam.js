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
                style={{ backgroundColor: "#3A2D80" }}
                className="section-news"
            >

                <div className="container py-5">

                    <div className="ceo-title">
                        <h3 className="h-cont-our">
                            Contact Our Team
                        </h3>
                        <h3 className="h-hub">Hubungi Kami Sekarang!</h3>
                        <div className="h-masi">untuk informasi lebih lanjut tentang Palma Makmur, silahkan hubungi kami</div>
                    </div>

                    <div className="container-form text-light">

                        <div>
                            <div className="container-card-our">
                                <div className="card-our m-0">
                                    <h3 className="h-cont-us m-0 mb-4">Contact Us</h3>
                                    <div className="input-group">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div className="input-group">
                                        <input type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="input-group">
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                    <button className="submit-button mt-4">Send</button>
                                </div>
                            </div>
                        </div>

                        <div className="mr-6">
                            <div className="d-flex align-items-center m-0 p-0">
                                <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                <p className="m-0 text-white p-0 mr-4">Alamat:</p>
                                <div className="mt-4">
                                    Jl. H. R. Rasuna Said Jalan Kavling VI No.9,
                                    RT.9/RW.4, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta
                                    Selatan, Daerah Khusus Ibukota Jakarta 12950.
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-2">
                                <i className="fa fa-globe tex-light mr-1" aria-hidden="true"></i>
                                <p className="tex-white m-0 mr-6 text-light">
                                    Website:{" "}
                                    <a href="http://www.palmapertiwimakmur.id" className="text-light ml-1">
                                        www.palmapertiwimakmur.id
                                    </a>
                                </p>
                            </div>
                            <div className="d-flex align-items-center mt-2 mb-4">
                                <i className="fa fa-envelope mr-1" aria-hidden="true"></i>
                                <p className="text-white m-0 mr-6">
                                    Email:{" "}
                                    <a href="mailto:info@palmapertiwimakmur.id" className="text-light ml-4">
                                        info@palmapertiwimakmur.id
                                    </a>
                                </p>
                            </div>
                            <img
                                src={require("../../assets/img/maps.png")}
                                alt="Logo PPM"
                                style={{ width: "430px" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SectionNavigation;
