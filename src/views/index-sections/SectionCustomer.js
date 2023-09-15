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
    src: require("assets/img/caliandraa.jpg"),
    altText: "Calliandra Powder Flower",
    caption: "Calliandra Powder Flower",
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
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/peta.png") + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      
      >
        <Container>
          <Row>
            <div>

            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
              style={{ width: 2000, height: 500 }}
              className="youtube"
              />
              </div>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
