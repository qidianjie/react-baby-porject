import {detailAsyncType} from './detailActionTypes'
import {goodsDetailApi} from '../../api/shopCenter'

import {createAction} from 'redux-actions'


export const detailAsyncAction=(id)=>{
    let detailAction=createAction(detailAsyncType,(data)=>data);

    return async (dispatch)=>{
        let  data=await goodsDetailApi(id);
            // console.log(data.data.data);
        dispatch(detailAction(data.data.data))
    }
}