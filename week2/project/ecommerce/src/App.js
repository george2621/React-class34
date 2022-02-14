import './App.css';
import ProductList from './components/ProductList.js';
import Categories from './components/Categories.js';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  //Handle categories
  const handleCategories = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('')
    } else {
      setSelectedCategory(category)
    }
    setIsLoading(true)
  }

  //Get categories from api
  async function getCategories() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data)
    }

    catch (error) {
      setError(error.message)
      setIsPending(false)
    }
  }

  //Get all products from api 
  async function getAllProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
      setIsLoading(false)
      setError(null)

    } catch (error) {
      setError(error.message)
      setIsPending(false)
    }
  }

  //Get products by category
  async function getProductByCategory() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
      const data = await response.json();
      setProducts(data)
      setIsLoading(false)
      setError(null)
      setIsPending(true)

    } catch (error) {
      setError(error.message)
      setIsPending(false)
    }
  }

  useEffect(() => {
    getCategories();
    getAllProducts();
  }, [])

  useEffect(() => {
    getProductByCategory()
  }, [selectedCategory])


  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        handleCategories={handleCategories}
        selectedCategory={selectedCategory}
        categories={categories}
      />
      <ProductList
        products={products}
        isLoading={isLoading}
        error={error}
        isPending={isPending}
      />
    </div>
  );
}

export default App;
