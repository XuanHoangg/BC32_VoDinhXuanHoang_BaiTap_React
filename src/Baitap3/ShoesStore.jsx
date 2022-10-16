import React, { Component } from 'react'
import ProductList from './ProductList'
import products from './data.json'
import ProductDetail from './ProductDetail'
import ProductCart from './ProductCart'
export default class ShoeStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectProduct: null,
            //state quản lý ẩn hiện của modal
            isOpen: false,
            carts: [],
        }
    }
    handleSelect = (product) => {
        this.setState({ selectProduct: product })
        console.log("day là selectProduct", this.state.selectProduct);
    }
    handleToggleModal = () => {
        // thay đổi giá trị của state isOpen thành gias trị phủ định của chính nó
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }
    handleAddToCart = (product) => {
        console.log(product);
        const index = this.state.carts.findIndex((item) => item.id === product.id);
        if (index === -1) {
            this.setState((state) => ({ carts: [...state.carts, { ...product, quantity: 1 }] }))
        } else {
            const newCarts = [...this.state.carts]
            newCarts[index].quantity += 1;
            this.setState({ carts: newCarts })
        }

    }
    handleChangeQuantity = (productId, quantity) => {
        const index = this.state.carts.findIndex(item => item.id === productId)
        const newCarts = [...this.state.carts]
        if (quantity === -1 && newCarts[index].quantity === 1) {
            newCarts.splice(index, 1)
            this.setState({ carts: newCarts })
        } else {
            newCarts[index].quantity += quantity;
            this.setState({ carts: newCarts })
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-between mt-3'>
                    <h2 className='text-primary'>Shoes Shop</h2>
                    <button className='btn btn-success' onClick={this.handleToggleModal}>Giỏ hàng</button>

                </div>
                <ProductList productsData={products} onSelect={this.handleSelect} onAddToCart={this.handleAddToCart}>
                    <ProductDetail product={this.state.selectProduct} />
                </ProductList>
                <ProductCart isOpen={this.state.isOpen} onClose={this.handleToggleModal} carts={this.state.carts} onChangeQuantity={this.handleChangeQuantity} />
            </div>
        )
    }
}
