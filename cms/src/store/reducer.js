import {combineReducers} from 'redux'

import loginReducer from '../view/Login/store/reducer'
import quitReducer from '../components/Layout/store/reducer'

const rootReducer = combineReducers({
    loginReducer,
    quitReducer
})

export default rootReducer