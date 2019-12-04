import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background:#f4f4f4;
.main{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    padding:.37rem 0 .4rem 0;
    overflow:scroll;
}
.banner{
    h2{
        font-size:.12rem;
        height:.25rem;
        color:#5d5d5d;
        text-align:center;
        line-height:.25rem;
    }
    ul{
        background:#fff;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        padding-bottom:.70rem;
        li{
            border-bottom:1px solid #ccc;
            border-right:1px solid #ccc;
            width:33%;
            height:.85rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            padding-bottom:.05rem;
            text-align:center;
            a{
                text-decoration:none;
                border:none !important;
                display:block;
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                }
            &:nth-child(3n){
                border-right:none;
            }
            img{
                height:.43rem;
                width:.43rem;
            }
            span{
                font-size:.12rem;
                margin-top:.09rem;
            }
        }
    }
}
.all{
    position:fixed;
    bottom:.4rem;
    right:.1rem;
    background:#313131;
    color:#fff;
    width:.3rem;
    height:.3rem;
    font-size:.12rem;
    text-align:center;
    line-height:.3rem;
}

`