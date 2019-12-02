import {classAsyncType,goodsAction,pinpaiAction} from "./classActionType"
import {NavCaidan,goodsList,pinpaiList,redenvelopes} from "api/hob.js"

export const classAsyncAction = ()=>{
    let classAction = (data)=>({
        type:classAsyncType,
        data
    })
    return async (dispatch)=>{
        let data = await NavCaidan();
        dispatch(classAction(data.data.data))
    }
}

export const goodslistAction = (id,path)=>{
    let goodsAsynd = (data)=>({
        type:goodsAction,
        data
    })
    return async (dispatch)=>{
        let data = await goodsList(id,path);
        localStorage.setItem('goodsList',JSON.stringify(data.data.data.categoryList))
        dispatch(goodsAsynd(data.data.data.categoryList))
    }
}

export const pinpaiListAction = ()=>{
    let pinpaiListls = (data)=>({
        type:pinpaiAction,
        data
    })
    return async (dispatch)=>{
        let data = await pinpaiList();
        localStorage.setItem('pinpai',JSON.stringify(data.data.data.filterBrand))
        dispatch(pinpaiListls(data.data.data.filterBrand))
    }
}


