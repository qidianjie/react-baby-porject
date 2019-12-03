import {classAsyncType,goodsAction,pinpaiAction,brandActionType,searchActionType} from "./classActionType"
import {NavCaidan,goodsList,pinpaiList,redenvelopes,handleNaibrand,searchTiaozhuanList} from "api/hob.js"


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
// 分类
export const handleNaiBrandList = (id,flag)=>{
    let handleBrandList = (data)=>({
        type:brandActionType,
        data
    })
    return async (dispatch)=>{
        let data = await handleNaibrand(id,flag);
        console.log(data);
        // localStorage.setItem('pinpai',JSON.stringify(data.data.data.filterBrand))
        dispatch(handleBrandList(data.data.data.goodsList))
    }
}

// 搜索框跳转数据
export const searchls = (id)=>{
    
    let searchlsAction = (data)=>({
        type:searchActionType,
        data
    })
    return async (dispatch)=>{
        
        let data = await searchTiaozhuanList(id);
        dispatch(searchlsAction(data.data.data));
    }
}


