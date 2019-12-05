// import b from '../assets/image/home.png'
import {
    Home,
    Fenlei,
    Order,
    Mine,
    Login,
    Search,
    All,
    Cart,
    Hongbao,
    Libao,
    // Pinpai,
    Qianggou,
    Rule,
    Zhongjian,
    Detail,
    Brand,
    National,
    Parenting,
    BaikeList,
    Article,
    CourseDetail,
    BrandList,
    Xinpin
} from "pages"



export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        //
        icon:"http://3g.baobeigezi.com/imgs/indexIcon/home.png",
        text:"首页"
    },
    {
        path:"/fenlei",
        component:Fenlei,
        meta:{
            flag:true
        },
        icon:"https://3g.baobeigezi.com/imgs/indexIcon/fen.png",
        text:"分类"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"https://3g.baobeigezi.com/imgs/indexIcon/car.png",
        text:"购物车"
    },
    {
        path:"/mine/:name",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"https://3g.baobeigezi.com/imgs/indexIcon/my.png",
        text:"我的"
    }
];


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {
        path:"/all",
        component:All,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {
        path:"/hongbao",
        component:Hongbao,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {
        path:"/libao",
        component:Libao,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    // {
    //     path:"/pinpai",
    //     component:Pinpai,
    //     meta:{},
    //     // icon:"\ue617",
    //     // text:"我的"
    // },
    {
        path:"/qianggou",
        component:Qianggou,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {
        path:"/rule",
        component:Rule,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {
        path:"/zhongjian",
        component:Zhongjian,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
    {//商品详情
        path:"/detail",
        component:Detail,
        meta:{}
    },
    {//品牌详情
        path:"/brand/:id/:name",
        component:Brand,
        meta:{}
    },
    {//国家地区馆
        path:"/national",
        component:National,
        meta:{}
    },
     {//育儿百科
        path:"/parenting",
        component:Parenting,
        meta:{}
    },
    {//百科list
        path:"/baikeList",
        component:BaikeList,
        meta:{}
    },
    {//article
        path:"/article",
        component:Article,
        meta:{}
    },
    {//课程详情
        path:"/courseDetail",
        component:CourseDetail,
        meta:{}
    },
    {//品牌列表
        path:"/pinpailist/:id",
        component:BrandList,
        meta:{}
    },
    {//品牌列表
        path:"/xinpin",
        component:Xinpin,
        meta:{}
    }
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);