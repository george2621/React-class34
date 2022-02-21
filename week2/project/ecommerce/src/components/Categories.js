import React from "react";
import { useState, useEffect } from "react";

const Categories = ({ handleCategories, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return categories.map((category, index) => (
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
