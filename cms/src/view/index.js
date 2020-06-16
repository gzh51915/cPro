import Loadable from 'react-loadable'
import Loading from '../components/Loading'

const Login = Loadable({
    loader:()=> import('./Login'),
    loading:Loading
})
const Home = Loadable({
    loader:()=> import('./Home'),
    loading:Loading
})

export {
    Login,
    Home
}