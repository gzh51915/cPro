import {ADD_USER_INFORMATIONS} from './action'

const initState = {
    userInfo : []
}

export default (state = initState , action)=>{
    switch(action.type){
        case ADD_USER_INFORMATIONS:
            return({
                ...state,
                userInfo:action.data
            })
        default : return state
    }
}