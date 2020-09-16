import { call, put } from 'redux-saga/effects';
import api from '../API'
import { categoriesSuccess, categoriesFailure } from '../Ducks/CategoriesDucks'

export default function* getCategories() {

    try {
        const response = yield call(api.get, '/clarowebservices/v2/claro/catalogs/claroProductCatalog');
        const listCategories = response.data?.catalogVersions[1]?.categories[5]?.subcategories[3]?.subcategories[4]?.name;
        yield put(categoriesSuccess(listCategories));

    } catch (err) {
        console.log('err', err)
        yield put(categoriesFailure());
    }
}



