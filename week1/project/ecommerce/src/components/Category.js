import React from 'react'
import { allCategories } from '../fake-data/all-categories'


const Category = ({ handleCategories, selectedCategory }) => (
    <div>
        {
            allCategories.map((category, index) => (
                <button key={index} className={`category ${selectedCategory === category ? "selected-category" : ""}`} onClick={(() => handleCategories(category))
                }> {category}</button >
            ))
        }

    </div >
)


export default Category
