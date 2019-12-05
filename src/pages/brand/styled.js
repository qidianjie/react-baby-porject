import styled from "styled-components"

export const Header =styled.div`
        height:0.37rem;
        background:white;
        display:flex;
        align-items:center;
        justify-content:space-around;
        position: fixed;
        width:100%;
        top:0;
        span{
            font-size:0.14rem;
            display:inline-block;
            width:100%;
            margin:0rem 0.2rem;
            text-align:center;
        }
        i:nth-child(1){
            font-size:0.2rem;
            float:left
        }
        i:nth-child(2){
            font-size:0.2rem;
            float:right
        }

`
export const Brandtop=styled.div`
    width:100%;
    background:white;
    padding:0.1rem 0.085rem;
    display:flex;
    div:nth-child(2){
        margin-left:0.085rem;
        
    }
   img{
       width:0.51rem;
       height:0.51rem;
   }
   span{
       display:block;
       margin-top:0.064rem;
       font-size:0.128rem;
       color:#2A2a2a;
   }

`


export const Nav=styled.div`
    height:0.37rem;
    width:100%;
    background:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:0.12rem;
    color:#313131;
    position:fixed;
    top:.37rem;
    span{
        /* display:inline-block;
        width:100%;
        height:100%; */
    }
    .shai{
        border: 1px solid #cccccc;
        border-radius:0.05rem;
        padding:0.03rem 0.08rem;
    }
    i{
        font-size:0.1rem;
    }
    .active{
    border-bottom:1px solid #000;
    height:.37rem;
    line-height:.37rem;
    /* padding-bottom:.1rem; */

}
`

export const Brsec2=styled.div`
background:white;
padding:0rem 0.08rem;
    span{
        font-size:0.12rem;
        color:#535353;
    }
`
export const WaterList=styled.div`

.waterList{
    padding:0.75rem 0.04rem 0rem 0.04rem;


}
.water{
    padding-top:0.085rem;
    display:flex;
    flex-wrap:wrap;
    z-index:50;
}
.lis{
    background:#fff;
    border-radius:0.08rem;
    width:1.5rem;
    height:2.2rem;
    margin:0.03rem;
    margin-bottom:0.1rem;
    img{
        width:1.5rem;
        height:1.42rem;
    }
}
.lazy{
    width:1.5rem;
    border-radius:0.08rem;
}
.waterButtom {
font-size: .12rem;
background-color: #fff;
/* border-radius: 0 0 .3rem .3rem; */
padding: 0rem 0.08rem 0.08rem;
}
.waterName{
    margin-top:0.12rem;
    font-size:0.11rem;
    color:#313131;
    font-family: "Ping Fang SC Semibold";
}
.waterPrice {
margin-top: .08rem;
color: #313131;
font-weight:bolder;
font-size:0.12rem;
font-family: "Ping Fang SC Semibold";
/* line-height: .3rem; */
}
.text-overflow2 {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
}



`