export const SET_CATEGORY = "SET_CATEGORY";
export const SET_PRODUCT = "SET_PRODUCT";

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const setProduct = (productsByIdObj) => ({
    type: SET_PRODUCT,
    payload: productsByIdObj
})
