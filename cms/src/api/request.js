import axios from 'axios'

const service = axios.create({
    baseURL:`http://${process.env.NODE_ENV ==='development'?'10.3.135.6':''}:5000/v1`,
    timeout:10000,  //设置超时的时间
    headers:{
        "content-type":"application/json",
    }
})

service.interceptors.request.use(config=>{
    return config;
})

service.interceptors.response.use(res=>{
    return res.data
})

export default service;