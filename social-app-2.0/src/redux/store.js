import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkWare from "redux-thunk"
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

const reducers = combineReducers(
    {
        profilePage:profileReducer,
        auth:authReducer
    }
)

const store = createStore(reducers,applyMiddleware(thunkWare))

window.store = store;

export default store