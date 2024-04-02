let initialState = {
    productList: [],
    product: {},
    choiceProducts: [],
};

function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS": {
            return {
                ...state,
                productList: payload.data,
            };
        }
        case "GET_PRODUCT_DETAIL": {
            return {
                ...state,
                product: payload.data,
            };
        }
        case "GET_PRODUCT_CHOICE": {
            return {
                ...state,
                choiceProducts: [...state.choiceProducts, payload.item],
            };
        }
        case "DELETE_PRODUCT_CHOICE": {
            return {
                ...state,
                choiceProducts: state.choiceProducts.filter(item => item.id !== payload.id),
            };
        }
        default: {
            return { ...state };
        }
    }
}

export default productReducer;
