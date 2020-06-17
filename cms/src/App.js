import React,{ Component } from 'react'
import router from './routers/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './components/Layout'
import {connect} from 'react-redux'

const {
  Activity,
  Answer,
  Banner,
  Channel,
  User,
  UserDetails,
  ArtcleHome,
  ArtcleAdd,
} = router

class App extends Component {
  render() {
    const isLogin = this.props.userInf.isLogin
      return (
          isLogin?
            <Layout>
              <Switch>
                  {/* <Route path='/home' component={Home} exact /> */}
                  <Route path='/home/activity' component={Activity} exact/>
                  <Route path='/home/answer' component={Answer} exact />
                  <Route path='/home/banner' component={Banner} exact />
                  <Route path='/home/channel' component={Channel} exact />
                  <Route path='/home/artcle/home' component={ArtcleHome} exact />
                  <Route path='/home/artcle/add' component={ArtcleAdd} exact />
                  <Route path='/home' component={User} exact />
                  <Route path='/home/userdetails' component={UserDetails} exact />
                  <Redirect to="/404" />
                  {/* <Redirect to='/home/user' from="/home" exact /> */}
                  {/* <Route path='/' component={Home} /> */}
              </Switch>
            </Layout>
          :<Redirect to='/login'/>
      )
  }
}

const mapState =(state)=>{
  return {userInf:state.loginReducer}
}

export default connect(mapState)(App);
