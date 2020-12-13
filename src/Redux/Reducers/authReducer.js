export const authorizationReducer = (state = {redirect: false}, action) =>{
    switch(action.type){
        case "LOG_IN":
            return {
                ...state,
                redirect: false
            }
        case "LOG_OUT":
            return{
                ...state,
                redirect: true
            }
        default: 
            return state;        
    }
}