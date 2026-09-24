import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  Headphones,
  CreditCard,
  Baby,
  Droplets,
  Shirt,
  Gift,
} from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const categories = [
    { icon: <Baby />, name: "Baby Care" },
    { icon: <Droplets />, name: "Baby Hygiene" },
    { icon: <Shirt />, name: "Baby Clothing" },
    { icon: <Gift />, name: "Gift Sets" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>Everything Your Baby Needs, All in One Place</h1>
            <p>
              Premium mother and baby care products designed for a healthier
              tomorrow. Trusted by thousands of families across Pakistan.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/categories" className="btn btn-outline">
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1515488073748-ede8d69f0e4f?auto=format&fit=crop&w=800&q=80"
              alt="Mother holding baby"
            />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>
              Find exactly what you need for every stage of motherhood and baby
              care
            </p>
          </div>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <div className="category-card" key={i}>
                <div className="category-icon">{cat.icon}</div>
                <h3 style={{ fontSize: "1.1rem" }}>{cat.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>
                  Shop Now
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Our most loved products by moms and babies</p>
          </div>
          <div className="product-grid">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/shop" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose mommie?</h2>
          </div>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">
                <ShieldCheck />
              </div>
              <h3 style={{ fontSize: "1.1rem" }}>Quality Products</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                100% genuine and safe products
              </p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <Truck />
              </div>
              <h3 style={{ fontSize: "1.1rem" }}>Fast Delivery</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                Free delivery on orders over Rs. 2,999
              </p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <CreditCard />
              </div>
              <h3 style={{ fontSize: "1.1rem" }}>Secure Shopping</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                100% secure payment protection
              </p>
            </div>
            <div className="category-card">
              <div className="category-icon">
                <Headphones />
              </div>
              <h3 style={{ fontSize: "1.1rem" }}>Customer Support</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                Dedicated support for all queries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
