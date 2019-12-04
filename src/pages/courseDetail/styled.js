import styled from "styled-components";
export const Course=styled.div`
    .top{
        font-size:0.15rem;
        position:fixed;
        top: 0;
        width: 100%;
        height: .38rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#fff;
        padding:0 0.15rem;
        a{
            font-size:0.16rem;
        }
    }
    .course_img{
        width:100%;
        height:1.82rem;
        margin-top:0.38rem;
        img{
            width:100%;
            height:100%;
        }
    }
    /* main */
    .course_main{
        margin-bottom:0.4rem;
    }
    .vedioinfo{
        padding: .1rem;
        font-size: .14rem;
        font-family: PingFangSC;
        color: rgba(51,51,51,1);
        h3{
            font-weight:normal;
            margin-bottom: .1rem;
        }
        p{
            font-size:0.13rem;
            text-indent:0.28rem;
        }
    }
    .empty{
        height:0.1rem;
        background:#eee;
        width:100%;
    }
    .menu{

        padding:0.06rem;
        font-size:0.14rem;
        h4{
            font-weight:normal;
            span{
                float:right;
                padding-top:0.04rem;    
                padding-right:0.06rem;
            }
        }
        ul{
            li{
                height:0.75rem;
                padding: .1rem 0;
                border-bottom: 1px solid #eee;
                display:flex;
            }
        }
        .left_img{
            width:0.82rem;
            height:0.5rem;
            margin-right:0.1rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .right{
            font-size:0.12rem;
            p{
                padding-bottom:0.08rem;
            }
            i{
                font-style:normal;
                
                
            }
            strong{
                font-weight:none;
                float:right;
                color: #BB361F;
                padding-left:1.4rem;
            }
        }
    }
    .interflow{
        padding:0.06rem;
        font-size:0.14rem;
        h4{
            font-weight:normal;
        }
        .comment{
            padding:0.15rem 0 ;
            width:100%;
            height:0.96rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-bottom:0.38rem;
            p{
                font-size:0.12rem;
                color: #bdbdbd;
                padding-top:0.1rem;
            }
        }
        li{
            display:flex;
            padding:0.16rem 0.1rem;
            border-bottom:1px solid #eee;
            font-size:0.12rem;
            .img_aa{
                width:0.28rem;
                height:0.28rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .name{
                padding-left:0.14rem;
                p{
                    width:2.46rem;
                    padding-bottom:0.1rem;
                    display:flex;
                    justify-content:space-between;
                }
            }
            
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
            margin-right: .04rem;
            outline:none;
            border: none;
            background: 0 0;
            font-size:0.12rem;
        }
        a{
            display:inline-block;
            width:0.22rem;
            height:0.22rem;
            color:#c33;
            margin-right: 0.12rem;
            text-align:center;
            line-height:0.22rem;
        }
        a:nth-of-type(3){
            margin-right:0;
        }
        a:nth-of-type(2){
            color:#999;
        }
        span{
            position:absolute;
            left:2.68rem;
            top:0.06rem;
            font-size:0.06rem;
            width:0.14rem;
            height:0.14rem;
            text-align:center;
            line-height:0.12rem;
            display:inline-block;
            border-radius:50%;
            border:1px solid #999;
            z-index:100;
            color:#000;
            background:#fff;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#c33;
        }
        span:nth-of-type(2){
            left:2.85rem;
            width:0.29rem;
            height:0.12rem;
            border-radius:.05rem;
        }
    }

`