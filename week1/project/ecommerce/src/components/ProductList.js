import React from 'react'
import ProductItem from './ProductItem.js';


const ProductList = ({ filteredProducts }) => {

    return (
        <div className='all-products'>
            {filteredProducts.map((product) => (
                <ProductItem
                    key={product.id}
                    productName={product.title}
                    productImage={product.image} />
            ))}
        </div>
    )
}

export default ProductList

