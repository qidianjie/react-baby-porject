import {articleAction} from "actions/parenting/parentingCreators";
export const mapStateToProps=(state)=>({
    article:state.parenting.article,
})

export const mapDispatchToProps=(dispatch)=>({
    handleArticle(id){
        dispatch(articleAction(id))
    }
})

