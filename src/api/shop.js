
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
export const nationalApi=()=>http({
    method:"post",
    url:"/shop/es/selectEsbyNationsId",
    data:{
        id: "1128905253744435201"
    }
})
// 国家地区馆中的明星大牌
export const nationalStarApi=()=>http({
    method:"post",
    url:"/shop/advList/selectByNation",
    data:{
        countryId: "1128905253744435201",
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