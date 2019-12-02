import {crazyAction} from "actions/national/nationalActionCreators";
export const mapStateToProps=(state)=>({
    crazyList:state.national.crazyList
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncCrazy(){
        dispatch(crazyAction())
    }
})