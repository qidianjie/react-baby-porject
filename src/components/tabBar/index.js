import React, { Component } from 'react'
import { TabBarRoute } from "router"
import { Footer } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter
class TabBar extends Component {
    constructor() {
        super()

        // this.state = {
        //     activePath: "/home"
        // }
    }
    render() {
        // let { activePath } = this.state;
        return (
            <Footer>
                {/* <ul>
                    {
                       TabBarRoute.map((item)=>(
                           <li key={item.path} onClick={this.handleTo.bind(this,item.path)}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                           </li>
                       )) 
                    }
                </ul> */}
                {
                TabBarRoute.map((item)=>(
                    <div className="item" key={item.path} onClick={this.handleTo.bind(this,item.path)}>
                    <span className="con-icon home1">
                        <img src={item.icon} alt="" />
                    </span>
                    <span className="item-text">
                       {item.text}
                    </span>
                </div>
                ))
                }
                
                
            </Footer>
        )
    }
    handleTo(path) {
        this.props.history.push(path);
    }
}

export default TabBar;
