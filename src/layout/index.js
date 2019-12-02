import React, { Component,Fragment} from 'react'
import TabBar from "components/tabBar"
export default class Layout extends Component {
    render() {
        console.log(this.props.path);
        return (
            <Fragment>
                {this.props.children}
                {/* 内容区 */}
                <TabBar path={this.props.route}/>
            </Fragment>
        )
    }
}


/*
    在React中接收组件内部包裹的内容
    this.props.children

*/