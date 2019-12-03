import styled from "styled-components";

export const BaikeContainer=styled.div`
    .top{
        height:0.38rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 0.15rem;
        font-size:.16rem;
        position:fixed;
        left:0;
        top:0;
        background:#fff;
        h3{
            font-weight:400;
            font-size:.16rem;
        }
    }
    ul{
        margin-top:0.38rem;
        .li{
            border-top: 1px solid #e4e4e4;
            padding: .1rem;
            height: .82rem;
            display:flex;

            .img{
                width:0.6rem;
                height:0.6rem;
                margin-right:0.1rem;
                img{
                    width:100%;
                    height:100%;
                    border-radius:0.08rem;
                }
            }
        }
        .right{
            font-size:0.14rem;
            h4{
                color: rgba(49,49,49,1);
                font-weight:normal;
                width:2.3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p{
                font-family: PingFangSC;
                color: #999;
                margin-top: .05rem;
                width:2.3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .praise{
            display:flex;
            float:left;
            color: rgba(153,153,153,1);
            margin-top:0.09rem;
            margin-right:0.2rem;
            font-size:0.12rem;
            img{
                width:0.13rem;
                margin-right:0.04rem;
            
            }
        }
    }

`
