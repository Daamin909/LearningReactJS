import React from "react";

import iphone from "../../assets/img/iphone-14-pro.webp";
import star from "../../assets/img/white-star.png";
import basket from "../../assets/img/basket.png";
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <article className="product-card">
      <div className="product-image">
        <a href="product/1s">
          <img src={iphone} alt="product image" />
        </a>
      </div>
      <div className="product-details">
        <h3 className="product-price">$999</h3>
        <p className="product_title">iPhone 14 Pro</p>
        <footer className="align-center product-info-footer">
          <div className="align-center">
            <p className="align-center product-rating">
              <img src={star} alt="star" /> 5.0
            </p>
            <p className="align-center product-review-count">120</p>
          </div>
          <button className="add-to-cart">
            <img src={basket} alt="basket" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
