import React, { Component } from 'react'
import { TabBarRoute } from "router"
import { Footer } from "./styled"
import { withRouter } from "react-router-dom"
@withRouter
class TabBar extends Component {
    render() {
        let {path}=this.props;
        return (
            <Footer>
                {
                TabBarRoute.map((item)=>(
                    <div className="item" key={item.path} onClick={this.handleTo.bind(this,item.path)}>
                    <span className="con-icon home1">
                        <img src={item.icon} alt="" />
                    </span>
                    <span  className={path === item.path?"active":""}>
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
