import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { ShopProvider } from "./context/ShopContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ShopProvider>
      <div className="app">
        <Navbar setIsCartOpen={setIsCartOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
        <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      </div>
    </ShopProvider>
  );
}

export default App;
