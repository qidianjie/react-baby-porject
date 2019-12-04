import {redenvelopesType,libaoActionType,zhongjianActionType,handlepinpaiAction,searchActionType} from "./redActionType"
import {redenvelopes,libaoList,zhongjianls,brandList,searchList} from "api/hob.js"
// 免费红包
export const handleRed = ()=>{

    let redenvelopesList = (data)=>({
        type:redenvelopesType,
        data
    })
    return async (dispatch)=>{
        let data = await redenvelopes();
        console.log(data);
        dispatch(redenvelopesList(data.data.data.records));
    }
}


// 礼包
export const libaoAction = (id)=>{
    let flag = 0;
    let biaoji = 0;
    let libaoActionList = (data)=>({
        type:libaoActionType,
        data
    })
    return async (dispatch)=>{
        let data = await libaoList(id);
        let libao = JSON.parse(localStorage.getItem('libaoList'))
        console.log(libao);
        if(libao){
            for(var i=0;i<libao.length;i++){
                if(data.data.data.id == libao[i].id){
                    biaoji = 1;
                    break;
                }
            }
            if(biaoji ==0 ){
                let list = libao.concat(data.data.data);
                localStorage.setItem('libaoList',JSON.stringify(list))
                dispatch(libaoActionList(data.data.data))
            }
            flag = 1;
        }
        if(flag == 0){
            localStorage.setItem('libaoList',JSON.stringify(data.data.data))
        }
        // console.log();
        dispatch(libaoActionList(JSON.parse(localStorage.getItem('libaoList'))))
    }
}

// 中检
export const zhongjianList = ()=>{
    let zhongjianAction= (data)=>({
        type:zhongjianActionType,
        data
    })
    return async (dispatch)=>{
        let data = await zhongjianls();
        localStorage.setItem('zhongjianList',JSON.stringify(data.data.data.goodsList))
        let list = JSON.parse(localStorage.getItem('zhongjianList'))
        if(list){
            dispatch(zhongjianAction(list));
        }else{
            dispatch(zhongjianAction(data.data.data.goodsList));
        }
       
    }
}

// 品牌详情
export const handlePinpaiLs =(id)=>{
    let handlepinpaiActions = (data)=>({
        type:handlepinpaiAction,
        data
    })

    return async (dispatch)=>{
        let data = await brandList(id);
        dispatch(handlepinpaiActions(data.data.data.goodsList));
    }
}
// 搜索页面
export const handleSearch =(val)=>{
    let searchListaction = (data)=>({
        type:searchActionType,
        data
    })
    
    return async (dispatch)=>{
        let data = await searchList(val);
        // console.log(data);
        dispatch(searchListaction(data.data.data));
    }
}