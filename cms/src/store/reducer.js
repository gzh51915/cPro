import {combineReducers} from 'redux'

import loginReducer from '../view/Login/store/reducer'
import quitReducer from '../components/Layout/store/reducer'
import userInfo from '../view/User/store/reducer'

const rootReducer = combineReducers({
    loginReducer,
    quitReducer,
    userInfo
})

export default rootReducer