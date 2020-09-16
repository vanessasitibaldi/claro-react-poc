import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from './Ducks';
import sagas from './Sagas/rootSagas';
import { categoriesState } from './Ducks/CategoriesDucks';
import { productsState } from './Ducks/ProductDucks'

export interface ApplicationState {
    categoriesReducer: categoriesState
    productsReducer: productsState
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;