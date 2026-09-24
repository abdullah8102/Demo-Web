import React from "react";
import { useShop } from "../context/ShopContext";

const Toast = () => {
  const { toast } = useShop();
  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#2D3748",
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease",
      }}
    >
      {toast}
    </div>
  );
};

export default Toast;
