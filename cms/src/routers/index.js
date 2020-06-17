
import lazyLoad from '../utils/lazyLoad'

const Login =lazyLoad(()=>import('../view/Login/index.js'))
const Home =lazyLoad(()=>import('../view/Home'))
const Artcle =lazyLoad(()=>import('../view/Artcle/home'))

export default {
    Login,
    Home
}
