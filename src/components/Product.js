import React from "react";
import { useSelector } from "react-redux";

function Product() {
  const productId = useSelector(state => state.productsInCategory.selectedProductID);
  const productsObj = useSelector(state => state.products.productsByID);

  return <h1>{productsObj[productId].title}</h1>
}

export default Product