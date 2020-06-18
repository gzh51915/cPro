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
export const reqArtcle = ()=>{
    return axios.get('/artcle')
}

export const reqUserList = ()=>{
    return axios.get('/users')
}

export const reqIcons = ()=>{
    return axios.get('/icon')
}

export const reqArtcleAdd = (data)=>{
    return axios.post('/artcle/add',data)
}

export const reqArtcleDelete = (id)=>{
    return axios.post('/artcle/delete',{id})
}