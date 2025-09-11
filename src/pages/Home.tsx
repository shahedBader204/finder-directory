import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import ActionCards from '../components/ActionCards';
import ListingCarousel from '../components/ListingCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1>Easy way to find a perfect property</h1>
        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate.
        </p>
        {/* header*/}
      </section>

      {/* Categories */}
      <Categories />

      {/* Action cards (Buy / Sell / Rent) */}
      <ActionCards />

      {/* Top offers */}
      <ListingCarousel />

      {/* Footer */}
      <Footer />
    </>
  );
}
