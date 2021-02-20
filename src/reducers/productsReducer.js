import { POPULATE_PRODUCTS } from "../actions/productsActions";

function groupByCategory(productsArr) {
  const categoryObj = {};
  productsArr.forEach((obj) => {
    const { category } = obj;
    if (category in categoryObj) {
      categoryObj[category].push(obj);
    } else {
      categoryObj[category] = [obj];
    }
  });
  return categoryObj;
}

function groupById(productsArr) {
  const productsByIdObj= {};
  productsArr.forEach((obj) => {
    const { id } = obj;
    productsByIdObj[id] = obj;
  });
  return productsByIdObj;
}

const initialState = {
  orderedByCategory: null,
  productsByID: null
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_PRODUCTS:
      return {
        ...state,
        orderedByCategory: groupByCategory(action.payload),
        productsByID: groupById(action.payload)
      };
    default:
      return state;
  }
}

export default productsReducer;
