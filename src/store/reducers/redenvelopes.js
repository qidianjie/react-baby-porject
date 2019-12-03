import {handleActions} from "redux-actions"
import {redenvelopesType,libaoActionType,zhongjianActionType,handlepinpaiAction,searchActionType} from "actions/redenvelopes/redActionType"

const defaultState = {
    redenvelopesList:[],
    libaoList:[],
    zhongjianList:[],
    brandList:[],
    searchList:[]
}

export default handleActions({
    [redenvelopesType]:(state,action)=>{
        let classifyState = JSON.parse(JSON.stringify(state));
        classifyState.redenvelopesList = action.data;
        // console.log(classifyState);
        return classifyState;
    },
    [libaoActionType]:(state,action)=>{
        let libaoState = JSON.parse(JSON.stringify(state));
        libaoState.libaoList = action.data;
        // console.log(classifyState);
        return libaoState;
    },
    [zhongjianActionType]:(state,action)=>{
        let zhongjianState = JSON.parse(JSON.stringify(state));
        zhongjianState.zhongjianList = action.data;
        // console.log(classifyState);
        return zhongjianState;
    },
    [handlepinpaiAction]:(state,action)=>{
        let brandState = JSON.parse(JSON.stringify(state));
        brandState.brandList = action.data;
        // console.log(classifyState);
        return brandState;
    },
    [searchActionType]:(state,action)=>{
        let searchState = JSON.parse(JSON.stringify(state));
        searchState.searchList = action.data;
        return searchState;
    },
    
},defaultState)