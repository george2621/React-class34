import React from 'react'
import { allCategories } from '../fake-data/all-categories'


const Categories = ({ handleCategories, selectedCategory }) => (

    allCategories.map((category, index) => (
        <button
            key={index}
            className={`category ${selectedCategory === category ? "selected-category" : ""}`}
            onClick={(() => handleCategories(category))}>
            {category}</button>
    ))

)

export default Categories
