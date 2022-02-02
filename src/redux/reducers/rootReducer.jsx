import { Types } from "../types/types";

const initialState = {

    initialData: [],
    productSelect: null,
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
                productSelect: action.payload
            }

        case Types.add:
            let product = state.cart.find(product => product.id === action.payload)
            
            if(product){

                return{
                    ...state,
                    cart: state.cart.map(element => 
                        element.id === action.payload ? {...element, amount: element.amount + 1 }
                        : element)
                }

            }else{

                const newProduct = state.initialData.find( product => product.id === action.payload )
                newProduct.amount = 1

                return{
                    ...state,
                    cart: [...state.cart, newProduct]
                }
            }

        case Types.addOne:
            return{
                ...state,
                cart: state.cart.map(element => 
                    element.id === action.payload ? {...element, amount: element.amount + 1 }
                    : element)
            }

            case Types.subOne:
            return{
                ...state,
                cart: state.cart.map(element => 
                    element.id === action.payload  && element.amount > 0? {...element, amount: element.amount - 1 }
                    : element)
            }


        case Types.remove:
            return{
                ...state,
                cart:  state.cart.filter( item => item.id !== action.payload ) 
            }

        case Types.clearCart:
            return{
                ...state,
                cart: []
            }
        
        
    
        default:
            return state;
    }
}