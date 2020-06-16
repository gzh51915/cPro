import {combineReducers} from 'redux'

import loginReducer from '../view/Login/store/reducer'

const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer