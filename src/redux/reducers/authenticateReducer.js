let initialState = {
    email: "",
    password: "",
    authenticate: false,
};

function authenticateReducer(state=initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_SUCCESS": {
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                authenticate: true,
            };
        }
        case "LOGOUT_SUCCESS": {
            return {
                ...state,
                authenticate: false,
            };
        }
        default: {
            return { ...state };
        }
    }
}

export default authenticateReducer;