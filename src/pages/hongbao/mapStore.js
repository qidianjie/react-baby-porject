import {handleRed} from "actions/redenvelopes/redActionCreator.js"
export const mapStateToProps = (state)=>({
    redenvelopesList:state.redenvelopes.redenvelopesList
})

export const mapDispatchToProps = (dispatch)=>({
    handleredenvelopes(){
        dispatch(handleRed())
    }
})