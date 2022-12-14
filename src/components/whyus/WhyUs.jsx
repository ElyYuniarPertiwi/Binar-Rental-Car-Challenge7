import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div id="whyus" className="container mt-5 pt-5">
      <div className="why-header pt-4">
        <h2 className="fw-bold my-4">Why Us?</h2>
        <p className="my-4">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="row g-3">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_complete.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Mobil Lengkap</h5>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_price.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Harga Murah</h5>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_24hrs.png" className="mb-3" alt="" />
              <h5 className="mb-3 fw-bold">Layanan 24 Jam</h5>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_professional.png" className="mb-3" alt=""/>
              <h5 className="mb-3 fw-bold">Sopir Profesional</h5>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
