import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import { rootReducer } from "../reducers/rootReducer"

const reducers = combineReducers({

    rootReducer: rootReducer
    
})


export const store = createStore(

    reducers,
    composeWithDevTools()
    
)