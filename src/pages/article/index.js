import React from "react";
import {ArticleContainer} from "./styled";
class Article extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <ArticleContainer>
                {/* top */}
                <div className="top">
                    <a href="">></a>
                    <h3>新生儿护理</h3>
                    <div>
                        <a href="">@</a>
                        <a href="">@</a>
                    </div>
                </div>
                {/* center */}
                <div className="main">
                    <div className="article_img">
                        <img src="https://imagespro.baobeigezi.com/bbgz2019/brand-image/9ce43ed5-adfd-43e3-b3ea-10820a4bf286.jpg" alt=""/>
                    </div>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                    <p>对于足月出生的宝宝来说，在他们满6个月的时候就要添加辅食了。而宝宝的第一口辅食，《中国居民膳食指南（2016）》是这么推荐的：</p>
                </div>
                {/* footer */}
                <div className="footer">
                    <a href="">
                        <img src="../../../src/assets/images/bi.png" alt=""/>
                    </a>
                    <input type="text" placeholder="添加评论"/>
                    <button>发送</button>
                    <a href=""></a>
                    <a href=""></a>
                    <span>0</span>
                    <span>1999</span>
                </div>
            </ArticleContainer>
        )
    }
}

export default Article;