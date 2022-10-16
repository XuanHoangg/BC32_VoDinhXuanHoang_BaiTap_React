import React from 'react'

const ProductCart = ({ isOpen, onClose, carts, onChangeQuantity }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div>
            <div className="modal fade show d-block" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Đơn giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td><img src={item.image} alt="item.name" width="50px" /></td>
                                                <td>{item.price} $</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => onChangeQuantity(item.id, -1)}>-</button>
                                                    <span className='mx-2'>{item.quantity}</span>
                                                    <button className='btn btn-success' onClick={() => onChangeQuantity(item.id, 1)}>+</button>
                                                </td>
                                                <td>{item.quantity * item.price} $</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* overlay */}
            <div className="modal-backdrop fade show"></div>
        </div >
    )
}

export default ProductCart