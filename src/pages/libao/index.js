import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class Libao extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="header">
                   <span>
                       宝贝一品 全球精选
                   </span>
                   <a className="iconfont">&#xe605;</a>
                   <i className="iconfont">&#xe75d;</i>
                </div>
                <div className="content">
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1a722f46-9504-4dfc-a4c0-c1d2867a7ec7.jpg" className="pic"></img>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/bf27993f-a528-4be0-ac57-77129d13fe31.jpg" className="pic"></img>
                    <div className="content_item">
                        <img  src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/8874bd93-f66b-44e0-8d2e-3ae440c45180.jpg"/>
                        <div className="content_item_type">
                            <h5>分享赚￥150元精心挑选 80年古藤葡萄粒西酿造</h5>
                            <p>【国内直发】古藤80年干红葡萄酒750ML/瓶 + 欧瑞安古藤干红葡萄酒750ML/瓶</p>
                            <div className="content_item_bottom">
                                <i>￥797.00</i>
                                <del>￥1960.00</del>
                            </div>
                            <span>立即购买</span>
                        </div>
                    </div>
                    <div className="content_item">
                        <img  src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/8874bd93-f66b-44e0-8d2e-3ae440c45180.jpg"/>
                        <div className="content_item_type">
                            <h5>分享赚￥150元精心挑选 80年古藤葡萄粒西酿造</h5>
                            <p>【国内直发】古藤80年干红葡萄酒750ML/瓶 + 欧瑞安古藤干红葡萄酒750ML/瓶</p>
                            <div className="content_item_bottom">
                                <i>￥797.00</i>
                                <del>￥1960.00</del>
                            </div>
                            <span>立即购买</span>
                        </div>
                    </div>
                    <div className="content_item">
                        <img  src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/8874bd93-f66b-44e0-8d2e-3ae440c45180.jpg"/>
                        <div className="content_item_type">
                            <h5>分享赚￥150元精心挑选 80年古藤葡萄粒西酿造</h5>
                            <p>【国内直发】古藤80年干红葡萄酒750ML/瓶 + 欧瑞安古藤干红葡萄酒750ML/瓶</p>
                            <div className="content_item_bottom">
                                <i>￥797.00</i>
                                <del>￥1960.00</del>
                            </div>
                            <span>立即购买</span>
                        </div>
                    </div>
                </div>
                <div className="goods_pic">
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/65e81fc6-65df-429b-8036-4f2491ccdaf0.jpg"/>
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/a00fc677-ad18-4653-be40-63c518c2ee06.jpg"/>
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/85a508d4-baf8-4a7c-a2a0-c542e2810939.jpg"/>
                </div>
            </Classify>
            </PageContainer>
        )
}
}
export default Libao

