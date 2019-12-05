import {parentingAction,getIdAction} from "actions/parenting/parentingCreators"
export const mapStateToProps=(state)=>({
    list: JSON.parse(localStorage.getItem("parenting"))||state.parenting.parentingList,
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
