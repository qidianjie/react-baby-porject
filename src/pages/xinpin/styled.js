import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
.header{
    height:.37rem;
    padding:0 .1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;
    top:0;
    background:#fff;
    z-index:10;
    span{
        font-size:.15rem;
    }
    a{
        position:absolute;
        left:.1rem;
        font-size:.18rem;
    }
    i{
        position:absolute;
        right:.1rem;
        font-size:.18rem;
    }
}

.main{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding-top:.37rem;
    background:#ffc8bb;
    overflow:scroll;
    .main_top{
        width:100%;
    }
    .jijie{
            padding:0 .13rem;
            overflow:hidden;
            .jijie_center{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            align-items:center;
            img{
                margin:.05rem 0;
                width:49%;    
            }
            }
        }
}

.goods{
    padding:0 .1rem;
    ul{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        li{
            width:49%;
            padding:.05rem;
            background:#fff;
            overflow:hidden;
            margin-bottom:.05rem;
            .goods_pic{
                width:100%;
            }
            h5{
                width:100%;
                font-size:.12rem;
                background:#f4f4f4;
                height:.35rem;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:2;
                word-break:break-all;
                display:-webkit-box;
                -webkit-box-orient:vertical;
            }
        p{
            font-size:.12rem;
            padding-top:.05rem;
            text-align:center;
            background:#f4f4f4;
        }
        div{
            padding-top:.05rem;
            img{
                width:.12rem;
                margin-right:.08rem;
            }
            span{
                font-size:.12rem;
                color:#919192;
                &:nth-child(3){
                    float:right;
                }
            }
        }
        }
    }
}

`