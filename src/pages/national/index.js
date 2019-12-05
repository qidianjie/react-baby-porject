import React from "react";


import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";

import { NationalContainer } from "./styled";
import { withRouter } from "react-router-dom";
import url from "url"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class National extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: [{
                countryId: "1128905253744435201"
            }],
            nav: ["走进", "新品驾到", "必备榜单", "明星大牌"],
            flag: 0,
            mark: false,
            countryId:""
        }
        let {countryId}=url.parse(this.props.location.search,true).query;
        this.state.countryId=countryId;
        // console.log(this.state.countryId)
    }
    render() {
        let { national, advList } = this.props;
        let { nav, flag, mark } = this.state;
        // console.log(advList?advList[0].positionList[0].bigImage:[])
        return (
            <NationalContainer>
                <div className="bao">
                    {/* header */}
                    <div className="header">
                        <span className="iconfont" onClick={this.handleBack.bind(this)}>&#xe605;</span>
                        <span>{national?national.nationsName:''}</span>
                        <span></span>
                    </div>
                    {/* main图 */}
                    <div className="main_img">
                        <img src={advList[0] ? advList[0].positionList[0].bigImage : ''} alt="" />
                    </div>
                    {/* nav    topActive*/}
                    <div className={mark ? 'come topActive' : 'come'} ref="comming">
                        <ul>
                            {
                                nav.map((item, index) => (
                                    index == 0 ? 
                                    <li key={index}><span onClick={this.handleNav.bind(this, index)} className={flag == index ? 'comeActive' : ''}>{item}{national?national.nationsName:''}</span></li> 
                                    : <li key={index} ><span className={flag == index ? 'comeActive' : ''} onClick={this.handleNav.bind(this, index)}>{item}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* 走进韩国  */}
                    <div className="public_title" ref="comes">走进{national?national.nationsName:''}</div>
                    <div className="come_img">
                        <img src={advList[2] ? advList[2].positionList[0].bigImage : ''} alt="" />
                    </div>
                    <p>{advList[2] ? advList[2].positionList[0].advDescribes : ''}</p>
                    <div className="empty"></div>
                    {/* 新品驾到 */}
                    <div className="public_title" ref="newGoods">新品驾到</div>
                    <ul className="goods">
                        {
                            (national.newestGoodsList ? national.newestGoodsList : []).map((item, index) => (
                                <li key={index}>
                                    <img src={item.mainImg} alt="" />
                                    <div className="goods_info">
                                        <p>{item.name}</p>
                                        <span>￥{item.salePrice}</span>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="empty"></div>
                    <div className="public_title" ref="bibei">
                        必备榜单
                    </div>
                    {/* 必备榜单 */}
                    <ul className="must_goods">
                        {
                            (national.highGoodsList ? national.highGoodsList : []).map((item) => (
                                <li key={item.goodsId}>
                                    <div className="img">
                                        <img src={item.mainImg} alt="" />
                                    </div>
                                    <div className="right">
                                        <h3>{item.brandName}</h3>
                                        <p>{item.name}</p>
                                        <span>￥{item.salePrice}</span>
                                        <i>￥{item.marketPrices}</i>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    {/* 明星大牌 */}
                    <div className="public_title" ref="starts">明星大牌</div>
                    <ol className="star">
                        {
                            (advList[1] ? advList[1].positionList : []).map((item, idx) => (
                                <li key={idx}>
                                    <div className="star_img">
                                        <img src={item.bigImage} alt="" />
                                    </div>
                                    <div className="star_title">{item.advTitle}</div>
                                    <div className="logo"><img src={item.brandLogoImage} alt="" /></div>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </NationalContainer>
        )
    }
    componentDidMount() { //请求数据
        this.props.handleAsyncNation(this.state.countryId);
        this.props.starAsyncNational(this.state.countryId);
        // 滚动时固定导航栏
        this.handleFixed();
        // 滚动时改变下边框
        // this.scrollBorder();
    }
    handleBack() {
        this.props.history.push("/home");
    }
    // 点击nav
    handleNav(index) {
        this.setState({
            flag: index,
            mark: true
        })
        switch(index){
            case 0:
                // this.refs.comes.scrollIntoView();
                let comeTop= this.refs.comes.offsetTop;
                document.documentElement.scrollTop=comeTop-38;
                // console.log(document.documentElement.scrollTop)
                break;
            case 1:
                let newGoodsTop= this.refs.newGoods.offsetTop;
                document.documentElement.scrollTop=newGoodsTop-85;
                // this.refs.newGoods.scrollIntoView();
                // console.log(document.documentElement.scrollTop)
                break;
            case 2:
                let bibeiTop= this.refs.bibei.offsetTop;
                document.documentElement.scrollTop=bibeiTop-85;
                // this.refs.bibei.scrollIntoView();
                // console.log(document.documentElement.scrollTop)
                break;
            case 3:
                let startsTop= this.refs.starts.offsetTop;
                document.documentElement.scrollTop=startsTop-85;
                // this.refs.starts.scrollIntoView();
                // console.log(document.documentElement.scrollTop)
                break;
        }

    }
    // 滚动时固定导航栏
    handleFixed() {
        const fixedTop = this.refs.comming.offsetTop;
        window.onscroll = () => {
            let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
            // console.log(fixedTop,scrollTop)

            //控制元素块A随鼠标滚动固定在顶部
            // 控制导航栏在顶部（吸顶）
            if (scrollTop >= fixedTop) {
                this.setState({ mark: true })
            } else if (scrollTop < fixedTop) {
                this.setState({ mark: false })
            }

            // 控制滚动时改变下边框
            if(scrollTop<=443){
                this.setState({
                    flag:0
                })
            }else if(scrollTop<=1285){
                this.setState({
                    flag:1
                })
            }else if(scrollTop<=2067){
                this.setState({
                    flag:2
                })
            }else{
                this.setState({
                    flag:3
                })
            }
        }
    }
}

export default National;

