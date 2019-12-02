import {handleActions} from 'redux-actions'
import {homeAsyncType,selectAsyncType,qiangAsyncType,selectGoodsAsyncType} from '../../actions/home/homeActionTypes'

const  defaultState={
    advList:[],
    selectAll:[],
    qiangList:[],
    goodsList:[]
}

export default handleActions({
    [homeAsyncType]:(state,action)=>{
        let  homeState=JSON.parse(JSON.stringify(state))
        homeState.advList=action.payload;
        // console.log(homeState.advList)
        return homeState;
    },
    [selectAsyncType]:(state,action)=>{
        let selectState=JSON.parse(JSON.stringify(state))
        selectState.selectAll=action.data;
        // console.log(selectState.selectAll);
        return selectState;
    },
    [qiangAsyncType]:(state,action)=>{
        let qingState=JSON.parse(JSON.stringify(state));
        qingState.qiangList=action.data;
        // console.log(qingState.qiangList);
        return qingState;
    },
    [selectGoodsAsyncType]:(state,action)=>{
        let goodsState=JSON.parse(JSON.stringify(state));
        console.log(action.flag);
        if(action.flag==1){
            goodsState.goodsList=action.data;
        }else{
            goodsState.goodsList=[...goodsState.goodsList,...action.data];
        }
        return goodsState;
    }
},defaultState)