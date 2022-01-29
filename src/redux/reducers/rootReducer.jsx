import { Types } from "../types/types";

const initialState = {
    isLogged: false
}

export const rootReducer = (state = initialState, action)=>{

    switch (action.payload) {

        case Types.loggin:
            return{
                ...state,
                isLogged: true
            }
        
        
    
        default:
            return state;
    }
}