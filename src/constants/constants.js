const API = {
    URL: 'https://gateway.marvel.com:443/v1/public/',
    METHOD: {
        CHARACTER: 'characters',
        COMICS: 'comics',
    },
    PRIVATE_KEY: '942eb4f49bece0af20660bdb54c5e6b7063ae7bb',
    PUBLIC_KEY: '88a0ddc419cd8f07b30aba7945afbad6',
}

const ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_TO_CART: 'DELETE_TO_CART',
    SAVE_SEARCH_RESULT: 'SAVE_SEARCH_RESULT',
    ADD_QUANTITY: 'ADD_QUANTITY'
}

const TOAST_CONFIG = {
    SUCCESS: {
        TYPE: 'success',
        MESSAGE: 'Sua revista foi adicionado ao carrinho!'
    },
    WARNING: {
        TYPE: 'warning',
        MESSAGE: 'Essa revista já foi adicionada ao carrinho!'
    },
    DELETE: {
        TYPE: 'success',
        MESSAGE: 'A revista foi removida com sucesso!'
    }
}
export { API, ACTIONS, TOAST_CONFIG };