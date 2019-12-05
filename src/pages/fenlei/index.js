import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import ClassifyBot from "../../components/classify"
import ClassifyPinpai from "../../components/pinpai"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom' ;
import {mapStateToProps,mapDispatchToProps} from "components/classify/mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class Find extends Component {
    constructor(){
        super()
        this.state={
            flag:"0",
            id:"1154573626486296577",
            path:"/1154573626486296577",
            isShow:JSON.parse(localStorage.getItem("caidan")) || "0"
        }
    }

    render() {
        let {caidanList} = this.props;
        let {flag,id,path,isShow} = this.state;

        return (
            <PageContainer>
                <Classify>
                <div className="header">
                    <a className="iconfont" onClick={this.handleBack.bind(this)}>&#xe605;</a>
                    <span onClick={this.handleClickShow.bind(this,"0")} className={isShow=='0'?'active':''}>分类</span>
                    <span onClick={this.handleClickShow.bind(this,"1")} className={isShow=='1'?'active':''}>品牌</span>
                    <a className="iconfont" onClick={this.handleSearch.bind(this)}>&#xe613;</a>
                </div>
                <div className="nav" style={{display:isShow=='1'?'none':'block'}}>
                    <ul>
                        {
                            caidanList.map((item,index)=>(  
                            <li key={index} className={flag==index?'active':''} onClick={this.handleClick.bind(this,index)}>{item.name}</li>
                            ))
                        }
      
                    </ul>
    
                </div>
                {
                    isShow=='0'?<ClassifyBot id={id} path={path}/>:<ClassifyPinpai/> 
                }
                
                
            </Classify>
            </PageContainer>
        )
    }
    componentDidMount(){
        this.props.handleClassAsync();
    }
    handleClick(index){
        this.setState({
            flag:index,
            id:this.props.caidanList[index].id,
            path:this.props.caidanList[index].path
        },()=>{         
            this.props.GetAsyncGoodslist(this.state.id,this.state.path)
           
        })
        
    }  
    handleClickShow(index){
        this.setState({
            isShow:index
        },()=>{
            localStorage.setItem("caidan",JSON.stringify(this.state.isShow))
        })
    }
    handleSearch(){
        this.props.history.push("/search");
    }
    handleBack(){
        this.props.history.goBack();
    }

}

export default Find;
