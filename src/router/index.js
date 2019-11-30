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
    Pinpai,
    Qianggou,
    Rule,
    Zhongjian
} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页"
    },
    {
        path:"/fenlei",
        component:Fenlei,
        meta:{
            flag:true
        },
        icon:"\ue663",
        text:"发现"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        icon:"\ue737",
        text:"礼物"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"我的"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true,
        },
        // icon:"\ue617",
        // text:"我的"
    },
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
    {
        path:"/pinpai",
        component:Pinpai,
        meta:{},
        // icon:"\ue617",
        // text:"我的"
    },
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
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);