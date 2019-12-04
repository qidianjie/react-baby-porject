import React from "react";
import {Classify} from "./styled"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'components/classify/mapStore'
import {Link,withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Leibie extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {xinpinList} = this.props;
        console.log(xinpinList);
        return (
            <Classify>
                <div className="header">
                   <span>
                   人气新品 火速围观
                   </span>
                   <a className="iconfont" onClick={this.handleClick.bind(this)}>&#xe605;</a>
                   <i className="iconfont">&#xe75d;</i>
                </div>
            
            {/* 内容 */}
            <div className="main">
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/94fb8988-9892-4bf3-b9c5-a7204cee92ec.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/4c9e3df2-7d70-404a-9272-3147ea94569e.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/dc9c0945-e852-41ea-9ecb-99820efdf0f6.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/dc9c0945-e852-41ea-9ecb-99820efdf0f6.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/dc9c0945-e852-41ea-9ecb-99820efdf0f6.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/dc9c0945-e852-41ea-9ecb-99820efdf0f6.jpg" className="main_top"/>
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/dc9c0945-e852-41ea-9ecb-99820efdf0f6.jpg" className="main_top"/>
               
                {/* 集解 */}
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1d6f9903-1f05-4ad3-988f-51c2a317a630.jpg" className="main_top"/>
                <div className="jijie">
                    <div className="jijie_center">
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/1f1e7eba-43cf-4ba6-9353-68ed4cfb30e7.jpg"/>
                    </div>
                </div>
              
              {/* 抢先购 */}
                <img src="https://imagespro.baobeigezi.com//bbgz2019/brand-image/3d3b0a37-4396-4f47-920d-65dd6228af65.jpg" className="main_top"/>
                <div className="goods">
                    <ul>
                        {
                            xinpinList.map((item,index)=>(
                                 <li key={index}>
                                <img src={item.goodsImage} className="goods_pic"/>
                                    <h5>{item.name}</h5>
                            <p>{item.salePrice}</p>
                                <div>
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1ff74133-c288-4a32-a776-8439a7025ad1.png"/>
                            <span>{item.nationName}</span>
                                    <span>{item.brandName}</span>
                                </div>
                        </li>
                            ))
                        }
                       
                    </ul>
                </div>
            </div>

            </Classify>
        )
}
handleClick(){
    this.props.history.goBack();
}
    componentDidMount(){
        this.props.handleXinpin()
    }
}
export default Leibie

