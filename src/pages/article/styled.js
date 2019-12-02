import styled from "styled-components";

export const ArticleContainer=styled.div`
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
            width:2.3rem;
            font-weight:400;
            font-size:.16rem;
            padding-left:0.1rem;
            text-align:center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .main{
        margin-top:0.38rem;
        .article_img{
            width:100%;
            height:1.82rem;
            img{
                width:100%;
                height:100%;

            }
        }
        p{
            text-indent:0.28rem;
            margin:.2rem 0;
            font-size:0.05rem;
            line-height:0.2rem;
        }
    }
    


    /* footer */
    .footer{
        border-top: 1px solid #999;
        padding: .1rem;
        position:fixed;
        bottom:0;
        height:0.38rem;
        width:100%;
        display:flex;
        align-items:center;
        background:#fff;
        input{
            width:1.7rem;
            height:0.16rem;
            font-size:0.14rem;
            outline:none;
            border:none;
            padding-left: .1rem;
            border-left: 1px solid #e4e4e4;
        }
        img{
            width:0.2rem;
            height:0.2rem;
        }
        button{
            color: rgba(187,54,31,1);
            margin-right: .1rem;
            outline:none;
            border: none;
            background: 0 0;
            font-size:0.12rem;
        }
        a{
            display:inline-block;
            width:0.22rem;
            height:0.22rem;
            background:#0ff;
            margin-right: 0.12rem;
        }
        a:nth-of-type(3){
            margin-right:0;
        }
        span{
            position:absolute;
            left:2.68rem;
            top:0.06rem;
            font-size:0.1rem;
            width:0.12rem;
            height:0.12rem;
            text-align:center;
            line-height:0.12rem;
            display:inline-block;
            border-radius:50%;
            border:1px solid #999;
            z-index:100;
            color:#000;
            background:red;
        }
        span:nth-of-type(2){
            left:2.85rem;
            width:0.29rem;
            height:0.12rem;
            border-radius:.05rem;
        }
    }

`
