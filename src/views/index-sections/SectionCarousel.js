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
import React from "react";
import "../../assets/css/section.css";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/padi.jpg"),
    altText: "Padi",
    caption: "Padi",
  },
  {
    src: require("assets/img/corn.jpg"),
    altText: "Jagung",
    caption: "Jagung",
  },
  {
    src: require("assets/img/singkong.jpg"),
    altText: "Singkong",
    caption: "Singkong",
  },
  {
    src: require("assets/img/talas.png"),
    altText: "Talas",
    caption: "Talas",
  },
  {
    src: require("assets/img/ubi.png"),
    altText: "Ubi",
    caption: "Ubi",
  },
  {
    src: require("assets/img/aren.png"),
    altText: "Aren",
    caption: "Aren",
  },
  {
    src: require("assets/img/sagu.png"),
    altText: "Sagu",
    caption: "Sagu",
  },
  {
    src: require("assets/img/sorgum.png"),
    altText: "Sorgum",
    caption: "Sorgum",
  },
  {
    src: require("assets/img/kelapa.png"),
    altText: "Kelapa",
    caption: "Kelapa",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="carousels" id="carousel">
        <Container>
          <div className="komoditi-title">
            <h2>
              KOMODITI <span>YANG DIBUDIDAYAKAN</span>
            </h2>
            <h4>PT Palma Pertiwi Makmur</h4>
            <img src={require("../../assets/img/ceo-div.png")}></img>
          </div>

          <Row>
            <Col className="page-carousel">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img
                        className="image-carousel"
                        src={item.src}
                        alt={item.altText}
                      />
                      <CarouselCaption
                        captionText={item.caption}
                        captionHeader=""
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="left carousel-control carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <span className="fa fa-angle-right" />
                  <span className="sr-only">Next</span>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
