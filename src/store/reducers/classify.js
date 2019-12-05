import {handleActions} from "redux-actions"
import {classAsyncType,goodsAction,pinpaiAction,brandActionType,searchActionType,xinpinAction} from "actions/classify/classActionType"

const defaultState = {
    caidanList:[],
    goodsList:[],
    pinpaiList:[],
    brandlist:[],
    searchlsList:[],
    xinpinList:[]
}

export default handleActions({
    [classAsyncType]:(state,action)=>{
        let classifyState = JSON.parse(JSON.stringify(state));
        classifyState.caidanList = action.data;
        // console.log(classifyState);
        return classifyState;
    },
    [goodsAction]:(state,action)=>{
        let goodsListAction = JSON.parse(JSON.stringify(state));
        goodsListAction.goodsList = action.data;
        return goodsListAction;
    },
    [pinpaiAction]:(state,action)=>{
        let pinpaiListAction = JSON.parse(JSON.stringify(state));
        pinpaiListAction.pinpaiList = action.data;
        return pinpaiListAction;
    },
    [brandActionType]:(state,action)=>{
        let brandState = JSON.parse(JSON.stringify(state));
        if(action.page== "112"){
            brandState.brandlist = action.data
        }else{
             brandState.brandlist = [...brandState.brandlist,...action.data];
        }
       
        
        return brandState;
    },
    [searchActionType]:(state,action)=>{
        let searchState = JSON.parse(JSON.stringify(state));
        searchState.searchlsList = action.data;
        return searchState;
    },
    [xinpinAction]:(state,action)=>{
        let xinpinState = JSON.parse(JSON.stringify(state));
        xinpinState.xinpinList = action.data;
        return xinpinState;
    }
    
},defaultState)