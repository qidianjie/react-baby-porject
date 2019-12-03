import styled from 'styled-components'
import bg from '../../static/image/ToTop2x.png'
import pt2 from '../../static/image/pt2.png'
export const CommonHeader=styled.div`
    width:100%;
    height:0.36rem;
    background:white;
    /* overflow:hidden; */

    .am-button{
        background: #dcb86c  !important;
    }
    .popup-list .am-list-body {
        height: 210px;
        overflow: auto;
        }



    .common_header_bar{
        position:relative;
        width:100%;
        height:0.36rem;
        em{
            top:0.1rem;
            left:0.13rem;
            position: absolute;
            display:flex;
            align-items:center;
            img{
                width:0.11rem;  
            }
        }
        i{
            position: absolute;
            top:0.1rem;
            right:0.4rem;
            img{
                width:0.16rem;
            }
        }
       b{
            position: absolute;
            top:0.1rem;
            right:0.15rem;
            img{
                width:0.16rem;
            }
        }
    }

`

export const Wrapper=styled.div`
    /* margin-top:0.36rem; */
    overflow:scroll;
    /* padding-bottom:1.1rem; */

   
    em{
        font-style:normal;
    }
    .canshu{
        margin-right:1rem !important;
    }
    .banner1{
        width:3.2rem;
        height: 3.2rem;
        overflow:hidden;
        /* height:3.2rem; */
    }
    .choose{
        color:#5d5d5d !important;
    }
    .groupBgc{
        padding:0.08rem 0.08rem;
        height:0.6rem;
        background:url(${pt2}) no-repeat;
        background-size:100% 100%;
        font-family: PingFangSC-Regular;
    .groupPrice {
            font-size: .15rem;
            margin-right: 0.06rem;
            color:white;    
        }
        .numGroup{
            margin-top:0.05rem;
        }
        em{
            margin-right:0.08rem;
            font-weight: 700;
            font-style: normal;
            font-size: .18rem;
            color:white;
        }
        .unitPrice{
            color:white;
            font-size:0.12rem;
        }
        i {
            text-decoration: line-through;
            color:white;
            font-size:0.12rem;
            font-style:normal;
            
        }
        .spell{
            color:white;
            font-size:0.12rem;
            float:right;
        }
      .span1 {
          font-size:0.12rem;
            width: .17rem;
            height: .17rem;
            color: #BB361F;
            display: inline-block;
            background: #fff;
            border-radius: 0.04rem 0.04rem 0px 0.04rem;
            text-align: center;
            line-height: .17rem;
            border: 1px solid #fff;
            border-right: none;
        }
        .span2 {
            color:white;
            font-size:0.12rem;
            width: .3rem;
            height: .17rem;
            border: 1px solid #fff;
            display: inline-block;
            text-align: center;
            /* line-height: .15rem; */
            margin-right: .1rem;
            border-radius: 0px 0.04rem 0.04rem 0px;
            border-left: none;
        }
        .span3{
            color:white;
            font-size:0.12rem;
        }
    }
 


    .swiper-lazy{
        width:3.2rem;
        height:3.2rem;
    }
    .proPrice{
        background-image:url(${pt2});
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        padding:0.08rem;
        /* padding-right:0rem; */
        background:white;
        font-size:0.12rem;
        color:#000;
        em{
            font-weight: 700;
            font-style: normal;
            font-size:0.17rem;
            margin-right:0.05rem;
           
        }
        del{
            color:#666;
        }
       
    }
    .timeDownLists{
        width:100%;
        background:red;
           padding:0rem 0.08rem 0.128rem 0.08rem;
        }
        .xinPname {
            background-color: #fff;
            padding: 0rem 0.08rem;
        }
        .proTitle {
            margin-top:0.1rem;
            background-color: #fff;
            font-size: .12rem;
            color: #333333;
            padding-right:0.08rem;
            /* line-height: 1.3; */
            font-family: "Ping Fang SC Semibold";
}
        .proMainMsg{
            padding:0.08rem 0.07rem;
            margin-bottom:0.08rem;
            background:white;
        }
        .specification {
            display:flex;
            background:white;
                height: 0.38rem;
                line-height: 0.38rem;
                padding: 0 .076rem;
                /* overflow: hidden; */
                /* display: block; */
             margin-bottom: 0.085rem;
             position: relative;
             img{
                 margin-top:0.05rem;
                 width:0.3rem;
                 margin-right:0.085rem;
             }
             .titTxt {

                font-size: .12rem;
                color: #999999;
                font-family: PingFangSC-Regular;
            }
            .checkSpan{
                font-size:0.13rem;
                color:#333;
                font-family: PingFangSC-Regular;
            }
            .detailsIcon{
                position:absolute;
                right:0.08rem;
                top:0.10rem;
                img{
                    width:0.05rem;
                }
            }
}
        .brandList{
            padding:0.085rem 0.076rem;
            background:#fff;
            display:flex;
            .brandImg{
                
                    width:0.52rem;
                    margin-right:0.085rem;
            }
            .brandDesc{
                
            }
            .brandName {
                font-size: .14rem;
                font-family: SFNSDisplay;
                color: #333333;
                display: block;
                margin-top: .085rem;
                width: 1.62rem;
            }
            .saleNum {
                font-size: .12rem;
                font-family: PingFangSC-Regular,PingFangSC;
                color: #999999;
                display: block;
            }
            .goBrand {
                width: 0.59rem;
                height: .22rem;
                border-radius: 0.08rem;
                border: 1px solid #BB361F;
                display: block;
                text-align: center;
                line-height: .22rem;
                font-size: .12rem;
                color: #BB361F;
                margin-top: .15rem;
                font-family: PingFangSC-Regular,PingFangSC;
                margin-left:0.1rem;
            }
        }
        /* 税 */
        .freShui{
            padding:0.085rem;
            background:white;
            .detailT {
                font-size: .13rem;
                color: #313131;
                font-family: "Ping Fang SC Semibold";
            }
            .typeList{
                margin-top:0.1rem;
                display:flex;
                color:#595959;
                font-size:0.12rem;
                font-family: PingFangSC-Regular;
            }
            .peiKey{
                width:0.6rem;
            }
            .val{
                width:2.3rem;
                
            }
            i{
                font-size:0.11rem;
                font-style:normal;
            }
            span{
                    font-size:0.11rem;
                }
            /* .val{
                span{
                     font-size:0.11rem; 
                }
              
                width:2.3rem;
            } */
        }
        .descTabPage{
            margin-top:0.085rem;
            background:white;
            
            .tapNav{
                height:0.36rem;
                display:flex;
                justify-content:space-around;
                align-items:center;
                padding:0rem 0.23rem;
                color:#333;
                font-size:0.12rem;
                font-family: PingFangSC-Regular;
            }
            .tapItem{
                 padding-top:0.06rem;
                 img{
                     width:3.2rem;
                 }
                 }
                 h3{
                     height:0.16rem;
                 }
               
        }
        .comment{
                    height:2rem;
                    margin-top:0.08rem;
                    background:white;
                    overflow:hidden;
                    .itemTitle{
                        padding:0.076rem;
                        position: relative;
                        /* width:100%; */
                        display:inline-block;
                    }
                    .detailT {
                    font-size: .13rem;
                    color: #313131;
                    font-family: "Ping Fang SC Semibold";
                }
                    .score {
                        color: #313131;
                        font-size: .12rem;
                    }
                    .commentScore {
                        font-size:0.12rem;
                        padding-left: .05rem;
                        color: #313131;
                        position: absolute;
                        right: -2rem;
                        font-family: "Ping Fang SC Semibold";
                    }
                    .avg{
                        margin-right:0.05rem;
                    }
                    .detailsIcon{
                        position: absolute;
                        right:-2.2rem;
                        top:.12rem;
                        img{
                            width:0.05rem;
                        }
                    }
                    .commentList{
                        height:0.64rem;
                        display:flex;
                        position: relative;
                        /* flex-direction:column; */
                        }
                    .commentLists{
                        padding:0.08rem;
                        height:0.63rem;
                    }
                    .userImg{
                            width:0.24rem;
                        }
                        .userName {
                        margin-top:0.02rem;
                        color: #333333;
                        font-size: .12rem;
                        float: left;
                        margin-right: 0.08rem;
                        font-family: PingFangSC-Regular;
                    }
                .listContent{
                        margin-left:0.12rem;
                        padding-bottom:0.08rem;
                        display:flex;
                        .commentStar{
                            padding-top:0.03rem;
                            width:0.7rem;  
                        }
                        .starSelected{
                            width:100%;
                        }
                        }
                  
                }
                .commentWords{
                    position: absolute;
                    /* width:100%; */
                    margin-top:0.03rem;
                    margin-bottom:0.076rem;
                    color: #5d5d5d;
                    font-size:0.12rem;
                    font-family: PingFangSC-Regular;
                    bottom:0rem;
                }
                /* 大家都在看 */
                .water{
                        padding-top:0.085px;
                        height:auto;
                        padding-bottom:0.4rem;
                    .cartRecommend_tit {
                        width:100%;
                        height: .35rem;
                        line-height: .35rem;
                        text-align: center;
                        font-size: .12rem;
                        color: #313131;
                        font-weight: 600;
                        font-family: PingFangSC-Regular;
                    }
                    .clearfix{
                        width:100%;
                        /* padding-bottom:0.5rem; */
                    }
                    .lis{
                        width:1.53rem;
                        margin:0.03rem;
                        height:2.3rem;
                        background:white;
                        border-radius:0.08rem;
                    }
                    .imgDiv{
                        img{
                            width:1.54rem;
                            border-radius:0.08rem 0.08rem 0rem 0rem;
                        }
                    }
                    .waterButtom {
                    background-color: #fff;
                    /* border-radius: 0 0 .3rem .3rem; */
                    padding: 0 0.08rem 0.08rem 0.08rem;
                }
                    .clearfix{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    .waterName {
                            font-family: "Ping Fang SC Semibold";
                            margin-top: .12rem;
                            color: #313131;
                            height: .29rem;
                            line-height: .29rem;
                            font-size:0.12rem;
                            width:1.34rem;
                        }
                        .text-overflow {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .waterPrice {
                    margin-top: .08rem;
                    color: #313131;
                    font-weight: 700;
                    font-size:0.12rem;
                    font-family: PingFangSC-Regular
                    /* line-height: .3rem; */
                }
                    
                }

`

