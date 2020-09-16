
import { combineReducers } from 'redux';

import categoriesReducer from './CategoriesDucks';
import productsReducer from './ProductDucks'


export default combineReducers({
    categoriesReducer,
    productsReducer
});