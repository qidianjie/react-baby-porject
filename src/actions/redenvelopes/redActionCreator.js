import {redenvelopesType,libaoActionType} from "./redActionType"
import {redenvelopes,libaoList} from "api/hob.js"
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
export const libaoAction = ()=>{

    let libaoActionList = (data)=>({
        type:libaoActionType,
        data
    })
    return async (dispatch)=>{
        let data = await libaoList();
        // console.log(data.data.data);
        dispatch(libaoActionList(data.data.data))
    }
}