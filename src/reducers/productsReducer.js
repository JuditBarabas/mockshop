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
        productsByID: null
      };
    default:
      return state;
  }
}

export default productsReducer;
