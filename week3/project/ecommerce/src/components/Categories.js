import React from "react";
import useFetch from "../hooks/useFetch";

const Categories = ({ handleCategories, selectedCategory }) => {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products/categories",
  );

  if (loading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return data.map((category, index) => (
    <button
      key={index}
      className={`category ${
        selectedCategory === category ? "selected-category" : ""
      }`}
      onClick={() => handleCategories(category)}
    >
      {category}
    </button>
  ));
};

export default Categories;
