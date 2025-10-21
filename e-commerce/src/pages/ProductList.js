import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list-page">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;