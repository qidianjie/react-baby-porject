// import http from "utils/request.js"
import axios from "axios"

export const NavCaidan = ()=>axios({
    method:"post",
    url:"/shop/es/selectAllFirstCategory",
    data:{
        categoryType: 2
    }
})
export const goodsList = (id="1154573626486296577",path="/1154573626486296577")=>axios({
    method:"post",
    url:"/shop/es/selectEsByFirstCategory",
    data:{
        id,
        path
    }
})
// 品牌
export const pinpaiList = ()=>axios({
    method:"post",
    url:"/shop/es/selectEsAllFilterBrandList",
    data:{
        type:"1"
    }
})

// 免费红包
export const redenvelopes = ()=>axios({
    method:"post",
    url:"/shop/memberInvite/topTen",
    data:{
        currPage: 1,
        id: "1200422140818493441",
        pageSize: "40"
    }
})
// 礼包
export const libaoList = ()=>axios({
    method:"post",
    url:"/shop/goods/selectGoodsListByIds",
    data:{
        goodsIds:'1197477374489268226'
    }
    
})
// https://3g.baobeigezi.com/shop/es/selectAllFirstCategory






               