import {classAsyncAction,goodslistAction,pinpaiListAction} from "actions/classify/classActionCreator.js"
export const mapStateToProps = (state)=>({
    caidanList:(state.classify.caidanList?state.classify.caidanList:[]),
    goodsList: JSON.parse(localStorage.getItem('goodsList')) || state.classify.goodsList,
    pinpaiListls:JSON.parse(localStorage.getItem('pinpai')) || state.classify.pinpaiList
})

export const mapDispatchToProps = (dispatch)=>({
    handleClassAsync(){
        dispatch(classAsyncAction());
    },
    // 请求商品数据
    GetAsyncGoodslist(id,path){
        // if(!localStorage.getItem("goodsList")){
            dispatch(goodslistAction(id,path))
        // }
        
    },
    pinpaiList(){
        if(!localStorage.getItem("pinpai")){
            dispatch(pinpaiListAction())
        }
    }
})