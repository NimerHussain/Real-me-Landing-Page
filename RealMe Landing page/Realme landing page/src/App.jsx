import React from "react";
import Header from "./Components/Header/Header";
import Banner from "./Components/Header/Banner/Banner";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const App = () => (
  <div className="app">
    <Header />
    <Banner />
    <MainContent />
    <Footer />
    <Navbar />
  </div>
);

export default App;
