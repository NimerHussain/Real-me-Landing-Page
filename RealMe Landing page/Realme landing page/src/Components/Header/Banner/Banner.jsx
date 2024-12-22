import React from "react";
import "./Banner.module.css";

const Banner = () => (
  <section className="banner">
    <div className="banner-content">
      <h1>realme C75</h1>
      <p>Dhulai Horai Hai</p>
      <p>IP69 Dust & Water Resistance | 6000mAh Massive Battery</p>
    </div>
    <img
      src="https://i.ytimg.com/vi/AtC55plLkf8/sddefault.jpg"
      alt="realme C75"
      className="banner-image"
    />
  </section>
);

export default Banner;
