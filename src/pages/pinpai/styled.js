import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background:#f4f4f4;
.top{
    position:sticky;
    top:0;
    z-index:10;
    background:#fff;
}
.header{
    height:.37rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0 .16rem;
    span{
        font-size:.16rem;
        
    }
    a{
        font-size:.20rem;
    }
}
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
            justify-content:center;
            align-items:center;
            padding-bottom:.05rem;
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

`