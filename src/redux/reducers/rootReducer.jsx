import { Types } from "../types/types";

const initialState = {

    initialData: [],
    productSelect:{},
    cart: []

}

export const rootReducer = (state = initialState, action)=>{

    switch (action.type) {

        case Types.getData:
            return{
                ...state,
                initialData: action.payload
            }

        case Types.selected:
            return{
                ...state,
                productSelect: state.initialData.filter( product => product.id === action.payload)
            }

        case Types.add:
            let doesExist = state.cart.find(product => product[0].id === action.payload)
            
            return doesExist ? {

                ...state

            }: {
                ...state,
                cart: [...state.cart, state.initialData.filter( product => product.id === action.payload)]
            }
        
    
        default:
            return state;
    }
}