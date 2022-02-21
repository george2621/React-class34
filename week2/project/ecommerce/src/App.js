import "./App.css";
import ProductList from "./components/ProductList.js";
import Categories from "./components/Categories.js";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  //Handle categories
  const handleCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        handleCategories={handleCategories}
        selectedCategory={selectedCategory}
      />
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
