import React from "react";

import HeroSection from "./HeroSection";
import iphone from "../../assets/img/iphone-14-pro.webp";
import mac from "../../assets/img/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the Ultimate Setup"
        subtitle="You can add Studio Display and Color Matched Magic accessories after you configure your Mac Mini."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
