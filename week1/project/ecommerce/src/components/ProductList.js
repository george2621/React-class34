import React, { useState } from 'react'
import ProductItem from './ProductItem.js';
import Category from './Category.js';
import { allProducts } from '../fake-data/all-products.js';
import { allCategories } from '../fake-data/all-categories.js';

const ProductList = () => {

    const [selectedCategory, setSelectedCategory] = useState('')

    let products = allProducts;

    const handleCategories = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory('')
        } else {
            setSelectedCategory(category)
        }
    }
    if (selectedCategory.length > 0) {
        products = products.filter((product => product.category === selectedCategory.slice(6)));
    }

    return (
        <>
            <div className='all-categories'>
                {allCategories.map((category, index) => {
                    return <Category
                        className={`category ${selectedCategory === category ? "selected-category" : ""}`}
                        selectedCategory={selectedCategory}
                        handleCategories={handleCategories}
                        key={index}
                        category={category} />
                })}
            </div>
            <div className='all-products'>
                {products.map((product) => {
                    return <ProductItem
                        key={product.id}
                        productName={product.title}
                        productImage={product.image} />
                })}
            </div>
        </>
    )
}

export default ProductList

