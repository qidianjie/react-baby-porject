import React from "react";

import {Course} from "./styled";
class CourseDetail extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <Course>
                {/* top */}
                <div className="top">
                    <a className="iconfont">></a>
                    <div>小姐姐带你走进鬼屋</div>
                    <div></div>
                </div>
                {/* main */}
                <div className="course_main">
                    <div className="course_img">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                    </div>
                    {/*  */}
                    <div className="vedioinfo">
                        <h3>小姐姐带你走进鬼屋</h3>
                        <p>听小姐姐讲述鬼屋那些事</p>
                    </div>
                    {/* 课程目录 */}
                    <h1 className="empty"></h1>
                    <div className="menu">
                        <h4>课程目录 <span>^</span></h4>
                        <ul>
                            <li>
                                <div className="left_img">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <p><span>1</span>| 小红姐带你走进产房--是男孩是女孩?</p>
                                    <i>666 <strong>当前播放</strong></i>
                                </div>
                            </li>
                            <li>
                                <div className="left_img">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <p><span>1</span>| 小红姐带你走进产房--是男孩是女孩?</p>
                                    <i>666</i>
                                </div>
                            </li>
                            <li>
                                <div className="left_img">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <p><span>1</span>| 小红姐带你走进产房--是男孩是女孩?</p>
                                    <i>666</i>
                                </div>
                            </li>
                            <li>
                                <div className="left_img">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <p><span>1</span>| 小红姐带你走进产房--是男孩是女孩?</p>
                                    <i>666</i>
                                </div>
                            </li>
                            <li>
                                <div className="left_img">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/1b24e9c3-9cc6-4ebe-9ddd-3dc3885a9647.jpg" alt=""/>
                                </div>
                                <div className="right">
                                    <p><span>1</span>| 小红姐带你走进产房--是男孩是女孩?</p>
                                    <i>666</i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h1 className="empty"></h1>
                    {/* 课程互动 */}
                    <div className="interflow">
                        <h4>课程目录</h4>
                        <div className="comment">
                            <img src="http://3g.baobeigezi.com/imgs/default/noComment.png" alt=""/>
                            <p>小主做第一个评论的人吧~</p>
                        </div>
                    </div>
                </div>


                {/* footer */}
                <div className="footer">
                    <a href="">
                        <img src="../../../src/assets/images/bi.png" alt=""/>
                    </a>
                    <input type="text" placeholder="添加评论"/>
                    <button>发送</button>
                    <a href=""></a>
                    <a href=""></a>
                    <span>0</span>
                    <span>1999</span>
                </div>
            </Course>
        )
    }
}

export default CourseDetail