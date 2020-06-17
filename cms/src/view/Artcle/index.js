import React ,{Component}from 'react'
import {Route,Switch} from 'react-router-dom'
import lazyLoad from '../../utils/lazyLoad'


const ArtcleAddUpdate =lazyLoad(()=>import('../Artcle/add'))
const ArtcleHome =lazyLoad(()=>import('../Artcle/home'))

export default class Artcle extends Component {
    render() {
        return (
            <Switch>
                <Route path='/artcle' component={ArtcleHome} exact/>{/*路劲完全匹配} */}
                <Route path='/artcle/addupdate' component={ArtcleAddUpdate} />
            </Switch>
        )
    }
}