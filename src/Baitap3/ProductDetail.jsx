import React from 'react'

const ProductDetail = ({ product }) => {
    if (!product) {
        return null;
    }
    return (
        <div className='row mt-5'>

            <div className='col-sm-4'>
                <img src={product.image} alt={product.name} width="100%" height="400px" />
            </div>
            <div className='col-sm-8'>
                <table className='table'>
                    <tbody >
                        <tr>
                            <td>Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>alias</td>
                            <td>{product.alias}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price}</td>
                        </tr>

                        <tr>
                            <td>Description</td>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <td>ShortDescription</td>
                            <td>{product.shortDescription}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ProductDetail