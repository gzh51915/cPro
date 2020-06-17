// import lazyLoad from '../utils/lazyLoad'
import Loading from '../components/Loading'
import Loadable from 'react-loadable';

// const Login =lazyLoad(()=>import('../view/Login'))
// const Home =lazyLoad(()=>import('../view/Home'))

// const Activity =lazyLoad(()=>import('../view/Activity'))
// const Answer =lazyLoad(()=>import('../view/Answer'))
// const Banner =lazyLoad(()=>import('../view/Banner'))
// const Channel =lazyLoad(()=>import('../view/Channel'))
// const User =lazyLoad(()=>import('../view/User'))
// const UserDetails =lazyLoad(()=>import('../view/UserDetails'))

const Login = Loadable({
    loader: () => import('../view/Login'),
    loading: Loading,
}); 
const Home = Loadable({
    loader: () => import('../view/Home'),
    loading: Loading,
}); 
const Activity = Loadable({
    loader: () => import('../view/Activity'),
    loading: Loading,
}); 
const Answer = Loadable({
    loader: () => import('../view/Answer'),
    loading: Loading,
}); 
const Banner = Loadable({
    loader: () => import('../view/Banner'),
    loading: Loading,
}); 
const Channel = Loadable({
    loader: () => import('../view/Channel'),
    loading: Loading,
}); 
const User = Loadable({
    loader: () => import('../view/User'),
    loading: Loading,
}); 
const UserDetails = Loadable({
    loader: () => import('../view/UserDetails'),
    loading: Loading,
}); 
const NotFound = Loadable({
    loader: () => import('../view/NotFound'),
    loading: Loading,
}); 
const ArtcleAdd = Loadable({
    loader: () => import('../view/Artcle/add'),
    loading: Loading,
}); 
const ArtcleHome = Loadable({
    loader: () => import('../view/Artcle/home'),
    loading: Loading,
}); 




export default {
    Login,
    Home,
    Activity,
    Answer,
    Banner,
    Channel,
    User,
    UserDetails,
    NotFound,
    ArtcleHome,
    ArtcleAdd
}
