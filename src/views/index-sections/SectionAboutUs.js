import React, { useEffect } from "react";
import "../../assets/css/section.css";
// reactstrap components
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Container } from "reactstrap";

function SectionCeo() {
  return (
    <div className="container-ceo">
      <div className="ceo-title">
        <h1>SAMBUTAN <span>PRESIDEN DIREKTUR</span></h1>
        <h4>PT Palma Pertiwi Makmur</h4>
        <img src={require('../../assets/img/ceo-div.png')}></img>
      </div>
      {/* <div className="ceo-sambutan">
    <img src={require('../../assets/img/ceo.png')}></img>
  </div> */}
      <div class="d-flex cont-item-sambutan">
        <img className="bg-sambutan" src={require("../../assets/img/mardianto-page.png")}></img>
        <div class="item-sambutan-text">
          <h3 className="item-sambutan-text-mar">MARDIANTO</h3>
          <div className="item-sambutan-text-jab">Presiden Direktur</div>
          <h5 className="item-sambutan-text-com">PT Palma Pertiwi Makmur</h5>
          <div className="par-satu">
            PT Palma Pertiwi Makmur Bekerjasama dengan kementerian dan pemerintah daerah melalui skema kerjasama pemerintah dan badan usaha berupaya mengatasi ketahanan pangan dengan menciptakan lumbung pangan dunia.
          </div>
          <div className="par-satu">
            Strategi yang dilakukan PT Palma Pertiwi Makmur membentuk unit usaha 1 (satu) anak perusahaan di setiap provinsi yang bergerak di sektor  di sektor pertanian, kehutanan dan jasa lingkungan.
            Dan menciptakan 7 (tujuh) anak perusahaan penunjang program corporate.
          </div>
          <p className="text-white">
          Program Kerja Tahun 2023
          </p>
          <div className="par-satu">
            1.
            Program kerja: peningkatan  percepatan ketahanan pangan di seluruh wilayah indonesia.
            Pembangunan Kawasan Sentra Produksi Pangan Terintegrasi.
            Konsesi 2 juta hektar program inti plasma (60% inti, 40% plasma). Kawasan pelaksanaan tahun ke-1 dengan anggaran pembiayaan per propinsi 200 M Cash dan 300 M Non-cash.
          </div>
          <div className="par-satu">
          2. Pembangunan Kawasan Sentra Produksi Pangan Terintegrasi.
          
          </div>
          <div className="par-satu">
          3. Konsesi 2 juta hektar program inti plasma (60% inti, 40% plasma). Kawasan pelaksanaan tahun ke-1 dengan anggaran pembiayaan per propinsi 200 M Cash dan 300 M Non-cash.
          </div>
        </div>
        {/* <div class="item-sambutan-img">
          flex item 2
        </div> */}

      </div>

    </div>

  );
}

export default SectionCeo;
