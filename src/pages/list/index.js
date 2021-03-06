import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter,NavLink} from 'react-router-dom' ;
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class BrandList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:"0"
        }
    }
    render(){
        let {brandList} = this.props;
        let {flag} = this.state;
        return (
            <PageContainer>
            <Classify>
                <div className="top">
                <div className="header">
                    <a className="iconfont" onClick={this.handleClose.bind(this)}>&#xe605;</a>
                    <span>品牌详情</span>
                    <i className="iconfont" onClick={this.handleSearch.bind(this)}>&#xe613;</i>
                </div>
                <div className="sort">
                    <ul>
                        <li onClick={this.handleSort.bind(this,"0")} className={flag==0?'active':''}>综合<span className="iconfont">&#xe666;</span></li>
                        <li onClick={this.handleSort.bind(this,"3")} className={flag==3?'active':''}>价格<span className="iconfont">&#xe75b;</span></li>
                        <li onClick={this.handleSort.bind(this,"4")} className={flag==4?'active':''}>销量</li>
                        <li>筛选<span className="iconfont">&#xe624;</span></li>
                    </ul>
                </div>
                </div>

              

                    <div className="goods">
                    {/* <h5></h5> */}
                    <ul>

                        {
                            brandList.map((item,index)=>(
                                <li key={index}>
                                    <NavLink to={"/detail?id="+item.goodsId}>
                                <img src={item.mainImg}/>
                                  <h6>{item.name}</h6>
                                  <p>{item.salePrice}</p>
                                  </NavLink>
                                 </li>
                            ))
                        }
                      
                    </ul>
                </div>


               
               

            </Classify>
            </PageContainer>
        )
}       
        componentDidMount(){
            this.props.handlePinpaiList(this.props.match.params.id);
        }
        componentWillReceiveProps(){
            // this.props.handlePinpaiList();
        }
        handleClose(){
            this.props.history.goBack();
        }
        handleSearch(){
            this.props.history.push("/search");
        }
        handleSort(index){
            this.setState({
                flag:index
            },()=>{
                // console.log(this.props.match.params.id,this.state.flag,1);
                this.props.handlePinpaiList(this.props.match.params.id,this.state.flag);
                this.forceUpdate();
            })
        
            
        }
}
export default BrandList

