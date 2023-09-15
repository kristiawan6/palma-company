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
import "../../assets/css/section.css"
// reactstrap components
import { Row, Container,NavLink } from "reactstrap";

function DemoFooter() {
  return (
     <div id="section-contact-us"className="contact-us mt-5 pt-2 text-center text-lg-startm bg-transparent footer footer-black footer-white">
   
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 align-self-center">
          {/* Content */}
          <div className="footer-img">
            <img alt="..." src={require("../../assets/img/iota-logo.png")} width="150" height="100" />
            </div>
            <div className="footer-title">
            PT. IOTA CIPTA INDONESIA
            </div> 
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 footer-title">
            Office
          </h6>
          <div className="d-flex flex-wrap align-self-center justify-content-center">
            <p className="footer-text">
            EightyEight@Kasablanka Office Tower Lt.12 Unit A&H,
            <hr></hr>
            Jl.Casablanca Raya Kav.88 Menteng Dalam,
            Tebet, Jakarta Selatan.
            DKI Jakarta 12870
            </p>
            </div>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 justify-content-left">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4 footer-title">
            contact
          </h6>
          <p><i className="fa fa-paper-plane icon" /> halo-bisnis@iotanesia.com</p>
          <p>
            <i className="fa fa-phone icon" />
            +62 812-7536-1122
          </p>
          <div className="footer-icon justify-content-center">
            <NavLink 
                data-placement="bottom"
                href="https://www.linkedin.com/company/iota-cipta-indonesia-pt/mycompany/"
                target="_blank"
                title="Search on LinkedIn">
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
              <NavLink 
                data-placement="bottom"
                href="https://github.com/iotanesia"
                target="_blank"
                title="Star on GitHub">
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
              {/* <NavLink 
                data-placement="bottom"
                href="#"
                target="_blank"
                title="Follow on Instagram">
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>     */}
            </div>
        </div>
      
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
      </div>
  );
}

export default DemoFooter;
