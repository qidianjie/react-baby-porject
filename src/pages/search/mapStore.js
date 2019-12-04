import {handleSearch} from "actions/redenvelopes/redActionCreator.js"
export const mapStateToProps = (state)=>({
    searchList:state.redenvelopes.searchList || []
})

export const mapDispatchToProps = (dispatch)=>({
    handleSearchLs(val){
        dispatch(handleSearch(val))
    }
})