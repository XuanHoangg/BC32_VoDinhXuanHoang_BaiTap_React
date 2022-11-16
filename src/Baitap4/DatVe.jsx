import React from 'react'
import styles from './datvephim.module.scss';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css'
const DatVe = () => {
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => state.quanLyDatVe);
    const dispatch = useDispatch();
    const total = danhSachGheDangDat.reduce((result, item) => {
        return result + item.gia
    }, 0)

    return (
        <div>
            <div className={cn(styles.screen, styles.bookingMovie, "my-5")}>MÀN HÌNH
                {/* <p className={cn(styles.manHinh)}>MÀN HÌNH</p> */}
            </div>
            <div className={cn(styles.check, 'row')}>
                <div className="col-sm-8">
                    {chiTietPhongVe.map((item, index) => {
                        // số thứ tự 1-12
                        if (index === 0) {
                            return <div key={item.hang} className="row">
                                <div className={cn(styles.rowNumber, styles.bookingMovie, "col-sm-3")}>{item.hang}</div>
                                <div className='col-sm-9 d-flex justify-content-around'>
                                    {item.danhSachGhe.map((item, index) => (
                                        <p className={cn(styles.firstChar)} key={index}>
                                            {item.soGhe}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        }
                        // danh sách ghế
                        else {

                            return <div key={item.hang} className="row">
                                <div className={cn(styles.rowNumber, "col-sm-3")}>{item.hang}</div>
                                <div className='col-sm-9'>
                                    {item.danhSachGhe.map((ghe, index) => {
                                        let classGheDaDat = ghe.daDat === true ? 'gheDuocChon' : '';
                                        let indexGheDD = danhSachGheDangDat.findIndex((gheDD) => gheDD.soGhe === ghe.soGhe)
                                        let classGheDD = '';

                                        if (indexGheDD !== -1) {
                                            classGheDD = 'gheDangChon';
                                        }
                                        return <button className={`ghe ${classGheDaDat} ${classGheDD}`} key={index} onClick={() => {
                                            dispatch({
                                                type: "DANH_SACH_GHE",
                                                gheDuocChon: ghe
                                            })
                                        }}>
                                            {ghe.soGhe}
                                        </button>
                                    })}
                                </div>
                            </div>
                        }
                    })}
                </div>
                <div className={cn(styles.pay, "col-sm-4")}>
                    <h3 className={cn(styles.bookingMovie)}>DANH SÁCH GHẾ BẠN CHỌN</h3>
                    <div className='d-flex my-2 position-relative'>
                        <div className={cn(styles.gheDuocChon)}></div>
                        <span className={cn(styles.char, "mx-3")}>Ghế đã đặt</span>
                        <button disabled={true} className={cn(styles.total, "btn btn-success text-right")}>Tổng số tiền:  {total} VNĐ</button>
                    </div>
                    <div className='d-flex my-2'>
                        <div className={cn(styles.gheDangChon)}></div>
                        <span className={cn(styles.char, "mx-3")}>Ghế đang chọn</span>
                    </div>
                    <div className='d-flex my-2 position-relative'>
                        <div className={cn(styles.ghe, styles.x)}></div>
                        <span className={cn(styles.char, "mx-3")}>Ghế chưa đặt</span>
                        <button onClick={() => { dispatch({ type: "DAT_VE", dsGheDaDat: danhSachGheDangDat }) }} className={cn(styles.total, "btn btn-danger")}>ĐẶT VÉ</button>
                    </div>
                    <table className='table'>
                        <tr>
                            <th>Mã số ghế</th>
                            <th>Giá tiền</th>
                        </tr>
                        <tbody>
                            {danhSachGheDangDat.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia} VNĐ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DatVe