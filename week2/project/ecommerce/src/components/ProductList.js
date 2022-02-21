import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let url = "https://fakestoreapi.com/products";

  if (selectedCategory) {
    url += `/category/${selectedCategory}`;
  }

  async function getProducts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, [url]);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="all-products">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          productName={product.title}
          productImage={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
