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
.nav{
    height:.43rem;
    ul{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:100%;
        li{
            font-size:.12rem;
            color:#bdbdbd;
        }
    }
}
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