// B2


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
export default demReducer