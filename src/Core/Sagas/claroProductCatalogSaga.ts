import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../API'
import { productsSuccess, productsFailure, ProcuctsTypes } from '../Ducks/productCatalogDucks'



export function* getProducts() {

    try {
        const response = yield call(api.get, '/clarowebservices/v2/claro/catalogs/claroProductCatalog');

        const listProduct = response.data.catalogVersions[1].categories[5].subcategories[3].subcategories || [];

        if (listProduct) {
            yield put(productsSuccess(listProduct));
        }

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
