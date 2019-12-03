import {handleActions} from "redux-actions"
import {redenvelopesType,libaoActionType} from "actions/redenvelopes/redActionType"

const defaultState = {
    redenvelopesList:[],
    libaoList:[]
}

export default handleActions({
    [redenvelopesType]:(state,action)=>{
        let classifyState = JSON.parse(JSON.stringify(state));
        classifyState.redenvelopesList = action.data;
        // console.log(classifyState);
        return classifyState;
    },
    [libaoActionType]:(state,action)=>{
        let libaoState = JSON.parse(JSON.stringify(state));
        libaoState.libaoList = action.data;
        // console.log(classifyState);
        return libaoState;
    },
    
},defaultState)