import React, { Component } from 'react'
import { Header, Brandtop, Brsec2, Nav, WaterList } from './styled'
import { WhiteSpace } from 'antd-mobile';
import {connect} from "react-redux"
import {withRouter,NavLink} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "components/classify/mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
 class Brand extends Component {
     constructor(){
         super()
         this.state={
             flag:'0',
             biaoji:"0"
         }
     }
    render() {
        let {brandlist,searchlsList} = this.props;
        let list = searchlsList.goodsList?searchlsList.goodsList:[];
        if(list == []){
            this.state.biaoji=1;
        }
        console.log(list);
        console.log(list);
        return (
            <div>
                <Header >

                    <span>
                        <i className="iconfont" onClick={this.handleClose.bind(this)}>&#xe605;</i>
                        {(this.props.match.params.name=='111'?'品牌详情':this.props.match.params.name)}
                        <i className="iconfont" onClick={this.handleSearch.bind(this)}>&#xe613;</i>
                    </span>

                </Header>
                
                {/* <Brandtop>
                    <div>
                        <img src={searchlsList.brand.brandImage} alt="" />
                    </div>
                    <div>
                        <span>{searchlsList.brand.name}</span>
                    </div>
                </Brandtop>
                <Brsec2>
                    <span>{searchlsList.brand.comments}</span>
                </Brsec2> */}
                <Nav>
                    <span>
                        综合
                            <i className="iconfont">&#xe666;</i>
                    </span>
                    <span>
                        价格
                           <i className="iconfont">  &#xe75b;</i>
                    </span>
                    <span>
                        销量
                        </span>
                    <span className="shai">
                        筛选
                          <i className="iconfont">&#xe655;</i>
                    </span>
                </Nav>
                <WaterList>
                    <div className="waterList">
                        <ul className="water">
                            {
                               (brandlist.length==0?list:brandlist).map((item,index)=>(
                                    <li className="lis pr" key={index}>
                                    {/* <NavLink to={"/detail?id="+item.goodsId}> */}
                                    <a>
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
                                    {/* </NavLink> */}
                                    </a>
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
        if(this.props.match.params.name=='111'){
            this.props.searchList(this.props.match.params.id);
        }else{
             this.props.handleNaiBrand(this.props.match.params.id,this.state.flag);
        }
       
    }
    handleClose(){
        this.props.history.goBack();
    }
    handleSearch(){
        this.props.history.push("/search");
    }
    // handleXiaoliang(){
    //     this.setState({
    //         flag:"4"
    //     },()=>{
    //         this.props.handleNaiBrand(this.props.match.params.id,this.state.flag);
    //     })
    // }
}

export default Brand;