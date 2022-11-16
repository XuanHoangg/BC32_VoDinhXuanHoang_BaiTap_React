import data from './danhSachGhe.json';

const initialState = {
    chiTietPhongVe: data,
    danhSachGheDangDat: [],
    //ds rỗng để in ra màn hình khi đã click đặt vé
    dsRong: []
}
const quanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DANH_SACH_GHE": {
            // cập nhật danh sách ghế đang đặt
            let dsGheCapNhat = [...state.danhSachGheDangDat];
            let index = dsGheCapNhat.findIndex((item) => item.soGhe === action.gheDuocChon.soGhe)

            // có tồn tại => xóa đi
            if (index !== -1) {
                dsGheCapNhat.splice(index, 1);
            }
            else {
                dsGheCapNhat.push(action.gheDuocChon)
            }

            return { ...state, danhSachGheDangDat: dsGheCapNhat }
        }
        case "DAT_VE": {
            action.dsGheDaDat.map((item) => { item.daDat = true })
            const dsGheDD = [...action.dsGheDaDat]
            return { ...state, danhSachGheDangDat: dsGheDD }
        }
        default:
            return { ...state };
    }
}

export default quanLyDatVeReducer;
