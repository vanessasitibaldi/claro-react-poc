import { Reducer } from 'redux';
import { action } from 'typesafe-actions';
/* eslint-disable */
//TYPES

//em vez de usar const pode usar enum para declarar os types 
export enum ItemsTypes {
    ITEMS_REQUEST = '@items/ITEMS_REQUEST',
    ITEMS_SUCCESS = '@items/ITEMS_SUCCESS',
    ITEMS_FAILURE = '@items/ITEMS_FAILURE',
}

export interface Items {
    id: number,
    title: string,
    image_url: string,
}
//readonly como o estado é imutavel ele garante sempre criar um novo estado
export interface ItemsState {
    readonly data: Items[],
    readonly loading: boolean,
    readonly error: boolean,
}
//Actions
export const itemsRequest = () => action(ItemsTypes.ITEMS_REQUEST);
export const itemsSucces = (data: Items[]) => action(ItemsTypes.ITEMS_SUCCESS, data);
export const itemsFailure = () => action(ItemsTypes.ITEMS_FAILURE);

//REDUCER
const INITIAL_STATE: ItemsState = {
    data: [
        { id: 1, title: 'Vanessa', image_url: 'teste' },
        { id: 2, title: 'lala', image_url: 'rrr' }
    ],
    loading: false,
    error: false,
}

const itemsReducer: Reducer<ItemsState> = (state = INITIAL_STATE, action) => {

    const { data } = action;

    switch (action.type) {
        case ItemsTypes.ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ItemsTypes.ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data
            };
        case ItemsTypes.ITEMS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
                data: []
            };
        default: return state;
    }
}

export default itemsReducer;