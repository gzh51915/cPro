import axios from './request';


export const getArticle = ()=>{
    return axios.get('/artcle')
}

export const userLogin = (data)=>{
    return axios.post('/user/login',{
        ...data
    })
}

export const userReg = (data)=>{
    return axios.post('/user/reg',{
        ...data
    })
}