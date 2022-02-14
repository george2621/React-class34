import React from 'react'
import ProductItem from './ProductItem.js';


const ProductList = ({ products, isLoading, error, isPending }) => {

    return (
        <div className='all-products'>
            {isLoading === false ? products.map((product) => (
                <ProductItem
                    key={product.id}
                    productName={product.title}
                    productImage={product.image} />))
                :
                <div className="loading">
                    {error && <h2>{error}</h2>}
                    {isPending && <h2>loading...</h2>}
                </div>
            }
        </div>
    )
}

export default ProductList

