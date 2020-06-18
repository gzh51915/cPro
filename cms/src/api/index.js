import axios from './request';

export const userLogin = (data)=>{
    return axios.post('/admin/login',{
        ...data
    })
}

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