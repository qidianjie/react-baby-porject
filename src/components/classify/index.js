import React, { Component } from 'react'
import {ClassDiv} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
 class ClassifyBot extends Component {
     constructor(){
         super()
         this.state={
             flag:false
         }
     }
    render() {
        let {goodsList} = this.props;
        return (
            <ClassDiv>
                <div className="main">
                    {
                         goodsList.map((item,index)=>(
                            <div className="banner" key={index}>
                            <img src={item.image} alt=""></img>
                            <ul>
                                {
                                    item.childs.map((imd,idx)=>(
                                        <li key={idx}>
                                    <img src={imd.image} alt=""></img>
                                    <span>{imd.name}</span>
                                </li>
                                    ))
                                }
                                
                            </ul>
                        </div>    

                         ))
                    }
                   
                </div>
            </ClassDiv>
        )
    }
    componentDidMount(){
        this.props.GetAsyncGoodslist(this.props.id,this.props.path);
    }
}

export default ClassifyBot;