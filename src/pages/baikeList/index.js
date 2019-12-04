import React from "react";

import {BaikeContainer} from "./styled";
import url from "url";
import {withRouter,Link} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import { connect } from "react-redux";
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class BaikeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:"",
        }
        let {id,name}=url.parse(this.props.location.search,true).query;
        this.state.id=id;
        this.state.name=name;
        // console.log(id,name)
    }
    render() {
        let {dataList} =this.props;
        let {name} =this.state;
        // console.log(dataList)
        return (
            <BaikeContainer>
                {/* top */}
                <div className="top">
                    <span className="iconfont" onClick={this.handleClick.bind(this)}>&#xe605;</span>
                    <h3>{name}</h3>
                    <a href="" className="iconfont">&#xe613;</a>
                </div>
                <ul>
                    {
                        dataList.map((item,index)=>(
                            <Link key={index} className="li" to={"/article?id="+item.id}>
                                <div className="img">
                                    <img src={item.coverImage} alt=""/>
                                </div>
                                <div className="right">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <div className="praise">
                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png" alt=""/>
                                        <span>{item.voteCount}</span>
                                    </div>
                                    <div className="praise">
                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/watchIcon.png" alt=""/>
                                        <span>{item.viewCount}</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                  
                </ul>
            </BaikeContainer>
        )
    }
    componentWillMount(){
        this.props.handleGetData(this.state.id);
    }
    handleClick(){
        this.props.history.goBack();
    }
}

export default BaikeList;
