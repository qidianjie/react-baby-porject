import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class All extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont">×</a>
                    <span>全部品牌</span>
                </div>
                </div>
                <div className="main">
                    <div className="right">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>F</span>
                        <span>G</span>
                    </div>
                    <ol className="content">
                        <span>A</span>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                        <li><a>Adidas阿迪达斯</a></li>
                    </ol>
                   
                </div>
            </Classify>
            </PageContainer>
        )
}
}
export default All

