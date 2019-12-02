import React from "react";
import { Container } from "./styled";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {withRouter} from "react-router-dom";
// Ant Design
import { Carousel, WingBlank } from 'antd-mobile';
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Parenting extends React.Component {
    constructor() {
        super();
        this.state = {
            num: ["http://3g.baobeigezi.com/imgs/mycenter/baby/index1.png", "http://3g.baobeigezi.com/imgs/mycenter/baby/index2.png", "http://3g.baobeigezi.com/imgs/mycenter/baby/index3.png"],
            knowledge:[
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav1.png",
                    text:"好孕攻略"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav2.png",
                    text:"孕期健康"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav3.png",
                    text:"分娩知识"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav4.png",
                    text:"产后修复"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav5.png",
                    text:"母乳喂养"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav6.png",
                    text:"生殖科普"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav7.png",
                    text:"新生儿护理"
                },
                {
                    img:"http://3g.baobeigezi.com/imgs/mycenter/baby/nav8.png",
                    text:"孕产问答"
                },

            ],
            data: [0,1,2,3,4],
            imgHeight: 176,
        }
    }
    render() {
        let { list } = this.props;
        let { num, knowledge} = this.state;

        return (
            <Container>
                {/* top */}
                <div className="top">
                    <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe605;</i>
                    <div>育儿频道</div>
                    <div></div>
                </div>
                {/* 轮播图 */}
                <div className="img">
                    <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map((val,index )=> (
                        <a
                        key={val}
                        href=""
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={list[0] ? list[0].result.advList[index].bigImage : ""}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
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
                </div>
                {/* 轮播图下面的 */}
                <div className="body">
                    <div className="knowledge public">
                        <p className="p_public">百科知识</p>
                        <ul>
                            {
                                knowledge.map((item,idx)=>(
                                    <li key={idx}>
                                        <img src={item.img} alt="" />
                                        <span>{item.text}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* 今日推荐 */}
                    <div className="public tuijian">
                        <p className="p_public">今日推荐</p>
                        <ul>
                            {
                                (list[2] ? list[2].result.advList : []).map((item, index) => (
                                    <li key={item.articleId}>
                                        <img src={num[index]} alt="" />
                                        {item.articleTitle}
                                        {
                                            index == 0 ? <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/hot.png" alt="" /> : ""
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="public expert">
                        <p className="p_public">专家讲堂 <span className="iconfont">更多 &#xe715;</span></p>
                        <ol>
                            <li>
                                <div className="expert_up">
                                    <div className="img_video">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/7d9732ef-67f9-44d4-9ea6-ad067bcb342f.jpg" alt="" />
                                    </div>

                                    <div>
                                        <h3>母乳喂养的重要性</h3>
                                        <span>免费观看 ></span>
                                    </div>
                                </div>
                                <div className="expert_low">
                                    <div className="img_icon">
                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/commentIcon.png" alt="" />
                                        4
                                    </div>
                                    <div className="img_icon">
                                        <i className="iconfont">&#xe628;</i>
                                        1039
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="expert_up">
                                    <div className="img_video">
                                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/7d9732ef-67f9-44d4-9ea6-ad067bcb342f.jpg" alt="" />
                                    </div>

                                    <div>
                                        <h3>母乳喂养的重要性</h3>
                                        <span>免费观看 ></span>
                                    </div>
                                </div>
                                <div className="expert_low">
                                    <div className="img_icon">
                                        <img src="http://3g.baobeigezi.com/imgs/mycenter/baby/commentIcon.png" alt="" />
                                        4
                                    </div>
                                    <div className="img_icon">
                                        <i className="iconfont">&#xe628;</i>
                                        1039
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                    {/* 格子粉福利专区 */}
                    <div className="public welfare">
                        <p className="p_public">格子粉福利专区</p>
                        <ol>
                            {
                                (list[5] ? list[5].result.advList : []).map((item) => (
                                    <li key={item.goodsId}>
                                        <img src={item.goodsImage} alt="" />
                                        <p>{item.goodsName}</p>
                                        <h5>￥{item.markerPrice}</h5>
                                        <h4>￥{item.salePrice}</h4>
                                        <div className="rush_buy">立即抢购</div>
                                    </li>
                                ))
                            }

                            {/* <li>
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/3f3ee3bc-185f-41fa-9f78-2e46e066b1d2.jpg" alt=""/>
                                <p>【国内直发】妇科健康体检套餐B</p>
                                <h5>￥1690.00</h5>
                                <h4>￥580.00</h4>
                                <div className="rush_buy">立即抢购</div>
                            </li> */}
                        </ol>
                    </div>
                    {/* 早教课程 */}
                    <div className="public course">
                        <p className="p_public">早教课程</p>
                        <div className="course_img">
                            <img src={list[6] ? list[6].result.advList[0].bigImage : ""} alt="" />
                        </div>
                        {/* center */}
                        <div className="center">
                            <div className="center_title">
                                <h6>{list[6] ? list[6].result.advList[0].advTitle : ""}</h6>
                                <p>{list[6] ? list[6].result.advList[0].advDescribes : ""}</p>
                            </div>
                            <div className="service">
                                <i className="iconfont">&#xe638;</i>
                                客服
                            </div>
                        </div>
                        {/* 抢购 */}
                        {
                            (list[7] ? list[7].result.advList : []).map((item) => (
                                <div className="crazy_course" key={item.goodsId}>
                                    <img src={item.goodsImage} alt="" />
                                    <div className="course_goods">
                                        <p>{item.goodsName}</p>
                                        <span>￥{item.salePrice}</span>
                                        <span>立即抢购</span>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="crazy_course">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/goods-image/432b7ab1-a9a4-477d-b074-4498fec9f33b.jpg" alt=""/>
                            <div className="course_goods">
                                <p>【国内直发】音乐语言课程+创意社交课程 月卡（5课时）预售</p>
                                <span>￥1480.00</span>
                                <span>立即抢购</span>
                            </div>
                        </div>*/}
                    </div>
                    {/* 公开课 */}
                    <div className="public openclass">
                        <p className="p_public">公开课 <span className="iconfont">更多 &#xe715;</span></p>
                        <div className="open_img">
                            <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/3b98527e-b3c8-4454-b166-532820cd60d9.png" className="open_imgone" alt="" />
                            <div className="open_img_right">
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/0d48aa3e-42d5-467a-aeb2-75e674a9a3e4.png" alt="" />
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/18ad0012-dc99-450b-a199-bbdf406f1831.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* 精品服务 */}
                    <div className="public fuwu">
                        <p className="p_public">精品服务 <span className="iconfont">更多 &#xe715;</span></p>
                        <ol>
                            {
                                (list[10] ? list[10].result.advList : []).map((item) => (
                                    <li key={item.advId}>
                                        <a href={item.appLink}>
                                            <img src={item.bigImage} alt="" />
                                        </a>
                                    </li>
                                ))
                            }

                            {/*  <li>
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/ec329339-346d-462d-a00a-227e7e3f8bbd.png" alt=""/>
                            </li> */}
                        </ol>
                    </div>
                    {/* 咨询专家 */}
                    <div className="public consult">
                        <p className="p_public">精品服务 <span className="iconfont">更多 &#xe715;</span></p>
                        <ol>
                            {
                                (list[12] ? list[12].result.advList : []).map((item) => (
                                    <a href={item.appLink} key={item.advId}>
                                        <li>
                                            <img src={item.bigImage} alt="" />
                                            <div className="expertinfo">
                                                <h3>{item.advTitle}</h3>
                                                <p>{item.advDescribes}</p>
                                                <span>
                                                    咨询
                                                </span>
                                                <span>立即预约</span>
                                            </div>
                                        </li>
                                    </a>
                                ))
                            }

                            {/*<li>
                                <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/d2ec742f-42a1-4555-8152-77b84e103d36.png" alt=""/>
                                <div className="expertinfo">
                                    <h3>刘品祥</h3>
                                    <p>执业中医师 博士北京宝岛妇产医院中医科医师北京同仁堂门诊医师福建省中医药学会闽台中医药文化交流分会-副主委世界中医药联合会中药上市再评价委员会-常务理事</p>
                                    <span>
                                        咨询
                                    </span>
                                    <span>立即预约</span>
                                </div>
                            </li> */}
                        </ol>
                    </div>
                </div>
            </Container>
        )
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','',''],
            });
        }, 100);
        this.props.handleAsyncParenting();
    }
    handleBack(){
        this.props.history.push("/home")
    }
}
export default Parenting;
