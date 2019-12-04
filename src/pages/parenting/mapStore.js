import {parentingAction,getIdAction} from "actions/parenting/parentingCreators"
export const mapStateToProps=(state)=>({
    list:state.parenting.parentingList,
    idArr:state.parenting.idArr,
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncParenting(){
        dispatch(parentingAction())
    },
    handleAsyncGetId(){
        dispatch(getIdAction())
    }
})
