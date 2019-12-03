import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {handleredenvelopes} from "./mapStore"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class Hongbao extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {redenvelopesList} = this.props;
        console.log(redenvelopesList);
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <i className="iconfont"  onClick={this.handleClickBack.bind(this)}>&#xe605;</i>
                    <span>邀请好友</span>
                    <a className="iconfont" onClick={this.handleClickRule.bind(this)}>活动规则</a>
                </div>
                </div>
                <div className="main">
                    <div className="hongbao">
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text1.png" className="rule" alt=""/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text2@2x.png" className="rule" alt=""/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/btn@2x.png" className="liji" alt=""/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/text3@2x.png" className="hand" alt=""/>
                    
                    {/* 立享红包 */}
                    <div className="hongbao_yaoqing">
                        <ul>
                              <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png" alt=""/>
                                <p>
                                    邀请好友<br/>
                                    瓜分红包
                                </p>
                            </li>
                            <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png" alt=""/>
                                <p>
                                    好友注册你将获<br/>得<br/>百元红包
                                </p>
                            </li>
                            <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png" alt=""/>
                                <p>
                                好友立得新人礼<br/>包<br/>
                                再得百元随机红<br/>包
                                </p>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/text4@2x.png" className="bangdan" alt=""/>
                    
                    {/* 邀请榜单 */}
                    <div className="bangdan_top">
                        <div className="bangdan_top_top">
                            <span>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/point@2x.png" alt=""/>
                                邀请TOP榜
                            </span>
                            <span>我的邀请记录</span>
                        </div>
                        <div className="bangdan_bottom">
                            <ul>
                                <li>
                                    <span>用户昵称</span>
                                    <span>邀请数量</span>
                                </li>
                                {
                                    redenvelopesList.map((item,index)=>(
                                        <li key={index}>
                                    <img src={item.shareImage} alt=""/>
                                     <p>{item.shareName}</p>
                                     <span>{item.shareNum}人</span>
                                         </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                         {/* 会员 */}
                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text3@2x.png" className="vip" alt=""/>
                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/last@2x.png" className="shuoming" alt=""/>
                    </div>
                </div>

            </Classify>
            </PageContainer>
        )
}
            componentDidMount(){
                this.props.handleredenvelopes()
            }
            handleClickRule(){
                this.props.history.push("/rule");
            }
            handleClickBack(){
                this.props.history.goBack()
            }
}
export default Hongbao

