import React from "react";

import { LoginContainer } from "./styled";
import { withRouter } from "react-router-dom";
import { registerApi, loginApi } from "api/users";
import { Toast, WhiteSpace, } from 'antd-mobile';
@withRouter


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: true,
            usernameRe: "",
            passwordRe: "",
            usernameLo: "",
            passwordLo: "",

        }
    }
    componentDidMount() {
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    render() {
        let { isShow, usernameRe, passwordRe, usernameLo, passwordLo } = this.state;
        return (
            <LoginContainer>
                {/* 登录 */}
                <div className="login" style={{ display: isShow ? 'block' : 'none' }}>
                    <div className="header">
                        <div className="logo">
                            <img src="http://3g.baobeigezi.com/imgs/login/logo.png" alt="" />
                        </div>
                    </div>
                    <form>
                        <label>
                            <i className="iconfont">&#xe629;</i>
                            <input type="text" placeholder="请输入手机号" value={usernameLo} onChange={this.loginname.bind(this)} />
                        </label>
                        <label>
                            <i className="iconfont">&#xe665;</i>
                            <input type="password" placeholder="请输入密码" value={passwordLo} onChange={this.loginpassword.bind(this)} />
                        </label>
                        {/* <label>
                            <i className="iconfont">&#xe624;</i>
                            <input type="text" placeholder="请输入验证码"/>
                        </label> */}
                        <button onClick={this.goLogin.bind(this)}>登录</button>
                    </form>
                    <div className="register">
                        <span onClick={this.handleBack.bind(this)}>skip</span>
                        <span onClick={this.handleRegister.bind(this)}>register</span>
                    </div>
                </div>
                {/* 注册 */}
                <div className="login" style={{ display: isShow ? 'none' : 'block' }}>
                    <div className="header">
                        <div className="logo">
                            <img src="http://3g.baobeigezi.com/imgs/login/logo.png" alt="" />
                        </div>
                    </div>
                    <form>
                        <label>
                            <i className="iconfont">&#xe629;</i>
                            <input type="text" placeholder="请输入手机号" value={usernameRe} onChange={this.registername.bind(this)} />
                        </label>
                        <label>
                            <i className="iconfont">&#xe665;</i>
                            <input type="password" placeholder="请输入密码" value={passwordRe} onChange={this.registerpassword.bind(this)} />
                        </label>
                        <WhiteSpace />
                        <button onClick={this.goRegister.bind(this)}>注册</button>
                    </form>
                    <div className="register">
                        <span onClick={this.handleBack.bind(this)}>skip</span>
                        <span onClick={this.handleLogin.bind(this)}>login</span>
                    </div>
                </div>
            </LoginContainer>
        )
    }
    handleRegister() {
        this.setState({
            isShow: false
        })
    }
    handleLogin() {
        this.setState({
            isShow: true
        })
    }
    // 注册
    registername(e) {
        let val = e.target.value;
        this.setState({
            usernameRe: val
        })
    }
    registerpassword(e) {
        let val = e.target.value;
        this.setState({
            passwordRe: val
        })
    }
    successToast(info) {
        Toast.success(info, 1);
    }
    async goRegister() {
        let data = await registerApi(this.state.usernameRe, this.state.passwordRe);
        // console.log(data);
        if (data.data.status == 1) {
            this.successToast(data.data.info);
        } else if (data.data.status == 2) {
            this.successToast(data.data.info);
        } else {
            this.successToast(data.data.info);
        }
        this.setState({
            usernameRe: "",
            passwordRe: ""
        })
    }
    // 登录
    loginname(e) {
        let val = e.target.value;
        this.setState({
            usernameLo: val
        })
    }
    loginpassword(e) {
        let val = e.target.value;
        this.setState({
            passwordLo: val
        })
    }
    async goLogin() {
        let data = await loginApi(this.state.usernameLo, this.state.passwordLo);
        if (data.data.code == 1) {
            this.props.history.push("/mine/" + this.state.usernameLo);
        } else if (data.data.code == 2) {
            this.successToast(data.data.info);
        } else {
            this.successToast(data.data.info);
        }
        this.setState({
            usernameLo: "",
            passwordLo: ""
        })
    }
    handleBack() {
        this.props.history.push("/home")
    }
}
export default Login;
