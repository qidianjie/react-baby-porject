import styled from "styled-components";

export const MineContainer=styled.div`
    height:100%;
    background:#f4f4f4 url("https://3g.baobeigezi.com/imgs/mycenter/bg.png") no-repeat 0 -0.38rem;
    background-size:100%;
    /* header */
    .header{
        height:0.38rem;
        padding:0 0.1rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:0.16rem;
        position:fixed;
        left:0;
        top:0;
        background:url("https://3g.baobeigezi.com/imgs/mycenter/bg.png") no-repeat;
        background-size:100%;
        span{
            font-size:0.18rem;
        }
        span:nth-of-type(2){
            font-size:0.24rem;
            font-weight:600;
        }
    }
    /* login and register */
    .login{
        display:flex;
        margin-top:0.38rem;
        height:0.43rem;
        font-size:0.14rem;
        padding:0.5rem 0.1rem 0;
        align-items:center;
        span{
            padding: .17rem .1rem
        }
    }
    .name_img{
        width:0.43rem;
        height:0.43rem;
        margin-right:0.06rem;

        img{
            width:100%;
            height:100%;
        }
    }
    .money{
        height:0.72rem;
        padding:0 0.1rem;
        margin-top:0.42rem;
        ul{
            width:100%;
            height:100%;
            border-radius:0.08rem;
            background:#fff;
            padding:0.15rem 0 0.17rem 0;
            display:flex;
            li{
                width:25%;
                height:100%;
                border-right:1px solid #eee;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:center;
                font-size:0.13rem;
                i{
                    font-size:0.18rem;
                }
            }
            li:nth-child(4){
                border-right:none;
            }
        }
    }
    /* 订单 */
    .order{
        width:100%;
        background:#fff;
        margin:0.1rem 0;
        p{
            display:flex;
            height:0.42rem;
            justify-content:space-between;
            align-items:center;
            font-size:0.13rem;
            padding:0 0.1rem;
            span:nth-of-type(2){
                font-size:0.14rem;
            }    
        }
        ul{
            width:100%;
            height:0.56rem;
            display:flex;
            padding: .03rem 0 .14rem 0;
            li{
                width:20%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:center;
                font-size:0.13rem;
                i{
                    font-size:0.18rem;
                }
            }
        }
    }
    /* 我的拼团 */
    .info{
        background:#fff;
        li{
            padding:0 0.1rem;
            height:0.42rem;
            border-bottom:1px solid #eee;
            display:flex;
            justify-content:space-between;
            align-items:center;
            font-size:0.13rem;
            i{
                font-style:normal;
                padding-right:0.16rem;
                font-size:0.18rem;
            }
            span{
                font-size:0.14rem;
            }
            p{
                flex:1
            }
        }
    }
    .all_look{
        height:0.42rem;
        font-size:0.13rem;
        font-weight:600;
        line-height:0.42rem;
        margin-top:0.05rem;
        text-align:center;
    }
    ol{
        width:100%;
        background:#f4f4f4;
        display:flex;
        flex-wrap:wrap;
        padding-bottom:0.5rem;
        .mine_li{
            width:48%;
            background:#fff;
            border-radius:0.08rem;
            margin:1%;
            height:2.12rem;
        }
        p{
            margin-top: .12rem;
            color: #313131;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size:.12rem;
            padding:0 0.04rem 0.04rem;
        }
        span{
            color: #313131;
            font-weight: 700;
            font-size:0.13rem;
            margin-left:0.06rem;
        }
    }
    .goods_img{
        height:1.54rem;
        img{
            width:100%;
            height:100%;
            border-radius:0.08rem 0.08rem 0 0;
        }
    }
`
