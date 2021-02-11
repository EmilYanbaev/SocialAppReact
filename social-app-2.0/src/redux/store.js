import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkWare from "redux-thunk"
import authReducer from "./reducers/authReducer";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers(
    {
        auth:authReducer,
        profilePage:profileReducer,
        friendsPage:friendsReducer,
        form:formReducer
    }
)

const store = createStore(reducers,applyMiddleware(thunkWare))

window.store = store;

export default store