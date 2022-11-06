import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Carousel from "../../components/carousel/Carousel";
import WhyUs from "../../components/whyus/WhyUs";
import Banner from "../../components/banner/Banner";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar fix={true} />
      <Hero showbtn={true} />
      <Services />
      <WhyUs />
      <Carousel />
      <Banner />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
