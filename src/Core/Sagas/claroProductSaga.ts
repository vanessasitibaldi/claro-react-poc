import { call, put, take } from 'redux-saga/effects';
import api from '../API'
import { productsSuccess, productsFailure, productsTypes } from '../Ducks/ProductDucks'


export default function* getProducts() {
    // const category = yield take(productsTypes.PRODUCTS_CATEGORY);
    // console.log('category SAGA', category.payload)
    try {
        const response = yield call(api.get, '/clarowebservices/v2/claro/products/search');

        // const response = yield call(api.get, `/clarowebservices/v2/claro/products/search?query=::category:${category.payload}`);

        const ProductList = response.data?.products;
        console.log('ProductList', ProductList)

        yield put(productsSuccess(ProductList));

    } catch (err) {
        console.log('err', err)
        yield put(productsFailure());
    }
}