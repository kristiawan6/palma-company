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
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import KeyIcon from "@mui/icons-material/Key";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="pt-5 mt-5 mb-5 pb-5">
        <div className="container">
          <div className="card card-box wu-border d-flex flex-row">
            <div className="card-body">
              <div>
                <p className="h3 ml-3 job-title d-flex align-items-center  justify-content-left">
                  <img
                    className="mr-3"
                    src={require("../../assets/img/dot.png")}
                    style={{ width: "16px;" }}
                  ></img>
                  Job Vacancies
                </p>

                <div className="pt-4 ml-3">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Keyword"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </div>
                <div className="pt-4 ml-3">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Location"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </div>
              </div>
              <div className="">
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionDark;
