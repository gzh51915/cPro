import React from 'react';
import {Login,Home} from './view'
import {Route,Switch,Redirect} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/home' component={Home}></Route>
      <Redirect to='/login' from='/' exact/>
    </Switch>
  );
}

export default App;
