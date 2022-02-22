import React, { useState } from "react";
import ProductList from "../components/ProductList.js";
import Categories from "../components/Categories";
import Nav from "../components/Nav.js";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <Nav product={"products"} />
      <Categories
        handleCategories={handleCategories}
        selectedCategory={selectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </>
  );
};

export default HomePage;
