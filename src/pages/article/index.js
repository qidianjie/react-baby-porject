import React from "react";
import {ArticleContainer} from "./styled";
import url from "url";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:""
        }
        let {id} =url.parse(this.props.location.search,true).query;
        this.state.id=id;
        // console.log(this.state.id)
    }
    render(){
        let {article}=this.props;
        // console.log(window.eval(article.content?article.content:[]));
        return (
            <ArticleContainer>
                {/* top */}
                <div className="top">
                    <span className="iconfont" onClick={this.handleClick.bind(this)}>&#xe605;</span>
                    <h3>{article.title}</h3>
                    <div className="right">
                        <span className="iconfont" onClick={this.handleHome.bind(this)}>&#xe602;</span>
                        <span className="iconfont">&#xe75d;</span>
                    </div>
                </div>
                {/* center */}
                <div className="main">
                    <div className="article_img">
                        <img src={article.coverImage?article.coverImage:''} alt=""/>
                    </div>
                    {
                        window.eval(article.content?article.content:[]).map((item,index)=>(
                            item.key=="3"?<p key={index}><li className="p_img"><img src={"https://imagespro.baobeigezi.com/"+item.value}/></li></p>:<p key={index}>{item.value}</p>
                        ))
                       
                    }
                   
                </div>
                <div className="interflow">
                        <h4>课程目录</h4>
                        <div className="comment">
                            <img src="http://3g.baobeigezi.com/imgs/default/noComment.png" alt=""/>
                            <p>小主做第一个评论的人吧~</p>
                        </div>
                    </div>
                {/* footer */}
                <div className="footer">
                    <a href="" className="iconfont">
                        &#xe63b;
                    </a>
                    <input type="text" placeholder="添加评论"/>
                    <button>发送</button>
                    <a href="" className="iconfont">&#xe634;</a>
                    <a href="">
                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png"/>
                    </a>
                    <span>0</span>
                    <span>1999</span>
                </div>
            </ArticleContainer>
        )
    }
    componentWillMount(){
        this.props.handleArticle(this.state.id)
    }
    handleClick(){
        // console.log(this.props)
        this.props.history.goBack();
    }
    handleHome(){
        console.log(111)
        this.props.history.push("/home")
    }
   
}

export default Article;