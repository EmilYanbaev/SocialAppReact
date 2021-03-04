import { authThunk } from './authReducer';
//import { setClientSizeThunk } from './viewReducer';
const INITIALIZED_SUCCESS = "general/INITIALIZED_SUCCESS"



const initialState = {
    initialized: false
}
export type InitialStateType = typeof initialState



let generalReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return { ...state, initialized: true }
        default:
            return state;
    }
}
export default generalReducer;



type InitializedSuccessAcType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessAcType => ({ type: INITIALIZED_SUCCESS })


export const initialize = () => async (dispatch: any) => {

    await dispatch(authThunk)
    // dispatch(setClientSizeThunk)


    //ВОЗМОЖНО ЭТО КРАЙНЕ НЕПРАВИЛЬНО, НО СДЕЛАЛ ЭТО ДЛЯ ТОГО, ЧТОБЫ НЕ БЫЛО
    //МИЛЛИСЕКУНДНОГО МОРГАНИЯ МЕЖДУ ПРЕЛОАДЕРОМ И СТРАНИЦЕЙ
    //ЕСЛИ УЖ ПОКАЗЫВАЕТСЯ ПРЕЛОАДЕР, ТО ПУСТЬ ХОТЯ БЫ пол секунды ДА ПОРАБОТАЕТ:))))))
    setTimeout(() => { dispatch(initializedSuccess()) }, 500)

}