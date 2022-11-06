import React from "react";

const Navbar = (props) => {
  let navStyle = "";
  if (props.fix === true) {
    navStyle = "hero fixed-top bg-light";
  } else {
    navStyle = "hero";
  }
  return (
    <div className={navStyle}>
      <div className="top-nav">
        <div className="container py-1">
          <nav className="row navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="logo-brand">
                <img src="./assets/logo.png" alt="" />
              </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#service">
                        <span>Our Services</span>
                      </a>
                    </li>
                    <li className="nav-item  ms-2">
                      <a className="nav-link active" aria-current="page" href="#whyus">
                        <span>Why Us</span>
                      </a>
                    </li>
                    <li className="nav-item  ms-2">
                      <a className="nav-link active" aria-current="page" href="#testimonial">
                        <span>Testimonial</span>
                      </a>
                    </li>
                    <li className="nav-item  ms-2">
                      <a className="nav-link active" aria-current="page" href="#FAQ">
                        <span>FAQ</span>
                      </a>
                    </li>
                    <li className="nav-item  ms-2 mt-2 btn-rent-car">
                      <a href="/cars" className="btn-login btn-navbar-right text-decoration-none">
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
