import React , {useState } from 'react'
import './index.css'
import { Button} from 'antd';
import {userReg} from '../../api/index'

export default function index(props) {

    const [username,setUsername]= useState('')
    const [password1,setpassword1] = useState('')
    const [password2,setpassword2] = useState('')

    const [stateUsername,setStateUsername] = useState(false)
    const [statePassword1,setStatePassword1] = useState(false)
    const [statePassword2,setStatePassword2] = useState(false)
    const [statePassword,setStatePassword] = useState(false)
    const [user,setUser] = useState(false)



    const regUser =()=>{
        
        if(username){
            setStateUsername(false)
        }else{
            setStateUsername(true)
        }
        if(password1){
            setStatePassword1(false)
        }else{
            setStatePassword1(true)
        }
        if(password2){
            setStatePassword2(false)
        }else{
            setStatePassword2(true)
            return
        }

        if(password1 !== password2){
            setStatePassword(true)
        }else{
            setStatePassword(false)

            let data = {
                username,
                password:password1,
            }
    
            userReg(data).then(res=>{
                console.log(res);
                if(res.status===0){
                    props.history.replace('/login')
                }else{
                    setUser(true)
                }
            })
            
        }
    }

    return (
        <div className="login_bigbox">
            <div className="login">
                <div className="login_img">
                    <img src={require("../../assets/logo.png")} alt="" />
                    <div className="login_img_zhe"></div>
                </div>
                <div className="login_box">
                    <h2>用户注册</h2>
                    <div className="login_input">
                        <input type="text" value={username} placeholder="手机号或邮箱" onChange={(v) => {setUsername(v.target.value)}}/>
                        {
                            stateUsername?<span className="input_toast">请输入用户名</span>:<span className="input_toast"></span>
                        }
                        <input type="password" value={password1} placeholder="密码"onChange={(v) => {setpassword1(v.target.value)}}/>
                        {
                            statePassword1?<span className="input_toast">请输入密码</span>:<span className="input_toast"></span>
                        }
                        <input type="password" value={password2} placeholder="确认密码"onChange={(v) => {setpassword2(v.target.value)}}/>
                        {
                            statePassword2?<span className="input_toast">请输入确认密码</span>:<span className="input_toast"></span>
                        }
                        {
                            statePassword?<span className="input_toast">两次密码不一致</span>:<span className="input_toast"></span>
                        }
                        {
                            user?<span className="input_toast">账号已被注册</span>:<span className="input_toast"></span>
                        }
                        <Button type="primary" className="login_button" onClick={regUser}>注册</Button>

                    </div>
                    <div className="login_test">继续即代表同意《<span>服务条款</span>》和《<span>隐私政策</span>》</div>
                </div>
            </div>
        </div>
    )
}

