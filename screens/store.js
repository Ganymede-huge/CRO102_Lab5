import { act } from "react-test-renderer"
import { createStore } from "redux"

// Khai bao ham (Khai báo các actions)
const tang = 'tang';
const giam = 'giam';
export const Tang = () => ({ type: tang }) //Khai báo hàm tăng
export const Giam = () => ({ type: giam }) // Khai báo hàm giảm

// 2. Định nghĩa reducer
//Khởi tạo biến đếm
const initState = {
    dem: 0
}
const demReducer = (state = initState, action) => {
    switch (action.type) // Kiểm tra hành động nào đc gọi
    {
        case tang:
            return { ...state, dem: state.dem + 1 }
        case giam:
            return { ...state, dem: state.dem - 1 }
        default:
            return state // Mặc định là không có thay đổi 
    }
}
const store = createStore(demReducer)
export default store;