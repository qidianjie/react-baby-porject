
// fetch请求数据
// import http from "utils/request";

// export const nationalApi=()=>http.post({
//     method:"post",
//     url:"/shop/es/selectEsbyNationsId",
//     data:{
//         id: "1128905392529760257"
//     }
// })


// axios请求数据
import http from "utils/axiosrequest";

// 国家地区馆
export const nationalApi=(countryId)=>http({
    method:"post",
    url:"/shop/es/selectEsbyNationsId",
    data:{
        id: countryId
    }
})
// 国家地区馆中的明星大牌
export const nationalStarApi=(countryId)=>http({
    method:"post",
    url:"/shop/advList/selectByNation",
    data:{
        countryId: countryId,
        platform: "0"
    }
})
// 育儿百科
export const parentingApi=()=>http({
    method:"post",
    url:"/shop/cms/selectCmsAdvList",
    data:{
        id:""
    }
})

// 育儿百科下的（八个id）
export const getIdApi=()=>http({
    method:"post",
    url:"/shop/cmsCategory/homeCategory",
    data:{}
})

// 育儿百科下的list
export const getDataApi=(id)=>http({
    method:"post",
    url:"/shop/cmsArticle/selectBycategoryId",
    data:{
        categoryId: id,
        currPage: null,
        pageSize: "15"
    }
})


// 我的
export const mineApi=()=>http({
    method:"post",
    url:"/shop/goods/recommendList",
    data:{
        id:""
    }
})

// 疯抢
export const crazyApi=()=>http({
    method:"post",
    url:"/shop/cms/selectGoodsPListByActivityId",
    data:{
        currPage: 1,
        id: "1200422140818493441",
        pageSize: "40"
    }
})


// 育儿百科下list下的article的详情
export const articleApi=(id)=>http({
    method:"post",
    url:"/shop/cmsArticle/selectById",
    data:{
        contentType: "1",
        id:id,
        memberId: ""
    }
})

// 专家讲堂下的视频课程详情
export const courseApi=(courseId)=>http({
    method:"post",
    url:"/shop/cmsArticle/selectById",
    data:{
        contentType: "2",
        id: courseId,
        memberId: ""
    }
})
// 专家讲堂下的视频课程详情中的评论
export const commentApi=(courseId)=>http({
    method:"post",
    url:"/shop/cmsComment/commentList",
    data:{
        currPage: 1,
        originId: courseId,
        pageSize: 10
    }
})

// 发送评论

export const sendApi=(id,value)=>http({
    method:"post",
    url:"/shop/cmsComment/comment",
    data:{
        content:value,
        memberId: "1199957846754594818",
        originId: id,
    }
})

//发送评论
// http://3g.baobeigezi.com/shop/cmsComment/comment
// content: "哈哈哈"
// memberId: 
// "1199957846754594818"
// "1199957846754594818"
// "1199957846754594818"
// originId: "1174636460930764802"
