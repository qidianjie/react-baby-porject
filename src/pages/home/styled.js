import styled from "styled-components";
import bg from '../../static/image/bg.png'
import shousuo2x from '../../static/image/shousuo2x.png'




export const Banner = styled.div`
    /* width:100%; */
    height:1.54rem;
    background-image:url(${bg});
    background-repeat:no-repeat;
    background-size:100% 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:white;
    /* overflow:hidden; */
    .home{
        position: relative;
        height:0.53rem;
        >input{
            width:3.03rem;
            height:0.25rem;
            border-radius:0.1rem;
            border:none;
            margin-top:0.05rem;
        }
    }
    .home_one{
        position:absolute;
        width:0.17rem;
        height:0.17rem;
        display:inline-block;
        background-image:url(${shousuo2x});
        background-repeat:no-repeat;
        background-size:100% 100%;
        left:0.1rem;
        top:0.1rem;
    } 
    .slider-slide{
                img{
                    width:0.3rem;
                    border-radius:0.08rem !important;
                }
            }
    .swiper-container{
        /* width:3.3rem; */
        width:100%;
        height:1.2rem; 
        margin-top:0.1rem;       
    }
    .am-wingblank{
        border-radius:0.08rem;
    }
    .swiper-wrapper{
        width:2.99rem;
        height:1.2rem;
        >img{
            width:100%;
            border-radius:0.08rem;
        }
    }
`



export const Baozheng = styled.div`
width:100%;
   height:0.23rem;
    >img{
            width:100%
    }
`

export const BannerIcon = styled.div`
    width:100%;
    height:1.26rem;
    border-top:1px solid #e5e5e5;
    background:white;
    padding-top:0.08rem;
    display:flex;
    flex-wrap:wrap;
    .fl{
        width:0.64rem;
        height:0.54rem;
        display:flex;
        flex-direction:column;
        font-size:0.12rem;
        align-items:center;
        color:#999;
        >img{
            width:0.34rem;
        }
    }

`

