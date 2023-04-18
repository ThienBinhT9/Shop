import { combineReducers } from 'redux'

import listProduct from './cart'

const rootReducer = combineReducers({
    cart:listProduct,
})

export default rootReducer 