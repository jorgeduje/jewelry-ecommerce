
import { Types } from "../types/types";


export const getProducts = ( data )=>{
    return{
        type: Types.getData,
        payload: data
    }
}

export const getSelectedProduct = (id)=>{

    return{
        type: Types.selected,
        payload: id
    }
}

export const addCart = ( product )=>{
    return{
        type: Types.add,
        payload: product
    }
}

export const removeCart = ( product )=>{
    return{
        type: Types.remove,
        payload: product
    }
}

export const addOneAmount = ( id )=>{
    return{
        type: Types.addOne,
        payload: id
    }
}

export const subOneAmount = ( id )=>{
    return{
        type: Types.subOne,
        payload: id
    }
}

export const deleteCart = ()=>{
    return{
        type: Types.clearCart
    }
}



