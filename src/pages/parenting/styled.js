import styled from "styled-components";

export const Container=styled.div`
    .top{
        font-size:0.14rem;
        position:fixed;
        top: 0;
        width: 100%;
        height: .38rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:url("http://3g.baobeigezi.com/imgs/mycenter/baby/bg.png") no-repeat 0 0;
        background-size: 100%;
        padding:0 0.1rem;
        i{
            font-size:0.18rem;
        }
    }
    .img{
        padding:0 0.1rem;
        margin-top:0.38rem;
        background:url("http://3g.baobeigezi.com/imgs/mycenter/baby/bg.png") no-repeat 0 0;
        background-size: 100% 90%;

    }
    /* 轮播图下 */
    .body {
        background:#eee;
        padding:0 0.1rem;
        height:100%;
        padding-top:0.02rem;
        overflow:scroll;
        .public{
            margin-top:0.08rem;
            background-color: #fff;
            border-radius: 0.08rem;
            -webkit-border-radius: 0.08rem;
            -moz-border-radius: 0.08rem;
            padding:0.12rem 0.08rem;
        }
        .p_public{
            height:.24rem;
            line-height:0.24rem;
            font-size:0.16rem;
            padding-left:0.08rem;
            border-left:0.03rem solid rgba(187,54,31,1);
            margin-bottom:0.06rem;
        }
        .knowledge{
            height:2rem;
           
            ul{
                display:flex;
                height:1.6rem;
                justify-content:space-between;
                align-items:center;
                flex-wrap:wrap;
                .know{
                    height:50%;
                    width:25%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    font-size:0.14rem;
                    img{
                        height:0.35rem;
                        width:0.35rem;
                        margin-bottom:0.06rem;
                    }
                }
            }
        }
        .tuijian{
            height:1.7rem;
            ul{
                padding-top:0.08rem;
                li{
                    height:0.38rem;
                    border-bottom: 1px solid #eee;
                    width:100%;
                    display:flex;
                    justify-content:left;
                    flex-direction:row;
                    font-size:0.14rem;
                    align-items:center;
                    img{
                        width:0.18rem;
                        height:0.18rem;
                        margin:0 0.04rem;
                    }

                }
                .three{
                    border-bottom:none;
                }
            }
        }
        .expert{
            height:4.46rem;
            span{
                float:right;
                color: rgba(153,153,153,1);
                font-size:0.12rem;
            }
            ol{
                li{
                    background: rgba(255,249,248,1);
                    border-radius:0.08rem;
                    padding: .1rem;
                    margin-top: .15rem;
                    height: 1.18rem;
                    .expert_up{
                        display:flex;
                        h3{
                            font-size:0.14rem;
                            font-weight:normal;
                        }
                        span{
                            float:none;
                            color: #fff;
                            font-size: .12rem;
                            font-family: PingFangSC;
                            text-align: center;
                            display:inline-block;
                            width:0.86rem;
                            background: rgba(187,54,31,1);
                            line-height: .2rem;
                            border-radius:.08rem;
                            margin-top: .3rem;
                        }
                    }
                    .expert_low{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-top: .1rem;
                        padding-right:0.16rem;
                        color: rgba(153,153,153,1);
                        .img_icon{
                            display:flex;
                            font-size:0.12rem;
                            line-height:0.18rem;
                            padding-bottom:0.04rem;
                            i{
                                font-size:0.18rem;
                            }
                            img{
                                width:0.13rem;
                                height:0.13rem;
                                margin-right:0.06rem;
                            }
                        }
                    }
                    .img_video{
                        width:0.81rem;
                        height:0.81rem;
                        margin-right:0.1rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                }
            }
        }
        /* 格子粉福利专区 */
        .welfare{
            ol{
                display:flex;
                flex-wrap:wrap;
                li{
                    height:1.74rem;
                    margin-top: .16rem;
                    width:32%;
                    margin-right:.05rem;
                    img{
                        width:0.9rem;
                        height:0.9rem;
                    }
                    p{
                        font-size: .12rem;
                        font-family: PingFangSC;
                        color: rgba(51,51,51,1);
                        margin-top: .05rem;
                        width: 0.9rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    h4{
                        font-weight: 500;
                        color: rgba(51,51,51,1);
                        font-size:0.14rem;
                        padding-left:0.06rem;
                        color: rgba(187,54,31,1);
                    }
                    h5{
                        font-weight: 500;
                        font-size:0.12rem;
                        text-decoration:line-through;
                        padding-left:0.06rem;
                        color: rgba(153,153,153,1);
                    }
                    .rush_buy{
                        width: 0.8rem;
                        height: .18rem;
                        background: rgba(187,54,31,1);
                        border-radius: 0.03rem;
                        text-align: center;
                        line-height: .18rem;
                        color: #fff;
                        margin-top: .04rem;
                        font-size:0.11rem;
                        margin-left:0.04rem;
                    }
                }
                li:nth-child(3n){
                    margin-right:0;
                }
            }
        }
        /* 早教课程 */
        .course{
            .course_img{
                margin-top:0.2rem;
                width:2.86rem;
                height:1.57rem;
                img{
                    width:100%;
                    height:100%;
                    border-radius:0.05rem;
                }
            }
            .center{
                display:flex;
                font-size:0.13rem;
                padding-bottom:0.1rem;
                .center_title{
                    border-right:1px solid #999;
                    padding-right:0.2rem;
                    margin-top: .1rem;
                }
                h6{
                    font-size:0.14rem;
                    font-weight:normal;
                    color: rgba(51,51,51,1);

                }
                p{
                    color: #666666;
                    margin-top: .1rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width:2.22rem;
                }
                .service{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    padding-left:0.08rem;
                    i{
                        font-size:0.18rem;
                    }
                }
            }
            .crazy_course{
                border-top: 1px solid #DEDEDE;
                padding: .1rem 0 .1rem;
                display:flex;
                font-size:.14rem;
                img{
                    width:0.64rem;
                    height:0.64rem;
                    border-radius:0.05rem;
                }
                .course_goods{
                    padding-left:0.12rem;
                    p{
                        width:2.1rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-top:0.08rem;
                    }
                    span{
                        margin-top:0.14rem;
                        float:left;
                    }
                    span:nth-child(3){
                        float:right;
                        margin-right:0.02rem;
                        width:0.64rem;
                        height:0.18rem;
                        background: rgba(187,54,31,1);
                        border-radius:0.04rem;
                        color:#fff;
                        font-size:0.13rem;
                        text-align:center;
                        line-height:0.18rem;
                    }
                }
                
            }
        }
        /* 公开课 */
        .openclass{
            span{
                float:right;
                color: rgba(153,153,153,1);
                font-size:0.12rem;
            }
            .open_img{
                display:flex;
                .open_imgone{
                    width:1.26rem;
                    height:1.44rem;
                }
                .open_img_right{
                    width:1.52rem;
                    height:1.42rem;
                    margin-left:0.1rem;
                    display:flex;
                    justify-content:space-between;
                    flex-direction:column;
                    img{
                        width:100%;
                    }
                }
            }
        }
        /* 精品服务 */
        .fuwu{
            span{
                float:right;
                color: rgba(153,153,153,1);
                font-size:0.12rem;
            }
            ol{
                display:flex;
                flex-wrap:wrap;
                li{
                    /* width:1.38rem; */
                    width:50%;
                    height:1.62rem;
                    padding:0 .1rem 0.1rem 0;

                    img{
                        width:100%;
                        height:100%;
                        border-radius:0.05rem;
                    }
                }
                li:nth-child(2n){
                    padding-right:0;
                }
            }
        }
        /* 咨询专家 */
        .consult{
            span{
                float:right;
                color: rgba(153,153,153,1);
                font-size:0.12rem;
            }
            ol{
                li{
                    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.15);
                    border-radius:0.1rem;
                    padding: .1rem;
                    margin-top: .15rem;
                    display:flex;
                    align-items:center;
                    img{
                        width:0.81rem;
                        height:0.81rem;
                        border-radius:0.05rem;
                        margin-right:0.1rem;
                    }
                } 
            }
            .expertinfo{
                font-size:0.14rem;
                font-family: PingFangSC;
                font-weight: 500;
                color: rgba(51,51,51,1);
                h3{
                    font-weight:normal;
                    font-size:0.14rem;
                }
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin-top:0.05rem;
                    color: rgba(102,102,102,1);
                    font-size:0.12rem;
                }
                span{
                    float:none;
                    width:0.68rem;
                    height:0.19rem;
                    border-radius:0.1rem;
                    background: rgba(220,184,108,1);
                    display:inline-block;
                    text-align:center;
                    line-height:0.19rem;
                    color:#fff;
                    margin-right:0.1rem;
                    margin-top:0.04rem;
                }
                span:nth-of-type(1){
                    /* background:rgba(220,184,108,1) url("http://3g.baobeigezi.com/imgs/mycenter/baby/kefu.png") no-repeat 0.1rem; */
                    /* padding-left:0.1rem; */
                    background-size:100% 100%;
                }
            }
        }
    }
    
    
`
