import React from 'react'


const Categories = ({ handleCategories, selectedCategory, categories }) => (

    categories.map((category, index) => (
        <button
            key={index}
            className={`category ${selectedCategory === category ? "selected-category" : ""}`}
            onClick={(() => handleCategories(category))}>
            {category}
        </button>
    ))
)

export default Categories
