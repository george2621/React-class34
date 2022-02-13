import './App.css';
import ProductList from './components/ProductList.js';
import Categories from './components/Categories.js';
import { useState } from 'react';
import { allProducts } from './fake-data/all-products.js';


function App() {
  const [products, setProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState('')


  const handleCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
    } else {
      setSelectedCategory(category)
    }
  }

  const filteredProducts = products.filter(product => {
    if (selectedCategory.length === 0) {
      return product
    }
    return product.category === selectedCategory.slice(6);
  })


  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        handleCategories={handleCategories}
        selectedCategory={selectedCategory}
      />
      <ProductList
        filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
