import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

//types
export enum productsTypes {
    PRODUCTS_REQUEST = '@products/PRODUCTS_REQUEST',
    PRODUCTS_SUCCESS = '@products/PRODUCTS_SUCCESS',
    PRODUCTS_FAILURE = '@products/PRODUCTS_FAILURE',
    // PRODUCTS_CONTROLE_LIST = '@products/PRODUCTS_CONTROLE_LIST',
}
export interface Products {
    productsList: [],
}

export interface productsState {
    readonly payload: [],
    readonly loading: boolean,
    readonly error: boolean,
    // readonly controleList: [],
}

//actions   
export const productsRequest = () => action(productsTypes.PRODUCTS_REQUEST);
export const productsSuccess = (payload: Products[]) => action(productsTypes.PRODUCTS_SUCCESS, payload);
export const productsFailure = () => action(productsTypes.PRODUCTS_FAILURE);
// export const controleListProducts = (controleList: []) => action(productsTypes.PRODUCTS_CONTROLE_LIST, controleList);


//Reducers
const INITIAL_STATE: productsState = {
    loading: false,
    payload: [],
    error: false,
    // controleList: []
}

const productsReducer: Reducer<productsState> = (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch (action.type) {
        case productsTypes.PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case productsTypes.PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                payload
            };
        case productsTypes.PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
                products: []
            };
        // case productsTypes.PRODUCTS_CONTROLE_LIST:
        //     return {
        //         ...state,
        //         error: true,
        //         loading: false,
        //         payload
        //     };
        default: return state;
    }
}

export default productsReducer;