export const Footer=styled.div`

    width:100%;
    position: fixed;
    height:0.37rem;
    bottom:0;
    background:white;
    display:flex;
    /* justify-content:space-between; */
    align-items:center;
    em{
        font-style:normal;
    }
    img{
       width: 0.18rem;
    }
    .myCustomService{
        margin-left:0.2rem;
    }
    .loveBtn{
        margin-left:0.2rem;
    }
    .shopCart{
        margin-left:0.2rem;
    }
    .addCartBtn {
        font-family: PingFangSC-Regular;
        text-align:center;
        height: 0.36rem;
        background: #dcb86c;
        color: #fff;
        font-size: .12rem;
         width:0.9rem;
        line-height: 0.36rem;
        padding: 0;
        border-radius: 6px 0 0 6px;
        position: absolute;
        right:0.9rem;
    /* margin-left:0.6rem */
}
.addCartBtn1 {
        font-family: PingFangSC-Regular;
        text-align:center;
        height: 0.36rem;
        background: #dcb86c;
        color: #fff;
        font-size: .12rem;
         width:0.9rem;
      
        padding: 0;
        border-radius: 6px 0 0 6px;
        position: absolute;
        right:0.9rem;
    /* margin-left:0.6rem */
}

.groupCar1{
    display:block;
    i{
       font-style:normal; 
    }  
}

.buyBtn {
    font-family: PingFangSC-Regular;
    text-align:center;
        height: 0.36rem;
        width:0.9rem;
    background: #BB361F;
    color: #fff;
    font-size: .12rem;
    line-height: 0.36rem;
    padding: 0;
    border-radius: 0 6px 6px 0;
    position: absolute;
    right:0rem
}
.buyBtn1 {
    font-family: PingFangSC-Regular;
    text-align:center;
        height: 0.36rem;
        width:0.9rem;
    background: #BB361F;
    color: #fff;
    font-size: .12rem;
    
    padding: 0;
    border-radius: 0 6px 6px 0;
    position: absolute;
    right:0rem
}
`
export const ToTop=styled.a.attrs({
    // href:"header"
})
`
    background-image:url(${bg});
    width: 0.26rem;
    height:0.26rem;
    background-size: 100%;
    position: fixed;
    right: .1rem;
    bottom: 0.5rem;
    /* display: none; */
    z-index: 10;
`