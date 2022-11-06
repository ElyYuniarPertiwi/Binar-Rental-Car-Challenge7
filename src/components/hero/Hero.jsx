import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import JumbotronImage from '../../assets/img/img_car.png';

const Hero = ({ showbtn }) => {
  return (
    <div className="hero">
      <div className="row ms-2">
        <div className="col-lg-1 col-0 ps-0 ms-0" />
          <div className="col-md-5 col-sm-12 hero-desc px-5 pt-5 align-self-center">
            <h1 className="fs-1 mt-5">Sewa &amp; Rental Mobil Terbaik di kawasan Kudus</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
              untuk sewa mobil selama 24 jam.
            </p>
            {showbtn && (
              <Link to="/cars">
                <button className="text-decoration-none btn btn-rent">Mulai Sewa Mobil</button>
              </Link>
            )}
          </div>
          <div className="col-md-6 col-sm-12 mt-5 px-5 pt-5">
            <img id="car" src={JumbotronImage} className="img-fluid" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
