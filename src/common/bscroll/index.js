import React, { Component } from 'react'
import Bscroll from "better-scroll"
import {Bscontainer} from "./styled"
export default class Bscrollcom extends Component {
    render() {
        return (
           <Bscontainer ref="wrapper">
               {this.props.children}
           </Bscontainer>
        )
    }
    componentDidMount(){
        this.scroll=new Bscroll(this.refs.wrapper,{
            pullUpLoad:true,
            click:true,
            tap:true
        });
    }
    handlePullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}
