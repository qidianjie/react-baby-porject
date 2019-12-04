import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { Classify } from "./styled"
// 进度条
import { Progress, WingBlank, WhiteSpace } from 'antd-mobile';
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import {Link,withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Qianggou extends React.Component {
    constructor() {
        super();
        this.state = {
            percent: 50,
        };
    }
    add = () => {
        let p = this.state.percent + 10;
        if (this.state.percent >= 100) {
            p = 0;
        }
        this.setState({ percent: p });
    }
    render() {
        let { crazyList } = this.props;
        const { percent } = this.state;
        console.log(crazyList)
        return (
            <PageContainer>
                <Classify>
                    <div className="header">
                        <span>
                            <img src="http://3g.baobeigezi.com/imgs/newIndex/flashIcon.png"></img>
                        </span>
                        <a className="iconfont" onClick={this.handleClick.bind(this)}>&#xe605;</a>
                    </div>
                    <div className="comming">
                        <h4>上新了</h4>
                        <span>正在抢</span>
                    </div>

                    <div className="flash">
                        <ul className="flash_content">
                            {
                                (crazyList ? crazyList : []).map((item) => (
                                    <li key={item.goodsId}>
                                        <img src={item.goodsImage}></img>
                                        <div className="flash_content_right">
                                            <p>{item.goodsName}</p>
                                            <div className="jindutiao">
                                                {/* <span></span> */}
                                                {/* 进度条 */}
                                                <div className="progress-container">
                                                    <div style={{ height: 18 }} />
                                                    <Progress percent={item.goodsNumbers*100} position="normal" unfilled={false} appearTransition />
                                                    <WhiteSpace size="xl" />

                                                </div>
                                                <i>已抢{item.goodsNumber}</i>
                                            </div>
                                            <div className="price">
                                                <span>￥{item.activityPrice}</span>
                                                <del>{item.marketPrice}</del>
                                                <a>马上抢</a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                </Classify>
            </PageContainer>
        )
    }
    componentWillMount() {
        this.props.handleAsyncCrazy();
    }
    handleClick(){
        this.props.history.goBack();
    }
}
export default Qianggou

