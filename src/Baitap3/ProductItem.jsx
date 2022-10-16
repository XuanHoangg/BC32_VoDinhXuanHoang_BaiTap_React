import React from 'react'

const ProductItem = ({ product, select, children }) => {
    const handleSelect = (product) => {
        select(product);
    }
    return (
        <div>
            <div className="card mt-4">
                <div className="card-header">
                    <img src={product.image} alt="image" style={{ width: "100%", height: "300px" }} />
                </div>
                <div className="card-body">
                    <p>{product.alias}</p>
                    <p>{product.price} $</p>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ProductItem