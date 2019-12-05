import { homeAsyncType, selectAsyncType, qiangAsyncType, selectGoodsAsyncType } from './homeActionTypes'
import { advListApi, selectAllApi, cmsApi, selectGoodsApi } from 'api/shopCenter'
import { createAction } from "redux-actions"


export const homeAsyncAction = () => {
    // let homeAction = (data) => ({
    //     type: homeAsyncType,
    //     data
    // })

    let homeAction=createAction(homeAsyncType,(data)=>data);

    return async (dispatch) => {
        let data = await advListApi();
        // console.log(data.data.data.advList);
        dispatch(homeAction(data.data.data.advList))
    }
}

export const selectAllAsyncAction = () => {
    let selectAllAction = (data) => ({
        type: selectAsyncType,
        data
    })

    return async (dispatch) => {
        let data = await selectAllApi();
        // console.log(data.data.data);
        dispatch(selectAllAction(data.data.data))
    }
}

export const qiangAsyncAction = () => {//限时抢购
    let qiangAction = (data) => ({
        type: qiangAsyncType,
        data: data
    })

    return async (dispatch) => {
        let data = await cmsApi();
<<<<<<< HEAD
        // console.log(data.data);
=======
>>>>>>> 8ef5bfc14e84865ea4270eff38ffe75fe0bffaac
        dispatch(qiangAction(data.data.data))
        // dispatch(qiangAction(data.data))
    }
}
export const goodsAsyncAction = (item) => {
    let goodsAction = (data) => ({
        type: selectGoodsAsyncType,
        data:data,
        flag:item.flag
    })
    return async (dispatch) => {
        let data = await selectGoodsApi(item.currPage, item.id, item.path);

        // localStorage.setItem("goods",JSON.stringify(data.data.data.goodsList));

        dispatch(goodsAction(data.data.data.goodsList,item.flag))
    }
}






