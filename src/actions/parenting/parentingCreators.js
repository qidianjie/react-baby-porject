
// 引入createAction
import {createAction} from "redux-actions";
import {parentingApi,getIdApi,getDataApi,articleApi,courseApi,commentApi,sendApi,zanApi} from "api/shop"

import {parentingType,getIdType,getDataType,articleType,courseType,commentType,sendType,zanType} from "./parentingTypes";
export const parentingAction=()=>{
    let parentingData=createAction(parentingType,(data)=>data)

    return async (dispatch)=>{
        let data=await parentingApi();
        // console.log(data)
        dispatch(parentingData(data.data))
        localStorage.setItem("parenting",JSON.stringify(data.data))
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

// 专家讲堂下的视频课程详情
export const courseAsyncAction=(courseId)=>{

    let courseAction=createAction(courseType,(data)=>data)
    return async (dispatch)=>{
        let data=await courseApi(courseId);
        // console.log(data.data);
        dispatch(courseAction(data.data))
    }
}
// 专家讲堂下的视频课程详情中的评论
export const commentAsyncAction=(courseId)=>{
    let commentAction=createAction(commentType,(data)=>data)

    return async (dispatch)=>{
        let data=await commentApi(courseId);
        // console.log(data);
        dispatch(commentAction(data.data.records))
    }
}

// 发送评论
export const sendAsyncAction=(id,value)=>{
    let sendAction=createAction(sendType,(data)=>data)

    return async (dispatch)=>{
        let data=await sendApi(id,value);
        // console.log(data)
        dispatch(sendAction(data.data.data))
    }
}

// 点赞
export const zanAsyncAction=(zanId)=>{
    let zanAction=createAction(zanType,(data)=>data)

    return async (dispatch)=>{
        let data=await zanApi(zanId);
        // console.log(data);
        dispatch(zanAction(data.data))
    }
}