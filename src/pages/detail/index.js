import React, { Fragment } from "react"
import { CommonHeader, Wrapper, Footer,ToTop } from "./styled"
class Detail extends React.Component {
    constructor(){
        super();
        this.state={
            showFlag:false,
        }
        this.handleScroll=this.handleScroll.bind(this);
    }
    render() {
        let {showFlag}=this.state;
        return (
            <Fragment>
                <CommonHeader>
                    <header className="common_header_bar" id="header">
                        <em >
                            <img src="http://3g.baobeigezi.com/imgs/SafariForward2x.png" alt="" />
                        </em>
                        <i>
                            <img src="http://3g.baobeigezi.com/imgs/shouye-dangqianicon2x.png" alt="" />
                        </i>
                        <b>
                            <img src="http://3g.baobeigezi.com/imgs/shareIcon.png" alt="" />
                        </b>
                    </header>
                </CommonHeader>
                <Wrapper>
                    <div className="page">
                        <div className="banner1 floor">
                            <img className="swiper-lazy" src="http://id.baoimg.net/share-img/photo/201904/5cbe5398a39bb.jpg" alt="" />
                            <div className='groupBgc'>
                                <div className="groupPri clearfix">
                                    <span className="groupPrice salePrice fl">
                                    拼团价¥
                                    </span>
                                    <em>19.90</em>
                                    <span className="unitPrice fl">市场价 ¥</span>
                                    <i>40.00</i>
                                    <span className="spell fr">
                                    已拼398
                        件
                                    </span>
                                </div>
                                <div className="numGroup clearfix">

                                </div>
                            </div>
                        </div>
                        <div className="proTopMsg">
                            <div className="proPrice">
                                <div className="salePrice clearfix">
                                    ￥<em>1466.00</em>
                                    <span className="homeSalePrice">
                                        <del>￥2199.00</del>
                                    </span>
                                </div>
                            </div>
                            <div className="timeDownLists">

                            </div>
                            <div className="xinPname">
                                <div className="proTitle">
                                    【保税仓】法国达能佳丽雅Gallia近母乳配方1段奶粉 900g
                            </div>
                            </div>
                        </div>
                        <div className="proMainMsg item">

                        </div>
                        <em href="" className="specification item">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/3fb430bc-8339-420f-8ff3-94e329c985ab.png" alt="" />
                            <span className="titTxt borderTit">
                                已选&nbsp;
                            </span>
                            <span className="checkSpan">
                                "6罐装,2020年06月"
                            </span>
                            <span className="detailsIcon triangle-right">
                                <img src="http://3g.baobeigezi.com/imgs/detail/gengduosan2x.png" alt="" />
                            </span>
                        </em>
                        {/* 品牌名 */}
                        <div className="brandList item clearfix">
                            <div>
                                <img src="http://id.baoimg.net/share-img/photo/201904/5cbed8fbbcde2.jpg" alt="" className="brandImg fl" />
                            </div>
                            <div className="fl brandDesc">
                                <span className="brandName text-overflow">佳丽雅Gallia</span>
                                <span className="saleNum">
                                    在售商品8个
                                </span>
                            </div>
                            <em href="" className="fr goBrand">
                                进入品牌
                            </em>
                        </div>
                        {/* 税相关信息 */}
                        <div className="freShui pr">
                            <div className="detailT">
                                配送及关税
                            </div>
                            <div className="peiSong">
                                <em href="" className="peiHref"></em>
                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        发货时间：
                                        </div>
                                    <div className="val">
                                        2-4个工作日内发货，物流信息以物流公司为准。偏远地区不支持发货，如有问题请联系客服。（注：保税区每人/相同地址，每日仅限三单，如超出海关个人行邮购买数量，次日发货或退货。）
                                        </div>
                                </div>
                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        运费结算：
                                        </div>
                                    <div className="val">
                                        包邮
                                        </div>
                                </div>

                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        关税说明：
                                        </div>
                                    <div className="val">
                                        个人邮寄进境物品海关依法征收进口税
                                        </div>
                                </div>
                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        其        他：
                                        </div>
                                    <div className="val">
                                        所有到货周期根据客户签收地而异
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* 品牌推荐--相关推荐 */}
                        <div className="descTabPage page swiper-slide">
                            {/* 商品详情评论 */}
                            <div className="tapNav tapNav3 clearfix">
                                <em href="">商品</em>
                                <em href="">详情</em>
                                <em href="">评论</em>
                            </div>
                            {/* 图文详情 */}
                            <div className="tapContent swiper-container">
                                <div className="tapItem detailsItem floor">
                                    <p>
                                        <img src="http://id.baoimg.net/share-img/ueditor/upload/images/20181009/1539070228768240.jpg" alt="" />
                                    </p>
                                    <h3>
                                        <br />
                                    </h3>
                                </div>
                            </div>

                        </div>
                        {/* 他们都在评 */}
                        <div className="comment item floor">
                            <em href="" className="itemTitle titTxt">
                                <span className="borderTit detailT">
                                    商品评价
                                        </span>
                                <span className="score">(10)</span>
                                <span className="commentScore">
                                    <span className="avg"> 5.00</span>
                                    好评
                                        </span>
                                <span className="detailsIcon">
                                    <img src="http://3g.baobeigezi.com/imgs/detail/gengduosan2x.png" alt="" />
                                </span>
                            </em>
                            <div className="commentLists">
                                {/* 用户信息 */}
                                <div className="commentList  pr">
                                    <div>
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png" alt="" className="userImg" />
                                    </div>

                                    <div className="listContent">
                                        <div className="userName">
                                            无******知
                                    </div>
                                        <div className="commentStar">
                                            <img src="http://3g.baobeigezi.com/imgs/detail/starfive3x.png" alt="" className="starSelected" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="commentWords">
                                        。。
                                    </div>
                                </div>
                                <div className="commentList  pr">
                                    <div>
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/default/319e7140-dd5c-464e-90f1-a688f919eddc.png" alt="" className="userImg" />
                                    </div>

                                    <div className="listContent">
                                        <div className="userName">
                                            无******知
                                    </div>
                                        <div className="commentStar">
                                            <img src="http://3g.baobeigezi.com/imgs/detail/starfive3x.png" alt="" className="starSelected" />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="commentWords">
                                        很好呢
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* 大家都在看 */}
                        <div className="water cartRecommend">
                            <div className="cartRecommend_tit">
                                大家都在看
                            </div>
                            <ul className="clearfix">
                                <li className="lis">
                                    <div className="imgDiv">
                                        <img className="lazy" src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/a83adc1c-3cb4-4ba3-84c4-017d242241b4.png" alt="" />
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow">
                                            【国内直发】穗加美 睡衣女短款薄款开衫家居服二件套装牛奶丝休闲甜美版 女虾粉叶L
                                        </div>
                                        <div className="waterPrice">
                                            ￥118.00
                                        </div>
                                    </div>
                                </li>
                                <li className="lis">
                                    <div className="imgDiv">
                                        <img className="lazy" src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/a83adc1c-3cb4-4ba3-84c4-017d242241b4.png" alt="" />
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow">
                                            【国内直发】穗加美 睡衣女短款薄款开衫家居服二件套装牛奶丝休闲甜美版 女虾粉叶L
                                        </div>
                                        <div className="waterPrice">
                                            ￥118.00
                                        </div>
                                    </div>
                                </li>
                                <li className="lis">
                                    <div className="imgDiv">
                                        <img className="lazy" src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/a83adc1c-3cb4-4ba3-84c4-017d242241b4.png" alt="" />
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow">
                                            【国内直发】穗加美 睡衣女短款薄款开衫家居服二件套装牛奶丝休闲甜美版 女虾粉叶L
                                        </div>
                                        <div className="waterPrice">
                                            ￥118.00
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Wrapper>
                <Footer>
                
