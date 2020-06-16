
import lazyLoad from '../utils/lazyLoad'

const Login =lazyLoad(()=>import('../view/Login/index.js'))
const Home =lazyLoad(()=>import('../view/Home'))

export default {
    Login,
    Home
}
