import {courseAsyncAction,commentAsyncAction,sendAsyncAction,zanAsyncAction} from "actions/parenting/parentingCreators";
// import {zanAddAction} from "store";
export const mapStateToProps=(state)=>({
    course:state.parenting.course,
    commentList:state.parenting.commentList,
    send:state.parenting.send,
    dianzan:state.parenting.zan,
})

export const mapDispatchToProps=(dispatch)=>({
    handleCourse(courseId){
        dispatch(courseAsyncAction(courseId))
    },
    handleComment(courseId){
        dispatch(commentAsyncAction(courseId))
    },
    // // 发送评论
    sendComment(id,value){
        dispatch(sendAsyncAction(id,value))
    },
    // 点赞
    handlezan(zanId){
        dispatch(zanAsyncAction(zanId));
    }
})