                    <em href="" className="myCustomService">
                        <img src="http://3g.baobeigezi.com/imgs/detail/kefu2x.png" alt=""/>
                    </em>
                    <em href="" className="loveBtn">
                        <img src="http://3g.baobeigezi.com/imgs/detail/zhongcao2x.png" alt=""/>
                    </em>
                  
                    <em href="" className="shopCart">
                        <img src=" http://3g.baobeigezi.com/imgs/detail/gouwuche2x.png" alt=" "/>
                    </em>
                    <em href="" className="addCartBtn ">
                        加入购物车
                    </em>
                    <em href="" className="buyBtn ">
                        立即购买
                    </em>

                </Footer>
                {/* <em href="" className="toTop" id="toTop"></em> */}
                <ToTop onClick={this.handleTop.bind(this)} style={{display:showFlag?'block':'none'}}>

                </ToTop>
            </Fragment>
        )
    }


    componentWillMount(){
        window.addEventListener("scroll",this.handleScroll,true);
    }
    
    handleScroll(){
        let scrollTop=document.documentElement.scrollTop;
        // console.log(scrollTop);
        if(scrollTop>150){
            this.setState({
                showFlag:true
            })
        }else{
            this.setState({
                showFlag:false
            })
        }

    }
    handleTop(){
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
          });
    }
}
export default Detail;