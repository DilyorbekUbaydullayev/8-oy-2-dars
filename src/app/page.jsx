
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React from "react";

const HomePage = () => {


  return (
    <div >
      <Navbar/>
      <Hero />
      <Products className="container" />
     
    </div>
  );
};

export default HomePage;
