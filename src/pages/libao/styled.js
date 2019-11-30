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
.content{
    width:100%;
    img{
        width:100%;
    }
    .content_item{
        padding:0 .13rem;
        background:#fff;
        img{
            width:100%;
            border-radius:.08rem .08rem 0 0;
        }
        .content_item_type{
            padding:.12rem .09rem .18rem;
            position:relative;
            h5{
                width:2.05rem;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                font-size:.12rem;
            }
            p{
                width:2.05rem;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                font-size:.12rem;
            }
            .content_item_bottom{
                width:100%;
                i{
                    font-size:.16rem;
                    color:#9ab262;
                }
                del{
                    color:#919192;
                    font-size:.12rem;
                    margin-left:.04rem;
                }
            }
            span{
                padding:.06rem .11rem;
                font-size:.12rem;
                border:5px solid #000;
                position:absolute;
                right:0;
                bottom:.2rem;
            }

        }
    }
}

.goods_pic{
    width:100%;
    img{
        width:100%;
    }
}

`