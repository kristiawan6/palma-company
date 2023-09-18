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
/*eslint-disable*/
import React from "react";
import "../../assets/css/section.css";
import { Row, Container, NavLink } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="container-about">
        <div className="row">
          <div className="col-sm-4 col-md-8 justify mt-4">
            <img
              src={require("../../assets/img/logo-ppm.png")}
              alt="Logo PPM"
              style={{ width: "100px" }}
            />

            <div>
              <p className="text-light m-0 justify mt-3">PT Palma Pertiwi Makmur</p>
              <div className="text-light m-0" style={{textAlign: 'justify', maxWidth: '600px'}}>
                adalah sebuah perusahaan yang bergerak di bidang ketahanan 
                pangan yang memiliki visi menjadi lumbung pangan dunia. 
              
                PT Palma Pertiwi Makmur memiliki divisi Pertanian, Kehutanan (Perhutanan Sosial) dan Jasa Lingkungan.
              </div>
            </div>
            <div className="d-flex align-items-center mt-1">
              <i className="fa fa-map-marker mr-1" aria-hidden="true"></i>
              <p className="m-0 text-white mr-3 justify">Alamat:</p>
              <div className="mt-4">
                Jl. H. R. Rasuna Said Jalan Kavling VI No.9,<br />
                RT.9/RW.4, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta<br />
                Selatan, Daerah Khusus Ibukota Jakarta 12950.
              </div>
            </div>
            <div className="d-flex align-items-center mt-2">
              <i className="fa fa-globe tex-light mr-1" aria-hidden="true"></i>
              <p className="tex-white m-0 mr-2 text-light">
                Website:{" "}
                <a href="http://www.palmapertiwimakmur.id" className="text-light">
                  www.palmapertiwimakmur.id
                </a>
              </p>
            </div>
            <div className="d-flex align-items-center mt-2 mb-4">
              <i className="fa fa-envelope mr-1" aria-hidden="true"></i>
              <p className="text-white m-0 mr-6">
                Email:{" "}
                <a href="mailto:info@palmapertiwimakmur.id" className="text-light ml-3">
                  info@palmapertiwimakmur.id
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <h5 className="sub-judul">About Us</h5>
            <ul >
              <li className="mb-2">Home</li>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2 project-foot">
            <h5 className="sub-judul">Project</h5>
            <ul>
              <li className="mb-2">Riau</li>
              <li className="mb-2">Lampung</li>
              <li className="mb-2">Jawa Barat</li>
              <li className="mb-2">Jawa Tengah</li>
              <li className="mb-2">Jawa Timur</li>
              <li className="mb-2">Kalimantan Tengah</li>
              <li >Sulawesi Tengah</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DemoFooter;
