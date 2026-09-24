import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react";

const Navbar = ({ setIsCartOpen }) => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="logo">
          <span className="logo-main">mommie</span>
          <span className="logo-sub">BABY CARE</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/mother-care">Mother Care</Link>
          <Link to="/baby-care">Baby Care</Link>
          <Link to="/bundles">Bundles</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="nav-actions">
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ display: "none" }} // Hidden for simplicity in header
            />
            <button className="icon-btn">
              <Search size={20} />
            </button>
          </div>
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
