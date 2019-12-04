import {getDataAsyncAction} from "actions/parenting/parentingCreators";
export const mapStateToProps=(state)=>({
    dataList:state.parenting.dataList,
})

export const mapDispatchToProps=(dispatch)=>({
    handleGetData(id){
        dispatch(getDataAsyncAction(id))
    }
})