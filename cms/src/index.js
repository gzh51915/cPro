import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store/srore'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import router from './routers/index'

const {Login,NotFound} = router


ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={App}/>
        <Route path="/404" component={NotFound}/>

        <Redirect from="/" to="/login" exact/>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter> 
  </Provider>
,
  document.getElementById('root')
);

