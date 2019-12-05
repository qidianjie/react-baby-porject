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
    justify-content: center;
    align-items:center;
    padding:0 .16rem;
    span{
        font-size:.14rem;
    }
    a{
        font-size:.20rem;
        position:absolute;
        right:0;
        width:.38rem;
        display:block;
        text-align:center;
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
    background:#fff;
}
.right{
    width:.13rem;
    height:4.5rem;
    background:#d4d4d4;
    position:fixed;
    top:.37rem;
    right:0;
    z-index:10;
    display:flex;
    flex-direction:column;
    align-items:center;
    a{
        font-size:.12rem;
        color:#fff;
    }
}
.content{
        padding:.17rem 0 0 .56rem;
        position:relative;
        border-top:1px solid #ccc;
        background:#fff;
        span{
            position:absolute;
            left:.20rem;
            font-size:.15rem;
            color:#9ab26b;
        }
        li{
            border-bottom:1px solid #ccc;
            height:.28rem;
            line-height:.28rem;
            &:last-of-type{
                border-bottom:none;
            }
            a{
                font-size:.12rem !important;
                color:#313131;
            }
        }
        
    }

`