import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/srore'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import router from './routers/index'

const {Login} = router


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={App}/>
        <Redirect from="/" to="/login" exact/>
      </Switch>
    </BrowserRouter> 
  </Provider>
,
  document.getElementById('root')
);

