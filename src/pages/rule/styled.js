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
    padding:0 .1rem;
    position:relative;
    border-bottom:1px solid #ccc;
    a{
        font-size:.20rem;
        position:absolute;
        left:.1rem;
    }
    span{
        font-size:.15rem;
    }
}

.main{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding-top:.38rem;
    background:#fff;
    .main_content{
        padding:.09rem;
        h1{
            font-size:.12rem;
            color:#fb2919;
        }
        p{
            font-size:.12rem;
            color:#313131;
            margin-top:.22rem;
        }
    }
}
`