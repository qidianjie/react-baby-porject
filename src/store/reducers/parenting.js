import {handleActions} from "redux-actions";

import {parentingType,getIdType,getDataType,articleType} from "actions/parenting/parentingTypes";
const defaultState={
    parentingList:[],
    idArr:[],
    dataList:[],
    article:"",
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
    }
},defaultState)
