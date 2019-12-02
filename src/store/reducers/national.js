import {handleActions} from "redux-actions";
import {nationalType,starType,mineType,crazyType} from "actions/national/nationalActionTypes";
const defaultState={
    national_list:{},
    advList:[],
    mineList:[],
    crazyList:[],
}


export default handleActions({
    [nationalType]:(state,action)=>{
        let nationalState=JSON.parse(JSON.stringify(state));
        nationalState.national_list=action.payload;
        return nationalState;
    },
    // 明星大牌
    [starType]:(state,action)=>{
        let starState=JSON.parse(JSON.stringify(state));
        starState.advList=action.payload;
        return starState;
    },
    // 我的
    [mineType]:(state,action)=>{
        let mineState=JSON.parse(JSON.stringify(state));
        mineState.mineList=action.payload;
        return mineState;
    },
    // 疯抢
    [crazyType]:(state,action)=>{
        let crazyState=JSON.parse(JSON.stringify(state));
        crazyState.crazyList=action.payload;
        return crazyState;
    }
},defaultState)