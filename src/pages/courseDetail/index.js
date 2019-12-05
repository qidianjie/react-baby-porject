import React from "react";

import {Course} from "./styled";
import url from "url";
import {withRouter} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class CourseDetail extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props)
        this.state={
            courseId:"",
            value:"",
            numId:"",
            // zan:0, //点赞初始值
            flag:false,  //控制点赞颜色
        }
        // 接受传过来的id
        let {courseId}=url.parse(this.props.location.search,true).query;
        this.state.courseId=courseId;
        // console.log(this,props)
    }
    componentWillMount(){
        // 课程目录
        this.props.handleCourse(this.state.courseId);
        // 评论
        this.props.handleComment(this.state.courseId);
    }
    render(){
        let {course,commentList} = this.props;
        // let numId=window.eval('('+course.body+')')?window.eval('('+course.body+')').id:'';
        let {value,zan,flag} =this.state;
        // console.log(dianzan)
        return (
            <Course>
                {/* top */}
                <div className="top">
                    <a className="iconfont" onClick={this.handleGoback.bind(this)}>&#xe605;</a>
                    <div>{course.title}</div>
                    <div></div>
                </div>
                {/* main */}
                <div className="course_main">
                    <div className="course_img">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                    </div>
                    {/*  */}
                    <div className="vedioinfo">
                        <h3>{course.title}</h3>
                        <p>{course.content?(window.eval(course.content))[0].value:''}</p>
                    </div>
                    {/* 课程目录 */}
                    <h1 className="empty"></h1>
                    <div className="menu">
                        <h4>课程目录 </h4>
                        <ul>
                            {
                                (course.cmsChapterList?course.cmsChapterList:[]).map((item,index)=>(
                                    <li key={index}>
                                        <div className="left_img">
                                            <img src={item.chapterImg} alt=""/>
                                        </div>
                                        <div className="right">
                                        <p><span>{item.sort}</span>|{item.chapterName}</p>
                                            <i>{item.duration} 
                                            {
                                                index==0?<strong>当前播放</strong>:''
                                            }
                                            
                                            </i>
                                        </div>
                                    </li>
                                ))
                            }   
                        </ul>
                    </div>
                    <h1 className="empty"></h1>
                    {/* 课程互动 */}
                    <div className="interflow">
                        <h4>课程互动</h4>
                        {
                            commentList.length==0?
                            <div className="comment">
                                <img src="http://3g.baobeigezi.com/imgs/default/noComment.png" alt=""/>
                                <p>小主做第一个评论的人吧~</p>
                            </div>:
                            commentList.map((item,ids)=>(
                                <li key={ids}>
                                    <div className="img_aa">
                                        <img src={item.head_img} alt=""/>
                                    </div>
                                    <div className="name">
                                <p><span>{item.nick_name}</span><span>{item.createTime}</span></p>
                                <p>{item.content}</p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </div>
                </div>


                {/* footer */}
                <div className="footer">
                    <a href="" className="iconfont">
                        &#xe63b;
                    </a>
                    <input type="text" placeholder="添加评论" value={value} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleSend.bind(this)}>发送</button>
                    <i className={commentList.length==0?'iconfont':'iconfont yanse'}>&#xe634;</i>
                    <i onClick={this.handleAdd.bind(this)} className={flag?'yanse iconfont':'iconfont'}>
                        {/* <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png"/> */}
                        &#xe612;
                    </i>
                        <span className={commentList.length==0?'':'bian'}>{commentList.length}</span>
                    <span className={flag?'bian':''}>{JSON.parse(localStorage.getItem('zan'))?JSON.parse(localStorage.getItem('zan')):'0'}</span>
                </div>
            </Course>
        )
    }
    handleGoback(){
        this.props.history.goBack();
        this.forceUpdate()
    }
    // 评论
    handleChange(e){
        let val=e.target.value;
        this.setState({
            value:val,
        })
    }
    // 发送评论
    handleSend(){
        this.props.sendComment(this.state.courseId,this.state.value);
        this.state.value="";
        this.props.handleComment(this.state.courseId);
        // console.log(numId)
        this.forceUpdate();
    }
    // 点赞
    handleAdd(){
        this.setState({
            flag:!this.state.flag
        },()=>{
            localStorage.setItem("zan",JSON.stringify(this.state.flag?'1':'0'));
            this.forceUpdate();
        })
        // this.props.handlezan(this.state.courseId);
        // console.log(dianzan)
        // if(==1){
        //     // console.log(1111111)
        //     this.setState({
        //         zan:++this.state.zan,
        //         flag:true,
        //     },()=>{
        //         // localStorage.setItem("zan",this.state.zan)
        //         // console.log(dianzan)
        //     })
        // }
        // if(dianzan==0){
        //     this.setState({
        //         zan:--this.state.zan,
        //         flag:false
        //     },()=>{
        //         // console.log(222222)
        //     })
        // }
        
    }
}

export default CourseDetail