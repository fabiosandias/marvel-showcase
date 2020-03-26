import { createStore } from "redux";

const INITIAL_STATE = {
    cart: []
};

function reducers(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload]
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