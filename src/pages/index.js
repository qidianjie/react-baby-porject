import Loadable from "react-loadable";
import Loading from "common/loading";
// 首页
export const Home = Loadable({
    loader: () => import("./home"),
    loading: Loading
})
// 分类
export const Fenlei = Loadable({
    loader: () => import("./fenlei"),
    loading: Loading
})

export const Order = Loadable({
    loader: () => import("./order"),
    loading: Loading
})
// 我的页面
export const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})
// 登录页面
export const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})
// 搜索页面
export const Search = Loadable({
    loader: () => import("./search"),
    loading: Loading
})
// 全部品牌
export const All = Loadable({
    loader: () => import("./all"),
    loading: Loading
})

// 购物车
export const Cart = Loadable({
    loader: () => import("./cart"),
    loading: Loading
})
// 红包
export const Hongbao = Loadable({
    loader: () => import("./hongbao"),
    loading: Loading
})
//礼包
export const Libao = Loadable({
    loader: () => import("./libao"),
    loading: Loading
})
//品牌
export const Pinpai = Loadable({
    loader: () => import("./pinpai"),
    loading: Loading
})
//抢购
export const Qianggou = Loadable({
    loader: () => import("./qianggou"),
    loading: Loading
})
//规则
export const Rule = Loadable({
    loader: () => import("./rule"),
    loading: Loading
})
//中检溯选
export const Zhongjian = Loadable({
    loader: () => import("./zhongjian"),
    loading: Loading
})
export const Detail=Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})

export const Brand=Loadable({
    loader:()=>import("./brand"),
    loading:Loading
})