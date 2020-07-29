import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

//types
export enum ProcuctsTypes {
    PRODUCTS_REQUEST = '@product/PRODUCT_REQUEST',
    PRODUCTS_SUCCESS = '@product/PRODUCT_SUCCESS',
    PRODUCTS_FAILURE = '@product/PRODUCT_FAILURE',
}
export interface Items {
    listProducts: [],
}

export interface productsState {
    readonly payload: any,
    readonly loading: boolean,
    readonly error: boolean,
}

//actions   
export const productsRequest = () => action(ProcuctsTypes.PRODUCTS_REQUEST);
export const productsSuccess = (payload: Items) => action(ProcuctsTypes.PRODUCTS_SUCCESS, payload);
export const productsFailure = () => action(ProcuctsTypes.PRODUCTS_FAILURE);


//Reducers
const INITIAL_STATE: productsState = {
    loading: false,
    payload: {
        id: 0,
        name: '',
        subcategories: [],
        url: ''
    },
    error: false

}

const productsReducer: Reducer<productsState> = (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch (action.type) {
        case ProcuctsTypes.PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ProcuctsTypes.PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                payload
            };
        case ProcuctsTypes.PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
                payload: []
            };
        default: return state;
    }
}

export default productsReducer;