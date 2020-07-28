import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../API'
import { productsSuccess, productsFailure, ProcuctsTypes } from '../Ducks/productCatalogDucks'



export function* getProducts() {
    console.log('entrou saga')

    try {
        const response = yield call(api.get, '/clarowebservices/v2/claro/catalogs/claroProductCatalog')
        console.log('response saga', response)
        yield put(productsSuccess(response));

    } catch (err) {
        console.log('err', err)
        yield put(productsFailure());
    }
}


export default function* sagas() {
    return yield all([
        takeLatest(ProcuctsTypes.PRODUCTS_REQUEST, getProducts)
    ])
}
