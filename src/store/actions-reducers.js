import { ACTIONS as __ } from "../constants/constants";

const addToCartAction = data => ({
    type: __.ADD_TO_CART,
    payload: data
});

const saveSearchResult = data => ({
    type: __.SAVE_SEARCH_RESULT,
    payload: data
});

const deleteToCartAction = data => ({
    type: __.DELETE_TO_CART,
    payload: data
});

const addQuantityAction = (id, value) => ({
    type: __.ADD_QUANTITY,
    payload: {
        value: parseInt(value),
        id: id
    }
})

export {addToCartAction, saveSearchResult, deleteToCartAction, addQuantityAction};