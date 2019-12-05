import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
import {connect} from "react-redux"
import {withRouter,NavLink} from 'react-router-dom' ;
import {throttle} from "common/throttle"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
@connect(mapStateToProps,mapDispatchToProps )
@withRouter
class Search extends Component {
    constructor(){
        super()
        this.state = {
            val:"",
            biaoji:'0',
            flag:0
        }
        this.handle = this.handle.bind(this);
    }
    render() {
        let {searchList} = this.props;
        let {val} = this.state;
        if(val==""){
            searchList=[];
        }
        if(searchList.length==0){
            this.state.flag = 0;
        }else{
            this.state.flag = 1;
        }
        return (
            <PageContainer>
            <Classify>
                <div className="header">
                    <input type="text" value={val} onChange={this.handleSearchChange.bind(this)}/>
                    <span onClick={this.handleSearch.bind(this)}>取消</span>
                    <a className="iconfont">&#xe613;</a>
                </div>
                {
                    this.state.flag == 0? <div className="history">
                    <div className="history_top">
                        <span>历史搜索</span>
                        <span className="iconfont">&#xe62c;</span>
                    </div>
                    <h3>暂无搜索历史</h3>
                </div>:
                <ul className="search_item">
                    {
                        searchList.map((item,index)=>(
                             <li key={index}>
                                 <NavLink to={"/brand/"+item.id+"/"+"111"}>
                                 <p>{item.name}</p>
                                <span className="iconfont">&#xe715;</span>
                                </NavLink>
                            </li>
                        ))
                    }
                   
                </ul>
                }
               
                
            </Classify>
            </PageContainer>
        )
    }
    handleSearch(){
        this.props.history.goBack()
    }
    handleSearchChange(e){
        var val = e.target.value;
        this.setState({
            val:val
        },()=>{
            throttle(this.handle,300);
        })
        
        
    }
    handle(){
            this.props.handleSearchLs(this.state.val);
            this.forceUpdate();
    }
    
}

export default Search;