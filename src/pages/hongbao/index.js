import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class Hongbao extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <i className="iconfont">&#xe605;</i>
                    <span>邀请好友</span>
                    <a className="iconfont">活动规则</a>
                </div>
                </div>
                <div className="main">
                    <div className="hongbao">
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text1.png" className="rule"/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text2@2x.png" className="rule"/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/btn@2x.png" className="liji"/>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/text3@2x.png" className="hand"/>
                    
                    {/* 立享红包 */}
                    <div className="hongbao_yaoqing">
                        <ul>
                              <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png"/>
                                <p>
                                    邀请好友<br/>
                                    瓜分红包
                                </p>
                            </li>
                            <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png"/>
                                <p>
                                    好友注册你将获<br/>得<br/>百元红包
                                </p>
                            </li>
                            <li>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/share@2x.png"/>
                                <p>
                                好友立得新人礼<br/>包<br/>
                                再得百元随机红<br/>包
                                </p>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/text4@2x.png" className="bangdan"/>
                    
                    {/* 邀请榜单 */}
                    <div className="bangdan_top">
                        <div className="bangdan_top_top">
                            <span>
                                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao/point@2x.png"/>
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
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                                <li>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png"/>
                                    <p>BG_33106007</p>
                                    <span>336人</span>
                                </li>
                            </ul>
                        </div>
                         {/* 会员 */}
                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/text3@2x.png" className="vip"/>
                <img src="http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/last@2x.png" className="shuoming"/>
                    </div>
                </div>

            </Classify>
            </PageContainer>
        )
}
}
export default Hongbao

