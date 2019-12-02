// import http from 'utils/request'

// export const advListApi = (code="P12",platform="0") => http.post({
//     url: "/shop/advList/list",
//     method:"post",
//     data: {
//         code:code,
//         platform:platform
//     }
// })
import axios from 'axios'

export const advListApi = () => axios({
    method: "post",
    url: "/shop/advList/list",
    data: {
        code: "P12",
        platform: "0"
    }
})

//首页里面的限时抢购
export const cmsApi = () => axios({
    method: "post",
    url: "/shop/cms/selectSecKillActivity",
    data: {
    }
})


//导航栏
export const selectAllApi = (categoryType = 1) => axios({
    method: "post",
    url: "/shop/es/selectAllFirstCategory",
    data: {
        categoryType
    }
})


//下面的商品的列表
export const selectGoodsApi = (currPage = 1,id = "1154573626486296577",path = "/1154573626486296577") => axios({
        method: "post",
        url: "shop/es/selectGoodsByFirstCategoryId",
        data: {
            currPage: currPage,
            id: id,
            pageSize: "40",
            path: path,
        }

    })







    //商品详情 /shop/goods/goodsDetail shop/goods/goodsDetail

    export const goodsDetailApi = (id) => axios({
        method: "post",
        url: "/shop/goods/goodsDetail",
        data: {
            id,
            memberId: "",
            reqSource: 1,
            source: 2
        }

    })