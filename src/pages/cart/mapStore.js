import {recommendListAsyncAction} from "actions/detail/detailActionCreators"

export const mapStateToProps=(state)=>({
    recommendList:state.detail.recommendList
})

export const mapDispatchToProps=(dispatch)=>({
    recommendListAsyncData(){
        dispatch(recommendListAsyncAction())
    }
})