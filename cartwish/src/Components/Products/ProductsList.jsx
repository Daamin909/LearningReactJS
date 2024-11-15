import React from 'react'

import "./ProductsList.css"
import ProductCard from './ProductCard'
const ProductsList = () => {
  return (
    <section className="products-list-section">
        <header className="align-center products-list-header">
            <h2>Products</h2>
            <select name="sort" id="" className='products-sorting'>
                <option value="">Relevance</option>
                <option value="price desc">Price HIGH TO LOW</option>
                <option value="price asc">Price LOW TO HIGH</option>
                <option value="rate desc">Rate HIGH TO LOW</option>
                <option value="rate asc">Rate LOW TO HIGH</option>
            </select>
        </header>
        <div className="products-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default ProductsList