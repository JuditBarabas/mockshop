export const POPULATE_PRODUCTS = "POPULATE_PRODUCTS";

function populateProducts(products, dispatch) {
  dispatch({
    type: POPULATE_PRODUCTS,
    payload: products
  });
}

function getProducts(dispatch) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      populateProducts(products, dispatch);
    });
}

export default getProducts;
