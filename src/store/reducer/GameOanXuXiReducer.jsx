import { CHON_KEO_BUA_BAO, PLAY_GAME, RANDOM } from "../constants/gameKeoBuaBaoConstants"

const initialState = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './images/keo.png', status: true },
        { ma: 'bua', hinhAnh: './images/bua.png', status: false },
        { ma: 'bao', hinhAnh: './images/bao.png', status: false },
    ],
    soBanThang: 0,
    soBanChoi: 0,
    ketQua: 'I am iron man, i love you 3000!!!',
    computer: { ma: 'bao', hinhAnh: './images/bao.png' }
}

export const GameOanXuXiReducer = (state = initialState, { type, ma }) => {
    switch (type) {

        case CHON_KEO_BUA_BAO:
            let mangDatCuocUpdate = []
            mangDatCuocUpdate = state.mangDatCuoc.map((item, index) => {
                return { ...item, status: false }
            })
            console.log(mangDatCuocUpdate);
            let index = mangDatCuocUpdate.findIndex(p => p.ma === ma);
            if (index !== -1) {
                mangDatCuocUpdate[index].status = true
            }
            return { ...state, mangDatCuoc: mangDatCuocUpdate }

        case RANDOM:
            let soNgauNhien = Math.floor(Math.random() * 3)
            console.log(soNgauNhien);
            return { ...state, computer: state.mangDatCuoc[soNgauNhien] }

        case PLAY_GAME: {
            state.soBanChoi += 1;
            let mangDatCuocUpdate = [...state.mangDatCuoc]
            let datCuoc = mangDatCuocUpdate.find(item => item.status === true)
            console.log(datCuoc);


            switch (datCuoc.ma) {
                case 'keo':
                    if (state.computer.ma === 'bao') {
                        state.soBanThang += 1
                        state.ketQua = 'Win!!!'
                    } else if (state.computer.ma === 'keo') {
                        state.ketQua = 'Hoà!!!'
                    } else if (state.computer.ma === 'bao') {
                        state.ketQua = 'Lose!!!'
                    }
                    break;
                case 'bua':
                    if (state.computer.ma === 'keo') {
                        state.soBanThang += 1
                        state.ketQua = 'Win!!!'
                    } else if (state.computer.ma === 'bua') {
                        state.ketQua = 'Hoà!!!'
                    } else if (state.computer.ma === 'bao') {
                        state.ketQua = 'Lose!!!'
                    }
                    break;
                case 'bao':
                    if (state.computer.ma === 'bua') {
                        state.soBanThang += 1
                        state.ketQua = 'Win!!!'
                    } else if (state.computer.ma === 'bao') {
                        state.ketQua = 'Hoà!!!'
                    } else if (state.computer.ma === 'keo') {
                        state.ketQua = 'Lose!!!'
                    }
                    break;
                default:

            }
            return { ...state }
        }

        default:
            return state
    }
}
