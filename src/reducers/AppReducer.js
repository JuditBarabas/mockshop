function AppReducer(state = {}, action) {
    switch (action.type) {
        case "GET_CATEGORY_PRODUCTS":
            return {
                ...state,
                selectedCategory: action.payload
            };
        default:
            return state
    }
}

export default AppReducer