
import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { categoryTypes } from '../Ducks/CategoriesDucks';
import { productsTypes } from '../Ducks/ProductDucks';
import getProducts from './claroProductSaga';
import getCategories from './claroCategorySaga';


export default function* sagas() {
    return yield all([
        takeLatest(categoryTypes.CATEGORY_REQUEST, getCategories),
        takeLatest(productsTypes.PRODUCTS_REQUEST, getProducts)
    ])
}