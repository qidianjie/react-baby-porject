import React, { Component } from 'react'
import { Header, Brandtop, Brsec2, Nav, WaterList } from './styled'
import { WhiteSpace } from 'antd-mobile';
export default class Brand extends Component {
    render() {
     
        return (
            <div>
                <Header >

                    <span>
                        <i className="iconfont">&#xe605;</i>
                        品牌详情
                        <i className="iconfont">&#xe613;</i>
                    </span>

                </Header>
                <Brandtop>
                    <div>
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/23a20e1e-b87a-4f42-8222-dfea9bf73977.jpg" alt="" />
                    </div>
                    <div>
                        <span>健萃乐</span>
                    </div>
                </Brandtop>
                <Brsec2>
                    <span>健萃乐</span>
                </Brsec2>
                <Nav>
                    <span>
                        综合
                            <i className="iconfont">&#xe666;</i>
                    </span>
                    <span>
                        价格
                           <i className="iconfont">  &#xe75b;</i>
                    </span>
                    <span>
                        销量
                        </span>
                    <span className="shai">
                        筛选
                          <i className="iconfont">&#xe655;</i>
                    </span>
                </Nav>
                <WaterList>
                    <div className="waterList">
                        <ul className="water">
                            <li className="lis pr">
                                <a href="#">
                                    <div className="imgDiv">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy" />
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
                                <a href="#">
                                    <div className="imgDiv">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy" />
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
                                <a href="#">
                                    <div className="imgDiv">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy" />
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
                                <a href="#">
                                    <div className="imgDiv">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/821e99b1-5aad-484b-9e2b-39cff76f254a.png" alt="" className="lazy" />
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
                    <div>
                        <WhiteSpace />

                    </div>
                </WaterList>


            </div>

        )
    }
}
