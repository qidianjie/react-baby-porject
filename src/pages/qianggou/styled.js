import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background-image:url("http://3g.baobeigezi.com/imgs/newIndex/flashBg.png");
background-repeat:no-repeat;
background-size:100%;
.header{
    height:.37rem;
    padding:0 .1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    img{
        width:.64rem;
        height:.17rem;
    }
    a{
        position:absolute;
        left:.1rem;
        font-size:.16rem;
        color:#fff;
    }
}
/* 进度条 */
.progress-container{
    width:70%;
}
.show-info {
  margin-top: 0.18rem;
  display: flex;
  align-items: center;
}
.show-info .progress {
  margin-right: 5px;
  width: 100%;
}
.am-progress-outer{
    background:#FFD0CE;
    border-radius:0.2rem;
}
.am-progress-bar{
    border: 0.03rem solid #FC251F;
    border-radius:0.1rem;
    background:#FC251F!important;
}

.comming{
    margin-top:.12rem;
    padding:0 .1rem;
    h4{
        font-size:.16rem;
        color:#fff;
    }
    span{
        font-size:.12rem;
        background:#fff;
        color:#f00;
        display:inline;
        padding:0 .05rem;
        border-radius:.08rem;
    }
}
.flash{
    padding:.09rem;
    .flash_content{
        width:100%;
        li{
            padding:.09rem;
            display:flex;
            background:#fff;
            border-radius:.07rem;
            margin-bottom:.09rem;
            img{
                width:.77rem;
                height:.77rem;
                margin-right:.09rem;
            }
            .flash_content_right{
                flex:1;
                width:100%;
                h4{
                    font-size:.12rem;
                    margin-bottom:.03rem;
                }
                p{
                    font-size:.12rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    width:1.92rem;;
                }
                .jindutiao{
                    display:flex;
                    align-items:center;
                    span{
                        width:1.34rem;
                        height:.07rem;
                        display:inline-block;
                        background:#000;
                        border-radius:.05rem;
                        flex:1;
                    }                
                    i{
                        color:#bb361f;
                        font-size:.12rem;
                        font-style:normal;
                        padding-left:0.1rem;
                    } 

                }
                .price{
                    display:flex;
                    align-items:center;
                    font-size:.12rem;
                    margin-top:.08rem;
                    span{
                        color:#bb361f;
                    }
                    del{
                        color:#999;
                        margin:.03rem 0 0 .09rem;
                        flex:1;
                    }
                    a{
                        display:inline-block;
                        width:.49rem;
                        height:.2rem;
                        background:#bb361f;
                        color:#fff;
                        text-align:center;
                        line-height:.2rem;
                        border-radius:.05rem;
                    }
                }
            }
        }
    }
}
`