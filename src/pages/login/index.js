import React from "react";

import {LoginContainer} from "./styled";
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:true
        }
    }
    render(){
        let {isShow} =this.state;
        return (
            <LoginContainer>
                {/* 登录 */}
                <div className="login" style={{display:isShow?'block':'none'}}>
                    <div className="header">
                        <div className="logo">
                            <img src="http://3g.baobeigezi.com/imgs/login/logo.png" alt=""/>
                        </div>
                    </div>
                    <form>
                        <label>
                            <i>icon</i>
                            <input type="text" placeholder="请输入手机号"/>
                        </label>
                        <label>
                            <i>icon</i>
                            <input type="password" placeholder="请输入密码"/>
                        </label>
                        <label>
                            <i>icon</i>
                            <input type="text" placeholder="请输入验证码"/>
                        </label>
                        <button>登录</button>
                    </form>
                    <div className="register">
                        <span>skip</span>
                        <span onClick={this.handleRegister.bind(this)}>register</span>
                    </div>
                </div>
                {/* 注册 */}
                <div className="login" style={{display:isShow?'none':'block'}}>
                    <div className="header">
                        <div className="logo">
                            <img src="http://3g.baobeigezi.com/imgs/login/logo.png" alt=""/>
                        </div>
                    </div>
                    <form>
                        <label>
                            <i>icon</i>
                            <input type="text" placeholder="请输入手机号"/>
                        </label>
                        <label>
                            <i>icon</i>
                            <input type="password" placeholder="请输入密码"/>
                        </label>
                        {/* <label>
                            <i>icon</i>
                            <input type="text" placeholder="请输入验证码"/>
                        </label> */}
                        <button>注册</button>
                    </form>
                    <div className="register">
                        <span>skip</span>
                        <span onClick={this.handleLogin.bind(this)}>login</span>
                    </div>
                </div>
            </LoginContainer>
        )
    }
    handleRegister(){
        this.setState({
            isShow:false
        })
    }
    handleLogin(){
        this.setState({
            isShow:true
        })
    }
}
export default Login;
