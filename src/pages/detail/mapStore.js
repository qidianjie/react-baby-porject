import {detailAsyncAction} from "actions/detail/detailActionCreators"

export const mapStateToProps=(state)=>({
    good:state.detail.goodDetail
    // good:state.detail.goodDetailgood.goodsDetail.goodsPriceDetail.skuList
})

export const mapDispatchToProps=(dispatch)=>({
    
    detailAsyncData(id){
        dispatch(detailAsyncAction(id));
    }
})


