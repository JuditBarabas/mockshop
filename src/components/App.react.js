import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../actions/productsActions";
import CategoriesList from "./CategoriesList.react";
import ProductsInCategory from "./productsInCategory";

function App(props) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.productsInCategory.selectedCategory);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <div>
      { selectedCategory ? 
        <ProductsInCategory selectedCategory={selectedCategory}/> :
        <CategoriesList />
      }
    </div>
  );
}

export default App;
