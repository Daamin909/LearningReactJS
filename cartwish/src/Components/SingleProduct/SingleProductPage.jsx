import React, { useState } from "react";

import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  images: [
    "https://dummyimage.com/500x500/fce400/000000.jpg&text=image1",
    "https://dummyimage.com/500x500/fce400/000000.jpg&text=image2",
    "https://dummyimage.com/500x500/fce400/000000.jpg&text=image3",
    "https://dummyimage.com/500x500/fce400/000000.jpg&text=image4",
  ],
  stock: 10,
};

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <section className="align-center single-product">
      <div className="align-center">
        <div className="single-product-thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className={selectedImage == index ? "selected-image" : ""}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="single-product-display"
        />
      </div>
      <div className="single-product-details">
        <h1 className="single-product-title">{product.title}</h1>
        <p className="single-product-description">{product.description}</p>
        <p className="single-product-price">${product.price.toFixed(2)}</p>
        <h2 className="quantity-title">Quantity:</h2>
        <QuantityInput />
        <button className="search-button add-cart">Add to Cart</button>
      </div>
    </section>
  );
};

export default SingleProductPage;
