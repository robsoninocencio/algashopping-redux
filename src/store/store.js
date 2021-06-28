import { createStore, combineReducers } from 'redux';
import calculatorReducer from './Calculator/Calculator.reducer'
import productReducer from './Products/Products.reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productReducer
})

const store = createStore(rootReducer);

export default store
