import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import classify from "./reducers/classify"
import redenvelopes from "./reducers/redenvelopes"

const reducers = combineReducers({
    classify,
    redenvelopes
})
const store = createStore(reducers,applyMiddleware(reduxThunk))

export default store;