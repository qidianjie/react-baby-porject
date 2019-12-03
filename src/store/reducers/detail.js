import {handleActions}  from "redux-actions"


import {detailAsyncType,commentAsync,recommendListAsyncType} from '../../actions/detail/detailActionTypes'


const defaultState={
    goodDetail:[],
    commentList:[],
    recommendList:[]
}

export default handleActions({
    [detailAsyncType]:(state,action)=>{
        let goodsState=JSON.parse(JSON.stringify(state))
        goodsState.goodDetail=action.payload;
        return goodsState;
    },
    [commentAsync]:(state,action)=>{
        let commentState=JSON.parse(JSON.stringify(state))
        commentState.commentList=action.payload;
        return commentState;
    },
    [recommendListAsyncType]:(state,action)=>{
            let recommendListState=JSON.parse(JSON.stringify(state));
            recommendListState.recommendList=action.payload;
            return recommendListState;
    }
},defaultState)