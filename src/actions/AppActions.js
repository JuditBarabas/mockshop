export const SET_CATEGORY = "SET_CATEGORY";
export const SET_PRODUCT = "SET_PRODUCT";
export const NAVIGATE_TO_HOME_PAGE = "NAVIGATE_TO_HOME_PAGE";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const setProduct = (productId) => ({
    type: SET_PRODUCT,
    payload: productId
})

export const navigateToHome = () => ({
    type: NAVIGATE_TO_HOME_PAGE
})

export const searchProduct = (searchTerm) => ({
    type: SEARCH_PRODUCT,
    payload: searchTerm
})