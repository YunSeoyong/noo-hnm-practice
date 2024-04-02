function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/YunSeoyong/noo-hnm-practice/products/?q=${searchQuery}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("데이터를 불러오지 못하고 있습니다.");
            }
            const data = await response.json();
            dispatch({
                type: "GET_PRODUCT_SUCCESS",
                payload: { data },
            });
        } catch (error) {
            console.log("Fetch Data Error: ", error);
        }
    };
}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        const url = `https://my-json-server.typicode.com/YunSeoyong/noo-hnm-practice/products/${id}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("데이터를 불러오지 못하고 있습니다.");
            }
            const data = await response.json();
            dispatch({
                type: "GET_PRODUCT_DETAIL",
                payload: { data },
            })
        } catch (error) {
            console.log("Fetch Data Error: ", error);
        }
    };
};

function addChoiceProduct(item) {
    return (dispatch, getState) => {
        dispatch({
            type: "GET_PRODUCT_CHOICE",
            payload: { item }
        })
    }
};

function deleteChoiceProduct(targetId, totalPrice, setTotalPrice) {
    return (dispatch, getState) => {
        const { choiceProducts } = getState().product;
        const deletedProduct = choiceProducts.find(item => item.id === targetId);
        if (deletedProduct) {
            const newTotalPrice = totalPrice - deletedProduct.price;
            setTotalPrice(newTotalPrice);
            const newArrProducts = choiceProducts.filter(item => item.id !== targetId);
            dispatch({
                type: "DELETE_PRODUCT_CHOICE",
                payload: {
                    id: targetId
                }
            });
        };
    };
};

export const productAction = { getProducts, getProductDetail, addChoiceProduct, deleteChoiceProduct };
