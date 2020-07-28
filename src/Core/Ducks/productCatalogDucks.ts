import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

//types
export enum ProcuctsTypes {
    PRODUCTS_REQUEST = '@product/PRODUCT_REQUEST',
    PRODUCTS_SUCCESS = '@product/PRODUCT_SUCCESS',
    PRODUCTS_FAILURE = '@product/PRODUCT_FAILURE',
}

export interface productsState {
    readonly data: [],
    readonly loading: boolean,
    readonly error: boolean,
}

//actions   
export const productsRequest = () => action(ProcuctsTypes.PRODUCTS_REQUEST);
export const productsSuccess = (data) => action(ProcuctsTypes.PRODUCTS_SUCCESS);
export const productsFailure = () => action(ProcuctsTypes.PRODUCTS_FAILURE);


//Reducers
const INITIAL_STATE: productsState = {
    loading: false,
    data: [],
    error: false

}

const productsReducer: Reducer<productsState> = (state = INITIAL_STATE, action) => {

    const { data } = action;
    console.log('action', action)
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
                data
            };
        case ProcuctsTypes.PRODUCTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
                data: []
            };
        default: return state;
    }
}

export default productsReducer;