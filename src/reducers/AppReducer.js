import { SET_CATEGORY } from "../actions/AppActions";

function AppReducer(state = {}, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        default:
            return state
    }
}

export default AppReducer