import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import {Classify} from "./styled"
export default class Search extends Component {
    render() {
        return (
            <PageContainer>
            <Classify>
                <div className="header">
                    <input type="text"/>
                    <span>取消</span>
                    <a className="iconfont">&#xe613;</a>
                </div>
                <div className="history">
                    <div className="history_top">
                        <span>历史搜索</span>
                        <span className="iconfont">&#xe62c;</span>
                    </div>
                    <h3>暂无搜索历史</h3>
                </div>
                <ul className="search_item">
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                    <li>
                        <p>范德萨发发大撒法非官方的诗歌风格发给发嘀咕十分广泛大使馆犯得上噶地方广泛大概发的广泛广泛东莞市东莞市地方官大使馆士大夫广东省分公司的分公司</p>
                        <span className="iconfont">&#xe715;</span>
                    </li>
                </ul>
            </Classify>
            </PageContainer>
        )
    }
}

