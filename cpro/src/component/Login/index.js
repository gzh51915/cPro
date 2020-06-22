import React , {useState } from 'react'
import './index.css'
import { Button } from 'antd';
import {userLogin} from '../../api'

export default function index(props) {

    const [username,setUsername]= useState('')
    const [password,setpassword] = useState('')


    const login = async ()=>{
        console.log("user",username,password);
        let data = {
            username,
            password
        }
        const res =  await userLogin(data)
        if(res.status===0){
            localStorage.setItem('CPRO_TOKEN',res.token)
            console.log(props);
            props.history.replace('/')
        }
    }

    const jumpReg = ()=>{
        props.history.push('/reg')
    }

    return (
        <div className="login_bigbox">
            <div className="login">
                <div className="login_img">
                    <img src={require("../../assets/logo.png")} alt="" />
                    <div className="login_img_zhe"></div>
                </div>
                <div className="login_box">
                    <h2>用户登录</h2>
                    <ul className="login_list">
                        <li>免密码登录</li>
                        <span>|</span>
                        <li className="login_list_active">密码登录</li>
                        <span>|</span>
                        <li>微信登录</li>
                    </ul>
                    <div className="login_input">
                        <input type="text" value={username} placeholder="手机号或邮箱" onChange={(v) => {setUsername(v.target.value)}}/>
                        <input type="password" value={password} placeholder="密码"onChange={(v) => {setpassword(v.target.value)}}/>
                        <div onClick={jumpReg}>注册账号</div>
                        <Button type="primary" className="login_button" onClick={login} style={{color:"#FFF"}}>登录</Button>
                    </div>
                    <div className="login_test">继续即代表同意《<span>服务条款</span>》和《<span>隐私政策</span>》</div>
                </div>
            </div>
        </div>
    )
}

