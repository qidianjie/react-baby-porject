import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class Cart extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont">&#xe605;</a>
                    <span>购物车</span>
                    <i>编辑</i>
                </div>
                </div>

                {/* 购物车 */}
                <div className="cart">
                    <div className="tixing">   在清关中产生的税费及手续费需要收件人缴纳，请知悉！
                    </div>

                {/* 购物车列表 */}
                    <div className="cart_item">
                    <div className="cart_item_radio">
                        <input type="radio"/>
                    </div>
                    <div className="cart_item_content">
                        <img src="https://imagespro.baobeigezi.com/houniao/images/goods-main/372005900034e358f47173adc3d3df36.jpg"/>
                        <div className="cart_item_right">
                            <h5>Kiehl’s科颜氏</h5>
                            <p>【香港直邮】美国Kiehl's科颜氏 夜间修护精华液30ml</p>
                            <div className="cart_item_price">
                                <div className="cart_item_price_left">
                                    <span>1个装</span>
                                    <i>￥368.00</i>
                                </div>
                                <p>
                                    <a>-</a>
                                    <input type="text" defaultValue="0" />
                                    <a>+</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* 购物车背景 */}
                <div className="bg">
                    <img src="http://3g.baobeigezi.com/imgs/default/gouwuchequesheng2x.png"/>
                    <span>更多好货等你来选</span>
                </div>

                {/* 购物件数 */}
                    <div className="goodsList_count">
                        <p>已选购<span>0</span>件</p>
                    </div>

                {/* 结算功能 */}
                <div className="play">
                    <input type="radio"/>
                    <p>总计金额:
                        <span>￥0.00</span>
                    </p>
                    <div>去结算(<i>0</i>)</div>
                </div>
               

                    <div className="goods">
                    <h5>大家都在看</h5>
                    <ul>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                        <li>
                            <img src="http://id.baoimg.net/share-img/photo/201905/5ce5f58c28950.png"/>
                            <h6>【保税仓】SP340-宠飞扬喵趣饼干金枪鱼+蟹黄+猫薄荷70g</h6>
                            <p>￥26.00</p>
                        </li>
                    </ul>
                </div>
                </div>

               
               

            </Classify>
            </PageContainer>
        )
}
}
export default Cart

