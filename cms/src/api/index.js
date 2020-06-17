import axios from './request';

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