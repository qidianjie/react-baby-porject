import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
.top{
    position:fixed;
    top:0;
    z-index:20;
    background:#fff;
    width:100%;
    border-bottom:1px solid #ccc;
}
.header{
    height:.37rem;
    display:flex;
    justify-content: center;
    align-items:center;
    padding:0 .1rem;
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
        font-size:.20rem;
        font-style:normal;
    }
}

.sort{
    height:.38rem;
    ul{
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        li{
            font-size:.12rem;
        }
    }
}




/* 商品列表 */
.goods{
    padding:0 .05rem;
    overflow:hidden;
    padding-top:.75rem;
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


.active{
    border-bottom:1px solid #000;
    height:.37rem;
    line-height:.37rem;
    /* padding-bottom:.1rem; */

}
`