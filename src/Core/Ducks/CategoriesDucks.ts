import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

//types
export enum categoryTypes {
    CATEGORY_REQUEST = '@category/CATEGORY_REQUEST',
    CATEGORY_SUCCESS = '@category/CATEGORY_SUCCESS',
    CATEGORY_FAILURE = '@category/CATEGORY_FAILURE',
}
export interface Items {
    listCategory: [],
}

export interface categoriesState {
    readonly payload: any,
    readonly error: boolean,
}

//actions   
export const categoriesRequest = () => action(categoryTypes.CATEGORY_REQUEST);
export const categoriesSuccess = (payload: Items[]) => action(categoryTypes.CATEGORY_SUCCESS, payload);
export const categoriesFailure = () => action(categoryTypes.CATEGORY_FAILURE);


//Reducers
const INITIAL_STATE: categoriesState = {
    payload: [],
    error: false
}

const categoriesReducer: Reducer<categoriesState> = (state = INITIAL_STATE, action) => {

    const { payload } = action;

    switch (action.type) {
        case categoryTypes.CATEGORY_REQUEST:
            return {
                ...state,
            };
        case categoryTypes.CATEGORY_SUCCESS:
            return {
                ...state,
                error: false,
                payload
            };
        case categoryTypes.CATEGORY_FAILURE:
            return {
                ...state,
                error: true,
                payload: []
            };
        default: return state;
    }
}

export default categoriesReducer;