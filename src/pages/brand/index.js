import React, { Component } from 'react'
import { Header, Brandtop, Brsec2, Nav, WaterList } from './styled'
import { WhiteSpace } from 'antd-mobile';
import {connect} from "react-redux"
import {throttle} from "common/throttle"
import {withRouter,NavLink} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "components/classify/mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
 class Brand extends Component {
     constructor(){
         super()
         this.state={
             flag:'0',
             biaoji:"0",
             currPage:"0",
             n:"1",
         }
     }
  
    render() {
        let {brandlist,searchlsList} = this.props;
        let list = searchlsList.goodsList?searchlsList.goodsList:[];
        if(list == []){
            this.state.biaoji=1;
        }
        let {flag} = this.state;
        return (
            <div>
                <Header >

                    <span>
                        <i className="iconfont" onClick={this.handleClose.bind(this)}>&#xe605;</i>
                        {(this.props.match.params.name=='111'?'品牌详情':this.props.match.params.name)}
                        <i className="iconfont" onClick={this.handleSearch.bind(this)}>&#xe613;</i>
                    </span>

                </Header>
                <Nav>
                    <span onClick={this.handleSort.bind(this,"0")} className={flag==0?'active':''}>
                        综合
                            <i className="iconfont">&#xe666;</i>
                    </span>
                    <span onClick={this.handleSort.bind(this,"3")} className={flag==3?'active':''}>
                        价格
                           <i className="iconfont">  &#xe75b;</i>
                    </span>
                    <span onClick={this.handleSort.bind(this,"4")} className={flag==4?'active':''}>
                        销量
                        </span>
                         <span className="shai" >
                        筛选
                          <i className="iconfont">&#xe655;</i>
                    </span>
                </Nav>
                <WaterList>
                    <div className="waterList">
                        <ul className="water" ref="water">
                            {
                               (brandlist.length==0?list:brandlist).map((item,index)=>(
                                    <li className="lis pr" key={index}>
                                    <NavLink to={"/detail?id="+item.goodsId}>
                                        <div className="imgDiv">
                                            <img src={item.mainImg} />
                                        </div>
                                        <div className="waterButtom pr">
                                            <div className="waterName text-overflow2">
                                                {item.name}
                                            </div>
                                            <h5 className="waterPrice">
                                                {item.salePrice}
                                            </h5>
                                        </div>
                                    </NavLink>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                    <WhiteSpace />

                    </div>
                </WaterList>


            </div>

        )
    }
    componentDidMount(){
             window.addEventListener('scroll', () =>{
            if(((document.body.scrollTop || document.documentElement.scrollTop)+2000)>=(this.refs.water?this.refs.water.offsetHeight:0) && (document.body.scrollTop || document.documentElement.scrollTop)<=(this.refs.water?this.refs.water.offsetHeight:0)){
                this.setState({
                    n:++this.state.n
                },()=>{
                    if(this.props.match.params.name=='111'){
                        this.props.searchList(this.props.match.params.id);
                    }else{
                         this.props.handleNaiBrand(this.props.match.params.id,this.state.flag,this.state.n);
                    }
                })
            }
      
        })
        if(this.props.match.params.name=='111'){
            
            this.props.searchList(this.props.match.params.id);
        }else{
             this.props.handleNaiBrand(this.props.match.params.id,this.state.flag,"112");

        }
       
    }
    handleClose(){
                this.props.history.goBack()  
    }
    handleSearch(){
            this.props.history.push("/search");   
    }
    handleSort(index){
        this.setState({
            flag:index
        },()=>{
            this.props.handleNaiBrand(this.props.match.params.id,this.state.flag,"112");
            this.forceUpdate();
        })
    
        
    }

}

export default Brand;