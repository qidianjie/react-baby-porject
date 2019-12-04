
import {nationAsyncAction,starAsyncAction} from "actions/national/nationalActionCreators"
export const mapStateToProps=(state)=>({
    national:state.national.national_list,
    advList:state.national.advList
})

export const mapDispatchToProps=(dispatch)=>({
    handleAsyncNation(countryId){
        dispatch(nationAsyncAction(countryId))
    },
    starAsyncNational(countryId){
        dispatch(starAsyncAction(countryId))
    }
})