import {QUIT_CHANGE_LOGIN} from './actionType'

const initState = {

}

export default (state=initState,action)=>{
    switch (action.type){
        case QUIT_CHANGE_LOGIN :
            return {
                ...state,
                isLogin:false,
                token:'',
            }
        default : return state
    }
}