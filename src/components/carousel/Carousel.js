import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardTestimonial from "./CardTestimonial";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-5 pt-5 d-flex flex-column justify-content-center" id="testimonial">
          <h2 className="text-center mb-3 fw-bold pt-4">Testimonial</h2>
          <p className="text-center mb-5">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={32}
          nav={true}
          center={true}
          dots={false}
          navText={[
            "<img src='assets/left-button.png' alt='left'>",
            "<img src='assets/right-button.png' alt='right'>",
          ]}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 2,
            },
          }}
        >
          <CardTestimonial />
          <CardTestimonial />
          <CardTestimonial />
        </OwlCarousel>
      </>
    );
  }
}

export default Carousel;
