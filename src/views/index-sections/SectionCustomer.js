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
import '../../assets/css/section.css'
import Slider from "react-slick";
// reactstrap components
import {

  Container,
  Card,
  CardBody,
  CardTitle,
  CardText
 
} from "reactstrap";


function SectionNavbars() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  
  return (
    <div className="bg-customer">
     <div className="box-customer" id="section-customer">
        <Container>
        <p className="h1 judul d-flex align-items-center justify-content-center"><img className="mr-3" src={require("../../assets/img/dot.png")}></img>Our Partner</p>
          <Slider {...settings}>
              <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/dki1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/bni1.png")}
              />
               {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/panin1.png")}
              /> */}
              {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/cimb1.png")}
              /> */}
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/yamaha.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/restrep1.png")}
              />
              <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/jamkrindo1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/banyumu.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/ipc.png")}
              />
              <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/pln1.png")}
              />
               {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/bnpb1.png")}
              /> */}
               {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/bphn1.png")}
              /> */}
              {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/fwd1.png")}
              /> */}
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/kpri1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/industri1.png")}
              />
              <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/big1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/esdm1.png")}
              />
               {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/pnm1.png")}
              /> */}
              <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/pptak1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/pushidrosal1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/ojk1.png")}
              />
              {/* <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/wika1.png")}
              /> */}
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/mabesau1.png")}
              />
               <img
                className="custom-img"
                alt="..."
                src={require("../../assets/img/customer/mabespol1.png")}
              />
          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default SectionNavbars;
