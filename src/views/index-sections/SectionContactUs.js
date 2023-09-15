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
import { Row, Container, NavLink } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="bg-black text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src={require("../../assets/img/logo-ppm.png")}
              alt="Logo PPM"
              style={{ width: "100px" }} // Mengatur ukuran logo
            />
          </div>
          <div className="col-md-5">
            <p className="text-light">
              PT Palma Pertiwi Makmur adalah sebuah perusahaan yang bergerak di
              bidang ketahanan pangan yang memiliki visi menjadi lumbung pangan
              dunia. PT Palma Pertiwi Makmur memiliki divisi Pertanian,
              Perkebunan, Industri, Perdagangan dan Energi.
            </p>
            <div className="d-flex align-items-center">
              <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
              <p className="m-0 text-white">
                Alamat: Jl. H. R. Rasuna Said Jalan Kavling VI No.9,
                RT.9/RW.4, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12950.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa fa-globe mr-2" aria-hidden="true"></i>
              <p className="m-0">
                Website:{" "}
                <a href="http://www.palmapertiwimakmur.id" className="text-light">
                  www.palmapertiwimakmur.id
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
              <p className="m-0">
                Email:{" "}
                <a href="mailto:info@palmapertiwimakmur.id" className="text-light">
                  info@palmapertiwimakmur.id
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <h5>About Us</h5>
            <ul>
              <li>Home</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Project</h5>
            <ul>
              <li>Riau</li>
              <li>Lampung</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DemoFooter;
