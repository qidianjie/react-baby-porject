
// 引入createAction
import {createAction} from "redux-actions";
import {parentingApi,getIdApi,getDataApi,articleApi} from "api/shop"

import {parentingType,getIdType,getDataType,articleType} from "./parentingTypes";
export const parentingAction=()=>{
    let parentingData=createAction(parentingType,(data)=>data)

    return async (dispatch)=>{
        let data=await parentingApi();
        // console.log(data)
        dispatch(parentingData(data.data))
    }
}
// 育儿百科（获取八个id）
export const getIdAction=()=>{
    let getIdData=createAction(getIdType,(data)=>data)

    return async (dispatch)=>{
        let data=await getIdApi();
        // console.log(data);
        dispatch(getIdData(data.data))
    }
}

// 育儿百科的list
export const getDataAsyncAction=(id)=>{
    let getDataAction=createAction(getDataType,(data)=>data)

    return async (dispatch)=>{
        let data=await getDataApi(id);
        // console.log(data);
        dispatch(getDataAction(data.data.records))
    }
}

// 育儿百科下list下的article的详情
export const articleAction=(id)=>{
    let getdataAction=createAction(articleType,(data)=>data)

    return async (dispatch)=>{
        let data=await articleApi(id);
        // console.log(data);
        dispatch(getdataAction(data.data))
    }
}