import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mt-5">
      <div id="banner" className="p-5 d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-4 mb-4 text-white fw-bold text-center">Sewa Mobil di Kudus Sekarang</h1>
        <p className="text-white text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn btn-rent mt-3 text-decoration-none">Mulai Sewa Mobil</button>
      </div>
    </div>
  );
};

export default Banner;
