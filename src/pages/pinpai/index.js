import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
class Pinpai extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {isShow} = this.props;
        console.log(this);
        return (
            <PageContainer>
            <Classify>
                <div className="main" style={{display:isShow=='0'?'none':'block'}}>
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

