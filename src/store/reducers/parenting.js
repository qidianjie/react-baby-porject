import {handleActions} from "redux-actions";

import {parentingType,getIdType,getDataType,articleType,courseType,commentType,sendType,zanType} from "actions/parenting/parentingTypes";
const defaultState={
    parentingList:[],
    idArr:[],
    dataList:[],
    article:"",
    course:"",
    commentList:[],
    send:"",
    zan:0,


}

export default handleActions({
    [parentingType]:(state,action)=>{
        let parentingState=JSON.parse(JSON.stringify(state));
        parentingState.parentingList=action.payload;
        return parentingState;
    },
    [getIdType]:(state,action)=>{
        let idState=JSON.parse(JSON.stringify(state));
        idState.idArr=action.payload;
        return idState;
    },
    // 育儿百科下的list
    [getDataType]:(state,action)=>{
        let dataState=JSON.parse(JSON.stringify(state));
        dataState.dataList=action.payload;
        return dataState;
    },
    
    // 育儿百科下list下的article的详情
    [articleType]:(state,action)=>{
        let articleState=JSON.parse(JSON.stringify(state));
        articleState.article=action.payload;
        return articleState;
    },
    // 专家讲堂下的视频课程详情
    [courseType]:(state,action)=>{
        let courseState=JSON.parse(JSON.stringify(state));
        courseState.course=action.payload;
        return courseState;
    },
     // 专家讲堂下的视频课程详情中的评论
    [commentType]:(state,action)=>{
        let commentState=JSON.parse(JSON.stringify(state));
        commentState.commentList=action.payload;
        return commentState;
    },
    // 发送评论
    [sendType]:(state,action)=>{
        let sendState=JSON.parse(JSON.stringify(state));
        sendState.send=action.payload;
        return sendState;
    },
    // 点赞
    [zanType]:(state,action)=>{
        let zanState=JSON.parse(JSON.stringify(state));
        zanState.zan=action.payload;
        return zanState;
    }
},defaultState)
