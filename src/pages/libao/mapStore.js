import {libaoAction} from "actions/redenvelopes/redActionCreator.js"
export const mapStateToProps = (state)=>({
    libaoListls: state.redenvelopes.libaoList
})

export const mapDispatchToProps = (dispatch)=>({
    libaoList(id){
        dispatch(libaoAction(id));
    }
})