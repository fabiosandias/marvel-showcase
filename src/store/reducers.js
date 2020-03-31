import {createStore} from "redux";
import {ACTIONS as __} from "../constants/constants";

const INITIAL_STATE = {
    cart: [],
    searchResult: [],
    showModalDetail: {
        isShow: false,
        comic: {}
    }
};

function reducers(state, {type, payload}) {
    switch (type) {
        case __.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case __.SAVE_SEARCH_RESULT:
            return {
                ...state,
                searchResult: payload
            };
        case __.DELETE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((comic, index) => index != payload)
            };
        default:
            return state;
    }
}

const store = createStore(
    reducers,
    INITIAL_STATE,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;