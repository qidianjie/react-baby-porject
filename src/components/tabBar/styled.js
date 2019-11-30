import styled from "styled-components";
export const Footer = styled.div `
display:flex;
position:fixed;
bottom:0;
width:100%;
height:0.4rem;
border-top: 1px solid #eaeaea;
justify-content:space-around;
background:white;
.item{
    display:flex;
    flex-direction:column;
    align-items:center;
}
.item-text{
    font-size:0.11rem;
    color:#999;
    font-family: PingFangSC-Regular;
}
img{
    width:0.21rem;
}

`