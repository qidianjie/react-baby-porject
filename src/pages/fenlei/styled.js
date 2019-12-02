import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
.header{
    height:.37rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:0 .16rem;
    position:sticky;
    top:0;
    z-index:10;
    background:#fff;
    span{
        font-size:.16rem;
        padding-bottom:.04rem;
        
    }
    a{
        font-size:.20rem;
    }
    .navaction{
        border-bottom:2px solid #000;
    }
}
.nav{
    height:.43rem;
    position:sticky;
    top:.37rem;
    z-index:10;
    background:#fff;
    /* display:flex;
    flex-wrap:nowrap; */
    padding: 0 .1rem;
    ul{
        width:100%;
        display:flex;
        /* justify-content:space-around; */
        align-items:center;
        height:100%;
        overflow:scroll;
        
        li{
            font-size:.12rem;
            flex-shrink:0;
            color:#bdbdbd;
            margin-right:.1rem;
        }
    }
    /* .am-tabs am-tabs-horizontal am-tabs-top{
        height:100%;
    }
    .am-tabs-tab-bar-wrap{
        height:.43rem;
        position:sticky;
        top:.37rem;
        z-index:10;
    }
    .am-tabs-default-bar-tab {
        font-size:.16rem;
    } */
}
/* .main{
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
} */

.active{
    border-bottom:2px solid #313131 !important;
    color:#000 !important;
}
`