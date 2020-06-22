import React,{ Component } from 'react'
import router from './routers/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './components/Layout'
import {connect} from 'react-redux'

const {
  Activity,
  Answer,
  AnswerAddUpdate,
  Banner,
  Channel,
  User,
  Aswer,
  UserDetail,
  ArtcleHome,
  ArtcleAdd,
  Home,
  Bannerchange
} = router

class App extends Component {
  render() {
    const isLogin = this.props.userInf.isLogin
      return (
          isLogin?
            <Layout>
              <Switch>
                  {/* <Route path='/home' component={Home} exact /> */}
                  <Route path='/home' component={Home} exact />
                  <Route path='/home/activity' component={Activity} exact/>
                  <Route path='/home/answer' component={Answer} exact />
                  <Route path='/home/answer/aswer' component={Aswer} exact />
                  <Route path='/home/answer/addupdate' component={AnswerAddUpdate} exact />
                  <Route path='/home/banner' component={Banner} exact />
                  <Route path='/home/banner/change/:id' component={Bannerchange} exact />
                  {/* <Route path='/home/artcle' component={Artcle} exact /> */}
                  <Route path='/home/channel' component={Channel} exact />
                  <Route path='/home/artcle' component={ArtcleHome} exact />
                  <Route path='/home/artcle/add' component={ArtcleAdd} exact />
                  <Route path='/home/user' component={User} exact />
                  <Route path='/home/user/userdetail/:id' component={UserDetail} exact />
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
