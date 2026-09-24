import React from "react";
import { Heart, Star, Plus } from "lucide-react";
import { useShop } from "../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && <span className="badge">{product.badge}</span>}
        <button
          className={`wishlist-btn ${isWishlisted(product.id) ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
        >
          <Heart
            size={18}
            fill={isWishlisted(product.id) ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="rating">
          <Star size={14} fill="currentColor" />
          <span>{product.rating}</span>
        </div>
        <div className="price">
          <span className="current-price">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="old-price">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          <Plus size={16} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
