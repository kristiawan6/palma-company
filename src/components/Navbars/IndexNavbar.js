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
import React from "react";
import "../../assets/css/section.css";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <div
      className="fixed-top"
      style={{ width: "100%", flexDirection: "row !important" }}
    >
      <div style={{ marginTop: 10, marginLeft: 50 }}>
        <img
          alt="..."
          src={require("assets/img/logo-palma.png")}
          width="160"
          height="10%"
        />
      </div>
      <div style={{ position: "fixed", right: 1, top: 0 }}>
        <Navbar
          expand="lg"
          style={{
            height: "5rem",
            alignItems: "center",
          }}
        >
          <NavbarBrand
            data-placement="bottom"
            href=""
            target="_blank"
            title="Coded by Iotanesia"
          >
            <div className="mr-auto"></div>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav>
              <NavItem className="m-auto">
                <NavLink data-placement="bottom" href="#section-about">
                  <p className="d-lg nav-p">
                    <img
                      src={require("../../assets/img/Home.png")}
                      style={{ width: 22, marginBottom: 5, marginRight: 6 }}
                    ></img>
                    Home
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink data-placement="bottom" href="#section-why-us">
                  <p className="d-lg nav-p">
                    <img
                      src={require("../../assets/img/sdm.png")}
                      style={{ width: 22, marginBottom: 5, marginRight: 6 }}
                    ></img>
                    SDM
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink data-placement="bottom" href="#section-service">
                  <p className="d-lg nav-p">
                    <img
                      src={require("../../assets/img/Komoditi.png")}
                      style={{ width: 22, marginBottom: 5, marginRight: 6 }}
                    ></img>
                    Komoditi
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink data-placement="bottom" href="#section-customer">
                  <p className="d-lg nav-p">
                    <img
                      src={require("../../assets/img/project.png")}
                      style={{ width: 22, marginBottom: 5, marginRight: 6 }}
                    ></img>
                    Project
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink
                  active={false}
                  data-placement="bottom"
                  href="#"
                  target="_blank"
                >
                  <p className="d-lg nav-p">
                    <img
                      src={require("../../assets/img/news.png")}
                      style={{ width: 22, marginBottom: 5, marginRight: 6 }}
                    ></img>
                    News
                  </p>
                </NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <Button
                  style={{ borderRadius: 18 }}
                  href="#section-contact-us"
                  color="warning"
                >
                  Buku Tamu
                </Button>
              </NavItem>
              {/* <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-index-navbar"
                target="_blank"
              >
               IOTANESIA
              </Button>
            </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default IndexNavbar;
