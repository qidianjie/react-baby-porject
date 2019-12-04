import {courseAsyncAction,commentAsyncAction,sendAsyncAction} from "actions/parenting/parentingCreators";
export const mapStateToProps=(state)=>({
    course:state.parenting.course,
    commentList:state.parenting.commentList,
    send:state.parenting.send,
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
    }
})