import React from "react";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

const Navbar = ({ setIsCartOpen, setPage }) => {
  return (
    <header className="header">
      <div className="container navbar">
        <div
          className="logo"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="logo-main">mommie</span>
          <span className="logo-sub">BABY CARE</span>
        </div>

        <nav className="nav-links">
          <button
            onClick={() => setPage("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Home
          </button>
          <button
            onClick={() => setPage("shop")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Shop
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Categories
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Mother Care
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Baby Care
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Bundles
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            About
          </button>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn">
            <Search size={20} />
          </button>
          <button className="icon-btn">
            <User size={20} />
          </button>
          <button className="icon-btn">
            <Heart size={20} />
            <span className="cart-count">0</span>
          </button>
          <button className="icon-btn" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
