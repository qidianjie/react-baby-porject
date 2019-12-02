import {handleActions} from "redux-actions";

import {parentingType} from "actions/parenting/parentingTypes";
const defaultState={
    parentingList:[]
}

export default handleActions({
    [parentingType]:(state,action)=>{
        let parentingState=JSON.parse(JSON.stringify(state));
        parentingState.parentingList=action.payload;
        return parentingState;
    }
},defaultState)
