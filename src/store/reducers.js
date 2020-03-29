import {createStore} from "redux";

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
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, payload]
            };
        case 'SAVE_SEARCH_RESULT':
            return {
                ...state,
                searchResult: payload
            }
        case  'SHOW_MODAL_DETAIL':
            const {isShow, comic} = payload;
            debugger
            return {
                ...state,
                showModalDetail: {
                    isShow: {...state.showModalDetail.isShow, isShow},
                    comic: {...state.showModalDetail.comic, comic}
                }
            }
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