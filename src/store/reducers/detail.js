import {handleActions}  from "redux-actions"


import {detailAsyncType} from '../../actions/detail/detailActionTypes'


const defaultState={
    goodDetail:[]
}

export default handleActions({
    [detailAsyncType]:(state,action)=>{
        let goodsState=JSON.parse(JSON.stringify(state))
        goodsState.goodDetail=action.payload;
        return goodsState;
    }
},defaultState)