import React from "react";

import star from "../../assets/img/white-star.png";
import basket from "../../assets/img/basket.png";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";
const ProductCard = ({
  id,
  image,
  title,
  price,
  rating,
  ratingCounts,
  stock,
}) => {
  return (
    <article className="product-card">
      <div className="product-image">
        <NavLink to={`product/${id}`}>
          <img
            src={`http://localhost:5000/products/${image}`}
            alt="product image"
          />
        </NavLink>
      </div>
      <div className="product-details">
        <h3 className="product-price">${price}</h3>
        <p className="product_title">{title}</p>
        <footer className="align-center product-info-footer">
          <div className="align-center">
            <p className="align-center product-rating">
              <img src={star} alt="star" /> {rating}
            </p>
            <p className="align-center product-review-count">{ratingCounts}</p>
          </div>
          {stock > 0 && (
            <button className="add-to-cart">
              <img src={basket} alt="basket" />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
