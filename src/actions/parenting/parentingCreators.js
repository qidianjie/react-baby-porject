
// 引入createAction
import {createAction} from "redux-actions";
import {parentingApi} from "api/shop"

import {parentingType} from "./parentingTypes";
export const parentingAction=()=>{
    let parentingData=createAction(parentingType,(data)=>data)

    return async (dispatch)=>{
        let data=await parentingApi();
        // console.log(data)
        dispatch(parentingData(data.data))
    }
}