import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class Rule extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont" onClick={this.handleClickBack.bind(this)}>&#xe605;</a>
                    <span>活动规则</span>
                </div>
                </div>

                {/* 内容 */}
                <div className="main">
                    <div className="main_content">
                        <h1>活动规则</h1>
                        <p>1.活动时间：2019年10月1日-2019年11月1日。</p>
                        <p>2.邀请者每邀请1名未在宝贝格子注册过（简称“新用户”），邀请者即可获得佣金奖励。</p>
                        <p>3.被邀请者若为老用户，则邀请者无法获得佣金奖励。</p>
                        <p>4.同一用户指：同一手机号、同一设备、同一IP地址等满足任一条件或其它可视为同一用户的情形。</p>
                        <p>5.170、171、147等小运营商和虚拟运营商手机号注册的账号暂不能参加此活动。</p>
                        <p>7.用户经宝贝格子判断存在违背诚实信用原则的行为，用户将面临无法获取红包奖励、已获取的红包被收回或被限制使用的情形，具体如下：</p>
                        <p>2）通过任何不正当手段或以违反诚实信用原则的方式参与活动或达成交易的。</p>
                        <p>3）用户被认为存在违反服务提供方的相关协议或规则的行为，或已经被商品或服务提供方限制接受服务或购买商品的权利。</p>
                        <p>4）《宝贝格子》规定的其他违规行为。</p>
                        <p>8.宝贝格子可以根据活动的情况对活动规则进行变动或调整，相关变动或调整将公布在活动页面上，公布后依法生效。</p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </Classify>
            </PageContainer>
        )
}
handleClickBack(){
    this.props.history.goBack()
}
}
export default Rule

