import React from "react";
import "./Services.css";
import IconCek from '../../assets/img/icon_cek.png';

const Services = () => {
  return (
    <div id="service" className="container mt-5 pt-5">
      <div className="row justify-content-around pt-4">
        <div className="col-lg-6 ps-5">
          <img className="img-fluid" src="./assets/service.png" alt="" />
        </div>
        <div className="col-lg-6 services-right mt-5">
          <h2 className="fw-bold my-4">
            Best Car Rental for any kind of trip in Kudus!
          </h2>
          <p>Sewa mobil di Kudus bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
          <div className="services mb-3">
            <img src={IconCek} className="me-4" alt="" />
            Sewa Mobil Dengan Supir di Kudus 12 Jam
          </div>
          <div className="services mb-3">
            <img src={IconCek} className="me-4" alt="" />
            Sewa Mobil Lepas Kunci di Kudus 24 Jam
          </div>
          <div className="services mb-3">
            <img src={IconCek} className="me-4" alt="" />
            Sewa Mobil Jangka Panjang Bulanan
          </div>
          <div className="services mb-3">
            <img src={IconCek} className="me-4" alt="" />
            Gratis Antar - Jemput Mobil di Bandara
          </div>
          <div className="services mb-3">
            <img src={IconCek} className="me-4" alt="" />
            Layanan Airport Transfer / Drop In Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
