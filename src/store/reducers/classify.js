import {handleActions} from "redux-actions"
import {classAsyncType,goodsAction,pinpaiAction} from "actions/classify/classActionType"

const defaultState = {
    caidanList:[],
    goodsList:[],
    pinpaiList:[]
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
    }
    
},defaultState)