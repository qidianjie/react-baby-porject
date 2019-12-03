import {detailAsyncAction,goodsCommentAsyncAction,recommendListAsyncAction} from "actions/detail/detailActionCreators"

export const mapStateToProps=(state)=>({
    good:state.detail.goodDetail,
    comment:state.detail.commentList,
    recommendList:state.detail.recommendList
})

export const mapDispatchToProps=(dispatch)=>({
    
    detailAsyncData(id){
        dispatch(detailAsyncAction(id));
    },
    goodsCommentAsyncData(id){
        dispatch(goodsCommentAsyncAction(id))
    },
    recommendListAsyncData(){
        dispatch(recommendListAsyncAction())
    }

})


