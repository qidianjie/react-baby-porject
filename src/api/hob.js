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
export const brandList = (id= "1138348044551458818",sort="0")=>axios({
    method:"post",
    url:"/shop/es/seletEsBybrandId",
    data:{
        brandId: "",
        currPage:"1",
        goodsType: 0,
        id,
        maxPrice: "",
        minPrice: "",
        nationsId: "",
        pageSize: "40",
        sort
    }
    
})
// 分类数据
export const handleNaibrand = (id= "1151041137260105729",sort="0",currPage="1")=>axios({
    method:"post",
    url:"/shop/es/selectEsbyThirdCategoryId",
    data:{
        brandId: "",
        currPage,
        goodsType: 0,
        id,
        maxPrice: "",
        minPrice: "",
        nationsId: "",
        pageSize: "40",
        sort
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
// 新品速递
export const xinpinList = (goodsIds="1201438503653609474,1201411430964793345,1201402764421238786,1201097753623531522,1201095420374159362,1201044971331784706,1201039845657415682,1201019193315561473,1200994374607966210,1200986064286650369,1200834576847474690,1200702208044175362,1200409413832151042,1200398544251392002,1200395990708785154,1200392269761351681,1200379306799271938,1200376801201754113,1200376288221597698,1200374952696483842,1200373634762280962,1200372237341822978,1200369884718960641,1200366059777953793,1200365452744724481,1200362810157043713,1200360170924806146,1200359952925855746,1200355751118245890,1200352698990333953,1200350921062617090,1200348178403037186,1200348026716033026,1200344631611494402,1200342358160314370")=>axios({
    method:"post",
    url:"/ajax/shop/goods/selectGoodsListByIds",
    data:{
        goodsIds: goodsIds,
    }
    
})
// https://3g.baobeigezi.com/shop/es/selectAllFirstCategory






               