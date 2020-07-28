import { createStore, applyMiddleware, Store } from 'redux';

import createSagaMiddleware from 'redux-saga';
import Reducers from './Ducks';
import sagas from './Sagas/claroProductCatalog'
import { productsState } from './Ducks/productCatalogDucks';

export interface ApplicationState {
    productsReducer: productsState
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;