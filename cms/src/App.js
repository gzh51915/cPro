import React,{ Component } from 'react'
import router from './routers/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './components/Layout'
import {connect} from 'react-redux'

const {Home} = router

class App extends Component {
  render() {
    const isLogin = this.props.userInf.isLogin
      return (
          isLogin?
            <Layout>
              <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/' component={Home} />
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
