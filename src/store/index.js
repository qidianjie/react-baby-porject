import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import home from "./reducers/home"
import detail from "./reducers/detail"

const reducers=combineReducers(
    {
        home,
        detail
    }
)


const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;
