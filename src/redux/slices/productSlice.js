// productReducer.js => productSlice.js
// import { productAction } from '../actions/productAction';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    product: null,
    choiceProducts: [],
    isLoading: false,
    error: null,
    totalPrice: 0,
};

// function productReducer(state = initialState, action) {
//     let { type, payload } = action;
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS": {
//             return {
//                 ...state,
//                 productList: payload.data,
//             };
//         }
//         case "GET_PRODUCT_DETAIL": {
//             return {
//                 ...state,
//                 product: payload.data,
//             };
//         }
//         case "GET_PRODUCT_CHOICE": {
//             return {
//                 ...state,
//                 choiceProducts: [...state.choiceProducts, payload.item],
//             };
//         }
//         case "DELETE_PRODUCT_CHOICE": {
//             return {
//                 ...state,
//                 choiceProducts: state.choiceProducts.filter(item => item.id !== payload.id),
//             };
//         }
//         default: {
//             return { ...state };
//         }
//     }
// }

// export default productReducer;

export const fetchProducts = createAsyncThunk(
    'product/fetchAll', 
    async (searchQuery, thunkApi) => {
        try {
            const url = `https://my-json-server.typicode.com/YunSeoyong/noo-hnm-practice/products/?q=${searchQuery}`;
            const response = await fetch(url);
            return await response.json();
        } catch(error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
);

export const fetchProductDetail = createAsyncThunk(
    'product/fetchDetail',
    async (id, thunkApi) => {
        try {
            const url = `https://my-json-server.typicode.com/YunSeoyong/noo-hnm-practice/products/${id}`;
            const response = await fetch(url);
            return await response.json();
        } catch(error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // getAllProducts(state, action) {
        //     state.productList= action.payload.data;
        // },
        // getProductDetail(state, action) {
        //     state.product= action.payload.data;
        // },
        addChoiceProduct(state, action) {
            state.choiceProducts.push(action.payload.item);
            state.totalPrice += action.payload.item.price;
        },
        deleteChoiceProduct(state, action) {
            // 이부분은 기존에 action에서 동작하던걸 어떻게 변환시켜야할지 몰라서 고민이 됨...일단 때려넣음...
            const targetId = action.payload.id;
            const deletedProduct = state.choiceProducts.find(
                (item) => item.id === targetId
            );
            if (deletedProduct) {
                state.totalPrice -= deletedProduct.price;
                state.choiceProducts = state.choiceProducts.filter(
                    (item) => item.id !== targetId
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            });
        builder
            .addCase(fetchProductDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            });
    }
});
export const productActions = productSlice.actions;
export default productSlice.reducer;