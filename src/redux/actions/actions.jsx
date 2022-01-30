
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



