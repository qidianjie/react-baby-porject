import {nationalType,starType,mineType,crazyType} from "./nationalActionTypes"

import {nationalApi,nationalStarApi,mineApi,crazyApi} from "api/shop"
import {createAction} from "redux-actions";
// 国家馆
export const nationAsyncAction=()=>{
    let nationalAction=createAction(nationalType,(data)=>data)

    return async (dispatch)=>{
        let data=await nationalApi();
        // console.log(data);
        dispatch(nationalAction(data.data))
    }
}
// 明星大牌
export const starAsyncAction=()=>{
    let starAction=createAction(starType,(data)=>data)

    return async (dispatch)=>{
        let data=await nationalStarApi();
        console.log(data.data.advList);
        dispatch(starAction(data.data.advList))
    }
}

// 我的
export const mineAsyncAction=()=>{
    let mineData=createAction(mineType,(data)=>data)

    return async (dispatch)=>{
        let data=await mineApi();
        // console.log(data);
        dispatch(mineData(data.data))
    }
}

// 疯抢

export const crazyAction=()=>{
    let crazyData=createAction(crazyType,(data)=>data)

    return async (dispatch)=>{
        let data=await crazyApi();
        console.log(data);
        dispatch(crazyData(data.data.records))
    }
}