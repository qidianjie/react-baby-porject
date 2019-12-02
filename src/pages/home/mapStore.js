import {homeAsyncAction,selectAllAsyncAction,qiangAsyncAction,goodsAsyncAction} from 'actions/home/homeActionCreators'
export const mapStateToProps=(state)=>({
        advList:state.home.advList,
        selectAll:state.home.selectAll,
        time:state.home.qiangList.endTime,
        qiangList:state.home.qiangList.goodsList,
        goodsList:state.home.goodsList
})
export const mapDispatchToProps=(dispatch)=>({
    handleAsyncData(){
        dispatch(homeAsyncAction())
    },
    selectAllAsyncData(){
        dispatch(selectAllAsyncAction());
    },
    qiangAsyncData(){
        dispatch(qiangAsyncAction());
    },
    goodsAsyncData(item){
        dispatch(goodsAsyncAction(item));
    }

})