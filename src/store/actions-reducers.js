const addToCartAction = data => {
    return {
        type: 'ADD_TO_CART',
        payload: data
    }
}

const showModalDetailAction = data => {
    return {
        type: 'SHOW_MODAL_DETAIL',
        payload: data
    }
};

const saveSearchResult = data => {
    return {
        type: 'SAVE_SEARCH_RESULT',
        payload: data
    }
}
export { addToCartAction, showModalDetailAction, saveSearchResult};