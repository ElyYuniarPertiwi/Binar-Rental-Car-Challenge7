import React from "react";
import JumbotronImage from '../../assets/img/img_car.png';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container pb-0">
        <div className="row mb-5">
          <div className="col-md m-auto align-self-center">
            <h1 className="text-justify mb-3">Sewa & Rental Mobil Terbaik di Kawasan Kudus</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </div>
          <div className="col-md mt-4 pt-2">
            <img src={JumbotronImage} className="img-fluid img-car" alt="CarImage"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
