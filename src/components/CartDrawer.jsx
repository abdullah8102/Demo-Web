import React from "react";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useShop } from "../context/ShopContext";

const CartDrawer = ({ isOpen, setIsOpen, setPage }) => {
  const { cart, removeFromCart, updateQuantity, subtotal, deliveryFee, total } =
    useShop();

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`cart-drawer ${isOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ShoppingBag size={20} /> Shopping Cart
          </h3>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "2rem", marginTop: "3rem" }}
          >
            <ShoppingBag
              size={48}
              style={{ margin: "0 auto 1rem", color: "#CBD5E0" }}
            />
            <p>Your cart is empty</p>
            <button
              onClick={() => {
                setPage("shop");
                setIsOpen(false);
              }}
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontSize: "0.9rem" }}>{item.name}</h5>
                    <p
                      style={{ color: "var(--primary-dark)", fontWeight: 600 }}
                    >
                      Rs. {item.price.toLocaleString()}
                    </p>
                    <div className="qty-selector">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ marginLeft: "auto", color: "red" }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <span>Delivery</span>
                <span>{deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "1.5rem",
                  borderTop: "1px solid #ddd",
                  paddingTop: "1rem",
                }}
              >
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <button className="btn btn-primary" style={{ width: "100%" }}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
