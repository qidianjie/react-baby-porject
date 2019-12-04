import styled from "styled-components"

export const Classify = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background:#fff;
.header{
    padding:.06rem 0 .06rem .13rem;
    position:relative;
    input{
        height:.25rem;
        width:2.62rem;
        padding:.07rem .35rem .07rem .28rem;
        border-radius:.18rem;
        font-size:.12rem;
        background:#ededed;
        border:none;
        outline:none;
        color:#999;

    }
    span{
        font-size:.12rem;
        margin-left:.1rem;
    }
    a{
      position:absolute;
      left:.2rem;
      top:.1rem;
      font-size:.18rem;
      color:#ccc;
    }
}

.history{
    padding:.26rem .09rem .13rem;
    /* display:none; */
    .history_top{
        display:flex;
        justify-content:space-between;
        align-items:center;
        span{
            font-size:.14rem;
           
        }
        
    }
    h3{
        font-size:.12rem;
        color:#5d5d5d;
        text-align:center; 
        margin-top:.18rem;
        font-weight:normal;
    }
}
.search_item{
    padding:0 .08rem .1rem;
    background:#fff;
    /* display:none; */
    li{
        border-bottom:1px solid #999;
       
        padding:.13rem 0;
        a{
             display:flex;
             align-items:center;
        }
        p{
            font-size:.12rem;
            flex:1;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            
        }
        span{
            font-size:.12rem;
        }
    }

}
`