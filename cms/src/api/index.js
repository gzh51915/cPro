import axios from './request';
import oldaxios from 'axios'

export const userLogin = (data)=>{
    return axios.post('/admin/login',{
        ...data
    })
}

export const reqArtcle = (data)=>{
    return axios.get('/artcle',{
        ...data
    })
}

// mock数据
export const getUserData = ()=>{
    return oldaxios.post('http://rap2.taobao.org:38080/app/mock/258250/api/user',{
        headers:{
            "content-type":"application/json",
        }
    })
}