import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom' ;
import {throttle} from "common/throttle"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class Libao extends React.Component{
    constructor(){
        super();
        this.state={
            list:["1197477374489268226","1197472267278225410","1197468156386349057","1197464727941287938","1192010076055932930","1192001102912950273","1191992819858804738","1191986176957878273","1191995432931168258","1191981526334574593","1191984469586743297","1191987732407128065", "1191991005323202562"]
        }
    }
    render(){
        let {libaoListls} = this.props;
        return (
            <PageContainer onScroll={this.handleScroll.bind(this)}>
            <Classify>
                <div className="header">
                   <span>
                       宝贝一品 全球精选
                   </span>
                   <a className="iconfont">&#xe605;</a>
                   <i className="iconfont">&#xe75d;</i>
                </div>
                <div className="content" >
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1a722f46-9504-4dfc-a4c0-c1d2867a7ec7.jpg" className="pic" alt=""></img>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/bf27993f-a528-4be0-ac57-77129d13fe31.jpg" className="pic"alt=""></img>
                    
                {
                    libaoListls.map((item,index)=>(
                        <div className="content_item" key={index} >
                        <img  src={item.goodsImage} alt=""/>
                        <div className="content_item_type">
                            <h5>分享赚￥150元精心挑选 {item.brandName}</h5>
                            <p>{item.name}</p>
                            <div className="content_item_bottom">
                                <i>{item.salePrice}</i>
                                <del>{item.marketPrice}</del>
                            </div>
                            <span>立即购买</span>
                        </div>
                    </div>
                    ))
                }
                </div>
                <div className="goods_pic">
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/65e81fc6-65df-429b-8036-4f2491ccdaf0.jpg" alt=""/>
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/a00fc677-ad18-4653-be40-63c518c2ee06.jpg" alt=""/>
                    <img src="http://imagespro.baobeigezi.com//bbgz2019/brand-image/85a508d4-baf8-4a7c-a2a0-c542e2810939.jpg" alt=""/>
                </div>
            </Classify>
            </PageContainer>
        )
}
        componentDidMount(){
            window.addEventListener('scroll', this.handleScroll.bind(this));
            this.props.libaoList();
        }
        handleScroll(){
            var firstTime = 0;
            return function(){
                var lastTime = new Date().getTime();
                if(lastTime - firstTime > 300){
                    console.log("111");
                    firstTime = lastTime;
                }
            }


            // throttle(this.handle.bind(this),600)
            // setTimeout(()=>{
            //     
            // },600)
            
        }
        handle(){
            console.log("111");
        }
}
export default Libao
