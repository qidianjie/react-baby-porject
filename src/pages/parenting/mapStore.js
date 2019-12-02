import {parentingAction} from "actions/parenting/parentingCreators"
export const mapStateToProps=(state)=>({
    list:state.parenting.parentingList,
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncParenting(){
        dispatch(parentingAction())
    }
})