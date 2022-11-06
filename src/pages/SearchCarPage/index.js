import React, {useEffect} from "react";
import "./index.css";
import Footer from "../../components/footer/Footer";
import Jumbotron from "../../components/jumbotron";
import Navbar from "../../components/navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {fetchCars} from "../../redux/carsSlice";
import {getFilteredCar} from "../../redux/carsSlice";


const SearchCar = () => {
  const { cars, loading } = useSelector((state) => state.cars);
  const { filteredCarsResult } = useSelector((state) => state.cars)
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCars());}, [])
  return (
    <div>
      <div className="filter" id="filter"/>

      <Navbar />

      <Jumbotron />

      <div className="container px-lg-5 position-relative form-container">
        <div className="card justify-content-between">
          <div className="row gx-2">
            <div className="col-lg ms-3">
              <label for="" className="form-label">Tipe Driver</label>
              <select className="form-select form-item" aria-label="Default select example" placeholder="Pilih Tipe Driver">
                <option value="" disabled selected hidden style={{ color: "grey" }}>Pilih Tipe Driver</option>
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir(Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-lg ms-3">
              <label for="inputDate" className="form-label">Tanggal</label>
              <input type="date" className="form-control form-item" placeholder="Pilih Waktu" required id="inputDate"/>
            </div>
            <div className="col-lg ms-3">
              <label for="inputTime" className="form-label">Waktu Jemput/Ambil</label>
              <input type="time" placeholder="Pilih Waktu" className="form-control form-item" required id="inputTime"/>
            </div>
            <div className="col-lg ms-3">
              <label for="jumlahPenumpang" className="form-label">Jumlah Penumpang (optional)</label>
              <input type="text" placeholder="Jumlah Penumpang " className="form-control form-item" id="jumlahPenumpang"/>
            </div>
            <div className="col-lg-2">
              <div className="btn-submit">
                <button className="btn btn-cari btn btn-search ms-3" id="submitBtn">Cari Mobil</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="display-car">
        <div className="container px-lg-5" id="cars">
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3" id="cars-container">
            {cars.map((car) => (
              <div key={car.id}>
              <div className="carContainer align-items-stretch mt-5 p-3 h-100">
                <div className="search-panel card p-3 h-100" style={{ width: '23rem' }}>
                  <div className="image-card">
                    <img src={car.image} className="w-100" alt="" style={{ maxHeight: "200px", objectFit: "cover" }}/>
                  </div>
                  <div>
                    <h6 className="fw-bold mt-3 mb-0">{car.manufacture}/{car.model}</h6>
                  </div>
                  <div>
                    <h5 className="fw-bold mt-0">Rp. {car.rentPerDay} / hari</h5>
                  </div>
                  <div>
                    <p className="car-desc">{" "}{car.description !== ""? car.description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia exercitationem vel iure! Eligendi, delectus."}</p>
                  </div>
                  <div className="mb-2">
                    <span><i className="bi bi-people me-3"></i>{car.capacity} Orang</span>
                  </div>
                  <div className="mb-2">
                    <span><i className="bi bi-gear me-3"></i>{car.transmission}</span>
                  </div>
                  <div className="mb-3">
                    <span><i className="bi bi-calendar me-3"></i>Tahun {car.year}</span>
                  </div>
                  <button className="btn btn-rent mt-3">Pilih Mobil</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>

  );
};

export default SearchCar;
