import {CHANGE_LOGIN} from './actionType'

const initState = {
    isLogin:false,
    token:'',
}

export default (state = initState , action)=>{
    switch(action.type){
        case CHANGE_LOGIN:
            return {
                ...state,
                isLogin:action.data.isLogin,
                token:action.data.token
            }
        default : return state
    }
}