import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "components/classify/mapStore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Pinpai extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {pinpaiListls} = this.props;
        return (
            <PageContainer>
            <Classify>
                <div className="main">
                    {
                        pinpaiListls.map((item,index)=>(
                            <div className="banner" key={index}>
                            <h2>{item.firstName}</h2>  
                        <ul>
                            {
                                item.brandList.map((its,ids)=>(
                                     <li key={ids}>
                                        <img src={its.logo}></img>
                                        <span>{its.name}</span>
                                     </li>
                                ))
                            }
                           
                        </ul>                     
                    </div>
                        ))
                    }
                    <div className="all" onClick={this.handleClickAll.bind(this)}>全部</div>
                </div>
            </Classify>
            </PageContainer>
        )
}
    componentDidMount(){

        this.props.pinpaiList();
    }
    handleClickAll(){
        this.props.history.push("/all");
    }
}
export default Pinpai

