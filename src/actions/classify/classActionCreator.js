import {classAsyncType,goodsAction,pinpaiAction,brandActionType,searchActionType,xinpinAction} from "./classActionType"
import {NavCaidan,goodsList,pinpaiList,redenvelopes,handleNaibrand,searchTiaozhuanList,xinpinList} from "api/hob.js"


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
export const handleNaiBrandList = (id,flag,page)=>{
    let handleBrandList = (data,page)=>({
        type:brandActionType,
        data, 
        page
    })
    return async (dispatch)=>{
        let data = await handleNaibrand(id,flag,(page=="112"?'1':page));
        dispatch(handleBrandList(data.data.data.goodsList,page))
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

export const handleXinpinList = ()=>{

    let handleXinpinAction=(data)=>({
        type:xinpinAction,
        data
    })

    return async (dispatch)=>{
        let data = await xinpinList();
        dispatch(handleXinpinAction(data.data.data))
        console.log(data);
    }
}