export const ActiveList = styled.div`
    /* width:100%; */
    padding:0.085rem 0.042rem 0rem 0.042rem;
    .newPer{
        width:100%;
        /* height:2.62rem; */
        background:white;
        border-radius:0.08rem;
    }
    .newPerBg{
        display:inline-block;
        width:100%;
        height:0.27rem;
        position: relative;
        >img{
            width:100%;
        }
        >span{
            position:absolute;
            color:#fff;
            font-size:0.15rem;
            top:0.03rem;
            left:0.07rem;
        }
    }
    .p12T3{
        width:100%;

        display:flex
    }
    .newZhe {
    background-color: #fff;
    width: 50%;
    border-right: 1px solid #e5e5e5;
    float: left;
    padding-bottom: 0.085rem;
    height: 1.54rem;
}    
.newTit {
    height:0.25rem;
    font-size: .12rem;
    font-family: PingFangSC-Regular,PingFang SC;
    color: #333333;
    padding: .085rem 0 0 .085rem;
    .fl {
    float: left;
    }
.fr {
    float:right;
    width:0.5rem;
    height: 0.16rem;
    background: #FFECEB;
    border-radius: 0.1rem 0px 0px 0.1rem;
    text-align: center;
    /* line-height: .37rem; */
    font-size: .12rem;
    font-family: PingFangSC-Regular,PingFang SC;
}
} 
.newList{
    width:100%;
    height: 1.17rem;
    display:flex;

    .newLi{
        width:0.75rem;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        >img{
            width:0.75rem;
            margin:0.085rem 0rem;
        }
        .newPrice{
            color: #BB361F;
            font-size:0.12rem;
        }
    }
}   
.quanGo{
    height:0.77rem;
    padding:0.085rem;
    img{
        width:100%;
        border-radius:0.05rem;
    }
}


/* 限时抢购 */

.flashSale {
    height:2rem;
    background-color: #fff;
    margin-top: 0.085rem;
    border-radius: 0.08rem;
    .flashTit{
        height:0.38rem;
        padding:0.085rem;
        .flashGo{
            font-size:  0.16rem;
            color:#000;
        }
        .flashTime {
            width:0.44rem;
            height: 0.15rem;
            background: #BB361F;
            border-radius: 18px 0px 0px 18px;
            line-height: 0.15rem;
            display: inline-block;
            font-size: .12rem;
            font-family: PingFangSC-Regular,PingFang SC;
            color: #fff;
            text-align: center;
            margin: 0.025rem 0 0 .0853rem;
                }
            .timer {
                display: inline-block;
                width:0.457rem;
                height: 0.14rem;
                border-radius: 0px 0.08rem 0.08rem 0px;
                border: 1px solid #BB361F;
                color: #BB361F;
                text-align: center;
               position: relative;
               top:0.03rem;
            }
            .more {
                float:right;
                font-size: .12rem;
                font-family: PingFangSC-Regular,PingFang SC;
                color: #666;
                margin-top: 0.042rem;
            }
    }
    /* 限时抢购 */
    .flashList{
        height: 1.55rem;
        padding-top:0.085rem;
        border-top: 1px solid #e5e5e5;
        display:flex;
        overflow: auto;
        .swiper-slide{
            width:0.85rem;
            height: 1.34rem;
            margin-right:0.04rem;
            display:flex;
            flex-direction:column;
            
            >img{
                width:0.85rem;
                height:0.85rem;
                margin-bottom:0.085rem;
            }
            .del {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 0.12rem;
                }
            .col_BB361F {
                    color: #BB361F;
                    font-size: 0.12rem;
                }
        }
    }
}
    /* 每日拼团 */
    .groupBoook{
     margin-top:0.1rem;
        width:100%;
        /* height:6.2rem; */
        .groupBg{
            color: #313131;
            height:0.358rem;
            line-height:0.358rem;  
        }
        .groupList{
            width:100%;
        }
        .groupLi{
            /* height:0.94rem; */
            padding:0.085rem 0.085rem 0.15rem ;
            background:white;
            /* width:100%; */
            display:flex;
            border-bottom: 1px solid #f2ecfe;
           
        }
        .groupImg{
                width:0.94rem;
                height:0.94rem;
                >img{
                    width:0.93rem;
                    height:0.93rem;
                }
              
            }
        .groupRigth{
                font-size:0.12rem;
                font-family: PingFangSC;

            }
        .groupName{
            margin-bottom:0.085rem;
        }
        .pinBtn {
                width: .8rem;
                height: 0.3rem;
                background: url("http://3g.baobeigezi.com/imgs/newIndex/ypBg.png") no-repeat;
                background-size: 100%;
                text-align: center;
                line-height: 0.25rem;
                color: #fff;
                font-size: .12rem;
                margin-bottom: 0.085rem;
                padding-left: 0.17rem;
            }
            .price {
                font-size: .12rem;
                font-family: PingFangSC;
                font-weight: 500;
                margin-right: .085rem;
                color: #BB361F;
            }
            .del {
                    text-decoration: line-through;
                    color: #999;
                    font-size: .12rem;
                }
                .goBtn {
                    display:inline-block;
                    width: 0.53rem;
                    height: .20rem;
                    background: rgba(187,54,31,1);
                    border-radius: 0.08rem;
                    text-align: center;
                    line-height: .20rem;
                    color: #fff;
                    margin-left:0.5rem;
                }
    }
    /* 活动 */

    .qingImg {
    margin-top: .2rem;
    width:100%;
    height:0.77rem;
    a{
        display:inline-block;
        width:100%;
        height:100%;
    }
    img{
        width:100%;
        border-radius:0.08rem;
    }
}
        .specialList{
            /* height:1.78rem; */
            width:100%;
            display:flex;
            flex-wrap:wrap;
            .specialLi {
            width: 49.2%;
            height: 0.84rem;
            margin-right: 0.02rem;
            margin-top: 0.042rem;
        }
            img{
                    width:100%;
                    border-radius: 0.08rem;
                }
}
/* 精选活动 */
.jingActive{
    width:100%;
    /* height:5.6rem; */
    .groupBg{
        height:0.3rem;
        line-height:0.3rem;
        padding-top:0.05rem;
    }
     .today {
    font-size: .16rem;
    font-family: PingFangSC-Semibold,PingFang SC;
    margin-left: .04rem;
    }
    .jingList{
        width:100%;
        /* height:5.75rem; */
    }
    .jingLi{
        width:100%;
        /* height:2.8rem; */
        margin-bottom:0.085rem;
        /* margin-top:0.25rem; */
        border-radius:0.08rem;
        a{
            display:inline-block;
            width:100%;
            height:1.08rem;
        }
        .jingBgimg{
            width:100%;
            /* height:0.8rem; */
            border-radius:0.08rem 0.08rem 0rem 0rem;
        }
    }
    .flashList{
        background:white;
        /* height: 1.65rem; */
        padding-top:0.085rem;
        border-top: 1px solid #e5e5e5;
        display:flex;
        overflow:auto; 
        .swiper-slide{
            text-align:center;
            width:0.72rem;
            height: 1.34rem;
            margin-right:0.04rem;
            display:flex;
            flex-direction:column;
            /* height: 1.65rem; */
            border-right: 1px solid #e5e5e5;
            >img{
                width:0.72rem;
                /* margin-bottom:0.085rem; */
            }
            .del {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 0.12rem;
                }
            .col_BB361F {
                    color: #BB361F;
                    font-size: 0.12rem;
                }
                .title {
                    /* width:100%; */
                    height:.16rem;
                    font-size: .12rem;
                    font-family: PingFangSC-Light,PingFang SC;
                    font-weight: 300;
                    color: #313131;
                    margin-bottom: .065rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display:inline-block;
                }
                    
            }
    
         }
       
    }
    .jingXuan{
             width:100%;
             background:white;
             /* height:3.36rem; */
             .groupBg{
        height:0.3rem;
        line-height:0.3rem;
        /* padding-top:0.05rem; */
            }
            .today {
            font-size: .16rem;
            font-family: PingFangSC-Semibold,PingFang SC;
            margin-left: .04rem;
            }
            .countryImgTit{
                padding:0.076rem 0.076rem 0rem 0.076rem
                >img{
                    margin:0 auto ;
                    width:2.97rem;
                    border-radius:0.08rem;
                }
            }
            .countryall{
            display:flex;
            overflow-x:auto;
            /* height:3rem; */
            /* flex-wrap:wrap; */
            
            /* padding:0.064rem 0.085rem 0rem 0.085rem; */
            .container{
                 padding:0.064rem 0 0rem 0.085rem;
                flex-shrink:0;
                display:flex;
                flex-wrap:wrap;
                width:100%;
                /* background:pink; */
                /* margin-right:.1rem; */
            }
            .countryItem {
                width:1.46rem;
                overflow:hidden;
                /* width:45%; */
            height: 0.55rem;
            margin-top:0.015rem;
            margin-right:0.013rem;
        }
            img{
                    width:1.46rem;
                    height:0.53rem;
                    border-radius: 0.05rem;
                }
}
         }
         /* 精选分类 */
         .fenlei{
             width:100%;
             height:3.6rem;
            .groupBg{
        height:0.3rem;
        line-height:0.3rem;
        /* padding-top:0.05rem; */
            }
            .today {
            font-size: .16rem;
            font-family: PingFangSC-Semibold,PingFang SC;
            margin-left: .04rem;
            }
            .jingXuanHeader{
                width:100%;
                height:1.28rem;
                display:flex;
            }
            .jingXuanHeaderLeft{
                width:1.54rem;
                height:1.28rem;
                border-radius:0.08rem;
                background:white;
                margin-right:0.03rem;
                >a{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
            }
            .classHeader {
                text-align:center;
            font-size: .12rem;
            color: #333333;
            letter-spacing: .005rem;
}
        .classPrice {
            border: 1px solid #BB361F;
            background: #fff;
            -webkit-border-radius: .16rem;
            -moz-border-radius: .16rem;
            border-radius: .08rem;
            font-size: .12rem;
            color: #BB361F;
            letter-spacing: 0;
            text-align: center;
            margin-top: .05rem;
            display: inline-block;
            width: 0.58rem;
            height: 0.13rem;
            line-height:0.13rem;
            padding: 0 .04rem;
        }
        .pImg{
            margin-top:0.064rem;
            >img{
                width:0.64rem;
            }
            
            
        }
            .jingXuanHeaderRight{
                width:1.54rem;
                height:1.28rem;
            
                >a{
                    display:flex;
                    width:1.54rem;
                    height:0.62rem;
                    background:white;
                    border-radius:0.08rem;
                    margin-bottom:0.05rem;
                }
            }
            .right1{
                    width:0.85rem;
                    height:0.5rem;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }
            .pImg_small{
             >img{
                 width:0.45rem;
                 margin-left:0.1rem;
             }   
            }

            .jingXuanList{
                width:100%;
                height:1.94rem;
                margin-top:0.03rem;
                padding-bottom:0.
                13rem;
                display:flex;
                background:white;
                border-radius:0.08rem;
                flex-wrap:wrap;
                li{
                    width:0.74rem;
                    height:0.90rem;
                    margin-top:0.03rem;
                    margin-right:0.03rem;
                    background:white;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    margin-right:0.03rem;
                }
                .hu{
                    width:100%;
                    background:#f5f5f5;
                    border-radius:0.15rem 0.15rem 0rem 0rem; 
                }
                .pImg{
                    background:white;text-align:center     
                }
                img{
                    width:0.45rem;
                }
            }

         }
         .text-overflow {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .hotBrand{
            width:100%;
            /* height:3.48rem; */
            /* margin:0rem 0.04rem; */
            margin-right:1rem;
            .brandImg{
                width:2.9rem;
                height:1.03rem;
                img{
                    width:2.9rem;
                    border-radius:0.08rem;
                }
            }
            .swiper-container{
                display:flex;
                flex-wrap:wrap;
                width:100%;
                height:3.11rem;  
            }
            .swiper-wrapper{
                width:100%;
                height:100%;
            }
            .slider-slide{
                margin-right:0.5rem;
            }
            .brandPr{
                width:2.8rem;
                height:2.04rem;
                margin:0rem 0.05rem;
                position:relative;
                background:white;
                border-radius:0.08rem;
            }
            .fenSi{
                width:2.63rem;
                height:0.51rem;
                display:flex;
                padding:0.085rem 0.085rem 0rem 0.085rem;
                margin-top:0.128rem;
                background:white;
            }
            .fenImg{
                width:0.51rem;
                border-radius:0.08rem;
                border: 1px solid #F2F2F2;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
                position:absolute;
                top:-0.1rem;
            }
            .fenSiRiht{
                position:absolute;

                left:0.75rem;
            }
            .fenName {
                    font-family: PingFangSC-Medium;
                    font-size: 0.12rem;
                    color: #333333;
                    letter-spacing: 0.34px;
                    position:relative;
                    }
            .goEvent {
                font-family: PingFangSC-Regular;
                font-size: .12rem;
                color: #FFFFFF;
                background: #BB3720;
                width: 0.68rem;
                height:0.17rem;
                display: block;
                position: absolute;
                top:-0.07rem;
                left:1.25rem;
                /* right: 0rem; */
                text-align: center;
                line-height: 0.17rem;
                border-radius: 0.08rem;
            }
            .span1{
                font-size:.12rem;
                width:1.96rem;
                font-family: PingFangSC-Medium;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .all_lis{
                display:flex;
            }
            .lis{
                width:0.93rem;
                height:1.23rem;
                margin-top:0.13rem; 
                background:white;
            }
            .pImg{
                width:0.83rem;
                height:0.83rem;
                margin:0rem 0.05rem;
                >img{
                    width:0.82rem;
                }
            }
            .pName{
                font-size:0.12rem;
                margin:0.08rem 0.05rem 0 0.05rem;
                width:0.82rem;
            }
            .pPrice{
                font-size:0.12rem;
                letter-spacing:0.19px;
                /* text-align:center; */
                margin-left:0.05rem;
            }
        }
        .brandList{
            margin-top:0.2rem;
            display:flex;
            flex-wrap:wrap;
            .brandLi {
                display:inline-block;
                width:1.01rem;
                /* height:0.83rem; */
                margin-right:0.028rem;
                margin-bottom:0.028rem;
                position:relative;
                overflow:hidden;
            }
            .brandBg{
                width:1.01rem;
                 border-radius:0.08rem;
            }
            .bg {
                width:1.01rem;
                height:0.76rem;
                position:absolute;
                left: 0;
                top: 0;
                background: rgba(0,0,0,0.3);
                border-radius: 8px;
            }
            .brandLogo{
                position:absolute;
                left:0.33rem;
                top:0.15rem;
                width:0.33rem;
            }
            .brDesc {
                text-align:center;
                font-size: .12rem;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: #fff;
                position: absolute;
                top: 0.5rem;
                width: 100%;
            }

        }
        /* 全球榜单的第四个 */
        .qingImg{
            margin-top:0.085rem;
            >img{
                width:3.11rem;
            }
        } 
        /* 育儿百科 */
        .babyIndex{
            .babyBanner{
                img{
                    width:3.11rem;
                }
            }
            .earlyLi{
                display:flex;
                border-top: 1px solid #e4e4e4;
                padding:0.085rem;
                background:white;
            }
            .earlyLiImg{             
                margin-right:0.085rem;
                img{
                    width:0.6rem;
                }
            }
            .earlyRirhtTit{
                font-size:0.12rem;
                color:#313131;
                font-family: PingFangSC;
            }
            .cmsArticleKeyword{
                font-size:0.12rem;
                color:#999999;
                font-family: PingFangSC;
            }
            .halButtom{
                margin-top:0.1rem;
                display:flex;
                font-size:0.12rem;
                color:#999;
                font-family: PingFangSC;
                img{
                    width:0.13rem;
                    margin-right:0.04rem;
                }
                .fl{
                    margin-left:0.17rem;
                /* width:0.5rem; */
                margin-right:0.17rem;
            }
            }
         

        }

/* 通用的题目 */
        .groupBg{
        height:0.3rem;
        line-height:0.3rem;
        /* padding-top:0.05rem; */
            }
            .today {
            font-size: .16rem;
            font-family: PingFangSC-Semibold,PingFang SC;
            margin-left: .04rem;
            }
`
export const WaterFull=styled.div`
height:100%;
   /* 导航栏 */
    .waterFullNav{
        display:flex;
        width:100%;
        height:0.3rem;

    }
    .waterScroll{
        overflow:hidden;
        height:100%;
    }
    .active{
    border-bottom:2px solid #313131 !important;
    color:#000 !important;
}
.nav{
    height:.43rem;
    /* position:sticky;
    top:.37rem;
    z-index:10; */
    background:#fff;
    /* display:flex;
    flex-wrap:nowrap; */
    padding: 0 .1rem;
    ul{
        width:100%;
        display:flex;
        /* justify-content:space-around; */
        align-items:center;
        height:100%;
        overflow:scroll;
        li{
            font-size:.12rem;
            flex-shrink:0;
            color:#bdbdbd;
            margin-right:.1rem;
        }
    }}

    /* .am-tabs-default-bar-content{
        transform: translate3d(-25%, 0px, 0px);
    }
    .am-tabs-default-bar-content{
        
    } */
    .waterFullNav_li{
        display:flex;
        font-size:0.12rem;
        color:#313131;
        font-family: PingFangSC-Medium;
        /* height:0.07rem; */
        /* width:20%; */
    }
    .am-tabs-default-bar-tab{
        width:20% !important;
    }
    .am-tabs-default-bar-underline{
        width:20% !important;
    }
    /* 下面的列表页 */
    .waterList{
        padding:0.04rem 0.04rem 0rem 0.04rem;
        background:#fff;
    }
    .water{
        padding-top:0.085rem;
        display:flex;
        flex-wrap:wrap;
        padding-bottom: 0.4rem;
    }
    .lis{
        background:white;
        border-radius:0.08rem;
        width:1.5rem;
        height:2.2rem;
        margin:0.03rem;
        margin-bottom:0.08rem;
    }
    .lazy{
        width:1.5rem;
        border-radius:0.08rem;
    }
    .waterButtom {
    font-size: .12rem;
    background-color: #fff;
    /* border-radius: 0 0 .3rem .3rem; */
    padding: 0rem 0.08rem 0.08rem;
}
    .waterName{
        margin-top:0.12rem;
        font-size:0.11rem;
        color:#313131;
        font-family: "Ping Fang SC Semibold";
    }
    .waterPrice {
    margin-top: .08rem;
    color: #313131;
    font-weight:bolder;
    font-size:0.12rem;
    font-family: "Ping Fang SC Semibold";
    /* line-height: .3rem; */
}
    .text-overflow2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}


`

