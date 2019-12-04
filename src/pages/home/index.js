import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Banner, Baozheng, BannerIcon, ActiveList, WaterFull } from './styled'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './mapStore'
import { Carousel, WingBlank, Tabs, WhiteSpace } from 'antd-mobile';//轮播图
import Bscrollcom from '../../common/bscroll'
import {Link,withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    constructor() {
        super()
        this.state = {
            activeFlag:0,
            arr: [
                {
                    id: 0,
                    name: "奶粉辅食"
                },
                {
                    id: 1,
                    name: "宝贝用品"
                },
                {
                    id: 2,
                    name: "美容护肤"
                },
                {
                    id: 3,
                    name: "美妆香氛"
                },
                {
                    id: 4,
                    name: "个护清洁"
                },
                {
                    id: 5,
                    name: "营养保健"
                },
                {
                    id: 6,
                    name: "环球美食"
                },
                {
                    id: 7,
                    name: "数码家电"
                },
                {
                    id: 8,
                    name: "时尚家具"
                }
            ],
            data: ['1', '2', '3'],
            imgHeight: 120,
            countryList:[
                {
                    name:"日本馆",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/5.png",
                    countryId:"1128905253744435201"
                },
                {
                    name:"韩国馆",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/10.png",
                    countryId:"1128905392529760257"
                },
                {
                    name:"澳大利亚馆",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/6.png",
                    countryId:"1141596494776766466"
                },
                {
                    name:"中国香港馆",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/36.png",
                    countryId:"1141596500204195842"
                },
                {
                    name:"泰国馆",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/33.png",
                    countryId:"1141596499742822401"
                },
                {
                    name:"美国",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/8.png",
                    countryId:"1141596495678541825"
                },
                {
                    name:"新西兰",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/xx.png",
                    countryId:"1141596493845630977"
                },
                {
                    name:"英国",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/14.png",
                    countryId:"1141596497658253314"
                },
                {
                    name:"德国",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/12.png",
                    countryId:"1141596497205268482"
                },
                {
                    name:"意大利",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/17.png",
                    countryId:"1141596498379673602"
                },
                {
                    name:"尼日利亚",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/39.png",
                    countryId:"1141596500686540802"
                },
                {
                    name:"荷兰",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/9.png",
                    countryId:"1141596496274132993"
                },
                {
                    name:"新加坡",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/13.png",
                    countryId:"1129193850200543234"
                },
                {
                    name:"加拿大",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/3.png",
                    countryId:"1129194001430368257"
                },
                {
                    name:"法国",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/16.png",
                    countryId:"1141596498144792577"
                },
                {
                    name:"丹麦",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/15.png",
                    countryId:"1141596497901522945"
                },
                {
                    name:"马来西亚",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/43.png",
                    countryId:"1141596501185662978"
                },
                {
                    name:"中国台湾",
                    imgUrl:"https://3g.baobeigezi.com/imgs/country/35.png",
                    countryId:"1141596499969314818"
                },
            ],
            clock:new Date(),//时钟数
            clocktamp:(new Date()).getTime(),//时间戳
          
        }
        this.goods={
            currPage :1,
            id :"1154573626486296577",
            pageSize: "40",
            path :"/1154573626486296577",
            flag:1
        }
        this.page=2;
    }
    render() {
        let { activeFlag } = this.state;
        let { advList, selectAll, qiangList,time,goodsList} = this.props;
        // console.log(goodsList);
        return (
            <PageContainer>
                <Banner>
                    <div className="home">
                        <input type="text" onFocus={this.handleFocusSearch.bind(this)}/>
                        <i className="home_one"></i>
                    </div>
                    <div className="swiper-container">
                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite
                            >
                                {
                                    (advList[0] ? advList[0].positionList : []).map((item) => (
                                        <a
                                            key={item.appLink}
                                            href={item.appLink}
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={item.bigImage}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top', }}
                                                onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))}
                            </Carousel>
                        </WingBlank>


                        {/* <div className="swiper-wrapper">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b25460e6-7814-4e4b-9603-50b01d8aab76.jpg" alt="" />
                        </div> */}
                    </div>

                </Banner>
                <Baozheng>
                    <img src="http://3g.baobeigezi.com/imgs/baozheng2.png" alt="" />
                </Baozheng>
                {/* 十个icon */}
                <BannerIcon>
                    {
                        (advList[1] ? advList[1].positionList : []).map((item, index) => (
                            <a href="#" className="fl" key={index} onClick={this.handleIcon.bind(this,item.advTitle)}>
                                <img src={item.bigImage} alt="" />
                                <span>{item.advTitle}</span>
                            </a>
                        ))
                    }
                </BannerIcon>
                <ActiveList>
                    {/* 新人超值专享 */}
                    <div className="newPer"  onClick={this.handleIcon.bind(this,"大礼包")}>
                        <a href="#" className="newPerBg">
                            <span className="">新人超值专享</span>
                            <img src="http://3g.baobeigezi.com/imgs/newIndex/newPer.png" alt="" />
                        </a>
                        <div className="p12T3">
                            {
                                (advList[2] ? advList[2].positionList : []).map((item, index) => (
                                    <div className="newZhe" key={index}>
                                        <div className="newTit clearfix">
                                            <span className="fl">{item.advTitle}</span>
                                            <span className=" fr col_BB361F">{item.advDescribes}</span>
                                        </div><div className="newList clearfix" >
                                            {
                                                item.productList.map((child) => (

                                                    <a href="#" className="newLi" key={child.id}>
                                                        <img src={child.goodsImage} />
                                                        <span className="newPrice">
                                                            {child.markerPrice}
                                                        </span>
                                                    </a>
                                                ))
                                            } </div>

                                    </div>
                                ))
                            }
                        </div>
                        <div className="quanGo">
                            {
                                (advList[3] ? advList[3].positionList : []).map((item, index) => (
                                    <img src={item.bigImage} alt="" key={index} />
                                ))
                            }
                        </div>
                    </div>
                    {/* 限时抢购 */}
                    <div className="flashSale" onClick={this.handleIcon.bind(this,"限时抢购")}>
                        <div className="flashTit ">
                            <span className="flashGo fl">限时抢购</span>
                            <span className="flashTime fl">上新啦</span>
                        <div className="timer fl">{time}</div>
                            <a href="#" className="fr more">更多></a>
                        </div>
                        <div className="flashList">
                            {
                                (qiangList ? qiangList : []).map((item) => (
                                    <a href="#" className="swiper-slide" key={item.goodsId}>
                                        <img src={item.goodsImage} alt="" />
                                        <span className="del">市场价￥{item.marketPrice}</span>
                                        <span className="col_BB361F">抢购价￥{item.activityPrice}</span>
                                    </a>
                                ))
                            }

                        </div>
                    </div>
                    {/* 每日拼团 */}
                    <div className="groupBoook">
                        <div className="groupBg clearfix ">
                            <span className="today">每日拼团</span>
                        </div>
                        <div className="groupList">
                            {
                                (advList[5] ? advList[5].positionList : []).map((item, index) => (
                                    <a href="#" className="groupLi clearfix" key={index}>
                                        <div className="groupImg fl">
                                            <img src={item.goodsImage} />
                                        </div>
                                        <div className="fl groupRigth">
                                            <div className="groupName text-overflow2">{item.goodsName}</div>
                                            <div className="pinBtn">已拼{item.groupBookingCount}件</div>
                                            <div className="pPrice clearfix">
                                                <span className="col_BB361F price fl">￥{item.activityPrice}</span>
                                                <span className="del">￥{item.salePrice}</span>
                                                <span className="goBtn fr">马上拼团</span>

                                            </div>

                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    {/* 活动 */}
                    <div className="qingImg activeImg">

                        {(advList[6] ? advList[6].positionList : []).map((item, index) => (
                            <a href="#" key={item.advId}>
                                <img src={item.bigImage} alt="" />
                            </a>
                        ))}
                    </div>
                    <div className="specialList clearfix">
                        {(advList[7] ? advList[7].positionList : []).map((item, index) => (
                            <a href="#" className="specialLi fl" key={item.advId}>
                                <img src={item.bigImage} alt="" />
                            </a>
                        ))}
                    </div>
                    {/* 精选活动 */}
                    <div className="jingActive">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                精选活动
                            </span>
                        </div>


                        <div className="jingList">
                            {(advList[8] ? advList[8].positionList : []).map((item, index) => (
                                <div className="jingLi" key={index}>
                                    <a href="#">
                                        <img className="jingBgimg" src={item.bigImage} alt="" />
                                    </a>

                                    <div className="flashList">
                                        {
                                            item.productList.map((child, index) => (
                                                <a href="#" className="swiper-slide" key={index}>
                                                    <img src={child.goodsImage} alt="" />
                                                    <span className="title text-overflow">
                                                        {child.name}
                                                    </span>
                                                    <span className="del">{child.markerPrice}</span>
                                                    <span className="col_BB361F">{child.salePrice}</span>
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    {/* 国家地区馆 */}
                  
                    {/* 精选分类 */}
                    <div className="fenlei" onClick={this.handleIcon.bind(this,"分类")}>
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                精选分类
                         </span>
                        </div>
                        <div className="jingXuanHeader">
                            <div className="jingXuanHeaderLeft">
                                {(advList[10] ? advList[10].positionList.slice(0, 1) : []).map((item, index) => (
                                    <a href="#" key={item.categoryId}>
                                        <div className="classHeader">{item.advTitle}</div>
                                        <div className="classPrice text-overflow">{item.advDescribes}</div>
                                        <div className="pImg">
                                            <img src={item.bigImage} alt="" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className="jingXuanHeaderRight">
                                {(advList[10] ? advList[10].positionList.slice(1, 3) : []).map((item, index) => (

                                    <a href="#" key={item.categoryId}>
                                        <div className="right1">
                                            <div className="classHeader">{item.advTitle}</div>
                                            <div className="classPrice text-overflow">{item.advDescribes}</div>
                                        </div>

                                        <div className="pImg_small">
                                            <img src={item.bigImage} alt="" />
                                        </div>
                                    </a>

                                ))}
                            </div>
                        </div>
                        <ul className="jingXuanList">
                            {(advList[10] ? advList[10].positionList.slice(3) : []).map((item, index) => (
                                <li key={item.categoryId}>

                                    <div className="pImg">
                                        <img src={item.bigImage} alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            {item.advTitle}
                                        </div>
                                        <div className="classPrice text-overflow">
                                            {item.advDescribes}
                                        </div>
                                    </div>

                                </li>
                            ))}



                        </ul>
                    </div>
                    {/* 全球榜单 ---热门品牌 */}
                    <div className="hotBrand" onClick={this.handleIcon.bind(this,"品牌")}>
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                热门品牌
                         </span>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <WingBlank>
                                        <Carousel
                                            autoplay={false}
                                            infinite
                                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                            afterChange={index => console.log('slide to', index)}
                                        >
                                            {(advList[12] ? advList[12].positionList : []).map((item, index) => (
                                               
                                                <div className="hotWeekPlist hotBrand" key={index}>
                                                    <div className="brandImg">
                                                        <img src={item.bigImage} alt="" />
                                                    </div>
                                                    <div className="pr brandPr">
                                                        <a href="#" className="fenSi clearfix">
                                                            <img src="https://img.baoimg.net/photo/201411/2014111820003549679697.png" alt="" className="pr fenImg" />

                                                            <div className="fenSiRiht fl">
                                                                <div className="fenName">
                                                                    {item.advTitle}
                                                                    <span className="goEvent">
                                                                        进入专场>
                                                        </span>
                                                                </div>
                                                                <div className="span1 text-overflow">
                                                                    {item.advDescribes}
                                                                </div>
                                                            </div>


                                                        </a>
                                                        <div className="all_lis">
                                                            {
                                                                item.productList.map((child, index) => (
                                                                    <a href="#" className="lis fl" key={index}>
                                                                        <div className="pImg">
                                                                            <img src={child.goodsImage} alt="" />
                                                                        </div>
                                                                        <div className="pName text-overflow">
                                                                            {child.name}
                                                                        </div>
                                                                        <div className="pPrice text-overflow">
                                                                            ￥ {child.salePrice}
                                                                        </div>
                                                                    </a>
                                                                ))
                                                            }
                                                            {/* <a href="#" className="lis fl">
                                                    <div className="pImg">
                                                        <img src="http://id.baoimg.net/share-img/photo/201810/5bbd90f00c52b.jpg" alt="" />
                                                    </div>
                                                    <div className="pName text-overflow">
                                                        【海外直邮】Aptamil/爱他美 奶粉1段 0-6个月 800g  （英国直邮 包邮包税）  新老包装随机发货
                                                        </div>
                                                    <div className="pPrice text-overflow">
                                                        ￥316.00
                                                        </div>
                                                </a>
                                                <a href="#" className="lis fl">
                                                    <div className="pImg">
                                                        <img src="http://id.baoimg.net/share-img/photo/201810/5bbd90f00c52b.jpg" alt="" />
                                                    </div>
                                                    <div className="pName text-overflow">
                                                        【海外直邮】Aptamil/爱他美 奶粉1段 0-6个月 800g  （英国直邮 包邮包税）  新老包装随机发货
                                                        </div>
                                                    <div className="pPrice text-overflow">
                                                        ￥316.00
                                                        </div>
                                                </a>
                                                <a href="#" className="lis fl">
                                                    <div className="pImg">
                                                        <img src="http://id.baoimg.net/share-img/photo/201810/5bbd90f00c52b.jpg" alt="" />
                                                    </div>
                                                    <div className="pName text-overflow">
                                                        【海外直邮】Aptamil/爱他美 奶粉1段 0-6个月 800g  （英国直邮 包邮包税）  新老包装随机发货
                                                        </div>
                                                    <div className="pPrice text-overflow">
                                                        ￥316.00
                                                        </div>
                                                </a> */}

                                                        </div>
                                                    </div>

                                                </div>

                                            ))}
                                        </Carousel>
                                    </WingBlank>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 全球榜单 --热门品牌下面的六个品牌 */}

                    <div className="brandList clearfix">

                        {(advList[13] ? advList[13].positionList : []).map((item, index) => (

                            <a href="#" className="brandLi" key={item.brandId}>
                                <img className="brandBg" src={item.bigImage} alt="" />
                                <div className="bg pa"></div>
                                <img src={item.brandLogoImage} alt="" className="brandLogo " />
                                <div className="brDesc">{item.advTitle}</div>
                            </a>

                        ))}
                    </div>
                    {/* 全球榜单的第四个 */}
                    <div className="qingImg activeImg">
                        {
                            (advList[14] ? advList[14].positionList : []).map((item, index) => (
                                <a href="#" key={item.appLink}>
                                    <img src={item.bigImage} alt="" />
                                </a>
                            ))
                        }
                    </div>
                    {/* 育儿百科--全球榜单的第四个 */}
                    <div className="babyIndex" onClick={this.handleIcon.bind(this,"育儿百科")}>
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                育儿百科
                            </span>
                        </div>
                        <div className="babyIndexList">
                            {
                                (advList[16] ? advList[16].positionList : []).map((item, index) => (
                                    <a href="#" className="babyBanner" key={item.appLink}>
                                        <img src={item.bigImage} alt="" />
                                    </a>
                                ))
                            }
                            <div className="earlyClass">
                                {
                                    (advList[17] ? advList[17].positionList : []).map((item, index) => (
                                        <a href="#" className="earlyLi" key={item.advId}>
                                            <div className="earlyLiImg fl">
                                                <img src={item.bigImage} alt="" />

                                            </div>
                                            <div className="fl earlyRirht">
                                                <div className="earlyRirhtTit text-overflow">
                                                    {item.cmsArticleTitle}
                                                </div>
                                                <div className="cmsArticleKeyword text-overflow">
                                                    {item.cmsArticleKeyword}
                                                </div>
                                                <div className="halButtom clearfix">
                                                    <div className="fl comment">
                                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png" alt="" />
                                                        <span>
                                                            {item.voteCount}
                                                        </span>
                                                    </div>

                                                    <div className="fl ">
                                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/watchIcon.png" alt="" />
                                                        <span>
                                                            {item.viewCount}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </ActiveList>

                {/* 二级路由 */}
                <WaterFull className="waterFull">


                <div className="nav" >
                    <ul>
                        {
                            selectAll.map((item,index)=>(  
                            <li key={index} className={activeFlag==index?'active':''} onClick={this.handleClick.bind(this,item,index)}>{item.name}</li>
                            ))
                        }
      
                    </ul>
                </div>



                <div className="waterScroll">
                    <Bscrollcom ref="scroll">
                    <div className="waterList"> 
                        <ul className="water">
                            {
                                goodsList.map((item,index)=>(
                                    <Link to={"/detail?id="+item.goodsId} key={index}>
                                    <li className="lis pr" >                        
                                        <div className="imgDiv">
                                            <img src={item.mainImg} alt="" className="lazy" />
                                        </div>
                                        <div className="waterButtom pr">
                                            <div className="waterName text-overflow2">
                                               {item.name}
                                            </div>
                                            <h5 className="waterPrice">
                                               {item.salePrice}
                                            </h5>
                                        </div>
                                     </li>
                                </Link>
                                ))
                            }
                        </ul> 
                    </div>
                    </Bscrollcom>
                    </div>
                </WaterFull>
            </PageContainer>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
   
    componentDidMount() {
        this.props.handleAsyncData();
        this.props.qiangAsyncData();
        //导航栏
        this.props.selectAllAsyncData();

        this.setState({
            clocktamp:this.props.time*1000
        })

      //下面的商品列表
        let item={}
        this.props.goodsAsyncData(item);
        //下拉加载
        this.refs.scroll.handlePullingUp(()=>{
            let page=this.page;
            this.goods.currPage=page;
            this.goods.flag=2;
            this.props.goodsAsyncData(this.goods);
            this.page++;
        })     
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    handleClick(item,index){
        item.flag=1;//为了让其在后面赋值
        console.log(item)
        this.props.goodsAsyncData(item);
        this.goods={
            currPage:item.currPage,
            id:item.id,
            pageSize: "40",
            path:item.path,
        }
        this.setState(
            {
                activeFlag:index
            }
        )
        // console.log(this.goods)
    }
    handleJump(path){
        this.props.history.push(path);
    }
    handleFocusSearch(){
        this.props.history.push("/search");
    }
    handleIcon(title,e){
        e.preventDefault();
        switch(title){
            case "中检溯选":
                this.props.history.push("/zhongjian");
                break;
            case "国家馆":
                this.props.history.push("/national");
                break;
            case "限时抢购":
                this.props.history.push("/qianggou");
                break;
            case "育儿百科":
                this.props.history.push("/parenting");
                break;
            case "免费红包":
                this.props.history.push("/hongbao");
                break;
            case "大礼包":
                this.props.history.push("/libao");
                break;
            case "分类":
                this.props.history.push("/fenlei");
                break;
            case "品牌":
                this.props.history.push("/fenlei");
                break;
            case "新品速递":
                this.props.history.push("/xinpin");
                break;
        }
    }
}
export default Home;