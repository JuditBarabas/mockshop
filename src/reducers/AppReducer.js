import { SET_CATEGORY } from "../actions/appActions";
import { SET_PRODUCT } from "../actions/appActions";

const initialState = {
    selectedCategory: null,
    activePage: "HOME",
    selectedProductID: null
};

function AppReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
                activePage: "CATEGORY"
            };
        case SET_PRODUCT:
            return {
                ...state,
                selectedProductID: action.payload,
                activePage: "PRODUCT"
            };
        default:
            return state
    }
}

export default AppReducer