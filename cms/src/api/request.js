import axios from 'axios'

const service = axios.create({
    baseURL:`http://${process.env.NODE_ENV ==='development'?'10.3.135.6':''}:5000/v1`
})

service.interceptors.request.use(config=>{
    
})
