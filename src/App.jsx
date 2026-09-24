import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { ShopProvider } from "./context/ShopContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <ShopProvider>
      <div className="app">
        <Navbar setIsCartOpen={setIsCartOpen} setPage={setPage} />
        {page === "shop" ? <Shop /> : <Home setPage={setPage} />}
        <Footer />
        {/* Yahan setPage add kiya hai */}
        <CartDrawer
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          setPage={setPage}
        />
      </div>
    </ShopProvider>
  );
}

export default App;
