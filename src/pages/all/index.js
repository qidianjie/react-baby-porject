import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter,NavLink} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "components/classify/mapStore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class All extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {pinpaiListls} = this.props;
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont" onClick={this.handleClose.bind(this)}>×</a>
                    <span>全部品牌</span>
                </div>
                </div>
                <div className="main">
                    <div className="right">
                            {
                                pinpaiListls.map((it,id)=>(
                                    <span key={id}>{it.firstName}</span>           
                                ))
                            }
                      </div>
                    {
                        pinpaiListls.map((item,index)=>(
                            
                            <ol className="content" key={index}>
                            <span>{item.firstName}</span>
                            {
                                item.brandList.map((its,ids)=>(
                                <li key={ids}><NavLink to={"/pinpailist/"+its.id}>{its.name}</NavLink></li>
                                ))
                            }
                           
                        </ol>
                        ))
                    }
                   
                   
                </div>
            </Classify>
            </PageContainer>
        )
}
handleClose(){
    this.props.history.goBack();
}
}
export default All

