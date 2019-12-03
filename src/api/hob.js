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
export const libaoList = (goodsIds="1197477374489268226")=>axios({
    method:"post",
    url:"/shop/goods/selectGoodsListByIds",
    data:{
        goodsIds
    }
    
})
// 中检
export const zhongjianls = ()=>axios({
    method:"post",
    url:"/shop/es/selectGoodsByFirstCategoryId",
    data:{
        currPage: 1,
        id: "1151033537017679874",
        pageSize: 40,
        path: "/1151033537017679874"
    }
    
})
// 品牌详情
export const brandList = (id= "1138348044551458818")=>axios({
    method:"post",
    url:"/shop/es/seletEsBybrandId",
    data:{
        brandId: "",
        currPage: 1,
        goodsType: 0,
        id,
        maxPrice: "",
        minPrice: "",
        nationsId: "",
        pageSize: "40",
        sort: "0"
    }
    
})
// 分类数据
export const handleNaibrand = (id= "1151041137260105729",flag="0")=>axios({
    method:"post",
    url:"/shop/es/selectEsbyThirdCategoryId",
    data:{
        brandId: "",
        currPage: 1,
        goodsType: 0,
        id,
        maxPrice: "",
        minPrice: "",
        nationsId: "",
        pageSize: "40",
        sort: flag
    }
    
})
// 搜索数据
export const searchList = (name)=>axios({
    method:"post",
    url:"/shop/es/selectAssemblyAll",
    data:{
      name
    }
    
})

// 搜索数据跳转
export const searchTiaozhuanList = (id="1176786917191063792")=>axios({
    method:"post",
    url:"/shop/es/selectEsbyAllId",
    data:{
        brandId: "",
        currPage: 1,
        goodsType: 0,
        id: id,
        maxPrice: "",
        minPrice: "",
        nationsId: "",
        pageSize: "40",
        sort: "0",
        type: "1"
    }
    
})
// https://3g.baobeigezi.com/shop/es/selectAllFirstCategory






               