import React from 'react'

const ProductItem = ({ productName, productImage }) => (
    <div className='product'>
        <img src={productImage} alt={productName} />
        <p>{productName}</p>
    </div>
)
export default ProductItem;
