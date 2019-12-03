import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import national from "./reducers/national";
import parenting from "./reducers/parenting";
import home from "./reducers/home"
import detail from "./reducers/detail"
const reducers=combineReducers({
    national,
    parenting,
    home,
    detail,
})
const store =createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;
