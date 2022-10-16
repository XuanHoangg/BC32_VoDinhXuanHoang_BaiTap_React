import React, { useState } from 'react'
import ProductItem from './ProductItem'
const ProductList = ({ productsData, onSelect, children, onAddToCart }) => {
    const handleSelect = (product) => {
        onSelect(product)
    }
    const handleAddtoCart = (product) => {
        onAddToCart(product)
    }
    return (
        <div className="row">
            {
                productsData.map((product) => (
                    <div key={product.id} className='col-sm-4'>
                        <ProductItem product={product} select={handleSelect}>
                            <div className='d-flex'>
                                <button style={{ width: "150px" }} className='btn btn-success' onClick={() => handleAddtoCart(product)}>Add to cart</button>
                                <button style={{ width: "100px" }} className='btn btn-danger ms-3' onClick={() => handleSelect(product)}>Detail</button>
                            </div>
                        </ProductItem>

                    </div>

                ))
            }

            {children}

        </div>
    )
}

export default ProductList

