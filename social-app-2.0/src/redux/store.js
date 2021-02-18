import { applyMiddleware, combineReducers, createStore,compose } from "redux"
import thunkWare from "redux-thunk"
import authReducer from "./reducers/authReducer";
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from "./reducers/profileReducer";
import { reducer as formReducer } from 'redux-form'
import generalReducer from './reducers/generalReducer';
import viewReducer from './reducers/viewReducer';

const reducers = combineReducers(
    {
        general: generalReducer,
        auth: authReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        viewModule:viewReducer,
        form: formReducer
    }
)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkWare)))
window.__store = store;

export default store