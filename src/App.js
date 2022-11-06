import React from "react";
import "./App.css";
import '@popperjs/core';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/LandingPage";
import SearchCar from "./pages/SearchCarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<SearchCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
