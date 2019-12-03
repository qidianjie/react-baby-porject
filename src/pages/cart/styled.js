import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
.top{
    position:sticky;
    top:0;
    z-index:10;
    background:#fff;
}
.header{
    height:.37rem;
    display:flex;
    justify-content: center;
    align-items:center;
    padding:0 .1rem;
    border-bottom:1px solid #ccc;
    a{
        font-size:.20rem;
        position:absolute;
        left:.1rem;
    }
    span{
        font-size:.15rem;
    }
    i{
        position:absolute;
        right:.1rem;
        font-size:.14rem;
        font-style:normal;
    }
}


/* 购物车部分 */
.cart{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding-bottom:.40rem;
    overflow:scroll;
    .tixing{
        padding:.37rem .1rem 0;
        /* height:.34rem; */
        color:#a9a9a9;
        font-size:.12rem; 
        line-height:.34rem;
        background:#f6f6d3;
    }
}
.cart_item{
    width:100%;
    overflow:hidden;
    display:flex;
    align-items:center;
    background:#fff;
    /* display:none; */
    .cart_item_radio{
        width:.35rem;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
            width:.15rem;
            height:.15rem;
        }
    }
    .cart_item_content{
        padding:.09rem .05rem .09rem 0;
        display:flex;
        align-items:center;
        width:100%;
        img{
            width:.77rem;
            margin-right:.1rem;
        }
        .cart_item_right{
            flex:1;
            h5{
                font-size:.12rem;
            }
            p{
                font-size:.12rem;
                width:1.28rem;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            }
            .cart_item_price{
                display:flex;
                align-items:center;
                .cart_item_price_left{
                    span{
                        color:#bdbdbd;
                        font-size:.12rem;
                        display:block;
                    }
                    i{
                        font-size:.12rem;
                        font-style:normal;
                        margin-top:.05rem;
                    }
                }
                p{
                    flex:1;
                    text-align:right;
                    display:flex;
                    align-items:center;
                    justify-content: flex-end;
                    a{
                        width:.21rem;
                        height:.16rem;
                        background:#fff;
                        color:#999;
                        display:inline-block;
                        text-align:center;
                        line-height:.1rem;
                        border:1px solid #999;
                        &:nth-child(1){
                            border-radius:.05rem 0 0 .05rem;
                        }
                        &:nth-child(3){
                            border-radius:.0 .05rem .05rem 0 ;
                        }
                    }
                    input{
                        outline:none;
                        width:.26rem;
                        height:.16rem;
                        border:none;
                        border-top:1px solid #999;
                        border-bottom:1px solid #999;
                        text-align:center;
                        font-size:.12rem;
                        color:#999;
                    }
                }
            }
        }
    }
}

/* 购物车背景图片 */
.bg{
    padding:.31rem 0 .12rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:#fff;
    margin-bottom:.18rem;
    img{
        width:.52rem;
        margin-bottom:.09rem;
    }
    span{
        font-size:.12rem;
        color:#9a9a9a;
    }
}
/* 数量 */
.goodsList_count{
    height:.42rem;
    padding:0 .1rem;
    border-top:1px solid #999;
    background:#fff;
    display:flex;
    align-items:center;
    margin-bottom:.18rem;
    display:none;
    p{
        font-size:.12rem;
        color:#919191;
        letter-spacing:.01rem;
        span{
            font-size:.12rem;
            color:#313131;
            
        }
    }
}

/* 结算 */
.play{
    width:100%;
     padding:0 .1rem;
    height:.38rem;
    display:flex;
    align-items:center;
    background:#fff;
    position:fixed;
    bottom:.4rem;
    input{
        width:.15rem;
        height:.15rem;
    }
    p{
        flex:1;
        margin-left:.1rem;
        font-size:.12rem;
        color:#919192;
        span{
            display:block;
            color:#000;
        }
    }
    div{
        height:100%;
        width:.86rem;
        background:#bb361f;
        color:#fff;
        font-size:.12rem;
        line-height:.38rem;
        text-align:center;
        margin-right:.15rem;
        border-radius:.08rem;
        i{
            font-style:normal;
        }
    }
}

/* 商品列表 */
.goods{
    padding:0 .05rem;
    overflow:hidden;
    h5{
        font-size:.12rem;
        text-align:center;
        line-height:.34rem;
        height:.34rem;
    }
    ul{
        width:100%;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        li{
            width:49%;
            background:#fff;
            padding-bottom:.07rem;
            margin-bottom:.05rem;
            img{
                width:1.54rem;
                height:1.42rem;
            }
            h6{
                font-size:.12rem;
                width:1.37rem;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                margin-top:.12rem;
            }
            p{
                font-size:.12rem;
                margin-top:.09rem;
            }
        }
    }
}

`