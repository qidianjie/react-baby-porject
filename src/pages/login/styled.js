import styled from "styled-components";

export const LoginContainer=styled.div`
    height:100%;
    width:100%;
    background:url("http://3g.baobeigezi.com/imgs/login/loginBg.png") no-repeat;
    background-size:100% 100%;
    padding-top:0.84rem;
    .header{
        height:0.38rem;
    }
    .logo{
        width:1.08rem;
        height:0.38rem;
        margin:0 auto;
        img{
            width:100%;
            height:100%;
        }
    }
    form{
        width:2.6rem;
        margin:0.6rem auto 0;
        label{
            display:block;
            width:100%;
            border-bottom:2px solid #FFFFFF;
            font-size: 0;
            padding-bottom: .08rem;
            padding-top: .18rem;
        }
        input{
            height:0.2rem;
            width:100%;
            border:none;
            outline:none;
            font-size:0.14rem;
            background:none;
            padding-left:0.26rem;
        }
        input::-webkit-input-placeholder { 
            color: #fff; 
            opacity:0.7;
        } 
        button{
            width:100%;
            height:0.38rem;
            margin-top:0.32rem;
            background:#fff;
            border-radius:0.08rem;
            line-height:0.38rem;
            text-align:center;
            font-size:0.14rem;
        }

    }
    .register{
        font-size:0.14rem;
        height:0.38rem;
        margin:0.7rem auto 0;
        text-align:center;
        span{
            padding:0.04rem 0.08rem;
            color:#999;
            font-size:.16rem;
            /* border:1px solid #000; */
            /* border-radius:0.05rem; */
        }
        span:nth-of-type(1){
            margin-right:0.4rem;
            margin-left:0.1rem;
        }
    }

`

