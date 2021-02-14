import { authThunk } from './authReducer';
const INITIALIZED_SUCCESS ="INITIALIZED_SUCCESS"


const initialState = {
    initialized:false
}


let generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state,initialized:true}
        default:
            return state;
    }
}
export default generalReducer;

export const initializedSuccess = ()=>({type:INITIALIZED_SUCCESS})

export const initialize = ()=> async (dispatch)=>{
    
    await dispatch(authThunk)
    
    //ВОЗМОЖНО ЭТО КРАЙНЕ НЕПРАВИЛЬНО, НО СДЕЛАЛ ЭТО ДЛЯ ТОГО, ЧТОБЫ НЕ БЫЛО
    //МИЛЛИСЕКУНДНОГО МОРГАНИЯ МЕЖДУ ПРЕЛОАДЕРОМ И СТРАНИЦЕЙ
    //ЕСЛИ УЖ ПОКАЗЫВАЕТСЯ ПРЕЛОАДЕР, ТО ПУСТЬ ХОТЯ БЫ пол секунды ДА ПОРАБОТАЕТ:))))))
    setTimeout(()=>{dispatch(initializedSuccess())},500)
    
}