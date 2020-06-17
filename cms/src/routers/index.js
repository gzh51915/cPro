import React from 'react'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import lazyLoad from '../utils/lazyLoad'

const Login =lazyLoad(()=>import('../view/Login/index.js'))
const Home =lazyLoad(()=>import('../view/Home'))
const Artcle =lazyLoad(()=>import('../view/Artcle/home'))

const RouterView =  <BrowserRouter>
                        <Switch>
                            <Route path='/login' component={Login} />
                            <Route path='/home' component={Home} />
                            <Route path='/artcle' component={Artcle} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </BrowserRouter>
export default RouterView