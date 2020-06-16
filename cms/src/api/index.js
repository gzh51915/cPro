import axios from './request';

export const userLogin = (data)=>{
    return axios.post('/admin/login',{
        ...data
    })
}