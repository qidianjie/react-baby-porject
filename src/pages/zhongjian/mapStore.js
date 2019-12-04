import {zhongjianList} from "actions/redenvelopes/redActionCreator.js"
export const mapStateToProps = (state)=>({
    zhongjianList:state.redenvelopes.zhongjianList
})

export const mapDispatchToProps = (dispatch)=>({
    handleZhongjian(){
        dispatch(zhongjianList())
    }
})