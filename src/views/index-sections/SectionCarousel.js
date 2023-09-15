import React from "react";
import "../../assets/css/section.css";
function SectionCarousel() {
  return (
<div id="carousel" className="carousel slide hero-slides" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel" data-slide-to={1} />
    <li data-target="#carousel" data-slide-to={2} />
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active boat">
      <div className="container h-100 d-none d-md-block">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="caption animated fadeIn">
              <h2 className="animated fadeInLeft">Boat Excursions</h2>
              <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              <a className="animated fadeInUp btn delicious-btn" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item sea">
      <div className="container h-100 d-none d-md-block">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="caption animated fadeIn">
              <h2 className="animated fadeInLeft">Discover the canyon by the sea</h2>
              <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              <a className="animated fadeInUp btn delicious-btn" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item river">
      <div className="container h-100 d-none d-md-block">
        <div className="row align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="caption animated fadeIn">
              <h2 className="animated fadeInLeft">Explore the river valley</h2>
              <p className="animated fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              <a className="animated fadeInUp btn delicious-btn" href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

  );
}

export default SectionCarousel;
