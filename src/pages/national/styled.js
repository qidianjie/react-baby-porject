import styled from "styled-components";

export const NationalContainer=styled.div`
    position:absolute;
    left: 0;
    top:0;
    bottom:0;
    right:0;
    padding-bottom:0.38rem;
    .header{
        width:100%;
        height:0.38rem;
        padding:0 .2rem 0 0.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:0.15rem;
        letter-spacing:0.04rem;
        position:fixed;
        background:#fff;
        left:0;
        top:0;
        z-index:10;
        span:nth-of-type(1){
            font-size:0.18rem;
        }
    }
    .main_img{
        height:1.66rem;
        width:100%;
        margin-top:0.38rem;
        img{
            width:100%;
            height:100%;
        }
    }
    /* 走进韩国 */
    .come{
        height:0.48rem;
        border-bottom: 1px solid #999;
        background:#fff;
        width:100%;
        ul{
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            li{

                font-size:0.14rem;
                text-align:center;
                color: #bdbdbd;
                span{
                    padding-bottom:0.04rem;
                    margin:0 0.08rem;
                }
            }
        }
    }
    .comeActive{
        border-bottom:3px solid #313131; 
    }
    .topActive{
        position:fixed;
        left:0;
        top:0.38rem;
        z-index:10;
    }
    .public_title{
        height:0.42rem;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.14rem;
        color:#000;
        font-weight:600;
        /* float:left; */
        position:relative;

    }
    .come_img{
        height:1.58rem;
        width:100%;
        img{
            width:100%;
            height:100%;
        }
    }
    p{
        font-size:0.13rem;
        color: #333;
        margin:0.12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        text-indent:0.26rem;
        line-height:0.18rem;
    }
    .empty{
        height:0.1rem;
        background:#f1f1f1;
    }
    .goods{
        display:flex;
        flex-wrap:wrap;

        li{
            width:46%;
            height:1.48rem;
            margin:0.05rem;
            position: relative;
            img{
                width:100%;
                height:100%;
            }
            .goods_info{
                position:absolute;
                left:0;
                top:0.92rem;
            }
        }
    }
    .goods_info{
        display:flex;
        flex-direction:column;
        justify-content:center;
        background:#fff;
        opacity:0.5;
        p{
            width: 1.41rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: .13rem;
            color: #666;
            text-indent:0;
            display:block;
            margin:0.04rem 0 0.04rem 0.06rem;
        }
        span{
            font-size:0.13rem;
            text-align:center;
        }
    }
    /* 必备榜单 */
    .must_goods{
        background:#f1f1f1;
        padding:0.1rem ;

        li{
            height:1.1rem;
            border-radius:0.06rem;
            background:#fff;
            display:flex;
            align-items:center;
            margin-bottom:0.1rem;
        }
        .img{
            width:0.93rem;
            height:0.93rem;
            padding:0.13rem 0 0 0.1rem;
            margin-right:0.1rem;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .right{
        font-size:0.13rem;
        h3{
            font-weight:600;
        }
        p{
            width: 1.74rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #666;
            text-indent:0;
            display:block;
            margin:0.04rem 0 0.04rem 0;
        }
        span{
            color: #ee5d58;
            padding-right:0.1rem;
            font-size:0.15rem;
        }
        i{
            color: #b2b2b2;
            text-decoration:line-through;
        } 
    }
    /* 明星大牌 */
    .star{
        padding:0 0.08rem;
        li{
            width:0.96rem;
            height:1.38rem;
            float:left;
            margin-right:0.08rem;
            position: relative;
            margin-bottom:0.1rem;

        }
        li:nth-child(3n){
            margin-right:0;
        }

    }
    .star_img{
        width:0.96rem;
        height:1rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .star_title{
        width:100%;
        height:0.38rem;
        background:#f1f1f1;
        color:#000;
        font-size:0.14rem;
        text-align:center;
        padding-top:0.16rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .logo{
        width:0.27rem;
        height:0.27rem;
        position: absolute;
        left:0.34rem;
        top:0.86rem;
        img{
            width:100%;
            height:100%;
        }
    }
`