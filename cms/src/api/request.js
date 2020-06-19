import axios from 'axios'

const service = axios.create({
    baseURL:`http://${process.env.NODE_ENV ==='development'?'10.3.135.6':''}:5000/v1`,
    timeout:10000,  //设置超时的时间
    // headers:{
    //     'Accept': 'application/json',
    //     "content-type":"application/json",
    // }
})
// service.defaults.headers['token'] =`${sessionStorage.getItem('CPRO_TOKEN')}`

service.interceptors.request.use(config=>{
    config.headers.token=`${sessionStorage.getItem('CPRO_TOKEN')}`
    return config;
})

service.interceptors.response.use(res=>{
    
    return res.data
})

export default service;