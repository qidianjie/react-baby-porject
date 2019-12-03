import styled from "styled-components"

export const ClassDiv = styled.div`
.main{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    padding:.8rem 0 .4rem 0;
    overflow:scroll;
}
.banner{
    img{
        height:100%;
        width:100%;
    }
    ul{
        width:100%;
        padding:.07rem 0;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        background:#fff;
        li{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:25%;
            background:#fff;
            text-align:center;
            padding:.07rem 0;
            img{
                width:.44rem;
            }
            span{
                font-size:.12rem;
            }
        }
    }
}
`