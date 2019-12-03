import {detailAsyncType,commentAsync,recommendListAsyncType} from './detailActionTypes'
import {goodsDetailApi,goodsCommentApi,recommendListApi} from '../../api/shopCenter'

import {createAction} from 'redux-actions'


export const detailAsyncAction=(id)=>{
    let detailAction=createAction(detailAsyncType,(data)=>data);

    return async (dispatch)=>{
        let  data=await goodsDetailApi(id);
            // console.log(data.data.data);
        dispatch(detailAction(data.data.data))
    }
}

export const goodsCommentAsyncAction=(id)=>{
    let goodsCommentAction=createAction(commentAsync,(data)=>data);

    return async (dispatch)=>{
        let  data=await goodsCommentApi(id);
            // console.log(data.data.data);
        dispatch(goodsCommentAction(data.data.data))
    }
}


export const recommendListAsyncAction=()=>{
    let recommendListAction=createAction(recommendListAsyncType,(data)=>data);

    return async (dispatch)=>{
        let id=""
        let  data=await recommendListApi(id);
            // console.log(data.data.data);
        dispatch(recommendListAction(data.data.data))
    }
}

