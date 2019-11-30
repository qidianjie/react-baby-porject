import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import { Banner, Baozheng, BannerIcon, ActiveList, WaterFull } from './styled'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
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
                id:3,
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
        ]
        }
    }
    render() { 
         let {arr}=this.state;
        return (
            <PageContainer>
               <Banner>
                    <div className="home">
                        <input type="text" />
                        <i className="home_one"></i>
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b25460e6-7814-4e4b-9603-50b01d8aab76.jpg" />
                        </div>
                    </div>

                </Banner>
                <Baozheng>
                    <img src="http://3g.baobeigezi.com/imgs/baozheng2.png" />
                </Baozheng>
                {/* 十个icon */}
                <BannerIcon>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                    <a href="#" className="fl">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b76afe55-d635-4eea-9110-83d3a828df4b.png" alt="" />
                        <span>奶粉尿裤</span>
                    </a>
                </BannerIcon>
                <ActiveList>
                    {/* 新人超值专享 */}
                    <div className="newPer">
                        <a href="" className="newPerBg">
                            <span className="">新人超值专享</span>
                            <img src="http://3g.baobeigezi.com/imgs/newIndex/newPer.png" alt="" />
                        </a>
                        <div className="p12T3">
                            <div className="newZhe">
                                <div className="newTit clearfix">
                                    <span className="fl">新人专享价</span>
                                    <span className=" fr col_BB361F">首单包邮</span>
                                </div>
                                <div className="newList clearfix">
                                    <a href="" className="newLi">
                                        <img src="https://imagespro.baobeigezi.com/houniao/images/goods-main/5d26f14e462bc5b2d9bf4d9a94c6fe5b.jpg" />
                                        <span className="newPrice">
                                            ￥94.00
                                        </span>
                                    </a>
                                    <a href="" className="newLi">
                                        <img src="https://imagespro.baobeigezi.com/houniao/images/goods-main/5d26f14e462bc5b2d9bf4d9a94c6fe5b.jpg" />
                                        <span className="newPrice">
                                            ￥94.00
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="newZhe">
                                <div className="newTit clearfix">
                                    <span className="fl">新人专享价</span>
                                    <span className=" fr col_BB361F">首单包邮</span>
                                </div>
                                <div className="newList clearfix">
                                    <a href="" className="newLi">
                                        <img src="https://imagespro.baobeigezi.com/houniao/images/goods-main/5d26f14e462bc5b2d9bf4d9a94c6fe5b.jpg" />
                                        <span className="newPrice">
                                            ￥94.00
                                        </span>
                                    </a>
                                    <a href="" className="newLi">
                                        <img src="https://imagespro.baobeigezi.com/houniao/images/goods-main/5d26f14e462bc5b2d9bf4d9a94c6fe5b.jpg" />
                                        <span className="newPrice">
                                            ￥94.00
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="quanGo">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/901f1194-fc7a-45d0-9a31-657fc122f23e.jpg" alt="" />
                        </div>
                    </div>
                    {/* 限时抢购 */}
                    <div className="flashSale">
                        <div className="flashTit ">
                            <span className="flashGo fl">限时抢购</span>
                            <span className="flashTime fl">上新啦</span>
                            <div className="timer fl"></div>
                            <a href="" className="fr more">更多></a>
                        </div>
                        <div className="flashList">
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                            <a href="" className="swiper-slide">
                                <img src="http://id.baoimg.net/share-img/photo/201810/5bcfe67a7c6a5.png" alt="" />
                                <span className="del">市场价￥350.00</span>
                                <span className="col_BB361F">抢购价￥106.00</span>
                            </a>
                        </div>
                    </div>
                    {/* 每日拼团 */}
                    <div className="groupBoook">
                        <div className="groupBg clearfix ">
                            <span className="today">每日拼团</span>
                        </div>
                        <div className="groupList">
                            <a href="" className="groupLi clearfix">
                                <div className="groupImg fl">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/4a17933a-6efe-463f-a897-f10233bd07fb.jpg" />
                                </div>
                                <div className="fl groupRigth">
                                    <div className="groupName text-overflow2">【国内直发】  小葵花乳矿物盐夹心凝胶糖果</div>
                                    <div className="pinBtn">已拼1430件</div>
                                    <div className="pPrice clearfix">
                                        <span className="col_BB361F price fl">￥39.90</span>
                                        <span className="del">￥98.00</span>
                                        <span className="goBtn fr">马上拼团</span>

                                    </div>

                                </div>
                            </a>
                            <a href="" className="groupLi clearfix">
                                <div className="groupImg fl">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/4a17933a-6efe-463f-a897-f10233bd07fb.jpg" />
                                </div>
                                <div className="fl groupRigth">
                                    <div className="groupName text-overflow2">【国内直发】  小葵花乳矿物盐夹心凝胶糖果</div>
                                    <div className="pinBtn">已拼1430件</div>
                                    <div className="pPrice clearfix">
                                        <span className="col_BB361F price fl">￥39.90</span>
                                        <span className="del">￥98.00</span>
                                        <span className="goBtn fr">马上拼团</span>

                                    </div>

                                </div>
                            </a>
                            <a href="" className="groupLi clearfix">
                                <div className="groupImg fl">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/4a17933a-6efe-463f-a897-f10233bd07fb.jpg" />
                                </div>
                                <div className="fl groupRigth">
                                    <div className="groupName text-overflow2">【国内直发】  小葵花乳矿物盐夹心凝胶糖果</div>
                                    <div className="pinBtn">已拼1430件</div>
                                    <div className="pPrice clearfix">
                                        <span className="col_BB361F price fl">￥39.90</span>
                                        <span className="del">￥98.00</span>
                                        <span className="goBtn fr">马上拼团</span>

                                    </div>

                                </div>
                            </a>
                            <a href="" className="groupLi clearfix">
                                <div className="groupImg fl">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/4a17933a-6efe-463f-a897-f10233bd07fb.jpg" />
                                </div>
                                <div className="fl groupRigth">
                                    <div className="groupName text-overflow2">【国内直发】  小葵花乳矿物盐夹心凝胶糖果</div>
                                    <div className="pinBtn">已拼1430件</div>
                                    <div className="pPrice clearfix">
                                        <span className="col_BB361F price fl">￥39.90</span>
                                        <span className="del">￥98.00</span>
                                        <span className="goBtn fr">马上拼团</span>

                                    </div>

                                </div>
                            </a>
                            <a href="" className="groupLi clearfix">
                                <div className="groupImg fl">
                                    <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/4a17933a-6efe-463f-a897-f10233bd07fb.jpg" />
                                </div>
                                <div className="fl groupRigth">
                                    <div className="groupName text-overflow2">【国内直发】  小葵花乳矿物盐夹心凝胶糖果</div>
                                    <div className="pinBtn">已拼1430件</div>
                                    <div className="pPrice clearfix">
                                        <span className="col_BB361F price fl">￥39.90</span>
                                        <span className="del">￥98.00</span>
                                        <span className="goBtn fr">马上拼团</span>

                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>
                    {/* 活动 */}
                    <div className="qingImg activeImg">
                        <a href="">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/2759aa70-f904-4ad6-90da-27d71d44fb27.jpg" alt="" />
                        </a>
                    </div>
                    <div className="specialList clearfix">
                        <a href="" className="specialLi fl">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9736218b-9d28-4094-94e6-8dc28faa2069.jpg" alt="" />
                        </a>
                        <a href="" className="specialLi fl">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9736218b-9d28-4094-94e6-8dc28faa2069.jpg" alt="" />
                        </a>
                        <a href="" className="specialLi fl">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9736218b-9d28-4094-94e6-8dc28faa2069.jpg" alt="" />
                        </a>
                        <a href="" className="specialLi fl">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9736218b-9d28-4094-94e6-8dc28faa2069.jpg" alt="" />
                        </a>
                    </div>
                    {/* 精选活动 */}
                    <div className="jingActive">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                精选活动
                            </span>
                        </div>
                        <div className="jingList">
                            <div className="jingLi">
                                <a href="">
                                    <img className="jingBgimg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/eb4366dd-e195-4e32-a6df-1c7509e933d4.jpg" alt="" />
                                </a>
                                <div className="flashList">
                                    <a href="" className="swiper-slide">
                                        <img src="http://id.baoimg.net/share-img/photo/meizhuang/2019/LAN0049-display-1.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/c9d69550-a4c1-4677-9705-db18bdf8d342.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/afdf2a2f-c9c8-485a-876b-f009466284bf.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/92cbb900-75ea-4f7c-92f5-0e314b1a1a71.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                </div>
                            </div>
                            <div className="jingLi">
                                <a href="">
                                    <img className="jingBgimg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9aa53809-1c4c-4ac6-aa47-c5d9b037ea04.jpg" alt="" />
                                </a>
                                <div className="flashList">
                                    <a href="" className="swiper-slide">
                                        <img src="http://id.baoimg.net/share-img/photo/meizhuang/2019/LAN0049-display-1.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/c9d69550-a4c1-4677-9705-db18bdf8d342.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/afdf2a2f-c9c8-485a-876b-f009466284bf.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                    <a href="" className="swiper-slide">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/92cbb900-75ea-4f7c-92f5-0e314b1a1a71.jpg" alt="" />
                                        <span className="title text-overflow">
                                            【保税仓】LANCOME兰蔻 清莹柔肤化妆水 粉水 400ML 香港直邮
                                </span>
                                        <span className="del">市场价￥350.00</span>
                                        <span className="col_BB361F">抢购价￥106.00</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 国家地区馆 */}
                    <div className="jingXuan">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                国家地区馆
                         </span>
                        </div>
                        <div className="p12T10">
                            <a href="" className="countryImgTit">
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/81598199-59a9-4e01-8cfa-c33b8220a705.jpg" alt="" />
                            </a>
                        </div>
                        {/* 地区馆中的轮播 */}
                        <div className="countryall">
                            <div className="container">
                                <a href="" className="countryItem">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                            </div>

                            <div className="container">
                                <a href="" className="countryItem">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                            </div>

                            <div className="container">
                                <a href="" className="countryItem">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                                <a href="" className="countryItem fl">
                                    <img src="http://3g.baobeigezi.com/imgs/country/36.png" alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                    {/* 精选分类 */}
                    <div className="fenlei">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                精选分类
                         </span>
                        </div>
                        <div className="jingXuanHeader">
                            <div className="jingXuanHeaderLeft">
                                <a href="">
                                    <div className="classHeader">奶粉囤货</div>
                                    <div className="classPrice text-overflow">大牌奶粉低价囤货</div>
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/539f1e75-1f48-4d59-af39-265005690f34.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                            <div className="jingXuanHeaderRight">
                                <a href="">
                                    <div className="right1">
                                        <div className="classHeader">纸尿裤</div>
                                        <div className="classPrice text-overflow">花王纸尿裤焕新</div>
                                    </div>

                                    <div className="pImg_small">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/539f1e75-1f48-4d59-af39-265005690f34.jpg" alt="" />
                                    </div>
                                </a>
                                <a href="">
                                    <div className="right1">
                                        <div className="classHeader">纸尿裤</div>
                                        <div className="classPrice text-overflow">花王纸尿裤焕新</div>
                                    </div>

                                    <div className="pImg_small">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/539f1e75-1f48-4d59-af39-265005690f34.jpg" alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <ul className="jingXuanList">
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className="pImg">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23077fcb-5dc9-4584-8daf-946b68050278.jpg" alt="" />
                                    </div>
                                    <div className="hu">
                                        <div className="classHeader text-overflow">
                                            补水面膜
                                    </div>
                                        <div className="classPrice text-overflow">
                                            SNP黄金胶原蛋面膜
                                    </div>
                                    </div>

                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 全球榜单 ---热门品牌 */}
                    <div className="hotBrand">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                热门品牌
                         </span>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="hotWeekPlist hotBrand">
                                        <div className="brandImg">
                                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/b9940c16-0308-4264-9c22-c0853f8b237f.jpg" alt="" />
                                        </div>
                                        <div className="pr brandPr">
                                            <a href="" className="fenSi clearfix">
                                                <img src="https://img.baoimg.net/photo/201411/2014111820003549679697.png" alt="" className="pr fenImg" />

                                                <div className="fenSiRiht fl">
                                                    <div className="fenName">
                                                        Aptamil爱他美
                                                        <span className="goEvent">
                                                            进入专场>
                                                        </span>
                                                    </div>
                                                    <div className="span1 text-overflow">
                                                        爱他美（Aptamil）奶粉它是德国第一品牌的奶粉，也是欧洲销量最好的奶粉之一。属于达能集团婴幼儿营养品事业部。爱他美（Aptamil）是近似母乳的专利奶粉，欧洲妈妈的最爱，由于欧洲人较少母乳，此款奶粉在欧洲最为高端，更是医院医生的推荐，适合混合喂养或由母乳过渡到奶粉喂养的宝宝。
                                                     </div>
                                                </div>


                                            </a>
                                            <div className="all_lis">
                                                <a href="" className="lis fl">
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
                                                <a href="" className="lis fl">
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
                                                <a href="" className="lis fl">
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

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 全球榜单 --热门品牌下面的六个品牌 */}

                    <div className="brandList clearfix">
                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>

                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>

                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>

                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>

                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>
                        <a href="" className="brandLi">
                            <img className="brandBg" src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/971346ba-931d-4586-ba20-8698f6b74fb4.jpg" alt="" />
                            <div className="bg pa"></div>
                            <img src="https://img.baoimg.net/photo/201407/201407089004159834953.jpg" alt="" className="brandLogo " />
                            <div className="brDesc">MeadJohnson美赞臣</div>
                        </a>

                    </div>
                    {/* 全球榜单的第四个 */}
                    <div className="qingImg activeImg">
                        <a href="">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/4ba39858-93f4-4b52-b1dd-7e0900349283.jpg" alt="" />
                        </a>
                    </div>
                    {/* 育儿百科--全球榜单的第四个 */}
                    <div className="babyIndex">
                        <div className="groupBg clearfix">
                            <span className="today fl">
                                育儿百科
                            </span>
                        </div>
                        <div className="babyIndexList">
                            <a href="" className="babyBanner">
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/6eb9fadc-755b-4df2-be14-a5520eaef7c7.jpg" alt="" />
                            </a>
                            <div className="earlyClass">
                                <a href="" className="earlyLi">
                                    <div className="earlyLiImg fl">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/a65f1c62-c4f4-447d-843c-dfa1d227019a.jpg" alt="" />

                                    </div>
                                    <div className="fl earlyRirht">
                                        <div className="earlyRirhtTit text-overflow">
                                            来自美国，天然、无污染的健萃乐营养品
                                        </div>
                                        <div className="cmsArticleKeyword text-overflow">
                                            最天然的健萃乐营养品，就在这啦！
                                        </div>
                                        <div className="halButtom clearfix">
                                            <div className="fl comment">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png" alt="" />
                                                <span>
                                                    376
                                            </span>
                                            </div>

                                            <div className="fl ">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/watchIcon.png" alt="" />
                                                <span>
                                                    733
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="earlyLi">
                                    <div className="earlyLiImg fl">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/a65f1c62-c4f4-447d-843c-dfa1d227019a.jpg" alt="" />

                                    </div>
                                    <div className="fl earlyRirht">
                                        <div className="earlyRirhtTit text-overflow">
                                            来自美国，天然、无污染的健萃乐营养品
                                        </div>
                                        <div className="cmsArticleKeyword text-overflow">
                                            最天然的健萃乐营养品，就在这啦！
                                        </div>
                                        <div className="halButtom clearfix">
                                            <div className="fl comment">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png" alt="" />
                                                <span>
                                                    376
                                            </span>
                                            </div>

                                            <div className="fl ">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/watchIcon.png" alt="" />
                                                <span>
                                                    733
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="" className="earlyLi">
                                    <div className="earlyLiImg fl">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/a65f1c62-c4f4-447d-843c-dfa1d227019a.jpg" alt="" />

                                    </div>
                                    <div className="fl earlyRirht">
                                        <div className="earlyRirhtTit text-overflow">
                                            来自美国，天然、无污染的健萃乐营养品
                                        </div>
                                        <div className="cmsArticleKeyword text-overflow">
                                            最天然的健萃乐营养品，就在这啦！
                                        </div>
                                        <div className="halButtom clearfix">
                                            <div className="fl comment">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/zan.png" alt="" />
                                                <span>
                                                    376
                                            </span>
                                            </div>

                                            <div className="fl ">
                                                <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/watchIcon.png" alt="" />
                                                <span>
                                                    733
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </ActiveList>


                {/* 二级路由 */}
                <WaterFull className="waterFull">
                    <ul className="waterFullNav">
                        {
                            arr.map((item,index)=>{
                               return <li className="waterFullNav_li" key={item.id}>
                                   <span>{item.name}</span></li>
                            }
                            )
                        }
                        
                    </ul>
                    <div className="waterList">
                        <ul className="water">
                            <li className="lis pr">
                                <a href="">
                                    <div className="imgDiv">
                                        <img    src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy"/>
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow2">
                                        【包邮】Aptamil 爱他美 金装婴儿奶粉 四段 900g*3罐装
                                        </div>
                                        <h5 className="waterPrice">
                                        ￥399.00
                                        </h5>
                                    </div>
                                </a>
                            </li>
                            <li className="lis pr">
                                <a href="">
                                    <div className="imgDiv">
                                        <img    src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy"/>
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow2">
                                        【包邮】Aptamil 爱他美 金装婴儿奶粉 四段 900g*3罐装
                                        </div>
                                        <h5 className="waterPrice">
                                        ￥399.00
                                        </h5>
                                    </div>
                                </a>
                            </li>
                            <li className="lis pr">
                                <a href="">
                                    <div className="imgDiv">
                                        <img    src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy"/>
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow2">
                                        【包邮】Aptamil 爱他美 金装婴儿奶粉 四段 900g*3罐装
                                        </div>
                                        <h5 className="waterPrice">
                                        ￥399.00
                                        </h5>
                                    </div>
                                </a>
                            </li>
                            <li className="lis pr">
                                <a href="">
                                    <div className="imgDiv">
                                        <img    src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy"/>
                                    </div>
                                    <div className="waterButtom pr">
                                        <div className="waterName text-overflow2">
                                        【包邮】Aptamil 爱他美 金装婴儿奶粉 四段 900g*3罐装
                                        </div>
                                        <h5 className="waterPrice">
                                        ￥399.00
                                        </h5>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </WaterFull>
            </PageContainer>
        )
    }
}
