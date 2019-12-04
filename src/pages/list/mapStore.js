import {handlePinpaiLs} from "actions/redenvelopes/redActionCreator.js"
export const mapStateToProps = (state)=>({
    brandList: state.redenvelopes.brandList
})

export const mapDispatchToProps = (dispatch)=>({
    handlePinpaiList(id){
        dispatch(handlePinpaiLs(id));
    }
})