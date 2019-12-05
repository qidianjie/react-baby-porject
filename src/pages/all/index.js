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
                <div className="main" ref="main">
                    <div className="right">
                            {
                                pinpaiListls.map((it,id)=>(
                                    <a key={id} onClick={()=>this.scrollToAnchor(it.firstName)}>{it.firstName}</a>    
                                ))
                            }
                      </div>
                    {
                        pinpaiListls.map((item,index)=>(
                            
                            <ol className="content" key={index} id={item.firstName}>
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

    scrollToAnchor = (index) => {
        if (index) {
            let anchorElement = document.getElementById(index);
            if(anchorElement) { anchorElement.scrollIntoView()
                this.refs.main.style.paddingTop=".6rem"; 
        }
        }
        
}
handleSpan(index){
    console.log(index);
}
}
export default All

