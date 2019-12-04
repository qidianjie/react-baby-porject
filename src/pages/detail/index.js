import React from "react"
import { PageContainer } from "common/styled"
import { CommonHeader, Wrapper, Footer, ToTop } from "./styled"
import { withRouter } from "react-router-dom"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from 'react-redux'
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFlag: false,
            id: "",
            index1: 0,
            index2: 0,

            id:"",
            up:"",
            down:"",
            count:1,
           brandName:'',
            goodsName:"",
            price:"",
            imgUrl:"",
            cart: JSON.parse(localStorage.getItem("myCart")) || [],
            scrollFlag:"0"
        }
        // this.myCart=""
        this.handleScroll = this.handleScroll.bind(this);
        this.state.id = this.props.location.search.replace("?id=", "");
    }
    render() {
        
        let { showFlag, id, index1, index2, up ,down} = this.state;
        let { good, comment, recommendList } = this.props;
        return (
            <PageContainer ref="win">
                <CommonHeader>
                    <header className="common_header_bar" id="header">
                        <em onClick={this.handleback.bind(this)}>
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
                            {
                                (good.goodsDetail ? good.goodsDetail.imgs : []).map((item, index) => (
                                    <img className="swiper-lazy" src={item} alt="" key={index} />
                                ))
                            }

                            {/* 拼单 */}
                            {/* <div className='groupBgc'>
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
                                        <span className="span1 fl">
                                            2
                                        </span>
                                        <span className="span2 fl">
                                           人拼
                                        </span>
                                        <span className="span3 fl">
                                        包邮包税
                                        </span>
                                </div>
                           
                           
                            </div> */}
                        </div>
                        {
                            <div className="proPrice">
                                <div className="salePrice clearfix">
                                    ￥<em>{good.salePrice}</em>
                                    <span className="homeSalePrice">
                                        <del>￥{good.marketPrice}</del>
                                    </span>
                                </div>
                                {/* 红的部分 */}
                                {/* <div className="timeDownLists">

                        </div> */}
                                <div className="xinPname">
                                    <div className="proTitle">
                                        {good.name}
                                    </div>
                                </div>
                            </div>
                        }

                        {/* <div className="proMainMsg item">

                        </div> */}
                        <div className="specification item">
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
                        </div>
                        {/* 品牌名 */}
                        <div className="brandList item clearfix">
                            <div>
                                <img src={good.brandImage} alt="" className="brandImg fl" />
                            </div>
                            <div className="fl brandDesc">
                                <span className="brandName text-overflow">{good.brandName}</span>
                                <span className="saleNum">
                                    在售商品{good.brandGoodsCount}个
                                </span>
                            </div>
                            <em className="fr goBrand">
                                进入品牌
                            </em>
                        </div>
                        {/* 税相关信息 */}
                        <div className="freShui pr">
                            <div className="detailT">
                                配送及关税
                            </div>
                            <div className="peiSong">
                                <em className="peiHref"></em>
                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        <span>发货时间</span>
                                        ：
                                        </div>
                                    <div className="val">
                                        <i>
                                            2-4个工作日内发货，物流信息以物流公司为准。偏远地区不支持发货，如有问题请联系客服。（注：保税区每人/相同地址，每日仅限三单，如超出海关个人行邮购买数量，次日发货或退货。）
                                        </i>

                                    </div>
                                </div>
                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        <span>  运费结算：</span>

                                    </div>
                                    <div className="val">
                                        <span>包邮</span>
                                    </div>
                                </div>

                                <div className="typeList clearfix">
                                    <div className="peiKey">
                                        <span>关税说明：</span>

                                    </div>
                                    <div className="val">
                                        <span> 个人邮寄进境物品海关依法征收进口税</span>
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
                            <div className="tapNav tapNav3 clearfix" ref="sxp">
                                <em  >商品</em>
                                <em  >详情</em>
                                <em  >评论</em>
                            </div>
                            {/* 图文详情 */}
                            <div className="tapContent swiper-container">
                                <div className="tapItem detailsItem floor">
                                    {
                                        <p dangerouslySetInnerHTML={{ __html: good.goodsDetail ? good.goodsDetail.goodsPriceDetail.depict : "" }} />

                                    }
                                    {/* <p>
                                        <img src="http://id.baoimg.net/share-img/ueditor/upload/images/20181009/1539070228768240.jpg" alt="" />
                                    </p>
                                    <h3>
                                        <br />
                                    </h3> */}
                                </div>
                            </div>

                        </div>
                        {/* 他们都在评 */}
                        <div className="comment item floor">
                            <em className="itemTitle titTxt">
                                <span className="borderTit detailT">
                                    商品评价
                                        </span>
                                <span className="score">({comment.total})</span>
                                <span className="commentScore">
                                    <span className="avg"> {comment.avg}</span>
                                    好评
                                        </span>
                                <span className="detailsIcon">
                                    <img src="http://3g.baobeigezi.com/imgs/detail/gengduosan2x.png" alt="" />
                                </span>
                            </em>
                            <div className="commentLists">
                                {/* 用户信息 */}
                                {
                                    (comment.page ? comment.page.records : []).map((item, index) => (
                                        <div className="commentList  pr" key={item.id}>
                                            <div>
                                                <img src={item.headImg} alt="" className="userImg" />
                                            </div>

                                            <div className="listContent">
                                                <div className="userName">
                                                    {item.memberName}
                                                </div>
                                                <div className="commentStar">
                                                    <img src="http://3g.baobeigezi.com/imgs/detail/starfive3x.png" alt="" className="starSelected" />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="commentWords">
                                                {item.content}
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>
                        {/* 大家都在看 */}
                        <div className="water cartRecommend">
                            <div className="cartRecommend_tit">
                                大家都在看
                            </div>
                            <ul className="clearfix">
                                {
                                    (recommendList ? recommendList : []).map((item) => (
                                        <li className="lis" key={item.id} >
                                            <div className="imgDiv">
                                                <img className="lazy" src={item.mainImg} alt="" />
                                            </div>
                                            <div className="waterButtom pr">
                                                <div className="waterName text-overflow">
                                                    {item.name}
                                                </div>
                                                <div className="waterPrice">
                                                    {item.salePrice}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <Modal
                            popup
                            visible={this.state.modal2}
                            onClose={this.onClose('modal2')}
                            animationType="slide-up"
                        // afterClose={() => { alert('已加入购物车'); }}
                        >
                            <List renderHeader={() => <div>请选择商品参数</div>} className="popup-list">
                                <div >
                                    <p className="choose">{ (good.goodsDetail ? (good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? good.goodsDetail.goodsPriceDetail.attr[0].name : "") : "")}</p>
                                    <div>
                                        {
                                            (good.goodsDetail ? (good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? good.goodsDetail.goodsPriceDetail.attr[0].list :[]) :[]
                                            ).map((child, index) => (
                                                <b className="canshu" key={index} onClick={this.handleColor.bind(this,child.name,index)} className={index1 == index ? 'activeModel' : ""}>{child.name}</b>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div >
                                    <p className="choose">{ (good.goodsDetail ? (good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? good.goodsDetail.goodsPriceDetail.attr[0].name : "") : "")}</p>
                                    <div>
                                        {
                                           (good.goodsDetail ? (good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? good.goodsDetail.goodsPriceDetail.attr[1].list :[]) :[]
                                           ).map((child, index) => (
                                                <b className="canshu" key={index} onClick={this.handleTime.bind(this,child.name,index)} className={index2 == index ? 'activeModel' : ""}>{child.name}</b>
                                            ))
                                        }
                                    </div>
                                </div>
                                <List.Item>
                                    <Button type="primary" size="small" style={{ background: '#dcb86c', border: "none" }} onClick={this.onClose('modal2')}>加入购物车</Button>
                                </List.Item>
                            </List>
                        </Modal>
                    </div>
                </Wrapper>
                <Footer>
                    <em className="myCustomService">
                        <img src="http://3g.baobeigezi.com/imgs/detail/kefu2x.png" alt="" />
                    </em>
                    <em className="loveBtn">
                        <img src="http://3g.baobeigezi.com/imgs/detail/zhongcao2x.png" alt="" />
                    </em>

                    <em className="shopCart" onClick={this.handleCart.bind(this)}>
                        <img src=" http://3g.baobeigezi.com/imgs/detail/gouwuche2x.png" alt=" " />
                    </em>

                    {/* 正常购物 */}
                    <em className="addCartBtn " onClick={this.showModal('modal2')}>
                        加入购物车
                    </em>
                    <em className="buyBtn ">
                        立即购买
                    </em>

                    {/* *************************拼单************ */}
                    {/* <em  className="addCartBtn1 ">
                       <span className="groupCar1">￥<i>19.00</i></span>
                       <span className="groupCar2">单独购买</span>
                    </em>
                    <em className="buyBtn1 ">
                        <span className="groupCar1">￥<i>19.00</i></span>
                        <span>我要开团</span>
                    </em> */}

                </Footer>
                <ToTop onClick={this.handleTop.bind(this)} style={{ display: showFlag ? 'block' : 'none' }}>
                </ToTop>
            </PageContainer>
        )
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, true);
        this.props.detailAsyncData(this.state.id);
        this.props.goodsCommentAsyncData(this.state.id);
        this.props.recommendListAsyncData();
 
    }
    componentWillReceiveProps(){
             this.state.up=(this.props.good.goodsDetail ? (this.props.good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? this.props.good.goodsDetail.goodsPriceDetail.attr[0].list[0].name : "") : "");
             this.state.down=(this.props.good.goodsDetail ? (this.props.good.goodsDetail.goodsPriceDetail.attr.length !== 0 ? this.props.good.goodsDetail.goodsPriceDetail.attr[1].list[0].name : "") : "");

             this.state.brandName=this.props.good.brandName//品牌名 
             this.state.goodsName=this.props.good.name//商品名
             this.state.price=this.props.good.salePrice//商品价钱
             this.state.id=this.props.good.id;//商品ID
             this.state.imgUrl=(this.props.good.goodsDetail?this.props.good.goodsDetail.imgs[0] :"")
    }
    handleScroll() {
       if(this.state.scrollFlag=='0'){
        let tp=this.refs.sxp.offsetTop;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的距离
        if (scrollTop > 200) {
            this.setState({//控制滚动条的出现   
                showFlag: true
            })
        } else {
            this.setState({//控制滚动条的消失
                showFlag: false
            })
        }
        console.log(this.refs.sxp.offsetTop);
       }
        
    }
    handleTop() {//回到顶部
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }
    handleback() {//后退事件
        this.setState({
            scrollFlag:"1"
        },()=>{
            this.props.history.push("/home");
        })
        
    }
    handleColor(item,index) {//上面
        this.setState({
            index1: index,
            up:item
        },()=>{
            console.log(this.state.up)
        })
    }
    handleTime(item,index) {//下面
        this.setState({
            index2: index,
            down:item
        },()=>{
            console.log(this.state.down)
        })     
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });

        // 添加购物车
        var item={
                up:this.state.up,
                down:this.state.down,
                count:1,
                brandName:this.state.brandName,
                goodsName:this.state.goodsName,
                price:this.state.price,
                id:this.state.id,
                imgUrl:this.state.imgUrl

        }
        let mark=0;
        if(JSON.parse(localStorage.getItem("myCart"))){
            let cartArr = JSON.parse(localStorage.getItem("myCart"));
            this.state.cart=cartArr;
            for(let i=0;i<this.state.cart.length;i++){
                if(this.state.cart[i].id == item.id && this.state.cart[i].up==item.up &&  this.state.cart[i].down==item.down ){
                    this.state.cart[i].count++;
                    mark=1;
                    break;
                }     
            }
            if(mark==0){
                  this.state.cart.push(item);
            }
        }else{
            this.state.cart.push(item);
        }  
        localStorage.setItem("myCart",JSON.stringify(this.state.cart)); //进行存储 
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = this.closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    closest = (el, selector) => {
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        while (el) {
            if (matchesSelector.call(el, selector)) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }
    handleCart(){
        this.props.history.push("/cart")
    }
}
export default Detail;