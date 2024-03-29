import { SET_CATEGORY } from "../actions/appActions";
import { SET_PRODUCT } from "../actions/appActions";
import { NAVIGATE_TO_HOME_PAGE } from "../actions/appActions";
import { SEARCH_PRODUCT } from "../actions/appActions";

const initialState = {
    selectedCategory: null,
    activePage: "HOME",
    selectedProductID: null,
    searchInput: ''
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
        case NAVIGATE_TO_HOME_PAGE:
            return {
                ...state,
                activePage: "HOME"
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchInput: action.payload
            };
        default:
            return state
    }
}

export default AppReducer