import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter,NavLink} from "react-router-dom"
import { Modal} from 'antd-mobile';
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class Zhongjian extends React.Component{
    constructor(){
        super();
    }
    render(){
        const alert = Modal.alert;
        let {zhongjianList} = this.props;
        return (
            <PageContainer>
            <Classify>
                <div className="header">
                   <span>
                       中检溯选
                   </span>
                   <a className="iconfont" onClick={this.handleClose.bind(this)}>&#xe605;</a>
                   <button className="iconfont" onClick={() =>
                            alert('温馨提示', '此页面暂未提供分享！', [
                                { text: '取消'},
                                { text: '确定'},
                                ])}
                            >&#xe75d;
                    </button>
                </div>
               <div className="main">
                   <img src="https://sale.baobeigezi.com/2019/zj2/imgs/banner2.jpg" className="banner" alt="" />
                   <div className="main_content">
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/jindu.jpg" className="banner"  alt=""/>
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/1.jpg" className="banner"  alt=""/>
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/2.jpg" className="banner" alt=""/>
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/3.jpg" className="banner" alt=""/>
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/3.jpg" className="banner" alt=""/>
                       <img src="https://sale.baobeigezi.com/2019/zj2/imgs/3.jpg" className="banner" alt=""/>
                       
                       <div className="hongtang">
                             <img src="http://sale.baobeigezi.com/2019/zj2/imgs/bg1.png" className="banner" alt=""/>
                             <ul>
                                 <li>
                                 <img src="http://sale.baobeigezi.com/2019/zj2/imgs/105718.png" className="banner" alt=""/>
                                 <h6> 贝哝红糖 红糖姜茶 老姜汤手工老红糖黑糖块 枸杞黑糖（320g罐装）</h6>
                                 <p>￥58.00</p>
                                 </li>
                                 <li>
                                 <img src="http://sale.baobeigezi.com/2019/zj2/imgs/105718.png" className="banner" alt=""/>
                                 <h6> 贝哝红糖 红糖姜茶 老姜汤手工老红糖黑糖块 枸杞黑糖（320g罐装）</h6>
                                 <p>￥58.00</p>
                                 </li>
                                 <li>
                                 <img src="http://sale.baobeigezi.com/2019/zj2/imgs/105718.png" className="banner" alt=""/>
                                 <h6> 贝哝红糖 红糖姜茶 老姜汤手工老红糖黑糖块 枸杞黑糖（320g罐装）</h6>
                                 <p>￥58.00</p>
                                 </li>
                             </ul>
                       </div>
                     

                    <div className="goods">
                       <div className="goods_title">
                       <img src="http://sale.baobeigezi.com/2019/zj2/imgs/tit.png" alt=""/>
                       </div>
                       <ul>
                                 {
                                     zhongjianList.map((item,index)=>(
                                        <li key={index}>
                                            <NavLink to={"/detail?id="+item.goodsId}>
                                        <img src={item.mainImg}/>
                                     <h6>{item.name}</h6>
                                     <p>{item.salePrice}</p>
                                             </NavLink>
                                    </li>
                                     ))
                                 }
                          
                       </ul>
                    </div>
                   </div>
                   <div className="bottom">
                       <img src="http://sale.baobeigezi.com/2019/zj2/imgs/Group9.png" alt=""/>
                   </div>
               </div>
            </Classify>
            </PageContainer>
        )
}

            componentDidMount(){
                this.props.handleZhongjian();
            }
            handleClose(){
                this.props.history.goBack();
            }
}
export default Zhongjian

