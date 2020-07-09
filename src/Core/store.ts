import { createStore, applyMiddleware, Store } from 'redux';

// import createSagaMiddleware from 'redux-saga';
import Reducers from './Ducks';
// import {sagas} from './Sagas/devsSagas'
import { ItemsState } from './Ducks/itemsDucks';

export interface ApplicationState {
    itemsReducer: ItemsState
}
// const sagaMiddleware = createSagaMiddleware();


const store: Store<ApplicationState> = createStore(Reducers);
//applyMiddleware(sagaMiddleware)
// sagaMiddleware.run(sagas)

export default store;