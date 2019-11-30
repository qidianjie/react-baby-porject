import b from '../assets/image/home.png'
import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Detail,
    Brand
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
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        icon:"https://3g.baobeigezi.com/imgs/indexIcon/fen.png",
        text:"分类"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        icon:"https://3g.baobeigezi.com/imgs/indexIcon/car.png",
        text:"购物车"
    },
    {
        path:"/mine",
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
    {//商品详情
        path:"/detail",
        component:Detail,
        meta:{}
    },
    {//品牌详情
        path:"/brand",
        component:Brand,
        meta:{}
    }
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);