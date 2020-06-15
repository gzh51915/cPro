const initState = {
    isLogin : false
}

export default (state = initState , action)=>{
    switch (action.type){
        case "CHANGE_LOGINSTATE":
            return {
                ...state,
                isLogin:true
            }
        default : return state  
    }
}