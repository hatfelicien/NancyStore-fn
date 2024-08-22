// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedItems from "../components/FeaturedItems";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <FeaturedItems />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
