import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class Pinpai extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont">&#xe605;</a>
                    <span>分类</span>
                    <span>品牌</span>
                    <a className="iconfont">&#xe613;</a>
                </div>
                </div>
                <div className="main">
                    <div className="banner">
                        <h2>A</h2>  
                        <ul>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                        </ul>                     
                    </div>
                    <div className="banner">
                        <h2>A</h2>  
                        <ul>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                            <li>
                                <img src="https://img.baoimg.net/photo/201503/2015031214002914138276.jpg"></img>
                                <span>Adidas阿迪达斯</span>
                            </li>
                        </ul>                     
                    </div>
                </div>
            </Classify>
            </PageContainer>
        )
}
}
export default Pinpai

