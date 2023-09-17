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

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionAboutUs from "views/index-sections/SectionAboutUs";
import SectionVisiMisi from "views/index-sections/SectionVisiMisi";
import SectionNotification from "views/index-sections/SectionNotifications";
import SectionService from "views/index-sections/SectionService.js";
import SectionWhyus from "views/index-sections/SectionWhyus.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionJobs from "views/index-sections/SectionJobs";
import SectionCustomer from "views/index-sections/SectionCustomer.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionNews from "views/index-sections/SectionNews"
import SectionContactUs from "views/index-sections/SectionContactUs";
import SectionContactOurTeam from "views/index-sections/SectionContactOurTeam";
// import SectionCarousel from "./index-sections/SectionCarousel";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionAboutUs />
        <SectionService />
        <SectionCarousel />
        <SectionNotification />
        <SectionTypography />
        <SectionExamples />
        {/* <SectionVisiMisi /> */}
        {/* <SectionWhyus /> */}
        {/* <SectionJobs /> */}
        <SectionNews/>
        <SectionContactOurTeam/>
        <SectionContactUs />
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
