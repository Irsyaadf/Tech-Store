import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import HotDeals from '../components/HotDeals';
import ProductsGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { fetchProducts } from '../services/https'; // Import the service

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('smartphones');
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />
        <HotDeals products={products.slice(0, 3)} loading={loading} error={error} />
        <ProductsGrid products={products} loading={loading} error={error} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;