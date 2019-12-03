import {mineAsyncAction} from "actions/national/nationalActionCreators"
export const mapStateToProps=(state)=>({
    mineList:state.national.mineList
})


export const mapDispatchToProps=(dispatch)=>({
    handleAsyncMine(){
        dispatch(mineAsyncAction())
    }
})