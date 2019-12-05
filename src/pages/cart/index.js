import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Classify } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"
import { Toast, Icon, NoticeBar } from 'antd-mobile';
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: JSON.parse(localStorage.getItem("myCart")) || [],
            selectAll: true,//true表示被选中
            itemFlag: true,
            Sprice: 0,
            Snum: 0,
            imgFlag: 0
        }
        this.state.cart.map((item) => {
            item.flag = true;
        })
    }

    render() {
        let { cart, selectAll, Sprice, Snum, imgFlag } = this.state;
        let { recommendList } = this.props;
        // console.log(cart);
        return (
            <PageContainer>
                <Classify>
                    <div className="top">
                        <div className="header">
                            <a className="iconfont" onClick={this.handleBack.bind(this)}>&#xe605;</a>
                            <span>购物车</span>
                            <i >编辑</i>
                        </div>
                    </div>

                    {/* 购物车 */}
                    <div className="cart">
                        <div className="tixing">

                            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                                在清关中产生的税费及手续费需要收件人缴纳，请知悉！
                            </NoticeBar>
                        </div>
                        {/* 购物车列表 */}
                        <div>
                            {
                                cart.map((item, index) => (
                                    <div className="cart_item" key={index}>
                                        <div className="cart_item_radio">
                                            <input type="checkbox" checked={item.flag} onChange={this.handleItem.bind(this, index)} />
                                        </div>
                                        <div className="cart_item_content">
                                            <img src={item.imgUrl} />
                                            <div className="cart_item_right">
                                                <Icon type="cross" size="xxs" onClick={this.handleDel.bind(this, index)} />
                                                <h5>{item.brandName}</h5>
                                                <p>{item.goodsName}</p>
                                                <div className="cart_item_price">
                                                    <div className="cart_item_price_left">
                                                        <span>{item.up}{item.down}</span>
                                                        <i>￥{item.price}</i>
                                                    </div>
                                                    <p>
                                                        <a onClick={this.handleReducer.bind(this, index)}>-</a>
                                                        <input type="text" value={item.count} onChange={this.handleChange.bind(this)} />
                                                        <a onClick={this.handleAdd.bind(this, index)}>+</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        {/* 购物车背景 */}
                        <div className="bg">
                            <img src="http://3g.baobeigezi.com/imgs/default/gouwuchequesheng2x.png" />
                            <span>更多好货等你来选</span>
                        </div>
                        {/* 购物件数 */}
                        <div className="goodsList_count">
                            <p>已选购<span>0</span>件</p>
                        </div>

                        {/* 结算功能 */}
                        <div className="play">
                            <input type="checkbox" checked={selectAll} onChange={this.handleAll.bind(this)} />
                            <p>总计金额:
                                        <span>￥{Sprice}</span>
                            </p>
                            <div onClick={this.successToast.bind(this)}>去结算(<i>{Snum}</i>)</div>
                        </div>

                        {/* 下面的商品列表页 */}
                        <div className="goods">
                            <h5>大家都在看</h5>
                            <ul>
                                {
                                    (recommendList ? recommendList : []).map((item, index) => (
                                        <Link to={"/detail?id=" + item.id} key={index}>
                                            <li key={item.id}>
                                                <img src={item.mainImg} />
                                                <h6>{item.name}</h6>
                                                <p>￥{item.salePrice}</p>
                                            </li></Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </Classify>
            </PageContainer>
        )
    }
    componentDidMount() {
        this.props.recommendListAsyncData();
        this.handleTotalPrice();

    }
    handleChange() { }
    //上面的选项
    handleItem(index) {
        let mc = this.state.cart;
        mc[index].flag = !mc[index].flag;
        this.setState({
            cart: mc
        })
        let bStop = true;
        for (var i = 0; i < this.state.cart.length; i++) {
            if (!this.state.cart[i].flag) {
                bStop = false;
            }
        }
        this.setState({
            selectAll: bStop
        })
        this.forceUpdate();
        this.handleTotalPrice()
    }
    handleAll() {//全选
        this.setState({
            selectAll: !this.state.selectAll
        }, () => {
            this.state.cart.map((item) => {
                item.flag = this.state.selectAll
            })
            this.forceUpdate();
            this.handleTotalPrice()
        })
    }
    handleTotalPrice() {//计算价钱
        var sprice = 0;
        let snum = 0;
        for (var i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].flag) {
                snum += this.state.cart[i].count;
                sprice += Number(this.state.cart[i].count) * Number(this.state.cart[i].price);
                sprice = parseFloat(sprice.toFixed(2))

            }
        }
        this.setState({
            Sprice: sprice,
            Snum: snum
        }, () => {
            // console.log(this.state.Sprice,this.state.Snum);
        })
    }
    handleAdd(index) {//增加
        let myCC = this.state.cart;
        myCC[index].count++;
        localStorage.setItem("myCart", JSON.stringify(myCC));
        this.forceUpdate();
        this.handleTotalPrice();
    }
    handleReducer(index) {//减少
        let myCC = this.state.cart;
        if (myCC[index].count <= 1) {
            myCC[index].count = 1;
        } else {
            myCC[index].count--;
        }
        localStorage.setItem("myCart", JSON.stringify(myCC));
        this.handleTotalPrice();
        this.forceUpdate();

    }
    handleDel(index) {//删除
        let myCC = this.state.cart;
        myCC.splice(index, 1);
        localStorage.setItem("myCart", JSON.stringify(myCC));
        this.handleTotalPrice();
        this.forceUpdate();
        
    }
    handleBack() {
        this.props.history.goBack();
    }
    successToast() {
        if (this.state.Snum !== 0) {
            Toast.success('您的订单已生成，稍后为您发货', 1);
        } else {
            Toast.success('您还没有选择商品哦', 1);
        }
    }

}

export default Cart

