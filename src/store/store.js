import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calculatorReducer from './Calculator/Calculator.reducer';
import productReducer from './Products/Products.reducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productReducer
});

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage
    },
    rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
