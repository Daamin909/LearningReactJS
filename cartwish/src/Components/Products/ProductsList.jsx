import React from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "./../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Common/Pagination";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const { data, error, isLoading } = useData(
    "/products",
    {
      params: { category, page },
    },
    [category, page]
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePageChange = (pageNum) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: pageNum });
  };
  return (
    <section className="products-list-section">
      <header className="align-center products-list-header">
        <h2>Products</h2>
        <select name="sort" id="" className="products-sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH TO LOW</option>
          <option value="price asc">Price LOW TO HIGH</option>
          <option value="rate desc">Rate HIGH TO LOW</option>
          <option value="rate asc">Rate LOW TO HIGH</option>
        </select>
      </header>
      <div className="products-list">
        {error && <em className="form-error">{error}</em>}
        {isLoading
          ? skeletons.map((no) => <ProductCardSkeleton key={no} />)
          : data?.products &&
            data.products.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.images[0]}
                  title={product.title}
                  price={product.price}
                  rating={product.reviews.rate}
                  ratingCounts={product.reviews.counts}
                  stock={product.stock}
                />
              );
            })}
        {data?.products && (
          <Pagination
            totalPosts={data.totalProducts}
            postsPerPage={8}
            onClick={handlePageChange}
            currentPage={page}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsList;
