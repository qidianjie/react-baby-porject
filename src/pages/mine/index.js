import React from "react";
import {MineContainer} from "./styled";

import {withRouter,Link} from "react-router-dom";


import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Mine extends React.Component{
    constructor(props){
        super(props);

        this.state={
            money:[
                {
                    icon:"\ue64b",
                    text:"余额"
                },
                {
                    icon:"\ue61e",
                    text:"卡券"
                },
                {
                    icon:"\ue644",
                    text:"种草"
                },
                {
                    icon:"\ue63e",
                    text:"收货地址"
                },

            ],
            status:[
                {
                    icon:"\ue617",
                    text:"待付款"
                },
                {
                    icon:"\ue68e",
                    text:"待发货"
                },
                {
                    icon:"\ue621",
                    text:"待收货"
                },
                {
                    icon:"\ue625",
                    text:"已完成"
                },
                {
                    icon:"\ue64b",
                    text:"退款/售后"
                }
            ],
            info:[
                {
                    icon:"\ue622",
                    text:"我的拼团",
                    right:"\ue715"
                },
                {
                    icon:"\ue638",
                    text:"客服帮助",
                    right:"\ue715"
                },
                {
                    icon:"\ue629",
                    text:"身份证信息",
                    right:"\ue715"
                },
                {
                    icon:"\ue665",
                    text:"支付密码",
                    right:"\ue715"
                },
                {
                    icon:"\ue695",
                    text:"微信官方服务号",
                    right:"\ue715"
                },
            ],
            neme:"",

        }
        this.state.name=this.props.match.params.name
    }
    render(){
        let {mineList} =this.props;
        let {money,status,info} =this.state;
        // console.log(this.state.name)
        return (
            <MineContainer>
                <div className="header">
                    <span className="iconfont">&#xe605;</span>
                    <span className="iconfont">&#xe638;</span>
                </div>
                {/* login and register */}
                <div className="login">
                    <div className="name_img"><img src="http://3g.baobeigezi.com/imgs/default/headImg.png" alt=""/></div>
                    {
                        this.state.name.length==0?<span>登录</span>|
                        <span>注册</span>:<span>{this.state.name}</span>
                    }
                    
                </div>
                {/* 余额 */}
                <div className="money">
                    <ul>
                        {
                            money.map((item,index)=>(
                                <li key={index}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* 我的订单 */}
                <div className="order">
                    <p>
                        <span>我的订单</span>
                        <span className="iconfont">&#xe715;</span>
                    </p>
                    <ul>
                        {
                            status.map((item,idx)=>(
                                <li key={idx}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* 我的拼团 */}
                <div className="info">
                    {
                        info.map((item,indexs)=>(
                            <li key={indexs}>
                                <i className="iconfont">{item.icon}</i>
                                <p>{item.text}</p>
                                <span className="iconfont">{item.right}</span>
                            </li>
                        ))
                    }
                </div>
                <div className="all_look">大家都在看</div>
                {/* 大家都在看 */}
                <ol>
                    {
                        (mineList?mineList:[]).map((item)=>(
                            <Link className="mine_li" to={"/detail?id="+item.id} key={item.id}>
                                <div className="goods_img">
                                    <img src={item.mainImg} alt=""/>
                                </div>
                                <p>{item.name}</p>
                                <span>￥{item.salePrice}</span>
                            </Link>
                        ))
                    }
                </ol>
            </MineContainer>
        )
    }
    componentDidMount(){
        this.props.handleAsyncMine();
    }
}

export default Mine;
