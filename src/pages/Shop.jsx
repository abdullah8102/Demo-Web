import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Baby Care",
    "Mother Care",
    "Baby Hygiene",
    "Baby Clothing",
    "Baby Gear",
    "Bundles",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h2>Shop All Products</h2>
          <p>Find the best care products for you and your baby</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.5rem 1.2rem",
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                background: activeCategory === cat ? "#F687B3" : "white",
                color: activeCategory === cat ? "white" : "#2D3748",
                fontWeight: "500",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
