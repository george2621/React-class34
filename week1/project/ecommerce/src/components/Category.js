import React from 'react'

const Category = ({ category, handleCategories, className }) => {
    return (
        <div className={className} onClick={(() => handleCategories(category))
        }> {category}</div >
    )
}

export default Category
