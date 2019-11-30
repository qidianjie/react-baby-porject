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
    padding:0 .16rem;
    position:sticky;
    top:0;
    span{
        font-size:.15rem; 
    }
    a{
        font-size:.12rem;
        position:absolute;
        right:.16rem;
    }
    i{
        font-size:.18rem;
        left:.16rem;
        position:absolute;
    }
}

.main{
    background-image:url("http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/bg@2x.png");
    background-size:100%;
    background-repeat:no-repeat;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow:scroll;
    
    .hongbao{
        background-image:url("http://sale.baobeigezi.com/2019/11/11hongbao/imgs/hongbao1/hongbaoBg@2x.png");
        background-repeat:no-repeat;
        background-size:100%;
        padding:.37rem .1rem 0;
        .rule{
        width:100%;
        margin-top:.3rem;
    }
    .liji{
        width:100%;
        margin-top:.1rem;
    }
    .hand{
        width:100%;
        margin-top:.25rem;
    }
    .hongbao_yaoqing{
        padding-top:.1rem;
        background:#ffe19e;
        margin-top:.09rem;
        height:1.46rem;
        overflow:hidden;
        ul{
            height:100%;
            background:#ffebbf;
            display:flex;
            justify-content: space-around;
            align-items:center;
            li{
                display:flex;
                justify-content:center;
                flex-direction:column;
                align-items:center;
                img{
                    width:.53rem;
                }
                p{
                        font-size:.12rem;
                        color:#fb2919;
                        text-align:center;

                }
            }
        }
    }
    }
    .bangdan{
        margin-top:.25rem;
        margin-bottom:.1rem;
        width:100%;
    }
    .bangdan_top{
        padding:0 .1rem .3rem;
        overflow:hidden;
    }
    .bangdan_top_top{
        height:.45rem;
        background:#ffb807;
        display:flex;
        justify-content: space-around;
        align-items:center;
        span{
            img{
                width:.11rem;
                height:.14rem;
            }
            font-size:.12rem;
            &:nth-child(1){
                color:#fb2919;
            }
            &:nth-child(2){
                color:#ffebbf;
            }
        }
    }
    .bangdan_bottom{
        padding:.07rem;
        background:#fff;
        ul{
            width:100%;
            li{
                padding:0 .09rem;
                height:.38rem;
                background:#ffebbf;
                display:flex;
                justify-content: space-between;
                align-items:center;
                &:nth-child(1){
                    border-bottom:3px dashed #f2c45d;
                }
                span{
                    font-size:.12rem;
                    color:#853850;
                }
                p{
                    flex:1;
                    text-align:left;
                    font-size:.12rem;
                    margin-left:.08rem;
                }
                img{
                    width:.3rem;
                }
            }
        }
    }

}
.vip{
    width:100%;
    margin:.15rem 0;
    clear:both;
}
.shuoming{
    width:100%;
}
`